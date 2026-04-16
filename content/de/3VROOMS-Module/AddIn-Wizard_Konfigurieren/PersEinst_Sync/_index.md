---
title: "Synchronisation unter Persönliche Einstellungen"
linkTitle: "Synchronisation unter Persönliche Einstellungen"
weight: 300
description: "Aktivieren Sie die Synchronisation in den Persönlichen Einstellungen, um die Synchronisation zwischen Add-In bzw. Wizard und 3V ROOMS sicherzustellen."
---
{{% alert title="Hinweis" color="info" %}}
Das Beispiel auf dieser Seite zeigt primär die **klassische EWS-basierte O365-Konfiguration** des Outlook Add-ins / Wizards.

Wenn Ihre Umgebung bereits den Graph-basierten SyncModus **`Microsoft365`** verwendet, wählen Sie stattdessen:

- **Sync. Modus**: `Microsoft365`
- **Sync-URL / O365 URL**: **nicht erforderlich**

Bei `Delegated` muss der Benutzer den Kalender zusätzlich einmalig verbinden.
{{% /alert %}}

<p style="text-align: justify">Die Aktivierung erfolgt in zwei Schritten:</p>

- Synchronisation aktivieren
- Notifikationen aktivieren

### Synchronisation aktivieren

1. Klicken Sie in der Menüzeile auf **Einstellungen**.
2. Wählen Sie im Sidepanel **Persönliche Einstellungen**.
3. Setzen Sie im Reiter **Personen-Informationen** die passenden Parameter:

#### Variante A: klassische EWS-basierte O365-Umgebung

1. **Sync. Modus**: `O365`
2. **O365 Url**: `https://outlook.office365.com/EWS/Exchange.asmx`
3. **Buchungen beim Anpassen der Synchronisationseinstellungen neu abgleichen**: nicht aktivieren
4. **Eigene Buchungen mit Kalender synchronisieren**: aktivieren
5. **Mail bei Synchronisationsfehler**: aktivieren

#### Variante B: Graph-basierte Umgebung

1. **Sync. Modus**: `Microsoft365`
2. **Sync-URL / O365 Url**: entfällt
3. **Buchungen beim Anpassen der Synchronisationseinstellungen neu abgleichen**: nicht aktivieren
4. **Eigene Buchungen mit Kalender synchronisieren**: aktivieren
5. **Mail bei Synchronisationsfehler**: aktivieren

{{< imgproc Sync_einschalten Resize "960x" >}} {{< /imgproc >}}

### Notifikationen aktivieren

1. Klicken Sie in der Menüzeile auf **Einstellungen**.
2. Wählen Sie im Sidepanel **Persönliche Einstellungen**.
3. Wechseln Sie zum Reiter **Notifikationen**.
4. Aktivieren Sie in der Spalte Outlook Sync alle Ressourcentypen, die synchronisiert werden sollen.

{{< imgproc Notifikationen_aktivieren Resize "960x" >}} {{< /imgproc >}}
