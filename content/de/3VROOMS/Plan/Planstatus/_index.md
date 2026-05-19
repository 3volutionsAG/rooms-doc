---
title: "Planstatus"
linkTitle: "Planstatus"
weight: 2
description: 'Der Status eines Raumes oder einer Ressource wird Ihnen über den Status angezeigt.'
---

Auf dem Plan selbst sind die Ressourcen eingezeichnet. Dabei wird durch Symbole angezeigt, welchen Status die Ressource zur gewählten Zeit hat.

{{< imgproc plan_status Resize "960x" >}}
Status Anzeige der Ressourcen im Plan
{{< /imgproc >}}

### Verfügbarkeit

---
{{< bootstrap-table "table table-striped" >}}
| Farb-Code| Bedeutung|
| ------------- |-------------  |
| {{< color-swatch "#22c55e" >}}| Der Raum ist zum gewünschten Zeitpunkt frei. |
| {{< color-swatch "#f97316" >}}| Der Raum ist besetzt, jedoch muss die Buchung noch via Check-In bestätigt werden. |
| {{< color-swatch "#dc2626" >}}| Der Raum ist definitiv besetzt. |
{{< /bootstrap-table >}}
---

{{< imgproc plan_colors Resize "960x" >}}
Farbcode
{{< /imgproc >}}