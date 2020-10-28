---
title: "Detailbuchung"
linkTitle: "Detailbuchung"
weight: 1
description: >
  In diesem Abschnitt erfahren Sie, wie Sie eine Detailbuchung oder eine Schnellbuchung durchführen.  
 


---
## Detailbuchung
In der Detailbuchung stellen Sie sämtliche Einstellungen für eine Buchung ein. Die Reservationsmaske ist so aufgebaut, dass Ihnen die fakultativen Eingaben in den eigenen Bereichen nur bei Bedarf angezeigt werden. 

Grundsätzlich müssen Sie bei einer Buchung nur ein Titel hinterlegen, die restlichen Eingaben sind optional. In den folgenden Kapiteln sind die einzelnen Bereiche genauer erklärt. Zusätzlich enthält das Sidepanel, im linken Bereich des Fensters, Informationen und Dokumente zur gewählten Ressource.

Allgemeine Information: der Ressourcentyp „Raum“ verfügt über einige spezielle Reservationsattribute. Die drei Bereiche „Allgemeine Reservationsdaten“, „Serieninformationen“ und „Kosten“ sind bei allen Ressourcentypen gleich und werden vorgängig behandelt. Die raumspezifischen Daten (Bestuhlungen, Dienstleistungen, etc.) werden nach den gemeinsamen Bereichen behandelt.

### Detailbuchung eingeben 
Indem Sie in der Ressourcenliste auf den Button "Detailbuchung eingeben" klicken, öffnet sich ein neues Feld. In diesem Feld geben Sie alle erforderlichen Daten zur Buchung ein. Folgende Daten können Sie in den Menü-Reitern einstellen: 
* Allgemein 
* Serieninformationen 
* Ressourcen 
* Bestuhlung 
* Catering & Services 
* Teilnehmer 

#### Detailbuchung Allgemeine Informationen 
In der Detailbuchung geben Sie folgende Daten zur Buchung der Ressource ein: 

| Feld        | Funktion         | 
| ------------- |-------------  | 
| Ressource          | Zeigt die ausgewählte Ressource an, auf welcher die Buchung vorgenommen wird. Diese Ressource kann bei Bedarf via Ressourcen-Picker direkt auf der Reservation neu gewählt werden. So kann auf einfache Art und Weise eine Reservation verschoben werden. | 
| Vorlaufzeit in Minuten  |  Hier kann eingestellt werden, wie viele Minuten vor der Reservation die Ressource für Vorbereitungsarbeiten belegt sein soll. Diese Funktion ist nur bei ausreichenden Benutzerrechten eingeschaltet.  |  
| Nachlaufzeit in Minuten  |  Hier kann eingestellt werden, wie viele Minuten nach der Reservation die Ressource für Nachbereitungsarbeiten belegt sein soll. Diese Funktion ist nur bei ausreichenden Benutzerrechten eingeschalten.  |  
| Titel   | Hier kann der Titel der Reservation eingegeben werden.   |  
| Bemerkungen  |  In diesem Feld können zusätzliche Bemerkungen zur Reservation hinterlegt werden. Damit Informationen, die mehr Platz brauchen übersichtlicher gelesen und erfasst werden können, kann mit Klick auf das Zoom Icon ein editierbares Popup geöffnet werden.   | 
| Bemerkungen intern  | In diesem Feld können ebenfalls zusätzliche Reservationsinformationen hinterlegt werden. Im Gegensatz zu den anderen Bemerkungen, sind die internen Bemerkungen nur mit Spezialrechten les- und editierbar.   | 
| Test Demo   |  | 
| Status   |  Durch die Definition eines Workflows können Hauptstatus (vom System vorgegeben) und Substatus in eine logische Reihenfolge gebracht werden.  | 
| Anzahl Personen (1-20)  | Dies ist die einzige Angabe, welche nur bei der Reservation eines Raumes zusätzlich auf dieser Maske erscheint. Hier kann eingegeben werden, wie viele Personen an diesem Meeting teilnehmen. Bei einer Eingabe wird diese Angabe mit der maximalen Kapazität verglichen und verunmöglicht, falls eine falsche Angabe eingegeben wurde, das Abschliessen der Reservation.   | 
| Buchungsnummer   | Hier wird die Buchungsnummer der aktuell erfassten Reservation dargestellt.   | 
| Ersteller   | Hier wird angezeigt, welcher Benutzer diese Reservation durchführt. Dies ist immer der aktuell angemeldete Benutzer.   | 
| Organisator   | Hier kann ausgewählt werden, wer für diese Reservation verantwortlich ist. Es ist möglich, dass ein Benutzer in Vertretung eines anderen Benutzers bucht. Dieser Benutzer kann mittels Eingabe des Namens gesucht werden. Die Suchresultate werden sofort angezeigt und der gewünschte Benutzer kann ausgewählt werden. Diese Funktion ist nur bei genügend Benutzerrechten ersichtlich.   |
| Verantwortlicher  | Ermöglicht in Form einer Intelibox eine verantwortliche Person für die Reservation zu bestimmen. Um diese Funktion zu nutzen ist das Recht „Darf Person Verantwortlicher auf Reservation setzen“. Sofern der Verantwortliche im Profil die E-Mail Notifikationen aktiviert hat, werden diese an ihn und NICHT an den Organisator verschickt.   |
| Private Buchung   |  Mit der Aktivierung dieser Checkbox wird eine Reservation als privat definiert. Somit ist diese vertraulich und für andere Benutzer nicht einsehbar.  |
| Kostenträger des Organisators   |  Hier kann eine alternative Kostenstelle hinterlegt werden. Grundsätzlich wird die Kostenstelle des Organisators verwendet. Falls allerdings eine andere Kostenstelle verwendet werden soll, muss diese hier eingegeben werden. Diese Funktion ist nur bei genügend Benutzerrechten ersichtlich. Falls Kostenstellen vordefiniert wurden, steht an dieser Stelle eine Auswahlbox zur Verfügung. In diesem Fall, können mehrere Kostenstellen hinzugefügt und auch wieder entfernt werden. Standardmässig werden die Kosten linear auf die einzelnen Kostenträger verteilt. Dies kann bei Bedarf manuell übersteuert werden (spezielle Berechtigung notwendig).Sofern noch keine manuellen Änderungen an der Kostenstelle vorgenommen wurden, wird beim nachträglichen Wechsel des Organisators, dessen Kostenstelle übernommen.|
| Ressourcenkosten    | Zeigt die Ressourcenkosten der aktuellen Reservation an.    |
| Hauptbuchung  |    |
| Gesamtkosten   | Klick auf das „Plus“ Icon öffnet eine Übersicht der Gesamtkosten der Reservation in der gültigen Währung.   |


{{< imgproc Buchen_Detailbuchung_start Resize "1280x" >}}
Abbildung ff: Allgemeine Information zum Buchen einer Ressource eingeben 
{{< /imgproc >}}

Hinweis:
Die Prüfung (Validierungsregel) auf Verfügbarkeit einer Ressource erfolgt in der Detailreservation, bei jeder Änderung/Wechsel von
* Datum
* Zeit
* Nachlaufzeit
* Vorlaufzeit
* Anzahl Personen
* Ressource

#### Gesamtkosten 
In der Kostenübersicht sehen Sie, welche Kosten für diese Reservation verursacht werden. Es können auch Zuschläge und Rabatte erfasst werden. Diese können Sie, sofern ein Dienstleister hinterlegt ist, mit Hilfe der Dropdown, diesem direkt zuweisen. Diese Funktion ist allerdings nur mit entsprechenden Benutzerrechten ersichtlich. (Abbildung ff)

Die Kosten sind in folgende vier Bereiche eingeteilt:

| Feld          | Funktion      | 
| ------------- |-------------  | 
| Ressourcenkosten| Hier werden diejenigen Kosten angezeigt, welche für die gebuchte Ressource erhoben werden| 
| Zusätzliche Kosten| Hier sind Kosten angegeben, welche zusätzlich zur Buchung (z.B. Equipment) erhoben werden.|  
| Dienstleistungskosten| Hier sind Kosten angegeben, welche durch zusätzliche Dienstleistungen (Catering, etc.) verursacht werden.|  
| Umstuhlungskostenn | Hier werden die Kosten angegeben, welche durch eine allfällige Umstuhlung verursacht werden.| 

{{< imgproc Buchen_Detailbuchung_Gesamtkosten Resize "1280x" >}}
Abbildung ff: Übersicht der Gesamtkosten einer Ressource
{{< /imgproc >}}


Anstelle der manuellen Eingabe von Rabatten, kann von berechtigten Personen in den Stammdaten ein Standard Rabatt für eine Firma/OE (Kunde) eingetragen werden. Dieser wird bei allen Organisatoren einer Reservation angezeigt, die dieser Firma/OE zugeordnet sind. 

### Detailbuchung: Serieninformation
Im Bereich Serieninformation in der Detailreservation erstellen Sie Serien auf die gleiche Weise wie in Microsoft Outlook.

Der Bereich Serieninformationen ist in drei Bereiche eingeteilt, welche in den folgenden Kapiteln genauer erläutert werden.
1. Allgemeiner Bereich 
2. Serieneinstellungen 
3. Bearbeiten einer Serie


1. Allgemeiner Bereich
In diesem Bereich wird angezeigt, wann die Serie startet. Darüber hinaus kann definiert werden, wie viele Iterationen diese Serie haben soll. Dabei kann zwischen einer Datumsbegrenzung oder der Anzahl Iterationen gewählt werden.

{{< imgproc DetailbuchungSerieninformation Resize "1280x" >}}
Abbildung fg: Eingabe der Serieninformation zum Buchen von Ressourcen 
{{< /imgproc >}}

2. Serieneinstellungen
Bei den Serieneinstellungen kann angegeben werden, wie sich die Serie wiederholt. Dabei kann zwischen verschiedenen Arten gewählt werden, welche wiederum verschiedene Einstellungsmöglichkeiten haben:


##### Täglich

Falls eine Serie täglich stattfinden soll, kann dies hier eingestellt werden. Es kann angegeben werden, wie viele Tage jeweils zwischen den Buchungen liegen sollen oder ob der Termin grundsätzlich an allen Wochentagen stattfinden soll.

{{< imgproc DetailbuchungSerieninformation Resize "1280x" >}}
Abbildung fh: Eingabe tägliche Serieninformation 
{{< /imgproc >}}

##### Wöchentlich

In diesem Bereich kann eingestellt werden, in welchem wöchentlichen Abstand und an welchen Wochentagen die Buchungen erstellt werden sollen. Der Wochentag, an welchem die Serie startet, ist dabei bereits vorselektiert und kann nicht verändert werden (das System gibt eine Fehlermeldung aus).

{{< imgproc Detailbuchung_Serieninformation_wächentlich Resize "1280x" >}}
Abbildung fj: Eingabe wöchentliche Serieninformation
{{< /imgproc >}}

##### Monatlich 

Bei der monatlichen Serie gibt es zwei Varianten zur Erstellung:

Am selben Datum:
Es kann eingestellt werden, dass jeweils an einem bestimmten Tag jedes X-ten Monats eine Buchung erstellt wird.

Am selben Tag:
Es kann eingestellt werden, dass die Buchung immer jeweils am X-ten Wochentag des X-ten Monats erstellt wird.

{{< imgproc Detailbuchung_Serieninformation_monatlich Resize "1280x" >}}
Abbildung fk: Eingabe der Serieninformation zum Buchen von Ressourcen 
{{< /imgproc >}}

Wenn die gewünschten Einstellungen vorgenommen wurden, kann auf den Button „Erstellen“ geklickt werden. Die Serienelemente werden dann gesucht und deren Verfügbarkeit direkt geprüft.

##### Anzeige der Serienelemente 
Nach dem Klicken auf den Button „Erstellen“ überprüft ROOMS die jeweiligen Serienelemente auf ihre Verfügbarkeit. Das Ergebnis wird in einer Liste aufgeführt.

{{< imgproc Detailbuchung_Serieninformation_Prüfstatus Resize "1280x" >}}
Abbildung fz: Prüfstatus der Serienelemente nach dem Erstellen der Buchung 
{{< /imgproc >}}

In der Liste existiert eine Spalte Prüfstatus. Falls dieser Status ein Warndreieck aufweist, wird dadurch angezeigt, dass die Ressource zu diesem Zeitpunkt besetzt ist. Dieses Serienelement kann nur durch Anwählen der Checkbox und anschliessendem Klicken des Buttons „Löschen“ aus der Serie entfernt werden. Klicken Sie auf das Stift Icon um die Ressource und die Buchung zu bearbeiten. Sie können für eine andere Ressource (einmalige Umbuchung auf eine andere Ressource) oder ein anderer Zeitraum (bei gleicher Ressource) wählen. Dies kann auch mit Serienelementen gemacht werden, welche grundsätzlich frei sind.

Klicken Sie auf das Stift Icon, um die Ressource zu bearbeiten. Sie sehen ein neues Fenster, in welchem Sie einen anderen Zeitraum oder eine andere Ressource wählen können. Sie sehen nur die zu diesem Zeitpunkt freien Ressourcen der gleichen Art (Abbildung fy).

{{< imgproc Detailbuchung_Prüfstatus_bearbeiten Resize "1280x" >}}
Abbildung fy: Eine Buchung aus der Serienliste bearbeiten  
{{< /imgproc >}}

Wählen Sie mittels des Datumspickers einen anderen Zeitraum für diese Reservation aus. Mit einem Klick auf den Button „+“ der Ressource wählen Sie aus dem Standortbaum eine andere verfügbare Ressource der gleichen Art aus (Abbildung fy). Mit dem Button „Speichern“ prüft ROOMS die Angaben und speichert sie dementsprechend ab.

3. Bearbeiten einer Serie 

Bei Bedarf kann eine Serie angepasst werden. Sollen bei einer Serie mit 5 Iterationen beispielsweise die letzten beiden Termine eine halbe Stunde früher beginnen, kann dies in folgenden Schritten eingegeben werden: 

1.	Man geht im Kalender zum zweitletzten Termin, ab welchem die Änderung gelten soll. 
2.	Mit Klick auf das „+“-Icon öffnet sich ein Fenster und man klickt den Button „Bearbeiten“.
3.	Aktivieren der Checkbox „Auf nachfolgende Serieneinträge übernehmen“ unten in der Ansicht.
4.	Durch Eingabe der gewünschten Startzeit Reservation um eine halbe Stunde vorziehen. Bestätigung durch grünes Häkchen erfolgt.
5.	Klick auf „Reservation abschliessen“.
6.	Seite mit Zusammenfassung wird ausgegeben, darauf ist die Änderung der Zeiten für die beiden letzten Termine ersichtlich.
7.	Klick auf „Reservation bestätigen“. Die Teilnehmer der Serie erhalten für die bearbeiteten Termine zuerst einzelne Absagen und danach für den bearbeiteten Teil der Serie eine einzelne neue Einladung.

Die Checkbox „Auf nachfolgende Serieneinträge übernehmen“ ist nur im Bearbeitungsmodus vorhanden und übernimmt mit ihrer Aktivierung alle Änderungen der aktuellen Reservation auf alle künftigen Reservationen dieser Serie. 

Achtung: Es entstehen zwei neue Serien. Dies bedeutet, dass bei aktivierter Synchronisation die Teilnehmer eine Absage für zwei Termine erhalten und eine Neueinladung für die letzten beiden Termine.

### Detailbuchung: Ressourcen 
Im Reiter "Ressourcen" wählen Sie in der Detailbuchung die zur Verfügung stehenden Ressourcen zu Ihrer Buchung aus. Soll z.B. im Raum "Matterhorn" zusätzlich ein weiterer Beamer verwendet werden, tragen Sie eine 1 in die Leerzeile ein (Abbildung fx). 

{{< imgproc Detailbuchung_Ressource Resize "1280x" >}}
Abbildung fx: Ressourcen zu einer Buchung hinzufügen  
{{< /imgproc >}}

Einem Raum ist unter Umständen eine gewisse Anzahl an fixem Equipment zugeordnet. Dieses Equipment wird beim Öffnen des Bereichs Ressourcen direkt angezeigt. Das Equipment kann nicht entfernt werden und hat in der Spalte Standort auch die Beschreibung Fix installiertes Equipment.

Neben dem Equipment, welches den Räumen fix zugeordnet ist, gibt es hier die Möglichkeit, weitere Ressourcen zu buchen. Sofern die Anzahl an Ressourcen deren Verfügbarkeit nicht übersteigt, werden diese zur Reservation hinzu gebucht.

Sie sehen, abhängig von Ihren eingetragenen Rechten, eine Ressourcen einzeln (z.B. den Beamer als Epson MG-850HD) oder aggregiert (d.h. den Beamer als „1 Beamer“). Das Verhalten ist wie folgt:
* Benutzer:in hat keines der beiden Rechte: Kein Ressourcen-Tab ist sichtbar.
* Benutzer:in hat das Aggregiert-Recht: Ressourcen-Tab ist sichtbar, aber nur mit der aggregierten Ansicht.
* Benutzer:in hat das Einzeln-Recht: Ressourcen-Tab ist sichtbar, aber nur mit der Einzelansicht.
* Benutzer:in hat beide Rechte: Ressourcen-Tab ist sichtbar und kann sich mittels zweier Buttons die bevorzugte der beiden Ansichten anzeigen lassen.

Sie sehen standardmässig die aggregierte Ansicht. Legen Sie beim ersten Mal seine bevorzugte Ansicht fest, wird diese gespeichert und beim nächsten Mal direkt angezeigt. 

{{< imgproc Detailbuchung_Ressource_Einzelansicht Resize "1280x" >}}
Abbildung fx: Die Ressourcen entweder in der aggregierten Form oder in der EInzelansicht anzeigen lassen  
{{< /imgproc >}}

#### Ressource: Equipment hinzufügen
Lassen Sie sich die Ressourcen in der Einzelansicht anzeigen, sehen Sie oben links den Button "Equipment hinzufügen". 

Mit den Buttons „Equipment hinzufügen“ oder „Parkplatz hinzufügen“ können Sie einem Raum noch zusätzliches mobiles Equipment oder Parkplatzreservationen hinzufügen. Klicken Sie auf einen dieser Buttons, öffnet sich ein Fenster, in welchem Sie das Equipment oder ein freier Parkplatz aussuchen (Abbildung fv, fw). In diesem Fenster sind nur die zur Zeit der Buchung verfügbaren Ressourcen ersichtlich.

{{< imgproc Detailbuchung_Ressource_hinzufügen Resize "1280x" >}}
Abbildung fv: Ausgewähltes Equipment hinzufügen 
{{< /imgproc >}}

{{< imgproc Detailbuchung_Parkplatz_hinzufügen Resize "1280x" >}}
Abbildung fw: Ausgewählten Parkplatz hinzufügen
{{< /imgproc >}}

In dieser Liste fügen Sie mittels Auswahl der Ressourcen mit den Checkboxen und Klick auf den Button „Hinzufügen“ das ausgewählte Equipment hinzu. Das Equipment erscheint sofort in der Liste der verfügbaren Ressourcen.
Falls Sie die zusätzlichen Ressourcen doch nicht verwenden, können Sie diese wiederum mittels der Auswahl der Checkboxen und Klick auf den Button „Entfernen“ aus der Liste entfernen. Wenn die Buchung abgeschlossen ist, werden die hinzugefügten Ressourcen automatisch gebucht und für diesen Raum vorgemerkt.

###### Teilbare (virtuelle) Räume

Die virtuellen Räume (Teile eines teilbaren Raumes) werden neu im Sidepanel in der Raumbeschreibung visualisiert. 

Zum besseren Verständnis über das Verhalten von virtuellen(teilbaren) Räumen dient die nachfolgende Grafik:

Ausgangslage: Alle Räume bestehen einzeln und haben keine virtuellen Räume zugewiesen bekommen.


### Detailbuchung: Bestuhlung
Einem Raum können unter Umständen verschiedene Bestuhlungsvarianten zugeordnet sein. 
Diese verschiedenen Bestuhlungen sehen Sie in diesem Tab ein und wählen die gewünschte Bestuhlung aus.

{{< imgproc Detailbuchung_Bestuhlung Resize "1280x" >}}
Abbildung fs: Bestuhlungsmöglichkeiten einsehen und auswählen
{{< /imgproc >}}

Die Bestuhlung hat direkten Einfluss auf die Anzahl Teilnehmer am Meeting. Falls Sie eine Bestuhlungsvariante auswählen, welche nicht genügend Platz für die Teilnehmer bietet, kann die Buchung nicht abgeschlossen werden. Genau gleich verhält sich das System bei zu wenig Teilnehmern (minimale Kapazität).
Verändern Sie eine Bestuhlung kann dies ebenfalls Einfluss auf die Vor- und Nachlaufzeiten (werden automatisch überprüft) sowie die Kosten haben, da der interne Dienst diese Umstuhlung vornehmen muss und somit Aufwand generiert wird.


### Detailbuchung: Catering & Service 
Im Tab "Catering & Services" können zusätzliche Dienstleistungen hinterlegt werden. Die Dienstleistungen werden vom Dienstleister direkt verwaltet und können sehr verschieden sein. Eine oft vorkommende Dienstleistung ist das Catering. Das Catering kann bestimmten Ressourcen wie Sitzungszimmern oder Räumen zur Verfügung gestellt werden. Ebenfalls ist die Zeit, in welcher das Angebot jeweils gilt, durch den Dienstleister zu verwalten und entsprechend kann dieses (bspw. das Catering) lediglich während diesen Angebotszeiten gebucht werden.

#### Einzelbestellung
Mit einem Klick auf den Button „+“ öffnet sich das Fenster zur Auswahl der gewünschten Dienstleistungen. Daneben kann die Anzahl dieser Dienstleistung angegeben werden. Zusätzlich kann dem Dienstleister mittels dem Button „@“ eine Notiz hinterlegt werden.

Die gewählte Dienstleistung (Catering) erscheint nun in der Liste mit den hinterlegten Kosten aufgerechnet. Wie in den meisten Listen in ROOMS ist es nun möglich, mittels Auswahl der Dienstleistung mit der Checkbox und anschliessendem Klick auf den Button „Bestellung entfernen“ die gewählte Dienstleistung zu entfernen. Zusätzlich können die Mengen direkt in der Liste aktualisiert werden. Zum Aktualisieren der Kosten kann auf den Button „Menge aktualisieren“ geklickt werden. Die Gesamtkosten der gewählten Dienstleistungen werden unterhalb der Liste dargestellt.

Im Angebotspicker können von berechtigter Stelle auch frei definierbare Dienstleistungen für Benutzer mit dem Funktionsrecht „Darf Angebot im Bestellprozess verändern“ zur Verfügung gestellt werden. Sobald die Auswahl hinzugefügt wird, kann der Preis und die Bezeichnung individuell angepasst werden (siehe Abbildung 84).

#### Paketbestellung
Mit derselben Funktionalität, welche oben im Bereich der Einzelbestellungen definiert wurde, können auch gebündelte Paket-Angebote bestellt werden. Dabei handelt es sich um Zusammenstellungen, wie beispielsweise Lunch-Pakete, welche durch den Dienstleister selbst definiert werden. Diese können folgendermassen ausgewählt und definiert werden:
Die Pakete können entweder vollständig gebucht werden, es besteht jedoch auch die Möglichkeit (wie in Abbildung 84 ersichtlich) einzelne Produkte / Positionen aus dem Paket zu entfernen. Dazu muss lediglich die entsprechende Checkbox deaktiviert werden.

Hinweis: Die Pakete können durch den Dienstleister entweder mit einem Pauschalpreis für das Gesamtpaket oder mit Preisen auf den Produkten / Positionen hinterlegt werden. Im zweiten Fall wird der Paketpreis aufgrund der Zusammenstellung neu berechnet.



### Detailbuchung: Teilnehmer 
Im Bereich Teilnehmer erfassen Sie die Teilnehmer einer Buchung (Termin). Die Teilnehmer werden in einer Liste hinterlegt und zur Buchung gespeichert. Bei Bedarf können Sie selektiv durch Klick auf die Notifikations-Checkbox den Teilnehmern auch eine automatische Bestätigungsmail zusenden. Dies erfordert spezielle Funktionsrechte

{{< imgproc Detailbuchung_Teilnehmenr Resize "1280x" >}}
Abbildung fq: Teilnehmer auswählen und hinzufügen
{{< /imgproc >}}

Es gibt zwei Möglichkeiten, wie Teilnehmer zu einer Buchung hinzugefügt werden können:

1. Teilnehmer aus der Benutzerdatenbank hinzufügen:
Falls der Teilnehmer in der Benutzerdatenbank von ROOMS gespeichert ist, kann im Feld „Teilnehmer“ der entsprechende Name eingegeben werden (Abbildung fq). ROOMS schlägt aufgrund der Eingabe automatisch die möglichen Teilnehmer in einer Liste vor. Der entsprechende Teilnehmer kann ausgewählt und mittels „Teilnehmer hinzufügen“ gespeichert werden.

2. Neuen Teilnehmer erfassen:
Mit dem Button „Neuer Teilnehmer“ öffnet sich ein Fenster, in dem die Daten des Teilnehmers manuell eingegeben werden können. Diese Möglichkeit wird vor allem bei externen Teilnehmern verwendet. Die Daten geben Sie im Dialog ein.

{{< imgproc Detailbuchung_Teilnehmer_Neu Resize "1280x" >}}
Abbildung fe: Neue oder externe Teilnehmer hinzufügen
{{< /imgproc >}}

Sie sehen die erfassten Teilnehmer in der Liste und können diese, wie in den meisten Listen, mittels Auswahl der Checkbox und anschliessendem Klick auf den Button „Entfernen“ aus der Liste löschen.

Verfügen Sie über das Recht „Darf den Mailverlauf anzeigen“ können Sie sich den Verlauf versandter E-Mail Notifikationen von Reservationen anzeigen lassen. Dafür navigieren Sie über eines der Menüs „Listen“, „Plan“ oder „Kalender“ in den View Modus einer Reservation und wählen das Tab Mails aus. Für jeden Empfänger wird ein Eintrag gemacht (sind z.B. bei einer Reservation Ersteller und Organisator unterschiedlich, gibt es zwei Einträge).

Jeden Eintrag öffnen Sie mittels Klick. Darin sind die Details der E-Mail so wie sie versendet wurde, ersichtlich.

#### Abschluss der Detailbuchung
Sobald Sie alle Daten ausgefüllt haben schließen Sie die Buchung über den Button „Buchung abschliessen“ ab (Abbildung fg).

{{< imgproc Detailbuchung_abschließen Resize "1280x" >}}
Abbildung fg: Detailbuchung abschließen
{{< /imgproc >}}

Danach erhalten Sie die Ansicht „Zusammenfassung“ und mit Klick auf „Reservation bestätigen“ speichern Sie die Reservation definitiv (Abbildung fh) 

{{< imgproc Detailbuchung_bestätigen Resize "1280x" >}}
Abbildung fh: Detailbuchung bestätigen
{{< /imgproc >}}

Mit Hilfe der Checkbox „E-Mail" können Sie die Notifikation an die Organisator:in und Ersteller:in unterdrücken (Abbildung fg). Dasselbe gilt für die Exchange Synchronisation. Zudem haben Sie bei ausreichender Berechtigung die Möglichkeit, die automatische Verlängerung einer Reservation zu editieren (diese werden auf Ressourcenebene hinterlegt).

Sind Dokumentvorlagen verfügbar, können Sie diese herunterladen oder direkt per Mail als PDF- oder Worddokument bei Reservationsabschluss an den Organisator und Ersteller verschicken. Die Ausnahme bilden die als „Pflicht“ markierten Downloads bzw. E-Mails, auf welche Sie keinen weiteren Einfluss haben und die automatisch verschickt werden.

Ändern Sie eine Buchung nur in Bezug auf die Teilnehmer (hinzufügen, entfernen) und nicht in Titel, Zeit, Datum etc. so erscheint im Viewmodus (Zusammenfassung) gem. die Checkbox „Sende Benachrichtigung nur an geänderte Teilnehmer“. Wird diese selektiert, wird die Termineinladung bzw. Terminabsage (Outlook Mail) nur an den geänderten Teilnehmer verschickt.

Hat ein Mitarbeiter bzw. Teilnehmer diese Bestätigung nicht mehr, so kann im View Mode über das Menü „Listen“ die gewünschte Reservation gesucht und die Bestätigung an Ersteller und Organisator erneut gesendet werden.
