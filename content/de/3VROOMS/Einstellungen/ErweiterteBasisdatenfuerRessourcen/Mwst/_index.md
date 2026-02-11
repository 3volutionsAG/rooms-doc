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

Die **Mehrwertsteuer (Mwst)** ist eine Kategorie, unter der Sie mehrere **MWSt-Satz**-Einträge verwalten können. Diese Mwst-Sätze definieren die verschiedenen Steuersätze und deren Gültigkeitszeiträume, die **auf Dokumenten und Berichten** angezeigt werden (z.B. auf Rechnungen, Angeboten, Berichten). Durch zentrale Verwaltung stellen Sie sicher, dass überall einheitlich die richtigen Steuersätze verwendet werden.

## Wo finde ich die Mehrwertsteuer-Verwaltung?

Sie finden die Administration unter:

`Einstellungen` → `Erweiterte Basisdaten für Ressourcen` → `MWSt`

## Begriffe kurz erklärt

- **Bezeichnung**: Aussagekräftiger Name der Mehrwertsteuer-Kategorie (z.B. „Normalsatz"), wird in Benutzeroberflächen angezeigt und ist **mehrsprachig** (Übersetzungen möglich).
- **Code**: Ein kurzes Kürzel (z.B. „A", „B", „C"), das für die Referenzierung aus anderen Systemen verwendet wird (z.B. bei Datenimports, API-Integrationen oder Schnittstellen zu Buchhaltungssystemen).
- **MWSt-Satz**: Ein einzelner Steuersatz mit einem Prozentsatz und einem „Gültig ab"-Datum. Ein Mwst kann mehrere MWSt-Satz-Einträge haben, um unterschiedliche Steuersätze für verschiedene Zeiträume zu unterstützen.
- **Gültig ab**: Das Datum, ab dem ein MWSt-Satz gültig ist. Frühere Mwst-Sätze werden automatisch ungültig.
- **Steuersatz in %**: Der prozentuale Steuersatz eines MWSt-Satz (z.B. 19, 7, 0).

## Mehrwertsteuer einrichten

### 1) Mehrwertsteuer anlegen

1. Öffnen Sie `MWSt`.
2. Erstellen Sie einen neuen Eintrag für die Mehrwertsteuer-Kategorie und vergeben Sie:
   - eine **Bezeichnung** (z.B. „Normalsatz"),
   - einen **Code** (z.B. „A").
3. Speichern Sie die Mehrwertsteuer.

**Tipp:** Nach dem Speichern wird die Kategorie in der Liste angezeigt und kann jederzeit bearbeitet werden.

### 2) MWSt-Satz-Einträge hinzufügen

1. Öffnen Sie die neu erstellte Mehrwertsteuer-Kategorie.
2. Fügen Sie **MWSt-Satz**-Einträge hinzu, indem Sie:
   - ein **Gültig ab**-Datum setzen (z.B. 01.01.2024),
   - den **Steuersatz in %** eingeben (z.B. 19).
3. Speichern Sie den MWSt-Satz-Eintrag.

**Hinweis:** Sie können mehrere MWSt-Satz-Einträge pro Mehrwertsteuer-Kategorie hinzufügen, um unterschiedliche Steuersätze für verschiedene Zeiträume zu verwalten. Der jeweils aktuelle Satz ist derjenige mit dem neuesten „Gültig ab"-Datum, das nicht in der Zukunft liegt.

{{< imgproc Mwst Resize "960x" >}}
Übersicht einer „MWSt“
{{< /imgproc >}}

### 3) Mehrwertsteuer in Tarifkategorien zuweisen

1. Öffnen Sie `Tarife` (unter denselben Menüpunkt `Erweiterte Basisdaten für Ressourcen`).
2. Wählen Sie die Tarifkategorie, der Sie einen Steuersatz zuordnen möchten.
3. Wählen Sie aus der Dropdown-Liste **„Mehrwertsteuer"** die gewünschte Mehrwertsteuer-Kategorie aus.
4. Speichern Sie.

### 4) Mehrwertsteuer in Angebotszonen-Angeboten verwenden

1. Öffnen Sie die `Angebotszonen` (unter Menüpunkt `Catering & Services`).
2. Wählen Sie die Angebotszone, der Sie ein Angebot mit Steuersatz zuordnen möchte.
3. In der Liste der **Angebote** können Sie Angebote hinzufügen und für jedes Angebot eine Mehrwertsteuer-Kategorie auswählen.
4. Speichern Sie.
### 5) Mehrwertsteuer in Ressourcen-Bestuhlung zuweisen

1. Öffnen Sie `Ressourcen`.
2. Wählen Sie die Ressource aus, für die Sie Bestuhlungsoptionen mit Steuersätzen definieren möchten.
3. Wechseln Sie in den Reiter **Bestuhlung**.
4. In der Liste der **Bestuhlung** können Sie Bestuhlungsoptionen hinzufügen und für jede Option eine Mehrwertsteuer-Kategorie aus dem Feld **„Mehrwertsteuer"** auswählen.
5. Speichern Sie.
## Wichtige Regeln

### Erforderliche Felder – Mehrwertsteuer

Für einen gültigen Mehrwertsteuer-Eintrag müssen folgende Felder ausgefüllt sein:

- **Bezeichnung**: Name der Mehrwertsteuer-Kategorie (mehrsprachig)
- **Code**: Kurzes Kürzel (z.B. „A", „B", „C")

### Erforderliche Felder – MWSt-Satz

Für einen gültigen MWSt-Satz-Eintrag müssen folgende Felder ausgefüllt sein:

- **Gültig ab**: Das Datum, ab dem dieser Steuersatz gültig ist (erforderlich)
- **Steuersatz in %**: Der tatsächliche Prozentsatz (z.B. 19, 7, 0)

Wenn Sie versuchen, einen in Verwendung befindlichen Mehrwertsteuer-Eintrag zu löschen, erhalten Sie eine Fehlermeldung.

### Code-Eindeutigkeit

Der **Code** einer Mehrwertsteuer-Kategorie muss **eindeutig** sein:

- Sie **können nicht** zwei unterschiedliche Mehrwertsteuer-Einträge mit demselben Code erstellen.
- Eine Mehrwertsteuer-Kategorie kann jedoch mehrere **MWSt-Satz**-Einträge mit unterschiedlichen Steuersätzen und „Gültig ab"-Daten haben (z.B. „Normalsatz" mit 19 % gültig ab 01.01.2025 und 19,5 % gültig ab 01.01.2026).

Das System prüft diese Regel beim Speichern und verhindert doppelte Codes.

## Fehlerbehandlung

### „Mehrwertsteuer wird verwendet und kann nicht gelöscht werden"

**Problem:** Sie versuchen, einen MWSt-Satz zu löschen, aber das System sagt, er sei noch in Verwendung.

**Lösung:**

1. Prüfen Sie, in welchen **Tarifkategorien**, **Angebotszonen** und **Ressourcen-Bestuhlungen** dieser Satz noch verwendet wird.
2. Ändern Sie in diesen Einträgen die Mwst auf einen anderen Satz, oder löschen Sie die Einträge, falls nicht mehr benötigt.
3. Erst dann können Sie den MWSt-Satz löschen.

### „Ungültiger Prozentsatz" oder „Datum existiert bereits"

**Problem:** Das System zeigt eine Validierungsmeldung beim Speichern eines MWSt-Satz-Eintrags.

**Lösung:**

- **Prozentsatz:** Stellen Sie sicher, dass Sie einen gültigen Prozentwert eingeben (z.B. 0–100, oder gemäss Landesgesetzgebung).
- **Gültig ab:** Dieses Feld ist erforderlich und muss mit einem gültigen Datum ausgefüllt sein. Innerhalb einer Mehrwertsteuer-Kategorie können nicht mehrere Mwst-Sätze mit dem gleichen „Gültig ab"-Datum existieren. Wenn Sie versuchen, ein Datum zu speichern, das bereits für diese Kategorie verwendet wird, wird das System dies verhindern.

## Hilfreiche Links

- [`Tarife`](/3vrooms/einstellungen/erweitertebasisdatenfuerressourcen/tarife/) – Wie Sie Tarifkategorien mit Mehrwertsteuerkategorien verknüpfen.
- [`Angebotszone`](/3vrooms/einstellungen/cateringservices/angebotszonen/) – Wie Sie Angebotszonen-Angebote mit Mehrwertsteuerkategorien versehen.
- [`Rechte verwalten`](/3vrooms/einstellungen/sicherheitsdaten/rollen/rechteverwalten/) – Wie Sie die Berechtigung „Mehrwertsteuer verwalten" vergeben.
