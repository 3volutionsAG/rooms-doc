// Massen-Schnellbuchung, Massenbearbeitung im Kalender und in den Listen, Kalenderfilter, Anlass. Nichts wird gespeichert, alle Dialoge werden abgebrochen.
// Die Spalte Sync der Massen-Schnellbuchung erscheint nur, wenn die Person synchronisiert (siehe seed-buchen-kalender-plan.sql).
import { session } from '../lib.mjs';

export const user = 'superuser';
const S = '3VROOMS/Buchen/BuchungErstellen/Schnellbuchung/Massenbuchung';
const M = '3VROOMS/Buchen/Massenbearbeitung';
const F = '3VROOMS/Buchen/FreieRessourcenSuchen';
const K = '3VROOMS/Kalender';

export default async function ({ page, go, shot, mark }) {
  page.on('dialog', (dialog) => dialog.accept());
  const idle = async (ms = 500) => { await page.waitForLoadState('networkidle'); await page.waitForTimeout(ms); };
  const inDays = (n) => { const d = new Date(); d.setDate(d.getDate() + n); return d.toLocaleDateString('de-CH', { day: '2-digit', month: '2-digit', year: 'numeric' }); };
  const row = (name) => page.locator('tr').filter({ has: page.locator('a', { hasText: new RegExp(`^${name}$`) }) }).first();
  const popup = () => page.locator('.popUp:visible').last();
  // ROOMS speichert den Kalenderfilter pro Person, auch über preserveFilter=False hinaus. Die Szene setzt ihn deshalb ausdrücklich auf Räume ohne Standort.
  const resetCalendarFilter = async () => {
    await go('/Calendar/Calendar/Find?preserveFilter=False');
    await idle();
    for (const name of ['Arbeitsplatz', 'Benutzerdefiniert', 'Equipment', 'Fahrzeug', 'Parkplatz']) {
      const token = page.locator('li.rooms-tokenizer-item', { hasText: name });
      if (await token.count()) { await token.first().locator('span').click(); await page.waitForTimeout(300); }
    }
    while (await page.locator('[id^="CalendarFilter_StandortList_"] li.rooms-tokenizer-item span').count()) {
      await page.locator('[id^="CalendarFilter_StandortList_"] li.rooms-tokenizer-item span').first().click();
      await page.waitForTimeout(200);
    }
    await page.locator('input[value="Anzeigen"], button:has-text("Anzeigen")').first().click();
    await idle();
  };
  const search = async () => {
    await go('/Book/ReservationFromRessource/Find?preserveFilter=False');
    await page.locator('#ReservationFilter_ManualDateTimeSelection').check();
    await page.locator('#dtpReservationFilterDateFrom').fill(inDays(6));
    await page.locator('#dtpReservationFilterDateFrom').press('Tab');
    await page.locator('input[value="Finden"]').click();
    await idle();
  };

  // Massen-Schnellbuchung
  await search();
  for (const name of ['Eiger', 'Jungfrau', 'Mönch']) await row(name).locator('input[type=checkbox]').check();
  await page.locator('#btnSchnellReservation').click();
  await idle();
  await shot(`${S}/Buchen_Massenschnellbuchung.png`, { clip: popup() });

  // Anlass erstellen im Reiter Buchen
  await search();
  await page.locator('a', { hasText: /^Anlass$/ }).first().click();
  await idle();
  await page.locator('button, input[type=button], input[type=submit]').filter({ hasText: /^Erstellen$/ }).first().click();
  await idle();
  await page.locator('input[name$="Titel"]:visible').first().fill('Kundentag Frühling');
  await shot(`${F}/SuchenNachKriterien/FR_Anlass_erstellen.png`);
  await page.locator('button:visible, input[type=button]:visible').filter({ hasText: /^Abbrechen$/ }).last().click();
  await idle();

  // Kalenderfilter im Sidepanel
  await resetCalendarFilter();
  await page.locator('a', { hasText: 'Erweiterte Kriterien' }).first().click();
  await page.waitForTimeout(400);
  await page.locator('#CalendarFilter_RessourcetypIdListImage').click();
  await idle();
  await shot(`${K}/ImKalenderSuchen/Kalender_Sidepanel.png`);
  await shot(`${F}/Kalendersuche/Kalender_Sidepanel.png`);

  // Mehrere Standorte
  await resetCalendarFilter();
  await page.locator('#CalendarFilter_StandortList_0_Image').click();
  await idle();
  await page.locator('#CalendarFilter_StandortList_0_ImagePopUp li[id="6"] > span').click();
  await idle();
  await page.locator('#CalendarFilter_StandortList_1_Image').click();
  await idle();
  await shot(`${K}/ImKalenderSuchen/Kalender_Standort_Sidepanel.png`);

  // Massenbearbeitung im Kalender
  await resetCalendarFilter();
  for (const title of ['Geschäftsleitung', 'Sprint Review']) {
    await page.locator('.calendar-timeline-item-event', { hasText: title }).first().hover();
    await page.locator('.selectReservationCheckbox:visible:not(:checked)').first().check();
    await idle(200);
  }
  await page.mouse.move(5, 5);
  await page.waitForTimeout(600);
  const editButton = page.locator('.calendar-footer button, .calendar-footer input').filter({ hasText: /^Bearbeiten$/ }).first();
  await mark(editButton);
  await shot(`${M}/Massenbearbeitung_Kalender.png`);
  // Mit dem Recht auf die Kostenübersicht wirft die Debug-Version hier "Kein gültiger HilfeText gefunden" (Reservation.PaymentExportStatus).
  // Das Formular kommt deshalb von Julia Moser (seed-listen-anlaesse.sql), die dieses Recht nicht hat.
  const julia = await session('julia.moser');
  try {
    await julia.go('/Lists/Reservation/FindReservation?preserveMeineListe=False');
    await julia.page.evaluate(() => {
      document.querySelector('select[name="ReservationFilter.Reservationszeitpunkt"]').value = '0';
    });
    await julia.page.getByRole('button', { name: 'Finden' }).click();
    await julia.page.waitForLoadState('networkidle');
    await julia.page.waitForTimeout(800);
    const rows = julia.page.locator('tr').filter({ has: julia.page.locator('input[type=checkbox][value]') });
    for (const n of [0, 1]) await rows.nth(n).locator('input[type=checkbox]').first().check();
    await julia.page.locator('#Massenmutationsbutton').click();
    await julia.page.waitForLoadState('networkidle');
    await julia.page.waitForTimeout(500);
    await julia.shot(`${M}/Massenbearbeitung_Felder_eintragen.png`);
    await julia.page.locator('button:visible, input[type=button]:visible').filter({ hasText: /^Abbrechen$/ }).last().click();
    await julia.page.waitForLoadState('networkidle');
  } finally {
    await julia.close();
  }

  // Massenbearbeitung in den Listen: alle laufenden und künftigen Buchungen
  const list = async () => {
    await go('/Lists/Reservation/FindReservation?preserveMeineListe=False');
    await page.evaluate(() => {
      document.querySelector('input[name="ReservationFilter.Titel"]').value = '';
      document.querySelector('select[name="ReservationFilter.Reservationszeitpunkt"]').value = '2';
    });
    await page.getByRole('button', { name: 'Finden' }).click();
    await idle(800);
  };
  const selectTwo = async () => {
    const rows = page.locator('tr').filter({ has: page.locator('input[type=checkbox][value]') });
    for (const n of [0, 1]) await rows.nth(n).locator('input[type=checkbox]').first().check();
    await page.mouse.move(5, 5);
  };
  await list();
  await selectTwo();
  await mark(page.locator('#Massenmutationsbutton'));
  await shot(`${M}/Massenbearbeitung_Listen.png`);

  await list();
  await selectTwo();
  await page.locator('#MassenannullierenButton').click();
  await idle();
  await mark(page.locator('#MassenannullierenButton'));
  await shot(`${M}/Massenannultion/Massenannulation.png`);
  await popup().locator('button, input[type=button]').filter({ hasText: /^Abbrechen$/ }).first().click();
  await idle();

  // Die ausgewählten Buchungen laufen nicht, also zeigt ROOMS den Hinweis, dass nichts freigegeben werden kann.
  await list();
  await selectTwo();
  await page.locator('#Massenfreigebenbutton').click();
  await idle();
  await mark(page.locator('#Massenfreigebenbutton'));
  await shot(`${M}/Massenfreigabe/Massenfreigabe.png`);
  await popup().locator('button, input[type=button]').filter({ hasText: /^Abbrechen$/ }).first().click().catch(() => page.locator('.popUp:visible .popUp-closeButton').last().click());
  await idle();

  // Zusammenfassung des Anlasses und seine Buchungen im Kalender
  await go('/Lists/Anlass/View/1');
  await idle();
  await shot(`${S}/Buchen_Massenschnellbuchung_bestätigt.png`);
  await page.locator('button, a, input[type=button]').filter({ hasText: 'Anlass buchen (Kalender)' }).first().click();
  await idle(800);
  await shot(`${S}/Buchen_Massenschnellbuchung_im_Kalender_sichtbar.png`);
  // Der Kalender bleibt sonst im Anlass-Modus und behält dessen Filter.
  await page.locator('button:visible, input[type=button]:visible').filter({ hasText: 'Zurück zum Anlass' }).first().click();
  await idle();
  await resetCalendarFilter();
  await go('/Book/ReservationFromRessource/Find?preserveFilter=False');
}
