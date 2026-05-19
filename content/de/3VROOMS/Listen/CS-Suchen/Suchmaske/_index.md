---
title: "Suchmaske"
linkTitle: "Suchmaske"
weight: 10
description: 'Über diese Suchmaske finden Sie gebuchte Catering & Services anhand von Dienstleistenden und Angeboten.'
---
Um geordertes Catering oder gebuchten Service zu finden, navigieren Sie im Sidepanel auf das Subpanel mit dem Namen _Catering & Service_. Dadurch öffnet sich die Suchmaske.

{{< imgproc List_CS_Such Resize "960x" >}}
Übersicht der Suche nach Catering & Service mit Ergebnisliste
{{< /imgproc >}}

Folgende Tabelle erläutert die Eingabefelder:

{{< bootstrap-table "table table-striped" >}}
|Feld||Funktion|
|---|---|---|
|Datum/Zeit|| Datum/Uhrzeit der bestellten Dienstleistung |
|Standort|| Standort, an dem die Dienstleistung ausgeführt wird </p|
|Dienstleistende||Bezeichnung der Dienstleistenden|
|Angebotszone||Angebote eines Dienstleisters|
|Angebotskategorie||Gruppierung von Angeboten aller Dienstleister, z.B. Getränke, Snacks,...|
|Angebot||spezifisches Angebot eines Dienstleisters|
|Status|{{< imgproc List_CS_Such_Stat Resize "200x" >}}{{< /imgproc >}}|Status über die Schnellauswahl wählen|
{{< /bootstrap-table >}}
---

Erläuterung der einzelnen Buchungsstatus:

{{< bootstrap-table "table table-striped" >}}
|Status|Bedeutung|
|---|---|
|Alle / keine auswählen|Die Suche berücksichtigt jeden/keinen Status|
|Annulliert|gelöschte und abgesagte Buchungen|
|Besetzt (definitiv)|Die Buchung wurde bestätigt und ist verbindlich|
|Besetzt (provisorisch)|Eine Buchung wurde erstellt, muss jedoch entsprechend dem hinterlegten Workflow noch bestätigt werden.|
|Besetzt (System)|Eine Buchung wird gerade erstellt. Der Zeitraum wird vom System geblockt, damit keine Doppelbuchungen generiert werden.|
|Besetzt (Temporär)|Eine Buchung wurde erstellt, muss jedoch entsprechend dem hinterlegten Workflow bestätigt werden. Wird die Buchung nicht im vorgegebenen Zeitraum bestätigt, wird der Eintrag automatisch gelöscht.||
{{< /bootstrap-table >}}
---
