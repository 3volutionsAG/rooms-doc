---
title: "Neue Teilnehmende erstellen"
linkTitle: "Neue Teilnehmende erstellen"
weight: 1
description: 'Unabhängig von einer Buchung können in ROOMS Besucher bzw. Teilnehmer erfasst werden. In diesem Abschnitt erfahren Sie, wie Sie Besuch im System aufnehmen können.'
---

{{% alert title="Warning" color="warning" %}}
Um diese Funktion nutzen zu können wird das Stanortbezogene Recht `Darf Anlässe buchen` benötigt.
{{% /alert %}}

Um sogenannten Walk-In-Besuch, ohne Zuordnung zu einer Buchung, in ROOMS zu registrieren, navigieren Sie im Menüpunkt Listen auf das Subpanel Teilnehmende.  *
Am unteren Rand des Anzeigenbereichs finden Sie eine Schaltfläche _Teilnehmende hinzufügen_

{{< imgproc List_TN_Anz_Schalt Resize "960x" >}}
Schaltfläche um neue Teilnehmende zu erfassen
{{< /imgproc >}}

Sie werden zur Eingabemaske weitergeleitet:

{{< imgproc List_TNneu Resize "960x" >}}
Eingabemaske um neue Teilnehmende zu erfassen
{{< /imgproc >}}

Es gibt die Möglichkeit zur Listenansicht eine einzelne Person und  zurück zu kehren oder mehrere Einzelpersonen in Serie hinzuzufügen. Ausserdem lassen sich über einen vereinfachten Modus Gruppe schneller erfassen.

{{< imgproc List_TNneu_Schalt Resize "960x" >}}
Varianten um Teilnehmende zu erfassen
{{< /imgproc >}}

## Einzelbesuch hinzufügen


Standardmässig öffnet sich die Eingabemaske für die Erfassung von Einzelbesuch.

Folgende Tabelle erläutert die Eingabefehler.

{{< bootstrap-table "table table-striped" >}}
|Feld|Funktion|
|---|---|
|Vorname|Vorname des Besuchs|
|Nachname|Nachname des Besuchs|
|Mail|E-Mail-Adresse des Besuchs|
{{< /bootstrap-table >}}
---

_Anmerkung: Es müssen entweder Vorname und Nachname oder die E-mail-Adresse des Besuchs eingetragen werden._

{{< bootstrap-table "table table-striped" >}}
|Feld||Funktion|
|---|---|---|
{{< /bootstrap-table >}}
|Gruppe|| Standardmässig ist hier eine Einzelteilnehmer:in eingetragen. Sie können aber auch Besuchsgruppen hinzufügen. Siehe dazu Abschnitt [Besuchsgruppe hinzufügen](/3vrooms/listen/teilnehmersuchen/anzeigenbereich/neuertn/#besuchsgruppe-hinzufügen).
|Kommentar|| Notieren Sie hier Informationen, die an einen Dienstleister weitergegeben werden müssen.|
|Organisator:in||Person, welche den Besuch hinzufügt ; _Wird automatisch ausgefüllt._|
|Datum/Zeit||Datum und Zeitspanne, in der der Besuch anwesend sein wird|
|Standort||Ort, an dem der Besuch sein wird ; _Angabe ist zwingend erforderlich_|
|Anlasstyp|{{< imgproc List_TN_TNneu_Art Resize "200x" >}}{{< /imgproc >}}|Grund des Besuchs|
|Optional||Teilnehmer gehört zum erweiterten Kreis der Teilnehmenden und ist für den Termin nicht erforderlich.|
|VIP||Besuch wird als VIP gekennzeichnet|
|Besuchspass Nummer||eindeutige Zuordnung des Besucherpasses|
|Besuchspass zurück|| Vermerk, ob der Besuchspass bereits zurückgegeben wurde oder noch im Umlauf ist |

Wenn Sie alle Eingaben getätigt haben, klicken Sie auf Speichern, um den Besuch hinzuzufügen und zur Listenansicht zurückzukehren.
Über die Schaltfläche _Speichern & Neu_ speichern Sie den eingegebenen Besuch und öffnen eine neue leere Eingabemaske zur Erfassung eines weiteren Einzelbesuchs.

## Besuchsgruppe hinzufügen

Besuch kann auch als Gruppe erfasst werden und als solche gekennzeichnet werden.

Füllen Sie hierzu zunächst die Eingabemaske für einen Einzelbesuch mit den Daten der ersten Person aus. Achten Sie darauf, dass entweder Vor-und Nachname oder die E-Mail-Adresse ausgefüllt ist. Zwingend erforderlich ist auch die Auswahl des Standortes.
Klicken Sie nun auf _Teilnehmergruppe erstellen_, um einen Gruppeneintrag zu erstellen.
Der Eintrag wird nun gespeichert und im Actionpanel bestätigt. Automatisch erscheint eine neue leere Eingabemaske, in der Sie eine weitere Person dieser Gruppe erfassen können. Das Eingabefeld Gruppe ist nun offen und Sie können eine Bezeichnung für diese Besuchsgruppe eingeben. Diese erscheint später in der Liste bei jedem Gruppenmitglied. Die Bezeichnung wird für die zuerst eingegebene Person automatisch nachgetragen.

{{< imgproc List_TN_TNneu_Gruppe_b Resize "960x" >}}
Vereinfachte Eingabemaske für weitere Teilnehmende einer Besuchsgruppe
{{< /imgproc >}}

Wenn Sie keine weiteren Personen der Gruppe hinzufügen möchten, klicken Sie auf abbrechen. Die Eingabemaske wird geschlossen und Sie kehren zur Listenansicht zurück.

{{< imgproc List_TN_TNneu_List_b Resize "960x" >}}
Vereinfachte Eingabemaske für weitere Teilnehmende einer Besuchsgruppe
{{< /imgproc >}}


