---
title: "Erweiterte Suche"
linkTitle: "Erweiterte Suche"
weight: 20
description: 'Über detaillierte Angaben wie der Personalnummer oder zugeordneten Abteilung grenzen Sie die Suche weiter ein.'
---
{{< imgproc List_Pers_ErwKrit_geschw_b Resize "960x" >}}
Filter der Erweiterten Suche, um Personen zu finden
{{< /imgproc >}}

Folgende Tabelle erläutert die Eingabefelder:

Status und Art sind unabhängige Merkmale. ROOMS leitet die Art aus der aktuell gültigen Firmen- oder OE-Zuordnung ab. Personen ohne aktuell gültige Zuordnung gelten als intern.

{{< bootstrap-table "table table-striped" >}}
|Feld||Funktion|
|---|---|---|
|Personalnummer||Eindeutige Personalnummer einer firmeninternen Person|
|OE/Firma||Organisationseinheit/Abteilung der gesuchten Person oder Firma, welcher die Person angehört|
|Kostenstellencode||Nummer der zugehörigen Kostenstelle|
|Kostenstellenname||Name der zugehörigen Kostenstelle|
|Status (Aktiv/Inaktiv)|{{< imgproc List_Pers_ErwKrit_Stat Resize "200x" >}}{{< /imgproc >}}|Filtert nach dem Status der Person. Das Beenden einer Firmen- oder OE-Zuordnung setzt eine Person nicht automatisch auf inaktiv.|
|Art (Intern/Extern)|{{< imgproc List_Pers_ErwKrit_Art Resize "200x" >}}{{< /imgproc >}}|**Intern:** einer internen Firma oder OE zugeordnet oder ohne aktuell gültige Zuordnung ; **Extern:** einer externen Firma zugeordnet|
|E-Mail bestätigt|{{< imgproc List_Pers_ErwKrit_Mail Resize "200x" >}}{{< /imgproc >}}| **Ja:** E-Mail-Adresse ist bestätigt ; **Nein:** E-Mail-Adresse ist nicht bestätigt|
{{< /bootstrap-table >}}
---
