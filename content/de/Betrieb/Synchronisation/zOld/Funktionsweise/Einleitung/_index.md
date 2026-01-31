---
title: "Einleitung"
linkTitle: "Einleitung"
weight: 10
description: ''
---
Der Ausdruck Exchange 20_XX_ ist austauschbar, wir sprechen künftig nur noch von Exchange, welche alle Versionen adressiert.

Die Synchronisation umfasst folgende Funktionalitäten:

1. Reservationen aus der ROOMS Umgebung können als Kalendereinträge in eine MS Exchange Umgebung exportiert werden. _(Diese Funktionalität ist Teil der Basisinstallation, muss aber konfiguriert werden)._
2. Beim Erstellen oder Editieren von Kalendereinträgen können direkt in einem MS Outlook Client neue ROOMS Reservationen erstellt werden. _(Diese Funktionalität setzt zusätzlich die Installation des ROOMS OutlookAddins auf allen erwünschten Clients voraus; es handelt sich dabei aber um eine optionale Erweiterung, die für den Betrieb der Synchronisation nicht zwingend benötigt wird)._
3. In beiden Fällen werden in der Folge alle Änderungen an den betreffenden Elementen gegenseitig übernommen. _(Diese Funktionalität ist Teil der Basisinstallation, muss aber konfiguriert werden)._
4. Abfrage und Anzeige der Free/BusyInformationen von Teilnehmern, wenn diese in Exchange vorhanden sind. _(Diese Funktionalität ist Teil der Basisinstallation, muss aber konfiguriert werden)._

<p align="justify">
Grundsätzlich muss unterschieden werden, mit welchen MS Exchange Versionen die Synchronisierung vorgenommen werden soll; je nach gewünschter Funktionalität und eingesetzten Versionen werden unterschiedliche Installations- und Konfigurationsschritte benötigt. Bei den Informationen in diesem Dokument ist also darauf zu achten, ob sie eine oder mehrere bestimmte Versionen betreffen (Versionen werden ausgewiesen) oder allgemein gültig sind (keine Kennzeichnung vorhanden). Aktuell werden die MS Exchange Versionen 2007, 2010 und 2013 unterstützt. </p>

<p align="justify">
Es ist möglich, die Synchronisation einer ROOMS Umgebung mit verschiedenen MS Exchange Versionen und Umgebungen gleichzeitig zu betreiben, da die Synchronisierung pro Benutzer konfiguriert wird. Pro Benutzer kann aber nur mit einer MS Exchange Version und Umgebung synchronisiert werden. </p>

<p align="justify">
Die Synchronisation einer Reservation ist ausschliesslich mit dem Kalender des Organisators der Reservation möglich (Teilnehmer erhalten Reservationsanfragen des Organisators). Entspricht der in der ROOMS Web Applikation angemeldete Benutzer nicht dem Organisator einer Reservation (bei einer Reservation für eine Drittperson), wird bei einer allfälligen Synchronisation folglich ein Kalendereintrag in einem fremden Kalender erzeugt. Wechselt der Organisator einer bereits synchronisierten Reservation, wird der Kalendereintrag im Kalender des bisherigen Organisators gelöscht und ein neuer Eintrag im Kalender des neuen Organisators erstellt. </p>

<p align="justify">
Die MS Outlook Version ist nicht an einen bestimmten Benutzer gebunden und es können verschiedene Versionen gleichzeitig betrieben werden. Aktuell werden die MS Outlook Versionen 2007, 2010 und 2013, 2016, 2019 und Exchange Online (O365) unterstützt. </p>
