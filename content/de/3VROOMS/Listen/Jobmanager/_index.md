---
title: "Jobmanager"
linkTitle: "Jobmanager"
weight: 9
description: "Der Jobmanager unterstützt die Massenverarbeitung importierter oder angefragter Lektionen zu disponierbaren Raum-Buchungen."
---

Der Jobmanager ist das Modul für die fachliche Verarbeitung von **importierten oder erzeugten Lektionen**, die noch nicht oder nicht mehr korrekt disponiert sind. Er bündelt zusammengehörige Lektionen zu einem Job, zeigt die verfügbare Ressourcensituation an und führt die ausgewählten Termine als Anlass und Buchungen in ROOMS zusammen.

Typische Einsatzfälle:

- Verarbeitung von Lektionen, die aus einem Schulverwaltungssystem in die Tabelle `Lektion` importiert wurden
- Verarbeitung von Jobs, die aus einem Reservierungsanfrageformular erzeugt wurden
- Nachbearbeitung bereits verarbeiteter Jobs bei Änderungen oder Löschungen
- Prüfung von Raumalternativen, wenn Wunsch- oder Präferenzräume nicht vollständig verfügbar sind

{{% alert title="Voraussetzung" color="primary" %}}
Für die Verwendung des Jobmanagers müssen folgende Voraussetzungen erfüllt sein:

- Eine gültige **Jobmanager-Lizenz**
- Das standortbezogene Recht **Darf Jobmanager auf Standort verwenden**
- Für erweiterte Eingriffe das globale Recht **Darf erweiterte Jobmanager-Funktionalität verwenden**
- Ein sinnvoll gesetzter globaler Parameter **Schwellwert Jobmanager**
- Jobdaten müssen in der Tabelle `Lektion` vorhanden sein, zum Beispiel aus einem Fremdsystem oder aus einer Reservierungsanfrage
{{% /alert %}}

Wichtige Abhängigkeiten:

- [Globale Parameter]({{< relref "3VROOMS/Einstellungen/System/GlobaleParameter/_index.md" >}})
- [Rechte verwalten]({{< relref "3VROOMS/Einstellungen/Sicherheitsdaten/Rollen/RechteVerwalten/_index.md" >}})
- [JobManager REST API – Usage Guide]({{< relref "3VROOMS/API/JobManager-Usage/_index.md" >}})

## Zusätzliche Funktionen mit erweitertem Recht

Das globale Recht **Darf erweiterte Jobmanager-Funktionalität verwenden** ist nicht notwendig, um Jobs grundsätzlich zu sehen oder zu verarbeiten. Es erweitert den Jobmanager aber um zusätzliche Eingriffe:

- In der **Jobliste** steht die Aktion **Delete/Annullieren** auch dann zur Verfügung, wenn ein Job nicht ausschliesslich aus Lösch-Lektionen besteht.
- In der **Detailprüfung** können selektierte Zeilen zusätzlich **annulliert** oder **gelöscht** werden.
- In der **Detailprüfung** kann über **Ergänzen** eine neue Lektion zum aktuellen Job hinzugefügt werden.
- Im Dialog **Ändern** werden zusätzlich die Felder **Beginn**, **Dauer** und **Wochentag** eingeblendet.
- Bestimmte bereits importierte Jobmanager-Buchungen können nur mit diesem Recht annulliert werden.

## Ablauf

{{< cardpane >}}
  {{< card header="**1. Jobliste**" >}}
  Offene oder bereits verarbeitete Jobs suchen, filtern und den passenden Job auswählen.

  [Zur Seite]({{< ref "Jobliste" >}})
  {{< /card >}}
  {{< card header="**2. Ressourcenwahl**" >}}
  Präferenzräume und weitere Raumalternativen prüfen und entscheiden, ob ein Job direkt verarbeitet werden kann.

  [Zur Seite]({{< ref "Ressourcenwahl" >}})
  {{< /card >}}
  {{< card header="**3. Detailprüfung und Verarbeitung**" >}}
  Einzelne Lektionen kontrollieren, Räume anpassen, neue oder geänderte Termine filtern und den Job speichern.

  [Zur Seite]({{< ref "DetailpruefungUndVerarbeitung" >}})
  {{< /card >}}
{{< /cardpane >}}

{{< imgproc Jobmanager_Ueberblick Resize "1280x" >}}
Einstieg in den Jobmanager über die Jobliste
{{< /imgproc >}}
