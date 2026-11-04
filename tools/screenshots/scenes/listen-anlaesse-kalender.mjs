// Reiter Anlass Kalender und Buchungen einem Anlass hinzufügen. Alle Dialoge werden vor dem Speichern abgebrochen.
import { session } from '../lib.mjs';

const D = '3VROOMS/Listen/AnlaesseSuchen/Anzeigenbereich/DetailansichtAnlaesse';
const VIEW = '/Lists/Anlass/View/1';

export default async function (s) {
  const { page, go, shot, mark } = s;
  const settle = async (ms = 800) => { await page.waitForLoadState('networkidle', { timeout: 60000 }); await page.waitForTimeout(ms); };
  const button = (name) => page.getByRole('button', { name, exact: true });
  const popup = () => page.locator('.popUp:visible, .ui-dialog:visible').first();
  const dialog = async () => { await popup().waitFor(); await settle(1500); return popup(); };
  // Popups haben je nach Dialog eine Abbrechen-Schaltfläche oder nur das Kreuz im Kopf.
  const closeDialog = async () => {
    const cancel = popup().getByRole('button', { name: /Abbrechen|Nein/ });
    if (await cancel.count()) await cancel.first().click();
    else await popup().locator('.popUp-closeButton, .ui-dialog-titlebar-close').first().click();
    await page.waitForTimeout(500);
  };

  // Reiter Anlass Kalender
  await go(VIEW);
  await page.locator('.ui-tabs-nav a', { hasText: 'Anlass Kalender' }).first().click();
  await settle(2000);
  await shot(`${D}/AnlassKalender/List_ANL_KalAn_b.png`);

  const booking = page.locator('.calendar-timeline-item-event').first();
  // Stärker zoomen, damit der Balken breit genug für Titel und Plus ist.
  const handle = await page.locator('.zoomSlider .ui-slider-handle').boundingBox();
  await page.mouse.move(handle.x + handle.width / 2, handle.y + handle.height / 2);
  await page.mouse.down();
  await page.mouse.move(handle.x + 50, handle.y + handle.height / 2, { steps: 5 });
  await page.mouse.up();
  await settle(1500);
  await booking.hover();
  await page.waitForTimeout(2800);
  await shot(`${D}/AnlassKalender/List_ANL_KalAn_TTBG.png`);

  await page.mouse.move(10, 10);
  await page.waitForTimeout(600);
  await booking.hover();
  await page.waitForTimeout(600);
  await page.locator('#reservationEdit').click();
  await dialog();
  await shot(`${D}/AnlassKalender/List_ANL_KalAn_DFBGverw.png`);
  await closeDialog();

  // Freie Stelle in der Zeile der gebuchten Ressource
  const free = await booking.boundingBox();
  await page.mouse.click(free.x + free.width + 60, free.y + free.height / 2);
  await dialog();
  await shot(`${D}/AnlassKalender/List_ANL_KalAn_FixBG.png`);
  await closeDialog();

  // Bestehende Buchungen hinzufügen: nur bis zur Auswahl
  await go(VIEW);
  await button('Bestehende Buchungen hinzufügen').click();
  await settle(1200);
  await page.locator('.smartListContainer table tbody tr input[type=checkbox]').first().check();
  await page.waitForTimeout(400);
  await mark(button('Zum Anlass hinzufügen'));
  await shot(`${D}/BGhinzufuegen/List_ANL_DS_bestBGhinzu_Ausw_b.png`);

  // Massenbearbeitung: Mit Zahlungsrechten bricht sie im Debug-Build ab (fehlender Hilfetext zu Reservation.PaymentExportStatus).
  // Deshalb Julia Moser aus seed-listen-anlaesse.sql, mit einer ihrer eigenen Buchungen im Kundentag.
  const julia = await session('julia.moser');
  try {
    await julia.go('/Lists/Anlass/View/2');
    await julia.page.locator('fieldset.mainContent tr', { hasText: 'Jungfrau' }).locator('input[type=checkbox]').first().check();
    await julia.page.waitForTimeout(400);
    await julia.page.getByRole('button', { name: 'Bearbeiten', exact: true }).first().click();
    await julia.page.waitForLoadState('networkidle', { timeout: 60000 });
    await julia.page.waitForTimeout(1500);
    await julia.shot(`${D}/BGhinzufuegen/List_ANL_DS_bestBGhinzu_Mass.png`);
    await julia.page.getByRole('button', { name: 'Abbrechen', exact: true }).click();
  } finally {
    await julia.close();
  }

  // Ressourcen zu Anlass buchen (Liste)
  await go(VIEW);
  await button('Ressourcen zu Anlass buchen (Liste)').click();
  await settle(1200);
  await page.locator('#mainpanel a, #mainpanel h3, #mainpanel span', { hasText: 'Kapazität' }).first().click();
  await settle(1200);
  await page.locator('.smartListContainer:visible table tbody tr input[type=checkbox]').first().check();
  await page.waitForTimeout(400);
  const quick = page.getByRole('button', { name: /Schnellbuchung/ }).first();
  await mark(quick);
  await shot(`${D}/BGhinzufuegen/List_ANL_DS_plusRESlist_Ausw_b.png`);
  await quick.click();
  await dialog();
  await shot(`${D}/BGhinzufuegen/List_ANL_DS_plusRESlist_Mass_b.png`);
  await closeDialog();

  // Ressourcen zu Anlass buchen (Kalender)
  await go(VIEW);
  await button('Ressourcen zu Anlass buchen (Kalender)').click();
  await settle(2000);
  // Freier Platz in der Zeile Jungfrau um 15 Uhr, im Zeitfenster des Anlasses
  const row = await page.locator('#mainpanel').getByText('Jungfrau', { exact: true }).first().boundingBox();
  await page.mouse.click(952, row.y + row.height / 2);
  await dialog();
  await shot(`${D}/BGhinzufuegen/List_ANL_DS_plusRESKal_Ausw.png`);
  await closeDialog();
}
