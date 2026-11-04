// Kalender: Ansichten, Hover, Buchungsfenster, Legende, Icons und Drag-Zustände.
// Ziehen wird nie losgelassen und Dialoge werden abgebrochen, damit nichts gespeichert wird.
// Läuft als Thomas Meier, weil ROOMS die Hervorhebungen und Filter pro Person speichert und das Admin-Login von anderen Szenen benutzt wird.
import { session } from '../lib.mjs';
export const user = 'superuser';
const K = '3VROOMS/Kalender';
const B = `${K}/Kalenderansicht/Kalenderbereich`;
const E = `${K}/ImKalenderBuchen/BuchungBearbeiten`;

export default async function ({ page, go, shot, mark }) {
  const idle = async (ms = 500) => { await page.waitForLoadState('networkidle'); await page.waitForTimeout(ms); };
  const event = (title) => page.locator('.calendar-timeline-item-event', { hasText: title }).first();
  const view = async (name) => { await page.locator('a.ui-tabs-anchor', { hasText: name }).first().click(); await idle(800); };
  const footerIcon = (title) => page.locator(`.calendar-footer label[title*="${title}"]`).first();
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
  const openCalendar = async () => {
    await resetCalendarFilter();
    // Hervorhebungen ausschalten, damit die Statusfarben kräftig bleiben.
    for (const label of await page.locator('.calendar-footer label.ui-state-active[title*="hervorheben"]').all()) await label.click();
    // Eine eingeblendete Person bleibt ebenfalls gespeichert und wird entfernt.
    for (const close of await page.locator('.calendar-person-item .flexIconPopupClose').all()) { await close.click(); await idle(); }
    if (await page.locator('#teilnehmerSuche').isVisible()) { await page.locator('#showTeilnehmer').click(); await idle(); }
    // Die mehrzeilige Ansicht speichert ROOMS ebenfalls. Die Szene startet immer kompakt.
    const multiline = page.locator('label.calendarViewOptionButton').first();
    if ((await multiline.getAttribute('class')).includes('ui-state-active')) await multiline.click();
    await idle();
    await page.mouse.move(5, 5);
  };

  await openCalendar();
  await shot(`${K}/Kalenderansicht/Kalender_Kalenderansicht.png`);
  await shot(`${B}/Ansichtsarten/Kalender_Tagesansicht.png`);

  // Icons der Fussleiste
  await page.mouse.move(5, 5);
  await shot(`${B}/Kalender_ansicht_Toolleiste.png`, { clip: page.locator('.calendar-footer-feature').first(), padding: 4 });
  const footer = { Anlass: 'Anlass', Serie: 'Serie', Bestellungen: 'Bestellungen', virtuelleräume: 'virtuelle Räume', mobiles_Equipment: 'mobiles Equipment', Parkplätze: 'Parkplätze' };
  for (const [file, title] of Object.entries(footer)) await shot(`${B}/Icon_${file}.png`, { clip: footerIcon(title), padding: 2 });

  // Icons der Kopfleiste
  const F = `${B}/AnsichtsFunktionen`;
  await shot(`${F}/Icon_Tag_wechseln.png`, { clip: page.locator('.flexIconCalendarRight').first(), padding: 2 });
  await shot(`${F}/Icon_Slider_vergrössern.png`, { clip: page.locator('.ui-slider-handle:visible').first(), padding: 4 });
  await shot(`${F}/Icon_100_prozent.png`, { clip: page.locator('#FitToSize').first(), padding: 2 });
  await shot(`${F}/Icon_Liste_verkleinern.png`, { clip: page.locator('label.calendarViewOptionButton').first(), padding: 2 });
  await shot(`${F}/Icon_datumspicker.png`, { clip: page.locator('button.ui-datepicker-trigger:visible').last(), padding: 2 });
  await shot(`${F}/Icon_Personen_anzeigen.png`, { clip: page.locator('#showTeilnehmer').first(), padding: 2 });

  // Slider vergrössert den Tag: Regler ein Stück nach rechts ziehen
  const handle = await page.locator('.ui-slider-handle:visible').first().boundingBox();
  await page.mouse.move(handle.x + 10, handle.y + 8);
  await page.mouse.down();
  await page.mouse.move(handle.x + 28, handle.y + 8, { steps: 6 });
  await page.mouse.up();
  await idle(800);
  await mark(page.locator('.zoomSlider:visible').first());
  await shot(`${F}/Kalender_Slideransicht.png`);
  await page.locator('#FitToSize').click();
  await idle();

  // Button neben dem Fadenkreuz schaltet zwischen kompakt und mehrzeilig. Bild zeigt die kompakte Liste.
  await mark(page.locator('label.calendarViewOptionButton').first());
  await shot(`${F}/Kalender_Liste_verkleinert_anzeigen.png`);

  // Person einblenden
  await page.locator('#showTeilnehmer').click();
  await idle();
  await page.locator('#teilnehmerSuche').click();
  await page.locator('#teilnehmerSuche').pressSequentially('Frei', { delay: 40 });
  await page.waitForTimeout(1200);
  await page.locator('.ui-autocomplete:visible li, .ui-menu-item:visible').first().click();
  await idle(1000);
  await shot(`${F}/Kalender_Personen_anzeigen.png`);
  await page.locator('.calendar-person-item .flexIconPopupClose').first().click();
  await idle();

  await openCalendar();

  // Tooltip
  await event('Geschäftsleitung').hover();
  await page.waitForTimeout(800);
  await shot(`${K}/Kalenderansicht/Kalender_Tooltip_Mouseover.png`);

  // Das Buchungsfenster zeigt alle Aktionen nur bei einer künftigen Buchung und mit Admin-Rechten.
  // Deshalb eine morgige Buchung in einer eigenen Admin-Session, sonst hinge das Bild von der Tageszeit ab.
  const admin = await session('admin');
  try {
    const a = admin.page;
    await admin.go('/Calendar/Calendar/Find?preserveFilter=False');
    await a.locator('.calendar-date-slider .flexIconCalendarRight').click();
    await a.waitForLoadState('networkidle');
    await a.waitForTimeout(800);
    await a.locator('.calendar-timeline-item-event', { hasText: 'Strategie' }).first().hover();
    await a.waitForTimeout(500);
    await a.locator('#reservationEdit:visible').first().click({ force: true });
    await a.locator('#popUp_calendarPopup').waitFor();
    await a.waitForTimeout(600);
    await admin.shot(`${E}/Kalender_Buchung_Plus.png`);

    // Annullieren über Weitere Aktionen
    await a.locator('#popUp_calendarPopup .menu-button-trigger').click();
    await a.waitForTimeout(200);
    await a.locator('#popUp_calendarPopup .bookAnnul').click();
    await a.waitForLoadState('networkidle');
    await a.waitForTimeout(500);
    const cancelPopup = a.locator('.popUp:visible').last();
    await admin.shot(`${E}/Kalender_Buchung_annullation.png`, { clip: cancelPopup, padding: 0 });
    await cancelPopup.locator('button, input[type=button]').filter({ hasText: 'Abbrechen' }).first().click();
  } finally {
    await admin.close();
  }

  // Checkbox der Buchung
  await event('Geschäftsleitung').hover();
  await page.locator('.selectReservationCheckbox:visible').first().check();
  await idle();
  await mark(page.locator('.calendar-footer button:has-text("Bearbeiten"), .calendar-footer input[value="Bearbeiten"]').first());
  await shot(`${E}/Kalender_Buchung_auswählen.png`);

  // Länge ändern: rechten Rand ziehen, nicht loslassen
  await openCalendar();
  let box = await event('Sprint Review').boundingBox();
  await page.mouse.move(box.x + box.width - 2, box.y + box.height / 2);
  await page.waitForTimeout(300);
  await page.mouse.down();
  await page.mouse.move(box.x + box.width + 60, box.y + box.height / 2, { steps: 8 });
  await page.waitForTimeout(400);
  await shot(`${E}/Kalender_Buchung_Länge_ändern.png`);

  // Verschieben: Buchung packen und ziehen, nicht loslassen
  await openCalendar();
  box = await event('Sprint Review').boundingBox();
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  await page.waitForTimeout(300);
  await page.mouse.down();
  await page.mouse.move(box.x + box.width / 2 + 70, box.y + 66, { steps: 8 });
  await page.waitForTimeout(400);
  await shot(`${E}/Kalender_Buchung_verschieben.png`);

  // Neue Buchung: Klick auf eine freie Zeit, Popup Schnellbuchung
  await openCalendar();
  box = await event('Sprint Review').boundingBox();
  await page.mouse.click(box.x + box.width + 40, box.y + box.height / 2);
  await idle(800);
  await shot(`${K}/ImKalenderBuchen/BuchungVornehmen/Kalender_neue_Buchung_Schnellbuchung.png`);
  await page.locator('.popUp:visible .popUp-closeButton').first().click().catch(() => {});

  // Weitere Ansichten
  await openCalendar();
  await view('Arbeitswoche');
  await shot(`${B}/Ansichtsarten/Kalender_Arbeitswoche.png`);
  await view('Monat');
  await shot(`${B}/Ansichtsarten/Kalender_Monatsansicht.png`);
  await view('Tag');

  // Legende
  await page.locator('#LegendButton').click();
  await idle();
  await shot(`${B}/Legende/Kalender_Legende_Farben.png`, { clip: page.locator('.popUp:visible').last() });
}
