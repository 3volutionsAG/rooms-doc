---
title: "Erweiterte Suche"
linkTitle: "Erweiterte Suche"
weight: 20
description: 'Über detaillierte Angaben wie die Personalnummer, den Status oder die Organisationszuordnung grenzen Sie die Personensuche weiter ein.'
---
Folgende Tabelle erläutert die Eingabefelder:

Status und Art sind unabhängige Merkmale. ROOMS leitet die Art aus der aktuell gültigen Organisationszuordnung ab. Personen ohne aktuell gültige Zuordnung gelten als intern.

Unter **Organisationsspezifische Kriterien** können Sie nach Angaben zur Organisation suchen oder gezielt Personen ohne Organisationszuordnung anzeigen.

{{< bootstrap-table "table table-striped" >}}
|Feld|Funktion|
|---|---|
|Personalnummer|Eindeutige Personalnummer einer firmeninternen Person|
|Person ohne Organisation|Zeigt nur Personen ohne Organisationszuordnung. Solange die Checkbox aktiviert ist, leert und deaktiviert ROOMS die Felder **Organisation**, **Abteilung**, **Kostenstellencode** und **Kostenstellenname**.|
|Organisation|Name der Organisation, welcher die gesuchte Person zugeordnet ist|
|Abteilung|Abteilung der gesuchten Person innerhalb der Organisation|
|Kostenstellencode|Nummer der zugehörigen Kostenstelle|
|Kostenstellenname|Name der zugehörigen Kostenstelle|
|Status (Aktiv/Inaktiv)|Filtert nach dem Status der Person. Das Beenden einer Organisationszuordnung setzt eine Person nicht automatisch auf inaktiv.|
|Art (Intern/Extern)|**Intern:** einer internen Organisation zugeordnet oder ohne aktuell gültige Zuordnung ; **Extern:** einer externen Organisation zugeordnet|
|E-Mail bestätigt|**Ja:** E-Mail-Adresse ist bestätigt ; **Nein:** E-Mail-Adresse ist nicht bestätigt|
{{< /bootstrap-table >}}
