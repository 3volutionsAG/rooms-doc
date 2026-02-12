---
title: "Outlook Importe"
linkTitle: "Outlook Importe"
weight: 3
description: "Importieren Sie Outlook-Kalenderexporte (CSV) als Raumbuchungen in 3V-ROOMS – ideal für Migrationen oder die schnelle Übernahme bestehender Termine."
---

{{% alert title="Voraussetzung (häufige Fehlerquelle)" color="info" %}}
Damit Sie Outlook-Kalender importieren können, benötigen Sie:

- das Recht **„Sektion Einstellungen nutzen"**
- das Recht **„Darf Outlook Kalender Daten importieren"**

Ohne diese Berechtigung ist der Menüpunkt „Outlook Importe" nicht sichtbar.

Details: [`Einstellungen → Sicherheitsdaten → Rollen → Rechte verwalten`](/3vrooms/einstellungen/sicherheitsdaten/rollen/rechteverwalten/).
{{% /alert %}}

## Wozu gibt es „Outlook Importe"?

Mit **Outlook Importe** können Sie Termine aus einem Outlook-Kalender als Raumbuchungen in 3V-ROOMS übernehmen. Das ist besonders nützlich für:

- **Migration**: Übernahme bestehender Kalender bei der Einführung von 3V-ROOMS
- **Raumkalender-Import**: Wenn ein Raum bisher direkt in Outlook verwaltet wurde
- **Massenimport**: Schnelle Erfassung vieler Termine auf einmal

Der Import verarbeitet CSV-Dateien, die Sie direkt aus Outlook exportieren können.

{{< imgproc Outlook_Importe Resize "960x" >}}
Übersicht „Outlook Importe" (CSV-Datei auswählen und Importoptionen konfigurieren)
{{< /imgproc >}}

## Schnellübersicht: So funktioniert der Import

{{< bootstrap-table "table table-striped" >}}
| Schritt | Was passiert? |
|---|---|
| 1. CSV hochladen | Sie laden eine aus Outlook exportierte CSV-Datei hoch |
| 2. Zielraum wählen | Sie wählen den Raum, in den alle Termine importiert werden sollen |
| 3. Vorschau prüfen | Das System zeigt alle erkannten Termine – gültige und fehlerhafte |
| 4. Bei Bedarf korrigieren | Sie können einzelne Einträge vor dem Speichern anpassen |
| 5. Import bestätigen | Alle gültigen Termine werden als Buchungen gespeichert |
{{< /bootstrap-table >}}

## Schritt-für-Schritt-Anleitung

### 1) CSV-Datei aus Outlook exportieren

1. Öffnen Sie Outlook und wählen Sie den gewünschten Kalender.
2. Gehen Sie auf **Datei → Öffnen und Exportieren → Importieren/Exportieren**.
3. Wählen Sie **„In Datei exportieren"** und dann **„Kommagetrennte Werte (CSV)"**.
4. Speichern Sie die Datei auf Ihrem Computer.

{{% alert title="Tipp" color="info" %}}
Bereinigen Sie die CSV-Datei vor dem Import – entfernen Sie z.B. abgesagte Termine oder Einträge, die nicht als Buchung übernommen werden sollen.
{{% /alert %}}

### 2) Import in 3V-ROOMS starten

1. Navigieren Sie zu `Einstellungen` → `System` → `Outlook Importe`.
2. Klicken Sie auf **Browse** und wählen Sie Ihre CSV-Datei aus.
3. Wählen Sie die **Zielressource** (den Raum, in den importiert werden soll).
4. Optional: Wählen Sie einen **Default-Organisator** (wird verwendet, wenn der Organisator aus der Datei nicht im System gefunden wird).
5. Klicken Sie auf **Import starten**.

### 3) Vorschau prüfen und Einträge bearbeiten

Nach dem Hochladen sehen Sie eine Liste aller erkannten Termine:

- **Grüner Haken** = Eintrag ist gültig und kann gespeichert werden
- **Rotes X** = Validierungsfehler (z.B. Zeitkonflikt, ungültiges Datum)

Sie können einzelne Einträge per Klick öffnen und anpassen (z.B. Organisator ändern, Zeiten korrigieren).

### 4) Import abschliessen

- Klicken Sie auf **Speichern**, um alle gültigen Einträge als Buchungen zu erstellen.
- Oder klicken Sie auf **Abbrechen**, um den gesamten Import zu verwerfen.

{{% alert title="Hinweis" color="secondary" %}}
Beim Import werden keine E-Mail-Benachrichtigungen versendet und keine Exchange-Synchronisationen ausgelöst – die Buchungen erscheinen direkt im System.
{{% /alert %}}

## Unterstützte CSV-Formate

Das System erkennt automatisch das Format Ihrer CSV-Datei. Folgende Formate werden unterstützt:

### Deutsches Outlook-Format

Wenn Sie Outlook auf Deutsch verwenden, sieht der Export typischerweise so aus:

```csv
Titel;BeginnDatum;BeginnZeit;EndeDatum;EndeZeit;Organisator;TeilnehmerOptional;TeilnehmerZwingend;Bemerkungen;IstPrivat
Scrum Basic;16.01.2025;08:30;18.01.2025;16:30;Lisa Beispiel;;;;Nein
Projektmeeting;11.03.2025;14:00;11.03.2025;15:30;Max Muster;anna@beispiel.ch;peter@beispiel.ch;Agenda folgt;Nein
Workshop KI;05.11.2025;08:30;06.11.2025;12:00;Lisa Beispiel;;;;Ja
```

### Englisches Outlook-Format

Bei einem englischen Outlook-Export werden mehr Spalten exportiert – das System verwendet nur die relevanten:

```csv
"Subject","Start Date","Start Time","End Date","End Time","All day event","Reminder on/off","Reminder Date","Reminder Time","Meeting Organizer","Required Attendees","Optional Attendees","Meeting Resources","Billing Information","Categories","Description","Location","Mileage","Priority","Private","Sensitivity","Show time as"
"Team Meeting","26.2.2025","13:30:00","26.2.2025","16:00:00","False","True","26.2.2025","13:15:00","Maria Schmidt","Hans Müller;Anna Keller",,,,,"Quartalsplanung","Raum 12",,"Normal","False","Normal","2"
```

{{% alert title="Tipp" color="info" %}}
Sie müssen nicht wissen, welches Format Ihre Datei hat – das System erkennt es automatisch. Nur wenn die automatische Erkennung fehlschlägt, müssen Sie die Spaltenindizes manuell angeben.
{{% /alert %}}

## Felder in der CSV-Datei

{{< bootstrap-table "table table-striped" >}}
| Feld | Beschreibung | Beispiel |
|---|---|---|
| **Titel/Subject** | Betreff des Termins → wird zum Buchungstitel | „Projektmeeting Q1" |
| **Beginn-Datum** | Startdatum (Format je nach Sprache) | 16.01.2025 oder 01/16/2025 |
| **Beginn-Zeit** | Startzeit | 08:30 oder 08:30:00 |
| **Ende-Datum** | Enddatum | 16.01.2025 |
| **Ende-Zeit** | Endzeit | 10:30 |
| **Organisator** | Name oder E-Mail des Organisators | „Max Muster" oder „max@firma.ch" |
| **Erforderliche Teilnehmer** | Pflicht-Teilnehmer (mehrere mit Semikolon getrennt) | „Anna Keller;Peter Meier" |
| **Optionale Teilnehmer** | Optionale Teilnehmer (mehrere mit Semikolon getrennt) | „Lisa Müller;Hans Fischer" |
| **Bemerkungen** | Notizen → werden als vertraulicher Kommentar gespeichert | „Beamer benötigt" |
| **Ist Privat** | Privater Termin? | Ja/Nein, True/False, Yes/No |
{{< /bootstrap-table >}}

## Optionale Einstellungen

In den meisten Fällen erkennt das System die Struktur der CSV-Datei automatisch. Falls nicht, können Sie folgende Einstellungen anpassen:

### Trennzeichen und Formatierung

{{< bootstrap-table "table table-striped" >}}
| Einstellung | Beschreibung | Standard | Alternativen |
|---|---|---|---|
| **Trennzeichen** | Trennt die Spalten voneinander | `,` (Komma) | `;` (Semikolon), Tabulator |
| **Feldbegrenzzeichen** | Umschliesst Textfelder | `"` (Anführungszeichen) | `'` (Hochkomma) |
| **Maskierungszeichen** | Für Sonderzeichen in Texten | `"` | – |
{{< /bootstrap-table >}}

### Manuelle Spaltenreihenfolge (Index-basiert)

Wenn die automatische Erkennung fehlschlägt, können Sie die Position jeder Spalte manuell angeben. Die Zählung beginnt bei **0** (erste Spalte = 0, zweite Spalte = 1, usw.).

{{< bootstrap-table "table table-striped" >}}
| Feld | Beschreibung | Typischer Index |
|---|---|---|
| Spaltenindex Titel | Position der Titel-Spalte | 0 |
| Spaltenindex Beginn-Datum | Position des Startdatums | 1 |
| Spaltenindex Beginn-Zeit | Position der Startzeit | 2 |
| Spaltenindex Ende-Datum | Position des Enddatums | 3 |
| Spaltenindex Ende-Zeit | Position der Endzeit | 4 |
| Spaltenindex Organisator | Position des Organisators | 5 |
| Spaltenindex optionale Teilnehmer | Position der optionalen Teilnehmer | 6 |
| Spaltenindex erforderliche Teilnehmer | Position der Pflichtteilnehmer | 7 |
| Spaltenindex Bemerkung | Position der Bemerkungen | 8 |
| Spaltenindex Ist Privat | Position des Privat-Flags | 9 |
{{< /bootstrap-table >}}

## Wie werden Personen zugeordnet?

Das System versucht, Organisatoren und Teilnehmer aus der CSV-Datei automatisch mit bestehenden Personen im System abzugleichen. Dabei wird in folgender Reihenfolge gesucht:

1. **Personalnummer** – exakte Übereinstimmung
2. **E-Mail-Adresse** – exakte Übereinstimmung
3. **Name** – Vorname + Nachname in verschiedenen Kombinationen
4. **E-Mail in Klammern** – z.B. „Max Muster (max@firma.ch)"

**Was passiert, wenn keine Person gefunden wird?**

- **Organisator**: Es wird der Default-Organisator verwendet (falls angegeben), sonst der aktuell angemeldete Benutzer.
- **Teilnehmer**: Wird als externer Teilnehmer mit dem angegebenen Namen/E-Mail erstellt.

{{% alert title="Tipp" color="info" %}}
Für eine saubere Zuordnung verwenden Sie in Outlook am besten E-Mail-Adressen, die auch im 3V-ROOMS-System hinterlegt sind.
{{% /alert %}}

## Beispiel: Kompletter Import-Workflow

**Szenario**: Sie möchten den Konferenzraum-Kalender aus Outlook in 3V-ROOMS übernehmen.

1. **Vorbereitung**: Exportieren Sie den Outlook-Kalender als CSV und entfernen Sie abgesagte Termine.

2. **CSV-Beispiel** (deutsches Format):
   ```csv
   Titel;BeginnDatum;BeginnZeit;EndeDatum;EndeZeit;Organisator;TeilnehmerOptional;TeilnehmerZwingend;Bemerkungen;IstPrivat
   Kick-off Projekt Alpha;20.03.2025;09:00;20.03.2025;11:00;anna.schmidt@firma.ch;;peter.mueller@firma.ch;Beamer reserviert;Nein
   Wöchentliches Teammeeting;21.03.2025;14:00;21.03.2025;15:00;max.muster@firma.ch;;;Wiederkehrend;Nein
   ```

3. **Import durchführen**:
   - CSV-Datei hochladen
   - Zielressource „Konferenzraum A" auswählen
   - Default-Organisator festlegen (falls gewünscht)
   - Import starten

4. **Vorschau prüfen**: Beide Einträge werden grün angezeigt → gültig.

5. **Speichern**: Die Termine erscheinen als Buchungen im System.

## Häufige Probleme und Lösungen

{{< bootstrap-table "table table-striped" >}}
| Problem | Mögliche Ursache | Lösung |
|---|---|---|
| „Datei konnte nicht verarbeitet werden" | CSV-Format nicht erkannt | Prüfen Sie das Trennzeichen; bei Bedarf Spaltenindizes manuell setzen |
| Termine werden mit falscher Zeit angezeigt | Zeitzone | Stellen Sie sicher, dass die Zielressource die richtige Zeitzone hat |
| Organisator nicht gefunden | Name/E-Mail stimmt nicht überein | Verwenden Sie E-Mail-Adressen, die im System hinterlegt sind |
| Validierungsfehler (rotes X) | Zeitkonflikt oder ungültiges Datum | Prüfen Sie den Eintrag und passen Sie Start-/Endzeit an |
| Datei zu gross | Überschreitet Uploadlimit (5 MB) | Teilen Sie die Datei auf oder entfernen Sie unnötige Spalten |
{{< /bootstrap-table >}}

{{% alert title="Hinweis" color="secondary" %}}
Wenn Datum oder Zeit in der CSV nicht erkannt werden, verwendet das System die aktuelle Zeit als Fallback. Überprüfen Sie daher immer die Vorschau vor dem Speichern.
{{% /alert %}} 



