---
title: "Office 365 Outlook Add-In"
linkTitle: "Office 365 Outlook Add-In"
weight: 10
description: > 
    <p style="text-align: justify">Das Office 365 Outlook Add-In ermöglicht das Buchen einer Ressource in Outlook. </p>
---
<p style="text-align: justify"> Das Add-In kann im lokal installierten Outlook Client und in der Web-Anwendung von O365 Outlook genutzt werden. </p>

<p style="text-align: justify">
Der Termin wird zunächst in Outlook erstellt. Über das Add-Inn stehen Ihnen weitere Funktionen zur Verfügung. Zusatzfunktionen beim: </p>

#### Termin/Serientermin erstellen

- Ressourcen suchen und filtern
- verfügbare Ressourcen anzeigen und auswählen
- Ressourcen inkl. Catering & Service buchen
- Buchungsübersicht einsehen

Bei Serienterminen:

- einzelne Serientermine anpassen, falls die Ressource an einzelnen Serienterminen nicht verfügbar sein sollte

**Hinweis**:
<p style="text-align: justify">
Ein Einzeltermin kann nicht in einen Serientermin umgebucht werden. Es muss eine neue Buchung erstellt und als Serientermin definiert werden. </p>

#### Termin/Serientermin ändern

- Buchungsübersicht anzeigen
- Buchungsdaten ändern (Raum, Catering & Service, Teilnehmer, ...)
- Ressource ändern (z.B. Raum wechseln)

Bei Serienterminen:

- Buchungsdaten eines Einzeltermins ändern (Raum, Equipment, Teilnehmer, ...)

**Hinweis**: </br>
<p style="text-align: justify">
Ist zum neuen Termin eine der gebuchten Ressourcen oder Catering & Service nicht verfügbar, wird der Termin auf den ursprünglichen Termin zurückgesetzt.</br>
Termine, die in der Vergangenheit liegen, werden nach einer Änderung nicht synchronisiert. </p>
  
#### Termin/Serientermin stornieren

<p style="text-align: justify">
In Outlook löschen Sie den kompletten Einzeltermin/Serientermin inkl. der Ressourcenbuchung in 3V ROOMS. </p>

<p style="text-align: justify">
Mit dem Buchungsassistenten können Sie die Ressourcenbuchung stornieren, der Termin in O365 Outlook bleibt erhalten. </p>

#### Einzelne Rooms Reservation aus einzelnem Serientermin einer Outlook Serie erstellen

Mit dem Addin Release 1.4.0 und Rooms Release 4.7.2207 ist es möglich, aus einer Outlook Serie, einzelne Termine auszuwählen und nur genau zu diesen eine Rooms Buchung zu erstellen.

Werden Änderung an dem Serientermin vorgenommen, werden diese Änderungen mit Rooms synchronisiert.

Änderungen an der Serie werden normalerweise auch übernommen, z.B. Titel, Teilnehmer anpassungen.

Bei einer Zeitänderung der Kompletten Serie werden alle Serietermine zurückgesetzt, dies wird dem Benutzer auch so in Outlook mitgeteilt. In diesem Fall werden alle bestehenden Serientermine in Rooms storniert.

Es ist möglich, eine Serie welche bereits einzelne Termine mit Rooms synchronsiert hat, komplett mit Rooms zu synchronisieren. Auch hier werden die einzelnen Termine storniert und durch die Serientermine ersetzt. Zu beachten ist, dass wenn einzeltermin bearbeitet wird, der früher eine einzelbuchung war und nun Teil einer Serie ist, bei diesem Termin immer noch die alten Synchronisationsinformationen im Outlook Body vorhanden sind.

