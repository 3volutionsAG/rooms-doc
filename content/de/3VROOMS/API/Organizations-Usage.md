---
title: "Organisationen über die API verwalten"
linkTitle: "Organisationen"
weight: 25
description: 'Organisationen und Adressen verwalten sowie Änderungen für Integrationen abfragen'
---

Mit der Organisations-API können Integrationen interne und externe Firmen lesen, erstellen, ändern und löschen. Sie liefert auch Organisationen ohne Kontaktpersonen. Bestehende ROOMS-IDs und Zuordnungen bleiben erhalten; es werden keine separaten Firmenstammdaten aufgebaut.

{{% alert title="Kommende Version" color="info" %}}
Diese Anleitung beschreibt eine kommende ROOMS-Version. Prüfen Sie vor der Nutzung, ob die Swagger-Dokumentation Ihrer **RoomsPro API** die Gruppe `Organizations` enthält. Die hier beschriebenen Pfade gehören zur RoomsPro API (`/api/v1`), nicht zur Legacy API (`/{mandator}/api/v1.0`). Für die Bereitstellung ist auch die [Prüfung externer Firmen-IDs vor der Datenbankmigration]({{< relref "Betrieb/Installation/Datenbankmigrationen/_index.md#externe-firmen-ids-vor-der-migration-prüfen" >}}) relevant.
{{% /alert %}}

## Voraussetzung

- Verwenden Sie die Basisadresse der RoomsPro API Ihrer Zielumgebung. Ein konfiguriertes URL-Präfix muss den unten gezeigten Pfaden vorangestellt werden.
- Die Aufrufe benötigen ein Bearer-Zugriffstoken mit dem Scope `rooms_api`.
- Für benutzerbezogene Aufrufe gelten die globalen Rechte zum Administrieren interner Firmen (`FirmaInternAdmin`, ID `3`) beziehungsweise externer Firmen (`FirmaExternAdmin`, ID `22`). Diese Rechte sind auch zum Lesen erforderlich. Die Liste enthält nur Organisationstypen, die der Benutzer administrieren darf.
- Ein Wechsel zwischen interner und externer Organisation benötigt beide Rechte.
- Länder, die Sie in Adressen über `countryId` referenzieren, müssen bereits in ROOMS vorhanden sein.

Die vollständigen Felder, Datentypen und Filtermöglichkeiten finden Sie in der Swagger-Dokumentation der Zielumgebung. Diese Anleitung beschreibt die fachlichen Auswirkungen und den sicheren Ablauf.

## Organisation lesen oder erstellen

| Aufruf | Ergebnis |
|---|---|
| `GET /api/v1/organizations` | Paginierte Liste mit Organisationsadressen, auch ohne Kontaktpersonen. |
| `GET /api/v1/organizations/{id}` | Einzelne Organisation mit Adressen und `ETag`. Private Personenadressen sind nicht enthalten. |
| `POST /api/v1/organizations` | Neue Organisation; bei Erfolg `201 Created`, erzeugte IDs, `Location` und `ETag`. |

Beim Erstellen sind `name` und `isExternal` erforderlich. Ohne `isVerified` gilt `true`. Adressen sind optional; übermitteln Sie für neue Adressen keine `id`. Organisation und Adressen werden gemeinsam gespeichert oder bei einem Fehler nicht angelegt.

`externalId` ist eine optionale Kennung für die Zuordnung zu einem Fremdsystem. Eine nicht leere Kennung muss organisationsübergreifend eindeutig sein. Sie kann später gesetzt, korrigiert oder gelöscht werden. Leere oder nur aus Leerraum bestehende Werte werden als `null` gespeichert. Verwenden Sie die ROOMS-`id` als stabilen Schlüssel, auch wenn sich `externalId` ändert.

## Organisation und Adressen ändern

`PUT` und `PATCH` verwenden `/api/v1/organizations/{id}`. Beide ändern nur bestehende Organisationen; bei unbekannter ID wird keine Organisation angelegt.

| Inhalt | `PUT` – vollständiger Ersatz | `PATCH` – gezielte Änderung |
|---|---|---|
| `name`, `isExternal`, `isVerified` | Alle erforderlich. | Weggelassene Felder bleiben unverändert. Übermitteltes `null` ist unzulässig. |
| `department`, `externalId`, `mail` | Weggelassene Werte werden gelöscht. | Weglassen erhält den Wert; `null` löscht ihn. |
| `addresses` | Vollständige Liste erforderlich. | Weglassen erhält die bisherigen Adressen. Eine übermittelte Liste ersetzt sie vollständig. |

{{% alert title="Adressliste wird ersetzt" color="warning" %}}
Auch bei `PATCH` wird eine übermittelte Adressliste **nicht ergänzt**, sondern ersetzt. Lesen Sie zuerst die Organisation und übernehmen Sie alle Adressen, die erhalten bleiben sollen. `addresses: []` entfernt alle Organisationsadressen; `addresses: null` ist unzulässig.
{{% /alert %}}

Für die übermittelte Adressliste gilt:

- Mit einer bestehenden `id` bleibt die Identität dieser Adresse erhalten.
- Ohne `id` wird eine neue Adresse angelegt.
- Bestehende Adressen, die in der Liste fehlen, werden entfernt.
- Doppelte IDs oder IDs, die nicht zu den Organisationsadressen gehören, werden abgewiesen.
- Höchstens eine Adresse darf `isDefault: true` haben. ROOMS bestimmt keine Standardadresse automatisch.

Organisationsfelder und Adressen werden gemeinsam gespeichert. Ein Validierungsfehler führt nicht zu einer Teiländerung.

### Gleichzeitige Änderungen absichern

1. Lesen Sie die Organisation mit `GET /api/v1/organizations/{id}`.
2. Übernehmen Sie den gelieferten `ETag` unverändert, einschliesslich der Anführungszeichen, in den Request-Header `If-Match`.
3. Senden Sie die gewünschten Änderungen. Bei Erfolg liefert die Antwort den aktuellen `ETag`.

`If-Match` ist für jedes `PUT` und für jedes `PATCH` mit `addresses` Pflicht. Bei anderen `PATCH`-Aufrufen ist der Header optional; verwenden Sie ihn auch dort, um zwischenzeitliche Änderungen zu erkennen. Änderungen an Organisationsadressen verändern ebenfalls den `ETag`, auch wenn sie über die bisherige Oberfläche erfolgen.

Bei `412 Precondition Failed` lesen Sie die Organisation erneut, gleichen Ihre geplante Änderung mit dem aktuellen Stand ab und senden erst dann einen neuen Request mit dem aktuellen `ETag`. Wiederholen Sie den alten Request nicht ungeprüft. `428 Precondition Required` bedeutet, dass der erforderliche `If-Match`-Header fehlt.

## Änderungen regelmässig abfragen

Verwenden Sie `GET /api/v1/organizations` mit `changedSince` und optional `changedBefore`:

- `changedSince` schliesst den angegebenen Zeitpunkt ein.
- `changedBefore` schliesst den angegebenen Zeitpunkt aus und muss nach `changedSince` liegen.
- Zeitangaben werden nach UTC normalisiert. Senden Sie einen eindeutigen Zeitbezug, beispielsweise mit `Z` für UTC.
- Massgeblich ist der spätere Zeitpunkt von Erstellung und letzter Änderung der Organisation. Ändert sich eine Organisation nach dem Ende eines Zeitfensters erneut, gehört ihr aktueller Stand nicht mehr zu diesem älteren Fenster.

Die Abfrage berücksichtigt Erstellung, Organisationsfelder, Verifizierungsstatus sowie das Hinzufügen, Ändern und Löschen von Organisationsadressen. Das gilt auch für Adressänderungen über die bisherige Oberfläche und für das Löschen der letzten Adresse.

Die Liste unterstützt `page` ab `1` und `limit` von `1` bis `1000`. Lesen Sie alle Seiten des Ergebnisses.

{{% alert title="Kein Änderungsjournal" color="warning" %}}
Die API liefert den **aktuellen Zustand**, keinen historischen Stand und keine Liste gelöschter Organisationen. Während des Seitenabrufs können Änderungen Datensätze zwischen Seiten verschieben. Ein ausschliesslicher Filter auf verifizierte Organisationen meldet nicht, wenn einer Organisation die Verifizierung entzogen wird.
{{% /alert %}}

Planen Sie die Synchronisation deshalb mit überlappenden Zeitfenstern, gleichen Sie mehrfach gelieferte Einträge über die ROOMS-`id` ab und wiederholen Sie fehlgeschlagene Verarbeitungen. Führen Sie zusätzlich regelmässig einen vollständigen Bestandsabgleich innerhalb der berechtigten Organisationstypen durch. Leiten Sie eine Löschung nicht allein daraus ab, dass eine Organisation in einem Änderungsfenster fehlt.

## Organisation löschen

`DELETE /api/v1/organizations/{id}` entfernt die Organisation. `If-Match` ist optional und wird geprüft, wenn Sie ihn mitsenden. Verwenden Sie den Header auch beim Löschen, wenn Sie sicherstellen müssen, dass sich die Organisation seit dem Lesen nicht geändert hat.

{{% alert title="Folgen des Löschens" color="warning" %}}
Mit der Organisation werden die zugehörigen Adressen und die Historie ihrer Personenzuordnungen gelöscht. Die Personen selbst bleiben erhalten. Prüfen Sie diese Folgen vor dem Aufruf; ein späterer Änderungsabruf liefert keine Löschmeldung für die entfernte Organisation.
{{% /alert %}}

Zuordnungen zu Kostenträgern, Rabatten, Ressourcen, Türzugängen oder Tarifen verhindern das Löschen. Klären Sie diese Abhängigkeiten fachlich, statt sie ungeprüft zu entfernen. Bei Erfolg antwortet die API mit `204 No Content`.

## Fehler behandeln

| Status | Bedeutung und nächster Schritt |
|---|---|
| `400 Bad Request` | Ungültige Felder, Adressen, Zeitgrenzen oder ein ungültiger `If-Match`-Header. Fehlerdetails prüfen und Request korrigieren. |
| `401 Unauthorized` / `403 Forbidden` | Zugriffstoken, Scope und erforderliche Firmenrechte prüfen. |
| `404 Not Found` | Die Organisation existiert nicht. ID und lokalen Bestand abgleichen. |
| `409 Conflict` | Beim Speichern ist die externe ID bereits vergeben; beim Löschen bestehen noch blockierende Verknüpfungen. Fehlerdetails prüfen. |
| `412 Precondition Failed` | Der übermittelte `ETag` ist veraltet. Neu lesen und Änderungen abgleichen. |
| `428 Precondition Required` | Der für den Änderungsaufruf erforderliche `If-Match`-Header fehlt. |
