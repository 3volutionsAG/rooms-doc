---
title: "Ereignisanzeige"
linkTitle: "Ereignisanzeige"
weight: 8
description: 'In der Ereignisanzeige sehen Sie alle Ereignisse, die im System von Rooms vorgefallen sind. Beispiele hierzu sind Error Anzeigen oder Warnungen.'
---
<p style="text-align: justify">
Im linken Sidepanel sehen Sie die Filterfunktionen. Im rechten Feld sehen Sie die Ereignisliste. Elemente in der Ereignisliste können Sie löschen oder ihre Daten einsehen. </p>

{{< imgproc Ereignisanzeige_durchsuchen Resize "960x" >}}
Ereignisliste durchsuchen
{{< /imgproc >}}

<p style="text-align: justify">
Sie löschen ein Element über die Aktivierung der Checkbox und den untenstehenden Button "Entfernen". Die Liste aktualisiert sich automatisch. </p>

### Ereignisanzeige durchsuchen

<p style="text-align: justify">
Im linken Sidepanel finden Sie eine Suchfunktion. Hier durchsuchen Sie nach folgenden Kriterien die Ereignisanzeige: </p>


| Feld         | Funktion         | 
| ------------- |-------------  | 
| Quelle         |<p style="text-align: justify"> sucht über einen bestimmten Bereich - z.B. nur den ROOMS Service </p>| 
| Ereignistyp   |<p style="text-align: justify"> Verfügbare Werte: Critical => Fehler auf übergeordneter Ebene, z.B. konnten die einzelnen Prozesse des Windows Services gar nicht angestoßen werden. Error => Fehler. Information => Wie der Name sagt, z.B. Export gestartet oder Export erfolgreich. Warning => Fehler ohne Auswirkungen oder _verdächtiges_ Ereignis, z.B. konnte bei der BackSync ein Exchange-Appointment nicht gefunden werden (könnte sein, dass es noch gar nicht auf dem Server ist, muss also kein Fehler sein) oder eine Person hat mehrere zugeteilte OEs (ist zwar ein Fehler, wir können die Ausführung aber fortsetzen). Verbote => Hier kommen z.T. auch Dev-Informationen wie z.B. _DataContext initialisiert_, die fürs Debugging hilfreich sein können. Jeder Typ schließt die übergeordneten immer ein, d.h. bei Verbote kommt ALLES. Mehrfachselektion erlaubt  </p>   | 
| Zeitstempel  |<p style="text-align: justify"> Standardwert: nicht selektiert => alle werden angezeigt. Standardwert bei Selektion: der aktuelle Tag  </p> | 
| Applikationskontext    |<p style="text-align: justify">  sucht in einer bestimmten Code Basis  </p>  | 
| Meldungen   |<p style="text-align: justify"> schränkt die Suche auf einen bestimmten Fehlertext ein   </p>  | 
| Benutzername   | <p style="text-align: justify"> sucht in einer bestimmten Benutzerdomäne    </p> | 
| Servername   |<p style="text-align: justify"> sucht über einen bestimmten Server   </p>  | 

### Ereignisanzeige Daten einsehen 

<p style="text-align: justify">
Indem Sie auf den Namen des Ereignisses in der Liste klicken, erscheint ein neues Feld. In diesem sehen Sie die eingetragenen Loggin Stammdaten des Ereignisses. Diese können Sie teilweise bearbeiten oder drucken. </p>

{{< imgproc Ereignisanzeige_Daten_einsehen Resize "960x" >}}
Daten des angezeigten Ereignisses einsehen
{{< /imgproc >}}
