---
title: "Installation"
linkTitle: "Installation"
weight: 1
description: 'Generelle Informationen zur Installation von 3V ROOMS'
---
ROOMS kann als klassische Windows-Installation oder mit Docker beziehungsweise Kubernetes bereitgestellt werden.

## Bereitstellungsvarianten

- **Windows-Installation:** MSI-Paket mit Legacy-Komponenten und RoomsPro-Komponenten. Die folgenden Installationsschritte beschreiben diesen Standardweg.
- **Docker oder Kubernetes:** Private Images aus `ghcr.io` für Legacy Website, Legacy Service, RoomsPro API und RoomsPro Worker. Die vollständige Anleitung finden Sie unter [Docker]({{< relref "Betrieb/Installation/Docker/_index.md" >}}).

Bei beiden Varianten müssen die Konfiguration, Datenbankverbindung, Lizenzen und öffentlichen URLs auf dieselbe Umgebung abgestimmt sein. Mischen Sie innerhalb einer Umgebung keine unterschiedlichen ROOMS-Versionen.

## Windows-Installation

Empfohlene Reihenfolge:

1. [Systemanforderungen]({{< relref "Betrieb/Installation/Vorbereitungen/_index.md" >}})
2. [Datenbank erstellen]({{< relref "Betrieb/Installation/DatenbankErstellen/_index.md" >}})
3. [Installation 3V ROOMS]({{< relref "Betrieb/Installation/InstallationROOMS/_index.md" >}})
4. [IIS Konfiguration]({{< relref "Betrieb/Installation/IIS-Konfiguration/_index.md" >}})
5. [Datenbankmigrationen]({{< relref "Betrieb/Installation/Datenbankmigrationen/_index.md" >}})
6. [Konfig Files]({{< relref "Betrieb/Installation/Konfig-Files/_index.md" >}})
7. [Lizenzen beziehen]({{< relref "Betrieb/Installation/LizenzenBeziehen/_index.md" >}})

Für den aktuell dokumentierten Windows-Standardweg sollte mindestens auf einer Maschine auch die **RoomsPro API** installiert sein, da sie die CLI für `db status` und `db migrate` bereitstellt.

Bei der Container-Bereitstellung werden diese Befehle über einen einmaligen Container beziehungsweise Kubernetes Job mit dem Image `rooms-api` ausgeführt. Details finden Sie unter [Docker: Datenbankmigrationen]({{< relref "Betrieb/Installation/Docker/_index.md#datenbankmigrationen" >}}).
