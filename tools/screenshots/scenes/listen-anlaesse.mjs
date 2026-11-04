// Anlässe suchen, Detailansicht und Anlass erstellen. Alle Formulare werden vor dem Speichern abgebrochen.
const A = '3VROOMS/Listen/AnlaesseSuchen';
const D = `${A}/Anzeigenbereich/DetailansichtAnlaesse`;
const E = `${A}/AnlassErstellen/Detailbuchung`;
const VIEW = '/Lists/Anlass/View/1';

export default async function (s) {
  const { page, go, shot, mark } = s;
  const settle = async (ms = 800) => { await page.waitForLoadState('networkidle', { timeout: 60000 }); await page.waitForTimeout(ms); };
  const button = (name) => page.getByRole('button', { name, exact: true });
  const clickTab = async (name) => { await page.locator('.ui-tabs-nav a', { hasText: name }).first().click(); await settle(); };
  const popup = () => page.locator('.popUp:visible, .ui-dialog:visible').first();
  const dialog = async () => { await popup().waitFor(); await settle(1500); return popup(); };
  // Popups haben je nach Dialog eine Abbrechen-Schaltfläche oder nur das Kreuz im Kopf.
  const closeDialog = async () => {
    const cancel = popup().getByRole('button', { name: /Abbrechen|Nein/ });
    if (await cancel.count()) await cancel.first().click();
    else await popup().locator('.popUp-closeButton, .ui-dialog-titlebar-close').first().click();
    await page.waitForTimeout(500);
  };
  const field = (label) => page.locator('.fieldsetElement:visible').filter({ has: page.locator('label', { hasText: label }) }).first();
  const side = () => page.locator('.sidePanelContent:visible').first();
  const control = (label) => field(label).locator('> :not(label)').first();
  const openSection = async (name) => {
    const title = page.locator('h3.multipleAccordionTitel', { hasText: name }).first();
    await title.click();
    await page.waitForTimeout(500);
    // Die geöffnete Sektion nach oben rollen, damit alle ihre Felder im Ausschnitt liegen.
    await title.evaluate((e) => e.scrollIntoView({ block: 'start' }));
    await page.waitForTimeout(200);
  };

  // Suche und Liste
  await go('/Lists/Anlass/Find');
  await mark(page.locator('h3', { hasText: 'Anlässe' }).first());
  await shot(`${A}/List_ANL_ANLsuche_beschriftet.png`);
  await mark(page.locator('#AnlassList .smartListLayout'));
  await shot(`${A}/Anzeigenbereich/List_ANL_AnzBer_b.png`, { clip: '#mainpanel', padding: 0 });
  await shot(`${A}/Anzeigenbereich/SpaltenansichtStandard/Bleistift.png`, { clip: page.locator('#AnlassList table tbody tr img, #AnlassList table tbody tr i.flexIconEdit, #AnlassList table tbody tr a[href*="/Edit/"] i, #AnlassList table tbody tr a[href*="/Edit/"] img').first(), padding: 2 });
  await shot(`${A}/EinfacheSuche/List_ANL_EinfSuch.png`, { clip: side(), padding: 2 });
  await mark(page.locator('h3.multipleAccordionTitel', { hasText: 'Anlassspezifische Kriterien' }));
  await mark(page.locator('h3.multipleAccordionTitel', { hasText: 'Personspezifische Kriterien' }));
  await shot(`${A}/ErweiterteSuche/List_ANL_ErwSuch.png`);
  await openSection('Anlassspezifische Kriterien');
  await shot(`${A}/ErweiterteSuche/AnlassspezKriterien/List_ANL_ErwSuch_AnlSpezKrit_b.png`, { clip: side(), padding: 2 });
  await openSection('Anlassspezifische Kriterien');
  await openSection('Personspezifische Kriterien');
  await shot(`${A}/ErweiterteSuche/PersonenspezKriterien/List_ANL_ErwSuch_PersSpezKrit_b.png`, { clip: side(), padding: 2 });

  // Detailansicht, Reiter Anlass
  await go(VIEW);
  await shot(`${D}/List_ANL_DS.png`);
  await shot(`${D}/List_ANL_DS_Kurz.png`, { clip: side(), padding: 2 });
  // Ausschnitt vom Titel "Hinzugefügte Buchungen" bis zu den Schaltflächen der Liste. Der Rahmen ist unsichtbar und dient nur als Clip.
  await page.evaluate(() => {
    const h = [...document.querySelectorAll('fieldset.mainContent h1')].find((e) => e.textContent.includes('Hinzugefügte Buchungen'));
    const next = [...document.querySelectorAll('fieldset.mainContent h1')].find((e) => e.textContent.includes('Hinzugefügte Catering'));
    const a = h.getBoundingClientRect();
    const b = next.getBoundingClientRect();
    const r = document.createElement('div');
    r.id = 'docs-clip';
    r.style.cssText = `position:fixed;pointer-events:none;left:${a.left}px;top:${a.top}px;width:${a.width}px;height:${b.top - a.top}px;`;
    document.body.appendChild(r);
  });
  await mark(page.locator('fieldset.mainContent tr', { hasText: 'Säntis' }).locator('a[href*="Edit"], i, img').first());
  await mark(page.locator('fieldset.mainContent tr', { hasText: 'Säntis' }).locator('input[type=checkbox]').first());
  await mark(button('Bearbeiten').first());
  await shot(`${D}/Anlass/List_ANL_DSunten_b.png`, { clip: '#docs-clip', padding: 2 });
  await shot(`${D}/Anlass/Schaltflaechen/List_ANL_DS_Schalt.png`, { clip: button('Kopieren').locator('xpath=ancestor::div[1]'), padding: 2 });

  // Die Meldung ist durchscheinend, deshalb mit der Kopfzeile dahinter aufnehmen.
  await button('Anlässe für Serien').click();
  await page.locator('.notification-message:visible').first().waitFor();
  await page.waitForTimeout(600);
  await page.evaluate(() => {
    document.getElementById('docs-clip')?.remove();
    const r = document.createElement('div');
    r.id = 'docs-clip';
    r.style.cssText = 'position:fixed;pointer-events:none;left:760px;top:0;width:520px;height:130px;';
    document.body.appendChild(r);
  });
  await shot(`${D}/Anlass/Schaltflaechen/List_ANL_DS_Serie_xSerie_b.png`, { clip: '#docs-clip', padding: 0 });

  await go(VIEW);
  await button('Anlass stornieren').click();
  await dialog();
  await shot(`${D}/Anlass/Schaltflaechen/List_ANL_DS_Ann_b.png`);
  await closeDialog();

  // Historik
  await clickTab('Historik');
  await shot(`${D}/Historik/List_ANL_DS_Hist_b.png`);
  await page.locator('p.HistoryItemHeadLevel1', { hasText: 'Änderung' }).first().click();
  await settle(1200);
  const level2 = page.locator('.HistoryItemHeadLevel2').first();
  if (await level2.count()) { await level2.click(); await settle(800); }
  await shot(`${D}/Historik/List_ANL_DS_HistAend_b.png`);

  // Schnellbuchung eines Anlasses aus der Buchungsliste
  await go('/Lists/Reservation/FindReservation');
  await page.locator('tr', { hasText: 'Führungsschulung Bern' }).first().locator('input[type=checkbox]').check();
  await page.waitForTimeout(400);
  await button('Anlass erstellen').click();
  await dialog();
  await shot(`${A}/AnlassErstellen/Schnellbuchung/List_ANL_ANLerst_b.png`);
  await closeDialog();

  // Anlass erstellen: neue Eingabemaske
  await go('/Book/ReservationFromRessource/Find?preserveFilter=False');
  await page.locator('h3', { hasText: 'Anlass' }).first().click();
  await settle();
  await page.locator('.sidePanelContent:visible').getByText('Erstellen', { exact: true }).first().click();
  await settle();
  await page.fill('#Anlass_Titel', 'Sommerfest Muster AG');
  await shot(`${E}/BG_ANL_ANLerst.png`);
  await shot(`${E}/BG_ANL_ANLerst_Eing_Intelibox.png`, { clip: control('Standort'), padding: 2 });
  await shot(`${E}/BG_ANL_ANLerst_Eing_InteliboxPers.png`, { clip: control('Person Organisator'), padding: 2 });
  await shot(`${E}/BG_ANL_ANLerst_Eing_InteliboxKost.png`, { clip: field('Kostenträger'), padding: 2 });
  await button('Abbrechen').click();
  await settle();

  // Bestehender Anlass: Kostenaufteilung, Catering und Teilnehmer
  await go(VIEW);
  await button('Bearbeiten').last().click();
  await settle();
  await shot(`${E}/BG_ANL_ANLerst_Eing_InteliboxKost2.png`, { clip: field('Kostenträger'), padding: 2 });

  await clickTab('Catering');
  // Schnellauswahl über das Plus neben dem Eingabefeld
  await page.locator('#AngebotSelektorTxt').locator('xpath=../..').locator('a,i,button').last().click();
  await settle(1500);
  await shot(`${E}/BG_ANL_ANLerst_Eing_CSsuche.png`);
  await page.keyboard.press('Escape');
  await page.mouse.click(620, 480);
  await page.waitForTimeout(300);
  await page.locator('#mainpanel table tbody tr input[type=checkbox]').first().check();
  await mark(page.locator('#btnBestellungenAktualisieren'));
  await mark(button('Entfernen').first());
  await shot(`${E}/BG_ANL_ANLerst_Eing_CSbearb.png`);

  await clickTab('Teilnehmer');
  await page.locator('#Anlass_Teilnehmer').pressSequentially('Mar', { delay: 80 });
  await page.waitForTimeout(1500);
  await shot(`${E}/BG_ANL_ANLerst_Eing_TN_b.png`);
  await page.locator('#Anlass_Teilnehmer').fill('');
  await page.keyboard.press('Escape');
  await button('Neuer Teilnehmer').click();
  await dialog();
  await shot(`${E}/BG_ANL_ANLerst_Eing_TNhinzu.png`);
  await closeDialog();
  await button('Abbrechen').last().click();
  await settle();
}
