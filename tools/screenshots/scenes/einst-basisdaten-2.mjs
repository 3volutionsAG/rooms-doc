// Einstellungen > Erweiterte Basisdaten für Ressourcen. Formulare werden nie gespeichert.
// Der Feiertagsimport zeigt nur die Vorschau, ohne Speichern schreibt er nichts in die Datenbank.
import { mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { session } from '../lib.mjs';

const E = '3VROOMS/Einstellungen/ErweiterteBasisdatenfuerRessourcen';
const RAUMTYP = 1; // Gliederungstyp
const EQUIPMENTTYP = 2; // Gliederungstyp mit Aggregation, nur dort gibt es den Reiter Verfügbarkeit
const FAHRTZWECK = 2; // Klassifikationstyp aus seed-einst-basisdaten.sql
const AUFFAHRT = 32; // Feier mit Daten für viele Jahre
const STUNDENMODELL = 1; // Tarifkategorie

export default async function ({ page, go, shot: rawShot, mark }) {
  // Playwright kennt die Endung .PNG nicht. Auf NTFS trifft .png dieselbe Datei und ihr Name bleibt erhalten.
  const shot = (file, options) => rawShot(file.replace(/\.PNG$/, '.png'), options);
  const settle = async () => { await page.waitForLoadState('networkidle'); await page.waitForTimeout(500); };
  const tab = async (n) => { await page.locator(`a[href="#tabContainer${n}"]`).first().click(); await page.waitForTimeout(400); };
  const popup = async (n, name = /hinzufügen/i) => {
    await page.locator(`#tabContainer${n}`).getByRole('button', { name }).first().click();
    await settle();
  };

  // Gliederung
  await go('/Settings/Gliederungtyp/FindGliederungtyp');
  await page.locator(`#gliederungTreeView li[id="${RAUMTYP}"] > .hitarea`).click();
  await settle();
  await page.locator(`#gliederungTreeView li[id="${RAUMTYP}"] > span`).first().click();
  await page.waitForTimeout(300);
  await mark(page.getByRole('button', { name: 'Gliederungstyp erstellen' }));
  await shot(`${E}/Gliederung/Gliederungstyp_erstellen.PNG`);

  await page.getByRole('button', { name: 'Gliederungstyp erstellen' }).click();
  await settle();
  await page.locator('#tabContainer1 a[id$="Image"]:visible').first().click();
  await page.waitForTimeout(400);
  await shot(`${E}/Gliederung/Gliederung_neu_hinzufügen.png`);

  const newGliederung = `/Settings/Gliederung/CreateGliederung?parentId=${RAUMTYP}&origin=Find`;
  await go(newGliederung);
  await shot(`${E}/Gliederung/Gliederung_hinzufügen_Stammdaten.png`);
  await tab(2);
  await popup(2);
  await shot(`${E}/Gliederung/Gliederung_hinzufügen_Ressourcen2.png`);
  await go(newGliederung);
  await tab(3);
  await popup(3);
  await shot(`${E}/Gliederung/Gliederung_Gruppe_hinzufügen.png`);
  await go(`/Settings/Gliederung/CreateGliederung?parentId=${EQUIPMENTTYP}&origin=Find`);
  await tab(4);
  await popup(4);
  await shot(`${E}/Gliederung/Gliederung_Verfügbarkeit_hinzufügen.png`);

  // Klassifikationen
  const klassBaum = async () => {
    await go('/Settings/Klassifikationtyp/FindKlassifikationtyp');
    await page.getByRole('button', { name: 'Anzeigen' }).click();
    await settle();
    await page.locator(`#klassifikationTreeView li[id="${FAHRTZWECK}"] > .hitarea`).click();
    await settle();
    await page.locator(`#klassifikationTreeView li[id="${FAHRTZWECK}"] > span`).first().click();
    await page.waitForTimeout(300);
  };
  await klassBaum();
  await shot(`${E}/Klassifikationen/Klassifikationen_Ansicht.png`);
  await go(`/Settings/Klassifikationtyp/View/${FAHRTZWECK}`);
  await shot(`${E}/Klassifikationen/Klassifikationen_Daten_ansehen.png`);
  await go('/Settings/Klassifikationtyp/FindKlassifikationtyp');
  await page.getByRole('button', { name: 'Klassifikationstyp erstellen' }).click();
  await settle();
  await page.locator('#tabContainer1 a[id$="Image"]:visible').first().click();
  await page.waitForTimeout(400);
  await shot(`${E}/Klassifikationen/Klassifikationen_neuen_Klassifikationtyp_Stammdaten.png`);
  await go('/Settings/Klassifikationtyp/Create?origin=Find');
  await tab(2);
  await popup(2);
  await shot(`${E}/Klassifikationen/Klassifikationen_neuen_Klassifikationtyp_Ressourcen.png`);
  await klassBaum();
  await page.locator(`#klassifikationTreeView li[id="${FAHRTZWECK}"] > .treeview-commandButtons img.treeViewImageNeu`).click();
  await settle();
  await page.locator('img[alt="Farbauswahl"]').first().click();
  await page.waitForTimeout(500);
  await shot(`${E}/Klassifikationen/Klassifikationen_neue_Buchungsklassifikation.png`);

  // Tarife
  await go('/Settings/Tarifkategorie/Find');
  await shot(`${E}/Tarife/Tarife_Ansicht.png`);
  await go(`/Settings/Tarifkategorie/Edit/${STUNDENMODELL}?origin=Find`);
  await shot(`${E}/Tarife/Tarife_neu_erstellen.PNG`);
  await tab(2);
  await shot(`${E}/Tarife/Tarife_neu_angelegt_in_Liste.png`);
  await popup(2);
  await shot(`${E}/Tarife/Tarife_anlegen.PNG`);

  // Feiertage
  await go('/Settings/Feier/Find');
  await shot(`${E}/Feiertage/Feiertage_Ansicht.png`);
  await go(`/Settings/Feier/View/${AUFFAHRT}`);
  await shot(`${E}/Feiertage/Feiertage_Daten_einsehen.png`);
  await go(`/Settings/Feier/Edit/${AUFFAHRT}?origin=Find`);
  await tab(2);
  await shot(`${E}/Feiertage/FeiertageBearbeiten/Feiertage_Beginn_Ende.PNG`);
  await go('/Settings/Feier/Create?origin=Find');
  await tab(2);
  await popup(2);
  await shot(`${E}/Feiertage/FeiertageErstellen/Feiertage_Beginn_Ende_speichern.png`);

  // Import bis zur Vorschau. Die Datei entsteht im Temp-Verzeichnis.
  const csv = path.join(mkdtempSync(path.join(tmpdir(), 'feiertage-')), 'feiertage.csv');
  const y = new Date().getFullYear() + 1;
  writeFileSync(csv, `01.01.${y};Neujahr\n01.08.${y};Bundesfeier\n25.12.${y};Weihnachten\n26.12.${y};Stephanstag\n`);
  await go('/Settings/Feier/Find');
  await page.getByRole('button', { name: 'Importieren' }).click();
  await settle();
  await page.locator('input[type=file]').first().setInputFiles(csv);
  await settle();
  await shot(`${E}/Feiertage/FeiertageImportieren/Feiertage_Importieren.png`);

  // Dokumente
  await go('/Settings/Dokumentvorlage/Create?origin=Find');
  await shot(`${E}/Dokumente/Dokumente_neu_eintragen.PNG`);

  // Fragen und Fragenkatalog
  await go('/Settings/Frage/Find');
  await shot(`${E}/Fragen/Fragenliste.png`);
  await page.locator('#tabContainer1 a[href*="/Frage/Edit/"]').first().click();
  await settle();
  await shot(`${E}/Fragen/Frage-bearbeiten.png`);
  await go('/Settings/Fragenkatalog/Find');
  await shot(`${E}/Fragenkatalog/Fragenkatalog-Liste.png`);
  await page.locator('#tabContainer1 tr', { hasText: 'Eventtechnik' }).locator('a[href*="/Fragenkatalog/Edit/"]').first().click();
  await settle();
  await page.locator('#tabContainer1, .ui-tabs-nav').locator('..').locator('a', { hasText: /^Ressourcen$/ }).first().click();
  await page.waitForTimeout(400);
  await shot(`${E}/Fragenkatalog/Ressourcen-zuordnen.png`);

  // MWSt
  await go('/Settings/Mwst/Find');
  await page.locator('#tabContainer1 a', { hasText: 'Normalsatz' }).first().click();
  await settle();
  await shot(`${E}/Mwst/Mwst.png`);

  // Buchungshinweise: Pop-up der Buchung im Kalender und Bearbeitungsmaske. Die Buchung liegt seit seed-einst-basisdaten.sql auf Stockhorn.
  // Der Kalender speichert den Filter pro Person. Deshalb läuft das unter thomas.meier, damit der Filter des Admins unberührt bleibt.
  const su = await session('superuser');
  try {
    const p = su.page;
    const ruhig = async () => { await p.waitForLoadState('networkidle'); await p.waitForTimeout(500); };
    await su.go('/Calendar/Calendar/Find?preserveFilter=False');
    const chips = p.locator('#CalendarFilter_StandortList_0 .rooms-tokenizer-item span');
    while (await chips.count()) { await chips.first().click(); await ruhig(); }
    await p.locator('#CalendarFilter_StandortList_0_Value').pressSequentially('Thun', { delay: 120 });
    await p.waitForTimeout(1200);
    await p.locator('div.intellibox', { hasText: 'Thun' }).first().click();
    await ruhig();
    await p.getByRole('button', { name: 'Anzeigen', exact: true }).click();
    await ruhig();
    await p.locator('.flexIconCalendarRight').first().click();
    await ruhig();
    const buchung = p.getByText('Schulung neue Kassensoftware').first();
    await buchung.scrollIntoViewIfNeeded();
    await buchung.hover();
    await p.locator('#reservationEdit:visible').click();
    const popupBuchung = p.locator('#popUp_calendarPopup');
    await popupBuchung.waitFor({ state: 'visible' });
    await p.waitForTimeout(500);
    await su.shot(`${E}/Benachrichtigungen/messages_schnellbuchung.png`, { clip: popupBuchung, padding: 4 });
    await popupBuchung.getByRole('button', { name: /bearbeiten/i }).first().click();
    await ruhig();
    await su.shot(`${E}/Benachrichtigungen/messages_edit.png`);
    // Die Bearbeitungsmaske legt einen Klon der Buchung an. Erst Abbrechen räumt ihn wieder weg.
    await p.getByRole('button', { name: 'Abbrechen' }).first().click();
    await ruhig();
    // Filter wieder neutral stellen.
    await su.go('/Calendar/Calendar/Find?preserveFilter=False');
    while (await chips.count()) { await chips.first().click(); await ruhig(); }
    await p.getByRole('button', { name: 'Anzeigen', exact: true }).click();
    await ruhig();
  } finally {
    await su.close();
  }
}
