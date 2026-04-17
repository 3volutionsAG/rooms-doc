---
title: "Ressourcenwahl"
linkTitle: "Ressourcenwahl"
weight: 20
description: "In der Ressourcenwahl wird geprüft, welche Räume für den gesamten Job oder für einzelne Lektionen geeignet sind."
---

Nach dem Klick auf **Prüfen** zeigt der Jobmanager die Seite **Verfügbarkeit der Ressourcen**. Hier wird geprüft, welche Räume für die Lektionen des Jobs verfügbar sind.

## Was wird angezeigt?

Die Liste zeigt pro Raum einen Prüfstatus und erlaubt zwei Wege:

- **Verarbeiten**: den Job direkt auf einen Raum buchen, wenn der Job vollständig passt
- **Details**: in die Detailprüfung wechseln, wenn einzelne Lektionen separat überprüft oder angepasst werden müssen

Standardmässig sind folgende Spalten relevant:

{{< bootstrap-table "table table-striped table-bordered" >}}
| Spalte | Bedeutung |
|---|---|
| Job | Direkte Verarbeitung auf den gewählten Raum |
| Status | Ampel-Status und Prozentwert für die Verfügbarkeit |
| Ressource | Raumbezeichnung inklusive Markierungen für Wunsch- oder Sonderzimmer |
| Details | Öffnet die Detailprüfung für den Job |
| Job-ID | Kennung des aktuell geprüften Jobs |
| Standort | Standort des vorgeschlagenen Raums |
{{< /bootstrap-table >}}

{{< imgproc Jobmanager_Ressourcenwahl Resize "1280x" >}}
Ressourcenwahl mit Verfügbarkeitsprüfung
{{< /imgproc >}}

## Verfügbarkeitslogik

Die Prozent- und Farbprüfung basiert auf dem Job als Ganzem:

- **Grün / 100 %**: alle Lektionen des Jobs können auf diesem Raum verarbeitet werden
- **Gelb**: der konfigurierte Schwellwert wird erreicht, aber nicht alle Lektionen passen
- **Rot**: der Raum unterschreitet den Schwellwert oder passt für den Job nicht ausreichend

Der Schwellenwert wird über den globalen Parameter **Schwellwert Jobmanager** gesteuert.

Wichtig für die fachliche Bedeutung:

- Der Wert wird als Dezimalzahl gespeichert, zum Beispiel `0.7` für **70 %**
- Verglichen wird, für wie viele **neue oder geänderte Lektionen** eines Jobs der Raum gültig ist
- Bei `0.7` wird ein Raum also **gelb**, sobald mindestens 70 % der Lektionen auf diesem Raum möglich sind, aber noch nicht alle
- Unterhalb dieses Werts bleibt der Raum **rot**
- Der Schwellwert steuert **nur** die Ampelbewertung zwischen gelb und rot
- Die Aktion **Verarbeiten** bleibt weiterhin nur dann direkt möglich, wenn der Raum **100 %** erreicht

## Präferenzräume und weitere Räume

Standardmässig prüft der Jobmanager vor allem Räume, die fachlich bevorzugt sind. Je nach Datenlage werden folgende Raumarten berücksichtigt:

- Präferenzräume der Firma oder Organisation
- Wunschräume aus der Lektion
- Sonderzimmer, wenn eine Lektion dies verlangt

Zusätzliche Optionen auf dieser Seite:

{{< bootstrap-table "table table-striped table-bordered" >}}
| Funktion | Wirkung |
|---|---|
| Gewünschte Ressourcen bevorzugen | Bevorzugt Wunsch- oder Spezialräume bei der Auswahl und Verarbeitung |
| Ohne Präferenzen prüfen | Erweitert die Prüfung auf weitere Räume ausserhalb der Präferenzlogik |
| Zusätzliche Ressourcen | Fügt einen manuell ausgewählten Raum zusätzlich zur Prüfung hinzu |
| Standort | Schränkt die angezeigten Alternativräume weiter ein |
{{< /bootstrap-table >}}

{{< imgproc Jobmanager_Ressourcenwahl_OhnePraeferenz Resize "1280x" >}}
Ressourcenwahl mit erweiterten Alternativen
{{< /imgproc >}}

## Wann direkt verarbeiten, wann in die Details?

**Direkte Verarbeitung** ist sinnvoll, wenn:

- ein Raum 100 % Verfügbarkeit erreicht
- der Job ohne weitere manuelle Entscheidung verarbeitet werden soll

**Details** sind sinnvoll, wenn:

- einzelne Lektionen auf andere Räume verteilt werden müssen
- Überschneidungen innerhalb des Jobs bereinigt werden müssen
- bestehende Jobs erneut geprüft und angepasst werden

## Relevante Parameter

- [Schwellwert Jobmanager]({{< relref "3VROOMS/Einstellungen/System/GlobaleParameter/_index.md" >}})
- [Hide unavailable ressources in the jobmanager ressource picker]({{< relref "3VROOMS/Einstellungen/System/GlobaleParameter/_index.md" >}})
- [Ignoriere Sperrzeiten bei JobManager]({{< relref "3VROOMS/Einstellungen/System/GlobaleParameter/_index.md" >}})
