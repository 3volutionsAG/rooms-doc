---
title: "3V ROOMS installieren"
linkTitle: "3V ROOMS installieren"
weight: 40
description: 'Aktuelles ROOMS-MSI für eine Windows-Neuinstallation ausführen'
---
Das aktuelle Installationspaket steht als `Rooms_<Version>.msi` im [Downloadbereich](https://3volutions.atlassian.net/servicedesk/customer/portal/1/article/417300536) bereit. In Windows erscheint es als **3V-ROOMS Installer (x64)**.

Das MSI kann folgende Features installieren:

- Konfigurationskomponenten
- Legacy Website `ROOMS`
- Legacy Windows Service `ROOMS`
- RoomsPro API
- RoomsPro Worker

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

## Installation

1. Melden Sie sich mit einem lokalen Administrationskonto am Zielserver an.
2. Starten Sie das aktuelle MSI.
3. Akzeptieren Sie die Lizenzvereinbarung.
4. Wählen Sie die für diesen Server vorgesehenen Features aus.
5. Belassen Sie die Konfigurationskomponenten auf allen Servern ausgewählt, auf denen ROOMS-Komponenten installiert werden.
6. Passen Sie die Installationspfade nur an, wenn dies in der geplanten Topologie vorgesehen ist.
7. Geben Sie im Dialog **Service Konfiguration** den gemeinsamen ROOMS-Service-Account im Format `Domäne\Benutzer` und dessen Kennwort ein.
8. Deaktivieren Sie **Service nach der Installation automatisch starten**. Datenbank und Konfiguration sind zu diesem Zeitpunkt noch nicht vollständig geprüft.
9. Starten Sie die Installation und prüfen Sie deren erfolgreichen Abschluss.

Konfigurieren Sie denselben Account anschliessend auch als Identität beider IIS Application Pools.

## Nach der Installation

Führen Sie die Inbetriebnahme in dieser Reihenfolge fort:

1. Passen Sie [`Config.bat` für die API-Verteilung an]({{< relref "Betrieb/Installation/Konfig-Files/_index.md#configbat-für-die-api-erweitern" >}}).
2. Konfigurieren und verteilen Sie die Legacy- und RoomsPro-Konfigurationsdateien.
3. Hinterlegen und verteilen Sie die [Lizenzen]({{< relref "Betrieb/Installation/LizenzenBeziehen/_index.md" >}}).
4. Richten Sie die [IIS Application Pools und Websites]({{< relref "Betrieb/Installation/IIS-Konfiguration/_index.md" >}}) ein.
5. Führen Sie die [Datenbankmigrationen]({{< relref "Betrieb/Installation/Datenbankmigrationen/_index.md" >}}) aus.
6. Entfernen Sie die temporäre `db_owner`-Berechtigung.
7. Starten Sie Websites und Dienste.

## Smoke Test

- Legacy Website über den vorgesehenen HTTPS-Namen öffnen
- Anmeldung mit dem zugeordneten initialen Administrator prüfen
- Health-Endpunkt der RoomsPro API prüfen
- Windows-Dienste `ROOMS` und `RoomsPro Worker` auf erfolgreichen Start kontrollieren
- Ereignisanzeige und anwendungsspezifische Logs auf Start- oder Datenbankfehler prüfen
- Einen für die Umgebung repräsentativen Buchungs- und Synchronisationsablauf testen

## Deinstallation

1. Sichern Sie Konfigurations- und Lizenzdateien, falls sie weiterhin benötigt werden.
2. Stoppen Sie `ROOMS`, `RoomsPro Worker` und die beiden IIS Application Pools.
3. Entfernen Sie **3V-ROOMS Installer (x64)** über **Programme und Funktionen** oder durch erneutes Ausführen des MSI.
4. Bereinigen Sie manuell angelegte IIS-Sites, Bindings und Application Pools separat.
5. Datenbanken werden nicht durch die MSI-Deinstallation entfernt.
