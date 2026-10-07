---
title: "Konfigurationsdateien verteilen"
linkTitle: "Konfigurationsdateien"
weight: 50
description: 'Zentrale ROOMS-Konfiguration mit Config.bat an Legacy-Komponenten, API und Worker verteilen'
---
Das MSI installiert die zentrale Konfigurationsinfrastruktur standardmässig unter:

```text
C:\Program Files\3volutions\ROOMS\Configuration
```

Passen Sie die Originaldateien nur in diesem Verzeichnis an. Die als Administrator ausgeführte `Config.bat` verteilt daraus die benötigten Kopien an die installierten Komponenten.

## Verteilung

{{< bootstrap-table "table table-striped" >}}
| Zentrale Dateien | Zielkomponenten |
|---|---|
| `RoomsAppSettings.config`, `ConnectionStrings.config`, `DiagnosticsWeb.config`, `DiagnosticsWindowsService.config`, `MachineKey.config`, `*.lic` | Legacy Website `ROOMS` und Windows-Dienst `ROOMS` |
| `appsettings.json` | `RoomsPro Worker` und `RoomsPro API` |
{{< /bootstrap-table >}}

Das ausgelieferte `Config.bat` verteilt `appsettings.json` bereits an den Worker. Nach der Installation muss die Datei einmalig erweitert werden, damit dieselbe zentrale Datei auch an die API verteilt wird.

## `Config.bat` für die API erweitern

Öffnen Sie folgende Datei als Administrator:

```text
C:\Program Files\3volutions\ROOMS\Configuration\Config.bat
```

### 1. API-Zielverzeichnis definieren

Ergänzen Sie bei den vorhandenen Definitionen der Zielverzeichnisse:

```bat
SET API_CONFIG_DIR=C:\inetpub\wwwroot\API\config
```

Falls im MSI ein anderes API-Verzeichnis gewählt wurde, passen Sie diesen Wert entsprechend an.

### 2. Kopierroutine aufrufen

Ergänzen Sie direkt nach dem vorhandenen Aufruf

```bat
CALL :CopyWorkerAppSettingsIfInstalled
```

folgenden Aufruf:

```bat
CALL :CopyApiAppSettingsIfInstalled
```

### 3. Kopierroutine einfügen

Fügen Sie am Ende der Datei folgenden vollständigen Block ein:

```bat
:CopyApiAppSettingsIfInstalled
IF NOT EXIST "%API_CONFIG_DIR%\..\RoomsPro.Web.exe" GOTO :EOF
IF NOT EXIST "%API_CONFIG_DIR%" MKDIR "%API_CONFIG_DIR%"
IF EXIST "%~dp0appsettings.json" COPY /Y "%~dp0appsettings.json" "%API_CONFIG_DIR%\appsettings.json"
GOTO :EOF
```

`%~dp0` verweist auf das Verzeichnis der ausgeführten `Config.bat` und damit auf die zentrale `appsettings.json`.

Kontrollieren Sie diese manuelle Erweiterung nach einer Reparatur oder erneuten Installation des MSI, bevor Sie `Config.bat` wieder ausführen.

## RoomsPro-Konfiguration

Die zentrale Datei

```text
C:\Program Files\3volutions\ROOMS\Configuration\appsettings.json
```

enthält die Konfiguration für API und Worker. Beide Komponenten müssen insbesondere dieselbe ROOMS-Datenbank verwenden:

```json
{
  "IdentityServer": {
    "RoomsDatabase": "Server=SQLSERVER;Database=ROOMS;Integrated Security=True;MultipleActiveResultSets=True;TrustServerCertificate=True"
  }
}
```

Der Konfigurationsschlüssel heisst `IdentityServer:RoomsDatabase`. Bei Konfiguration über Umgebungsvariablen entspricht dies `IdentityServer__RoomsDatabase`. Bewahren Sie Zugangsdaten nicht in Beispielen, Skripten oder ungeschützten Dateien auf.

## Legacy-Konfiguration

### `RoomsAppSettings.config`

`DefaultMandator` verweist auf den Namen eines Eintrags aus `ConnectionStrings.config`:

```xml
<RoomsAppSettings>
  <add key="DefaultMandator" value="PROD" />
</RoomsAppSettings>
```

### `ConnectionStrings.config`

Für jede Mandantendatenbank ist ein eigener Eintrag erforderlich. Der Name wird in der Legacy-Webanwendung als Bestandteil der Mandanten-URL verwendet.

```xml
<connectionStrings>
  <clear />
  <add name="PROD" connectionString="Data Source=SQLSERVER;Initial Catalog=ROOMS;Integrated Security=SSPI;MultipleActiveResultSets=True" />
</connectionStrings>
```

Verwenden Sie für den dokumentierten Windows-Standardweg die integrierte Authentifizierung mit dem gemeinsamen ROOMS-Service-Account.

### SQL-Authentifizierung für Legacy

Wenn sich die Legacy Website und der Legacy Windows-Dienst mit SQL-Benutzername und Passwort anmelden, muss der jeweilige Eintrag in `ConnectionStrings.config` zusätzlich `Persist Security Info=True` enthalten. Das gilt für die Legacy-Komponenten von ROOMS 4.30 auf .NET Framework 4.8, sowohl bei MSI- als auch bei Container-Installationen.

```xml
<connectionStrings>
  <clear />
  <add name="PROD" connectionString="Data Source=SQLSERVER;Initial Catalog=ROOMS;User ID=ROOMS_APP;Password='BESTEHENDES_PASSWORT';MultipleActiveResultSets=True;Persist Security Info=True" />
</connectionStrings>
```

Das Beispiel verwendet Platzhalter. Behalten Sie bei einem bestehenden Eintrag Server, Datenbank, Benutzername, Passwort und weitere Verbindungsparameter unverändert bei. Ergänzen Sie nur `Persist Security Info=True`. Ersetzen Sie nicht die gesamte Datei durch das Beispiel, wenn weitere Mandanteneinträge vorhanden sind. Das Passwort muss weiterhin korrekt für die Verbindungszeichenfolge und das XML-Attribut maskiert sein.

Ohne diesen Parameter gilt standardmässig `False`. Eine erste Datenbankanmeldung kann dann erfolgreich sein, während ein späterer erneuter Verbindungsaufbau das Passwort verliert. Dadurch können beispielsweise Hintergrundaufträge oder Exporte mit einem SQL-Anmeldefehler abbrechen. Der Parameter verhindert diesen Passwortverlust, behebt aber nicht automatisch andere Ursachen eines fehlgeschlagenen Auftrags.

Diese Anforderung entsteht durch die Verbindungsverwaltung der Legacy-Komponenten. Sie ist keine allgemeine Voraussetzung von .NET Framework 4.8. Bei integrierter Windows-Authentifizierung wird kein SQL-Passwort im Connection String hinterlegt. RoomsPro API mit integriertem IDP und RoomsPro Worker verwenden in ROOMS 4.30 eine andere Verbindungsverwaltung und benötigen diese Legacy-Einstellung nicht. Übertragen Sie den Parameter deshalb nicht pauschal in deren `appsettings.json`.

{{% alert title="Zugangsdaten schützen" color="warning" %}}
Mit `Persist Security Info=True` bleibt das Passwort über die Verbindungszeichenfolge einer geöffneten Verbindung auslesbar. Beschränken Sie den Zugriff auf Konfigurationsdateien und protokollieren oder versenden Sie keine vollständigen Connection Strings mit Zugangsdaten.
{{% /alert %}}

Prüfen Sie vor der Änderung, ob der Eintrag zur betroffenen Umgebung und Mandantendatenbank gehört. Sichern Sie die bisherige Konfiguration und verteilen Sie die geänderte Datei an beide Legacy-Komponenten. Bei einer bestehenden Installation starten Sie die betroffenen Legacy-Komponenten in einem abgestimmten Wartungsfenster neu. Wiederholen Sie anschliessend den zuvor fehlgeschlagenen Auftrag und prüfen Sie dessen Ergebnis sowie die Ereignisanzeige. Eine erfolgreiche Anmeldung allein bestätigt noch keinen erfolgreichen Export.

### Weitere Legacy-Dateien

- `DiagnosticsWeb.config` und `DiagnosticsWindowsService.config` steuern das Legacy-Logging und werden nur bei einem konkreten Diagnosebedarf angepasst.
- `MachineKey.config` muss innerhalb einer Umgebung auf allen Webservern identisch sein.
- Lizenzdateien mit der Endung `.lic` werden ebenfalls aus dem zentralen Configuration-Verzeichnis verteilt.

## Konfiguration verteilen und prüfen

1. Speichern Sie alle Änderungen im zentralen Configuration-Verzeichnis.
2. Führen Sie `Config.bat` als Administrator aus.
3. Prüfen Sie für jede lokal installierte RoomsPro-Komponente, ob die Zieldatei vorhanden und mit der zentralen Datei identisch ist. Das folgende Skript überspringt nicht installierte Komponenten und bricht bei einer fehlenden oder abweichenden Kopie ab:

   ```powershell
   $source = 'C:\Program Files\3volutions\ROOMS\Configuration\appsettings.json'
   $sourceHash = (Get-FileHash $source).Hash
   $targets = @(
     [pscustomobject]@{
       Name = 'RoomsPro Worker'
       Executable = 'C:\Program Files\3volutions\ROOMS\Worker\RoomsPro.Worker.exe'
       Config = 'C:\Program Files\3volutions\ROOMS\Worker\config\appsettings.json'
     }
     [pscustomobject]@{
       Name = 'RoomsPro API'
       Executable = 'C:\inetpub\wwwroot\API\RoomsPro.Web.exe'
       Config = 'C:\inetpub\wwwroot\API\config\appsettings.json'
     }
   )

   foreach ($target in $targets) {
     if (Test-Path $target.Executable) {
       if (-not (Test-Path $target.Config)) {
         throw "$($target.Name): appsettings.json fehlt"
       }
       if ((Get-FileHash $target.Config).Hash -ne $sourceHash) {
         throw "$($target.Name): appsettings.json weicht von der zentralen Datei ab"
       }
       Write-Host "$($target.Name): appsettings.json ist aktuell"
     }
   }
   ```

Die Konfiguration ist damit verteilt. Fahren Sie im [Installationsablauf]({{< relref "Betrieb/Installation/_index.md" >}}) mit der IIS-Konfiguration fort. Bei einer Neuinstallation bleiben Websites und Dienste bis zum erfolgreichen Abschluss der Migration gestoppt.
