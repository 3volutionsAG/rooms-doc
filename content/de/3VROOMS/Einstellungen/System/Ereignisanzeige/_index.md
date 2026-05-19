---
title: "Ereignisanzeige"
linkTitle: "Ereignisanzeige"
weight: 8
description: 'In der Ereignisanzeige sehen Sie alle Ereignisse, die im System von Rooms vorgefallen sind. Beispiele hierzu sind Error Anzeigen oder Warnungen.'
---

Im linken Sidepanel sehen Sie die Filterfunktionen. Im rechten Feld sehen Sie die Ereignisliste. Elemente in der Ereignisliste können Sie löschen oder ihre Daten einsehen.

{{< imgproc Ereignisanzeige_durchsuchen Resize "960x" >}}
Ereignisliste durchsuchen
{{< /imgproc >}}


Sie löschen ein Element über die Aktivierung der Checkbox und den untenstehenden Button "Entfernen". Die Liste aktualisiert sich automatisch.

### Ereignisanzeige durchsuchen


Im linken Sidepanel finden Sie eine Suchfunktion. Hier durchsuchen Sie nach folgenden Kriterien die Ereignisanzeige:


{{< bootstrap-table "table table-striped" >}}
| Feld         | Funktion         |
| ------------- |-------------  |
| Quelle         | sucht über einen bestimmten Bereich - z.B. nur den ROOMS Service |
| Ereignistyp   | Verfügbare Werte: Critical => Fehler auf übergeordneter Ebene, z.B. konnten die einzelnen Prozesse des Windows Services gar nicht angestossen werden. Error => Fehler. Information => Wie der Name sagt, z.B. Export gestartet oder Export erfolgreich. Warning => Fehler ohne Auswirkungen oder _verdächtiges_ Ereignis, z.B. konnte bei der BackSync ein Exchange-Appointment nicht gefunden werden (könnte sein, dass es noch gar nicht auf dem Server ist, muss also kein Fehler sein) oder eine Person hat mehrere zugeteilte OEs (ist zwar ein Fehler, wir können die Ausführung aber fortsetzen). Verbote => Hier kommen z.T. auch Dev-Informationen wie z.B. _DataContext initialisiert_, die fürs Debugging hilfreich sein können. Jeder Typ schliesst die übergeordneten immer ein, d.h. bei Verbote kommt ALLES. Mehrfachselektion erlaubt     |
| Zeitstempel  | Standardwert: nicht selektiert => alle werden angezeigt. Standardwert bei Selektion: der aktuelle Tag   |
| Applikationskontext    |  sucht in einer bestimmten Code Basis    |
| Meldungen   | schränkt die Suche auf einen bestimmten Fehlertext ein     |
| Benutzername   |  sucht in einer bestimmten Benutzerdomäne     |
| Servername   | sucht über einen bestimmten Server     |
{{< /bootstrap-table >}}

### Ereignisanzeige Daten einsehen


Indem Sie auf den Namen des Ereignisses in der Liste klicken, erscheint ein neues Feld. In diesem sehen Sie die eingetragenen Loggin Stammdaten des Ereignisses. Diese können Sie teilweise bearbeiten oder drucken.

{{< imgproc Ereignisanzeige_Daten_einsehen Resize "960x" >}}
Daten des angezeigten Ereignisses einsehen
{{< /imgproc >}}
