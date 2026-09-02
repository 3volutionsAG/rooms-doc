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
