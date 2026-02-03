---
title: "Mehrwertsteuer (Mwst)"
linkTitle: "Mehrwertsteuer"
weight: 8
description: "Mit Mehrwertsteuersätzen verwalten Sie zentral, welche Steuersätze auf Dokumenten und Berichten angezeigt werden."
---

{{% alert title="Voraussetzung (häufige Fehlerquelle)" color="info" %}}
Für das Erstellen/Bearbeiten von Mehrwertsteuersätzen benötigen Sie:

- das Recht **„Darf Mehrwertsteuersätze verwalten"**

Details: [`Einstellungen → Sicherheitsdaten → Rollen → Rechte verwalten`](/3vrooms/einstellungen/sicherheitsdaten/rollen/rechteverwalten/).
{{% /alert %}}

Die **Mehrwertsteuer (Mwst)** definiert verschiedene Steuersätze, die **auf Dokumenten und Berichten** angezeigt werden (z.B. auf Rechnungen, Angeboten, Berichten). Durch zentrale Verwaltung stellen Sie sicher, dass überall einheitlich die richtigen Steuersätze verwendet werden.

## Wo finde ich die Mehrwertsteuer-Verwaltung?

Sie finden die Administration unter:

`Einstellungen` → `Erweiterte Basisdaten für Ressourcen` → `MWSt`

## Begriffe kurz erklärt

- **Bezeichnung**: Aussagekräftiger Name des Steuersatzes (z.B. „Normalsatz 19 %"), wird in Benutzeroberflächen angezeigt und ist **mehrsprachig** (Übersetzungen möglich).
- **Code**: Ein kurzes Kürzel (z.B. „A", „B", „C"), das für die Referenzierung aus anderen Systemen verwendet wird (z.B. bei Datenimports, API-Integrationen oder Schnittstellen zu Buchhaltungssystemen).
- **Gültigkeitszeitraum**: Definiert die zeitliche Gültigkeit eines Steuersatzes – entweder beide Daten (von/bis) setzen oder beide leer lassen für unbegrenzte Gültigkeit.

## Mehrwertsteuer einrichten

### 1) Mehrwertsteuer anlegen

1. Öffnen Sie `MWSt`.
2. Erstellen Sie einen neuen Eintrag und vergeben Sie:
   - eine **Bezeichnung** (z.B. „Normalsatz 19 %"),
   - einen **Code** (z.B. „A"),
   - den **Steuersatz in %** (z.B. 19),
   - entweder beide Daten (**gültig ab** z.B. 01.01.2024 und **gültig bis** z.B. 31.12.2025) oder beide Felder leer lassen (für unbegrenzte Gültigkeit).
3. Speichern Sie den Mehrwertsteuer-Satz.

**Tipp:** Nach dem Speichern wird der Satz in der Liste angezeigt und kann jederzeit bearbeitet werden.

{{< imgproc Mwst-Liste Resize "960x" >}}
Übersicht „MWSt-Liste“
{{< /imgproc >}}

### 2) Mehrwertsteuer in Tarifkategorien zuweisen

1. Öffnen Sie `Tarife` (unter denselben Menüpunkt `Erweiterte Basisdaten für Ressourcen`).
2. Wählen Sie die Tarifkategorie, der Sie einen Steuersatz zuordnen möchten.
4. Wählen Sie aus der Dropdown-Liste **„Mehrwertsteuer"** den gewünschten Satz aus.
5. Speichern Sie.

### 3) Mehrwertsteuer in Angebotszonen-Angeboten verwenden

1. Öffnen Sie die `Angebotszonen` (unter Menüpunkt `Catering & Services`).
2. Wählen Sie die Angebotszone, der Sie ein Angebot mit Steuersatz zuordnen möchten.
3. In der Liste der **Angebote** können Sie Angebote hinzufügen und für jedes Angebot einen Mehrwertsteuer-Satz auswählen.
4. Speichern Sie.
### 4) Mehrwertsteuer in Ressourcen-Bestuhlung zuweisen

1. Öffnen Sie `Ressourcen`.
2. Wählen Sie die Ressource aus, für die Sie Bestuhlungsoptionen mit Steuersätzen definieren möchten.
3. Wechseln Sie in den Reiter **Bestuhlung**.
4. In der Liste der **Bestuhlung** können Sie Bestuhlungsoptionen hinzufügen und für jede Option einen Mehrwertsteuer-Satz aus dem Feld **„Mehrwertsteuer"** auswählen.
5. Speichern Sie.
## Wichtige Regeln

### Erforderliche Felder

Für einen gültigen Mehrwertsteuer-Satz müssen folgende Felder ausgefüllt sein:

- **Bezeichnung**: Name des Steuersatzes (mehrsprachig)
- **Code**: Kurzes Kürzel (z.B. „A", „B", „C")
- **Steuersatz in %**: Der tatsächliche Prozentsatz (z.B. 19, 7, 0)
- **Gültig ab & Gültig bis**: Entweder beide Daten setzen (für befristete Gültigkeit) oder beide Felder leer lassen (für unbegrenzte Gültigkeit). Es ist nicht möglich, nur eines der beiden Felder zu füllen.

Wenn Sie versuchen, einen in Verwendung befindlichen Satz zu löschen, erhalten Sie eine Fehlermeldung.

### Code-Eindeutigkeit (zeitabhängig)

Der **Code** eines Mehrwertsteuer-Satzes muss **eindeutig pro Gültigkeitszeitraum** sein:

- Sie **können** den Code „A" mehrfach verwenden, z.B. „Mwst A (19 %, gültig 01.01.2025 - 31.12.2025)" und „Mwst A (19,5 %, gültig 01.01.2026 - 31.12.2026)" – solange sich die Gültigkeitszeiträume **nicht überlappen**.
- Sie **können nicht** zwei Sätze mit Code „A" haben, die zur gleichen Zeit gültig sind.

Das System prüft diese Regel beim Speichern und verhindert ungültige Überschneidungen.

## Fehlerbehandlung

### „Mehrwertsteuer wird verwendet und kann nicht gelöscht werden"

**Problem:** Sie versuchen, einen Mwst-Satz zu löschen, aber das System sagt, er sei noch in Verwendung.

**Lösung:**

1. Prüfen Sie, in welchen **Tarifkategorien**, **Angebotszonen** und **Ressourcen-Bestuhlungen** dieser Satz noch verwendet wird.
2. Ändern Sie in diesen Einträgen die Mwst auf einen anderen Satz, oder löschen Sie die Einträge, falls nicht mehr benötigt.
3. Erst dann können Sie den Mwst-Satz löschen.

### „Ungültiger Prozentsatz" oder „Datumslogik verletzt"

**Problem:** Das System zeigt eine Validierungsmeldung beim Speichern.

**Lösung:**

- **Prozentsatz:** Stellen Sie sicher, dass Sie einen gültigen Prozentwert eingeben (z.B. 0–100, oder gemäss Landesgesetzgebung).
- **Gültig ab / bis:** Entweder setzen Sie beide Daten (für einen befristeten Satz) oder lassen Sie beide Felder leer (für unbegrenzte Gültigkeit). Sie können nicht nur eines der beiden Felder ausfüllen. Wenn Sie beide Daten setzen, muss das „Gültig ab"-Datum vor oder gleich dem „Gültig bis"-Datum liegen.
- Wenn Sie den Steuersatz als „Steuerfrei" definieren, nutzen Sie 0 % und passen Sie die Beschreibung an.

## Hilfreiche Links

- [`Tarife`](/3vrooms/einstellungen/erweitertebasisdatenfuerressourcen/tarife/) – Wie Sie Tarifkategorien mit Mehrwertsteuersätzen verknüpfen.
- [`Angebotszone`](/3vrooms/einstellungen/cateringservices/angebotszonen/) – Wie Sie Angebotszonen-Angebote mit Steuersätzen versehen.
- [`Rechte verwalten`](/3vrooms/einstellungen/sicherheitsdaten/rollen/rechteverwalten/) – Wie Sie die Berechtigung „Mehrwertsteuer verwalten" vergeben.
