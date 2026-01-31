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

 |<div style="width:200px">Feld</div>|<div style="width:200px"></div>|Funktion|
 |---|---|---|
 |Nummer|{{< imgproc Listen_Buchungen_ErweiterteSuche_BGspezKrit_Nr Resize "200x" >}}{{< /imgproc >}}|<p style="text-align: justify">Hier können Sie die individuelle Buchungsnummer eintragen.</p>|
 |Titel|{{< imgproc Listen_Buchungen_ErweiterteSuche_BGspezKrit_Titel Resize "200x" >}}{{< /imgproc >}}|<p style="text-align: justify">Hier können Sie den Titel der Buchung eintragen</p>|
 |Kommentar|{{< imgproc Listen_Buchungen_ErweiterteSuche_BGspezKrit_Kom Resize "200x" >}}{{< /imgproc >}}|<p style="text-align: justify">Suchen Sie anhand einer eingetragene Bemerkung.</p>|
 |Bemerkungen intern|{{< imgproc Listen_Buchungen_ErweiterteSuche_BGspezKrit_BemIntern Resize "200x" >}}{{< /imgproc >}}|<p style="text-align: justify">Suchen Sie anhand einer eingefügten internen Bemerkung. </br> *Interne Bemerkungen sind nur für berechtigte Personenkreise sichtbar.*|
 |Status|{{< imgproc Listen_Buchungen_ErweiterteSuche_BGspezKrit_Status Resize "200x" >}}{{< /imgproc >}}|<p style="text-align: justify">Den Status können Sie über die Schnellauswahl wählen.</p>|
 ---

Es stehen folgende Status zur Auswahl:
</br>

{{< imgproc Listen_Buchungen_ErweiterteSuche_BGspezKrit_Status_Auswahl Resize "960x" >}} 
Übersicht der vordefinierten Status {{< /imgproc >}}

Folgende Tabelle erläutert die Bedeutung der Status:

 |<div style="width:200px">Status</div>|Bedeutung|
 |---|---|
 |Alle / keine auswählen||<p style="text-align: justify">Die Suche berücksicht jeden/keinen Status|
 |Annulliert </p>|gelöschte und abgesagte Buchungen|
 |Besetzt (definitiv)|<p style="text-align: justify">Die Ressource ist verbindlich gebucht und wurde bestätigt.</p>|
 |Besetzt (provisorisch)|<p style="text-align: justify">Eine Buchung wurde erstellt, muss jedoch noch entsprechend dem hinterlegten Workflow bestätigt werden.</p>|
 |Besetzt (System)|<p style="text-align: justify">Eine Buchung wird gerade erstellt. Der Zeitraum wird vom System geblockt, damit keine Doppelbuchungen generiert weden.</p>|
 |Besetzt (Temporär)|<p style="text-align: justify"> Eine Buchung wurde erstellt, muss jedoch noch entsprechend dem hinterlegten Workflow bestätigt werden. Wird die Buchung nicht im vorgegebenen Zeitraum bestätigt, wird der Eintrag automatisch gelöscht. </p>|
 ---

<!-- Thema Slot vorerst aussenvor -->

<p style="text-align: justify">
 Am Ende der Buchungsspezifischen Kriterien finden Sie vier weitere Checkboxen, die aktiviert werden können: </p>

|<div style="width:200px">Status</div>|Bedeutung|
 |---|---|
 ||{{< imgproc Listen_Buchungen_ErweiterteSuche_BGspezKrit_Checkb Resize "200x" >}}{{< /imgproc >}}|
 |Annulliert (nur No-Show)|<p style="text-align: justify">Zeigt nur Buchungen, die durch Nichtinanspruchnahme als annulliert gekennzeichnet wurden </p>|
 |Annulliert (ohne No-Show)|<p style="text-align: justify">Zeigt nur Buchungen, die aktiv annulliert wurden|
 |Nicht Standard Bestuhlung <br/> *(gilt nur bei Raumbuchungen)*|Zeigt nur Buchungen, bei denen eine individuelle Bestuhlung bestellt wurde </p>|
 |Nur letzte Buchung einer Serie|<p style="text-align: justify">Zeigt nur die letzten Buchungen einer Buchungsserien</p>|