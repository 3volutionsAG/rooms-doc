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

### Wichtige Parameter

{{< bootstrap-table "table table-striped" >}}
| Parameter | Beschreibung | Auswirkung auf Serien |
|-----------|-------------|----------------------|
| `AllowRecurringMeetings` | ob wiederkehrende Termine erlaubt sind | `$false` → alle Serien werden abgelehnt |
| `BookingWindowInDays` | maximaler Buchungszeitraum in die Zukunft | Serie wird abgelehnt, wenn Termine ausserhalb des Fensters liegen |
| `EnforceSchedulingHorizon` | ob `BookingWindowInDays` erzwungen wird | `$true` → Termine ausserhalb des Fensters werden abgelehnt |
| `MaximumConflictInstances` | maximale Anzahl Konflikte in einer Serie | wird der Wert überschritten, lehnt Exchange die gesamte Serie ab |
| `ConflictPercentageAllowed` | maximal erlaubter Konfliktanteil in % | Überschreitung → gesamte Serie wird abgelehnt |
| `MaximumDurationInMinutes` | maximale Dauer eines einzelnen Termins | Einzeltermine über dem Limit werden abgelehnt |
{{< /bootstrap-table >}}

### Auswirkung auf Serien mit Konflikten

ROOMS kann Konflikte in einer Serie intern auflösen, z. B. durch Umbuchung einzelner Termine auf alternative Räume. Die Serie wird jedoch weiterhin an die Exchange-Ressource synchronisiert. Dort bestehen die Konflikte weiterhin auf Mailbox-Ebene.

{{% alert title="Wichtig" color="warning" %}}
Wenn `MaximumConflictInstances` oder `ConflictPercentageAllowed` auf `0` gesetzt sind (Standard), lehnt die Exchange-Ressource eine Serie **komplett** ab, sobald auch nur ein einziger Konflikt besteht - obwohl ROOMS die Konflikte intern bereits gelöst hat.
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
