---
title: "Fragenkatalog"
linkTitle: "Fragenkatalog"
weight: 7
description: "Mit Fragenkatalogen sammeln Sie strukturierte Zusatzinformationen zu Buchungen – gezielt pro Ressource (z.B. Raum) und optional abhängig von Klassifikationen."
---

{{% alert title="Voraussetzung (häufige Fehlerquelle)" color="info" %}}
Für das Erstellen/Bearbeiten von Fragenkatalogen benötigen Sie in der Regel:

- das Recht **„Sektion Einstellungen nutzen“**
- das Recht **„Darf Fragenkatalog administrieren“**

Wenn Sie Pflicht-/Sperrregeln übersteuern müssen (z.B. Support), gibt es zusätzlich das Recht **„Darf zwingende Fragen ignorieren“**.

Details: [`Einstellungen → Sicherheitsdaten → Rollen → Rechte verwalten`](/3vrooms/einstellungen/sicherheitsdaten/rollen/rechteverwalten/).
{{% /alert %}}

## Wozu gibt es den Fragenkatalog?

Mit dem **Fragenkatalog** definieren Sie einen Fragebogen, der bei Buchungen **automatisch** erscheint – z.B. um Informationen für Technik, Facility oder Empfang zuverlässig einzusammeln.

{{% alert title="Tipp" color="info" %}}
Nutzen Sie Fragenkataloge vor allem für Angaben, die **nicht** ohnehin schon als Teil der Reservation erfasst werden (z.B. detaillierte Eventtechnik-Informationen, Webcast-/Recording-Details, Ansprechpartner am Eventtag, Anliefer-/Aufbau-Fenster).
{{% /alert %}}

Typische Beispiele:

- **Eventtechnik (TEM = Technischer Event Manager)**: Agenda/Rednerreihenfolge, Präsentationsformat (PPT/Video/Demo), Präsentationsplattform (eigenes Notebook/Room-PC), technische Kommentare
- **Live Webcast & Recording**: Webcast-Titel, Interaktion (Fragen zulassen?), URL/Link, Hintergrund/Branding, Recording-Titel
- **Organisation am Eventtag**: technischer Ansprechpartner (Name/Telefon), Zeitfenster für Aufbau/Soundcheck/Anlieferung

So stellen Sie sicher, dass die richtigen Angaben **zur richtigen Zeit** in der Buchung vorhanden sind.

## Wo finde ich den Fragenkatalog?

Sie finden die Administration unter:

`Einstellungen` → `Erweiterte Basisdaten für Ressourcen` → `Fragenkatalog`

{{% alert title="Hinweis" color="info" %}}
Die Menüpunkte **Fragenkatalog** und **Fragen** sind getrennt. Einzelne Fragen verwalten Sie unter [`Fragen`](/3vrooms/einstellungen/erweitertebasisdatenfuerressourcen/fragen/).
{{% /alert %}}

## Begriffe kurz erklärt

- **Frage**: Eine einzelne Abfrage (z.B. „Wer ist der technische Ansprechpartner am Eventtag (Name/Telefon)?“).  
  Fragen werden unter [`Fragen`](/3vrooms/einstellungen/erweitertebasisdatenfuerressourcen/fragen/) gepflegt.
- **Fragenkatalog**: Eine Sammlung von Fragen, die Sie gemeinsam einer oder mehreren Ressourcen zuordnen.
- **Zuordnung zu Ressourcen**: Bestimmt, **bei welchen** Ressourcen (typisch: Räume) der Fragenkatalog bei Buchungen relevant ist.

## Fragenkatalog einrichten

### 1) Fragenkatalog anlegen

1. Öffnen Sie `Fragenkatalog`.
2. Erstellen Sie einen neuen Eintrag und vergeben Sie eine **Bezeichnung** (am besten eindeutig, z.B. „Eventtechnik Auditorium“).
3. Speichern Sie den Fragenkatalog.

{{< imgproc Fragenkatalog-Liste Resize "960x" >}}
Übersicht „Fragenkatalogliste“ (Fragenkataloge anzeigen und bearbeiten)
{{< /imgproc >}}

### 2) Fragen hinzufügen

1. Öffnen Sie den Fragenkatalog.
2. Wechseln Sie in den Reiter **Fragen**.
3. Fügen Sie die gewünschten Fragen hinzu und definieren Sie bei Bedarf die Reihenfolge (Sortierung).

Tipp: Halten Sie den Fragenkatalog **so kurz wie möglich**. Wenige, klar formulierte Fragen werden deutlich häufiger korrekt beantwortet.

### 3) Ressourcen zuordnen

1. Öffnen Sie den Fragenkatalog.
2. Wechseln Sie in den Reiter **Ressourcen**.
3. Wählen Sie die Ressourcen aus, für die der Fragenkatalog gelten soll (typisch: bestimmte Räume).
4. Speichern Sie.

{{< imgproc Ressourcen-zuordnen Resize "960x" >}}
Ressourcen einem Fragenkatalog zuordnen (Reiter „Ressourcen“)
{{< /imgproc >}}

## Was sehen Benutzer in der Buchung?

Wenn eine Buchung eine Ressource verwendet, der ein Fragenkatalog zugeordnet ist, erscheint im Buchungsdialog ein Tab **„Fragenkatalog“**.

- Der Tab wird **nur angezeigt**, wenn für die gewählte Ressource mindestens eine Frage relevant ist.
- Fragen können zusätzlich abhängig von **Klassifikationen** erscheinen (z.B. nur bei „Event“).

### Beispiel

- Raum „Auditorium“ hat den Fragenkatalog **„Eventtechnik Auditorium“** zugeordnet.
- Eine Buchung im Auditorium zeigt den Tab „Fragenkatalog“.
- Wird die Buchung als **Event** klassifiziert, erscheinen zusätzlich event-spezifische Fragen (z.B. „Agenda/Rednerreihenfolge“, „Präsentationsformat“, „Live Webcast: Fragen zulassen?“).

## Wichtige Regeln

### Pflichtfragen

Als **Pflichtfrage** markierte Fragen müssen beantwortet werden, damit eine Buchung gespeichert/abgeschlossen werden kann (Ausnahme: spezielle Berechtigung, siehe unten).

### „Zwingend bis“

Optional kann eine Pflichtfrage so konfiguriert werden, dass sie erst **ab einem bestimmten Zeitpunkt** zwingend wird (z.B. „erst 3 Tage vor Beginn“). Das verhindert, dass Buchungen frühzeitig blockieren, wenn Details noch nicht feststehen.

### „Editierbar bis“

Optional kann eine Antwort ab einer gewissen Nähe zum Start **nicht mehr änderbar** sein (z.B. „1 Tag vor Beginn schreibgeschützt“). Das ist hilfreich, wenn Services sich auf diese Angaben verlassen müssen.

### Klassifikationsabhängige Fragen

Fragen können so definiert werden, dass sie **nur bei bestimmten Buchungsarten/Klassifikationen** sichtbar sind. So bleibt der Fragenkatalog schlank und Benutzer sehen nur, was wirklich relevant ist.

**Wie funktioniert das in der Praxis?**

- Sie pflegen/verwenden Klassifikationen (z.B. „Event“, „Externe Gäste“, „Hybrid“).
- In der Frage hinterlegen Sie eine oder mehrere Klassifikationen als **Einschränkung**.
- Die Frage erscheint dann in der Buchung **nur**, wenn die Buchung passend klassifiziert ist.

**Beispiel**

- Fragenkatalog „Eventtechnik Auditorium“ ist dem Raum Auditorium zugeordnet.
- Frage „Live-Webcast geplant?“ ist auf die Klassifikation **„Event“** eingeschränkt.
- Ergebnis:
  - Buchung **ohne** Klassifikation „Event“ → Frage wird nicht angezeigt.
  - Buchung **mit** Klassifikation „Event“ → Frage wird angezeigt.

Mehr zu Klassifikationen: [`Klassifikationen`](/3vrooms/einstellungen/erweitertebasisdatenfuerressourcen/klassifikationen/)

