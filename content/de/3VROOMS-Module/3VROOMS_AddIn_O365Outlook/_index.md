---
title: "Office 365 Outlook Add-In"
linkTitle: "Office 365 Outlook Add-In"
weight: 10
description: 'Das Office 365 Outlook Add-In ermöglicht das Buchen einer Ressource in Outlook.'
---
Das Add-In kann im lokal installierten Outlook Client und in der Web-Anwendung von O365 Outlook genutzt werden.


Der Termin wird zunächst in Outlook erstellt. Über das Add-Inn stehen Ihnen weitere Funktionen zur Verfügung. Zusatzfunktionen beim:

#### Termin/Serientermin erstellen

- Ressourcen suchen und filtern
- verfügbare Ressourcen anzeigen und auswählen
- Ressourcen inkl. Catering & Service buchen
- Buchungsübersicht einsehen

Bei Serienterminen:

- einzelne Serientermine anpassen, falls die Ressource an einzelnen Serienterminen nicht verfügbar sein sollte

#### Termin/Serientermin ändern

- Buchungsübersicht anzeigen
- Buchungsdaten ändern (Raum, Catering & Service, Teilnehmer, ...)
- Ressource ändern (z.B. Raum wechseln)

Bei Serienterminen:

- Buchungsdaten eines Einzeltermins ändern (Raum, Equipment, Teilnehmer, ...)

**Hinweis**:

Ist zum neuen Termin eine der gebuchten Ressourcen oder Catering & Service nicht verfügbar, wird der Termin auf den ursprünglichen Termin zurückgesetzt.
Termine, die in der Vergangenheit liegen, werden nach einer Änderung nicht synchronisiert.

#### Termin/Serientermin stornieren


In Outlook löschen Sie den kompletten Einzeltermin/Serientermin inkl. der Ressourcenbuchung in 3V ROOMS.


Mit dem Buchungsassistenten können Sie die Ressourcenbuchung stornieren, der Termin in O365 Outlook bleibt erhalten.

#### Raum aus einer Serie entfernen

Für diese Funktion benötigen Sie kompatible Versionen von ROOMS und dem Add-In. Aktualisieren Sie bei Bedarf zuerst ROOMS und anschliessend das Add-In.

Verwenden Sie diese Funktion, wenn die Besprechung ohne den gebuchten Raum stattfinden soll. Der Outlook-Termin und die eingeladenen Personen bleiben erhalten. Das Entfernen des Raumes ist keine Absage der Besprechung.

1. Öffnen Sie in Outlook den betroffenen Einzeltermin der Serie oder die ganze Serie und rufen Sie die Buchungsübersicht im Add-In auf.
2. Wählen Sie im Menü **Raum entfernen** für den Einzeltermin oder **Raum entfernen (Serie)** für alle Termine der Serie. Prüfen Sie den Umfang und bestätigen Sie die Rückfrage.
3. Schliessen Sie nach erfolgreichem Entfernen das Add-In und senden Sie die Änderung in Outlook.

Bei einem Einzeltermin bleibt die Serie erhalten. Bei **Raum entfernen (Serie)** werden die Raumbuchungen der ganzen Serie aufgehoben, nicht die Besprechungstermine. Prüfen Sie nach der Synchronisation die Raumangabe und die Teilnehmer im betroffenen Outlook-Termin sowie die Raumbuchungen in ROOMS.

**Meldung: «Der Raum kann nicht sicher von den Teilnehmern unterschieden werden.»**

Kann das Add-In den gebuchten Raum nicht eindeutig erkennen, bricht es vor einer Änderung ab. Die Buchung und die Outlook-Teilnehmer bleiben unverändert. Lassen Sie durch Ihre Administration prüfen, ob ROOMS und das Add-In auf einem kompatiblen Versionsstand sind. Alternativ können Sie den Raum direkt in Outlook entfernen und die Änderung senden. Entfernen Sie dabei nur den Raum, nicht die eingeladenen Personen oder den Termin. Prüfen Sie anschliessend auch die Buchung in ROOMS.

#### Einzelne Rooms Reservation aus einzelnem Serientermin einer Outlook Serie erstellen

Mit dem Addin Release 1.4.0 und Rooms Release 4.7.2207 ist es möglich, aus einer Outlook Serie, einzelne Termine auszuwählen und nur genau zu diesen eine Rooms Buchung zu erstellen.

Werden Änderung an dem Serientermin vorgenommen, werden diese Änderungen mit Rooms synchronisiert.

Änderungen an der Serie werden normalerweise auch übernommen, z.B. Titel, Teilnehmer anpassungen.

Bei einer Zeitänderung der Kompletten Serie werden alle Serietermine zurückgesetzt, dies wird dem Benutzer auch so in Outlook mitgeteilt. In diesem Fall werden alle bestehenden Serientermine in Rooms storniert.

Es ist möglich, eine Serie welche bereits einzelne Termine mit Rooms synchronsiert hat, komplett mit Rooms zu synchronisieren. Auch hier werden die einzelnen Termine storniert und durch die Serientermine ersetzt. Zu beachten ist, dass wenn einzeltermin bearbeitet wird, der früher eine einzelbuchung war und nun Teil einer Serie ist, bei diesem Termin immer noch die alten Synchronisationsinformationen im Outlook Body vorhanden sind.

