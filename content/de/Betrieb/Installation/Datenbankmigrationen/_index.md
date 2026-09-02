---
title: "Datenbankmigrationen"
linkTitle: "Datenbankmigrationen"
weight: 70
description: 'Baukasten-Datenbank bei einer Neuinstallation auf den Stand der installierten ROOMS-Version bringen'
aliases:
  - /de/betrieb/installation/db-updatemanager/
  - /betrieb/installation/db-updatemanager/
---
Nach der Wiederherstellung der Baukasten-Datenbank wird ihr Schema über die CLI der installierten **RoomsPro API** auf den Stand der installierten ROOMS-Version gebracht.

## Voraussetzungen

- Die aktuelle [Baukasten-Datenbank wurde wiederhergestellt]({{< relref "Betrieb/Installation/DatenbankBereitstellen/_index.md" >}}).
- Eine Sicherung der wiederhergestellten Datenbank ist vorhanden.
- Die `RoomsPro API` ist installiert.
- Die zentrale `appsettings.json` wurde mit der angepassten [`Config.bat`]({{< relref "Betrieb/Installation/Konfig-Files/_index.md" >}}) an API und Worker verteilt.
- Der gemeinsame ROOMS-Service-Account besitzt vorübergehend `db_owner` auf der zu migrierenden Datenbank.
- Legacy Website, ROOMS Service und RoomsPro Worker sind noch nicht gestartet beziehungsweise gestoppt.

## Datenbankstatus prüfen

1. Öffnen Sie eine PowerShell mit dem gemeinsamen ROOMS-Service-Account oder in dessen Datenbankkontext.
2. Wechseln Sie in das Installationsverzeichnis der `RoomsPro API`.

   ```powershell
   Set-Location C:\inetpub\wwwroot\API
   ```

3. Prüfen Sie den Migrationsstatus:

   ```powershell
   .\RoomsPro.Web.exe db status
   ```

`db status` gibt Exitcode `1` zurück, solange Migrationen offen sind. Das ist vor der ersten Migration einer neu bereitgestellten Baukasten-Datenbank zu erwarten und bedeutet nicht, dass der Statusbefehl selbst fehlgeschlagen ist. Die Konsolenausgabe zeigt die offenen Migrationen.

## Migration ausführen

```powershell
.\RoomsPro.Web.exe db migrate
```

Standardmäßig gilt für einzelne SQL-Befehle ein Timeout von `600` Sekunden. Bei großen Datenbanken kann der Wert angepasst werden:

```powershell
.\RoomsPro.Web.exe db migrate --command-timeout 1200
```

Der Befehl aktualisiert die drei Datenbankkontexte in zeitlicher Reihenfolge:

- `RoomsDb`
- `LightWeight`
- `TickerQ`

Zusätzlich werden erforderliche Kompatibilitätsanpassungen im selben Ablauf ausgeführt.

## Status abschließend prüfen

```powershell
.\RoomsPro.Web.exe db status
```

Die Migration ist erst abgeschlossen, wenn keine offenen Migrationen mehr ausgegeben werden und der Befehl Exitcode `0` zurückgibt.

Entfernen Sie danach gemäß [Datenbankberechtigungen]({{< relref "Betrieb/Installation/Datenbankberechtigungen/_index.md#rechte-nach-der-migration-reduzieren" >}}) die temporäre Mitgliedschaft in `db_owner`. Starten Sie Websites und Dienste erst anschließend.

## Mehrere Mandantendatenbanken

Führen Sie Statusprüfung und Migration für jede Mandantendatenbank separat aus. Wenn die zentrale API-Konfiguration auf eine andere Datenbank zeigt, übergeben Sie die gewünschte Verbindung explizit:

```powershell
.\RoomsPro.Web.exe db status --connection "Server=SQLSERVER;Database=ROOMS_MANDANT;Trusted_Connection=True;TrustServerCertificate=True"
.\RoomsPro.Web.exe db migrate --connection "Server=SQLSERVER;Database=ROOMS_MANDANT;Trusted_Connection=True;TrustServerCertificate=True"
.\RoomsPro.Web.exe db status --connection "Server=SQLSERVER;Database=ROOMS_MANDANT;Trusted_Connection=True;TrustServerCertificate=True"
```

Verwenden Sie in Skripten keine Klartextkennwörter. Der dokumentierte Windows-Standardweg nutzt die integrierte Authentifizierung mit dem gemeinsamen ROOMS-Service-Account.

## Fehlerbehandlung

- Prüfen Sie, ob die richtige Baukasten-Datenbank und Verbindung verwendet werden.
- Prüfen Sie, ob `appsettings.json` in API und Worker identisch ist.
- Prüfen Sie Netzwerkzugriff und die temporäre `db_owner`-Berechtigung.
- Werten Sie Konsolenausgabe und API-Logs aus.
- Starten Sie die Anwendung nach einem fehlgeschlagenen Migrationslauf nicht, sondern stellen Sie zuerst einen konsistenten Datenbankstand her.
