---
title: "PlaceMe: Ressourcen suchen und Buchungen filtern"
linkTitle: "PlaceMe"
weight: 40
description: 'In PlaceMe freie Zeitfenster finden, provisorisch buchen und persönliche oder geteilte Filter verwenden'
---

PlaceMe bietet eine Ressourcenplanung unter **Scheduling** und eine Buchungsliste unter **Buchungen**. Diese Anleitung beschreibt die separate PlaceMe-Weboberfläche. Die Suche und die gespeicherten Listen in der klassischen ROOMS-Oberfläche sind davon getrennt.

## Voraussetzung

- Sie sind in PlaceMe angemeldet.
- Für die beiden Navigationseinträge benötigen Sie **Darf Sektion 'Reservieren' nutzen** oder **Darf Sektion 'Listen' nutzen**.
- Die Ressourcenauswahl berücksichtigt aktive Ressourcen, Ihre Buchungsrechte für den Ressourcentyp und Ihre örtlich und zeitlich gültigen Rechte auf der Ressource.
- Der hier beschriebene Abschluss erstellt eine **provisorische** Buchung. Dafür benötigen Sie insbesondere **Darf prov. Reservationen buchen** für die Ressource und den gewählten Zeitraum. Ein Suchtreffer oder das Recht für definitive Buchungen allein genügt dafür nicht. Beim Abschluss werden Berechtigungen und Buchungsregeln erneut geprüft.

Die Administration verwaltet diese Rechte unter [Rollen und Rechte]({{< relref "3VROOMS/Einstellungen/Sicherheitsdaten/Rollen/RechteVerwalten/_index.md" >}}).

## Wo finde ich die Funktionen?

Öffnen Sie die PlaceMe-Webadresse Ihrer Organisation und wählen Sie in der Navigation:

- **Scheduling**, um Ressourcen und passende freie Zeitfenster zu suchen.
- **Buchungen**, um vorhandene Buchungen zu filtern und ihre Details anzusehen.

## Ein freies Zeitfenster suchen

1. Öffnen Sie **Scheduling**.
2. Tragen Sie unter **Verfügbar von** und **Verfügbar bis** das Datumsfenster ein. Sie können feste Daten im Format `YYYY-MM-DD` oder relative Angaben wie `@today` und `@tomorrow` verwenden. Das Suchfenster umfasst höchstens **62 Kalendertage**, einschliesslich Anfangs- und Enddatum.
3. Prüfen Sie die **Scheduling-Zeitzone**. Die Datums- und Uhrzeitangaben beziehen sich auf diese Zeitzone, beispielsweise `Europe/Zurich`.
4. Geben Sie die **Benötigte Dauer (Minuten)** ein. Legen Sie mit **Täglich ab** und **Täglich bis** das tägliche Zeitfenster fest oder aktivieren Sie **Ganztägig**.
5. Schränken Sie die Ressourcen mit der Textsuche und den Filtern ein, beispielsweise nach Standort oder Ressourcentyp.
6. Wählen Sie **Nur verfügbare Ressourcen** oder **Alle Ressourcen** und prüfen Sie die Ergebnisse.

Ein Treffer bedeutet, dass innerhalb des Suchfensters ein zusammenhängender Zeitraum der benötigten Dauer gefunden wurde. Pro Ressource wird der früheste passende Zeitraum vorgeschlagen. Die Ressource muss nicht an allen Tagen oder über das gesamte Datumsfenster frei sein. Das tägliche Zeitfenster wird für jeden Kalendertag separat angewendet.

**Ganztägig** erweitert das tägliche Suchfenster. Es hebt Belegungen, Öffnungszeiten und Ressourcenregeln nicht auf. **Alle Ressourcen** zeigt auch Ressourcen ohne passenden freien Zeitraum, erweitert aber weder Ihre Rechte noch die Auswahl auf inaktive Ressourcen.

Weitere Ergebnisse werden beim Scrollen nachgeladen. Die angezeigte Ressourcenanzahl bezieht sich auf bereits geladene Ergebnisse.

### Liste und Kalender

Sie können zwischen **Listenansicht** und **Kalenderansicht** wechseln. Die Kartenansicht ist deaktiviert.

Der Scheduling-Kalender zeigt Belegungen und Ressourcenbeschränkungen zur Orientierung. Ein Klick auf eine vorhandene Buchung öffnet ihre Informationen. Welche Titel und Personendaten sichtbar sind, hängt von Ihren Rechten ab. In dieser Kalenderansicht bearbeiten, verschieben oder annullieren Sie keine Buchungen direkt. Die Anzeige ersetzt die Prüfung beim Buchungsabschluss nicht.

## Provisorisch buchen

1. Wählen Sie in der **Listenansicht** bei einem passenden Treffer **Wählen**.
2. Prüfen Sie die Ressource und das **Buchbare Zeitfenster**. Passen Sie **Beginn** und **Ende** innerhalb dieses Fensters an.
3. Wählen Sie **Weiter zur Buchungsübersicht**.
4. Prüfen Sie Ressource, Zeitraum und Zeitzone und geben Sie einen **Titel** ein.
5. Wählen Sie **Provisorisch buchen**. Erst diese Aktion erstellt die Buchung. **Details** oder **Wählen** allein reservieren keine Ressource.
6. Prüfen Sie das Ergebnis unter **Buchungen** anhand von Ressource, Zeitraum und Titel.

Während die Verfügbarkeit nach einer Kriterienänderung geprüft wird, bleiben die Abschlussaktionen gesperrt. Eine angezeigte Fehlermeldung bedeutet, dass der Abschluss nicht erfolgreich bestätigt wurde. Prüfen Sie die Meldung und die Buchungsliste, bevor Sie erneut buchen. So vermeiden Sie eine zweite Buchung, wenn eine Bestätigung nicht sichtbar bleibt.

Der Link **Zu meinen Buchungen** öffnet die Buchungsliste. Er setzt keinen automatischen Filter auf Ihre eigenen Buchungen.

## Standort und weitere Filter verwenden

Die Filter in **Scheduling** und **Buchungen** verwenden dieselbe Bedienung. Die verfügbaren Kriterien richten sich nach dem jeweiligen Bereich.

Beim Standort umfasst **ist innerhalb** den gewählten Standort und seine Unterstandorte. **ist nicht innerhalb** schliesst diesen gesamten Teilbaum aus. Wird ein übergeordneter Standort ausgewählt, ist eine zusätzliche Auswahl seiner Unterstandorte nicht erforderlich.

Die Filter grenzen nur die für Sie zugänglichen Ergebnisse ein. Ein geteilter Filter erteilt keine zusätzlichen Leserechte oder Buchungsrechte.

## Filter speichern und teilen

1. Stellen Sie die Suchkriterien ein und wählen Sie **Speichern**.
2. Geben Sie einen eindeutigen Filternamen ein.
3. Wählen Sie die **Sichtbarkeit**:
   - **Personal** für einen persönlichen Filter.
   - **Shared** für einen Filter, den andere Personen auswählen und abonnieren können.
4. Legen Sie bei Bedarf **Pinned** oder **Als Standard verwenden** fest und speichern Sie den Filter.

**Pinned** heftet den Filter für Sie an. **Als Standard verwenden** bestimmt Ihren persönlichen Standard im jeweiligen Bereich. Gespeicherte Filter für **Scheduling** und **Buchungen** sind getrennt. Ein Filter aus dem einen Bereich wird nicht automatisch im anderen verwendet.

Über **Filteraktionen** können Sie einen fremden geteilten Filter mit **Filter abonnieren** in Ihre Auswahl übernehmen. Nach dem Abonnieren können Sie Ihre persönlichen Einstellungen ändern oder mit **Als privaten Filter kopieren** eine eigene Variante erstellen. **Abo beenden** entfernt Ihr Abonnement, nicht den Filter der Eigentümerin oder des Eigentümers.

Nur die Eigentümerin oder der Eigentümer kann die gespeicherte Definition, ihren Namen und ihre Sichtbarkeit ändern oder den Filter löschen. Änderungen an einer geteilten Definition betreffen auch die Personen, die diesen Filter verwenden. Kopieren Sie einen fremden Filter für eigene Abweichungen, statt eine gemeinsame Definition vorauszusetzen.

Wenn Sie einen bereits ausgewählten gespeicherten Filter ändern und anschliessend zu einem anderen Filter wechseln, erscheint eine Rückfrage. Entscheiden Sie, ob Sie die Änderungen verwerfen oder mit einer der angebotenen Speicheraktionen erhalten möchten. Eine freie Suche ohne ausgewählten gespeicherten Filter kann beim Wechsel ohne Rückfrage ersetzt werden. Speichern Sie solche Kriterien vor dem Wechsel, wenn Sie sie behalten möchten.

### Datumsangaben in gespeicherten Scheduling-Filtern

Das Datumsfenster wird nur in der Filterdefinition gespeichert, wenn **beide** Datumsgrenzen relative Angaben sind, beispielsweise `@today` und `@tomorrow`. Feste Daten oder gemischte feste und relative Grenzen werden nicht als wiederverwendbares Datumsfenster gespeichert. Die Scheduling-Zeitzone wird ebenfalls nicht in der Filterdefinition gespeichert. Prüfen Sie Datum und Zeitzone deshalb nach dem Laden eines Filters.
