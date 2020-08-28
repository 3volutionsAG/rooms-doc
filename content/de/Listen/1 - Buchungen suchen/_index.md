---
title: "Buchungen suchen"
linkTitle: "Buchungen suchen"
weight: 1
description: >
  Haben Sie einmal eine Buchung erstellt ist es wichtig, dass Sie diese schnell und leicht wiederfinden. Zu diesem Zweck gibt es im Bereich Listen als erstes die Buchungssuche. Anhand verschiedener Kriterien können Sie vorliegende Buchungen filtern.
---
## Einfache Suche

Um eine bestimmte Buchung zu finden gibt es zunächst eine einfache Suche. Diese wird mit den wichtigsten Kriterien Ressoucenart, Datum/Zeit der Buchung, Buchungszeitpunkt und Standort gefiltert.

 [//]: <> (Zeitraum statt Buchungszeitpunkt? Buchungszeitpunkt = Zeitpunkt der Buchung)
 [//]: <> (Bild Suchkriterien-Buchungen)

Folgende Tabelle erläutert die Eingabefelder:

 ---
 |<div style="width:220px">Feld</div>|Funktion|
 |---|---|
 |Ressoucenart|Über das Plus (+) können Sie vorhandene Ressourcen (Räume, Parkplätze, Arbeitsplätze,...) auswählen|
 |Datum/Zeit|Wählen Sie hier das Datum und den Zeitraum der gesuchten Buchung aus|
 |Buchungszeitpunkt  </br>(alternativ zu Datum/Zeit)|- *Alle*: Es werden alle Zeitäume berücksichtigt </br> - *Heute laufende und künftige Buchungen*:  Alle Buchungen ab jetzt am heutigen Tag </br> -  *laufende und künftige Buchungen*:   Alle Buchungen ab dem morgigen Tag </br> - *vergangene Buchungen*:  Alle bereits vergangenen Buchungen|
 |Standort|Werden über ROOMS die Ressourcen mehrerer Standorte (verschiedene Städte, unterschiedliche Filialen,...) verwaltet, kann hier der Standort ausgewählt werden für den die gesuchte Buchung gilt|
 ---

## Erweiterte Suche

Liegen Ihnen weitere Details zu einer Buchung vor, z.B. eine Buchungsnummer oder wollen Sie alle Buchungen finden, die von einem bestimmten Dienstleister bewirtet wird, können Sie eine entsprechende Liste über die Erweiterte Suche erstellen. Dabei stehen folgende Unterkategorien zur Verfügung:

- Buchungsspezifische Kriterien  
  Z.B. Buchungsnummer, Titel der Buchung, wurde die Buchung annuliert?

- Ressourcenspezifische Kriterien  
  Z.B. Ressourcen ID und Bezeichnung oder ist die Ressource aktiv?

- Personenspezifische Kriterien  
  Z.B. nur meine Buchungen, meine Buchungen für Dritte, Organisator, Kostenstelle

- Gliederungen  
  Z.B. Raumtyp oder Equipmenttyp

- Anlassspeziefische Kriterien  
  Z.B. Anlassnummer, Titel des Anlasses oder Anlasstyp

- Dienstleisterspezifische Kriterien  
  Buchungen, zu denen Bestellungen bei einem Dienstleister noch nicht freigegeben wurden

### Buchungsspezifische Kriterien

Buchungsspezifische Kriterien sind zum Beispiel die Buchungsnummer oder der Titel der Buchung. Wenn Sie anhand des Buchungstitels nach einer Buchung suchen wollen.

*Achten Sie darauf, dass dieser korrekt geschrieben ist. Es können nur identische Eingaben gefunden werden. Das gleiche gilt für alle anderen Felder, die manuell ausgefüllt werden.*

 [//]: <> (Bild Suchkriterien-Buchungen buchungsspezifisch)

 ---
 |<div style="width:220px">Feld</div>|Funktion|
 |---|---|
 |Nummer|Hier können Sie die individuelle Buchungsnummer eintragen.|
 |Titel|Hier können Sie den Titel der Buchung eintragen|
 |Bemerkung|Suchen Sie anhand einer eingetragene Bemerkung.|
 |Bemerkungen intern|Suchen Sie anhand einer eingefügten internen Bemerkung. <br/> *Interne Bemerkungen sind nur für berechtigte Personenkreise sichtbar.*|
 |Status|*siehe nächsten Abschnnitt*|
 ---

Zum Eingabefeld Sataus:  
Wenn Sie auf das Plus (+) neben der Eingabefeld klicken, öffnet sich ein Fenster, in dem Sie den entsprechenden Status auswählen, welcher der gesuchten Buchung zugewiesen wurde.

[//]: <> (Bild Statusauswahl)

---
 |<div style="width:220px">Status</div>|Bedeutung|
 |---|---|
 |Alle / keine auswählen|Die Suche berücksicht jeden Status|
 |Annulliert|gelöschte bzw abgesagte Buchungen|
 |Besetzt (definitiv)|verbindliche Reservierung|
 |Besetzt (provisorisch)|vorläufige Reservierung|
 |Besetzt (System)|Zeiten die durch das System geblockt werden, z.B. eingeplante Vorlaufzeit für eine folgende Buchung|
 |Besetzt (Temporär)|???|
 |Slot definiert|???|
 |Slot publiziert|???|
 ---

 Am Ende der Buchungsspezifischen Kriterien finden Sie vier weitere Checkboxen, die aktiviert werden können:

---
|<div style="width:220px">Status</div>|Bedeutung|
 |---|---|
 |Annulliert (nur No-Show)|Zeigt nur Buchungen, die durch Nichtinanspruchnahme als annulliert gekennzeichnet wurden|
 |Annulliert (ohne No-Show)|Zeigt nur Buchungen, die aktiv annulliert wurden|
 |Nicht Standard Bestuhlung <br/> *(gilt nur bei Raumbuchungen)*|Zeigt nur Buchungen, bei denen eine individuelle Bestuhlung bestellt wurde|
 |Nur letzte Buchung einer Serie|Zeigt nur die letzten Buchungen einer Buchungsserien|
 ---


### Ressourcenspeziefische Kriterien

Die ressourcenspezifischen Kriterien verändern sich je nach gewählter Ressourcenart (Raum, Parkplatz, Arbeitsplatz,...), die Sie in der einfachen Suche festlegen können. 
In diesem Bereich werden in erster Linie firmenspezifische Bezeichnungen und Klassifizierungen als weitere Filterkriterien zur Verfügung gestellt. 

Zur Veranschaulichung geben wir Ihnen folgendes Beispiel:

Sie wollen eien Übersicht über alle Buchungen, die Sie für einen bestimmten Raum getätigt haben. Ihre firmenspezifischen Klassifizierungen zur Ressource Raum sind "Ressourcen ID/Bezeichnung", "Ressourcenstatus" und "VC*-Equipment".

_*VC = Videokonferenz_  

<br/>

[//]: <> (Bild Suchkriterien-Buchungen ressourcenspezifisch)

---
|<div style="width:220px">Status</div>|Bedeutung|
|---|---|
|Ressourcen ID/Bezeichnung|Hier können Sie direkt nach der Raum ID oder der Raumbezeichnung filtern|
|Ressourcenstatus|- *Aktiv:* Es werden nur Buchungen in zugänglichen Räumen angezeigt <br/> - *Inaktiv:* Es werden nur Buchungen in nicht zugänglichen Räumen angezeigt|
|VC*-Equipment|- *Alle Räume:* Es werden alle Räume berücksichtigt <br/> - *Raum ohne VC:* Es werden nur Buchungen in Räumen ohne VC-Equipment berücksichtigt <br/> - *Raum mit VC:* Es werden nur Buchungen in Räumen ohne VC-Equipment berücksichtigt <br/> - *Raum mit VC integral:* Es werden nur Buchungen in Räumen mit integralem VC-Equipment berücksichtigt|
---
_*VC = Videokonferenz_

### Personenspezifische Kriterien

Unter Personenspezifischen Kriterien versteht man Merkmale, welceh die erstellenden, organisierenden oder verantwortungstrangenden Personen betreffen sowie die Kostenstelle, welcher die Buchung zugeordent ist.

[//]: <> (Bild Suchkriterien Buchungen personenspezifisch)

---
|<div style="width:220px">Feld</div>|Funktion|
|---|---|
|Meine Buchungen|Aktivieren Sie diese Checkbox, um Buchungen zu finden, bei denen Sie selbst Organisator:in sind.|
|Meine Buchungen für Dritte|Aktivieren Sie diese Checkbox, um Buchungen zu finden, die Sie zwar erstellt haben, bei denen Sie jedoch selbst nicht Organisator:in sind.|
|Buchungen inaktiver Benutzer:innen|Aktivieren Sie diese Checkbox, um Buchungen zu finden, die von nicht mehr aktiven Mitarbeitenden getätigt wurden.|
|Organisator:in|Tragen Sie hier den Namen der Person ein, welche die Buchung organsiert.|
|Ersteller:in|Tragen Sie hier den Namen der Person ein, welche die Buchung erstellt hat.|
|Verantwortliche:r|Tragen Sie hier den Namen der Person ein, welche die Verantwortung für die Buchung trägt.|
|OE*/Firma (Organisator:in)|Tragen Sie hier den Firmennamen oder den Namen der Organisationseinheit ein, für welche die organisierende Person arbeitet.|
|Kostenstelle (Organisator:in)|Tragen Sie hier ein, welcher Kostenstelle die Buchung zugeordet ist.|
---

_*OE = Organisationseinheit_

### Gliederungen

Dei Unterkategorie Gliederung ist, wie die Ressourcenspezifischen Kriterien, von der Ressourcenart abhängig und geht auf firmenspezifische Gliederungen ein. Die Ressourcenart wählen Sie im Bereich der einfachen Suche aus. 

Wir bedienen uns nochmals dem Beispiel aus dem Kapitel Ressourcenspezifische Kriterien. 

Sie wollen eine Auflistung aller Buchungen zusammenstellen, die in einem bestimmten Raumtyp, z. B. ein Sitzungssaal, stattfinden. Oder Sie wollen alle Buchungen heraussuchen, in dem 2 Beamern verwendet werden.

[//]: <> (Bild Suchkriterien Buchungen Gliederung am Beispiel Raum)

---
|<div style="width:220px">Feld</div>|Funktion|
|---|---|
|Raumtyp|Durch klicken auf das Plus (+) öffnet sich die Auswahl der verschiedenen Raumtypen. Wählen Sie hier den Raumtyp, z.B. Sitzungssaal um alle Buchungen, die im Sitzungssaal stattfinden angezeigt zu bekommen.|
|Raum: Equipmenttyp|Durch klicken auf das Plus (+) öffnet sich die Auswahl des vorhanden Equipments. Wählen Sie z.B. die Anzahl der Beamer um alle Bucungen angezeigt zu bekommen, in denen 2 Beamer verwendet werden.|
---

### Anlassspezifische Kriterien

???  
An eine Buchung kann ein Anlass gekoppelt sein, welcher wie die Buchung selbst charakteristische Merkmale aufweist. Sie können somit eine Buchung auch anhand der Charakteristika des Anlasses wiederfinden.

[//]: <> (Bild Suchkriterien Buchungen anlassspezifisch)

---
|<div style="width:220px">Feld</div>|Funkion|
|---|---|
|Nummer|Hier können Sie die individuelle Anlassnummer eintragen.|
|Titel|Hier können sie den Titel des Anlasses eintragen. <br/> *Achten Sie bitte auf die korrekte Schreibweise, da die Buchungen nur bei identischer Schreibweise gefunden werden können*|
|Typ|Aus dem Dropdown Menü können Sie den Anlasstyp auswählen|
|Hauptbuchung|In der Standardansicht werden Haupt- und Nebenbucungen zusammen angezeigt. Hier können Sie filtern, ob Sie nur Buchungen aus einer Hauptbuchung oder nur aus einer Nebenbuchung listen wollen.|
|VC*-Anlass|*Alle* <br/> *Nur Anlässe mit VC:* Zeigt nur Buchungen mit einem Anlass mit VC <br/> *Nur Anlässe ohne VC:* zeigt nur Buchungen mit einem Anlass ohne VC|
---

_*VC = Videokonferenz_

### Dienstleisterspezifische Kriterien

Es besteht die Möglichkeit bestimmte Dienstleistungen zu einer Buchung hinzuzufügen, die von der verantwortlichen Person genehmigt werden müssen. Mit Hilfe den Dienstleisterspezifiscen Kriterien können Sie sich Buchungen anzeigen lassen, deren Dienstleistungen noch nicht genehmigt wurden.

[//]: <> (Bild Suchkriterien Buchungen dienstleisterspez.)

---
|<div style="width:220px">Feld</div>|Funkion|
|---|---|
|Mit nicht freigegebenen Bestellungen|Um sich alle Buchungen anzeigen zu lassen, bei denen die bestellten Dienstleistungen noch nicht freigegeben wurden, aktivieren Sie diese Checkbox.|

## Anzeigenbereich 
