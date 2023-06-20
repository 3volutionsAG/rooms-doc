---
title: "Reiter Serieninformationen"
linkTitle: "Reiter Serieninformationen"
weight: 20
description: >
   
---
Im Bereich Serieninformation in der Detailreservation erstellen Sie Serien auf die gleiche Weise wie in Microsoft Outlook.

Der Bereich Serieninformationen ist in drei Bereiche eingeteilt, welche in den folgenden Kapiteln genauer erläutert werden.

1. Allgemeiner Bereich
2. Serieneinstellungen
3. Bearbeiten einer Serie

## Allgemeiner Bereich

In diesem Bereich wird angezeigt, wann die Serie startet. Darüber hinaus kann definiert werden, wie viele Iterationen diese Serie haben soll. Dabei kann zwischen einer Datumsbegrenzung oder der Anzahl der Iterationen gewählt werden.

{{< imgproc DetailbuchungSerieninformation Resize "960x" >}}
Eingabe der Serieninformation zum Buchen von Ressourcen
{{< /imgproc >}}

## Serieninformationen
Bei den Serieneinstellungen kann angegeben werden, wie sich die Serie wiederholt. Dabei kann zwischen verschiedenen Arten gewählt werden, welche wiederum verschiedene Einstellungsmöglichkeiten haben:
#### Täglich

Falls eine Serie täglich stattfinden soll, kann dies hier eingestellt werden. Es kann angegeben werden, wie viele Tage jeweils zwischen den Buchungen liegen sollen oder ob der Termin grundsätzlich an allen Wochentagen stattfinden soll.

{{< imgproc DetailbuchungSerieninformation Resize "960x" >}}
Eingabe tägliche Serieninformation
{{< /imgproc >}}

#### Wöchentlich

In diesem Bereich kann eingestellt werden, in welchem wöchentlichen Abstand und an welchen Wochentagen die Buchungen erstellt werden sollen. Der Wochentag, an welchem die Serie startet, ist dabei bereits vorselektiert und kann nicht verändert werden (das System gibt eine Fehlermeldung aus).

{{< imgproc Detailbuchung_Serieninformation_wächentlich Resize "960x" >}}
Eingabe wöchentliche Serieninformation
{{< /imgproc >}}

#### Monatlich

Bei der monatlichen Serie gibt es zwei Varianten zur Erstellung:

1. Am selben Datum:</br>
Es kann eingestellt werden, dass jeweils an einem bestimmten Tag jedes X-ten Monats eine Buchung erstellt wird.

2. Am selben Tag: </br>
Es kann eingestellt werden, dass die Buchung immer jeweils am X-ten Wochentag des X-ten Monats erstellt wird.

{{< imgproc Detailbuchung_Serieninformation_monatlich Resize "960x" >}}
Eingabe der Serieninformation zum Buchen von Ressourcen 
{{< /imgproc >}}

Wenn die gewünschten Einstellungen vorgenommen wurden, kann auf den Button <i>Erstellen</i> geklickt werden. Die Serienelemente werden dann gesucht und deren Verfügbarkeit direkt geprüft.

### Anzeige der Serienelemente 

Nach dem Klicken auf den Button <i>Erstellen</i> überprüft ROOMS die jeweiligen Serienelemente auf ihre Verfügbarkeit. Das Ergebnis wird in einer Liste aufgeführt.

{{< imgproc Detailbuchung_Serieninformation_Prüfstatus Resize "960x" >}}
Prüfstatus der Serienelemente nach dem Erstellen der Buchung 
{{< /imgproc >}}

In der Liste existiert eine Spalte Prüfstatus. Falls dieser Status ein Warndreieck aufweist, wird dadurch angezeigt, dass die Ressource zu diesem Zeitpunkt besetzt ist. Dieses Serienelement kann nur durch Anwählen der Checkbox und anschließendem Klicken des Buttons <i>Löschen</i> aus der Serie entfernt werden. Klicken Sie auf das Stift Icon um die Ressource und die Buchung zu bearbeiten. Sie können für eine andere Ressource (einmalige Umbuchung auf eine andere Ressource) oder ein anderen Zeitraum (bei gleicher Ressource) wählen. Dies kann auch mit Serienelementen gemacht werden, welche grundsätzlich frei sind.

Klicken Sie auf das Stift Icon, um die Ressource zu bearbeiten. Sie sehen ein neues Fenster, in welchem Sie einen anderen Zeitraum oder eine andere Ressource wählen können. Sie sehen nur die zu diesem Zeitpunkt freien Ressourcen der gleichen Art.

{{< imgproc Detailbuchung_Prüfstatus_bearbeiten Resize "960x" >}}
Eine Buchung aus der Serienliste bearbeiten  
{{< /imgproc >}}

Wählen Sie mittels des Datumspickers einen anderen Zeitraum für diese Reservation aus. Mit einem Klick auf den Button <b>+</b> der Ressource wählen Sie aus dem Standortbaum eine andere verfügbare Ressource der gleichen Art aus. Mit dem Button <i>Speichern</i> prüft ROOMS die Angaben und speichert sie dementsprechend ab.

## Bearbeiten einer Serie 

Bei Bedarf kann eine Serie angepasst werden. Sollen bei einer Serie mit 5 Iterationen beispielsweise die letzten beiden Termine eine halbe Stunde früher beginnen, kann dies in folgenden Schritten eingegeben werden:

1.	Man geht im Kalender zum zweitletzten Termin, ab welchem die Änderung gelten soll. 
2.	Mit Klick auf das <b>+</b>-Icon öffnet sich ein Fenster und man klickt den Button <b>Bearbeiten</b>.
3.	Aktivieren der Checkbox <b>Auf nachfolgende Serieneinträge übernehmen</b> unten in der Ansicht.
4.	Durch Eingabe der gewünschten Startzeit, Reservation um eine halbe Stunde vorziehen. Bestätigung durch grünes Häkchen erfolgt.
5.	Klick auf <b>Reservation abschließen</b>.
6.	Seite mit Zusammenfassung wird ausgegeben, darauf ist die Änderung der Zeiten für die beiden letzten Termine ersichtlich.
7.	Klick auf <b>Reservation bestätigen</b>. Die Teilnehmer der Serie erhalten für die bearbeiteten Termine zuerst einzelne Absagen und danach für den bearbeiteten Teil der Serie eine einzelne neue Einladung.

Die Checkbox <i>Auf nachfolgende Serieneinträge übernehmen</i> ist nur im Bearbeitungsmodus vorhanden und übernimmt mit ihrer Aktivierung alle Änderungen der aktuellen Reservation auf alle künftigen Reservationen dieser Serie.

<b>Achtung</b>: Es entstehen zwei neue Serien. Dies bedeutet, dass bei aktivierter Synchronisation die Teilnehmer eine Absage für zwei Termine erhalten und eine Neueinladung für die letzten beiden Termine.

## Zeitzone für Serienbuchungen

Als Standard wird immer die Zeitzone des Organisators verwendet wenn Serienelemente erstellt werden. Dies ist notwendig damit die Serie bei der Synchronisation mit der Exchange Mailbox des Oranisators keine Ausnahmen generiert.

Dieses Standardverhalten kann ab der Version `4.7.2107` überschrieben werden:

- Einstellungen -- System -- Globale Parameter -- Serie creation timezone adjustable -- auf `True` setzen

Bei der Serienerstellung erscheint nun ein Dropdown, bei welchem ausgewählt werden kann, welche Zeitzone als Berechnungsgrundlage genutzt werden soll.

{{< imgproc Detailbuchung_Serieninformation_Zeitzone Resize "960x" >}}
Auswahl der Zeitzone für die Erstellung der Serie.
{{< /imgproc >}}

Zudem kann in den Profileinstellungen einer Person im Tab `Stammdaten` kann die Standard Zeitzonen Quelle definiert werden.

{{< imgproc Detailbuchung_Serieninformation_Zeitzone_PersonSettings Resize "960x" >}}
Auswahl der Standard Zeitzonen Quelle für Person
{{< /imgproc >}}

### Berechnungsbeispiel

Da die Auswirkungen dieser Einstellung schnell komplex werden im folgenden ein Beispiel:

Gegeben ist folgende tägliche Serie vom 2023-10-27 - 2023-11-06

- Ersteller   TZ: (UTC+02:00): Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna
  - Winterzeitumstellung am: Sun, Oct 29, 2023
- Organisator TZ: (UTC-04:00): Eastern Time (US & Canada)
  - Winterzeitumstellung am: Sun, Nov 5, 2023
- Ressource   TZ: (UTC+01:00): Dublin, Edinburgh, Lisbon, London
  - Winterzeitumstellung am : Sun, Oct 29, 2023

#### Zeitzonen Quelle: Organisator

{{% alert %}}
Wenn diese Serie synchronisiert wird, werden keine Ausnahmen erstellt. Alle Ereignisse sind Standardereignisse.
{{% /alert %}}

{{< bootstrap-table "table table-striped" >}}
| Date        | UTC in Database       | Creator Time      | Organizer Time    | Resource Time     |
|-------------|-----------------------|-------------------|-------------------|-------------------|
| 2023-10-27  | 13:00:00 (UTC+00:00)  | 15:00 (UTC+02:00) | 09:00 (UTC-04:00) | 14:00 (UTC+01:00) |
| 2023-10-28  | 13:00:00 (UTC+00:00)  | 15:00 (UTC+02:00) | 09:00 (UTC-04:00) | 14:00 (UTC+01:00) |
| 2023-10-29  | 13:00:00 (UTC+00:00)  | 14:00 (UTC+01:00) | 09:00 (UTC-04:00) | 13:00 (UTC+00:00) |
| 2023-10-30  | 13:00:00 (UTC+00:00)  | 14:00 (UTC+01:00) | 09:00 (UTC-04:00) | 13:00 (UTC+00:00) |
| 2023-10-31  | 13:00:00 (UTC+00:00)  | 14:00 (UTC+01:00) | 09:00 (UTC-04:00) | 13:00 (UTC+00:00) |
| 2023-11-01  | 13:00:00 (UTC+00:00)  | 14:00 (UTC+01:00) | 09:00 (UTC-04:00) | 13:00 (UTC+00:00) |
| 2023-11-02  | 13:00:00 (UTC+00:00)  | 14:00 (UTC+01:00) | 09:00 (UTC-04:00) | 13:00 (UTC+00:00) |
| 2023-11-03  | 13:00:00 (UTC+00:00)  | 14:00 (UTC+01:00) | 09:00 (UTC-04:00) | 13:00 (UTC+00:00) |
| 2023-11-04  | 13:00:00 (UTC+00:00)  | 14:00 (UTC+01:00) | 09:00 (UTC-04:00) | 13:00 (UTC+00:00) |
| 2023-11-05  | 14:00:00 (UTC+00:00)  | 15:00 (UTC+01:00) | 09:00 (UTC-05:00) | 14:00 (UTC+00:00) |
| 2023-11-06  | 14:00:00 (UTC+00:00)  | 15:00 (UTC+01:00) | 09:00 (UTC-05:00) | 14:00 (UTC+00:00) |
{{< /bootstrap-table >}}

#### Zeitzonen Quelle: Ersteller

{{% alert %}}
Wenn diese Serie synchronisiert wird, werden `7 Ausnahmen` erstellt. In diesem Beispiel sind nur 4 Ereignisse Standardereignisse.
{{% /alert %}}

{{< bootstrap-table "table table-striped" >}}
| Date        | UTC in Databse        | Creator Time      | Organizer Time                                      | Resource Time     |
|-------------|-----------------------|-------------------|-----------------------------------------------------|-------------------|
| 2023-10-27  | 07:00:00 (UTC+00:00)  | 09:00 (UTC+02:00) | 03:00 (UTC-04:00)                                   | 08:00 (UTC+01:00) |
| 2023-10-28  | 07:00:00 (UTC+00:00)  | 09:00 (UTC+02:00) | 03:00 (UTC-04:00)                                   | 08:00 (UTC+01:00) |
| 2023-10-29  | 08:00:00 (UTC+00:00)  | 09:00 (UTC+01:00) | <span class="text-warning">04:00 (UTC-04:00)</span> | 08:00 (UTC+00:00) |
| 2023-10-30  | 08:00:00 (UTC+00:00)  | 09:00 (UTC+01:00) | <span class="text-warning">04:00 (UTC-04:00)</span> | 08:00 (UTC+00:00) |
| 2023-10-31  | 08:00:00 (UTC+00:00)  | 09:00 (UTC+01:00) | <span class="text-warning">04:00 (UTC-04:00)</span> | 08:00 (UTC+00:00) |
| 2023-11-01  | 08:00:00 (UTC+00:00)  | 09:00 (UTC+01:00) | <span class="text-warning">04:00 (UTC-04:00)</span> | 08:00 (UTC+00:00) |
| 2023-11-02  | 08:00:00 (UTC+00:00)  | 09:00 (UTC+01:00) | <span class="text-warning">04:00 (UTC-04:00)</span> | 08:00 (UTC+00:00) |
| 2023-11-03  | 08:00:00 (UTC+00:00)  | 09:00 (UTC+01:00) | <span class="text-warning">04:00 (UTC-04:00)</span> | 08:00 (UTC+00:00) |
| 2023-11-04  | 08:00:00 (UTC+00:00)  | 09:00 (UTC+01:00) | <span class="text-warning">04:00 (UTC-04:00)</span> | 08:00 (UTC+00:00) |
| 2023-11-05  | 08:00:00 (UTC+00:00)  | 09:00 (UTC+01:00) | 03:00 (UTC-05:00)                                   | 08:00 (UTC+00:00) |
| 2023-11-06  | 08:00:00 (UTC+00:00)  | 09:00 (UTC+01:00) | 03:00 (UTC-05:00)                                   | 08:00 (UTC+00:00) |
{{< /bootstrap-table >}}

#### Zeitzonen Quelle: Standort

{{% alert %}}
Wenn diese Serie synchronisiert wird, werden `7 Ausnahmen` erstellt. In diesem Beispiel sind nur 4 Ereignisse Standardereignisse.
{{% /alert %}}

{{< bootstrap-table "table table-striped" >}}
| Date        | UTC in Database       | Creator Time      | Organizer Time                                      | Resource Time     |
|-------------|-----------------------|-------------------|-----------------------------------------------------|-------------------|
| 2023-10-27  | 08:00:00 (UTC+00:00)  | 10:00 (UTC+02:00) | 04:00 (UTC-04:00)                                   | 09:00 (UTC+01:00) |
| 2023-10-28  | 08:00:00 (UTC+00:00)  | 10:00 (UTC+02:00) | 04:00 (UTC-04:00)                                   | 09:00 (UTC+01:00) |
| 2023-10-29  | 09:00:00 (UTC+00:00)  | 10:00 (UTC+01:00) | <span class="text-warning">05:00 (UTC-04:00)</span> | 09:00 (UTC+00:00) |
| 2023-10-30  | 09:00:00 (UTC+00:00)  | 10:00 (UTC+01:00) | <span class="text-warning">05:00 (UTC-04:00)</span> | 09:00 (UTC+00:00) |
| 2023-10-31  | 09:00:00 (UTC+00:00)  | 10:00 (UTC+01:00) | <span class="text-warning">05:00 (UTC-04:00)</span> | 09:00 (UTC+00:00) |
| 2023-11-01  | 09:00:00 (UTC+00:00)  | 10:00 (UTC+01:00) | <span class="text-warning">05:00 (UTC-04:00)</span> | 09:00 (UTC+00:00) |
| 2023-11-02  | 09:00:00 (UTC+00:00)  | 10:00 (UTC+01:00) | <span class="text-warning">05:00 (UTC-04:00)</span> | 09:00 (UTC+00:00) |
| 2023-11-03  | 09:00:00 (UTC+00:00)  | 10:00 (UTC+01:00) | <span class="text-warning">05:00 (UTC-04:00)</span> | 09:00 (UTC+00:00) |
| 2023-11-04  | 09:00:00 (UTC+00:00)  | 10:00 (UTC+01:00) | <span class="text-warning">05:00 (UTC-04:00)</span> | 09:00 (UTC+00:00) |
| 2023-11-05  | 09:00:00 (UTC+00:00)  | 10:00 (UTC+01:00) | 04:00 (UTC-05:00)                                   | 09:00 (UTC+00:00) |
| 2023-11-06  | 09:00:00 (UTC+00:00)  | 10:00 (UTC+01:00) | 04:00 (UTC-05:00)                                   | 09:00 (UTC+00:00) |
{{< /bootstrap-table >}}