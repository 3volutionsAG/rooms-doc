---
title: "Datenbankmigrationen"
linkTitle: "Datenbankmigrationen"
weight: 70
description: 'Aktuelle Anleitung für Datenbankstatus und Migrationen mit der RoomsPro API'
aliases:
  - /de/betrieb/installation/db-updatemanager/
---
Die Datenbankschemata werden heute über die CLI der installierten **RoomsPro API** aktualisiert.

## Voraussetzungen

- Mindestens eine installierte `RoomsPro API`
- Gültige API-Konfiguration mit Datenbankverbindung oder eine explizite Connection String
- Für Updates und Migrationen ein SQL-Konto mit `db_owner`
- Aktuelles Backup der betroffenen Datenbanken

## Standardablauf nach Installation oder Update

1. Stoppen Sie vor grösseren Updates alle relevanten Hintergrunddienste.

   - `ROOMS`
   - `RoomsPro Worker`

2. Wechseln Sie in das Installationsverzeichnis der `RoomsPro API`.

   Beispiel bei Standardpfad:

   ```powershell
   cd C:\inetpub\wwwroot\API
   ```

3. Prüfen Sie zuerst den aktuellen Migrationsstatus:

   ```powershell
   .\RoomsPro.Web.exe db status
   ```

4. Führen Sie bei offenen Migrationen die Aktualisierung aus:

   ```powershell
   .\RoomsPro.Web.exe db migrate
   ```

   Bei langsamen Datenbanken oder besonders umfangreichen Migrationen kann optional ein höheres SQL-Command-Timeout in Sekunden gesetzt werden:

   ```powershell
   .\RoomsPro.Web.exe db migrate --command-timeout 1200
   ```

5. Prüfen Sie den Status erneut:

   ```powershell
   .\RoomsPro.Web.exe db status
   ```

6. Starten Sie Dienste und Websites erst dann wieder vollständig, wenn keine offenen Migrationen mehr vorhanden sind.

## Alternative mit expliziter Connection String

Wenn die Standardkonfiguration auf der Zielmaschine noch nicht vollständig eingerichtet ist, kann eine Connection String direkt übergeben werden:

```powershell
.\RoomsPro.Web.exe db migrate --connection "Server=SQLSERVER;Database=ROOMS;Trusted_Connection=True;TrustServerCertificate=True"
```

Die Optionen können kombiniert werden:

```powershell
.\RoomsPro.Web.exe db migrate --connection "Server=SQLSERVER;Database=ROOMS;Trusted_Connection=True;TrustServerCertificate=True" --command-timeout 1200
```

## Was der Befehl aktualisiert

Der aktuelle Migrationslauf aktualisiert die in der `RoomsPro API` konfigurierten Datenbankkontexte gemeinsam:

- `RoomsDb`
- `LightWeight`
- `TickerQ`

Zusätzlich werden kompatibilitätsbezogene Schemaanpassungen, falls nötig, im selben Ablauf angewendet.

## Hinweise

- `db status` eignet sich für Vorprüfung und Nachkontrolle.
- `db migrate` sollte pro Umgebung und pro betroffener Datenbank einmal ausgeführt werden.
- Standardmässig verwendet `db migrate` ein SQL-Command-Timeout von `600` Sekunden. Über `--command-timeout <Sekunden>` kann dieser Wert bei Bedarf erhöht oder reduziert werden.
- Die CLI kann auf jeder Maschine mit installierter `RoomsPro API` verwendet werden, solange Netzwerkzugriff auf die Datenbank und ausreichende Berechtigungen vorhanden sind.
- Falls ein Migrationslauf fehlschlägt, zuerst Backup und Connection String prüfen, dann die Konsolenausgabe beziehungsweise die API-Logs auswerten.
