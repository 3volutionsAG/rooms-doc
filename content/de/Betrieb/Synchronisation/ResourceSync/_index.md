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

### Vor- und Nachlaufzeiten bei synchronisierten Ressourcen

{{% alert title="Keine zusätzliche Belegungszeit" color="warning" %}}
Ist die Ressourcen-Synchronisation auf einer Ressource aktiviert, berechnet ROOMS deren Buchungen ohne Vor- und Nachlaufzeit. Exchange unterstützt diese zusätzlichen Belegungszeiten nicht. Auch konfigurierte Zeiten aus Bestuhlung, Servicebestellungen oder der Buchung verlängern die Belegung dieser Ressource nicht. Wenn Vorbereitungs- oder Aufräumarbeiten Zeit benötigen, planen Sie diese innerhalb des gebuchten Zeitraums ein.
{{% /alert %}}

Das Aktivieren der Synchronisation und das Speichern der Ressource berechnen bestehende Buchungen **nicht automatisch neu**. Buchungen, die vor dem Aktivieren der Synchronisation erstellt wurden, können deshalb ihre bisher gespeicherten Vorlaufbeginn- und Nachlaufende-Zeiten behalten. Diese Zeiten werden erst beim erneuten Speichern der jeweiligen Buchung in ROOMS angepasst. Prüfen Sie betroffene Buchungen und deren Belegung; das Einschalten der Synchronisation allein bestätigt keine Bereinigung.

{{% alert title="Verfügbarkeit in einer kommenden ROOMS-Version" color="info" %}}
Die folgenden Korrekturen für Suche, Schnellbuchung, Türschild, Lektionen und mitgebuchte Ressourcen gehören zu einer kommenden ROOMS-Version und sind noch nicht freigegeben. In älteren Versionen können konfigurierte Vor- und Nachlaufzeiten dort noch zu abweichenden Ergebnissen führen, obwohl die Buchung auf der synchronisierten Ressource ohne diese Zeiten berechnet wird.
{{% /alert %}}

- **Verfügbarkeitssuche:** Konfigurierte Vor- und Nachlaufzeiten schliessen einen freien Zeitraum auf der synchronisierten Ressource nicht mehr zusätzlich aus. Das gilt auch für die entsprechende Suche im Kalender und nach Standort. Andere Buchungsregeln und tatsächliche Belegungen bleiben massgebend.
- **Schnellbuchung und Bestuhlung:** Eine konfigurierte Nachlaufdauer verkürzt die vorgeschlagene Buchungszeit nicht mehr. Bei kurzfristigen Buchungen wird die Standardbestuhlung nicht allein deshalb ersetzt, weil ihre konfigurierte Vorlaufzeit in die Vergangenheit reichen würde.
- **Türschild und Lektionenimport:** Für synchronisierte Ressourcen entfällt die konfigurierte Nachlaufdauer am Türschild. Die Verfügbarkeitsprüfung beim Lektionenimport verwendet Beginn und Ende der Lektion ohne zusätzliche Vor- und Nachlaufzeiten.
- **Synchronisierte mitgebuchte Ressourcen:** Sie verlängern die Hauptbuchung nicht durch ihre eigenen Vor- und Nachlaufzeiten und übernehmen auch keine solchen Zeiten von der Hauptbuchung.

Die Mehrfachbearbeitung kann weiterhin Eingaben für Vor- und Nachlaufzeiten anbieten. Für Buchungen auf synchronisierten Ressourcen werden diese Eingaben beim Speichern nicht als zusätzliche Belegungszeit angewendet. Eine bearbeitbare Eingabe bedeutet daher nicht, dass die Ressource damit vor oder nach dem Termin blockiert wird.

{{% alert title="Vorbereitungsbedarf mitgebuchter Ressourcen prüfen" color="warning" %}}
Nicht synchronisierte Ressourcen, die den Zeiten einer synchronisierten Hauptbuchung folgen, erhalten weiterhin deren Zeiten ohne eigene Vor- und Nachlaufzeit. Beispielsweise ist Equipment mit konfigurierter Vorbereitungszeit dadurch nicht automatisch länger belegt. Prüfen Sie die tatsächliche Belegung und planen Sie die benötigte Vorbereitungszeit ausdrücklich ein. Diese Einschränkung wird mit den oben beschriebenen Korrekturen nicht behoben.
{{% /alert %}}

Bestellfristen für Catering-Angebote bleiben unverändert: Sie bestimmen, bis wann eine Bestellung möglich ist, nicht die zusätzliche Belegung der synchronisierten Ressource.

{{< bootstrap-table "table table-striped" >}}
| Einschränkung | Beschreibung |
|---------------|-------------|
| **Nur eine Ressource pro Termin** | Grundsätzlich darf bei einem Outlook-Termin nur eine synchronisierte Ressource hinzugefügt oder eingeladen sein. Beim oben beschriebenen Raumwechsel dürfen vorübergehend der bisherige und genau ein neuer synchronisierter Raum vorhanden sein. |
| **Add-in: Ressource nicht manuell einladen** | Wird über das Add-in eine synchronisierte Ressource gebucht, darf sie nicht zusätzlich als Teilnehmer hinzugefügt werden |
| **Kein direkter Zugriff auf Exchange-Kalender** | Termine sollen nicht direkt auf der Ressourcenmailbox erstellt werden; die Synchronisation ist auf den ROOMS-Flow ausgerichtet |
{{< /bootstrap-table >}}

Es wird empfohlen, Benutzenden keinen direkten Zugriff auf die Exchange-Ressourcen-Mailboxen zu gewähren.

## Buchungsrichtlinien der Exchange-Ressource (Booking Policies)

Exchange-Raumressourcen verarbeiten Buchungsanfragen standardmässig automatisch (`AutomateProcessing: AutoAccept`). Die Ressource entscheidet anhand von Buchungsrichtlinien (Booking Policies), ob sie eine Anfrage annimmt oder ablehnt. Eine abweichende Verarbeitung kann in Exchange konfiguriert sein.

### Regeln in ROOMS prüfen

{{% alert title="Verfügbarkeit in einer kommenden ROOMS-Version" color="info" %}}
Die Anzeige und der Abruf von Exchange-Buchungsregeln in ROOMS sowie deren automatische Berücksichtigung bei der Buchungsprüfung und Verfügbarkeitssuche gehören zu einer kommenden ROOMS-Version. Dazu gehört auch der automatische Regelabruf bei `Microsoft365` ohne separaten Aktivierungsschalter. In der aktuell veröffentlichten Version stehen diese Funktionen noch nicht zur Verfügung. Die folgenden Hinweise zu diesen Funktionen gelten erst ab ihrer Freigabe.
{{% /alert %}}

Öffnen Sie unter **Einstellungen → Ressourcen** eine gespeicherte, Exchange-synchronisierte Ressource. In der **Ressourcenansicht** zeigt der Abschnitt **Buchungsregeln**, welche Werte gelten und ob sie in ROOMS oder Exchange festgelegt sind. Unter **Bearbeiten** finden Sie die **Exchange-Buchungsregeln** im Abschnitt **Exchange-Synchronisation**. Das Exchange-Modul muss lizenziert und das Exchange-Postfach der Ressource eingerichtet sein.

Für den manuellen Abruf benötigen Sie die Bearbeitungsrechte der Ressource: bei Räumen das globale Recht **Darf Ressourcetyp Raum verwalten** und das standortabhängige Recht **Darf Ressource bearbeiten**. In der Ansicht steht die Schaltfläche nur mit diesen Bearbeitungsrechten zur Verfügung.

1. Prüfen Sie die Meldung über der Tabelle: Wendet ROOMS die Exchange-Regeln an? Prüfen Sie auch das Datum des letzten erfolgreichen Abrufs.
2. Klicken Sie bei Bedarf auf **Jetzt aus Exchange abrufen**, beispielsweise nach einer Regeländerung in Exchange.
3. Warten Sie auf die Rückmeldung und prüfen Sie Meldung und Werte erneut. Bei einem Fehler prüfen Sie die Exchange-Verbindung und den Zugriff, bevor Sie den Abruf wiederholen.

Der Abruf liest die Regeln. Er ändert weder die Exchange-Konfiguration noch bestehende Buchungen. Exchange-Regeln werden in Exchange verwaltet, nicht in diesem ROOMS-Abschnitt.

{{< bootstrap-table "table table-striped" >}}
| Meldung / Anzeige | Bedeutung und nächste Prüfung |
|-------------------|-------------------------------|
| **Rooms prüft Buchungen gegen diese Exchange-Regeln** | Ein gültiger gespeicherter Stand wird angewendet. Das Abrufdatum zeigt, wie alt er ist. |
| **Exchange-Regeln noch nicht abgerufen** | Bis zum erfolgreichen Abruf gelten nur die ROOMS-Regeln. Warten Sie auf den Hintergrundabruf oder prüfen Sie die Verbindung mit dem manuellen Abruf. |
| **Exchange-Regeln konnten nicht abgerufen werden** | Es liegt kein erfolgreicher Stand vor. Prüfen Sie Verbindung und Zugriff. Scheitert dagegen ein späterer Abruf, kann ein früherer Stand bis zu seinem Ablauf weiter gelten; der Fehler verlängert seine Gültigkeit nicht. |
| **Rooms wendet die Exchange-Regeln nicht an: Der Stand … ist veraltet** | Der gespeicherte Stand ist nicht mehr gültig für die aktuelle Ressource. Erneut abrufen und bei Fehlern Verbindung und Dienstprotokolle prüfen. |
| **Rooms wendet die Exchange-Regeln nicht an, weil Exchange Buchungsanfragen nicht automatisch annimmt** | Exchange meldet ausdrücklich einen anderen Verarbeitungsmodus. ROOMS wendet die gelesenen Exchange-Regeln nicht an; die tatsächliche Exchange-Antwort bleibt massgebend. |
| **Exchange liefert für dieses Postfach keine Buchungsregeln** | Der Abruf war erfolgreich, hat aber keine Buchungsregeln geliefert. ROOMS kann nur seine eigenen Regeln prüfen. Das bedeutet nicht, dass Exchange jede Buchung annimmt. |
| **Von Exchange nicht geliefert: …** | Die aufgelisteten Einzelwerte sind unbekannt. Die übrigen bekannten, gültigen Regeln können trotzdem gelten. |
{{< /bootstrap-table >}}

#### Welche Werte gelten?

In der Tabelle bedeuten **Regel** die geprüfte Einschränkung, **Gilt** den angewendeten Wert und **Festgelegt in** dessen Herkunft. Die Ressourcenansicht führt ROOMS- und Exchange-Werte zusammen; im Editor zeigt die Exchange-Tabelle die gelesenen Exchange-Regeln neben den separat bearbeitbaren ROOMS-Feldern.

- **Maximale Buchungsdauer:** Ein gültiges, angewendetes Exchange-Maximum ersetzt den gespeicherten ROOMS-Wert. Die Spalte **Festgelegt in** nennt den ersetzten Wert. **Unbegrenzt** ist ebenfalls ein möglicher Exchange-Wert. Ohne ein angewendetes Exchange-Maximum gilt das ROOMS-Maximum. Die minimale Buchungsdauer aus ROOMS bleibt wirksam.
- **Nicht angewendete Exchange-Werte:** Bei nicht angewendeten Einschränkungen zu Serien, Buchungshorizont oder Konflikten steht in **Gilt** ein Strich. **Festgelegt in** zeigt dann beispielsweise **Exchange meldet …, nicht angewendet**. Ein angezeigter Exchange-Wert allein beweist deshalb nicht, dass ROOMS ihn prüft.
- **Vor- und Nachlaufdauer:** Die Ressourcenansicht zeigt bei synchronisierten Ressourcen **Entfällt** und nennt einen allenfalls gespeicherten Wert als **eingestellt, wird nicht angewendet**. Im Editor sind diese Felder schreibgeschützt. Die Werte bleiben gespeichert und gelten wieder, wenn die Synchronisation ausgeschaltet wird. Das Speichern der Ressource ist keine Neuberechnung bereits bestehender Buchungen.

Beim Auswählen eines Sync-Modus erläutert der Editor die Folgen der Synchronisation. Unter **Maximale Buchungsdauer** weist er darauf hin, wenn ein aktuelles Exchange-Maximum den ROOMS-Wert ersetzt. Nach einem manuellen Regelabruf wird auch dieser Hinweis aktualisiert.

Der Worker prüft alle sechs Stunden, welche Ressourcen erneut abgerufen werden müssen. Mit den Standardeinstellungen werden erfolgreich gelesene Regeln nach etwa 24 bis 30 Stunden erneuert und sind drei Tage gültig. Buchungsprüfung und Verfügbarkeitssuche verwenden den gespeicherten Stand, nicht eine neue Exchange-Abfrage pro Buchung. ROOMS berücksichtigt bekannte, gültige Regeln zu Dauer, Serien, Buchungshorizont und Konflikten, wenn Exchange automatisch annimmt **oder keinen Verarbeitungsmodus liefert**. Im zweiten Fall zeigt die Tabelle **Automatische Annahme** mit der Herkunft **Exchange-Standard, von Exchange nicht geliefert**. Fehlende Einzelregeln werden dadurch nicht ergänzt. Meldet Exchange ausdrücklich **Keine automatische Verarbeitung** oder **Kalenderaktualisierung; Annahme kann eine Genehmigung erfordern**, wendet ROOMS keine Exchange-Regeln an. Arbeitszeiten sind nicht Bestandteil dieser Prüfung. Die tatsächliche Zusage oder Absage von Exchange bleibt massgebend.

Eine spätere Verschärfung der Regeln hebt bestehende Raumbuchungen nicht automatisch auf. Neue Termine und Änderungen von Raum oder Zeitraum werden erneut geprüft.

#### Besonderheit bei Microsoft365 / Graph

Für `Microsoft365` ruft ROOMS die Regeln automatisch ab, sobald die Microsoft-365-Verbindung in Worker und RoomsPro.Web konfiguriert ist. Eine separate Aktivierung ist nicht nötig. Das zusätzliche Leserecht **MailboxConfigItem.Read** muss ein Administrator manuell erteilen. Die normalen Kalenderberechtigungen genügen nicht. Bevorzugt wird die Exchange-RBAC-Rolle **Application MailboxConfigItem.Read**, auf die benötigten Ressourcen eingeschränkt. Eine tenantweite Entra-Anwendungsberechtigung mit Admin Consent ist eine weiter gefasste Alternative. ROOMS vergibt diese Rechte nicht selbst. Fehlt das Leserecht, zeigt der Ressourcen-Editor einen entsprechenden Hinweis an und ROOMS versucht den Abruf später erneut.

Für EWS verwendet der Regelabruf die bereits konfigurierte EWS-Verbindung der Ressource. Eine separate Exchange-Management-Verbindung ist dafür nicht erforderlich.

{{% alert title="Graph beta und Zugriffsrechte" color="warning" %}}
Der Regelabruf verwendet Graph beta. Microsoft unterstützt beta-Schnittstellen nicht für Produktionsanwendungen. Prüfen Sie diese Einschränkung, bevor Sie das Leserecht erteilen. Das Leserecht umfasst Postfach-Konfigurationsobjekte, nicht nur Buchungsregeln. Ein eingeschränkter Exchange-RBAC-Geltungsbereich begrenzt keine zusätzlich erteilte tenantweite Entra-Berechtigung. Lassen Sie die effektiven Rechte prüfen, statt sie bei einem Abruffehler pauschal zu erweitern. Siehe [Microsoft: Graph-beta-Einschränkung](https://learn.microsoft.com/en-us/graph/api/userconfiguration-get?view=graph-rest-beta) und [Application RBAC](https://learn.microsoft.com/en-us/exchange/permissions-exo/application-rbac).
{{% /alert %}}

Bei einem fehlgeschlagenen Abruf nennt die Anzeige unter anderem eine unvollständige Verbindung oder verweigerten Postfachzugriff. Prüfen Sie Verbindung, Berechtigung und Postfach-Geltungsbereich. Ein fehlgeschlagener Regelabruf allein beweist keinen Ausfall der Kalender-Synchronisation.

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

### In Outlook erstellte Serie mit teilweise angenommenem Raum

{{% alert title="Verfügbarkeit in einer kommenden ROOMS-Version" color="info" %}}
Der hier beschriebene Import einer teilweise angenommenen Outlook-Serie als zusammenhängende ROOMS-Serie gehört zu einer kommenden ROOMS-Version und ist noch nicht freigegeben.
{{% /alert %}}

Erstellen Sie eine neue Serie direkt in Outlook und laden Sie einen synchronisierten Raum für die **gesamte Serie** ein, kann ROOMS die Serie auch bei einzelnen Raumkonflikten zusammenhängend übernehmen. Voraussetzung sind eine eingerichtete Personen- und Ressourcen-Synchronisation, ein tägliches, wöchentliches oder monatliches Wiederholungsmuster sowie mindestens ein vom Raum angenommener Termin. Für Serien ohne Enddatum gilt zusätzlich die unten beschriebene [automatische Begrenzung beim Import](#in-outlook-erstellte-serie-ohne-enddatum). ROOMS muss ausserdem unterscheiden können, ob fehlende Raumbuchungen Konflikte sind oder ausserhalb des Raumbuchungsfensters liegen.

Nach erfolgreicher Übernahme gehören die angenommenen Raumbuchungen und die Termine ohne Raum zur selben ROOMS-Serie. Der Outlook-Serientermin erhält die Kategorie **ROOMS**. Bei unveränderten Serienterminen mit Raumkonflikt entfernt ROOMS die Raumzuordnung nur für die betroffenen Termine; die Besprechungen und menschlichen Teilnehmenden bleiben erhalten. Für abgelehnte Änderungen gilt weiterhin das konfigurierte Konfliktverhalten **Rollback** oder **Cancel**. Termine ausserhalb eines bestätigten Raumbuchungsfensters behalten dagegen ihre Raumeinladung, haben aber noch keine Raumbuchung.

Nicht jede teilweise angenommene Outlook-Serie wird als ROOMS-Serie übernommen. Die angenommenen Termine bleiben insbesondere in folgenden Fällen **Einzelbuchungen**:

- Der Raum wurde nur für einzelne Termine statt für die gesamte Serie eingeladen.
- Es handelt sich um eine jährliche Wiederholung.
- Eine frühere ROOMS-Version hat die Serie bereits als Einzelbuchungen importiert. Diese werden nicht automatisch in eine Serie umgewandelt.
- Fehlende letzte Termine könnten ausserhalb des Raumbuchungsfensters liegen, aber die verfügbaren Exchange-Regeln klären dieses Fenster nicht. ROOMS übernimmt dann die angenommenen Termine einzeln und lässt die übrigen Raumeinladungen unverändert. Ein unbekanntes Buchungsfenster bedeutet nicht, dass der Raum unbegrenzt buchbar ist.

{{% alert title="Raumbelegung pro Termin prüfen" color="warning" %}}
ROOMS übernimmt beim Serienimport die von Exchange gelieferten Termine und Zeiten. Das erhaltene Serienmuster und die Kategorie **ROOMS** bestätigen nicht, dass jeder Termin einen Raum hat. Prüfen Sie nach der Synchronisation die einzelnen Raumbuchungen und die Exchange-Ressourcenbelegung. Das Vorrücken des Buchungsfensters oder ein Regelabruf bucht fehlende Räume nicht automatisch. Legen Sie für planbare Serien vorzugsweise selbst ein Enddatum in Outlook fest; bei einem Import ohne Enddatum beachten Sie die unten beschriebene automatische Begrenzung und prüfen Sie das zurückgeschriebene Ende. Bei Abweichungen oder vollständig raumlosen Serien beachten Sie die [Prüfpunkte und Bearbeitungsgrenzen im Troubleshooting]({{< relref "Betrieb/Synchronisation/Troubleshooting/_index.md#serien-raumbuchung-und-besprechung-unterscheiden" >}}), statt die ganze Besprechungsserie vorsorglich zu annullieren.
{{% /alert %}}

### In Outlook erstellte Serie ohne Enddatum

{{% alert title="Verfügbarkeit in einer kommenden ROOMS-Version" color="info" %}}
Die automatische Begrenzung beim Import einer Outlook-Serie ohne Enddatum gehört zu einer kommenden ROOMS-Version und ist noch nicht freigegeben. In älteren Versionen wird eine solche Serie nicht zuverlässig übernommen. Legen Sie dort vor der Synchronisation selbst ein Enddatum in Outlook fest.
{{% /alert %}}

ROOMS speichert keine endlose Serie. Wird eine Outlook-Serie ohne Enddatum als ROOMS-Serie übernommen, begrenzt ROOMS sie anhand der [Serieneinstellungen der Benutzergruppen]({{< relref "3VROOMS/Einstellungen/Sicherheitsdaten/Benutzergruppen/_index.md#serieneinstellungen" >}}) der organisierenden Person. Das gilt für EWS und `Microsoft365` / Graph, beim Import über den Raum sowie bei der erfolgreichen Umwandlung einer synchronisierten Einzelbuchung in eine Serie über Outlook.

{{< bootstrap-table "table table-striped" >}}
| Einstellung | Begrenzung beim Import |
|-------------|------------------------|
| **Iteration** mit Gruppenbegrenzung | Begrenzt die Anzahl künftiger Termine. |
| **Zeitlich** mit Gruppenbegrenzung | Begrenzt den Zeitraum entsprechend dem Wiederholungsmuster. |
| Keine passende Gruppenbegrenzung | Begrenzt die Serie auf ein Jahr. |
{{< /bootstrap-table >}}

Eine Serie, die jede Woche von Montag bis Freitag stattfindet, verwendet in beiden Modellen die tägliche Gruppenbegrenzung. Die Begrenzung zählt ab dem späteren Zeitpunkt von Serienbeginn und Import. Bei einer bereits laufenden Serie beginnt sie daher beim Import, nicht rückwirkend beim ursprünglichen Serienbeginn. Als effektives Ende speichert ROOMS den letzten übernommenen Serientermin. Prüfen Sie dieses Datum, statt aus der Gruppenbegrenzung eine genaue Anzahl Raumbuchungen abzuleiten.

{{% alert title="Die Besprechungsserie wird auch in Outlook verkürzt" color="warning" %}}
ROOMS schreibt das effektive Ende in den Outlook-Serientermin zurück und sendet die Änderung an alle Teilnehmenden, einschliesslich des Raums. Spätere Wiederholungen entfallen damit auch in den Kalendern der Teilnehmenden, nicht nur als Raumbuchungen in ROOMS. Prüfen Sie nach der Synchronisation das Ende in Outlook und ROOMS sowie die tatsächliche Raumbelegung pro Termin. Wenn die Serie länger dauern soll, planen Sie ihre Fortsetzung ausdrücklich; sie bleibt nicht unbegrenzt bestehen.
{{% /alert %}}

Das Serienende ist nicht das Raumbuchungsfenster: Innerhalb der begrenzten Serie können Termine weiterhin ohne Raum bleiben. Die oben beschriebenen Voraussetzungen und Fälle mit Einzelbuchungen bleiben bestehen. Ein striktes Exchange-Buchungsfenster kann eine endlose Anfrage bereits vor dem Import vollständig ablehnen.

Weitere Grenzen bleiben bestehen:

- **Einzelbuchung in Outlook zur Serie machen:** Termine nach dem Raumbuchungsfenster können die Übernahme weiterhin verhindern. Im Konfliktmodus **Cancel** kann dabei die bisherige Raumbuchung annulliert werden. Verwenden Sie diesen Weg nicht, um das Buchungsfenster zu umgehen.
- **Enddatum einer bereits synchronisierten Serie entfernen:** ROOMS behält sein bisheriges Ende, schreibt es in diesem Fall aber noch nicht automatisch nach Outlook zurück. Auch eine gleichzeitig geänderte Wiederholung wird dabei nicht übernommen. Behalten Sie das Enddatum bei und lassen Sie Abweichungen vom Support prüfen.
- **Lange Serien und verschobene Termine:** Die gelieferten Outlook-Termine begrenzen den Import; Gruppenbegrenzungen über zwei Jahre sind nicht vollständig abgedeckt. Bei EWS können hinter das Serienende verschobene Termine weiterhin fehlen. Prüfen Sie solche Termine gezielt. Auch ein fehlgeschlagenes Zurückschreiben nach Outlook wird bei der Umwandlung einer Einzelbuchung nicht automatisch nachgeholt.

Die Beschränkungen bei der **Erstellung über das quickROOMS Outlook Add-In** bleiben unverändert; die Importkorrektur hebt sie nicht auf.

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
