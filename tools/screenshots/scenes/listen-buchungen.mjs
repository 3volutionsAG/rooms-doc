// Buchungssuche, Spalten und Detailansicht einer Buchung unter 3VROOMS/Listen/BuchungenSuchen.
// Braucht seed-listen-buchungen.sql. Die Spaltenauswahl und die Filter speichert ROOMS pro Person, deshalb läuft die Szene mit einem eigenen Login.
// Dialoge werden nur geöffnet und wieder abgebrochen.
export const user = 'laura.baumann';

const AREA = '3VROOMS/Listen/BuchungenSuchen';
const ANZ = `${AREA}/Anzeigenbereich`;
const DETAIL = `${ANZ}/DetailansichtBuchungen`;
const STD = `${ANZ}/SpaltenStandard`;
const ERW = `${ANZ}/SpaltenErweitert`;
const FKT = `${ANZ}/WeitereFunktionen`;
const SUCHE = `${AREA}/ErweiterteSuche`;
const LIST = '/Lists/Reservation/FindReservation?preserveMeineListe=True';
const MAIN = 'Projektsitzung Intranet';

const DEFAULT_COLUMNS = ['RessourceBezeichnung', 'Id', 'SerieId', 'Titel', 'CreationOrigin', 'PersonOrganisatorName', 'noExport_EditImage', 'Beginn', 'Ende', 'StatusBezeichnung', 'StandortHasPlan', 'InfoUrl', 'Priorisierung'];
const SYMBOL_COLUMNS = ['Titel', 'noExport_EditImage', 'noExport_Terminieren', 'noExport_Freigeben', 'noExport_Loeschen', 'noExport_Annulieren', 'noExport_VonAnlassEntfernen', 'StatusBezeichnungImage', 'IstPrivat', 'StandortHasPlan', 'StandortBeschreibung', 'Kommentar', 'KommentarTeilnehmer', 'KommentarVertraulich', 'KommentarAnnullation', 'noExport_RessourceInfo', 'BestaetigungSenden', 'IstNoShow', 'TooltipAnlass', 'TooltipBestellungList', 'TooltipMobilesEquipmentList', 'TooltipMobilesEquipmentAggregiertList', 'TooltipFixesEquipmentList', 'TooltipParkplatzList', 'TooltipFahrzeugList', 'TooltipSerie', 'TooltipVirtuelleRaeumeList'];

const settle = (page, ms = 500) => page.waitForLoadState('networkidle').then(() => page.waitForTimeout(ms));

async function setColumns(page, columns) {
  await page.evaluate((c) => SmartListAction('ReservationList', null, 'columnOrder', `${c.join(',')},`), columns);
  await settle(page, 1000);
}

// Sucht über das Formular im Sidepanel. zeit: 0 alle, 2 laufende und künftige Buchungen.
async function search({ page, go }, { titel = '', zeit = 2, annulliert = false } = {}) {
  await go(LIST);
  await page.evaluate(({ titel, zeit, annulliert }) => {
    document.querySelector('input[name="ReservationFilter.Titel"]').value = titel;
    document.querySelector('select[name="ReservationFilter.Reservationszeitpunkt"]').value = String(zeit);
    if (annulliert) {
      const status = document.createElement('input');
      status.type = 'hidden';
      status.name = 'ReservationFilter.WorkflowStatusIds';
      status.value = '5';
      document.querySelector('#sidePanelForm').appendChild(status);
    }
  }, { titel, zeit, annulliert });
  await page.getByRole('button', { name: 'Finden' }).click();
  await settle(page, 800);
}

const rowOf = (page, titel) => page.locator('tr', { has: page.getByRole('link', { name: titel, exact: true }) }).first();

// Liefert das Symbol einer Spalte in der Zeile einer Buchung. Die Spalte kommt aus der Kopfzeile, weil die Liste keine Spalten-IDs an die Zellen schreibt.
async function iconOf(page, titel, column) {
  const heads = await page.evaluate(() => [...[...document.querySelectorAll('tr')].find((r) => /Buchungs Titel/.test(r.textContent)).children].map((c) => c.textContent.trim()));
  const index = column === 'Bearbeiten' ? heads.indexOf('Buchungs Titel') + 1 : heads.findIndex((h) => h.startsWith(column));
  if (index < 0) throw new Error(`Spalte fehlt: ${column}`);
  const icon = rowOf(page, titel).locator('td').nth(index).locator('img,i').first();
  await icon.scrollIntoViewIfNeeded();
  return icon;
}

// Unsichtbarer Rahmen um mehrere Elemente, für Ausschnitte und Markierungen über mehrere Elemente.
let unionCount = 0;
async function union(page, ...targets) {
  const boxes = [];
  for (const t of targets) boxes.push(await (typeof t === 'string' ? page.locator(t) : t).first().boundingBox());
  if (targets[0] === '#sidepanel') boxes[0].height = 1; // Nur die Oberkante des Sidepanels zählt.
  const x = Math.min(...boxes.map((b) => b.x)), y = Math.min(...boxes.map((b) => b.y));
  const r = Math.max(...boxes.map((b) => b.x + b.width)), b = Math.max(...boxes.map((b) => b.y + b.height));
  const id = `docs-union-${unionCount += 1}`;
  await page.evaluate(({ id, x, y, w, h }) => {
    const el = document.createElement('div');
    el.id = id;
    el.style.cssText = `position:fixed;pointer-events:none;left:${x}px;top:${y}px;width:${w}px;height:${h}px`;
    document.body.appendChild(el);
  }, { id, x, y, w: r - x, h: b - y });
  return page.locator(`#${id}`);
}

async function hoverShot(s, file, titel, column) {
  const { page, shot } = s;
  await page.mouse.move(700, 600);
  await page.waitForTimeout(200);
  const icon = await iconOf(page, titel, column);
  await icon.hover();
  const tip = page.locator('#xtooltipGlobal');
  await tip.waitFor({ state: 'visible' });
  await page.waitForTimeout(500);
  await shot(file, { clip: await union(page, icon, tip), padding: 4 });
  await page.mouse.move(700, 600);
}

async function iconShot({ page, shot }, file, titel, column) {
  await page.mouse.move(700, 600);
  await page.waitForTimeout(100);
  const icon = await iconOf(page, titel, column);
  await shot(file, { clip: icon, padding: 2 });
}

const DIALOG = '.ui-dialog:visible, .popUp:visible';

// Schliesst den offenen Dialog, ohne etwas auszulösen.
async function closeDialog(page) {
  const dialog = page.locator(DIALOG).first();
  const cancel = dialog.getByRole('button', { name: 'Abbrechen' });
  if (await cancel.count()) await cancel.first().click();
  else await dialog.locator('.popUp-closeButton, .ui-dialog-titlebar-close').first().click();
  await page.waitForTimeout(300);
}

async function suche(s) {
  const { page, go, shot, mark } = s;
  await go(LIST);
  await page.getByRole('button', { name: 'Zurücksetzen' }).click();
  await settle(page);
  await setColumns(page, DEFAULT_COLUMNS);
  await go(LIST);

  await mark('#mainnavigationLists');
  await mark(page.locator('#sidepanel').getByText('Buchungen', { exact: true }).first());
  await shot(`${AREA}/List_BG_BGsuche_beschriftet.png`);

  await mark(await union(page, page.locator('#sidePanelForm').getByText('Ressourcenart').first(), 'input[name="ReservationFilter.StandortList[0].Value"]'));
  await shot(`${AREA}/EinfacheSuche/Listen_Buchungen_EinfacheSuche.png`, { clip: '#sidepanel' });

  // Für die Kriterien wird das Fenster höher, damit der Bereich nicht im Sidepanel scrollt.
  await page.setViewportSize({ width: 1280, height: 1300 });
  await page.waitForTimeout(500);
  const heads = page.locator('a.dattaya-maccordion-heading');
  await mark(await union(page, heads.first(), heads.last()));
  await shot(`${SUCHE}/Listen_Buchungen_ErweiterteSuche_beschriftet.png`, { clip: await union(page, '#sidepanel', heads.last()) });

  const sections = [
    ['Buchungsspezifische Kriterien', `${SUCHE}/BuchungsspezifischeKriterien/Listen_Buchungen_ErweiterteSuche_BGspezKrit_beschriftet.png`],
    ['Ressourcenspezifische Kriterien', `${SUCHE}/RessourcenspezifischeKriterien/Listen_Buchungen_ErweiterteSuche_ResSpezKrit_beschriftet.png`],
    ['Gliederungen', `${SUCHE}/Gliederungen/Listen_Buchungen_ErweiterteSuche_Glied_beschriftet.png`],
    ['Anlassspezifische Kriterien', `${SUCHE}/AnlassspezifischeKriterien/Listen_Buchungen_ErweiterteSuche_AnlSpezKrit_beschriftet.png`],
    ['Dienstleisterspezifische Kriterien', `${SUCHE}/DienstleisterspezifischeKriterien/Listen_Buchungen_ErweiterteSuche_DienstSpezKrit_beschriftet.png`],
    ['Kostenspezifische Kriterien', `${SUCHE}/KostenspezifischeKriterien/Listen_Buchungen_ErweiterteSuche_KostSpezKrit_beschriftet.png`],
  ];
  for (const [name, file] of sections) {
    const head = page.locator('a.dattaya-maccordion-heading', { hasText: name });
    await head.click();
    await page.waitForTimeout(500);
    const body = head.locator('xpath=parent::h3/following-sibling::*[1]');
    await shot(file, { clip: await union(page, head, body), padding: 6 });
    await head.click();
    await page.waitForTimeout(400);
  }
  await page.setViewportSize({ width: 1280, height: 768 });
}

async function anzeige(s) {
  const { page, go, shot, mark } = s;
  await search(s);
  await mark(await union(page, '#btnSchnellReservation', '#MassenaktualisierenButton'));
  await mark('.smartListLayout');
  await shot(`${ANZ}/List_BG_Anzeige_Buttons.png`, { clip: '#mainpanel' });

  // Weitere Funktionen an der ersten Zeile der Standardliste
  const select = page.locator('#mainpanel tr input[type=checkbox]').nth(1);
  await select.check();
  await page.waitForTimeout(300);
  await mark(select);
  await mark(await union(page, '#btnSchnellReservation', '#MassenaktualisierenButton'));
  await shot(`${FKT}/List_BG_Anzeige_weitFkt_aktSchalt_beschriftet.png`);

  await page.locator('#btnSchnellReservation').click();
  await settle(page);
  await shot(`${FKT}/List_BG_Anzeige_weitFkt_AnlErst_beschriftet.png`, { clip: page.locator(DIALOG).first(), padding: 0 });
  await closeDialog(page);

  await page.locator('#MassenannullierenButton').click();
  await settle(page);
  await shot(`${FKT}/List_BG_Anzeige_weitFkt_Ann_beschriftet.png`, { clip: page.locator(DIALOG).first(), padding: 0 });
  await closeDialog(page);

  await page.locator('#MassenaktualisierenButton').click();
  await settle(page);
  await shot(`${FKT}/List_BG_Anzeige_weitFkt_Akt_beschriftet.png`, { clip: page.locator(DIALOG).first(), padding: 0 });
  await closeDialog(page);

  await search(s, { titel: 'Projektarbeitsplatz Intranet', zeit: 0 });
  await rowOf(page, 'Projektarbeitsplatz Intranet').locator('input[type=checkbox]').first().check();
  await page.locator('#Massenfreigebenbutton').click();
  await settle(page);
  await shot(`${FKT}/List_BG_Anzeige_weitFkt_freigeb_beschriftet.png`, { clip: page.locator(DIALOG).first(), padding: 0 });
  await closeDialog(page);
}

async function symbole(s) {
  const { page, go, shot } = s;
  await go(LIST);
  await setColumns(page, SYMBOL_COLUMNS);
  // Breiter, damit Tooltips am rechten Rand nicht abgeschnitten werden.
  await page.setViewportSize({ width: 1900, height: 768 });
  await search(s, { titel: '*Intranet*', zeit: 0 });

  await iconShot(s, `${STD}/Bleistift.png`, MAIN, 'Bearbeiten');
  await iconShot(s, `${ERW}/Bleistift.png`, MAIN, 'Bearbeiten');
  await iconShot(s, `${STD}/List_BG_Anzeige_SymMobEqu.png`, MAIN, 'Mobiles Equipment (Tooltip)');
  await hoverShot(s, `${STD}/List_BG_Anzeige_TTMobEqu.png`, MAIN, 'Mobiles Equipment (Tooltip)');
  await iconShot(s, `${STD}/List_BG_Anzeige_SymBem.png`, MAIN, 'Bemerkungen');
  await hoverShot(s, `${STD}/List_BG_Anzeige_TTBem.png`, MAIN, 'Bemerkungen');
  await iconShot(s, `${STD}/List_BG_Anzeige_SymAnn.png`, MAIN, 'Annullieren');
  await iconShot(s, `${STD}/List_BG_Anzeige_SymFixEqu.png`, MAIN, 'Fixes Equipment (Tooltip)');
  await hoverShot(s, `${STD}/List_BG_Anzeige_TTFixEqu.png`, MAIN, 'Fixes Equipment (Tooltip)');

  await iconShot(s, `${ERW}/List_BG_Anzeige_SymTerm.png`, 'Projektarbeitsplatz Intranet', 'Terminieren');
  await iconShot(s, `${ERW}/List_BG_Anzeige_SymFreig.png`, 'Projektarbeitsplatz Intranet', 'Freigeben');
  await iconShot(s, `${ERW}/List_BG_Anzeige_SymDel.png`, MAIN, 'Löschen');
  await iconShot(s, `${ERW}/Notizbuch_Bemerkungen.png`, MAIN, 'Bemerkungen Teilnehmer');
  await hoverShot(s, `${ERW}/List_BG_Anzeige_TTBemIntern.png`, MAIN, 'Bemerkungen intern');
  await iconShot(s, `${ERW}/List_BG_Anzeige_SymResInfo.png`, MAIN, 'Ressource Info');
  await iconShot(s, `${ERW}/List_BG_Anzeige_SymBestSend.png`, MAIN, 'Bestätigung senden');
  await iconShot(s, `${ERW}/List_BG_Anzeige_SymNoShow.png`, MAIN, 'Als No Show markieren');
  await hoverShot(s, `${ERW}/List_BG_Anzeige_TTAnl.png`, MAIN, 'Anlass (Tooltip)');
  await hoverShot(s, `${ERW}/Bestellungen_TT.png`, MAIN, 'Bestellungen (Tooltip)');
  await hoverShot(s, `${ERW}/mobilesEquipment_aggretetiert_Tooltipp.png`, MAIN, 'Mobiles Equipment Aggregiert');
  await hoverShot(s, `${ERW}/Parkplatz_TT.png`, MAIN, 'Parkplätze (Tooltip)');
  await hoverShot(s, `${ERW}/Fahrzeug_TT.png`, MAIN, 'Fahrzeuge (Tooltip)');
  await hoverShot(s, `${ERW}/List_BG_Anzeige_TTVR.png`, MAIN, 'Virtuelle Räume');

  // Standortbeschreibung und Workflow Status öffnen ein Pop-up statt eines Tooltips.
  const beschreibung = await iconOf(page, MAIN, 'Standortbeschreibung');
  await beschreibung.click();
  await page.waitForTimeout(500);
  const popupBeschr = page.locator('.popUp:visible').first();
  await shot(`${ERW}/List_BG_Anzeige_TTStandBeschr.png`, { clip: await union(page, beschreibung, popupBeschr), padding: 4 });
  await popupBeschr.locator('.popUp-closeButton').click();
  await page.waitForTimeout(300);

  const status = await iconOf(page, MAIN, 'Workflow Status');
  await status.click();
  const popupStatus = page.locator('#popUp_calendarPopup');
  await popupStatus.waitFor({ state: 'visible' });
  await page.waitForTimeout(500);
  await shot(`${STD}/List_BG_Anzeige_TTStatus.png`, { clip: await union(page, status, popupStatus), padding: 4 });
  await popupStatus.locator('.popUp-closeButton').click();

  await search(s, { titel: 'Bewerbungsgespräch', zeit: 0 });
  await iconShot(s, `${STD}/List_BG_Anzeige_SymPriv.png`, 'Bewerbungsgespräch', 'Privat');
  await search(s, { titel: 'Team-Meeting Informatik', zeit: 0 });
  await iconShot(s, `${ERW}/Serienbuchung.png`, 'Team-Meeting Informatik', 'Serieninf');
  await search(s, { titel: 'Abgesagte Projektsitzung', zeit: 0, annulliert: true });
  await hoverShot(s, `${ERW}/List_BG_Anzeige_TTBemAnn.png`, 'Abgesagte Projektsitzung', 'Bemerkungen Annullation');
  await page.getByRole('button', { name: 'Zurücksetzen' }).click();
  await settle(page);

  await search(s, { titel: 'Marketing Weekly', zeit: 0 });
  await iconShot(s, `${ERW}/List_BG_Anzeige_SymPlan.png`, 'Marketing Weekly', 'Plan');
  const planHref = await rowOf(page, 'Marketing Weekly').locator('a[target]').first().getAttribute('href');

  await page.setViewportSize({ width: 1280, height: 768 });
  await setColumns(page, DEFAULT_COLUMNS);

  await page.goto(new URL(planHref, page.url()).href, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);
  // Das Filterpanel liegt über dem Plan. Sein Schalter steckt im Shadow DOM der Kartenkomponente, deshalb der Klick über die Position.
  const map = await page.locator('#rooms-map').boundingBox();
  await page.mouse.click(map.x + 14, map.y + 14);
  await page.waitForTimeout(800);
  await shot(`${ERW}/List_BG_Anzeige_Plan.png`);

  // Direkt über die Bild-URL: "System" gibt es nur als flüchtige Buchung, und "Buchung von Anlass entfernen" zeigt die Liste nur mit einem Standortrecht, das die Demodaten nicht vergeben.
  for (const [url, file] of [
    ['/Lists/Status/ShowPicture/4', `${STD}/List_BG_Anzeige_SymStatusDef.png`],
    ['/Lists/Status/ShowPicture/2', `${STD}/List_BG_Anzeige_SymStatusProv.png`],
    ['/Lists/Status/ShowPicture/1', `${STD}/List_BG_Anzeige_SymStatusSys.png`],
    ['/Content/Images/ButtonRemoveFromEvent.png', `${ERW}/BuchungVonAnlassEntfernen_TT.png`],
  ]) {
    await go(url);
    await page.evaluate(() => { document.body.style.background = '#fff'; });
    await shot(file, { clip: 'img', padding: 2 });
  }

  await go('/Settings/Person/ViewCurrentUser');
  await s.mark(page.getByRole('button', { name: /Filtereinstellungen/ }).or(page.getByRole('link', { name: /Filtereinstellungen/ })).first());
  await shot(`${ERW}/SpaltenauswahlZuruecksetzen_beschriftet.png`);
}

async function detail(s) {
  const { page, shot, mark } = s;
  await search(s, { titel: MAIN, zeit: 0 });
  await page.getByRole('link', { name: MAIN, exact: true }).first().click();
  await settle(page);

  await shot(`${DETAIL}/List_BG_Anzeige_DS.png`);
  await shot(`${DETAIL}/List_BG_Anzeige_DS_Kurz.png`, { clip: await union(page, '#sidepanel', page.locator('#sidepanel').getByText('Nachbesprechung Intranet')), padding: 8 });

  const buttons = await union(page, page.getByRole('button', { name: 'Bearbeiten' }), page.getByRole('button', { name: 'Drucken' }));
  await shot(`${DETAIL}/Zusammenfassung/List_BG_Anzeige_DS_ZusSchalt.png`, { clip: buttons, padding: 4 });

  await page.locator('#ReservationAnnullierenButton').click();
  await settle(page);
  await shot(`${DETAIL}/Zusammenfassung/List_BG_Anzeige_DS_ZusAnn_beschriftet.png`, { clip: page.locator(DIALOG).first(), padding: 0 });
  await closeDialog(page);

  await page.locator('#ReservationSendNotification').click();
  await settle(page);
  await shot(`${DETAIL}/Zusammenfassung/List_BG_Anzeige_DS_ZusNotvers.png`, { clip: page.locator(DIALOG).first(), padding: 0 });
  await closeDialog(page);

  await page.locator('#tab2 a, #tab2').first().click();
  await settle(page);
  await shot(`${DETAIL}/Historik/List_BG_Anzeige_DS_Hist.png`);
  await page.locator('#tabContainer2 .HistoryItemHeadLevel1').nth(1).click();
  await settle(page);
  await shot(`${DETAIL}/Historik/List_BG_Anzeige_DS_HistChange_beschriftet.png`);

  await page.locator('#tab3 a, #tab3').first().click();
  await settle(page);
  await page.locator('#tabContainer3 .HistoryItemHeadLevel1', { hasText: 'Neu (Raum)' }).click();
  await settle(page, 800);
  await shot(`${DETAIL}/Mails/List_BG_Anzeige_DS_Mailoffen_beschriftet.png`);

  // Kopieren legt eine vorläufige Buchung an, die Abbrechen wieder entfernt. Der Klick auf die Schaltfläche schickt die Anfrage doppelt und liesse eine zweite liegen, deshalb direkt über die URL.
  const copyHref = await page.getByRole('link', { name: 'Kopieren' }).getAttribute('href');
  await page.goto(new URL(copyHref, page.url()).href, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  await page.locator('.popUp-closeButton:visible, .ui-notify-close:visible').first().click().catch(() => {});
  await page.waitForTimeout(800);
  await mark(await union(page, page.getByText('Datum/Zeit', { exact: true }).first(), 'input[name$="Ganztaegig"], input[type=checkbox]:near(:text("Ganztägig"))'));
  await shot(`${DETAIL}/Zusammenfassung/List_BG_Anzeige_DS_ZusCopy_Eingabe_beschriftet.png`);
  await page.getByRole('button', { name: 'Abbrechen' }).first().click();
  await settle(page);
}

export default async function (s) {
  s.page.on('dialog', (d) => d.dismiss());
  await suche(s);
  await anzeige(s);
  await detail(s);
  await symbole(s);
}
