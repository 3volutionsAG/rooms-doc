---
title: "Spaltenansicht Standard"
linkTitle: "Spaltenansicht Standard"
weight: 100
description: 'Standardmässig werden die Spalten mit den Hauptinformationen einer Buchung angezeigt.'
---
Tabelle: Übersicht und Erläuterung der standardmässig angezeigten Spalten

{{< bootstrap-table "table table-striped" >}}
|Spalte|Symbol|Anmerkungen|
|---|---|---|
|Von||Wochentag, Datum und Uhrzeit des Startzeitpunktes der Buchung|
|Bis||Wochentag, Datum und Uhrzeit des Endzeitpunktes der Buchung|
|Organisator:in||Person, welche die Buchung organisiert|
||{{< imgproc Bleistift Resize "40x" >}}{{< /imgproc >}}| Über diese Schaltfläche gelangen Sie auf die Eingabemaske der Buchung und können Änderungen vornehmen. ; _Das Symbol steht immer in der zweiten Spalte_|
{{< /bootstrap-table >}}
---

{{< imgproc List_BG_Anzeige_BGbearbeiten Resize "960x" >}}
Eingabemaske, um Buchungen zu bearbeiten
{{< /imgproc >}}

Eine genaue Beschreibung der Eingabemaske finden Sie im Kapitel [Buchung erstellen](/3vrooms/buchen/buchungerstellen/)

{{< bootstrap-table "table table-striped" >}}
|Spalte|Symbol|Anmerkungen|
|---|---|---|
|Firma ; Bezeichnung Organisator||Firma der organisierenden Person|
|Buchungs Titel|| Mit einem Klick auf den Buchungstitel öffnen Sie die Detailansicht. |
{{< /bootstrap-table >}}
---

{{< imgproc List_BG_Anzeige_Detailansicht Resize "960x" >}}
Detailansicht einer Buchung
{{< /imgproc >}}

Weitere Informationen zur Detailansicht und Bearbeitungsmöglichkeiten finden Sie im Unterkapitel [Detailansicht Buchungen](/3vrooms/listen/buchungensuchen/anzeigenbereich/detailansichtbuchungen/)

{{< bootstrap-table "table table-striped" >}}
|Spalte|Symbol|Anmerkungen|
|---|---|---|
|Ressourcen Bezeichnung||_z.B. Name des Raumes, Druckerbezeichnung_|
|Anzahl Personen||Anzahl der angemeldeten Personen|
|Mobiles Equipment|{{< imgproc List_BG_Anzeige_SymMobEqu Resize "40x" >}}{{< /imgproc >}} {{< imgproc List_BG_Anzeige_TTMobEqu Resize "200x" >}}{{< /imgproc >}}| zugebuchtes Equipment, welches der Ressource nicht permanent zugeordnet ist ; _z.B. ein mobiler Beamer für einen Besprechnungsraum_ |
|Catering & Service|| Name des Dienstleisters und gebuchte Leistungen mit Angabe der Lieferzeit und -ort  _z.B. Kaffee oder Bestuhlung_|
|Workflow Status|{{< imgproc List_BG_Anzeige_TTStatus Resize "200x" >}}{{< /imgproc >}}| Gibt an, ob die Buchung bereits fest ist oder evtl. noch von einer weiteren Instanz geprüft werden muss. Durch einen Klick auf das Symbol können Sie eine Kurzübersicht in einem Dialogfenster öffnen und gegebenenfalls den Workflow Status ändern. |
||{{< imgproc List_BG_Anzeige_SymStatusDef Resize "40x" >}}{{< /imgproc >}}|Die Ressource ist verbindlich gebucht und bestätigt|
||{{< imgproc List_BG_Anzeige_SymStatusProv Resize "40x" >}}{{< /imgproc >}}|Die Ressource wurde gebucht, muss jedoch noch entsprechend des hinterlegten Workflows bestätigt werden.|
||{{< imgproc List_BG_Anzeige_SymStatusSys Resize "40x" >}}{{< /imgproc >}}| Der Zeitraum für die gewünschte Ressource ist vorübergehend vom System geblockt, da gerade ein Buchungsvorgang zu dieser im Gange ist, damit es zu keinen Doppelbuchungen kommt. Wird der Buchungsvorgang nicht abgeschlossen, wird der Zeitraum wieder freigegeben. Bei Buchungsabschluss wechselt der Status zu _Besetzt_. |
||_Symbol temporär besetzt_| Es wurde eine Buchung erstellt und eingetragen, allerdings fehlt hierzu noch die Bestätigung der verantwortlichen Person. Wird die Buchung nicht in einem bestimmten Zeitraum bestätigt, wird die Ressource und der Zeitraum wieder freigegeben. |
|Bemerkungen|{{< imgproc List_BG_Anzeige_SymBem Resize "40x" >}}{{< /imgproc >}} {{< imgproc List_BG_Anzeige_TTBem Resize "200x" >}}{{< /imgproc >}}| Bemerkungen, welche in der Buchung hinterlegt wurden, können Sie über den Tooltipp einsehen. |
|Standortbezeichnung||Standort der Ressource ; _z.B. Stadt, Filiale, Land_|
|Ersteller:in||Person, welche die Buchung erstellt hat|
|Annullieren|{{< imgproc List_BG_Anzeige_SymAnn Resize "40x" >}}{{< /imgproc >}}| Über diese Schaltfläche können Sie zukünftige Buchungen stornieren, vergangene oder laufende Buchungen aus einer Serie bleiben bestehen.|
{{< /bootstrap-table >}}
---

__Einschub Anmerkungen zum Annullieren__

-  Standardmässig wird eine Informationsmail an die erstellenden, organisierenden und verantwortlichen Personen sowie involvierte Dienstleister gesendet. Dies können Sie unterdrücken, in dem Sie die Checkbox deaktivieren.
-  Bei der Annullierung können Stornierungskosten anfallen.
In den Kalenderansichten sind stornierte Buchungen nicht mehr sichtbar, jedoch tauchen sie weiterhin in Reports und Statistiken auf. In den Listen sind annullierte Buchungen nur sichtbar, wenn Sie speziell nach diesen filtern.
-  Stornierte Buchungen können weiterhin bearbeitet werden, es werden jedoch weder Update-Emails versendet, noch eine Synchronisation durchgeführt.
---


{{< bootstrap-table "table table-striped" >}}
|Spalte|Symbol|Anmerkungen|
|---|---|---|
|Gewählte Bestuhlung||Art der Bestuhlung und Anzahl der Sitzplätze ; _z.B. Blockbestuhlung, U-Bestuhlung_|
|Kosten|| Höhe der Kosten, die durch diese Buchung entstehen ; _z.B. Raummiete, Kosten für Dienstleistungen_ |
|Privat|{{< imgproc List_BG_Anzeige_SymPriv Resize "40x" >}}{{< /imgproc >}}|Handelt es sich um eine private Buchung, sind, ohne entsprechende Berechtigungen, keine Details sichtbar|
|Buchungsnummer||Eindeutig zugeordnete Nummer der Buchung|
|Fixes Equipment|{{< imgproc List_BG_Anzeige_SymFixEqu Resize "40x" >}}{{< /imgproc >}} {{< imgproc List_BG_Anzeige_TTFixEqu Resize "200x" >}}{{< /imgproc >}}|Equipment, welches der Ressource permanent zugeordnet ist und zur Verfügung steht ; _z.B. festinstallierter Beamer_ |
{{< /bootstrap-table >}}
---
