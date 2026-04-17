---
title: "Detailprüfung und Verarbeitung"
linkTitle: "Detailprüfung und Verarbeitung"
weight: 30
description: "In der Detailprüfung werden einzelne Lektionen kontrolliert, angepasst und als Job gespeichert."
---

Die Detailprüfung ist die eigentliche Arbeitsfläche des Jobmanagers. Hier werden alle Lektionen des Jobs einzeln dargestellt, inklusive Raumbezug, Änderungsstatus und Verarbeitungsfähigkeit.

## Detailgrid

Die wichtigsten Spalten im aktuellen Detailgrid sind:

{{< bootstrap-table "table table-striped table-bordered" >}}
| Spalte | Bedeutung |
|---|---|
| Status | Zeigt an, ob die aktuelle Raumwahl für diese Lektion verarbeitbar ist |
| Vorlaufbeginn / Beginn / Ende / Nachlaufende | Zeitfenster der Lektion inklusive Vor- und Nachlauf |
| Ausgewählter Raum | Raum, der aktuell für die Verarbeitung dieser Zeile ausgewählt ist |
| Änderung | Kennzeichnet `Neu` oder `Geändert` auf Basis der effektiven Lektion in der Datenbank |
| Gewünschter Raum | Fachlich gewünschter Raum aus der Lektion |
| Gebuchter Raum | Bereits verarbeiteter Raum aus `Lektion.RessourceId`, sofern die Lektion schon gebucht wurde |
| Standort | Standort des ausgewählten Raums |
{{< /bootstrap-table >}}

Wichtig:

- **Ausgewählter Raum** ist die aktuelle Verarbeitungswahl
- **Gewünschter Raum** ist die fachliche Vorgabe aus der Lektion
- **Gebuchter Raum** zeigt den bereits persistierten Raum, wenn die Lektion früher schon verarbeitet wurde
- **Änderung** wird aus dem effektiven Lektionenzustand abgeleitet, nicht nur aus der temporären Reservierung

{{< imgproc Jobmanager_Detailpruefung Resize "1280x" >}}
Detailprüfung der einzelnen Lektionen
{{< /imgproc >}}

## Filter in der Detailprüfung

Am unteren Rand der Seite stehen Filter zur Verfügung:

{{< bootstrap-table "table table-striped table-bordered" >}}
| Filter | Wirkung |
|---|---|
| Nur neue/geänderte Buchungen | Zeigt nur Zeilen mit fachlicher Änderung |
| Nur fehlerhafte Buchungen | Zeigt nur Zeilen mit problematischer Verarbeitbarkeit |
| Vergangene Buchungen | Blendet vergangene Termine ein oder aus |
{{< /bootstrap-table >}}

Diese Filter helfen vor allem bei grösseren Jobs mit vielen bereits verarbeiteten oder unveränderten Lektionen.

## Einzelne Lektionen anpassen

Über **Ändern** können selektierte Zeilen gemeinsam bearbeitet werden. Typische Anpassungen sind:

- Raum wechseln
- Status anpassen
- Beginn, Dauer oder Wochentag verändern

{{< imgproc Jobmanager_Raumwechsel Resize "1280x" >}}
Dialog zum Ändern des ausgewählten Raums
{{< /imgproc >}}

Zusätzliche Aktionen mit erweiterter Jobmanager-Funktionalität:

- **Annullieren** von selektierten, bereits verarbeiteten Jobmanager-Zeilen
- **Löschen** von selektierten, noch nicht verarbeiteten Jobmanager-Zeilen
- **Ergänzen** neuer Lektionen zum aktuellen Job

Ohne das globale Recht **Darf erweiterte Jobmanager-Funktionalität verwenden** stehen diese Zusatzaktionen nicht zur Verfügung. Ebenfalls bleiben im Sammelbearbeitungsdialog die Felder **Beginn**, **Dauer** und **Wochentag** ausgeblendet.

## Was passiert beim Speichern?

Beim Speichern wird der gesamte Job verarbeitet:

- neue Lektionen werden als Buchungen erzeugt
- geänderte Lektionen werden aktualisiert
- zu löschende Lektionen werden annulliert oder entfernt
- die resultierenden Buchungen werden unter einem Anlass zusammengeführt

Wenn die Verarbeitung fehlschlägt, bleibt der Job in der Detailprüfung sichtbar, damit die offenen Konflikte weiter bereinigt werden können.

Bei erfolgreicher Verarbeitung:

- verschwindet der Job aus den offenen Jobs
- der Job erscheint je nach Workflow unter **Geplante** oder **Definitive Jobs**

## Typische Entscheidungssituationen

Die Detailprüfung wird vor allem in diesen Situationen benötigt:

- zwei oder mehr Lektionen überschneiden sich auf demselben Raum
- ein Wunschraum ist nicht vollständig verfügbar
- ein bestehender Job wurde vom Quellsystem geändert
- einzelne Termine sollen bewusst auf andere Räume verteilt werden
