---
title: "Benutzergruppen"
linkTitle: "Benutzergruppen"
weight: 2
description: >
  In diesem Bereich bearbeiten und speichern Sie Gruppenlisten. Ebenfalls können Sie neue Gruppen anlegen und Stammdaten, Personen und Notifikationen schon bestehender und neuer Gruppen bearbeiten und speichern.
---
## Ansicht

Im rechten Feld sehen Sie die bereits gespeicherten Benutzergruppen in Listenform. Im linken Sidepanel können Sie mithilfe der Filterfunktion nach Benutzergruppen suchen.

{{< imgproc Benutzergruppen_bearbeiten_suchen Resize "960x" >}}
Benutzergruppen bearbeiten und suchen 
{{< /imgproc >}}

### Benutzergruppen bearbeiten und neu hinzufügen

Die Stammdaten, Personen und Notifikationen bearbeiten Sie, indem Sie auf das Stift Icon `Bearbeiten` auswählen. Wenn Sie eine Benutzergruppe neu hinzufügen möchten, klicken Sie auf den untenstehenden Button `Hinzufügen`.

In beiden Fällen öffnen sich die neuen Fenster zur Eingabe der Informationen.

{{< imgproc Benutzergruppen_hinzufügen Resize "960x" >}}
Benutzergruppen hinzufügen
{{< /imgproc >}}

Die geänderten oder neu eingetragenen Daten speichern Sie über den untenstehenden Button `Speichern`

## Stammdaten der Benutzergruppen

Unter den Stammdaten der Benutzergruppe tragen Sie folgende Informationen ein:

* Benutzergruppen ID 
* Bezeichnung 

### Serieneinstellungen

Eine Serie kann pro Benutzergruppe maximiert werden (z.B. 50 Iterationen). Die Maximierung erfolgt auf Iterationen oder Laufdauer unterteilt in Monate, Wochen, Tage.

* Max. series duration yearly 
* Max. Seriendauer monatlich 
* Max. Seriendauer wöchentlich Serie
* Max. Seriendauer täglich
* Absolute Serienbegrenzung 1
* Absolute Serienbegrenzung 2

### Maximale Anzahl gleichzeitiger Buchungen
Dieses Feature ermöglicht es, die Anzahl gleichzeitiger Buchungen eines Organisators zu begrenzen. Es wurde entwickelt, um sicherzustellen, dass Organisatoren nicht mehr Buchungen gleichzeitig durchführen, als in ihrer Gruppenrichtlinie festgelegt ist. Dadurch kann die Buchungsaktivitäten gesteuert und sichergestellt werden dass die Ressourcen effizient genutzt werden.

#### Ausnahme mit neuem Recht

- `Darf die maximale Anzahl gleichzeitiger Buchungen überschreiten`

Falls es notwendig ist, die maximale Anzahl gleichzeitiger Buchungen zu überschreiten, weisen Sie dieses Recht einer Rolle bei den entsprechenden Organisatoren zu.

### Gruppeneigenschaften
Sie können einstellen, welche Eigenschaften die erstellte Gruppe aufweisen soll:

{{< bootstrap-table "table table-striped" >}}
| Eigenschaft | Standard | Bemerkung |
| --- | --- | --- |
| Berechtigungsgruppe | nicht selektiert | Stehen bei der Zuweisung von Berechtigungen zur Verfügung |
|Notifikationsgruppe|nicht selektiert|Stehen bei der Zuweisung für Benachrichtigungen zur Verfügung|
|Benutzerkreis|nicht selektiert| - Benutzer in Benutzergruppen mit dem Flag "Benutzerkreis" aktiviert, können im Buchungsprozess nur Buchungen für Benutzer dieser Gruppe erstellen. <br> - Anwendung nur im Zusammenhang mit dem Recht "Darf Reservationen mit Organisator buchen" - Kann durch Recht "Darf Organisator aus allen Benutzerkreisen sehen" übersteuert werden|
{{< /bootstrap-table >}}
### Checkin Einzelbuchungen
Wenn diese Option aktiviert ist, müssen alle Benutzer in dieser Gruppe für Ressourcen, bei denen der Check-in-Prozess aktiviert ist, diesen verpflichtend durchführen.

Zusätzlich kann das Recht `Check-In-Delegation erzwingen` vergeben werden. Dadurch werden Benutzende, die dieses Recht besitzen, dazu gezwungen, den Check-in-Prozess von einer anderen Person durchführen zu lassen. Auf diese Weise können diese Benutzenden den Check-in nicht eigenständig abschliessen. Das Vier-Augen-Prinzip stellt sicher, dass die erforderlichen Schritte und Sicherheitskontrollen eingehalten werden.

[Checkin aktivieren](/3vrooms/einstellungen/ressourcen/#ressource-bearbeiten)

### Personen

Sie können einer Benutzergruppe eine oder mehrere Personen zuweisen. Haben Sie noch keine Personen einer Benutzerguppe hinzugefügt, sehen Sie diese auch nicht in der Liste.

{{< imgproc Benutzergruppen_Personen_Ansicht Resize "960x" >}}
Ansicht: Personen einer Benutzergruppe
{{< /imgproc >}}

Möchten Sie der Benutzerguppe Personen hinzufügen, klicken Sie auf den Button `Person hinzufügen`. Es öffnet sich ein Fenster, in dem Sie eine oder mehrere Personen auswählen über das aktivieren der Checkbox. Anschließend klicken Sie auf den Button `hinzufügen`.

{{< imgproc Benutzergruppen_Personen_hinzufügen Resize "960x" >}}
Personen zu Benutzergruppen hinzufügen
{{< /imgproc >}}

Die Liste aktualisiert sich automatisch. Sie sehen die ausgewählten Personen in der Liste.

{{< imgproc Benutzergruppen_Personen_aktualisierte_Liste Resize "960x" >}}
Ansicht der aktualisierten Personen in der Benutzergruppe
{{< /imgproc >}}

### Notifikationen 

In diesem Bereich können Sie Notifikationsvorlagen für Benutzergruppen erfassen und verwalten. Ebenfalls stellen Sie ein, wie die Notifikationen versendet werden sollen.

#### Notifikationen bearbeiten

Klicken Sie auf den Menü Reiter `Notifikationen`, wird Ihnen eine Liste aller gespeicherten Notifikationen angezeigt.

Über das Stift Icon können Sie die Notifikation bearbeiten. Es öffnet sich dabei ein Feld, indem Sie folgende Informationen eingeben:

{{< bootstrap-table "table table-striped" >}}
| Feld          | Funktion      | 
| ------------- |-------------  |
| Notifikationstyp |Jeder Notifikationstyp darf nur einmal erfasst werden. | 
| Benachrichtigung im CC an|Erfassung von gültigen E-Mail Adressen, welche beim Versenden der Notifikation  im CC an die entsprechenden Adressaten verschickt werden. Mehrere E-Mail Adressen werden mittels Semikolon separiert|  
| Antwort auf Benachrichtigung an Ersteller|Checkbox aktivieren|
| Sprache|Mittels Drop-Down die Sprache auswählen, es stehen alle aktivierten Sprachen zur Verfügung.|
| Titel|Der Titel muss mehrsprachig erfasst werden|
| Email Body|Wurde kein E-Mail-Server eingetragen, erscheint dieses Feld nicht. Es steht ein Texteditor inkl. Formatierungen zur Verfügung. E-Mail Body kann mehrsprachig abgefüllt werden. Ist der E-Mail Body leer wird keine Notifikation verschickt. Es stehen alle Formatierungen gemäß Editor zur Verfügung|
| Notifikationsplatzhalter | Neben dem Feld zur Eingabe der Email sehen Sie eine Liste mit Platzhaltern. Es steht eine Reihe von Platzhaltern zur Verfügung, welche zur Laufzeit mit dem entsprechenden Text abgefüllt werden. Platzhalter können im Titel (Subject) und im E-Mail Body verwendet werden. Die Werte werden immer in der aktuellen Benutzersprache abgefüllt. Auf Klick eines Platzhalters wird dieser an der aktuellen Stelle im Editor platziert. Die verfügbaren Platzhalter sind in Notifikationsplatzhalter ersichtlich. Klick auf einen Platzhalter fügt diesen an der aktuellen Cursor Position ein. Ist kein Cursor positioniert, wird der Platzhalter am Anfang des Body Textes eingefügt. Es ist immer nur eine Platzahlter Sektion gleichzeitig geöffnet. Die Platzhalter übernehmen die Formatierung des Body Editors.| 
{{< /bootstrap-table >}}

{{< imgproc Benutzergruppen_Notifikationen_bearbeiten Resize "960x" >}}
Benutzergruppen in der Liste bearbeiten
{{< /imgproc >}}

Sollten Sie keine Notifikationen in der Liste sehen, können Sie eine neue hinzufügen. Dafür klicken Sie auf den Button `hinzufügen`. Es öffnet sich das gleiche Feld mit den oben beschriebenen Funktionen.

{{< imgproc Benutzergruppen_Notifikationen_hinzufügen Resize "960x" >}}
Benutzergruppen hinzufügen
{{< /imgproc >}}

### Serienbegrenzung auf Benutzergruppen anwenden

1. Legen Sie die **Anzahl** der maximalen jährlichen, monatlichen, wöchentlichen und täglichen Serienbuchungen fest.
2. Klicken Sie auf **Speichern**.

{{< imgproc SerienBGbegrenzen_BGr Resize "960x" >}} {{< /imgproc >}}