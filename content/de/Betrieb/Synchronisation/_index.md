---
title: "Kalender-Synchronisation"
linkTitle: "Synchronisation"
weight: 4
description: "Übersicht über die unterstützten Kalender-Sync-Modi in ROOMS."
---

{{% alert title="Voraussetzung (häufige Fehlerquelle)" color="info" %}}
Prüfen Sie vor jeder Inbetriebnahme:

- die **primäre SMTP-Adresse** der Person oder Ressource ist in ROOMS korrekt gepflegt
- der passende **SyncModus** ist gewählt
- bei `EWS1`, `EWS2` und `O365` zeigt die **Sync-URL** auf die richtige `.../EWS/Exchange.asmx`
- bei `Microsoft365` ist **`CalendarSync:Graph`** vollständig konfiguriert und die veröffentlichten Graph-Webhooks sind erreichbar
{{% /alert %}}

ROOMS unterstützt **vier** relevante Kalender-SyncModi. Entscheidend ist dabei die zugrunde liegende Technologie:

{{< bootstrap-table "table table-striped" >}}
| SyncModus | Technologie | Typischer Einsatz | Sync-URL | Doku |
|-----------|-------------|-------------------|----------|------|
| `EWS1` | EWS | Exchange On-Premises, Slot 1 | erforderlich (`.asmx`) | [Exchange On-Premises]({{< relref "Betrieb/Synchronisation/ExchangeOnPrem/_index.md" >}}) |
| `EWS2` | EWS | Exchange On-Premises, Slot 2 | erforderlich (`.asmx`) | [Exchange On-Premises]({{< relref "Betrieb/Synchronisation/ExchangeOnPrem/_index.md" >}}) |
| `O365` | EWS | Exchange Online, EWS-basiertes / legacy Setup | erforderlich (`https://outlook.office365.com/EWS/Exchange.asmx`) | [Exchange Online (EWS / legacy)]({{< relref "Betrieb/Synchronisation/ExchangeOnline/_index.md" >}}) |
| `Microsoft365` | Graph API | Exchange Online, Graph-basiertes Setup | **keine** Sync-URL nötig | [Microsoft 365 (Graph API)]({{< relref "Betrieb/Synchronisation/Microsoft365/_index.md" >}}) |
{{< /bootstrap-table >}}

## Wichtige Unterscheidung

`EWS1`, `EWS2` und `O365` verwenden **die gleiche Grundtechnologie**: alle drei Modi sprechen die Exchange-Webservices (`.asmx`) an.

Die Unterschiede liegen dort vor allem in:

- dem konfigurierten Provider / Slot
- dem Zielsystem (On-Premises vs Exchange Online)
- der verwendeten Authentisierung

Nur `Microsoft365` ist ein **grundsätzlich anderer** Modus: dieser Sync läuft über die **Microsoft Graph API** inklusive Graph-Webhooks, Graph-Berechtigungen und der separaten `CalendarSync`-Konfiguration in `appsettings.json`.

Explizite Exchange-Serverversionen wie `Exchange2010`, `Exchange2013` oder `Exchange2016` sind **keine Benutzer- oder Ressourcen-SyncModi**.

## Empfohlene Wahl

- **Neue Exchange Online Installationen**: `Microsoft365`
- **Bestehende Exchange Online EWS-Umgebungen**: `O365`
- **Exchange On-Premises**: `EWS1` oder `EWS2`

## Weiterführende Seiten

- [Microsoft 365 (Graph API)]({{< relref "Betrieb/Synchronisation/Microsoft365/_index.md" >}}) - Graph-basierter Sync inklusive `AppOnly` / `Delegated`
- [Exchange Online (EWS / legacy)]({{< relref "Betrieb/Synchronisation/ExchangeOnline/_index.md" >}}) - bestehende Exchange-Online-Setups auf EWS-Basis
- [Exchange On-Premises]({{< relref "Betrieb/Synchronisation/ExchangeOnPrem/_index.md" >}}) - EWS-basierte On-Premises-Konfiguration
- [Rooms vorbereiten]({{< relref "Betrieb/Synchronisation/Rooms/_index.md" >}}) - Person-, Konfigurations- und Betriebs-Themen
- [Exchange Ressource Sync]({{< relref "Betrieb/Synchronisation/ResourceSync/_index.md" >}}) - Besonderheiten für Ressourcenpostfächer
- [Problembehandlung]({{< relref "Betrieb/Synchronisation/Troubleshooting/_index.md" >}}) - Fehlersuche im Betrieb

## Support

Für projektspezifische Fragen oder Unterstützung:

- ServiceDesk: https://3volutions.atlassian.net/servicedesk/customer/portal/1
- Telefon: +41 31 511 01 39
- E-Mail: support@microfast.ch
