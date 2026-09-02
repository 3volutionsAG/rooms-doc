---
title: "Datenbankberechtigungen"
linkTitle: "Datenbankberechtigungen"
weight: 30
description: 'SQL- und Windows-Berechtigungen des gemeinsamen ROOMS-Service-Accounts'
aliases:
  - /de/betrieb/installation/sql_programmability/
  - /betrieb/installation/sql_programmability/
  - /de/betrieb/installation/sql-programmability/
  - /betrieb/installation/sql-programmability/
---
Für alle Windows-Komponenten einer ROOMS-Umgebung wird derselbe dedizierte Service-Account verwendet, zum Beispiel `Domäne\ROOMSSERVICE`.

Der Account betreibt:

- den IIS Application Pool der Legacy Website `ROOMS`
- den IIS Application Pool der `RoomsPro API`
- den Windows-Dienst `ROOMS`
- den Windows-Dienst `RoomsPro Worker`

Bei Docker Compose gilt dasselbe Rollenmodell für die gemeinsame Datenbankidentität aus `ConnectionStrings.config` und `appsettings.json`. Da Linux- und Windows-Container keinen gemeinsamen Windows-Prozessaccount verwenden können, sind die Besonderheiten unter [Docker: Gemeinsame Datenbankidentität]({{< relref "Betrieb/Installation/Docker/_index.md#gemeinsame-datenbankidentität" >}}) beschrieben.

## SQL-Login und Laufzeitrechte

1. Öffnen Sie in SQL Server Management Studio unter **Security** > **Logins** die gemeinsame Datenbankidentität oder legen Sie diese neu an.
2. Verwenden Sie beim Windows-Standardweg als Login-Name den vollständigen Wert `Domäne\Benutzer`.
3. Belassen Sie die **Default language** des Logins auf `<default>`. Eine abweichende login-spezifische Sprache kann die SQL-Konvertierung von Datumswerten verändern.
4. Ordnen Sie den Login jeder ROOMS-Mandantendatenbank zu.
5. Weisen Sie ihm in jeder Datenbank die Rollen `db_datareader` und `db_datawriter` zu.

Die Rolle `public` muss nicht separat vergeben werden; jeder Datenbankbenutzer gehört ihr automatisch an.

## Temporäre Migrationsrechte

Die Schemaaktualisierung benötigt erweiterte Rechte. Fügen Sie die gemeinsame Datenbankidentität vor `db migrate` in jeder zu migrierenden Mandantendatenbank vorübergehend der Rolle `db_owner` hinzu.

Verwenden Sie `db_owner` nicht als dauerhaftes Laufzeitrecht.

## Windows- und Dateisystemrechte

Bei der Windows-Installation benötigt der gemeinsame Service-Account zusätzlich:

- das Recht **Anmelden als Dienst** für `ROOMS` und `RoomsPro Worker`
- die Mitgliedschaft in `IIS_IUSRS` oder gleichwertige Berechtigungen für beide IIS Application Pools
- Lese- und Ausführungsrechte auf den Installationsverzeichnissen
- Lesezugriff auf die verteilten Konfigurations- und Lizenzdateien
- Schreibrechte auf die vorgesehenen Logverzeichnisse
- Netzwerkzugriff auf SQL Server und die verwendeten Drittsysteme

## Rechte nach der Migration reduzieren

Nach erfolgreichem `db migrate` und abschliessendem `db status`:

1. Entfernen Sie die gemeinsame Datenbankidentität in jeder Mandantendatenbank aus `db_owner`.
2. Belassen Sie `db_datareader` und `db_datawriter`.
3. Starten Sie erst danach Websites und Dienste vollständig.
4. Prüfen Sie Anmeldung, Datenzugriff und Hintergrundverarbeitung.
