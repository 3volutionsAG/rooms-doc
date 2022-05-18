---
title: "Ressourcen"
linkTitle: "Ressourcen"
weight: 6
description: >
  <p style="text-align: justify"> In diesem Bereich speichern und bearbeiten Sie die Ressourcen. Sie erstellen Ressourcenlisten, fügen neue Ressourcen hinzu oder bearbeiten bestehende Ressourcen. </p>
 


---
## Ansicht Ressourcen

<p style="text-align: justify">
Im linken Sidepanel können Sie nach bestimmten Ressourcen suchen und die Filterkriterien hierfür einstellen. </br>

Im rechten Bereich sehen Sie die Ressourcenliste. Je nachdem, welche Ressourcenart Sie im linken Filterkriterium angegeben haben, wird Ihnen diese Liste angezeigt. </br> </p>

{{< imgproc Ressourcen_bearbeiten_erstellen Resize "960x" >}}
Ansicht und Überblick über Ressourcen
{{< /imgproc >}}

Beispiel: Wählen Sie im linken Sidepanel unter Ressourcenart _Equipment_ aus und drücken Sie auf finden, werden Ihnen alle Equipmenttypen in der Liste angezeigt.

{{< imgproc Ressourcen_Equipment_finden_in_Liste Resize "960x" >}}
Equipment in der Ressourcenliste anzeigen
{{< /imgproc >}}

### Ressourcen suchen

<p style="text-align: justify">
Im linken Menü finden Sie unter der Kategorie <i>Ressourcen</i> eine Suchfunktion, mit deren Hilfe Sie nach einer Ressource suchen können. Sie können hierbei nach folgenden Kriterien suchen:</p>

* Ressourcenart (Drop-down)
* Gespeicherte Listen einsehen
* Standort (Plus Zeichen): Auswählen aus allen eingespeicherten Standorten

**Sie können eine Liste als Favorit speichern**:
<p style="text-align: justify">
Wird eine Liste als Favorit definiert, wird diese standardmäßig angezeigt.
Ansonsten ist die Liste leer. </br>
Nach Wechsel eines Eintrages, werden Sidepanel und Inhaltsbereich automatisch neu geladen
(Achtung: Bevor Liste gespeichert wird, muss "Finden" Button geklickt werden, um alle Kriterien zu speichdern) </p>

#### Suchen durch Erweiterte Kriterien

<p style="text-align: justify">
Die Suchfunktionen erweitern Sie über den Drop-Down des Menü-Punktes <i>Erweiterte Kriterien</i>.
Hierbei können Sie nach den folgenden Kriterien suchen: </p>

* Ressourcen ID/Bezeichnung
* Ressourcenpicker (Plus Zeichen) : Der Ressourcenpicker zeigt alle Ressourcen - unabhängig davon was im Feld "Ressourcenart" selektiert worden ist
* Status: Wählen aus Alle, Inaktiv oder Aktiv
* Verantwortliche Person

#### Suchen über die Gliederung

<p style="text-align: justify">
Die Suchfunktionen erweitern Sie über den Drop-Down des Menü-Punktes <i>Gliederung</i>. Es werden alle Gliederungstypen der gewählten <i>Ressourcenart</i> angezeigt. Bei Ressourcenart <i>alle</i> werden alle Gliederungstypen aller Ressourcenarten aufgelistet. Es werden nur die Gliederungen (eines Gliederungstyps) angezeigt, für welche Sie auch Rechte haben.
Hierbei können Sie nach den folgenden Kriterien suchen: </p>

* Raum: Raumtyp (Plus Zeichen: hinzufügen)
* Equipmemt: Equipmenttyp (Plus Zeichen: hinzufügen)

### Löschen von Ressourcen 

<p style="text-align: justify">
Sie können eine Mehrfachselektion über die linke Checkbox vornehmen und eine Ressource über den untenstehenden Button <i>entfernen</i> löschen. </br>
Es erscheint ein Warnhinweis, Ausgabe im Actionpanel oder Fehlermeldung im Actionpanel. </p>

Zusätzliche Löschregel:
* Nur möglich, wenn eine Ressource keine Reservationen hat
* Löschweitergabe an alle Abhängigkeiten zur Ressource
* Nur möglich, wenn Benutzer über die entsprechenden standortabhängigen Rechte verfügt.

### Daten einsehen

<p style="text-align: justify">
Klicken Sie auf den Namen einer Ressource in der Liste, gelangen Sie zur Übersicht der gespeicherten Daten und der Historie der Ressource. </p>

{{< imgproc Ressource_Daten_einsehen Resize "960x" >}}
Daten einer Ressource einsehen
{{< /imgproc >}}

<p style="text-align: justify">
Aus diesem Modus können Sie ebenfalls die ausgewählte Ressource bearbeiten. Dazu klicken Sie auf den untenstehenden Button <i>Bearbeiten</i>. Über den Button <i>Abbrechen</i> gelangen Sie wieder zur Übersicht im View Modus.

## Ressource neu erstellen 

<p style="text-align: justify">
Eine neue Ressource erstellen Sie über den untenstehenden Button <i>Erstellen</i>. Über den Drop Down Pfeil können Sie untenstehend auswählen, welchen Ressourcentyp Sie neu erstellen wollen. Sie können wählen zwischen Raum, Arbeitsplatz, Parkplatz, Equipment, Fahrzeug oder Benutzerdefinierten Ressourcen. Je nachdem, welchen Ressourcentyp Sie neu erstellen, stehen Ihnen verschiedene Daten zur Verfügung. </p>

In dem Feld, welches sich öffnet, legen Sie folgende Daten fest

* die Stammdaten
* Spezifische Daten
* Medien und Beilagen
* Fixes Equipment
* Bestuhlung
* Virtuelle Räume
* Sperrzeiten
* Berechtigungen
* Feiertage  

<p style="text-align: justify">
Die neu eingetragenen Daten speichern Sie über den untenstehenden Button <i>Speichern</i>. </p>

{{< imgproc Ressource_neu_erstellen Resize "960x" >}}
Benötigte Daten für die Erstellung einer neuen Ressource
{{< /imgproc >}}

<p style="text-align: justify">
Haben Sie eine Ressource neu erstellt und gespeichert, aktualisiert sich die Liste automatisch. Ihre eingetragene Ressource sehen Sie nun im View Modus. </p>

<p style="text-align: justify">
Beispiel: </br> Erstellung eines neuen Equipmenttyps (Whiteboard) </p>

{{< imgproc Ressourcen_Beispiel_neu_Equipment Resize "960x" >}}
Beispiel einer neu erstellten Ressource, Equipment
{{< /imgproc >}}

<p style="text-align: justify">
Nach dem Speichern erscheint die neue Ressource in der aktualisierten Liste. </p>

{{< imgproc Ressourcen_neues_Equipment_in_Liste Resize "960x" >}}
Neu erstellte Ressource in der aktualisierten Liste
{{< /imgproc >}}

## Ressource bearbeiten

<p style="text-align: justify">
Eine bestehende Ressource bearbeiten Sie, indem Sie auf das Stift Icon "Bearbeiten" neben der jeweiligen Ressource in der Ressourcenliste klicken. In dem Feld, welches sich öffnet, ändern Sie die gleichen Daten fest, wie bei einer neu erstellten Ressource. </p>

<p style="text-align: justify">
Die geänderten Daten speichern Sie über den untenstehenden Button <i>Speichern</i>.

### Stammdaten der Ressource bearbeiten

<p style="text-align: justify">
Die folgenden Stammdaten können Sie ändern und bearbeiten: </p>

| Feld         | Funktion         |
| ------------- |-------------  |
| Ressourcen ID       |<p style="text-align: justify"> Ressourcen ID eintragen</p> |
| Bezeichnung       |<p style="text-align: justify"> Bezeichnung der Ressource eintragen. Erfassung muss in allen aktivierten Sprachen erfolgen.</p>|
| Beschreibung      |<p style="text-align: justify"> Die Ressource beschreiben </p>  |
| Fehlermeldung  | <p style="text-align: justify"> Fehlermeldung eintragen, die angezeigt werden soll. Diese übersteuert die globale Fehlermeldung bei Buchungsproblemen. Erfassung in mehreren Sprachen möglich. </p>|  
| External Identifier  |     |  
| Standort  | <p style="text-align: justify"> Standort über das "Plus-Zeichen" hinzufügen Bsp: Bern. Es werden nur die Standorte zur Verfügung gestellt, an welchen der Benutzer auch Schreibrechte hat. Datenrecht Ressource bearbeiten.</p> |  
| Ressourcenart    |<p style="text-align: justify"> Nur Bezeichnungsfeld (nicht editierbar) </p>  |  
| Status (aktiv*/inaktiv)* = markiert  |<p style="text-align: justify">  Ankreuzen, wenn zutreffend. Standard = inaktiv. Nur aktive Ressourcen erscheinen grundsätzlich in den Buchungssuchen (zusätzlich relevant ist das entsprechende Standortbezogene Recht. Wird eine Ressource auf inaktiv gesetzt, werden alle zugehörigen Reservationen mit Exchange Synchronisation von der Synchronisation abgekoppelt. </p>|  
| Checkin aktiviert  |<p style="text-align: justify"> Ankreuzen wenn zutreffend. Aktiviert die Checkin Funktionalität (auf Türschild) ob ein Checkin getätigt werden muss definiert die [Benutzergruppen](/einstellungen/sicherheitsdaten/benutzergruppen/).</p>|
| NoShow Delay  |<p style="text-align: justify"> Minuten auswählen. Definiert nach wie vielen Minuten ohne Checkin der Raum wieder freigegeben wird. Standardwert = 15 Minuten </p>|
| Tarifkategorie  |<p style="text-align: justify"> Es muss keine [Tarifkategorie](/einstellungen/erweitertebasisdatenfuerressourcen/tarife/) gewählt werden. Falls keine Tarifkategorie gewählt wurde, erfolgt keine Preisberechnung auf der Ressource. Standard = leer (keine Selektion)  </p>|
| Info Url  |<p style="text-align: justify"> Übersetzungseintrag _Alias für InfoURL_ muss erstellt werden. Ist der Übersetzungseintrag nicht übersetzt (leer), werden die effektiven URL’s der Ressourcen angezeigt. Ist die Übersetzung nicht leer, wird der Text der Übersetzung in der entsprechenden Benutzersprache übernommen. Die Implementation erfolgt im Sidepanel (Reservationsdetail) und im View Mode der Ressource. </p> |
| Sync. Modus  |<p style="text-align: justify"> über das Drop-Down auswählen </p>|
| Verantwortliche Person  |<p style="text-align: justify"> Intelibox mit allen aktiven verfügbaren Personen. Verantwortliche Person aus dem System eintragen oder suchen. </p>|
| Minimale Buchungsdauer |<p style="text-align: justify"> Standardwert 0, 0 = keine Minimaldauer festgelegt. Eingabe in Minuten. Falls die Minimalreservationsdauer unterschritten wird, erfolgt im Reservationsprozess die Ausgabe einer Fehlermeldung. </p>|
| Maximale Buchungsdauer |<p style="text-align: justify"> Standardwert 0, 0 = keine Minimaldauer festgelegt, Eingabe in Minuten. Falls die Mindestdauer der Reservation unterschritten wird, erfolgt im Reservationsprozess die Ausgabe einer Fehlermeldung. </p>|
| Vorlaufdauer in Minuten | <p style="text-align: justify">Standardwert: 0, 0 = keine Vorlaufzeit wird berechnet. Eingabe in Minuten. Bei der Berechnung im Reservationsprozess wird der grösste Wert aller Vorlaufzeiten (Ressourcen, Services, Bestuhlungen)verwendet (kein Kummulatives verhalten)  </p>|
| Nachlaufdauer in Minuten |<p style="text-align: justify"> Standardwert: 0, 0 = keine Vorlaufzeit wird berechnet. Eingabe in Minuten. Bei der Berechnung im Reservationsprozess wird der grösste Wert aller Vorlaufzeiten (Ressourcen, Services, Bestuhlungen)verwendet (kein Kummulatives verhalten).</p> |
| Priorisierung |<p style="text-align: justify"> Rangfolge der Ressource innerhalb der Ressourcenart.</p> [^1]|
| Automatische Verlängerung|<p style="text-align: justify"> Aktivierung der automatischen Verlängerung erfolgt durch die Eingabe eines Wert größer 0  ( >0 ). Ist der Wert 0, dann ist die automatische Verlängerung ausgeschaltet. Die Prüfung erfolgt auf Ganzzahlen: Feldvalidierung (siehe 000.001 Globale Funktionen). Weitere Regeln: Das Ausführungsdatum ist Reservationsende - 5 Minuten. Eine automatische Verlängerung löst keine E-Mail Notifikationen aus. Synchronisierte Buchungen werden im Outlook nachgetragen OHNE MeetingUpdate für die Teilnehmer. Eine Buchung mit automatischer Verlängerung endet bei Checkout, Konflikt mit der nächsten Reservation oder am Ende des Kalendertages. </p>|
| No Slot Buchungen zulässig |<p style="text-align: justify"> Bei Selektion kann Ressource nur als Slot gebucht werden (vordefinierter Zeitraum). Ankreuzen wenn zutreffend. </p>| 
| Online Ressource |<p style="text-align: justify"> Bei Selektion kann Ressource immer verwendet werden, unabhängig davon, ob es zu einem bestimmten Zeitpunkt bereits verwendet wird. </p>| 
| Schnellbuchungen deaktivieren |<p style="text-align: justify">  Somit kann diese Ressource auch über eine Schnellbuchung mit entsprechendem Recht gebucht werden. ankreuzen wenn zutreffend. </p>| 
| TMS System ID |<p style="text-align: justify"> Feld nur verfügbar bei der Ressourcenart <i>Equipment</i>. Nur Ressourcen mit einer Angabe in diesem Feld werden mit dem VC System synchronisiert und im VC Prozess gelistet. </p>|
| Beim Speichern Notifikation an Betroffene senden |<p style="text-align: justify"> Beim Abschluss der Buchung wird eine Email Notifikation an die ausgewählten Personen versendet. Ankreuzen, wenn zutreffend.</p> |

<p style="text-align: justify">
Die geänderten Daten speichern Sie über den untenstehenden Button <i>Speichern</i>. </p>

{{< imgproc Ressourcen_Stammdaten_bearbeiten Resize "960x" >}}
Stammdaten der Ressourcen bearbeiten
{{< /imgproc >}}

### Spezifische Daten der Ressource bearbeiten

<p style="text-align: justify">
Legen Sie für die ausgewählte Ressource spezifische Daten fest, indem Sie im Reitermenü auf <i>Spezifische Daten</i> gehen. Folgende Daten können Sie für die ausgewählte Ressource bearbeiten: </p>

| Feld         | Funktion         | 
| ------------- |-------------  | 
| Farbe       |<p style="text-align: justify"> Über das Pinsel-Sympol wählen Sie die gewünschte Farbe für die Ressource aus. Diese erscheint im Kalender. </p>| 
|<p style="text-align: justify"> Workflow     </p>  | Über Drop-Down wählen Sie den definierten [Workflow](/einstellungen/basisdatenfuerressourcen/workflows/) aus. |
| Plan Label     |<p style="text-align: justify"> Gewünschtes Plan Label eintragen  </p>|
| Reminder für provisorische Buchungen (in Min.) | <p style="text-align: justify">Verschickt einen zusätzlichen Reminder auf allen provisorischen Buchungen auf dieser Ressource in Minuten vorher (sofern Wert > 0 ist) Standardwert = leer. Die Notifikation wird an dieselbe Benutzergruppe verschickt, welche bereits beim Statuswechsel (in Status _prov. Buchung_) informiert wurde. Diese muss also vorgängig als [Workflow](/einstellungen/basisdatenfuerressourcen/workflows/) konfiguriert werden. Über die Pfeiltasten (oben/unten) die gewünschte Minutenanzahl auswählen. </p>|  
| Equipment Equipmenttyp  |<p style="text-align: justify">  Über das _Plus-Zeichen_ den gespeicherten Equipmenttyp auswählen   </p>|  
| Telefonnummer  |<p style="text-align: justify"> Telefonnummer des Raumes. Wird auch im View Modus angezeigt. Anzeige im Reservationsdetail (Sidepanel und Summary Page) nur wenn Inhalt vorhanden ist, ansonsten ist Nummer UND Label nicht sichtbar.  </p>  |  
| Alarmierung in Status  |<p style="text-align: justify">Erscheint nur bei Ressourcenart _Raum_. Dropdown zeigt alle erfassten Status (unabhängig vom Status der Ressource). Es muss der Status erfasst werden, bei welchem das Alarmierungspopup angezeigt werden soll (siehe UC xxx ) in Kombination mit dem _Dauer nach Statuswechsel_. </p> |  
| Dauer nach Statuswechsel |<p style="text-align: justify"> Erscheint nur bei Ressourcenart _Raum_. Angabe in Minuten. 0 oder leer = deaktiviert. Löst Event _Alarmierungspopup_ nach Ablauf der erfassten Minutenzahl aus, wenn der unter _Alarmierung in Status_ definierte Status eintrifft.  |  
| Alarmierung bei Folgebuchung |<p style="text-align: justify"> Erscheint nur bei Ressourcenart _Raum_. Angabe in Minuten. Die Minuten beziehen sich auf den Reservationsstart ohne Vorlauf. 0 oder leer = deaktiviert. Löst Event _Alarmierungspopup_ nach Ablauf der erfassten Minutenzahl aus, falls zum aktuellen Zeitpunkt eine Reservation besteht und sich auf der Ressource eine Reservation in Zukunft befindet. Beispiel Reservation startet um 11:00, Alarmierung beträgt 60. Eine vorgängige Reservation dauert von 08:00 bis 10:30 - so erscheint das Popup zwischen 10:00 und 10:30. </p>|  

<p style="text-align: justify">
Die geänderten Daten speichern Sie über den untenstehenden Button <i>Speichern</i>. </p>

{{< imgproc Ressourcen_Spezifische_Daten Resize "960x" >}}
Spezifische Daten der Ressourcen bearbeiten
{{< /imgproc >}}

### Medien und Beilagen der Ressource bearbeiten

<p style="text-align: justify">
Fügen Sie Medien und Beilagen zur bestehenden Ressource hinzu, indem Sie den untenstehenden Button <i>Hinzufügen</i> auswählen. Folgende Daten können Sie der Ressource hinzufügen: </p>

| Feld         | Funktion         | 
| ------------- |-------------  | 
| Bezeichnung      |<p style="text-align: justify"> Bezeichnung der ausgewählten Datei hinzufügen </p>| 
| Bild/Datei auswählen       | <p style="text-align: justify">Maximale Dateigrö0e 5MB </p>|


{{< imgproc Ressourcen_Medien_Beilagen Resize "960x" >}}
Medien und Beilagen der Ressourcen bearbeiten
{{< /imgproc >}}

{{< imgproc Ressourcen_Medien_hinzufügen Resize "960x" >}}
Medien und Beilagen einer Ressource hinzufügen
{{< /imgproc >}}

### Sperrzeiten der Ressource bearbeiten

<p style="text-align: justify">
Fügen Sie entweder eine Sperrzeitserie oder eine einzelne Sperrzeit zur Ressource hinzu. </br>
Dazu klicken Sie auf den untenstehenden Button <i>Hinzufügen</i>. Es öffnet sich ein neues Feld, in welchem Sie die geforderten Daten eingeben. </p>

{{< imgproc Ressourcen_Sperrzeiten Resize "960x" >}}
Sperrzeiten einer Ressource bearbeiten
{{< /imgproc >}}

<p style="text-align: justify">
Wählen Sie dazu die Sperrzeit (Von/Bis) aus und beschreiben Sie diese im Feld <i>Bezeichnung</i>. Mittels Datumspicker können Sie das gewünschte Datum auswählen. </p>

{{< imgproc Ressourcen_Sperrzeiten_hinzufügen Resize "960x" >}}
Sperrzeiten einer Ressource hinzufügen
{{< /imgproc >}}

{{< imgproc Ressourcen_Sperrzeiten_hinzugefügt_Liste Resize "960x" >}}
Sperrzeiten einer Ressource hinzufügen
{{< /imgproc >}}

#### Sperrzeitserie

<p style="text-align: justify">
Eine Sperrzeitserie fügen Sie über den untenstehenden Button <i>Sperrzeitserie hinzufügen</i>. Sie können hierbei zwischen verschiedenen Wiederholungen wählen: </p>

* täglich 
* wöchentlich
* monatlich 

{{< imgproc Ressourcen_Sperrzeitserie_hinzufügen Resize "960x" >}}
Sperrzeitserie hinzufügen
{{< /imgproc >}}

### Berechtigungen der Ressource bearbeiten

<p style="text-align: justify">
Fügen Sie Berechtigungen hinzu oder entfernen Sie diese. Beim Betätigen des untenstehenden Button <i>Hinzufügen</i> wählen Sie eine der bereits gespeicherten Berechtigungen aus z.B. Admin. </p> 

{{< imgproc Ressourcen_Berechtigungen Resize "960x" >}}
Berechtigungen einer Ressource bearbeiten
{{< /imgproc >}}

<p style="text-align: justify">
Sie können eine oder mehrere Berechtigungen auswählen. Aktivieren Sie dafür die Checkbox. Speichern Sie Ihre Auswahl über den Button <i>Speichern</i>. </p>

{{< imgproc Ressourcen_Berechtigungen_hinzufügen Resize "960x" >}}
Berechtigungen einer Ressource hinzufügen
{{< /imgproc >}}

Mehr Information zum Thema Berechtigungen finden Sie hier: [Benutzergruppen](/einstellungen/sicherheitsdaten/benutzergruppen/)

### Feiertage der Ressource bearbeiten

<p style="text-align: justify">
Sie können einen der bereits gespeicherten Feiertage (z.B. Weihnachten) der Ressource zuordnen. Dazu klicken Sie auf den untenstehenden Button <i>Hinzufügen</i>. In dem Feld, welches sich öffnet, wählen Sie einen oder mehrere Feiertage über das linke Kästchen aus. </p>

{{< imgproc Ressourcen_Feiertage Resize "960x" >}}
Feiertage für eine Ressource bearbeiten
{{< /imgproc >}}

{{< imgproc Ressourcen_Feiertage_hinzufügen Resize "960x" >}}
Einer Ressource einen Feiertag zuweisen
{{< /imgproc >}}

<p style="text-align: justify">
Speichern Sie Ihre Auswahl über den untenstehenden Button <i>Speichern</i>. Die Liste aktualisiert sich automatisch und die ausgewählten Feiertage erscheinen in der Liste. </p>

{{< imgproc Ressourcen_Feiertage_in_Liste Resize "960x" >}}
Hinzugefügte Feiertage in der aktualisierten Liste
{{< /imgproc >}}

Mehr über Feiertage erfahren Sie hier: [Feiertage](/einstellungen/erweitertebasisdatenfuerressourcen/feiertage/) 

### Türschild der Ressource bearbeiten

<p style="text-align: justify">
Für das Türschild wählen Sie den Konfigurationsbenutzer aus und aktivieren das Türschild. </p>

{{< imgproc Ressource_Türschild Resize "960x" >}}
Türschild einer Ressource bearbeiten 
{{< /imgproc >}}

### Fixes Equipment der Ressource bearbeiten

<p style="text-align: justify">
Wenn Sie die Ressourcenart <i>Raum</i> bearbeiten, können Sie diesem fixes Equipment zuordnen. </p> 

{{< imgproc Ressource_fixes_Equipment Resize "960x" >}}
Fixes Equipment auswählen
{{< /imgproc >}}

<p style="text-align: justify">
Sollten Sie eine neue Ressource erstellen oder weiteres Equipment hinzufügen, klicken Sie auf den untenstehenden Button <i>hinzufügen</i>. Es öffnet sich ein Feld, in welchem Sie ein oder mehrere Equipments auswählen können über die Aktivierung der Checkbox. </p>

{{< imgproc Ressourcen_fixes_Equipment_hinzufügen Resize "960x" >}}
Fixes Equipment zuordnen und hinzufügen 
{{< /imgproc >}}

<p style="text-align: justify">
Speichern Sie Ihre Auswahl über den Button <i>Speichern</i>. Die Liste aktualisiert sich automatisch und Sie sehen das hinzugefügte Equipment. </p>

{{< imgproc Ressourcen_fixes_Equipment_in_Liste Resize "960x" >}}
Ansicht fixes Equipment in aktualisierter Liste
{{< /imgproc >}}

#### Equipment Schnellerfassung 

<p style="text-align: justify">
Sie haben die Möglichkeit über die Equipment Schnellerfassung. Dazu klicken Sie auf den gleichnamigen untenstehenden Button. Es öffnet sich ein Feld und Sie können dort die zur Verfügung stehenden Equipmenttypen mittels der Plus-Auswahl hinzufügen. Speichern Sie Ihre Eingabe ebenfalls über den Button <i>Speichern</i>. </p>

{{< imgproc Ressourcen_Schnellzugriff_Equipment Resize "960x" >}}
Schnellerfassung von Equipment  
{{< /imgproc >}}


### Bestuhlung der Ressource bearbeiten

<p style="text-align: justify">
Wenn Sie die Ressourcenart <i>Raum</i> bearbeiten, können Sie diesem eine oder mehrere Bestuhlungsmöglichkeiten zuordnen. Bereits bestehende und gespeicherte Bestuhlungen sehen Sie in der Liste. </p>

{{< imgproc Ressourcen_Bestuhlung Resize "960x" >}}
Bestuhlung zu einer Ressource hinzufügen
{{< /imgproc >}}

<p style="text-align: justify">
Wollen Sie der Ressource neue Bestuhlungen hinzufügen, klicken Sie auf den untenstehenden Button <i>hinzufügen</i>. Es öffnet sich ein Feld, in welchem Sie durch Aktivieren der Checkbox den Bestuhlungstyp auswählen können. </p>

{{< imgproc Ressourcen_Bestuhlung_hinzufügen Resize "960x" >}}
Bestuhlung zu einer Ressource hinzufügen
{{< /imgproc >}}

<p style="text-align: justify">
Speichern Sie Ihre Eingabe mit dem Button <i>Speichern</i>. </p>

Mehr Information über die Bestuhlung finden Sie hier:[Bestuhlung](/einstellungen/basisdatenfuerressourcen/bestuhlung/)

### Virtuelle Räume der Ressource bearbeiten

<p style="text-align: justify">
Im Kapitel virtuelle Räume werden diese genauer beschreiben. </p>

[^1]: Die Priorisierung wird in den Daten der Ressource hinterlegt. Bei einer automatischen Vergabe der Ressourcen zu einer Buchung, wird die Ressource mit der obersten Priorisierung, beginnend mit 1, vergeben.