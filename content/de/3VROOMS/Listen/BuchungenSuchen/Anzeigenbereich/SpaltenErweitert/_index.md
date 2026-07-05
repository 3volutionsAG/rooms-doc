---
title: "Spaltenansicht Erweitert"
linkTitle: "Spaltenansicht Erweitert"
weight: 200
description: 'Neben den standardmässig angezeigten Spalten gibt es noch weitere Spalten mit Informationen zu den einzelnen Buchungen, die eingeblendet werden können.'
---
Über das [Spaltensymbol](/3vrooms/generell/grundlegendefunktionen/listenansichtanpassen/) können Sie weitere Spalten mit Informationn hinzufügen, sortieren oder  herausnehmen.
Die Auswahl wird automatisch gespeichert und bei der nächsten Suche übernommen.
Gespeicherte Filter können Sie unter den Persönlichen Einstellungen löschen.


{{< imgproc SpaltenauswahlZuruecksetzen Resize "960x" >}}
In den Persönlichen Einstellungen setzen Sie die Spaltenauswahl und markierten Favoriten zurück.
{{< /imgproc >}}


Tabelle: Übersicht und Erläuterung der Spaltenbezeichnungen

{{< bootstrap-table "table table-striped" >}}
|Spalte|Symbol|Anmerkungen|
|---|---|---|
|Verantwortliche:r||Für die Buchung verantwortliche Person|
|Terminieren|{{< imgproc List_BG_Anzeige_SymTerm Resize "40x" >}}{{< /imgproc >}}| Über diese Schaltfläche können Sie die Belegung beenden, die Nachlaufzeit bleibt in diesem Fall bestehen. Das Ende der Buchung wird minutengenau eingetragen. |
|Freigeben|{{< imgproc List_BG_Anzeige_SymFreig Resize "40x" >}}{{< /imgproc >}}| Über diese Schaltfläche können Sie die Belegung beenden, die Nachlaufzeit wird in diesem Fall ebenfalls freigegeben und das Ende der Buchung minutengenau eingetragen. |
|Bearbeiten|{{< imgproc Bleistift Resize "40x" >}}{{< /imgproc >}}| Über diese Schaltfläche wechseln Sie in den Bearbeitungsmodus der Buchung ; _Nähere Informationen finden Sie im Kapitel **Buchen**_ |
|Löschen|{{< imgproc List_BG_Anzeige_SymDel Resize "40x" >}}{{< /imgproc >}}| Über diese Schaltfläche können Sie die Buchung oder komplette Buchungsserie aus dem System löschen. ; Es fallen für die Buchung keinerlei Kosten an. ; Die Buchung ist in keinen Listen, Kalenderansichten, Statistiken und Reports mehr sichtbar. ; Eine Benachrichtigungsmail wird automatisch an die/den Ersteller:in, Organisator:in und Verantwortliche:n sowie an die involvierten Dienstleister gesendet. |
|Buchung von ; Anlass entfernen|{{< imgproc BuchungVonAnlassEntfernen_TT Resize "200x" >}}{{< /imgproc >}}| Über diese Schaltfläche lösen Sie eine Buchung von einem Anlass ab. Die Buchung bleibt unabhängig vom Anlass bestehen. |
|Serie von ; Anlass entfernen|| Über diese Schaltfläche lösen Sie eine Serienbuchung von einem Anlass ab. Die Buchung bleibt unabhängig vom Anlass bestehen. |
|Von ; _inkl. Vorlaufzeit_|| Beginndatum und -uhrzeit der Vorlaufzeit; _Buchung beginnt um 12:00 Uhr, bei der Buchung eingestellte Vorlaufzeit ist 15 min, als Beginnzeit wird hier 11:45 Uhr angezeigt._ |
|Bis ; _inkl. Nachlaufzeit_|| Enddatum und -uhrzeit der Nachlaufzeit; _Buchung endet um 15:00 Uhr, bei der Buchung eingestellte Nachlaufzeit ist 15 min, als Endzeit wird 15:15 Uhr angezeigt._ |
|Startdatum||Startdatum ohne Uhrzeit|
|Enddatum||Enddatum ohne Uhrzeit|
|Anzahl externer Personen||Zeigt, wie viele Personen der Buchung als extern erfasst wurden. Der Wert ist optional und darf nicht grösser sein als die gesamte Personenanzahl.|
|Workflow Statusbezeichnung||Besetzt definitiv, provisorisch, Sytem oder temporär|
|Anlass||Titel des Anlass|
|Anlass Nummer||Dem Anlass zugeordnete eindeutige Nummer|
|Notiz an Dienstleistungsfirma||Notiz, welche der Dienstleistungsfirma bei Bestellung zusätzlich übermittelt wurde|
|Ressourcen ID||Eindeutige Kennzeichnung der Ressource, kann der Ressourcenbezeichnung entsprechen.|
|Zeit von||Startzeit ohne Datum|
|Zeit bis||Endzeit ohne Datum|
|Standort-Name||_z.B. Name der Filiale oder Stadtname, in der sich der Standort befindet_|
|Standortbeschreibung|{{< imgproc List_BG_Anzeige_TTStandBeschr Resize "200x" >}}{{< /imgproc >}}|Beschreibung des Standortes ; _z.B. Zentrale, Werkstatt, Laden oder Showroom_|
|Standort hierachisch|| Gibt es mehrere Standorte z.B. in verschiedenen Ländern, wird hier heruntergebrochen dargestellt, in welchem Land und in welcher Stadt sich der Standort befindet ; _z.B. CH/Basel/Südstadt, der Standort befindet sich in der Südstadt in Basel in der Schweiz_ |
|Plan|{{< imgproc List_BG_Anzeige_SymPlan Resize "40x" >}}{{< /imgproc >}}| Über diese Schaltfläche öffnen Sie ein neues Fenster, in dem der Standort der Ressource auf einer Karte dargestellt wird |
{{< /bootstrap-table >}}
---

{{< imgproc List_BG_Anzeige_Plan Resize "960x" >}}
Neues Fenster mit Anzeige der Ressource auf dem Plan
{{< /imgproc >}}


{{< bootstrap-table "table table-striped" >}}
|Spalte|Symbol|Anmerkungen|
|---|---|---|
|Ressourcenart||_z.B. Raum, Parkplatz, Arbeitsplatz_|
|Bemerkungen Teilnehmende|{{< imgproc Notizbuch_Bemerkungen Resize "40x" >}}{{< /imgproc >}}|hinterlegte Bemerkung zu hinzugefügten Teilnehmenden|
|Bemerkungen intern|{{< imgproc List_BG_Anzeige_TTBemIntern Resize "200x" >}}{{< /imgproc >}}|Bei entsprechender Berechtigung sehen Sie hier weitere Bemerkungen|
|Bemerkungen Annullation|{{< imgproc List_BG_Anzeige_TTBemAnn Resize "200x" >}}{{< /imgproc >}}|Bemerkungen, die bei der Stornierung vermerkt wurden ; _z.B. wegen Krankheit abgesagt_|
|Ressource Info|{{< imgproc List_BG_Anzeige_SymResInfo Resize "40x" >}}{{< /imgproc >}}|Über diese Schaltfläche werden Sie auf die Detailansicht der Ressource weiter geleitet.|
{{< /bootstrap-table >}}
---

{{< imgproc List_BG_Anzeige_ResInfo Resize "960x" >}}
Detailansicht zur Ressource
{{< /imgproc >}}


{{< bootstrap-table "table table-striped" >}}
|Spalte|Symbol|Anmerkungen|
|---|---|---|
|Priorisierung||Rangfolge der Ressource innerhalb der Ressourcenart. [^1]|
|Bestätigung senden|{{< imgproc List_BG_Anzeige_SymBestSend Resize "40x" >}}{{< /imgproc >}}| Über diese Schaltfläche senden Sie eine Bestätigungsmail an die verantwortlichen, organisierenden und erstellenden Personen der Buchung sowie an die Teilnehmer, die in den Mailverkehr eingebunden werden sollen, sofern die Checkbox aktiviert wird. |
|Teilnehmer:innen||Auflistung der teilnehmenden Personen|
|Kostenträger [^2] Nummer ; Buchung|| Beim Erstellen einer Buchung wird als Kostenträger automatisch der Kostenträger der organisierenden Person eingetragen. |
|Kostenträger [^2] Beschreibung ; Buchung||Beschreibung des Kostenträgers, die bei der Buchung hinterlegt wurde|
|Kostenträger [^2] Geschäftsbereich ; Buchung||Gibt den Kostenträger des Geschäftsbereichs an, dem die Buchung zugeordnet ist.|
|Kostenträger [^2] Nummer ; Organisator:in||Nummer des Kostenträgers der organisierenden Person|
|Kostenträger [^2] Bezeichnung ; Organisator:in||eindeutige Kennung des Kostenträgers, welcher die organisierende Person zugeordnet ist|
|Kostenträger [^2] Nummer ; Verantwortliche:r||Nummer des Kostenträgers der verantwortlichen Person|
|Kostenträger [^2] Bezeichnung ; Verantwortliche:r||eindeutige Kennung des Kostentrgers, welcher der die verantwortliche Person zugeordnet ist|
|Logon Organisator:in|| Log-In Name, welcher der organisierenden Person zum Anmelden in ROOMS zugeteilt wurde. |
|Logon Verantwortliche:r|| Log-In Name, welcher der verantwortlichen Person zum Anmelden in ROOMS zugeteilt wurde. |
|Firma Nummer ; Organisator:in|| Eindeutige Nummer der Firma oder Abteilung, bei welcher die organisierende Person arbeitet |
|Firma Nummer ; Verantwortliche:r|| Eindeutige Nummer der Firma oder Abteilung, bei welcher die verantwortliche Person arbeitet |
|Firma Bezeichnung ; Organisator:in|| Bezeichnung der Firma oder Abteilung, bei welcher die organisierende Person arbeitet |
|Firma Bezeichnung ; Verantwortliche:r|| Bezeichnung der Firma oder Abteilung, bei welcher die verantwortliche Person arbeitet |
|Hauptbuchung||In einem Anlass kann eine Buchung als Hauptbuchung gekennzeichnet sein.|
|Folgebuchung|| Anzeige der Minuten bis zum Start der nächsten Buchung (ohne Vorlaufzeit). Bei 0 min ist die reservierte Buchungszeit abgelaufen. ; _Es erscheint nur ein Eintrag sofern die Alarmierung bei der Buchung aktiviert wurde._ |
|Wartezeit Kunde|| Zeit, welche der Kunde der Folgebuchung bereits auf die Nutzung des Raumes wartet (bezieht sich nur auf die Ressource Raum) ; _Hier erscheint nur ein Eintrag sofern die Alarmierung bei der Buchung aktiviert wurde._ |
|Offene Menge bearbeiten||Über die Schaltfläche öffnet sich der Bearbeitungsmodus der Buchung, um die Menge des benötigten Catering & Service Angebots zu bearbeiten. |
|Als No Show markieren|{{< imgproc List_BG_Anzeige_SymNoShow Resize "40x" >}}{{< /imgproc >}}|Die Buchung wird, folgengleich zu _Annlullieren_, storniert. Zusätzlich wird die Buchung als "No Show markiert und kann über diesen Filter gefunden werden. |
|Annulliert am||Datum, an dem die Buchung storniert wurde|
|Annulliert durch||Person, welche die Buchung stornierte|
|Anlass (Tooltipp)|{{< imgproc List_BG_Anzeige_TTAnl Resize "200x" >}}{{< /imgproc >}}|Das Symbol markiert, dass die Buchung zu einem Anlass gehört. Über den Tooltipp, erscheint eine Kurzinformation über den Anlass.|
|Bestellungen|{{< imgproc Bestellungen_TT Resize "200x" >}}{{< /imgproc >}}|Auflistung der zugefügten Bestellungen|
|Mobiles Equipment Aggregiert|{{< imgproc mobilesEquipment_aggretetiert_Tooltipp Resize "200x" >}}{{< /imgproc >}}| Zugebuchtes Mobiles Equipment wird als Anzahl je Equipmentart dargestellt, eine detaillierte Bezeichnung des Equipments erscheint nicht. ; _z. B. wurde der mobile Beamer "Heidi" und der mobile Beamer "Peter" gebucht. Unter Mobiles Equipment Aggregiert wird nun "2 Beamer" angezeigt._ |
|Fixes Equipment Aggregiert|| Zugebuchtes Fixes Equipment wird als Anzahl je Equimentart dargestellt, eine detaillierte Bezeichnung des Equipments erscheint nicht. ; _z. B. wurde das (dem Raum zugewiessene) Flipchart "Max" und das (dem Raum zugewiesene) Flipchart "Moritz" gebucht. Unter Fixes Equipment Aggregiert wird nun "2 Flipchart" angezeigt._ |
|Parkplätze (Tooltipp)|{{< imgproc Parkplatz_TT Resize "200x" >}}{{< /imgproc >}}|Listet die gebuchten Parkplätze auf|
|Parkplätze Aggregiert||Anzahl der gebuchten Parkplätze an|
|Fahrzeuge (Tooltipp)|{{< imgproc Fahrzeug_TT Resize "200x" >}}{{< /imgproc >}}|Listet die gebuchten Fahrzeuge auf|
|Fahrzeuge Aggregiert||Anzahl der gebuchten Fahrzeuge|
|Serieninformationen|{{< imgproc Serienbuchung Resize "40x" >}}{{< /imgproc >}}|Kurzinformationen zur Serienbuchung. ; _Beginndatum, Enddatum, Intervall_|
|Virtuelle Räume|{{< imgproc List_BG_Anzeige_TTVR Resize "200x" >}}{{< /imgproc >}}| Zuordnung eines virtuellen Raums ; _z.B. wurde der Raum "Matterhorn" gebucht, durch eine Verbindungstüre oder Herausnehmen einer Trennwand, können Sie den Raum um einen virtuellen Raum vergrössen/ergänzen_ |
{{< /bootstrap-table >}}
---

[^1]: Die Priorisierung wird in den Daten der Ressource hinterlegt. Bei einer automatischen Vergabe der Ressourcen zu einer Buchung, wird die Ressource mit der obersten Priorisierung, beginnend mit 1, vergeben.
[^2]: Die Nummer und die Beschreibung des Kostenträgers ist in den Daten der jeweiligen Person oder des Geschäftsbereichs hinterlegt.
