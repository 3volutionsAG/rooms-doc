---
title: "Massenbearbeitung"
linkTitle: "Massenbearbeitung"
weight: 3
description: 'Mit der Funktion *Massenbearbeitung* bearbeiten, löschen oder geben Sie mehrere bestehende Buchungen frei. In diesem Kapitel werden mit der Massenbearbeitung, der Massenannullation, der Massenfreigabe und der Massenterminierung verschiedene Arten der Massenbearbeitung erklärt. Alle Funktionen können Sie in den Menüs Plan, Kalender und Listen durchführen.'
---

Das Ziel der Massenbearbeitung ist es, eine oder mehrere Buchungen in den gleichen Prozessschritten bearbeiten zu können. Um diese Funktion nutzen zu können, sind entsprechende Berechtigungen notwendig.
Sie führen eine Massenbearbeitung in drei Schritten durch. Diese drei Schritte lassen sich auf die selbe Art und Weise in den Reitern _Kalender_, _Plan_ und _Listen_ wiederholen.

1. Selektion von zwei oder mehr Buchungen
2. Auf den Button **Bearbeiten**, **Freigeben** oder **Terminieren** klicken.
3. Eingaben für alle übernehmen, terminieren oder freigeben

## Verarbeitung und Ergebnis beim Bearbeiten

Wenn Sie mehrere Buchungen über _Bearbeiten_ ändern und mit _Für alle übernehmen_ bestätigen, hängt die Verarbeitung von der Anzahl ausgewählter Buchungen ab:

- **Bis zu fünf Buchungen:** ROOMS verarbeitet die Änderungen direkt beim Bestätigen.
- **Ab sechs Buchungen:** ROOMS verarbeitet die Änderungen im Hintergrund. Die Meldung «Die Änderungen werden nun übernommen. Sie werden wieder informiert, sobald der Vorgang abgeschlossen ist.» bestätigt den Auftrag, nicht die erfolgreiche Änderung aller Buchungen.

Dies gilt sowohl für einzelne Buchungen ohne Anlasszuordnung als auch für Buchungen eines Anlasses.

Nach Abschluss erhalten Sie eine Mitteilung mit einem Link zur Zusammenfassung als CSV-Datei. Prüfen Sie darin die Ergebnisse der einzelnen Buchungen, insbesondere Warnungen und Fehler. Eine Massenbearbeitung kann teilweise erfolgreich sein, beispielsweise wenn Ihnen für einzelne Buchungen das Bearbeitungsrecht fehlt.

Die gleiche Verarbeitung gilt beim [Hinzufügen bestehender Buchungen zu einem Anlass]({{< relref "/3VROOMS/Listen/AnlaesseSuchen/Anzeigenbereich/DetailansichtAnlaesse/BGhinzufuegen" >}}).

### Massenbearbeitung im Reiter Kalender


Sofern das Recht _Darf Massenmutationen vornehmen_ vorhanden ist, erscheint bei einem Mouse-Over über eine Reservation rechts davon eine Checkbox.


Wählen Sie mit der Maus mehrere Buchungen aus, die Sie ändern möchten, indem Sie die Checkbox aktivieren.


**Bemerkung**:
Dies funktioniert nicht über das **+**-Symbol neben einer der selektierten Reservationen, da dies der individuelle Kontext einer einzelnen Buchung ist. Für eine Massenmutation muss der Button _Bearbeiten_ unten links gewählt werden.

{{< imgproc Massenbearbeitung_Kalender Resize "960x" >}}
Im Reiter Kalender eine Massenbearbeitung der Buchungen vornehmen
{{< /imgproc >}}


Beim Klicken auf den Button _Bearbeiten_ sehen Sie den Tab mit den Daten, die Sie bearbeiten können:

* Datum
* Zeit
* der Titel
* der Organisator
* die Verantwortliche:r


Vor jedem dieser Felder befindet sich eine Checkbox. Aktivieren Sie diese Checkbox, wird der neue Wert auf alle Reservationen übernommen. Aktivieren Sie nicht die Checkbox, bleiben die Werte der einzelnen Reservationen erhalten.


Nachdem Sie die gewünschten Änderungen eingegeben haben, schliessen Sie die Bearbeitung mit Klick auf den Button _Für alle Übernehmen_.

{{< imgproc Massenbearbeitung_Felder_eintragen Resize "960x" >}}
Daten der ausgewählten Buchungen bearbeiten und ändern
{{< /imgproc >}}

### Massenbearbeitung im Reiter Listen


Vor jeder Reservation befindet sich eine Checkbox.


Wählen Sie die gewünschten Buchungen aus, welche Sie ändern möchten, indem Sie die Checkbox vor dem Listenelement aktivieren.
Klicken Sie anschliessend, wie oben beschrieben, den Button **Bearbeiten**. Es öffnet sich das Bearbeitungsfenster. Folgende Daten können Sie ändern:

* Datum
* Zeit
* der Titel
* der Organisator
* die Verantwortliche:r


Vor jedem dieser Felder befindet sich eine Checkbox. Aktivieren Sie diese Checkbox, wird der neue Wert auf alle Reservationen übernommen. Aktivieren Sie nicht die Checkbox, bleiben die Werte der einzelnen Reservationen erhalten.


Nachdem Sie die gewünschten Änderungen eingegeben haben, schliessen Sie die Bearbeitung mit Klick auf den Button _Für alle Übernehmen_.

{{< imgproc Massenbearbeitung_Listen Resize "960x" >}}
Im Reiter Listen eine Massenbearbeitung der Buchungen vornehmen
{{< /imgproc >}}

### Massenbearbeitung im Reiter Plan


In der Planansicht: Der Benutzer selektiert mittels Mausklick auf die Fläche des Polygons die gewünschten Räume.



