---
title: "Fragen"
linkTitle: "Fragen"
weight: 8
description: "Hier definieren Sie einzelne Fragen (Fragetypen, Optionen, Pflicht, Zeitregeln, Klassifikations-Einschränkungen), die in Fragenkatalogen verwendet werden."
---

{{% alert title="Voraussetzung (häufige Fehlerquelle)" color="info" %}}
Damit Sie Fragen erstellen/bearbeiten können, benötigen Sie in der Regel:

- das Recht **„Sektion Einstellungen nutzen“**
- das Recht **„Darf Fragenkatalog administrieren“**

Wenn Sie Pflicht-/Sperrregeln übersteuern müssen (z.B. Support), gibt es zusätzlich das Recht **„Darf zwingende Fragen ignorieren“**.

Details: [`Einstellungen → Sicherheitsdaten → Rollen → Rechte verwalten`](/3vrooms/einstellungen/sicherheitsdaten/rollen/rechteverwalten/).
{{% /alert %}}

## Wozu gibt es „Fragen“?

Unter **Fragen** erstellen Sie die Bausteine für Fragebögen. Diese Fragen werden anschliessend in einem oder mehreren **Fragenkatalogen** zusammengestellt und Ressourcen zugeordnet.

Weiterführend: [`Fragenkatalog`](/3vrooms/einstellungen/erweitertebasisdatenfuerressourcen/fragenkatalog/)

{{< imgproc Fragenliste Resize "960x" >}}
Übersicht „Fragenliste“ (Fragen anzeigen und bearbeiten)
{{< /imgproc >}}

## Schnellübersicht: Fragetypen im Vergleich

{{< bootstrap-table "table table-striped" >}}
| Fragetyp | Was sieht der Benutzer? | Geeignet für | Besonderheiten |
|---|---|---|---|
| Textfeld | Einzeilige Eingabe | kurze Angaben (z.B. Webcast-Titel, Kontakttelefon) | gut für Pflichtangaben |
| Textarea | Mehrzeilige Eingabe | Details (z.B. Agenda/Rednerreihenfolge, technische Kommentare) | besser lesbar für längere Texte |
| Checkbox | Ja/Nein | einfache Entscheidung (z.B. „Publikumsfragen zulassen?“) | schnell ausfüllbar |
| Radio | Auswahl **1** Option (Liste) | klare Auswahl (z.B. Präsentationsformat) | Optionen sichtbar, gut verständlich |
| Dropdown | Auswahl **1** Option (Dropdown) | längere Listen (z.B. Hintergrund/Branding-Auswahl) | spart Platz, Optionen müssen gepflegt sein |
| TimePicker | Zeitbereich von/bis | Zeitfenster ohne Datum (z.B. Soundcheck-Fenster) | Benutzer gibt 2 Werte an |
| DateTimePicker | Datum+Zeit von/bis | Zeitfenster mit Datum (z.B. Aufbauzeit inkl. Datum) | Benutzer gibt 2 Werte an |
| Label | Informationstext | Hinweise/Anleitung | keine Antwort, keine Validierung |
{{< /bootstrap-table >}}

{{% alert title="Hinweis" color="info" %}}
Bei **Radio** und **Dropdown** müssen Sie die **Optionen** (Werte) pflegen, damit Benutzer überhaupt auswählen können.
{{% /alert %}}

## Eine Frage erstellen

1. Erstellen Sie eine neue Frage.
2. Pflegen Sie mindestens:
   - **Bezeichnung** (klar und eindeutig)
   - **Fragetyp**
3. Optional (empfohlen):
   - **Hilfetext** (kurz: „Wofür brauchen wir diese Angabe?“)
   - **Sortierung** (Reihenfolge)
   - **Pflicht** (wenn wirklich nötig)
   - **Klassifikations-Einschränkung** (nur anzeigen, wenn relevant)
   - **Zeitregeln** (Zwingend bis / Editierbar bis)
   - **Aktiv** (steuert, ob die Frage überhaupt verwendet/angezeigt wird)
4. Speichern Sie.

{{< imgproc Frage-bearbeiten Resize "960x" >}}
Frage bearbeiten (Stammdaten, Typ, Klassifikationen, Aktiv/Pflicht, Zeitregeln)
{{< /imgproc >}}

## Regeln & Optionen

### Aktiv

Mit **Aktiv** steuern Sie, ob eine Frage im System **verwendet** wird.

- **Aktiv = ja**: Die Frage kann in Fragenkatalogen genutzt werden und erscheint – sofern zugeordnet/relevant – in Buchungen.
- **Aktiv = nein**: Die Frage wird im Alltag nicht mehr angeboten/angezeigt (praktisch, wenn Sie eine Frage ausphasen möchten, ohne sie zu löschen).

{{% alert title="Tipp" color="info" %}}
Wenn Sie eine Frage nicht mehr stellen möchten, ist „Aktiv“ meist die bessere Wahl als Löschen – so bleiben Konfiguration und Historie nachvollziehbar.
{{% /alert %}}

### Pflichtfrage

Wenn eine Frage als **Pflicht** markiert ist, muss sie beantwortet werden, damit eine Buchung gespeichert/abgeschlossen werden kann (Ausnahme: spezielle Berechtigung).

### „Zwingend bis“ – Pflicht wird erst kurz vor Beginn wirksam

Mit **Zwingend bis** können Sie festlegen, dass eine Pflichtfrage erst **ab einem bestimmten Zeitpunkt** zwingend wird, z.B. „3 Tage vor Beginn“.

### „Editierbar bis“ – Antwort wird schreibgeschützt

Mit **Editierbar bis** können Sie festlegen, ab wann bereits erfasste Antworten **nicht mehr geändert** werden können, z.B. „1 Tag vor Beginn“. Das stabilisiert Angaben für operative Teams.

### Klassifikations-Einschränkung

Wenn Sie bei einer Frage eine oder mehrere **Klassifikationen** hinterlegen, wird die Frage nur angezeigt, wenn die Buchung passend klassifiziert ist (z.B. „Event“).

So vermeiden Sie „zu viele“ Fragen und zeigen nur relevante Eingaben.

**Beispiel**

- Frage „Live-Webcast geplant?“ → eingeschränkt auf Klassifikation **„Event“**
- Buchung ohne „Event“ → Frage erscheint nicht
- Buchung mit „Event“ → Frage erscheint

Mehr zu Klassifikationen: [`Klassifikationen`](/3vrooms/einstellungen/erweitertebasisdatenfuerressourcen/klassifikationen/)

## Fragetypen im Detail

### Textfeld

- **Was sieht der Benutzer?** Ein einzeiliges Eingabefeld.
- **So konfigurieren Sie es**: Fragetyp **Textfeld**, ggf. Hilfetext, Pflicht/Regeln.
- **Beispiel**
  - Bezeichnung: „Technischer Ansprechpartner (Telefon)“
  - Hilfetext: „Telefonnummer für Rückfragen am Eventtag.“

### Textarea

- **Was sieht der Benutzer?** Ein mehrzeiliges Eingabefeld.
- **So konfigurieren Sie es**: Fragetyp **Textarea**, ggf. Hilfetext.
- **Beispiel**
  - Bezeichnung: „Agenda / Rednerreihenfolge“
  - Hilfetext: „Bitte Namen und Reihenfolge der Programmpunkte kurz angeben.“

### Checkbox

- **Was sieht der Benutzer?** Checkbox (Ja/Nein).
- **So konfigurieren Sie es**: Fragetyp **Checkbox**.
- **Beispiel**
  - Bezeichnung: „Live-Webcast: Publikumsfragen zulassen?“
  - Hilfetext: "Aktivieren, wenn Zuschauer schriftliche Fragen einsenden dürfen."

### Radio

- **Was sieht der Benutzer?** Eine Liste von Optionen, **eine** kann ausgewählt werden.
- **So konfigurieren Sie es**
  - Fragetyp **Radio**
  - **Optionen** pflegen (Reihenfolge beachten)
- **Beispiel**
  - Bezeichnung: „Präsentationsformat“
  - Optionen:
    - „PPT“
    - „Video“
    - „Demo“
    - „Anderes“

{{% alert title="Tipp" color="info" %}}
Radio eignet sich besonders, wenn Sie nur wenige Optionen haben und diese **sofort sichtbar** sein sollen.
{{% /alert %}}

### Dropdown

- **Was sieht der Benutzer?** Ein Dropdown mit auswählbaren Optionen, **eine** kann ausgewählt werden.
- **So konfigurieren Sie es**
  - Fragetyp **Dropdown**
  - **Optionen** pflegen
- **Beispiel**
  - Bezeichnung: „Präsentationsplattform“
  - Optionen:
    - „Eigenes Notebook“
    - „Raum-PC“
    - „Beides“

### TimePicker - Zeitbereich von/bis

- **Was sieht der Benutzer?** Zwei Zeitfelder: **von** und **bis**.
- **So konfigurieren Sie es**: Fragetyp **TimePicker**.
- **Beispiel**
  - Bezeichnung: „Soundcheck-Zeitfenster (von/bis)“
  - Hilfetext: „Bitte Zeitfenster angeben, in dem ein Soundcheck möglich ist.“

{{% alert title="Hinweis" color="secondary" %}}
Beim TimePicker werden zwei Werte erfasst (von/bis). Formulieren Sie die Bezeichnung/Hilfe so, dass Benutzer das sofort verstehen.
{{% /alert %}}

### DateTimePicker - Datum+Zeitbereich von/bis

- **Was sieht der Benutzer?** Zwei Felder: **von** und **bis** (Datum + Uhrzeit).
- **So konfigurieren Sie es**: Fragetyp **DateTimePicker**.
- **Beispiel**
  - Bezeichnung: „Aufbauzeit (von/bis)“
  - Hilfetext: „Zeitraum für Aufbau inkl. Datum angeben.“

### Label - Hinweistext

- **Was sieht der Benutzer?** Nur Text/Information, **keine Eingabe**.
- **So konfigurieren Sie es**: Fragetyp **Label**.
- **Beispiel**
  - Bezeichnung: „Bitte beachten: Technik-Anforderungen müssen spätestens 3 Werktage vor dem Event gemeldet werden.“

{{% alert title="Hinweis" color="info" %}}
Label ist ideal, um Benutzer zu führen (z.B. Fristen/Erwartungen), ohne zusätzliche Eingaben zu erzwingen.
{{% /alert %}}
