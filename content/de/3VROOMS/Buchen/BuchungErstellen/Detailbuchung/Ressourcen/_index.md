---
title: "Ressourcen"
linkTitle: "Ressourcen"
weight: 30
description: ''
---
Im Reiter _Ressourcen_ ergänzen Sie Equipment zu Ihrer Raumbuchung. In der Einzelansicht wählen Sie ein bestimmtes Gerät. In der aggregierten Ansicht geben Sie die benötigte Gesamtanzahl pro Equipmentart an, beispielsweise _2 Beamer_. Bereits zugeordnetes fixes Equipment zählt dabei mit.

{{< imgproc Detailbuchung_Ressource Resize "960x" >}}
Ressourcen zu einer Buchung hinzufügen
{{< /imgproc >}}

Einem Raum ist unter Umständen eine gewisse Anzahl an fixem Equipment zugeordnet. Dieses Equipment wird beim Öffnen des Bereichs Ressourcen direkt angezeigt. Das Equipment kann nicht entfernt werden und hat in der Spalte Standort auch die Beschreibung Fix installiertes Equipment.

Neben dem Equipment, welches den Räumen fix zugeordnet ist, gibt es hier die Möglichkeit, weitere Ressourcen zu buchen. Sofern die Anzahl an Ressourcen deren Verfügbarkeit nicht übersteigt, werden diese zur Reservation hinzu gebucht.

Sie sehen, abhängig von Ihren eingetragenen Rechten, eine Ressource einzeln (z.B. den Beamer als Epson MG-850HD) oder aggregiert (d.h. den Beamer als „1 Beamer“). Das Verhalten ist wie folgt:

* Benutzer:in hat keines der beiden Rechte: Kein Ressourcen-Tab ist sichtbar.
* Benutzer:in hat das Aggregiert-Recht: Ressourcen-Tab ist sichtbar, aber nur mit der aggregierten Ansicht.
* Benutzer:in hat das Einzeln-Recht: Ressourcen-Tab ist sichtbar, aber nur mit der Einzelansicht.
* Benutzer:in hat beide Rechte: Ressourcen-Tab ist sichtbar und kann sich mittels zweier Buttons die bevorzugte der beiden Ansichten anzeigen lassen.

Sie sehen standardmässig die aggregierte Ansicht. Legen Sie beim ersten Mal seine bevorzugte Ansicht fest, wird diese gespeichert und beim nächsten Mal direkt angezeigt.

{{< imgproc Detailbuchung_Ressource_Einzelansicht Resize "960x" >}}
Die Ressourcen entweder in der aggregierten Form oder in der Einzelansicht anzeigen lassen
{{< /imgproc >}}

### Automatische Zuteilung in der aggregierten Ansicht

ROOMS berücksichtigt zuerst das bereits zugeordnete fixe Equipment. Fehlen Geräte zur gewünschten Gesamtanzahl, wird verfügbares mobiles Equipment in dieser Reihenfolge hinzugebucht: gleicher Standort wie der Raum, untergeordnete Standorte, übergeordnete Standorte. Equipment auf benachbarten Standortzweigen wird nicht angeboten. Die [Standortregel und Einrichtung](/3vrooms/einstellungen/ressourcen/#mobiles-equipment-einrichten) sind bei den Ressourcen beschrieben.

Welche Equipmentarten in dieser Ansicht erscheinen, hängt auch von Ihrer Gruppenzugehörigkeit und der [Verfügbarkeit der Gliederung für den Raum](/3vrooms/einstellungen/erweitertebasisdatenfuerressourcen/gliederung/#verfügbarkeit) ab.

### Equipment hinzufügen

Lassen Sie sich die Ressourcen in der Einzelansicht anzeigen, sehen Sie oben links den Button `Equipment hinzufügen`.

Mit den Buttons _Equipment hinzufügen_ oder _Parkplatz hinzufügen_ können Sie einem Raum zusätzliches mobiles Equipment oder Parkplatzreservationen hinzufügen. Im geöffneten Fenster wählen Sie aus den zeitlich verfügbaren und für Sie buchbaren Ressourcen. Für mobiles Equipment gilt dabei die [Standortregel](/3vrooms/einstellungen/ressourcen/#standort-des-mobilen-equipments).

{{% alert color="info" title="Freigabe für den Raum" %}}
Die Einzelansicht filtert Geräte nicht nach der Verfügbarkeit ihrer Gliederung für den Raum. Beim Speichern wird diese Freigabe jedoch geprüft. Ein angezeigtes Gerät ist deshalb nicht automatisch für den Raum buchbar. Siehe [Verfügbarkeit der Gliederung](/3vrooms/einstellungen/erweitertebasisdatenfuerressourcen/gliederung/#verfügbarkeit).
{{% /alert %}}

{{< imgproc Detailbuchung_Ressource_hinzufügen Resize "960x" >}}
Ausgewähltes Equipment hinzufügen
{{< /imgproc >}}


In dieser Liste fügen Sie mittels Auswahl der Ressourcen mit den Checkboxen und Klick auf den Button `Hinzufügen` das ausgewählte Equipment hinzu. Das Equipment erscheint sofort in der Liste der verfügbaren Ressourcen.

Falls Sie die zusätzlichen Ressourcen doch nicht verwenden, können Sie diese wiederum mittels der Auswahl der Checkboxen und Klick auf den Button `Entfernen` aus der Liste entfernen. Wenn die Buchung abgeschlossen ist, werden die hinzugefügten Ressourcen automatisch gebucht und für diesen Raum vorgemerkt.

### Raum wechseln und Equipment bereitstellen

Verschieben Sie die Buchung auf einen anderen Raum, prüft ROOMS die Standortzuordnung des mobilen Equipments erneut. Geräte, die vom neuen Raum aus nicht mehr über die Standortregel erreichbar sind, werden aus der Buchung entfernt. Prüfen Sie deshalb nach einem Raumwechsel auch das Equipment.

Für die Bereitstellung können Sie die Buchungen über [Nur Buchungen mit mobilem Equipment](/3vrooms/listen/buchungensuchen/erweitertesuche/dienstleisterspezifischekriterien/#buchungen-mit-mobilem-equipment-finden) finden und die Equipment-Bezeichnungen als Textspalte einblenden.

### Teilbare (virtuelle) Räume

Die virtuellen Räume (Teile eines teilbaren Raumes) werden neu im Sidepanel in der Raumbeschreibung visualisiert.

Ausgangslage: Alle Räume bestehen einzeln und haben keine virtuellen Räume zugewiesen bekommen.
