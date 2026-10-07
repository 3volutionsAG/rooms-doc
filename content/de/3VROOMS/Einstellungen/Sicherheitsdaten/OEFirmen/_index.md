---
title: "Organisationen"
linkTitle: "Organisationen"
weight: 1
description: 'Organisationen verwalten: Stammdaten, Adressen, Personen, Kostenträger und Präferenzen bearbeiten sowie Organisationen neu anlegen.'
---

Unter **Einstellungen → Sicherheitsdaten für Personen → OE/Firmen** verwalten Sie Organisationen. Rechts sehen Sie die Organisationen als Liste. Links können Sie die Liste über Suchkriterien filtern.

{{< imgproc OE_Firmen_Ansicht Resize "960x" >}}
Ansicht der Organisationen
{{< /imgproc >}}

### Organisationen suchen {#oefirmen-suchen}


Mit der Suchfunktion können Sie nach folgenden Kriterien filtern:

* Bezeichnung
* Strasse
* Postleitzahl
* Ort
* Art der Organisation (intern oder extern)


Betätigen Sie den Button _Anzeigen_, um sich Ihre gefilterten Organisationen anzeigen zu lassen.

## Organisationen bearbeiten oder neu eintragen {#oefirmen-bearbeiten-oder-neu-eintragen}


Die Stammdaten, Adressen, Personen, Kostenträger und Präferenzen bearbeiten Sie, indem Sie das Stift Icon _Bearbeiten_ auswählen. Ebenfalls können Sie eine Organisation neu eintragen, indem Sie auf den untenstehenden Button _Neu_ klicken. Es öffnet sich in beiden Fällen das gleiche Feld zur Bearbeitung.

{{< imgproc OE_Firmen_bearbeiten Resize "960x" >}}
Bearbeitete Eigenschaften unter Organisationen speichern
{{< /imgproc >}}


Speichern Sie alle Ihre Einträge über den untenstehenden Button _Speichern_

### Organisationen: Stammdaten bearbeiten {#oefirmen-stammdaten-bearbeiten}


In den Stammdaten tragen Sie folgende Informationen ein:

* Bezeichnung
* E-Mail
* Verifiziert
  * Zeigt an, ob die Organisation verifiziert ist. Bei der Benutzer-Registration neu erstellte Organisationen werden als unverifiziert markiert.
* Firmennummer
* Abteilung
* Art (intern/extern*) *=markiert
* Kostenstellen Code
* Kostenstellen Name
* Standard Rabatt in %

{{< imgproc OE_Firmen_Stammdaten_bearbeiten Resize "960x" >}}
Stammdaten bearbeiten
{{< /imgproc >}}

### Organisationen: Adressen bearbeiten {#oefirmen-adressen-bearbeiten}


Sie sehen die eingetragene Adresse einer Organisation in diesem Menüreiter. Tragen Sie eine neue Organisation ein, geben Sie hier die Adressdaten der neu-eingetragenen Organisation ein.

{{< imgproc OE_Firmen_bearbeiten_Adressen Resize "960x" >}}
Ansicht Adressen der Organisationen
{{< /imgproc >}}


Sie tragen eine Adresse ein, indem Sie auf den untenstehenden Button "Erstellen" klicken. Es öffnet sich ein Feld. Hier tragen Sie Adresse, PLZ, Ort und Land ein. Ausserdem können Sie die Adresse als Standardadresse festlegen, indem Sie die Checkbox aktivieren.

{{< imgproc OE_Firmen_bearbeiten_Adresse_eintragen Resize "960x" >}}
Neue Adresse zu einer Organisation hinzufügen
{{< /imgproc >}}


Haben Sie eine Adresse hinzugefügt und auf speichern geklickt, aktualisiert sich die Liste automatisch und Sie sehen die neu eingetragene Adresse in der Liste.

{{< imgproc OE_Firmen_bearbeiten_Adressen_Ansicht Resize "960x" >}}
Einsehen der Adressen in Listenform
{{< /imgproc >}}


**Hinweis**: Es kann immer nur eine Adresse pro Organisation als Standard definiert werden. Eine Adresse muss als Standard definiert werden

### Organisationen: Personen bearbeiten {#oefirmen-personen-bearbeiten}


Sie können Personen einer internen oder externen Organisation zuweisen. Bereits zugewiesene Personen sehen Sie in der Liste.

Voraussetzung sind die globalen Rechte **Darf Firmen mit Personen verwalten** (65) und, je nach Art der Organisation, **Darf Firmen verwalten (intern)** (3) oder **Darf Firmen verwalten (extern)** (22). Sie finden das Register **Personen** unter **Einstellungen → Sicherheitsdaten für Personen → OE/Firmen**, wenn Sie die gewünschte Organisation bearbeiten.

{{< imgproc OE_Firmen_Personen_Liste Resize "960x" >}}
Eingetragene Personen in Listenform
{{< /imgproc >}}


Möchten Sie eine Person einer Organisation zuweisen, klicken Sie unten auf den Button _Person hinzufügen_. Es öffnet sich ein Fenster. In diesem wählen Sie eine oder mehrere Personen aus dem System aus.
Anschliessend können Sie noch eintragen:

* Gültigkeitsdauer,
* Telefon intern
* Telefon extern
* Fax

{{< imgproc OE_Firmen_Personen_hinzufügen Resize "960x" >}}
Eine Person einer Organisation zuweisen
{{< /imgproc >}}


Die Liste aktualisiert sich automatisch und Sie sehen die zugewiesenen Personen.

#### Regeln der Zuordnung

{{< bootstrap-table "table table-striped" >}}
| Regel | Beschreibung |
|-------|-------------|
| **Eine Organisation pro Zeitraum** | Eine Person kann immer nur einer Organisation gleichzeitig zugeordnet sein. Überlappende Gültigkeitszeiträume bei verschiedenen Organisationen sind nicht erlaubt. |
| **Gültigkeitsdauer** | Jede Zuordnung hat einen Beginn und ein optionales Ende. Ohne Beginn setzt ROOMS beim Hinzufügen den aktuellen Zeitpunkt. Ohne Ende bleibt die Zuordnung unbefristet. |
| **Suchfilter** | Personen mit einer aktuell gültigen Zuordnung zur bearbeiteten Organisation sowie importierte Personen werden beim Hinzufügen nicht zur Auswahl angeboten. Eine Zuordnung zu einer anderen Organisation blendet die Person nicht aus. Beim Speichern prüft ROOMS, ob sich die Gültigkeitszeiträume überschneiden. |
| **Personenart** | Die aktuell gültige Zuordnung bestimmt, ob eine Person intern oder extern ist. Personen ohne aktuell gültige Organisationszuordnung gelten als intern. |
| **Status der Person** | Die Organisationszuordnung und der Status **Aktiv/Inaktiv** sind unabhängig. Das Beenden einer Zuordnung setzt die Person nicht automatisch auf inaktiv. |
{{< /bootstrap-table >}}

#### Organisationswechsel mit automatischem Ende der bisherigen Zuordnung

Sie können eine Person direkt bei der neuen Organisation hinzufügen, ohne die aktuell gültige Zuordnung bei der bisherigen Organisation zuerst manuell zu beenden.

1. Öffnen Sie die **neue** Organisation zum Bearbeiten und wechseln Sie ins Register **Personen**.
2. Klicken Sie auf **Person hinzufügen**. Prüfen Sie in der Spalte **Organisation** die aktuell zugewiesene Organisation. Bei hinterlegter Abteilung erscheint sie als **Organisationsbezeichnung - Abteilung**. Wählen Sie die gewünschte Person oder mehrere Personen aus und bestätigen Sie das Hinzufügen.
3. Prüfen Sie den Warnhinweis, sofern er erscheint: **Bestehende Organisationszuweisungen der hinzugefügten Benutzer werden beim Speichern terminiert.** Er zeigt an, dass beim Speichern bisherige Zuordnungen geändert werden. Das Hinzufügen allein speichert den Organisationswechsel noch nicht dauerhaft.
4. Prüfen Sie in der Personenliste den **Beginn** und bei Bedarf das **Ende** der neuen Zuordnung. Ein zukünftiger Beginn legt den Zeitpunkt des Wechsels fest.
5. Speichern Sie die **Organisation** mit **Speichern**. Erst beim erfolgreichen Speichern übernimmt ROOMS die neue Zuordnung und setzt das Ende der bisher aktuell gültigen Zuordnung auf den Beginn der neuen Zuordnung.

{{% alert title="Vor dem Speichern prüfen" color="warning" %}}
Das Speichern kann ein bereits eingetragenes zukünftiges Ende der bisherigen Zuordnung durch den Beginn der neuen Zuordnung ersetzen. Prüfen Sie deshalb den gewünschten Wechselzeitpunkt für alle ausgewählten Personen. Der Hinweis ist eine Warnung, keine separate Bestätigungsfrage. Bei einem Validierungsfehler werden der Wechsel und das Beenden der bisherigen Zuordnung nicht dauerhaft gespeichert.
{{% /alert %}}

Das automatische Beenden betrifft bisherige Zuordnungen, die zum Zeitpunkt des Speicherns bereits begonnen haben und noch nicht beendet sind. Bereits beendete Zuordnungen und Zuordnungen mit einem zukünftigen Beginn werden dadurch nicht geändert. Auch das nachträgliche Bearbeiten einer bestehenden Zuordnung oder das Hinzufügen einer bereits abgeschlossenen Zuordnung löst keinen automatischen Wechsel aus. Bestehen weiterhin überlappende Zeiträume, etwa mit einer anderen geplanten Zuordnung, müssen Sie diese prüfen und manuell korrigieren.

#### Zuordnung beenden oder ändern

Sie können Beginn und Ende einer Zuordnung auch manuell ändern, beispielsweise um Gültigkeitszeiträume zu korrigieren:

1. Navigieren Sie zur Organisation, der die Person aktuell zugeordnet ist, und öffnen Sie die Bearbeitung.
2. Öffnen Sie den Reiter **Personen** und suchen Sie die betreffende Person in der Liste.
3. Tragen Sie in der Personenliste das gewünschte **Ende** der bisherigen Zuordnung ein und speichern Sie die Organisation.
4. Fügen Sie die Person bei der neuen Organisation über **Person hinzufügen** hinzu. Prüfen Sie den **Beginn**, damit sich die Zeiträume nicht überschneiden, und speichern Sie die neue Organisation.

**Hinweis**: Sie müssen die Person nicht neu erfassen. Durch das Setzen eines Ende-Datums wird die bisherige Zuordnung zeitlich begrenzt.

#### Häufige Fehlermeldungen

{{< bootstrap-table "table table-striped" >}}
| Fehlermeldung | Ursache | Lösung |
|---------------|---------|--------|
| *Die Person X ist zwischen Y bereits der Firma Z zugewiesen.* | Der Zeitraum einer anderen Zuordnung überschneidet sich mit der gewünschten Zuordnung. | Prüfen Sie Beginn und Ende bei der genannten und der neuen Organisation. Prüfen Sie insbesondere weitere geplante Zuordnungen, die nicht automatisch beendet werden, und korrigieren Sie deren Gültigkeitszeiträume bei Bedarf manuell. |
| Person erscheint nicht in der Suche beim Hinzufügen | Die Person ist bereits der bearbeiteten Organisation aktuell zugeordnet oder als importiert erfasst. | Prüfen Sie die Personenliste dieser Organisation und den Importstatus der Person. Das Beenden einer Zuordnung bei einer anderen Organisation macht importierte Personen nicht auswählbar. |
{{< /bootstrap-table >}}

### Organisationen: Kostenträger bearbeiten {#oefirmen-kostenträger-bearbeiten}


Sie sehen die zugewiesenen Kostenträger einer Organisation in Listenform.

{{< imgproc OE_Firmen_Kostenträger_Liste Resize "960x" >}}
Kostenträger in Listenform
{{< /imgproc >}}


Möchten Sie einen neuen Kostenträger zu einer Organisation hinzufügen, machen Sie dies wie folgt: Klicken Sie auf den Button hinzufügen, im geöffnetem Feld wählen Sie den Kostenträger aus und bestätigen die Auswahl mit dem Button _hinzufügen_.

{{< imgproc OE_Firmen_Kostenträger_hinzufügen Resize "960x" >}}
Kostenträger einer Organisation zuweisen und neu hinzufügen
{{< /imgproc >}}


Die Liste aktualisiert sich automatisch. Sie können mehrere Kostenträger auswählen.

{{< imgproc OE_Firmen_Kostenträger_aktualisierte_Liste Resize "960x" >}}
Aktualisierte Liste mit Kostenträgern, nachdem sie zugewiesen wurden
{{< /imgproc >}}

### Organisationen: Präferenzen bearbeiten {#oefirmen-präferenzen-bearbeiten}


Sie können einen präferierten Standort hinzufügen. Ist dieser bereits ausgewählt, sehen Sie die Präferenz in Listenform.

{{< imgproc OE_Firmen_Präferenzen_Liste Resize "960x" >}}
Ansicht Ihrer Präferenzen in der Liste
{{< /imgproc >}}


Möchten Sie eine Präferenz hinzufügen, klicken Sie auf den Button _Präferenz hinzufügen_. Es öffnet sich ein Feld, in welchem Sie über aktivieren der Checkbox, den präferierten Standort auswählen und bestätigen.
Die Liste aktualisiert sich automatisch.

{{< imgproc OE_Firmen_Präferenzen_hinzufügen Resize "960x" >}}
Präferenzen zu einer Organisation hinzufügen und zuweisen
{{< /imgproc >}}

### Organisationen Daten einsehen {#oefirmen-daten-einsehen}


Wenn Sie die gespeicherten Daten nur einsehen wollen, fahren Sie mit dem Mauszeiger über den Namen der Organisation und klicken Sie auf diese. Es öffnet sich eine Zusammenfassung der eingetragenen und gespeicherten Daten zu dieser Organisation.

{{< imgproc OE_Firmen_Informationen_einsehen Resize "960x" >}}
Informationen einer Organisation einsehen
{{< /imgproc >}}


Mit Klick auf den Button _Bearbeiten_ können Sie auch aus dieser Ansicht die Daten der Organisation bearbeiten.

{{< imgproc OE_Firmen_Daten_einsehen2 Resize "960x" >}}
Informationen einer Organisation einsehen und bearbeiten
{{< /imgproc >}}
