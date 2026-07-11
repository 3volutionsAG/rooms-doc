---
title: "Massenannulation"
linkTitle: "Massenannulation"
weight: 20
description: ''
---

Sie führen eine Massenannullation von Buchungen ebenfalls in den Menüs _Plan_, _Kalender_ und _Listen_ durch.

1. Wählen Sie eine oder mehrere Buchungen aus.
2. Klicken Sie auf den Button **Annullieren**.
3. Es erscheint ein Popup, das über die Annullationskosten informiert und eine Bestätigung der Massenannullation verlangt.
4. Erfassen Sie bei Bedarf im Feld **Grund für die Annullation** einen Kommentar. ROOMS speichert diesen Kommentar bei allen ausgewählten Buchungen als Annullationskommentar. Wenn Annullationsmails versendet werden, erscheint der Kommentar auch in diesen Mails.
5. Klicken Sie im Popup auf **Annullieren**, um die Massenannullation durchzuführen.

Bei ausreichender Berechtigung können Sie im Popup zusätzlich festlegen, wie ROOMS die Kosten behandeln soll:

- **Annulierungskosten verrechnen**: ROOMS verrechnet die definierten Annullationskosten.
- **Alle Kosten verrechnen**: ROOMS verrechnet alle bestehenden Kosten der ausgewählten Buchungen.
- **Keine Kosten verrechnen**: ROOMS annulliert die Buchungen ohne Kostenverrechnung.

Diese Auswahl ist nur sichtbar, wenn der Benutzer das globale Recht `KostenuebersichtEditieren` besitzt. Ohne dieses Recht verwendet ROOMS die Standardlogik für Annullationskosten.

{{< imgproc Massenannulation Resize "960x" >}}
Eine Massenannulation (Löschen) von mehreren Buchungen vornehmen
{{< /imgproc >}}
