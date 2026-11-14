---
title: "Systemanforderungen"
linkTitle: "Systemanforderungen"
weight: 10
description: 'Mindestanforderungen und Voraussetzungen für eine aktuelle ROOMS-Neuinstallation'
---
Das aktuelle MSI kann folgende Komponenten installieren:

- Legacy Website `ROOMS`
- `RoomsPro API`
- `RoomsPro Worker`
- gemeinsame Konfigurationskomponenten

**RoomsPro Worker** führt die Service-Sessions und die übrigen Hintergrundjobs aus. Betreiben Sie genau einen Worker pro Installation, auch wenn die Websites auf mehreren Servern laufen. Ein parallel laufender separater ROOMS-Service einer älteren Installation würde dieselben Service-Aufgaben zusätzlich ausführen.

Für den dokumentierten Standardaufbau werden alle Windows-Komponenten mit demselben dedizierten ROOMS-Service-Account betrieben.

## Serverrollen und Laufzeiten

{{< bootstrap-table "table table-striped" >}}
| Komponente | Voraussetzung |
|---|---|
| Aktuelles ROOMS-MSI | Windows Server x64 und ASP.NET Core Runtime für `.NET 10` (x64), mindestens `10.0.14` |
| Legacy Website `ROOMS` | IIS 10 oder neuer und ASP.NET Core Hosting Bundle für `.NET 10` (x64), mindestens `10.0.14` |
| `RoomsPro API` | IIS 10 oder neuer und ASP.NET Core Hosting Bundle für `.NET 10` (x64), mindestens `10.0.14` |
| `RoomsPro Worker` | ASP.NET Core Runtime für `.NET 10` (x64), mindestens `10.0.14` |
{{< /bootstrap-table >}}

Das MSI prüft die installierte ASP.NET Core Runtime unabhängig von der gewählten Feature-Kombination. Die reine .NET Runtime genügt dafür nicht. Installieren Sie auf IIS-Servern das Hosting Bundle vor der Konfiguration der beiden Websites. Beide verwenden `AspNetCoreModuleV2` und einen Application Pool mit **No Managed Code**.

## Basis-Hardware

{{< bootstrap-table "table table-striped" >}}
| Bereich | Empfehlung |
|---|---|
| Applikations-/Webserver | 4 vCPU, 16 GB RAM |
| Freier Speicher | mindestens 100 GB für Binärdateien, Logs, temporäre Dateien und Updates |
| Datenbankserver | nach Installationsgrösse, Datenvolumen und Backup-Strategie dimensionieren |
{{< /bootstrap-table >}}

## Datenbank

- Microsoft SQL Server in einer aktuell unterstützten Version
- SQL Server Management Studio für Restore und Berechtigungsvergabe
- TCP/IP-Konnektivität zwischen allen ROOMS-Komponenten und SQL Server
- Aktuelles ROOMS-Baukasten-Backup aus dem Downloadbereich
- Genau eine ROOMS-Datenbank pro Installation mit eigener Backup- und Wiederherstellungsstrategie

## Gemeinsamer ROOMS-Service-Account

Stellen Sie vor der Installation einen dedizierten Domänen-Account bereit, zum Beispiel `Domäne\ROOMSSERVICE`. Derselbe Account wird verwendet für:

- IIS Application Pool der Legacy Website
- IIS Application Pool der RoomsPro API
- Windows-Dienst `RoomsPro Worker`
- integrierte Anmeldung an der ROOMS-Datenbank der Installation

Die konkreten SQL-, Windows- und Dateisystemrechte sind unter [Datenbankberechtigungen]({{< relref "Betrieb/Installation/Datenbankberechtigungen/_index.md" >}}) beschrieben.

## Installationspakete und Topologie

- Aktuelles MSI aus dem [Downloadbereich](https://3volutions.atlassian.net/servicedesk/customer/portal/1/article/417300536) bereitstellen
- Benötigte Windows-Rollen, Laufzeiten und Updates vorab installieren
- Festlegen, auf welchen Maschinen die Komponenten installiert werden
- Mindestens eine RoomsPro API einplanen, da sie die Datenbank-CLI bereitstellt
- DNS-Namen und TLS-Zertifikate für Legacy Website und RoomsPro API festlegen

## Standardpfade

{{< bootstrap-table "table table-striped" >}}
| Komponente | Standardpfad |
|---|---|
| Zentrale Konfiguration | `C:\Program Files\3volutions\ROOMS\Configuration` |
| RoomsPro Worker | `C:\Program Files\3volutions\Worker` |
| Legacy Website | `C:\inetpub\wwwroot\ROOMS` |
| RoomsPro API | `C:\inetpub\wwwroot\API` |
{{< /bootstrap-table >}}

Wenn andere Verzeichnisse gewählt werden, passen Sie die nachfolgenden Befehle und IIS-Einstellungen entsprechend an. `Config.bat` verwendet die registrierten Installationspfade.

## Netzwerk und externe Systeme

- SQL Server muss vom Applikationsserver erreichbar sein.
- Legacy Website und RoomsPro API benötigen die vorgesehenen DNS- und HTTPS-Bindings.
- Je nach Konfiguration werden zusätzlich Verbindungen zu LDAP, Exchange, Microsoft Graph oder weiteren Drittsystemen benötigt.
- Firewall- und Proxyregeln müssen für den gemeinsamen Service-Account und die beteiligten Serverrollen vorbereitet sein.

Dokumentieren Sie vor Beginn Service-Account, Serverrollen, Pfade, DNS-Namen, Datenbanknamen und Verbindungszeichenfolgen.
