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

## Schritt 2: Synchronisationstest durchführen

Der klassische Synchronisationstest ist vor allem für **EWS-basierte** Modi hilfreich.

**Pfad:** `Personen` → betroffene Person → `Ansicht` → Tab **Synchronisationstest**

{{< imgproc sync-test Resize "1024x" >}}{{< /imgproc >}}

### Ergebnis interpretieren

| Ergebnis | Bedeutung | Nächster Schritt |
|----------|-----------|-----------------|
| Alle Tests grün | Grundverbindung funktioniert | Weiter mit Schritt 3 |
| Kein Test grün | Grundsätzliches Verbindungsproblem | Worker / Dienste prüfen und Logs auswerten |
| Nur die ersten zwei Tests grün | typischerweise EWS-Subscription-Problem | [Push Subscription]({{< relref "Betrieb/Synchronisation/PushSubscriptions/_index.md" >}}) prüfen |

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

## Schritt 6: Betroffene Buchungen finden

Unter `Listen` → `Buchungen` können Buchungen mit Synchronisationsproblemen gefiltert werden:

{{< imgproc buchungen_mit_sync_problemen Resize "200x" >}}{{< /imgproc >}}

| Filter | Bedeutung |
|--------|-----------|
| **Buchungen mit Synchronisationsproblemen** | Einzelbuchungen, bei denen die Sync fehlgeschlagen ist |
| **Serienbuchungen mit Synchronisationsproblemen** | Serien, bei denen die Sync fehlgeschlagen ist |
| **Buchungen mit fehlender Back-Synchronisation** | über Add-in erstellte Buchungen, die ROOMS nicht mehr in Exchange finden konnte |

**Empfehlung:** Buchungen mit Synchronisationsproblemen am besten annullieren und neu erstellen, wenn die Ursache nicht unmittelbar behoben werden kann.

## Konfliktverhalten (Rollback vs. Cancel)

Das Verhalten bei Synchronisationskonflikten wird pro Person über die Einstellung **SyncConflictBehaviour** gesteuert:

{{< bootstrap-table "table table-striped" >}}
| Modus | Verhalten | Versuche |
|-------|-----------|----------|
| **Rollback** (Standard) | Der Outlook-Termin wird auf den ROOMS-Stand zurückgesetzt. Erst bei wiederholtem Fehlschlag wird die Buchung als `SyncDisabled` markiert. | 5 (konfigurierbar) |
| **Cancel** | Die ROOMS-Buchung wird automatisch annulliert. Der Outlook-Termin verliert seine ROOMS-Verknüpfung. | 2 |
{{< /bootstrap-table >}}

In beiden Fällen erhält der Organisator eine Fehler-E-Mail mit den Details.

## Weiterführende Informationen

- [Synchronisation testen]({{< relref "Betrieb/Synchronisation/TestSync/_index.md" >}}) - klassischer Test
- [Synchronisationsdetails]({{< relref "Betrieb/Synchronisation/SyncDetails/_index.md" >}}) - welche Felder synchronisiert werden
- [Push Subscription]({{< relref "Betrieb/Synchronisation/PushSubscriptions/_index.md" >}}) - EWS-Webhooks
- [Microsoft 365 (Graph API)]({{< relref "Betrieb/Synchronisation/Microsoft365/_index.md" >}}) - Graph-spezifische Checks
