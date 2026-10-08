---
title: "Daten Importe/Exporte"
linkTitle: "Daten Importe/Exporte"
weight: 2
description: 'Im Bereich Daten Importe- & Exporte sehen Sie die Importliste und bearbeiten diese. Es steht Ihnen der generische Service für Import und Export von verschiedenen Datenstämmen zur Konfiguration zur Verfügung. Erlaubt sind Importe/Exporte aus/in CSV, XML, TXT, MS SQL, AD.'
---

## Daten Importe/Exporte hinzufügen


Über den untenstehenden Button _Hinzufügen_ fügen Sie einen neuen Import Parameter zur Importliste hinzu. Bei diesem bearbeiten Sie die Stammdaten.

{{< imgproc Importe_hinzufügen_suchen Resize "960x" >}}
Globale Parameter, Konfigurationsdaten bearbeiten
{{< /imgproc >}}

### Stammdaten bearbeiten


Folgende Daten können für den Import Parameter bearbeitet werden:

{{< bootstrap-table "table table-striped" >}}
| Feld         | Funktion         |
| ------------- |-------------  |
| Name      | Namen des Importparameters angeben. Freie Eingabe eines beliebigen Namens des Import/Export Jobs. |
| Nächste Ausführung      | Datum und Zeit der Ausführung eintragen. Zum Starten des Jobs muss eine nächste Ausführung angegeben werden. Standard = leer. Datum/Zeit können auch in Vergangenheit liegen => sofortige Ausführung. Datumpicker verfügt nur über Datum/Zeit (kein von/bis) |
| Intervall in Minuten      |  Standard = leer. Validierung auf positive Ganzzahlen. leer = einmalige Ausführung |
| Konfiguration | XML basierende Konfiguration des Imports oder Exports. Wird durch GARAIO Softwareentwickler definiert. File-basierte Import-/Exportstrategien können je nach Konfiguration auch SFTP verwenden.  |
{{< /bootstrap-table >}}

{{% alert title="Hinweis zu SFTP" color="info" %}}
Für file-basierte Datenstrategien kann SFTP als Transportweg konfiguriert werden. Die konkrete Konfiguration hängt vom jeweiligen Import/Export ab und sollte vor der Aktivierung mit den Zugangsdaten und Pfaden des Zielsystems getestet werden.
{{% /alert %}}

{{< imgproc Importe_Stammdaten_bearbeiten Resize "960x" >}}
Stammdaten der Importparameter bearbeiten
{{< /imgproc >}}

## Daten Importe/Exporte durchsuchen


Über das linke Sidepanel durchsuchen Sie die Importliste nach dem Namen des Importparameters.

## USZ-Leistungsexport: Zeitpunkt der Verrechnung

{{% alert title="Gültigkeit" color="info" %}}
Dieser Abschnitt beschreibt eine kommende Erweiterung des USZ-Leistungsexports. Die Prüfung von Endzeitpunkt und Wartezeit ist noch nicht Bestandteil der freigegebenen Version. Sie gilt nur für Installationen mit dieser Erweiterung, nicht für andere Verrechnungsexporte oder den älteren USZ-SAP-Dateiexport.
{{% /alert %}}

### Wann werden Buchungen und Anlässe exportiert?

Die Freigabe zur Verrechnung kann weiterhin vor dem Ende einer Buchung oder eines Anlasses gesetzt werden. Ohne ausdrücklich konfigurierten Datumsbereich wartet der Leistungsexport jedoch, bis der Endzeitpunkt und eine allfällige zusätzliche Wartezeit verstrichen sind. Massgebend ist der Endzeitpunkt, nicht ein Abschlussstatus.

Eine Buchung oder ein Anlass wird nur berücksichtigt, wenn:

- die Verrechnung freigegeben ist,
- mindestens eine Bestellung vorhanden ist,
- noch kein erfolgreicher Verrechnungsexport gespeichert ist und
- der Endzeitpunkt **vor** dem Exportzeitpunkt abzüglich der konfigurierten Wartezeit liegt.

Beim exakten Erreichen dieser Zeitgrenze erfolgt noch kein Export. Der tatsächliche Versand erfolgt bei einem späteren Exportlauf, sobald die Voraussetzungen erfüllt sind; die Wartezeit legt keinen eigenen Ausführungstermin fest.

### Wartezeit konfigurieren

Die zusätzliche Wartezeit wird in der Anwendungskonfiguration über `UszLeistungsExportDataStrategyExportDelayHours` in ganzen Stunden festgelegt. Lassen Sie diese Einstellung durch den zuständigen Support konfigurieren und mit dem Ausführungsintervall des Exportjobs abstimmen. Sie ist kein zusätzliches Feld in den Stammdaten des Import-/Exportjobs.

Ohne Einstellung, bei leerem Wert oder bei `0` entfällt nur die zusätzliche Wartezeit; die Buchung oder der Anlass muss trotzdem beendet sein. Zulässig sind nicht negative ganze Zahlen innerhalb des unterstützten Datumsbereichs. Ungültige Werte wie negative Zahlen, Dezimalzahlen oder Text führen zum Abbruch des Exportlaufs, sofern kein ausdrücklicher Datumsbereich konfiguriert ist.

### Ausnahme: ausdrücklich konfigurierter Datumsbereich

{{% alert title="Datumsbereich ersetzt die Zeitgrenze" color="warning" %}}
Ist `UszLeistungsExportDataStrategyDateRangeFilter` gesetzt, ersetzt dieser Datumsbereich die automatische Prüfung von Endzeitpunkt und Wartezeit. Damit können auch laufende oder zukünftige Buchungen und Anlässe im ausgewählten Bereich exportiert werden. Lassen Sie einen solchen Export vor der Ausführung durch den zuständigen Support prüfen. Ein erfolgreicher Export wird gespeichert und im nächsten regulären Lauf nicht erneut berücksichtigt.
{{% /alert %}}

Die Freigabe zur Verrechnung, vorhandene Bestellungen und der noch ausstehende erfolgreiche Export bleiben auch mit einem Datumsbereich erforderlich. Eine Einschränkung auf eine einzelne Buchung oder einen einzelnen Anlass hebt diese Voraussetzungen und die jeweils geltende Zeitbegrenzung nicht auf.

## E-Mail bei Import-/Exportfehlern

### Wozu gibt es die Fehlerbenachrichtigung?

Bei einem fehlgeschlagenen geplanten Import oder Export des generischen Import-/Exportdiensts kann ROOMS die zuständigen Personen per E-Mail informieren. Dazu gehören auch Fehler beim Aufbau der Task-Konfiguration und Fehler in abhängigen Tasks. Bei abhängigen Tasks wird der Name des zuerst erkannten fehlgeschlagenen Tasks gemeldet.

Auch der BFH WaveWare Import verwendet diese Benachrichtigung bei Validierungsfehlern und bei einem Abbruch durch einen Fehler. Andere kundenspezifische Import-/Exportdienste sind nicht automatisch abgedeckt.

### Voraussetzungen und Empfänger

Für die Konfiguration benötigen Sie die globalen Rechte **Darf Benutzergruppen verwalten** (2) und **Darf Notifikationen verwalten** (41). Ausserdem muss der E-Mail-Versand für Ihre Installation eingerichtet sein.

Die Benachrichtigung geht an die aktiven Personen der konfigurierten Benutzergruppe mit hinterlegter E-Mail-Adresse. Zusätzlich werden die in der Vorlage erfassten CC-Adressen berücksichtigt. Eine Vorlage mit leerem **Email Body** löst keine E-Mail aus.

{{% alert title="Empfängerkreis prüfen" color="warning" %}}
Alle Benutzergruppen mit einer Vorlage des Typs **Import/Export: Fehler** erhalten die Fehlerbenachrichtigungen der abgedeckten Dienste. Es gibt keine Auswahl einzelner Import-/Exportjobs pro Gruppe und keine Einschränkung auf einen Standort. Prüfen Sie deshalb, welche Personen und CC-Adressen die Fehlermeldungen erhalten dürfen. Eine Vorlage am Standort wird für diesen Versand nicht verwendet.
{{% /alert %}}

### Fehlerbenachrichtigung einrichten

1. Öffnen Sie `Einstellungen` → `Sicherheitsdaten` → [Benutzergruppen]({{< relref "3VROOMS/Einstellungen/Sicherheitsdaten/Benutzergruppen/_index.md" >}}) und bearbeiten Sie die zuständige Gruppe.
2. Prüfen Sie im Reiter **Personen**, ob die vorgesehenen Empfänger zugeordnet sind. Diese Personen müssen aktiv sein und eine E-Mail-Adresse besitzen.
3. Öffnen Sie den Reiter **Notifikationen** und fügen Sie eine Vorlage mit dem Typ **Import/Export: Fehler** hinzu. Besteht bereits eine Vorlage dieses Typs, bearbeiten Sie diese.
4. Erfassen Sie **Titel** und **Email Body** in den benötigten Sprachen sowie bei Bedarf **Benachrichtigung im CC an**. Trennen Sie mehrere CC-Adressen mit einem Semikolon.
5. Speichern Sie die Vorlage im Dialog und anschliessend die Benutzergruppe mit **Speichern**.
6. Lassen Sie die Benachrichtigung vor dem Einsatz in einer kontrollierten Testumgebung mit einem fehlgeschlagenen Import oder Export prüfen. Kontrollieren Sie den tatsächlichen E-Mail-Eingang, Empfänger, CC und Inhalt.

### Platzhalter in der Vorlage

Tragen Sie die Platzhalter mit genau dieser Schreibweise in den Text ein:

{{< bootstrap-table "table table-striped" >}}
| Platzhalter | Verwendung |
| --- | --- |
| `[TaskName]` | Im Titel und im Email Body: Name des fehlgeschlagenen Import-/Exporttasks. Beim BFH WaveWare Import lautet der Wert `BFH WaveWare Import`. |
| `[WavewareImportFehler]` | Nur im Email Body für Fehlermeldungen des BFH WaveWare Imports: die gesammelten Fehlerdetails. Bei generischen Import-/Exporttasks wird dieser Platzhalter nicht ersetzt. |
{{< /bootstrap-table >}}

Ein neutraler Titel für eine gemeinsame Vorlage ist beispielsweise `Import/Export fehlgeschlagen: [TaskName]`. Verwenden Sie `[WavewareImportFehler]` nur, wenn die Vorlage die BFH-Fehlerdetails enthalten soll. Diese Gruppe erhält trotzdem auch Fehler der anderen abgedeckten Import-/Exporttasks.

{{% alert title="BFH WaveWare Import" color="warning" %}}
Die Fehlerbenachrichtigung setzt eine Gruppen-Vorlage des Typs **Import/Export: Fehler** voraus. Die bisherige standortbezogene BFH-Fehlervorlage und die bisherige separate Empfängereinstellung werden dafür nicht mehr verwendet. Ohne passende Gruppen-Vorlage und Empfänger bleibt diese Fehlerbenachrichtigung aus. Die separate Benachrichtigung über geänderte Übersetzungen bleibt unverändert.
{{% /alert %}}

### Wenn keine E-Mail ankommt

Prüfen Sie zuerst die Gruppen-Vorlage, den nicht leeren Email Body, die aktiven Gruppenmitglieder und deren E-Mail-Adressen. Der Versand erfolgt über den E-Mail-Dienst, nicht direkt durch den Import-/Exportjob. Prüfen Sie bei Bedarf die [Ereignisanzeige]({{< relref "3VROOMS/Einstellungen/System/Ereignisanzeige/_index.md" >}}) und lassen Sie den E-Mail-Versand durch den Support kontrollieren. Eine ausbleibende E-Mail bestätigt nicht, dass der Import oder Export erfolgreich war.


