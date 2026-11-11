---
title: "Docker Compose auf Linux"
linkTitle: "Docker"
weight: 90
description: 'ROOMS mit Linux-Containern und einem zentralen Reverse Proxy bereitstellen'
aliases:
  - /de/betrieb/docker/
  - /betrieb/docker/
---

ROOMS-Website, ROOMS-Dienst, RoomsPro API und RoomsPro Worker werden als Linux-Container bereitgestellt. Docker Compose hält Images, Mounts, Ports und Neustartverhalten fest. Ein vorgeschalteter Nginx-Proxy übernimmt DNS-Namen, TLS-Zertifikate und Weiterleitungs-Header.

## Voraussetzungen

- Linux-Host mit Docker Engine und Docker Compose für `linux/amd64`
- Zugriff auf die privaten Packages in `ghcr.io`, bei 3volutions anzufordern und mit `docker login ghcr.io` einzurichten
- DNS-Namen für ROOMS-Website und RoomsPro API, beispielsweise `rooms.example.ch` und `api.rooms.example.ch`
- Zertifikat mit beiden DNS-Namen oder je ein Zertifikat pro Name, jeweils im PEM-Format für Nginx
- Netzwerkzugriff der ROOMS-Container auf dieselbe SQL-Server-Umgebung und die benötigten externen Systeme
- aktuelle [Baukasten-Datenbank]({{< relref "Betrieb/Installation/DatenbankBereitstellen/_index.md" >}}) und eine Sicherung unmittelbar vor der Migration

{{% alert title="Windows-abhängige Integrationen" color="warning" %}}
Windows-Anmeldung, integrierte Windows-Zugangsdaten und hardwaregebundene Lizenzen benötigen die [Windows-Installation mit MSI und IIS]({{< relref "Betrieb/Installation/_index.md" >}}). Verwenden Sie für Container SQL-Anmeldedaten und für Exchange OAuth oder Microsoft Graph. Die Anmeldung über einen externen OpenID-Connect-Anbieter, beispielsweise Entra ID oder ADFS, wird in RoomsPro konfiguriert.
{{% /alert %}}

## Zielarchitektur und Images

```text
Clients -- HTTPS 443 --> Nginx
                         |-- rooms.example.ch     --> rooms-web:80
                         `-- api.rooms.example.ch --> rooms-api:80

Linux-Host: rooms-web, rooms-service, rooms-api, rooms-worker, Nginx
Alle ROOMS-Komponenten: Zugriff auf dieselbe SQL-Server-Umgebung
```

Nur Nginx erhält veröffentlichte Ports. ROOMS-Website, API, Dienste und SQL Server erhalten keinen öffentlichen Ingress.

{{< bootstrap-table "table table-striped" >}}
| Komponente | Image | Interner Endpunkt |
|---|---|---|
| ROOMS-Website | `ghcr.io/3volutionsag/rooms-web:<Version>` | HTTP `80`, Health Check `/healthz` |
| ROOMS-Dienst | `ghcr.io/3volutionsag/rooms-service:<Version>` | Port `9969`, `/healthz/startup` und `/healthz/live` |
| RoomsPro API | `ghcr.io/3volutionsag/rooms-api:<Version>` | HTTP `80`, Health Check `/healthz` |
| RoomsPro Worker | `ghcr.io/3volutionsag/rooms-worker:<Version>` | Port `8081`, Health Check `/healthz` |
{{< /bootstrap-table >}}

Verwenden Sie für alle vier ROOMS-Images exakt dieselbe freigegebene Version und feste Tags. Das gilt auch für die separat gewählte Nginx-Version.

## Konfiguration vorbereiten

Legen Sie auf dem Linux-Host folgende Struktur an:

```text
/opt/rooms/
|-- compose.linux.yaml
|-- config/
|   |-- appsettings.operator.json
|   `-- *.lic
`-- proxy/
    |-- conf.d/
    |   `-- rooms.conf
    `-- certs/
        |-- rooms.fullchain.pem
        `-- rooms.key
```

Die Images enthalten ihre Basiskonfiguration. Individuelle Werte gehören in `config/appsettings.operator.json`. Das Verzeichnis wird schreibgeschützt nach `/app/config` eingebunden. Schützen Sie Konfigurationsdateien, Lizenzen und den privaten TLS-Schlüssel mit restriktiven Dateirechten. Secrets gehören weder in ein eigenes Image noch in die Versionsverwaltung.

Erstellen Sie die Operator-Datei nach [Konfigurationsdateien]({{< relref "Betrieb/Installation/Konfig-Files/_index.md" >}}). Hinterlegen Sie darin die umgebungsspezifischen URLs, Anmelde- und Datenbankeinstellungen. Starten Sie betroffene Container nach Änderungen neu. Umgebungsvariablen mit hierarchischen Namen können die Werte überschreiben. Legen Sie keine gemeinsamen `Urls`- oder `Kestrel`-Listener fest, da die Komponenten unterschiedliche Ports verwenden.

### Gemeinsame Datenbankidentität

Verwenden Sie für den einen nicht leeren Eintrag `ConnectionStrings:<Eintragsname>` und für `IdentityServer:RoomsDatabase` dieselbe Datenbank und dieselbe Datenbankidentität. Damit arbeiten ROOMS-Website, ROOMS-Dienst, RoomsPro API und RoomsPro Worker gegenüber SQL Server unter einem gemeinsamen Konto. Dieses Konto erhält im Normalbetrieb auf der Datenbank dieser Installation `db_datareader` und `db_datawriter`; nur für die Migration kommt vorübergehend `db_owner` hinzu.

Bei SQL-Authentifizierung mit Benutzername und Passwort ist für `rooms-web` und `rooms-service` zusätzlich `Persist Security Info=True` erforderlich. Das [Legacy-SQL-Beispiel]({{< relref "Betrieb/Installation/Konfig-Files/_index.md#sql-authentifizierung-für-legacy" >}}) erklärt die Einstellung und den Schutz der Zugangsdaten. Die gemeinsame Datenbankidentität bedeutet nicht, dass alle Verbindungsparameter identisch sein müssen. Für RoomsPro API mit integriertem IDP und RoomsPro Worker ist dieser Legacy-Parameter nicht erforderlich.

### Active-Directory-Import und Lizenzen

Der Active-Directory-Import verwendet im Container Benutzername und Passwort der Importdefinition. Verwenden Sie für den einfachen Bind LDAPS, beispielsweise Port `636`, damit Zugangsdaten verschlüsselt übertragen werden. Fehlt in der Definition ein Benutzername, benötigt der Container `Rooms:ActiveDirectoryDataStrategyUsername` und `Rooms:ActiveDirectoryDataStrategyPassword`. Als Umgebungsvariablen lauten diese `Rooms__ActiveDirectoryDataStrategyUsername` und `Rooms__ActiveDirectoryDataStrategyPassword`. Ohne Bind-Benutzer schlägt der Import mit einer Meldung zur betroffenen Definition fehl.

Legen Sie die passenden [Lizenzdateien]({{< relref "Betrieb/Installation/LizenzenBeziehen/_index.md" >}}) in `config` ab. Hardwaregebundene Lizenzen sind für Container ungeeignet. Eine an den Maschinennamen gebundene Lizenz benötigt einen festen Container-`hostname` mit exakt passender Schreibweise. Eine an die Windows-Domäne gebundene Lizenz benötigt die Umgebungsvariable `USERDOMAIN`.

## Compose-Datei

Speichern Sie folgende Datei als `/opt/rooms/compose.linux.yaml`. Ersetzen Sie `<Version>` und `<Nginx-Version>` durch freigegebene, feste Versionen:

```yaml
name: rooms

services:
  rooms-web:
    image: "ghcr.io/3volutionsag/rooms-web:<Version>"
    platform: linux/amd64
    restart: unless-stopped
    expose:
      - "80"
    volumes:
      - type: bind
        source: ./config
        target: /app/config
        read_only: true
    healthcheck:
      test: ["CMD", "wget", "-qO-", "http://localhost/healthz"]
      interval: 30s
      timeout: 10s
      retries: 5
      start_period: 30s

  rooms-service:
    image: "ghcr.io/3volutionsag/rooms-service:<Version>"
    platform: linux/amd64
    restart: unless-stopped
    stop_grace_period: 320s
    expose:
      - "9969"
    volumes:
      - type: bind
        source: ./config
        target: /app/config
        read_only: true
    healthcheck:
      test: ["CMD", "wget", "-qO-", "http://localhost:9969/healthz/live"]
      interval: 30s
      timeout: 10s
      retries: 5
      start_period: 60s

  rooms-api:
    image: "ghcr.io/3volutionsag/rooms-api:<Version>"
    platform: linux/amd64
    restart: unless-stopped
    expose:
      - "80"
    volumes:
      - type: bind
        source: ./config
        target: /app/config
        read_only: true
    healthcheck:
      test: ["CMD", "wget", "-qO-", "http://localhost/healthz"]
      interval: 30s
      timeout: 10s
      retries: 5
      start_period: 30s

  rooms-worker:
    image: "ghcr.io/3volutionsag/rooms-worker:<Version>"
    platform: linux/amd64
    restart: unless-stopped
    expose:
      - "8081"
    volumes:
      - type: bind
        source: ./config
        target: /app/config
        read_only: true
    healthcheck:
      test: ["CMD", "wget", "-qO-", "http://localhost:8081/healthz"]
      interval: 30s
      timeout: 10s
      retries: 5
      start_period: 30s

  reverse-proxy:
    image: "nginx:<Nginx-Version>-alpine"
    platform: linux/amd64
    restart: unless-stopped
    depends_on:
      rooms-web:
        condition: service_healthy
      rooms-api:
        condition: service_healthy
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - type: bind
        source: ./proxy/conf.d
        target: /etc/nginx/conf.d
        read_only: true
      - type: bind
        source: ./proxy/certs
        target: /etc/nginx/certs
        read_only: true
```

Der Worker verarbeitet seine Aufträge direkt über die Datenbank und benötigt keine HTTP-Verbindung zur API. Für einen geordneten Stopp des ROOMS-Diensts sind mindestens **320 Sekunden** erforderlich. Lassen Sie auch dem Container-Host genügend Zeit, bevor er die Prozesse beendet.

Prüfen und laden Sie den Stack, ohne ihn bereits vollständig zu starten:

```bash
docker compose -f /opt/rooms/compose.linux.yaml config
docker compose -f /opt/rooms/compose.linux.yaml pull
```

## Nginx für Hostnamen und TLS konfigurieren

Speichern Sie folgende Konfiguration als `/opt/rooms/proxy/conf.d/rooms.conf`. Ersetzen Sie die beiden Beispiel-DNS-Namen. Das Zertifikat muss beide Namen im Subject Alternative Name enthalten. Alternativ verwenden Sie pro Hostname ein passendes Zertifikat.

```nginx
map $http_upgrade $connection_upgrade {
    default upgrade;
    ''      close;
}

server {
    listen 80 default_server;
    server_name _;
    return 444;
}

server {
    listen 80;
    server_name rooms.example.ch api.rooms.example.ch;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl default_server;
    server_name _;
    ssl_certificate     /etc/nginx/certs/rooms.fullchain.pem;
    ssl_certificate_key /etc/nginx/certs/rooms.key;
    ssl_protocols       TLSv1.2 TLSv1.3;
    return 444;
}

server {
    listen 443 ssl;
    server_name rooms.example.ch;
    ssl_certificate     /etc/nginx/certs/rooms.fullchain.pem;
    ssl_certificate_key /etc/nginx/certs/rooms.key;
    ssl_protocols       TLSv1.2 TLSv1.3;
    client_max_body_size 5m;

    location / {
        proxy_pass http://rooms-web:80;
        proxy_http_version 1.1;
        proxy_connect_timeout 120s;
        proxy_read_timeout 120s;
        proxy_send_timeout 120s;
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-Host $host;
        proxy_set_header X-Forwarded-Proto https;
        proxy_set_header X-Forwarded-Port 443;
        proxy_set_header X-Forwarded-For $remote_addr;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection $connection_upgrade;
    }
}

server {
    listen 443 ssl;
    server_name api.rooms.example.ch;
    ssl_certificate     /etc/nginx/certs/rooms.fullchain.pem;
    ssl_certificate_key /etc/nginx/certs/rooms.key;
    ssl_protocols       TLSv1.2 TLSv1.3;
    client_max_body_size 5m;

    location / {
        proxy_pass http://rooms-api:80;
        proxy_http_version 1.1;
        proxy_connect_timeout 120s;
        proxy_read_timeout 120s;
        proxy_send_timeout 120s;
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-Host $host;
        proxy_set_header X-Forwarded-Proto https;
        proxy_set_header X-Forwarded-Port 443;
        proxy_set_header X-Forwarded-For $remote_addr;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection $connection_upgrade;
    }
}
```

Beide DNS-Namen zeigen auf den Linux-Host. Die Default-Blöcke verwerfen Anforderungen mit einem unbekannten Hostnamen. Nginx erwartet Zertifikat und privaten Schlüssel im PEM-Format. Eine IIS-PFX-Datei kann nicht unverändert eingebunden werden. Erneuern Sie die Zertifikate mit der vorhandenen Unternehmens-PKI oder einem ACME-Client. Ersetzen Sie PEM-Dateien atomar und behalten Sie die restriktiven Zugriffsrechte bei.

## Öffentliche URLs abstimmen

Konfigurieren Sie ROOMS mit den öffentlichen HTTPS-Namen, nicht mit internen Container- oder HTTP-Adressen:

- ROOMS-Website: `https://rooms.example.ch`
- RoomsPro API beziehungsweise Identity Provider: `https://api.rooms.example.ch`
- OpenID-Connect-Authority, Client-Redirect-URLs und Abmelde-URLs mit denselben Namen. Registrieren Sie auch verwendete Kalenderportal-URLs als Abmeldeziele beim Identity Provider.

Der Identity Provider setzt HTTPS voraus. Bei TLS-Terminierung am Proxy muss dieser `X-Forwarded-Proto: https` setzen. Die übrigen Weiterleitungs-Header sind ebenfalls erforderlich, damit sichere Cookies, Redirects und Issuer-URLs die öffentlichen Adressen verwenden. Veröffentlichen Sie die Anwendungsports nicht zusätzlich direkt.

Das Beispiel setzt voraus, dass Nginx der direkt erreichbare Eingangsproxy ist. `X-Forwarded-For` wird mit `$remote_addr` ersetzt, statt einen vom Client gelieferten Wert zu übernehmen. Auch `X-Forwarded-Proto` und `X-Forwarded-Host` werden neu gesetzt. Bei einem vorgeschalteten Load Balancer muss das Betriebsteam die gesamte vertrauenswürdige Header-Kette prüfen. Fehlende oder manipulierbare Client-Adressen beeinträchtigen die [IP-bezogenen Anmeldegrenzen]({{< relref "Betrieb/Installation/Konfig-Files/_index.md#schutz-vor-wiederholten-anmeldeversuchen" >}}).

## Datenbankmigrationen

Stellen Sie zuerst die aktuelle [Baukasten-Datenbank]({{< relref "Betrieb/Installation/DatenbankBereitstellen/_index.md" >}}) wieder her. Erteilen Sie der gemeinsamen Datenbankidentität vorübergehend `db_owner`, während `rooms-service` und `rooms-worker` noch nicht laufen.

Der Migrationscontainer verwendet über Compose automatisch dasselbe Image, Netzwerk und dieselbe `appsettings.json` wie die API. Status prüfen:

```bash
docker compose -f /opt/rooms/compose.linux.yaml run --rm --no-deps \
  --entrypoint dotnet rooms-api \
  RoomsPro.Web.dll db status
```

Bei offenen Migrationen endet `db status` erwartungsgemäss mit Exitcode `1`. Migration ausführen:

```bash
docker compose -f /opt/rooms/compose.linux.yaml run --rm --no-deps \
  --entrypoint dotnet rooms-api \
  RoomsPro.Web.dll db migrate
```

Bei Bedarf kann das Zeitlimit ergänzt werden:

```bash
docker compose -f /opt/rooms/compose.linux.yaml run --rm --no-deps \
  --entrypoint dotnet rooms-api \
  RoomsPro.Web.dll db migrate --command-timeout 900
```

Führen Sie `db status` danach erneut aus. Der Befehl prüft `RoomsDb`, `LightWeight` und `TickerQ`. Für mehrere Mandantendatenbanken wiederholen Sie Status und Migration je Datenbank mit einer expliziten Verbindung:

```bash
docker compose -f /opt/rooms/compose.linux.yaml run --rm --no-deps \
  --entrypoint dotnet rooms-api \
  RoomsPro.Web.dll db status --connection "<ConnectionString>"

docker compose -f /opt/rooms/compose.linux.yaml run --rm --no-deps \
  --entrypoint dotnet rooms-api \
  RoomsPro.Web.dll db migrate --connection "<ConnectionString>"

docker compose -f /opt/rooms/compose.linux.yaml run --rm --no-deps \
  --entrypoint dotnet rooms-api \
  RoomsPro.Web.dll db status --connection "<ConnectionString>"
```

Verwenden Sie in Shell-History und Protokollen keine Klartextkennwörter. `db status` gibt eine explizit übergebene Verbindungszeichenfolge in der Konsole aus. Entfernen Sie `db_owner` nach der erfolgreichen Abschlussprüfung wieder. Ein leerer SQL-Katalog und `db migrate` allein ersetzen die Baukasten-Datenbank nicht.

## Stack starten und prüfen

Starten Sie erst nach der Migration die Anwendungscontainer:

```bash
docker compose -f /opt/rooms/compose.linux.yaml up -d
docker compose -f /opt/rooms/compose.linux.yaml ps
```

Beim ersten Start lädt Nginx die Konfiguration. Bei einem Fehler bleibt der Proxy gestoppt und `docker compose logs reverse-proxy` zeigt die Ursache. Prüfen Sie spätere Proxy- oder Zertifikatsänderungen vor dem Neuladen:

```bash
docker compose -f /opt/rooms/compose.linux.yaml exec reverse-proxy nginx -t
docker compose -f /opt/rooms/compose.linux.yaml exec reverse-proxy nginx -s reload
```

Prüfen Sie danach:

1. Beide öffentlichen URLs liefern über HTTPS das erwartete Zertifikat.
2. HTTP wird auf HTTPS umgeleitet und die Adresszeile behält den öffentlichen Hostnamen.
3. `https://rooms.example.ch/healthz` und `https://api.rooms.example.ch/healthz` sind erreichbar.
4. Anmeldung, Abmeldung und OpenID-Connect-Redirects verwenden ausschliesslich die öffentlichen HTTPS-Namen.
5. Eine Anmeldung mit der vorgesehenen privilegierten Baukasten-Person ist möglich.
6. Eine Buchung kann erstellt und gelesen werden.
7. ROOMS-Dienst und RoomsPro Worker bleiben gesund und verarbeiten ihre Hintergrundaufgaben.
8. Nur die Proxy-Ports sind veröffentlicht. SQL Server ist nur aus dem vorgesehenen Anwendungsnetz erreichbar.

## Updates

Ändern Sie in der Compose-Datei alle vier ROOMS-Image-Tags auf dieselbe neue Version. Verwenden Sie keine schwebenden Tags wie `latest` für ROOMS oder Nginx. Laden Sie die neuen Images vor dem Wartungsfenster mit `docker compose pull`.

Stoppen Sie danach den laufenden Stack, bevor Sie die Datenbank sichern und migrieren:

```bash
docker compose -f /opt/rooms/compose.linux.yaml stop reverse-proxy rooms-web rooms-service rooms-api rooms-worker
```

Erstellen Sie nun die Datenbanksicherung, vergeben Sie vorübergehend `db_owner` und führen Sie Statusprüfung und Migration wie unter [Datenbankmigrationen](#datenbankmigrationen) beschrieben aus. Entfernen Sie `db_owner` erst nach einer abschliessenden Statusprüfung mit Exitcode `0`. Starten Sie anschliessend den Stack mit dem unter [Stack starten und prüfen](#stack-starten-und-prüfen) angegebenen `up -d`-Befehl und wiederholen Sie die dortigen Prüfungen.

## Kubernetes

Verwenden Sie Linux-Nodes für die vier ROOMS-Komponenten, Secrets und ConfigMaps für die Konfiguration sowie einen Ingress Controller für DNS und TLS. Der ROOMS-Dienst benötigt eine `terminationGracePeriodSeconds` von mindestens `320`. Verwenden Sie Port `9969` mit `/healthz/startup` für die Startprüfung und `/healthz/live` für die Liveness-Prüfung. Der Container wird über das normale Stoppsignal beendet.
