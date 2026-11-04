// Einstellungen: Benutzergruppen, Organisationen, Rollen und Personen. Es wird nichts gespeichert.
const SI = '3VROOMS/Einstellungen/Sicherheitsdaten';
const PE = '3VROOMS/Einstellungen/Personen';

export default async function ({ page, go, shot: rawShot }) {
  // Playwright kennt die Endung .PNG nicht. Auf NTFS trifft .png dieselbe Datei und ihr Name bleibt erhalten.
  const shot = (file, options) => rawShot(file.replace(/\.PNG$/, '.png'), options);
  const settle = async () => { await page.waitForLoadState('networkidle'); await page.waitForTimeout(500); };
  const tab = async (name) => { await page.locator('[role=tab] a', { hasText: name }).last().evaluate((a) => a.click()); await settle(); };
  const button = async (name) => { await page.getByRole('button', { name, exact: true }).last().click(); await settle(); };

  const tick = async (...rows) => { for (const i of rows) await page.locator('.ui-dialog tbody input[type=checkbox]:visible').nth(i).check(); };

  // Benutzergruppen
  await go('/Settings/Gruppe/Find');
  await shot(`${SI}/Benutzergruppen/Benutzergruppen_bearbeiten_suchen.PNG`);
  await button('Erstellen');
  await page.fill('#Gruppe_UniqueKey', 'BG-EMPFANG');
  await page.fill('#Gruppe_Bezeichnung', 'BG-Empfang');
  await page.check('#Gruppe_Berechtigungsgruppe');
  await page.check('#Gruppe_Notifikationsgruppe');
  await shot(`${SI}/Benutzergruppen/Benutzergruppen_hinzufügen.png`);
  await page.fill('#Gruppe_MaxSerieWiederholungenTaeglich', '30');
  await page.fill('#Gruppe_MaxSerieWiederholungenWoechentlich', '26');
  await page.fill('#Gruppe_MaxSerieWiederholungenMonatlich', '12');
  await page.fill('#Gruppe_MaxSerieWiederholungenYahrlich', '2');
  // Unsichtbarer Rahmen um die Zeilen der Serienbegrenzung, weil sie keinen gemeinsamen Container haben.
  await page.evaluate(() => {
    const row = (id) => document.getElementById(id).getBoundingClientRect();
    const top = row('Gruppe_MaxSerieWiederholungenTaeglich').top - 4;
    const bottom = row('Gruppe_MaxSerieWiederholungenYahrlich').bottom + 4;
    const left = document.querySelector('label[for=Gruppe_MaxSerieWiederholungenTaeglich]').getBoundingClientRect().left - 4;
    const right = row('Gruppe_MaxSerieWiederholungenTaeglich').right + 4;
    const box = document.createElement('div');
    box.id = 'docs-clip';
    box.style.cssText = `position:fixed;pointer-events:none;left:${left}px;top:${top}px;width:${right - left}px;height:${bottom - top}px`;
    document.body.appendChild(box);
  });
  await shot(`${SI}/Benutzergruppen/SerienBGbegrenzen_BGr.png`, { clip: '#docs-clip', padding: 2 });
  await go('/Settings/Gruppe/Edit/9?origin=Find');
  await tab('Personen');
  await button('Personen hinzufügen');
  await tick(2, 4);
  await shot(`${SI}/Benutzergruppen/Benutzergruppen_Personen_hinzufügen.png`);
  await go('/Settings/Gruppe/Edit/7?origin=Find');
  await tab('Notifikation');
  await button('Hinzufügen');
  await shot(`${SI}/Benutzergruppen/Benutzergruppen_Notifikationen_hinzufügen.png`);

  // Organisationen
  await go('/Settings/Firma/Find');
  await shot(`${SI}/OEFirmen/OE_Firmen_Ansicht.png`);
  await go('/Settings/Firma/View/1');
  await shot(`${SI}/OEFirmen/OE_Firmen_Daten_einsehen2.png`);
  await go('/Settings/Firma/Edit/1?origin=Find');
  await shot(`${SI}/OEFirmen/OE_Firmen_Stammdaten_bearbeiten.PNG`);
  await tab('Adressen');
  await button('Hinzufügen');
  await shot(`${SI}/OEFirmen/OE_Firmen_bearbeiten_Adresse_eintragen.png`);
  await go('/Settings/Firma/Edit/1?origin=Find');
  await tab('Personen');
  await shot(`${SI}/OEFirmen/OE_Firmen_Personen_Liste.png`);
  await button('Hinzufügen');
  await tick(2);
  await shot(`${SI}/OEFirmen/OE_Firmen_Personen_hinzufügen.png`);
  await go('/Settings/Firma/Edit/1?origin=Find');
  await tab('Kostenträger');
  await button('Hinzufügen');
  await shot(`${SI}/OEFirmen/OE_Firmen_Kostenträger_hinzufügen.png`);
  await go('/Settings/Firma/Edit/1?origin=Find');
  await tab('Präferenzen');
  await button('Präferenz hinzufügen');
  await shot(`${SI}/OEFirmen/OE_Firmen_Präferenzen_hinzufügen.png`);

  // Rollen
  await go('/Settings/Rolle/View/28');
  await shot(`${SI}/Rollen/Rollen_Daten_einsehen.PNG`);
  await go('/Settings/Rolle/Edit/23?origin=Find');
  await tab('Rechte');
  await shot(`${SI}/Rollen/RechteVerwalten/Rolle_Rechte_bearbeiten.png`);

  // Personen
  await go('/Settings/Person/Find');
  await shot(`${PE}/Personen_Ansicht.png`);
  // Höheres Fenster, damit alle erweiterten Kriterien ohne Scrollen sichtbar sind.
  await page.setViewportSize({ width: 1280, height: 1000 });
  await go('/Settings/Person/Find');
  await page.locator('[role=tab]', { hasText: 'Erweiterte Kriterien' }).first().click();
  await page.waitForTimeout(600);
  await shot(`${PE}/Personenliste_bearbeiten_suchen.PNG`, { clip: '#sidepanel', padding: 2 });
  // Bei 1280 Pixeln bricht die Reiterzeile um und überdeckt den Inhalt.
  await page.setViewportSize({ width: 1440, height: 768 });
  await go('/Settings/Person/Edit/5?origin=Find');
  await shot(`${PE}/Person_bearbeiten.PNG`);
  await page.setViewportSize({ width: 1280, height: 768 });
  await go('/Settings/Person/ViewPerson/5?origin=View');
  await shot(`${PE}/Personendaten_einsehen.PNG`);
  await tab('Historik');
  await shot(`${PE}/Person_Daten_Historie.png`);
  await go('/Settings/Person/ViewPerson/5?origin=View');
  await tab('Mails');
  await shot(`${PE}/Person_Daten_Mails.png`);
}
