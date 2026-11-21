---
title: "Hintergrundjobs prüfen"
linkTitle: "Hintergrundjobs"
weight: 30
description: "Hintergrundjobs überwachen, einzelne Läufe auslösen und Risiken von Eingriffen in die Planung beachten."
---

**RoomsPro.Worker** führt die eingerichteten Service-Sessions, wiederkehrende Hintergrundjobs und einzelne Aufträge aus. Dazu gehören Synchronisation, Subscription-Erneuerungen, Benachrichtigungen und Datenbereinigung. Betreiben Sie genau einen Worker pro Installation. Die About-Seite eignet sich für die Kontrolle und einzelne Eingriffe. Das Dashboard zeigt zusätzlich Trigger und Ausführungshistorie.

## Voraussetzung

Für das Dashboard benötigen Sie eine Anmeldung und das globale Recht **Darf Konfiguration Datenimport verwalten** (ID 29). Dieses Recht erlaubt auch Eingriffe in die Jobplanung. Es ist kein reiner Lesezugriff.

{{% alert title="Zugriff gezielt vergeben" color="warning" %}}
Berechtigte Personen können Jobs manuell auslösen, pausieren, umplanen und löschen. Sie können auch die Daten wartender Auslöser einsehen. Diese können vertrauliche Angaben aus Synchronisationsbenachrichtigungen enthalten. Geben Sie das Recht nur Personen, die diese Betriebsaufgaben ausführen dürfen. Schwärzen Sie solche Daten in Screenshots und Support-Anfragen.
{{% /alert %}}

## Wo finde ich das Dashboard?

Öffnen Sie **`/jobs`** an der öffentlichen Adresse von RoomsPro.Web, beispielsweise `https://<roomspro-adresse>/jobs`. Gehört ein Installations-Unterpfad zur Adresse, bleibt dieser vor `/jobs` erhalten.

Das Quartz-Dashboard zeigt Jobs, ihre Auslöser (**Trigger**), Ausführungen und Worker-Knoten. Ein Trigger bestimmt, wann ein Job ausgeführt wird. Das Dashboard liest und bearbeitet die gemeinsame Planung. Den Worker können Sie dort weder starten noch herunterfahren.

## Services auf der About-Seite prüfen

Öffnen Sie in ROOMS **Einstellungen → System → About**, Abschnitt **Services**. Dafür benötigen Sie das globale Recht **Darf Konfiguration System verwalten** (ID 26). Für den Navigationspunkt **Einstellungen** ist zusätzlich **Darf Sektion 'Einstellungen' nutzen** (ID 105) erforderlich. Das Dashboard-Recht ID 29 ersetzt diese Rechte nicht.

Die Tabelle enthält Service-Sessions und wiederkehrende RoomsPro-Jobs. Die Spalten und Aktionen sind auch in der deutschen Oberfläche englisch beschriftet:

| Anzeige | Bedeutung |
|---|---|
| **Schedule** | Regulärer Zeitplan der Aufgabe. |
| **Last run** | Letzter protokollierter Lauf. Beim Darüberfahren mit der Maus erscheint dessen Zusammenfassung. Automatische Session-Prüfläufe ohne Arbeit werden nicht protokolliert. Ein alter oder leerer Wert beweist deshalb keinen Stillstand. |
| **Next run** | Nächster geplanter Lauf, gegebenenfalls auch eine zusätzliche Ausführung. |
| **Running** | Eine Ausführung läuft. |
| **Paused** | Die reguläre Ausführung ist pausiert. Die Pause bleibt nach einem Worker-Neustart erhalten. |
| **Failed** mit Zeitangabe | Der letzte protokollierte Lauf ist fehlgeschlagen und liegt weniger als 15 Minuten zurück. Beim Darüberfahren erscheint die Fehlermeldung. Das spätere Verschwinden dieser Anzeige allein bestätigt keine Fehlerbehebung. |
| **Collaboration licence missing** | Die erforderliche Collaboration-Lizenz fehlt. Die betroffene Synchronisations-Session führt ihre Arbeit nicht aus. Prüfen Sie die Lizenz und starten Sie den Worker nach einer Lizenzänderung neu. |

Mehrere Zustände können gleichzeitig angezeigt werden. Aktualisieren Sie die Seite für einen neuen Stand.

### Einzelne Aufgabe steuern

1. Prüfen Sie zuerst Worker, Zeitplan, Zustand und Fehlermeldung der betroffenen Aufgabe. Beheben Sie eine erkennbare Ursache, bevor Sie Arbeit erneut auslösen.
2. Falls die reguläre Ausführung unterbrochen werden muss, wählen Sie bei der Aufgabe **Pause**, sofern verfügbar. Ein bereits laufender Auftrag wird dadurch nicht abgebrochen. **Resume** setzt die Planung fort. Bestimmte Systemaufgaben lassen sich hier nicht pausieren.
3. Falls fachlich erforderlich, wählen Sie **Run now** einmal. Damit fordern Sie einen zusätzlichen Lauf an, auch bei einer pausierten Aufgabe. Der Lauf kann beispielsweise E-Mails senden oder Daten bereinigen. Er hebt die Pause nicht auf.
4. Prüfen Sie anschliessend den protokollierten Lauf, die Ereignisanzeige und das fachliche Ergebnis. Die Bestätigung des Auslösens ist keine Abschlussbestätigung. Klicken Sie bei ausbleibender Rückmeldung nicht wiederholt auf **Run now**.

**Ignore logging** ist bei Service-Sessions verfügbar und unterdrückt deren dafür vorgesehene Logmeldungen ab dem nächsten Lauf. Die Einstellung bleibt über einen Worker-Neustart erhalten. Sie pausiert die Aufgabe nicht und ist keine Zusage, dass sämtliche Meldungen beteiligter Komponenten unterdrückt werden. Verwenden Sie sie nur abgestimmt und aktivieren Sie das Logging für die Fehlersuche wieder.

Bei einer wegen einer Ausnahme fehlgeschlagenen automatischen Polling-Session wartet der Worker fünf Minuten vor weiteren regulären Versuchen. Einzelne tolerierte SQL-Deadlocks werden zunächst als Warnung protokolliert und beim nächsten Takt erneut versucht. Bei anhaltenden Fehlern prüfen Sie die Ursache mit dem Support, statt den Worker vorsorglich wiederholt neu zu starten. **Run now** kann auch während einer solchen Wartezeit einen Lauf auslösen.

Ist **ServiceSessionSchedulingJob** fehlerhaft oder fehlt eine erwartete Session, prüfen Sie die in der Fehlermeldung genannte Konfiguration. Eine ungültige Session-Planung kann deren erstmalige Einrichtung verhindern oder den bisherigen Zeitplan bestehen lassen. Der Worker prüft die Konfiguration jede Minute erneut. JSON-Dateien und Lizenzen benötigen dagegen einen [Neustart der betroffenen Prozesse]({{< relref "Betrieb/Installation/Konfig-Files/_index.md#logging-und-lizenzen" >}}).

## Einen Job prüfen und bei Bedarf auslösen

1. Prüfen Sie, ob **RoomsPro.Worker** läuft. Eine erreichbare Dashboard-Seite allein bestätigt keine laufende Hintergrundverarbeitung.
2. Öffnen Sie den betroffenen Job. Prüfen Sie den nächsten Ausführungstermin, einen allfälligen pausierten Trigger und die vorhandenen Ausführungen samt Fehlermeldungen.
3. Beheben Sie zuerst die erkennbare Ursache, beispielsweise fehlende Zugangsdaten oder eine unterbrochene Verbindung. Verwenden Sie bei Synchronisationsproblemen die [Problembehandlung]({{< relref "Betrieb/Synchronisation/Troubleshooting/_index.md" >}}).
4. Falls ein zusätzlicher Lauf fachlich erforderlich ist, wählen Sie im Job **Trigger now** einmal. Ein manuell ausgelöster Job hat dieselben Auswirkungen wie ein regulärer Lauf. Beispielsweise kann die Datenbereinigung Daten löschen.
5. Warten Sie auf die Bestätigung und prüfen Sie anschliessend die Ausführung sowie das fachliche Ergebnis. Die Bestätigung des Auslösens bedeutet nicht, dass der Job erfolgreich abgeschlossen ist.

Bleibt die Bestätigung aus, prüfen Sie zuerst Verbindung und Ausführungen. Wiederholtes Klicken kann zusätzliche Läufe auslösen.

## Planung ändern: Auswirkungen beachten

Ändern Sie Zeitpläne oder löschen Sie Jobs nur in Abstimmung mit der Betriebsverantwortung oder dem Support.

- **Pausieren:** Der betroffene Auslöser führt seine Arbeit nicht aus. Bei einem pausierten Einzelauftrag können weitere gleichartige Synchronisationsanfragen unterdrückt werden, solange dieser Auftrag wartet. Prüfen Sie pausierte Auslöser, bevor Sie einen weiteren Auftrag anstossen. Setzen Sie einen benötigten Auftrag fort, statt ihn vorsorglich zu löschen.
- **Umplanen:** Gespeicherte Zeitpläne wiederkehrender RoomsPro-Jobs bleiben über einen Worker-Neustart erhalten. Massgeblich ist die Zeitzone des gespeicherten Triggers, nicht die Zeitzone Ihres Browsers. Neue reguläre Zeitpläne verwenden die lokale Zeitzone des Workers. Das ausgelieferte Container-Image verwendet `Europe/Zurich`. Bei Service-Sessions gleicht der Worker die Planung jede Minute mit der Konfiguration ab. Eine manuelle Abweichung kann dabei überschrieben werden. Ändern Sie deren fachliche Konfiguration statt nur den Trigger im Dashboard.
- **Löschen:** Wartende Arbeit kann verloren gehen. Ein gelöschter, vom System registrierter wiederkehrender RoomsPro-Job wird beim nächsten Worker-Start erneut angelegt. Konfigurierte Service-Session-Jobs können bereits beim nächsten minütlichen Abgleich wieder erscheinen. Löschen ist deshalb keine dauerhafte Deaktivierung.

Wartende Aufträge und Wiederholungen bleiben bei einem Worker-Neustart erhalten. Unterbrochene Jobs können erneut ausgeführt werden. Ein verpasster wiederkehrender Lauf kann nachgeholt werden. Lösen Sie deshalb nach einem Neustart nicht vorsorglich alle Jobs erneut aus.

## Ausführungshistorie und Aufbewahrung

Die Job-Ausführungshistorie reicht höchstens **30 Tage** zurück und umfasst höchstens **2'000 Ausführungen**. Bei vielen Läufen ist der sichtbare Zeitraum entsprechend kürzer. Der globale Parameter **Aufbewahrungsdauer Betriebsdaten** steuert diese Historie nicht.

Für eine spätere Untersuchung sichern Sie relevante Fehlerangaben rechtzeitig über den vorgesehenen Support-Prozess. Eine leere Historie beweist nicht, dass ein Job nie ausgeführt wurde.

## Verbindungsprobleme oder leeres Dashboard

- **Zugriff verweigert:** Prüfen Sie die Anmeldung und das globale Recht ID 29.
- **Seite sichtbar, Aktionen reagieren nicht oder Verbindung bricht ab:** Das Dashboard benötigt eine dauerhafte SignalR-Verbindung. Der Reverse Proxy beziehungsweise Ingress muss WebSockets weiterleiten oder Long Polling zulassen. Bei mehreren RoomsPro.Web-Replikas ist Sitzungsbindung (Sticky Sessions) erforderlich. Lassen Sie diese Konfiguration durch den Betrieb prüfen.
- **Keine Jobs nach dem ersten Start:** Prüfen Sie, ob der Worker gestartet ist. Das Dashboard erkennt neu angelegte Scheduler im Abstand von zehn Sekunden. Warten Sie nach dem Worker-Start auf diese Erkennung.
- **Jobs warten trotz erreichbarem Dashboard:** Prüfen Sie Worker, pausierte Auslöser und Logs. Die Webanwendung führt die Jobs nicht selbst aus.

Bei einem hart abgebrochenen vollständigen Sync-Differenzen-Scan kann dessen Sperre bis zu zwölf Stunden bestehen bleiben. Ein erneuter Scan kann dann «bereits laufend» melden. Ziehen Sie den Support bei, statt den Scan wiederholt auszulösen.
