---
title: "PlaceMe: Ressourcen suchen, buchen und Buchungen verwalten"
linkTitle: "PlaceMe"
weight: 40
description: 'In PlaceMe freie Zeitfenster finden, Buchungen erstellen, bearbeiten oder annullieren und Filter verwenden'
---

PlaceMe bietet eine Ressourcenplanung unter **Scheduling** und eine Buchungsliste unter **Buchungen**. Diese Anleitung beschreibt die separate PlaceMe-Weboberfläche. Die Suche und die gespeicherten Listen in der klassischen ROOMS-Oberfläche sind davon getrennt.

Administratoren verwalten unter **Einstellungen → Farben** die [Buchungs- und Ressourcenfarben]({{< relref "3VROOMS-Module/PlaceMe/Farben/_index.md" >}}). Die Farbregeln gelten auch für die klassische ROOMS-Oberfläche. Dafür sind zusätzliche Einstellungs- und Konfigurationsrechte erforderlich.

## Voraussetzung

- Sie sind in PlaceMe angemeldet.
- Für die beiden Navigationseinträge benötigen Sie **Darf Sektion 'Reservieren' nutzen** oder **Darf Sektion 'Listen' nutzen**.
- Die Ressourcenauswahl berücksichtigt aktive Ressourcen, Ihre Buchungsrechte für den Ressourcentyp und Ihre örtlich und zeitlich gültigen Rechte auf der Ressource.
- Für eine neue Buchung benötigen Sie **Darf prov. Reservationen buchen** oder **Darf def. Reservationen buchen** für die Ressource und den gewählten Zeitraum. Der Workflow muss einen passenden Anfangsstatus anbieten. Beim Speichern werden Berechtigungen und Buchungsregeln erneut geprüft. Ein Suchtreffer allein garantiert keinen erfolgreichen Abschluss.
- Für das Erstellen und Bearbeiten einer Raumbuchung ohne Bestuhlung benötigen Sie **Darf Reservationen ohne Bestuhlung erstellen** (ID 168). Ohne **Darf Reservationen ohne Personenanzahl buchen** (ID 94) müssen Sie eine Personenanzahl angeben. Eine Ressource kann in der Suche erscheinen, obwohl eine dieser Voraussetzungen beim Speichern fehlt.

Die Administration verwaltet diese Rechte unter [Rollen und Rechte]({{< relref "3VROOMS/Einstellungen/Sicherheitsdaten/Rollen/RechteVerwalten/_index.md" >}}).

## Wo finde ich die Funktionen?

Öffnen Sie die PlaceMe-Webadresse Ihrer Organisation und wählen Sie in der Navigation:

- **Scheduling**, um Ressourcen und passende freie Zeitfenster zu suchen.
- **Buchungen**, um vorhandene Buchungen zu filtern, zu öffnen und im erlaubten Umfang zu bearbeiten oder zu annullieren.

Auch **Meine heutigen Buchungen** auf **Start** öffnet die jeweilige Buchung.

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

Der Scheduling-Kalender zeigt Belegungen und Ressourcenbeschränkungen. Ein Klick auf eine vorhandene Buchung öffnet die Buchungsmaske. Welche Titel und Personendaten sichtbar sind und welche Aktionen angeboten werden, hängt von Ihren Rechten ab. Die Anzeige ersetzt die Prüfung beim Speichern nicht.

## Buchung erstellen

1. Wählen Sie in der **Listenansicht** bei einem passenden Treffer **Wählen**. Alternativ markieren Sie im Kalender einen freien Zeitraum. Ein Klick auf eine freie Stelle schlägt einen Zeitraum mit der gesuchten Dauer vor.
2. Prüfen Sie im kompakten Buchungsfenster Ressource, Datum, Beginn und Ende. Beachten Sie die eingestellte Scheduling-Zeitzone.
3. Geben Sie einen **Titel** und bei Bedarf eine **Beschreibung** ein. Prüfen oder ergänzen Sie die Anzahl im Feld **Personen**.
4. Öffnen Sie bei Bedarf mit **Alle Angaben** die vollständige Buchungsmaske. Ihre Eingaben werden übernommen. Auf kleinen Bildschirmen füllt die Maske den Bildschirm.
5. Wählen Sie **Buchen**. Erst diese Aktion erstellt die Buchung. **Wählen** und **Alle Angaben** allein reservieren keine Ressource.
6. Prüfen Sie das Ergebnis unter **Buchungen** anhand von Ressource, Zeitraum und Titel.

Der Anfangsstatus wird automatisch aus dem Workflow der Ressource und Ihren Buchungsrechten bestimmt. Er kann provisorisch oder definitiv sein. Die Statusauswahl **Standardstatus** ist deaktiviert.

Bei einer Raumbuchung kann Ihre Standardkapazität als Personenanzahl vorgeschlagen werden. Je nach Konfiguration bleibt das Feld leer. Prüfen Sie die Anzahl vor dem Abschluss.

### Verfügbare Angaben und Grenzen

Die vollständige Maske bietet Titel, Beschreibung, Datum und Uhrzeit, Personenanzahlen, eine private Kennzeichnung und Bemerkungen für Teilnehmende. Vertrauliche Bemerkungen sowie Vor- und Nachlaufzeiten sind von Ihren Rechten und der Ressource abhängig. Bei synchronisierten Ressourcen stehen keine Vor- und Nachlaufzeiten zur Eingabe zur Verfügung.

Mit **Folgt** gekennzeichnete Bedienelemente sind deaktiviert. Dazu gehören die Statusauswahl, Serien, der Ganztägig-Schalter in der Buchungsmaske, die Auswahl von Teilnehmenden, Kostenstellen, Catering, Bestuhlung und Equipment. **Ganztägig** in den Suchkriterien erweitert dagegen das tägliche Suchfenster.

PlaceMe verarbeitet einzelne provisorische und definitive Buchungen ohne zusätzliche Buchungsverknüpfungen. Verwenden Sie die klassische ROOMS-Oberfläche für Serien, Teil- oder verknüpfte Räume, Bestellungen, Bestuhlung, mobiles Equipment sowie Buchungen mit Anhängen, Zahlungen, Anlass, Lektion oder Teams-Meeting. Auch persönliche Ressourcen, Organisatoren mit Google-Synchronisation und bestimmte Ressourcen- oder Installationseinstellungen können den Abschluss in PlaceMe ausschliessen. Die Meldung beim Speichern nennt den Grund. Ressource, Organisator und Status einer vorhandenen Buchung lassen sich hier nicht wechseln.

## Buchung bearbeiten oder annullieren

1. Öffnen Sie die Buchung unter **Buchungen**, im Scheduling-Kalender oder unter **Meine heutigen Buchungen** auf **Start**.
2. Prüfen Sie Buchungsnummer, Ressource, Zeitraum und Status. Ohne Bearbeitungsrecht bleibt die Maske schreibgeschützt.
3. Ändern Sie die verfügbaren Angaben und wählen Sie **Speichern**. Die angebotenen Aktionen ersetzen die Prüfung beim Speichern nicht. Auch eine sichtbare Aktion kann für eine nicht unterstützte Buchung abgewiesen werden.

Zum Annullieren wählen Sie **Buchung annullieren** beziehungsweise **Annullieren** auf kleinen Bildschirmen. Prüfen Sie die angezeigte Buchung und bestätigen Sie **Buchung annullieren**. **Behalten** schliesst die Rückfrage ohne Annullierung.

### Im Kalender verschieben

Ziehen Sie eine bearbeitbare Buchung auf eine andere Uhrzeit oder verändern Sie ihre Ränder, um Beginn oder Ende anzupassen. Ein Wechsel auf eine andere Ressource ist nicht möglich.

{{% alert title="Änderungen werden sofort gespeichert" color="warning" %}}
Verschieben und Grössenänderung im Kalender speichern unmittelbar, ohne zusätzliche Bestätigung. Die Erfolgsmeldung bietet **Rückgängig** an. Auch das Rückgängigmachen muss die aktuellen Buchungsregeln erfüllen. Prüfen Sie das Ergebnis.
{{% /alert %}}

Scheitert das Speichern oder wurde die Buchung inzwischen geändert, öffnet sich die Buchungsmaske mit dem vorgeschlagenen Zeitraum und der Meldung. Prüfen und korrigieren Sie die Angaben. Wenn Sie die Maske ohne erfolgreiches Speichern schliessen, wird der Vorschlag verworfen und der Kalender neu geladen.

## Meldungen beim Speichern

- **Ungültige Angaben:** Prüfen Sie die Zusammenfassung und die markierten Felder. Eine Feldmeldung verschwindet beim Ändern des Felds. Ob die Korrektur genügt, wird beim nächsten Speichern geprüft.
- **Zeitraum inzwischen belegt:** Wählen Sie beim Erstellen **Andere Zeit wählen**. Die übrigen Angaben bleiben erhalten.
- **Buchung inzwischen geändert:** Bei einem Bearbeitungskonflikt ist Speichern gesperrt. Prüfen Sie die angezeigten Änderungen und wählen Sie **Aktuelle Version laden**. Das ersetzt Ihre ungespeicherten Eingaben. Erfassen Sie Ihre Änderungen danach erneut.
- **Bearbeitung in ROOMS oder Übernahme aus Outlook:** Warten Sie, bis die andere Bearbeitung beziehungsweise Synchronisation abgeschlossen ist, und versuchen Sie es erneut.
- **Aktion nicht unterstützt:** Beachten Sie den angegebenen Grund und verwenden Sie gegebenenfalls die klassische ROOMS-Oberfläche.

Bleibt eine Bestätigung aus oder tritt ein Verbindungsfehler auf, prüfen Sie vor einem erneuten Buchungsversuch die Buchungsliste. So vermeiden Sie eine doppelte Buchung, falls der erste Versuch bereits gespeichert wurde.

## Benachrichtigungen und Outlook

Bestätigungen, Änderungs- und Annullierungsmails sowie Erinnerungen richten sich nach den eingerichteten Benachrichtigungen und Empfängereinstellungen. Nicht jede Feldänderung löst eine Änderungsmail aus. Eine reine Titeländerung genügt dafür beispielsweise nicht.

Bei eingerichteter Exchange-Synchronisation werden unterstützte Buchungen entsprechend den Einstellungen der organisierenden Person und der Ressource im Kalender erstellt, aktualisiert oder entfernt. Versand und Synchronisation laufen im Hintergrund. Eine gespeicherte Buchung bedeutet nicht, dass die E-Mail bereits zugestellt oder Outlook bereits aktualisiert ist.

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
