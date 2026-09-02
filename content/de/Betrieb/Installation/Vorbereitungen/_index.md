---
title: "Systemanforderungen"
linkTitle: "Systemanforderungen"
weight: 10
description: 'Mindestanforderungen und Voraussetzungen für eine aktuelle ROOMS-Neuinstallation'
---
Das aktuelle MSI kann folgende Komponenten installieren:

- Legacy Website `ROOMS`
- Legacy Windows Service `ROOMS`
- `RoomsPro API`
- `RoomsPro Worker`
- gemeinsame Konfigurationskomponenten

Für den dokumentierten Standardaufbau werden alle Windows-Komponenten mit demselben dedizierten ROOMS-Service-Account betrieben.

## Serverrollen und Laufzeiten

{{< bootstrap-table "table table-striped" >}}
| Komponente | Voraussetzung |
|---|---|
| Aktuelles ROOMS-MSI | Windows Server x64 und `.NET 10 Runtime` (x64) |
| Legacy Website `ROOMS` | IIS 10 oder neuer und `.NET Framework 4.8` |
| Legacy Windows Service `ROOMS` | `.NET Framework 4.8` |
| `RoomsPro API` | IIS 10 oder neuer und ASP.NET Core Hosting Bundle für `.NET 10` (x64) |
| `RoomsPro Worker` | `.NET 10 Runtime` (x64) |
{{< /bootstrap-table >}}

Das MSI prüft die installierte `.NET 10 Runtime` unabhängig von der gewählten Feature-Kombination. Installieren Sie das Hosting Bundle vor der IIS-Konfiguration der RoomsPro API.

## Basis-Hardware

{{< bootstrap-table "table table-striped" >}}
| Bereich | Empfehlung |
|---|---|
| Applikations-/Webserver | 4 vCPU, 16 GB RAM |
| Freier Speicher | mindestens 100 GB für Binärdateien, Logs, temporäre Dateien und Updates |
| Datenbankserver | nach Mandantengröße, Datenvolumen und Backup-Strategie dimensionieren |
{{< /bootstrap-table >}}

## Datenbank

- Microsoft SQL Server in einer aktuell unterstützten Version
- SQL Server Management Studio für Restore und Berechtigungsvergabe
- TCP/IP-Konnektivität zwischen allen ROOMS-Komponenten und SQL Server
- Aktuelles ROOMS-Baukasten-Backup aus dem Downloadbereich
- Backup- und Wiederherstellungsstrategie für jede Mandantendatenbank

## Gemeinsamer ROOMS-Service-Account

Stellen Sie vor der Installation einen dedizierten Domänen-Account bereit, zum Beispiel `Domäne\ROOMSSERVICE`. Derselbe Account wird verwendet für:

- IIS Application Pool der Legacy Website
- IIS Application Pool der RoomsPro API
- Windows-Dienst `ROOMS`
- Windows-Dienst `RoomsPro Worker`
- integrierte Anmeldung an den ROOMS-Datenbanken

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
| Legacy Windows Service | `C:\Program Files\3volutions\ROOMS\WindowsService` |
| RoomsPro Worker | `C:\Program Files\3volutions\ROOMS\Worker` |
| Legacy Website | `C:\inetpub\wwwroot\ROOMS` |
| RoomsPro API | `C:\inetpub\wwwroot\API` |
{{< /bootstrap-table >}}

Wenn andere Verzeichnisse gewählt werden, müssen die nachfolgenden Befehle, IIS-Einstellungen und die manuelle API-Erweiterung der `Config.bat` entsprechend angepasst werden.

## Netzwerk und externe Systeme

- SQL Server muss vom Applikationsserver erreichbar sein.
- Legacy Website und RoomsPro API benötigen die vorgesehenen DNS- und HTTPS-Bindings.
- Je nach Konfiguration werden zusätzlich Verbindungen zu LDAP, Exchange, Microsoft Graph oder weiteren Drittsystemen benötigt.
- Firewall- und Proxyregeln müssen für den gemeinsamen Service-Account und die beteiligten Serverrollen vorbereitet sein.

Dokumentieren Sie vor Beginn Service-Account, Serverrollen, Pfade, DNS-Namen, Datenbanknamen und Verbindungszeichenfolgen.
