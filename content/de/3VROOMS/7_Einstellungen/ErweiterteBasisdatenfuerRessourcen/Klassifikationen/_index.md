---
title: "Klassifikationen"
linkTitle: "Klassifikationen"
weight: 2
description: >
  <p style="text-align: justify"> Im Bereich Klassifikationen erstellen und bearbeiten Sie Klassifikationstypen.   </p>
 


---
## Ansicht

<p style="text-align: justify">
Im linken Bereich sehen Sie das Sidepanel mit Filterfunktionen. Klicken Sie auf den Button "Anzeigen" werden Ihnen alle Klassifikationen angezeigt. </p>

<p style="text-align: justify">
Im rechten Feld sehen Sie die Klassifikationstypliste. Die Baumstruktur ist zweistufig. Je nachdem an welcher Stelle im Baum navigiert wird, kann auf den jeweiligen Bereichen mehr oder weniger Aktionen durchgeführt (auch auf Grund der Anzahl der angezeigten Icons ersichtlich). </p>

Es wird zwischen zwei Strukturen unterschieden:

1. Übergeordneter Klassifikationstyp 
2. Untergeordnete Buchungsklassifikation

{{< imgproc Klassifikationen_Ansicht Resize "960x" >}}
Ansicht im Reiter Klassifikationen
{{< /imgproc >}}

### Bedeutung Icons 

<p style="text-align: justify">
Klicken Sie auf den Namen eines Klassifikationstypen im Baum, erscheint neben dem Namen eine Toolleiste mit Symbolen. Mithilfe dieser Symbole können Sie folgende Aktionen durchführen: </p>

* Plus Zeichen: neue untergeordnete Buchungsklassifikation erstellen. Das Plus Zeichen sehen Sie nur bei bei den übergeordneten Klassifikationstypen
* Auge: Sehen Sie sich die erfassten Stammdaten und die Historie der Klassifikationen an
* Stift: Bearbeiten Sie eine bestehende Klassifikation
* Papierkorb: Löschen Sie eine Klassifikation

{{< imgproc Klassifikationen_Daten_ansehen Resize "960x" >}}
Ansehen der gespeicherten Daten einer Klassifikation über das Icon _Auge_
{{< /imgproc >}}

**Hinweis zum Löschen einer Klassifikation**:

<p style="text-align: justify">
Klicken Sie auf Löschen, erscheint ein Warnhinweis. Bei erfolgreicher Löschung erscheint eine Bestätigungsmeldung im Actionpanel oben rechts. Die Baumstruktur aktualisiert sich automatisch.</br>
Löschregeln:</br>
Das Löschen eines Klassikfikationstyps ist nur möglich, wenn keine Ressource mehr verknüpft und keine angehängten Klassifikationen mehr vorhanden sind. Ansonsten sehen Sie eine Warnmeldung im Actionpanel. </br>
Das Löschen  einer Klassifikation ist nur möglich, wenn keine Verbindung mehr zu einer Buchung vorhanden ist. Ansonsten sehen Sie eine Warnmeldung im Actionpanel. </p>

## Übergeordneten Klassifikationstyp erstellen 

<p style="text-align: justify">
Einen übergeorneten Klassifikationstypen erstellen Sie über den untenstehenden Button <i>Klassifikationstyp erstellen</i>. </br>
In dem Feld, welches sich öffnet legen Sie die Stammdaten, Ressourcen und Gruppen für den jeweiligen Klassifikationstyp fest. </p>

Die geänderten oder neu eingetragenen Daten speichern Sie über den untenstehenden Button <i>Speichern</i>.

<p style="text-align: justify">
Der Baum in der Klassifikationsliste aktualisiert sich automatisch und Sie sehen Ihren neuen Klassifikationstyp in der Übersicht. </p>

{{< imgproc Klassifikationen_neuer_Typ_in_Baum Resize "960x" >}}
Aktualisierter Baum mit neuem Klassifikationstyp
{{< /imgproc >}}

### Stammdaten des Klassifikationstypes bearbeiten

<p style="text-align: justify">
Tragen Sie die Stammdaten des neuen Klassifikationstyps ein. </p>

{{< imgproc Klassifikationen_neuen_Klassifikationtyp_Stammdaten Resize "960x" >}}
Stammdaten eines neuen Klassifikationstyps eintragen
{{< /imgproc >}}

<p style="text-align: justify">
Die folgenden Stammdaten können Sie ändern und bearbeiten: </p>

| Feld         | Funktion         | 
| ------------- |-------------  | 
| Bezeichnung        |<p style="text-align: justify"> Die Bezeichnung des Klassifikationstypen festlegen. DIe Erfassung muss Mehrsprachig erfolgen. </p>| 
| Beschreibung       |<p style="text-align: justify"> Die Funktion des Klassifikationstypen festlegen </p>|
| Code       |  |
| Ressourcenart   |<p style="text-align: justify"> Die Ressourcenart über _drop-down_ auswählen. Es können mehrere Ressourcenarten (Sitzungszimmer, Equipment, etc.) ausgewählt werden, womit definiert wird, bei welchen Ressourcenarten der Buchungsklassifikationstyp im Reservationsdetail zur Verfügung steht. Es sind nur diejenigen Ressourcenarten wählbar, auf denen das entsprechende Funktionsrecht vorhanden ist. </p> |  
| Mehrfachauswahl erlaubt  |<p style="text-align: justify"> Auswählen, wenn dieses zutreffend ist. Wird im Kapitel Buchen dargestellt als Multiselektor für Mehrfachselektion oder als Dropdown zur Einzelselektion. </p> |  
| Mussfeld  |      |  
| In Listen sichtbar    | <p style="text-align: justify">Auswählen, wenn der Klassifikationstyp in Listen erscheinen soll. Die Checkbox _sichtbar in Listen_ definiert, ob der Klassifikationstyp auch als Filterkriterium in den Listen sichtbar ist  (Sidepanel) </p> |  
| In Outlook sichtbar   |<p style="text-align: justify"> Auswählen, wenn der Klassifikationstyp in Outlook erscheinen soll </p> |  
| Anlasstyp   |<p style="text-align: justify"> Multiselektionsmöglichkeit für Anlasstyp. Werden ein oder mehrere Anlasstypen selektiert, werden die Buchungsklassifikationen bei Auswahl des entsprechenden Anlasstyps auch zur Verfügung gestellt. Mehr zu  [Anlasstypen](/einstellungen/stammdatenfueranlaesse/anlasstypen/) </p>| 

### Ressourcen des Klassifikationstypes bearbeiten

<p style="text-align: justify">
Legen Sie die zugehörige Ressource des Klassifikationstypes fest, indem Sie auf den untenstehenden Button <i>Ressource hinzufügen</i> klicken. Es erscheinen Ihre eingetragenen Ressourcen in Listenform, die Sie über das Aktivieren der Checkbox auswählen. </p>

<p style="text-align: justify">
Über den Button <i>hinzufügen</i> fügen Sie die ausgewählten Ressourcen zur Liste hinzu. </p>

{{< imgproc Klassifikationen_neuen_Klassifikationtyp_Ressource Resize "960x" >}}
Ressourcen zum Klassifikationstypen hinzufügen
{{< /imgproc >}}

<p style="text-align: justify">
Die Liste aktualisiert sich automatisch und Sie sehen die Ressourcen. Die hinzugefügten Ressourcen können Sie wieder bearbeiten über das Stift Icon oder löschen. </p>

{{< imgproc Klassifikationen_Ressourcen_in_Liste Resize "960x" >}}
Hinzugefügte Ressourcen in der Liste 
{{< /imgproc >}}

### Gruppe des Klassifikationstypes bearbeiten

<p style="text-align: justify">
Legen Sie die zugehörige Gruppe des Klassifikationstypes fest, indem Sie auf den untenstehenden Button "Gruppe hinzufügen" klicken. Es öffnet sich ein Feld mit den zur Verfügung stehenden Gruppen. Wählen Sie eine oder mehrere Gruppen über die Checkbox aus. </p>

{{< imgproc Klassifikationen_neuen_Klassifikationtyp_Gruppe Resize "960x" >}}
Gruppen des Klassifikationstypen bearbeiten
{{< /imgproc >}}

<p style="text-align: justify">
Klicken Sie auf den untenstehenden Button <i>hinzufügen</i> und die Liste aktualisiert sich automatisch. Sie sehen die ausgewählten Gruppen nun in der Liste. Sie können die Gruppen dort auch wieder löschen oder bearbeiten über das Stift Icon. </p>

{{< imgproc Klassifikationen_Gruppe_in_Liste Resize "960x" >}}
Hinzugefügte Gruppe in der Liste 
{{< /imgproc >}}

## Untergeordnete Buchungsklassifikation erstellen

<p style="text-align: justify">
Klicken Sie auf das <i>Plus Zeichen</i> im übergeordnetem Klassifikationstyp, können Sie eine untergeordnete Buchungsklassifikation erstellen. Es öffnet sich ein Fenster, in welchem Sie die Stammdaten bearbeiten können. </p>

Folgende Stammdaten können Sie eintragen: 

| Feld         | Funktion         | 
| ------------- |-------------  | 
| Bezeichnung   |<p style="text-align: justify"> Die Bezeichnung des Klassifikationstypen festlegen. DIe Erfassung muss Mehrsprachig erfolgen.</p> | 
| Sortierung  |<p style="text-align: justify"> Die Reihenfolge der Buchungsklassifikationen innerhalb eines Klassifkationstyps wird durch das Feld _Sortierung_ bestimmt (Dargestellt sowohl in der Baumstruktur, wie auch im Sidepanel und Detailreservation in Form einer Dropdown). </p>|
| Farbe     |<p style="text-align: justify"> Farben können selektiert werden. Diese wird dann im Kalender visualisiert.  </p>|

<p style="text-align: justify">
**Hinweis zur Farbauswahl**: Die Farbe speichern Sie über das Farbtopfzeichen unten rechts. </p>

{{< imgproc Klassifikationen_neue_Buchungsklassifikation Resize "960x" >}}
Neue Buchungsklassifikation erstellen 
{{< /imgproc >}}

<p style="text-align: justify">
Speichern Sie die neue Buchungsklassifikation mit dem Button <i>Speichern</i>. Der Baum aktualisiert sich automatisch. </p>

{{< imgproc Klassifikationen_neue_buchungsklassifikation_im_Baum Resize "960x" >}}
Neue Buchungsklassifikation im Baum 
{{< /imgproc >}}
