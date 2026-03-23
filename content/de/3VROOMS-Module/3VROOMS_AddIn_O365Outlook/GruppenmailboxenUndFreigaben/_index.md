---
title: "Gruppenmailboxen und freigegebene Postfächer"
linkTitle: "Gruppenmailboxen und Freigaben"
weight: 30
description: "Verhalten des quickROOMS Add-Ins bei Gruppenmailboxen, freigegebenen Postfächern und delegiertem Zugriff in Outlook"
---

## Übersicht

Das quickROOMS Add-In liest den Mailbox-Kontext direkt von der Outlook-Plattform (Office.js API).
ROOMS kann diesen Kontext nicht verändern — **Outlook bestimmt, wer als Ersteller und Organisator eines Termins gilt**.

### Begriffe

| Begriff     | Beschreibung                                                                                     |
|-------------|--------------------------------------------------------------------------------------------------|
| **Ersteller (Creator)** | Die Person, die den Termin technisch erstellt. Wird von Outlook anhand des angemeldeten Benutzers gesetzt. |
| **Organisator**         | Der Besitzer des Kalenders, in dem der Termin erstellt wird.                                     |

## Szenarien

### 1. Eigener Kalender

Der Benutzer erstellt einen Termin in seinem eigenen Kalender.

- **Ersteller** = angemeldeter Benutzer
- **Organisator** = angemeldeter Benutzer (identisch)
- **Add-In-Verhalten**: Normal, keine Einschränkungen

### 2. Freigegebener Kalender (Delegated Access)

Der Benutzer hat delegierten Zugriff auf den Kalender einer anderen Person oder Gruppenmailbox.
Das Postfach erscheint **unter dem persönlichen Konto** des Benutzers.

- **Ersteller** = angemeldeter Benutzer
- **Organisator** = Besitzer des freigegebenen Kalenders (z.B. die Gruppenmailbox)
- **Add-In-Verhalten**: Das Add-In erkennt den freigegebenen Kontext über die
  [Outlook Shared Folders API](https://learn.microsoft.com/en-us/office/dev/add-ins/outlook/delegate-access)
  und setzt den Organisator korrekt.

**Voraussetzungen:**
- Outlook API Version 1.8 oder höher (Requirement Set `Mailbox 1.8`)
- Der Benutzer benötigt mindestens **Schreibberechtigung** auf dem freigegebenen Kalender

### 3. Separates Konto (eigenständiges Postfach) — Eingeschränkt

Die Gruppenmailbox wird als **eigenständiges Konto mit eigenen Anmeldedaten** in Outlook hinzugefügt.

- **Ersteller** = der Benutzer, der in diesem Konto angemeldet ist (nicht der persönliche Benutzer)
- **Organisator** = das Konto selbst
- **Add-In-Verhalten**: Outlook stellt dem Add-In als aktuellen Benutzer das **Konto des separaten Postfachs** bereit,
  nicht den tatsächlichen Benutzer. Das Add-In kann nicht unterscheiden, ob eine natürliche Person oder
  eine Gruppenmailbox angemeldet ist.

{{% alert title="Einschränkung" color="warning" %}}
Wenn eine Gruppenmailbox als separates Konto hinzugefügt wird, ist der **Mailbox-Kontext** für das Add-In
derjenige des Gruppenpostfachs. Dies ist ein **Outlook-/Exchange-Verhalten**, das ROOMS nicht beeinflussen kann.

**Mögliche Auswirkungen:**
- Der Ersteller des Termins ist das Gruppenkonto, nicht der persönliche Benutzer
- Die Synchronisation kann fehlschlagen, wenn das Gruppenkonto nicht als Person in ROOMS hinterlegt ist
- Das Add-In hat keinen Zugriff auf den persönlichen Kontext des Benutzers

Siehe Microsoft-Dokumentation:
[Implement delegate access in an Outlook add-in](https://learn.microsoft.com/en-us/office/dev/add-ins/outlook/delegate-access)
{{% /alert %}}

## Empfohlene Konfiguration für Gruppenmailboxen

Damit das Add-In korrekt funktioniert, sollte der Zugriff auf Gruppenmailboxen über **Delegated Access** eingerichtet werden:

1. Den Benutzern, die die Gruppenmailbox betreuen, **delegierten Zugriff** (Stellvertretung) auf die Mailbox einrichten
2. Das Postfach erscheint dann zusätzlich unter dem persönlichen Outlook-Konto
3. Das Add-In erkennt automatisch den freigegebenen Kontext und setzt den Organisator korrekt

{{% alert title="Hinweis" color="info" %}}
Das Einrichten von Delegated Access schliesst das Hinzufügen als separates Konto nicht aus.
Beides kann parallel genutzt werden — für **Buchungen über das Add-In** sollte jedoch der
freigegebene Kalender (Delegated Access) verwendet werden.
{{% /alert %}}

## Technischer Hintergrund

Das Add-In verwendet folgende Outlook-APIs:

| API | Zweck |
|-----|-------|
| `Office.context.mailbox.userProfile` | Aktuell angemeldeter Benutzer ([Dokumentation](https://learn.microsoft.com/en-us/javascript/api/outlook/office.userprofile)) |
| `item.organizer.getAsync()` | Organisator des Termins auslesen ([Dokumentation](https://learn.microsoft.com/en-us/javascript/api/outlook/office.organizer)) |
| `item.getSharedPropertiesAsync()` | Delegierungskontext und Berechtigungen ([Dokumentation](https://learn.microsoft.com/en-us/javascript/api/outlook/office.sharedproperties)) |

Die Erkennung des freigegebenen Kontexts erfolgt über `Office.context.mailbox.initialData.isFromSharedFolder`.
Nur wenn dieses Flag gesetzt ist, werden die Shared Properties und der Organisator separat aufgelöst.
