---
title: "Sync-Differenzen"
linkTitle: "Sync-Differenzen"
weight: 11
description: "Abweichungen zwischen ROOMS-Buchungen und Exchange-/Outlook-Terminen erkennen und auflösen."
aliases:
  - /Betrieb/Synchronisation/SyncDifferenzen/
  - /betrieb/synchronisation/syncdifferenzen/
---

**Sync-Differenzen** zeigen Abweichungen zwischen ROOMS und Exchange / Outlook für synchronisierte Buchungen.

Eine Sync-Differenz entsteht, wenn ROOMS und Exchange für dasselbe synchronisierte Element unterschiedliche Werte kennen, zum Beispiel beim Titel, beim Zeitraum oder wenn ein Termin auf einer Seite fehlt.

## Voraussetzung

Für den Zugriff auf **Sync-Differenzen** benötigt der Benutzer das globale Recht **`AdminKonfiguration`**.

Das Recht wird in den Rollen verwaltet:

`Einstellungen` → `Sicherheitsdaten` → `Rollen` → `Rechte verwalten`

{{% alert title="Wichtig" color="warning" %}}
Beim Auflösen einer Sync-Differenz können produktive Buchungen oder Exchange-Termine angepasst werden. Verwenden Sie die Funktion deshalb nur, wenn klar ist, welche Seite fachlich korrekt ist.
{{% /alert %}}

## Wo finde ich die Sync-Differenzen?

Sie finden die Ansicht unter:

`Einstellungen` → `System` → `Sync-Differenzen`

{{< imgproc sync-differenzen-uebersicht Resize "1024x" >}}{{< /imgproc >}}

## Wozu gibt es Sync-Differenzen?

Sync-Differenzen helfen Administratoren und Supportpersonen, Abweichungen zwischen ROOMS und Exchange / Outlook nachvollziehbar zu prüfen und gezielt zu bereinigen.

Typische Einsatzfälle:

- Eine Buchung wurde in ROOMS geändert, aber Exchange zeigt noch andere Werte.
- Ein Termin wurde in Outlook / Exchange geändert und ROOMS zeigt abweichende Werte.
- Ein Termin fehlt auf einer Seite oder kann dort nicht mehr gefunden werden.
- Bei einer Serienbuchung unterscheiden sich einzelne Termine zwischen ROOMS und Exchange.
- Es ist unklar, welche Seite zuletzt geändert wurde und welche Werte übernommen werden sollen.

Sync-Differenzen ersetzen nicht die allgemeine Fehlersuche bei technischen Synchronisationsproblemen. Wenn die Synchronisation grundsätzlich nicht funktioniert, prüfen Sie zuerst die [Problembehandlung]({{< relref "Betrieb/Synchronisation/Troubleshooting/_index.md" >}}) und den [Synchronisationstest]({{< relref "Betrieb/Synchronisation/TestSync/_index.md" >}}).

## Was wird geprüft?

Der Scan vergleicht synchronisierte Buchungen mit dem entsprechenden Exchange-/Outlook-Termin.

Geprüft werden insbesondere:

{{< bootstrap-table "table table-striped" >}}
| Bereich | Bedeutung |
|---------|-----------|
| **Titel** | ROOMS-Buchung und Exchange-Termin haben unterschiedliche Titel. |
| **Zeit** | Start- oder Endzeit unterscheiden sich. |
| **Fehlender Termin** | Der Termin ist auf einer Seite nicht mehr vorhanden oder kann dort nicht gefunden werden. |
{{< /bootstrap-table >}}

In der Liste werden unter anderem Status, Buchung, Postfach, geänderte Werte, aktuellere Seite, Empfehlung und die letzte Prüfung angezeigt.

Falls Sie eine Differenz auf eine Serie zurückführen müssen, können Sie die Spalten der Liste anpassen und die Spalte **Sync-Element** einblenden. Dort zeigt ROOMS, ob es sich um eine **Einzelbuchung**, eine **Buchungsserie** oder einen **Einzeltermin aus Serie** handelt. Die betroffene Buchung ist direkt verlinkt; bei Serien ist zusätzlich die Serien-ID für gezielte Prüfungen relevant.

## Status einer Sync-Differenz

{{< bootstrap-table "table table-striped" >}}
| Status | Bedeutung |
|--------|-----------|
| **Offen** | Die Differenz wurde gefunden und muss geprüft werden. |
| **Gelöst** | Die Differenz wurde durch eine Aktion aufgelöst. |
| **Ignoriert** | Die Differenz wurde bewusst ignoriert. |
| **Automatisch geschlossen** | Die Differenz ist bei einer späteren Prüfung nicht mehr vorhanden und wurde automatisch geschlossen. |
{{< /bootstrap-table >}}

## Manuellen Scan starten

Im Sidepanel kann ein manueller Scan gestartet werden.

{{< imgproc sync-differenzen-manueller-scan Resize "400x" >}}{{< /imgproc >}}

Mögliche Scan-Ziele:

{{< bootstrap-table "table table-striped" >}}
| Scan-Ziel | Beschreibung |
|-----------|--------------|
| **Alle zukünftigen synchronisierten Elemente** | Prüft synchronisierte Elemente innerhalb des gewählten Zeitfensters. Das Zeitfenster darf maximal 90 Tage umfassen. |
| **Einzelbuchung (Buchungs-ID)** | Prüft eine einzelne Buchung anhand ihrer Buchungs-ID. |
| **Buchungsserie (Serien-ID)** | Prüft eine ganze Buchungsserie anhand ihrer Serien-ID. |
| **Person/Organisator (Person-ID)** | Prüft synchronisierte Elemente einer bestimmten Person bzw. eines Organisators. |
{{< /bootstrap-table >}}

Für **Alle zukünftigen synchronisierten Elemente** wird der Scan im Hintergrund eingereiht. Gezielte Prüfungen für eine Buchung, Serie oder Person werden direkt ausgeführt. Wenn bereits ein Scan läuft, zeigt ROOMS eine entsprechende Meldung an.

Für Support-Analysen kann die Trefferliste zusätzlich über die Manage-API nach Status, Buchungs-ID, Serien-ID, Person-ID oder Typ eingeschränkt werden.

## Detailansicht

Über die Detailansicht einer Sync-Differenz sehen Sie:

- welche Seite aktuellere Daten enthält: **ROOMS**, **Exchange**, **Gemischt** oder **Unklar**
- die betroffene Buchung, Person und das Postfach
- den Vergleich zwischen ROOMS und Exchange
- die Empfehlung für die Auflösung
- unveränderte Vergleichswerte
- allfällige Fehlerdetails

Bei Serienbuchungen kann ROOMS die Serie nur als ganze Serie übernehmen. Wenn einzelne Termine unterschiedlich geändert wurden, weist ROOMS darauf hin, dass die markierten Buchungen nach dem Anwenden manuell geprüft werden sollten.

## Sync-Differenz auflösen

Für offene Differenzen stehen je nach Situation folgende Aktionen zur Verfügung:

{{< bootstrap-table "table table-striped" >}}
| Aktion | Wirkung |
|--------|---------|
| **Exchange verwenden** | Die Exchange-Werte werden übernommen und ROOMS wird entsprechend aktualisiert. |
| **ROOMS verwenden** | Die ROOMS-Werte werden verwendet und nach Exchange synchronisiert. |
| **Ignorieren** | Die Differenz wird als ignoriert markiert. Es erfolgt keine automatische Korrektur. |
| **Aktualisieren** | Die Differenz wird erneut geprüft. Das ist sinnvoll, wenn eine Buchung oder ein Termin inzwischen manuell angepasst wurde. |
{{< /bootstrap-table >}}

{{% alert title="Empfehlung" color="warning" %}}
Verwenden Sie die automatische Empfehlung nicht blind. Prüfen Sie zuerst, welche Seite fachlich korrekt ist. Besonders bei Serienbuchungen oder gemischten Änderungen kann eine manuelle Kontrolle notwendig sein.
{{% /alert %}}

## Typischer Ablauf

1. Filter auf **Offen** setzen.
2. Falls nötig einen manuellen Scan starten.
3. Differenz in der Detailansicht öffnen.
4. Vergleich zwischen ROOMS und Exchange prüfen.
5. Entscheiden, welche Seite fachlich korrekt ist.
6. **Exchange verwenden**, **ROOMS verwenden** oder **Ignorieren** wählen.
7. Bei Serienbuchungen und markierten Hinweisen betroffene Termine anschliessend manuell prüfen.

## Abgrenzung zu normalen Synchronisationsfehlern

Sync-Differenzen sind nicht dasselbe wie ein grundsätzlich fehlgeschlagener Sync.

- **Synchronisationsfehler** bedeuten, dass ein Sync-Vorgang technisch nicht erfolgreich war.
- **Sync-Differenzen** bedeuten, dass ROOMS und Exchange unterschiedliche fachliche Daten für ein synchronisiertes Element haben.
