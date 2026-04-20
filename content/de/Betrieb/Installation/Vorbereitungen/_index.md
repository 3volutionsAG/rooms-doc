---
title: "Systemanforderungen"
linkTitle: "Systemanforderungen"
weight: 10
description: 'Mindestanforderungen und Voraussetzungen für die aktuelle ROOMS-Installation.'
---
Die aktuelle MSI-Installation kann je nach gewählten Features eine Kombination aus Legacy-Komponenten und RoomsPro-Komponenten enthalten:

- Legacy Website `ROOMS`
- Legacy Windows Service `ROOMS`
- `RoomsPro API`
- `RoomsPro Worker`

Die Anforderungen hängen deshalb von der gewählten Topologie ab.

## Mindestanforderungen

### Serverrollen und Laufzeiten

{{< bootstrap-table "table table-striped" >}}
| Rolle | Mindestanforderungen |
|---|---|
| Legacy Website `ROOMS` | Windows Server x64 mit IIS 10 oder neuer, `.NET Framework 4.8` |
| Legacy Windows Service `ROOMS` | Windows Server x64, `.NET Framework 4.8` |
| `RoomsPro API` | Windows Server x64 mit IIS 10 oder neuer, ASP.NET Core Hosting Bundle für `.NET 10` (x64) |
| `RoomsPro Worker` | Windows Server x64, `.NET 10 Runtime` (x64) |
{{< /bootstrap-table >}}

### Basis-Hardware

{{< bootstrap-table "table table-striped" >}}
| Bereich | Empfehlung |
|---|---|
| Applikations-/Webserver | 4 vCPU, 16 GB RAM |
| Freier Speicher | mindestens 100 GB für Binärdateien, Logs, temporäre Dateien und Updates |
| Datenbankserver | getrennt nach Mandantengrösse, Datenvolumen und Backup-Strategie dimensionieren |
{{< /bootstrap-table >}}

### Datenbank

- Microsoft SQL Server in einer aktuell unterstützten Version
- TCP/IP-Konnektivität zwischen allen beteiligten Serverrollen und dem SQL Server
- Für Updates und Migrationen ein Konto mit `db_owner`

### quickROOMS / Outlook Add-In

Für quickROOMS gelten zusätzlich die aktuellen Anforderungen aus [quickROOMS Installation]({{< relref "Betrieb/quickROOMS/Installation/_index.md" >}}):

- mindestens Outlook API Requirement Set `1.7`
- Exchange Online oder Exchange on-premises 2016, 2019 beziehungsweise SE
- Outlook für Windows: Microsoft 365 Subscription oder Outlook 2016, 2019, 2021, 2024
- Outlook für Mac: Classic UI oder New UI
- auf Windows-Clients für das Add-In zusätzlich die aktuelle WebView2 Runtime

## Voraussetzungen vor der Installation

### Installationspakete und Topologie

- Aktuelles MSI aus dem [Downloadbereich](https://3volutions.atlassian.net/servicedesk/customer/portal/1/article/417300536) bereitstellen
- Benötigte Drittanbieter-Software und Windows-Updates vorab installieren
- Festlegen, welche Features auf welcher Maschine installiert werden
- Für den dokumentierten Standardweg mindestens eine installierte `RoomsPro API` einplanen, da dort die aktuelle CLI für `db status` und `db migrate` verfügbar ist

### Standardpfade des Installers

{{< bootstrap-table "table table-striped" >}}
| Komponente | Standardpfad |
|---|---|
| Konfiguration | `C:\Program Files\3volutions\ROOMS\Configuration` |
| Legacy Windows Service | `C:\Program Files\3volutions\ROOMS\WindowsService` |
| `RoomsPro Worker` | `C:\Program Files\3volutions\ROOMS\Worker` |
| Legacy Website `ROOMS` | `C:\inetpub\wwwroot\ROOMS` |
| `RoomsPro API` | `C:\inetpub\wwwroot\API` |
{{< /bootstrap-table >}}

Wenn im Setup andere Verzeichnisse gewählt werden, sind die nachfolgenden Beispiele entsprechend anzupassen.

### Service User

Wir empfehlen einen dedizierten Service-Domänen-Account, zum Beispiel `ROOMSSERVICE`, mit folgenden Rechten:

- Lese-/Schreibrechte auf die ROOMS-Datenbanken, jedoch nicht dauerhaft `db_owner`
- Berechtigung zum Ausführen von IIS Application Pools
- Berechtigung zum Ausführen der Windows-Dienste `ROOMS` und `RoomsPro Worker`
- Erforderliche Zugriffe auf Drittanbieter-Systeme wie LDAP, Exchange oder Graph-Endpunkte

Hinweis:

- Derselbe Service-Account wird im aktuellen MSI für den Legacy Windows Service und den `RoomsPro Worker` verwendet.

### Applications Admin

Für Installation, Updates und Migrationen wird zusätzlich ein Administrationskonto benötigt mit:

- `db_owner` auf den zu aktualisierenden Datenbanken
- lokalen Administratorrechten auf den beteiligten Windows-Servern
- Berechtigung zum Administrieren von IIS, Diensten, Firewall-Regeln und Installationsverzeichnissen

### Netzwerk, URLs und DNS

- Kommunikation zwischen allen beteiligten Maschinen sicherstellen, insbesondere SQL Server, IIS, Worker, Exchange, LDAP und gegebenenfalls IDP
- Öffentliche oder interne DNS-Namen für die benötigten Web-Endpunkte definieren
- Je nach Umgebung mindestens URLs für folgende Komponenten festlegen:
  - Legacy Website `ROOMS`
  - `RoomsPro API`
  - optional IDP
  - optional quickROOMS Wizard / Outlook Add-In
  - optional Test- oder Staging-Umgebung

### Backup und Dokumentation

- Vor Updates immer Dateisystem und Datenbanken sichern
- Gewählte Feature-Kombination, Pfade, Service-Accounts, DNS-Namen und Verbindungszeichenfolgen dokumentieren

Es ist weiterhin möglich, Berechtigungen statt über einen einzelnen Service-Domänen-Account über Rollen oder Gruppen zu vergeben. Für die Standarddokumentation wird jedoch weiterhin von einem dedizierten Service-Account ausgegangen.
