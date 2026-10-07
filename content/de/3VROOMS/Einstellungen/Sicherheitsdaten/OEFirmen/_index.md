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

Voraussetzung sind die globalen Rechte **Darf Firmen mit Personen verwalten** (65) und, je nach Art der Organisation, **Darf Firmen verwalten (intern)** (3) oder **Darf Firmen verwalten (extern)** (22). Sie finden das Register **Personen** unter **Einstellungen → Sicherheitsdaten für Personen → OE/Firmen**, wenn Sie die gewünschte Organisation bearbeiten.

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
| **Gültigkeitsdauer** | Jede Zuordnung hat einen Beginn und ein optionales Ende. Ohne Beginn setzt ROOMS beim Hinzufügen den aktuellen Zeitpunkt. Ohne Ende bleibt die Zuordnung unbefristet. |
| **Suchfilter** | Personen mit einer aktuell gültigen Zuordnung zur bearbeiteten OE/Firma sowie importierte Personen werden beim Hinzufügen nicht zur Auswahl angeboten. Eine Zuordnung zu einer anderen OE/Firma blendet die Person nicht aus. Beim Speichern prüft ROOMS, ob sich die Gültigkeitszeiträume überschneiden. |
| **Personenart** | Die aktuell gültige Zuordnung bestimmt, ob eine Person intern oder extern ist. Personen ohne aktuell gültige Firmen- oder OE-Zuordnung gelten als intern. |
| **Status der Person** | Die Firmen- oder OE-Zuordnung und der Status **Aktiv/Inaktiv** sind unabhängig. Das Beenden einer Zuordnung setzt die Person nicht automatisch auf inaktiv. |
{{< /bootstrap-table >}}

#### Organisationswechsel mit automatischem Ende der bisherigen Zuordnung

{{% alert title="Gilt für eine kommende Version" color="info" %}}
Der hier beschriebene Organisationswechsel mit automatischer Terminierung, die zusätzliche Spalte **Organisation** und der Warnhinweis sind in Vorbereitung. Sie sind im geprüften Produktions- und Release-Candidate-Stand noch nicht enthalten. Bis zur Freigabe verwenden Sie das unten beschriebene [manuelle Vorgehen](#zuordnung-beenden-oder-ändern).
{{% /alert %}}

In der kommenden Version können Sie eine Person direkt bei der neuen OE/Firma hinzufügen, ohne die aktuell gültige Zuordnung bei der bisherigen Organisation zuerst manuell zu beenden.

1. Öffnen Sie die **neue** OE/Firma zum Bearbeiten und wechseln Sie ins Register **Personen**.
2. Klicken Sie auf **Person hinzufügen**. Prüfen Sie in der Spalte **Organisation** die aktuell zugewiesene Organisation. Bei hinterlegter Abteilung erscheint sie als **Firmenbezeichnung - Abteilung**. Wählen Sie die gewünschte Person oder mehrere Personen aus und bestätigen Sie das Hinzufügen.
3. Prüfen Sie den Warnhinweis, sofern er erscheint: **Bestehende Organisationszuweisungen der hinzugefügten Benutzer werden beim Speichern terminiert.** Er zeigt an, dass beim Speichern bisherige Zuordnungen geändert werden. Das Hinzufügen allein speichert den Organisationswechsel noch nicht dauerhaft.
4. Prüfen Sie in der Personenliste den **Beginn** und bei Bedarf das **Ende** der neuen Zuordnung. Ein zukünftiger Beginn legt den Zeitpunkt des Wechsels fest.
5. Speichern Sie die **OE/Firma** mit **Speichern**. Erst beim erfolgreichen Speichern übernimmt ROOMS die neue Zuordnung und setzt das Ende der bisher aktuell gültigen Zuordnung auf den Beginn der neuen Zuordnung.

{{% alert title="Vor dem Speichern prüfen" color="warning" %}}
Das Speichern kann ein bereits eingetragenes zukünftiges Ende der bisherigen Zuordnung durch den Beginn der neuen Zuordnung ersetzen. Prüfen Sie deshalb den gewünschten Wechselzeitpunkt für alle ausgewählten Personen. Der Hinweis ist eine Warnung, keine separate Bestätigungsfrage. Bei einem Validierungsfehler werden der Wechsel und die Terminierung nicht dauerhaft gespeichert.
{{% /alert %}}

Die automatische Terminierung betrifft bisherige Zuordnungen, die zum Zeitpunkt des Speicherns bereits begonnen haben und noch nicht beendet sind. Bereits beendete Zuordnungen und Zuordnungen mit einem zukünftigen Beginn werden dadurch nicht geändert. Auch das nachträgliche Bearbeiten einer bestehenden Zuordnung oder das Hinzufügen einer bereits abgeschlossenen Zuordnung löst keinen automatischen Wechsel aus. Bestehen weiterhin überlappende Zeiträume, etwa mit einer anderen geplanten Zuordnung, müssen Sie diese prüfen und manuell korrigieren.

#### Zuordnung beenden oder ändern

In Versionen ohne automatische Terminierung muss die bestehende Zuordnung vor dem Wechsel über **Person hinzufügen** manuell beendet werden. Das manuelle Vorgehen bleibt auch für die Korrektur von Gültigkeitszeiträumen relevant:

1. Navigieren Sie zur OE/Firma, der die Person aktuell zugeordnet ist, und öffnen Sie die Bearbeitung.
2. Öffnen Sie den Reiter **Personen** und suchen Sie die betreffende Person in der Liste.
3. Tragen Sie in der Personenliste das gewünschte **Ende** der bisherigen Zuordnung ein und speichern Sie die OE/Firma.
4. Fügen Sie die Person bei der neuen OE/Firma über **Person hinzufügen** hinzu. Prüfen Sie den **Beginn**, damit sich die Zeiträume nicht überschneiden, und speichern Sie die neue OE/Firma.

**Hinweis**: Sie müssen die Person nicht neu erfassen. Durch das Setzen eines Ende-Datums wird die bisherige Zuordnung zeitlich begrenzt.

#### Häufige Fehlermeldungen

{{< bootstrap-table "table table-striped" >}}
| Fehlermeldung | Ursache | Lösung |
|---------------|---------|--------|
| *Die Person X ist zwischen Y bereits der Firma Z zugewiesen.* | Der Zeitraum einer anderen Zuordnung überschneidet sich mit der gewünschten Zuordnung. | Prüfen Sie Beginn und Ende bei der genannten und der neuen OE/Firma. In Versionen ohne automatische Terminierung beenden Sie die bisherige Zuordnung manuell. Bei automatischer Terminierung prüfen Sie insbesondere weitere geplante Zuordnungen, die nicht automatisch geändert werden. |
| Person erscheint nicht in der Suche beim Hinzufügen | Die Person ist bereits der bearbeiteten OE/Firma aktuell zugeordnet oder als importiert erfasst. | Prüfen Sie die Personenliste dieser OE/Firma und den Importstatus der Person. Das Beenden einer Zuordnung bei einer anderen Firma macht importierte Personen nicht auswählbar. |
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
