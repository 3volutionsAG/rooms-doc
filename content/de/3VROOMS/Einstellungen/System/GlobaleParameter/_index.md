---
title: "Globale Parameter"
linkTitle: "Globale Parameter"
weight: 1
description: In diesem Bereich sehen Sie die Konfigurationsliste ein und bearbeiten bestehende globale Parameter.
---

Im linken Sidepanel sehen Sie die Filterfunktion, mit deren Hilfe Sie nach globalen Parametern suchen können. Im rechten Feld sehen Sie die Liste aller gespeicherten globalen Parameter. Diese können Sie bearbeiten und deren gespeicherten Daten einsehen.

{{< imgproc Globaleparameter_bearbeiten_suchen Resize "960x" >}}
Globale Parameter bearbeiten und durchsuchen 
{{< /imgproc >}}

### Globale Parameter durchsuchen 

Über das linke Sidepanel durchsuchen Sie die globalen Parameter nach ihrer Bezeichnung.

### Globale Parameter: Daten einsehen

Fahren Sie mit dem Mauszeiger auf den Namen des globalen Parameters aus der Konfigurationsliste. Beim Klicken auf den Namen sehen Sie die Stammdaten und die Historie des Parameters ein.

{{< imgproc Globaleparameter_Daten_einsehen Resize "960x" >}}
Stammdaten und Historie des globalen Parameters einsehen
{{< /imgproc >}}

## Globale Parameter bearbeiten 

Einen globalen Parameter aus der Konfigurationsliste bearbeiten Sie, indem Sie auf das Sift Icon neben dem Parameter klicken. In dem Feld, welches sich öffnet, bearbeiten Sie die Konfigurationsdaten.

Die geänderten Daten speichern Sie über den untenstehenden Button `Speichern`.

{{< imgproc Globaleparameter_bearbeiten Resize "960x" >}}
Globale Parameter, Konfigurationsdaten bearbeiten
{{< /imgproc >}}

Folgende Daten können Sie ändern:

{{< bootstrap-table "table table-striped" >}}
| Feld          | Funktion      | 
| ------------- | ------------- | 
| Bezeichnung       | Interne definierte Bezeichnung des Parameters. Einsprachig (Deutsch).nicht änderbar |
| Beschreibung       | Beschreibung des Parameters. Einsprachig (Deutsch). nicht änderbar |
| Wert       | Wert des Parameters. Änderbar. Je nach Parameter stehen folgende Werte zur Verfügung. Feld: Eingabefeld. Checkbox für True/False. Dropdown für Selektionen- Textarea für größere Textmengen |
| Standard       | Ursprungswert durch den Hersteller definiert. nicht änderbar |
| Benötigtes globales Recht       | Falls der globale Parameter in direktem Zusammenhang mit einem globalen Recht steht, wird hier darauf hingewiesen. Standard: leer. nicht änderbar |
{{< /bootstrap-table >}}

### Liste der Konfigurationen

{{< bootstrap-table "table table-striped" >}}
| Id  | Bezeichnung | Beschreibung | Standard |
| --- | --- | --- | --- |
| 154 | Active reservation refresh time | Refresh time in seconds, a value of 0 disables the active reservation view | 120 |
| 90  | Aktion Tracking | Aktivieren oder Deaktivieren der Aktionsverfolgung. | true |
| 112 | Anlassersteller anhand der Buchungsanfrage gesetzt | Wenn selektiert, dann wird der Anlassersteller anhand der Buchungsanfrage gesetzt sonst wird der aktuell angemeldete Benutzer verwendet. |     |
| 95  | Anzahl Personen Detailansicht kein Initialwert | Falls aktiviert wird bei der Detailansicht keinen Initialwert bei Anzahl Personen gesetzt | false |
| 98  | Anzahl zukünftige Buchungen auf dem Türschild | Gibt an, wie viele zukünftige Buchungen auf dem Türschild angezeigt werden sollen | 5   |
| 18  | Applikation Root-Url | Hauptpfad der Applikation inkl. Mandantangabe (wird benötigt z.B. bei Notifikationen) |     |
| 60  | Applikation Root-Url Anonymous | Anonymouspfad der Applikation inkl. Mandantangabe (wird benötigt z.B. für Rest-Api) |     |
| 11  | Arbeitsbeginn | Default-Einstellung um welche Zeit der Dienstleister seine Arbeit beginnt. | 08:00 |
| 12  | Arbeitsende | Default-Einstellung um welche Zeit der Dienstleister Feierabend macht. | 17:00 |
| 76  | Autorefresh Intervalle | Kommagetrennte Werte, welche von den Benutzern als Autorefresh Intervalle (in Sekunden) gewählt werden können. 0 (aus) wird automatisch hinzugefügt. | 15, 30, 60, 180 |
| 105 | BackSync delay in minutes | Delay all backsync tasks, by specified amount of minutes. | 0   |
| 63  | Bis Zeit automatisch anpassen | Gibt an, ob im Datums- und Zeitpicker die Bis Zeit automatisch angepasst werden soll (Blockverschiebung) | true |
| 115 | Booking requests: Support multiple datetime formats | If set to true, booking requests can support multiple datetime formats. The requests need to be specifically designed to do so. | false |
| 111 | Bulk print to single document | If set to true bulk printing creates a single merged document. If set to false bulk print creates a zip containing all documents. |     |
| 156 | Calendar DatePicker Year Range | The year range of the calendar datepicker. Example: c-10:c+10 | c-10:c+10 |
| 86  | Calendar sperzeit Color | Calendar sperzeit color. | 88878A |
| 75  | Cateringblockzeit: Beginn der Blockzeit | Start der Blockzeit für Bestellungen \[hh:mm\]. |     |
| 74  | Cateringblockzeit: Gruppen ohne Blockzeiten | Semikolonseparierte Liste der Gruppen für welche die Blockzeiten nicht gelten. |     |
| 16  | CleanUpTimeout | Hält die Zeit in Minuten, nach deren Ablauf temporäre Daten ("UnitOfWork"-Kontext, Locking, System-Reservationen) gelöscht werden. | 15  |
| 38  | Darf Forms-Benutzer erstellen | Konfiguriert, ob bei einem Anonymous-Web neue Benutzer angelegt werden dürfen. | false |
| 62  | Darf ICS-Dateien erstellen | Aktiviert oder deaktiviert alle Felder, welche mit der Erstellung von ICS-Dateien zu tun haben. | false |
| 61  | Darf PIN Authentisierung nutzen. | Dieser Wert gibt an, ob der Logontyp "PIN" verwendet werden darf. | false |
| 55  | Dauer Schnellreservation (Kalender) | Konfiguration der Dauer einer Schnellreservation im Kalender (numerischer Wert in Minuten, 0 für Reservationen bis zum Tagesende). | 0   |
| 1   | Default-Paging | Standardwert für das Paging (angezeigte Anzahl Einträge pro Seite) aller SmartList-Ansichten. | 10  |
| 30  | DetailreservationPersönlicheKostenträger | Hält ob die Detailreservation Persönliche Kostenträger übernimmt. | True |
| 82  | Dummy Person Id | Dummy Person Id |     |
| 68  | Exchange (Jobmanager): Synchronisation von Jobmanager-Buchungen aktiviert | Aktiviert die Exchange Synchronisation für Buchungen, die über den Jobmanager verarbeitet werden. | false |
| 110 | Exchange Ressource Sync enabled | If set to true Exchange Ressource Sync is enabled | false |
| 67  | Exchange: Subscriptions Intervall | Gibt an in welchem Intervall alle Subscriptions erneuert werden sollen (in Minuten) | 240 |
| 93  | Google-Sync enable impersonation | Activates organizer impersonation. If true, all bookings will be created in the name of the booking organizer. This requires domain-wide delegatation for the service user. | False |
| 94  | GoogleSync Service-User | Hält die E-Mail Adresse des Service-User. |     |
| 117 | Hide unavailable ressources in the jobmanager ressource picker | If set to true, ressources which are unavailable when choosing a new ressource for a job will be hidden. | false |
| 113 | IDP Root-Url | Hauptpfad zum IDP Server. |     |
| 79  | Ignoriere Sperrzeiten bei JobManager | Erlaubt es, beim Import von Lektionen die vorhandenen Sperrzeiten auf Ressourcen zu ignorieren. | false |
| 96  | Ignoriere SSL Zertifikate bei Türschild | Das Türschild ignoriert alle SSL Zertifikate beim Verbinden mit Rooms, der QR Code des Türschilds muss neu erstellt werden. | false |
| 19  | IntelliboxMaxRecords | Hält die Anzahl der maximalen visualisierten Einträge (falls das Such-resultat grösser ist). | 15  |
| 52  | Kalender max. Anzahl dargestellter Ressourcen. | Konfiguriert, wieviele Ressourcen im Kalender maximal angezeigt werden sollen. Achtung: bei mehr als 100 Ressourcen ist eine schlechte Performance möglich. | 100 |
| 108 | KalenderViewTeilnehmerAnzeigen | Wenn aktiviert, können über die Kalender Ansicht Teilnehmer und dessen Free/Busy Informationen angezeigt werden. | true |
| 99  | Klickbarer Bereich auf dem Türschild | Gibt an, welcher Bereich auf dem Türschild klickbar ist (Mögliche Werte: Everywhere oder ClockOnly) | Everywhere |
| 3   | KonfigurationIdMaxUploadFileSize | Definiert die maximale Dateigrösse beim Datei- Upload. | 5242880 |
| 66  | Laufende Buchungen gelten als vergangen | Falls aktiviert können Benutzer ohne Vergangenheitsrecht keine bereits laufenden Buchungen bearbeiten. | true |
| 34  | Listen: Anzahl Stunden vor laufender Reservation | Anzahl Stunden vorher zu Berücksichtigen beim Suchen einer Reservation | 2   |
| 2   | Lock-Timeout | Standardwert für die Zeitdauer, nach der ein ausgecheckter Record wieder bearbeitet werden kann (Anzahl Minuten). | 5   |
| 17  | Logon Custom Servervariable | Definiert eine für Logins zu berücksichtigende Servervariable, deren Wert von einem Plugin hinterlegt wird. |     |
| 80  | Media Attachment aktivieren | Erlaubt es, Media Datei als Reservation/Anlass Beilage zu brauchen. | false |
| 157 | Media Attachment Retention Time (days) | Media Attachment Retention Time (days). Set to 0 to disable | 0   |
| 81  | Media Attachment Storage Path | Gibt an die Storage Path für die Media Attachment |     |
| 103 | Meine Arbeit, Anzahl Tage berücksichtigt | Bestimmt für wie viele vergangene Tage die Historik (Meine Arbeit) angezeigt wird. | 14  |
| 32  | ModellSerieBegerenzung | Hält den Begrenzungstyp für Serienbuchungen. Wert \[Monat\]: Anzahl der Monate in die Zukunft. Wert \[Iteration\]: Anzahl der Iterationen einer Serie. | Zeitlich |
| 92  | Mwst-Satz | Gibt den aktuellen Mehrwertsteuer-Satz an. | 0.077 |
| 73  | Notifikation (Anlass): Anlass-Mails pro Anlass versenden | True = Bei normalen Anlässen werden die Anlass-Mails versendet #### False = Es werden ausschliesslich bei normalen Anlässen die Anlass-Mails NICHT versendet. | true |
| 70  | Notifikation (Anlass): Buchungsmails pro Buchung innerhalb von einem Anlass versenden | True = Bei normalen Anlässen werden die Buchungs-Mails versendet #### False = Es werden ausschliesslich bei normalen Anlässen die Buchungs-Mails NICHT versendet | true |
| 71  | Notifikation (Jobmanager): Anlass-Mails pro Job versenden | True = Bei Jobmanager-Anlässen werden die Anlass-Mails versendet --> Standardwert #### False = Es werden ausschliesslich bei Jobmanager-Anlässen die Anlass-Mails NICHT versendet | true |
| 69  | Notifikation (Jobmanager): Buchungs-Mails pro Buchung innerhalb eines Jobs versenden | True = Bei Jobmanager-Anlässen werden die Buchungs-Mails versendet #### False = Es werden ausschliesslich bei Jobmanager-Anlässen die Buchungs-Mails NICHT versendet | true |
| 109 | O365 Outlook Addin | Hält zusätzliche Parameter welche gebraucht werden um das Manifest via ROOMS zur Verfügung zu stellen. | { manifestId: '', url: '' } |
| 64  | PersonId: Person für anonymous Autorisierung | Die ID der Person die verwendet werden soll für öffentliche Auftritte (Portalintegration, öffentliche Webseiten). |     |
| 41  | PersonId: Vorlagebenutzer für Anmeldeformular | Die ID der Person die als Vorlage für Benutzer die über das Forms-Anmeldeformular erstellt werden verwendet wird. |     |
| 35  | PersonId: Vorlagebenutzer für Filtersettings | Die ID der Person die als Vorlage für die Filtersettings (Spaltenreihenfolge, Resfresh, etc.) verwendet werden sollen. |     |
| 58  | Pop-Up zum Erstellen von Reservationen und Anlässen: Kommentar/Beschreibung editierbar. | Dieser Wert gibt an, ob der Kommentar der Reservation bzw. die Beschreibung des Anlasses im PopUp editierbar sein soll oder nicht. | true |
| 57  | Pop-Up zum Erstellen von Reservationen und Anlässen: Titel editierbar. | Dieser Wert gibt an, ob der Titel der Reservation bzw. des Anlasses im PopUp editierbar sein soll oder nicht. | false |
| 85  | Portal sperzeit Color | Portal sperzeit color. | 806245 |
| 42  | Regex für Benutzernamen im Anmeldeformular | Ein regulärer Ausdruck der verwendet wird um die Gültigkeit des Benutzernamens bei der Erstellung über das Anmeldeformular zu prüfen. | ^\\w{2,64}$ |
| 43  | Regex für Passwörter im Anmeldeformular | Ein regulärer Ausdruck der verwendet wird um die Gültigkeit des Passwortes bei der Erstellung über das Anmeldeformular zu prüfen. | ^\\w{6,20}$ |
| 102 | Reservation Detailansicht, Anzahl der angezeigten Buchungen | Anzahl Buchungen welche Angezeigt werden, bei 2 werden zwei vorherige und zwei zukünftige Buchungen angezeigt. | 2   |
| 101 | Reservation Detailansicht, Vorherige/Kommende Buchungen Suchzeitraum | Anzahl Tage in welcher in der Vergangenheit und der Zukunft, nach Buchungen gesucht welche im der Detailansicht angezeigt werden. | 1   |
| 45  | Reservationen für zugewiesene Ressourcen | Anzahl Tage für automatische Reservationen von zugewiesenen Ressourcen. | 365 |
| 106 | Scheduling-View aktiviert | Gibt an ob die Scheduling-View im Addin aktiviert ist oder nicht | true |
| 107 | Scheduling-View aktiviert für bestimmte Benutzer | Gibt an ob die Scheduling-View für bestimmte Benutzer (Mailadressen mit Komma getrennt) im Addin aktiviert ist oder nicht (wenn leer für alle aktiv) |     |
| 104 | SchnellreservationAnzahlPersonenRequired | Wenn aktiviert, muss bei der Schnellbuchung einen Wert bei Anzahl Personen gesetzt werden, falls das Recht DarfReservationenOhneAnzahlPersonenErfassen nicht vorhanden ist. | false |
| 22  | SchnellreservationListeAufrunden | Konfiguriert das zeitliche Aufrunden einer Schnellreservation (Liste). Numerischer Wert zwischen 0-60; 0 => Ab sofort; 1-60 => Aufrunden auf Minuten. | 0   |
| 23  | SchnellreservationListeDauer | Konfiguriert die Laufzeit einer Schnellreservation (Liste). Numerischer Wert zwischen 0-...; 0 => Bis Tagesende; 1-... => Dauer in Minuten | 0   |
| 29  | SchnellreservationPersönlicheKostenträger | Hält ob die Schnellreservation Persönliche Kostenträger übernimmt. | True |
| 24  | SchnellreservationPlanAufrunden | Konfiguriert das zeitliche Aufrunden einer Schnellreservation (Plan). Numerischer Wert zwischen 0-60; 0 => Ab sofort; 1-60 => Aufrunden auf Minuten. | 0   |
| 25  | SchnellreservationPlanDauer | Konfiguriert die Laufzeit einer Schnellreservation (Plan). Numerischer Wert zwischen 0-...; 0 => Bis Tagesende; 1-... => Dauer in Minuten | 0   |
| 56  | Schrittweite Suche alternative Zeiten | Konfiguration der Schrittweiten für die Suche nach alternativen Reservationszeiten (Werte in Minuten, kommasepariert: 30,45,60). | 30,60,90,120,180,210,240 |
| 59  | Schwellwert Jobmanager | Schwellwert für den Prüfstatus eines Jobs beim Verarbeiten. | 0.7 |
| 53  | Schwellwerte für Kosten auf Bestellungen | Enthält eine Liste mit den Bestellungs-Schwellwerten für jede Währung. Wenn die Gesamtkosten der Bestellungen in einer Reservation oder einem Anlass den Wert überschreiten muss die Bestellung vom Vorgesetzten genemigt werden. |     |
| 114 | Serie creation timezone adjustable | If set to true serie creation timezone is adjustable, meaning instead of using organizers timezone, the location or creator timezone can be used. | false |
| 14  | Smtp From | E-Mail Adresse, die beim Versenden von Mails als Absender angegeben wird. |     |
| 15  | Smtp Server | Hostname des Servers, der das Versenden von Mails mittels Smtp erledigt. |     |
| 9   | SPS-Steuerung Port Empfangen | Port auf welchem die SPS-Steuerung empfängt. | 0   |
| 10  | SPS-Steuerung Port Senden | Port auf welchem die SPS-Steuerung sendet. | 0   |
| 13  | SPS-Steuerungung Default Status | Status welcher als Default vergeben wird. | 1   |
| 153 | Status zurücksetzen nur wenn relevante Felder ändern | Falls ein User welcher nicht die Berechtigung zum definitiven Buchen einer Reservation besitzt, jedoch eine Änderung an einer Buchung vornimmt welche eben diesen Status besitzt, wird dieser nur dann zurückgesetzt wenn relevante Felder geändert haben. Dazu gehören unter anderem: (Datum/Zeit, Raum, Anzahl Personen, Kostenstelle). | false |
| 28  | StructureMapXml | Hält die StructureMap-Konfiguration für die kundenspezifischen Plugins. |     |
| 39  | Suchfelder in Smartlist automatisch ausblenden. | Konfiguriert, ob die Suchfelder und das Paging nicht angezeigt werden soll, wenn nicht benötigt. | false |
| 116 | Tarif calculation: Use the reworked calculations for tarifs with correct time range handling | If set to true, tarifs will be calculated with the reworked code with correct time range handling for \[Kumulativ\] and \[Pauschal\] model. This fixes the problem of reservations having no costs, if the beginning is ealier than the start of the tarif and reservations costing too much if the end is later than the end of the tarif. Reservations spanning multiple days will also be correctly calculated. | false |
| 44  | Telefonnummer validierungsregel | Konfiguriert, ob Telefonnummern validiert werden sollen und, wenn ja, wie (Regex Ausdruck). | \[\\d\\s\\+\\(\\)\]* |
| 100 | Texte auf Türschild in Grossbuchstaben darstellen | Gibt an, ob die Texte auf dem Türschild in Grossbuchstaben dargestellt werden | true |
| 46  | TMS Root URL | Konfiguriert, die Root-URL auf für die Tandberg Management Suite. |     |
|     | true |     |     |
|     | true |     |     |
| 97  | Tuerschildkonfiguration Aktualisierungsintervall (in Minuten) | In diesem Intervall wird von den Tuerschildern die Konfiguration abgefragt und aktualisiert | 15  |
| 91  | Web Check-in aktivieren | Gibt an ob das Web Check-in aktiv ist | False |
| 152 | Weiterleitung Detailbuchung Keine Rechte | Gibt an ob der Benutzer direkt auf das Detail der Buchung weitergeleitet werden soll, wenn dieser über keine Berechtigungen verfügt eine Schnellbuchung durchzuführen. | true |
| 155 | Wizard Root-Url | The Root-Url of the Addin/Wizard if installed. Please add the url including the "#". Example: https://vnext.wizard.3vrooms.local/#/ |     |
| 54  | Wochentage bei Datumsangaben anzeigen | Einstellung, ob der Wochentag bei Datumsangaben angezeigt werden soll. | false |
{{< /bootstrap-table >}}