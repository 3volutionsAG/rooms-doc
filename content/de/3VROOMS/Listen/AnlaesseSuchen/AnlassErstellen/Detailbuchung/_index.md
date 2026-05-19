---
title: "Detailbuchung"
linkTitle: "Detailbuchung"
weight: 1
description: 'Über den Menüpunkt Buchen ist eine Detailbuchung eines Anlasses möglich.'
---
Navigieren Sie im Menüpunkt _Buchen_ auf das Subpanel _Anlass_.
Klicken Sie auf die Schaltfläche _Erstellen_, um die Eingabemaske zur Erstellung eines Anlasses zu öffnen.

{{< imgproc BG_ANL_ANLerst Resize "960x" >}}
Eingabemaske zur Erstellung eines Anlasses
{{< /imgproc >}}

Die Eingabemaske gliedert sich drei Bereiche, die Sie über die Reiter im oberen Bereich des Anzeigenbereichs erreichen - den Stammdaten, Catering & Servcie sowie dem Reiter Teilnehmer.
Nachdem Sie die Eingabemaske ausgefüllt haben, klicken Sie auf "Speichern" am unteren Rand des Anzeigenbereichs. Die Daten werden gespeichert und die Detailansicht des Anlasses angezeigt.

{{< imgproc BG_ANL_ANLerst_DS Resize "960x" >}}
Detailansicht des Anlasses nach dem Speichern der eingegebenen Daten
{{< /imgproc >}}

## Gliederung der Eingabemaske
### Stammdaten
Im Reiter _Stammdaten_ geben Sie alle Basisinformationen zum Anlass ein. Dazu gehören u.a. der Titel, eine Beschreibung, die Zuordnung verantwortlicher Personen.
Folgende Tabelle gibt einen Überblick mit kurzen Erklärungen der Eingabefelder.

{{< bootstrap-table "table table-striped" >}}
|Feld||Beschreibung|
|---|---|---|
|Titel||Bezeichnung des Anlasses|
|Anlasstyp|{{< imgproc BG_ANL_ANLerst_Eing_Typ Resize "200x" >}}{{< /imgproc >}}|Anlasstypen sind kundenspezifisch definiert. Dies könnten Klassifizierungen wie _internes Meeting_, _externe Buchung_ usw. sein|
|Beschreibung||Freies Eingabefeld, um Anlass zu beschreiben|
|Datum|{{< imgproc BG_ANL_ANLerst_Eing_Datum Resize "200x" >}}{{< /imgproc >}}|Die Datumsauswahl an dieser Stelle spielt eine untergeordnete Rolle, da der Zeitraum des Anlasses automatisch an die Startzeit der ersten Buchung und die Endzeit der letzten Buchung angepasst wird. Sinnvoll wäre es das Datum, ohne Anpassung der Uhrzeit, für einen Tag zu wählen, an dem eine Buchung stattfinden soll. |
|Standort|{{< imgproc BG_ANL_ANLerst_Eing_Intelibox Resize "200x" >}}{{< /imgproc >}}|Name des Stanortes eingeben und aus den Vorschlägen wählen oder über das Plus entlang des Pfades den Standort auswählen |
|Anzahl Teilnehmende||Nummerische Angabe der Anzahl der teilnehmenden Personen|
|Verantwortliche:r*|{{< imgproc BG_ANL_ANLerst_Eing_InteliboxPers Resize "200x" >}}{{< /imgproc >}}|Person, welche für den Anlass verantwortlich ist, standardmässig wird die erstellende Person eingetragen|
|Ersteller:in*|{{< imgproc BG_ANL_ANLerst_Eing_InteliboxPers Resize "200x" >}}{{< /imgproc >}}|Person, welche den Anlass erstellt, wird automatisch eingegeben|
|Organisator:in*|{{< imgproc BG_ANL_ANLerst_Eing_InteliboxPers Resize "200x" >}}{{< /imgproc >}}|Person, welche den Anlass organisiert, standardmässig wird die erstellende Person eingetragen|
|Kostenstelle Organisator:in|{{< imgproc BG_ANL_ANLerst_Eing_InteliboxKost Resize "200x" >}}{{< /imgproc >}}|Ist der organisierenden Person eine Kostenstelle zugeordnet, wird diese hier automatisch eingetragen. Über das Eingabefeld können weitere Kostenstellen hinzugefügt werden. Diese kann aus den Vorschlägen während des Tippens ausgewählt oder frei eingegeben werden.|
||{{< imgproc BG_ANL_ANLerst_Eing_Inteliboxkost2 Resize "200x" >}}{{< /imgproc >}}|Die Verteilung der Kosten kann prozentual auf verschiedene Kostenstellen aufgeteilt werden. ; _Im Beispiel trägt die Kostenstelle 1234 30% der Kosten und die Kostenstelle 5678 70% der Kosten_|
|VC Buchung|{{< imgproc BG_ANL_ANLerst_Eing_VC Resize "200x" >}}{{< /imgproc >}}|Handelt es sich um einen Anlass mit Videokonferenz, lässt sich dies hier durch Markierung der Checkbox gebucht werden|
|Anmeldeschluss||Freie Eingabe des Anmeldeschlusses|
|Anlassstatus||Der Anlassstatus ist kundenspezifisch definiert. ; _Im Beispiel kann der Status auf angefragt - der Anlass wurde noch nicht genehmigt - oder gebucht gesetzt werden - der Anlass wird verbindlich erstellt._|
|Kosten||Automatische Anzeige der aggregierten Kosten, die durch Catering & Service oder Mietgebühren zustande kommen.|
{{< /bootstrap-table >}}
---
_* Ist ein Name ausgewählt, können Sie über das Portraitsymbol an der rechten Seite des Eingabefelds die Detailansicht zu der Person einsehen. Dazu öffnet sich ein extra Fenster in Ihrem Browser_

### Catering & Service

Im Reiter Catering & Service haben Sie die Möglichkeit dem Anlass unabhängig von einer Buchung Dienstleistungen hinzuzufügen oder diese zu bearbeiten.

{{< imgproc BG_ANL_ANLerst_Eing_CS Resize "960x" >}}
Eingabemaske Catering & Service dem Anlass hinzufügen
{{< /imgproc >}}

Um eine Dienstleistung hinzuzufügen geben Sie die Bezeichnung im Eingabefeld ein oder wählen diese über die Schnellauswahl. Das Datum sollte dem Zeitpunkt einer Buchung entsprechen.
Über das Symbol rechts neben der Datumsauswahl können Sie eine Notiz an den Diesntleister, z.B. für spezielle Wünsche, eintragen.

{{< imgproc BG_ANL_ANLerst_Eing_CSsuche Resize "960x" >}}
Auswahl der gwünschten Dienstleistung
{{< /imgproc >}}

Hat sich die Anzahl der Teilnehmenden geändert, können Sie die Menge z.B. des bestellten Caterings aktualisieren. Markieren Sie hierzu die Checkbox der Dienstleistung klicken Sie unten auf die Schaltfläche _Menge aktualisieren_.
Um eine Dienstleistung zu löschen, markieren Sie die Checkbox der zu löschenden Dienstleistung und klicken Sie auf die Schaltfläche _Entfernen_.

{{< imgproc BG_ANL_ANLerst_Eing_CSbearb Resize "960x" >}}
Menge aktualisieren und Dienstleistung aus dem Anlass entfernen
{{< /imgproc >}}

### Teilnehmende

In diesem Reiter fügen Sie dem Anlass Teilnehmende unabhängig einer Buchung hinzu.

{{< imgproc BG_ANL_ANLerst_Eing_TN_b Resize "960x" >}}
Eingabemaske zum Hinzufügen von Teilnehmenden
{{< /imgproc >}}

Teilnehmende lassen sich über das Eingabefeld suchen, sofern diese bereits im System angelegt sind. Neue Teilnehmende fügen Sie über die Schaltfläche _Neuer Teilnehmer_ hinzu. Es öffnet sich ein Dialogfenster über das Sie die Person anlegen.

{{< imgproc BG_ANL_ANLerst_Eing_TNhinzu Resize "960x" >}}
Eingabemaske zum Anlegen neuer Teilnehmenden
{{< /imgproc >}}

In der Detailansicht werden alles Teilnehmenden aufgeführt. Es wird nicht unterschieden, ob diese explizit in einer Buchung hinzugefügt oder allgemein dem Anlass zugeordnet wurden.

## Buchungen hinzufügen

Sie können dem Anlass bereits bestehende Buchungen hinzufügen oder direkt aus dem Anlass neue Buchungen tätigen, die diesem zugeordnet werden.
Detaillierte Informationen hierzu finden Sie unter [Buchung einem Anlass hinzufügen](/3vrooms/listen/anlaessesuchen/anzeigenbereich/detailansichtanlaesse/bghinzufuegen/).
