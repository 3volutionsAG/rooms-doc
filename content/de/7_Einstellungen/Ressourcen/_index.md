---
title: "Ressourcen"
linkTitle: "Ressourcen"
weight: 6
description: >
  In diesem Bereich speichern und bearbeiten Sie die Ressourcen. Sie erstellen Ressourcenlisten, fügen neue Ressourcen hinzu oder bearbeiten bestehende Ressourcen. 
 


---
## Ansicht Ressourcen
Im linken Sidepanel können Sie nach bestimmten Ressourcen suchen und die Filterkriterien hierfür einstellen. 

Im rechten Bereich sehen Sie die Ressourcenliste. Je nachdem, welche Ressourcenart Sie im linken Filterkriterium angegeben haben, wird Ihnen diese Liste angezeigt. 

{{< imgproc Ressourcen_bearbeiten_erstellen Resize "1280x" >}}
Abbildung r: Ansicht und Überblick über Ressourcen
{{< /imgproc >}}

Beispiel: Wählen Sie im linken Sidepanel unter Ressourcenart "Equipment" aus und drücken Sie auf finden, werden Ihnen alle Equipmenttypen in der Liste angezeigt. 

{{< imgproc Ressourcen_Equipment_finden_in_Liste Resize "1280x" >}}
Abbildung ra: Equipment in der Ressourcenliste anzeigen
{{< /imgproc >}}

### Ressourcen suchen
Im linken Menü finden Sie unter der Kategorie "Ressourcen" eine Suchfunktion mit deren Hilfe Sie nach einer Ressource suchen können (Abbildung r). Sie können hierbei nach folgenden Kriterien suchen: 

* Ressourcenart (Drop-down)
* Gespeicherte Listen einsehen
* Standort (Plus Zeichen): Auswählen aus allen eingespeicherten Standorten

**Sie können eine Liste als Favorit speichern**: 
Wird eine Liste als Favorit definiert wird diese standardmässig angezeigt.
Ansonsten ist die Liste leer.
Nach Wechsel eines Eintrages, werden Sidepanel und Inhaltsbereich automatisch neu geladen
(Achtung: Bevor Liste gespeichert wird, muss "Finden" Button geklickt werden, um alle Kriterien zu speichdern)

#### Suchen durch Erweiterte Kriterien
Die Suchfunktionen erweitern Sie über den Drop-Down des Menü-Punktes "Erweiterte Kriterien". 
Hierbei können Sie nach den folgenden Kriterien suchen:

* Ressourcen ID/Bezeichnung
* Ressourcenpicker (Plus Zeichen) : Der Ressourcenpicker zeigt alle Ressourcen - unabhängig davon was im Feld "Ressourcenart" selektiert worden ist 
* Status: Wählen aus Alle, Inaktiv oder Aktiv
* Verantwortliche Person 

#### Suchen über die Gliederung 
Die Suchfunktionen erweitern Sie über den Drop-Down des Menü-Punktes "Gliederung". Es werden alle Gliederungstypen der gewählten "Ressourcenart" angezeigt. Bei Ressourcenart "alle" werden alle Gliederungstypen aller Ressourcenarten aufgelistet. Es werden nur die Gliederungen (eines Gliederungstyps) angezeigt für welche Sie auch Rechte haben.
Hierbei können Sie nach den folgenden Kriterien suchen:

* Raum: Raumtyp (Plus Zeichen: hinzufügen)
* Equipmemt: Equipmenttyp (Plus Zeichen: hinzufügen)

### Löschen von Ressourcen 
Sie können eine Mehrfachselektion über die linke Checkbox vornehmen und eine Ressource über den untenstehenden Button "entfernen" löschen.
Es erscheint ein Warnhinweis, Ausgabe im Actionpanel oder Fehlermeldung im Actionpanel.

Zusätzliche Löschregel:
* Nur möglich, wenn eine Ressource keine Reservationen hat
* Löschweitergabe an alle Abhänigkeiten zur Ressource
* Nur möglich, wenn Benutzer über die entsprechende standortabhängige Rechte verfügt.

### Daten einsehen
Klicken Sie auf den Namen einer Ressource in der Liste gelangen Sie zur Übersicht der gespeicherten Daten und der Historie der Ressource. 

{{< imgproc Ressource_Daten_einsehen Resize "1280x" >}}
Abbildung rq: Daten einer Ressource einsehen
{{< /imgproc >}}

Aus diesem Modus können Sie ebenfalls die ausgewählte Ressource bearbeiten. Dazu klicken Sie auf den untenstehenden Button "Bearbeiten". Über den Button "Abbrechen" gelangen Sie wieder zur Übersicht im View Modus. 

## Ressource neu erstellen 
Eine neue Ressource erstellen Sie über den untenstehenden Button "Erstellen" (Abbildung r). Über den Drop Down Pfeil können Sie untenstehend auswählen, welchen Ressourcentyp Sie neu erstellen wollen. Sie können wählen zwischen Raum, Arbeitsplatz, Parkplatz, Equipment, Fahrzeug oder Bneutzerdefinierten Ressourcen. Je nachdem, welchen Ressourcentyp Sie neu erstellen, stehen Ihnen verschiedene Daten zur Verfügung.

In dem Feld, welches sich öffnet legen Sie folgende Daten fest (Abbildung rb) 
* die Stammdaten
* Spezifische Daten
* Medien und Beilagen
* Fixes Equipment
* Bestuhlung
* Virtuelle Räume 
* Sperrzeiten
* Berechtigungen
* Feiertage  

Die neu eingetragenen Daten speichern Sie über den untenstehenden Button "Speichern" (Abbildung ra).

{{< imgproc Ressource_neu_erstellen Resize "1280x" >}}
Abbildung rb: Benötigte Daten für die Erstellung einer neuen Ressource
{{< /imgproc >}}

Haben Sie eine Ressource neu erstellt und gespeichert, aktualisiert sich die Liste automatisch. Ihre eingetragene Ressource, sehen Sie nun im View Modus. (Abbildung rz)

Beispiel: Erstellung eines neuen Equipmenttyps (Whiteboard)

{{< imgproc Ressourcen_Beispiel_neu_Equipment Resize "1280x" >}}
Abbildung rz: Beispiel einer neu erstellten Ressource, Equipment
{{< /imgproc >}}

Nach dem Speichern, erscheint die neue Ressource in der aktualisierten Liste. 

{{< imgproc Ressourcen_neues_Equipment_in_Liste Resize "1280x" >}}
Abbildung ry: Neu erstellte Ressource in der aktualisierten Liste
{{< /imgproc >}}

## Ressource bearbeiten
Eine bestehende Ressource bearbeiten Sie, indem Sie auf das Stift Icon "Bearbeiten" neben der jeweiligen Ressource in der Ressourcenliste klicken (Abbildung r). In dem Feld, welches sich öffnet ändern Sie die gleichen Daten fest, wie bei einer neu erstellten Ressource (Abbildung rb). 

Die geänderten Daten speichern Sie über den untenstehenden Button "Speichern" (Abbildung rb).

### Stammdaten der Ressource bearbeiten 
Die folgenden Stammdaten können Sie ändern und bearbeiten: 

| Feld         | Funktion         | 
| ------------- |-------------  | 
| Ressourcen ID       | Ressourcen ID eintragen | 
| Bezeichnung       | Bezeichnung der Ressource eintragen. Erfassung muss in allen aktivierten Sprachen erfolgen.|
| Beschreibung      | Die Ressource beschreiben  |
| Fehlermeldung  |  Fehlermeldung eintragen, die angezeigt werden soll. Diese übersteuert die globale Fehlermeldung bei Buchungsproblemen. Erfassung in mehreren Sprachen möglich. |  
| External Identifier  |     |  
| Standort  | Standort über das "Plus-Zeichen" hinzufügen Bsp: Bern. Es werden nur die Standorte zur Verfügung gestellt an welchen der Benutzer auch Schreibrechte hat Datenrecht Ressource bearbeiten. |  
| Ressourcenart    | Nur Bezeichnungsfeld (nicht editierbar)  |  
| Status (aktiv*/inaktiv)* = markiert  |  Ankreuzen wenn zutreffend. Standard = inaktiv. Nur aktive Ressourcen erscheinen grundsätzlich in den Buchungssuchen (zusätzlich relevant ist das entsprechende Standortbezogene Recht.Wird eine Ressource auf inaktiv gesetzt, werden alle zugehörigen Reservationen mit Exchange Synchronisation von der Synchronisation abgekoppelt. |  
| Checkin aktiviert  | Ankreuzen wenn zutreffend. Aktiviert die Checkin Funktionalität (auf Türschild) ob ein Checkin getätigt werden muss definiert die [Benutzergruppen](/einstellungen/sicherheitsdaten/benutzergruppen/).| 
| NoShow Delay  | Minuten auswählen. Definiert nach wie vielen Minuten ohne Checkin der Raum wieder freigegeben wird. Standardwert = 15 Minuten | 
| Tarifkategorie  | Es muss keine [Tarifkategorie](/einstellungen/erweitertebasisdatenfuerressourcen/tarife/) gewählt werden. Falls keine Tarikfategorie gewählt wurde, erfolgt keine Preisberechnung auf der Ressource. Standard = leer (keine Selektion)  | 
| Info Url  | Übersetzungseintrag „Alias für InfoURL“ muss erstellt werden. Ist der Übersetzungseintrag nicht übersetzt (leer), werden die effektiven URL’s der Ressourcen angezeigt. Ist die Übersetzung nicht leer wird der Text der Übersetzung in der entsprechenden Benutzersprache übernommen. Die Implementation erfolgt im Sidepanel (Reservationsdetail) und im View Mode der Ressource.  | 
| Sync. Modus  | über das Drop-Down auswählen | 
| Verantwortliche Person  | Intelibox mit allen aktiven verfügbaren Personen. Verantwortliche Person aus dem System eintragen oder suchen. | 
| Minimale Buchungsdauer | Standardwert 0, 0 = keine Minimaldauer festgelegt. Eingabe in Minuten. Falls die Minimalreservationsdauer unterschritten wird, erfolgt im Reservationsprozess die Ausgabe einer Fehlermeldung. | 
| Maximale Buchungsdauer | Standardwert 0, 0 = keine Minimaldauer festgelegt, Eingabe in Minuten. Falls die Minimalreservationsdauer unterschritten wird, erfolgt im Reservationsprozess die Ausgabe einer Fehlermeldung. | 
| Vorlaufdauer in Minuten | Standardwert: 0, 0 = keine Vorlaufzeit wird berechnet. Eingabe in Minuten. Bei der Berechnung im Reservationsprozess wird der grösste Wert aller Vorlaufzeiten (Ressourcen, Services, Bestuhlungen)verwendet (kein Kummulatives verhalten)  | 
| Nachlaufdauer in Minuten | Standardwert: 0, 0 = keine Vorlaufzeit wird berechnet. Eingabe in Minuten. Bei der Berechnung im Reservationsprozess wird der grösste Wert aller Vorlaufzeiten (Ressourcen, Services, Bestuhlungen)verwendet (kein Kummulatives verhalten). | 
| Priorisierung | Angabe eines Sortiermerkmals. Wird in Listen und unter Buchen als zusätzliche Spalte angezeigt. Im Kalender wird automatisch nach dieser Spalte sortiert (aufsteigend). | 
| Automatische Verlängerung| Aktivierung der automatischen Verlängerung erfolgt durch die Eingabe eines Wert grösser 0  ( >0 ). Ist der Wert 0, dann ist die automatische Verlängerung ausgeschalten. Die Prüfung erfolgt auf Ganzzahlen: Feldvalidierung (siehe 000.001 Globale Funktionen). Weitere Regeln: Das Ausführungsdatum ist Reservationsende - 5 Minuten. Eine automatische Verlängerung löst keine E-Mail Notifikationen aus. Synchronierte Buchungen werden im Outlook nachgetragen OHNE MeetingUpdate für die Teilnehmer. Eine Buchung mit automatischer Verlängerung endet bei Checkout, Konflikt mit der nächsten Reservation oder am Ende des Kalenderteages. | 
| No Slot Buchungen zulässig | Bei Selektion kann Ressource nur als Slot gebucht werden (vordefinierter Zeitraum). Ankreuzen wenn zutreffend. | 
| Schnellbuchungen deaktivieren | Somit kann diese Ressource auch über eine Schnellbuchung mit entsprechendem Recht gebucht werden. ankreuzen wenn zutreffend. | 
| TMS System ID | Feld nur verfügbar bei der Ressourcenart "Equipment" nur Ressourcen mit einer Angabe in diesem Feld werden mit dem VC System synchronisiert und im VC Prozess gelistet. |
| Beim Speichern Notifikation an Betroffene senden | Beim Abschluss der Buchung wird eine Email Notifikation an die ausgewählten Personen versendet. ankreizen wenn zutreffend. |

Die geänderten Daten speichern Sie über den untenstehenden Button "Speichern" (Abbildung rb).

{{< imgproc Ressourcen_Stammdaten_bearbeiten Resize "1280x" >}}
Abbildung rc: Stammdaten der Ressourcen bearbeiten
{{< /imgproc >}}

### Spezifische Daten der Ressource bearbeiten
Legen Sie für die ausgewähle Ressource spezifische Daten fest, indem Sie im Reitermenü auf "Spezifische Daten" gehen (Abbildung rd). Folgende Daten können Sie für die ausgewählte Ressource bearbeiten: 

| Feld         | Funktion         | 
| ------------- |-------------  | 
| Farbe       | Über das Pinsel-Sympol wählen Sie die gewünschte Farbe für die Ressource aus. Diese erscheint im Kalender. | 
| Workflow       | Über Drop-Down wählen Sie den definierten [Workflow](/einstellungen/basisdatenfuerressourcen/workflows/) aus. |
| Plan Label     | Gewünschtes Plan Label eintragen  |
| Reminder für provisorische Buchungen (in Min.) | Verschickt einen zusätzlichen Reminder auf allen provisorischen Buchungen auf dieser Ressource in Minuten vorher (sofern Wert > 0 ist) Standardwert = leer. Die Notifikation wird an dieselbe Benutzerguppe verschickt, welche bereits beim Statuswechsel (in Status "prov. Buchung") informiert wurde. Diese muss also vorgängig als [Workflow](/einstellungen/basisdatenfuerressourcen/workflows/) konfiguriert werden Über die Pfeiltasten (oben/unten) die gewünschte Minutenanzahl auswählen. |  
| Equipment Equipmenttyp  |  Über das "Plus-Zeichen" den gespeicherten Equipmenttypp auswählen   |  
| Telefonnummer  | Telefonnummer des Raumes. Wird auch im View Modus angezeigt. Anzeige im Reservationsdetail (Sidepanel und Summary Page) nur wenn Inhalt vorhanden ist, ansonsten ist Nummer UND Label nicht sichtbar.    |  
| Alarmierung in Status  |Erscheint nur bei Ressourcenart "Raum".Dropdown zeigt alle erfassten Status (unabhängig vom Status der Ressouce). Es muss der Status erfasst werden, bei welchem das Alarmierungspopup angezeigt werden soll (siehe UC xxx ) in Kombination mit dem "Dauer nach Statuswechsel". |  
| Dauer nach Statuswechsel | Erscheint nur bei Ressourcenart "Raum". Angabe in Minuten. 0 oder leer = deaktiviert. Löst Event "Alarmierungspopup" nach Ablauf der erfassten Minutenzahl aus, wenn der unter "Alarmierung in Status" definierte Status eintrifft.  |  
| Alarmierung bei Folgebuchung | Erscheint nur bei Ressourcenart "Raum". Angabe in Minuten. Die Minuten beziehen sich auf den Reservationsstart ohne Vorlauf. 0 oder leer = deaktiviert. Löst Event "Alarmierungspopup" nach Ablauf der erfassten Minutenzahl aus, falls zum aktuellen Zeitpunkt eine Reservation besteht und sich auf der Ressource einen Reservation in Zukunft befindet. Beispiel Reservation startet um 11:00, Alarmierung beträgt 60. Eine Vorgängige Reservation dauert von 08:00 bis 10:30 - so erscheint das Popup zwischen 10:00 und 10:30.|  

Die geänderten Daten speichern Sie über den untenstehenden Button "Speichern" (Abbildung rc).

{{< imgproc Ressourcen_Spezifische_Daten Resize "1280x" >}}
Abbildung rd: Spezifische Daten der Ressourcen bearbeiten
{{< /imgproc >}}

### Medien und Beilagen der Ressource bearbeiten
Fügen Sie Medien und Beilagen zur bestehenden Ressource hinzu, indem Sie den untenstehenden Button "Hinzufügen" auswählen (Abbildung rd). Folgende Daten können Sie der Ressource hinzufügen: 

| Feld         | Funktion         | 
| ------------- |-------------  | 
| Bezeichnung      | Bezeichnung der ausgewählten Datei hinzufügen | 
| Bild/Datei auswählen       | Maximale Dateigrö0e 5MB |


{{< imgproc Ressourcen_Medien_Beilagen Resize "1280x" >}}
Abbildung rd: Medien und Beilagen der Ressourcen bearbeiten
{{< /imgproc >}}

{{< imgproc Ressourcen_Medien_hinzufügen Resize "1280x" >}}
Abbildung re: Medien und Beilagen einer Ressource hinzufügen
{{< /imgproc >}}

### Sperrzeiten der Ressource bearbeiten
Fügen Sie entweder eine Sperrzeitserie oder eine einzelne Sperrzeit zur Ressource hinzu. 
Dazu klicken Sie auf den untenstehenden Button "Hinzufügen". Es öffnet sich ein neues Feld, in welchem Sie die geforterten Daten eingeben. (Abbildung rf)

{{< imgproc Ressourcen_Sperrzeiten Resize "1280x" >}}
Abbildung rf: Sperrzeiten einer Ressource bearbeiten
{{< /imgproc >}}

Wählen Sie dazu die Sperrzeit (Von/Bis) aus und beschreiben Sie diese im Feld "Bezeichnung" (Abbildung rg). Mitteld Datumspicker können Sie das gewünschte Datum auswählen.

{{< imgproc Ressourcen_Sperrzeiten_hinzufügen Resize "1280x" >}}
Abbildung rg: Sperrzeiten einer Ressource hinzufügen
{{< /imgproc >}}

{{< imgproc Ressourcen_Sperrzeiten_hinzugefügt_Liste Resize "1280x" >}}
Abbildung rab: Sperrzeiten einer Ressource hinzufügen
{{< /imgproc >}}

#### Sperrzeitserie
Eine Sperrzeitserie fügen Sie über den untenstehenden Button "Sperrzeitserie hinzufügen". Sie können hierbei zwischen verschiedenen Wiederholungen wählen: 
* täglich 
* wöchentlich
* monatlich 

{{< imgproc Ressourcen_Sperrzeitserie_hinzufügen Resize "1280x" >}}
Abbildung rac: Sperrzeitserie hinzufügen
{{< /imgproc >}}

### Berechtigungen der Ressource bearbeiten
Fügen Sie Berechtigungen hinzu oder entfernen Sie diese. Beim Betätigen des untenstehenden Button "Hinzufügen" wählen Sie eine der bereits gespeicherten Berechtigungen aus z.B. Admin (Abbildung rj). 

{{< imgproc Ressourcen_Berechtigungen Resize "1280x" >}}
Abbildung rh: Berechtigungen einer Ressource bearbeiten
{{< /imgproc >}}

Sie können eine oder mehrere Berechtigungen auswählen. Aktivieren Sie dafür die Checkbox. Speichern Sie Ihre Auswahl über den Button "Speichern". 

{{< imgproc Ressourcen_Berechtigungen_hinzufügen Resize "1280x" >}}
Abbildung rj: Berechtigungen einer Ressource hinzufügen
{{< /imgproc >}}

Mehr Information zum Thema Berechtigungen finden Sie hier: [Benutzergruppen](/einstellungen/sicherheitsdaten/benutzergruppen/)

### Feiertage der Ressource bearbeiten
Sie können einen der bereits gespeicherten Feiertage (z.B. Weihnachten) der Ressource zuordnen. Dazu klicken Sie auf den untenstehenden Button "Hinzufügen" (Abbildung rk). In dem Feld, welches sich öffnet, wählen Sie einen oder mehrere Feiertage über das linke Kästchen aus (Abbildung rl). 

{{< imgproc Ressourcen_Feiertage Resize "1280x" >}}
Abbildung rk: Feiertage für eine Ressource bearbeiten
{{< /imgproc >}}

{{< imgproc Ressourcen_Feiertage_hinzufügen Resize "1280x" >}}
Abbildung rl: Einer Ressource einen Feiertag zuweisen
{{< /imgproc >}}

Speichern Sie Ihre Auswahl über den untenstehenden Button "Speichern". Die Liste aktualisiert sich automatisch und die ausgewählten Feiertage erscheinen in der Liste. (Abbildung rla)

{{< imgproc Ressourcen_Feiertage_in_Liste Resize "1280x" >}}
Abbildung rla: HInzugefügte Feiertage in der aktualisierten Liste
{{< /imgproc >}}

Mehr über Feiertage erfahren Sie hier: [Feiertage](/einstellungen/erweitertebasisdatenfuerressourcen/feiertage/) 

### Türschild der Ressource bearbeiten
Für das Türschild wählen Sie den Konfigurationsbenutzer aus und aktivieren das Türschild. 

{{< imgproc Ressource_Türschild Resize "1280x" >}}
Abbildung rm: Türschild einer Ressource bearbeiten 
{{< /imgproc >}}

### Fixes Equipment der Ressource bearbeiten
Wenn Sie die Ressourcenart **Raum** bearbeiten, können Sie diesem fixes Equipment zuordnen. Sie sehen die Equipmentliste in Abbildung rs. 

{{< imgproc Ressource_fixes_Equipment Resize "1280x" >}}
Abbildung rs: Fixes Equipment auswählen
{{< /imgproc >}}

Sollten Sie eine neue Ressource erstellen oder weiteres Equipment hinzufügen, klicken Sie auf den untenstehenden Button "hinzufügen". Es öffnet sich ein Feld, in welchem Sie ein oder mehrere Equipments auswählen können über die Aktivierung der Checkbox. 

{{< imgproc Ressourcen_fixes_Equipment_hinzufügen Resize "1280x" >}}
Abbildung rt: Fixes Equipment zuordnen und hinzufügen 
{{< /imgproc >}}

Speichern Sie Ihre Auswahl über den Button "Speichern". Die Liste aktualisiert sich automatisch und Sie sehen das hinzugefügte Equipment (Abbildung ru).

{{< imgproc Ressourcen_fixes_Equipment_in_Liste Resize "1280x" >}}
Abbildung ru: Ansicht fixes Equipment in aktualisierter Liste
{{< /imgproc >}}

#### Equipment Schnellerfassung 
Sie haben die Möglichkeit über die Equipment Schnellerfassung. Dazu klicken Sie auf den gleichnamigen untenstehenden Button. Es öffnet sich ein Feld und Sie können dort die zur Verfügung stehenden Equipmenttypen mittels der Plus-Auswahl hinzufügen. Speichern Sie Ihre Eingabe ebenfalls über den Button "Speichern". 

{{< imgproc Ressourcen_Schnellzugriff_Equipment Resize "1280x" >}}
Abbildung rv: Schnellerfassung von Equipment  
{{< /imgproc >}}


### Bestuhlung der Ressource bearbeiten
Wenn Sie die Ressourcenart **Raum** bearbeiten, können Sie diesem eine oder mehrere Bestuhlungsmöglichkeiten zuordnen. Bereits bestehende und gespeicherte Bestuhlungen sehen Sie in der Liste. 

{{< imgproc Ressourcen_Bestuhlung Resize "1280x" >}}
Abbildung rbb: Bestuhlung zu einer Ressource hinzufügen
{{< /imgproc >}}

Wollen Sie der Ressource neue Bestuhlungen hinzufügen, klicken Sie auf den untenstehenden Button "hinzufügen". Es öffnet sich ein Feld, in welchem Sie durch Aktivieren der Checkbox den Bestuhlungstyp auswählen können. (Abbildung rba)

{{< imgproc Ressourcen_Bestuhlung_hinzufügen Resize "1280x" >}}
Abbildung rba: Bestuhlung zu einer Ressource hinzufügen
{{< /imgproc >}}

Speichern Sie Ihre Eingabe mit dem Button "Speichern". 

Mehr Information über die Bestuhlung finden Sie hier:[Bestuhlung](/einstellungen/basisdatenfuerressourcen/bestuhlung/)

### Virtuelle Räume der Ressource bearbeiten
Im Kapitel virtuelle Räume werden diese genauer Beschrieben.



