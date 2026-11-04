// Einstellungen: Ressourcen. Es wird nichts gespeichert.
const R = '3VROOMS/Einstellungen/Ressourcen';

export default async function ({ page, go, shot: rawShot, mark }) {
  // Playwright kennt die Endung .PNG nicht. Auf NTFS trifft .png dieselbe Datei und ihr Name bleibt erhalten.
  const shot = (file, options) => rawShot(file.replace(/\.PNG$/, '.png'), options);
  const settle = async () => { await page.waitForLoadState('networkidle'); await page.waitForTimeout(500); };
  // Die zweite Reiterzeile liegt unter dem Inhaltsbereich, deshalb klickt das Skript im DOM.
  const tab = async (name) => { await page.locator('[role=tab] a', { hasText: name }).last().evaluate((a) => a.click()); await settle(); };
  const button = async (name) => { await page.getByRole('button', { name, exact: true }).last().click(); await settle(); };
  const tick = async (...rows) => { for (const i of rows) await page.locator('.ui-dialog tbody input[type=checkbox]:visible').nth(i).check(); };
  const edit = async (tabName) => { await go('/Settings/Ressource/Edit/1?origin=Find'); if (tabName) await tab(tabName); };

  // Bei 1280 Pixeln bricht die Reiterzeile der Ressource um und überdeckt den Inhalt.
  await page.setViewportSize({ width: 1440, height: 768 });

  await go('/Settings/Ressource/Find');
  await shot(`${R}/Ressourcen_bearbeiten_erstellen.PNG`);
  await go('/Settings/Ressource/View/1');
  await shot(`${R}/Ressource_Daten_einsehen.png`);
  await go('/Settings/Ressource/CreateRessource?ressourcetypId=1&origin=Find');
  await shot(`${R}/Ressource_neu_erstellen.PNG`);

  await edit();
  await shot(`${R}/Ressourcen_Stammdaten_bearbeiten.PNG`);
  await edit('Spezifische Daten');
  await page.locator('img[alt=Farbauswahl]').click();
  await settle();
  await shot(`${R}/Ressourcen_Spezifische_Daten.PNG`);
  await edit('Medien & Beilagen');
  await button('Hinzufügen');
  await shot(`${R}/Ressourcen_Medien_hinzufügen.PNG`);
  await edit('Sperrzeiten');
  await button('Hinzufügen');
  await shot(`${R}/Ressourcen_Sperrzeiten_hinzufügen.PNG`);
  await edit('Sperrzeiten');
  await button('Sperrzeitserie hinzufügen');
  await shot(`${R}/Ressourcen_Sperrzeitserie_hinzufügen.png`);
  await edit('Berechtigungen');
  await button('Hinzufügen');
  await tick(1, 2);
  await shot(`${R}/Ressourcen_Berechtigungen_hinzufügen.PNG`);
  await edit('Feiertage');
  await button('Hinzufügen');
  await shot(`${R}/Ressourcen_Feiertage_hinzufügen.PNG`);
  await edit('Fixes Equipment');
  await button('Equipment hinzufügen');
  await tick(1, 3);
  await shot(`${R}/Ressourcen_fixes_Equipment_hinzufügen.png`);
  await edit('Fixes Equipment');
  await button('Equipment Schnellerfassung');
  await shot(`${R}/Ressourcen_Schnellzugriff_Equipment.png`);
  await edit('Bestuhlung');
  await shot(`${R}/Ressourcen_Bestuhlung.png`);
  await edit('virtuelle Räume');
  await button('Virtuellen Raum hinzufügen');
  await tick(1, 2);
  await shot(`${R}/VirtuelleRaeume/Virtuelle_Räume.png`);
  await edit();
  await page.locator('label[for=Ressource_IsOnline]').scrollIntoViewIfNeeded();
  await mark(page.locator('label[for=Ressource_IsOnline]'));
  await mark(page.locator('#Ressource_IsOnline'));
  await shot(`${R}/OnlineRessource/Online_Ressource.PNG`);
}
