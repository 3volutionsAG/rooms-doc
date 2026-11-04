// Jobmanager mit dem eigenen Login aus seed-listen-anlaesse.sql. Der Job wird nur geprüft und nicht gespeichert.
const J = '3VROOMS/Listen/Jobmanager';

export const user = 'beat.kunz';

export default async function ({ page, go, shot, mark }) {
  const settle = async (ms = 800) => { await page.waitForLoadState('networkidle', { timeout: 60000 }); await page.waitForTimeout(ms); };
  const button = (name) => page.getByRole('button', { name, exact: true });

  // Jobliste: der Filter "Bildungszentrum" wird über seine Felder gesetzt, die Suche danach regulär ausgelöst.
  await go('/Lists/JobmanagerJob/Find');
  await page.evaluate(() => {
    document.querySelector('#JobmanagerJobFilter_Standort_Id').value = '1';
    document.querySelector('#JobmanagerJobFilter_Standort_Text').value = '\\CH';
  });
  await button('Anzeigen').click();
  await settle();
  await mark(page.locator('h3', { hasText: 'Jobmanager' }).first());
  await mark(page.locator('.ui-tabs-nav a', { hasText: 'Offene Jobs' }));
  await shot(`${J}/Jobmanager_Ueberblick.png`);
  await shot(`${J}/Jobliste/Jobmanager_Jobliste.jpg`);

  // Ressourcenwahl: Prüfung für alle Räume starten und auf die Ampeln warten.
  await page.locator('tr', { hasText: 'JOB-2026-101' }).getByText('Prüfen', { exact: true }).click();
  await settle();
  await page.locator('#LektionList .smartListHead input[type=checkbox], #LektionList input[type=checkbox]').first().check();
  await page.waitForTimeout(300);
  await page.locator('#JobmanagerCheckVerfuegbarkeit').click();
  await page.waitForFunction(() => document.querySelectorAll('#LektionList .verfuegbarkeitGeprueft').length >= 12, null, { timeout: 120000 });
  await page.waitForTimeout(500);
  // Höheres Fenster, damit alle zwölf Räume ohne Scrollen sichtbar sind und keine Zeile abgeschnitten wird.
  await page.setViewportSize({ width: 1280, height: 960 });
  await page.waitForTimeout(600);
  await shot(`${J}/Ressourcenwahl/Jobmanager_Ressourcenwahl.jpg`);
  await mark(page.locator('label', { hasText: /^Gewünschte Ressourcen$/ }).locator('xpath=..'));
  await mark(page.locator('label', { hasText: /^Präferenzen/ }).locator('xpath=..'));
  await shot(`${J}/Ressourcenwahl/Jobmanager_Ressourcenwahl_OhnePraeferenz.jpg`);
  await page.setViewportSize({ width: 1280, height: 768 });
  await page.waitForTimeout(300);

  // Detailprüfung für den Raum mit Konflikten
  await page.locator('tr', { hasText: 'Mönch' }).getByRole('button', { name: 'Details' }).click();
  await settle(1500);
  await shot(`${J}/DetailpruefungUndVerarbeitung/Jobmanager_Detailpruefung.jpg`);

  await page.locator('tr', { hasText: 'Mönch' }).nth(1).locator('input[type=checkbox]').check();
  await page.locator('tr', { hasText: 'Mönch' }).nth(2).locator('input[type=checkbox]').check();
  await page.waitForTimeout(300);
  await button('Auswahl bearbeiten').click();
  const popup = page.locator('.popUp:visible, .ui-dialog:visible').first();
  await popup.waitFor();
  await settle(1500);
  // Beim Öffnen klappt die Statusliste auf. Ein Klick auf den Dialogtitel schliesst sie wieder.
  await popup.getByText('Auswahl bearbeiten', { exact: true }).first().click();
  await page.waitForTimeout(400);
  await shot(`${J}/DetailpruefungUndVerarbeitung/Jobmanager_Raumwechsel.jpg`, { clip: popup, padding: 2 });
  await popup.getByRole('button', { name: 'Abbrechen' }).click();
  await page.waitForTimeout(500);
  await button('Abbrechen').click();
  await settle();
}
