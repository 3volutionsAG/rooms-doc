---
title: "Systemanforderungen"
linkTitle: "Systemanforderungen"
weight: 10
description: 'Dokumentation der Erstinstallation, die eine selbstständige Ausführung ermöglicht.'
---
Üblicherweise erfolgt eine Erstinstallation von ROOMS beim Kunden vor Ort oder per Remote durch Mitarbeitende der 3volutions. Mit diesem Vorgehen möchten wir sicherstellen, dass die kundenspezifischen Gegebenheiten der jeweiligen IT-Umgebung Berücksichtigung finden und die optimalen Konfigurationseinstellungen gewählt werden.

Falls nachträglich zusätzliche Installationen gewünscht oder eine Paketierung der Installation angestrebt wird, muss der Kunde die von uns vorgenommene Erstinstallation so ausführlich dokumentieren, dass diese Arbeiten danach selbständig ausgeführt werden können.

## Applikationsserver
- 4 CPU's
- 16GB RAM
- 100Gb
- Windows Server 2019 mit IIS >= 10
- .NET Framework 4.8
## Datenbank
- Microsoft SQL Server 2017 oder neuer
## Exchange Server
- Exchange Online (M365)
- 2019 (quickROOMS funktioniert nur mit dem Rich-Client nicht in OWA)
- 2016 (quickROOMS funktioniert nur mit dem Rich-Client nicht in OWA)

### quickROOMS
Um eine optimale quickROOMS Integration zu gewährleisten muss eine der folgenden Versionen vorhanden sein. 

- Microsoft 365 subscription
- Retail version: Outlook 2016, Outlook 2019, Outook 2021
- Volume license version: Outlook 202

## Infrastruktur und Tools

- Setup der Maschinen mit der benötigten Software von Drittherstellern und Updates: [Tools & Guides](https://3volutions.atlassian.net/servicedesk/customer/portal/1/article/508690433)
- ROOMS Installation File:
  [ROOMS Releases](https://3volutions.atlassian.net/servicedesk/customer/portal/1/article/417300536)
- Kommunikation zwischen den Maschinen (Firewalls u.ä.) sicherstellen
- **Service User** erstellen Bsp. "ROOMSSERVICE" mit folgenden Anforderungen
  - read/write database(s) (but not db-owner)
  - Allow to run "IIS Application Pool"
  - Allow to run ROOMS Windows Services
  - Allow communication between third-party systems (LDAP, MS Exchange, etc. ) 
  
- **Applications Admin** User für Installations- und Wartungsarbeiten mit folgenden Anforderungen:
  - db-owner (wichtig für *DB-Update Manager*, wird nach jedem APP Update ausgeführt)
  - ROOMS Server & ROOMS SQL DB (local Admin)
  - please make sure any server or component can be administered during the basic installations process
  
- DNS Naming für die  ROOMS Web Umgebung
  - ROOMS.<yourdomain>.xy (Prod)
  - FORMS-ROOMS.<yourdomain>.xy (Prod Forms Auth.)
  - TEST-ROOMS.<yourdomain>.xy (Test)
  - TEST-FORMS-ROOMS.<yourdomain>.xy (Test Forms Auth)

Es ist möglich, die Berechtigungen nicht über einen Service Domänen-Account, sondern über eine Service Domänen-Rolle zu vergeben. Dieses Vorgehen kann je nach Umgebung zwar Vorteile bieten, ist aber aufwändiger und wird als Standard nicht empfohlen. Diese Dokumentation geht deshalb nicht detailliert auf die Verwendung einer Service Domänen-Rolle ein und spricht künftig immer nur vom Service Domänen-Account.
