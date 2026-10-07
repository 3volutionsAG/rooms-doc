---
title: "Dienstleisterspezifische Kriterien"
linkTitle: "Dienstleisterspezifische Kriterien"
weight: 600
description: 'Buchungen, zu denen Bestellungen bei einem Dienstleister noch nicht freigegeben wurden oder die Menge noch nicht spezifiziert wurde.'
---
Es besteht die Möglichkeit, bestimmte Dienstleistungen zu einer Buchung hinzuzufügen, die von der verantwortlichen Person genehmigt werden müssen. Mit Hilfe der Dienstleisterspezifiscen Kriterien können Sie sich Buchungen anzeigen lassen, deren Dienstleistungen noch nicht genehmigt wurden.

{{< imgproc Listen_Buchungen_ErweiterteSuche_DienstSpezKrit_beschriftet Resize "960x" >}}
Übersicht Dienstleisterspezifische Kriterien
{{< /imgproc >}}

Folgende Tabelle erläutert die Bedeutung der Checkboxen:

{{< bootstrap-table "table table-striped" >}}
|Feld||Funkion|
|---|---|---|
|Mit nicht freigegebenen ; Bestellungen|{{< imgproc Listen_Buchungen_ErweiterteSuche_DienstSpezKrit_xfreiBest Resize "200x" >}}{{< /imgproc >}}| Um sich alle Buchungen anzeigen zu lassen, bei denen die bestellten Dienstleistungen noch nicht freigegeben wurden, aktivieren Sie diese Checkbox. |
|Dienstleistungen ; mit offener Menge|{{< imgproc Listen_Buchungen_ErweiterteSuche_DienstSpezKrit_offeneMenge Resize "200x" >}}{{< /imgproc >}}| Um sich alle Buchungen anzeigen zu lassen, bei denen die Menge/Grösse der Bestellung noch nicht festgelegt ist, aktivieren Sie diese Checkbox. |
{{< /bootstrap-table >}}

## Buchungen mit mobilem Equipment finden

Wenn Sie mobiles Equipment bereitstellen, können Sie sich eine Arbeitsliste der entsprechenden Buchungen zusammenstellen:

1. Öffnen Sie **Listen → Buchungen → Erweiterte Suche** und wählen Sie den benötigten Zeitraum sowie die weiteren Suchkriterien.
2. Aktivieren Sie unter **Dienstleisterspezifische Kriterien** die Checkbox **Nur Buchungen mit mobilem Equipment** und führen Sie die Suche aus.
3. Blenden Sie über die Spaltenauswahl die [Textspalte **Mobiles Equipment**]({{< relref "3VROOMS/Listen/BuchungenSuchen/Anzeigenbereich/SpaltenErweitert/_index.md#mobiles-equipment-als-textspalte" >}}) ein. Sie zeigt die Bezeichnungen des gebuchten mobilen Equipments.
4. Bei Bedarf [exportieren Sie die Liste als CSV-Datei]({{< relref "3VROOMS/Generell/GrundlegendeFunktionen/ListenExport/_index.md" >}}). Die eingeblendete Textspalte wird mit exportiert.

Der Filter berücksichtigt Buchungen mit zugebuchtem mobilem Equipment sowie eigenständige Buchungen von mobilem Equipment. Fixes Equipment und annullierte Equipment-Buchungen zählen nicht. Hat eine Buchung nur fixes oder nur annulliertes Equipment, wird sie durch diesen Filter nicht gefunden.

Die übrigen Suchkriterien schränken die Ergebnisse weiterhin ein. Aktivieren Sie zusätzlich **Nur Buchungen mit Catering/Services**, werden nur Buchungen angezeigt, die beide Bedingungen erfüllen.
