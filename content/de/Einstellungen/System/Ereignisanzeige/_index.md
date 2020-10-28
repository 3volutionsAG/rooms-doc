---
title: "Ereignisanzeige"
linkTitle: "Ereignisanzeige"
weight: 8
description: >
  In der Ereignisanzeige sehen Sie alle Ereignisse, die im System von Rooms vorgefallen sind. Beispiele hierzu sind Error Anzeigen oder Warnungen.  
 


---
## Ereignisanzeige Ansicht
Im linken Sidepanel sehen Sie die Filterfunktionen. Im rechten Feld sehen Sie die Ereignisliste. Elemente in der Ereignisliste können Sie löschen oder ihre Daten einsehen. 

{{< imgproc Ereignisanzeige_durchsuchen Resize "1280x" >}}
Abbildung E: Ereignisliste durchsuchen
{{< /imgproc >}}

Sie löschen ein Element über die Aktivierung der Checkbox und den untenstehenden Button "Entfernen". Die Liste aktualisiert sich automatisch.

### Ereignisanzeige durchsuchen
Im linken Sidepanel finden Sie eine Suchfunktion. Hier durchsuchen Sie nach folgenden Kriterien die Ereignisanzeige (Abbildung E): 


| Feld         | Funktion         | 
| ------------- |-------------  | 
| Quelle         | sucht über einen bestimmten Bereich - z.B. nur den ROOMS Service | 
| Ereignistyp   | Verfügbare Werte: Critical => Fehler auf übergeordneter Ebene, zB konnten die einzelnen Prozesse des WindowsServices gar nicht angestossen werden. Error => Fehler. Information => Wie der Name sagt, zB Export gestartet oder Export erfolgreich. Warning => Fehler ohne Auswirkungen oder „verdächtiges“ Ereignis, zB konnte bei der BackSync ein Exchange-Appointment nicht gefunden werden (könnte sein, dass es noch gar nicht auf dem Server ist, muss also kein Fehler sein) oder eine Person hat mehrere zugeteilte OEs (ist zwar ein Fehler, wir können die Ausführung aber fortsetzen). Verbose => Hier kommen zT auch Dev-Informationen wie zB „DataContext initialisiert“, die fürs Debugging hilfreich sein können. Jeder Typ schliesst die übergeordneten immer ein, dh bei Verbose kommt ALLES. Mehrfachselektion erlaubt     | 
| Zeitstempel  | Standardwert: nicht selektiert => alle werden angezeigt. Standardwert bei Selektion: der aktuelle Tage   | 
| Applikationskontext    |  sucht in einer bestimmten Code Basis    | 
| Meldungen   | schränkt sie Suche auf einen bestimmten Fehlertext ein     | 
| Benutzername   | sucht in einer bestimmten Benutzerdomäne     | 
| Servername   | sucht über einen bestimmten Server     | 

### Ereignisanzeige Daten einsehen 
Indem Sie auf den Namen des Ereignisses in der Liste klicken, erscheint ein neuen Feld. In diesem sehen Sie die eingetragenen Logging Stammdaten des Ereignisses. Diese können Sie teilweise bearbeiten oder drucken (Abbildung Ea).

{{< imgproc Ereignisanzeige_Daten_einsehen Resize "1280x" >}}
Abbildung Ea: Daten des angezeigten Ereignis einsehen
{{< /imgproc >}}



