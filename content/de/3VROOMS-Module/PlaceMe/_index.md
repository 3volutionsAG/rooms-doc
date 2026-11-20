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
- Zum Auswählen oder Wechseln einer Bestuhlung benötigen Sie das globale Recht **Darf Reservationen mit Bestuhlungen buchen** (ID 28). Bei einer vorhandenen Buchung benötigen Sie auch das Bearbeitungsrecht. Ohne Bestuhlung benötigen Sie beim Erstellen und Bearbeiten einer Raumbuchung **Darf Reservationen ohne Bestuhlung erstellen** (ID 168). Ohne **Darf Reservationen ohne Personenanzahl buchen** (ID 94) müssen Sie eine Personenanzahl angeben.

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

{{% alert title="Zeitzonen und Zeitumstellung prüfen" color="warning" %}}
Bei Sperrzeiten, Feiertagen und Öffnungszeiten können die Buchungsprüfungen in PlaceMe und der klassischen ROOMS-Oberfläche unterschiedlich ausfallen. Das betrifft insbesondere die Zeitumstellung und verknüpfte Ressourcen in unterschiedlichen Zeitzonen. Verwenden Sie für solche Buchungen die klassische ROOMS-Oberfläche und prüfen Sie die betroffenen Räume.
{{% /alert %}}

### Liste und Kalender

Sie können zwischen **Listenansicht** und **Kalenderansicht** wechseln. Die Kartenansicht ist deaktiviert.

Der Scheduling-Kalender zeigt Belegungen und Ressourcenbeschränkungen. Ein Klick auf eine vorhandene Buchung öffnet die Buchungsmaske. Welche Titel und Personendaten sichtbar sind und welche Aktionen angeboten werden, hängt von Ihren Rechten ab. Die Anzeige ersetzt die Prüfung beim Speichern nicht.

## Buchung erstellen

1. Wählen Sie in der **Listenansicht** bei einem passenden Treffer **Wählen**. Alternativ markieren Sie im Kalender einen freien Zeitraum. Ein Klick auf eine freie Stelle schlägt einen Zeitraum mit der gesuchten Dauer vor.
2. Prüfen Sie im kompakten Buchungsfenster Ressource, Datum, Beginn und Ende. Beachten Sie die eingestellte Scheduling-Zeitzone.
3. Geben Sie einen **Titel** und bei Bedarf eine **Beschreibung** ein. Prüfen oder ergänzen Sie die Anzahl im Feld **Personen**.
4. Öffnen Sie bei Bedarf mit **Alle Angaben** die vollständige Buchungsmaske. Ihre Eingaben werden übernommen. Auf kleinen Bildschirmen füllt die Maske den Bildschirm. Wählen Sie dort bei Bedarf unter **Optionen zur Buchung → Bestuhlung** eine passende Bestuhlung. Bei einem Raum ohne Standardbestuhlung müssen Sie eine Bestuhlung auswählen, sofern Sie nicht ohne Bestuhlung buchen dürfen.
5. Wählen Sie **Buchen**. Erst diese Aktion erstellt die Buchung. **Wählen** und **Alle Angaben** allein reservieren keine Ressource.
6. Prüfen Sie das Ergebnis unter **Buchungen** anhand von Ressource, Zeitraum und Titel.

Der Anfangsstatus wird automatisch aus dem Workflow der Ressource und Ihren Buchungsrechten bestimmt. Er kann provisorisch oder definitiv sein. Die Statusauswahl **Standardstatus** ist deaktiviert.

Bei einer Raumbuchung kann Ihre Standardkapazität als Personenanzahl vorgeschlagen werden. Passt sie zu keiner Bestuhlung eines Raums mit Standardbestuhlung, wird deren Mindestpersonenzahl vorgeschlagen. Fehlt Ihre Standardkapazität und müssen Sie eine Personenanzahl angeben, wird ebenfalls diese Mindestpersonenzahl vorgeschlagen. Je nach Konfiguration bleibt das Feld leer. Prüfen Sie die Anzahl vor dem Abschluss.

### Bestuhlung bei Raumbuchungen

Mit dem Recht **Darf Reservationen mit Bestuhlungen buchen** (ID 28) können Sie in der vollständigen Maske unter **Optionen zur Buchung → Bestuhlung** eine der aktuell angebotenen Bestuhlungen des Raums wählen. Die Auswahl zeigt Namen und Personenbereiche und kennzeichnet die Standardbestuhlung mit **(Standard)**. Ohne Auswahl verwendet eine neue Buchung den automatischen Vorschlag. **Wie Rooms sie vorschlägt** bedeutet nicht, dass ohne Bestuhlung gebucht wird.

Bei einem Raum mit Standardbestuhlung und ohne eigene Auswahl weist PlaceMe der neuen Buchung automatisch eine Bestuhlung zu:

- Passt die angegebene Personenanzahl zur Standardbestuhlung, wird diese verwendet.
- Andernfalls wird die günstigste Bestuhlung gewählt, zu der die Personenanzahl passt. Bei gleichem Preis wird die kleinere Bestuhlung bevorzugt.
- Bei Räumen mit Vorlaufzeit kann eine andere passende Bestuhlung mit kürzerer Vorlaufzeit nötig sein. Beginnt die Vorlaufzeit der gewählten Bestuhlung spätestens in der aktuellen Minute, wird nach der günstigsten passenden Alternative gesucht, deren Vorlaufzeit frühestens in dieser Minute beginnt. Ohne passende Alternative bleibt die zuvor gewählte Bestuhlung bestehen. Die übrigen Buchungsregeln werden weiterhin geprüft.

Passt die Personenanzahl nicht zur Bestuhlung, verhindert die Prüfung beim Speichern den Abschluss. Korrigieren Sie die Anzahl oder wählen Sie mit dem erforderlichen Recht eine andere passende Bestuhlung. Ein Raum ohne Standardbestuhlung erhält keine automatische Bestuhlung. Wählen Sie dort eine Bestuhlung oder verwenden Sie das Recht zum Buchen ohne Bestuhlung.

Ohne eigene Zeitangabe wird bei nicht synchronisierten Ressourcen jeweils die längere Vor- beziehungsweise Nachlaufzeit aus Ressource und Bestuhlung verwendet. Die Zeiten werden nicht addiert. Bei einem Bestuhlungswechsel folgen die bisherigen Standardzeiten der neuen Bestuhlung. Abweichende eigene Zeiten bleiben erhalten. Bei synchronisierten Ressourcen verlängern diese Zeiten die Belegung nicht.

Beim Bearbeiten bleibt die gespeicherte Bestuhlung erhalten, solange Sie keine andere wählen. Eine geänderte Personenanzahl muss zu ihr passen und löst keine automatische Neuwahl aus. Ohne Bearbeitungs- oder Bestuhlungsrecht wird der Name angezeigt, soweit Sie die vollständigen Buchungsdetails sehen dürfen. Auch eine inzwischen nicht mehr angebotene, gespeicherte Bestuhlung kann erhalten bleiben. Die Auswahl bietet keine Aktion zum Entfernen der Bestuhlung.

Eine kostenpflichtige Bestuhlung wird mit ihrem Namen und der zugewiesenen Mehrwertsteuer in den Buchungskosten berücksichtigt. Die Kostenanzeige in der PlaceMe-Maske ist mit **Folgt** gekennzeichnet und deaktiviert. Die Benachrichtigung an einen eingerichteten Bestuhlungsdienst wird separat von der allgemeinen Buchungs-Änderungsmail verarbeitet. Beachten Sie den Abschnitt **Benachrichtigungen und Outlook**.

### Kombinierte und verknüpfte Räume

Buchen Sie einen kombinierten Raum, werden seine verknüpften Teilräume als Unterbuchungen mitgebucht. Bei der Buchung eines Teilraums werden auch die zugehörigen übergeordneten Raumkombinationen belegt. Ein anderer Teilraum kann weiterhin separat buchbar sein. Die Verknüpfungen werden eine Ebene nach unten und oben berücksichtigt, nicht beliebig tief.

Für neu hinzukommende Unterbuchungen benötigen Sie Buchungsrechte auf den betroffenen Ressourcen. Auch deren Buchungsregeln werden geprüft. Eine Ablehnung nennt den betroffenen Raum. Das kann auch beim Speichern einer älteren Buchung geschehen, wenn fehlende Unterbuchungen ergänzt werden.

Öffnen Sie eine Unterbuchung in der Liste, im Kalender oder über **Meine heutigen Buchungen**, zeigt PlaceMe die Hauptbuchung, sofern Sie diese sehen dürfen. Prüfen Sie deshalb deren Ressource und Buchungsnummer. Ohne Zugriff auf die Hauptbuchung bleibt die Unterbuchung schreibgeschützt sichtbar und bietet keine eigenen Aktionen. Das gilt auch für kombinierte Buchungen, die in der klassischen ROOMS-Oberfläche erstellt wurden. Unterbuchungen können Sie hier nicht unabhängig bearbeiten oder verschieben.

{{% alert title="Änderungen betreffen die Raumkombination" color="warning" %}}
Zeit, Titel, private Kennzeichnung und die allgemeinen beziehungsweise vertraulichen Bemerkungen werden von der Hauptbuchung auf ihre Unterbuchungen übertragen. Freigeben und Terminieren beenden auch die Unterbuchungen. Annullieren und No-show annullieren sie mit. Prüfen Sie vor der Bestätigung, ob die Änderung für die ganze Kombination gelten soll. Zum Einchecken einer Buchung mit Unterbuchungen verwenden Sie die klassische ROOMS-Oberfläche, auch wenn PlaceMe **Einchecken** anbietet.
{{% /alert %}}

### Verfügbare Angaben und Grenzen

Die vollständige Maske bietet Titel, Beschreibung, Datum und Uhrzeit, Personenanzahlen, eine private Kennzeichnung und Bemerkungen für Teilnehmende. Vertrauliche Bemerkungen sowie Vor- und Nachlaufzeiten sind von Ihren Rechten und der Ressource abhängig. Bei synchronisierten Ressourcen stehen keine Vor- und Nachlaufzeiten zur Eingabe zur Verfügung.

Mit **Folgt** gekennzeichnete Bedienelemente sind deaktiviert. Dazu gehören die Statusauswahl, Serien, der Ganztägig-Schalter in der Buchungsmaske, die Auswahl von Teilnehmenden, Kostenstellen, Catering und Equipment sowie die Kostenanzeige. **Ganztägig** in den Suchkriterien erweitert dagegen das tägliche Suchfenster.

PlaceMe verarbeitet einzelne provisorische und definitive Buchungen, einschliesslich kombinierter Räume und Bestuhlungen im oben beschriebenen Umfang. Verwenden Sie die klassische ROOMS-Oberfläche für Serien, Bestellungen, mobiles Equipment sowie Buchungen mit Anhängen, Zahlungen, Anlass, Lektion oder Teams-Meeting. Auch persönliche Ressourcen, Organisatoren mit Google-Synchronisation und bestimmte Ressourcen- oder Installationseinstellungen können den Abschluss in PlaceMe ausschliessen. Die Meldung beim Speichern nennt den Grund. Ressource, Organisator und Status einer vorhandenen Buchung lassen sich hier nicht wechseln.

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

## Einchecken, freigeben, terminieren oder No-show melden

Öffnen Sie die Buchung unter **Buchungen**, im Scheduling-Kalender oder unter **Meine heutigen Buchungen** auf **Start**. Am unteren Rand der Maske stehen die zulässigen Aktionen. Diese können auch verfügbar sein, wenn Sie die Buchungsfelder nicht bearbeiten dürfen. Gesperrte oder annullierte Buchungen bieten diese Aktionen nicht an.

Die Aktionen beziehen sich auf die zuletzt gelesene, gespeicherte Buchung, nicht auf Ihre ungespeicherten Feldeingaben. Speichern Sie gewünschte Feldänderungen vorher und prüfen Sie Ressource, Titel und Zeitraum in der Rückfrage. Die Prüfung kann eine Aktion auch dann ablehnen, wenn die Schaltfläche sichtbar ist. Beachten Sie die Meldung und prüfen Sie den aktualisierten Buchungsstand, bevor Sie es erneut versuchen.

### Einchecken

Mit **Einchecken** bestätigen Sie, dass die Buchung genutzt wird. Die Ressource muss Check-in verwenden und die organisierende Person muss einer Benutzergruppe mit Check-in für Einzelbuchungen angehören. Sie müssen die vollständigen Buchungsdetails sehen dürfen. Das Check-in-Zeitfenster richtet sich nach dem Beginn und den auf der Ressource eingestellten Vorausminuten. Es endet mit dem Buchungsende.

Ein bereits bestätigter Check-in kann nicht erneut ausgeführt werden. Ist für die organisierende Person **Check-In-Delegation erzwingen** (ID 169) wirksam, muss eine andere Person einchecken. Ein allgemeines Bearbeitungsrecht oder ein zusätzliches Check-in-Recht ist dafür nicht erforderlich.

Wählen Sie **Einchecken**. Danach zeigt die Maske **Eingecheckt** an. Im Scheduling-Kalender kennzeichnet ein Symbol die eingecheckte Buchung, soweit deren Details für Sie sichtbar sind. Für Buchungen mit Unterbuchungen und für Installationen, in denen der Check-in eine angebundene Türsteuerung auslöst, verwenden Sie die klassische ROOMS-Oberfläche. PlaceMe zeigt dazu eine Meldung.

### Freigeben oder terminieren

Beide Aktionen ändern das Ende der Buchung und beenden die automatische Verlängerung. Der Unterschied betrifft die Nachlaufzeit:

| Aktion | Wirkung | Zeitfenster |
| --- | --- | --- |
| **Freigeben** | Die Nachlaufzeit entfällt. Die Ressource wird ab dem neuen Ende frei. | Ab Buchungsbeginn bis zum Ende der Nachlaufzeit. Nicht während der Vorlaufzeit. |
| **Terminieren** | Die Nachlaufzeit bleibt im bisherigen Umfang reserviert und folgt auf das neue Ende. | Zwischen Buchungsbeginn und Buchungsende. |

Für jede Freigabe benötigen Sie das globale Recht **Darf Reservationen freigeben (eigene)** (ID 90). Für eine fremde Buchung benötigen Sie zusätzlich **Darf Reservationen freigeben (fremde)** (ID 91) auf der Ressource. Entsprechend erfordert jede Terminierung **Darf Reservationen terminieren (eigene)** (ID 49), bei fremden Buchungen zusätzlich **Darf Reservationen terminieren (fremde)** (ID 50). Bei einer fremden privaten Buchung ist zum Terminieren auch **Darf Reservationen für Dritte buchen (privat)** (ID 73) erforderlich. Als eigene Buchung gilt hier eine Buchung, bei der Sie erstellende, organisierende oder verantwortliche Person beziehungsweise deren Stellvertretung sind.

1. Wählen Sie **Freigeben** oder **Terminieren**.
2. Prüfen Sie die Buchung und die angezeigte Wirkung auf die Nachlaufzeit.
3. Falls **Endet um** angeboten wird, lassen Sie das Feld für ein sofortiges Ende leer oder wählen Sie eine Uhrzeit. Dafür ist zusätzlich **Darf Reservationen freigeben mit Zeitpunkt** (ID 131) beziehungsweise **Darf Reservationen terminieren mit Zeitpunkt** (ID 130) erforderlich. Die Uhrzeit bezieht sich auf die Zeitzone der Buchungsmaske und ihr nächstes Vorkommen ab jetzt, gegebenenfalls nach Mitternacht. Sie muss innerhalb des verbleibenden Buchungszeitraums liegen. Während der Nachlaufzeit kann nur sofort freigegeben werden.
4. Bestätigen Sie **Freigeben** oder **Terminieren** und prüfen Sie das neue Ende. Mit **Abbrechen** schliessen Sie die Rückfrage ohne diese Aktion.

Das Ende wird auf die nächste volle Minute aufgerundet. Die Buchung bleibt bestehen und die Preise werden neu berechnet. Das ist keine Annullierung. Falls gerade Änderungen aus Outlook übernommen werden, warten Sie deren Abschluss ab und versuchen Sie die Aktion danach erneut.

### Als No-show markieren

Verwenden Sie **No-show**, wenn eine Buchung nicht wahrgenommen wird. Sie benötigen **Darf Reservationen als No Show kennzeichnen** (ID 120) auf der Ressource, nicht die Annullierungsrechte. Auf Ihrer eigenen persönlichen Ressource können Sie keine Buchung als No-show markieren. Bereits markierte Buchungen können nicht erneut markiert werden.

{{% alert title="No-show annulliert die Buchung" color="warning" %}}
Die Aktion setzt nicht nur eine Kennzeichnung. Sie annulliert die Buchung, gibt die Ressource frei und berechnet die geltenden Annullierungsgebühren. Prüfen Sie die Buchung vor der Bestätigung. Verwenden Sie zum vorzeitigen Beenden einer tatsächlich genutzten Buchung **Freigeben** oder **Terminieren**.
{{% /alert %}}

Wählen Sie **No-show**, prüfen Sie die Rückfrage und bestätigen Sie **Als No-show markieren**. **Behalten** schliesst die Rückfrage ohne Annullierung. Danach zeigt die Maske den annullierten Status und **No-show**. Die annullierte Buchung belegt die Ressource im Scheduling-Kalender nicht mehr.

Bei installationsspezifischen Freigabe-, Terminierungs- oder No-show-Regeln kann PlaceMe die Aktion mit einem Hinweis auf ROOMS ablehnen. Verwenden Sie in diesem Fall die klassische ROOMS-Oberfläche.

## Meldungen beim Speichern

- **Ungültige Angaben:** Prüfen Sie die Zusammenfassung und die markierten Felder. Eine Feldmeldung verschwindet beim Ändern des Felds. Ob die Korrektur genügt, wird beim nächsten Speichern geprüft.
- **Zeitraum inzwischen belegt:** Wählen Sie beim Erstellen **Andere Zeit wählen**. Die übrigen Angaben bleiben erhalten.
- **Buchung inzwischen geändert:** Bei einem Bearbeitungskonflikt ist Speichern gesperrt. Prüfen Sie die angezeigten Änderungen und wählen Sie **Aktuelle Version laden**. Das ersetzt Ihre ungespeicherten Eingaben. Erfassen Sie Ihre Änderungen danach erneut.
- **Bearbeitung in ROOMS oder Übernahme aus Outlook:** Warten Sie, bis die andere Bearbeitung beziehungsweise Synchronisation abgeschlossen ist, und versuchen Sie es erneut.
- **Aktion nicht unterstützt:** Beachten Sie den angegebenen Grund und verwenden Sie gegebenenfalls die klassische ROOMS-Oberfläche.

Bleibt eine Bestätigung aus oder tritt ein Verbindungsfehler auf, prüfen Sie vor einem erneuten Buchungsversuch die Buchungsliste. So vermeiden Sie eine doppelte Buchung, falls der erste Versuch bereits gespeichert wurde.

## Benachrichtigungen und Outlook

Bestätigungen, Änderungs- und Annullierungsmails sowie Erinnerungen richten sich nach den eingerichteten Benachrichtigungen und Empfängereinstellungen. Nicht jede Feldänderung löst eine Änderungsmail aus. Eine reine Titeländerung genügt dafür beispielsweise nicht. Auch die Bestuhlungswahl allein ist kein Auslöser. Ändern sich dabei die Gesamtkosten oder weitere relevante Angaben, kann dennoch eine Buchungs-Änderungsmail entstehen.

Bei einer Raumkombination werden Benachrichtigungen und Erinnerungen über die Hauptbuchung verarbeitet. Die Raumliste in der Buchungsmail kann die mitgebuchten Räume aufführen. Unterbuchungen erzeugen keine eigenen Buchungsmails, Erinnerungen oder separaten Outlook-Termine.

Ist die Benachrichtigung für Änderungen am selben Tag eingerichtet, verarbeitet PlaceMe bei Erstellen, Annullieren und relevanten Änderungen einer Raumbuchung auch die Mail an die konfigurierten Empfangsadressen, beispielsweise die Rezeption. Sie enthält eine Tabelle der alten und neuen Werte mit markierten Änderungen. Entscheidend ist der noch bevorstehende Belegungsbeginn einschliesslich Vorlaufzeit am aktuellen **UTC-Kalendertag**, nicht allein das lokal angezeigte Buchungsdatum. Bei Änderungen muss zusätzlich der Auslöser für eine Buchungs-Änderungsmail erfüllt sein.

Ein eingerichteter **Bestuhlungsdienst** erhält seine Benachrichtigung über die Gruppe und Vorlage der Angebotszone. Bei Buchungen ohne Standardbestuhlung werden Erstellen, relevante Zeitänderungen, vorzeitiges Beenden und Annullieren berücksichtigt. Auch ein Bestuhlungswechsel wird verarbeitet. Der Versandtermin richtet sich nach der Vorankündigungsfrist der Angebotszone. Vor diesem Termin können ausstehende Benachrichtigungen verschoben oder bei Annullierung beziehungsweise Rückkehr zur Standardbestuhlung entfernt werden. Das bedeutet nicht, dass jede Änderung sofort eine zusätzliche Mail auslöst.

Bei eingerichteter Exchange-Synchronisation werden unterstützte Buchungen entsprechend den Einstellungen der organisierenden Person und der Ressource im Kalender erstellt, aktualisiert oder entfernt. Versand und Synchronisation laufen im Hintergrund. Eine gespeicherte Buchung bedeutet nicht, dass die E-Mail bereits zugestellt oder Outlook bereits aktualisiert ist.

**Einchecken** allein löst keine Buchungs-Änderungsmail aus. **Freigeben** und **Terminieren** behandeln das neue Ende als Buchungsänderung. Ein Terminieren während einer automatischen Verlängerung kann zusätzlich die konfigurierte Konfliktbenachrichtigung auslösen. **No-show** löst die eingerichteten Annullierungsreaktionen aus. Erinnerungen richten sich nach dem neuen Buchungsstand, bei einer Annullierung werden ausstehende Erinnerungen und die automatische Verlängerung entfernt.

Einchecken, Freigeben und Terminieren legen nicht allein aufgrund Ihrer persönlichen Kalendereinstellung einen neuen Outlook-Termin an. Eine Kalenderaktualisierung setzt eine bestehende Verknüpfung oder eine Ressource mit verpflichtender Kalendersynchronisation voraus und hängt von den übrigen Synchronisationseinstellungen ab.

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
