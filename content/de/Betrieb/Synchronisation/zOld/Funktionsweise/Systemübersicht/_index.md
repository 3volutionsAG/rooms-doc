---
title: "Systemübersicht"
linkTitle: "Systemübersicht"
weight: 20
description:
---
{{< imgproc Uebersicht Resize "640x" >}} {{< /imgproc >}}

_Die gewählte Skalierung bzw. die Anzahl der Server (Maschinen) und Aufteilung der Komponenten wird in der Darstellung nicht berücksichtigt._

**ROOMS Umgebung**

Dies umfasst die Datenbank, die Web Applikation mit den Web Services und den Windows Service.

**MS Exchange Umgebung**

Dies umfasst einen Client Access Server, einen Mailbox Server, sowie normalerweise weitere MS Exchange Server Komponenten, die für die Synchronisation nicht von Bedeutung sind.

**Client Umgebung**

Dies umfasst den MS Outlook Client sowie weitere Komponenten, die für die Synchronisation nicht von Bedeutung sind.

**MAPI Verbindung**

Dies umfasst die Kommunikation zwischen einem MS Outlook Client und einer MS Exchange Umgebung.

**Http(s)****Verbindung 1**

Dies umfasst Web Requests (REST) des ROOMS 4 Outlook Add-in an die ROOMS 4 Web Applikation. Diese Requests dienen dazu, die Verfügbarkeit von Ressourcen zu prüfen und die Reservationen vorzunehmen.

**Http(s)****Verbindung 2**

Dies umfasst Web Service Requests (SOAP) des ROOMS Windows Services an die Exchange Web Services eines MS Exchange Mailbox Servers. Diese Requests dienen dazu, die Kalendereinträge mit den Reservationen zu synchronisieren, die FreeBusy Informationen abzurufen und die Subscriptions der Push Notifications zu verwalten.

**Http(s)****Verbindung 3**

Dies umfasst Web Service Requests (SOAP) in Form von Push Notifications, die aus der MS Exchange Umgebung an die ROOMS Web Services gesendet werden. Diese Requests dienen dazu, die Reservationen mit den Kalendereinträgen zu synchronisieren.
