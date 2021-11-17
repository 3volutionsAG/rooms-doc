---
title: "OnsiteROOMS"
linkTitle: "OnSite"
weight: 8
description: >
  OnSite ROOMS ist eine Türschild-Lösung für ROOMS welche es ermöglicht gewünschte Ressourcen mit einem interaktiven Türschild auszustatten. Mit OnSite ROOMS ist es möglich den Status einer Ressource visuell darzustellen, Check-in / -out für Buchungen zu tätigen und mit dem interaktiven Kalender Buchungen erstellen oder verlängern.
---

## Ansichten

OnSite ROOMS ist für Türschilder ausgelegt und stellt verschiedene Ansichten für die jeweiligen Fukntionen zur Verfügung.

### Home

Die Home Ansicht dient dazu zu visualisieren ob der Raum verfügbar ist oder nicht.
Es gibt unterschiedliche Zustände, welche mit Farbcode hinterlegt sind um eine schnelle Übersicht der Verfügbarkeit des Raumes zu gewinnen.

|Farbcode|Bedeutung|Bemerkung|
|---|---|---|
|Grün|Raum ist verfügbar|-|
|Orange|Kommende oder aktuelle Buchung braucht ein Check-In|Die Buchung wird angezeigt sobald ein Check-In möglich ist, auch wenn Sie aktuell noch nicht läuft.|
|Rot|Raum ist besetzt|-|
|Blau|Raum nicht verfügbar|Ein Raum gilt als nicht verfügbar wenn Sperrzeiten vorhanden sind. Da Sperrzeiten nicht gleich behandelt werden wie normale Buchungen ist der Farbcode anders gewählt.|

{{< imgproc screens-home Resize "640x" >}}
Abbildung a: Ansicht Home
{{< /imgproc >}}

### Dashboard

{{< imgproc screens-dashboard Resize "640x" >}}
Abbildung b: Ansicht Dashboard
{{< /imgproc >}}

### Kalender

#### Buchung erstellen

Es gibt drei Optionen wie Buchungen im interaktiven Kalender erstellet werden können:
* Klick auf _Jetzt Buchen_
* Klick auf Zeitslot
* Langern Klick auf Zeitslot

Danach wird in jedem Fall die länge der Buchung nachgefragt und der Authentisierungsprozess angestossen.

{{< imgproc screens-calendar-book Resize "640x" >}}
Abbildung c: Ansicht Buchung erstellen
{{< /imgproc >}}

#### Buchung verlängern

{{< imgproc screens-calendar-extend Resize "640x" >}}
Abbildung d: Ansicht Buchung verlängern
{{< /imgproc >}}

## Kundenspezifische Anpassungen

OnSite ROOMS unterstützt Kundenspezifische Anpassungen per ROOMS Mandant.

|Was|Pfad|Limitationen|
|---|---|---|
|Logo|onsite/logo.png|Dimensionen sowie Format des Bildes werden *nicht* angepasst. Das Bild muss also im richtigen Format vorhanden sein.|
|Theme|onsite/theme.css|Erlaubt aktuell nur Anpassungen der Home Ansicht. Einzig die Schriftart kann global angepasst werden.|
|Script|onsite/custom.js|Script welches eingebunden wird. Kann verwendet werden falls Netzwerktechnische Probleme auftretten welche Kundenspezifisch sind.|
|Übersetzungen|onsite/translations/{de,en,it,fr}.json|Erlaubt anpassungen der Übersetzungen welche verwendet werden. Aktuell werden nur folgende Sprachen unterstützt: Deutsch, Englisch, Französisch und Italienisch.|

Alle oben erwähnten Dateien müssen in der ROOMS Instanz hinterlegt werden, welche die Ressource des Türschilds beinhaltet. Hinterlegt werden können Sie im Menüpunkt _Einstellungen -> System -> Oberfläche_.

{{< imgproc dynamic-asset Resize "640x" >}}
Abbildung e: Kundenspezifische Datein OnSite ROOMS
{{< /imgproc >}}

### Theme
Mit einem eigenen Theme kann die Home Ansicht verändert werden. Es gibt jedoch gewisse einschränkungen welche berücksichtigt werden müssen.

Anpassbar sind:
* Uhr
* Navigation
* Buchungstexte

Folgende SASS Datei dient als technische Hilfe welche Elemente ansteuerbar sind. Mit diesem Template kann ein spezifisches Theme umgesetzt werden.

[Custom theme template](/attachements/theme-template.scss)


### Konfiguration

Damit ein Türschild für eine Ressource eingesetzt werden kann, muss die entsprechende Ressource in ROOMS konfiguriert werden (_Einstellungen -> Ressourcen -> Türschild_).
Diese Konfiguration kann gewisse Verhalten des OnSite ROOMS beinflussen, wobei ein unterschied besteht zwischen dem neuen OnSite ROOMS (Web basiert) und dem alten OnSite ROOMS (Android App).

|Einstellung|OnSite Web|OnSite Android|Beschreibung|
|---|---|---|---|
|Thema|x|o||
|Sprache|o|o||
|Wartezeit|o|o||
|Anfrage Intervall|o|o||
|Titel anzeigen|x|o||
|Ressource Beschreibung anzeigen|x|o|Bei OnSite Web kann diese Option via Theming gelöst werden|
|Read only|x|o||
|Nur checkin|o|o||
|Unauthorisierte aktionen erlauben|x|o||
|Organisator anzeigen|o|o||
|Anonym-Login|x|o||
|Checkout Modus|o|o||
|Authorisierungsmodus|o|o|Bei OnSite Web muss zwingend *Beide* eingestellt sein|
|Kalender Zeitstrahl|o|x|Definiert die sichtbare Zeitspanne des interaktiven Kalenders|
|QR Code Format|o|o|Bei OnSite Web muss zwingend *json* eingestellt sein|
|Konfigurationsbenutzer wählen|o|o||


## Bekannte Verhalten

### Kalender wird nicht richtig dargestellt
Diese Verhalten kann aufkommen falls die Türschilder nicht die gleiche Zeitzone haben wie die ROOMS Instanz **und** keine Start- und Endzeit eingestellt sind.

Folgende konfigurationen beheben dieses Verhalten:
* Zeitstrahl für Türschild konfigurieren (_Einstellungen -> Ressource -> Türschild_)
* Öffnungszeit für Standort definieren an welchem die Ressource ist.
