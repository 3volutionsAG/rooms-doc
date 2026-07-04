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

## Check-in Status hervorheben

Im Kalender kann über die Option **Eingecheckte Buchungen hervorheben** sichtbar gemacht werden, welche Buchungen bereits eingecheckt wurden.

Wenn die Option aktiv ist, markiert ROOMS eingecheckte Reservationen zusätzlich mit einem Symbol. In der Detailinformation beziehungsweise im Tooltip ist ersichtlich, dass die Buchung bereits eingecheckt wurde.

Diese Anzeige ist hilfreich, wenn vor Ort geprüft werden soll, ob Räume zwar reserviert, aber noch nicht bestätigt wurden.

{{< imgproc plan_colors Resize "960x" >}}
Farbcode
{{< /imgproc >}}