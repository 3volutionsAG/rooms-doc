// Screenshots mit Thomas Meier (seed-generell.sql: gespeicherte Listen, zugewiesene Ressourcen).
// Persönliche Einstellungen, Actionpanel, Export, Favoriten und gespeicherte Listen. Es wird nichts gespeichert.
import { execFileSync } from 'node:child_process';
import { renameSync } from 'node:fs';
import path from 'node:path';

export const user = 'superuser';

const K = '3VROOMS/Generell/Applikationsaufbau/Kopfbereich/Actionpanel';
const S = '3VROOMS/Generell/GrundlegendeFunktionen/Suchfunktionen';
const P = '3VROOMS/Einstellungen/Persönlicheeinstellungen';
const LISTEN = '/Lists/Reservation/FindReservation?preserveMeineListe=False&preserveFilter=False';
const THOMAS = 4;

// Der Export legt einen Auftrag an, den hier kein Dienst abholt. Er wird wieder entfernt.
function deleteExportAuftrag() {
  execFileSync('sqlcmd', ['-S', '.', '-E', '-d', 'rooms_docs', '-b', '-Q', `DELETE FROM Aktion WHERE AktiontypId=5 AND PersonId=${THOMAS}`]);
}

// Playwright kennt die Endung .PNG nicht. Windows behält beim Überschreiben die bestehende Schreibweise, sonst wird umbenannt.
const png = (shot) => async (file, options) => {
  const lower = file.replace(/\.PNG$/, '.png');
  const out = await shot(lower, options);
  const wanted = path.join(path.dirname(out), path.basename(file));
  if (out !== wanted) renameSync(out, wanted);
};

export default async function ({ page, go, shot: rawShot, mark }) {
  const shot = png(rawShot);
  const area = async (...locators) => {
    const boxes = [];
    for (const l of locators) boxes.push(await l.first().boundingBox());
    const x = Math.min(...boxes.map((b) => b.x)), y = Math.min(...boxes.map((b) => b.y));
    const r = Math.max(...boxes.map((b) => b.x + b.width)), u = Math.max(...boxes.map((b) => b.y + b.height));
    await page.evaluate(({ x, y, w, h }) => {
      document.getElementById('docs-area')?.remove();
      const d = document.createElement('div');
      d.id = 'docs-area';
      d.style.cssText = `position:fixed;pointer-events:none;left:${x}px;top:${y}px;width:${w}px;height:${h}px`;
      document.body.appendChild(d);
    }, { x, y, w: r - x, h: u - y });
    return page.locator('#docs-area');
  };
  const sidepanel = page.locator('#sidepanelarea');
  const button = (name) => page.locator(`button:visible, input[type=button]:visible, input[type=submit]:visible`).filter({ hasText: name }).first();
  const notify = page.locator('.ui-notify-message:visible').first();

  // Actionpanel und Export: Die Meldung nach dem Start eines Exports
  await go(LISTEN);
  await page.locator('i.flexIconSmartListExport:visible').first().click();
  await notify.waitFor();
  await page.waitForTimeout(500);
  deleteExportAuftrag();
  await mark(notify);
  await shot(`${K}/FensterMitActionpanel_beschriftet.png`);
  await mark(notify);
  await shot('3VROOMS/Generell/GrundlegendeFunktionen/ListenExport/Listenexport_Downloadinfo_beschriftet.png', { clip: await area(page.locator('.header'), notify) , padding: 0 });

  // Favorit: Die Antwort wird abgefangen, damit der Stern gelb wird, ohne dass die Einstellung gespeichert wird.
  await go(LISTEN);
  await page.route('**/SetDefaultSidepanelInSection*', (route) => route.fulfill({ status: 200, contentType: 'application/json', body: '{"Success":true}' }));
  const star = page.locator('.defaultSidepanel').nth(0);
  await star.click();
  await page.waitForTimeout(500);
  await page.mouse.move(700, 400);
  await mark(page.locator('.defaultSidepanel').nth(0));
  await shot(`${S}/FavoritenSpeichern/Fenster_Favoritenstern_beschriftet.png`);
  await page.unroute('**/SetDefaultSidepanelInSection*');

  // Gespeicherte Listen
  await go(LISTEN);
  await page.locator('#ReservationFilter_RessourcetypIdsImage').click();
  await page.waitForTimeout(500);
  await page.locator('.itemPickerPopUp:visible label', { hasText: /^Raum$/ }).click();
  await page.getByRole('button', { name: 'Bestätigen' }).first().click();
  await page.waitForTimeout(400);
  await page.locator('#ReservationenSavedFilterListSaveImage').click();
  await page.waitForTimeout(500);
  await page.locator('#ReservationenSavedFilterListFilterBezeichnung').fill('Sitzungszimmer Zürich');
  await mark(page.locator('#ReservationenSavedFilterListSaveImage'));
  await mark(page.locator('#ReservationenSavedFilterListFilterBezeichnung'));
  await shot(`${S}/GespeicherteListen/GespeicherteListeAnlegen_beschriftet.png`, { clip: await area(sidepanel, page.locator('#ReservationenSavedFilterListFilterBezeichnung')), padding: 40 });

  await go(LISTEN);
  const liste = page.locator('.fieldsetElement.filtersettingListe').first();
  await liste.locator('.flexIconDropDown').click();
  await page.waitForTimeout(400);
  await shot(`${S}/GespeicherteListen/GespeicherteListeAuswaehlen_beschriftet.png`, { clip: await area(liste, page.locator('ul.ui-menu:visible').last()), padding: 10 });

  // Persönliche Einstellungen: Mit 1440 Pixeln Breite passen alle Reiter in eine Zeile
  await page.setViewportSize({ width: 1440, height: 768 });
  await go('/Settings/Person/ViewCurrentUser');
  await shot(`${P}/Einstellung_PE_bearbeiten1.png`);

  // Zugewiesene Ressourcen im Ansichtsmodus: Das Icon zum Bearbeiten der Freigabe und der Dialog
  const freigabe = page.locator('img[src*="PersonRessourceFreigabeEdit"]').first();
  await freigabe.scrollIntoViewIfNeeded();
  await page.waitForTimeout(300);
  await freigabe.hover();
  await page.waitForTimeout(600);
  await mark(freigabe);
  await shot(`${P}/Zugewieseneressourceninformation/Zugewiesene_Ressourcen_Info_bearbeiten1.png`);
  await freigabe.click();
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(1000);
  await shot(`${P}/Zugewieseneressourceninformation/Zugewiesene_Ressource_bearbeiten_freigeben.png`);

  // Bearbeitungsmodus
  await go(`/Settings/Person/Edit/${THOMAS}?origin=CurrentUser&sidePanelId=Personen`);
  const tab = async (name) => {
    await page.getByRole('link', { name, exact: true }).click();
    await page.waitForTimeout(800);
  };
  await shot(`${P}/Personeninformation/Personeninformationen_bearbeiten_speichern.PNG`);
  await tab('Stammdaten');
  await shot(`${P}/Stammdaten/Stammdaten_bearbeiten.PNG`);
  await tab('Navigation');
  await shot(`${P}/Navigation/Navigation_bearbeiten.PNG`);
  await tab('Notifikationen');
  await shot(`${P}/Notifikation/Notifikation_bearbeiten.PNG`);

  // Eigene Listen
  const L = `${P}/Eigenelisten`;
  await tab('Eigene Listen');
  // Die Suchzeile bleibt pro Person gespeichert. Sie wird für die Aufnahme ein- und danach wieder ausgeschaltet.
  const sucheAn = page.locator('i.flexIconSmartListSucheEnabled:visible').first();
  const sucheAus = page.locator('i.flexIconSmartListSucheDisabled:visible').first();
  if (await sucheAn.count()) {
    await sucheAn.click();
    await page.waitForTimeout(800);
  }
  await shot(`${L}/Listen_bearbeiten_speichern.PNG`);
  await page.locator('i.flexIconSmartListLayoutColumns:visible').first().click();
  await page.waitForTimeout(500);
  await shot(`${L}/Listen_Button_Spalten.PNG`);
  await page.keyboard.press('Escape');
  await page.getByRole('button', { name: 'Hinzufügen oder Abonnieren' }).click();
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(800);
  await shot(`${L}/Listen_hinzufügen.PNG`);
  await page.getByRole('button', { name: 'Abbrechen' }).locator('visible=true').last().click();
  await page.waitForTimeout(500);
  await sucheAus.click();
  await page.waitForTimeout(800);
  await mark(sucheAn);
  await shot(`${L}/Listen_Button_Suche.PNG`);
  await sucheAn.click();
  await page.waitForTimeout(800);

  // Zugewiesene Ressourcen
  const Z = `${P}/Zugewieseneressourceninformation`;
  await tab('Zugewiesene Ressourcen');
  await shot(`${Z}/Zugewiesene_Ressourcen_Listenansicht_speichern.png`);
  await page.getByRole('button', { name: 'Ressourcen hinzufügen' }).click();
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(800);
  await shot(`${Z}/Zugewiesene_Ressource_hinzufügen.png`);
  await page.getByRole('button', { name: 'Abbrechen' }).locator('visible=true').last().click();
  await page.waitForTimeout(500);

  // Logins
  const O = `${P}/Logons`;
  await tab('Logins');
  await shot(`${O}/Logons_allgemein_speichern.PNG`);
  // Das Symbol für die Standardsortierung erscheint erst, wenn eine Liste umsortiert wurde. Danach wird zurückgesetzt.
  await page.getByText('Logonname', { exact: true }).locator('visible=true').first().click();
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(800);
  const reset = page.locator('i.flexIconSmartListReset:visible').first();
  await shot('3VROOMS/Generell/GrundlegendeFunktionen/Symbole/StandSort.png', { clip: reset, padding: 2 });
  await reset.click();
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(800);
  await page.locator('i.flexIconEditList:visible').first().click();
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(800);
  await shot(`${O}/Logons_bearbeiten.PNG`);
  await page.getByRole('button', { name: 'Abbrechen' }).locator('visible=true').last().click();
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Erstellen' }).click();
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(800);
  const typ = page.locator('.fieldsetElement:has(select[name="Logon.LogontypId"])');
  await typ.locator('.flexIconDropDown').click();
  await page.waitForTimeout(400);
  await shot(`${O}/Logons_erstellen_entfernen.PNG`);
  await page.locator('ul.ui-menu:visible li', { hasText: 'QR Code' }).click();
  await page.waitForTimeout(400);
  await page.locator('#btnGenerateQrCode').click();
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(800);
  await shot(`${O}/Logons_QR_Code.png`);
  await page.getByRole('button', { name: 'Abbrechen' }).locator('visible=true').last().click();
  await page.waitForTimeout(500);

  // Gruppen
  const R = `${P}/Gruppen`;
  await tab('Gruppen');
  await shot(`${R}/Gruppen_hinzufügen_entfernen.PNG`);
  await page.getByRole('button', { name: 'Hinzufügen' }).first().click();
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(800);
  await shot(`${R}/Gruppen_hinzufügen_speichern.png`);
}
