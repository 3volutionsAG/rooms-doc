---
title: "Hintergrundjobs prüfen"
linkTitle: "Hintergrundjobs"
weight: 30
description: "Hintergrundjobs überwachen, einzelne Läufe auslösen und Risiken von Eingriffen in die Planung beachten."
---

Hintergrundjobs übernehmen wiederkehrende Aufgaben wie Subscription-Erneuerungen und Datenbereinigung sowie einzelne Aufträge, etwa die Verarbeitung einer Kalenderbenachrichtigung. Die Webanwendungen planen diese Arbeit ein. **RoomsPro.Worker** führt sie aus.

## Voraussetzung

Für das Dashboard benötigen Sie eine Anmeldung und das globale Recht **Darf Konfiguration Datenimport verwalten** (ID 29). Dieses Recht erlaubt auch Eingriffe in die Jobplanung. Es ist kein reiner Lesezugriff.

{{% alert title="Zugriff gezielt vergeben" color="warning" %}}
Berechtigte Personen können Jobs manuell auslösen, pausieren, umplanen und löschen. Sie können auch die Daten wartender Auslöser einsehen. Diese können vertrauliche Angaben aus Synchronisationsbenachrichtigungen enthalten. Geben Sie das Recht nur Personen, die diese Betriebsaufgaben ausführen dürfen. Schwärzen Sie solche Daten in Screenshots und Support-Anfragen.
{{% /alert %}}

## Wo finde ich das Dashboard?

Öffnen Sie **`/jobs`** an der öffentlichen Adresse von RoomsPro.Web, beispielsweise `https://<roomspro-adresse>/jobs`. Gehört ein Installations-Unterpfad zur Adresse, bleibt dieser vor `/jobs` erhalten.

Das Quartz-Dashboard zeigt Jobs, ihre Auslöser (**Trigger**), Ausführungen und Worker-Knoten. Ein Trigger bestimmt, wann ein Job ausgeführt wird. Das Dashboard liest und bearbeitet die gemeinsame Planung. Den Worker können Sie dort weder starten noch herunterfahren.

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
- **Umplanen:** Gespeicherte Zeitpläne bleiben über einen Worker-Neustart erhalten. Ein Neustart setzt eine Änderung nicht auf den Standard zurück. Massgeblich für die regulären Zeitpläne ist die lokale Zeitzone des Workers, nicht die Zeitzone Ihres Browsers. Gehostete Worker verwenden UTC.
- **Löschen:** Wartende Arbeit kann verloren gehen. Ein gelöschter, vom System registrierter wiederkehrender Job wird beim nächsten Worker-Start erneut angelegt. Löschen ist deshalb keine dauerhafte Deaktivierung.

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
