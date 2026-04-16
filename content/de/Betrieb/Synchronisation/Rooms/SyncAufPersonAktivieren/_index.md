---
title: "Personen konfigurieren"
linkTitle: "Personen konfigurieren"
weight: 3
description: "Synchronisation auf Personen aktivieren und die SyncModi korrekt einsetzen."
---

{{% alert title="Voraussetzung (häufige Fehlerquelle)" color="info" %}}
Die häufigsten Fehler auf Personenprofilen sind:

- veraltete SyncModi aus alten Dokumentationen übernommen
- `Microsoft365` gewählt, aber die primäre SMTP-Adresse fehlt oder ist falsch
- `.asmx`-URL bei `EWS1`, `EWS2` oder `O365` vergessen
- Annahme, dass `Microsoft365` ebenfalls eine `Sync-URL` braucht - das ist **nicht** so
{{% /alert %}}

Die Synchronisation wird pro Person aktiviert - idealerweise über einen Benutzerdatenimport.

**Pfad:** `Personen` → `Bearbeiten`

## SyncModi

{{< bootstrap-table "table table-striped" >}}
| SyncModus | Technologie | Typischer Einsatz | Sync-URL |
|-----------|-------------|-------------------|----------|
| `EWS1` | EWS | Exchange On-Premises, Slot 1 | erforderlich |
| `EWS2` | EWS | Exchange On-Premises, Slot 2 | erforderlich |
| `O365` | EWS | Exchange Online, bestehendes / legacy Setup | erforderlich |
| `Microsoft365` | Graph API | Exchange Online, Graph-basiertes Setup | nicht relevant |
{{< /bootstrap-table >}}

## `Sync-URL`

- bei `EWS1`, `EWS2` und `O365` muss die URL auf die passende **EWS `.asmx`-Schnittstelle** zeigen
- bei `O365` ist das in der Regel:

```text
https://outlook.office365.com/EWS/Exchange.asmx
```

- bei `Microsoft365` wird **keine** `Sync-URL` verwendet

## Zusätzliche Felder / Einstellungen

Unter `Personen` → `Bearbeiten` → `Notifikationen` aktivieren Sie bei Bedarf **Outlook Sync** für die gewünschten Ressourcentypen.

### Buchungen beim Anpassen der Synchronisationseinstellungen neu abgleichen

Kann aktiviert werden, wenn Exchange-Termine auf einen neuen Exchange-Server migriert wurden und sich dabei die Termin-IDs geändert haben.

Bitte in solchen Fällen vorgängig den Support kontaktieren.

### Eigene Buchungen mit Kalender synchronisieren

Wenn diese Einstellung aktiviert ist, ist die Checkbox zur Synchronisation bei neuen Buchungen standardmässig aktiviert.

### Mail bei Synchronisationsfehler

Diese Einstellung sollte in der Regel aktiviert werden, damit Benutzer über Probleme mit der Synchronisation informiert werden.

## UX bei `Microsoft365`

### `AppOnly`

- Benutzer müssen nichts verbinden
- es gibt keinen Connect-/Disconnect-Flow
- nach dem Setzen von `SyncModus = Microsoft365` startet die Provisionierung im Hintergrund

### `Delegated`

- Benutzer müssen den Kalender einmalig verbinden
- ROOMS kann den Consent-Dialog beim Login oder nach dem Speichern der Person automatisch auslösen
- solange kein Consent erteilt wurde, startet für diese Person kein Graph-Sync

Weitere Details dazu: [Microsoft 365 (Graph API)]({{< relref "Betrieb/Synchronisation/Microsoft365/_index.md" >}})
