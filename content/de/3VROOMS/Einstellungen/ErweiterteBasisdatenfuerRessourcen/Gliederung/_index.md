---
title: "Gliederung"
linkTitle: "Gliederung"
weight: 1
description: 'Im Bereich Gliederung finden Sie Gliederungstyplisten. Diese Gliederungstypen können Sie einsehen, ändern und erstellen. Die Gliederungen werden in jeweils nur zwei Hierarchiestufen aufgeteilt (Hauptgliederung und Subgliederung) sowie die Initialstufe (welche auch als „Gliederungen“ bezeichnet wird).'
---

## Ansicht Gliederung

Im linken Feld finden Sie im Sidepanel alle Unterpunkte zu den erweiterten Basisdaten für Ressourcen. Im rechten Feld sehen Sie den Verlauf und die einzelnen Gliederungstypen.

Klicken Sie auf das Plus am Anfang des Elements, klappt der Stamm auf und Sie sehen die untergeordneten Subgliederungstypen.

Möchten Sie einen Gliederungstyp bearbeiten, klicken Sie auf den Namen. Neben den Gliederungstypen erscheinen dann folgende Icons:

* Plus Zeichen: neuen Subgliederungstypen erstellen. Dieses Zeichen erscheint nur bei den Hauptgliederungstypen.
* Auge: Ansehen der Informationen
* Stift: Bearbeiten eines Gliederungstypen 
* Papierkorb: Löschen eines Gliederungstypen

{{< imgproc Gliederungstyp_erstellen Resize "960x" >}}
Erstellen eines neuen Gliederungstypen
{{< /imgproc >}}

## Gliederungen verwalten

Sie können neue Gliederungstypen erstellen und bestehende bearbeiten.

Zum Bearbeiten eines bestehenden Gliederungstypen klicken Sie im Stamm im View Modus auf den Namen des Gliederungstypen und wählen Sie das Stift Icon aus zum bearbeiten. Die Beschreibung der einzelnen Felder finden Sie untenstehend.

Sie können zwei verschiedene Gliederungen verwalten:

1. Einen Gliederungstypen welcher ein Hautpeintrag darstellt
2. Eine untergeordneten Gliederung. Eine Gliederung muss immer einem Gliederungstypen zugeordnet sein.

## Neuen Gliederungstyp erstellen

Einen neuen Gliederungstypen erstellen Sie über den untenstehenden Button _Gliederungstyp erstellen_. In dem Feld, welches sich öffnet, legen Sie die Stammdaten für den jeweiligen Gliederungstyp fest.

Folgende Daten können Sie eintragen:

* Bezeichnung
* Ressourcenart
* Aggregiert für
* Sortierung
* Ist sichtbar
* Sonderzimmer

Die geänderten oder neu eingetragenen Daten speichern Sie über den untenstehenden Button `Speichern`.

{{< imgproc Gliederung_neu_hinzufügen Resize "960x" >}}
Neuen Hauptgliederungstypen hinzufügen und Stammdaten bearbeiten
{{< /imgproc >}}

Haben Sie die eingetragenen Daten gespeichert, aktualisiert sich die Liste automatisch und der neue Gliederungstyp erscheint im Stamm.

{{< imgproc Gliederung_neu_in_Liste Resize "960x" >}}
Ansicht des neuen Hauptgliederungstypen in der Liste
{{< /imgproc >}}

### Stammdaten des Gliederungstypen bearbeiten

{{< bootstrap-table "table table-striped" >}}
| Feld             | Funktion            |
| ---------------- | ------------------- |
| Bezeichnung      | Die Bezeichnung des Gliederungstypen festlegen. Wird in der Benutzersprache des angemeldeten Benutzers geladen, das Feld kann übersetzt werden. |
| Ressourcenart    | Die Ressourcenart über drop-down auswählen. Es können alle berechtigten Ressourcenarten (Sitzungszimmer, Equipment, etc.) ausgewählt werden. |
| Aggregiert für   | `Aggregiert für` über drop-down auswählen. Wahl einer Ressourcenart für welche diese Gliederungstyp zusammengezogen wird. (Beispiel: Gliederungstyp `Equipmenttyp` von der Ressourcenart Equipment wird auf dem Raum aggregiert. Somit stehen Ihnen im Reservationsprozess alle Gliederungen - Beamer, Flipchart, etc. - auf dem Raum zur Verfügung. Dies erlaubt die Suche nach einem freien Sitzungszimmer mit Beamer) |
| Sortierung       | Mittels Sortierung wird definiert, an welcher Stelle resp. in welcher Reihenfolge dieser Gliederungstyp gegenüber den anderen Gliederungstypen erscheinen soll (Relevanz im Sidepanel) |
| Ist sichtbar     | Eine zusätzliche Checkbox „sichtbar“ definiert, ob das Feld dann effektiv als Filterkriterium-Feld in den Listen sichtbar dargestellt wird oder nicht sichtbar (nur für Berechtigungszwecke) ist (über alle ausgewählten Ressourcenarten) |
| Sonderzimmer     | Checkbox mit Werten ja/nein (ja = selektiert).Relevant bei der Nutzung des Jobmanagers |
{{< /bootstrap-table >}}

## Eine Gliederung erstellen

Klicken Sie auf das Plus Symbol bei einem der Hauptgliederungstypen, können Sie einen neuen untergeordneten Subgliederungstypen erstellen.

Es öffnet sich ein neues Feld, in welchem Sie die Stammdaten, Ressourcen, Gruppen und Verfügbarkeit eingeben oder hinzufügen.

Speichern Sie Ihre Angaben über den untenstehenden Button `Speichern`. Die Liste aktualisiert sich automatisch und Sie sehen die neu Gliederung im Startmodus.

{{< imgproc Gliederung_in_tree Resize "960x" >}}
Neuer Subgliederungstyp im Stamm 
{{< /imgproc >}}

### Stammdaten 

Tragen Sie die Stammdaten des neuen Subgliederungstypen ein. Folgende Informationen können Sie eingeben:

{{< bootstrap-table "table table-striped" >}}
| Feld              | Funktion            |
| ----------------  | ------------------- |
| Bezeichnung       | Die Bezeichnung der Gliederung. Wird in der Benutzersprache des angemeldeten Benutzers geladen, das Feld kann übersetzt werden. |
| Beschreibung      | Die Beschreibung der Gliederung. Wird in der Benutzersprache des angemeldeten Benutzers geladen, das Feld kann übersetzt werden. |
| Metadata          | Frei übersetzbares Feld um zusätzliche informationen abzulegen. Wird offt verwenden um Daten in Form von JSON Objekten abzulegen |
| Sortierung        | An welcher Stelle in der Reihenfolge soll der Gliederungstyp erscheinen. |
| Vorbereitungszeit | Durch die separate Angabe der Vorbereitungszeit wird gewährleistet, dass die benötigte Zeit für die Vorbereitung berücksichtigt wird, ohne die Buchungsdauer zu beeinflussen |
| Bild/Datei        | Hier kann ein Bild für diese Gliederung hochgeladen werden |
{{< /bootstrap-table >}}


{{< imgproc Gliederung_hinzufügen_Stammdaten Resize "960x" >}}
Stammdaten eines neuen Subgliederungstypen eintragen 
{{< /imgproc >}}

### Vorbereitungszeit

Oft benötigen Ressourcen wie Räume oder Equipment eine gewisse Vorbereitungszeit, bevor sie für Buchungen verfügbar sind. Dieses Feature ermöglicht es, die notwendige Zeit für die Vorbereitung einer Ressource vor einer Buchung zu berücksichtigen, ohne die Buchungszeit selbst zu verändern.

#### Funktionsweise:
Die Vorbereitungszeit erlaubt es, die benötigte Zeit in Minuten anzugeben, die eine Ressource zur Vorbereitung vor der Buchung benötigt. Das System berücksichtigt die Vorbereitungszeit bei der Suche nach verfügbaren Ressourcen. Dadurch wird gewährleistet, dass die benötigte Zeit für die Vorbereitung angemessen eingeplant wird, ohne die Buchungsdauer mit Vorlaufzeiten zu beeinflussen.

#### Beispiel: Raumreservierung mit 24 Stunden Vorbereitungszeit:
Angenommen, Sie möchten einen Konferenzraum so konfigurieren, dass er mindestens 24 Stunden im Voraus gebucht werden muss.

Durchführung:

    Ressourcenname: Konferenzraum A
    Vorbereitungszeit: 1440 Minuten (24 Stunden)

Das System verhindert automatisch Buchungen, die nicht die erforderliche Vorlaufzeit einhalten. Wenn Sie den Raum am 29. August ab 10:00 Uhr buchen möchten, muss die Buchung vor dem 28. August um 10:00 Uhr abgeschlossen werden.

#### Zusammenfassung:
Das "Vorbereitungszeit"-Feature ermöglicht eine genauere Planung von Ressourcenbuchungen. Es integriert die notwendige Vorbereitungszeit in den Buchungsprozess, ohne die Buchungszeit selbst zu ändern. Dies erleichtert die effiziente Nutzung von Ressourcen.

Wenn Sie Fragen haben oder Unterstützung benötigen, stehen wir Ihnen gerne zur Verfügung.

### Ressource 

Sie sehen hinzugefügte Ressourcen in der Liste. Sind dort keine vorhanden, können Sie Ressourcen über den untenstehenden Button "hinzufügen" auswählen.

{{< imgproc Gliederung_hinzufügen_Ressourcen Resize "960x" >}}
Ressourcen zu Gliederungstypen hinzufügen
{{< /imgproc >}}

Es öffnet sich ein Feld und Sie wählen eine oder mehrere Ressourcen über die Checkbox aus und fügen diese über den untenstehenden Button "hinzufügen" hinzu.

{{< imgproc Gliederung_hinzufügen_Ressourcen2 Resize "960x" >}}
Ressourcen auswählen und speichern
{{< /imgproc >}}

Die Liste aktualisiert sich automatisch. Sie sehen die neu hinzugefügten Ressourcen in der Liste.

{{< imgproc Gliederung_hinzufügen_Ressourcen_in_Liste Resize "960x" >}}
Ressourcenübersicht in der Liste
{{< /imgproc >}}

### Gruppe 

Sie können Gruppen zum Gliederungstypen hinzufügen. Wählen Sie dafür den untenstehenden Button `hinzufügen` aus. Es öffnet sich ein neues Feld. In diesem wählen Sie eine oder mehrere zur Verfügung stehender Gruppen aus.

{{< imgproc Gliederung_Gruppe_hinzufügen Resize "960x" >}}
Eine oder mehrere Gruppen zum Gliederungstypen auswählen und hinzufügen
{{< /imgproc >}}

Bestätigen Sie Ihre Auswahl über den Button "Gruppe hinzufügen". Die Liste aktualisiert sich automatisch und Sie sehen die hinzugefügten Gruppen in der Liste.

{{< imgproc Gliederung_Gruppe_hinzufügen_Liste Resize "960x" >}}
Ansicht der neuen Gruppe in der Liste 
{{< /imgproc >}}

### Verfügbarkeit 

Im Reiter Verfügbarkeit können Sie weitere Ressourcen auswählen. Wählen Sie dafür den untenstehenden Button `Hinzufügen` aus und wählen Sie über die Checkbox eine oder mehrere Ressourcen aus.

{{< imgproc Gliederung_Verfügbarkeit_hinzufügen Resize "960x" >}}
Verfügbarkeiten auswählen und hinzufügen
{{< /imgproc >}}

Bestätigen Sie Ihre Auswahl über "Ressource hinzufügen". Die Liste aktualisiert sich automatisch.

{{< imgproc Gliederung_Verfügbarkeit_hinzufügen_Liste Resize "960x" >}}
Verfügbarkeiten auswählen und hinzufügen
{{< /imgproc >}}

## Gliederungstypen löschen

Bei bestimmten Berechtigungen können Sie Gliederungstypen löschen. Bei erfolgreicher Löschung erscheint eine Bestätigungsmeldung im Actionpanel.
Gliederungstypen können nur gelöscht werden, wenn unterhalb keine Gliederungen mehr bestehen – ansonsten erscheint eine Fehlermeldung im Actionpanel.
Gliederungen mit zugeordneten Ressourcen können nicht gelöscht werden – es erscheint eine Fehlermeldung im Actionpanel.