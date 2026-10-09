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

#### Buchungsschluss für die Baloise-Erweiterung

{{% alert title="Kommende ROOMS-Version" color="warning" %}}
Die folgenden Einstellungen und die neue Fristmeldung gehören zu einer kommenden Version. Sie sind noch nicht für eine veröffentlichte ROOMS-Version bestätigt. Ändern Sie `BedarfsmeldungGliederungId` in einer bestehenden Installation erst, wenn die eingesetzte Version den neuen Buchungsschluss unterstützt.
{{% /alert %}}

Diese Konfiguration gilt ausschliesslich für Installationen mit der kundenspezifischen Baloise-Buchungserweiterung. Sie aktiviert keine allgemeine Buchungsfrist in anderen ROOMS-Installationen. Stimmen Sie die betroffene Gliederung und die gewünschte Frist mit den zuständigen Administratoren ab.

Die Werte werden in der zentralen `RoomsAppSettings.config` innerhalb des vorhandenen Elements `RoomsAppSettings` gesetzt. Falls gleichnamige Umgebungsvariablen vorhanden sind, haben deren nicht leere Werte Vorrang vor der Datei.

{{< bootstrap-table "table table-striped" >}}
| Schlüssel | Bedeutung | Standard bei fehlendem oder leerem Wert |
|---|---|---|
| `BaloiseBuchungsschlussGliederungId` | Numerische ID der Gliederung, deren Ressourcen dem Buchungsschluss unterliegen. | Die Regel ist nicht aktiv. Auch ein nicht als Ganzzahl lesbarer Wert deaktiviert sie. |
| `BaloiseBuchungsschlussUhrzeit` | Uhrzeit im Format `HH:mm`, z. B. `14:00` oder `10:30`, in der lokalen Zeit des Benutzers. | `14:00` |
| `BaloiseBuchungsschlussTageImVoraus` | Anzahl Kalendertage vor dem Datum des Buchungsbeginns; ganze Zahl ab `0`. Mit `0` liegt die Frist am Buchungstag. | `1` |
{{< /bootstrap-table >}}

Mit den Standardwerten muss eine betroffene Buchung **vor 14:00 Uhr am Vortag** erfolgen. Genau um 14:00 Uhr ist die Frist bereits erreicht; Buchungen am selben Tag sind damit ebenfalls nicht möglich. Bei `10:30` und `2` liegt die Frist vor 10:30 Uhr zwei Kalendertage vor dem Buchungsdatum, unabhängig von der Startuhrzeit der Buchung. Es handelt sich nicht um eine Anzahl Arbeitsstunden oder Werktage. Andere Buchungsregeln gelten weiterhin.

Die Fristprüfung gilt für Original-/Hauptbuchungen auf Ressourcen der konfigurierten Gliederung. Benutzer mit dem wirksamen Recht **Kann ausserhalb von Öffnungszeiten buchen** (ID 151) für die betroffene Ressource sind von dieser Fristprüfung ausgenommen. Vergeben Sie dieses Recht nicht nur zur Umgehung der Frist: Es erlaubt auch Buchungen ausserhalb der Öffnungszeiten.

{{% alert title="Buchungsschluss bei der Umstellung erhalten" color="warning" %}}
In einer Version mit dem neuen Buchungsschluss wird der bisherige Schlüssel `BedarfsmeldungGliederungId` für diese Regel nicht mehr ausgewertet. Setzen Sie `BaloiseBuchungsschlussGliederungId` auf die ID der tatsächlich vorgesehenen Gliederung. Übernehmen Sie die bisherige ID nur, wenn weiterhin dieselben Ressourcen betroffen sein sollen. Ohne einen gültigen neuen Gliederungswert wird diese Frist **nicht mehr durchgesetzt**; die Standardwerte für Uhrzeit und Tage allein aktivieren sie nicht.
{{% /alert %}}

Eine ungültige Uhrzeit oder eine negative bzw. nicht lesbare Tageszahl führt bei der betroffenen Buchungsprüfung zu einem Fehler, nicht zu einem Rückfall auf die Standardfrist. Prüfen Sie die Werte deshalb vor dem Verteilen. Sichern Sie die bisherige Konfiguration, verteilen Sie die Änderung wie auf dieser Seite beschrieben und starten Sie die betroffenen Komponenten in einem abgestimmten Wartungsfenster neu.

Kontrollieren Sie anschliessend in einer geeigneten Testumgebung mit einem Benutzer ohne das Ausnahme-Recht, ob die Frist auf den vorgesehenen Ressourcen wirksam ist: unmittelbar vor der Frist sowie genau an der Frist. Prüfen Sie auch eine Ressource ausserhalb der Gliederung. Bei überschrittener Frist zeigt ROOMS die konkrete Frist mit Datum und Uhrzeit an: «Diese Buchung hätte bis spätestens … erstellt werden müssen.» Eine gespeicherte Konfigurationsdatei allein bestätigt nicht, dass die Regel wirksam ist.

Falls kundenspezifische Übersetzungen für die bisherigen Fristmeldungen bestehen, benötigen sie einen Text für `Entites_Plugins_Baloise_Buchungsschluss_Ueberschritten`. Der Platzhalter `{0}` muss erhalten bleiben; er wird durch Datum und Uhrzeit der Frist ersetzt.

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
