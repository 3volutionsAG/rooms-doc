---
title: "Prozesse"
linkTitle: "Prozesse"
weight: 30
description:
---
## (A)- Abonnieren der Push Notifikation

<p align="Justify">
Der Windows Service erstellt für jeden Benutzer, welcher die Synchronisation eingeschaltet hat, ein Push Abonnement (über **Connection 2** ). Durch dieses Abonnement wird GARAIO ROOMS über alle Änderungen der Kalender-Einträge der jeweiligen Personen informiert. </p>

## (B) - Neue Reservation über die Web Applikation

<p align="Justify">
B1. Der Benutzer erstellt eine neue Reservation über die ROOMS Web Applikation (Browser). </p>

<p align="Justify">
B2. Der Windows Service erstellt über <b>Verbindung 2</b> einen neuen Kalendereintrag. Die ItemId des Kalendereintrags wird auf der Reservation, die AppointmentOid der Reservation auf dem Kalendereintrag abgelegt. </p>

<p align="Justify">
B3. Die MS Exchange Umgebung sendet eine Push Notifikation (Create) über <b>Verbindung 3</b>. Über die ItemId wird die Reservation gefunden, es wird aber keine Veränderung festgestellt (der Kalendereintrag wurde ja gerade erst mit den Werten der Reservation erstellt: B2). </p>

## (C) - Neue Reservation über einen MS Outlook Client mit Add-in

<p align="Justify">
C1. Der Benutzer erstellt einen neuen Kalendereintrag in einem MS Outlook Client und öffnet den Reservationsbereich des ROOMS OutlookAddins.

C2. Das ROOMS OutlookAddin sucht nach verfügbaren Ressourcen über <b>Verbindung 1</b>.

C3. Der Benutzer wählt eine Ressource aus und speichert den Kalendereintrag.

C4. Das ROOMS OutlookAddin erstellt eine neue Reservation über <b>Verbindung 1</b>. Die AppointmentOid der Reservation wird auf dem Kalendereintrag abgelegt.
_Achtung: Die Änderungen müssen nun vom MS Outlook Client an die MS Exchange Umgebung übermittelt werden (evtl. Taste F9)!_

C5. Die MS Exchange Umgebung sendet eine Push Notification (Create) über <b>Verbindung 3</b>. Es wird keine Reservation mit der entsprechenden ItemId gefunden.

C6. Der Windows Service sucht nach einem Kalendereintrag mit der entsprechenden AppointmentOid und hinterlegt dessen ItemId auf der Reservation. </p>

## (D) Anpassung über die Web Applikation

D1. Der Benutzer ändert / annulliert eine Reservation über die ROOMS 4 Web Applikation (Browser).

D2. Der Windows Service aktualisiert / entfernt über **Verbindung 2** den Kalendereintrag mit der entsprechenden ItemId.

D3. Die MS Exchange Umgebung sendet eine Push Notification (Update / Delete) über **Verbindung 3**. Über die ItemId wird die Reservation gefunden, es wird aber keine Veränderung festgestellt (der Kalendereintrag wurde ja gerade mit den Werten der Reservation aktualisiert: D2).

## (E) - Anpassung über einen MS Outlook Client mit Addin

E1. Der Benutzer ändert / löscht einen Kalendereintrag in einem MS Outlook Client mit ROOMS OutlookAddin. Die hinterlegte AppointmentOid kennzeichnet den Kalendereintrag als mit einer Reservation verknüpft.

E2. Das ROOMS OutlookAddin aktualisiert / annulliert die Reservation über **Verbindung 1**.
 Achtung: Die Änderungen müssen nun vom MS Outlook Client an die MS Exchange Umgebung übermittelt werden (evtl. Taste F9)!

E3. Die MS Exchange Umgebung sendet eine Push Notification (Update / Delete) über **Verbindung 3**. Über die ItemId wird die Reservation gefunden, es wird aber keine Veränderung festgestellt (die Reservation wurde ja bereits mit den Werten des Kalendereintrags aktualisiert: F2).
_Hinweis: Wird auf einem Kalendereintrag im MS Outlook die Funktion Löschen aufgerufen, wird der Eintrag nicht gelöscht, sondern lediglich in den Papierkorb verschoben. Die Reservation in ROOMS 4 wird aber trotzdem annulliert - der Kalendereintrag sollte also nicht wieder hergestellt werden. (Tipp: Das Drücken der Taste Shift während dem Aufruf der Funktion Löschen führt zu einer direkten Löschung im MS Outlook.)_

## (F) – Anpassen über ein MS Outlook Client ohne Addin

F1. Der Benutzer ändert / löscht einen Kalendereintrag in einem MS Outlook Client ohne ROOMS OutlookAddin (oder MS Outlook Web Access, POP3, IMAP, usw.).
_Achtung: Die Änderungen müssen nun vom MS Outlook Client an die MS Exchange Umgebung übermittelt werden (evtl. Taste F9)!_

F2. Die MS Exchange Umgebung sendet eine Push Notification (Update / Delete) über **Verbindung 3**. Über die ItemId wird die Reservation gefunden und eine Veränderung festgestellt, die Reservation wird entsprechend aktualisiert / annulliert.

_Hinweis: Wird auf einem Kalendereintrag im MS Outlook die Funktion Löschen aufgerufen, wird der Eintrag nicht gelöscht sondern lediglich in den Papierkorb verschoben. Die Reservation in ROOMS wird aber trotzdem annulliert - der Kalendereintrag sollte also nicht wiederhergestellt werden. (__ **Tip:** _ _Das Drücken der Taste Shift während dem Aufruf der Funktion Löschen führt zu einer direkten Löschung im MS Outlook.)_