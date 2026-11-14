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
| `appsettings.json`, `appsettings.operator.json`, `*.lic` | Verzeichnis `config` aller drei installierten Komponenten: ROOMS-Website, RoomsPro API und RoomsPro Worker |
{{< /bootstrap-table >}}

`Config.bat` erkennt die installierten Komponenten und ihre registrierten Zielpfade. Die API-Verteilung ist enthalten. Verwenden Sie die ausgelieferte Datei ohne manuelle Kopierroutinen.

## Individuelle Betriebseinstellungen

Legen Sie individuelle Werte in dieser selbst verwalteten Datei ab:

```text
C:\Program Files\3volutions\ROOMS\Configuration\appsettings.operator.json
```

Das MSI liefert die Basiskonfiguration in `appsettings.json`. Die Operator-Datei wird nicht vom MSI geliefert und bleibt bei einer erneuten Installation erhalten. Alle drei Komponenten lesen aus ihrem Verzeichnis `config` zuerst `appsettings.json`, dann `appsettings.{Umgebung}.json` und danach `appsettings.operator.json`. Spätere Werte überschreiben frühere. Umgebungsvariablen haben Vorrang vor diesen Dateien; für hierarchische Schlüssel verwenden Sie `__`, beispielsweise `Rooms__DefaultAuth` für `Rooms:DefaultAuth`. Ein flacher Name wie `DefaultAuth` konfiguriert diese Einstellung nicht. Starten Sie betroffene Websites und Dienste nach dem Verteilen neu. Änderungen an der Operator-Datei werden nicht automatisch eingelesen.

Da alle drei Komponenten dieselbe Operator-Datei erhalten, gehören nur gemeinsam passende Werte hinein. Konfigurieren Sie hostabhängige Listener wie `Urls` oder `Kestrel` nicht pauschal in dieser Datei.

### Eine Datenbank pro Installation

Jede ROOMS-Installation verwendet genau eine Datenbank. Alle drei Komponenten lesen deren Verbindung aus dem Schlüssel `ConnectionString` auf der obersten JSON-Ebene. Verteilen Sie dieselbe Verbindung und Datenbankidentität an alle drei Komponenten.

Ohne einen nicht leeren `ConnectionString` startet die jeweilige Komponente nicht. `ConnectionStrings:<Name>` und `IdentityServer:RoomsDatabase` liefern keine Datenbankverbindung. Prüfen Sie bei Startproblemen auch Überschreibungen durch Umgebungsvariablen.

Die Kompatibilität mit alten URLs wird separat über `Rooms:LegacyTenant` konfiguriert, wie unter [Bestehende Links mit Mandantenpräfix](#bestehende-links-mit-mandantenpräfix) beschrieben. Eine neue Installation benötigt diesen Wert nicht. `Rooms:DefaultMandator` wählt keine Datenbank aus.

Beispiel für den Windows-Standardaufbau mit integriertem Service-Account:

```json
{
  "ConnectionString": "Server=SQLSERVER;Database=ROOMS;Integrated Security=True;MultipleActiveResultSets=True;Encrypt=True;TrustServerCertificate=False"
}
```

Passen Sie Server, Datenbank und TLS-Vertrauen an Ihre Umgebung an. Das Beispiel verlangt Verschlüsselung und ein vertrauenswürdiges SQL-Server-Zertifikat. Die Umgebungsvariable heisst ebenfalls `ConnectionString`. Bewahren Sie Zugangsdaten nicht in Beispielen, Skripten oder ungeschützten Dateien auf.

{{% alert title="SQL-Verschlüsselung ausdrücklich festlegen" color="warning" %}}
Enthält die Verbindung weder `Encrypt` noch `TrustServerCertificate`, ergänzt ROOMS `Encrypt=False`. Setzen Sie `Encrypt=True`, wenn eine verschlüsselte Verbindung erforderlich ist, und stimmen Sie die Zertifikatsprüfung mit Ihrer SQL-Server-Umgebung ab.
{{% /alert %}}

Weitere ROOMS-Einstellungen gehören unter `Rooms`, beispielsweise `Rooms:DefaultAuth`. Die OpenID-Connect-Einstellungen der Legacy Website stehen unter `Authentication:OpenIdConnect`.

### Öffentliche ROOMS-URL und Anmeldung

Die öffentliche ROOMS-URL enthält kein Mandantenpräfix. Beispiel: `https://rooms.example.ch` beziehungsweise `https://example.ch/Rooms`, wenn die Anwendung unter `/Rooms` installiert ist. Der Installationspfad bleibt erhalten.

- Verwenden Sie diese Basis für **Applikation Root-Url** (Parameter 18) und die entsprechende öffentliche anonyme Basis für **Applikation Root-Url Anonymous** (Parameter 60).
- Ein expliziter Wert für `Authentication:OpenIdConnect:RedirectUri` muss auf die öffentliche ROOMS-Anwendungswurzel zeigen, ohne Mandantenpräfix. Ohne diesen Wert verwendet die Website Parameter 18. Der Anmelde-Callback wird aus dieser URL abgeleitet.
- Stimmen Sie gegebenenfalls eigene Einträge für den Client `rooms` unter `IdentityServer:Clients` auf diese URLs ab. RoomsPro ergänzt dessen Anmelde-, Abmelde- und CORS-Adressen beim Start aus den konfigurierten Root-URLs. CORS-Origins enthalten nur Schema, Host und gegebenenfalls Port, keinen Pfad.
- Verwenden Sie die passende Basis auch in quickROOMS `rootUrl`, Add-In-Manifesten sowie Türschild- und Welcome-Screen-URLs. Prüfen Sie Reverse-Proxy-Regeln, die ein Mandantenpräfix voraussetzen. Die eigenen Callback-URLs des Wizards bleiben davon getrennt.

#### Bestehende Links mit Mandantenpräfix

Wenn Geräte oder gespeicherte Links ein Mandantenpräfix verwenden, setzen Sie `Rooms:LegacyTenant` auf genau dieses frühere Präfix, beispielsweise `Default`. Als Umgebungsvariable heisst der Schlüssel `Rooms__LegacyTenant`. Ohne diesen Wert ist keine Kompatibilitätsbehandlung aktiv. Normale Browser-Seitenaufrufe mit diesem Präfix werden dauerhaft auf die URL ohne Präfix weitergeleitet. Aufrufe für Add-In-Seiten, Inhalte und Schnittstellen sowie Nicht-GET/HEAD-Anfragen und Anmelde-Callbacks werden unter dem alten Pfad verarbeitet. Das ersetzt keine Prüfung der konfigurierten URLs und ist keine Zusage, dass jede alte Adresse erfolgreich ist. Verwenden Sie für neue Links die URL ohne Mandantenpräfix.

{{% alert title="Grenzen der alten URLs" color="warning" %}}
Nur das unter `Rooms:LegacyTenant` konfigurierte Präfix wird erkannt. Andere frühere Mandantennamen erhalten keine solche Kompatibilitätsbehandlung. Entspricht der Wert dem Anfang einer aktuellen Route, beispielsweise `Home`, `Calendar` oder `api`, ist die gesamte Kompatibilitätsbehandlung deaktiviert. Der Webhost protokolliert dazu eine Warnung. Prüfen Sie in diesem Fall die betroffenen Geräte und Links direkt mit der aktuellen URL.
{{% /alert %}}

## RoomsPro-Konfiguration

### Schutz vor wiederholten Anmeldeversuchen

RoomsPro begrenzt fehlgeschlagene Prüfungen von Benutzername und Passwort, persönlichen PINs und QR-Codes. Für Buchungs-PINs am Türschild gilt zusätzlich eine Grenze pro Raum. Diese Grenzen betreffen die Anmeldung über den integrierten Identity Provider der RoomsPro API, nicht die direkte Anmeldung an der Legacy Website oder die Anmeldung beim externen Anbieter, etwa Microsoft.

{{< bootstrap-table "table table-striped" >}}
| Grenze | Standardwert | Konfigurationsschlüssel |
|---|---|---|
| Fehlgeschlagene Prüfungen pro Client-IP, gemeinsam über die genannten Anmeldearten | 30 pro Zeitfenster | `IdentityServer:LoginThrottle:FailuresPerClient` |
| Fehlgeschlagene Buchungs-PINs pro Raum, über alle Clients hinweg | 10 pro Zeitfenster | `IdentityServer:LoginThrottle:FailuresPerDoormanResource` |
| Passwort-Reset-Anfragen und Verfügbarkeitsprüfungen für E-Mail-Adressen und Benutzernamen, gemeinsam pro Client-IP | 60 pro Zeitfenster | `IdentityServer:LoginThrottle:AccountRequestsPerClient` |
| Zeitfenster für Fehlversuche, Passwort-Reset und Verfügbarkeitsprüfungen | 15 Minuten | `IdentityServer:LoginThrottle:Window` |
| Fehlgeschlagene Passwortversuche pro Forms-Logon | 5, danach 20 Minuten gesperrt | `IdentityServer:FailedLoginLimit` |
{{< /bootstrap-table >}}

Die IP- und Raumgrenze sperrt weitere Prüfungen bis zum Ende des jeweiligen Zeitfensters. Das Fenster beginnt mit dem ersten Prüfversuch für die IP beziehungsweise den Raum. Erfolgreiche Prüfungen zählen nicht als Fehlversuch; sie löschen jedoch nicht die bereits gezählten Fehlversuche anderer Anmeldungen. IPv6-Adressen mit demselben `/64`-Präfix teilen sich die IP-Grenze. Die IP- und Raumzähler gelten je laufender RoomsPro-API-Instanz, nicht gemeinsam für alle Instanzen.

Die Kontosperre ist davon unabhängig: Während der 20 Minuten wird auch das richtige Passwort abgewiesen. Eine erfolgreiche Passwortprüfung setzt den Fehlversuchszähler dieses Forms-Logons zurück. Nach Ablauf einer Kontosperre sollten Sie deshalb nur das geprüfte Passwort verwenden; ein weiterer Fehlversuch kann das Konto erneut sperren.

#### Passwort-Reset und Verfügbarkeitsprüfungen

Anfragen zum Zurücksetzen des Passworts teilen sich eine separate IP-Grenze mit Prüfungen, ob eine E-Mail-Adresse oder ein Benutzername verfügbar ist, etwa bei der Registrierung oder Profilbearbeitung. Jede zugelassene Anfrage zählt, nicht nur fehlgeschlagene. Die Grenze von standardmässig 60 Anfragen gilt gemeinsam für diese Vorgänge, nicht je Benutzerkonto oder Vorgang. Ohne aktivierte Selbstregistrierung werden für nicht angemeldete Besucher keine Konten auf Verfügbarkeit geprüft.

Das Zeitfenster beginnt mit der ersten gezählten Anfrage. IPv6-Adressen mit demselben `/64`-Präfix teilen sich diese Grenze ebenfalls. Der Zähler gilt je laufender RoomsPro-API-Instanz und ist von den Fehlversuchszählern und der Kontosperre getrennt. Eine erfolgreiche Anmeldung setzt ihn nicht zurück; eine erreichte Anfragegrenze blockiert für sich allein keine Anmeldung.

Bei **Zu viele Anfragen. Bitte versuchen Sie es später erneut.** stoppen Sie weitere Anfragen und warten bis zum Ende des Zeitfensters. Das Passwort-Reset-Formular liefert dabei HTTP-Status `429` und löst keinen weiteren Reset aus. Die Meldung kann auch bei einer Verfügbarkeitsprüfung erscheinen. Mehrere Personen im selben Netzwerk können die gemeinsame Grenze erreichen. Prüfen Sie bei wiederholten Meldungen die Client-Adressen und die RoomsPro-API-Logs; die Warnung enthält den betroffenen Schlüssel und das Ende des Zeitfensters in UTC.

#### Bei einer vorübergehenden Sperre

- Bei der Meldung **Zu viele fehlgeschlagene Anmeldeversuche. Bitte versuchen Sie es später erneut.** stoppen Sie weitere Versuche und warten bis zum Ende des Zeitfensters. Die Anmeldeseite liefert dabei HTTP-Status `429`.
- Mehrere Personen hinter derselben öffentlichen IP teilen sich die IP-Grenze. Deshalb kann die Sperre auch Personen mit richtigen Zugangsdaten betreffen. Prüfen Sie bei wiederholten Vorfällen auch Geräte oder Integrationen mit veralteten Zugangsdaten.
- Ist die Raumgrenze erreicht, sind weitere Prüfungen von Buchungs-PINs für diesen Raum während des verbleibenden Fensters blockiert, auch mit dem richtigen PIN und von einem anderen Gerät. Ein persönlicher PIN oder QR-Code unterliegt der IP-Grenze, nicht dieser zusätzlichen Raumgrenze.
- Prüfen Sie als Betriebsteam die RoomsPro-API-Logs. Beim Abweisen wegen einer erreichten IP- oder Raumgrenze protokolliert die Anwendung eine Warnung mit dem betroffenen Schlüssel und dem Ende des Zeitfensters in UTC. Ein weiteres Konto oder ein neuer PIN hebt eine solche Sperre nicht auf.

#### Grenzen konfigurieren

Ergänzen Sie bei Bedarf die folgenden Werte im `IdentityServer`-Abschnitt der `appsettings.operator.json`. Das Beispiel zeigt die Standardwerte. Ersetzen Sie damit nicht die übrige Konfiguration.

```json
{
  "IdentityServer": {
    "FailedLoginLimit": 5,
    "LoginThrottle": {
      "FailuresPerClient": 30,
      "FailuresPerDoormanResource": 10,
      "AccountRequestsPerClient": 60,
      "Window": "00:15:00"
    }
  }
}
```

Die vier Werte unter `LoginThrottle` müssen positiv sein; ungültige Werte verhindern den Anwendungsstart. `FailedLoginLimit` verwendet bei fehlendem oder nicht positivem Wert die Grenze von fünf Versuchen. Die Dauer der Kontosperre beträgt 20 Minuten und wird nicht durch `Window` geändert. Die Einstellungen sind keine globalen Parameter in der ROOMS-Oberfläche.

Verteilen Sie Änderungen wie unter [Konfiguration verteilen und prüfen](#konfiguration-verteilen-und-prüfen) beschrieben und starten Sie die betroffenen RoomsPro-API-Instanzen in einem abgestimmten Wartungsfenster neu. Kontrollieren Sie den erfolgreichen Start. Erhöhen Sie Grenzen nicht als erste Massnahme gegen wiederholte Sperren: Klären Sie zuerst fehlerhafte Zugangsdaten und die Zuordnung der Client-Adressen.

{{% alert title="Vertrauenswürdige Client-Adresse erforderlich" color="warning" %}}
Die RoomsPro API muss ausschliesslich über einen kontrollierten Reverse Proxy erreichbar sein. Dieser muss vom Client gelieferte `X-Forwarded-For`-, `X-Forwarded-Proto`- und `X-Forwarded-Host`-Header entfernen und durch vertrauenswürdige Werte ersetzen. Ohne verlässliche Client-Adresse können alle Benutzer dieselbe IP-Grenze teilen; bei manipulierbaren Headern lässt sich die IP-Grenze umgehen. Die Kontosperre und die Raumgrenze sind nicht von der Client-IP abhängig.
{{% /alert %}}

Für den direkt aus dem Internet erreichbaren Nginx im [Docker-Beispiel]({{< relref "Betrieb/Installation/Docker/_index.md#öffentliche-urls-abstimmen" >}}) wird `X-Forwarded-For` mit `$remote_addr` neu gesetzt. Bei zusätzlichen vorgeschalteten Proxys muss das Betriebsteam die vertrauenswürdige Weiterleitung über die gesamte Kette sicherstellen; übernehmen Sie weder ungeprüft einen Client-Header noch pauschal die Adresse eines vorgeschalteten Proxys als Benutzeradresse.

## Legacy-Konfiguration

### Einstellungen unter `Rooms`

Individuelle Anwendungseinstellungen stehen unter `Rooms` in `appsettings.operator.json`. `RoomsAppSettings.config` und `ConnectionStrings.config` sind keine aktiven Konfigurationsquellen. Liegt eine dieser Dateien im Verzeichnis `config` einer Komponente, verweigert diese den Start mit einer Konfigurationsmeldung. Prüfen Sie in diesem Fall die zentrale JSON-Konfiguration und deren Verteilung, bevor Sie die Komponente starten.

### SQL-Authentifizierung für Legacy

Wenn sich die Legacy Website und die im Worker ausgeführten Service-Sessions mit SQL-Benutzername und Passwort anmelden, muss der gemeinsame `ConnectionString` zusätzlich `Persist Security Info=True` enthalten. Das gilt sowohl bei MSI- als auch bei Container-Installationen.

```json
{
  "ConnectionString": "Server=SQLSERVER;Database=ROOMS;User ID=ROOMS_APP;Password='BESTEHENDES_PASSWORT';MultipleActiveResultSets=True;Encrypt=True;TrustServerCertificate=False;Persist Security Info=True"
}
```

Das Beispiel verwendet Platzhalter und verlangt ein vertrauenswürdiges SQL-Server-Zertifikat. Behalten Sie Server, Datenbank, Benutzername, Passwort und weitere Verbindungsparameter Ihrer Installation bei. Ergänzen Sie bei einer entsprechenden SQL-Anmeldung `Persist Security Info=True`. Ersetzen Sie nicht die gesamte Datei durch das Beispiel. Das Passwort muss korrekt für die Verbindungszeichenfolge und die JSON-Zeichenfolge maskiert sein.

Ohne diesen Parameter gilt standardmässig `False`. Eine erste Datenbankanmeldung kann dann erfolgreich sein, während ein späterer erneuter Verbindungsaufbau das Passwort verliert. Dadurch können beispielsweise Hintergrundaufträge oder Exporte mit einem SQL-Anmeldefehler abbrechen. Der Parameter verhindert diesen Passwortverlust, behebt aber nicht automatisch andere Ursachen eines fehlgeschlagenen Auftrags.

Diese Anforderung entsteht durch die Verbindungsverwaltung der Legacy-Anwendungslogik, die auch in den Service-Sessions des Workers verwendet wird. Bei integrierter Windows-Authentifizierung wird kein SQL-Passwort im Connection String hinterlegt. Alle drei Komponenten lesen dieselbe gemeinsame Verbindung.

{{% alert title="Zugangsdaten schützen" color="warning" %}}
Mit `Persist Security Info=True` bleibt das Passwort über die Verbindungszeichenfolge einer geöffneten Verbindung auslesbar. Beschränken Sie den Zugriff auf Konfigurationsdateien und protokollieren oder versenden Sie keine vollständigen Connection Strings mit Zugangsdaten.
{{% /alert %}}

Prüfen Sie vor der Änderung, ob die Verbindung zur betroffenen Installation und Datenbank gehört. Sichern Sie die bisherige Konfiguration und verteilen Sie die geänderte Datei an alle drei Komponenten. Starten Sie die betroffenen Komponenten in einem abgestimmten Wartungsfenster neu. Wiederholen Sie anschliessend den zuvor fehlgeschlagenen Auftrag und prüfen Sie dessen Ergebnis sowie die Ereignisanzeige. Eine erfolgreiche Anmeldung allein bestätigt noch keinen erfolgreichen Export.

### Logging und Lizenzen

Logstufen und Logziele der Legacy-Anwendungslogik werden über `Serilog` in der `appsettings.operator.json` konfiguriert. `Serilog:LegacySql` steuert auch die entsprechenden Einträge des Workers in der Ereignisanzeige. Dessen Service-Sessions protokollieren mit der Quelle `RoomsPro.Worker`. `DiagnosticsWeb.config` und `DiagnosticsWindowsService.config` steuern das Logging nicht. Beim Start weist eine Warnung auf solche vorhandenen Dateien hin.

Die ROOMS-Website speichert ihren Data-Protection-Schlüsselbund in der Datenbank der Installation. Eine gemeinsame `MachineKey.config` ist dafür nicht vorgesehen.

Für die von allen drei Komponenten verwendeten RoomsPro-Funktionen müssen auch die benötigten `CalendarSync`-Werte und gegebenenfalls `DataProtection:EncryptionKey` übereinstimmen. Verteilen Sie einen konfigurierten Verschlüsselungsschlüssel unverändert und schützen Sie ihn wie andere Secrets. RoomsPro API erzeugt den gemeinsamen RoomsPro-Schlüsselbund. Bei einer Datenbank ohne Schlüsselbund starten Sie zuerst die API. Die ROOMS-Website erzeugt diesen Schlüsselbund nicht selbst. `RoomsPro.Worker` muss für die Ausführung der Hintergrundaufträge laufen.

Lizenzdateien mit der Endung `.lic` werden aus dem zentralen Configuration-Verzeichnis verteilt.

Änderungen an JSON-Dateien, Umgebungsvariablen und Lizenzen erfordern einen Neustart der betroffenen Prozesse. Davon getrennt prüft der Worker globale Parameter aus der Datenbank und die dort gespeicherte `StructureMapXml`-Konfiguration jede Minute für nachfolgende Service-Session-Läufe. Diese Prüfung lädt keine geänderten JSON-Dateien nach.

### Dateien für Google-Synchronisation

Die Google-Synchronisation erwartet `GoogleServiceUserCertificate.p12` direkt im Installationsverzeichnis des ausführenden Workers, neben `RoomsPro.Worker.exe`. Verwenden Sie den tatsächlich gewählten Worker-Pfad. In Containern binden Sie die Datei schreibgeschützt unter `/app/GoogleServiceUserCertificate.p12` in `rooms-worker` ein. Das Verzeichnis `config` ist dafür nicht der Suchpfad. `Config.bat` verteilt diese Zertifikatsdatei nicht. Beschränken Sie den Dateizugriff auf die benötigten Betriebskonten und den Worker.

### Schriftarten für PDF-Dokumente

Für die lokale PDF-Erstellung mit FlexDoc kann das Betriebsteam unter `DocumentConversion:FlexDoc:FontDirectory` ein Schriftverzeichnis festlegen. Als Umgebungsvariable lautet der Schlüssel `DocumentConversion__FlexDoc__FontDirectory`. Der ausführende Web- oder Dienstprozess benötigt Lesezugriff auf dieses Verzeichnis. Die Linux-Images verwenden `/usr/share/fonts/rooms` und enthalten Arial, Arial Bold und Source Sans Pro Regular. Prüfen Sie das Ergebnis mit den tatsächlich eingesetzten Vorlagen. Ein PDF muss nicht in jedem Layout mit der Word-Darstellung übereinstimmen.

## Konfiguration verteilen und prüfen

1. Speichern Sie alle Änderungen im zentralen Configuration-Verzeichnis.
2. Führen Sie `Config.bat` als Administrator aus.
3. Prüfen Sie bei jeder installierten Komponente die Kopie unter `config\appsettings.operator.json`. Das folgende Beispiel überspringt nicht installierte Komponenten und bricht bei einer fehlenden oder abweichenden Kopie ab. Passen Sie abweichende Installationspfade an:

   ```powershell
   $source = 'C:\Program Files\3volutions\ROOMS\Configuration\appsettings.operator.json'
   $sourceHash = (Get-FileHash $source).Hash
   $targets = @(
     [pscustomobject]@{
       Name = 'ROOMS-Website'
       Executable = 'C:\inetpub\wwwroot\ROOMS\Garaio.Products.Rooms.Web.dll'
       Config = 'C:\inetpub\wwwroot\ROOMS\config\appsettings.operator.json'
     }

     [pscustomobject]@{
       Name = 'RoomsPro Worker'
       Executable = 'C:\Program Files\3volutions\Worker\RoomsPro.Worker.exe'
       Config = 'C:\Program Files\3volutions\Worker\config\appsettings.operator.json'
     }
     [pscustomobject]@{
       Name = 'RoomsPro API'
       Executable = 'C:\inetpub\wwwroot\API\RoomsPro.Web.dll'
       Config = 'C:\inetpub\wwwroot\API\config\appsettings.operator.json'
     }
   )

   foreach ($target in $targets) {
     if (Test-Path $target.Executable) {
       if (-not (Test-Path $target.Config)) {
         throw "$($target.Name): appsettings.operator.json fehlt"
       }
       if ((Get-FileHash $target.Config).Hash -ne $sourceHash) {
         throw "$($target.Name): appsettings.operator.json weicht von der zentralen Datei ab"
       }
       Write-Host "$($target.Name): appsettings.operator.json ist aktuell"
     }
   }
   ```

Die Konfiguration ist damit verteilt. Fahren Sie im [Installationsablauf]({{< relref "Betrieb/Installation/_index.md" >}}) mit der IIS-Konfiguration fort. Bei einer Neuinstallation bleiben Websites und Dienste bis zum erfolgreichen Abschluss der Migration gestoppt.
