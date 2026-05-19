---
title: "Kalenderbereich"
linkTitle: "Kalenderbereich"
weight: 10
date: 2020-06-30
description: ''
---

Nach der Einstellung der Suchfilter wird im rechten Bereich des Fensters der Kalender aufgebaut.


Im oberen Bereich kann zwischen den verschiedenen Kalenderansichten gewählt werden. Je nach Präferenz kann zwischen Tag, Arbeitswoche, Woche oder Monat navigiert werden.


Es stehen Ihnen mehrere Anzeigeoptionen in jeder Ansicht zur Verfügung. Ausserdem können Sie sich Buchungen hervorgehoben anzeigen lassen, die z.B. einen Parkplatz oder eine Bestellung enthalten. Ausser in der Monatsansicht befindet sich in allen Kalenderansichten unten rechts eine Reihe von Icons, welche unterschiedliche Darstellungsfilter aktivieren. Dadurch werden Buchungen mit verknüpften Ressourcen mit einem entsprechenden Symbol gekennzeichnet und farblich hervorgehoben, was Ihnen eine rasche Erkennung ermöglicht.

{{< imgproc Kalender_ansicht_Toolleiste Resize "960x" >}}
Tollleiste im Kalender (Anzeige nicht in der Monatsansicht)
{{< /imgproc >}}


Das Icon ganz rechts aktiviert den Autorefresh. Die übrigen dienen als Visualisierungsfilter für den Kalender.
Fahren Sie mit dem Mauszeiger über ein Icon, öffnet sich ein Tooltip, das Sie darüber informiert, welche Buchungen durch die Aktivierung dieses Icons hervorgehoben und durch ein Symbol entsprechend der Ressourcenverknüpfung markiert werden. Folgende Filter werden unterschieden:

---
{{< bootstrap-table "table table-striped" >}}
| Feld          | Funktion      | Symbol  |
| ------------- |-------------  |-------------  |
| Glas | Buchungen mit einem Anlass werden hervorgehoben | {{< imgproc Icon_Anlass Resize "50x" >}}{{< /imgproc >}} |
| Pfeile im Kreis | Buchungen einer Serie werden hervorgehoben angezeigt| {{< imgproc Icon_Serie Resize "50x" >}}{{< /imgproc >}} |
| Teller mit Besteck | Buchungen mit einer Bestellung werden hervorgehoben angezeigt | {{< imgproc Icon_Bestellungen Resize "50x" >}}{{< /imgproc >}} |
| Viereck | Buchungen von virtuellen Räumen werden hervorgehoben angezeigt | {{< imgproc Icon_virtuelleräume Resize "50x" >}}{{< /imgproc >}} |
| Board | Buchungen mit mobilem Equipment werden hervorgehoben angezeigt | {{< imgproc Icon_mobiles_Equipment Resize "50x" >}}{{< /imgproc >}} |
| P |  Buchungen mit Parkplätzen werden hervorgehoben angezeigt | {{< imgproc Icon_Parkplätze Resize "50x" >}}{{< /imgproc >}} |
| und |  Bei gleichzeitiger Selektion mehrerer Buttons werden nur die Reservationen hervorgehoben, welche alle selektierten Kriterien erfüllen. Das bedeutet, sie gehören zu einer Serie und enthalten Bestellungen und mobiles Equipment. | {{< imgproc Icon_und Resize "50x" >}}{{< /imgproc >}} |
| oder |  Bei gleichzeitiger Selektion mehrerer Buttons werden die Reservationen hervorgehoben, welche mindestens ein selektiertes Kriterium erfüllen. Sie gehören z.B. zu einer Serie oder enthalten Bestellungen oder mobiles Equipment | {{< imgproc Icon_oder Resize "50x" >}}{{< /imgproc >}} |
{{< /bootstrap-table >}}
