---
title: "Buchungsspezifische Kriterien"
linkTitle: "Buchungsspezifische Kriterien"
weight: 100
description: >
   <p style="text-align: justify"> Buchungsspezifische Kriterien, sind Kriterien, die sich direkt auf die Buchung beziehen. </p>
---
Dies sind zum Beispiel die Buchungsnummer, der Titel oder auch eine Bemerkung.

 {{< imgproc Listen_Buchungen_ErweiterteSuche_BGspezKrit_beschriftet Resize "1280x" >}}
Übersicht der Buchungsspezifischen Kriterien 
{{< /imgproc >}}

 ---
 |<div style="width:200px">Feld</div>|<div style="width:200px"></div>|Funktion|
 |---|---|---|
 |Nummer|{{< imgproc Listen_Buchungen_ErweiterteSuche_BGspezKrit_Nr Resize "200x" >}}{{< /imgproc >}}|Hier können Sie die individuelle Buchungsnummer eintragen.|
 |Titel|{{< imgproc Listen_Buchungen_ErweiterteSuche_BGspezKrit_Titel Resize "200x" >}}{{< /imgproc >}}|Hier können Sie den Titel der Buchung eintragen|
 |Kommentar|{{< imgproc Listen_Buchungen_ErweiterteSuche_BGspezKrit_Kom Resize "200x" >}}{{< /imgproc >}}|Suchen Sie anhand einer eingetragene Bemerkung.*|
 |Bemerkungen intern|{{< imgproc Listen_Buchungen_ErweiterteSuche_BGspezKrit_BemIntern Resize "200x" >}}{{< /imgproc >}}|Suchen Sie anhand einer eingefügten internen Bemerkung. <br/> *Interne Bemerkungen sind nur für berechtigte Personenkreise sichtbar.*|
 |Status|{{< imgproc Listen_Buchungen_ErweiterteSuche_BGspezKrit_Status Resize "200x" >}}{{< /imgproc >}}|Den Status könne Sie über die Schnellauswahl wäheln.|
 ---

</br>
Es stehen folgende Status zur Auswahl:
</br>

{{< imgproc Listen_Buchungen_ErweiterteSuche_BGspezKrit_Status_Auswahl Resize "1280x" >}} Übersicht der vordefinierten Status {{< /imgproc >}}

Folgende Tabelle erläutert die Bedeutung der Status:

---
 |<div style="width:200px">Status</div>|Bedeutung|
 |---|---|
 |Alle / keine auswählen||Die Suche berücksicht jeden/keinen Status|
 |Annulliert|gelöschte und abgesagte Buchungen|
 |Besetzt (definitiv)|Die Buchung wurde bestätigt und ist verbindlich|
 |Besetzt (provisorisch)|Eine Buchung wurde erstellt, muss jedoch entsprechend dem hinterlegten Workflow noch bestätigt werden.|
 |Besetzt (System)|Eine Buchung wird gerade erstellt. Der Zeitraum wird vom System geblockt, damit keine Doppelbuchungen generiert weden.|
 |Besetzt (Temporär)|<p style="text-align: justify"> Eine Buchung wurde erstellt, muss jedoch entsprechend dem hinterlegten Workflow bestätigt werden. Wir die Buchung nicht im vorgegebenen Zeitraum bestätigt, wird der Eintrag automatisch gelöscht. </p>|
<!-- Thema Slot vorerst außenvor -->
 ---

 Am Ende der Buchungsspezifischen Kriterien finden Sie vier weitere Checkboxen, die aktiviert werden können:


---
|<div style="width:200px">Status</div>|Bedeutung|
 |---|---|
 ||{{< imgproc Listen_Buchungen_ErweiterteSuche_BGspezKrit_Checkb Resize "200x" >}}{{< /imgproc >}}|
 |Annulliert (nur No-Show)|Zeigt nur Buchungen, die durch Nichtinanspruchnahme als annulliert gekennzeichnet wurden|
 |Annulliert (ohne No-Show)|Zeigt nur Buchungen, die aktiv annulliert wurden|
 |Nicht Standard Bestuhlung <br/> *(gilt nur bei Raumbuchungen)*|Zeigt nur Buchungen, bei denen eine individuelle Bestuhlung bestellt wurde|
 |Nur letzte Buchung einer Serie|Zeigt nur die letzten Buchungen einer Buchungsserien|
 ---