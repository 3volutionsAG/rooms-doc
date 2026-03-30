---
title: "Exchange Ressource Sync"
linkTitle: "Exchange Ressource Sync"
weight: 50
description: 'Synchronisation von Exchange Ressourcen mit ROOMS Ressourcen'
---

## Voraussetzungen

### Globale Parameter

Folgende Einstellungen müssen unter **Einstellungen → System → Globale Parameter** gesetzt sein:

{{< bootstrap-table "table table-striped" >}}
| Parameter | Wert |
|-----------|------|
| Exchange Ressource Sync enabled | `true` |
{{< /bootstrap-table >}}

Zusätzlich muss in der **StructureMapXml** (ebenfalls unter Globale Parameter) folgender Eintrag vorhanden sein:

```xml
<AddInstance
  Key="backSyncService"
  PluginType="Garaio.Products.Rooms.Core.WindowsServices.BaseServiceSession,Garaio.Products.Rooms.Core"
  PluggedType="Garaio.Products.Rooms.Core.WindowsServices.BackSyncService.BackSyncServiceSession,Garaio.Products.Rooms.Core" />
```

### Ressource konfigurieren

Unter **Einstellungen → Ressourcen → Edit** werden die einzelnen Ressourcen für die Synchronisation eingerichtet:

{{< bootstrap-table "table table-striped" >}}
| Parameter | Beschreibung |
|-----------|-------------|
| **E-Mail** | Muss auf die primäre SMTP-Adresse der Exchange-Ressource gesetzt werden |
| **Sync-Modus / Sync-URL** | Entsprechender Sync-Modus und URL auswählen |
| **Ist Sync-Master** | Steuert das Verhalten bei Konflikten (siehe unten) |
{{< /bootstrap-table >}}

#### Ist Sync-Master

Falls eine Buchung in Exchange nicht für ROOMS verfügbar ist (z.B. wegen bestehender Buchung oder Sperrzeit), wird die ROOMS-Buchung nicht erstellt und eine Fehler-E-Mail versendet.

{{< bootstrap-table "table table-striped" >}}
| Ist Sync-Master | Verhalten |
|-----------------|-----------|
| **Aktiviert** | Die Raumbuchung wird auch auf der Exchange-Seite entfernt bzw. der Teilnehmer wird aus der ROOMS-Buchung entfernt |
| **Deaktiviert** | Der Termin bleibt in Exchange bestehen, es wird lediglich eine Fehler-E-Mail ausgelöst |
{{< /bootstrap-table >}}

## Limitationen

{{% alert title="Vor- und Nachlaufzeiten" color="warning" %}}
Ist die Ressourcen-Sync auf einer Ressource aktiviert, können Vor- und Nachlaufzeiten nicht mehr verwendet werden. Bei allen Buchungen der Ressource werden die Vor- und Nachlaufzeiten auf **0** gesetzt, da Exchange dieses Konzept nicht unterstützt.
{{% /alert %}}

{{< bootstrap-table "table table-striped" >}}
| Einschränkung | Beschreibung |
|---------------|-------------|
| **Nur eine Ressource pro Termin** | Bei einem Outlook-Termin darf immer nur eine synchronisierte Ressource hinzugefügt/eingeladen werden |
| **Add-in: Ressource nicht manuell einladen** | Wird über das Add-in eine synchronisierte Ressource gebucht, darf sie nicht zusätzlich als Teilnehmer hinzugefügt werden — sie wird automatisch im Synchronisationsprozess eingeladen |
| **Kein direkter Zugriff auf Exchange-Kalender** | Es ist nicht erlaubt, auf der Exchange-Ressource direkt einen Termin zu erstellen. Die Synchronisation funktioniert nur, wenn ein Appointment im Namen einer mit ROOMS synchronisierten Person erstellt wird und die Ressource dort hinzugefügt oder als Teilnehmer eingeladen wird |
{{< /bootstrap-table >}}

Es wird empfohlen, den Benutzenden keinen direkten Zugriff auf die Exchange-Ressourcen-Mailboxen zu gewähren.

## Buchungsrichtlinien der Exchange-Ressource (Booking Policies)

Exchange-Raumressourcen verarbeiten Buchungsanfragen automatisch (`AutomateProcessing: AutoAccept`). Die Ressource entscheidet anhand von Buchungsrichtlinien (Booking Policies), ob sie eine Anfrage annimmt oder ablehnt.

### Wichtige Parameter

{{< bootstrap-table "table table-striped" >}}
| Parameter | Beschreibung | Auswirkung auf Serien |
|-----------|-------------|----------------------|
| `AllowRecurringMeetings` | Ob wiederkehrende Termine erlaubt sind | `$false` → alle Serien werden abgelehnt |
| `BookingWindowInDays` | Maximaler Buchungszeitraum in die Zukunft (Standard: 180 Tage) | Serie wird abgelehnt, wenn Termine ausserhalb des Fensters liegen |
| `EnforceSchedulingHorizon` | Ob `BookingWindowInDays` erzwungen wird | `$true` → Termine ausserhalb des Fensters werden abgelehnt |
| `MaximumConflictInstances` | Max. Anzahl Konflikte in einer Serie (Standard: 0) | Wird der Wert überschritten, lehnt die Ressource die **gesamte Serie** ab |
| `ConflictPercentageAllowed` | Max. erlaubter Konfliktanteil in % (Standard: 0) | Überschreitung → **gesamte Serie** wird abgelehnt |
| `MaximumDurationInMinutes` | Max. Dauer eines einzelnen Termins (Standard: 1440 = 24h) | Einzeltermine über dem Limit werden abgelehnt |
{{< /bootstrap-table >}}

### Auswirkung auf Serien mit Konflikten

ROOMS kann beliebig viele Konflikte in einer Serie auflösen — z.B. durch Umbuchung einzelner Termine auf alternative Räume. Die Serie wird jedoch als Recurring Appointment an die Exchange-Raumressource synchronisiert. Dort bestehen die Konflikte weiterhin (der Raum ist an diesen Terminen bereits belegt).

{{% alert title="Wichtig" color="warning" %}}
Wenn `MaximumConflictInstances` oder `ConflictPercentageAllowed` auf `0` gesetzt sind (Standard), lehnt die Exchange-Ressource eine Serie **komplett** ab, sobald auch nur ein einziger Konflikt besteht — obwohl ROOMS die Konflikte intern bereits gelöst hat.
{{% /alert %}}

**Beispiel:** Eine Serie mit 10 Terminen wird für Raum A erstellt. An 3 Terminen ist Raum A bereits belegt. ROOMS bucht diese 3 Termine auf alternative Räume um. Die Serie wird trotzdem als Recurring Appointment an die Exchange-Ressource von Raum A gesendet. Dort bestehen die 3 Konflikte weiterhin. Bei `MaximumConflictInstances = 0` lehnt Exchange die gesamte Serie ab.

### Aktuelle Einstellungen auslesen

Die Buchungsrichtlinien einer Exchange-Raumressource können per PowerShell ausgelesen werden:

```powershell
# Exchange Online
Connect-ExchangeOnline
Get-CalendarProcessing -Identity "raum@domain.ch" | Format-List
```

### Einstellungen anpassen

Falls die Standardwerte zu restriktiv sind, können sie angepasst werden:

```powershell
Set-CalendarProcessing -Identity "raum@domain.ch" -MaximumConflictInstances 5 -ConflictPercentageAllowed 25
```

Im obigen Beispiel würde die Ressource Serien akzeptieren, solange maximal 5 Konflikte bestehen und der Konfliktanteil unter 25% liegt.
