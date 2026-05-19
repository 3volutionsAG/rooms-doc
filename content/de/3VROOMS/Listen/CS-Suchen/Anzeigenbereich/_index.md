---
title: "Anzeigenbereich"
linkTitle: "Anzeigenbereich"
weight: 30
description: 'Im Anzeigenbereich, rechts neben dem Sidepanel, werden die Ergebnisse Ihrer Suche in Listenform dargestellt.'
---
Das Ergebnis ist tabellarisch angeordnet. Jedes Angebot wird in je einer Zeile ausgegeben. In den Spalten finden Sie alle Informationen, die zu den jeweiligen Angeboten hinterlegt sind.

{{< imgproc List_CS_Anz Resize "960x" >}}
Anzeigenbereich mit Ergebnisliste der Such nach Caterings & Services
{{< /imgproc >}}

## Spaltenansicht Standard

Standardmässig sind folgende Spalten sichtbar:

---
{{< bootstrap-table "table table-striped" >}}
|Spalte|Symbol|Anmerkungen|
|---|---|---|
|Menge||Anzahl des bestellten Angebots|
|Angebot Bezeichnung||Titel des Angebots|
|Dienstleistender||Firma/Abteilung, welche den Service zur Verfügung stellt|
|Lieferort||Standort/Raum, für welchen der Service bestellt wurde|
|Beginn||Startdatum und -uhrzeit der Dienstleistung ; _Kann von Buchungsbeginn abweichen_|
|Titel||Titel der Buchung, zu welcher der Service gebucht wurde|
|Notiz an Dienstleistende|{{< imgproc note Resize "40x" >}}{{< /imgproc >}}{{< imgproc List_CS_Anz_Notiz Resize "200x" >}}{{< /imgproc >}}|Klicken Sie auf das Symbol um eine Notiz an den Dienstleister zu lesen, einzutragen oder zu bearbeiten. Denken Sie daran, nach dem Bearbeiten auf _speichern_ zu klicken.|
|Bestellung Nummer||Anzahl der Bestellungen, die für diese Buchung aufgegeben wurden|
|Buchungsstatus||Status der Buchung|
{{< /bootstrap-table >}}
---

Die Buchungsstatus im Einzelnen:

{{< bootstrap-table "table table-striped" >}}
|Status|Bedeutung|
|---|---|
|Alle / keine auswählen|Die Suche berücksichtigt jeden/keinen Status|
|Annulliert|gelöschte und abgesagte Buchungen|
|Besetzt (definitiv)|Die Buchung wurde bestätigt und ist verbindlich|
|Besetzt (provisorisch)|Eine Buchung wurde erstellt, muss jedoch entsprechend dem hinterlegten Workflow noch bestätigt werden.|
|Besetzt (System)|Eine Buchung wird gerade erstellt. Der Zeitraum wird vom System geblockt, damit keine Doppelbuchungen generiert werden.|
|Besetzt (Temporär)|Eine Buchung wurde erstellt, muss jedoch entsprechend dem hinterlegten Workflow bestätigt werden. Wir die Buchung nicht im vorgegebenen Zeitraum bestätigt, wird der Eintrag automatisch gelöscht.||
{{< /bootstrap-table >}}
---

## Spaltenansicht Erweitert

Über das [Spaltensymbol](/3vrooms/generell/grundlegendefunktionen/listenansichtanpassen/) fügen Sie weitere Spalten der Liste hinzu, sortieren diese oder nehmen sie heraus.
Die Auswahl wird automatisch gespeichert und bei der nächsten Suche übernommen.

{{< bootstrap-table "table table-striped" >}}
|Spalte|Anmerkungen|
|---|---|
|Angebot Bezeichnung ; (erweitertet)|Angabe des Hauptangebots und aller Unterpunkte|
|Angebotskategorie Bezeichnung|eindeutige Bezeichnung der Angebotskategorie|
|Angebotszone Bezeichnung|eindeutige Benennung der Angebotszone|
|Bezeichnung|Hauptangebots|
|Standort Name|Name des Standorts, ist nicht zwingend eindeutig|
|Standort Bezeichnung|eindeutige Kennzeichnung des Standorts|
|Standort Hierarchiebezeichnung|Aufschlüsselung der Zugehörigkeit des Standorts, z.B. Europa/Schweiz/Zürich/|
|Vorlaufzeit|Startdatum und -uhrzeit der Vorbereitungszeit zur Buchung|
|Ende|Enddatum und -uhrzeit der Dienstleistung ; _Kann von Buchungsende abweichen_|
|Wochentag-Von|Startdatum und -uhrzeit der Dienstleistung mit Angabe des Wochentages ; _Kann von Buchungsbeginn abweichen_|
|Wochentag-Bis|Enddatum und -uhrzeit der Dienstleistung mit Angabe des Wochentages ; _Kann von Buchungsende abweichen_|
|Beginn Buchung/Event|Startdatum und -uhrzeit der Buchung|
|Ende Buchung/Event|Enddatum und -uhrzeit der Buchung|
|Teilnehmende|Auflistung aller teilnehmenden Personen|
|Besteller:in|Person, welche die Dienstleistung bestellte|
|Ersteller:in|Person, welche die Buchung erstellte|
|Organisator:in|Person, welche die Buchung organisiert|
|Verantwortliche:r|Person, welche für die Buchung verantwortlich ist|
|Anzahl Personen|Anzahl der Personen, für die reserviert wurde ; _kann von der tatsächlichen Teilnehmendenzahl abweichen_|
|Ressource Bezeichnung||Bezeichnung der gebuchten Ressource, zu welcher die Dienstleistung gebucht wurde ; _Z.B. Raumbezeichnung_|
|Anlass Nummer|Eindeutige Nummer des Anlasses, zu welcher die Diesntleistung gebucht wurde|
|Buchung Nummer|Buchungsnummer der Buchung, zu welcher die Dienstleistung gebucht wurde|
{{< /bootstrap-table >}}
---
