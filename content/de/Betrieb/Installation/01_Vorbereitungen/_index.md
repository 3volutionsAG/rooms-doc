---
title: "Vorbereitungen"
linkTitle: "Vorbereitungen"
weight: 10
description: Dokumentation der Erstinstallation, die eine selbstständige Ausführung ermöglicht.
---
<p align ="justify">
Üblicherweise erfolgt eine Erstinstallation von ROOMS beim Kunden vor Ort durch Mitarbeitende von 3volutions. Mit diesem Vorgehen möchten wir sicherstellen, dass die kundenspezifischen Gegebenheiten der jeweiligen IT-Umgebung Berücksichtigung finden und die optimalen Konfigurationseinstellungen gewählt werden. </br>
Falls nachträglich zusätzliche Installationen gewünscht oder eine Paketierung der Installation angestrebt wird, muss der Kunde die von uns vorgenommene Erstinstallation so ausführlich dokumentieren, dass diese Arbeiten danach selbständig ausgeführt werden können. </p>

- Anzahl der eingesetzten Maschinen und Aufteilung der Komponenten klären:
  [Skalierung](https://3volutions.atlassian.net/servicedesk/customer/portal/1/article/257130714?src=-720952394)
- Setup der Maschinen mit der benötigten Software von Drittherstellern und Updates: [Tools & Guides](https://3volutions.atlassian.net/servicedesk/customer/portal/1/article/508690433)
- ROOMS Installation File:
  [ROOMS Releases](https://3volutions.atlassian.net/servicedesk/customer/portal/1/article/417300536)
- Kommunikation zwischen den Maschinen (Firewalls u.ä.) sicherstellen
- **Service User** erstellen Bsp. "ROOMSSERVICE" mit folgenden Anforderungen
  
  - read/write database(s) (but not db-owner)
  - Allow to run "IIS Application Pool"
  - Allow to run ROOMS Windows Services
  - Allow communication between third-party systems (LDAP, MS Exchange, etc. ) 
</br> </br>
  
- **Applications Admin** User für Installations- und Wartungsarbeiten mit folgenden Anforderungen:
  
  - db-owner (wichtig für *DB-Update Manager*, wird nach jedem APP Update ausgeführt)
  - ROOMS Server & ROOMS SQL DB (local Admin)
  - please make sure any server or component can be administered during the basic installations process </br> </br>
  
- DNS Naming für die  ROOMS Web Umgebung
  
  - ROOMS.<yourdomain>.xy (Prod)
  - FORMS-ROOMS.<yourdomain>.xy (Prod Forms Auth.)
  - TEST-ROOMS.<yourdomain>.xy (Test)
  - TEST-FORMS-ROOMS.<yourdomain>.xy (Test Forms Auth)
  </br>

<p align = "justify">
Es ist möglich, die Berechtigungen nicht über einen Service Domänen-Account, sondern über eine Service Domänen-Rolle zu vergeben. Dieses Vorgehen kann je nach Umgebung zwar Vorteile bieten, ist aber aufwändiger und wird als Standard nicht empfohlen. Diese Dokumentation geht deshalb nicht detailliert auf die Verwendung einer Service Domänen-Rolle ein und spricht künftig immer nur vom Service Domänen-Account. </p>

## 3V ROOMS BIg Picture

{{< imgproc BigPicture Resize "640x" >}}
3V ROOMS - Big Picture
{{< /imgproc >}}

## Allgemeines

<p align = "justify">
Jede Installation von ROOMS kann eine beliebige Anzahl von Datenbanken unterstützen. </br>
Eine Datenbank entspricht in diesem Kontext einem Mandanten. Die Einrichtung mehrerer Mandanten ist sinnvoll, wenn ein Kunde, z.B. eine Unterteilung der verwalteten Ressourcen vornehmen (Trennung verschiedener Länder wie Schweiz / Deutschland) oder Parallelsysteme unterhalten möchte (Produktivsystem / Schulungssystem). </br>
Die Installation mehrerer Mandanten erfordert eine entsprechende Lizenzierung. </br>
<b>Hinweis</b>: Die Installation mehrerer Mandanten auf einem System sollte nicht mit der Installation mehrerer Systeme (Produktivsystem / Testsystem) verwechselt werden.
Diese Dokumentation spricht künftig immer nur von Datenbanken und meint damit implizit auch Mandanten. </p>
