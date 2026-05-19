---
title: "Oberfläche"
linkTitle: "Oberfläche"
weight: 5
description: 'Fügen Sie in den Einstellungen zur Oberfläche Themenlisten hinzu, bearbeiten bestehende oder löschen Elemente hieraus. Die Erfassung und Verwaltung von Kundenspezifischen Layout Anpassungen. Änderungen von CSS und Bilddateien.'
---

Im linken Bereich sehen Sie das Sidepanel mit den Filterfunktionen.
Im rechten Feld sehen Sie die Themenliste. Sind keine Themen gespeichert, ist die Liste leer.
Sie können Themen aus der Liste löschen, indem Sie die Checkbox neben dem Listenelement aktivieren und auf den Button _Entfernen_ klicken.

{{< imgproc Oberfläche_bearbeiten Resize "960x" >}}
Themenlisten auf der Oberfläche bearbeiten und durchsuchen
{{< /imgproc >}}

**Hinweis zum Löschen**:
* Mehrfachselektionen möglich
* Klick auf Löschen
* Warnhinweis
* Bestätigungsmeldung im Actionpanel (inkl. Anzahl der gelöschten Einträge) ODER Fehlermeldung im Actionpanel

### Oberfläche durchsuchen


Über das linke Sidepanel durchsuchen Sie die Themenlisten nach dem _File Pfad_.

## Oberfläche: Themenlisten bearbeiten und hinzufügen


Die Elemente aus der Themenliste bearbeiten Sie, indem Sie auf das Stift Icon klicken. Indem sich öffnenden Feld bearbeiten Sie die Stammdaten des Listen Elements.


Fügen Sie neue Dateien hinzu, indem Sie auf den Button _Hinzufügen_ klicken. In dem sich öffnendem Feld bearbeiten Sie ebenfalls die Stammdaten.


### Oberfläche Stammdaten bearbeiten


Folgende Daten bearbeiten Sie in den Stammdaten:

{{< bootstrap-table "table table-striped" >}}
| Feld         | Funktion         |
| ------------- |-------------  |
| File Pfad    |  File Pfad eintragen. Exakter Ablagepfad der zu übersteuernden CSS oder Bilddatei. Pfad ab (nach)  _Content_ erfassen. Ohne Slash (/) starten. Gross-Kleinschreibung irrelevant |
| Datei/Verzeichnis-Browser    | Wählen Sie eine Datei mit maximal 5MB aus. File Daten. Über Browse Button wird die zu ersetzende Datei selektiert. Über Upload Button wird die Datei auf den Server geladen. Der Upload ist begrenzt. Begrenzung wird global festgelegt. Der Upload wird visualisiert. Die Upload Datei wird nicht überprüft, ob es sich um eine gültige Datei handelt. |
{{< /bootstrap-table >}}

Unterstützte Formate:

* CSS
* HTML
* JS
* JPG, JPEG, PNG, GIF
* ZIP (beinhaltet alle Themenfiles)

{{< imgproc Oberfläche_Stammdaten Resize "960x" >}}
Themenlisten auf der Oberfläche bearbeiten und durchsuchen
{{< /imgproc >}}



