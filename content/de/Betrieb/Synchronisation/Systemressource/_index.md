---
title: "Systemressource"
linkTitle: "Systemressource"
weight: 46
description: "Die Systemressource wird intern für Synchronisations- und Annullationsfälle verwendet."
---

Die **Systemressource** ist eine interne ROOMS-Ressource. Sie wird nicht für normale Buchungen verwendet und soll für Benutzer nicht als buchbare Ressource erscheinen.

## Wozu gibt es die Systemressource?

ROOMS verwendet die Systemressource in Spezialfällen, in denen eine Buchung in ROOMS annulliert oder von der sichtbaren Ressource getrennt wird, die technische Synchronisation mit Exchange oder Microsoft 365 aber weiterhin korrekt verarbeitet werden muss.

Ein typischer Fall ist eine Annullation aus quickROOMS oder Outlook, bei der das externe Appointment nicht gelöscht werden soll. ROOMS kann dafür intern eine Kopie auf die Systemressource legen, damit die Synchronisationszuordnung erhalten bleibt, ohne dass die ursprüngliche Buchung weiterhin als aktive Buchung sichtbar ist.

## Sichtbarkeit

Buchungen auf der Systemressource sind nicht für den normalen Betrieb gedacht.

Sie erscheinen nicht in:

- Plan und Kalender
- normalen Listen und Suchen
- Statistiken
- Reports
- Lizenzberechnungen

{{% alert title="Wichtig" color="warning" %}}
Die Systemressource darf nicht als normale Ressource verwendet, umbenannt oder manuell für Buchungen genutzt werden. Sie ist ein technisches Hilfsmittel für Synchronisations- und Annullationsprozesse.
{{% /alert %}}

## Bedeutung für Support und Betrieb

Wenn bei einer Annullation oder Synchronisationsanalyse Hinweise auf eine Systemressource auftauchen, ist das nicht automatisch ein Fehler. Entscheidend ist, ob die ursprüngliche Buchung für Benutzer korrekt annulliert wurde und ob die Synchronisation anschliessend stabil weiterläuft.

Prüfen Sie bei Problemen zuerst:

1. ob die ursprüngliche Buchung in ROOMS den erwarteten Status hat
2. ob im externen Kalender das erwartete Appointment noch vorhanden oder entfernt ist
3. ob der SyncModus der betroffenen Person oder Ressource korrekt ist
4. ob in den Synchronisationslogs Fehler zur betroffenen Buchung erscheinen

Für allgemeine Sync-Probleme verwenden Sie zusätzlich die [Problembehandlung]({{< relref "Betrieb/Synchronisation/Troubleshooting/_index.md" >}}).
