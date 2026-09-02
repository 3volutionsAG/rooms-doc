---
title: "Docker Compose unter Windows"
linkTitle: "Docker"
weight: 90
description: 'ROOMS als Neuinstallation mit Docker Compose und einem zentralen Reverse Proxy bereitstellen'
aliases:
  - /de/betrieb/docker/
  - /betrieb/docker/
---

Beim hier dokumentierten Stand 4.30.8 ist die containerisierte Bereitstellung eine gute Wahl, wenn je ein geeigneter Windows- und Linux-Container-Host bereits zur Verfügung steht. Docker Compose hält Images, Mounts, Ports und Neustartverhalten reproduzierbar fest; ein vorgeschalteter Nginx-Proxy übernimmt die Aufgaben, die bei einer klassischen Installation die IIS-Bindings erfüllen: DNS-Namen, TLS-Zertifikate und Weiterleitungs-Header. Für eine Neuinstallation auf einem einzelnen Windows-Server ist derzeit die [MSI-/IIS-Installation]({{< relref "Betrieb/Installation/InstallationROOMS/_index.md" >}}) einfacher.

{{% alert title="Wichtig: zwei Container-Hosts" color="warning" %}}
ROOMS besteht aus Windows- und Linux-Images. Ein einzelner Docker-Daemon kann diese Images nicht gemeinsam ausführen:

- `rooms-web` und `rooms-service` sind Windows-Container auf Basis von Windows Server Core LTSC 2022.
- `rooms-api`, `rooms-worker` und der Nginx-Proxy sind Linux-Container.

Planen Sie deshalb zwei Hosts oder VMs ein. Das Umschalten von Docker Desktop zwischen Linux- und Windows-Containern ist kein Produktionsbetrieb für einen gleichzeitig laufenden ROOMS-Stack. Docker Desktop wird zudem nicht auf Windows Server unterstützt. Für einen einzelnen Windows-Server verwenden Sie stattdessen die [MSI-/IIS-Installation]({{< relref "Betrieb/Installation/InstallationROOMS/_index.md" >}}).
{{% /alert %}}

{{% alert title="Ausblick auf ROOMS 4.32" color="info" %}}
Eine vollständig unter Linux betreibbare Container-Auslieferung ist voraussichtlich ab ROOMS 4.32.0 vorgesehen. Sie ist nicht Bestandteil von 4.30.8. Verwenden Sie die vereinfachte Ein-Host-Topologie erst, wenn eine entsprechende Version freigegeben wurde und die Release Notes die Linux-Images für alle Komponenten bestätigen. Bis dahin gilt die Zwei-Host-Topologie dieser Seite.
{{% /alert %}}

## Zielarchitektur

```text
Clients
   |
   | HTTPS 443
   v
Nginx-Reverse-Proxy auf dem Linux-Host
   |-- rooms.example.ch      --> Windows-Host:8080 --> rooms-web:80
   `-- api.rooms.example.ch  --> rooms-api:80

Linux-Host:   rooms-api, rooms-worker, Nginx
Windows-Host: rooms-web, rooms-service
Beide Hosts:  Zugriff auf dieselbe SQL-Server-Umgebung
```

Für Clients wird nur Nginx veröffentlicht. Der technisch am Windows-Host publizierte Port `8080` wird per Firewall ausschliesslich für die IP-Adresse des Linux-Hosts freigegeben. API, Worker, Legacy Service und SQL Server erhalten keinen öffentlichen Ingress.

## Verfügbare Images

{{< bootstrap-table "table table-striped" >}}
| Komponente | Image | Interner Endpunkt |
|---|---|---|
| Legacy Website | `ghcr.io/3volutionsag/rooms-web:<Version>-windowsservercore-ltsc2022` | HTTP `80`, Health Check `/healthz` |
| Legacy Windows Service | `ghcr.io/3volutionsag/rooms-service:<Version>-windowsservercore-ltsc2022` | Health Check `http://localhost:9999/healthz` |
| RoomsPro API | `ghcr.io/3volutionsag/rooms-api:<Version>` | HTTP `80`, Health Check `/healthz` |
| RoomsPro Worker | `ghcr.io/3volutionsag/rooms-worker:<Version>` | Health Check `http://localhost:8081/healthz` |
{{< /bootstrap-table >}}

Verwenden Sie für alle vier ROOMS-Images exakt dieselbe Version. Der Zugang zu den privaten Packages in `ghcr.io` muss bei 3volutions angefordert und auf beiden Hosts mit `docker login ghcr.io` eingerichtet werden.

## Voraussetzungen

- Windows Server 2022 mit einer unterstützten Windows-Container-Runtime für die LTSC-2022-Images
- separater Linux-Host oder eine Linux-VM mit Docker Engine und Docker Compose
- Docker Compose auf dem Windows-Host; beachten Sie, dass eine manuell installierte Docker Engine für Windows Server Compose nicht mitliefert
- DNS-Namen für Legacy Website und RoomsPro API, beispielsweise `rooms.example.ch` und `api.rooms.example.ch`
- ein Zertifikat mit beiden DNS-Namen oder je ein Zertifikat pro Name, jeweils im PEM-Format für Nginx
- eine feste IP-Adresse des Linux-Hosts für die Firewall-Freigabe zum Windows-Host
- Netzwerkzugriff beider Hosts auf SQL Server sowie vom Linux-Host auf Port `8080` des Windows-Hosts
- aktuelle [Baukasten-Datenbank]({{< relref "Betrieb/Installation/DatenbankBereitstellen/_index.md" >}}) und eine Sicherung unmittelbar vor der Migration

Die Installation von Docker Engine und Compose ist plattformspezifisch. Beachten Sie die offiziellen Hinweise zu [Docker auf Windows Server](https://docs.docker.com/engine/install/binaries/#install-server-and-client-binaries-on-windows) und zur [Installation von Docker Compose](https://docs.docker.com/compose/install/).

Die Beispiele verwenden die Compose-V2-Syntax `docker compose`. Wird Compose auf Windows Server als eigenständige V2-Binärdatei installiert, lautet derselbe Befehl je nach Installation `docker-compose`.

## Verzeichnisstruktur vorbereiten

Legen Sie auf dem Windows-Host folgendes Verzeichnis an:

```text
C:\Program Files\3volutions\ROOMS\
`-- Configuration\
    |-- RoomsAppSettings.config
    |-- ConnectionStrings.config
    |-- DiagnosticsWeb.config
    |-- DiagnosticsWindowsService.config
    |-- MachineKey.config
    `-- *.lic
```

Auf dem Linux-Host wird folgende Struktur verwendet:

```text
/opt/rooms/
|-- compose.linux.yaml
|-- config/
|   `-- appsettings.json
`-- proxy/
    |-- conf.d/
    |   `-- rooms.conf
    `-- certs/
        |-- rooms.fullchain.pem
        `-- rooms.key
```

Schützen Sie die Konfigurationsdateien und insbesondere `rooms.key` mit restriktiven Dateirechten. Konfiguration und Secrets werden nur schreibgeschützt in die Container eingebunden und gehören nicht in ein eigenes Image oder in die Versionsverwaltung.

### Konfigurationsdateien beschaffen

1. Laden Sie das aktuelle [Configuration Template](https://3volutions.atlassian.net/servicedesk/customer/kb/view/508690433) herunter. Kopieren Sie daraus `RoomsAppSettings.config`, `ConnectionStrings.config`, `DiagnosticsWeb.config`, `DiagnosticsWindowsService.config` und `MachineKey.config` in das oben angegebene Configuration-Verzeichnis auf dem Windows-Host.
2. Beziehen Sie das MSI derselben ROOMS-Version aus dem [Downloadbereich](https://3volutions.atlassian.net/servicedesk/customer/portal/1/article/417300536). Es enthält die zur Version passende Vorlage für `appsettings.json`. Ist ROOMS bereits mit den Standardpfaden installiert, liegt sie unter `C:\Program Files\3volutions\ROOMS\Configuration\appsettings.json`. Für einen reinen Container-Host können Sie das MSI stattdessen auf einem Windows-Administrationsrechner entpacken:

   ```powershell
   msiexec.exe /a 'C:\Download\ROOMS-<Version>.msi' TARGETDIR='C:\Temp\ROOMS-MSI' /qn
   Get-ChildItem 'C:\Temp\ROOMS-MSI' -Filter appsettings.json -Recurse
   ```

3. Kopieren Sie die gefundene `appsettings.json` sicher nach `/opt/rooms/config/appsettings.json` auf dem Linux-Host.
4. Passen Sie alle Dateien gemäss [Konfigurationsdateien]({{< relref "Betrieb/Installation/Konfig-Files/_index.md" >}}) an und laden Sie die [Lizenzdateien]({{< relref "Betrieb/Installation/LizenzenBeziehen/_index.md" >}}) in das Configuration-Verzeichnis auf dem Windows-Host.

Verwenden Sie Vorlagen und MSI immer aus derselben freigegebenen ROOMS-Version wie die Container-Images.

### Gemeinsame Datenbankidentität

Verwenden Sie in `ConnectionStrings.config` und `appsettings.json` dieselbe Datenbankidentität. Damit arbeiten Legacy Website, Legacy Service, RoomsPro API und RoomsPro Worker gegenüber SQL Server unter einem gemeinsamen Konto. Dieses Konto erhält im Normalbetrieb auf jeder Mandantendatenbank `db_datareader` und `db_datawriter`; nur für die Migration kommt vorübergehend `db_owner` hinzu.

Der Windows-Service-Account einer MSI-Installation lässt sich nicht unverändert auf Linux- und Windows-Containerprozesse übertragen. Verwenden Sie für den Compose-Standard deshalb eine gemeinsame Anwendungsidentität in den Datenbankverbindungen. Wenn zwingend integrierte Windows-Authentifizierung oder der Zugriff auf weitere AD-Ressourcen erforderlich ist, müssen die Windows-Container mit gMSA/Credential Spec und die Linux-Container mit einer passenden Kerberos-Konfiguration betrieben werden. Diese kundenspezifische Variante sollte mit 3volutions geplant werden.

## Windows-Container mit Compose

Speichern Sie auf dem Windows-Host diese Datei als `C:\ProgramData\3volutions\ROOMS\compose.windows.yaml` und ersetzen Sie `<Version>`:

```yaml
name: rooms

services:
  rooms-web:
    image: "ghcr.io/3volutionsag/rooms-web:<Version>-windowsservercore-ltsc2022"
    platform: windows/amd64
    restart: unless-stopped
    ports:
      - "8080:80"
    volumes:
      - type: bind
        source: "C:/Program Files/3volutions/ROOMS/Configuration"
        target: "C:/app/config"
        read_only: true
    healthcheck:
      test: ["CMD", "powershell", "-Command", "try { if ((Invoke-WebRequest -UseBasicParsing http://localhost/healthz).StatusCode -eq 200) { exit 0 } } catch {}; exit 1"]
      interval: 30s
      timeout: 10s
      retries: 5
      start_period: 30s

  rooms-service:
    image: "ghcr.io/3volutionsag/rooms-service:<Version>-windowsservercore-ltsc2022"
    platform: windows/amd64
    restart: unless-stopped
    volumes:
      - type: bind
        source: "C:/Program Files/3volutions/ROOMS/Configuration"
        target: "C:/app/config"
        read_only: true
    healthcheck:
      test: ["CMD", "powershell", "-Command", "try { if ((Invoke-WebRequest -UseBasicParsing http://localhost:9999/healthz).StatusCode -eq 200) { exit 0 } } catch {}; exit 1"]
      interval: 30s
      timeout: 10s
      retries: 5
      start_period: 30s
```

Die Images lesen alle Legacy-Dateien aus `C:\app\config`. Die IIS-Website im `rooms-web`-Container lauscht intern ohne kundenspezifisches Zertifikat auf Port `80`; TLS und Hostnamen werden später zentral durch Nginx behandelt.

Beschränken Sie den am Windows-Host publizierten Port auf die feste IP-Adresse des Linux-Proxys. Bei einer Windows-Firewall mit standardmässig blockierten eingehenden Verbindungen genügt beispielsweise folgende gezielte Freigabe; ersetzen Sie den Platzhalter und stellen Sie sicher, dass keine breitere Freigaberegel für TCP `8080` besteht:

```powershell
New-NetFirewallRule `
  -DisplayName 'ROOMS Legacy nur vom Reverse Proxy' `
  -Direction Inbound -Action Allow -Protocol TCP -LocalPort 8080 `
  -RemoteAddress '<Linux-Proxy-IP>'
```

Prüfen Sie die Einschränkung von zwei verschiedenen Rechnern: Vom Linux-Host muss `http://<Windows-Container-Host>:8080/healthz` erreichbar sein, von einem normalen Client dagegen nicht. Falls eine vorgelagerte Netzwerk-Firewall den Zugriff steuert, setzen und prüfen Sie dort dieselbe Quell-IP-Einschränkung.

Prüfen Sie die Datei, laden Sie die Images, starten Sie die Komponenten vor der Migration aber noch nicht dauerhaft:

```powershell
docker compose -f C:\ProgramData\3volutions\ROOMS\compose.windows.yaml config
docker compose -f C:\ProgramData\3volutions\ROOMS\compose.windows.yaml pull
```

## Linux-Container und Reverse Proxy mit Compose

Speichern Sie auf dem Linux-Host folgende Datei als `/opt/rooms/compose.linux.yaml`. Ersetzen Sie `<Version>` und `<Nginx-Version>` durch freigegebene, feste Versionen:

```yaml
name: rooms

services:
  rooms-api:
    image: "ghcr.io/3volutionsag/rooms-api:<Version>"
    platform: linux/amd64
    restart: unless-stopped
    expose:
      - "80"
    volumes:
      - type: bind
        source: ./config/appsettings.json
        target: /app/config/appsettings.json
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
        source: ./config/appsettings.json
        target: /app/config/appsettings.json
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

API und Worker verwenden dieselbe zentrale `appsettings.json`. Die relevante RoomsPro-Verbindung heisst `IdentityServer:RoomsDatabase`; als Umgebungsvariable lautet sie `IdentityServer__RoomsDatabase`. Der Worker verarbeitet seine Aufträge direkt über die Datenbank und benötigt keine HTTP-Verbindung zur API.

Prüfen und laden Sie auch diesen Stack, ohne ihn bereits vollständig zu starten:

```bash
docker compose -f /opt/rooms/compose.linux.yaml config
docker compose -f /opt/rooms/compose.linux.yaml pull
```

## Nginx für Hostnamen und TLS konfigurieren

Die folgende Konfiguration ersetzt die Host-Header- und Zertifikat-Bindings aus IIS. Speichern Sie sie als `/opt/rooms/proxy/conf.d/rooms.conf` und ersetzen Sie die beiden Beispiel-DNS-Namen sowie `<Windows-Container-Host>`:

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
        proxy_pass http://<Windows-Container-Host>:8080;
        proxy_http_version 1.1;
        proxy_connect_timeout 120s;
        proxy_read_timeout 120s;
        proxy_send_timeout 120s;
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-Host $host;
        proxy_set_header X-Forwarded-Proto https;
        proxy_set_header X-Forwarded-Port 443;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
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
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection $connection_upgrade;
    }
}
```

Beide DNS-Namen zeigen auf die IP-Adresse des Linux-Hosts. Die beiden Default-Blöcke verwerfen Anforderungen mit einem unbekannten Hostnamen, statt sie versehentlich an ROOMS weiterzuleiten. Das Zertifikat muss beide Namen im Subject Alternative Name enthalten; alternativ verwenden Sie in den beiden anwendungsspezifischen `server`-Blöcken getrennte Zertifikate. Nginx erwartet Zertifikat und privaten Schlüssel im PEM-Format. Eine für IIS vorhandene PFX-Datei kann nicht unverändert eingebunden werden.

Die Erneuerung des Zertifikats erfolgt durch die vorhandene Unternehmens-PKI oder einen ACME-Client auf dem Host. Sorgen Sie dafür, dass die PEM-Dateien atomar ersetzt und die Zugriffsrechte beibehalten werden. Die Prüfung und das Neuladen des laufenden Proxys sind unter [Stack starten und prüfen](#stack-starten-und-prüfen) beschrieben.

## Öffentliche URLs abstimmen

Konfigurieren Sie ROOMS vollständig mit den öffentlichen HTTPS-Namen, nicht mit Container-, Host- oder HTTP-Adressen:

- Legacy Website: `https://rooms.example.ch`
- RoomsPro API beziehungsweise Identity Provider: `https://api.rooms.example.ch`
- OpenID-Connect-Authority, Client-Redirect-URLs und Abmelde-URLs mit denselben Namen

Die Weiterleitungs-Header in der Nginx-Konfiguration sind erforderlich, damit sichere Cookies, Redirects und von der API erzeugte Issuer-URLs trotz TLS-Terminierung am Proxy wieder HTTPS verwenden. Veröffentlichen Sie den API-Port nicht zusätzlich direkt, da die Anwendung Forwarded Headers vom kontrollierten Proxy erwartet.

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

```powershell
docker compose -f C:\ProgramData\3volutions\ROOMS\compose.windows.yaml up -d
docker compose -f C:\ProgramData\3volutions\ROOMS\compose.windows.yaml ps
```

```bash
docker compose -f /opt/rooms/compose.linux.yaml up -d
docker compose -f /opt/rooms/compose.linux.yaml ps
```

Beim ersten Start lädt Nginx die Konfiguration; bei einem Fehler bleibt der Proxy gestoppt und `docker compose logs reverse-proxy` zeigt die Ursache. Sobald der Proxy läuft, prüfen Sie spätere Proxy- oder Zertifikatsänderungen vor dem Neuladen:

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
7. Legacy Service und RoomsPro Worker bleiben gesund und verarbeiten ihre Hintergrundaufgaben.
8. Der Windows-Port `8080` ist nur vom Reverse-Proxy-Host und SQL Server nur von den beiden Container-Hosts erreichbar.

## Updates

Ändern Sie bei einem späteren Update in beiden Compose-Dateien alle vier ROOMS-Image-Tags auf dieselbe neue Version. Verwenden Sie keine schwebenden Tags wie `latest` für ROOMS oder Nginx. Laden Sie die neuen Images vor dem Wartungsfenster mit `docker compose pull`.

Stoppen Sie danach den laufenden Stack auf beiden Hosts, bevor Sie die Datenbank sichern und migrieren:

```powershell
docker compose -f C:\ProgramData\3volutions\ROOMS\compose.windows.yaml stop rooms-web rooms-service
```

```bash
docker compose -f /opt/rooms/compose.linux.yaml stop reverse-proxy rooms-api rooms-worker
```

Erstellen Sie nun die Datenbanksicherung, vergeben Sie vorübergehend `db_owner` und führen Sie Statusprüfung und Migration wie unter [Datenbankmigrationen](#datenbankmigrationen) beschrieben aus. Entfernen Sie `db_owner` erst nach einer abschliessenden Statusprüfung mit Exitcode `0`. Starten Sie anschliessend beide Stacks mit den unter [Stack starten und prüfen](#stack-starten-und-prüfen) angegebenen `up -d`-Befehlen und wiederholen Sie die dortigen Prüfungen.

## Kubernetes

Für grössere oder hochverfügbare Installationen kann dieselbe Architektur auf einem Kubernetes-Cluster mit Windows- und Linux-Nodes umgesetzt werden. Verwenden Sie Node-Auswahl beziehungsweise Runtime Classes für die beiden Windows-Workloads, Secrets und ConfigMaps für die Konfiguration, einen einmaligen Job mit `rooms-api` für die Migration und einen Ingress Controller für DNS und TLS. Die Compose-Anleitung ist der einfachere Einstieg, Kubernetes aber keine Ein-Host-Alternative für die gemischten Betriebssysteme.
