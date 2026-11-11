---
title: "Installation"
linkTitle: "Installation"
weight: 1
description: 'Generelle Informationen zur Installation von 3V ROOMS'
---
ROOMS kann als Windows-Installation mit MSI und IIS oder mit Linux-Containern bereitgestellt werden. Wählen Sie die Variante nach der vorhandenen Betriebsinfrastruktur und den benötigten Integrationen. Ein zentraler Reverse Proxy übernimmt bei der Container-Bereitstellung DNS-Namen und TLS-Zertifikate.

## Bereitstellungsvarianten

- **Windows-Installation mit MSI und IIS:** Verwenden Sie diesen Weg für Windows-Anmeldung, integrierte Windows-Zugangsdaten oder hardwaregebundene Lizenzen. Das MSI installiert die ausgewählten Legacy- und RoomsPro-Komponenten. Die nachfolgende Reihenfolge beschreibt diesen Weg.
- **Docker Compose auf Linux:** Private Images aus `ghcr.io` stellen ROOMS-Website, ROOMS-Dienst, RoomsPro API und RoomsPro Worker bereit. Alle vier Komponenten können auf einem Linux-Container-Host laufen. Nginx terminiert HTTPS und leitet zwei öffentliche Hostnamen an die passenden Container weiter. Folgen Sie der Anleitung [Docker Compose auf Linux]({{< relref "Betrieb/Installation/Docker/_index.md" >}}).
- **Kubernetes:** Hinweise zur Bereitstellung auf Linux-Nodes finden Sie am Ende der [Docker-Anleitung]({{< relref "Betrieb/Installation/Docker/_index.md#kubernetes" >}}).



Verwenden Sie innerhalb einer Umgebung für alle Komponenten dieselbe ROOMS-Version. Datenbank, Konfiguration, Lizenzen und öffentliche URLs müssen auf dieselbe Umgebung abgestimmt sein.

## Windows-Neuinstallation mit MSI und IIS

Empfohlene Reihenfolge:

1. [Systemanforderungen und Service-Account vorbereiten]({{< relref "Betrieb/Installation/Vorbereitungen/_index.md" >}})
2. [Datenbank bereitstellen]({{< relref "Betrieb/Installation/DatenbankBereitstellen/_index.md" >}})
3. [Datenbankberechtigungen vergeben]({{< relref "Betrieb/Installation/Datenbankberechtigungen/_index.md" >}})
4. [3V ROOMS installieren]({{< relref "Betrieb/Installation/InstallationROOMS/_index.md" >}})
5. [`Config.bat`, Konfiguration und Lizenzen einrichten]({{< relref "Betrieb/Installation/Konfig-Files/_index.md" >}})
6. [IIS konfigurieren]({{< relref "Betrieb/Installation/IIS-Konfiguration/_index.md" >}})
7. [Datenbankmigrationen ausführen]({{< relref "Betrieb/Installation/Datenbankmigrationen/_index.md" >}})
8. [Temporäre Migrationsrechte entfernen]({{< relref "Betrieb/Installation/Datenbankberechtigungen/_index.md#rechte-nach-der-migration-reduzieren" >}})
9. Dienste und Websites starten und einen Smoke Test durchführen.

Für alle Windows-Komponenten wird derselbe dedizierte ROOMS-Service-Account verwendet. Mindestens auf einer Maschine muss die **RoomsPro API** installiert sein, da sie die Befehle `db status` und `db migrate` bereitstellt.

Bei der Container-Bereitstellung werden diese Befehle über einen einmaligen Container beziehungsweise Kubernetes Job mit dem Image `rooms-api` ausgeführt. Details finden Sie unter [Docker: Datenbankmigrationen]({{< relref "Betrieb/Installation/Docker/_index.md#datenbankmigrationen" >}}).
