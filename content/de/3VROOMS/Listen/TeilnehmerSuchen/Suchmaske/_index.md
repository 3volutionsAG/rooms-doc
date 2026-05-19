---
title: "Suchmaske"
linkTitle: "Suchmaske"
weight: 10
description: 'Über diese Suchmaske finden Sie Teilnehmende anhand von Buchungsdetails oder Details zu den Teilnehmenden.'
---
Um Teilnehmende zu finden, navigieren Sie im Sidepanel auf das Subpanel mit dem Namen _Teilnehmende_. Dadurch öffnet sich die Suchmaske.

{{< imgproc List_TN_Such Resize "960x" >}}
Suchmaske zur Suche nach Teilnehmenden
{{< /imgproc >}}

Folgende Tabelle erläutert die Eingabefelder:

{{< bootstrap-table "table table-striped" >}}
|Feld||Funktion|
|---|---|---|
|Datum/Zeit|| Geben Sie das Datum und die Uhrzeit der Buchung manuell oder über den Datumspicker ein, für welche die Teilnehmenden angemeldet sind. |
|Standort||Geben Sie den Standort für welchen die Buchung gilt ein oder wählen Sie diesen über die Schnellauswahl aus.|
|Titel||Bezeichnung der Buchung|
|Name/Vorname||Vor- oder Nachname der teilnehmenden Person|
|Reservations Status|{{< imgproc List_TN_Such_ResStat Resize "200x" >}}{{< /imgproc >}}|Buchungsstatus wählen ; *Erläuterungen siehe nächsten Abschnnitt*|
{{< /bootstrap-table >}}
---

Folgende Tabelle erläutert die Buchungsstatus:

{{< bootstrap-table "table table-striped" >}}
|Status|Bedeutung|
|---|---|
|Alle / keine auswählen|Die Suche berücksichtigt jeden/keinen Status|
|Annulliert|gelöschte und abgesagte Buchungen|
|Besetzt (definitiv)|Die Buchung wurde bestätigt und ist verbindlich|
|Besetzt (provisorisch)|Eine Buchung wurde erstellt, muss jedoch entsprechend dem hinterlegten Workflow noch bestätigt werden.|
|Besetzt (System)|Eine Buchung wird gerade erstellt. Der Zeitraum wird vom System geblockt, damit keine Doppelbuchungen generiert werden.|
|Besetzt (Temporär)|Eine Buchung wurde erstellt, muss jedoch entsprechend dem hinterlegten Workflow bestätigt werden. Wir die Buchung nicht im vorgegebenen Zeitraum bestätigt, wird der Eintrag automatisch gelöscht.||
{{< /bootstrap-table >}}
---

Fortsetzung der EIngabefelder in der Suchmaske:

{{< bootstrap-table "table table-striped" >}}
|Feld||Funktion|
|---|---|---|
|Teilnehmer:in|{{< imgproc List_TN_Such_TN Resize "200x" >}}{{< /imgproc >}}|__intern:__ unternehmenszugehörig ; __extern:__ fremdfirmenzugehörig|
|Visitorpass Number||Nummer des Besucherausweises|
|Besucherpass Status|{{< imgproc List_TN_Such_PassStat Resize "200x" >}}{{< /imgproc >}}| Status des Besucherausweises gibt an, ob der Ausweis bereits zurückgegeben wurde oder noch im Umlauf ist|
{{< /bootstrap-table >}}
---
