---
title: "Benutzergruppen"
linkTitle: "Benutzergruppen"
weight: 2
description: >
  In diesem Bereich bearbeiten und speichern Sie Gruppenlisten. Ebenfalls können Sie neue Gruppen anlegen und Stammdaten, Personen und Notifikationen schon bestehender und neuer Gruppen bearbeiten und speichern. 
 


---
## Ansicht: Benutzergruppen 
Im rechten Feld sehen Sie die bereits gespeicherten Benutzergruppen in Listenform. 
Im linken Sidepanel, können Sie mithilfe der Filterfunktion nach Benutzergruppen suchen. 

{{< imgproc Benutzergruppen_bearbeiten_suchen Resize "1280x" >}}
Abbildung b: Benutzergruppen bearbeiten und suchen 
{{< /imgproc >}}


### Benutzergruppen suchen
Im linken Sidepanel finden Sie unter der Kategorie "Benutzergruppen" eine Suchfunktion mit dessen Hilfe Sie nach Bezeichnung der Gruppe suchen können. 
Bestätigen Sie Ihre Filterfunktion mit dem Button "Anzeigen" im Sidepanel. Sie sehen dann ihre gefilterten Ergebnisse. (Abbildung b)



## Benutzergruppen bearbeiten und neu hinzufügen
Die Stammdaten, Personen und Notifikationen bearbeiten Sie indem Sie auf das Stift Icon "Bearbeiten" auswählen (Abbildung b). Wenn Sie eine Benutzergruppe neu hinzufügen möchten, klicken Sie auf den untenstehenden Button "Hinzufügen". 

In beiden Fällen öffnen sich die neuen Fenster zur Eingabe der Informationen. (Abbildung ba)

{{< imgproc Benutzergruppen_hinzufügen Resize "1280x" >}}
Abbildung ba: Benutzergruppen hinzufügen
{{< /imgproc >}}

Die geänderten oder neu eingetragenen Daten speichern Sie über den untenstehenden Button "Speichern" (Abbildung bi)

### Stammdaten der Benutzergruppen
Unter den Stammdaten der Benutzergruppe tragen Sie folgende Informationen ein: 
* Benutzergruppen ID 
* Bezeichnung 

Serieneinstellungen: Eine Serie kann pro Benutzergruppe maximiert werden (z.B. 50 Iterationen). Die Maximierung erfolgt auf Iterationen oder Laufdauer unterteilt in Monate, Wochen, Tage.
* Max. series duration yearly 
* Max. Seriendauer monatlich 
* Max. Seriedauer wöchentlich Serie
* Max. Seriedauer täglich
* Absolute Serienbegrenzung 1
* Absolute Serienbegrenzung 2

Sie können einstellen, welche Eigenschaften die erstelle Gruppe aufweisen soll:
* Berechtigungsgruppe (Checkbox ja /nein)
* Notifikationsgruppe (Checkbox ja /nein)
* BenutzerkreisCheckin (Checkbox ja /nein)
* Einzelbuchungen (Checkbox ja /nein)


### Personen der Benutzergruppe 
Sie können einer Benutzergruppe eine oder mehrere Personen zuweisen. Haben Sie noch keine Personen einer Benutzerguppe hinzugefügt, sehen Sie diese auch nicht in der Liste. (Abbildung bb)

{{< imgproc Benutzergruppen_Personen_Ansicht Resize "1280x" >}}
Abbildung bb: Ansicht: Personen einer Benutzergruppe
{{< /imgproc >}}

Möchten Sie der Benutzerguppe Personen hinzufügen, klicken Sie auf den Button "Person hinzufügen". Es öffnet sich ein Fenster, in dem Sie eine oder mehrere Personen auswählen über das aktivieren der Checkbox. Anschließend klicken Sie auf den Button "hinzufügen". (Abbildung bc)

{{< imgproc Benutzergruppen_Personen_hinzufügen Resize "1280x" >}}
Abbildung bc: Personen zu Benutzergruppen hinzufügen
{{< /imgproc >}}

Die Liste aktualisiert sich automatisch. Sie sehen die ausgewählten Personen in der Liste. (Abbildung bd)

{{< imgproc Benutzergruppen_Personen_aktualisierte_Liste Resize "1280x" >}}
Abbildung bd: Ansicht der aktualisierten Personen in der Benutzergruppe
{{< /imgproc >}}

### Notifikationen 
In diesem Bereich können Sie Notifikationsvorlagen für Benutzergruppen erfassen und verwalten. Ebenfalls stellen Sie ein, wie die Notifikationen versendet werden sollen.

#### Notifikationen bearbeiten
Klicken Sie auf den Menü Reiter "Notifikationen" wird Ihnen eine Liste aller gespeicherten Notifikationen angezeigt. 
Über das Stift Icon können Sie die Notifikation bearbeiten. Es öffnet sich dabei ein Feld (Abbildung bh), indem Sie folgende Informationen eingeben: 



| Feld          | Funktion      | 
| ------------- |-------------  |
| Notifikationstyp | Jeder Notifikationstyp darf nur einmal erfasst werden.  | 
| Benachrichtigung im CC an| Erfassung von gültigen E-Mail Adressen, welche beim Versenden der Notifikation  im CC an die entsprechenden Adressaten verschickt werden. Mehrere E-Mail Adressen werden mittels semikolon separiert |  
| Antwort auf Benachrichtigung an Ersteller| Checkbox aktivieren |
| Sprache| Mittels Drop-Down die Sprache auswählen, es stehen alle aktivierten Sprachen zur Verfügung. |
| Titel| Der Titel muss mehrsprachig erfasst werden |
| Email Body| Wurde kein E-Mail-Server eingetragen, erscheint dieses Feld nicht. Es steht ein Texteditor inkl. Formatierungen zur Verfügung. E-Mail Body kann mehrsprachig abgefüllt werden. Ist der E-Mail Body leer wird keine Notifikation verschickt. Es stehen alle Formatierungen gemäss Editor zur Verfügung|
| Notifikationsplatzhalter | Neben dem Feld zur Eingabe der Email sehen Sie eine Liste mit Platzhaltern. Es steht eine Reihe von Platzhaltern zur Verfügung, welche zur Laufzeit mit dem entsprechenden Text abgefüllt werden. Platzhalter können im Titel (Subject) und im E-Mail Body verwendet werden. Die Werte werden immer in der aktuellen Benutzersprache abgefüllt. Auf Klick eines Platzhalter wird dieser an der aktuellen Stelle im Editor platziert. Die verfügbaren Platzhalter sind in Notifikationsplatzhalter ersichtlich. Klick auf einen Platzhalter fügt diesen an der aktuellen Cursor Position ein. Ist kein Cursor positioniert wird der Platzhalter am Anfang des Body Textes eingefügt. Es ist immer nur eine Platzahlter Sektion gleichzeitig geöffnet. Die Platzhalter übernehmen die Formatierung des Body Editors. | 

{{< imgproc Benutzergruppen_Notifikationen_bearbeiten Resize "1280x" >}}
Abbildung bl: Benutzergruppen in der Liste bearbeiten
{{< /imgproc >}}

Sollten Sie keine Notifikationen in der Liste sehen, können Sie eine neue hinzufügen. Dafür klicken Sie auf den Button "hinzufügen". Es öffnet sich das gleiche Feld mit den oben beschriebenen Funktionen. 

{{< imgproc Benutzergruppen_Notifikationen_hinzufügen Resize "1280x" >}}
Abbildung bh: Benutzergruppen hinzufügen
{{< /imgproc >}}

Sie löschen eine Notifikation, indem Sie die Checkbox neben dem Listenelement aktivieren und auf den untenstehenden Button "entfernen" klicken. 
Möchten Sie alle Eingaben speichern, klicken Sie auf "Speichern".

### Benutzergruppen: Daten einsehen
Wenn Sie die gespeicherten Daten nur einsehen wollen, fahren Sie mit dem Mauszeiger über den Namen der Gruppe und klicken Sie auf diese. Es öffnet sich eine Zusammenfassung der eingetragenen und gespeicherten Daten zu der ausgewählten Gruppe. 

{{< imgproc Benutzergruppen_Informationen_einsehen Resize "1280x" >}}
Abbildung be: Informationen der Benutzergruppe einsehen
{{< /imgproc >}}

Diese Daten können Sie ebenfalls wieder bearbeiten. 

{{< imgproc Benutzergruppen_Informationen_einsehen2 Resize "1280x" >}}
Abbildung bf: Informationen der Benutzergruppe einsehen
{{< /imgproc >}}