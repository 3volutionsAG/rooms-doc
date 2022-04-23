---
title: "Schaltflächen"
linkTitle: "Schaltflächen"
weight: 3
description: >
    Am unteren Rand des Anzeigenbereichs befinden sich Schaltflächen zum Löschen und Hinzufügen von Personen
---
{{< imgproc List_Pers_geschw_Schalt Resize "1280x" >}}
Schaltflächen zum Löschen und Hinzufügen von Personen
{{< /imgproc >}}

## Personen löschen

Markieren Sie eine oder mehrere Checkboxen am Zeilenanfang und klicken Sie auf die Schaltfläche "Person unwiderruflich löschen", um diese aus der Datenbank zu entfernen.
Es können nur externe Personen oder Teilnehmende gelöscht werden. Mitarbeitende können nur entfernt werden, sofern Sie bei keiner aktiven Buchung Verantwortlicher, Organisator oder Ersteller sind. Damit dies möglich ist legen Sie zunächst eine fiktive Person (Dummy) an, auf welche die bestehenden Buchungen übertragen werden. Dem Dummy wird die Eindeutige ID eines  Mitarbeiter zugeordnet. Die aktiven Buchungen werden diesem Mitarbeiter zugeordnet.

### Dummy definieren

Öffnen Sie die Dummy ID, um einen Mitarbeiter festzulegen, auf den aktive Buchungen übertragen werden sollen, wenn eine Person aus dem System gelöscht wird.
Die Dummy ID finden Sie unter Einstellungen -> System -> Parameter Global -> Dummy ID.
Klicken Sie auf die Schaltfläche _Bearbeiten_ und tragen Sie in das Feld _Wert_ die _ID_ des Mitarbeiters ein, auf den die Buchungen übertragen werden sollen. Klicken Sie auf _Speichern_, um die Änderungen zu speichern und die Eingabemaske zu schließen.

## Neue Person hinzufügen

Über diese Schaltfläche erstellen Sie einen <a href="/einstellungen/personen/"> neuen Personeneintrag </a> in der Datenbank .

{{< imgproc List_Pers_neu Resize "1280x" >}}
Eingabemaske um eine neue Person der Datenbank hinzuzufügen
{{< /imgproc >}}

Eine detaillierte Beschreibung zum Hinzufügen von Personen finden Sie unter Einstellungen im Kapitel <a href="/einstellungen/personen"> Person </a>.
