---
title: "Anzeigenbereich"
linkTitle: "Anzeigenbereich"
weight: 30
description: 'Im Anzeigenbereich werden die Ergebnisse Ihrer Suche nach Buchungsanfragen in Listenform ausgegeben.'
---

Das Ergebnis ist tabellarisch angeordnet. Jede Buchungsanfrage wird in je einer Zeile ausgegeben. In den Spalten finden Sie alle Informationen, die bei der Buchungsanfrage hinterlegt wurden.

{{< imgproc List_BA_Anz Resize "960x" >}}
Anzeigenbereich Suchergebnisse Buchungsanfragen
{{< /imgproc >}}

## Spaltenansicht Standard

Standardmässig sind folgende Spalten sichtbar:

{{< bootstrap-table "table table-striped" >}}
|Spalte|Symbol|Anmerkungen|
|---|---|---|
|Titel||Titel der Buchungsanfrage|
||{{< imgproc Bleistift Resize "40x" >}}{{< /imgproc >}}|Buchungsanfrage bearbeiten ; _steht immer automatisch in der zweiten Spalte_|
|Anlasstyp||Anlasstypen sind kundenspezifisch definiert ; _z.B. Kundenmeeting oder Konferenz_|
|Status||Gibt den Bearbeitungsstand an|
|Von||Startdatum|
|Bis||Enddatum|
|Organisator:in||Person, welche die Buchung organisiert|
|Ersteller:in||Person, welche die Buchungsanfrage erstellte|
|Anlass vorhanden?||Gibt an, ob die Buchungsanfrage zu einem bestehenden Anlass gehört|
{{< /bootstrap-table >}}
---

## Spaltenansicht Erweitert


Über das Listensymbol können Sie weitere Kategorien der Liste hinzufügen, sortieren oder  herausnehmen.
Die Auswahl wird automatisch gespeichert und bei der nächsten Suche übernommen.

{{< bootstrap-table "table table-striped" >}}
|Spalte|Anmerkungen|
|---|---|
|Bemerkungen|Bei der Buchungsanfrage eingetragene Bemerkungen|
|Standort|Standort, welcher angefragt wurde|
|Priorität|Einstufung der Buchungsanfragen zur Bearbeitung, z.B. 1 = hoch, 2 = mittel, 3 = gering|
|Anzahl Teilnehmende|Gibt die Anzahl der erwarteten Teilnehmenden an|
|Verantwortliche:r|Person, welche für die Buchungsanfrage verantwortlich ist|
{{< /bootstrap-table >}}
---

## Schaltflächen


Am unteren Rand des Anzeigenbereichs finden Sie die Schaltfläche _Löschen_. Um eine Buchungsanfrage zu löschen, markieren Sie diese über die Checkbox am Zeilenanfang und klicken dann auf _Löschen_.

{{< imgproc List_BA_del_b Resize "960x" >}}
Löschen einer Buchungsanfrage
{{< /imgproc >}}

In dem erscheinenden Dialogfenster bestätigen Sie nun den Löschvorgang.

{{< imgproc List_BA_del_best Resize "960x" >}}
Dialogfenster zur Bestätigung des Löschvorgangs
{{< /imgproc >}}
