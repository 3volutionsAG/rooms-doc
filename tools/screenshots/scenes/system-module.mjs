// Einstellungen > Catering & Services und System sowie die Konfigurationsseiten der Module und des Betriebs.
import { renameSync } from 'node:fs';
import path from 'node:path';
import { session as openSession, CONTENT, clearMarks } from '../lib.mjs';

const SYS = '3VROOMS/Einstellungen/System';
const CAT = '3VROOMS/Einstellungen/CateringServices';
const CFG = '3VROOMS-Module/AddIn-Wizard_Konfigurieren';

// Playwright kennt die Endung .PNG nicht. Deshalb über eine Zwischendatei, damit der Dateiname exakt gleich bleibt.
function exactShot(shot) {
  return async (file, opts) => {
    if (!file.endsWith('.PNG')) return shot(file, opts);
    const out = await shot(file.replace(/\.PNG$/, '.__tmp.png'), opts);
    renameSync(out, out.replace(/\.__tmp\.png$/, '.PNG'));
  };
}

// Schneidet auf die Vereinigung mehrerer Elemente zu, zum Beispiel Eingabefeld plus offene Auswahlliste.
async function boxShot(page, file, targets, padding = 6) {
  const boxes = await Promise.all(targets.map((l) => l.first().boundingBox()));
  const x = Math.max(0, Math.floor(Math.min(...boxes.map((b) => b.x)) - padding));
  const y = Math.max(0, Math.floor(Math.min(...boxes.map((b) => b.y)) - padding));
  const right = Math.ceil(Math.max(...boxes.map((b) => b.x + b.width)) + padding);
  const bottom = Math.ceil(Math.max(...boxes.map((b) => b.y + b.height)) + padding);
  await page.waitForTimeout(150);
  await page.screenshot({ path: path.join(CONTENT, file), type: 'png', clip: { x, y, width: right - x, height: bottom - y }, animations: 'disabled', caret: 'hide' });
  await clearMarks(page);
}

export default async function (session) {
  const s = { ...session, shot: exactShot(session.shot) };
  const only = process.env.SCENE_PART;
  const parts = { catering: () => catering(s), system: () => system(s), onsiteAssets: () => onsiteAssets(s), syncConfig: () => syncConfig(s), helpTexts, bookingFilter: () => bookingFilter(s) };
  for (const [name, run] of Object.entries(parts)) {
    if (!only || only.split(',').includes(name)) await run();
  }
}

async function catering({ page, go, shot, mark }) {
  await go('/Settings/Dienstleister/Find');
  await mark(page.locator('a[href*="FindAngebotkategorie"]').first());
  await shot(`${CAT}/Dienstleister/Dienstleister_bearbeiten_suchen.PNG`);

  await go('/Settings/Angebotkategorie/FindAngebotkategorie?dienstleisterId=1');
  // Das zweite Plus führt auf die Stammdaten eines neuen Angebots.
  const node = page.locator('#dienstleisterAngebotTreeView li', { hasText: 'Kaffee & Tee' }).first();
  await node.locator('.hitarea').first().click();
  await page.waitForTimeout(800);
  await page.getByText('Kaffee & Tee').first().click();
  await page.waitForTimeout(500);
  await shot(`${CAT}/Dienstleister/Dienstleister_Angebot_bearbeiten.png`);

  const parentId = await node.getAttribute('id');
  await go(`/Settings/Angebot/CreateAngebot?parentId=${parentId}&dienstleisterId=1&origin=Find`);
  await shot(`${CAT}/Dienstleister/Angebot_Plus2_erstellen.png`);

  await go('/Settings/Angebotszone/Find');
  await shot(`${CAT}/Angebotszonen/Angebotszonen_erstellen_suchen.PNG`);

  // Dropdown und Erstellen stehen unter der Liste. Die offene Auswahl zeigt die erfassten Dienstleister.
  const create = page.locator('.smartListButtonContainer');
  await create.locator('.ui-combobox i.ui-button').click();
  await page.waitForTimeout(500);
  const options = page.locator('ul.ui-autocomplete:visible');
  await boxShot(page, `${CAT}/Angebotszonen/AngebotszoneErstellen/Angebotszone_erstellen.PNG`, [create.getByRole('button', { name: 'Löschen' }), create.locator('.ui-combobox'), options]);
  await page.keyboard.press('Escape');
  await go('/Settings/Angebotszone/Find');

  await page.locator('a[href*="/Angebotszone/View"]').first().click();
  await page.waitForLoadState('networkidle');
  await shot(`${CAT}/Angebotszonen/Angebotszonen_Daten_einsehen.PNG`);

  await go('/Settings/Angebotszone/Edit/1?origin=Find');
  await shot(`${CAT}/Angebotszonen/AngebotszoneBearbeiten/Angebotszone_bearbeiten.png`);

  const tab = async (name) => {
    await page.getByRole('link', { name, exact: true }).first().click();
    await page.waitForTimeout(1200);
  };
  await tab('Angebote');
  await shot(`${CAT}/Angebotszonen/AngebotszoneBearbeiten/Angebotszone_Angebot_in_Liste.png`);
  await page.getByRole('link', { name: 'Hinzufügen' }).or(page.getByRole('button', { name: 'Hinzufügen' })).first().click();
  await page.waitForTimeout(1500);
  await shot(`${CAT}/Angebotszonen/AngebotszoneBearbeiten/Angebotszone_Angebote_hinzufügen.PNG`);

  await go('/Settings/Angebotszone/Edit/1?origin=Find');
  await tab('Ressourcen');
  await shot(`${CAT}/Angebotszonen/AngebotszoneBearbeiten/Angebotszone_Ressourcen.png`);
  await tab('Gruppen');
  await shot(`${CAT}/Angebotszonen/AngebotszoneBearbeiten/Angebotszone_Gruppen.png`);
}

async function system({ page, go, shot }) {
  await go('/Settings/Information/About');
  await shot(`${SYS}/About/About_allgemein.PNG`);

  await go('/Settings/Mail/Find');
  await shot(`${SYS}/ActionTracking/Actiontracking_liste.PNG`);

  await go('/Settings/Import/Find');
  await shot(`${SYS}/DatenImporteExporte/Importe_hinzufügen_suchen.PNG`);

  // Nur die geseedeten Einträge, nicht die Laufzeitmeldungen der lokalen Instanz.
  await go('/Settings/Logging/Find?preserveFilter=False');
  await page.locator('[name="LoggingFilter.Source"]').fill('RoomsPro.Worker');
  await page.getByRole('button', { name: 'Finden' }).first().click();
  await page.waitForLoadState('networkidle');
  await shot(`${SYS}/Ereignisanzeige/Ereignisanzeige_durchsuchen.PNG`);

  await go('/Settings/Konfiguration/Find');
  await shot(`${SYS}/GlobaleParameter/Globaleparameter_bearbeiten_suchen.PNG`);

  await go('/Settings/Filtersetting/Find');
  await shot(`${SYS}/GlobaleundOEffentlicheListen/Globale_bearbeiten_suchen.PNG`);

  await go('/Settings/Theming/Find');
  await shot(`${SYS}/Oberflaeche/Oberfläche_bearbeiten.PNG`);

  await go('/Settings/OutlookImport/Import');
  await shot(`${SYS}/OutlookImporte/Outlook_Importe.PNG`);

  await go('/Settings/Translating/Find');
  await shot(`${SYS}/Uebersetzungen/Übersetzungsliste_durchsuchen.PNG`);

  await go('/Settings/CalendarSyncDrift/Find');
  await shot(`${SYS}/SyncDifferenzen/sync-differenzen-uebersicht.png`);
  await page.locator('.calendarSyncDriftScanTitle').scrollIntoViewIfNeeded();
  await page.waitForTimeout(300);
  await shot(`${SYS}/SyncDifferenzen/sync-differenzen-manueller-scan.png`, { clip: page.locator('form:has(.calendarSyncDriftScanTitle)') });

  await go('/Settings/CalendarSyncDrift/View/1');
  await shot(`${SYS}/SyncDifferenzen/sync-differenzen-detail.png`);
}

async function onsiteAssets({ go, shot }) {
  await go('/Settings/Theming/Find');
  await shot('3VROOMS-Module/onsiteROOMS/dynamic-assets.png');
}

// Personen- und Standortformulare werden nur aufgenommen und nie gespeichert.
async function syncConfig({ page, go, shot, mark }) {
  await go('/Settings/Person/Edit/1?origin=CurrentUser&sidePanelId=Personen');
  await page.getByRole('link', { name: 'Stammdaten' }).first().click();
  await page.waitForTimeout(600);
  // Combobox über dem versteckten Select: Wert setzen, Text nachführen und das change-Ereignis auslösen.
  await page.evaluate(() => {
    const select = window.jQuery('select#Person_SyncMode');
    select.val('O365');
    select.next('.ui-combobox').find('input').val('O365');
    select.trigger('change');
  });
  await page.waitForTimeout(400);
  await page.locator('[name="Person.O365SyncUrl"]').fill('https://outlook.office365.com/EWS/Exchange.asmx');
  await page.locator('[name="Person.SynchronisationErrorMail"]').first().scrollIntoViewIfNeeded();
  await page.waitForTimeout(300);
  await mark(page.locator('label', { hasText: 'Sync. Modus' }).first());
  await shot(`${CFG}/PersEinst_Sync/Sync_einschalten.png`);

  // Dasselbe ungespeicherte Formular: Die Spalte Outlook Sync gehört zum gewählten Sync. Modus.
  await page.getByRole('link', { name: 'Notifikationen' }).first().click();
  await page.waitForTimeout(800);
  await mark(page.getByText('Outlook Sync', { exact: true }).first());
  await shot(`${CFG}/PersEinst_Sync/Notifikationen_aktivieren.png`);

  await go('/Settings/Standort/Edit/1?origin=Find');
  await page.getByRole('link', { name: 'Notifikationen' }).first().click();
  await page.waitForTimeout(1200);
  await shot(`${CFG}/FehlermeldungErstellen_Sync/NotifikationErstellen.png`);

  await page.getByRole('button', { name: 'Hinzufügen' }).or(page.getByRole('link', { name: 'Hinzufügen' })).first().click();
  await page.waitForTimeout(1800);
  // Der Typ wird sonst über einen Auswahlbaum gesetzt. Das Formular wird nicht gespeichert.
  await page.evaluate(() => {
    document.getElementById('Notifikation_NotifikationtypId').value = '15';
    document.getElementById('Notifikation.NotifikationtypIdTxt').value = 'Synchronisation - Fehlermeldung';
  });
  await page.locator('#Notifikation_Titel_de').fill('ROOMS Synchronisation fehlgeschlagen');
  await page.frameLocator('#Notifikation_MailBody_de_ifr').locator('body').evaluate((body) => {
    body.innerHTML = '<p>Die ROOMS Buchung konnte mit Outlook nicht richtig synchronisiert werden und wurde möglicherweise zurückgesetzt.</p>'
      + '<p>[Reservation.Titel]<br>[ReservationVorlaufbeginnDatum], [Reservation.VorlaufbeginnZeit] - [Reservation.NachlaufendeZeit]</p>'
      + '<p><a href="#">Link zur ROOMS Buchung</a></p>'
      + '<p>Informationen zur fehlgeschlagenen Synchronisation:<br>[SynchronisationValidierung]<br>[Validierungsfehler]<br>[/SynchronisationValildierung]</p>';
  });
  await page.waitForTimeout(300);
  await shot(`${CFG}/FehlermeldungErstellen_Sync/NotifikationErstellen_Text.png`);
}

// Der Bearbeitungsmodus ist eine persönliche Einstellung und wird am Schluss wieder ausgeschaltet.
async function helpTexts() {
  const { page, go, shot, mark, close } = await openSession('marco.steiner');
  const openPanel = async () => {
    await page.locator('a:text-is("Hilfe-Texte")').first().click();
    await page.waitForTimeout(600);
  };
  const toggle = page.locator('input[onclick*="ToggleEditModus"]');
  try {
    await go('/Settings/Konfiguration/Find');
    await openPanel();
    await mark(toggle);
    await boxShot(page, `${SYS}/Hilfe-Texte/Hilfetexte_Start.png`, [page.locator('a:text-is("Hilfe-Texte")'), toggle], 10);
    await toggle.click();
    await page.waitForTimeout(800);

    await go('/Settings/Konfiguration/Edit/1?origin=Find');
    const form = page.locator('fieldset.mainContent').first();
    const label = form.locator('label.hilfeTextAdmin', { hasText: 'Wert' }).first();
    await mark(label.locator('img'));
    await boxShot(page, `${SYS}/Hilfe-Texte/Hilfe_Icon.png`, [form.locator('label.hilfeTextAdmin').first(), label, form.locator('input[type=text]').first()], 10);

    await label.locator('img').click();
    await page.waitForTimeout(800);
    await shot(`${SYS}/Hilfe-Texte/Hilfetexte_popup.png`, { clip: page.locator('.hilfeTextPopup:visible'), padding: 0 });
  } finally {
    try {
      await go('/Settings/Konfiguration/Find');
      await openPanel();
      if ((await toggle.getAttribute('value')).includes('deaktivieren')) {
        await toggle.click();
        await page.waitForTimeout(800);
      }
    } finally {
      await close();
    }
  }
}

// Listen > Buchungen, die Filter für Synchronisationsprobleme im Sidepanel.
async function bookingFilter({ page, go }) {
  await go('/Lists/Reservation/FindReservation?preserveMeineListe=False');
  const header = page.locator('a', { hasText: 'Synchronisationsspezifische Kriterien' }).first();
  await header.click();
  await page.waitForTimeout(700);
  const last = page.locator('label', { hasText: 'Serienbuchungen mit Synchronisationsproblemen' }).first();
  await last.scrollIntoViewIfNeeded();
  await page.waitForTimeout(200);
  await boxShot(page, 'Betrieb/Synchronisation/Troubleshooting/buchungen_mit_sync_problemen.png', [header, page.locator('label', { hasText: 'Buchungen mit fehlender Back-Synchronisation' }).locator('xpath=..').locator('input[type=checkbox]'), last], 6);
}
