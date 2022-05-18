---
title: "Benutzergruppen"
linkTitle: "Benutzergruppen"
weight: 2
description: >
  <p style="text-align: justify"> In diesem Bereich bearbeiten und speichern Sie Gruppenlisten. Ebenfalls können Sie neue Gruppen anlegen und Stammdaten, Personen und Notifikationen schon bestehender und neuer Gruppen bearbeiten und speichern. </p>
 
---
## Ansicht

<p style="text-align: justify">
Im rechten Feld sehen Sie die bereits gespeicherten Benutzergruppen in Listenform. </br>
Im linken Sidepanel können Sie mithilfe der Filterfunktion nach Benutzergruppen suchen. </p>

{{< imgproc Benutzergruppen_bearbeiten_suchen Resize "960x" >}}
Benutzergruppen bearbeiten und suchen 
{{< /imgproc >}}

### Benutzergruppen suchen

<p style="text-align: justify">
Im linken Sidepanel finden Sie unter der Kategorie <i>Benutzergruppen</i> eine Suchfunktion, mit dessen Hilfe Sie nach Bezeichnung der Gruppe suchen können. </br>
Bestätigen Sie Ihre Filterfunktion mit dem Button "Anzeigen" im Sidepanel. Sie sehen dann ihre gefilterten Ergebnisse.</p>

## Benutzergruppen bearbeiten und neu hinzufügen

<p style="text-align: justify">
Die Stammdaten, Personen und Notifikationen bearbeiten Sie, indem Sie auf das Stift Icon <i>Bearbeiten</i> auswählen. Wenn Sie eine Benutzergruppe neu hinzufügen möchten, klicken Sie auf den untenstehenden Button <i>Hinzufügen</i>. </p>

<p style="text-align: justify">
In beiden Fällen öffnen sich die neuen Fenster zur Eingabe der Informationen. </p>

{{< imgproc Benutzergruppen_hinzufügen Resize "960x" >}}
Benutzergruppen hinzufügen
{{< /imgproc >}}

<p style="text-align: justify">
Die geänderten oder neu eingetragenen Daten speichern Sie über den untenstehenden Button <i>Speichern</i> </p>

### Stammdaten der Benutzergruppen

<p style="text-align: justify">
Unter den Stammdaten der Benutzergruppe tragen Sie folgende Informationen ein: </p>

* Benutzergruppen ID 
* Bezeichnung 

<p style="text-align: justify">
Serieneinstellungen: Eine Serie kann pro Benutzergruppe maximiert werden (z.B. 50 Iterationen). Die Maximierung erfolgt auf Iterationen oder Laufdauer unterteilt in Monate, Wochen, Tage. </p>

* Max. series duration yearly 
* Max. Seriendauer monatlich 
* Max. Seriendauer wöchentlich Serie
* Max. Seriendauer täglich
* Absolute Serienbegrenzung 1
* Absolute Serienbegrenzung 2

<p style="text-align: justify">
Sie können einstellen, welche Eigenschaften die erstellte Gruppe aufweisen soll: </p>

* Berechtigungsgruppe (Checkbox ja /nein)
* Notifikationsgruppe (Checkbox ja /nein)
* BenutzerkreisCheckin (Checkbox ja /nein)
* Einzelbuchungen (Checkbox ja /nein)


### Personen der Benutzergruppe 

<p style="text-align: justify">
Sie können einer Benutzergruppe eine oder mehrere Personen zuweisen. Haben Sie noch keine Personen einer Benutzerguppe hinzugefügt, sehen Sie diese auch nicht in der Liste. </p>

{{< imgproc Benutzergruppen_Personen_Ansicht Resize "960x" >}}
Ansicht: Personen einer Benutzergruppe
{{< /imgproc >}}

<p style="text-align: justify">
Möchten Sie der Benutzerguppe Personen hinzufügen, klicken Sie auf den Button <i>Person hinzufügen</i>. Es öffnet sich ein Fenster, in dem Sie eine oder mehrere Personen auswählen über das aktivieren der Checkbox. Anschließend klicken Sie auf den Button <i>hinzufügen</i>.

{{< imgproc Benutzergruppen_Personen_hinzufügen Resize "960x" >}}
Personen zu Benutzergruppen hinzufügen
{{< /imgproc >}}

<p style="text-align: justify">
Die Liste aktualisiert sich automatisch. Sie sehen die ausgewählten Personen in der Liste. </p>

{{< imgproc Benutzergruppen_Personen_aktualisierte_Liste Resize "960x" >}}
Ansicht der aktualisierten Personen in der Benutzergruppe
{{< /imgproc >}}

### Notifikationen 

<p style="text-align: justify">
In diesem Bereich können Sie Notifikationsvorlagen für Benutzergruppen erfassen und verwalten. Ebenfalls stellen Sie ein, wie die Notifikationen versendet werden sollen. </p>

#### Notifikationen bearbeiten

<p style="text-align: justify">
Klicken Sie auf den Menü Reiter <i>Notifikationen</i>, wird Ihnen eine Liste aller gespeicherten Notifikationen angezeigt. </br>
Über das Stift Icon können Sie die Notifikation bearbeiten. Es öffnet sich dabei ein Feld, indem Sie folgende Informationen eingeben: </p>

| Feld          | Funktion      | 
| ------------- |-------------  |
| Notifikationstyp |<p style="text-align: justify"> Jeder Notifikationstyp darf nur einmal erfasst werden. </p> | 
| Benachrichtigung im CC an|<p style="text-align: justify"> Erfassung von gültigen E-Mail Adressen, welche beim Versenden der Notifikation  im CC an die entsprechenden Adressaten verschickt werden. Mehrere E-Mail Adressen werden mittels Semikolon separiert </p>|  
| Antwort auf Benachrichtigung an Ersteller|<p style="text-align: justify"> Checkbox aktivieren </p>|
| Sprache|<p style="text-align: justify"> Mittels Drop-Down die Sprache auswählen, es stehen alle aktivierten Sprachen zur Verfügung. </p>|
| Titel|<p style="text-align: justify"> Der Titel muss mehrsprachig erfasst werden</p> |
| Email Body|<p style="text-align: justify"> Wurde kein E-Mail-Server eingetragen, erscheint dieses Feld nicht. Es steht ein Texteditor inkl. Formatierungen zur Verfügung. E-Mail Body kann mehrsprachig abgefüllt werden. Ist der E-Mail Body leer wird keine Notifikation verschickt. Es stehen alle Formatierungen gemäß Editor zur Verfügung</p>|
| Notifikationsplatzhalter |<p style="text-align: justify"> Neben dem Feld zur Eingabe der Email sehen Sie eine Liste mit Platzhaltern. Es steht eine Reihe von Platzhaltern zur Verfügung, welche zur Laufzeit mit dem entsprechenden Text abgefüllt werden. Platzhalter können im Titel (Subject) und im E-Mail Body verwendet werden. </br> Die Werte werden immer in der aktuellen Benutzersprache abgefüllt. Auf Klick eines Platzhalters wird dieser an der aktuellen Stelle im Editor platziert. Die verfügbaren Platzhalter sind in Notifikationsplatzhalter ersichtlich. Klick auf einen Platzhalter fügt diesen an der aktuellen Cursor Position ein. Ist kein Cursor positioniert, wird der Platzhalter am Anfang des Body Textes eingefügt. Es ist immer nur eine Platzahlter Sektion gleichzeitig geöffnet. Die Platzhalter übernehmen die Formatierung des Body Editors. </p>| 

{{< imgproc Benutzergruppen_Notifikationen_bearbeiten Resize "960x" >}}
Benutzergruppen in der Liste bearbeiten
{{< /imgproc >}}

<p style="text-align: justify">
Sollten Sie keine Notifikationen in der Liste sehen, können Sie eine neue hinzufügen. Dafür klicken Sie auf den Button <i>hinzufügen</i>. Es öffnet sich das gleiche Feld mit den oben beschriebenen Funktionen. </p>

{{< imgproc Benutzergruppen_Notifikationen_hinzufügen Resize "960x" >}}
Benutzergruppen hinzufügen
{{< /imgproc >}}

<p style="text-align: justify">
Sie löschen eine Notifikation, indem Sie die Checkbox neben dem Listenelement aktivieren und auf den untenstehenden Button <i>entfernen</i> klicken. </br>
Möchten Sie alle Eingaben speichern, klicken Sie auf <i>Speichern</i>. </p>

### Benutzergruppen: Daten einsehen

<p style="text-align: justify">
Wenn Sie die gespeicherten Daten nur einsehen wollen, fahren Sie mit dem Mauszeiger über den Namen der Gruppe und klicken Sie auf diese. Es öffnet sich eine Zusammenfassung der eingetragenen und gespeicherten Daten zu der ausgewählten Gruppe. </p>

{{< imgproc Benutzergruppen_Informationen_einsehen Resize "960x" >}}
Informationen der Benutzergruppe einsehen
{{< /imgproc >}}

<p style="text-align: justify">
Diese Daten können Sie ebenfalls wieder bearbeiten. </p>

{{< imgproc Benutzergruppen_Informationen_einsehen2 Resize "960x" >}}
Informationen der Benutzergruppe einsehen
{{< /imgproc >}}