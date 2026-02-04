---
title: "Kostenträger"
linkTitle: "Kostenträger"
weight: 4
description: "Kostenträger (im UI oft „Kostenstellen“) sind Stammdaten für die Verrechnung. Hier verwalten Sie Kostenträger und importieren sie bei Bedarf per CSV."
---

{{% alert title="Voraussetzung (Berechtigungen)" color="info" %}}
Damit Sie Kostenträger **verwalten** (anzeigen, anlegen, bearbeiten, löschen, CSV importieren) können, benötigen Sie in der Regel:

- das Recht **„Sektion Einstellungen nutzen“**
- das Recht **„Kostenträger hinzufügen“**

Damit Sie Kostenträger in Buchungen/Objekten **auswählen oder ändern** können, wird zusätzlich oft das Recht **„Kostenträger ändern“** benötigt.

Wenn Sie Kostenträger-Anteile (in %) aufteilen dürfen, benötigen Sie zusätzlich das Recht **„Darf Kostenstellen splitten“**.

Details: [`Einstellungen → Sicherheitsdaten → Rollen → Rechte verwalten`](/3vrooms/einstellungen/sicherheitsdaten/rollen/rechteverwalten/).
{{% /alert %}}

## Wozu gibt es Kostenträger?

Mit **Kostenträgern** ordnen Sie Buchungen/Leistungen einer Kostenstelle, einem Projekt oder einem Geschäftsbereich zu. So können Kosten später korrekt **ausgewertet** oder **verrechnet** werden.

Typische Verwendung:

- **in Buchungen/Reservationen** (Kostenträger auswählen, optional mehrere mit Anteil in %)
- **bei Personen** (Standard-Kostenträger)
- **bei OE/Firmen** (Kostenträger-Zuweisungen)
- **bei Raumeinheiten / Anlässen** (je nach Konfiguration)

## Wo finde ich die Kostenträgerverwaltung?

Sie finden die Administration unter:

`Einstellungen` → `Sicherheitsdaten für Personen` → `Kostenträger`

## Kostenträger verwalten

### Liste, Suche und Filter

In der Liste sehen Sie u.a. **Nummer**, **Bezeichnung**, **Geschäftsbereich**, **Gültig ab/bis** und ob ein Kostenträger **verrechenbar** ist.

Im Sidepanel können Sie typischerweise nach **Nummer**, **Bezeichnung** und **Geschäftsbereich** suchen/filtern.

{{< imgproc Kostentraeger-Liste Resize "960x" >}}
Übersicht „Kostenträger“ (Liste, Filter und Aktionen)
{{< /imgproc >}}

{{% alert title="Hinweis" color="info" %}}
In Auswahllisten werden üblicherweise nur **aktuell gültige** Kostenträger angezeigt (Gültig ab/bis).
{{% /alert %}}

### Kostenträger anlegen oder bearbeiten

1. Klicken Sie auf **Neu** (oder bearbeiten Sie einen bestehenden Eintrag).
2. Pflegen Sie mindestens:
   - **Nummer**
   - **Beschreibung**
3. Optional (empfohlen):
   - **Geschäftsbereich** (z.B. für Projekte/Organisationseinheiten)
   - **Gültig von / Gültig bis** (um Kostenträger zeitlich zu steuern)
   - **Verrechenbar** (wenn der Kostenträger in der Verrechnung genutzt werden soll)
4. Speichern Sie.

{{< imgproc Kostentraeger-Bearbeiten Resize "960x" >}}
Kostenträger bearbeiten (Nummer, Beschreibung, Geschäftsbereich, Gültigkeit, Verrechenbar)
{{< /imgproc >}}

### Kostenträger löschen

Kostenträger können gelöscht werden. Wenn ein Kostenträger bereits in Verwendung ist, kann das – je nach Konfiguration und Datenlage – Auswirkungen auf Zuordnungen haben.

{{% alert title="Tipp" color="info" %}}
Statt zu löschen ist es in der Praxis oft besser, einen Kostenträger über **Gültig bis** zu beenden. So bleibt die Historie nachvollziehbar, und der Kostenträger kann nicht mehr neu ausgewählt werden.
{{% /alert %}}

## Kostenträger per CSV importieren

Wenn Sie viele Kostenträger verwalten (z.B. aus einem ERP), ist der **CSV-Import** der schnellste Weg für Massen-Änderungen.

### So funktioniert der Import

1. Öffnen Sie die Kostenträgerliste.
2. Klicken Sie auf **Von CSV importieren**.
3. Wählen Sie Ihre CSV-Datei aus.
4. Optional: Laden Sie das **CSV Template** herunter (empfohlen).
5. Klicken Sie auf **Importieren**.

{{< imgproc Kostentraeger-CSV-Import Resize "960x" >}}
CSV importieren (Datei auswählen, Template herunterladen, Import starten)
{{< /imgproc >}}

Nach dem Import sehen Sie eine Rückmeldung wie z.B. **Aktualisiert**, **Erstellt** und **Terminiert**.

### Wichtige Regeln (bitte beachten)

- **Eindeutigkeit**: Ein Kostenträger wird über **Nummer + Geschäftsbereich** erkannt.  
  (Gleiche Nummer ist möglich, wenn der Geschäftsbereich unterschiedlich ist.)
- **Terminierung statt Löschen**: Kostenträger, die früher per CSV importiert wurden, aber **in der aktuellen Importdatei fehlen**, werden automatisch **terminiert** (Gültig bis = heute).  
  Damit bleiben sie in der Historie erhalten, sind aber nicht mehr neu auswählbar.
- **Vollständige Datei liefern**: Verwenden Sie den Import idealerweise als „Vollabzug“ (alle relevanten Kostenträger in jeder Datei), damit nichts unbeabsichtigt terminiert wird.

### Spalten (CSV-Template)

Das Template enthält genau diese Spalten:

{{< bootstrap-table "table table-striped" >}}
| Spalte | Bedeutung |
|---|---|
| `Nummer` | Kostenträger-Nummer |
| `Beschreibung` | Bezeichnung/Beschreibung |
| `Geschaeftsbereich` | optionaler Geschäftsbereich (leer lassen, wenn nicht verwendet) |
| `TypCode` | Typ (falls bei Ihnen verwendet) |
| `GueltigVon` | Gültig ab (Format siehe unten) |
| `GueltigBis` | Gültig bis (Format siehe unten) |
| `IstVerrechenbar` | Ja/Nein (siehe Beispiele) |
{{< /bootstrap-table >}}

### Formate (Datum und Ja/Nein)

- **Datum**: `yyyy-MM-dd` (z.B. `2026-01-31`) oder `dd.MM.yyyy` (z.B. `31.01.2026`)
- **IstVerrechenbar**: z.B. `Ja/Nein` (auch `True/False` ist je nach Datei möglich)

## Beispiele

### Beispiel 1: Neuer Kostenträger für ein Projekt

Sie möchten ein Projekt „Umbau 2026“ verrechnen:

1. Legen Sie einen Kostenträger mit **Nummer** `800120` und **Beschreibung** „Umbau 2026“ an.
2. Setzen Sie optional den **Geschäftsbereich** „Projekte“.
3. Setzen Sie **Verrechenbar** = aktiv.

### Beispiel 2: CSV-Import als Vollabzug (inkl. Terminierung)

Sie importieren monatlich eine vollständige Liste aus einem Vorsystem:

- Kostenträger, die **in der Datei enthalten** sind, werden **erstellt** oder **aktualisiert**.
- Kostenträger, die früher importiert wurden, aber **jetzt fehlen**, werden **automatisch beendet** (terminiert), damit sie nicht mehr ausgewählt werden können.

### Beispiel 3: Mini-CSV (Ausschnitt)

```csv
Nummer,Beschreibung,Geschaeftsbereich,TypCode,GueltigVon,GueltigBis,IstVerrechenbar
800120,Umbau 2026,Projekte,PRJ,2026-01-01,,Ja
4711,Interne Kosten,,INT,01.01.2026,31.12.2026,Nein
```

