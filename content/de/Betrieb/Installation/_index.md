---
title: "Installation"
linkTitle: "Installation"
weight: 1
description: 'Generelle Informationen zur Installation von 3V ROOMS'
---
ROOMS kann als klassische Windows-Installation oder containerisiert mit Docker Compose beziehungsweise Kubernetes bereitgestellt werden. Beim hier dokumentierten Stand 4.30.8 benötigt Docker noch getrennte Windows- und Linux-Container-Hosts. Für eine Neuinstallation auf einem einzelnen Windows-Server ist deshalb MSI mit IIS der einfachere Standardweg. Docker Compose ist interessant, wenn die gemischte Container-Infrastruktur bereits vorhanden ist: Versionen, Mounts und Neustartverhalten lassen sich damit reproduzierbar verwalten und ein zentraler Reverse Proxy übernimmt DNS-Namen und TLS-Zertifikate.

## Bereitstellungsvarianten

- **Windows-Installation mit MSI und IIS:** Wählen Sie diesen Weg für einen einzelnen Windows-Server oder wenn keine gemischte Windows-/Linux-Container-Infrastruktur betrieben werden soll. Das MSI installiert die ausgewählten Legacy- und RoomsPro-Komponenten. Die nachfolgende Reihenfolge beschreibt diesen Weg.
- **Docker Compose bei vorhandener Container-Infrastruktur:** Private Images aus `ghcr.io` stellen Legacy Website, Legacy Service, RoomsPro API und RoomsPro Worker bereit. Nginx terminiert HTTPS und leitet zwei öffentliche Hostnamen an die passenden Container weiter. Für 4.30.x sind zwei Container-Hosts oder VMs erforderlich. Folgen Sie der vollständigen Anleitung [Docker Compose unter Windows]({{< relref "Betrieb/Installation/Docker/_index.md" >}}).
- **Kubernetes:** Für grössere Installationen gelten derselbe Baukasten- und Migrationsablauf sowie dieselbe Trennung auf Windows- und Linux-Nodes. Hinweise finden Sie am Ende der [Docker-Anleitung]({{< relref "Betrieb/Installation/Docker/_index.md#kubernetes" >}}).

{{% alert title="Ausblick auf ROOMS 4.32" color="info" %}}
Eine vollständig unter Linux betreibbare Container-Auslieferung ist voraussichtlich ab ROOMS 4.32.0 vorgesehen. Solange diese Version nicht freigegeben und ihre Images nicht geprüft sind, gilt weiterhin die in der Docker-Anleitung beschriebene Trennung.
{{% /alert %}}

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
