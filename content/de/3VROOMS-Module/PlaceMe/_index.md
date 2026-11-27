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
- Zum Hinzufügen oder Entfernen von Teilnehmenden benötigen Sie das globale Recht **Darf Teilnehmer editieren** (ID 57). Bei einer vorhandenen Buchung müssen Sie diese auch bearbeiten und die vollständigen Buchungsdetails sehen dürfen. Ohne Änderungsrecht bleibt eine sichtbare Teilnehmendenliste schreibgeschützt. Bei eingeschränkten Detailrechten wird sie ausgeblendet.

Die Administration verwaltet diese Rechte unter [Rollen und Rechte]({{< relref "3VROOMS/Einstellungen/Sicherheitsdaten/Rollen/RechteVerwalten/_index.md" >}}).

## Wo finde ich die Funktionen?

Öffnen Sie die cordivo-/PlaceMe-Webadresse Ihrer Organisation und wählen Sie in der Navigation:

- **Buchen**, um Ressourcen und passende freie Zeitfenster zu suchen.
- **Buchungen**, um vorhandene Buchungen zu filtern, zu öffnen und im erlaubten Umfang zu bearbeiten oder zu annullieren.

Unter **Start** finden Sie **Heute**, **Kommende**, **Wartet auf andere** und **Vergangene**. Auf dem Telefon heisst der Bereich **Buchungen** in der unteren Navigation **Meine**. Auch die Buchungskarte auf **Heute** öffnet die jeweilige Buchung.

Über das Zahnrad gelangen Sie zu **Einstellungen**, sofern Sie das Recht **Darf Sektion 'Einstellungen' nutzen** besitzen. Das persönliche **Erscheinungsbild** wählen Sie am Computer im Kontomenü über Ihr Profilbild, auf dem Telefon unter **Mehr**: **System**, **Hell** oder **Dunkel**. Die Auswahl gilt für diesen Browser. **System** richtet sich nach dem Gerät.

Bei wenig Platz am Computer zeigt die obere Leiste zunächst nur das cordivo-Zeichen statt des ganzen Logos. Weitere Navigationseinträge finden Sie bei Bedarf unter **Mehr**. Die aktuelle Seite, das vorhandene Einstellungszahnrad und das Kontomenü bleiben direkt erreichbar. Eine Aufgabenanzahl steht gegebenenfalls beim Eintrag **Aufgaben** im Menü.

## Einen Raum unter Heute sofort buchen

**Start → Heute → Jetzt frei** schlägt freie Räume anhand Ihrer persönlichen Standardstandorte und Standardkapazität vor. Fehlende Vorgaben schränken die Suche nicht entsprechend ein. Die Vorschläge übernehmen nicht die zuletzt verwendete Ansicht unter **Buchen**.

Ein Klick auf eine Dauer kann die Buchung unmittelbar erstellen. Dafür benötigen Sie zusätzlich das globale Recht **Darf Schnellreservationen durchführen** (ID 112); die Ressource muss Schnellbuchungen erlauben. Die Schnellbuchung erhält einen Titel nach dem Muster **Gebucht für [Name]** und den ersten erlaubten definitiven, sonst provisorischen, sonst temporären Status. Möchten Sie Titel oder Status selbst wählen, verwenden Sie **Buchen** und prüfen Sie die Angaben vor dem Abschluss.

1. Prüfen Sie Raum, Standort und **Frei bis …**. Die angezeigten Vorschläge sind keine vorläufigen Reservierungen.
2. Wählen Sie **30 Min.** oder **1 Std.**. Nicht mögliche Dauern werden nicht angeboten. Die Buchung beginnt ab der nächsten vollen Minute. Für eine andere Zeit öffnen Sie am Computer **Andere Zeit**; **Alle Räume anzeigen**, auf dem Telefon **Alle Räume**, führt zu **Buchen**.
3. Kann der Raum mit Ihren Vorgaben direkt gebucht werden, ist die Buchung jetzt gespeichert. Andernfalls oder bei fehlenden Pflichtangaben öffnet sich die vorausgefüllte Buchungsseite, auf dem Telefon zunächst der Eingabebereich. Ergänzen und prüfen Sie dort die Angaben vor dem Buchen.
4. Prüfen Sie die Erfolgsmeldung. Eine provisorische oder temporäre Buchung ist keine definitive Bestätigung. Beachten Sie eine angezeigte Bestätigungsfrist.

{{% alert title="Rückgängig annulliert die Buchung" color="warning" %}}
Die Erfolgsmeldung bietet **Rückgängig** nur an, wenn die soeben erstellte Schnellbuchung annulliert werden darf und die Vorschau keine Kosten ergibt; sonst bietet sie **Öffnen**. **Rückgängig** annulliert die gespeicherte Buchung ohne weitere Rückfrage. Auch zwischenzeitliche Änderungen können davon betroffen sein. Prüfen Sie bei Unsicherheit zuerst die Buchung über die Buchungsliste. Die Gebührenfreiheit wird beim Ausführen erneut geprüft; entstehen inzwischen Kosten, wird die Rücknahme abgewiesen. Eine Annullierung nimmt bereits veranlasste Nachrichten nicht zurück.
{{% /alert %}}

Ist der Raum inzwischen belegt oder fehlt die Bestätigung, prüfen Sie vor einem erneuten Versuch die Buchungsliste. Verwenden Sie **Buchen**, wenn kein passender Vorschlag vorhanden ist.

## Eigene Buchungen unter Start finden

Die folgenden Listen enthalten Hauptbuchungen, bei denen Sie erstellende, organisierende oder verantwortliche Person sind. Die blosse Teilnahme genügt nicht. Unterbuchungen einer Raumkombination erscheinen nicht als eigene Einträge.

| Liste | Inhalt |
| --- | --- |
| **Kommende** | Noch nicht beendete Buchungen, einschliesslich bereits laufender Buchungen, nach Beginn aufsteigend. |
| **Wartet auf andere** | Noch nicht beendete provisorische und temporäre Buchungen. Dazu gehören auch Buchungen, die Sie selbst bestätigen könnten; die Liste bestimmt nicht, wer bestätigen darf. |
| **Vergangene** | Beendete Buchungen, nach Beginn absteigend. |

**Kommende** und **Vergangene** blenden annullierte Buchungen zunächst aus. Mit **Annullierte** zeigen Sie diese zusätzlich an. **Buchung suchen** durchsucht auch noch nicht geladene Einträge der jeweiligen Liste und findet annullierte Buchungen auch bei ausgeschaltetem Schalter. Die Suche wechselt nicht in die andere Zeitliste. **Wartet auf andere** hat weder Suchfeld noch Annullierte-Schalter. Für Ihre eigenen Bestätigungsaufgaben verwenden Sie **Aufgaben → Zu bestätigen**.

Zunächst werden bis zu **50 Buchungen** geladen. Mit **Weitere 50 laden** ergänzen Sie die Liste. **… von … Buchungen** zählt die gefilterte Auswahl; die Zahlen an den Reitern **Kommende** und **Wartet auf andere** bleiben unabhängig von Suche und Schalter und zählen keine annullierten Buchungen. Die Wochenübersicht auf **Heute** ersetzt diese Listen nicht: Sie zeigt höchstens 100 noch nicht beendete Buchungen der laufenden Woche und fehlt auf dem Telefon.

## Ein freies Zeitfenster suchen

1. Öffnen Sie **Buchen**. Ohne vorgegebene Ansicht oder Zeit startet die Suche für eine Stunde ab der nächsten halben Stunde, frühestens um 08:00. Würde sie nach 20:00 enden, wird morgen 08:00–09:00 vorgeschlagen.
2. Öffnen Sie das Feld für den **Zeitraum**. Wählen Sie beispielsweise **Heute**, **Morgen** oder **Nächste 7 Tage**. Solche Vorgaben und relative Texteingaben wie `in 2 Wochen` oder `+3` wandern mit dem Datum. Getippte Kalenderdaten wie `20.5` und im Kalender gewählte Daten sind fest. Eine getippte Angabe bestätigen Sie mit Enter, einen Kalenderzeitraum mit dem zweiten angeklickten Tag. Das Suchfenster umfasst höchstens **62 Kalendertage**, einschliesslich Anfangs- und Enddatum.
3. Öffnen Sie das **Tägliche Zeitfenster** und prüfen Sie **Von** und **Bis**. Normalerweise muss die Ressource während des ganzen täglichen Fensters frei sein. Mit **Kürzer als das Zeitfenster** geben Sie eine kürzere **Benötigte Dauer** an, beispielsweise eine Stunde zwischen 13:00 und 18:00.
4. Prüfen Sie die Zeitzone unten im Zeitfenster über **Zeiten in … → Ändern**. Datum und Uhrzeit beziehen sich auf diese Zone. Auf dem Telefon öffnen Zeitraum und Zeitfenster einen gemeinsamen Eingabebereich.
5. Schränken Sie die Ressourcen mit der Textsuche und **Filter** ein, beispielsweise nach Standort oder Ressourcentyp. Aktive Kriterien erscheinen als einzelne Filterfelder.
6. Prüfen Sie die Ergebnisse: Freie Ressourcen stehen zuerst, weitere passende Ressourcen unter **Zur gewünschten Zeit belegt**. Wählen Sie bei Bedarf **Liste** statt **Kalender**.

Ein Treffer bedeutet, dass innerhalb des Suchfensters ein zusammenhängender Zeitraum der benötigten Dauer gefunden wurde. Pro Ressource wird der früheste passende Zeitraum vorgeschlagen. Die Ressource muss nicht an allen Tagen oder über das gesamte Datumsfenster frei sein. Das tägliche Zeitfenster wird für jeden Kalendertag separat angewendet.

Die Suche berücksichtigt die längste zugewiesene Vorbereitungsfrist des Raums und seiner mitgebuchten Teilräume. Der vorgeschlagene Beginn liegt frühestens nach Ablauf dieser Frist ab dem Suchzeitpunkt. **Jetzt frei** lässt Räume aus, deren Frist für den unmittelbaren Beginn nicht reicht. Bei virtuellen Räumen werden auch Öffnungszeiten, Sperrzeiten und Feiertage der Teilräume mit deren jeweiligen Buchungsrechten geprüft. Ein älterer Suchvorschlag kann beim Speichern trotzdem abgewiesen werden; die Fristen und Regeln werden dann erneut geprüft.

**Ganzer Tag** erweitert das tägliche Suchfenster und behält die bisherige benötigte Dauer. Das bedeutet nicht, dass die Ressource den ganzen Tag frei sein muss. Belegungen, Öffnungszeiten und Ressourcenregeln gelten weiterhin. **Zur gewünschten Zeit belegt** bedeutet, dass kein passender buchbarer Zeitraum gefunden wurde. Das kann auch an Regeln oder Berechtigungen liegen. Die Anzeige erweitert weder Ihre Rechte noch die Auswahl auf inaktive Ressourcen.

Mit **Jetzt** wird das Zeitfenster anhand der aktuellen Uhrzeit neu gesetzt. Die Uhrzeit läuft während der geöffneten Seite nicht fortlaufend mit. Die Pfeile beim Zeitraum verschieben ihn um seine Länge und wählen dabei feste Daten. Zeitraum und Zeitfenster stehen auch im Seitenlink. Prüfen Sie diese nach dem Öffnen eines Links oder einer gespeicherten Ansicht.

Weitere Ergebnisse werden beim Scrollen nachgeladen. Die angezeigte Ressourcenanzahl bezieht sich auf bereits geladene Ergebnisse.

{{% alert title="Zeitzonen und Zeitumstellung prüfen" color="warning" %}}
Bei Sperrzeiten, Feiertagen und Öffnungszeiten können die Buchungsprüfungen in cordivo und der klassischen ROOMS-Oberfläche unterschiedlich ausfallen. Das betrifft insbesondere die Zeitumstellung und verknüpfte Ressourcen in unterschiedlichen Zeitzonen. Verwenden Sie für solche Buchungen die klassische ROOMS-Oberfläche und prüfen Sie die betroffenen Räume.
{{% /alert %}}

### Liste und Kalender

Die Seite öffnet standardmässig mit **Kalender**. Sie können zu **Liste** wechseln. **Plan** ist deaktiviert.

#### Raumkombinationen im Kalender erkennen

- **Verbund** kennzeichnet einen kombinierten Raum.
- **Teilraum** steht unter dem Namen eines zugehörigen Teilraums. Jeder Raum hat eine eigene Kalenderzeile mit seiner Belegung und bleibt einzeln auswählbar.

Innerhalb desselben Verfügbarkeitsbereichs stehen bereits geladene Teilräume eingerückt nach ihrem Verbund. Freie und unter **Zur gewünschten Zeit belegt** aufgeführte Räume bleiben getrennt. Ist in diesem Bereich kein zugehöriger Verbund geladen, bleibt die Kennzeichnung **Teilraum** ohne Einrückung sichtbar. Das kann etwa an einem Filter liegen oder daran, dass der Verbund noch nicht geladen ist oder im anderen Verfügbarkeitsbereich steht. Beim Nachladen kann sich die Reihenfolge entsprechend ändern.

Gehört ein Teilraum zu mehreren angezeigten Verbünden, steht er nur einmal, beim ersten bereits geladenen Verbund in der Suchreihenfolge desselben Verfügbarkeitsbereichs. Die Kennzeichnung berücksichtigt nur Verknüpfungen zwischen aktiven Räumen, für die Sie im Suchzeitraum Buchungsrechte haben. Sie ist keine vollständige Übersicht aller eingerichteten Raumverknüpfungen.

Die Gruppierung fasst keine Belegungen zusammen. Prüfen Sie die Zeile des gewünschten Raums. Die Wirkung einer Buchung auf verknüpfte Räume ist unter **Kombinierte und verknüpfte Räume** beschrieben.

Unterbuchungen erkennen Sie im Kalender an einem Verknüpfungssymbol, einem gestrichelten Rand und einer zurückhaltenderen Darstellung, sofern Sie den Buchungstitel sehen dürfen. Diese Blöcke lassen sich weder verschieben noch an den Rändern zeitlich verändern. Öffnen Sie zum Bearbeiten die Hauptbuchung wie unter **Kombinierte und verknüpfte Räume** beschrieben.

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

Beschränkungen, die Ihre Buchung verhindern, erscheinen grau mit Verbotszeichen. Feiertage oder Zeiten ausserhalb der Öffnungszeiten, für die Sie das erforderliche Buchungsrecht besitzen, erscheinen hell bernsteinfarben mit oberer Linie und Infosymbol. Das Band nennt den Feiertag, **Geschlossen** oder den Grund der Sperrzeit, soweit genügend Platz vorhanden ist. Sperrzeiten verhindern die Buchung immer. Bei einer erlaubten Überschreitung zeigt die Buchungszeile für den Beginn-Tag des Entwurfs einen Hinweis mit **Du darfst trotzdem buchen.** Das hebt andere Buchungsregeln nicht auf.

Ein Klick auf eine vorhandene Buchung öffnet das Buchungspanel. Im Zeitstrahl liegt es über dem Kalender, ohne dessen Breite oder Massstab zu ändern. Eine davon verdeckte Buchung wird bei Bedarf in den sichtbaren Ausschnitt gescrollt. Escape oder ein Klick neben das Panel schliesst es. Welche Titel und Personendaten sichtbar sind und welche Aktionen angeboten werden, hängt von Ihren Rechten ab. Eine geöffnete oder gerade gebuchte Ressource behält ihren Platz bis zur Änderung der Suchkriterien. Prüfen Sie deshalb auch die aktualisierte Belegung, nicht nur die Gruppenzuordnung.

## Buchung erstellen

1. Wählen Sie im Kalender eine freie Stelle oder markieren Sie einen Zeitraum. Am Computer öffnet sich die Buchung direkt unter der Ressourcenzeile. In der **Liste** öffnet **Wählen** die vollständige Buchungsseite. Das gilt auch für die untereinander angeordnete Kalenderdarstellung in einem schmaleren Computerfenster. Auf dem Telefon öffnet sich ein Eingabebereich am unteren Bildschirmrand.
2. Prüfen Sie Ressource, Datum, Beginn und Ende in der angezeigten Zeitzone. Ein Klick verwendet die gesuchte Dauer. Innerhalb des markierten Suchfensters bleibt der Vorschlag darin und kann nahe dessen Ende früher beginnen als die angeklickte Stelle.
3. Geben Sie den **Titel** ein und prüfen oder ergänzen Sie **Personen**. In der Kalenderzeile öffnen Sie mit dem entsprechenden Recht über **Teilnehmende** die Einladungsliste direkt in der Zeile. **Mehr Angaben**, **Catering** und **Dazu buchen** führen mit Ihren Eingaben auf die vollständige Buchungsseite, bei Zusatzleistungen direkt zum betreffenden Bereich.
4. Ergänzen Sie bei Bedarf auf der vollständigen Seite die **Beschreibung**, **Personen** und **Bestuhlung**. Den Titel bearbeiten Sie direkt in der Überschrift. Bei einem Raum ohne Standardbestuhlung müssen Sie eine Bestuhlung auswählen, sofern Sie nicht ohne Bestuhlung buchen dürfen. Auf dem Telefon öffnet **Alle Angaben** die vollständige Seite. Verlangt der Raum weitere Angaben, führt **Weiter zu den Pflichtangaben** aus der Kalenderzeile direkt zur benötigten Eingabe.
5. Prüfen Sie Pflichtangaben, Kosten, Zusatzbuchungen und den angebotenen Status. Wählen Sie bei Bedarf über den Pfeil neben der Buchungsaktion **Buchen als** einen anderen erlaubten Status. Wählen Sie erst danach die Buchungsaktion, beispielsweise **Definitiv buchen** oder **Provisorisch buchen**. Erst diese Aktion erstellt die Buchung. **Wählen**, die Statusauswahl und das Öffnen weiterer Angaben allein reservieren keine Ressource.
6. Prüfen Sie die Erfolgsmeldung und öffnen Sie bei Bedarf mit **Öffnen** die gespeicherte Buchung. Die Meldung unterscheidet definitive, provisorische und temporäre Buchungen. Prüfen Sie Ressource, Zeitraum, Titel und Status auch in der Buchungsliste.

In der Kalenderzeile können Sie mit Enter buchen und mit Escape verwerfen. **Zurück** auf der vollständigen Seite führt zur vorherigen Zeile beziehungsweise Liste. Beim Zurückkehren zur Zeile bleiben der auf der Seite gewählte Raum, die Zeit und Ihre Eingaben erhalten, auch wenn nicht alle Angaben in der Zeile sichtbar sind.

Wählen Sie eine andere Ressource direkt im Kalender oder in der Liste, bleiben die allgemeinen Eingaben erhalten; Bestuhlung, weitere Angaben, Catering und Zusatzressourcen werden dabei zurückgesetzt. Verwenden Sie für einen Raumwechsel mit Prüfung der übernehmbaren Angaben **Wechseln** auf der vollständigen Seite wie unter **Raum im Buchungsentwurf wechseln** beschrieben.

### Tag und Zeitfenster eingeben

Unter **Wann** beziehungsweise auf der vollständigen Seite unter **Zeit** wählen Sie **Tag** und **Zeitfenster**. Sie können Datum und Uhrzeit auswählen oder Kurzangaben tippen, beispielsweise `20.5`, `930`, `15-17` oder `15 2h`. Enter oder das Verlassen des Felds übernimmt verstandenen Text. Ungültiger Text bleibt mit einer Erklärung stehen und verhindert das Speichern. Korrigieren Sie ihn oder verwerfen Sie die Eingabe mit Escape.

Die Uhrzeitlisten bieten Vorschläge in 15-Minuten-Schritten. Eine Änderung von **Von** behält die Dauer bei, eine Änderung von **Bis** setzt ein neues Ende. Liegt **Bis** nicht nach **Von**, zeigt **+1 Tag** das Ende am nächsten Tag. Mit **Mehrere Tage** erhalten Beginn und Ende je ein Datum und eine Uhrzeit. Prüfen Sie diese besonders bei Buchungen über Mitternacht.

**Ganzer Tag** in der Buchungsmaske bucht die gewählten Tage vollständig, von 00:00 am ersten Tag bis 00:00 nach dem letzten Tag. Massgebend ist Ihre Profilzeitzone. Die Uhrzeitfelder und der Tagesstreifen werden ausgeblendet. Prüfen Sie die Tage und die Zeitzone vor dem Speichern, besonders bei abweichender Suchzeitzone. Ein erneuter Klick stellt die vorherigen Uhrzeiten wieder her. Anders als **Ganzer Tag** in der Suche bedeutet diese Auswahl eine ganztägige Buchung.

Schraffierte Uhrzeitvorschläge sind belegt und nicht auswählbar. Schraffierte Kalendertage können Sie auswählen, um eine andere Uhrzeit zu suchen. Vollständig gesperrte Tage sind nicht auswählbar. **vorbei** kennzeichnet vergangene Uhrzeiten, erteilt aber kein Recht zum Buchen in der Vergangenheit.

{{% alert title="Verfügbarkeitsanzeige ist keine Reservierung" color="warning" %}}
Die Anzeige berücksichtigt Vor- und Nachlaufzeiten, soweit sie für die Ressource gelten. Ohne geladene Verfügbarkeitsdaten fehlen Markierungen und Freizeithinweis. Eine fehlende Markierung beweist deshalb nicht, dass der Raum frei ist. Prüfen Sie die angezeigten Zeiten und die Rückmeldung beim Speichern. Andere Buchungen oder Regeln können den Abschluss weiterhin verhindern.
{{% /alert %}}

### Status beim Buchen wählen

Die Buchungsaktion zeigt den gewählten Anfangsstatus: **Definitiv buchen**, **Provisorisch buchen**, **Unverbindlich buchen** oder bei einem eigenen Statusnamen **Buchen als «[Statusname]»**. Ohne eigene Wahl wird zuerst ein erlaubter definitiver, sonst ein provisorischer, sonst ein temporärer Status vorgeschlagen. Innerhalb derselben Art gilt der erste angebotene Status.

Sind mehrere Status erlaubt, öffnet der Pfeil neben der Aktion das Menü **Buchen als** – in der Kalenderzeile, auf der vollständigen Seite und auf dem Telefon. Fehlen in der Kalenderzeile Pflichtangaben, führt dort zunächst **Weiter zu den Pflichtangaben** auf die vollständige Seite. Das Menü enthält die für Ihre Person, Ressource und Buchungszeit erlaubten Anfangsstatus in der Workflow-Reihenfolge. Wählen Sie einen Eintrag und prüfen Sie die geänderte Buchungsaktion. Die Auswahl allein bucht noch nicht. Bei genau einem Status fehlt der Pfeil; ohne erlaubten Status ist Buchen gesperrt. Prüfen Sie dann Zeitraum und Ressource.

Die Erläuterung im Menü nennt die Wirkung des Status. Bei einem provisorischen Status kann sie die benachrichtigten Gruppen nennen; daraus folgt nicht, wer bestätigen darf. Bei einem temporären Status zeigt sie eine allfällige Frist und ob die Buchung ohne Bestätigung annulliert oder gelöscht wird. **Läuft nicht ab.** bedeutet, dass keine solche Frist eingerichtet ist. Prüfen Sie nach dem Buchen den gespeicherten Status und die angezeigte Frist: Eine temporäre Reservierung ist keine definitive Bestätigung.

Statusnamen und zulässige Übergänge bestimmt Ihre Organisation. Bei gespeicherten Buchungen ergänzt ein Symbol den Statusnamen: eine Uhr für temporär, ein gestrichelter Kreis für provisorisch, ein Häkchen im Kreis für definitiv und ein Verbotszeichen für annulliert. Die Auswahl beim Erstellen ist kein allgemeiner Statuswechsel für bestehende Buchungen; dafür gelten die Bestätigungsaktionen weiter unten.

Bei einer Raumbuchung kann Ihre Standardkapazität als Personenanzahl vorgeschlagen werden. Passt sie zu keiner Bestuhlung eines Raums mit Standardbestuhlung, wird deren Mindestpersonenzahl vorgeschlagen. Fehlt Ihre Standardkapazität und müssen Sie eine Personenanzahl angeben, wird ebenfalls diese Mindestpersonenzahl vorgeschlagen. Je nach Konfiguration bleibt das Feld leer. Prüfen Sie die Anzahl vor dem Abschluss.

### Bestuhlung bei Raumbuchungen

Mit dem Recht **Darf Reservationen mit Bestuhlungen buchen** (ID 28) wählen Sie auf der vollständigen Seite im Bereich **Bestuhlung** eine der angebotenen Karten. Jede Karte zeigt den Namen und, soweit vorhanden, den Personenbereich. Ohne eigene Auswahl ist die automatisch vorgeschlagene Bestuhlung ausgewählt. **Passend zur Personenzahl gewählt.** kennzeichnet diesen Vorschlag. Das bedeutet nicht, dass ohne Bestuhlung gebucht wird.

Neben der Überschrift steht die für die aktuelle Buchung wirksame Umbauzeit vor Beginn beziehungsweise nach Ende, sobald die Zeiten vorliegen. Sie gilt für die ausgewählte Bestuhlung und wird nicht für jede ungewählte Karte separat angezeigt. Der Tagesstreifen und die Verfügbarkeitsprüfung berücksichtigen diese Vor- und Nachlaufzeiten. Ein Bestuhlungswechsel kann deshalb mit einer anderen Belegung kollidieren, obwohl Beginn und Ende der eigentlichen Buchung gleich bleiben. Wählen Sie eine andere Zeit oder Bestuhlung und prüfen Sie die Rückmeldung beim Speichern.

Bei einem Raum mit Standardbestuhlung und ohne eigene Auswahl weist cordivo der neuen Buchung automatisch eine Bestuhlung zu:

- Passt die angegebene Personenanzahl zur Standardbestuhlung, wird diese verwendet.
- Andernfalls wird die günstigste Bestuhlung gewählt, zu der die Personenanzahl passt. Bei gleichem Preis wird die kleinere Bestuhlung bevorzugt.
- Bei Räumen mit Vorlaufzeit kann eine andere passende Bestuhlung mit kürzerer Vorlaufzeit nötig sein. Beginnt die Vorlaufzeit der gewählten Bestuhlung spätestens in der aktuellen Minute, wird nach der günstigsten passenden Alternative gesucht, deren Vorlaufzeit frühestens in dieser Minute beginnt. Ohne passende Alternative bleibt die zuvor gewählte Bestuhlung bestehen. Die übrigen Buchungsregeln werden weiterhin geprüft.

Passt die Personenanzahl nicht zur Bestuhlung, verhindert die Prüfung beim Speichern den Abschluss. Korrigieren Sie die Anzahl oder wählen Sie mit dem erforderlichen Recht eine andere passende Bestuhlung. Ein Raum ohne Standardbestuhlung erhält keine automatische Bestuhlung. Wählen Sie dort eine Bestuhlung oder verwenden Sie das Recht zum Buchen ohne Bestuhlung.

Ohne eigene Zeitangabe wird bei nicht synchronisierten Ressourcen jeweils die längere Vor- beziehungsweise Nachlaufzeit aus Ressource und Bestuhlung verwendet. Die Zeiten werden nicht addiert. Bei einem Bestuhlungswechsel folgen die bisherigen Standardzeiten der neuen Bestuhlung. Abweichende eigene Zeiten bleiben erhalten. Bei synchronisierten Ressourcen verlängern diese Zeiten die Belegung nicht.

Beim Bearbeiten bleibt die gespeicherte Bestuhlung erhalten, solange Sie keine andere wählen. Eine geänderte Personenanzahl muss zu ihr passen und löst keine automatische Neuwahl aus. Ohne Bearbeitungs- oder Bestuhlungsrecht wird die Bestuhlung angezeigt, soweit Sie die vollständigen Buchungsdetails sehen dürfen. Eine inzwischen nicht mehr angebotene, gespeicherte Bestuhlung bleibt mit **Nicht mehr im Angebot** sichtbar und kann erhalten bleiben. Die Auswahl bietet keine Aktion zum Entfernen der Bestuhlung.

Eine kostenpflichtige Bestuhlung wird mit ihrem Namen und der zugewiesenen Mehrwertsteuer in den Buchungskosten berücksichtigt. Mit dem Kostenleserecht sehen Sie diese unter **Kosten**. Die Benachrichtigung an einen eingerichteten Bestuhlungsdienst wird separat von der allgemeinen Buchungs-Änderungsmail verarbeitet. Beachten Sie den Abschnitt **Benachrichtigungen und Outlook**.

### Teilnehmende hinzufügen oder entfernen

Beim Erstellen in der Kalenderzeile öffnet **Teilnehmende** das Eingabefeld direkt in der Zeile. Auf dem Telefon steht dasselbe Feld im Erstellbereich. Bei wenig Platz fasst **+N** weitere ausgewählte Personen zusammen; beim Fokussieren des Felds sehen Sie alle Einträge. Auf der vollständigen Buchungsseite verwenden Sie den Bereich **Personen**. Aus dem Panel einer vorhandenen Buchung führt **Teilnehmende** dorthin, am Computer ebenso wie auf dem Telefon. Das Detailpanel fasst die sichtbare Liste zusammen. Auf der vollständigen Seite stehen die einzelnen Namen beziehungsweise E-Mail-Adressen.

1. Wählen Sie **Teilnehmende hinzufügen** und geben Sie mindestens zwei Zeichen eines Namens oder einer E-Mail-Adresse ein. Die Suche findet aktive Personen. In der Kalenderzeile und im Erstellbereich auf dem Telefon erscheinen höchstens fünf Vorschläge. Prüfen Sie bei gleichen Namen die angezeigte Abteilung, Firma oder E-Mail-Adresse, soweit vorhanden.
2. Wählen Sie die gewünschte Person. Für eine externe Person geben Sie die vollständige E-Mail-Adresse ein und wählen in der Kalenderzeile beziehungsweise auf dem Telefon **[Adresse] als Gast hinzufügen**, auf der vollständigen Seite **Als externe Person einladen**. Ein eingegebener Suchtext allein fügt niemanden hinzu. Nach der Auswahl ist das Suchfeld leer; in der Zeile und im Erstellbereich auf dem Telefon können Sie direkt die nächste Person eingeben.
3. Entfernen Sie bei Bedarf einen Eintrag über das Kreuz neben dem Namen. Einträge, die in der klassischen ROOMS-Oberfläche nur mit Namen und ohne Person oder E-Mail-Adresse gespeichert wurden, haben hier kein Kreuz. Bearbeiten Sie diese in der klassischen Oberfläche.
4. Prüfen Sie **Personen**, **davon extern** und die Bestuhlung. Wählen Sie erst danach die angebotene Buchungsaktion beziehungsweise **Speichern**. Hinzufügen und Entfernen ändern zunächst nur den Entwurf. Die Einladungen werden nach erfolgreichem Speichern gemäss **Benachrichtigungen und Outlook** verarbeitet.

Fügen Sie die organisierende Person nicht zusätzlich als Teilnehmende hinzu. Die organisierende Person und das Postfach eines synchronisierten Raums werden von ROOMS verwaltet. Dieselbe Person oder externe Adresse darf nicht doppelt eingeladen werden. Auch eine externe Adresse, die bereits einer ausgewählten Person gehört, wird beim Speichern abgewiesen. Korrigieren Sie ungültige Adressen oder inzwischen inaktive beziehungsweise nicht mehr vorhandene neu gewählte Personen anhand der Feldmeldung.

In der Kalenderzeile und im Erstellbereich auf dem Telefon verändert das Hinzufügen oder Entfernen von Teilnehmenden die Gesamtanzahl **Personen** nicht. Auf der vollständigen Seite kann dies Ihre persönliche Einstellung **Anzahl Personen anhand von Teilnehmer berechnen** übernehmen: Gezählt werden die Liste und die organisierende Person. Beim ersten Hinzufügen wird eine leere Anzahl auf zwei gesetzt. Weitere Anpassungen erfolgen, wenn die bisherige Anzahl um genau eins von der neuen Listengrösse einschliesslich organisierender Person abweicht. Eine anders gesetzte Anzahl bleibt bestehen. Ohne diese Einstellung bleibt die Anzahl unverändert. **davon extern** wird durch die Liste nicht automatisch angepasst. Prüfen Sie beide Zahlen selbst.

**Die Teilnehmeranzahl ist für die gewählte Bestuhlung zu gross.** ist ein Hinweis zur Liste einschliesslich organisierender Person und verhindert für sich allein das Speichern nicht. Die separat eingegebene Gesamtanzahl **Personen** muss trotzdem zur Bestuhlung passen. Eine entsprechende Prüfmeldung beim Speichern erfordert eine Korrektur der Anzahl oder Bestuhlung.

### Kombinierte und verknüpfte Räume

Buchen Sie einen kombinierten Raum, werden seine verknüpften Teilräume als Unterbuchungen mitgebucht. Bei der Buchung eines Teilraums werden auch die zugehörigen übergeordneten Raumkombinationen belegt. Ein anderer Teilraum kann weiterhin separat buchbar sein. Die Verknüpfungen werden eine Ebene nach unten und oben berücksichtigt, nicht beliebig tief.

Für neu hinzukommende Unterbuchungen benötigen Sie Buchungsrechte auf den betroffenen Ressourcen. Auch deren Buchungsregeln werden geprüft. Eine Ablehnung nennt den betroffenen Raum. Das kann auch beim Speichern einer älteren Buchung geschehen, wenn fehlende Unterbuchungen ergänzt werden.

Öffnen Sie eine Unterbuchung in der Liste oder im Kalender, zeigt PlaceMe die Hauptbuchung, sofern Sie diese sehen dürfen. Im Kalender gilt das auch dann, wenn die Zeile der Hauptbuchung ausgefiltert oder noch nicht geladen ist. Prüfen Sie deshalb deren Ressource und Buchungsnummer. Ohne Zugriff auf die Hauptbuchung bleibt die Unterbuchung schreibgeschützt sichtbar und bietet keine eigenen Aktionen. Das gilt auch für kombinierte Buchungen, die in der klassischen ROOMS-Oberfläche erstellt wurden. Unterbuchungen können Sie hier nicht unabhängig bearbeiten oder verschieben.

{{% alert title="Änderungen betreffen die Raumkombination" color="warning" %}}
Zeit, Titel, private Kennzeichnung und die allgemeinen beziehungsweise vertraulichen Bemerkungen werden von der Hauptbuchung auf ihre Unterbuchungen übertragen. Freigeben und Terminieren beenden auch die Unterbuchungen. Annullieren und No-show annullieren sie mit. Einchecken der Hauptbuchung kennzeichnet auch ihre Unterbuchungen als eingecheckt. Eine gesperrte Unterbuchung verhindert diesen Check-in. Prüfen Sie vor einer Aktion, ob sie für die ganze Kombination gelten soll.
{{% /alert %}}

### Pflichtangaben, Kosten und Kostenträger

Verlangt der Raum weitere Informationen, führt **Weiter zu den Pflichtangaben** aus der Kalenderzeile auf die vollständige Seite. Im Erstellbereich auf dem Telefon erscheinen **Pflichtangaben**. Auf der vollständigen Seite stehen unter **Weitere Angaben** die Klassifikationen und Fragen des Raums. Eine Klassifikation kann zusätzliche Fragen oder mitzubuchende Ressourcen auslösen. Ergänzen Sie **(Pflicht)** beziehungsweise die für den gewählten Status geltenden **(Pflicht ab …)** vor dem Abschluss. Fehlende Angaben werden auch beim Bearbeiten geprüft. Bereits beantwortete Fragen können nach ihrer Änderungsfrist schreibgeschützt sein; beachten Sie **Nicht mehr änderbar seit …**.

Mit **Darf Kosten sehen** (ID 154) zeigt das Panel eine Kostenzusammenfassung, die vollständige Seite unter **Kosten** die Positionen und das **Total**. Die Beträge werden berechnet, nicht manuell eingegeben. Änderungen an Zeit, Personenanzahl, Bestuhlung oder Bestellungen können die Kosten verändern. **Kostenlos** steht für einen berechneten Nullbetrag; **–** ist kein Nachweis einer kostenlosen Buchung. Eine Kostenvorschau bestätigt weder Verfügbarkeit noch erfolgreiche Buchung. Bei **Nach Verbrauch** ist die Summe vor Erfassung des Verbrauchs vorläufig; sie kann zunächst eine Einheit enthalten.

Mit **Darf Kostenträger anpassen** (ID 82) wählen Sie unter **Kosten → Kostenträger** einen angebotenen Kostenträger. Suchen Sie nach Nummer, Beschreibung oder Geschäftsbereich. **Kostenträger aufteilen** ergänzt weitere Zeilen. Bei mehreren verrechenbaren Anteilen muss deren Summe **100 %** ergeben. **Nicht verrechenbar** kennzeichnet entsprechend eingerichtete Kostenträger. Ohne Kostenleserecht können Sie mit dem Anpassungsrecht die Zuordnung ändern, ohne Beträge zu sehen. Bei vorhandenen Buchungen gelten zusätzlich die Bearbeitungsrechte.

### Catering und Services bestellen

Für Bestellungen benötigen Sie **Darf Reservationen mit Bestellungen buchen** (ID 68). Angebot, Benutzergruppe, Gültigkeit, Vorbereitungs- und Vorankündigungsfristen sowie Arbeitszeiten der Dienstleister bestimmen, was bestellbar ist. Vorhandene Bestellungen können ohne Bestellrecht schreibgeschützt sichtbar bleiben, sofern Sie die vollständigen Buchungsdetails sehen dürfen.

1. Öffnen Sie beim Erstellen **Catering** aus der Kalenderzeile beziehungsweise auf dem Telefon aus dem Erstellbereich. Sie gelangen zum Bereich **Catering und Services** auf der vollständigen Seite. Bei einer vorhandenen Buchung wählen Sie zuerst **Bearbeiten** und dort **Catering und Services**. Die Catering-Zeile im Detailpanel ist eine Zusammenfassung, kein Bestellformular.
2. Wählen Sie **Produkt hinzufügen**, suchen Sie ein Produkt und wählen Sie **Hinzufügen**. Prüfen Sie Menge und angebotene Optionen. Bei einem Paket sind die Optionen zunächst ausgewählt. Bestätigen Sie die Auswahl mit **1 Produkt hinzufügen** beziehungsweise **… Produkte hinzufügen**.
3. Prüfen Sie die Bestellzeilen und **Lieferung um …**. Mit **Ändern** bearbeiten Sie die gemeinsame **Zeit** und den **Ort**, mit **Fertig** schliessen Sie diese Felder. Bestehende abweichende Liefer- oder Abholangaben bleiben je Zeile sichtbar. Leeren Sie **Ort**, gilt wieder der Standardlieferort des Raums.
4. Prüfen Sie Preise, Fristen und die angezeigten Folgen. Wählen Sie erst danach die Buchungsaktion beziehungsweise **Speichern**. Die Produktauswahl allein bestellt noch nichts.

**Bestellbar bis …** nennt eine geltende Frist. **Nicht mehr änderbar seit …** sperrt die betreffenden Änderungen auch dann, wenn die Seite offen bleibt. Eine Sperre kann das Hinzufügen oder Ändern verhindern, während das Entfernen vor der Lieferung weiterhin zulässig ist. Beachten Sie die tatsächlich angebotenen Aktionen. Eine zusätzliche Catering-Sperrzeit kann am Vortag beginnen und auch zeitunabhängige Bearbeitungsrechte begrenzen. **Gehört zu …** kennzeichnet zwingend mitbestellte Leistungen; diese lassen sich nicht frei ändern oder entfernen. **In Rooms angepasst** kennzeichnet hier schreibgeschützte, in der klassischen Oberfläche individuell angepasste Positionen.

Bei einer Zeitänderung zeigt die Vorschau die neue Lieferung. Nach einer geänderten Personenanzahl bleiben bestehende Bestellmengen erhalten: **Die Mengen der Bestellung bleiben, wie sie sind.** Prüfen und korrigieren Sie diese selbst. Nicht jede Zeile übernimmt eine geänderte Lieferzeit oder einen neuen Ort; gesperrte und zwingende Leistungen behalten ihre jeweiligen Vorgaben.

{{% alert title="Genehmigung und Absage beachten" color="warning" %}}
Braucht die Bestellung eine neue Genehmigung, beispielsweise wegen einer eingerichteten Kostengrenze, weist cordivo den Abschluss mit einem Hinweis auf ROOMS ab. Verwenden Sie dafür die klassische Oberfläche. Annullieren und No-show annullieren auch die Bestellung; es können Gebühren entstehen. Prüfen Sie die Folgen im Dialog. Dienstleistermails hängen von Status, Genehmigung, Vorlagen und bereits ausstehenden Nachrichten ab. Eine gespeicherte Absage ist kein Nachweis einer bereits zugestellten Mail.
{{% /alert %}}

### Zusatzressourcen dazu buchen

Unter **Dazu buchen** wählen Sie Equipment und andere angebotene Zusatzressourcen. **Nach Typ** benötigt **Darf Reservationen mit Ressourcen buchen (aggregiert)** (ID 86), **Einzeln** benötigt **Darf Reservationen mit Ressourcen buchen (einzeln)** (ID 25). Zusätzlich gelten die Buchungsrechte für Ressourcentyp und Ressource sowie bei einer vorhandenen Buchung das Bearbeitungsrecht.

- **Nach Typ:** Prüfen Sie die gewünschte Menge und die freie Anzahl. Fixe Ausstattung ist in der Menge enthalten.
- **Einzeln:** Wählen Sie die konkrete verfügbare Ressource und prüfen Sie Standort und Belegung.
- **Fest im Raum** kennzeichnet fixe Ausstattung. **Wegen …** kennzeichnet eine über eine Klassifikation mitgebuchte Ressource. Solche geschützten Einträge lassen sich nicht wie frei gewählte Zusatzressourcen entfernen.

Die Auswahl wird erst mit der Buchung gespeichert. Reichen bei einer Mengenbestellung die freien Stücke nicht aus, kann die Raumbuchung mit der verfügbaren Teilmenge erfolgreich sein. Prüfen Sie deshalb auch nach dem Abschluss den Hinweis auf fehlende Stücke und die tatsächlich gebuchten Ressourcen. Eine erfolgreiche Raumbuchung bestätigt nicht die volle gewünschte Equipmentmenge.

Wird eine bereits mitgebuchte Ressource am geänderten Zeitpunkt belegt, zeigt die Vorschau die betroffenen Ressourcen. Mit vollständigen Detailrechten nennt sie die Namen, sonst nur die Anzahl. Prüfen Sie **Ohne … speichern** beziehungsweise **Ohne die belegten Ressourcen speichern**, bevor Sie deren Entfernung bestätigen. Das gilt auch bei einem gleichzeitigen Raum- und Zeitwechsel. Die übrigen übernehmbaren Zusatzressourcen bleiben mitgebucht. **Zeit behalten** stellt bei einer reinen Zeitänderung die gespeicherten Zeiten wieder her. Eine neu gewählte, belegte Ressource müssen Sie dagegen vor dem Speichern entfernen oder durch eine verfügbare ersetzen. Annullieren und No-show geben auch die mitgebuchten Ressourcen frei.

### Personen, Anhänge und Erinnerungen ergänzen

Unter **Personen → Organisierende Person** wählen Sie mit **Darf Reservationen mit Organisator buchen** (ID 62) auf der Ressource eine angebotene aktive Person. Ohne dieses Recht ist das Feld schreibgeschützt. Ohne **Darf Organisator aus allen Benutzerkreisen sehen** (ID 136) ist die Auswahl auf Ihre Benutzerkreise beschränkt. Auch die übrigen Buchungs- und Drittpersonenrechte werden beim Speichern geprüft.

{{% alert title="Organisatorwechsel betrifft Outlook und Einladungen" color="warning" %}}
Bei einer mit Outlook abgeglichenen Buchung wird die Absage des bisherigen Termins veranlasst. Ob für die neue organisierende Person ein neuer Termin angelegt wird, hängt von deren Synchronisationseinstellungen und der Ressource ab. Teilnehmende können Absage und neue Einladung erhalten. Prüfen Sie Person und Hinweis vor dem Speichern und danach den Kalenderstand; ein Organisatorwechsel ist keine reine Namenskorrektur.
{{% /alert %}}

Mit **Darf Person Verantwortlicher auf Reservation setzen** (ID 117) suchen oder entfernen Sie die **Verantwortliche Person**. **Wie organisierende Person** bedeutet, dass keine abweichende verantwortliche Person gesetzt ist. Eine gewählte verantwortliche Person ersetzt die organisierende Person als Empfängerin der entsprechend eingerichteten Buchungsbenachrichtigungen; sie übernimmt damit nicht automatisch den Outlook-Termin.

Unter **Anhänge** wählen Sie **Datei hinzufügen** oder ziehen Dateien in den Bereich. Beachten Sie die angezeigte Grenze je Datei und verwenden Sie eindeutige Dateinamen, auch bei unterschiedlicher Gross-/Kleinschreibung. Das Kreuz entfernt einen Anhang beim nächsten erfolgreichen **Speichern**, nicht schon beim Anklicken. Prüfen Sie vor dem Speichern, welche Dateien entfallen. Herunterladen hat eine eigene Berechtigungsprüfung; eine sichtbare Dateibezeichnung allein erlaubt nicht automatisch den Download.

Unter **Erinnerungen** kann **Erinnerung in Outlook** angeboten werden. **Wie in Outlook eingestellt** lässt die persönliche Outlook-Vorgabe gelten und schaltet Erinnerungen nicht ausdrücklich aus. Mit **Darf Reminder sehen** (ID 147) können Sie bei eingerichteter Standortvorlage eine **Erinnerung per Mail** ergänzen: **Erinnerung hinzufügen**, Zeitpunkt, **An**, **Text**, dann **Hinzufügen** und die Buchung speichern. Bereits verschickte Einträge sind als **Verschickt** gekennzeichnet und nicht entfernbar. Zum Entfernen einer noch ausstehenden gespeicherten Mailerinnerung benötigen Sie zusätzlich das globale Recht **Darf Reservationen und Serien löschen (eigene)** (ID 52), wenn Sie organisieren; andernfalls benötigen Sie **Darf Reservationen und Serien löschen (fremde)** (ID 53) auf der Ressource. Versand erfolgt im Hintergrund.

### Verfügbare Angaben und Grenzen

Die vollständige Seite bietet Titel, Beschreibung, Datum und Uhrzeit, Personenanzahlen, eine private Kennzeichnung und Bemerkungen für Teilnehmende. Vertrauliche Bemerkungen sowie Vor- und Nachlaufzeiten sind von Ihren Rechten und der Ressource abhängig. Bei synchronisierten Ressourcen stehen keine Vor- und Nachlaufzeiten zur Eingabe zur Verfügung.

Die vollständige Seite erreichen Sie aus der Kalenderzeile über **Mehr Angaben**, aus dem Panel über **Alle Angaben** beziehungsweise **Bearbeiten**. Sie bietet ausserdem **Dazu buchen**, **Catering und Services**, **Kosten**, **Erinnerungen**, **Weitere Angaben** und **Anhänge**, soweit Ihre Rechte und die Ressource diese anbieten. Mit **Folgt** gekennzeichnete Bedienelemente, insbesondere für Serien, sind deaktiviert.

cordivo verarbeitet Einzelbuchungen einschliesslich kombinierter Räume, Bestuhlungen, Bestellungen, Zusatzressourcen und Anhängen im beschriebenen Umfang. Verwenden Sie die klassische ROOMS-Oberfläche für Serien sowie Buchungen mit Zahlungen, Anlass, Lektion oder Teams-Meeting. Auch persönliche Ressourcen, Organisatoren mit Google-Synchronisation und bestimmte Ressourcen- oder Installationseinstellungen können den Abschluss ausschliessen. Temporäre Reservierungen haben eigene Bestätigungsaktionen und sind nicht wie eine gewöhnliche provisorische oder definitive Buchung bearbeitbar. Die Meldung beim Speichern nennt den Grund einer Ablehnung.

### Raum im Buchungsentwurf wechseln

Öffnen Sie auf der vollständigen Seite neben dem Raum **Wechseln** und wählen Sie einen angebotenen freien Raum. **Details** zeigt nur die Rauminformation. Prüfen Sie vor dem Übernehmen die angekündigten Folgen und bestätigen Sie gegebenenfalls **Raum wechseln**. **Raum behalten** schliesst die Rückfrage ohne Wechsel.

Allgemeine Eingaben und Anhänge bleiben erhalten. Bestuhlung, Klassifikationen und Antworten, Bestellungen und Zusatzressourcen werden nur übernommen, soweit der neue Raum sie zulässt. Unpassende Angaben oder Leistungen können entfallen, Equipmentmengen reduziert und neue Vorgaben ergänzt werden. Prüfen Sie deshalb Bestuhlung, Pflichtangaben, Status und Kosten nach dem Wechsel erneut. Die Raumauswahl allein erstellt keine Buchung; schliessen Sie erst nach dieser Prüfung mit der Buchungsaktion ab. Für bereits gespeicherte Buchungen gelten zusätzlich die Regeln unter **In einen anderen Raum wechseln**.

## Buchung bearbeiten oder annullieren

1. Öffnen Sie die Buchung unter **Buchungen**, im Kalender unter **Buchen** oder auf **Heute**.
2. Prüfen Sie Buchungsnummer, Ressource, Zeitraum und Status im Panel. Unter dem Titel stehen der Status und gegebenenfalls **Eingecheckt** oder **No-show** sowie die Buchungsnummer. Wählen Sie oben rechts das Stiftsymbol **Bearbeiten**, um die vollständige Seite zu öffnen. Wenn Sie die vollständigen Buchungsdetails sehen, aber nicht bearbeiten dürfen, öffnet dort **Alle Angaben** die schreibgeschützte Seite. Bei eingeschränkten Leserechten fehlt diese Aktion. Sichtbar bleiben nur die erlaubten Angaben, beispielsweise unter **Belegt**.
3. Ändern Sie die verfügbaren Angaben und wählen Sie **Speichern**. Danach erscheint wieder das Detailpanel. Mit **Zurück** kehren Sie zur Ausgangsseite zurück. Die angebotenen Aktionen ersetzen die Prüfung beim Speichern nicht. Auch eine sichtbare Aktion kann für eine nicht unterstützte Buchung abgewiesen werden.

Zum Annullieren öffnen Sie oben rechts im Panel das Dreipunktmenü **Weitere Aktionen** und wählen **Buchung annullieren**. Auf der vollständigen Seite steht dasselbe Menü neben dem Titel. Prüfen Sie die angezeigte Buchung, allfällige Annullierungskosten sowie die Folgen für Bestellungen und Zusatzressourcen, bevor Sie **Buchung annullieren** bestätigen. **Behalten** schliesst die Rückfrage ohne Annullierung. Bearbeiten und Annullieren richten sich nach den jeweiligen Buchungsrechten. Eine direkt geöffnete Buchungsseite lässt sich neu laden. Ungespeicherte Feldeingaben sind dadurch nicht gesichert.

Vor **Speichern** prüfen Sie **Status nach dem Speichern** und die Folgen der Änderung. Eine bisher definitive Buchung kann erneut provisorisch werden, beispielsweise nach einer Zeit- oder Ressourcenänderung. Dann kann die Aktion **Ändern und neu bestätigen lassen** heissen. Das Speichern ist in diesem Fall keine definitive Bestätigung.

### In einen anderen Raum wechseln

Auf der vollständigen Bearbeitungsseite öffnen Sie beim Raum **Wechseln** und wählen einen angebotenen freien Raum. **Details** öffnet die Rauminformation; es wechselt den Raum nicht. Kann die Auswahl nicht geprüft werden, verwenden Sie **Erneut prüfen** unter dem Raum. Ein Ziehen auf eine andere Raumzeile kann den Wechsel unmittelbar speichern; bei anzuzeigenden Folgen erscheint eine Rückfrage, bei fehlenden Pflichtangaben die vollständige Seite.

Prüfen Sie die Vorschau vor **Raum wechseln und speichern**: Der neue Raum kann eine andere Bestuhlung, Vor- und Nachlaufzeiten, einen anderen Status, Kosten, Klassifikationen und Pflichtfragen haben. Seine Raumverknüpfungen werden berücksichtigt. Nicht mehr passende Bestellungen und mobiles Equipment ausserhalb des neuen Standortbereichs können entfallen, automatische Leistungen des neuen Raums hinzukommen. Ein manuell gesetzter Tarif kann durch die Standardberechnung ersetzt werden.

{{% alert title="Raumwechsel kann Eingaben und Zusatzbuchungen verwerfen" color="warning" %}}
Ungespeicherte Änderungen an **Dazu buchen** und **Catering und Services** werden beim Raumwechsel verworfen. Die Catering-Bearbeitung ist während des Raumwechsels schreibgeschützt. Kontrollieren Sie alle angekündigten Folgen und ergänzen Sie die neuen Pflichtangaben, bevor Sie **Raum wechseln und speichern** wählen. **Raum behalten** nimmt die Raumauswahl zurück und stellt diese Entwurfseingaben wieder her. Nach erfolgreichem Speichern prüfen Sie Raum, Status, Bestellungen, Zusatzressourcen und gegebenenfalls Outlook erneut.
{{% /alert %}}

Sind mitgebuchte Ressourcen zur neuen Zeit belegt, bietet die Seite stattdessen **Ohne … speichern** an. Damit speichern Sie den Wechsel ohne diese Ressourcen. Ohne vollständige Detailrechte nennt die Folgenprüfung nur deren Anzahl, auch bei Ressourcen, die am neuen Ort entfallen. Prüfen Sie die Folgen trotzdem vor dem Bestätigen.

## Buchung bestätigen, ablehnen oder an die Bestätigung erinnern

Öffnen Sie die Buchung im Detailpanel oder auf der vollständigen Seite. Mit vollständigen Leserechten und den passenden Bearbeitungs- und Statusrechten werden **Definitiv bestätigen** oder bei geeigneten temporären Reservierungen **Provisorisch bestätigen** angeboten. Prüfen Sie zuerst die gespeicherten Angaben und **Status danach**. Die Bestätigungsaktion wird direkt ausgeführt, ohne weitere Rückfrage. Ungespeicherte Feldeingaben werden dabei nicht übernommen; speichern Sie gewünschte Änderungen vorher.

**Ablehnen und annullieren** benötigt zusätzlich das Annullierungsrecht und öffnet **Buchung ablehnen?**. Sie können eine **Mitteilung zur Absage** erfassen. Prüfen Sie vor der Bestätigung auch mögliche Gebühren und Zusatzbuchungen: Ablehnen annulliert die Buchung und ist nicht bloss eine Rückgabe zur Überarbeitung. Dieser Dialog zeigt keine eigene Kostenvorschau.

Unter **Aufgaben → Zu bestätigen** sehen Sie die Buchungen, die Sie bestätigen dürfen. **Meine Gruppen** grenzt die Liste ein. Prüfen Sie die Einträge vor einer Sammelbestätigung über **Alle … bestätigen** beziehungsweise **… bestätigen**. Einzelne Bestätigungen können fehlschlagen, während andere erfolgreich sind; prüfen Sie danach die Rückmeldungen und verbleibenden Einträge.

Als erstellende oder organisierende Person können Sie bei einer noch nicht beendeten, ausstehenden Buchung die zuständigen Workflow-Gruppen erinnern, sofern Sie nicht selbst bestätigen dürfen und die Benachrichtigung eingerichtet ist. Die Aktion heisst **[Gruppenname] erinnern** oder **An die Bestätigung erinnern**. **Heute erinnert** bedeutet, dass für den aktuellen lokalen Tag bereits eine Erinnerung berücksichtigt ist. Die Erinnerung bestätigt die Buchung nicht und verlängert keine temporäre Reservierungsfrist.

## Buchung im Kalender verschieben

Ziehen Sie eine bearbeitbare Buchung auf eine andere Uhrzeit oder verändern Sie ihre Ränder, um Beginn oder Ende anzupassen. Beim Ziehen auf eine andere Raumzeile können Sie Raum und Zeit gemeinsam ändern. Ohne anzuzeigende Folgen kann der Wechsel unmittelbar speichern. Erscheint **Raum wechseln?**, prüfen Sie die Folgen und bestätigen Sie **Raum wechseln** beziehungsweise bei belegten Zusatzressourcen **Ohne … speichern**. **Raum behalten** verwirft diesen Vorschlag; die Buchung bleibt am bisherigen Ort und zur bisherigen Zeit. Fehlen Pflichtangaben, öffnet sich die vollständige Seite für den Raumwechsel. Ergänzen und speichern Sie dort wie unter **In einen anderen Raum wechseln** beschrieben.

{{% alert title="Vor dem Ziehen die Folgen prüfen" color="warning" %}}
Verschieben und Grössenänderung innerhalb desselben Raums können unmittelbar speichern. Ändert sich der Status oder betrifft die Änderung Catering beziehungsweise belegte Zusatzressourcen, erscheint zuerst **Zeit ändern?** mit den Folgen. **Zeit behalten** verwirft den Zeitvorschlag. Prüfen Sie insbesondere eine erneute Bestätigung und entfernte Zusatzressourcen. Die Erfolgsmeldung kann **Rückgängig** anbieten; bei einem Raumwechsel oder beim Entfernen belegter Zusatzressourcen wird dies nicht angeboten. Auch eine Rücknahme muss die aktuellen Buchungsregeln erfüllen.
{{% /alert %}}

Bei eingeschränkten Detailrechten nennt die Folgenprüfung für Zusatzressourcen nur Anzahlen statt Namen. Meldet cordivo **Inzwischen ist mehr belegt, als du bestätigt hast.**, prüfen Sie eine erneut angebotene Folgenprüfung und bestätigen Sie nur, wenn diese gewollt ist. Wird stattdessen **Neu prüfen** angeboten, verwenden Sie diese Aktion. Führt sie nicht zu einer aktualisierten Rückfrage, öffnen Sie die Buchung separat und bearbeiten Sie Raum und Zeit dort. Nach dem Speichern weist ein Dreieck auf fehlende Zusatzressourcen hin: Die Raumbuchung ist dabei gespeichert, aber nicht vollständig mit dem gewünschten Equipment versorgt.

Scheitert das Speichern oder wurde die Buchung inzwischen geändert, öffnet sich die vollständige Buchungsseite mit dem vorgeschlagenen Zeitraum und der Meldung. Prüfen und korrigieren Sie die Angaben. Wenn Sie die Seite ohne erfolgreiches Speichern verlassen, wird der Vorschlag verworfen und der Kalender neu geladen.

## Einchecken, freigeben, terminieren oder No-show melden

Öffnen Sie die Buchung unter **Buchungen**, im Kalender unter **Buchen** oder auf **Heute**. Im Panel und auf der vollständigen Seite stehen die zulässigen Aktionen. Diese können auch verfügbar sein, wenn Sie die Buchungsfelder nicht bearbeiten dürfen. Gesperrte oder annullierte Buchungen bieten diese Aktionen nicht an.

**Einchecken**, **Freigeben** und **Terminieren** stehen unten, jeweils nur während ihres zulässigen Zeitfensters. Ohne eine dieser Aktionen hat das Detailpanel keine Fusszeile. **No-show** finden Sie zusammen mit **Buchung annullieren** unter **Weitere Aktionen** beim Titel. Das Menü zeigt nur zulässige Einträge und fehlt, wenn keiner verfügbar ist. Auf dem Telefon gilt dieselbe Aufteilung im Buchungsbereich am unteren Bildschirmrand.

Die Aktionen beziehen sich auf die zuletzt gelesene, gespeicherte Buchung, nicht auf Ihre ungespeicherten Feldeingaben. Speichern Sie gewünschte Feldänderungen vorher und prüfen Sie Ressource, Titel und Zeitraum in der Rückfrage. Die Prüfung kann eine Aktion auch dann ablehnen, wenn die Schaltfläche sichtbar ist. Beachten Sie die Meldung und prüfen Sie den aktualisierten Buchungsstand, bevor Sie es erneut versuchen.

### Einchecken

Mit **Einchecken** bestätigen Sie, dass die Buchung genutzt wird. Die Ressource muss Check-in verwenden und die organisierende Person muss einer Benutzergruppe mit Check-in für Einzelbuchungen angehören. Sie müssen die vollständigen Buchungsdetails sehen dürfen. Das Check-in-Zeitfenster richtet sich nach dem Beginn und den auf der Ressource eingestellten Vorausminuten. Es endet mit dem Buchungsende.

Ein bereits bestätigter Check-in kann nicht erneut ausgeführt werden. Ist für die organisierende Person **Check-In-Delegation erzwingen** (ID 169) wirksam, muss eine andere Person einchecken. Ein allgemeines Bearbeitungsrecht oder ein zusätzliches Check-in-Recht ist dafür nicht erforderlich.

Wählen Sie **Einchecken**. Danach zeigt die Maske **Eingecheckt** an. Im Scheduling-Kalender kennzeichnet ein Symbol die eingecheckte Buchung, soweit deren Details für Sie sichtbar sind. Für Installationen, in denen der Check-in eine angebundene Türsteuerung auslöst, verwenden Sie die klassische ROOMS-Oberfläche. cordivo zeigt dazu eine Meldung.

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

Allgemeine Rückmeldungen erscheinen am Computer unten links, auf dem Telefon oberhalb der unteren Navigation beziehungsweise der festen Buchungsaktionen. Sie unterscheiden drei Ergebnisse:

| Zeichen | Bedeutung |
| --- | --- |
| Häkchen | Die Aktion ist abgeschlossen. |
| Dreieck | Die Aktion ist abgeschlossen, aber mit Einschränkung, beispielsweise fehlendem Equipment. Prüfen Sie die Buchung und die fehlenden Leistungen. |
| Kreis mit Ausrufezeichen | Die Aktion wurde nicht abgeschlossen. Beachten Sie den Grund und die angebotene Korrektur. |

Fehler, Teilerfolge und Reservierungsmeldungen mit Ablaufhinweis bleiben bis zum Schliessen über das Kreuz oder eine Meldungsaktion stehen. Gewöhnliche Erfolgsmeldungen verschwinden üblicherweise nach fünf Sekunden, mit **Rückgängig** nach acht Sekunden; beim Zeigen darauf oder bei Tastaturfokus pausiert die Zeit. Eine temporäre Reservierung ohne Ablaufhinweis verwendet ebenfalls die gewöhnliche Erfolgsmeldung. Im eingeklappten Stapel sehen Sie höchstens drei Meldungen. **… weitere Meldungen** öffnet die zurückgehaltenen Einträge. Das Schliessen einer Meldung annulliert keine Buchung; eine darin angebotene Aktion wie **Rückgängig** kann dagegen eine gespeicherte Buchung verändern.

Feld- und Seitenfehler stehen direkt bei der betroffenen Eingabe beziehungsweise über dem Formular. Ein abgewiesenes Ziehen im Kalender zeigt seinen Grund am Ziel der Geste. Scheitert eine Schnellbuchung unter **Jetzt frei**, steht der Grund beim Raum; über **Andere Zeit** wechseln Sie zur Eingabe.

- **Ungültige Angaben:** Prüfen Sie die Zusammenfassung und die markierten Felder. Die Meldung erklärt die verletzte Buchungsregel, beispielsweise eine überschrittene Höchstdauer oder eine unpassende Personenanzahl. Meldungen ohne zugehöriges Eingabefeld stehen in der Zusammenfassung. Eine Feldmeldung verschwindet beim Ändern des Felds. Ob die Korrektur genügt, wird beim nächsten Speichern geprüft.
- **Öffnungszeiten oder Vorbereitungsfrist verletzt:** Wählen Sie einen späteren Beginn beziehungsweise einen erlaubten Zeitraum oder eine andere Ressource. Die Öffnungszeiten werden auch beim Speichern unveränderter Zeiten geprüft. Ein gespeicherter Termin kann deshalb nach einer Änderung der Öffnungszeiten eine Korrektur erfordern, sofern Ihnen das Recht zum Buchen ausserhalb der Öffnungszeiten fehlt.
- **Zeitraum inzwischen belegt oder gesperrt:** Auf der vollständigen Seite nennt die Meldung den betroffenen Raum und Zeitraum. Sie können unter **Zeit ändern** die Uhrzeit anpassen oder einen vorgeschlagenen freien Raum mit **Nehmen** auswählen. **Alle … freien Räume** öffnet die weitere Auswahl; auch **Wechseln** neben dem Raum steht zur Verfügung. Die Vorschläge berücksichtigen Zeitraum, Personenanzahl, Ressourcentyp und die anwendbaren Suchfilter. Prüfen Sie vor dem Wechsel die genannten Angaben oder Leistungen, die der andere Raum nicht übernehmen kann. Die Auswahl speichert noch nicht: Prüfen Sie die aktualisierten Angaben und wählen Sie die Buchungsaktion beziehungsweise **Raum wechseln und speichern**. Ohne passenden Vorschlag ändern Sie Zeit oder Suchkriterien. In der Kalenderzeile steht nur die Meldung; wählen Sie eine andere freie Stelle oder öffnen Sie die vollständige Seite. Auf dem Telefon führt **Andere Zeit wählen** zurück zur Zeitauswahl; über **Alle Angaben** erreichen Sie die Raumvorschläge auf der vollständigen Seite.
- **Buchung inzwischen geändert:** Bei einem Bearbeitungskonflikt ist Speichern gesperrt. Der Hinweis nennt, soweit verfügbar, Zeitpunkt und Person der letzten Änderung. Das schliesst Änderungen aus der klassischen ROOMS-Oberfläche ein. Prüfen Sie die angezeigten Änderungen und wählen Sie **Aktuelle Version laden**. Das ersetzt Ihre ungespeicherten Eingaben. Erfassen Sie Ihre Änderungen danach erneut.
- **Bearbeitung in ROOMS oder Übernahme aus Outlook:** Warten Sie, bis die andere Bearbeitung beziehungsweise Synchronisation abgeschlossen ist, und versuchen Sie es erneut.
- **Aktion nicht unterstützt:** Beachten Sie den angegebenen Grund und verwenden Sie gegebenenfalls die klassische ROOMS-Oberfläche.

Bleibt eine Bestätigung aus oder tritt ein Verbindungsfehler auf, prüfen Sie vor einem erneuten Buchungsversuch die Buchungsliste. So vermeiden Sie eine doppelte Buchung, falls der erste Versuch bereits gespeichert wurde.

## Benachrichtigungen und Outlook

Bestätigungen, Änderungs- und Annullierungsmails sowie Erinnerungen richten sich nach den eingerichteten Benachrichtigungen und Empfängereinstellungen. Nicht jede Feldänderung löst eine Änderungsmail aus. Eine reine Titeländerung genügt dafür beispielsweise nicht. Auch die Bestuhlungswahl allein ist kein Auslöser. Ändern sich dabei die Gesamtkosten oder weitere relevante Angaben, kann dennoch eine Buchungs-Änderungsmail entstehen.

Wird die Buchung in den Exchange-Kalender der organisierenden Person übernommen, verarbeitet Exchange die Einladungen. Wird nur die Teilnehmendenliste eines bereits verknüpften Termins geändert, richten sich die Besprechungsanfragen an die hinzugefügten beziehungsweise entfernten Teilnehmenden. Ändern Sie auch Beginn, Ende oder Titel, kann die Aktualisierung alle Teilnehmenden erreichen.

Ohne Übernahme in diesen Kalender veranlasst cordivo für neu hinzugefügte Teilnehmende eine ROOMS-Mail mit Kalenderdatei, sofern die Buchung definitiv ist und die passende Teilnehmenden-Benachrichtigung mit Vorlage eingerichtet ist. Bei einer neuen definitiven Buchung ist dies die Teilnehmendenbestätigung, bei einer Änderung die Teilnehmenden-Änderungsmail. Bei provisorischen Buchungen wird diese Mail nicht allein durch das Hinzufügen versendet. Das Hinzufügen oder Entfernen kann bei definitiven Buchungen auch die allgemeine Buchungs-Änderungsmail auslösen. Prüfen Sie daher die Empfängereinstellungen vor dem Speichern und setzen Sie eine entfernte Person nicht mit einer garantiert zugestellten Absage gleich.

Bei einer Raumkombination werden Benachrichtigungen und Erinnerungen über die Hauptbuchung verarbeitet. Die Raumliste in der Buchungsmail kann die mitgebuchten Räume aufführen. Unterbuchungen erzeugen keine eigenen Buchungsmails, Erinnerungen oder separaten Outlook-Termine.

Ist die Benachrichtigung für Änderungen am selben Tag eingerichtet, verarbeitet PlaceMe bei Erstellen, Annullieren und relevanten Änderungen einer Raumbuchung auch die Mail an die konfigurierten Empfangsadressen, beispielsweise die Rezeption. Sie enthält eine Tabelle der alten und neuen Werte mit markierten Änderungen. Entscheidend ist der noch bevorstehende Belegungsbeginn einschliesslich Vorlaufzeit am aktuellen **UTC-Kalendertag**, nicht allein das lokal angezeigte Buchungsdatum. Bei Änderungen muss zusätzlich der Auslöser für eine Buchungs-Änderungsmail erfüllt sein.

Ein eingerichteter **Bestuhlungsdienst** erhält seine Benachrichtigung über die Gruppe und Vorlage der Angebotszone. Bei Buchungen ohne Standardbestuhlung werden Erstellen, relevante Zeitänderungen, vorzeitiges Beenden und Annullieren berücksichtigt. Auch ein Bestuhlungswechsel wird verarbeitet. Der Versandtermin richtet sich nach der Vorankündigungsfrist der Angebotszone. Vor diesem Termin können ausstehende Benachrichtigungen verschoben oder bei Annullierung beziehungsweise Rückkehr zur Standardbestuhlung entfernt werden. Das bedeutet nicht, dass jede Änderung sofort eine zusätzliche Mail auslöst.

Bei eingerichteter Exchange-Synchronisation werden unterstützte Buchungen entsprechend den Einstellungen der organisierenden Person und der Ressource im Kalender erstellt, aktualisiert oder entfernt. Versand und Synchronisation laufen im Hintergrund. Eine gespeicherte Buchung bedeutet nicht, dass die E-Mail bereits zugestellt oder Outlook bereits aktualisiert ist.

**Einchecken** allein löst keine Buchungs-Änderungsmail aus. **Freigeben** und **Terminieren** behandeln das neue Ende als Buchungsänderung. Ein Terminieren während einer automatischen Verlängerung kann zusätzlich die konfigurierte Konfliktbenachrichtigung auslösen. **No-show** löst die eingerichteten Annullierungsreaktionen aus. Erinnerungen richten sich nach dem neuen Buchungsstand, bei einer Annullierung werden ausstehende Erinnerungen und die automatische Verlängerung entfernt.

Einchecken, Freigeben und Terminieren legen nicht allein aufgrund Ihrer persönlichen Kalendereinstellung einen neuen Outlook-Termin an. Eine Kalenderaktualisierung setzt eine bestehende Verknüpfung oder eine Ressource mit verpflichtender Kalendersynchronisation voraus und hängt von den übrigen Synchronisationseinstellungen ab.

## Kalender-Abgleich prüfen und anstossen

Öffnen Sie eine vorhandene Buchung im Panel. Unter dem Titel steht bei Buchungen mit Kalender-Abgleich der Stand für **Outlook** oder **Google**. Auch die vollständige Buchungsseite zeigt ihn an. In der Buchungsliste und im Kalender unter **Buchen** kennzeichnet ein zusätzliches Symbol **Nicht eingetragen**, **Verknüpfung fehlt** oder **Abgleich angehalten**, sofern Sie die vollständigen Buchungsdetails sehen dürfen.

Die Anzeige beschreibt den in ROOMS gespeicherten Verknüpfungs- und Verarbeitungsstand. Sie ist **kein Live-Vergleich** der Kalender. **Abgeglichen** bestätigt insbesondere nicht, dass jeder Serientermin im Raumkalender vorhanden ist oder alle Inhalte übereinstimmen. Fehlt eine Anzeige, ist das ebenfalls kein Nachweis eines erfolgreichen Abgleichs.

{{< bootstrap-table "table table-striped" >}}
| Anzeige | Bedeutung und nächster Schritt |
| --- | --- |
| **Abgeglichen** | ROOMS führt die Buchung als verknüpft. Prüfen Sie bei einer konkreten Abweichung trotzdem den Termin und die Raumbelegung in beiden Systemen. |
| **Wird abgeglichen** | ROOMS hat ausstehende Verarbeitung erkannt. Warten Sie deren Abschluss ab, bevor Sie erneut eingreifen. Die Anzeige verspricht keine Abschlusszeit. |
| **Nicht eingetragen** | ROOMS führt die Buchung nicht als vollständig im zugehörigen Kalender eingetragen. Das allein annulliert eine ansonsten gültige ROOMS-Buchung nicht. Im Panel kann **In Outlook eintragen** beziehungsweise **In Google eintragen** angeboten werden. |
| **Verknüpfung fehlt** | Der Termin wurde an Outlook geschickt, die Rückverknüpfung steht aber aus. Änderungen aus Outlook können so nicht zuverlässig übernommen werden. Mit dem globalen Recht **Darf Konfiguration System verwalten** (26) kann im Panel **Erneut verknüpfen** angeboten werden. |
| **Abgleich angehalten** | Der Abgleich für die Buchung oder Serie ist deaktiviert. Änderungen werden nicht regulär weiter abgeglichen. Prüfen Sie beide Stände. Im Panel kann **Abgleich wieder aufnehmen** angeboten werden. Bei einer angehaltenen Serie nennt der Hinweis den Serienbezug. |
{{< /bootstrap-table >}}

### Eintragen, wieder aufnehmen oder erneut verknüpfen

Für diese Aktionen müssen Sie die vollständigen Buchungsdetails sehen dürfen. **Eintragen** und **Abgleich wieder aufnehmen** hängen zusätzlich von der eingerichteten Synchronisation der organisierenden Person und der Ressource ab. Sie werden nur für geeignete, nicht annullierte Buchungen mit noch bevorstehendem Belegungsbeginn einschliesslich Vorlaufzeit angeboten. Ein allgemeines Bearbeitungsrecht ist dafür nicht ausschlaggebend. Unterbuchungen bieten keine unabhängigen Abgleich-Aktionen.

Prüfen Sie vor dem Auslösen die Buchung und bei einer Serie die betroffenen Termine. **Eintragen** und **Abgleich wieder aufnehmen** können die ganze Serie betreffen, auch wenn kein eigener Serienhinweis angezeigt wird. **Erneut verknüpfen** stösst bei einer Serie die Verarbeitung über ihren ersten aktiven Termin an und ist keine isolierte Reparatur des gerade geöffneten Termins. Wählen Sie erst nach dieser Prüfung die angebotene Schaltfläche im Panel. Die Aktion stösst Hintergrundverarbeitung an, nicht den sofortigen Abschluss. Laden Sie die Buchung nach deren Verarbeitung erneut und prüfen Sie den Stand in beiden Kalendern. Bleibt eine Abweichung bestehen oder fehlt eine passende Aktion, ziehen Sie die Administration beziehungsweise den Support bei. Wiederholtes Auslösen ersetzt keine Prüfung der Ursache.

### Gezielt einen Stand übernehmen

Mit **Darf Konfiguration System verwalten** (26) können bei einer verknüpften, nicht gesperrten Outlook-Buchung unter **Weitere Aktionen** im Abschnitt **Abgleich mit Outlook** folgende Aktionen verfügbar sein:

- **Outlook überschreiben:** Der gespeicherte Stand aus cordivo wird nach Outlook übertragen. Diese Aktion steht für Einzelbuchungen zur Verfügung.
- **Cordivo überschreiben:** Der Stand aus Outlook wird nach ROOMS übernommen. Bei einer Serie betrifft die Übernahme die ganze Serie, nicht nur den geöffneten Termin. Die erforderlichen vollständigen Leserechte müssen auch für den ersten aktiven Termin vorliegen.

{{% alert title="Die gewählte Richtung ersetzt Änderungen" color="warning" %}}
Änderungen auf der überschriebenen Seite können verloren gehen. Prüfen Sie vor der Auswahl beide Stände und bei einer Serie alle betroffenen Termine. Speichern Sie gewünschte Feldeingaben zuerst. Nicht gespeicherte Feldeingaben werden nicht als Quelle übernommen. **Outlook überschreiben** verwendet den gespeicherten cordivo-Stand, **Cordivo überschreiben** den Stand aus Outlook. Beim Überschreiben von Outlook können Eingeladene eine Aktualisierung erhalten, wenn sich der Termin ändert.
{{% /alert %}}

Wählen Sie erst danach die passende Richtung, prüfen Sie den Bestätigungsdialog und bestätigen Sie die gleichnamige Aktion. **Abbrechen** löst sie nicht aus. Die Bestätigung beauftragt den Abgleich im Hintergrund. Prüfen Sie nach dessen Abschluss die Buchung, die Einladungen und die tatsächliche Raumbelegung. Die Übernahme eines Standes ist keine Garantie, fehlende Raumtermine einer Serie wiederherzustellen. Weitere Prüfschritte finden Sie unter [Problembehandlung der Kalender-Synchronisation]({{< relref "Betrieb/Synchronisation/Troubleshooting/_index.md" >}}).

### Buchungen nach Abgleich filtern

Mit **Darf Konfiguration System verwalten** (26) finden Sie unter **Buchungen → Filter → Status und Ablauf → Abgleich** die Werte **Abgeglichen**, **Wird abgeglichen**, **Verknüpfung fehlt**, **Nicht eingetragen** und **Angehalten**. Wählen Sie beispielsweise die drei Problemstände, kombinieren Sie diese mit einem passenden Zeitraum und speichern oder pinnen Sie die Suche gemäss **Ansichten speichern und teilen**. Der Filter berücksichtigt nur Buchungen mit einem für Sie sichtbaren Abgleichstand. Auch ein ausschliessender Vergleich schliesst Buchungen ohne solchen Stand nicht automatisch ein. Er erweitert keine Leserechte und ist kein entsprechender Ressourcenfilter unter **Buchen**.

Für eine zusätzliche farbliche Kennzeichnung im cordivo-Kalender und in der Buchungsliste kann die Administration eine [Buchungsfarbregel mit der Bedingung Abgleich]({{< relref "3VROOMS-Module/PlaceMe/Farben/_index.md#abgleich-als-bedingung" >}}) einrichten. Die Farbe ersetzt weder den Hinweis noch die Prüfung der Kalender.

## Versionen für eine Supportanfrage angeben

Öffnen Sie am Computer im Kontomenü **Über Cordivo**, auf dem Telefon **Mehr → Über Cordivo**. Das Fenster zeigt **Cordivo**, **Rooms-Server** und unter **Verbunden mit** den verbundenen Server-Host. Mit **Versionen kopieren** übernehmen Sie die verfügbaren Angaben in die Zwischenablage und können sie Ihrer Supportanfrage beifügen. **Kopiert** bestätigt die Übernahme. Ist Kopieren im Browser gesperrt, markieren und kopieren Sie die Angaben selbst.

**–** bei **Rooms-Server** bedeutet, dass keine Serverversion geliefert wurde; im kopierten Text fehlt diese Zeile. Die angezeigte Cordivo-Version finden Sie auch im Kontomenü und am Seitenende, auf dem Telefon am Ende von **Mehr**.

## Standort und weitere Filter verwenden

Die Filter in **Buchen** und **Buchungen** verwenden dieselbe Bedienung. Mit **Filter** fügen Sie Kriterien hinzu. Die verfügbaren Kriterien richten sich nach dem jeweiligen Bereich. Zeitraumvorgaben wie **Heute** wandern mit dem Datum. Getippte Kalenderdaten und im Kalender gewählte Daten bleiben fest. Unter **Buchen** wandern auch relative Texteingaben wie `in 2 Wochen` oder `+3` mit.

Standorte in Suchergebnissen und Buchungen werden als Namen mit Kommas angezeigt, beispielsweise **Bern, Aarbergergasse 20**. Gemeinsame oberste Ebenen der Standorte mit aktiven Ressourcen können entfallen; mindestens die letzte Ebene bleibt sichtbar. Die Standortauswahl im Filter zeigt weiterhin die Hierarchie.

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
