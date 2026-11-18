---
title: "Dokumente"
linkTitle: "Dokumente"
weight: 5
description: 'In diesem Bereich erstellen und fügen Sie Dokumente hinzu.'
---
## Ansicht Dokumente


Im rechten Feld sehen Sie die Liste der gespeicherten Vorlagen. Wenn keine gespeichert wurden, ist die Liste leer.


Im linken Menü finden Sie unter der Kategorie _Dokumente_ eine Suchfunktion, mit deren Hilfe Sie nach einem Dokument suchen können. Sie können hierbei nach folgenden Kriterien suchen:

* Bezeichnung

## Dokumente erstellen


Die Dokumente erstellen Sie, indem Sie auf den untenstehenden Button "Erstellen" klicken. In dem sich öffnendem Feld legen Sie eine Vorlage fest.
In der Vorlage ändern Sie die folgenden Daten:

* Bezeichnung
* Sprache
* Typ
* Format
* Selektion für die Mail
* Publiziert in


Ausserdem wählen Sie ein Dokument mit der maximalen Dateigrösse 5MB aus. Die geänderten oder neu eingetragenen Daten speichern Sie über den untenstehenden Button _Speichern_.


{{< imgproc Dokumente_neu_eintragen Resize "960x" >}}
Neues Dokument eintragen
{{< /imgproc >}}


Wenn Sie ein Dokument auswählen, öffnen sich Ihr Explorer und Sie können die gewünschte Datei hochladen.

### Daten der Dokumentenvorlage bearbeiten

{{< bootstrap-table "table table-striped" >}}
| Feld         | Funktion         |
| ------------- |-------------  |
| Bezeichnung          | Die Bezeichnung des Dokuments festlegen. Die Bezeichnung wird in der Benutzersprache des angemeldeten Benutzers geladen. Die Vorlage muss in allen verfügbaren Sprachen bezeichnet werden |
| Sprache   | Die Sprache über _drop-down_ auswählen     |
| Typ  | Dokumententyp über  _drop-down_ auswählen oder selber festlegen. Ein Datenschema muss gewählt werden. Die verfügbaren Typen werden durch die Entwicklung erstellt, implementiert und zur Verfügung gestellt. |
| Export-Format | Legt die Ausgabe als Word-Datei (`.docx`) oder PDF fest. Die Vorselektion für Download und E-Mail wird separat eingestellt. |
| Selektion für Download |  Selektion für den Download festlegen mittels "drop-down". Download steht immer zur Verfügung.   |
| Selektion für Mail   |   Selektion für die Mail mittels _drop-down_ festlegen (Keine, Vorselektiert, Pflicht). Keine => Checkbox im Reservationsprozess ist nicht selektiert. Vorselektiert => Checkbox im Reservationsprozess ist vorselektiert Pflicht => Checkbox im Reservationsprozess ist vorselektiert und nicht änderbar. Download steht immer zur Verfügung.  |
| Publizieren in     |   Auswahl, in welchen Medien das Dokuemnt publiziert werden soll ( Alle, Reports, Reservation-Summary, Anlass)   |
| Vorlage   |  Eine Vorlage kann selektiert (Browse) werden und mittels Upload auf den Server geladen werden. Nur Word Dokumente zulässig (*.docx)   |
{{< /bootstrap-table >}}

### Ausgabe von Einzeldokumenten

Bei der gemeinsamen Ausgabe für **mehrere ausgewählte Datensätze** bestimmt der globale Parameter **Bulk print to single document** (ID 111) die Ausgabe von Einzeldokument-Vorlagen:

- **true:** Die Einzeldokumente werden zu einer PDF-Datei zusammengefasst. Das gilt auch, wenn in der Vorlage Word als Export-Format gewählt ist.
- **false:** Die Einzeldokumente werden im Export-Format der Vorlage erstellt und gemeinsam als ZIP-Datei bereitgestellt.

Diese Regel betrifft die Sammelausgabe von Einzeldokument-Vorlagen. Sie bedeutet nicht, dass jede Report-Vorlage oder jeder gruppierte Bericht als zusammengefasste PDF-Datei ausgegeben wird.

Die Administration verwaltet den Parameter unter [Globale Parameter]({{< relref "3VROOMS/Einstellungen/System/GlobaleParameter/_index.md" >}}). Prüfen Sie nach Änderungen an einer Word-Vorlage auch das erzeugte PDF mit den tatsächlich verwendeten Schriftarten und Layouts. Die Word-Ansicht allein bestätigt das PDF-Ergebnis nicht.
