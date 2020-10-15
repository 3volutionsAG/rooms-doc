---
title: "Spaltenansicht Standard"
linkTitle: "Spaltenansicht Standard"
weight: 100
description: >
  <p style="text-align: justify"> Standardmäßig werden die Spalten mit den Hauptinformationen einer Buchung angezeigt. </p>
---
Tabelle: Übersicht und Erläuterung der standardmäßig angezeigten Spalten

|<div style="width:200px">Spalte</div>|<div style="width:200px">Symbol</div>|Anmerkungen|
|---|---|---|
|Von||Wochentag, Datum und Uhrzeit des Startzeitpunktes der Buchung|
|Bis||Wochentag, Datum und Uhrzeit des Endzeitpunktes der Buchung|
|Organisator:in||Person, welche die Buchung organisiert|
||{{< imgproc Bleistift Resize "40x" >}}{{< /imgproc >}}|<p style="text-align: justify"> Über diese Schaltfläche gelangen Sie auf die Eingabemaske der Buchung und können Änderungen vornehmen. </p>|
---

{{< imgproc List_BG_Anzeige_BGbearbeiten Resize "1280x" >}}
Eingabemaske um Buchungen zu bearbeiten
{{< /imgproc >}}

Eine genaue Beschreibung der Eingabemaske finden sie im Kapitel <a href="/buchen/buchung-erstellen/">Buchung erstellen</a>

---
</br>

|<div style="width:200px">Spalte</div>|<div style="width:200px">Symbol</div>|Anmerkungen|
|---|---|---|
|Firma </br> Bezeichnung Organisator||Firma der organisierenden Person|
|Buchungs Titel||<p style="text-align: justify"> Mit einem Klick auf den Buchungs Titel öffnen Sie die Detailansicht. </p>|
---

{{< imgproc List_BG_Anzeige_Detailansicht Resize "1280x" >}}
Detailansicht einer Buchung
{{< /imgproc >}}

<p style="text-align: justify"> Weitere Informationen zur Detailsansicht und Bearbeitungsmöglichkeiten finden Sie im Unterkapitel <a href="/listen/1_buchungen-suchen/3_anzeigenbereich/4_detailansicht-buchungen/">Detailansicht Buchungen</a> </p>

---
</br>

|<div style="width:200px">Spalte</div>|<div style="width:200px">Symbol</div>|Anmerkungen|
|---|---|---|
|Ressourcen Bezeichnung||*z.B. Name des Raumes, Druckerbezeichnung*|
|Anzahl Personen||Anzahl der angemeldeten Personen|
|Mobiles Equipment|{{< imgproc List_BG_Anzeige_SymMobEqu Resize "40x" >}}{{< /imgproc >}} {{< imgproc List_BG_Anzeige_TTMobEqu Resize "200x" >}}{{< /imgproc >}}|<p style="text-align: justify"> zugebuchtes Equipment, welches der Ressource nicht permanent zugeordnet ist </br> *z.B. ein mobiler Beamer für einen Besprechnungsraum* </p>|
|Catering & Service||<p style="text-align: justify"> Name des Dienstleisters und gebuchte Leistungen mit Angabe der Lieferzeit und -ort </p> *z.B. Kaffee oder Bestuhlung*|
|Workflow Status|{{< imgproc List_BG_Anzeige_TTStatus Resize "200x" >}}{{< /imgproc >}}|<p style="text-align: justify"> Gibt an ob die Buchung bereits fest ist oder evtl. noch von einer weiteren Instanz geprüft werden muss. Durch einen Klick auf das Symbol können Sie eine Kurzübersicht in einem Dialogfenster öffnen und gegebenfalls den Workflow Status ändern. </p>|
||{{< imgproc List_BG_Anzeige_SymStatusDef Resize "40x" >}}{{< /imgproc >}}|Die Ressource ist verbindlich gebucht und bestätigt|
||{{< imgproc List_BG_Anzeige_SymStatusProv Resize "40x" >}}{{< /imgproc >}}|Die Ressource wurde gebcuht, muss jedoch noch entsprechend des hinterlegten Workflows bestätigt werden.|
||{{< imgproc List_BG_Anzeige_SymStatusSys Resize "40x" >}}{{< /imgproc >}}|<p style="text-align: justify"> Der Zeitraum für die gewünschte Ressource ist verübergehend vom System geblockt, da gerade ein Buchungsvorgang zu dieser im Gange ist, damit es zu keinen Doppelbuchungen kommt. Wird der Buchungsvorgang nicht abgeschlossen, wird der Zeitraum wieder freigegeben. Bei Buchungsabschluss wechselt der Status zu "Besetzt". </p>|
||_Symbol temporär besetzt_|<p style="text-align: justify"> Es wurde eine Buchung erstellt und eingetragen, allerdings fehlt hierzu noch die Bestätigung der verantwortlichen Person. Wird die Buchung nicht in einem bestimmten Zeitraum bestätigt, wird die Ressource und der Zeitraum wieder freigegeben. </p>|
|Bemerkungen|{{< imgproc List_BG_Anzeige_SymBem Resize "40x" >}}{{< /imgproc >}} {{< imgproc List_BG_Anzeige_TTBem Resize "200x" >}}{{< /imgproc >}}|<p style="text-align: justify"> Bemerkungen, welche in der Buchung hinterlegt wurden, können Sie über den Tooltipp einsehen. </p>|
|Standortbezeichnung||Standort der Ressource </br> *z.B. Stadt, Filiale, Land*|
|Ersteller:in||Person, welche die Buchung erstellt hat|
|Annullieren|{{< imgproc List_BG_Anzeige_SymAnn Resize "40x" >}}{{< /imgproc >}}|<p style="text-align: justify"> Über diese Schaltfläche können Sie zukünfitge Buchungen stornieren, vergangene oder laufende Buchungen aus einer Serie bleiben bestehen.|
---

__Einschub Anmerkungen zum Annullieren__
-  Standardmäßig wird eine Informationsmail an die erstellenden, organisierenden und verantwortlichen Personen sowie involvierte Dienstleister gesendet. Dies können Sie unterdrücken, in dem Sie die Checkbox deaktivieren. 
-  Bei der Annullierung können Stronierungskosten anfallen.
In den Kalenderansichten sind stornierte Buchungen nicht mehr sichtbar, jedoch tauchen sie weiterhin in Reports und Statistiken auf. In den Listen sind annullierte Buchungen nur sichtbar, wenn Sie speziell nach diesen filtern.
-  Stornierte Buchungen können weiterhin bearbeitet werden, es werden jedoch weder Update-Emails versendet, noch eine Synchronisation durchgeführt. </p>
  
---
</br>

|<div style="width:200px">Spalte</div>|<div style="width:200px">Symbol</div>|Anmerkungen|
|---|---|---|
|Gewählte Bestuhlung||Art der Bestuhlung und Anzahl der Sitzplätze </br> *z.B. Blockbestuhlung, U-Bestuhlung*|
|Kosten||<p style="text-align: justify"> Höhe der Kosten, die durch diese Buchung entstehen </br> *z.B. Raummiete, Kosten für Dienstleistungen* </p>|
|Privat|{{< imgproc List_BG_Anzeige_SymPriv Resize "40x" >}}{{< /imgproc >}}|Handelt es sich um eine private Buchung, sind, ohne entsprechende Berechtigungen, keine Details sichtbar|
|Buchungsnummer||Eindeutig zugeordnete Nummer der Buchung|
|Fixes Equipment|{{< imgproc List_BG_Anzeige_SymFixEqu Resize "40x" >}}{{< /imgproc >}} {{< imgproc List_BG_Anzeige_TTFixEqu Resize "200x" >}}{{< /imgproc >}}|Equipment, welches der Ressource permanent zugeordnet ist und zur Verfügung steht </br> *z.B. festinstallierter Beamer* |
---
