---
title: "IIS Konfiguration"
linkTitle: "IIS Konfiguration"
weight: 60
description: 'Aktuelle Hinweise zur IIS Konfiguration für Legacy Website und RoomsPro API'
---
Diese Seite beschreibt die aktuelle IIS-Konfiguration für Windows-Installationen mit:

- der Legacy Website `ROOMS`
- der `RoomsPro API`

Beide Rollen können auf demselben Server oder getrennt betrieben werden. Wenn beide Rollen auf einer Maschine installiert werden, müssen auch beide Voraussetzungen erfüllt sein.

## Voraussetzungen

- Windows Server x64 mit IIS 10 oder neuer
- Für die Legacy Website `ROOMS`: `.NET Framework 4.8`
- Für die `RoomsPro API`: ASP.NET Core Hosting Bundle für `.NET 10` (x64)

Wichtige Hinweise:

- **WebDAV** auf der ROOMS Website nicht aktivieren
- Die `RoomsPro API` ist **keine** klassische ASP.NET-4.x-Anwendung und benötigt stattdessen `AspNetCoreModuleV2`
- Die Legacy Website verwendet weiterhin klassische ASP.NET-4.x-Komponenten

## Empfohlene IIS-Rollen und Features

### Für die Legacy Website `ROOMS`

- Common HTTP Features
  - Default Document
  - HTTP Errors
  - Static Content
  - HTTP Redirection
- Health and Diagnostics
  - HTTP Logging
- Performance
  - Static Content Compression
  - Dynamic Content Compression
- Security
  - Request Filtering
  - Anonymous Authentication
  - Windows Authentication oder Basic Authentication nur für explizite Legacy-Sonderfälle
- Application Development
  - `.NET Extensibility 4.8`
  - `ASP.NET 4.8`
  - `ISAPI Extensions`
  - `ISAPI Filters`
- Windows Features
  - `.NET Framework 4.8 Features`

### Für die `RoomsPro API`

- IIS mit eigenem Site- oder Application-Eintrag
- installiertes ASP.NET Core Hosting Bundle für `.NET 10` (x64)
- `AspNetCoreModuleV2` verfügbar
- `Anonymous Authentication` aktiviert

## Gemeinsame Identität

Beide Application Pools werden mit demselben ROOMS-Service-Account betrieben, der auch für die Windows-Dienste `ROOMS` und `RoomsPro Worker` verwendet wird.

1. Nehmen Sie den Account auf dem Webserver in die Gruppe **IIS_IUSRS** auf oder vergeben Sie gleichwertige Rechte.
2. Geben Sie ihm Lese- und Ausführungsrechte auf beide Installationsverzeichnisse.
3. Geben Sie ihm Lesezugriff auf die verteilten Konfigurations- und Lizenzdateien.
4. Geben Sie ihm Schreibrechte auf die vorgesehenen Logverzeichnisse.

## Legacy Website `ROOMS` konfigurieren

1. Im IIS einen eigenen Application Pool für die Legacy Website anlegen, zum Beispiel `ROOMS`.
2. Verwenden Sie als **Identity** den gemeinsamen ROOMS-Service-Account.
3. Die Website auf das Installationsverzeichnis der Legacy Website zeigen lassen, standardmässig:

   ```text
   C:\inetpub\wwwroot\ROOMS
   ```

4. Bindings, Hostname und SSL-Zertifikate gemäss Umgebung setzen.
5. Authentifizierung passend zur Umgebung konfigurieren.

Typische Variante:

- `Anonymous Authentication` aktiviert
- `Windows Authentication` deaktiviert
- `Basic Authentication` deaktiviert

Für die aktuelle Standardinstallation wird die Legacy Website anonym betrieben; die eigentliche Authentisierung erfolgt über die API beziehungsweise den IdentityServer/OpenIddict-Flow. Von dieser Default-Konfiguration sollte nur abgewichen werden, wenn bewusst ein spezieller Legacy-Authentifizierungsweg betrieben wird.

Hinweis:

- Frühere Hinweise zu einem separaten Unterverzeichnis `WebServices` betreffen Altinstallationen. Für die aktuelle `RoomsPro API` wird eine **eigene** IIS-Site oder Application verwendet.

## `RoomsPro API` konfigurieren

1. Im IIS eine eigene Site oder Application für die `RoomsPro API` anlegen.
2. Als Physical Path das API-Verzeichnis verwenden, standardmässig:

   ```text
   C:\inetpub\wwwroot\API
   ```

3. Verwenden Sie für die API einen separaten Application Pool.
4. Verwenden Sie als **Identity** denselben ROOMS-Service-Account wie beim Legacy Application Pool und den Windows-Diensten.
5. Stellen Sie für den API Application Pool **No Managed Code** ein. Die Anwendung wird über `AspNetCoreModuleV2` gestartet.
6. Aktivieren Sie `Anonymous Authentication`.
7. Stellen Sie sicher, dass das ASP.NET Core Hosting Bundle korrekt installiert ist und `AspNetCoreModuleV2` geladen werden kann.
8. Prüfen Sie vor dem ersten Start, dass folgende Datei vorhanden ist und die richtige Datenbankverbindung enthält:

   ```text
   C:\inetpub\wwwroot\API\config\appsettings.json
   ```

9. Lassen Sie den Application Pool bis zum erfolgreichen Abschluss von `db migrate` gestoppt.

## SSL und Betrieb

- Für produktive Umgebungen ist HTTPS für Legacy Website und `RoomsPro API` empfohlen.
- DNS-Namen und Zertifikate für beide Sites sauber trennen und dokumentieren.
- Nach Änderungen an IIS, Bindings oder Hosting Bundle die Sites neu starten und die Logs prüfen.

## Deinstallation

- IIS-Sites, Application Pools und Bindings bei Bedarf manuell löschen oder umkonfigurieren.
- Installierte Dateien werden über das MSI entfernt; die IIS-Konfiguration ist anschliessend separat zu bereinigen.
