---
title: "Anzeigenbereich"
linkTitle: "Anzeigenbereich"
weight: 100
description: 'Im Anzeigenbereich werden die Ergebnisse Ihrer Suche in Listenform ausgegeben.'
---
Das Ergebnis ist tabellarisch angeordnet. Jede Buchung wird in je einer Zeile ausgegeben. In den Spalten finden Sie sämtliche Informationen, die bei der Buchung hinterlegt wurden oder mit der Buchung in Zusammenhang stehen.

{{< imgproc List_BG_Anzeige_Buttons Resize "960x" >}}
Position der Listensymbole und Übersicht der zur Verfügung stehenden Schaltflächen
{{< /imgproc >}}

## Inaktive Personen erkennen

{{% alert title="Kommende ROOMS-Version" color="info" %}}
Die hier beschriebene Kennzeichnung inaktiver Personen ist für eine kommende ROOMS-Version vorgesehen. In Ihrer installierten Version kann sie noch fehlen.
{{% /alert %}}

Ist eine Person in ROOMS auf **Inaktiv** gesetzt, erscheint in den unterstützten Ansichten der Zusatz **(inaktiv)** beim Namen. In Listen und Personenfeldern wird der Name zusätzlich grau dargestellt. Der Zusatz bezieht sich auf die Person, nicht auf den Status der Buchung oder Bestellung.

Die Kennzeichnung erscheint an folgenden Stellen in der ROOMS-Webapplikation:

| Ansicht | Gekennzeichnete Personen |
|---|---|
| Buchungsliste | Ersteller:in, Organisator:in und verantwortliche Person in den jeweiligen Namensspalten |
| Kalender-Tooltip einer Buchung | Ersteller:in, Organisator:in und verantwortliche Person, soweit diese Informationen für Sie sichtbar sind |
| Personenfelder in Detail- und Bearbeitungsmasken | Die bereits zugeordnete Person in der Anzeige bzw. im ausgewählten Eintrag |
| Anlassliste | Ersteller:in, Organisator:in und verantwortliche Person |
| Buchungsliste innerhalb eines Anlasses | Ersteller:in und Organisator:in |
| Teilnehmendenliste | Die teilnehmende Person sowie Ersteller:in, Organisator:in und verantwortliche Person in den jeweiligen Namensspalten |
| Teilnehmendentabellen einer Buchung oder eines Anlasses | Die teilnehmende Person, sofern sie als Person in ROOMS hinterlegt ist |
| Bestellliste | Besteller:in, Ersteller:in, Organisator:in und die in der Spalte für die verantwortliche Person angezeigte Person |

Die Kennzeichnung ändert weder den gespeicherten Namen noch die Personenzuordnung. Sie annulliert keine Buchung oder Bestellung. Die bestehenden Sichtbarkeitsrechte bleiben unverändert; anonymisierte Buchungszeilen zeigen keinen Personenstatus.

Nicht jede Personenanzeige erhält diese Kennzeichnung. Benachrichtigungen, das Anlass-Seitenpanel und die Buchungsansicht im Outlook-Add-in sind nicht Bestandteil dieser Änderung. Auch die zusammengefasste Teilnehmendenspalte und die Spalte für die annullierende Person in der Buchungsliste bleiben unverändert. Ein fehlender Zusatz ist deshalb kein sicherer Nachweis dafür, dass eine Person aktiv ist.

Um gezielt nach entsprechenden Buchungen zu suchen, verwenden Sie den bestehenden Filter **Buchungen inaktiver Benutzer:innen** unter [Personenspezifische Kriterien]({{< relref "3VROOMS/Listen/BuchungenSuchen/ErweiterteSuche/PersonenspezifischeKriterien" >}}).

## Anpassung der Darstellung
Mit Hilfe der Listensymbole können Sie die Darstellung nach Ihren Bedürfnissen anpassen. Die einzelnen Symbole werden im Kapitel [Grundlegende Funktionen](/3vrooms/generell/grundlegendefunktionen/) erläutert.

## Schaltflächen


Die Schaltflächen werden im Unterkapitel [Weitere Funktionen](/3vrooms/listen/buchungensuchen/anzeigenbereich/weiterefunktionen/) beschrieben.

