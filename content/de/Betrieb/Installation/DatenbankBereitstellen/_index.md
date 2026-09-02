---
title: "Datenbank bereitstellen"
linkTitle: "Datenbank bereitstellen"
weight: 20
description: 'ROOMS-Datenbank für eine Neuinstallation aus dem aktuellen Baukasten bereitstellen'
aliases:
  - /de/betrieb/installation/datenbankerstellen/
  - /betrieb/installation/datenbankerstellen/
---
Für eine ROOMS-Neuinstallation wird eine aktuelle Baukasten-Datenbank von 3volutions wiederhergestellt. Sie enthält die benötigten ROOMS-Stammdaten und Datenbankobjekte. Das Backup steht im Downloadbereich als [3volutions Datenbank – Baukasten.bak](https://3volutions.atlassian.net/servicedesk/customer/portal/1/article/529432586) zur Verfügung.

Eine leere Datenbank ist kein unterstützter Standardweg für eine produktive Neuinstallation. Die aktuelle RoomsPro CLI stellt keinen Befehl `db create` bereit und erzeugt mit `db migrate` allein keine vollständigen ROOMS-Stammdaten.

## Voraussetzungen

- Aktuelles Baukasten-Backup von 3volutions
- Microsoft SQL Server und SQL Server Management Studio
- SQL-Administrationskonto mit Berechtigung zum Wiederherstellen von Datenbanken
- Festgelegter Datenbankname und geprüfte Ablagepfade für Daten- und Logdateien
- Festgelegte gemeinsame Datenbankidentität für alle ROOMS-Komponenten; bei der Windows-Installation der ROOMS-Service-Account im Format `Domäne\Benutzer`

## Baukasten-Datenbank wiederherstellen

1. Öffnen Sie SQL Server Management Studio und verbinden Sie sich mit dem vorgesehenen SQL Server.
2. Öffnen Sie über **Databases** > **Restore Database** den Wiederherstellungsdialog.
3. Wählen Sie unter **Source** die Option **Device** und danach das aktuelle Baukasten-Backup aus.
4. Aktivieren Sie den wiederherzustellenden Backup-Satz.
5. Tragen Sie unter **Destination** den vorgesehenen Namen der ROOMS-Datenbank ein.
6. Prüfen Sie unter **Files**, **Options** beziehungsweise **Restore As** die physischen Namen und Ablagepfade der Daten- und Logdateien. Sie dürfen nicht mit Dateien einer bestehenden Datenbank kollidieren.
7. Starten Sie den Restore und warten Sie auf dessen erfolgreichen Abschluss.
8. Wiederholen Sie den Vorgang für jede weitere Mandantendatenbank mit einem eigenen Datenbanknamen und eigenen Dateipfaden.
9. Erstellen Sie vor der weiteren Bearbeitung eine Sicherung der frisch wiederhergestellten Datenbank.

## Initialen Administrator zuordnen

Das Baukasten-Backup enthält eine dafür vorgesehene, bereits berechtigte Administrator-Person mit einem vorbereiteten Logon. Durch die folgende Anpassung wird der Windows-Account dieser Person zugeordnet; es werden dabei keine Administratorrechte neu erzeugt.

1. Öffnen Sie in der wiederhergestellten Datenbank die Tabelle `dbo.Logon`.
2. Suchen Sie ausschließlich den für die initiale Administration vorgesehenen Baukasten-Logon.
3. Ersetzen Sie dessen Feld `Name` durch den persönlichen Administrator-Account im Format `Domäne\Benutzer`.
4. Ändern Sie weder `PersonId` noch `LogontypId` oder andere Logon-Zeilen.
5. Wiederholen Sie die Zuordnung für jede Mandantendatenbank.

Falls der vorgesehene Baukasten-Logon nicht eindeutig identifiziert werden kann, darf keine beliebige Zeile angepasst werden. Wenden Sie sich in diesem Fall an 3volutions.

## Nächste Schritte

1. Vergeben Sie die [Datenbankberechtigungen]({{< relref "Betrieb/Installation/Datenbankberechtigungen/_index.md" >}}) an die gemeinsame Datenbankidentität. Bei Docker Compose gelten ergänzend die [Hinweise zur gemeinsamen Anwendungsidentität]({{< relref "Betrieb/Installation/Docker/_index.md#gemeinsame-datenbankidentität" >}}).
2. Installieren und konfigurieren Sie die ROOMS-Komponenten.
3. Führen Sie anschließend die [Datenbankmigrationen]({{< relref "Betrieb/Installation/Datenbankmigrationen/_index.md" >}}) aus.
