---
title: "Farbdarstellung"
linkTitle: "Farbdarstellung"
weight: 300
date: 2020-06-30
description: 'Buchungsfarben, Ressourcenfarben und persönliche Kennzeichnungen im klassischen Kalender unterscheiden'
---
## Farbgebung im Kalender

Die Farbe eines Buchungsblocks wird durch die **erste zutreffende aktive Buchungsfarbregel** bestimmt. Eine Regel kann beispielsweise den Buchungsstatus oder eine Buchungsklassifikation berücksichtigen. Die Administration verwaltet die [Farbregeln in PlaceMe unter Einstellungen → Farben]({{< relref "3VROOMS-Module/PlaceMe/Farben/_index.md" >}}). Dort wird auch die Reihenfolge festgelegt.

Vorlauf- und Nachlaufzeiten erhalten dieselbe, aus der Buchungsfarbe abgeleitete hellere Farbe. Ob Sie eine Buchung bearbeiten dürfen, beeinflusst ebenfalls ihre Darstellung. Ohne passende Farbregel verwendet der Kalender seine Standarddarstellung.

## Persönliche Organisatorfarbe

Bei Buchungen, für die Sie Organisator sind, erscheint Ihre persönliche Farbe als schmaler Balken am oberen Rand. Sie ergänzt die regelbasierte Füllfarbe. Die [persönlichen Einstellungen]({{< relref "3VROOMS/Einstellungen/Persönlicheeinstellungen/Stammdaten/_index.md" >}}) bestimmen diese Farbe und ob auch die persönlichen Farben anderer Organisatoren eingeblendet werden.

## Legende und Berechtigungen {#kundenspezifische-kalendermarkierungen}

Über das Icon **Legende** öffnen Sie die Erläuterungen zu Farben und Symbolen. Unter **Markierungen** sind die für Sie sichtbaren Einträge aktiver Buchungsfarbregeln aufgeführt. Die Liste ist nicht auf Buchungen im angezeigten Kalenderausschnitt beschränkt. Sie zeigt auch Regeln, die im konkreten Fall von einer höher angeordneten Regel übersteuert werden können.

Die verfügbaren Buchungsinformationen und Ihre Berechtigungen können die angezeigte Farbe beeinflussen. Eine Farbregel ändert weder den Status noch die Bearbeitungsrechte und sperrt keine Buchung. Prüfen Sie den Status und die Details, statt allein aus einer Farbe auf die Verfügbarkeit zu schliessen.

## Ressourcenfarben und Planfarben {#abgrenzung-zu-anderen-farben}

- **Ressourcenfarben** werden durch eine separate Regelliste in PlaceMe bestimmt. Im klassischen Kalender kennzeichnen sie die Ressource neben ihrem Namen, nicht die einzelnen Buchungsblöcke.
- Auf dem **Plan** verwenden Fläche, Rahmen und Verfügbarkeitspunkt unterschiedliche Kennzeichnungen. Deren Bedeutung und Standardfarben sind unter [Planstatus]({{< relref "3VROOMS/Plan/Planstatus/_index.md" >}}) beschrieben.

## Transparenz der Farben im Kalender

Je nach Dauer der Reservation weist der Block, nach Abschluss der Reservation, eine mehr oder weniger starke Transparenz auf.

Die Füllung weist eine Transparenz entsprechend der Auslastung des Blocks während der Arbeitszeiten auf.
  **Beispiel**: Definition der Arbeitszeiten: 8:00-17:00 = Total 9h; der Tag verfügt über 3 Buchungen (6:30-10:00, 13:00-14:00 und 16:00-17:30) = Total 6h, davon 4h während der Arbeitszeiten. Entsprechend wird die Füllung mit 5/9 Transparenz angezeigt (bzw. mit 4/9 Intransparenz). Sind keine Buchungen während der Arbeitszeiten, aber Buchungen ausserhalb der Arbeitszeiten vorhanden, wird eine gebuchte Einheit berechnet, also im Beispiel 8/9 Transparenz bzw. 1/9 Intransparenz).

Dauert eine Buchung z.B. von 08.00-17.00 Uhr erscheint der Block in voller Farbe. Handelt es sich jedoch um eine kurze Buchungszeit, beispielsweise von 14.00-15.00 Uhr, ist der Blockinhalt nur schemenhaft zu erkennen.
Ist auf einem Block nur eine Buchung vorhanden, gelangt man mittels Klick auf das **+**-Symbol zum Fenster zur Bearbeitung der Reservation.
