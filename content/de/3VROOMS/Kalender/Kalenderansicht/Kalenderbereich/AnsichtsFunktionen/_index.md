---
title: "Ansischtsfunktionen"
linkTitle: "Ansichtsfunktionen"
weight: 100
date: 2020-06-30
description: ''
---

Sie haben die Möglichkeit mit mehreren Icons die Ansicht Ihres Kalenders zu verändern. Folgende Funktonen stehen Ihnen dabei zur Verfügung:

---
{{< bootstrap-table "table table-striped" >}}
| Feld | Funktion | Symbol  |
| ------------- |-------------  |-------------  |
| Pfeile | Wechseln Sie den Tag/Woche/Monat hin und her | {{< imgproc Icon_Tag_wechseln Resize "50x" >}}{{< /imgproc >}} |
|Slider |Zoomen Sie im Kalender heraus oder ein | {{< imgproc Icon_Slider_vergrössern Resize "50x" >}}{{< /imgproc >}} |
| Fadenkreuz | Bringen Sie die Kalenderansicht wieder auf 100% | {{< imgproc Icon_100_prozent Resize "50x" >}}{{< /imgproc >}} |
| Quadrat mit Pfeil | Lassen Sie sich mehrere Listenelemente komplett anzeigen  | {{< imgproc Icon_Liste_verkleinern Resize "50x" >}}{{< /imgproc >}} |
| Kalender | Ändern Sie das Datum des gewünschten Tages | {{< imgproc Icon_datumspicker Resize "50x" >}}{{< /imgproc >}} |
| Person | Lassen Sie sich die Belegung für einzelne Personen anzeigen | {{< imgproc Icon_Personen_anzeigen Resize "50x" >}}{{< /imgproc >}} |
{{< /bootstrap-table >}}
---


Mit dem Regler oben in der Mitte der Kalenderansichten zoomen Sie in den Kalender hinein und hinaus.
Befinden Sie sich in der Tagesansicht, wird in die Stunden gezoomt, befinden Sie sich in der Wochenansicht, geschieht dasselbe mit den Tagen.

{{< imgproc Kalender_Slideransicht Resize "960x" >}}
Slider zum verkleinern oder vergrössern der Ansicht im Kalender
{{< /imgproc >}}


Ziehen Sie den Regler mit der Maus nach rechts, vergrössert sich die Ansicht. Das kann z.B. in der Tagesansicht zur Folge haben, dass Sie nicht mehr die vollen 24h angezeigt bekommen und horizontal – mittels Mausziehen auf dem Zeitbalken – gescrollt werden muss.
Ziehen Sie den Regler mit der Maus nach links, verkleinert sich die Ansicht. Beide Einstellungen werden über sämtliche Kalenderansichten (Tag, Arbeitswoche, Woche, Monat) übernommen.
Klick auf den Button _Fadenkreuz_ auf der rechten Seite des Reglers, passt den Kalender gemäss der Bildschirmauflösung wieder an die optimale Grösse an (100%).


Falls ein spezifisches Datum gesucht wird, kann dieses auch im Datumspicker oben rechts eingegeben oder aus dem Kalender-Popup ausgewählt werden. Gleich daneben befindet sich der _Heute_ Button. Klickt man ihn an, wechselt man, unabhängig von der gewählten Kalenderansicht, auf das aktuelle Datum (oder eben die aktuelle Kalenderwoche oder den aktuellen Monat).


Die Wochenendtage werden je nach eingestellter Landessprache und Zeitzone (Kultur) entweder am Samstag und am Sonntag gelb eingefärbt oder an Freitag und Samstag etc.

#### Listen Icon


Wenn mehrere Ressourcen in der Liste im Kalender angezeigt werden, können Sie mithilfe des Buttons neben dem Fadenkreuz diese Listenelemente verkleinert darstellen. So haben Sie alle Ressourcen im Blick.

{{< imgproc Kalender_Liste_verkleinert_anzeigen Resize "960x" >}}
Abbildung kl: Listenelemente verkleinert darstellen
{{< /imgproc >}}

#### Personen Icon


Sie können sich die Belegung und Ressourcen einzelner Personen anzeigen lassen.
Betätigen Sie das Personen Icon und es erscheint ein Feld, in welchem Sie durch tippen eine Person auswählen können.
Haben Sie die Person gewählt, werden auf dem Server die _Free/Busy_ Daten dieser Person abgefragt.
Sind keine Free/Busy Daten vorhanden, wird die Kalenderlinie grau dargestellt.
Die einzelnen (Busy) Termine sind in rot sichtbar. Allday-Termine (Busy/Out of Office) sind mit halbtransparenten, hell-rosaroten Balken hintergründig dargestellt.


Über das Kreuz-Symbol löschen Sie die Person wieder aus der Liste.

{{< imgproc Kalender_Personen_anzeigen Resize "960x" >}}
Belegung von einzelnen Personen anzeigen
{{< /imgproc >}}


**Achtung**:
Um diese Ansicht zu haben, müssen Sie vorher Free-Busy Einstellungen konfiguriert haben.