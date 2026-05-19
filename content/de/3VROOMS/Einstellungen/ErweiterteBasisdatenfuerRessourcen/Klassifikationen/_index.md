---
title: "Klassifikationen"
linkTitle: "Klassifikationen"
weight: 2
description: 'Im Bereich Klassifikationen erstellen und bearbeiten Sie Klassifikationstypen.'
---
## Ansicht


Im linken Bereich sehen Sie das Sidepanel mit Filterfunktionen. Klicken Sie auf den Button "Anzeigen" werden Ihnen alle Klassifikationen angezeigt.


Im rechten Feld sehen Sie die Klassifikationstypliste. Die Baumstruktur ist zweistufig. Je nachdem an welcher Stelle im Baum navigiert wird, kann auf den jeweiligen Bereichen mehr oder weniger Aktionen durchgeführt (auch auf Grund der Anzahl der angezeigten Icons ersichtlich).

Es wird zwischen zwei Strukturen unterschieden:

1. Übergeordneter Klassifikationstyp
2. Untergeordnete Buchungsklassifikation

{{< imgproc Klassifikationen_Ansicht Resize "960x" >}}
Ansicht im Reiter Klassifikationen
{{< /imgproc >}}

### Bedeutung Icons


Klicken Sie auf den Namen eines Klassifikationstypen im Baum, erscheint neben dem Namen eine Toolleiste mit Symbolen. Mithilfe dieser Symbole können Sie folgende Aktionen durchführen:

* Plus Zeichen: neue untergeordnete Buchungsklassifikation erstellen. Das Plus Zeichen sehen Sie nur bei bei den übergeordneten Klassifikationstypen
* Auge: Sehen Sie sich die erfassten Stammdaten und die Historie der Klassifikationen an
* Stift: Bearbeiten Sie eine bestehende Klassifikation
* Papierkorb: Löschen Sie eine Klassifikation

{{< imgproc Klassifikationen_Daten_ansehen Resize "960x" >}}
Ansehen der gespeicherten Daten einer Klassifikation über das Icon _Auge_
{{< /imgproc >}}

**Hinweis zum Löschen einer Klassifikation**:


Klicken Sie auf Löschen, erscheint ein Warnhinweis. Bei erfolgreicher Löschung erscheint eine Bestätigungsmeldung im Actionpanel oben rechts. Die Baumstruktur aktualisiert sich automatisch.
Löschregeln:
Das Löschen eines Klassikfikationstyps ist nur möglich, wenn keine Ressource mehr verknüpft und keine angehängten Klassifikationen mehr vorhanden sind. Ansonsten sehen Sie eine Warnmeldung im Actionpanel.
Das Löschen  einer Klassifikation ist nur möglich, wenn keine Verbindung mehr zu einer Buchung vorhanden ist. Ansonsten sehen Sie eine Warnmeldung im Actionpanel.

## Übergeordneten Klassifikationstyp erstellen


Einen übergeorneten Klassifikationstypen erstellen Sie über den untenstehenden Button _Klassifikationstyp erstellen_.
In dem Feld, welches sich öffnet legen Sie die Stammdaten, Ressourcen und Gruppen für den jeweiligen Klassifikationstyp fest.

Die geänderten oder neu eingetragenen Daten speichern Sie über den untenstehenden Button _Speichern_.


Der Baum in der Klassifikationsliste aktualisiert sich automatisch und Sie sehen Ihren neuen Klassifikationstyp in der Übersicht.

{{< imgproc Klassifikationen_neuer_Typ_in_Baum Resize "960x" >}}
Aktualisierter Baum mit neuem Klassifikationstyp
{{< /imgproc >}}

### Stammdaten des Klassifikationstypes bearbeiten


Tragen Sie die Stammdaten des neuen Klassifikationstyps ein.

{{< imgproc Klassifikationen_neuen_Klassifikationtyp_Stammdaten Resize "960x" >}}
Stammdaten eines neuen Klassifikationstyps eintragen
{{< /imgproc >}}


Die folgenden Stammdaten können Sie ändern und bearbeiten:

{{< bootstrap-table "table table-striped" >}}
| Feld         | Funktion         |
| ------------- |-------------  |
| Bezeichnung        | Die Bezeichnung des Klassifikationstypen festlegen. DIe Erfassung muss Mehrsprachig erfolgen. |
| Beschreibung       | Die Funktion des Klassifikationstypen festlegen |
| Code       |  |
| Ressourcenart   | Die Ressourcenart über _drop-down_ auswählen. Es können mehrere Ressourcenarten (Sitzungszimmer, Equipment, etc.) ausgewählt werden, womit definiert wird, bei welchen Ressourcenarten der Buchungsklassifikationstyp im Reservationsdetail zur Verfügung steht. Es sind nur diejenigen Ressourcenarten wählbar, auf denen das entsprechende Funktionsrecht vorhanden ist.  |
| Mehrfachauswahl erlaubt  | Auswählen, wenn dieses zutreffend ist. Wird im Kapitel Buchen dargestellt als Multiselektor für Mehrfachselektion oder als Dropdown zur Einzelselektion.  |
| Mussfeld  |      |
| In Listen sichtbar    | Auswählen, wenn der Klassifikationstyp in Listen erscheinen soll. Die Checkbox _sichtbar in Listen_ definiert, ob der Klassifikationstyp auch als Filterkriterium in den Listen sichtbar ist  (Sidepanel)  |
| In Outlook sichtbar   | Auswählen, wenn der Klassifikationstyp in Outlook erscheinen soll  |
| Anlasstyp   | Multiselektionsmöglichkeit für Anlasstyp. Werden ein oder mehrere Anlasstypen selektiert, werden die Buchungsklassifikationen bei Auswahl des entsprechenden Anlasstyps auch zur Verfügung gestellt. Mehr zu  [Anlasstypen](/3vrooms/einstellungen/stammdatenfueranlaesse/anlasstypen/) |
{{< /bootstrap-table >}}

### Ressourcen des Klassifikationstypes bearbeiten


Legen Sie die zugehörige Ressource des Klassifikationstypes fest, indem Sie auf den untenstehenden Button _Ressource hinzufügen_ klicken. Es erscheinen Ihre eingetragenen Ressourcen in Listenform, die Sie über das Aktivieren der Checkbox auswählen.


Über den Button _hinzufügen_ fügen Sie die ausgewählten Ressourcen zur Liste hinzu.

{{< imgproc Klassifikationen_neuen_Klassifikationtyp_Ressource Resize "960x" >}}
Ressourcen zum Klassifikationstypen hinzufügen
{{< /imgproc >}}


Die Liste aktualisiert sich automatisch und Sie sehen die Ressourcen. Die hinzugefügten Ressourcen können Sie wieder bearbeiten über das Stift Icon oder löschen.

{{< imgproc Klassifikationen_Ressourcen_in_Liste Resize "960x" >}}
Hinzugefügte Ressourcen in der Liste
{{< /imgproc >}}

### Gruppe des Klassifikationstypes bearbeiten


Legen Sie die zugehörige Gruppe des Klassifikationstypes fest, indem Sie auf den untenstehenden Button "Gruppe hinzufügen" klicken. Es öffnet sich ein Feld mit den zur Verfügung stehenden Gruppen. Wählen Sie eine oder mehrere Gruppen über die Checkbox aus.

{{< imgproc Klassifikationen_neuen_Klassifikationtyp_Gruppe Resize "960x" >}}
Gruppen des Klassifikationstypen bearbeiten
{{< /imgproc >}}


Klicken Sie auf den untenstehenden Button _hinzufügen_ und die Liste aktualisiert sich automatisch. Sie sehen die ausgewählten Gruppen nun in der Liste. Sie können die Gruppen dort auch wieder löschen oder bearbeiten über das Stift Icon.

{{< imgproc Klassifikationen_Gruppe_in_Liste Resize "960x" >}}
Hinzugefügte Gruppe in der Liste
{{< /imgproc >}}

## Untergeordnete Buchungsklassifikation erstellen


Klicken Sie auf das _Plus Zeichen_ im übergeordnetem Klassifikationstyp, können Sie eine untergeordnete Buchungsklassifikation erstellen. Es öffnet sich ein Fenster, in welchem Sie die Stammdaten bearbeiten können.

Folgende Stammdaten können Sie eintragen:

{{< bootstrap-table "table table-striped" >}}
| Feld         | Funktion         |
| ------------- |-------------  |
| Bezeichnung   | Die Bezeichnung des Klassifikationstypen festlegen. DIe Erfassung muss Mehrsprachig erfolgen. |
| Sortierung  | Die Reihenfolge der Buchungsklassifikationen innerhalb eines Klassifkationstyps wird durch das Feld _Sortierung_ bestimmt (Dargestellt sowohl in der Baumstruktur, wie auch im Sidepanel und Detailreservation in Form einer Dropdown). |
| Farbe     | Farben können selektiert werden. Diese wird dann im Kalender visualisiert.  |
{{< /bootstrap-table >}}


**Hinweis zur Farbauswahl**: Die Farbe speichern Sie über das Farbtopfzeichen unten rechts.

{{< imgproc Klassifikationen_neue_Buchungsklassifikation Resize "960x" >}}
Neue Buchungsklassifikation erstellen
{{< /imgproc >}}


Speichern Sie die neue Buchungsklassifikation mit dem Button _Speichern_. Der Baum aktualisiert sich automatisch.

{{< imgproc Klassifikationen_neue_buchungsklassifikation_im_Baum Resize "960x" >}}
Neue Buchungsklassifikation im Baum
{{< /imgproc >}}
