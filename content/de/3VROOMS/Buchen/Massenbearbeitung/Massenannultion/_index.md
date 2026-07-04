---
title: "Massenannulation"
linkTitle: "Massenannulation"
weight: 20
description: ''
---

Sie führen eine Massenannullation von Buchungen ebenfalls in den Menüs _Plan_, _Kalender_ und _Listen_ durch.

1. Wählen Sie eine oder Mehrere Buchungen aus.
2. Klicken Sie auf den Button **Annullieren**.
3. Es erscheint ein Popup, welches über die Annullationskosten informiert und eine Bestätigung der Massenannullation von Ihnen verlangt. Wenn Sie auf den Button **Annullieren** im Popup Fenster klicken, wird die Massenannullation durchgeführt.

Bei ausreichender Berechtigung können Sie im Popup zusätzlich festlegen, wie ROOMS die Kosten behandeln soll:

- **Annulierungskosten verrechnen**: ROOMS verrechnet die definierten Annullationskosten.
- **Alle Kosten verrechnen**: ROOMS verrechnet alle bestehenden Kosten der ausgewählten Buchungen.
- **Keine Kosten verrechnen**: ROOMS annulliert die Buchungen ohne Kostenverrechnung.

Diese Auswahl ist nur sichtbar, wenn der Benutzer das globale Recht `KostenuebersichtEditieren` besitzt. Ohne dieses Recht verwendet ROOMS die Standardlogik für Annullationskosten.

{{< imgproc Massenannulation Resize "960x" >}}
Eine Massenannulation (Löschen) von mehreren Buchungen vornehmen
{{< /imgproc >}}

{{< imgproc Massenannulation_Popup Resize "960x" >}}
Massenannulation durchführen oder abbrechen
{{< /imgproc >}}