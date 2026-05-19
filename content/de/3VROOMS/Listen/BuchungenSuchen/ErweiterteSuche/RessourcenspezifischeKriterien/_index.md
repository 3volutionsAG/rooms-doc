---
title: "Ressourcenspezifische Kriterien"
linkTitle: "Ressourcenspezifische Kriterien"
weight: 200
description: 'Diese können unter anderen die Ressourcen ID oder Bezeichnung sein.'
---
Die ressourcenspezifischen Kriterien verändern sich je nach gewählter Ressourcenart (Raum, Parkplatz, Arbeitsplatz,...), die Sie in der einfachen Suche festlegen.
In diesem Bereich werden in erster Linie firmenspezifische Bezeichnungen und Klassifizierungen als weitere Filterkriterien zur Verfügung gestellt.

Zur Veranschaulichung sehen Sie hier folgendes Beispiel:

Sie wollen eine Übersicht über alle Buchungen, die Sie für einen bestimmten Raum getätigt haben. Ihre firmenspezifischen Klassifizierungen zur Ressource Raum sind _Ressourcen ID/Bezeichnung_, _Ressourcenstatus_ und _VC-Equipment_.

{{< imgproc Listen_Buchungen_ErweiterteSuche_ResSpezKrit_beschriftet Resize "960x" >}}
Übersicht Ressourcenspezifischer Kriterien
{{< /imgproc >}}

{{< bootstrap-table "table table-striped" >}}
|Feld||Bedeutung|
|---|---|---|
|Ressourcen ID/Bezeichnung|{{< imgproc Listen_Buchungen_ErweiterteSuche_ResSpezKrit_ID Resize "200x" >}}{{< /imgproc >}}|Hier können Sie direkt nach der eindeutigen Ressourcen Nummer oder der Ressourcen Bezeichnung filtern. |
|Ressourcenstatus|{{< imgproc Listen_Buchungen_ErweiterteSuche_ResSpezKrit_Status Resize "200x" >}}{{< /imgproc >}}|**Aktiv:** ; Es werden nur Buchungen in zugänglichen Räumen angezeigt ; **Inaktiv:** Es werden nur Buchungen in nicht zugänglichen Räumen angezeigt|
|VC-Equipment|{{< imgproc Listen_Buchungen_ErweiterteSuche_ResSpezKrit_VC Resize "200x" >}}{{< /imgproc >}}|**Alle Räume:** ; Es werden alle Räume berücksichtigt ; **Raum ohne VC:** Es werden nur Buchungen in Räumen ohne VC-Equipment berücksichtigt ; **Raum mit VC:** ; Es werden nur Buchungen in Räumen mit VC-Equipment berücksichtigt ; **Raum mit VC integral:** ; Es werden nur Buchungen in Räumen mit fest verbautem VC-Equipment berücksichtigt |
{{< /bootstrap-table >}}
