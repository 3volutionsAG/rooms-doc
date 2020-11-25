---
title: "Installationsanleitung"
linkTitle: "Installationsanleitung"
weight: 999
description: Inital and Update Manual
---

## Vorbereitung

{{% alert title="Information" color="info" %}}
Üblicherweise erfolgt eine Erstinstallation von ROOMS beim Kunden vor Ort durch Mitarbeitende von 3volutions. Mit diesem Vorgehen möchten wir sicherstellen, dass die kundenspezifischen Gegebenheiten der jeweiligen IT-Umgebung Berücksichtigung finden und die optimalen Konfigurationseinstellungen gewählt werden. Falls nachträglich zusätzliche Installationen gewünscht oder eine Paketierung der Installation angestrebt wird, muss der Kunde die von uns vorgenommene Erstinstallation so ausführlich dokumentieren, dass diese Arbeiten danach selbständig ausgeführt werden können.
{{% /alert %}}

- Anzahl der eingesetzten Maschinen und Aufteilung der Komponenten klären
    - Check: Skalierung
- Setup der Maschinen mit der benötigten Software von Drittherstellern und Updates
    - See: Requirements
    - See: Tools & Guides

//

ROOMS Installation File
See: ROOMS
Kommunikation zwischen den Maschinen (Firewalls u.ä.) sicherstellen
"Service User" erstellen Bsp. "ROOMSSERVICE" mit folgenden Anforderungen
read/write database(s) (but not db-owner)
Allow to run "IIS Application Pool"
Allow to run ROOMS Windows Services
Allow communication between third-party systems (LDAP, MS Exchange, etc. ) 
"Applications Admin" User für Installations und Wartungsarbeiten mit folgenden Anforderungen
db-owner (wichtig für "DB-Update Manager", wird nach jedem APP Update ausgeführt)
ROOMS Server & ROOMS SQL DB (local Admin)
please make sure any server or component can be administered during the basic installations process
DNS Naming für die  ROOMS Web Umgebung 
ROOMS.<yourdomain>.xy (Prod)
FORMS-ROOMS.<yourdomain>.xy (Prod Forms Auth.)
TEST-ROOMS.<yourdomain>.xy (Test)
TEST-FORMS-ROOMS.<yourdomain>.xy (Test Forms Auth)

//


{{% alert title="Information" color="info" %}}
Es ist möglich, die Berechtigungen nicht über einen Service Domänen-Account, sondern über eine Service Domänen-Rolle zu vergeben. Dieses Vorgehen kann je nach Umgebung zwar Vorteile bieten, ist aber aufwändiger und wird als Standard nicht empfohlen. Diese Dokumentation geht deshalb nicht detailliert auf die Verwendung einer Service Domänen-Rolle ein und spricht künftig immer nur vom Service Domänen-Account.
{{% /alert %}}



{{< imgproc ROOMS_BigPicture Resize "1280x" >}}
Abbildung ff: ROOMS Big Picture 
{{< /imgproc >}}


## Allgemeines

{{% alert title="Information" color="info" %}}

- Jede Installation von ROOMS kann eine beliebige Anzahl von Datenbanken unterstützen; eine Datenbank entspricht in diesem Kontext einem Mandanten. Die Einrichtung mehrerer Mandanten ist sinnvoll, wenn ein Kunde bspw. eine Unterteilung der verwalteten Ressourcen vornehmen (Trennung verschiedener Länder wie Schweiz / Deutschland) oder Parallelsysteme unterhalten will (Produktivsystem / Schulungssystem). Die Installation mehrerer Mandanten erfordert eine entsprechende Lizenzierung.

- Die Installation mehrerer Mandanten auf einem System sollte nicht mit der Installation mehrerer Systeme (Produktivsystem / Testsystem) verwechselt werden.

- Diese Dokumentation spricht künftig immer nur von Datenbanken und meint damit implizit auch Mandanten.
{{% /alert %}}


1. Bli
1. Bla
1. Blu


