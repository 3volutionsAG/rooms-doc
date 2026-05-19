---
title: "Skalierung"
linkTitle: "Skalierung"
weight: 90
description: 'Generelle Informationen zur Skalierung von 3V ROOMS'
---
## Allgemeines

Einen ungefähren Eindruck über die zu erwartende Auslastung des Systems und die damit verbundenen Hardware-Anforderungen gibt folgende Berechnungsmatrix:

[Berechnungsmatrix für Hardware-Anforderungen](https://3volutions.atlassian.net/plugins/servlet/servicedesk/customer/confluence/shim/download/attachments/257130714/Berechnungsmatrix%20f%C3%BCr%20Hardware-Anforderungen.xlsx?version=5&modificationDate=1348047210144&cacheVersion=1&api=v2)

Je nach Auslastung ist es möglich, alle ROOMS Server Applikationen auf einer einzigen Maschine zu betreiben (1 Maschine); wenn immer möglich, sollte jedoch der MS SQL Server auf einer separaten Maschine installiert werden (2 Maschinen).

Bei höherer Auslastung wird empfohlen, als nächstes den ROOMS Windows Service und die ROOMS Webapplikation auf verschiedenen Maschinen laufen zu lassen (3 Maschinen). Bei Hochleistungssystemen kann danach ein LoadBalancing der Webapplikation als sogenannte WebFarm und/oder ein Clustering des MS SQL Servers ins Auge gefasst werden (n Maschinen).

Normalerweise dürften 2 oder 3 Maschinen für den Betrieb von ROOMS angemessen sein.
Das Betriebshandbuch orientiert sich an Installationen mit 2 bis 3 involvierten Maschinen; die Anleitungen in den folgenden Kapiteln sind in diesem Rahmen zu verstehen.

## LoadBalancing

Die Wahl der für ein LoadBalancing verwendeten Server Applikation sowie deren Konfiguration wird dem Betreiber überlassen. Als ungefähre Anhaltspunkte dienen folgende Stichworte:

**LB decision**: Aus Sicht ROOMS egal, z.B. _IP Adresse_.

**LB algorithm**: Idealerweise wird eine gleichmässige Auslastung der Server angestrebt, z.B. _least loaded_.

**Probe**: Optional, möglich wäre eine IIS Response _HTTP 200_.

**Stickiness**: Stickiness muss nicht aktiviert sein, wenn alle WebServer denselben MachineKey verwenden. ROOMS wird mit einem vordefinierten MachineKey ausgeliefert, der bei Bedarf aus Security-Gründen angepasst werden kann.

{{< imgproc LoadBalancing Resize "640x" >}} {{< /imgproc >}}

## Clustering

Zurzeit sind zu diesem Thema noch keine Informationen verfügbar.

{{< imgproc StandClust Resize "640x" >}} {{< /imgproc >}}
