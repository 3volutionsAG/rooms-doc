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
| `appsettings.operator.json`, `*.lic` | Verzeichnis `config` aller vier installierten Komponenten |
| `appsettings.json` | Anwendungsverzeichnis der Legacy Website und des ROOMS-Diensts. Verzeichnis `config` der RoomsPro API und des Workers |
| `RoomsAppSettings.config`, `ConnectionStrings.config` | Werden ebenfalls verteilt. Die Legacy-Komponenten lesen diese XML-Einstellungen als zusätzliche Konfigurationsquelle |
{{< /bootstrap-table >}}

`Config.bat` erkennt die installierten Komponenten und ihre registrierten Zielpfade. Die API-Verteilung ist enthalten. Verwenden Sie die ausgelieferte Datei ohne manuelle Kopierroutinen.

## Individuelle Betriebseinstellungen

Legen Sie individuelle Werte in dieser selbst verwalteten Datei ab:

```text
C:\Program Files\3volutions\ROOMS\Configuration\appsettings.operator.json
```

Das MSI liefert die Basiskonfiguration in `appsettings.json`. Die Operator-Datei wird nicht vom MSI geliefert und bleibt bei einer erneuten Installation erhalten. Sie wird nach den Basis- und Umgebungseinstellungen gelesen und kann diese überschreiben. Bei den Legacy-Komponenten hat sie auch Vorrang vor den XML-Dateien. Hierarchische Umgebungsvariablen mit `__` haben Vorrang vor der Operator-Datei. Starten Sie betroffene Websites und Dienste nach dem Verteilen neu. Änderungen an der Operator-Datei werden nicht automatisch eingelesen.

Da alle vier Komponenten dieselbe Operator-Datei erhalten, gehören nur gemeinsam passende Werte hinein. Konfigurieren Sie hostabhängige Listener wie `Urls` oder `Kestrel` nicht pauschal in dieser Datei.

### Eine Datenbank pro Installation

Jede ROOMS-Installation verwendet genau eine Datenbank. Die Legacy Website und der ROOMS-Dienst benötigen in der wirksamen Konfiguration genau einen nicht leeren Eintrag unter `ConnectionStrings`. API und Worker verwenden separat `IdentityServer:RoomsDatabase`. Beide Verbindungsangaben müssen auf dieselbe ROOMS-Datenbank und dieselbe Anwendungsidentität zeigen. Ein Eintrag ersetzt den anderen nicht.

Fehlt der Legacy-Verbindungseintrag oder haben mehrere Einträge einen Wert, starten die Legacy-Komponenten nicht. Bei mehreren Einträgen nennt die Fehlermeldung deren Namen. Prüfen Sie auch geerbte Werte aus Basis-, XML- und Umgebungskonfiguration. Überzählige geerbte Einträge können Sie in `appsettings.operator.json` unter demselben Namen auf `""` setzen. Das blosse Weglassen eines Eintrags in dieser Datei entfernt keinen geerbten Wert.

Behalten Sie bei einer bestehenden Installation den Namen des verwendeten Verbindungseintrags bei. Er bestimmt, welche alten URLs mit Mandantenpräfix erkannt werden. Für eine neue Installation kann der Eintrag beispielsweise `Default` heissen. `Rooms:DefaultMandator` hat keine Wirkung.

Beispiel für den Windows-Standardaufbau mit integriertem Service-Account:

```json
{
  "ConnectionStrings": {
    "Default": "Server=SQLSERVER;Database=ROOMS;Integrated Security=True;MultipleActiveResultSets=True;TrustServerCertificate=True"
  },
  "IdentityServer": {
    "RoomsDatabase": "Server=SQLSERVER;Database=ROOMS;Integrated Security=True;MultipleActiveResultSets=True;TrustServerCertificate=True"
  }
}
```

Passen Sie Server, Datenbank und TLS-Vertrauen an Ihre Umgebung an. Bewahren Sie Zugangsdaten nicht in Beispielen, Skripten oder ungeschützten Dateien auf. Für `IdentityServer:RoomsDatabase` lautet die Umgebungsvariable `IdentityServer__RoomsDatabase`, für den gezeigten Legacy-Eintrag `ConnectionStrings__Default`.

Weitere ROOMS-Einstellungen gehören unter `Rooms`, beispielsweise `Rooms:DefaultAuth`. Die OpenID-Connect-Einstellungen der Legacy Website stehen unter `Authentication:OpenIdConnect`.

### Öffentliche ROOMS-URL und Anmeldung

Die öffentliche ROOMS-URL enthält kein Mandantenpräfix. Beispiel: `https://rooms.example.ch` beziehungsweise `https://example.ch/Rooms`, wenn die Anwendung unter `/Rooms` installiert ist. Der Installationspfad bleibt erhalten.

- Verwenden Sie diese Basis für **Applikation Root-Url** (Parameter 18) und die entsprechende öffentliche anonyme Basis für **Applikation Root-Url Anonymous** (Parameter 60).
- Ein expliziter Wert für `Authentication:OpenIdConnect:RedirectUri` muss auf die öffentliche ROOMS-Anwendungswurzel zeigen, ohne Mandantenpräfix. Ohne diesen Wert verwendet die Website Parameter 18. Der Anmelde-Callback wird aus dieser URL abgeleitet.
- Stimmen Sie gegebenenfalls eigene Einträge für den Client `rooms` unter `IdentityServer:Clients` auf diese URLs ab. RoomsPro ergänzt dessen Anmelde-, Abmelde- und CORS-Adressen beim Start aus den konfigurierten Root-URLs. CORS-Origins enthalten nur Schema, Host und gegebenenfalls Port, keinen Pfad.
- Verwenden Sie die passende Basis auch in quickROOMS `rootUrl`, Add-In-Manifesten sowie Türschild- und Welcome-Screen-URLs. Prüfen Sie Reverse-Proxy-Regeln, die ein Mandantenpräfix voraussetzen. Die eigenen Callback-URLs des Wizards bleiben davon getrennt.

#### Bestehende Links mit Mandantenpräfix

Für das Präfix mit dem Namen des verwendeten Verbindungseintrags besteht eine Kompatibilitätsbehandlung. Normale Browser-Seitenaufrufe werden dauerhaft auf die URL ohne dieses Präfix weitergeleitet. Aufrufe für Add-In-Seiten, Inhalte und Schnittstellen sowie Nicht-GET/HEAD-Anfragen und Anmelde-Callbacks werden unter dem alten Pfad verarbeitet. Das ersetzt keine Prüfung der konfigurierten URLs und ist keine Zusage, dass jede alte Adresse erfolgreich ist. Verwenden Sie für neue Links die URL ohne Mandantenpräfix.

{{% alert title="Grenzen der alten URLs" color="warning" %}}
Nur der Name des verwendeten Verbindungseintrags wird als altes Präfix erkannt. Andere frühere Mandantennamen erhalten keine solche Kompatibilitätsbehandlung. Entspricht der Name dem Anfang einer aktuellen Route, beispielsweise `Home`, `Calendar` oder `api`, ist die gesamte Kompatibilitätsbehandlung deaktiviert. Der Webhost protokolliert dazu eine Warnung. Prüfen Sie in diesem Fall die betroffenen Geräte und Links direkt mit der aktuellen URL.
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

### `RoomsAppSettings.config`

Die Legacy-Komponenten lesen bestehende Einstellungen aus dieser Datei als zusätzliche Konfigurationsquelle. Individuelle Werte pflegen Sie bevorzugt in `appsettings.operator.json`. Ein vorhandener Eintrag `DefaultMandator` wählt keine Datenbank aus.

### `ConnectionStrings.config`

Die Datei kann den einen Verbindungseintrag dieser Installation liefern. Entscheidend ist die wirksame Konfiguration nach allen Überschreibungen, wie unter [Eine Datenbank pro Installation](#eine-datenbank-pro-installation) beschrieben. Der Name ist kein Bestandteil der aktuellen ROOMS-URL.

```xml
<connectionStrings>
  <clear />
  <add name="Default" connectionString="Data Source=SQLSERVER;Initial Catalog=ROOMS;Integrated Security=SSPI;MultipleActiveResultSets=True" />
</connectionStrings>
```

Verwenden Sie für den dokumentierten Windows-Standardweg die integrierte Authentifizierung mit dem gemeinsamen ROOMS-Service-Account.

### SQL-Authentifizierung für Legacy

Wenn sich die Legacy Website und der ROOMS-Dienst mit SQL-Benutzername und Passwort anmelden, muss die jeweilige Verbindungszeichenfolge zusätzlich `Persist Security Info=True` enthalten. Das gilt sowohl bei MSI- als auch bei Container-Installationen. Der Wert kann unter `ConnectionStrings:<Eintragsname>` in der Operator-Datei oder im entsprechenden Eintrag von `ConnectionStrings.config` stehen.

```xml
<connectionStrings>
  <clear />
  <add name="Default" connectionString="Data Source=SQLSERVER;Initial Catalog=ROOMS;User ID=ROOMS_APP;Password='BESTEHENDES_PASSWORT';MultipleActiveResultSets=True;Persist Security Info=True" />
</connectionStrings>
```

Das Beispiel verwendet Platzhalter. Behalten Sie bei einem bestehenden Eintrag dessen Namen, Server, Datenbank, Benutzername, Passwort und weitere Verbindungsparameter unverändert bei. Ergänzen Sie nur `Persist Security Info=True`. Ersetzen Sie nicht die gesamte Datei durch das Beispiel. Das Passwort muss weiterhin korrekt für die Verbindungszeichenfolge und das XML-Attribut maskiert sein.

Ohne diesen Parameter gilt standardmässig `False`. Eine erste Datenbankanmeldung kann dann erfolgreich sein, während ein späterer erneuter Verbindungsaufbau das Passwort verliert. Dadurch können beispielsweise Hintergrundaufträge oder Exporte mit einem SQL-Anmeldefehler abbrechen. Der Parameter verhindert diesen Passwortverlust, behebt aber nicht automatisch andere Ursachen eines fehlgeschlagenen Auftrags.

Diese Anforderung entsteht durch die Verbindungsverwaltung der Legacy-Komponenten. Bei integrierter Windows-Authentifizierung wird kein SQL-Passwort im Connection String hinterlegt. RoomsPro API mit integriertem IDP und RoomsPro Worker benötigen diese Legacy-Einstellung nicht. Übertragen Sie den Parameter deshalb nicht pauschal in deren `IdentityServer:RoomsDatabase`.

{{% alert title="Zugangsdaten schützen" color="warning" %}}
Mit `Persist Security Info=True` bleibt das Passwort über die Verbindungszeichenfolge einer geöffneten Verbindung auslesbar. Beschränken Sie den Zugriff auf Konfigurationsdateien und protokollieren oder versenden Sie keine vollständigen Connection Strings mit Zugangsdaten.
{{% /alert %}}

Prüfen Sie vor der Änderung, ob der Eintrag zur betroffenen Installation und Datenbank gehört. Sichern Sie die bisherige Konfiguration und verteilen Sie die geänderte Datei an beide Legacy-Komponenten. Bei einer bestehenden Installation starten Sie die betroffenen Legacy-Komponenten in einem abgestimmten Wartungsfenster neu. Wiederholen Sie anschliessend den zuvor fehlgeschlagenen Auftrag und prüfen Sie dessen Ergebnis sowie die Ereignisanzeige. Eine erfolgreiche Anmeldung allein bestätigt noch keinen erfolgreichen Export.

### Logging und Lizenzen

Logstufen und Logziele der Legacy-Komponenten werden über `Serilog` in der `appsettings.operator.json` konfiguriert. `DiagnosticsWeb.config` und `DiagnosticsWindowsService.config` steuern das Logging nicht. Beim Start weist eine Warnung auf solche vorhandenen Dateien hin.

Die ROOMS-Website speichert ihren Data-Protection-Schlüsselbund in der Datenbank der Installation. Eine gemeinsame `MachineKey.config` ist dafür nicht vorgesehen.

Lizenzdateien mit der Endung `.lic` werden aus dem zentralen Configuration-Verzeichnis verteilt.

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
       Name = 'ROOMS-Dienst'
       Executable = 'C:\Program Files\3volutions\ROOMS\WindowsService\Garaio.Products.Rooms.WindowsService.exe'
       Config = 'C:\Program Files\3volutions\ROOMS\WindowsService\config\appsettings.operator.json'
     }
     [pscustomobject]@{
       Name = 'RoomsPro Worker'
       Executable = 'C:\Program Files\3volutions\ROOMS\Worker\RoomsPro.Worker.exe'
       Config = 'C:\Program Files\3volutions\ROOMS\Worker\config\appsettings.operator.json'
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
