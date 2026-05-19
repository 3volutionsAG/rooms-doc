---
title: "Buchungsspezifische Kriterien"
linkTitle: "Buchungsspezifische Kriterien"
weight: 100
description: 'Buchungsspezifische Kriterien sind Kriterien, die sich direkt auf die Buchung beziehen.'
---
Dies sind zum Beispiel die Buchungsnummer, der Titel oder auch eine Bemerkung.

{{< imgproc Listen_Buchungen_ErweiterteSuche_BGspezKrit_beschriftet Resize "960x" >}}
Übersicht der Buchungsspezifischen Kriterien
{{< /imgproc >}}

{{< bootstrap-table "table table-striped" >}}
|Feld||Funktion|
|---|---|---|
|Nummer|{{< imgproc Listen_Buchungen_ErweiterteSuche_BGspezKrit_Nr Resize "200x" >}}{{< /imgproc >}}|Hier können Sie die individuelle Buchungsnummer eintragen.|
|Titel|{{< imgproc Listen_Buchungen_ErweiterteSuche_BGspezKrit_Titel Resize "200x" >}}{{< /imgproc >}}|Hier können Sie den Titel der Buchung eintragen|
|Kommentar|{{< imgproc Listen_Buchungen_ErweiterteSuche_BGspezKrit_Kom Resize "200x" >}}{{< /imgproc >}}|Suchen Sie anhand einer eingetragene Bemerkung.|
|Bemerkungen intern|{{< imgproc Listen_Buchungen_ErweiterteSuche_BGspezKrit_BemIntern Resize "200x" >}}{{< /imgproc >}}|Suchen Sie anhand einer eingefügten internen Bemerkung. ; *Interne Bemerkungen sind nur für berechtigte Personenkreise sichtbar.*|
|Status|{{< imgproc Listen_Buchungen_ErweiterteSuche_BGspezKrit_Status Resize "200x" >}}{{< /imgproc >}}|Den Status können Sie über die Schnellauswahl wählen.|
{{< /bootstrap-table >}}
---

Es stehen folgende Status zur Auswahl:


{{< imgproc Listen_Buchungen_ErweiterteSuche_BGspezKrit_Status_Auswahl Resize "960x" >}}
Übersicht der vordefinierten Status {{< /imgproc >}}

Folgende Tabelle erläutert die Bedeutung der Status:

{{< bootstrap-table "table table-striped" >}}
|Status|Bedeutung|
|---|---|
|Alle / keine auswählen||Die Suche berücksicht jeden/keinen Status|
|Annulliert |gelöschte und abgesagte Buchungen|
|Besetzt (definitiv)|Die Ressource ist verbindlich gebucht und wurde bestätigt.|
|Besetzt (provisorisch)|Eine Buchung wurde erstellt, muss jedoch noch entsprechend dem hinterlegten Workflow bestätigt werden.|
|Besetzt (System)|Eine Buchung wird gerade erstellt. Der Zeitraum wird vom System geblockt, damit keine Doppelbuchungen generiert weden.|
|Besetzt (Temporär)| Eine Buchung wurde erstellt, muss jedoch noch entsprechend dem hinterlegten Workflow bestätigt werden. Wird die Buchung nicht im vorgegebenen Zeitraum bestätigt, wird der Eintrag automatisch gelöscht. |
{{< /bootstrap-table >}}
---

<!-- Thema Slot vorerst aussenvor -->


Am Ende der Buchungsspezifischen Kriterien finden Sie vier weitere Checkboxen, die aktiviert werden können:

{{< bootstrap-table "table table-striped" >}}
|Status|Bedeutung|
|---|---|
||{{< imgproc Listen_Buchungen_ErweiterteSuche_BGspezKrit_Checkb Resize "200x" >}}{{< /imgproc >}}|
|Annulliert (nur No-Show)|Zeigt nur Buchungen, die durch Nichtinanspruchnahme als annulliert gekennzeichnet wurden |
|Annulliert (ohne No-Show)|Zeigt nur Buchungen, die aktiv annulliert wurden|
|Nicht Standard Bestuhlung ; *(gilt nur bei Raumbuchungen)*|Zeigt nur Buchungen, bei denen eine individuelle Bestuhlung bestellt wurde |
|Nur letzte Buchung einer Serie|Zeigt nur die letzten Buchungen einer Buchungsserien|
{{< /bootstrap-table >}}
