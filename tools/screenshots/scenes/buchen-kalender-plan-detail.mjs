// Detailbuchung: Reiter, Gesamtkosten, Serien und Zusammenfassung. Die Buchungen bleiben offen und werden am Ende abgebrochen.
const D = '3VROOMS/Buchen/BuchungErstellen/Detailbuchung';

export default async function ({ page, go, shot }) {
  // Abbrechen fragt nach, sobald die Buchung Bestellungen enthält.
  page.on('dialog', (dialog) => dialog.accept());
  const idle = async () => { await page.waitForLoadState('networkidle'); await page.waitForTimeout(500); };
  const tab = async (name) => { await page.locator(`a[href^="#"]`).filter({ hasText: name }).first().click(); await idle(); };
  const cancel = async () => { await page.locator('button:visible, input[type=button]:visible').filter({ hasText: /^Abbrechen$/ }).last().click(); await idle(); };
  const inDays = (n) => { const d = new Date(); d.setDate(d.getDate() + n); return d.toLocaleDateString('de-CH', { day: '2-digit', month: '2-digit', year: 'numeric' }); };

  const open = async () => {
    await go('/Book/ReservationFromRessource/Find?preserveFilter=False');
    await page.locator('#ReservationFilter_ManualDateTimeSelection').check();
    await page.locator('#dtpReservationFilterDateFrom').fill(inDays(6));
    await page.locator('#dtpReservationFilterDateFrom').press('Tab');
    await page.locator('#dtpReservationFilterTimeFrom').fill('09:00');
    await page.locator('#dtpReservationFilterTimeFrom').press('Tab');
    await page.locator('#dtpReservationFilterTimeTo').fill('10:00');
    await page.locator('#dtpReservationFilterTimeTo').press('Tab');
    await page.locator('input[value="Finden"]').click();
    await idle();
    await page.locator('tr').filter({ has: page.locator('a', { hasText: /^Jungfrau$/ }) }).first().locator('img[alt="Detailbuchung erstellen"]').click();
    await idle();
    await page.locator('input[name="Reservation.Titel"]').fill('Workshop Umzug Zürich');
  };

  await open();
  try {
    await shot(`${D}/Allgemein/Buchen_Detailbuchung_start.png`);

    await tab('Ressourcen');
    await shot(`${D}/Ressourcen/Detailbuchung_Ressource.png`);
    // Die Einzelansicht wird als Vorliebe gespeichert, darum danach wieder auf die aggregierte Ansicht zurück.
    await page.locator('label[for="ressourceSwitcherEinzeln"]').click();
    await idle();
    await shot(`${D}/Ressourcen/Detailbuchung_Ressource_Einzelansicht.png`);
    await page.locator('button, input', { hasText: 'Equipment hinzufügen' }).first().click();
    await idle();
    await shot(`${D}/Ressourcen/Detailbuchung_Ressource_hinzufügen.png`);
    await page.locator('.popUp:visible button, .popUp:visible input[type=button]').filter({ hasText: 'Abbrechen' }).first().click().catch(() => page.keyboard.press('Escape'));
    await idle();
    await page.locator('label[for="ressourceSwitcherAggregiert"]').click();
    await idle();

    await tab('Bestuhlung');
    await shot(`${D}/Bestuhlung/Detailbuchung_Bestuhlung.png`);

    await tab('Catering');
    await page.locator('#AngebotSelektorTxt').click();
    await page.locator('#AngebotSelektorTxt').pressSequentially('Kaffee', { delay: 40 });
    await page.waitForTimeout(1200);
    await page.locator('.ui-autocomplete:visible li, .ui-menu-item:visible').first().click();
    await idle();
    await page.locator('img.buttonAdd:visible').first().click();
    await page.locator('td', { hasText: 'Kaffee und Gipfeli' }).waitFor();
    await idle();
    await shot(`${D}/C&S/Detailbuchung_Catering_Service.png`);

    // Gesamtkosten mit der Bestellung von oben
    await page.locator('#kostenCalculatorImage').click();
    await idle();
    const cost = page.locator('.popUp:visible').last();
    await cost.getByText('Zuschlag', { exact: true }).click();
    await cost.locator('input[type=text]:visible').first().fill('Reinigung nach Workshop');
    await cost.locator('input[type=text]:visible').last().fill('120');
    await page.waitForTimeout(200);
    await page.locator('#addSurcharge').click();
    await idle();
    await shot(`${D}/Allgemein/Buchen_Detailbuchung_Gesamtkosten.png`);
    await page.keyboard.press('Escape');
    await page.waitForTimeout(300);

    await tab('Teilnehmer');
    await page.locator('#Reservation_Teilnehmer').click();
    await page.locator('#Reservation_Teilnehmer').pressSequentially('Frei', { delay: 40 });
    await page.waitForTimeout(1200);
    await page.locator('.ui-autocomplete:visible li, .ui-menu-item:visible').first().click();
    await idle();
    await shot(`${D}/Teilnehmer/Detailbuchung_Teilnehmenr.png`);
    await page.locator('button', { hasText: 'Neuer Teilnehmer' }).click();
    await idle();
    await shot(`${D}/Teilnehmer/Detailbuchung_Teilnehmer_Neu.png`);
    await page.keyboard.press('Escape');
    await page.locator('.popUp:visible button, .popUp:visible input').filter({ hasText: 'Abbrechen' }).first().click().catch(() => {});
    await idle();

    await tab('Reminder');
    await page.locator('textarea:visible').first().fill('Bitte Gäste um 08:45 am Empfang begrüssen.');
    await shot(`${D}/Reminder/Detailbuchung_Reminder.png`);

    await page.locator('input[type=submit][value="Buchung abschliessen"]').click();
    await idle();
    await shot(`${D}/Detailbuchung_abschliessen.png`);
  } finally {
    await cancel();
  }

  // Serien: Prüfstatus mit Konflikt am 14. Tag, an dem Jungfrau schon gebucht ist.
  await open();
  try {
    await tab('Serieninformationen');
    await shot(`${D}/Serieninformationen/DetailbuchungSerieninformation.png`);
    await page.locator('#RecurrenceType_Monthly').check();
    await page.waitForTimeout(300);
    await shot(`${D}/Serieninformationen/Detailbuchung_Serieninformation_monatlich.png`);
    await page.locator('#RecurrenceType_Daily').check();
    await page.locator('#SerieOptions_IsSerieBegrenzungWithEndeDatum[value=False]').check();
    await page.locator('#SerieOptions_EndetNachXIterationen').fill('10');
    await page.locator('#btnSerieErstellen').click();
    await idle();
    await page.waitForTimeout(1500);
    await shot(`${D}/Serieninformationen/Detailbuchung_Serieninformation_Prüfstatus.png`);
    await page.locator('i[title="Alternative wählen"]').last().click();
    await idle();
    await shot(`${D}/Serieninformationen/Detailbuchung_Prüfstatus_bearbeiten.png`);
    await cancel();
  } finally {
    await cancel();
  }
  await go('/Book/ReservationFromRessource/Find?preserveFilter=False');
}
