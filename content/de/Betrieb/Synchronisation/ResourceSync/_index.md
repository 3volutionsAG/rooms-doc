---
title: "Exchange Ressource Sync"
linkTitle: "Exchange Ressource Sync"
weight: 50
description: "Synchronisation von Exchange-Ressourcen mit ROOMS-Ressourcen."
---

{{% alert title="Voraussetzung (häufige Fehlerquelle)" color="info" %}}
Für Ressourcen gilt besonders häufig:

- die **E-Mail** muss auf die **primäre SMTP-Adresse** der Ressourcenmailbox zeigen
- `EWS1`, `EWS2` und `O365` benötigen eine gültige **EWS `.asmx`-URL**
- `Microsoft365` benötigt **keine** `Sync-URL`
- verwechseln Sie `O365` nicht mit `Microsoft365` - `O365` ist weiterhin ein EWS-Modus
{{% /alert %}}

## Voraussetzungen

### Globale Parameter

Folgende Einstellungen müssen unter **Einstellungen → System → Globale Parameter** gesetzt sein:

{{< bootstrap-table "table table-striped" >}}
| Parameter | Wert |
|-----------|------|
| `Exchange Ressource Sync enabled` | `true` |
{{< /bootstrap-table >}}

### Legacy `backSyncService`

Für klassische Windows-Service-Setups mit EWS-Ressourcen-Sync wird zusätzlich weiterhin `backSyncService` verwendet:

```xml
<AddInstance
  Key="backSyncService"
  PluginType="Garaio.Products.Rooms.Core.WindowsServices.BaseServiceSession,Garaio.Products.Rooms.Core"
  PluggedType="Garaio.Products.Rooms.Core.WindowsServices.BackSyncService.BackSyncServiceSession,Garaio.Products.Rooms.Core" />
```

Für **Graph-Subscription-Management**, **EWS-Subscription-Management** und andere bereits migrierte Hintergrundjobs ist dagegen keine separate `pushSubscriberServiceSession`-Aktivierung mehr nötig.

## Ressource konfigurieren

Unter **Einstellungen → Ressourcen → Bearbeiten** werden die einzelnen Ressourcen für die Synchronisation eingerichtet:

{{< bootstrap-table "table table-striped" >}}
| Feld | Beschreibung |
|------|--------------|
| **E-Mail** | muss auf die primäre SMTP-Adresse der Exchange-Ressource gesetzt werden |
| **Sync-Modus** | `EWS1`, `EWS2`, `O365` oder `Microsoft365` |
| **Sync-URL** | nur bei `EWS1`, `EWS2`, `O365` relevant |
| **Ist Sync-Master** | steuert das Verhalten bei Konflikten |
{{< /bootstrap-table >}}

### E-Mail-Alias beim Speichern

Beim Speichern einer aktiven Exchange-synchronisierten Ressource kann ein hinterlegter Alias automatisch durch die primäre SMTP-Adresse ersetzt werden. Wer die Ressource speichert, erhält bei einer Korrektur eine Informationsmeldung in ROOMS. Pflegen Sie weiterhin die primäre Adresse. Voraussetzungen, Grenzen und Prüfpunkte stehen unter [E-Mail-Alias und automatische Adresskorrektur]({{< relref "Betrieb/Synchronisation/Troubleshooting/_index.md#e-mail-alias-und-automatische-adresskorrektur" >}}).

### Ist Sync-Master

Falls eine Buchung in Exchange nicht für ROOMS verfügbar ist (z. B. wegen bestehender Buchung oder Sperrzeit), wird die ROOMS-Buchung nicht erstellt und eine Fehler-E-Mail versendet.

{{< bootstrap-table "table table-striped" >}}
| Ist Sync-Master | Verhalten |
|-----------------|-----------|
| **Aktiviert** | die Raumbuchung wird auch auf der Exchange-Seite entfernt bzw. der Teilnehmer wird aus der ROOMS-Buchung entfernt |
| **Deaktiviert** | der Termin bleibt in Exchange bestehen, es wird lediglich eine Fehler-E-Mail ausgelöst |
{{< /bootstrap-table >}}

### Free/Busy-Status

Bei Ressourcen mit Exchange-Synchronisation kann ROOMS den Free/Busy-Status der Ressource im Kalender anzeigen. Dafür benötigt der Benutzer das globale Recht **Darf Free/Busy Informationen von Ressourcen welche mit Exchange verbunden sind einsehen**.

Diese Anzeige ist vor allem für Support und Disposition nützlich, wenn geprüft werden soll, ob ROOMS und Exchange dieselbe Belegung kennen.

Wenn in der Exchange-Free/Busy-Anzeige ein erwarteter Ressourcentermin fehlt oder abweicht, kann der Backsync über den betroffenen Free/Busy-Slot im Kalender erneut ausgelöst werden. ROOMS verwendet dabei die Ressource sowie Start- und Endzeit des angeklickten Slots. Verwenden Sie diese Funktion gezielt zur Korrektur einzelner Abweichungen und nicht als Ersatz für eine saubere Synchronisationskonfiguration.

## EWS vs Graph bei Ressourcen

- `EWS1`, `EWS2`, `O365` synchronisieren Ressourcen über **EWS**
- `Microsoft365` synchronisiert Ressourcen über **Graph**
- Ressourcen laufen bei `Microsoft365` praktisch **app-basiert** - ein Enduser-Consent-Flow wie bei Personen ist dafür nicht vorgesehen

## Raumwechsel in Outlook

Bei einer bereits synchronisierten Buchung kann die organisierende Person den Raum direkt im Outlook-Termin ersetzen:

1. neuen synchronisierten Raum über die Outlook-Raumsuche als Ressource hinzufügen
2. bisherigen Raum aus dem Termin entfernen
3. Termin speichern oder senden

ROOMS ordnet den Outlook-Termin der bestehenden Buchung zu und wechselt die ROOMS-Ressource, wenn die Buchung auf dem neuen Raum zulässig ist. Titel, Zeitraum und menschliche Teilnehmende werden aus demselben Outlook-Stand übernommen. Ein Raumwechsel gilt als notifikationsrelevante Änderung; ROOMS versendet die dafür konfigurierten Änderungsmitteilungen.

Sind vorübergehend der bisherige und genau ein neuer synchronisierter Raum im Termin vorhanden, behandelt ROOMS den neuen Raum als Ersatz und bereinigt den bisherigen Raum bei der Synchronisation. Trotzdem soll am Ende nur ein synchronisierter Raum eingeladen sein. Mehrere zusätzliche Räume führen zu einem mehrdeutigen Zustand und sollen vermieden werden.

{{% alert title="Wichtig" color="warning" %}}
Ein Text im Outlook-Feld **Ort** genügt nicht für einen Raumwechsel. Der neue Raum muss als Exchange-Ressource eingeladen sein.
{{% /alert %}}

## Limitationen

{{% alert title="Vor- und Nachlaufzeiten" color="warning" %}}
Ist die Ressourcen-Sync auf einer Ressource aktiviert, können Vor- und Nachlaufzeiten nicht mehr verwendet werden. Bei allen Buchungen der Ressource werden die Vor- und Nachlaufzeiten auf **0** gesetzt, da Exchange dieses Konzept nicht unterstützt.
{{% /alert %}}

{{< bootstrap-table "table table-striped" >}}
| Einschränkung | Beschreibung |
|---------------|-------------|
| **Nur eine Ressource pro Termin** | Grundsätzlich darf bei einem Outlook-Termin nur eine synchronisierte Ressource hinzugefügt oder eingeladen sein. Beim oben beschriebenen Raumwechsel dürfen vorübergehend der bisherige und genau ein neuer synchronisierter Raum vorhanden sein. |
| **Add-in: Ressource nicht manuell einladen** | Wird über das Add-in eine synchronisierte Ressource gebucht, darf sie nicht zusätzlich als Teilnehmer hinzugefügt werden |
| **Kein direkter Zugriff auf Exchange-Kalender** | Termine sollen nicht direkt auf der Ressourcenmailbox erstellt werden; die Synchronisation ist auf den ROOMS-Flow ausgerichtet |
{{< /bootstrap-table >}}

Es wird empfohlen, Benutzenden keinen direkten Zugriff auf die Exchange-Ressourcen-Mailboxen zu gewähren.

## Buchungsrichtlinien der Exchange-Ressource (Booking Policies)

Exchange-Raumressourcen verarbeiten Buchungsanfragen automatisch (`AutomateProcessing: AutoAccept`). Die Ressource entscheidet anhand von Buchungsrichtlinien (Booking Policies), ob sie eine Anfrage annimmt oder ablehnt.

### Regeln in ROOMS prüfen

Öffnen Sie eine gespeicherte Ressource unter **Einstellungen → Ressourcen → Bearbeiten**. Im Abschnitt **Exchange-Synchronisation** werden bei einer Ressource mit Exchange-Postfach die **Exchange-Buchungsregeln** angezeigt. Das Exchange-Modul muss lizenziert und die Ressourcen-Synchronisation eingerichtet sein. Die Regeln sind auch in der Ressourcenansicht sichtbar.

Für den manuellen Abruf benötigen Sie die Bearbeitungsrechte der Ressource: bei Räumen das globale Recht **Darf Ressourcetyp Raum verwalten** und das standortabhängige Recht **Darf Ressource bearbeiten**. In der Ansicht steht die Schaltfläche nur mit diesen Bearbeitungsrechten zur Verfügung.

1. Prüfen Sie **Stand** und das Datum des letzten erfolgreichen Abrufs.
2. Klicken Sie bei Bedarf auf **Jetzt aus Exchange abrufen**, beispielsweise nach einer Regeländerung in Exchange.
3. Warten Sie auf die Rückmeldung und prüfen Sie den angezeigten Stand erneut. Bei einem Fehler prüfen Sie die Exchange-Verbindung und den Zugriff, bevor Sie den Abruf wiederholen.

Der Abruf liest die Regeln. Er ändert weder die Exchange-Konfiguration noch bestehende Buchungen. Regeln werden in Exchange verwaltet, nicht in diesem ROOMS-Abschnitt.

{{< bootstrap-table "table table-striped" >}}
| Stand / Anzeige | Bedeutung und nächste Prüfung |
|-----------------|-------------------------------|
| **Aktuell** | Ein gültiger gespeicherter Stand liegt vor. Das Abrufdatum zeigt, wie alt er ist. |
| **Noch nicht abgerufen** | Es liegt noch kein erfolgreicher Abruf vor. Warten Sie auf den Hintergrundabruf oder prüfen Sie die Verbindung mit dem manuellen Abruf. |
| **Veraltet** | Die gespeicherten Werte sind abgelaufen. ROOMS prüft Buchungen nicht gegen diese Werte. Erneut abrufen und bei Fehlern Verbindung und Dienstprotokolle prüfen. |
| **Abruf fehlgeschlagen** | Der letzte Abruf war nicht erfolgreich. Ein früherer Stand kann weiterhin angezeigt und bis zu seinem Ablauf verwendet werden. Der Fehler verlängert seine Gültigkeit nicht. |
| **Von Exchange nicht geliefert** | Dieser einzelne Wert ist unbekannt. Das bedeutet nicht, dass die Buchung uneingeschränkt erlaubt ist. |
{{< /bootstrap-table >}}

Der Worker prüft alle sechs Stunden, welche Ressourcen erneut abgerufen werden müssen. Mit den Standardeinstellungen werden erfolgreich gelesene Regeln nach etwa 24 bis 30 Stunden erneuert und sind drei Tage gültig. Buchungsprüfung und Verfügbarkeitssuche verwenden den gespeicherten Stand, nicht eine neue Exchange-Abfrage pro Buchung. Für automatisch annehmende Ressourcen berücksichtigt ROOMS bekannte, gültige Regeln zu Dauer, Serien, Buchungshorizont und Konflikten. Arbeitszeiten sind nicht Bestandteil dieser Prüfung. Die tatsächliche Zusage oder Absage von Exchange bleibt massgebend.

Wenn Exchange eine maximale Dauer liefert, ersetzt diese bei automatischer Annahme die maximale Buchungsdauer aus ROOMS. Ohne einen gültigen Exchange-Wert gilt weiterhin das ROOMS-Maximum. Die minimale Buchungsdauer aus ROOMS gilt in beiden Fällen. Eine spätere Verschärfung der Regeln hebt bestehende Raumbuchungen nicht automatisch auf. Neue Termine und Änderungen von Raum oder Zeitraum werden erneut geprüft.

#### Besonderheit bei Microsoft365 / Graph

Für `Microsoft365` ist der Regelabruf standardmässig deaktiviert. Er benötigt die ausdrückliche Aktivierung von `CalendarSync:ResourceSchedulingPolicies:EnableGraphBetaDiscovery` in Worker und RoomsPro.Web sowie die vorhandene Microsoft-365-Verbindung in beiden Komponenten. Das zusätzliche Leserecht **MailboxConfigItem.Read** muss ein Administrator manuell erteilen. Die normalen Kalenderberechtigungen genügen nicht. Bevorzugt wird die Exchange-RBAC-Rolle **Application MailboxConfigItem.Read**, auf die benötigten Ressourcen eingeschränkt. Eine tenantweite Entra-Anwendungsberechtigung mit Admin Consent ist eine weiter gefasste Alternative. ROOMS vergibt diese Rechte nicht selbst.

Für EWS verwendet der Regelabruf die bereits konfigurierte EWS-Verbindung der Ressource. Eine separate Exchange-Management-Verbindung ist dafür nicht erforderlich.

{{% alert title="Graph beta und Zugriffsrechte" color="warning" %}}
Der Regelabruf verwendet Graph beta. Microsoft unterstützt beta-Schnittstellen nicht für Produktionsanwendungen. Prüfen Sie diese Einschränkung vor der Aktivierung. Das Leserecht umfasst Postfach-Konfigurationsobjekte, nicht nur Buchungsregeln. Ein eingeschränkter Exchange-RBAC-Geltungsbereich begrenzt keine zusätzlich erteilte tenantweite Entra-Berechtigung. Lassen Sie die effektiven Rechte prüfen, statt sie bei einem Abruffehler pauschal zu erweitern. Siehe [Microsoft: Graph-beta-Einschränkung](https://learn.microsoft.com/en-us/graph/api/userconfiguration-get?view=graph-rest-beta) und [Application RBAC](https://learn.microsoft.com/en-us/exchange/permissions-exo/application-rbac).
{{% /alert %}}

Bei **Abruf fehlgeschlagen** nennt die Anzeige unter anderem deaktivierten Abruf, unvollständige Verbindung oder verweigerten Postfachzugriff. Prüfen Sie Aktivierung, Verbindung, Berechtigung und Postfach-Geltungsbereich. Ein fehlgeschlagener Regelabruf allein beweist keinen Ausfall der Kalender-Synchronisation.

### Wichtige Parameter

{{< bootstrap-table "table table-striped" >}}
| Parameter | Beschreibung | Auswirkung auf Serien |
|-----------|-------------|----------------------|
| `AllowRecurringMeetings` | ob wiederkehrende Termine erlaubt sind | `$false` → alle Serien werden abgelehnt |
| `AllowConflicts` | ob Überschneidungen erlaubt sind | `$true` → Exchange ignoriert die beiden Konfliktgrenzen |
| `BookingWindowInDays` | maximaler Buchungszeitraum in die Zukunft | begrenzt die Raumbuchungen, nicht zwingend die Länge der Organisatorserie |
| `EnforceSchedulingHorizon` | Verhalten bei Serien über das Buchungsfenster hinaus | `$true` → Serie wird abgelehnt; `$false` → Raum wird nur bis zum Ende des Buchungsfensters gebucht |
| `MaximumConflictInstances` | maximale Anzahl Konflikte in einer Serie | wird der Wert überschritten, lehnt Exchange die gesamte Serie ab |
| `ConflictPercentageAllowed` | maximal erlaubter Konfliktanteil in % | Überschreitung → gesamte Serie wird abgelehnt |
| `MaximumDurationInMinutes` | maximale Dauer eines einzelnen Termins | Einzeltermine über dem Limit werden abgelehnt |
{{< /bootstrap-table >}}

### Auswirkung auf Serien mit Konflikten

ROOMS prüft die bekannten Exchange-Konfliktgrenzen bereits beim Erstellen und Speichern einer Serie. Sind Überschneidungen nicht erlaubt und beide Konfliktgrenzen bekannt, kann die Serie innerhalb dieser Grenzen teilweise angenommen werden. Kollidierende Termine bleiben dann ohne Raumbuchung erhalten. Beide Grenzen müssen eingehalten werden. Für den Konfliktanteil zählen nur die Termine innerhalb des Raumbuchungsfensters. Das erlaubt keine Doppelbuchung des Raums. Wählen Sie für Termine ohne Raum eine andere Ressource oder ändern Sie die Zeit.

ROOMS kann Konflikte in einer Serie intern auflösen, z. B. durch Umbuchung einzelner Termine auf alternative Räume. Die Serie wird jedoch weiterhin an die Exchange-Ressource synchronisiert. Dort bestehen die Konflikte weiterhin auf Mailbox-Ebene.

{{% alert title="Wichtig" color="warning" %}}
Wenn Überschneidungen nicht erlaubt sind und `MaximumConflictInstances` oder `ConflictPercentageAllowed` auf `0` gesetzt sind (Standard), lehnt die Exchange-Ressource eine Serie **komplett** ab, sobald auch nur ein einziger Konflikt besteht - obwohl ROOMS die Konflikte intern bereits gelöst hat.
{{% /alert %}}

### Serie länger als das Raumbuchungsfenster

Wenn Exchange Serien erlaubt und **Serien über den Buchungshorizont hinaus** als **Bis zum Ende des Buchungshorizonts angenommen** ausweist, kann eine Serie länger sein als das Raumbuchungsfenster. Mindestens ein Termin muss innerhalb des Fensters liegen. Bei **Abgelehnt** oder einer vollständig ausserhalb liegenden neuen Serie müssen Sie die Serie verkürzen, frühere Zeiten wählen oder eine andere Ressource buchen.

Bei teilweiser Annahme bleiben die späteren Termine in der Organisatorserie erhalten und zählen weiterhin zur Anzahl Wiederholungen. Sie haben aber **keine Raumbuchung**, belegen keinen Raum und werden in der Raumkosten-Vorschau nicht mitgerechnet. ROOMS weist bei diesen Terminen darauf hin, dass sie ohne Raumbuchung erhalten bleiben.

{{% alert title="Termin vorhanden bedeutet nicht Raum gebucht" color="warning" %}}
Prüfen Sie die Raumbuchung für jeden Termin. Das spätere Vorrücken des Buchungsfensters oder ein erneuter Regelabruf bucht die zuvor raumlosen Termine nicht automatisch. Bearbeiten und prüfen Sie die betreffenden Termine erneut oder wählen Sie einen anderen Raum. Weitere Hinweise unter [Serieninformationen]({{< relref "3VROOMS/Buchen/BuchungErstellen/Detailbuchung/Serieninformationen/_index.md" >}}).
{{% /alert %}}

### Aktuelle Einstellungen auslesen

```powershell
Connect-ExchangeOnline
Get-CalendarProcessing -Identity "raum@domain.ch" | Format-List
```

### Einstellungen anpassen

```powershell
Set-CalendarProcessing -Identity "raum@domain.ch" -MaximumConflictInstances 5 -ConflictPercentageAllowed 25
```
