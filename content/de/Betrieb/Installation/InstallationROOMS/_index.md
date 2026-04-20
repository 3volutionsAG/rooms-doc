---
title: "Installation 3V ROOMS"
linkTitle: "Installation 3V ROOMS"
weight: 40
description: 'Grundlegende Informationen zur Installation von 3V ROOMS'
---
Die Dateien werden als MSI-Setup ausgeliefert und können im [Downloadbereich](https://3volutions.atlassian.net/servicedesk/customer/portal/1/article/417300536) heruntergeladen werden (`Rooms_Core_X.msi`). In Windows erscheint das Paket als **3V-ROOMS Installer** beziehungsweise auf x64-Systemen als **3V-ROOMS Installer (x64)**.

Das aktuelle Setup kann mehrere Rollen gleichzeitig bereitstellen:

- Konfigurationskomponenten
- Legacy Website `ROOMS`
- Legacy Windows Service `ROOMS`
- `RoomsPro API`
- `RoomsPro Worker`

Dasselbe MSI kann sowohl für Erstinstallationen als auch für Updates verwendet werden. Eine vorgängige Deinstallation ist nicht erforderlich. Bei einem Update werden die bisher im MSI hinterlegten Werte standardmässig übernommen.

Hinweis:

- Vor einem Update empfiehlt es sich, IIS zu stoppen: `iisreset /stop`
- Nach Abschluss der Update-Arbeiten kann IIS wieder gestartet werden: `iisreset /start`

## Standardpfade

{{< bootstrap-table "table table-striped" >}}
| Komponente | Standardpfad |
|---|---|
| Konfiguration | `C:\Program Files\3volutions\ROOMS\Configuration` |
| Legacy Windows Service | `C:\Program Files\3volutions\ROOMS\WindowsService` |
| `RoomsPro Worker` | `C:\Program Files\3volutions\ROOMS\Worker` |
| Legacy Website `ROOMS` | `C:\inetpub\wwwroot\ROOMS` |
| `RoomsPro API` | `C:\inetpub\wwwroot\API` |
{{< /bootstrap-table >}}

### Installationsassistent

1. Öffnen Sie den **3V-ROOMS Installer**.
   
   {{< imgproc Installationsassistent Resize "640x" >}} {{< /imgproc >}}

2. Akzeptieren Sie die **Lizenzvereinbarung**.
   
   {{< imgproc Lizenzvereinbarung Resize "640x" >}} {{< /imgproc >}}

3. Wählen Sie die **gewünschten Optionen**.
   
   Typische Feature-Kombinationen sind:

   - nur Konfigurationskomponenten auf Administrations- oder Hilfsservern
   - Legacy Website `ROOMS` und Legacy Windows Service `ROOMS`
   - `RoomsPro API` für aktuelle API- und Migrationsfunktionen
   - `RoomsPro Worker` für Hintergrundverarbeitung über TickerQ

   Die Konfigurationskomponenten müssen auf allen Maschinen installiert werden, auf denen lokale Konfigurationsdateien benötigt werden. Installationsverzeichnisse können bei Bedarf über **Durchsuchen** angepasst werden.

   {{< imgproc BenutzerSetup Resize "640x" >}} {{< /imgproc >}}

   {{< imgproc CustomSetup Resize "640x" >}} {{< /imgproc >}}

4. Geben Sie den **Service Domäne-Account** ein. Im Kontext dieses Benutzers werden die Windows-Dienste `ROOMS` und `RoomsPro Worker` ausgeführt, sofern diese Features installiert werden. Werden die Felder leer gelassen, wird der lokale System-Account verwendet. Die Option _Service nach der Installation automatisch starten_ nicht anwählen.
   
   {{< imgproc ServiceKonfig Resize "640x" >}} {{< /imgproc >}}
   
   **Anmerkung**: </br>
   Der Benutzername muss zwingend mit der vorangestellten Domäne angegeben werden, ansonsten bricht das Setup während der Installation ab. </br>
5. Klicken Sie auf **Installieren**.
   
   {{< imgproc Installieren Resize "640x" >}} {{< /imgproc >}}

## Nach der Installation

1. Prüfen Sie die lokalen Konfigurationsdateien und Lizenzen im [Configuration-Verzeichnis]({{< relref "Betrieb/Installation/Konfig-Files/_index.md" >}}).
2. Richten Sie die benötigten IIS-Sites und Application Pools gemäss [IIS Konfiguration]({{< relref "Betrieb/Installation/IIS-Konfiguration/_index.md" >}}) ein.
3. Stellen Sie sicher, dass mindestens auf einer Maschine die `RoomsPro API` installiert und betriebsbereit konfiguriert ist. Die aktuelle Datenbankmigration erfolgt über deren CLI.
4. Führen Sie im Installationsverzeichnis der `RoomsPro API` den Datenbankstatus und danach gegebenenfalls die Migration aus.

   Beispiel bei Standardpfad:

   ```powershell
   cd C:\inetpub\wwwroot\API
   .\RoomsPro.Web.exe db status
   .\RoomsPro.Web.exe db migrate
   ```

   Falls ein Migrationslauf für grössere Datenbanken mehr Zeit benötigt, kann optional ein höheres SQL-Command-Timeout gesetzt werden:

   ```powershell
   .\RoomsPro.Web.exe db migrate --command-timeout 1200
   ```

   Alternativ kann eine explizite Connection String angegeben werden:

   ```powershell
   .\RoomsPro.Web.exe db migrate --connection "Server=SQLSERVER;Database=ROOMS;Trusted_Connection=True;TrustServerCertificate=True"
   ```

   Die Optionen können kombiniert werden:

   ```powershell
   .\RoomsPro.Web.exe db migrate --connection "Server=SQLSERVER;Database=ROOMS;Trusted_Connection=True;TrustServerCertificate=True" --command-timeout 1200
   ```

   Details zum Ablauf finden Sie unter [Datenbankmigrationen]({{< relref "Betrieb/Installation/Datenbankmigrationen/_index.md" >}}).

5. Starten Sie die installierten Windows-Dienste erst dann, wenn `db status` keine offenen Migrationen mehr meldet.

   - Legacy Windows Service: `ROOMS`
   - Hintergrundverarbeitung: `RoomsPro Worker`

6. Führen Sie anschliessend einen Smoke Test durch:

   - Legacy Website `ROOMS` öffnen
   - `RoomsPro API` aufrufen
   - Anmelde- und Synchronisationspfade der verwendeten Umgebung testen
   - Worker- und Service-Logs auf Startfehler prüfen

### Deinstallation

1. Konfigurationsdateien und Lizenzen im Configuration-Verzeichnis sichern oder löschen, sofern die Installation vollständig entfernt werden soll.
2. Installierte Windows-Dienste `ROOMS` und `RoomsPro Worker` stoppen.
3. Die Installationsdatei erneut ausführen und die Option **Entfernen** wählen oder in **Programme und Funktionen** den Eintrag **3V-ROOMS Installer** beziehungsweise **3V-ROOMS Installer (x64)** entfernen.
4. Manuell angelegte IIS-Sites, Bindings und Application Pools bei Bedarf separat löschen oder umkonfigurieren.
