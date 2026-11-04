// Listen: Aufbau sowie Ressourcen, Raumeinheiten, Teilnehmende, Personen und Catering & Service suchen.
// Braucht seed-listen-rest.sql und den Logon marco.steiner aus seed-einst-verwaltung.sql (Rechte für Raumeinheiten).
import { session } from '../lib.mjs';

const L = '3VROOMS/Listen';
const RES = `${L}/RessourcenSuchen`;
const RE = `${L}/RaumeinheitenSuchen`;
const TN = `${L}/TeilnehmerSuchen`;
const PERS = `${L}/PersonenSuchen`;
const CS = `${L}/CS-Suchen`;
const MAIN = '#mainpanel';
const SIDE = '#sidepanel';
const JUNGFRAU = 7;
const NINA_SCHMID = 9;
const BUERO_ZUERICH = 1;

const settle = async (page) => { await page.waitForLoadState('networkidle'); await page.waitForTimeout(400); };
const button = (page, name) => page.locator('button:visible, input[type=submit]:visible, input[type=button]:visible').filter({ hasText: name }).first();
const cancelForm = async (page) => { await button(page, 'Abbrechen').click(); await settle(page); };
const rowEditIcon = (page) => page.locator('#tabContainer1 table a[href*="/Edit"] img, #tabContainer1 table a[href*="/Edit"] i').first();

// Setzt eine gespeicherte Sortierung zurück, falls ein früherer Lauf abgebrochen wurde.
async function restoreDefaultSort(page) {
  const reset = page.locator('.flexIconSmartListReset').first();
  if (await reset.count()) {
    await reset.scrollIntoViewIfNeeded();
    await reset.click();
    await settle(page);
  }
}

// Öffnet den Reiter Historik und klappt den Eintrag mit dem angegebenen Text auf.
async function openHistory(page, entry) {
  await page.getByRole('tab', { name: 'Historik' }).click();
  await settle(page);
  await page.locator('.HistoryItemHeadLevel1').filter({ hasText: entry }).first().click();
  await settle(page);
}

// Die Eingabemasken mit vielen Reitern brechen die Reiter in die zweite Zeile um, wenn das Sidepanel offen ist.
const toggleSidepanel = async (page) => { await page.locator('#toggleSidepanel i').first().click(); await page.waitForTimeout(500); };

async function aufbau({ page, go, shot, mark }) {
  await go('/Lists/Ressource/Find');
  await mark(page.locator('#sidepanel input[value=Finden]:visible'));
  await mark(button(page, 'Zurücksetzen'));
  await shot(`${L}/List_Faufbau_FindReset.png`, { clip: SIDE, padding: 2 });
}

async function ressourcen({ page, go, shot, mark }) {
  await go('/Lists/Ressource/Find');
  await restoreDefaultSort(page);
  await shot(`${RES}/List_RES.png`);
  await shot(`${RES}/Anzeigenbereich/List_RES_Anz.png`, { clip: MAIN });
  await shot(`${RES}/EinfacheSuche/List_RES_EinfSuch.png`, { clip: SIDE, padding: 2 });

  // Löschen: Auswahl zeigen, ohne den Dialog auszulösen
  const checks = page.locator('#tabContainer1 table tbody input[type=checkbox]');
  await checks.nth(3).check();
  await checks.nth(4).check();
  await mark(button(page, 'Löschen'));
  await shot(`${RES}/Anzeigenbereich/Schaltflaechen/List_RES_Anz_del_b.png`, { clip: MAIN });
  await checks.nth(3).uncheck();
  await checks.nth(4).uncheck();

  // Erstellen: Ressourcenart wählen, dann Erstellen
  const bar = page.locator('.smartListButtonContainer');
  await bar.locator('.flexIconDropDown').first().click();
  await page.waitForTimeout(300);
  await mark(bar.locator('.flexIconDropDown').first());
  await mark(page.locator('#btnNewRessource'));
  await shot(`${RES}/Anzeigenbereich/Schaltflaechen/List_RES_Anz_neu_b.png`, { clip: MAIN });
  await page.keyboard.press('Escape');

  // Symbole. Das Symbol für die Standardsortierung erscheint erst nach dem Umsortieren.
  await shot(`${RES}/Anzeigenbereich/SpaltenansichtStandard/Bleistift.png`, { clip: rowEditIcon(page), padding: 2 });
  await page.locator('#tabContainer1 td.smartListColumnSortable[name=Bezeichnung] span').first().click();
  await settle(page);
  const reset = page.locator('.flexIconSmartListReset').first();
  await reset.scrollIntoViewIfNeeded();
  await shot(`${RES}/Anzeigenbereich/SpaltenansichtStandard/StandSort.png`, { clip: reset, padding: 2 });
  await reset.click();
  await settle(page);

  // Kriterien im unteren Teil des Sidepanels
  const panel = page.locator('#sidepanel .sidePanelContent:visible').first();
  await panel.evaluate((el) => { el.scrollTop = el.scrollHeight; });
  await page.waitForTimeout(200);
  await shot(`${RES}/ErweiterteSuche/List_RES_ErwKrit_b.png`, { clip: SIDE, padding: 2 });

  // Ressourcen-Auswahl, die hinter dem Symbol im Ressourcenpicker liegt
  await page.locator('#RessourceFilter_Ressource_Image').click();
  await page.waitForTimeout(800);
  await page.locator('.popUp:visible li', { hasText: 'Zürich' }).last().locator('.hitarea').first().click();
  await settle(page);
  await shot(`${RES}/ErweiterteSuche/List_RES_ErwKrit_ResPick.png`, { clip: page.locator('.popUp:visible').first(), padding: 0 });
  await page.locator('.popUp:visible .popUp-closeButton').first().click();
  await page.waitForTimeout(200);

  // Gliederungen aufgeklappt
  await page.locator('#sidepanel h3.multipleAccordionTitel:visible', { hasText: 'Gliederung' }).first().click();
  await page.waitForTimeout(800);
  await panel.evaluate((el) => { el.scrollTop = el.scrollHeight; });
  await page.waitForTimeout(300);
  await shot(`${RES}/ErweiterteSuche/List_RES_Glied_b.png`, { clip: SIDE, padding: 2 });

  // Detailansicht mit Reiter Historik
  await go(`/Lists/Ressource/View/${JUNGFRAU}`);
  await shot(`${RES}/Anzeigenbereich/Detailansicht/List_RES_DS.png`);
  await openHistory(page, 'Thomas Meier');
  await shot(`${RES}/Anzeigenbereich/Detailansicht/List_RES_DS_Reiter_Hist_b.png`, { clip: MAIN });

  await go(`/Lists/Ressource/Edit/${JUNGFRAU}?origin=Find`);
  await toggleSidepanel(page);
  await shot(`${RES}/Anzeigenbereich/Detailansicht/List_RES_bearb.png`);
  await toggleSidepanel(page);
  await cancelForm(page);
}

async function raumeinheiten() {
  const s = await session('marco.steiner');
  const { page, go, shot, mark } = s;
  try {
    await go('/Lists/Raumeinheit/Find');
    await shot(`${RE}/Anzeigenbereich/List_RE_Anz.png`);
    await shot(`${RE}/Suchmaske/List_RE_Such.png`, { clip: SIDE, padding: 2 });
    await shot(`${RE}/Anzeigenbereich/SpaltenansichtStandard/Bleistift.png`, { clip: rowEditIcon(page), padding: 2 });
    await shot(`${RE}/Anzeigenbereich/SpaltenansichtStandard/Weltkugel.png`, { clip: page.locator('#tabContainer1 table a[href*="/Map/"] i, #tabContainer1 table a[href*="/Map/"] img').first(), padding: 2 });

    const checks = page.locator('#tabContainer1 table tbody input[type=checkbox]');
    await checks.nth(1).check();
    await mark(button(page, 'Löschen'));
    await shot(`${RE}/Anzeigenbereich/Schaltflaechen/List_RE_del_b.png`, { clip: MAIN });
    await checks.nth(1).uncheck();

    await go('/Lists/Raumeinheit/Create?origin=Find');
    await shot(`${RE}/Anzeigenbereich/Schaltflaechen/List_RE_neu.png`);
    await cancelForm(page);

    await go(`/Lists/Raumeinheit/View/${BUERO_ZUERICH}`);
    await shot(`${RE}/Anzeigenbereich/Detailansicht/List_RE_DS.png`);
    await openHistory(page, 'Änderung');
    await shot(`${RE}/Anzeigenbereich/Detailansicht/List_RE_DS_Hist_Aend_b.png`, { clip: MAIN });

    await go(`/Lists/Raumeinheit/Edit/${BUERO_ZUERICH}?origin=Find`);
    await shot(`${RE}/Anzeigenbereich/Detailansicht/List_RE_DS_bearb.png`);
    await cancelForm(page);
  } finally {
    await s.close();
  }
}

async function teilnehmende({ page, go, shot, mark }) {
  await go('/Lists/Teilnehmer/Find');
  await shot(`${TN}/List_TN.png`);
  await shot(`${TN}/Anzeigenbereich/List_TN_Anz.png`, { clip: MAIN });
  await shot(`${TN}/Suchmaske/List_TN_Such.png`, { clip: SIDE, padding: 2 });

  // Mitglieder derselben Besuchsgruppe in der Liste
  const groupLinks = page.locator('#tabContainer1 table tbody a', { hasText: 'Besuchsgruppe Lernende' });
  for (let i = 0; i < 3; i += 1) await mark(groupLinks.nth(i));
  await shot(`${TN}/Anzeigenbereich/NeuerTN/List_TN_TNneu_List_b.png`, { clip: MAIN });

  const anlassId = /\/(\d+)(\?|$)/.exec(await groupLinks.first().getAttribute('href'))[1];

  await go('/Lists/Teilnehmer/Create?origin=Find');
  await shot(`${TN}/Anzeigenbereich/NeuerTN/List_TNneu.png`);
  await cancelForm(page);

  // Eingabemaske für weitere Gruppenmitglieder. Die App leitet nach dem Speichern der ersten Person auf diese Adresse um.
  const query = new URLSearchParams({ origin: 'Find', anlassId, anlassTypId: 3, organisatoriId: 5, organisatorText: 'Sandra Frei', standortId: 9, standortText: '\\CH\\Zürich\\Zürich' });
  await go(`/Lists/Teilnehmer/CreateAndAssignToGroup?${query}`);
  await page.fill('#Teilnehmer_Vorname', 'Tim');
  await page.fill('#Teilnehmer_Nachname', 'Hofer');
  await page.fill('#Teilnehmer_Mail', 'tim.hofer@gast.example');
  await mark(page.locator('#Teilnehmer_Anlass_Titel'));
  await mark(button(page, 'Teilnehmergruppe erstellen'));
  await shot(`${TN}/Anzeigenbereich/NeuerTN/List_TN_TNneu_Gruppe_b.png`);
  await cancelForm(page);
}

// Die Spalte "Besucherpass Informationen" ist standardmässig ausgeblendet. Die Szene blendet sie unter einem anderen Login ein und wieder aus.
async function besucherpass() {
  const s = await session('superuser');
  const { page, go, shot } = s;
  const setColumn = async (visible) => {
    await page.locator('.flexIconSmartListLayoutColumns').first().click();
    await page.waitForTimeout(400);
    const dialog = page.locator('.popUp.layoutColumns');
    await dialog.locator('input[value=VisitorInformation]').setChecked(visible);
    await dialog.getByText('Übernehmen').click();
    await settle(page);
  };
  try {
    await go('/Lists/Teilnehmer/Find');
    await setColumn(true);
    const icon = page.locator('img.edit-teilnehmer-popup').nth(5);
    await icon.scrollIntoViewIfNeeded();
    await shot(`${TN}/Anzeigenbereich/SpaltenansichtErweitert/Bleistift.png`, { clip: icon, padding: 2 });
    await icon.click();
    await settle(page);
    await shot(`${TN}/Anzeigenbereich/SpaltenansichtErweitert/List_TN_Anz_PassBearb.png`, { clip: page.locator('.popUp:visible').first(), padding: 0 });
    await page.locator('.popUp:visible .popUp-closeButton').first().click();
    await page.waitForTimeout(200);
    await setColumn(false);
  } finally {
    await s.close();
  }
}

async function personen({ page, go, shot, mark }) {
  await go('/Lists/Person/Find');
  await shot(`${PERS}/List_Pers_geschw.png`);
  await shot(`${PERS}/Anzeigenbereich/List_Pers_Anzeige_geschw_b.png`, { clip: MAIN });
  await shot(`${PERS}/EinfacheSuche/List_Pers_EinfSuch_geschw_b.png`, { clip: SIDE, padding: 2 });
  await shot(`${PERS}/Anzeigenbereich/SpaltenansichtStandard/Bleistift.png`, { clip: rowEditIcon(page), padding: 2 });
  await shot(`${PERS}/Anzeigenbereich/Schaltflaechen/List_Pers_geschw_Schalt.png`, { clip: page.locator('.smartListButtonContainer'), padding: 4 });

  await go(`/Lists/Person/View/${NINA_SCHMID}`);
  await shot(`${PERS}/Anzeigenbereich/Detailansicht/List_Pers_DS.png`);
  await go(`/Lists/Person/Edit/${NINA_SCHMID}?origin=Find`);
  await toggleSidepanel(page);
  await shot(`${PERS}/Anzeigenbereich/Detailansicht/List_Pers_bearb.png`);
  await toggleSidepanel(page);
  await cancelForm(page);
}

async function catering({ page, go, shot }) {
  await go('/Lists/Bestellung/Find');
  // Nur die Bestellungen von heute, die Datumswerte stehen schon auf dem heutigen Tag
  await page.locator('#sidepanel input[type=checkbox]:visible').first().check();
  await page.locator('#sidepanel input[value=Finden]:visible').click();
  await settle(page);
  await shot(`${CS}/List_CS.png`);
  await shot(`${CS}/Anzeigenbereich/List_CS_Anz.png`, { clip: MAIN });
  await shot(`${CS}/Suchmaske/List_CS_Such.png`, { clip: SIDE, padding: 2 });

  const note = page.locator('#tabContainer1 table tr', { hasText: 'Workshop Umzug Zürich' }).filter({ hasText: 'Kaffee und Gipfeli' }).locator('img.edit-bestellung-popup');
  await note.scrollIntoViewIfNeeded();
  await shot(`${CS}/Anzeigenbereich/note.png`, { clip: note, padding: 2 });
  await note.click();
  await settle(page);
  await shot(`${CS}/Anzeigenbereich/List_CS_Anz_Notiz.png`, { clip: page.locator('.popUp:visible').first(), padding: 0 });
  await page.locator('.popUp:visible .popUp-closeButton').first().click();
  await page.waitForTimeout(200);

  await button(page, 'Zurücksetzen').click();
  await settle(page);
}

export default async function (s) {
  await aufbau(s);
  await ressourcen(s);
  await teilnehmende(s);
  await personen(s);
  await catering(s);
  await raumeinheiten();
  await besucherpass();
}
