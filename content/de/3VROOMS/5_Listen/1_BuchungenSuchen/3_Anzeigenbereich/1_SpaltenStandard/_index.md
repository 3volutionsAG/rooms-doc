---
title: "Spaltenansicht Standard"
linkTitle: "Spaltenansicht Standard"
weight: 100
description: >
  <p style="text-align: justify">Standardmäßig werden die Spalten mit den Hauptinformationen einer Buchung angezeigt.</p>
---
Tabelle: Übersicht und Erläuterung der standardmäßig angezeigten Spalten

|<div style="width:200px">Spalte</div>|<div style="width:200px">Symbol</div>|Anmerkungen|
|---|---|---|
|Von||<p style="text-align: justify">Wochentag, Datum und Uhrzeit des Startzeitpunktes der Buchung<p>|
|Bis||<p style="text-align: justify">Wochentag, Datum und Uhrzeit des Endzeitpunktes der Buchung|
|Organisator:in||Person, welche die Buchung organisiert</p>|
||{{< imgproc Bleistift Resize "40x" >}}{{< /imgproc >}}|<p style="text-align: justify"> Über diese Schaltfläche gelangen Sie auf die Eingabemaske der Buchung und können Änderungen vornehmen. </br> _Das Symbol steht immer in der zweiten Spalte_</p>|
---

{{< imgproc List_BG_Anzeige_BGbearbeiten Resize "960x" >}}
Eingabemaske, um Buchungen zu bearbeiten
{{< /imgproc >}}

Eine genaue Beschreibung der Eingabemaske finden Sie im Kapitel <a href="/buchen/buchung-erstellen/">Buchung erstellen</a>

|<div style="width:200px">Spalte</div>|<div style="width:200px">Symbol</div>|Anmerkungen|
|---|---|---|
|Firma </br> Bezeichnung Organisator||<p style="text-align: justify">Firma der organisierenden Person</p>|
|Buchungs Titel||<p style="text-align: justify"> Mit einem Klick auf den Buchungstitel öffnen Sie die Detailansicht. </p>|
---

{{< imgproc List_BG_Anzeige_Detailansicht Resize "960x" >}}
Detailansicht einer Buchung
{{< /imgproc >}}

<p style="text-align: justify"> Weitere Informationen zur Detailansicht und Bearbeitungsmöglichkeiten finden Sie im Unterkapitel <a href="/listen/1_buchungen-suchen/3_anzeigenbereich/4_detailansicht-buchungen/">Detailansicht Buchungen</a> </p>

|<div style="width:200px">Spalte</div>|<div style="width:200px">Symbol</div>|Anmerkungen|
|---|---|---|
|Ressourcen Bezeichnung||<p style="text-align: justify"><i>z.B. Name des Raumes, Druckerbezeichnung</i></p>|
|Anzahl Personen||<p style="text-align: justify">Anzahl der angemeldeten Personen</p>|
|Mobiles Equipment|{{< imgproc List_BG_Anzeige_SymMobEqu Resize "40x" >}}{{< /imgproc >}} {{< imgproc List_BG_Anzeige_TTMobEqu Resize "200x" >}}{{< /imgproc >}}|<p style="text-align: justify"> zugebuchtes Equipment, welches der Ressource nicht permanent zugeordnet ist </br> <i>z.B. ein mobiler Beamer für einen Besprechnungsraum</i> </p>|
|Catering & Service||<p style="text-align: justify"> Name des Dienstleisters und gebuchte Leistungen mit Angabe der Lieferzeit und -ort </p> <i>z.B. Kaffee oder Bestuhlung</i>|
|Workflow Status|{{< imgproc List_BG_Anzeige_TTStatus Resize "200x" >}}{{< /imgproc >}}|<p style="text-align: justify"> Gibt an, ob die Buchung bereits fest ist oder evtl. noch von einer weiteren Instanz geprüft werden muss. Durch einen Klick auf das Symbol können Sie eine Kurzübersicht in einem Dialogfenster öffnen und gegebenenfalls den Workflow Status ändern. </p>|
||{{< imgproc List_BG_Anzeige_SymStatusDef Resize "40x" >}}{{< /imgproc >}}|<p style="text-align: justify">Die Ressource ist verbindlich gebucht und bestätigt</p>|
||{{< imgproc List_BG_Anzeige_SymStatusProv Resize "40x" >}}{{< /imgproc >}}|<p style="text-align: justify">Die Ressource wurde gebucht, muss jedoch noch entsprechend des hinterlegten Workflows bestätigt werden.</p>|
||{{< imgproc List_BG_Anzeige_SymStatusSys Resize "40x" >}}{{< /imgproc >}}|<p style="text-align: justify"> Der Zeitraum für die gewünschte Ressource ist vorübergehend vom System geblockt, da gerade ein Buchungsvorgang zu dieser im Gange ist, damit es zu keinen Doppelbuchungen kommt. Wird der Buchungsvorgang nicht abgeschlossen, wird der Zeitraum wieder freigegeben. Bei Buchungsabschluss wechselt der Status zu <i>Besetzt</i>. </p>|
||_Symbol temporär besetzt_|<p style="text-align: justify"> Es wurde eine Buchung erstellt und eingetragen, allerdings fehlt hierzu noch die Bestätigung der verantwortlichen Person. Wird die Buchung nicht in einem bestimmten Zeitraum bestätigt, wird die Ressource und der Zeitraum wieder freigegeben. </p>|
|Bemerkungen|{{< imgproc List_BG_Anzeige_SymBem Resize "40x" >}}{{< /imgproc >}} {{< imgproc List_BG_Anzeige_TTBem Resize "200x" >}}{{< /imgproc >}}|<p style="text-align: justify"> Bemerkungen, welche in der Buchung hinterlegt wurden, können Sie über den Tooltipp einsehen. </p>|
|Standortbezeichnung||Standort der Ressource </br> <i>z.B. Stadt, Filiale, Land</i>|
|Ersteller:in||Person, welche die Buchung erstellt hat|
|</br>Annullieren|{{< imgproc List_BG_Anzeige_SymAnn Resize "40x" >}}{{< /imgproc >}}|<p style="text-align: justify"> Über diese Schaltfläche können Sie zukünftige Buchungen stornieren, vergangene oder laufende Buchungen aus einer Serie bleiben bestehen.</p>|
---

__Einschub Anmerkungen zum Annullieren__

-  Standardmäßig wird eine Informationsmail an die erstellenden, organisierenden und verantwortlichen Personen sowie involvierte Dienstleister gesendet. Dies können Sie unterdrücken, in dem Sie die Checkbox deaktivieren. 
-  Bei der Annullierung können Stornierungskosten anfallen.
In den Kalenderansichten sind stornierte Buchungen nicht mehr sichtbar, jedoch tauchen sie weiterhin in Reports und Statistiken auf. In den Listen sind annullierte Buchungen nur sichtbar, wenn Sie speziell nach diesen filtern.
-  Stornierte Buchungen können weiterhin bearbeitet werden, es werden jedoch weder Update-Emails versendet, noch eine Synchronisation durchgeführt.
---
</br>

|<div style="width:200px">Spalte</div>|<div style="width:200px">Symbol</div>|Anmerkungen|
|---|---|---|
|Gewählte Bestuhlung||<p style="text-align: justify">Art der Bestuhlung und Anzahl der Sitzplätze </br> <i>z.B. Blockbestuhlung, U-Bestuhlung</i></p>|
|Kosten||<p style="text-align: justify"> Höhe der Kosten, die durch diese Buchung entstehen </br> <i>z.B. Raummiete, Kosten für Dienstleistungen</i> </p>|
|Privat|{{< imgproc List_BG_Anzeige_SymPriv Resize "40x" >}}{{< /imgproc >}}|<p style="text-align: justify">Handelt es sich um eine private Buchung, sind, ohne entsprechende Berechtigungen, keine Details sichtbar</p>|
|Buchungsnummer||<p style="text-align: justify">Eindeutig zugeordnete Nummer der Buchung</p>|
|Fixes Equipment|{{< imgproc List_BG_Anzeige_SymFixEqu Resize "40x" >}}{{< /imgproc >}} {{< imgproc List_BG_Anzeige_TTFixEqu Resize "200x" >}}{{< /imgproc >}}|<p style="text-align: justify">Equipment, welches der Ressource permanent zugeordnet ist und zur Verfügung steht </br> <i>z.B. festinstallierter Beamer</i></p> |
---
