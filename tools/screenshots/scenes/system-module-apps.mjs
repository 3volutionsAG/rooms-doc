// quickROOMS (Outlook Add-in und Wizard) und onsiteROOMS (Türschild) aus ihren fertigen Builds.
// Beide laufen im normalen Browser gegen die lokale Instanz. Erwartet werden die Repos quickrooms und onsite-rooms
// neben dem rooms-Repo, mit vorhandenem dist-Ordner.
import { createServer } from 'node:http';
import { readFileSync, existsSync, statSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import { chromium, CONTENT, REPO, PASSWORD, mark, clearMarks } from '../lib.mjs';

const GIT = path.resolve(REPO, '..', '..');
const QR = '3VROOMS-Module/3VROOMS_AddIn_O365Outlook';
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.woff2': 'font/woff2', '.woff': 'font/woff', '.ttf': 'font/ttf', '.ico': 'image/x-icon' };
const CONTENT_ROOT = 'http://localhost:5080/Default';
const IDP = 'http://localhost:5000';
const PIN = '482916';

/** Liefert einen Build aus, overrides ersetzt einzelne Pfade durch eigenen Inhalt. */
function serve(dist, overrides = {}) {
  const server = createServer((req, res) => {
    const url = decodeURIComponent(new URL(req.url, 'http://x').pathname);
    if (overrides[url]) {
      res.writeHead(200, { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' });
      res.end(overrides[url]);
      return;
    }
    let file = path.join(dist, url);
    if (!existsSync(file) || statSync(file).isDirectory()) file = path.join(dist, 'index.html');
    res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] ?? 'application/octet-stream', 'Cache-Control': 'no-store' });
    res.end(readFileSync(file));
  });
  return new Promise((resolve) => server.listen(0, '127.0.0.1', () => resolve(server)));
}

/**
 * Öffnet einen Browser auf http://localhost:4210, der Origin, für die der IDP-Client registriert ist.
 * Der Port gehört der Aspire-Ressource quickrooms, deshalb leitet der Browser ihn auf den lokalen Server um.
 * Die Web-Sicherheit ist aus, weil die lokale Legacy-API für diese Origin keine CORS-Header sendet.
 */
async function browserFor(server, { width, height }) {
  const browser = await chromium.launch({ channel: 'msedge', args: [`--host-resolver-rules=MAP localhost:4210 127.0.0.1:${server.address().port}`, '--disable-web-security'] });
  const context = await browser.newContext({ viewport: { width, height }, locale: 'de-CH', timezoneId: 'Europe/Zurich' });
  const page = await context.newPage();
  page.setDefaultTimeout(20000);
  return { browser, page };
}

async function save(page, file, opts = {}) {
  const out = path.join(CONTENT, file);
  mkdirSync(path.dirname(out), { recursive: true });
  await page.waitForTimeout(200);
  await page.screenshot({ path: out, animations: 'disabled', caret: 'hide', ...opts });
  await clearMarks(page);
}

export default async function () {
  await quickRooms();
  await onsite();
}

async function quickRooms() {
  const config = JSON.parse(readFileSync(path.join(GIT, 'rooms', 'RoomsPro.AppHost', 'obj', 'quickrooms', 'config', 'config.json'), 'utf8'));
  const server = await serve(path.join(GIT, 'quickrooms', 'dist'), { '/assets/config/config.json': JSON.stringify(config) });
  const { browser, page } = await browserFor(server, { width: 1280, height: 768 });
  try {
    await page.goto('http://localhost:4210/', { waitUntil: 'domcontentloaded', timeout: 60000 });
    await page.waitForSelector('#Username', { timeout: 60000 });
    await page.fill('#Username', 'sandra.frei');
    await page.fill('#Password', PASSWORD);
    await page.click('button[value=login], button[name=button]');
    await page.waitForURL('http://localhost:4210/**', { timeout: 60000 });
    await page.getByText('Raum', { exact: true }).first().waitFor();
    await page.waitForTimeout(1500);
    await save(page, '3VROOMS-Module/3VROOMS_Wizard/Buchungsassistent.png');

    // Ab hier in der Breite des Aufgabenbereichs in Outlook.
    await page.setViewportSize({ width: 440, height: 768 });
    await page.getByText('Raum', { exact: true }).first().click();
    await page.getByText(/Weiter zu den/).first().waitFor();
    await page.waitForTimeout(1500);
    await save(page, `${QR}/RessourceBuchen/O365Outlook_web_RaumFilter.png`);

    await page.getByText(/Weiter zu den/).first().click();
    await page.getByText('Auswählen', { exact: true }).first().waitFor();
    await page.waitForTimeout(1500);
    await save(page, `${QR}/RessourceBuchen/O365Outlook_web_ResErgebnis.png`);

    // Blockiert die Ressource temporär. Am Schluss über Abbrechen wieder freigeben.
    await page.getByText('Auswählen', { exact: true }).first().click();
    await page.getByText('Seriebuchung erstellen?').first().waitFor();
    await page.waitForTimeout(2000);
    await save(page, `${QR}/RessourceBuchen/O365Outlook_web_Zus.png`);
    await page.mouse.move(220, 400);
    await page.mouse.wheel(0, 900);
    await page.waitForTimeout(1000);
    await save(page, `${QR}/RessourceBuchen/O365Outlook_web_weitereInfos.png`);

    await page.locator('ion-back-button, ion-header ion-buttons, ion-header button, .back-button').first().click({ timeout: 3000 }).catch(() => {});
    await page.waitForTimeout(800);
    if (!(await page.getByText('Wollen Sie wirklich abbrechen?').count())) await page.goBack();
    await page.getByRole('button', { name: 'Ja', exact: true }).click();
    await page.waitForTimeout(2000);

    // Bestätigung einer bestehenden Buchung von Sandra Frei.
    await page.goto('http://localhost:4210/#/book/view/35', { waitUntil: 'domcontentloaded' });
    await page.getByText('BUCHUNGSNUMMER').first().waitFor();
    await page.waitForTimeout(2000);
    await save(page, `${QR}/RessourceBuchen/O365Outlook_web_Buchungsbest.png`);
    await save(page, `${QR}/BuchungAendern/O365Outlook_web_BGbest.png`);

    await page.locator('ion-content ion-button[color="light"]').first().click();
    await page.getByText('Buchung editieren').first().waitFor();
    await page.waitForTimeout(600);
    await save(page, `${QR}/BuchungAendern/O365Outlook_web_BGedit.png`);
  } finally {
    await browser.close();
    server.close();
  }
}

async function onsite() {
  const config = JSON.stringify({ rootConfig: { roomsUrl: CONTENT_ROOT, idpUrl: IDP, ledControlUrl: '' } });
  const server = await serve(path.join(GIT, 'onsite-rooms', 'dist'), { '/assets/config/config.json': config });
  const { browser, page } = await browserFor(server, { width: 1280, height: 800 });
  const K = 'Betrieb/Tuerschilder/Kopplung';
  const O = '3VROOMS-Module/onsiteROOMS';
  const at = (h, m) => { const d = new Date(); d.setHours(h, m, 0, 0); return d; };
  const home = async () => { await page.goto('http://localhost:4210/#/home', { waitUntil: 'domcontentloaded' }); await page.reload({ waitUntil: 'domcontentloaded' }); await page.getByText('zum Hauptmenü').waitFor(); await page.waitForTimeout(2500); };
  const pin = async () => {
    for (const digit of PIN) {
      await page.locator('button, div, span').filter({ hasText: new RegExp(`^${digit}$`) }).last().click();
      await page.waitForTimeout(120);
    }
  };
  try {
    // Die Uhr im Browser ist gesetzt, damit Farbe und Text nicht von der Uhrzeit der Aufnahme abhängen.
    // setFixedTime geht hier nicht: Das Debounce in der Ressourcenliste würde nie auslösen.
    await page.clock.install({ time: at(12, 30) });
    await page.goto('http://localhost:4210/', { waitUntil: 'domcontentloaded', timeout: 60000 });
    await page.getByText('zum Hauptmenü').waitFor();
    await page.waitForTimeout(2500);
    await mark(page, page.getByText('zum Hauptmenü'));
    await save(page, `${K}/pairing01.png`);

    await page.getByText('zum Hauptmenü').click();
    await page.getByText('Administration').waitFor();
    await page.waitForTimeout(1000);
    await mark(page, page.getByText('Administration'));
    await save(page, `${K}/pairing02.png`);

    await page.getByText('Administration').click();
    await page.getByText('Option 1').first().waitFor();
    await page.waitForTimeout(1200);
    await save(page, `${K}/pairing03.png`);
    await pin();
    await page.getByText('Jungfrau', { exact: true }).first().waitFor();

    const row = page.locator('div,li,tr').filter({ has: page.getByText('Jungfrau', { exact: true }) }).filter({ has: page.getByRole('button') }).last();
    await row.getByRole('button').first().click();
    await page.getByText(/zurück zum Start/).waitFor();
    await page.getByText(/zurück zum Start/).click();
    await page.getByText('zum Hauptmenü').waitFor();
    await page.waitForTimeout(2500);

    // Zuerst freier Raum mit bekannter nächster Buchung.
    await save(page, `${O}/screens-home.png`);

    // Mit gekoppeltem Raum zeigt die Liste beide Buttons.
    await page.getByText('zum Hauptmenü').click();
    await page.getByText('Administration').waitFor();
    await page.waitForTimeout(1000);
    await page.clock.setSystemTime(at(10, 0));
    await page.reload({ waitUntil: 'domcontentloaded' });
    await page.getByText('Administration').waitFor();
    await page.waitForTimeout(2500);
    await save(page, `${O}/screens-dashboard.png`);
    await page.getByText('Administration').click();
    await page.getByText('Option 1').first().waitFor();
    await page.waitForTimeout(800);
    await pin();
    await page.getByText('Jungfrau', { exact: true }).first().waitFor();
    await page.waitForTimeout(800);
    await mark(page, page.getByRole('button', { name: 'Pairen' }).first());
    await mark(page, page.getByRole('button', { name: /Unpair/i }).first());
    await save(page, `${K}/pairing04.png`);

    // Laufende Buchung: Kalender mit Verlängern.
    await page.goto('http://localhost:4210/#/home/dashboard', { waitUntil: 'domcontentloaded' });
    await page.getByText('Verlängern').first().waitFor();
    await page.waitForTimeout(1000);
    await page.getByText('Verlängern').first().click();
    await page.waitForTimeout(3500);
    await save(page, `${O}/screens-calendar-extend.png`);

    // Freier Slot: Kalender mit Jetzt buchen.
    await page.clock.setSystemTime(at(12, 30));
    await page.goto('http://localhost:4210/#/home/dashboard', { waitUntil: 'domcontentloaded' });
    await page.reload({ waitUntil: 'domcontentloaded' });
    await page.getByText('Raum buchen').first().waitFor();
    await page.waitForTimeout(1000);
    await page.getByText('Raum buchen').first().click();
    await page.waitForTimeout(3500);
    await save(page, `${O}/screens-calendar-book.png`);
  } finally {
    await browser.close();
    server.close();
  }
}
