---
title: "Konfigurations-Files"
linkTitle: "Konfigurations-Files"
weight: 50
description: Generelle Informationen zur Konfigurationsinfrastruktur
---
<p align = "justify">
Das MSI-Setup installiert auf jeder Maschine die sogenannte Konfigurationsinfrastruktur im Verzeichnis <i>Configuration</i> unter dem für die Installation angegebenen Verzeichnispfad </p>

```
C:\Program Files (x86)\Garaio\ROOMS\Configuration"
```

<p align = "justify">
Das Konzept sieht vor, dass die Konfigurationsdateien immer nur in diesem Verzeichnis angepasst werden (Originale); mittels der mit installierten Datei Config.bat können sie jederzeit in die Verzeichnisse der Webapplikation und des Windows Services verteilt werden (Kopien). </p> </br>

<b>Anmerkung</b>:
Die Datei Config.bat muss also immer ausgeführt werden, nachdem Anpassungen an den Konfigurationsdateien gemacht worden sind.

<p align = "justify">
Dieses Vorgehen wird auch von den MSI-Setups angewendet, welche nach einem Update die bestehenden Konfigurationsdateien automatisch neu verteilen - so wird sichergestellt, dass die Konfigurationsdateien im <b>Configuration Verzeichnis</b> unverändert erhalten bleiben. Normalerweise sind Anpassungen an diesen Dateien nach der Erstinstallation (auch bei einem Update) nicht notwendig. </p>

```
C:\Program Files (x86)\Garaio\ROOMS\Configuration
```

{{< imgproc KonfigVerz Resize "640x" >}} {{< /imgproc >}}

Falls nötig:

1. **Config.bat** als Admin ausführen.
2. **xy.config** als Admin ausführen/bearbeiten.
3. **Restart** ROOMS Windows Service, nach der Ausführung von *Config.bat*

Anforderungen:

1. **Download** [Configuration Template](https://3volutions.atlassian.net/servicedesk/customer/kb/view/508690433)
2. Konfigurationsdateien in das *Configuration Verzeichnis* **kopieren und anpassen**.
   ```
    C:\Program Files (x86)\Garaio\ROOMS\Configuration
   ```
3. **AppSettings.config** </br>
    <p align = "justify">
    <b>DefaultMandator</b>: Unter <i>value</i> den Namen eines im ConnectionStrings.config hinterlegten ConnectionStrings eintragen, der auf diejenige Datenbank zeigt, die als Standard verwendet werden soll. </p>
    Konfigurationsdateien in das <i>Configuration Verzeichnis</i> <b>kopieren und anpassen</b>.

   ```
    <appSettings>
	    <add key="DefaultMandator" value="PROD"/>
    </appSettings>
    ```

4. **ConnectionStrings.config** </br>
   <p align = "justify">
   Für jede zu verwendende Datenbank muss ein <i>add</i> Eintrag vorhanden sein, bestehend aus einem frei wählbaren Namen (ohne Sonderzeichen) und einem ConnectionString, <a href="http://msdn.microsoft.com/de-de/library/system.data.sqlclient.sqlconnection.connectionstring(v=vs.100).aspx"> gemäß Defintion </a> (Beispiele siehe <a href="http://www.connectionstrings.com/sql-server-2008"> hier</a>). Der Name wird in der Webapplikation als Teil der URL sichtbar sein <i>http(s)://SERVER/NAME/etc.</i>. </p>

   ```
    <connectionStrings>
	    <clear/>
	    <add name="PROD" connectionString="Data Source=SERVER;Initial Catalog=DATABASE1;Integrated Security=SSPI;MultipleActiveResultSets=True"/>
	    <add name="DEMO" connectionString="Data Source=SERVER;Initial Catalog=DATABASE2;Integrated Security=SSPI;MultipleActiveResultSets=True"/>
    </connectionStrings>
   ```

    Üblicherweise enthält ein ConnectionString folgende Angaben:

    -  **Datenquelle** (Data Source): 
    MS SQL Server (Servername oder IP Adresse) (mit Instanznamen, wenn es sich nicht um die Default-Instanz handelt)
    - **Datenbank** (Initial Catalog): Name der ROOMS Datenbank
    - **Verbindungsart**: Windows Authentication (Integrated Security=SSPI) oder SQL Benutzer (User Name=XXX; Password=YYY; Persist Security Info=True) </br> </br>

5. **DiagnosticsWeb.config** / **DiagnosticsWindowsService.config** </br>
    <p align = "justify">
    Hier kann das Logging angepasst werden, wobei normalerweise keine Änderungen vorgenommen werden sollten. Sollen zusätzliche Informationen geloggt werden, sind weitere Einträge mit folgendem Format möglich (die Werte NAME, LOGLEVEL und NAMESPACES müssen angepasst werden - 3volutions liefert bei Bedarf die entsprechenden Angaben): </p>

    ```
    <...>
	    <add name="NAME" type="Garaio.Products.Rooms.Core.Helpers.LogListenerSql, Garaio.Products.Rooms.Core">
		    <filter type="Garaio.Library.Core.Diagnostics.LogFilterContext, Garaio.Library.Core" initializeData="LOGLEVEL|^NAMESPACE$"/>
	    </add>
    <...>
    ```
6. **MachineKey.config** </br>
    <p align = "justify">
    Die Verschlüsselung der ROOMS Cookies muss immer mit demselbem Schlüssel vorgenommen werden. 3volutions liefert einen Standard-Schlüssel aus, der normalerweise nicht angepasst werden muss. </p>

**Anmerkung**:
Bei einer WebFarm muss zwingend auf allen Webservern derselbe Schlüssel verwendet werden.