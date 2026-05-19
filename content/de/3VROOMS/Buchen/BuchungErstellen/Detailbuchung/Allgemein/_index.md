---
title: "Allgemein"
linkTitle: "Allgemein"
weight: 10
description: ''
---
In der Detailbuchung geben Sie folgende Daten zur Buchung der Ressource ein:

---
{{< bootstrap-table "table-striped" >}}
| Feld        | Funktion         |
| ------------- |-------------  |
| Ressource          | Zeigt die ausgewählte Ressource an, auf welcher die Buchung vorgenommen wird. Diese Ressource kann bei Bedarf via Ressourcen-Picker direkt auf der Reservation neu gewählt werden. So kann auf einfache Art und Weise eine Reservation verschoben werden. |
| Vorlaufzeit in Minuten  |  Hier kann eingestellt werden, wie viele Minuten vor der Reservation die Ressource für Vorbereitungsarbeiten belegt sein soll. Diese Funktion ist nur bei ausreichenden Benutzerrechten eingeschaltet.  |
| Nachlaufzeit in Minuten  |   Hier kann eingestellt werden, wie viele Minuten nach der Reservation die Ressource für Nachbereitungsarbeiten belegt sein soll. Diese Funktion ist nur bei ausreichenden Benutzerrechten eingeschaltet.  |
| Titel   |  Hier kann der Titel der Reservation eingegeben werden.    |
| Bemerkungen  |  In diesem Feld können zusätzliche Bemerkungen zur Reservation hinterlegt werden. Damit Informationen, die mehr Platz brauchen, übersichtlicher gelesen und erfasst werden können, kann mit Klick auf das Zoom Icon ein editierbares Popup geöffnet werden.   |
| Bemerkungen intern  |  In diesem Feld können ebenfalls zusätzliche Reservationsinformationen hinterlegt werden. Im Gegensatz zu den anderen Bemerkungen, sind die internen Bemerkungen nur mit Spezialrechten les- und editierbar.   |
| Test Demo   |  |
| Status   |  Durch die Definition eines Workflows können Hauptstatus (vom System vorgegeben) und Substatus in eine logische Reihenfolge gebracht werden.  |
| Anzahl Personen (1-20)  |  Dies ist die einzige Angabe, welche nur bei der Reservation eines Raumes zusätzlich auf dieser Maske erscheint. Hier kann eingegeben werden, wie viele Personen an diesem Meeting teilnehmen. Bei einer Eingabe wird diese Angabe mit der maximalen Kapazität verglichen und verunmöglicht, falls eine falsche Angabe eingegeben wurde, das Abschliessen der Reservation.   |
| Buchungsnummer   |  Hier wird die Buchungsnummer der aktuell erfassten Reservation dargestellt.   |
| Ersteller   |  Hier wird angezeigt, welcher Benutzer diese Reservation durchführt. Dies ist immer der aktuell angemeldete Benutzer.   |
| Organisator   |  Hier kann ausgewählt werden, wer für diese Reservation verantwortlich ist. Es ist möglich, dass ein Benutzer in Vertretung eines anderen Benutzers bucht. Dieser Benutzer kann mittels Eingabe des Namens gesucht werden. Die Suchresultate werden sofort angezeigt und der gewünschte Benutzer kann ausgewählt werden. Diese Funktion ist nur bei genügend Benutzerrechten ersichtlich. **Generell kann bei synchronisierten Serien-Buchungen by Design die organisierende Person nicht geändert werden. Dies ist eine Limitation welche durch Outlook/Exchange auferlegt ist.**  |
| Verantwortlicher  |  Ermöglicht in Form einer Intelibox eine verantwortliche Person für die Reservation zu bestimmen. Um diese Funktion zu nutzen, ist das Recht _Darf Person Verantwortlicher auf Reservation setzen_. Sofern der Verantwortliche im Profil die E-Mail Notifikationen aktiviert hat, werden diese an ihn und NICHT an den Organisator verschickt.   |
| Private Buchung   |   Mit der Aktivierung dieser Checkbox wird eine Reservation als privat definiert. Somit ist diese vertraulich und für andere Benutzer nicht einsehbar.  |
| Kostenträger des Organisators   |  Hier kann eine alternative Kostenstelle hinterlegt werden. Grundsätzlich wird die Kostenstelle des Organisators verwendet. Falls allerdings eine andere Kostenstelle verwendet werden soll, muss diese hier eingegeben werden. Diese Funktion ist nur bei genügend Benutzerrechten ersichtlich. Falls Kostenstellen vordefiniert wurden, steht an dieser Stelle eine Auswahlbox zur Verfügung. In diesem Fall können mehrere Kostenstellen hinzugefügt und auch wieder entfernt werden. Standardmässig werden die Kosten linear auf die einzelnen Kostenträger verteilt. Dies kann bei Bedarf manuell übersteuert werden (spezielle Berechtigung notwendig). Sofern noch keine manuellen Änderungen an der Kostenstelle vorgenommen wurden, wird beim nachträglichen Wechsel des Organisators dessen Kostenstelle übernommen. |
| Ressourcenkosten    |  Zeigt die Ressourcenkosten der aktuellen Reservation an.    |
| Hauptbuchung  |    |
| Gesamtkosten   |  Klick auf das _Plus_ Icon öffnet eine Übersicht der Gesamtkosten der Reservation in der gültigen Währung.   |
{{< /bootstrap-table >}}

{{< imgproc Buchen_Detailbuchung_start Resize "960x" >}}
Allgemeine Information zum Buchen einer Ressource eingeben
{{< /imgproc >}}

**Hinweis**:
Die Prüfung (Validierungsregel) auf Verfügbarkeit einer Ressource erfolgt in der Detailreservation, bei jeder Änderung/Wechsel von

* Datum
* Zeit
* Nachlaufzeit
* Vorlaufzeit
* Anzahl Personen
* Ressource

### Gesamtkosten


In der Kostenübersicht sehen Sie, welche Kosten für diese Reservation verursacht werden. Es können auch Zuschläge und Rabatte erfasst werden. Diese können Sie, sofern ein Dienstleister hinterlegt ist, mit Hilfe des Dropdowns diesem direkt zuweisen. Diese Funktion ist allerdings nur mit entsprechenden Benutzerrechten ersichtlich.

Die Kosten sind in folgende vier Bereiche eingeteilt:

---
{{< bootstrap-table "table table-striped" >}}
| Feld          | Funktion      |
| ------------- |-------------  |
| Ressourcenkosten|  Hier werden diejenigen Kosten angezeigt, welche für die gebuchte Ressource erhoben werden |
| Zusätzliche Kosten| Hier sind Kosten angegeben, welche zusätzlich zur Buchung (z.B. Equipment) erhoben werden. |
| Dienstleistungskosten|  Hier sind Kosten angegeben, welche durch zusätzliche Dienstleistungen (Catering, etc.) verursacht werden. |
| Umstuhlungskosten |  Hier werden die Kosten angegeben, welche durch eine allfällige Umstuhlung verursacht werden. |
{{< /bootstrap-table >}}

{{< imgproc Buchen_Detailbuchung_Gesamtkosten Resize "960x" >}}
Übersicht der Gesamtkosten einer Ressource
{{< /imgproc >}}


Anstelle der manuellen Eingabe von Rabatten, kann von berechtigten Personen in den Stammdaten ein Standard Rabatt für eine Firma/OE (Kunde) eingetragen werden. Dieser wird bei allen Organisatoren einer Reservation angezeigt, die dieser Firma/OE zugeordnet sind.
