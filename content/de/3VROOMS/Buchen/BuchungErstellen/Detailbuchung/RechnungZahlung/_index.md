---
title: "Rechnung und Zahlung"
linkTitle: "Rechnung und Zahlung"
weight: 90
description: "Zahlungsanbieter, Zahlungsverarbeitung und Zahlungsexportstatus einer Reservation verwalten"
---

Im Reiter `Rechnung und Zahlung` verwalten Sie die Zahlungsangaben einer kostenpflichtigen Reservation. Welche Felder und Auswahlwerte verfügbar sind, hängt von Ihren Rechten, dem Zahlungsanbieter und dem aktuellen Zahlungsexportstatus ab.

## Voraussetzungen

- Sie dürfen die Reservation bearbeiten.
- Mit dem globalen Recht **Darf Reservationen mit Kosten editieren** können Sie den Zahlungsanbieter, die Zahlungsverarbeitung und die üblichen Exportstatus bearbeiten.
- Mit dem globalen Recht **Darf Exportstatus zurücksetzen** können Sie eine bereits exportierte Zahlung zurückziehen, sofern ein Exportzeitpunkt vorhanden ist.

Die Rechte werden unter [`Einstellungen` → `Sicherheitsdaten` → `Rollen` → `Rechte verwalten`](/3vrooms/einstellungen/sicherheitsdaten/rollen/rechteverwalten/) zugewiesen.

Der Reiter erscheint, wenn bereits eine Zahlung vorhanden ist oder für die Reservation ein geeigneter Zahlungsanbieter zur Verfügung steht.

## Wo finde ich die Zahlungsangaben?

1. Erstellen oder bearbeiten Sie eine Reservation.
2. Öffnen Sie den Reiter `Rechnung und Zahlung`.

## Felder zur Zahlungsverarbeitung

- **Zahlungsanbieter**: Legt fest, über welchen Anbieter die Zahlung abgewickelt wird. Bei einer neuen Zahlung stehen die dafür konfigurierten, nicht vorausbezahlten Anbieter zur Auswahl. Sobald eine gespeicherte Zahlung bereits einen Anbieter hat, ist diese Auswahl nicht mehr änderbar.
- **Zahlungsverarbeitung**: Legt den Verarbeitungsweg fest. Je nach Konfiguration des Zahlungsanbieters stehen beispielsweise `Keine`, `Manuell` oder `Automatisch` zur Verfügung.
- **Zahlungsstatus**: Zeigt den fachlichen Status der Zahlung, beispielsweise offen oder bezahlt.
- **Zahlungsexportstatus**: Steuert, ob eine Zahlung für den Export vorbereitet, exportiert oder zurückgezogen ist.

## Zahlungsexportstatus

{{< bootstrap-table "table table-striped" >}}
| Status | Bedeutung |
|---|---|
| Ausstehend | Die Zahlung ist noch nicht für den Export freigegeben. |
| Bereit zum Export | Die Zahlung ist für den Export vorgesehen. |
| Exportiert | Die Zahlung wurde als exportiert verarbeitet. |
| Zurückgezogen | Der Exportstatus wurde nach einem früheren Export zurückgezogen. |
{{< /bootstrap-table >}}

Für Zahlungen ohne automatische Verarbeitung gelten in der Reservationsbearbeitung folgende Statuswechsel:

- `Ausstehend` → `Bereit zum Export` oder `Exportiert`
- `Bereit zum Export` → `Ausstehend` oder `Exportiert`
- `Exportiert` → `Zurückgezogen`, wenn Sie das Recht **Darf Exportstatus zurücksetzen** besitzen und ein Exportzeitpunkt vorhanden ist
- `Zurückgezogen` → `Bereit zum Export`

{{% alert title="Automatische Zahlungsverarbeitung" color="info" %}}
Wenn Sie `Automatisch` wählen, steht `Exportiert` nicht als manuelle Auswahl zur Verfügung, solange die Zahlung beim Öffnen der Bearbeitung noch nicht exportiert war. Der automatische Prozess setzt den Exportstatus. Dadurch kann eine Zahlung mit automatischer Verarbeitung nicht versehentlich manuell als exportiert markiert werden.
{{% /alert %}}

## Abgewiesenen Exportversuch bei einer neuen Zahlung korrigieren

Wurde ein Exportversuch während der Erfassung einer neuen, noch nicht gespeicherten Zahlung abgewiesen, kann vorübergehend der Status `Exportiert` angezeigt werden. Sie können den Status in derselben Bearbeitung auf `Ausstehend` oder `Bereit zum Export` korrigieren. ROOMS entfernt dabei den nicht mehr gültigen Exportzeitpunkt.

Diese Korrektur gilt für die manuelle und die automatische Zahlungsverarbeitung. Bei einer bereits gespeicherten exportierten Zahlung ist der Wechsel zurück auf `Ausstehend` oder `Bereit zum Export` nicht zulässig. Verwenden Sie dafür, sofern fachlich vorgesehen und berechtigt, den Status `Zurückgezogen`.
