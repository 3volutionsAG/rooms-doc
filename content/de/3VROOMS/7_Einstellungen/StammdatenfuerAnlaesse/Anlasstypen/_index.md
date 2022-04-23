---
title: "Anlasstypen"
linkTitle: "Anlasstypen"
weight: 1
description: >
  Fügen Sie neue Anlasstypen hinzu oder bearbeiten Sie bestehende.   
 

---
## Ansicht Anlasstypen 
Im linken Sidepanel sehen Sie die Filterfunktionen mit deren Hilfe Sie nach Anlasstypen suchen können. 

Im rechten Feld sehen Sie die Anlasstypenliste mit den gespeicherten Anlasstypen (Abbildung p). Diese können Sie bearbeiten, gespeicherte Daten einsehen, neue Anlasstypen hinzufügen oder bestehende löschen. 

{{< imgproc Anlasstypen_bearbeiten_erstellen Resize "1280x" >}}
Abbildung p: Ansicht der Anlasstypen in Rooms
{{< /imgproc >}}

Über das Aktivieren der Checkbox können Sie ein Listenelement über den Button "Entfernen" löschen. 

### Anlasstypen durchsuchen 
Über die Suchfunktion im linken Sidepanel können Sie die Liste der Anlasstypen über die Bezeichnung durchsuchen (Abbildung p).


### Anlasstypen Daten einsehen
Wenn Sie mit dem Mauszeiger auf den Anlasstypen aus der Anlasstypenliste klicken, sehen Sie die Stammdaten, Buchungsanfragen und Benutzergruppen sowie die Historie des bestehenden Anlasstypen ein (Abbildung pd).

Aus dieser Funktion heraus können Sie den Anlasstyp auch bearbeiten. Klicken Sie dazu auf den untenstehenden Button "Bearbeiten". (Abbildung pd)

{{< imgproc Anlasstypen_Daten_einsehen Resize "1280x" >}}
Abbildung pd: Anlasstypen Daten einsehen
{{< /imgproc >}}


## Anlasstypen bearbeiten 
Einen neuen Anlasstypen erstellen Sie über den untenstehenden Button "Erstellen" (Abbildung p). Einen bereits bestehenden Anlasstypen bearbeiten Sie, indem Sie auf das Stift Icon neben dem Anlasstypen in der Liste klicken. In beiden Fällen öffnet sich ein Feld, in dem Sie folgende Daten festlegen (Abbildung pa): 
* die Stammdaten
* Buchungsanfragen
* Benutzergruppen 

Die neu eingetragenen Daten speichern Sie über den untenstehenden Button "Speichern" (Abbildung pa).



### Stammdaten der Raumeinheit bearbeiten
Die folgenden Stammdaten können Sie ändern und bearbeiten: 

| Feld         | Funktion         | 
| ------------- |-------------  | 
| Bezeichnung       | Bezeichnung des Anlasstypen eintragen. DIe Erfassung muss mehrsprachig erfolgen. |
| Zusatz      | Tragen Sie eine zusätzliche Beschreibung zum Anlasstyp ein. Die Erfassung kann mehrsprachig erfolgen. Der Zusatz hat keine Funktionalität und wird ausser im Bereich der "Anlasstyp verwaltung" nicht visualisiert (dient zu Export Zwecken). | 
| Anfragen für Jobmanager  | Auswählen, wenn zutreffend. Wenn diese Checkbox selektiert ist und ein resp. mehrere Reservierungsformulare dazu hinterlegt sind, dann: wird beim ausfüllen und speichern eines entsprechenden Reservierungsformulars ein Eintrag in die Kommunikationstabelle (Tabelle: Lektion) geschrieben. Im Jobmanager findet sich dies dann als Job zur Weiterverarbeitung wieder.   |  


Die geänderten Daten speichern Sie über den untenstehenden Button "Speichern" (Abbildung pa). Das Actionpanel bestätigt die Speicherung und springt zurück auf den Ursprungsort

{{< imgproc Anlasstypen_Stammdaten Resize "1280x" >}}
Abbildung pa: Stammdaten der Raumeinheiten bearbeiten
{{< /imgproc >}}

### Buchungsanfrage bearbeiten
Die folgenden Daten können Sie bei den Buchungsanfragen ändern und bearbeiten: 

| Feld         | Funktion         | 
| ------------- |-------------  | 
| Gruppe für die Notifikation       | Festlegen und auswählen, welche Gruppe benachrichtigt werden soll. Benutzergruppe, welche notifiziert wird nach Versenden des Request Formulars. Notifikationstemplate: 11 - Reservationsanfrage Neu (siehe Notifikationsmatrix) muss bei Benutzergruppe hinterlegt worden sein. |
| Detail der Buchungsanfrage      | Freie HTML und JavaScript Eingabe für Gestaltung des Request Formulars. Platzierung der Controls aus den Controllisten möglich. Beginn und Ende des Blocks müssen die HTML Tags <customHtml> und </customHtml> verwenden. | 
  


Die geänderten Daten speichern Sie über den untenstehenden Button "Speichern" (Abbildung pb).


{{< imgproc Anlasstypen_Buchungsanfragen Resize "1280x" >}}
Abbildung pb: Buchungsanfragen zum Anlasstypen bearbeiten
{{< /imgproc >}}

### Benutzergruppe hinzufügen 
Bereits zugewiesene Benutzergruppen sehen Sie im rechten Feld (Abbildung pe). DIese können Sie über dei Checkbox auswählen und entfernen. Dazu klicken Sie auf den untenstehenden Button "Entfernen". Die Liste aktualisiert sich automatisch.

{{< imgproc Anlasstypen_Benutzergruppen Resize "1280x" >}}
Abbildung pe: zugewiesene Benutzergruppen beim Anlasstyp
{{< /imgproc >}}

Fügen Sie eine neue Benutzergruppe hinzu, indem Sie auf den Button "Hinzufügen" klicken (Abbildung pc). In dem neuen Feld können Sie eine oder mehrere Benutzergruppen über die Checkbox auswählen. Speichern Sie Ihre Auswahl über den Button "Hinzufügen".

{{< imgproc Anlasstypen_Benutzergruppen_hinzufügen Resize "1280x" >}}
Abbildung pc: Benutzergruppen zum Anlasstypen hinzufügen
{{< /imgproc >}}

Die Liste aktualisiert sich automatisch und Sie sehen Ihre Auswahl in der Benutzergruppenliste. (Abbildung pf)

{{< imgproc Anlasstypen_Benutzergruppen_in_Liste Resize "1280x" >}}
Abbildung pf: Benutzergruppen in aktualisierter Liste
{{< /imgproc >}}

## Einen neuen Anlasstypen erstellen
Einen neuen Anlasstypen erstellen Sie über den untenstehenden Button "Erstellen" (Abbildung p). In dem Feld, welches sich öffnet, tragen Sie die oben beschriebenen Daten ein. (Abbildung px)

* Stammdaten
* Buchungsanfragen 
* Benutzergruppen

{{< imgproc Anlasstypen_neu_hinzufügen Resize "1280x" >}}
Abbildung px: Neuen Anlasstyp erstellen
{{< /imgproc >}}

Speichern Sie Ihre Eingaben über den untenstehenden Button "Speichern". Die Liste aktualisiert sich automatisch und Sie sehen den gespeicherten Anlasstyp in der Liste (Abbildung py).

{{< imgproc Anlasstypen_neu_in_Liste Resize "1280x" >}}
Abbildung py: Neuer Anlasstyp in aktualisierter Liste
{{< /imgproc >}}