---
title: "Migration 4.6 -> 4.7"
linkTitle: "Migration 4.6 -> 4.7"
weight: 200
description: 'Dieser Leitfaden beschreibt alle Schritte, die für eine erfolgreiche Migration von ROOMS 4.6 auf eine 4.7 Instanz erforderlich sind, einschließlich der Konfiguration für die IdP und das Wizard.'
---
<p align="justify">
Da dieses Update viele Aktualisierungen von Drittanbieterpaketen enthält, ist es wichtig zu beachten, dass auch das zugrundeliegende .NET Framework aktualisiert wird. Wenn die O365 Outlook-Synchronisierung verwendet wird, müssen auch alle lokalen Anwendungen aktualisiert werden. 
</p>

Der Leitfaden besteht aus vier Teilen:

1. Voraussetzungen (3rd-Party.Tools) für ein erfolgreiches Update
2. Installation des Updates und Vorbereitungen für die Migration
3. IdP einrichten
4. Wizard einrichten

**Anmerkungen**:

- Bevor Sie mit der Migration beginnen, erstellen Sie eine Sicherungskopie Ihrer aktuellen ROOMS-Binärdateien und der zugehörigen Datenbank(en).
- Diese Anleitung ist nur für fortgeschrittene Benutzer gedacht.
- Einige Schritte müssen angepasst werden.
  
Zögern Sie nicht, den 3volutions-Support zu kontaktieren.
