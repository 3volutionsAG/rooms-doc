---
title: "Skalierung"
linkTitle: "Skalierung"
weight: 4
description: Generelle Informationen zur Skalierung von 3V ROOMS
---
## Allgemeines

Einen ungefähren Eindruck über die zu erwartende Auslastung des Systems und die damit verbundenen Hardware-Anforderungen gibt folgende Berechnungsmatrix: </br>

<a href = "https://3volutions.atlassian.net/plugins/servlet/servicedesk/customer/confluence/shim/download/attachments/257130714/Berechnungsmatrix%20f%C3%BCr%20Hardware-Anforderungen.xlsx?version=5&modificationDate=1348047210144&cacheVersion=1&api=v2"> Berechnungsmatrix für Hardware-Anforderungen </a> </br>

<p align = "justify">
Je nach Auslastung ist es möglich, alle ROOMS Server Applikationen auf einer einzigen Maschine zu betreiben (1 Maschine); wenn immer möglich, sollte jedoch der MS SQL Server auf einer separaten Maschine installiert werden (2 Maschinen). </br>

Bei höherer Auslastung wird empfohlen, als nächstes den ROOMS Windows Service und die ROOMS Webapplikation auf verschiedenen Maschinen laufen zu lassen (3 Maschinen). Bei Hochleistungssystemen kann danach ein LoadBalancing der Webapplikation als sogenannte WebFarm und/oder ein Clustering des MS SQL Servers ins Auge gefasst werden (n Maschinen). </br>

Normalerweise dürften 2 oder 3 Maschinen für den Betrieb von ROOMS angemessen sein.
Das Betriebshandbuch orientiert sich an Installationen mit 2 bis 3 involvierten Maschinen; die Anleitungen in den folgenden Kapiteln sind in diesem Rahmen zu verstehen. </p>

## LoadBalancing

<p align = "justify">
Die Wahl der für ein LoadBalancing verwendeten Server Applikation sowie deren Konfiguration wird dem Betreiber überlassen. Als ungefähre Anhaltspunkte dienen folgende Stichworte:

<b>LB decision</b>: Aus Sicht ROOMS egal, z.B. <i>IP Adresse</i>.

<b>LB algorithm</b>: Idealerweise wird eine gleichmäßige Auslastung der Server angestrebt, z.B. <i>least loaded</i>.

<b>Probe</b>: Optional, möglich wäre eine IIS Response <i>HTTP 200</i>.

<b>Stickiness</b>: Stickiness muss nicht aktiviert sein, wenn alle WebServer denselben MachineKey verwenden. ROOMS wird mit einem vordefinierten MachineKey ausgeliefert, der bei Bedarf aus Security-Gründen angepasst werden kann. </p>

{{< imgproc LoadBalancing Resize "640x" >}} {{< /imgproc >}}

## Clustering

Zurzeit sind zu diesem Thema noch keine Informationen verfügbar.

{{< imgproc StandClust Resize "640x" >}} {{< /imgproc >}}
