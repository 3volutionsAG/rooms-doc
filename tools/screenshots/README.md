# Screenshots der Dokumentation

Die Screenshots unter `content/de` entstehen aus Szenen-Skripten gegen eine lokale Demo-Instanz. So bleiben sie nachvollziehbar, und bei einem neuen Release lassen sie sich mit einem Befehl neu erzeugen. Der Datenbestand ist vollständig fiktiv ("Muster AG"). Screenshots aus Kundendatenbanken gehören nicht in diese Dokumentation.

## Einrichten

Voraussetzungen sind ein `rooms`-Checkout neben diesem Repo, der lokale SQL Server mit `rooms_init`, Docker und Microsoft Edge.

1. `rooms_docs` neu aufbauen: `./reset-db.ps1`
2. In `RoomsPro.AppHost/tenants.local.json` im `rooms`-Repo einen Mandanten eintragen und auswählen:
   ```json
   "SelectedTenant": "docs",
   "Tenants": { "docs": { "DatabaseName": "rooms_docs", "DefaultMandator": "Default" } }
   ```
3. Im `rooms`-Repo starten: `aspire start --non-interactive --nologo`, danach `aspire resource placeme-db-migrate start --non-interactive --nologo`, und wenn die Migration durch ist `aspire resource placeme-api start --non-interactive --nologo`.
4. Fiktive Daten einspielen: `./seed-all.ps1`
5. `aspire resource legacy-web restart --non-interactive --nologo`, damit die App die neuen Texte lädt.

Die Logins `admin` (Systemadministrator), `thomas.meier` (SuperUser), `sandra.frei` (Anwender) und `reto.brunner` (Lesen) sowie die in den `seed-*.sql` ergänzten Logins haben das Passwort `Docs-Demo-2026!`. Es gilt nur in dieser lokalen Datenbank.

## Aufnehmen

- Alle Szenen: `node run.mjs`
- Eine Szene: `node run.mjs kalender`
- Grüner Synchronisationstest: `node sync-test.mjs`. Er läuft nicht auf der Demo-Instanz, sondern braucht echtes Exchange und die Umgebung aus `.shared/skills/sync-e2e` im `rooms`-Repo.

Die Buchungen des Seeds liegen auf dem Einspieldatum zwischen 08:00 und 17:00 Uhr. Am besten läuft alles am Vormittag des Seed-Tags, sonst zeigen manche Bilder andere Zustände. Die Szenen `generell` und `buchen-kalender-plan-kalender` hängen davon besonders ab. Einige Szenen brauchen die gebauten `dist`-Ordner von `quickrooms` und `onsite-rooms`.

Jede Szene unter `scenes/` ist ein Modul mit einer Default-Funktion, die eine Session aus `lib.mjs` bekommt. `shot(pfad, { clip })` schreibt das Bild direkt an seinen Platz unter `content/de`, `mark(locator)` zeichnet die rote Markierung ein.

```js
export default async function ({ page, go, shot, mark }) {
  await go('/Calendar/Calendar/Find?preserveFilter=False');
  await mark(page.getByRole('link', { name: 'Tag' }));
  await shot('3VROOMS/Kalender/Kalenderansicht/Kalender_Kalenderansicht.png');
}
```

## Regeln

- Ein Screenshot braucht einen Grund. Sinnvoll sind die Übersicht über einen Bildschirm, visuelle Dinge wie Kalenderfarben und Pläne sowie schwer auffindbare Bedienung wie Hover-Elemente und Pop-ups. Benennt der Text ein Feld oder einen Button bereits eindeutig, ist kein Bild nötig.
- Standardgrösse ist der ganze Viewport mit 1280x768 Pixeln. Wo nur ein Teil relevant ist, wird auf diesen Teil zugeschnitten.
- Der Dateiname bleibt beim Ersetzen gleich, damit die Seiten nicht angepasst werden müssen.
- Markierungen setzt nur `mark()`, damit alle gleich aussehen. Bildbearbeitung von Hand fällt damit weg.
- Fehlende Daten kommen in eine eigene `seed-<bereich>.sql`, nicht ins Skript und nicht von Hand in die Datenbank.

Hilfen zur Durchsicht: `python manifest.py 3VROOMS/Kalender` listet Seiten, Bilder und Bildunterschriften eines Bereichs, `node contact.mjs bogen.png a.png b.png` baut einen Kontaktbogen.
