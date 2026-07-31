---
title: "Docker"
linkTitle: "Docker"
weight: 45
description: 'ROOMS mit Docker oder Kubernetes bereitstellen und aktualisieren'
aliases:
  - /de/betrieb/docker/
  - /betrieb/docker/
---

ROOMS kann alternativ zur Windows-Installation mit Docker oder Kubernetes betrieben werden. Die Images werden als private Packages über die GitHub Container Registry `ghcr.io` bereitgestellt. Der Zugang muss bei 3volutions angefordert werden.

## Verfügbare Images

{{< bootstrap-table "table table-striped" >}}
| Komponente | Image | Aufgabe | Netzwerk |
|---|---|---|---|
| Legacy Website | `ghcr.io/3volutionsag/rooms-web:<Version>-windowsservercore-ltsc2022` | Klassische ROOMS-Webanwendung | Über den bestehenden Web-Endpunkt veröffentlichen |
| Legacy Windows Service | `ghcr.io/3volutionsag/rooms-service:<Version>-windowsservercore-ltsc2022` | Legacy-Hintergrunddienste | Kein öffentlicher Ingress erforderlich |
| RoomsPro API | `ghcr.io/3volutionsag/rooms-api:<Version>` | OpenID Connect, RoomsPro API und Datenbank-CLI | Port `80`, Health Check `/healthz` |
| RoomsPro Worker | `ghcr.io/3volutionsag/rooms-worker:<Version>` | Hintergrundaufgaben über TickerQ | Port `8081` nur für den Health Check `/healthz`, kein öffentlicher Ingress erforderlich |
{{< /bootstrap-table >}}

Verwenden Sie für alle Komponenten dieselbe ROOMS-Version. Die Windows-Images enthalten zusätzlich das Betriebssystem-Suffix im Tag. `rooms-web` und `rooms-service` benötigen Windows-Container-Hosts beziehungsweise Kubernetes-Nodes, die mit Windows Server Core LTSC 2022 kompatibel sind. `rooms-api` und `rooms-worker` sind Linux-Container.

Beispiel für Version 4.30.8:

```text
ghcr.io/3volutionsag/rooms-web:4.30.8-windowsservercore-ltsc2022
ghcr.io/3volutionsag/rooms-service:4.30.8-windowsservercore-ltsc2022
ghcr.io/3volutionsag/rooms-api:4.30.8
ghcr.io/3volutionsag/rooms-worker:4.30.8
```

## Änderung ab Version 4.30

Mit Version 4.30 wurde das frühere Image

```text
ghcr.io/3volutionsag/rooms-idp
```

in folgendes Image umbenannt:

```text
ghcr.io/3volutionsag/rooms-api
```

`rooms-api` übernimmt weiterhin die OpenID-Connect- und API-Aufgaben des bisherigen `rooms-idp`. Zusätzlich ist `rooms-worker` als eigener Hintergrundprozess erforderlich.

Die Umstellung ist deshalb kein reiner Austausch des Imagenamens. Bei einem Update auf 4.30 oder neuer müssen Sie:

1. die Image-Referenz von `rooms-idp` auf `rooms-api` ändern
2. `rooms-worker` als zusätzliches Deployment einrichten
3. den veralteten `pushSubscriberService` aus der Legacy-Konfiguration entfernen
4. die Datenbankmigrationen mit `rooms-api` ausführen

## DNS und Ingress

Der vorhandene DNS-Name des bisherigen IDP kann bestehen bleiben. Der Ingress beziehungsweise Reverse Proxy muss danach auf `rooms-api` Port `80` zeigen. Das ist insbesondere sinnvoll, wenn der bestehende Name bereits in den ROOMS- und OpenID-Connect-Einstellungen verwendet wird.

Wenn Sie den öffentlichen Hostnamen ändern, müssen auch die konfigurierten öffentlichen URLs, OpenID-Connect-Einstellungen und Redirect-URLs angepasst werden.

`rooms-worker` stellt keine öffentliche API bereit und benötigt keinen öffentlichen Ingress. Für interne Liveness- oder Readiness-Prüfungen steht auf Port `8081` der Endpunkt `/healthz` zur Verfügung.

## Konfiguration und Verbindungen

`rooms-api` und `rooms-worker` lesen ihre Konfiguration aus:

```text
/app/config/appsettings.json
```

Für eine konsistente Konfiguration kann bei beiden Containern dieselbe `appsettings.json` schreibgeschützt eingebunden werden. Insbesondere benötigen beide Zugriff auf dieselbe ROOMS-Datenbank. Zugangsdaten gehören in Secrets beziehungsweise in die externe Konfiguration und nicht in das Image.

Die API legt Hintergrundaufgaben in der gemeinsamen Datenbank ab. Der Worker verarbeitet diese Aufgaben direkt aus der Datenbank. Zwischen `rooms-api` und `rooms-worker` ist dafür keine direkte HTTP-Verbindung erforderlich.

## Datenbankmigrationen

Datenbankstatus und Migrationen werden über die CLI im Image `rooms-api` ausgeführt. Stoppen Sie vor der Migration `rooms-service` und `rooms-worker` und erstellen Sie ein aktuelles Datenbank-Backup.

Da die 4.30-Images standardmässig die API starten, muss für einen einmaligen Migrationscontainer der Entrypoint überschrieben werden.

Status prüfen:

```bash
docker run --rm \
  --entrypoint dotnet \
  --mount type=bind,source="$PWD/config",target=/app/config,readonly \
  ghcr.io/3volutionsag/rooms-api:4.30.8 \
  RoomsPro.Web.dll db status
```

Migration ausführen:

```bash
docker run --rm \
  --entrypoint dotnet \
  --mount type=bind,source="$PWD/config",target=/app/config,readonly \
  ghcr.io/3volutionsag/rooms-api:4.30.8 \
  RoomsPro.Web.dll db migrate
```

Ersetzen Sie die Beispielversion durch die zu installierende ROOMS-Version. Der Migrationscontainer benötigt Netzwerkzugriff auf die Datenbank und dieselbe Datenbankkonfiguration wie `rooms-api`.

Für einen Kubernetes Job entspricht dies folgendem Prozessaufruf:

```yaml
command: ["dotnet"]
args: ["RoomsPro.Web.dll", "db", "migrate"]
```

Prüfen Sie nach der Migration erneut `db status`. Starten Sie die übrigen Komponenten erst, wenn keine offenen Migrationen mehr gemeldet werden.

## Legacy-Konfiguration ab 4.30 bereinigen

Der `pushSubscriberService` wird ab Version 4.30 durch den RoomsPro Worker verarbeitet. Entfernen Sie deshalb aus der kundenspezifischen `StructureMapXml.xml` den vollständigen `AddInstance`-Eintrag mit:

```xml
Key="pushSubscriberService"
```

Bleibt dieser Eintrag bestehen, kann der Legacy-Service beim Start abbrechen, weil der frühere Plugin-Typ nicht mehr vorhanden ist.

## Update-Checkliste

1. Prüfen Sie den Zugriff auf die privaten Images in `ghcr.io`.
2. Aktualisieren Sie alle Komponenten auf dieselbe ROOMS-Version.
3. Ersetzen Sie ab 4.30 `rooms-idp` durch `rooms-api`.
4. Ergänzen Sie `rooms-worker` mit derselben externen Konfiguration und Datenbankverbindung.
5. Entfernen Sie den veralteten `pushSubscriberService`-Eintrag.
6. Sichern und migrieren Sie die Datenbank mit dem `rooms-api`-Image.
7. Prüfen Sie die Health Checks von API und Worker.
8. Testen Sie Anmeldung, ROOMS-Webzugriff und die benötigten Hintergrundprozesse.
