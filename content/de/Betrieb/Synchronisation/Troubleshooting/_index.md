---
title: "Problembehandlung"
linkTitle: "Problembehandlung"
weight: 50
description: 'Schritt-für-Schritt-Anleitung bei Synchronisationsproblemen'
---

Wenn Buchungen nicht zwischen ROOMS und Outlook/Exchange synchronisiert werden, hilft diese Anleitung bei der Fehlersuche.

## Schritt 1: Synchronisationstest durchführen

Der Synchronisationstest prüft, ob die Verbindung zwischen ROOMS und Exchange grundsätzlich funktioniert.

**Pfad:** Personen → [betroffene Person] → Ansicht → Tab "Synchronisationstest"

{{< imgproc sync-test Resize "1024x" >}}{{< /imgproc >}}

### Ergebnis interpretieren

| Ergebnis | Bedeutung | Nächster Schritt |
|----------|-----------|-----------------|
| Alle Tests grün | Grundverbindung funktioniert | Weiter mit Schritt 2 |
| Kein Test grün | Grundsätzliches Verbindungsproblem | Dienste prüfen (Schritt 3) und Support kontaktieren |
| Nur die ersten zwei Tests grün | Subscription funktioniert nicht | Siehe [PushSubscription](/betrieb/synchronisation/pushsubscriptions/) |

{{% alert title="Häufige Ursache" color="info" %}}
Die E-Mail-Adresse der Person ist nicht auf die **primäre SMTP-Adresse** gesetzt. Prüfe unter Personen → Person → Bearbeiten, ob die E-Mail-Adresse mit der primären SMTP-Adresse in Exchange übereinstimmt.
{{% /alert %}}

## Schritt 2: Ereignisanzeige prüfen

Die Ereignisanzeige zeigt Fehler und Warnungen der Synchronisationsdienste.

**Pfad:** Einstellungen → System → Ereignisanzeige

1. Zeitraum auf den ungefähren Zeitpunkt der fehlgeschlagenen Buchung einschränken
2. Nach Fehlermeldungen mit `[BackSync]`, `[CollaborationService]` oder `[PushSubscriptionService]` suchen
3. Die Fehlermeldung gibt Aufschluss über die Ursache (z.B. Verbindungsprobleme, fehlende Berechtigungen)

## Schritt 3: Dienste prüfen

**Pfad:** Einstellungen → System → About

Prüfe, ob die Synchronisationsdienste laufen. Werden hier keine laufenden Dienste angezeigt, muss der Windows-Dienst neu gestartet werden.

## Schritt 4: Betroffene Buchungen finden

Unter Listen → Buchungen können Buchungen mit Synchronisationsproblemen gefiltert werden:

{{< imgproc buchungen_mit_sync_problemen Resize "200x" >}}{{< /imgproc >}}

| Filter | Bedeutung |
|--------|-----------|
| **Buchungen mit Synchronisationsproblemen** | Einzelbuchungen, bei denen die Sync fehlgeschlagen ist |
| **Serienbuchungen mit Synchronisationsproblemen** | Serien, bei denen die Sync fehlgeschlagen ist |
| **Buchungen mit fehlender Back-Synchronisation** | Über das Add-in erstellte Buchungen, die ROOMS nicht in Exchange finden konnte |

**Empfehlung:** Buchungen mit Synchronisationsproblemen am besten annullieren und neu erstellen.

{{% alert title="Hinweis" color="info" %}}
Bei Buchungen mit fehlender Back-Synchronisation, deren Erstelldatum weit in der Vergangenheit liegt: Die zugehörige Outlook-Buchung wurde vermutlich gelöscht, bevor die Back-Synchronisation durchgeführt werden konnte.
{{% /alert %}}

## Konfliktverhalten (Rollback vs. Cancel)

Das Verhalten bei Synchronisationskonflikten wird pro Person über die Einstellung **SyncConflictBehaviour** gesteuert:

{{< bootstrap-table "table table-striped" >}}
| Modus | Verhalten | Versuche |
|-------|-----------|----------|
| **Rollback** (Standard) | Der Outlook-Termin wird auf den ROOMS-Stand zurückgesetzt. Die Synchronisation läuft danach normal weiter. Erst bei wiederholtem Fehlschlag wird die Buchung als "SyncDisabled" markiert und empfängt keine Exchange-Updates mehr. | 5 (konfigurierbar) |
| **Cancel** | Die ROOMS-Buchung wird automatisch annulliert. Der Outlook-Termin verliert seine ROOMS-Verknüpfung. | 2 |
{{< /bootstrap-table >}}

In beiden Fällen erhält der Organisator eine Fehler-E-Mail mit den Details.

## Einschränkungen bei Outlook-Änderungen

Folgende Änderungen in Outlook können zu Synchronisationskonflikten führen. Das Ergebnis hängt von der Einstellung **SyncConflictBehaviour** ab (siehe oben).

{{< bootstrap-table "table table-striped" >}}
| Aktion in Outlook | Verhalten |
|--------------------|-----------|
| Einzeltermin in eine Serie umwandeln | ROOMS versucht, die Serie automatisch zu erstellen. Falls das fehlschlägt, greift das Konfliktverhalten (Rollback/Cancel). |
| Serie um zusätzliche Termine erweitern | ROOMS versucht, fehlende Termine zuzuordnen. Falls nicht möglich, greift das Konfliktverhalten. |
| Termin sofort nach dem Erstellen löschen | Die ROOMS-Buchung bleibt bestehen, da die Back-Synchronisation noch nicht abgeschlossen war. Der Termin muss zusätzlich in ROOMS annulliert werden. |
| Termin auf einen belegten Zeitpunkt verschieben | ROOMS kann die Änderung nicht übernehmen. Nach mehreren Versuchen greift das Konfliktverhalten: **Rollback** setzt den Termin auf die ursprüngliche Zeit zurück, **Cancel** annulliert die Buchung. |
| Buchung in Outlook ändern, während sie in ROOMS geöffnet ist | Die Bearbeitungssperre in ROOMS verhindert das Speichern. Nach mehreren Versuchen greift das Konfliktverhalten. |
| Serie mit jährlicher Wiederholung oder ohne Enddatum erstellen | Wird vom quickROOMS Add-in bei der Erstellung unterbunden. ROOMS unterstützt jährliche Serien intern, berechnet aber bei der Synchronisation ein Enddatum basierend auf der Anzahl vorhandener Buchungen. |
{{< /bootstrap-table >}}

## Weiterführende Informationen

- [Synchronisation testen](/betrieb/synchronisation/testsync/) — Detaillierte Anleitung zum Synchronisationstest
- [Synchronisationsdetails](/betrieb/synchronisation/syncdetails/) — Welche Felder synchronisiert werden
- [PushSubscription](/betrieb/synchronisation/pushsubscriptions/) — Push-Synchronisation einrichten
