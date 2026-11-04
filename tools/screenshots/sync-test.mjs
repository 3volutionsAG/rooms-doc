// Nimmt den grünen Synchronisationstest auf. Er braucht echtes Exchange und deshalb die Umgebung der
// End-to-End-Tests im rooms-Repo: Mandant default, Worker, Legacy-Dienst, SyncTestService und Tunnel.
// Siehe .shared/skills/sync-e2e im rooms-Repo. Aufruf: node sync-test.mjs
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { chromium, BASE, CONTENT, ROOMS_REPO } from './lib.mjs';

const config = JSON.parse(readFileSync(path.join(ROOMS_REPO, 'e2e', 'calendar-sync', 'config.local.json'), 'utf8'));

const browser = await chromium.launch({ channel: 'msedge' });
try {
  const context = await browser.newContext({ viewport: { width: 1280, height: 768 }, locale: 'de-CH', timezoneId: 'Europe/Zurich' });
  const page = await context.newPage();
  await page.goto(BASE, { waitUntil: 'networkidle', timeout: 120000 });
  await page.fill('#Username', config.roomsUsername);
  await page.fill('#Password', config.roomsPassword);
  await page.click('button[value=login], button[name=button]');
  await page.waitForLoadState('networkidle', { timeout: 120000 });

  await page.goto(`${BASE}/Settings/Person/View/${config.organizerId}`, { waitUntil: 'networkidle' });
  await page.locator('a', { hasText: 'Synchronisationstest' }).first().evaluate((a) => a.click());
  await page.locator('#btnCheckSync').click();

  // Der letzte Testschritt erscheint erst, wenn die Änderungsnotifikation von Exchange angekommen ist.
  await page.locator('#test5 img[src*="SyncTestOk"]').waitFor({ timeout: 300000 });
  await page.waitForTimeout(1000);

  // Nur das Testfeld aufnehmen: Der Rest des Fensters zeigt das echte Testkonto.
  const field = await page.locator('#fieldsetSyncTest').boundingBox();
  const last = await page.locator('.syncTestItem').last().boundingBox();
  // Unter dem letzten Schritt folgt nur noch die einzeilige Erfolgsmeldung.
  const bottom = last.y + last.height + 40;
  await page.screenshot({
    path: path.join(CONTENT, 'Betrieb', 'Synchronisation', 'TestSync', 'sync-test.png'),
    clip: { x: field.x, y: field.y, width: field.width, height: bottom - field.y },
  });
} finally {
  await browser.close();
}
