---
title: "Reiter Serieninformationen"
linkTitle: "Reiter Serieninformationen"
weight: 20
description: >
   
---
<p style="text-align: justify">
Im Bereich Serieninformation in der Detailreservation erstellen Sie Serien auf die gleiche Weise wie in Microsoft Outlook. </p>

<p style="text-align: justify">
Der Bereich Serieninformationen ist in drei Bereiche eingeteilt, welche in den folgenden Kapiteln genauer erläutert werden. </p>

1. Allgemeiner Bereich
2. Serieneinstellungen
3. Bearbeiten einer Serie

## Allgemeiner Bereich

<p style="text-align: justify">
In diesem Bereich wird angezeigt, wann die Serie startet. Darüber hinaus kann definiert werden, wie viele Iterationen diese Serie haben soll. Dabei kann zwischen einer Datumsbegrenzung oder der Anzahl der Iterationen gewählt werden. </p>

{{< imgproc DetailbuchungSerieninformation Resize "960x" >}}
Eingabe der Serieninformation zum Buchen von Ressourcen
{{< /imgproc >}}

## Serieninformationen
<p style="text-align: justify">
Bei den Serieneinstellungen kann angegeben werden, wie sich die Serie wiederholt. Dabei kann zwischen verschiedenen Arten gewählt werden, welche wiederum verschiedene Einstellungsmöglichkeiten haben: </p>

#### Täglich

<p style="text-align: justify">
Falls eine Serie täglich stattfinden soll, kann dies hier eingestellt werden. Es kann angegeben werden, wie viele Tage jeweils zwischen den Buchungen liegen sollen oder ob der Termin grundsätzlich an allen Wochentagen stattfinden soll. </p>

{{< imgproc DetailbuchungSerieninformation Resize "960x" >}}
Eingabe tägliche Serieninformation
{{< /imgproc >}}

#### Wöchentlich

<p style="text-align: justify">
In diesem Bereich kann eingestellt werden, in welchem wöchentlichen Abstand und an welchen Wochentagen die Buchungen erstellt werden sollen. Der Wochentag, an welchem die Serie startet, ist dabei bereits vorselektiert und kann nicht verändert werden (das System gibt eine Fehlermeldung aus). </p>

{{< imgproc Detailbuchung_Serieninformation_wächentlich Resize "960x" >}}
Eingabe wöchentliche Serieninformation
{{< /imgproc >}}

#### Monatlich

<p style="text-align: justify">
Bei der monatlichen Serie gibt es zwei Varianten zur Erstellung: </p>

1. Am selben Datum:</br>
Es kann eingestellt werden, dass jeweils an einem bestimmten Tag jedes X-ten Monats eine Buchung erstellt wird.

2. Am selben Tag: </br>
Es kann eingestellt werden, dass die Buchung immer jeweils am X-ten Wochentag des X-ten Monats erstellt wird.

{{< imgproc Detailbuchung_Serieninformation_monatlich Resize "960x" >}}
Eingabe der Serieninformation zum Buchen von Ressourcen 
{{< /imgproc >}}

<p style="text-align: justify">
Wenn die gewünschten Einstellungen vorgenommen wurden, kann auf den Button <i>Erstellen</i> geklickt werden. Die Serienelemente werden dann gesucht und deren Verfügbarkeit direkt geprüft. </p>

### Anzeige der Serienelemente 

<p style="text-align: justify">
Nach dem Klicken auf den Button <i>Erstellen</i> überprüft ROOMS die jeweiligen Serienelemente auf ihre Verfügbarkeit. Das Ergebnis wird in einer Liste aufgeführt. </p>

{{< imgproc Detailbuchung_Serieninformation_Prüfstatus Resize "960x" >}}
Prüfstatus der Serienelemente nach dem Erstellen der Buchung 
{{< /imgproc >}}

<p style="text-align: justify">
In der Liste existiert eine Spalte Prüfstatus. Falls dieser Status ein Warndreieck aufweist, wird dadurch angezeigt, dass die Ressource zu diesem Zeitpunkt besetzt ist. Dieses Serienelement kann nur durch Anwählen der Checkbox und anschließendem Klicken des Buttons <i>Löschen</i> aus der Serie entfernt werden. Klicken Sie auf das Stift Icon um die Ressource und die Buchung zu bearbeiten. Sie können für eine andere Ressource (einmalige Umbuchung auf eine andere Ressource) oder ein anderen Zeitraum (bei gleicher Ressource) wählen. Dies kann auch mit Serienelementen gemacht werden, welche grundsätzlich frei sind. </p>

<p style="text-align: justify">
Klicken Sie auf das Stift Icon, um die Ressource zu bearbeiten. Sie sehen ein neues Fenster, in welchem Sie einen anderen Zeitraum oder eine andere Ressource wählen können. Sie sehen nur die zu diesem Zeitpunkt freien Ressourcen der gleichen Art. </p>

{{< imgproc Detailbuchung_Prüfstatus_bearbeiten Resize "960x" >}}
Eine Buchung aus der Serienliste bearbeiten  
{{< /imgproc >}}

<p style="text-align: justify">
Wählen Sie mittels des Datumspickers einen anderen Zeitraum für diese Reservation aus. Mit einem Klick auf den Button <b>+</b> der Ressource wählen Sie aus dem Standortbaum eine andere verfügbare Ressource der gleichen Art aus. Mit dem Button <i>Speichern</i> prüft ROOMS die Angaben und speichert sie dementsprechend ab. </p>

## Bearbeiten einer Serie 

<p style="text-align: justify">
Bei Bedarf kann eine Serie angepasst werden. Sollen bei einer Serie mit 5 Iterationen beispielsweise die letzten beiden Termine eine halbe Stunde früher beginnen, kann dies in folgenden Schritten eingegeben werden: </p>

1.	Man geht im Kalender zum zweitletzten Termin, ab welchem die Änderung gelten soll. 
2.	Mit Klick auf das <b>+</b>-Icon öffnet sich ein Fenster und man klickt den Button <b>Bearbeiten</b>.
3.	Aktivieren der Checkbox <b>Auf nachfolgende Serieneinträge übernehmen</b> unten in der Ansicht.
4.	Durch Eingabe der gewünschten Startzeit, Reservation um eine halbe Stunde vorziehen. Bestätigung durch grünes Häkchen erfolgt.
5.	Klick auf <b>Reservation abschließen</b>.
6.	Seite mit Zusammenfassung wird ausgegeben, darauf ist die Änderung der Zeiten für die beiden letzten Termine ersichtlich.
7.	Klick auf <b>Reservation bestätigen</b>. Die Teilnehmer der Serie erhalten für die bearbeiteten Termine zuerst einzelne Absagen und danach für den bearbeiteten Teil der Serie eine einzelne neue Einladung.

<p style="text-align: justify">
Die Checkbox <i>Auf nachfolgende Serieneinträge übernehmen</i> ist nur im Bearbeitungsmodus vorhanden und übernimmt mit ihrer Aktivierung alle Änderungen der aktuellen Reservation auf alle künftigen Reservationen dieser Serie. </p>

<p style="text-align: justify">
<b>Achtung</b>: Es entstehen zwei neue Serien. Dies bedeutet, dass bei aktivierter Synchronisation die Teilnehmer eine Absage für zwei Termine erhalten und eine Neueinladung für die letzten beiden Termine. </p>

#### Zeitzone für Serienbuchungen

<p style="text-align: justify">
Per Standard wird immer die Zeitzone des Organisators verwendet wenn die Serienelemente erstellt werden. Dies ist notwendig damit die Serie bei der Synchronisation mit der Exchange Mailbox des Oranisators keine Ausnahmen generiert. </br>

Dieses Standardverhalten kann ab der Version 4.7.2107 überschrieben werden: </br>

Einstellungen --> System --> Globale Parameter --> Serie creation timezone adjustable --> auf True setzen </br>

Dies hat zweierlei Auswirkungen: </br>

Bei der Serienerstellung erscheint nun dieses Dropdown, bei welchem ausgewählt werden kann, welche Zeitzone genutzt werden soll. </p>

{{< imgproc Detailbuchung_Serieninformation_Zeitzone Resize "960x" >}}
Auswahl der Zeitzone für die Erstellung der Serie.
{{< /imgproc >}}

<p style="text-align: justify">
Zudem kann über die Einstellungen für die Person im Tab <i>Stammdaten</i> die Standard Zeitzonen Quelle definiert werden. </p>

{{< imgproc Detailbuchung_Serieninformation_Zeitzone_PersonSettings Resize "960x" >}}
Auswahl der Standard Zeitzonen Quelle für Person
{{< /imgproc >}}
