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

### Stammdaten

Tragen Sie die Stammdaten des neuen Subgliederungstypen ein. Folgende Informationen können Sie eingeben:

{{< bootstrap-table "table table-striped" >}}
| Feld              | Funktion            |
| ----------------  | ------------------- |
| Bezeichnung       | Die Bezeichnung der Gliederung. Wird in der Benutzersprache des angemeldeten Benutzers geladen, das Feld kann übersetzt werden. |
| Beschreibung      | Die Beschreibung der Gliederung. Wird in der Benutzersprache des angemeldeten Benutzers geladen, das Feld kann übersetzt werden. |
| Metadata          | Frei übersetzbares Feld um zusätzliche informationen abzulegen. Wird offt verwenden um Daten in Form von JSON Objekten abzulegen |
| Sortierung        | An welcher Stelle in der Reihenfolge soll der Gliederungstyp erscheinen. |
| Vorbereitungszeit | Mindestabstand in Minuten zwischen jetzt und dem Buchungsbeginn. Anders als die Vorlauf- und Nachlaufzeit blockiert dieser Wert die Ressource nicht vor oder nach jeder Buchung. Siehe [Vorbereitungszeit](#vorbereitungszeit). |
| Bild/Datei        | Hier kann ein Bild für diese Gliederung hochgeladen werden |
{{< /bootstrap-table >}}


{{< imgproc Gliederung_hinzufügen_Stammdaten Resize "960x" >}}
Stammdaten eines neuen Subgliederungstypen eintragen
{{< /imgproc >}}

### Vorbereitungszeit

Die _Vorbereitungszeit_ legt fest, wie weit im Voraus eine Ressource gebucht werden muss. Der früheste Buchungsbeginn ist **jetzt + Vorbereitungszeit**. Sind einer Ressource mehrere Gliederungen zugeordnet, gilt deren grösste Vorbereitungszeit. Die Werte werden nicht addiert. Das System berücksichtigt diese Grenze bei der Ressourcensuche und prüft sie beim Buchen.

Beispiel: Bei 1440 Minuten (24 Stunden) Vorbereitungszeit kann die Buchung frühestens 24 Stunden ab jetzt beginnen.

Die [Vorlauf- und Nachlaufzeit](/3vrooms/buchen/buchungerstellen/detailbuchung/allgemein/#vorlauf-und-nachlaufzeit) reserviert dagegen einen Puffer direkt vor beziehungsweise nach jeder Buchung. Die Vorbereitungszeit der Gliederung erzeugt keinen solchen Puffer und fliesst nicht in die Vorlauf- oder Nachlaufzeit der Buchung ein.

### Ressource

Sie sehen hinzugefügte Ressourcen in der Liste. Sind dort keine vorhanden, können Sie Ressourcen über den untenstehenden Button "hinzufügen" auswählen.

{{% alert color="info" title="Validierung auf Gliederung" %}}
Ressourcen derselben Gliederung müssen dasselbe Tarifmodell verwenden. Beim Hinzufügen einer Ressource prüft das System deshalb, ob das Tarifmodell der ausgewählten Ressource mit den bereits zugeordneten Ressourcen dieser Gliederung übereinstimmt. Bei Abweichungen erscheint eine Validierungsmeldung und die Zuordnung wird nicht gespeichert.
{{% /alert %}}

Es öffnet sich ein Feld und Sie wählen eine oder mehrere Ressourcen über die Checkbox aus und fügen diese über den untenstehenden Button "hinzufügen" hinzu.

{{< imgproc Gliederung_hinzufügen_Ressourcen2 Resize "960x" >}}
Ressourcen auswählen und speichern
{{< /imgproc >}}

Die Liste aktualisiert sich automatisch. Sie sehen die neu hinzugefügten Ressourcen in der Liste.

### Gruppe

Hier ordnen Sie der Gliederung Benutzergruppen zu. Diese Zuordnung steuert unter anderem, welche Gliederungen Benutzer:innen in der aggregierten Ressourcenansicht einer Detailbuchung sehen. Dafür muss eine ihrer Gruppen der Gliederung zugeordnet sein. Die Gruppenzuordnung ersetzt nicht die lokalen Buchungsrechte auf der Equipment-Ressource und beschränkt nicht die Auswahl einzelner Geräte über _Equipment hinzufügen_.

Wählen Sie den untenstehenden Button _Hinzufügen_ und im geöffneten Feld die gewünschten Gruppen aus. Der Reiter ist nur mit dem Recht zum Verwalten von Benutzergruppen sichtbar.

{{< imgproc Gliederung_Gruppe_hinzufügen Resize "960x" >}}
Eine oder mehrere Gruppen zum Gliederungstypen auswählen und hinzufügen
{{< /imgproc >}}

Bestätigen Sie Ihre Auswahl über den Button "Gruppe hinzufügen". Die Liste aktualisiert sich automatisch und Sie sehen die hinzugefügten Gruppen in der Liste.

### Verfügbarkeit

Der Reiter _Verfügbarkeit_ erscheint nur, wenn beim Gliederungstyp _Aggregiert für_ gesetzt ist. Hier bestimmen Sie, für welche Zielressourcen die Gliederung verfügbar ist. Bei einem für _Raum_ aggregierten Equipmenttyp wählen Sie also die Räume aus, nicht die Geräte.

Eine leere Liste bedeutet keine Einschränkung durch diese Gliederung. Sobald Räume eingetragen sind, ist die Gliederung nur für diese Räume freigegeben. Standortregeln, zeitliche Verfügbarkeit und Buchungsrechte gelten weiterhin.

Die Freigabe wird bei der Raumsuche mit Equipmentanzahl, beispielsweise _Raum mit 2 Beamern_, für das mobile Equipment berücksichtigt. Auch die aggregierte Ansicht in der Detailbuchung zeigt nur die für den Raum freigegebenen Gliederungen.

{{% alert color="info" title="Auswahl und Buchungsprüfung" %}}
In der Einzelansicht kann _Equipment hinzufügen_ Geräte anzeigen, deren Gliederung für den Raum nicht freigegeben ist. Beim Speichern der Raumbuchung wird die Freigabe jedoch geprüft. Nicht freigegebenes Equipment verhindert den Abschluss der Buchung mit einer Validierungsmeldung. Sind einem Gerät mehrere für _Raum_ aggregierte Gliederungen zugeordnet, müssen alle darauf gesetzten Raumeinschränkungen erfüllt sein.
{{% /alert %}}

Wählen Sie _Hinzufügen_ und markieren Sie die gewünschten Ressourcen über die Checkboxen.

{{< imgproc Gliederung_Verfügbarkeit_hinzufügen Resize "960x" >}}
Verfügbarkeiten auswählen und hinzufügen
{{< /imgproc >}}

Bestätigen Sie Ihre Auswahl über "Ressource hinzufügen". Die Liste aktualisiert sich automatisch.

## Gliederungstypen löschen

Bei bestimmten Berechtigungen können Sie Gliederungstypen löschen. Bei erfolgreicher Löschung erscheint eine Bestätigungsmeldung im Actionpanel.
Gliederungstypen können nur gelöscht werden, wenn unterhalb keine Gliederungen mehr bestehen – ansonsten erscheint eine Fehlermeldung im Actionpanel.
Gliederungen mit zugeordneten Ressourcen können nicht gelöscht werden – es erscheint eine Fehlermeldung im Actionpanel.
