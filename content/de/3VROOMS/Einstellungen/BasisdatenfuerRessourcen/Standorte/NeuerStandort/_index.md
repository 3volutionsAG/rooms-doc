---
title: "Neuen Haupt-Standort anlegen"
linkTitle: "Neuen Haupt-Standort anlegen"
weight: 1
description: ''
---

In der Übersicht der Standort Pfade erstellen Sie einen neuen Hauptstandort, indem Sie auf den untenstehenden Button _Haupt-Standort erstellen_ klicken.
In dem Feld, welches sich öffnet, tragen Sie folgende Informationen ein:

* Stammdaten
* Plan
* Berechtigungen
* Sperrzeiten
* Feiertage
* Notifikationen
* Buchungsanfragen.


Die geänderten oder neu eingetragenen Daten speichern Sie über den untenstehenden Button _Speichern_.

{{< imgproc Standorte_neu_erstellen Resize "960x" >}}
Standort neu erstellen
{{< /imgproc >}}

### Daten zu Standorten einfügen und ändern


Die folgenden Daten können Sie für die Standort-Bestimmung einfügen und ändern:

#### Stammdaten

{{< bootstrap-table "table table-striped" >}}
| Feld         | Funktion         |
| ------------- |-------------  |
| Name          | Den Namen des Standorts eintragen |
| Bezeichnung    | Die Bezeichnung des Standorts eintragen     |
| Beschreibung  |      |
| Übergeordneter Standort    |      |
| Verantwortliche Person    | Die verantwortliche Person für diese Ressource eintragen   |
| Zeitzone    |   z.B. UTC + 01:00 Amsterdam   |
| Datei-/Verzeichnis-Browser (für Plan)    |      |
| Zugewiesener Plan    | Z.B. einen Anfahrtsplan als Bilddatei einfügen     |
{{< /bootstrap-table >}}

{{< imgproc Standort_Stammdaten_bearbeiten Resize "960x" >}}
Stammdaten eines Standortes bearbeiten
{{< /imgproc >}}

#### Plan


Sie können einem Standort einen oder mehrere Pläne zuweisen. Ebenfalls können Sie über die Toolbox einzelne Räume eintragen, die zur Buchung bereit stehen.

Einen Plan erstellen wird detailliert im Kapitel Plan beschrieben:
[Plan](/3vrooms/plan/)

{{< imgproc Standorte_Plan Resize "960x" >}}
Standort Plan bearbeiten
{{< /imgproc >}}

#### Berechtigungen


Sie sehen die bereits ausgewählten Berechtigungen oder fügen neue hinzu. Mit Aktivierung der Checkbox in der Liste können Sie bestehende Berechtigungen löschen oder bearbeiten.

{{< imgproc Standorte_Berechtigungen Resize "960x" >}}
Standort Berechtigung bearbeiten
{{< /imgproc >}}


Eine neue Berechtigung für den Standort fügen Sie über den untenstehenden Button _hinzufügen_ ein. Es öffnet sich ein Feld mit einer Liste von zur Verfügung stehenden Berechtigungen. Zum Hinzufügen wählen Sie einen oder mehrere Berechtigungen mit der Checkbox aus und klicken den Button _hinzufügen_.

{{< imgproc Standort_berechtigung_hinzufügen Resize "960x" >}}
Standort Berechtigung hinzufügen
{{< /imgproc >}}

Haben Sie Berechtigungen hinzugefügt, aktualisiert sich die Liste automatisch.

#### Sperrzeiten


Fügen Sie Sperrzeiten zu einem Standort hinzu, bearbeiten Sie diese oder löschen Sie Sperrzeiten aus der Liste.
Sehen Sie die bereits bestehenden Sperrzeiten in der Liste, können Sie diese über Aktivieren der Checkbox bearbeiten.

{{< imgproc Standorte_Sperrzeiten Resize "960x" >}}
Standort Sperrzeiten bearbeiten
{{< /imgproc >}}


Wollen Sie neue Sperrzeiten zu einem Standort hinzufügen, klicken Sie auf den Button "hinzufügen". Es öffnet sich ein neues Fenster. In diesem tragen Sie folgende Informationen ein:

* Bezeichnung
* Sperrzeit (von/bis)
* Vererben (aktivieren ja/nein)
* Nur Portal Integration relevant (aktivieren ja/nein)

{{< imgproc Standort_Sperrzeit_hinzufügen Resize "960x" >}}
Standort Sperrzeiten hinzufügen
{{< /imgproc >}}

{{< imgproc Standort_Sperrzeit_Liste Resize "960x" >}}
Standort Sperrzeiten Ansicht aktualisiert in der Liste
{{< /imgproc >}}

#### Feiertage


Zu einer Ressource können Sie Feiertage hinzufügen.
Ein Feiertag wirkt sich so aus, dass die Ressourcen zwar buchbar sind, diese aber durch zu definierende Symbole, Farben und Meldungen z.B. im Kalender, Plan, Suchresultat, etc. erkennbar sind.
Im Reservationsprozess wird ein Warnhinweis ausgegeben.


Sie sehen die bereits hinzugefügten Feiertage in Listenform. Diesen können Sie über die Checkbox wieder entfernen.

{{< imgproc Standort_Feiertage Resize "960x" >}}
Standort Feiertage bearbeiten
{{< /imgproc >}}


Sie fügen einen neuen Feiertag hinzu, indem Sie auf den untenstehenden Button "hinzufügen" klicken. Es öffnet sich ein Feld. In diesem wählen Sie einen oder mehrere Feiertage über das Aktivieren der Checkbox aus.

{{< imgproc Standort_Feiertage_hinzufügen Resize "960x" >}}
Einen oder mehrere Feiertage hinzufügen
{{< /imgproc >}}


Die Liste aktualisiert sich automatisch. Die hinzugefügten Feiertage sehen Sie in der Startübersicht.

{{< imgproc Standort_Feiertage_Ansicht_Liste Resize "960x" >}}
Ansicht der eingetragenen Feiertage in der Liste
{{< /imgproc >}}

#### Notifikationen


Sie erfassen und verwalten eine Vorlage für Notifikationsvorlage für die verschiedenen Anwendungszwecken.
Legen Sie fest, an wen die Notifikationen versendet werden sollen.


Sie sehen im Startmodus, welche Notifikationstypen bereits eingetragen sind. Sollten Sie keine ausgewählt haben, ist die Liste leer. Sie fügen neue Notifikationen über den unten stehenden Butto _Hinzufügen_ hinzu.

{{< imgproc Standort_Notifikationen Resize "960x" >}}
Standort Notifikationen bearbeiten
{{< /imgproc >}}

Eine genaue Beschreibung der Notifikationen und möglichen Eingabefelder finden Sie hier: [Notifikationen](/einstellungen/pers%C3%B6nlicheeinstellungen/notifikation/)

#### Buchungsanfrage


Sie legen hier fest, welche Gruppen eine Buchungsanfrage erhalten sollen, die Sie für den Standort auswählen. Das „Verschicken“ der Anfrage wird im Actionpanel bestätigt.
Eine E-Mail wird an die Benutzer der  Benutzergruppe, welche dem Anlasstyp hinterlegt worden ist, verschickt. Die Notifikation hierfür legen Sie bei Notifikationen fest.

{{< imgproc Standort_Buchungsanfrage Resize "960x" >}}
Standort Buchungsanfragen bearbeiten
{{< /imgproc >}}


Sie fügen neue Buchungsanfragen über den untenstehenden Button _hinzufügen_ hinzu. Wählen Sie eine oder mehrere Anlasstypen aus und bestätigen Sie Ihre Eingabe mit "hinzufügen".

{{< imgproc Standort_Buchungsanfrage_hinzufügen Resize "960x" >}}
Eine Buchungsanfrage hinzufügen
{{< /imgproc >}}


Die hinzugefügten Buchungsanfragen sehen Sie in der automatisch aktualisierten Liste.

{{< imgproc Standort_Buchungsafrage_aktualisierte_Liste Resize "960x" >}}
Ansicht der aktualisierten Liste in Buchungsanfragen
{{< /imgproc >}}
