---
title: "cordivo (PlaceMe): Ressourcen suchen, buchen und Buchungen verwalten"
linkTitle: "cordivo (PlaceMe)"
weight: 40
description: 'In cordivo freie Zeitfenster finden, Buchungen verwalten und Ansichten speichern oder teilen'
---

Die separate Weboberfläche cordivo ist auch unter dem Namen PlaceMe bekannt. Unter **Buchen** suchen Sie Ressourcen und freie Zeitfenster, unter **Buchungen** verwalten Sie vorhandene Buchungen. Die Suche und die gespeicherten Listen in der klassischen ROOMS-Oberfläche sind davon getrennt.

Administratoren verwalten unter **Einstellungen → Farben** die [Buchungs- und Ressourcenfarben]({{< relref "3VROOMS-Module/PlaceMe/Farben/_index.md" >}}). Die Farbregeln gelten auch für die klassische ROOMS-Oberfläche. Dafür sind zusätzliche Einstellungs- und Konfigurationsrechte erforderlich.

## Voraussetzung

- Sie sind in cordivo angemeldet.
- Für die beiden Navigationseinträge benötigen Sie **Darf Sektion 'Reservieren' nutzen** oder **Darf Sektion 'Listen' nutzen**.
- Die Ressourcenauswahl berücksichtigt aktive Ressourcen, Ihre Buchungsrechte für den Ressourcentyp und Ihre örtlich und zeitlich gültigen Rechte auf der Ressource.
- Für eine neue Buchung benötigen Sie **Darf prov. Reservationen buchen** oder **Darf def. Reservationen buchen** für die Ressource und den gewählten Zeitraum. Der Workflow muss einen passenden Anfangsstatus anbieten. Beim Speichern werden Berechtigungen und Buchungsregeln erneut geprüft. Ein Suchtreffer allein garantiert keinen erfolgreichen Abschluss.
- Zum Auswählen oder Wechseln einer Bestuhlung benötigen Sie das globale Recht **Darf Reservationen mit Bestuhlungen buchen** (ID 28). Bei einer vorhandenen Buchung benötigen Sie auch das Bearbeitungsrecht. Ohne Bestuhlung benötigen Sie beim Erstellen und Bearbeiten einer Raumbuchung **Darf Reservationen ohne Bestuhlung erstellen** (ID 168). Ohne **Darf Reservationen ohne Personenanzahl buchen** (ID 94) müssen Sie eine Personenanzahl angeben.

Die Administration verwaltet diese Rechte unter [Rollen und Rechte]({{< relref "3VROOMS/Einstellungen/Sicherheitsdaten/Rollen/RechteVerwalten/_index.md" >}}).

## Wo finde ich die Funktionen?

Öffnen Sie die cordivo-/PlaceMe-Webadresse Ihrer Organisation und wählen Sie in der Navigation:

- **Buchen**, um Ressourcen und passende freie Zeitfenster zu suchen.
- **Buchungen**, um vorhandene Buchungen zu filtern, zu öffnen und im erlaubten Umfang zu bearbeiten oder zu annullieren.

Auf dem Telefon heisst der Bereich **Buchungen** in der unteren Navigation **Meine**. Auch **Meine heutigen Buchungen** auf **Heute** öffnet die jeweilige Buchung.

Über das Zahnrad gelangen Sie zu **Einstellungen**, sofern Sie das Recht **Darf Sektion 'Einstellungen' nutzen** besitzen. Das persönliche **Erscheinungsbild** wählen Sie am Computer im Kontomenü über Ihr Profilbild, auf dem Telefon unter **Mehr**: **System**, **Hell** oder **Dunkel**. Die Auswahl gilt für diesen Browser. **System** richtet sich nach dem Gerät.

## Ein freies Zeitfenster suchen

1. Öffnen Sie **Buchen**. Ohne vorgegebene Ansicht oder Zeit startet die Suche für eine Stunde ab der nächsten halben Stunde, frühestens um 08:00. Würde sie nach 20:00 enden, wird morgen 08:00–09:00 vorgeschlagen.
2. Öffnen Sie das Feld für den **Zeitraum**. Wählen Sie beispielsweise **Heute**, **Morgen** oder **Nächste 7 Tage**. Solche Vorgaben und relative Texteingaben wie `in 2 Wochen` oder `+3` wandern mit dem Datum. Getippte Kalenderdaten wie `20.5` und im Kalender gewählte Daten sind fest. Eine getippte Angabe bestätigen Sie mit Enter, einen Kalenderzeitraum mit dem zweiten angeklickten Tag. Das Suchfenster umfasst höchstens **62 Kalendertage**, einschliesslich Anfangs- und Enddatum.
3. Öffnen Sie das **Tägliche Zeitfenster** und prüfen Sie **Von** und **Bis**. Normalerweise muss die Ressource während des ganzen täglichen Fensters frei sein. Mit **Kürzer als das Zeitfenster** geben Sie eine kürzere **Benötigte Dauer** an, beispielsweise eine Stunde zwischen 13:00 und 18:00.
4. Prüfen Sie die Zeitzone unten im Zeitfenster über **Zeiten in … → Ändern**. Datum und Uhrzeit beziehen sich auf diese Zone. Auf dem Telefon öffnen Zeitraum und Zeitfenster einen gemeinsamen Eingabebereich.
5. Schränken Sie die Ressourcen mit der Textsuche und **Filter** ein, beispielsweise nach Standort oder Ressourcentyp. Aktive Kriterien erscheinen als einzelne Filterfelder.
6. Prüfen Sie die Ergebnisse: Freie Ressourcen stehen zuerst, weitere passende Ressourcen unter **Zur gewünschten Zeit belegt**. Wählen Sie bei Bedarf **Liste** statt **Kalender**.

Ein Treffer bedeutet, dass innerhalb des Suchfensters ein zusammenhängender Zeitraum der benötigten Dauer gefunden wurde. Pro Ressource wird der früheste passende Zeitraum vorgeschlagen. Die Ressource muss nicht an allen Tagen oder über das gesamte Datumsfenster frei sein. Das tägliche Zeitfenster wird für jeden Kalendertag separat angewendet.

**Ganzer Tag** erweitert das tägliche Suchfenster und behält die bisherige benötigte Dauer. Das bedeutet nicht, dass die Ressource den ganzen Tag frei sein muss. Belegungen, Öffnungszeiten und Ressourcenregeln gelten weiterhin. **Zur gewünschten Zeit belegt** bedeutet, dass kein passender buchbarer Zeitraum gefunden wurde. Das kann auch an Regeln oder Berechtigungen liegen. Die Anzeige erweitert weder Ihre Rechte noch die Auswahl auf inaktive Ressourcen.

Mit **Jetzt** wird das Zeitfenster anhand der aktuellen Uhrzeit neu gesetzt. Die Uhrzeit läuft während der geöffneten Seite nicht fortlaufend mit. Die Pfeile beim Zeitraum verschieben ihn um seine Länge und wählen dabei feste Daten. Zeitraum und Zeitfenster stehen auch im Seitenlink. Prüfen Sie diese nach dem Öffnen eines Links oder einer gespeicherten Ansicht.

Weitere Ergebnisse werden beim Scrollen nachgeladen. Die angezeigte Ressourcenanzahl bezieht sich auf bereits geladene Ergebnisse.

{{% alert title="Zeitzonen und Zeitumstellung prüfen" color="warning" %}}
Bei Sperrzeiten, Feiertagen und Öffnungszeiten können die Buchungsprüfungen in cordivo und der klassischen ROOMS-Oberfläche unterschiedlich ausfallen. Das betrifft insbesondere die Zeitumstellung und verknüpfte Ressourcen in unterschiedlichen Zeitzonen. Verwenden Sie für solche Buchungen die klassische ROOMS-Oberfläche und prüfen Sie die betroffenen Räume.
{{% /alert %}}

### Liste und Kalender

Die Seite öffnet standardmässig mit **Kalender**. Sie können zu **Liste** wechseln. **Plan** ist deaktiviert.

#### Den Zeitstrahl einstellen

Ohne andere Vorgabe in einem Link oder einer gespeicherten Ansicht öffnet der Kalender mit **Arbeitszeit**. Dafür gelten **Arbeitsbeginn** und **Arbeitsende** aus Ihren persönlichen ROOMS-Einstellungen. Fehlende Angaben werden durch die Vorgaben Ihrer Organisation ergänzt. Ergibt sich daraus kein gültiger Zeitraum, verwendet cordivo gültige Organisationsvorgaben oder 08:00–17:00. Die dargestellte Arbeitszeit ist keine Öffnungszeit der Ressource und ändert weder Suchkriterien noch Buchungsrechte.

Am Computer steht die Zoomauswahl über dem Zeitstrahl neben **Tag**, **Arbeitswoche**, **Woche** und **Monat**. Ein Klick auf die aktuelle Stufe öffnet das Menü:

| Bereich | Zoomstufen |
| --- | --- |
| **Ein Tag** | **4 Stunden**, **6 Stunden**, **Arbeitszeit**, **12 Stunden**, **Ganzer Tag** |
| **Mehrere Tage** | **2 Tage**, **3 Tage**, **Arbeitswoche**, **Woche**, **2 Wochen**, **Monat** |

- **Plus / Näher zoomen** zeigt die nächste nähere Stufe, **Minus / Weiter weg zoomen** die nächste weitere. Auch **Strg + Mausrad** und eine Zoomgeste mit zwei Fingern wechseln die Stufe.
- **Tag** wählt **Arbeitszeit**. Die anderen drei Schaltflächen wählen ihre gleichnamige Stufe.
- Unter **Eigene Stunden …** geben Sie **Von und bis** ein und wählen **Übernehmen**. Das Ende muss nach dem Beginn am selben Tag liegen. `24:00` ist als Ende möglich. Diese Stunden füllen die Breite des Zeitstrahls.
- Auf dem Telefon öffnen Sie das Feld für Zeitraum und Zeitfenster. Die Zoomauswahl steht dort unter **Spanne**. Im Zeitstrahl können Sie seitlich scrollen und mit zwei Fingern zoomen.

Bei den Stufen für einen Tag bleiben die übrigen Stunden durch seitliches Scrollen erreichbar. Stunden ausserhalb Ihrer Arbeitszeit sind zurückhaltend hinterlegt, die Beschriftung ist gedämpft. Auch dort können Sie im Rahmen Ihrer Rechte und der Ressourcenregeln buchen. Von **2 Tage** bis **2 Wochen** zeigt jeder Tag nur Ihre Arbeitszeit mit den eingestellten Minuten. **Monat** zeigt ganze Tage. Für Buchungen ausserhalb der dargestellten Arbeitszeit wählen Sie **Arbeitszeit** oder **Ganzer Tag** in der Zoomauswahl und scrollen bei Bedarf zur gewünschten Uhrzeit.

Die Zoomstufe bestimmt den Ausschnitt, nicht die Länge des Suchzeitraums. Ändern Sie im Tagesausschnitt das tägliche Suchfenster oder wählen **Jetzt**, verschiebt sich der Ausschnitt bei Bedarf zur Suchzeit. Ist das Fenster breiter als der Ausschnitt, wird sein Anfang angezeigt. Beim Öffnen einer Ansicht mit eigenen Stunden beginnt der Ausschnitt dagegen bei deren eingestelltem Beginn. Scrollen Sie über die Grenze des Suchzeitraums hinaus, folgt der Suchzeitraum dem angezeigten Tag und behält seine Länge. Prüfen Sie deshalb das Datum vor einer Buchung. Ein gezogener Buchungszeitraum bleibt auf den Tag begrenzt, an dem das Ziehen begonnen hat.

**Ganzer Tag** in der Zoomauswahl zeigt 00:00–24:00. Die gleichnamige Aktion im täglichen Suchfenster ändert dagegen die Suchkriterien.

Der Kalender zeigt Belegungen und Ressourcenbeschränkungen. Provisorische und temporäre Buchungen haben einen gestrichelten Rand. Belegungen ohne sichtbare Details sind schraffiert, gegebenenfalls mit **Privat** gekennzeichnet. Schmale Blöcke zeigen nur den Text, der hineinpasst. Weitere Angaben finden Sie im Hinweis beim Zeigen auf den Block, soweit Sie diese sehen dürfen. Die Farbe allein bestimmt weder Status noch Verfügbarkeit.

Ein Klick auf eine vorhandene Buchung öffnet das Buchungspanel. Welche Titel und Personendaten sichtbar sind und welche Aktionen angeboten werden, hängt von Ihren Rechten ab. Eine geöffnete oder gerade gebuchte Ressource behält ihren Platz bis zur Änderung der Suchkriterien. Prüfen Sie deshalb auch die aktualisierte Belegung, nicht nur die Gruppenzuordnung.

## Buchung erstellen

1. Wählen Sie im Kalender eine freie Stelle oder markieren Sie einen Zeitraum. Am Computer öffnet sich die Buchung direkt unter der Ressourcenzeile. In der **Liste** öffnet **Wählen** das Buchungspanel, auf dem Telefon einen Eingabebereich am unteren Bildschirmrand.
2. Prüfen Sie Ressource, Datum, Beginn und Ende in der angezeigten Zeitzone. Ein Klick verwendet die gesuchte Dauer. Innerhalb des markierten Suchfensters bleibt der Vorschlag darin und kann nahe dessen Ende früher beginnen als die angeklickte Stelle.
3. Geben Sie den **Titel** ein und prüfen oder ergänzen Sie **Personen**. Im Panel bearbeiten Sie den Titel direkt in der Überschrift. Es öffnet mit dem Eingabefokus im Titel, bei leerem Titel mit **Titel hinzufügen**. In der Kalenderzeile können Sie mit Enter buchen und mit Escape verwerfen. **Mehr Angaben** führt mit Ihren Eingaben ins Panel.
4. Öffnen Sie bei Bedarf im Panel **Ändern** für Datum und Uhrzeit oder mit **Alle Angaben** die vollständige Buchungsseite. Dort bearbeiten Sie den Titel direkt in der Überschrift und ergänzen die **Beschreibung**. Wählen Sie bei Bedarf unter **Optionen zur Buchung → Bestuhlung** eine passende Bestuhlung. Bei einem Raum ohne Standardbestuhlung müssen Sie eine Bestuhlung auswählen, sofern Sie nicht ohne Bestuhlung buchen dürfen.
5. Wählen Sie **Buchen**. Erst diese Aktion erstellt die Buchung. **Wählen** und **Alle Angaben** allein reservieren keine Ressource.
6. Prüfen Sie das Ergebnis unter **Buchungen** anhand von Ressource, Zeitraum und Titel. Die Erfolgsmeldung bietet auch **Buchung öffnen** an.

Ein anderer gewählter Zeitraum oder eine andere Ressource übernimmt die übrigen Entwurfseingaben. Bei einem Ressourcenwechsel wird eine eigene Bestuhlungswahl verworfen. Verlangt die Buchungsprüfung aus der Kalenderzeile weitere Angaben, führt sie ins Panel oder auf die vollständige Seite. Ergänzen Sie Angaben, die im Panel fehlen, über **Alle Angaben**.

### Tag und Zeitfenster eingeben

Unter **Wann** beziehungsweise auf der vollständigen Seite unter **Zeit** wählen Sie **Tag** und **Zeitfenster**. Sie können Datum und Uhrzeit auswählen oder Kurzangaben tippen, beispielsweise `20.5`, `930`, `15-17` oder `15 2h`. Enter oder das Verlassen des Felds übernimmt verstandenen Text. Ungültiger Text bleibt mit einer Erklärung stehen und verhindert das Speichern. Korrigieren Sie ihn oder verwerfen Sie die Eingabe mit Escape.

Die Uhrzeitlisten bieten Vorschläge in 15-Minuten-Schritten. Eine Änderung von **Von** behält die Dauer bei, eine Änderung von **Bis** setzt ein neues Ende. Liegt **Bis** nicht nach **Von**, zeigt **+1 Tag** das Ende am nächsten Tag. Mit **Mehrere Tage** erhalten Beginn und Ende je ein Datum und eine Uhrzeit. Prüfen Sie diese besonders bei Buchungen über Mitternacht.

Schraffierte Uhrzeitvorschläge sind belegt und nicht auswählbar. Schraffierte Kalendertage können Sie auswählen, um eine andere Uhrzeit zu suchen. Vollständig gesperrte Tage sind nicht auswählbar. **vorbei** kennzeichnet vergangene Uhrzeiten, erteilt aber kein Recht zum Buchen in der Vergangenheit.

{{% alert title="Verfügbarkeitsanzeige ist keine Reservierung" color="warning" %}}
Die Anzeige berücksichtigt Vor- und Nachlaufzeiten, soweit sie für die Ressource gelten. Ohne geladene Verfügbarkeitsdaten fehlen Markierungen und Freizeithinweis. Eine fehlende Markierung beweist deshalb nicht, dass der Raum frei ist. Prüfen Sie die angezeigten Zeiten und die Rückmeldung beim Speichern. Andere Buchungen oder Regeln können den Abschluss weiterhin verhindern.
{{% /alert %}}

Der Anfangsstatus wird automatisch aus dem Workflow der Ressource und Ihren Buchungsrechten bestimmt. Er kann provisorisch oder definitiv sein. Die Statusauswahl **Standardstatus** ist deaktiviert. Bei gespeicherten Buchungen ergänzt ein Symbol den Statusnamen Ihrer Organisation: eine Uhr für temporär, ein gestrichelter Kreis für provisorisch, ein Häkchen im Kreis für definitiv und ein Verbotszeichen für annulliert.

Bei einer Raumbuchung kann Ihre Standardkapazität als Personenanzahl vorgeschlagen werden. Passt sie zu keiner Bestuhlung eines Raums mit Standardbestuhlung, wird deren Mindestpersonenzahl vorgeschlagen. Fehlt Ihre Standardkapazität und müssen Sie eine Personenanzahl angeben, wird ebenfalls diese Mindestpersonenzahl vorgeschlagen. Je nach Konfiguration bleibt das Feld leer. Prüfen Sie die Anzahl vor dem Abschluss.

### Bestuhlung bei Raumbuchungen

Mit dem Recht **Darf Reservationen mit Bestuhlungen buchen** (ID 28) können Sie auf der vollständigen Seite unter **Optionen zur Buchung → Bestuhlung** eine der aktuell angebotenen Bestuhlungen des Raums wählen. Die Auswahl zeigt Namen und Personenbereiche und kennzeichnet die Standardbestuhlung mit **(Standard)**. Ohne Auswahl verwendet eine neue Buchung den automatischen Vorschlag. **Wie Rooms sie vorschlägt** bedeutet nicht, dass ohne Bestuhlung gebucht wird.

Bei einem Raum mit Standardbestuhlung und ohne eigene Auswahl weist cordivo der neuen Buchung automatisch eine Bestuhlung zu:

- Passt die angegebene Personenanzahl zur Standardbestuhlung, wird diese verwendet.
- Andernfalls wird die günstigste Bestuhlung gewählt, zu der die Personenanzahl passt. Bei gleichem Preis wird die kleinere Bestuhlung bevorzugt.
- Bei Räumen mit Vorlaufzeit kann eine andere passende Bestuhlung mit kürzerer Vorlaufzeit nötig sein. Beginnt die Vorlaufzeit der gewählten Bestuhlung spätestens in der aktuellen Minute, wird nach der günstigsten passenden Alternative gesucht, deren Vorlaufzeit frühestens in dieser Minute beginnt. Ohne passende Alternative bleibt die zuvor gewählte Bestuhlung bestehen. Die übrigen Buchungsregeln werden weiterhin geprüft.

Passt die Personenanzahl nicht zur Bestuhlung, verhindert die Prüfung beim Speichern den Abschluss. Korrigieren Sie die Anzahl oder wählen Sie mit dem erforderlichen Recht eine andere passende Bestuhlung. Ein Raum ohne Standardbestuhlung erhält keine automatische Bestuhlung. Wählen Sie dort eine Bestuhlung oder verwenden Sie das Recht zum Buchen ohne Bestuhlung.

Ohne eigene Zeitangabe wird bei nicht synchronisierten Ressourcen jeweils die längere Vor- beziehungsweise Nachlaufzeit aus Ressource und Bestuhlung verwendet. Die Zeiten werden nicht addiert. Bei einem Bestuhlungswechsel folgen die bisherigen Standardzeiten der neuen Bestuhlung. Abweichende eigene Zeiten bleiben erhalten. Bei synchronisierten Ressourcen verlängern diese Zeiten die Belegung nicht.

Beim Bearbeiten bleibt die gespeicherte Bestuhlung erhalten, solange Sie keine andere wählen. Eine geänderte Personenanzahl muss zu ihr passen und löst keine automatische Neuwahl aus. Ohne Bearbeitungs- oder Bestuhlungsrecht wird der Name angezeigt, soweit Sie die vollständigen Buchungsdetails sehen dürfen. Auch eine inzwischen nicht mehr angebotene, gespeicherte Bestuhlung kann erhalten bleiben. Die Auswahl bietet keine Aktion zum Entfernen der Bestuhlung.

Eine kostenpflichtige Bestuhlung wird mit ihrem Namen und der zugewiesenen Mehrwertsteuer in den Buchungskosten berücksichtigt. Die Kostenanzeige auf der Buchungsseite ist mit **Folgt** gekennzeichnet und deaktiviert. Die Benachrichtigung an einen eingerichteten Bestuhlungsdienst wird separat von der allgemeinen Buchungs-Änderungsmail verarbeitet. Beachten Sie den Abschnitt **Benachrichtigungen und Outlook**.

### Kombinierte und verknüpfte Räume

Buchen Sie einen kombinierten Raum, werden seine verknüpften Teilräume als Unterbuchungen mitgebucht. Bei der Buchung eines Teilraums werden auch die zugehörigen übergeordneten Raumkombinationen belegt. Ein anderer Teilraum kann weiterhin separat buchbar sein. Die Verknüpfungen werden eine Ebene nach unten und oben berücksichtigt, nicht beliebig tief.

Für neu hinzukommende Unterbuchungen benötigen Sie Buchungsrechte auf den betroffenen Ressourcen. Auch deren Buchungsregeln werden geprüft. Eine Ablehnung nennt den betroffenen Raum. Das kann auch beim Speichern einer älteren Buchung geschehen, wenn fehlende Unterbuchungen ergänzt werden.

Öffnen Sie eine Unterbuchung in der Liste, im Kalender oder über **Meine heutigen Buchungen**, zeigt PlaceMe die Hauptbuchung, sofern Sie diese sehen dürfen. Prüfen Sie deshalb deren Ressource und Buchungsnummer. Ohne Zugriff auf die Hauptbuchung bleibt die Unterbuchung schreibgeschützt sichtbar und bietet keine eigenen Aktionen. Das gilt auch für kombinierte Buchungen, die in der klassischen ROOMS-Oberfläche erstellt wurden. Unterbuchungen können Sie hier nicht unabhängig bearbeiten oder verschieben.

{{% alert title="Änderungen betreffen die Raumkombination" color="warning" %}}
Zeit, Titel, private Kennzeichnung und die allgemeinen beziehungsweise vertraulichen Bemerkungen werden von der Hauptbuchung auf ihre Unterbuchungen übertragen. Freigeben und Terminieren beenden auch die Unterbuchungen. Annullieren und No-show annullieren sie mit. Prüfen Sie vor der Bestätigung, ob die Änderung für die ganze Kombination gelten soll. Zum Einchecken einer Buchung mit Unterbuchungen verwenden Sie die klassische ROOMS-Oberfläche, auch wenn PlaceMe **Einchecken** anbietet.
{{% /alert %}}

### Verfügbare Angaben und Grenzen

Die vollständige Seite bietet Titel, Beschreibung, Datum und Uhrzeit, Personenanzahlen, eine private Kennzeichnung und Bemerkungen für Teilnehmende. Vertrauliche Bemerkungen sowie Vor- und Nachlaufzeiten sind von Ihren Rechten und der Ressource abhängig. Bei synchronisierten Ressourcen stehen keine Vor- und Nachlaufzeiten zur Eingabe zur Verfügung.

Mit **Folgt** gekennzeichnete Bedienelemente sind deaktiviert. Dazu gehören die Statusauswahl, Serien, der Ganztägig-Schalter in der Buchungsmaske, die Auswahl von Teilnehmenden, Kostenstellen, Catering und Equipment sowie die Kostenanzeige. **Ganzer Tag** in den Suchkriterien erweitert dagegen das tägliche Suchfenster.

PlaceMe verarbeitet einzelne provisorische und definitive Buchungen, einschliesslich kombinierter Räume und Bestuhlungen im oben beschriebenen Umfang. Verwenden Sie die klassische ROOMS-Oberfläche für Serien, Bestellungen, mobiles Equipment sowie Buchungen mit Anhängen, Zahlungen, Anlass, Lektion oder Teams-Meeting. Auch persönliche Ressourcen, Organisatoren mit Google-Synchronisation und bestimmte Ressourcen- oder Installationseinstellungen können den Abschluss in PlaceMe ausschliessen. Die Meldung beim Speichern nennt den Grund. Ressource, Organisator und Status einer vorhandenen Buchung lassen sich hier nicht wechseln.

## Buchung bearbeiten oder annullieren

1. Öffnen Sie die Buchung unter **Buchungen**, im Kalender unter **Buchen** oder unter **Meine heutigen Buchungen** auf **Heute**.
2. Prüfen Sie Buchungsnummer, Ressource, Zeitraum und Status im Panel. Unter dem Titel stehen der Status und gegebenenfalls **Eingecheckt** oder **No-show** sowie die Buchungsnummer. Wählen Sie oben rechts das Stiftsymbol **Bearbeiten**, um die vollständige Seite zu öffnen. Wenn Sie die vollständigen Buchungsdetails sehen, aber nicht bearbeiten dürfen, öffnet dort **Alle Angaben** die schreibgeschützte Seite. Bei eingeschränkten Leserechten fehlt diese Aktion. Sichtbar bleiben nur die erlaubten Angaben, beispielsweise unter **Belegt**.
3. Ändern Sie die verfügbaren Angaben und wählen Sie **Speichern**. Danach erscheint wieder das Detailpanel. Mit **Zurück** kehren Sie zur Ausgangsseite zurück. Die angebotenen Aktionen ersetzen die Prüfung beim Speichern nicht. Auch eine sichtbare Aktion kann für eine nicht unterstützte Buchung abgewiesen werden.

Zum Annullieren öffnen Sie oben rechts im Panel das Dreipunktmenü **Weitere Aktionen** und wählen **Buchung annullieren**. Auf der vollständigen Seite steht dasselbe Menü neben dem Titel. Prüfen Sie die angezeigte Buchung und bestätigen Sie **Buchung annullieren**. **Behalten** schliesst die Rückfrage ohne Annullierung. Bearbeiten und Annullieren richten sich nach den jeweiligen Buchungsrechten. Eine direkt geöffnete Buchungsseite lässt sich neu laden. Ungespeicherte Feldeingaben sind dadurch nicht gesichert.

### Im Kalender verschieben

Ziehen Sie eine bearbeitbare Buchung auf eine andere Uhrzeit oder verändern Sie ihre Ränder, um Beginn oder Ende anzupassen. Ein Wechsel auf eine andere Ressource ist nicht möglich.

{{% alert title="Änderungen werden sofort gespeichert" color="warning" %}}
Verschieben und Grössenänderung im Kalender speichern unmittelbar, ohne zusätzliche Bestätigung. Die Erfolgsmeldung bietet **Rückgängig** an. Auch das Rückgängigmachen muss die aktuellen Buchungsregeln erfüllen. Prüfen Sie das Ergebnis.
{{% /alert %}}

Scheitert das Speichern oder wurde die Buchung inzwischen geändert, öffnet sich die vollständige Buchungsseite mit dem vorgeschlagenen Zeitraum und der Meldung. Prüfen und korrigieren Sie die Angaben. Wenn Sie die Seite ohne erfolgreiches Speichern verlassen, wird der Vorschlag verworfen und der Kalender neu geladen.

## Einchecken, freigeben, terminieren oder No-show melden

Öffnen Sie die Buchung unter **Buchungen**, im Kalender unter **Buchen** oder unter **Meine heutigen Buchungen** auf **Heute**. Im Panel und auf der vollständigen Seite stehen die zulässigen Aktionen. Diese können auch verfügbar sein, wenn Sie die Buchungsfelder nicht bearbeiten dürfen. Gesperrte oder annullierte Buchungen bieten diese Aktionen nicht an.

**Einchecken**, **Freigeben** und **Terminieren** stehen unten, jeweils nur während ihres zulässigen Zeitfensters. Ohne eine dieser Aktionen hat das Detailpanel keine Fusszeile. **No-show** finden Sie zusammen mit **Buchung annullieren** unter **Weitere Aktionen** beim Titel. Das Menü zeigt nur zulässige Einträge und fehlt, wenn keiner verfügbar ist. Auf dem Telefon gilt dieselbe Aufteilung im Buchungsbereich am unteren Bildschirmrand.

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

Wählen Sie **Weitere Aktionen → No-show**, prüfen Sie die Rückfrage und bestätigen Sie **Als No-show markieren**. **Behalten** schliesst die Rückfrage ohne Annullierung. Danach zeigt die Maske den annullierten Status und **No-show**. Die annullierte Buchung belegt die Ressource im Scheduling-Kalender nicht mehr.

Bei installationsspezifischen Freigabe-, Terminierungs- oder No-show-Regeln kann PlaceMe die Aktion mit einem Hinweis auf ROOMS ablehnen. Verwenden Sie in diesem Fall die klassische ROOMS-Oberfläche.

## Meldungen beim Speichern

- **Ungültige Angaben:** Prüfen Sie die Zusammenfassung und die markierten Felder. Die Meldung erklärt die verletzte Buchungsregel, beispielsweise eine überschrittene Höchstdauer oder eine unpassende Personenanzahl. Meldungen ohne zugehöriges Eingabefeld stehen in der Zusammenfassung. Eine Feldmeldung verschwindet beim Ändern des Felds. Ob die Korrektur genügt, wird beim nächsten Speichern geprüft.
- **Zeitraum inzwischen belegt:** Wählen Sie beim Erstellen **Andere Zeit wählen**. Die übrigen Angaben bleiben erhalten.
- **Buchung inzwischen geändert:** Bei einem Bearbeitungskonflikt ist Speichern gesperrt. Der Hinweis nennt, soweit verfügbar, Zeitpunkt und Person der letzten Änderung. Das schliesst Änderungen aus der klassischen ROOMS-Oberfläche ein. Prüfen Sie die angezeigten Änderungen und wählen Sie **Aktuelle Version laden**. Das ersetzt Ihre ungespeicherten Eingaben. Erfassen Sie Ihre Änderungen danach erneut.
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

Die Filter in **Buchen** und **Buchungen** verwenden dieselbe Bedienung. Mit **Filter** fügen Sie Kriterien hinzu. Die verfügbaren Kriterien richten sich nach dem jeweiligen Bereich. Zeitraumvorgaben wie **Heute** wandern mit dem Datum. Getippte Kalenderdaten und im Kalender gewählte Daten bleiben fest. Unter **Buchen** wandern auch relative Texteingaben wie `in 2 Wochen` oder `+3` mit.

Beim Standort umfasst **ist innerhalb** den gewählten Standort und seine Unterstandorte. **ist nicht innerhalb** schliesst diesen gesamten Teilbaum aus. Wird ein übergeordneter Standort ausgewählt, ist eine zusätzliche Auswahl seiner Unterstandorte nicht erforderlich.

Die Filter grenzen nur die für Sie zugänglichen Ergebnisse ein. Eine geteilte Ansicht erteilt keine zusätzlichen Leserechte oder Buchungsrechte.

## Ansichten speichern und teilen

1. Stellen Sie Filter, Textsuche, Sortierung und unter **Buchen** die Darstellung **Kalender** oder **Liste** ein. Im Kalender wählen Sie auch die gewünschte Zoomstufe oder eigene Stunden. Wählen Sie **Alle Ansichten → Neue Ansicht anlegen**.
2. Geben Sie unter **Name** einen eindeutigen Namen ein und prüfen Sie die Vorschau der Filter und Darstellung.
3. Aktivieren Sie bei Bedarf **Mit anderen teilen**, damit andere die Ansicht auswählen und abonnieren können. Ohne diese Auswahl bleibt sie persönlich. Legen Sie mit **Anpinnen** und **Als Standard verwenden** Ihre persönlichen Vorgaben fest.
4. Entscheiden Sie unter **Buchen**, ob die Ansicht mit **Zeit mitspeichern** auch einen mitwandernden Zeitraum und das Zeitfenster behalten soll. Prüfen Sie die angezeigte Beschreibung und wählen Sie **Speichern**.

**Anpinnen** zeigt die Ansicht als Reiter. **Alle Ansichten** enthält angepinnte, eigene und mit Ihnen geteilte Ansichten und nennt bei geteilten Ansichten die teilende Person. **Als Standard verwenden** bestimmt Ihren persönlichen Standard im jeweiligen Bereich. Ansichten für **Buchen** und **Buchungen** sind getrennt. Eine Kalenderansicht speichert auch die Zoomstufe oder die eingegebenen eigenen Stunden. **Arbeitszeit** verwendet beim Öffnen die Arbeitszeit der jeweils betrachtenden Person, auch in einer geteilten Ansicht. Die seitliche Scrollposition wird nicht mitgespeichert und kennzeichnet die Ansicht nicht als geändert.

Wählen Sie eine geteilte Ansicht aus. Unter **Alle Ansichten → Ansichten verwalten** oder den **Aktionen der Ansicht** können Sie sie mit **Ansicht abonnieren** übernehmen, Ihre persönlichen Einstellungen ändern oder mit **Als eigene Ansicht speichern** eine eigene Variante erstellen. **Abo beenden** entfernt Ihr Abonnement, nicht die Ansicht der Eigentümerin oder des Eigentümers. **Aktuelle Ansicht** im Menü verlässt die gespeicherte Ansicht und behält die aktuellen Kriterien.

Nur die Eigentümerin oder der Eigentümer kann die gespeicherte Definition, ihren Namen und ihre Freigabe ändern oder die Ansicht löschen. Änderungen an einer geteilten Definition betreffen auch die Personen, die diese verwenden. **Ansicht löschen** verlangt eine Bestätigung und entfernt eine geteilte Ansicht auch für andere. Speichern Sie für eigene Abweichungen eine eigene Ansicht.

Ein Punkt am Reiter und **Geändert** kennzeichnen Abweichungen an Filtern, Textsuche, Sortierung oder Darstellung. Beim Wechsel zu einer anderen Ansicht erscheint eine Rückfrage nur für geänderte Filter, Textsuche oder Sortierung, nicht allein für eine andere Darstellung oder Zeit. Entscheiden Sie, ob Sie die Änderungen verwerfen oder mit einer der angebotenen Speicheraktionen erhalten möchten. Eine freie Suche ohne ausgewählte gespeicherte Ansicht kann beim Wechsel ohne Rückfrage ersetzt werden. Speichern Sie solche Kriterien vorher, wenn Sie sie behalten möchten.

### Zeit in einer Ansicht unter Buchen

**Zeit mitspeichern** ist bei einer neuen Ansicht ausgeschaltet. Ohne gespeicherte Zeit verwendet sie beim Öffnen die aktuelle Vorgabe **Heute** und **Jetzt** mit der oben beschriebenen Abendregel. Mit eingeschaltetem Schalter speichert sie einen mitwandernden Tag oder Zeitraum und feste Uhrzeiten, **Jetzt** oder **Ganzer Tag** samt benötigter Dauer. **Jetzt** setzt das Fenster beim Öffnen anhand der Uhr neu. Feste Kalenderdaten lassen sich nicht in einer Ansicht speichern. Der deaktivierte Schalter erklärt den Grund. Die Zeitzone wird ebenfalls nicht in der Ansicht gespeichert.

Eine Änderung von Tag, Zeitfenster, Dauer oder Zeitzone zählt nicht als ungespeicherte Ansichtsänderung. **Speichern** aktualisiert die übrige Definition und lässt die bisher gespeicherte Zeit bestehen. Um diese zu ersetzen, öffnen Sie **Ansicht bearbeiten** und wählen **Durch die gewählte Zeit ersetzen: …** beziehungsweise aktivieren **Zeit mitspeichern**. Prüfen Sie vor dem Speichern die Zeitbeschreibung. Die aktuell auf der Seite gewählte Zeit bleibt dabei erhalten.
