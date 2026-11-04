---
title: "Problembehandlung"
linkTitle: "Problembehandlung"
weight: 50
description: "Schritt-für-Schritt-Anleitung bei Synchronisationsproblemen."
---

{{% alert title="Voraussetzung (häufige Fehlerquelle)" color="info" %}}
Fehlersuche beginnt immer mit der Frage: **Welcher SyncModus ist betroffen?**

- `EWS1`, `EWS2`, `O365` → EWS-basierter Pfad
- `Microsoft365` → Graph-basierter Pfad

Die Symptome sind oft ähnlich, die Ursachen und Prüfpunkte aber unterschiedlich.
{{% /alert %}}

Wenn Buchungen nicht zwischen ROOMS und Outlook / Exchange synchronisiert werden, hilft diese Anleitung bei der Fehlersuche.

## Schritt 1: Grunddaten prüfen

Prüfen Sie zuerst:

- stimmt die **E-Mail-Adresse** der Person / Ressource mit der **primären SMTP-Adresse** überein?
- ist der richtige **SyncModus** gesetzt?
- ist **Sync deaktiviert** nicht versehentlich aktiviert?
- bei `EWS1`, `EWS2`, `O365`: stimmt die **Sync-URL**?
- bei `Microsoft365`: ist die Person ggf. noch **nicht verbunden** (`Delegated`)?

### E-Mail-Alias und automatische Adresskorrektur

Exchange meldet Organisatoren, Teilnehmer und Räume mit der **primären SMTP-Adresse** ihres Postfachs. Ein Alias ist eine zusätzliche Adresse desselben Postfachs. Steht in ROOMS nur der Alias, kann die Synchronisation eine Person oder einen Raum nicht korrekt zuordnen. Dadurch kann ROOMS eine Raumbuchung annullieren, obwohl der Raum weiterhin im Outlook-Termin eingeladen ist.

ROOMS prüft die Adresse bei aktiven Personen und Ressourcen mit Exchange-Synchronisation (`EWS1`, `EWS2`, `O365`, `Microsoft365`):

- **Beim Speichern** einer Person oder Ressource kann ROOMS einen Alias durch die primäre Adresse ersetzen. Bei Personen darf die Synchronisation nicht deaktiviert sein.
- **Nach dem Verbinden des Microsoft-365-Kalenders** mit Benutzerzustimmung (`Delegated`) wird die Adresse der Person ebenfalls geprüft. Ohne den erforderlichen Postfachzugriff ist keine Korrektur möglich.
- **Wenn der Raum im Outlook-Termin zu fehlen scheint**, prüft die Synchronisation vor der Annullierung die Adresse des Raums. Das gilt auch beim Entfernen des Raums aus einem einzelnen Serientermin. Ändert sich die gespeicherte Adresse, wird die Buchung mit der korrigierten Adresse erneut geprüft. Die Adressprüfung ersetzt nicht die Prüfung, ob der Raum tatsächlich noch eingeladen ist.

Bei einer Korrektur erhält die betroffene Person eine Warnmeldung in ROOMS mit der bisherigen und der neuen Adresse sowie der Aufforderung, den Administrator zu kontaktieren. Wer eine andere Person oder eine Ressource gespeichert hat, erhält eine Informationsmeldung. Eine durch die Raum-Synchronisation ausgelöste Korrektur wird im Log festgehalten, ohne eine Benutzerbenachrichtigung auszulösen.

**Was muss der Administrator prüfen?**

- Vergleichen Sie die gespeicherte Adresse mit der primären SMTP-Adresse im Exchange-Postfach.
- Prüfen Sie auch den Benutzerdatenimport und das Verzeichnis. Diese dürfen bei einem späteren Import nicht erneut den Alias in ROOMS eintragen.
- Bleibt der Alias nach dem Speichern bestehen, prüfen Sie die Logs: ROOMS korrigiert die Adresse nicht, wenn Exchange das Postfach nicht auflösen kann, die primäre Adresse bereits bei einer anderen aktiven Person oder Ressource hinterlegt ist oder das Postfach unter der primären Adresse mit den konfigurierten Synchronisations-Zugangsdaten nicht erreichbar ist. Bei Graph bleibt der Alias auch bestehen, wenn die Domain der primären Adresse andere App-Zugangsdaten verwendet. Stimmen Sie einen solchen Zugangsdatenwechsel mit dem Support ab, statt nur die E-Mail-Adresse zu ändern.

{{% alert title="Grenzen der automatischen Korrektur" color="warning" %}}
Eine erfolgreich gespeicherte Person oder Ressource bedeutet nicht, dass die Adressprüfung erfolgreich war. Personen, die nur über Outlook buchen, werden nicht allein dadurch korrigiert. Eine Adresskorrektur stellt eine fehlende Raumbuchung **nicht automatisch wieder her**. Prüfen Sie betroffene Termine separat mit dem Support. Wird der Raum tatsächlich aus dem Outlook-Termin entfernt, gelten die unten beschriebenen [Regeln zur Raumentfernung](#raum-aus-einem-outlook-termin-entfernt).
{{% /alert %}}

## Schritt 2: Synchronisationstest durchführen

Der klassische Synchronisationstest ist vor allem für **EWS-basierte** Modi hilfreich.

**Pfad:** `Personen` → betroffene Person → `Ansicht` → Tab **Synchronisationstest**


### Ergebnis interpretieren

{{< bootstrap-table "table table-striped" >}}
| Ergebnis | Bedeutung | Nächster Schritt |
|----------|-----------|-----------------|
| Alle Tests grün | Grundverbindung funktioniert | Weiter mit Schritt 3 |
| Kein Test grün | Grundsätzliches Verbindungsproblem | Worker / Dienste prüfen und Logs auswerten |
| Nur die ersten zwei Tests grün | typischerweise EWS-Subscription-Problem | [Push Subscription]({{< relref "Betrieb/Synchronisation/PushSubscriptions/_index.md" >}}) prüfen |
{{< /bootstrap-table >}}

{{% alert title="Microsoft365 / Graph" color="info" %}}
Bei `Microsoft365` reicht der klassische Synchronisationstest allein nicht aus. Prüfen Sie zusätzlich:

- Consent-Status im Personenprofil (`Delegated`)
- Graph-Rechte / Admin-Consent
- Hintergrundverarbeitung / `RoomsPro.Worker`
- Erreichbarkeit von `/api/webhooks/graph` und `/api/webhooks/graph/lifecycle`
{{% /alert %}}

## Schritt 3: Ereignisanzeige und Logs prüfen

**Pfad:** `Einstellungen` → `System` → `Ereignisanzeige`

Prüfen Sie:

- `[BackSync]`
- `[CollaborationService]`
- Einträge mit `Graph`
- Einträge zu Hintergrundjobs wie `GraphSubscriptionProvisioning`, `GraphSubscriptionRenewal`, `DelegatedTokenRefresh`

Die Meldungen geben meist direkt Aufschluss über:

- Berechtigungsprobleme
- Webhook-Probleme
- ungültige Mailadressen
- Konflikte bei BackSync / Collaboration

## Schritt 4: Hintergrundverarbeitung bzw. Dienste prüfen

### Aktuelle Setups

- prüfen, ob **`RoomsPro.Worker`** läuft
- Dashboard für Hintergrundjobs unter **`/tickerq`** öffnen
- prüfen, ob die relevanten Jobs vorhanden und nicht dauerhaft fehlerhaft sind

### Legacy Setups

**Pfad:** `Einstellungen` → `System` → `About`

Wenn die klassischen Synchronisationsdienste dort nicht laufen, muss der entsprechende Windows-Dienst geprüft bzw. neu gestartet werden.

## Schritt 5: Graph-spezifische Prüfungen

Nur relevant für `Microsoft365`:

### `Delegated`

- Personenprofil öffnen
- Consent-Status prüfen:
  - `None` / `Pending` → Benutzer noch nicht vollständig verbunden
  - `Granted` → Consent ist vorhanden
  - `Revoked` → Verbindung wurde entzogen

Wenn `Delegated` aktiv ist und der Status nicht `Granted` ist, startet für diese Person kein Graph-Sync.

### `AppOnly`

- Entra-App und Berechtigungen prüfen
- Admin-Consent prüfen
- falls Mailboxzugriff eingeschränkt wurde: Exchange Application RBAC / Application Access Policy prüfen

### Webhooks

Prüfen Sie, ob folgende Endpunkte extern erreichbar sind:

- `/api/webhooks/graph`
- `/api/webhooks/graph/lifecycle`

## Schritt 6: Betroffene Buchungen und Sync-Differenzen finden

Unter `Listen` → `Buchungen` können Buchungen mit Synchronisationsproblemen gefiltert werden:

{{< imgproc buchungen_mit_sync_problemen Resize "279x" >}}{{< /imgproc >}}

{{< bootstrap-table "table table-striped" >}}
| Filter | Bedeutung |
|--------|-----------|
| **Buchungen mit Synchronisationsproblemen** | Einzelbuchungen, bei denen die Sync fehlgeschlagen ist |
| **Serienbuchungen mit Synchronisationsproblemen** | Serien, bei denen die Sync fehlgeschlagen ist |
| **Buchungen mit fehlender Back-Synchronisation** | über Add-in erstellte Buchungen, die ROOMS nicht mehr in Exchange finden konnte |
{{< /bootstrap-table >}}

**Empfehlung:** Buchungen mit Synchronisationsproblemen am besten annullieren und neu erstellen, wenn die Ursache nicht unmittelbar behoben werden kann.

Wenn ROOMS und Exchange unterschiedliche fachliche Daten für dieselbe synchronisierte Buchung anzeigen, verwenden Sie zusätzlich die Ansicht [Sync-Differenzen]({{< relref "3VROOMS/Einstellungen/System/SyncDifferenzen/_index.md" >}}). Dort können Abweichungen geprüft und gezielt mit **Exchange verwenden**, **ROOMS verwenden** oder **Ignorieren** aufgelöst werden.

## Konfliktverhalten (Rollback vs. Cancel)

Das Verhalten bei Synchronisationskonflikten wird pro Person über die Einstellung **SyncConflictBehaviour** gesteuert:

{{< bootstrap-table "table table-striped" >}}
| Modus | Verhalten | Versuche |
|-------|-----------|----------|
| **Rollback** (Standard) | Der Outlook-Termin wird auf den ROOMS-Stand zurückgesetzt. Erst bei wiederholtem Fehlschlag wird die Buchung als `SyncDisabled` markiert. | 5 (konfigurierbar) |
| **Cancel** | Die betroffene Raumbuchung wird annulliert. Bei einer Ablehnung eines einzelnen ROOMS-Serientermins bleibt dessen Serienverknüpfung erhalten. Bei Ablehnung eines ganzen Termins oder einer ganzen Serie endet die Synchronisation, wenn keine künftige Raumbuchung verbleibt. | 2 |
{{< /bootstrap-table >}}

In beiden Fällen erhält der Organisator eine Fehler-E-Mail mit den Details.

### Serien: Raumbuchung und Besprechung unterscheiden

Bei einer Serie ist eine annullierte Raumbuchung nicht gleichbedeutend mit einer gelöschten Besprechung:

- **Cancel:** ROOMS annulliert die betroffenen Raumbuchungen und entfernt die jeweilige Raumzuordnung aus Outlook. Die Organisatortermine und eingeladenen Personen bleiben erhalten. Die übrigen Termine behalten ihre Raumbuchungen. Eine spätere Änderung eines anderen Serientermins löscht die erhaltenen Termine ohne Raum nicht.
- **Rollback:** ROOMS setzt die abgelehnte Änderung auf die ursprünglichen Zeiten und Raumzuordnungen zurück und übermittelt die Rücksetzung auch an die eingeladenen Räume. Die Serie bleibt erhalten. Auch bei einer Serie mit einem Termin in einem anderen Raum bleiben die gewöhnlichen Termine gewöhnliche Serientermine. Der Termin im anderen Raum bleibt eine Ausnahme. Unveränderte Termine erhalten durch die Rücksetzung keine eigenen Einladungen.

Prüfen Sie nach abgeschlossener Synchronisation die betroffenen Termine in ROOMS, im Organisatorkalender und in der Exchange-Ressourcenbelegung. Eine Raumangabe oder angenommene Antwort beim Organisator allein bestätigt nicht für jeden Serientermin eine vorhandene Raumkopie. Insbesondere nach Outlook-Änderungen, die vorhandene Serienausnahmen zurücksetzen, können fehlende Raumkopien weiterhin auftreten. Bei einer Abweichung prüfen Sie [Sync-Differenzen]({{< relref "3VROOMS/Einstellungen/System/SyncDifferenzen/_index.md" >}}) und ziehen Sie den Support bei. Bereits beschädigte Serien werden nicht automatisch repariert.

Nach **Cancel** müssen Sie die Zeit anpassen oder einen anderen Raum wählen und die Raumbuchung erneut prüfen und abschliessen. Ein erhaltener Outlook-Termin ohne Raum ist keine bestätigte Raumbuchung. Warten Sie vor weiteren Serienänderungen, bis beide Systeme übereinstimmen.

### Besprechungsserie in Outlook löschen

Löscht die organisierende Person die ganze Besprechungsserie in Outlook, verarbeitet ROOMS die Löschung auch dann, wenn noch eine Rücksetzung der Serie aussteht, und annulliert die zugehörigen Buchungen. Prüfen Sie nach der Synchronisation, dass die künftigen Raumbuchungen in ROOMS annulliert und die Räume in Exchange freigegeben sind. Das Löschen der Besprechungsserie ist nicht dasselbe wie das nachfolgend beschriebene Entfernen eines Raums.

Erscheint eine gelöschte Serie wieder oder bleiben Raumbuchungen bestehen, ziehen Sie den Support bei, statt die Serie wiederholt zu löschen oder neu anzulegen.

### Raum aus einem Outlook-Termin entfernt

Entfernen Sie den Raum direkt in Outlook, annulliert ROOMS die betroffene Raumbuchung. Eine Ablehnung des Raums im Konfliktmodus **Cancel** folgt denselben Regeln. Entscheidend ist, ob die Raumentfernung oder Ablehnung einen einzelnen Termin einer ROOMS-Serie oder den ganzen Termin beziehungsweise die ganze Serie betrifft:

- **Einzelner Termin einer ROOMS-Serie:** Die Raumbuchung wird annulliert. Der Outlook-Termin bleibt als Termin ohne Raum mit der Serie verknüpft, damit Änderungen an der ganzen Serie auch diesen Termin erreichen. Das gilt auch dann, wenn die übrigen Termine bereits keinen Raum mehr haben.
- **Einzeltermin oder unabhängig gebuchter Outlook-Serientermin:** Die Raumbuchung wird annulliert und die Synchronisation endet. Der Outlook-Termin bleibt bestehen und verliert seine ROOMS-Kategorie und -Verknüpfung.
- **Ganze Serie ohne verbleibende künftige Raumbuchung:** ROOMS annulliert die künftigen Buchungen und beendet die Synchronisation der Serie. Bereits vergangene Buchungen bleiben erhalten, halten die Synchronisation aber nicht aufrecht. Die Outlook-Serie bleibt bestehen und verliert ihre ROOMS-Kategorie und -Verknüpfung. Spätere Änderungen ohne erneute Raumbuchung werden nur noch in Outlook geführt.
- **Ganze Serie mit verbleibender künftiger Raumbuchung:** Beispielsweise bleibt eine von einem anderen Raum angenommene Ausnahme gebucht. Die übrigen Termine bleiben ohne Raum mit der Serie verknüpft.

Im quickROOMS-Add-In folgt **Raum entfernen** bei einem einzelnen Serientermin der Einzeltermin-Regel. **Raum entfernen (Serie)** hebt dagegen alle künftigen Raumbuchungen der ROOMS-Serie auf, einschliesslich Buchungen in anderen Räumen, und beendet die Serienverknüpfung. Prüfen Sie deshalb vor der Bestätigung, ob Sie die ganze Serie oder nur einen Termin freigeben möchten. Die Besprechungstermine bleiben in Outlook.

Die bewusste Raumentfernung ist kein Konflikt, den **Rollback** rückgängig macht. Warten Sie nach dem Senden der Outlook-Änderung auf die Synchronisation und prüfen Sie die Raumbuchung und die Exchange-Ressourcenbelegung. Wenn Sie einen Raum erneut hinzufügen, muss die Raumbuchung erneut erfolgreich abgeschlossen werden. Nach beendeter Synchronisation entstehen neue ROOMS-Buchungen. Die annullierten Buchungen bleiben annulliert.

{{% alert title="Einzelne Termindetails bei Microsoft365 prüfen" color="warning" %}}
Beim Beenden der Synchronisation einer ganzen Serie über `Microsoft365` (Graph) können abweichende Titel oder Teilnehmende einzelner Termine verloren gehen. Halten Sie solche Abweichungen vor der Raumentfernung fest und prüfen Sie die Termine danach im Organisatorkalender. Lassen Sie ungewollte Änderungen durch den Support prüfen.
{{% /alert %}}

### Termin ohne Raumbuchung öffnen oder erneut buchen

Ein mit der Serie verknüpfter Termin ohne Raum ist keine eigenständig bearbeitbare Buchung. Er erscheint nicht als Raumbuchung in Buchungslisten oder im Kalender. Beim direkten Öffnen in ROOMS erscheint **Für diesen Termin besteht keine Raumbuchung mehr.** ROOMS öffnet einen gebuchten Termin der Serie oder führt zurück zur Suche, wenn keiner vorhanden ist. Prüfen Sie deshalb Datum und Raum der geöffneten Buchung, bevor Sie sie bearbeiten. Termine ausserhalb des Raumbuchungsfensters können weiterhin als geplante Termine in den Serieninformationen erscheinen.

Wie Sie einen erhaltenen Serientermin erneut buchen, beschreibt [Raum für einen erhaltenen Outlook-Termin erneut buchen]({{< relref "3VROOMS-Module/3VROOMS_AddIn_O365Outlook/_index.md#raum-für-einen-erhaltenen-outlook-termin-erneut-buchen" >}}).

### No Show bei einem synchronisierten Serientermin

Mit dem Recht **Darf Reservationen als No Show kennzeichnen** können Sie eine nicht genutzte Buchung als **No Show** markieren. ROOMS annulliert die Raumbuchung und behält die No-Show-Markierung für die Auswertung. Bei einem mit Outlook verknüpften Serientermin bleibt der Besprechungstermin ohne Raum in der Serie erhalten. Die übrigen Raumbuchungen bleiben bestehen.

ROOMS veranlasst die Freigabe des Raums in Outlook, sofern die Synchronisation des Termins aktiv und die Serie mit Outlook verknüpft ist. Zählt ein bereits gestarteter Termin gemäss dem globalen Parameter **Laufende Buchungen gelten als vergangen** als vergangen und darf die organisierende Person vergangene Buchungen nicht bearbeiten, kann der Raum in Outlook weiterhin belegt bleiben. Prüfen Sie nach **No Show** auch die Exchange-Ressourcenbelegung und ziehen Sie bei einer Abweichung den Support bei. Die No-Show-Markierung allein bestätigt keine Freigabe in beiden Systemen.

Wenn die Synchronisation ihre Wiederholungen erfolglos beendet, bedeutet das nicht, dass die Systeme übereinstimmen. Prüfen Sie die Fehlermeldung, die Dienstprotokolle und die Buchungsfilter für Synchronisationsprobleme. Annullieren Sie nicht vorsorglich die gesamte Besprechungsserie, nur weil einzelne Raumbuchungen fehlen. Termine ohne Raum aufgrund des Buchungsfensters werden unter [Exchange-Buchungsrichtlinien]({{< relref "Betrieb/Synchronisation/ResourceSync/_index.md#serie-länger-als-das-raumbuchungsfenster" >}}) erklärt.

### Buchungen nach einer Teilung in Outlook prüfen

Nach einer Outlook-Änderung für einen Termin und alle folgenden Termine gehören die früheren und die abgetrennten Termine zu getrennten Serien. Prüfen Sie nach abgeschlossener Synchronisation beide Teile, die neuen Buchungen und die tatsächliche Raumbelegung. Angaben, die nur in ROOMS gespeichert sind, werden nicht in die neuen Buchungen kopiert. Beginnt die Teilung in der Vergangenheit, können vergangene Raumbuchungen je nach Recht der organisierenden Person in der ursprünglichen Serie bleiben.

Fehlt der neue Teil in ROOMS, prüfen Sie die Synchronisationsfehler, die Buchbarkeit der betroffenen Termine und die Raumantworten. Bei einem Raum ohne eigenen Exchange-Kalender kann ein nicht buchbarer Termin die Übernahme des ganzen neuen Teils verhindern; die Outlook-Termine bleiben dennoch bestehen. Lassen Sie fehlende oder doppelte Buchungen vom Support prüfen, statt die ganze Besprechungsserie vorsorglich zu löschen oder neu anzulegen. Die Regeln und Prüfhinweise stehen unter [Synchronisierte Serie in Outlook teilen]({{< relref "Betrieb/Synchronisation/ResourceSync/_index.md#synchronisierte-serie-in-outlook-teilen" >}}).

### Serienende wiederhergestellt, Raumantwort ausstehend

Entfernt die organisierende Person das Enddatum einer synchronisierten Serie in Outlook, schreibt ROOMS sein bestehendes Ende an alle Teilnehmenden zurück. Hat der Raum die Anfrage ohne Ende bereits abgelehnt, kann diese ältere Ablehnung noch sichtbar sein. ROOMS wartet dann auf eine neue Antwort des Raums zur wieder begrenzten Serie, bevor es den weiteren Abgleich ausführt. Die gültigen Raumbuchungen bleiben dabei bestehen.

Bleibt eine neue Antwort aus, kann die Synchronisation weiter ausstehen. Prüfen Sie das Ende im Organisatorkalender, die Antwort und Belegung des Raums sowie die Dienstprotokolle. Lassen Sie den Support die fehlende Antwort untersuchen; annullieren Sie die Serie nicht allein wegen dieses Wartezustands. Eine neue Ablehnung folgt weiterhin **Rollback** oder **Cancel**. Der vollständige Ablauf ist unter [Enddatum einer synchronisierten Serie in Outlook entfernen]({{< relref "Betrieb/Synchronisation/ResourceSync/_index.md#enddatum-einer-synchronisierten-serie-in-outlook-entfernen" >}}) beschrieben.

## Weiterführende Informationen

- [Synchronisation testen]({{< relref "Betrieb/Synchronisation/TestSync/_index.md" >}}) - klassischer Test
- [Synchronisationsdetails]({{< relref "Betrieb/Synchronisation/SyncDetails/_index.md" >}}) - welche Felder synchronisiert werden
- [Push Subscription]({{< relref "Betrieb/Synchronisation/PushSubscriptions/_index.md" >}}) - EWS-Webhooks
- [Microsoft 365 (Graph API)]({{< relref "Betrieb/Synchronisation/Microsoft365/_index.md" >}}) - Graph-spezifische Checks
