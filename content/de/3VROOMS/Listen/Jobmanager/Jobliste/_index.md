---
title: "Jobliste"
linkTitle: "Jobliste"
weight: 10
description: "Die Jobliste ist der Einstieg in den Jobmanager und zeigt alle verarbeitbaren oder bereits verarbeiteten Jobs."
---

In der Jobliste werden Jobs angezeigt, die aus Lektionen mit gemeinsamer `JobId` zusammengefasst werden. Der Einstieg erfolgt über **Listen > Jobmanager**.

## Suchmaske

Die Jobliste wird über das Sidepanel gefiltert. Das wichtigste Suchkriterium ist das **Bildungszentrum** bzw. der Standort, auf welchem der Jobmanager verwendet werden darf.

Folgende Felder sind in der Praxis relevant:

{{< bootstrap-table "table table-striped table-bordered" >}}
| Feld | Funktion |
|---|---|
| Bildungszentrum | Definiert den Standort, für den Jobs angezeigt werden sollen. Ohne passenden Standort erscheinen keine Jobs. |
| Klasse / Veranstaltung | Zusätzlicher Filter für die Jobliste, verfügbar mit erweiterter Jobmanager-Funktionalität. |
| Zeitraum von / bis | Grenzt die angezeigten Jobs zeitlich ein. |
{{< /bootstrap-table >}}

{{< imgproc Jobmanager_Jobliste Resize "1280x" >}}
Sidepanel und Einstieg in die Jobliste
{{< /imgproc >}}

## Tabs und Status

Die Jobliste ist in mehrere Tabs unterteilt. Die Tabs bilden den aktuellen Verarbeitungsstand des Jobs ab:

{{< bootstrap-table "table table-striped table-bordered" >}}
| Tab | Bedeutung |
|---|---|
| Offene Jobs | Jobs mit neuen, geänderten oder zu löschenden Lektionen, die noch bearbeitet werden müssen |
| Geplante Jobs | Bereits verarbeitete Jobs mit geplantem Workflow |
| Definitive Jobs | Bereits verarbeitete Jobs mit definitivem Workflow |
| Fehlerhafte Jobs | Jobs, die fachlich oder technisch nicht korrekt verarbeitet werden konnten |
| Automatische Verarbeitung fehlgeschlagen | Jobs, deren automatische Verarbeitung abgebrochen oder nicht abgeschlossen wurde |
{{< /bootstrap-table >}}

## Spalten und Aktionen

Die Jobliste zeigt je nach Konfiguration zusätzliche Spalten. Die wichtigsten Standardspalten sind:

{{< bootstrap-table "table table-striped table-bordered" >}}
| Spalte | Bedeutung |
|---|---|
| Job | Hauptaktion für den Job; je nach Status werden `Prüfen`, `Edit`, `Geplant`, `Definitiv`, `Reset` oder `Delete/Annullieren` angeboten |
| Start / Ende | Frühester Beginn und spätestes Ende der Lektionen im Job |
| Reservationsanfrage | Link zur Reservationsanfrage, sofern der Job aus einem Formular entstanden ist |
| Job-ID | Fachliche Kennung des Jobs |
| Organisator / Verantwortlicher | Personen, auf welche die Jobverarbeitung fachlich referenziert |
| Anzahl Personen | Personenanzahl aus den Lektionen |
| Kunde | Kunde bzw. Organisation aus dem Lektionenkontext |
| Bildungszentrum | Standortname aus der Lektion |
{{< /bootstrap-table >}}

Wichtige Aktionen:

- **Prüfen** öffnet die Ressourcenwahl
- **Edit** öffnet direkt die Detailprüfung eines bereits verarbeiteten Jobs
- **Geplant** und **Definitiv** wechseln den Workflow bestehender Jobs
- **Reset** setzt verarbeitete Jobs zurück, sofern dies für das Quellsystem erlaubt ist
- **Delete/Annullieren** entfernt Jobs oder hebt bereits verarbeitete Buchungen auf

Ohne das globale Recht **Darf erweiterte Jobmanager-Funktionalität verwenden** erscheint **Delete/Annullieren** nur in den eingeschränkten Fällen, in denen ein Job vollständig als Löschfall verarbeitet werden kann.

{{< imgproc Jobmanager_Jobliste Resize "1280x" >}}
Beispiel einer Jobliste mit offenen Jobs
{{< /imgproc >}}

## Woher kommen Jobs?

Jobs erscheinen in der Liste nicht manuell, sondern weil passende Einträge in `Lektion` vorhanden sind. Typische Quellen sind:

- Schulverwaltungs- oder Fremdsysteme
- Reservierungsanfrageformulare mit Jobmanager-Bezug
- REST-API-Importe über den JobManager-Batch-Flow

Für die technische Sicht auf API-Importe siehe [JobManager REST API – Usage Guide]({{< relref "3VROOMS/API/JobManager-Usage/_index.md" >}}).
