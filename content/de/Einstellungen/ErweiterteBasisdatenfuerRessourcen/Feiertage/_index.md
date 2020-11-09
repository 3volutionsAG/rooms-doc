---
title: "Feiertage"
linkTitle: "Feiertage"
weight: 4
description: >
  In diesem Bereich legen Sie die für Sie geltenden Feiertage fest und erstellen Feiertagslisten. Sie können Feiertage erstellen, bearbeiten und löschen.
---
## Ansicht: Feiertage
Im linken Sidepanel finden Sie die Filterkriterien, mit denen Sie nach einem Feiertag suchen können. Hierbei können Sie nach der Bezeichnung eines Feiertags suchen. 

Im rechten Feld sehen Sie die Feiertagsliste. Mittel Scroll Down finden Sie in alphabetischer Reihenfolge alle eingespeicherten Feiertage. (Abbildung f)

Aktivieren Sie die Checkbox neben einem Listenelement, wählen Sie dieses aus und können es löschen.

{{< imgproc Feiertage_Ansicht Resize "1280x" >}}
Abbildung f: Ansicht der Feiertage in der Feiertagsliste
{{< /imgproc >}}

Speichern Sie alle Ihre gewünschten Änderungen über den Button "Speichern". Haben Sie einen Feiertag bearbeitet oder neu erstellt, aktualisiert sich die Feiertagsliste automatisch.

### Daten einsehen
Klicken Sie auf den Namen eines Feiertags in der Liste, können Sie die gespeicherten Stammdaten und die Historie des Feiertags einsehen. (Abbildung fa)

{{< imgproc Feiertage_Daten_einsehen Resize "1280x" >}}
Abbildung fa: Stammdaten und Historie der Feiertage ansehen
{{< /imgproc >}}

## Feiertage bearbeiten
Zum Bearbeiten schon bestehenden Feiertags klicken Sie auf das Stift Icon neben dem jeweiligen Feiertag in der Liste (Abbildung f).

Es öffnet sich ein neues Fenster. In diesem bearbeiten Sie die Bezeichnung des Feiertags (Abbildung fi).

{{< imgproc Feiertag_Feier Resize "1280x" >}}
Abbildung fi: Bezeichnung des Feiertags festlegen oder ändern
{{< /imgproc >}}

Im nächsten Reiter "Feiertag" legen Sie den Beginn und das Ende des Feiertags fest. Sie sehen eine Liste mit schon eingetragenen Daten für die nächsten Jahre (Abbildung fx). Möchten Sie diese Daten löschen, aktivieren Sie die Checkbox neben dem Datum und klicken Sie auf den untenstehenden Button "Entfernen". 

Wollen Sie ein weiteres Datum hinzufügen, klicken Sie auf den Button "Hinzufügen". Es öffnet sich ein neues Feld in welchem Sie die Daten auswählen (Abbildung fd).

{{< imgproc Feiertage_Beginn_Ende Resize "1280x" >}}
Abbildung fx: Den Beginn und das Ende des Feiertags festlegen
{{< /imgproc >}}

Speichern Sie die jeweiligen Änderungen über den untenstehenden Button "Speichern". Die Liste aktualisiert sich automatisch und Sie gelangen wieder zur Startübersicht.

## Feiertag erstellen
Um einen neuen Feiertag zu erstellen oder hinzuzufügen, klicken Sie auf den untenstehenden Button "Erstellen" (Abbildung f). In dem sich öffnendem Feld wählen Sie die Bezeichnung des Feiertags und legen den Beginn und das Ende des Tages fest.

{{< imgproc Feiertag_erstellen_Feier Resize "1280x" >}}
Abbildung fb: Einen neuen Feiertag erstellen und Bezeichnung festlegen
{{< /imgproc >}}

Im nächsten Reiter finden Sie eine noch leere Liste mit Beginn und End Daten des Feiertags. Über den Button "Hinzufügen" fügen Sie neue Daten hinzu. Es öffnet sich dazu das Fenster aus Abbildung fd. 

{{< imgproc Feiertag_erstellen_Beginn_Ende Resize "1280x" >}}
Abbildung fc: Den Beginn und das Ende eines Feiertags hinzufügen
{{< /imgproc >}}

Speichern Sie Ihre Eingabe über den untenstehenden Button "speichern".

{{< imgproc Feiertage_Beginn_Ende_speichern Resize "1280x" >}}
Abbildung fd: Das Datum und die Zeit des Feiertags wählen und hinzufügen
{{< /imgproc >}}

Folgende Daten legen Sie fest:
* Datumpicker: Standardwert des heutigen Datums

* Zeitselektor: Von: Standardwert: 00:00, Bis: Standardwert: 23:59. Diese Start- und Endzeiten entsprechen einem Tag.

Die Liste aktualisiert sich automatisch und Sie sehen Ihren neu angelegten Feiertag in der Liste. (Abbildung fg)

{{< imgproc Feiertag_neu_in_Liste Resize "1280x" >}}
Abbildung fg: Der neue Feiertag in der Feiertagsliste
{{< /imgproc >}}

## Feiertage Importieren
Sie können Daten zu Feiertagen direkt aus Ihrem System importieren. Klicken SIe dazu aim View Modus auf den untenstehenden Button "Importieren". 

Das entsprechende File mit den Feiertagen muss mittels Browser-Control ausgewählt werden und die Datei muss über eine gültige Formatierung aufweisen (Siehe Datei Format).

{{< imgproc Feiertage_Importieren Resize "1280x" >}}
Abbildung fe: Feiertage aus einer Datei importieren
{{< /imgproc >}}

### Sprache der importierten Datei
* Die Dropdown-Sprache beinhaltet die entsprechenden Sprachen, wovon die Benutzersprache vordefiniert ist
Upload

* Nach Klick auf Upload werden die Feiertage als Liste zur Vorschau angezeigt (siehe Abbildung). Gespeichert werden diese erst, wenn der „Speichern“ geklickt wird

### Datei Format der importierten Datei
Da das zu importierende File jeweils nur eine Sprache beinhaltet, wird beim ersten Import (wenn noch keine Feiertage im ROOMS bestehen) die Bezeichnung für jede verfügbare Sprache (im ROOMS PRO) in der Sprache des importierten Files übernommen (z.B. in Deutsch).

Sie können nun nach und nach die Files in den anderen Sprachen importieren. Sollte beim erneuten Import z.B. mit einem Englischen-File ein weiterer Feiertag hinzugekommen sein, wird dieser für sämtliche ROOMS PRO-Sprache wieder in Englisch dargestellt.

Unterstützt werden die Dateien TXT und CSV werden (mittels Delimiter Untertrennung).

Es reichen die Angaben Zeit, und Bezeichnung - eine Überschriftszeile darf nicht vorhanden sein (siehe Abbildung)
Die Delimiter Komma (,) und (Semikolon) ( ; ) werden unterstützt.

Das Datum soll mindestens in den Formaten „12.04.2008“, „2008/04/12“ und „2008-04-12“ unterstützt werden.
Es spielt keine Rolle, ob das Datum und die Bezeichnung in Hochkommas abgespeichert sind oder nicht (Beispiel:
2008/12/25;Weihnachten ODER „2008/12/25“;“Weihnachten“).

Als Hauptreferenz für den Import gilt http://www.feiertagskalender.ch/ (siehe Abbildung).
Die Datei ist ROOMS Komfort anzupassen (erste Spalte = Datum, zweite Spalte = Feiertag Bezeichnung, etc.)