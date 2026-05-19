---
title: "OE Firmen"
linkTitle: "OE Firmen"
weight: 1
description: 'In diesem Bereich bearbeiten und speichern Sie OE- und Firmenlisten. Ebenfalls können Sie Firmen und Kooperationspartner neu anlegen und Stammdaten, Adressen, Personen, Kostenträger und Präferenzen bearbeiten und speichern.'
---

In der Startansicht unter der Kategorie OE und Firmen, sehen Sie auf der rechten Seite die Firmen in Listenform dargestellt. Aut der linken Seite sehen Sie das Sidepanel mit Filterfunktionen. Hier können Sie nach eingetragenen Firmen suchen.

{{< imgproc OE_Firmen_Ansicht Resize "960x" >}}
OE/Firmen Ansicht in der Startansicht
{{< /imgproc >}}

### OE/Firmen suchen


Im linken Menü finden Sie unter der Kategorie "OE/Firmen" eine Suchfunktion mit dessen Hilfe Sie nach:

* Bezeichnung
* Strasse
* Postleitzahl
* Ort
* Art der Firma (intern oder extern)
suchen können


Betätigen Sie den Button _Anzeigen_, um sich Ihre gefilterten Firmen anzeigen zu lassen.

## OE/Firmen bearbeiten oder neu eintragen


Die Stammdaten, Adressen, Personen, Kostenträger und Präferenzen bearbeiten Sie, indem Sie das Stift Icon _Bearbeiten_ auswählen. Ebenfalls können Sie eine Firma neu eintragen, indem Sie auf den untenstehenden Button _Neu_ klicken. Es öffnet sich in beiden Fällen das gleiche Feld zur Bearbeitung.

{{< imgproc OE_Firmen_bearbeiten Resize "960x" >}}
Bearbeitete Eigenschaften unter OE/Firmen speichern
{{< /imgproc >}}


Speichern Sie alle Ihre Einträge über den untenstehenden Button _Speichern_

### OE/Firmen: Stammdaten bearbeiten


In den Stammdaten tragen Sie folgende Informationen ein:

* Bezeichnung
* E-Mail
* Verifiziert
  * Zeigt an, ob die Firma verifiziert ist. Bei der Benutzer-Registration neu erstellte Firmen werden als unverifiziert markiert.
* Firmennummer
* Abteilung
* Art (intern/extern*) *=markiert
* Kostenstellen Code
* Kostenstellen Name
* Standard Rabatt in %

{{< imgproc OE_Firmen_Stammdaten_bearbeiten Resize "960x" >}}
Stammdaten bearbeiten
{{< /imgproc >}}

### OE/Firmen: Adressen bearbeiten


Sie sehen die eingetragene Adresse einer Firma in diesem Menüreiter. Tragen Sie eine neue Firma ein, geben Sie hier die Adressdaten der neu-eingetragenen Firma ein.

{{< imgproc OE_Firmen_bearbeiten_Adressen Resize "960x" >}}
Ansicht Adressen der Firmen
{{< /imgproc >}}


Sie tragen eine Adresse ein, indem Sie auf den untenstehenden Button "Erstellen" klicken. Es öffnet sich ein Feld. Hier tragen Sie Adresse, PLZ, Ort und Land ein. Ausserdem können Sie die Adresse als Standardadresse festlegen, indem Sie die Checkbox aktivieren.

{{< imgproc OE_Firmen_bearbeiten_Adresse_eintragen Resize "960x" >}}
Neue Adresse zu einer Firma hinzufügen
{{< /imgproc >}}


Haben Sie eine Adresse hinzugefügt und auf speichern geklickt, aktualisiert sich die Liste automatisch und Sie sehen die neu eingetragene Adresse in der Liste.

{{< imgproc OE_Firmen_bearbeiten_Adressen_Ansicht Resize "960x" >}}
Einsehen der Adressen in Listenform
{{< /imgproc >}}


**Hinweis**: Es kann immer nur eine Adresse pro OE/Firma als Standard definiert werden. Eine Adresse muss als Standard definiert werden

### OE/Firmen: Personen bearbeiten


Sie können Personen auf eine OE (intern) und auf eine Firma (extern) zuweisen. Bereits zugewiesene Personen sehen Sie in der Liste.

{{< imgproc OE_Firmen_Personen_Liste Resize "960x" >}}
Eingetragene Personen in Listenform
{{< /imgproc >}}


Möchten Sie eine Person einer Firma zuweisen, klicken Sie unten auf den Button _Person hinzufügen_. Es öffnet sich ein Fenster. In diesem wählen Sie eine oder mehrere Personen aus dem System aus.
Anschliessend können Sie noch eintragen:

* Gültigkeitsdauer,
* Telefon intern
* Telefon extern
* Fax

{{< imgproc OE_Firmen_Personen_hinzufügen Resize "960x" >}}
Eine Person einer Firma zuweisen
{{< /imgproc >}}


Die Liste aktualisiert sich automatisch und Sie sehen die zugewiesenen Personen.

#### Regeln der Zuordnung

{{< bootstrap-table "table table-striped" >}}
| Regel | Beschreibung |
|-------|-------------|
| **Eine Firma pro Zeitraum** | Eine Person kann immer nur einer Firma oder OE gleichzeitig zugeordnet sein. Überlappende Gültigkeitszeiträume bei verschiedenen Firmen sind nicht erlaubt. |
| **Gültigkeitsdauer** | Jede Zuordnung basiert auf einem Zeitraum (Beginn- und Enddatum). Wird kein Datum gesetzt, gilt die Zuordnung als unbefristet. |
| **Suchfilter** | Beim Hinzufügen einer Person erscheinen nur Personen, die im gewählten Zeitraum keiner anderen Firma oder OE zugewiesen sind. Bereits zugewiesene Personen werden in der Suche nicht angezeigt. |
{{< /bootstrap-table >}}

#### Zuordnung beenden oder ändern

Um eine Person einer anderen Firma zuzuordnen, muss die bestehende Zuordnung zuerst beendet werden:

1. Navigieren Sie zur Firma, der die Person aktuell zugeordnet ist
2. Öffnen Sie den Reiter **Personen** und suchen Sie die betreffende Person in der Liste
3. Klicken Sie auf das Stift-Icon, um die Zuordnung zu bearbeiten
4. Setzen Sie ein **Ende-Datum** (z.B. das heutige Datum) und speichern Sie
5. Anschliessend kann die Person bei einer anderen Firma über **Person hinzufügen** zugewiesen werden


**Hinweis**: Sie müssen die Person nicht neu erfassen. Durch das Setzen eines Ende-Datums wird die bisherige Zuordnung zeitlich begrenzt und die Person steht für eine neue Zuordnung zur Verfügung.

#### Häufige Fehlermeldungen

{{< bootstrap-table "table table-striped" >}}
| Fehlermeldung | Ursache | Lösung |
|---------------|---------|--------|
| *Die Person X ist zwischen Y bereits der Firma Z zugewiesen.* | Die Person hat eine aktive Zuordnung zu einer anderen Firma im selben Zeitraum. | Navigieren Sie zur genannten Firma und beenden Sie dort die Zuordnung (Ende-Datum setzen). |
| Person erscheint nicht in der Suche beim Hinzufügen | Die Person ist bereits einer anderen Firma zugeordnet oder wurde über einen Import ins System erfasst. | Prüfen Sie, ob die Person bei einer anderen Firma zugewiesen ist, und beenden Sie dort ggf. die Zuordnung. |
{{< /bootstrap-table >}}

### OE/Firmen: Kostenträger bearbeiten


Sie sehen die zugewiesenen Kostenträger einer Firma in Listenform.

{{< imgproc OE_Firmen_Kostenträger_Liste Resize "960x" >}}
Kostenträger in Listenform
{{< /imgproc >}}


Möchten Sie einen neuen Kostenträger zu einer Firma hinzufügen, machen Sie dies wie folgt: Klicken Sie auf den Button hinzufügen, im geöffnetem Feld wählen Sie den Kostenträger aus und bestätigen die Auswahl mit dem Button _hinzufügen_.

{{< imgproc OE_Firmen_Kostenträger_hinzufügen Resize "960x" >}}
Kostenträger einer Firma zuweisen und neu hinzufügen
{{< /imgproc >}}


Die Liste aktualisiert sich automatisch. Sie können mehrere Kostenträger auswählen.

{{< imgproc OE_Firmen_Kostenträger_aktualisierte_Liste Resize "960x" >}}
Aktualisierte Liste mit Kostenträgern, nachdem sie zugewiesen wurden
{{< /imgproc >}}

### OE/Firmen: Präferenzen bearbeiten


Sie können einen präferierten Standort hinzufügen. Ist dieser bereits ausgewählt, sehen Sie die Präferenz in Listenform.

{{< imgproc OE_Firmen_Präferenzen_Liste Resize "960x" >}}
Ansicht Ihrer Präferenzen in der Liste
{{< /imgproc >}}


Möchten Sie eine Präferenz hinzufügen, klicken Sie auf den Button _Präferenz hinzufügen_. Es öffnet sich ein Feld, in welchem Sie über aktivieren der Checkbox, den präferierten Standort auswählen und bestätigen.
Die Liste aktualisiert sich automatisch.

{{< imgproc OE_Firmen_Präferenzen_hinzufügen Resize "960x" >}}
Präferenzen zu einer Firma hinzufügen und zuweisen
{{< /imgproc >}}

### OE/Firmen Daten einsehen


Wenn Sie die gespeicherten Daten nur einsehen wollen, fahren Sie mit dem Mauszeiger über den Namen der Firma und klicken Sie auf diese. Es öffnet sich eine Zusammenfassung der eingetragenen und gespeicherten Daten zu dieser Firma.

{{< imgproc OE_Firmen_Informationen_einsehen Resize "960x" >}}
Informationen einer Firma einsehen
{{< /imgproc >}}


Mit Klick auf den Button _Bearbeiten_ können Sie auch aus dieser Ansicht die Daten der Firma bearbeiten.

{{< imgproc OE_Firmen_Daten_einsehen2 Resize "960x" >}}
Informationen einer Firma einsehen und bearbeiten
{{< /imgproc >}}
