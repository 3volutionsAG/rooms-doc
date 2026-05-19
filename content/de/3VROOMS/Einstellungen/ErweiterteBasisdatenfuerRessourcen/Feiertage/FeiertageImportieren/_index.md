---
title: "Feiertage importieren"
linkTitle: "Feiertage importieren"
weight: 30
description: ''
---


Sie können Daten zu Feiertagen direkt aus Ihrem System importieren. Klicken Sie dazu aim View Modus auf den untenstehenden Button _Importieren_.


Das entsprechende File mit den Feiertagen muss mittels Browser-Control ausgewählt werden und die Datei muss eine gültige Formatierung aufweisen (Siehe Datei Format).

{{< imgproc Feiertage_Importieren Resize "960x" >}}
Feiertage aus einer Datei importieren
{{< /imgproc >}}

### Sprache der importierten Datei

* Die Dropdown-Sprache beinhaltet die entsprechenden Sprachen, wovon die Benutzersprache vordefiniert ist.
* Nach Klick auf Upload werden die Feiertage als Liste zur Vorschau angezeigt (siehe Abbildung). Gespeichert werden diese erst, wenn der „Speichern“ geklickt wird

### Datei Format der importierten Datei


Da das zu importierende File jeweils nur eine Sprache beinhaltet, wird beim ersten Import (wenn noch keine Feiertage im ROOMS bestehen) die Bezeichnung für jede verfügbare Sprache (im ROOMS PRO) in der Sprache des importierten Files übernommen (z.B. in Deutsch).


Sie können nun nach und nach die Files in den anderen Sprachen importieren. Sollte beim erneuten Import z.B. mit einem Englischen-File ein weiterer Feiertag hinzugekommen sein, wird dieser für sämtliche ROOMS PRO-Sprache wieder in Englisch dargestellt.


Unterstützt werden die Dateien TXT und CSV (mittels Delimiter Untertrennung).


Es reichen die Angaben Zeit, und Bezeichnung - eine Überschriftszeile darf nicht vorhanden sein (siehe Abbildung).
Die Delimiter Komma (,) und (Semikolon) ( ; ) werden unterstützt.


Das Datum soll mindestens in den Formaten _12.04.2008_, _2008/04/12_ und _2008-04-12_ unterstützt werden.
Es spielt keine Rolle, ob das Datum und die Bezeichnung in Hochkommas abgespeichert sind oder nicht (Beispiel:
2008/12/25; Weihnachten ODER _2008/12/25_; _Weihnachten_).


Als Hauptreferenz für den Import gilt http://www.feiertagskalender.ch
Die Datei ist ROOMS Komfort anzupassen (erste Spalte = Datum, zweite Spalte = Feiertag Bezeichnung, etc.)