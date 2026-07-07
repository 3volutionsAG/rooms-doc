---
title: "Farbdarstellung"
linkTitle: "Farbdarstellung"
weight: 300
date: 2020-06-30
description: 'Diese Seite erklärt, welche Farben im Kalender angezeigt werden und wie sie sich von Ressourcenfarben und Planfarben unterscheiden.'
---
### Farbgebung im Kalender

Sie sehen Buchungen im Kalender farbig markiert. Die Farbe des Buchungsblocks richtet sich nach dem Buchungsstatus. Die Statusfarben inklusive Vorlauf- und Nachlaufzeit werden unter [Status](/3vrooms/einstellungen/basisdatenfuerressourcen/status/) definiert.

Die Farbgebung Ihrer eigenen Buchungen können Sie in Ihren Einstellungen festlegen. Wenn diese Anzeige aktiv ist, wird die persönliche Farbe zusätzlich zur Statusfarbe angezeigt.

In jeder Kalenderansicht wird Ihnen oben links das Icon _Legende_ angezeigt. Dort sehen Sie mithilfe der Farbgebung, welchen Status eine Buchung hat, z.B. ob sie definitiv oder provisorisch belegt ist. Die Legende enthält auch weitere Kennzeichnungen wie Sperrzeiten, Feiertage, Wochenenden und eigene Reservationen.

### Abgrenzung zu anderen Farben

- Die **Ressourcenfarbe** wird auf der Ressource unter [Spezifische Daten](/3vrooms/einstellungen/ressourcen/#spezifische-daten-der-ressource-bearbeiten) gepflegt. Sie kennzeichnet die Ressource, beschreibt aber nicht den Status einer konkreten Buchung.
- Die **Statusfarbe** wird auf dem Buchungsstatus gepflegt und zeigt im Kalender den Status einer Buchung an.
- Der **Planstatus** zeigt auf dem Plan die aktuelle Verfügbarkeit einer Ressource, z.B. frei, besetzt mit ausstehendem Check-in oder definitiv besetzt. Die Bedeutung der Planfarben ist unter [Planstatus](/3vrooms/plan/planstatus/) beschrieben.

### Transparenz der Farben im Kalender

Je nach Dauer der Reservation weist der Block, nach Abschluss der Reservation, eine mehr oder weniger starke Transparenz auf.

Die Füllung weist eine Transparenz entsprechend der Auslastung des Blocks während der Arbeitszeiten auf.
  **Beispiel**: Definition der Arbeitszeiten: 8:00-17:00 = Total 9h; der Tag verfügt über 3 Buchungen (6:30-10:00, 13:00-14:00 und 16:00-17:30) = Total 6h, davon 4h während der Arbeitszeiten. Entsprechend wird die Füllung mit 5/9 Transparenz angezeigt (bzw. mit 4/9 Intransparenz). Sind keine Buchungen während der Arbeitszeiten, aber Buchungen ausserhalb der Arbeitszeiten vorhanden, wird eine gebuchte Einheit berechnet, also im Beispiel 8/9 Transparenz bzw. 1/9 Intransparenz).

Dauert eine Buchung z.B. von 08.00-17.00 Uhr erscheint der Block in voller Farbe. Handelt es sich jedoch um eine kurze Buchungszeit, beispielsweise von 14.00-15.00 Uhr, ist der Blockinhalt nur schemenhaft zu erkennen.
Ist auf einem Block nur eine Buchung vorhanden, gelangt man mittels Klick auf das **+**-Symbol zum Fenster zur Bearbeitung der Reservation.
