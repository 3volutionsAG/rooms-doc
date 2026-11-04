// Einstellungen: Kostenträger, Raumeinheiten, Anlassstatus und Anlasstypen. Es wird nichts gespeichert.
// Diese Menüs brauchen Rechte, die nur der Login aus seed-einst-verwaltung.sql hat.
export const user = 'marco.steiner';

const SI = '3VROOMS/Einstellungen/Sicherheitsdaten';
const RA = '3VROOMS/Einstellungen/Raumeinheiten';
const AN = '3VROOMS/Einstellungen/StammdatenfuerAnlaesse';

export default async function ({ page, go, shot: rawShot }) {
  // Playwright kennt die Endung .PNG nicht. Auf NTFS trifft .png dieselbe Datei und ihr Name bleibt erhalten.
  const shot = (file, options) => rawShot(file.replace(/\.PNG$/, '.png'), options);
  const settle = async () => { await page.waitForLoadState('networkidle'); await page.waitForTimeout(500); };
  const tab = async (name) => { await page.locator('[role=tab] a', { hasText: name }).last().evaluate((a) => a.click()); await settle(); };
  const button = async (name) => { await page.getByRole('button', { name, exact: true }).last().click(); await settle(); };

  // Rollen
  await go('/Settings/Rolle/Find');
  await settle();
  await shot(`${SI}/Rollen/Rollen_Ansicht.png`);

  await go('/Settings/Kostentraeger/Find');
  await shot(`${SI}/Kostentraeger/Kostentraeger-Liste.png`);
  await button('Von CSV importieren');
  await shot(`${SI}/Kostentraeger/Kostentraeger-CSV-Import.png`);

  await go('/Settings/Raumeinheit/Find');
  await shot(`${RA}/Raumeinheiten_erstellen_suchen.PNG`);
  await go('/Settings/Raumeinheit/View/1');
  await shot(`${RA}/Raumeinheiten_Daten_einsehen.png`);
  await go('/Settings/Raumeinheit/Edit/1?origin=Find');
  await shot(`${RA}/Raumeinheiten_Stammdaten.PNG`);
  await tab('Personen');
  await button('Person hinzufügen');
  await shot(`${RA}/Raumeinheiten_Person_hinzufügen.png`);

  await go('/Settings/Anlassstatus/Find');
  await shot(`${AN}/Anlassstatus/Anlassstatus_bearbeiten.PNG`);
  await go('/Settings/Anlassstatus/View/4');
  await shot(`${AN}/Anlassstatus/Anlassstatus_Daten_einsehen.PNG`);

  await go('/Settings/Anlasstyp/Find');
  await shot(`${AN}/Anlasstypen/Anlasstypen_bearbeiten_erstellen.PNG`);
  await go('/Settings/Anlasstyp/View/2');
  await shot(`${AN}/Anlasstypen/Anlasstypen_Daten_einsehen.PNG`);
  await go('/Settings/Anlasstyp/Edit/2?origin=Find');
  await shot(`${AN}/Anlasstypen/Anlasstypen_Stammdaten.PNG`);
  await tab('Buchungsanfrage');
  await shot(`${AN}/Anlasstypen/Anlasstypen_Buchungsanfragen.PNG`);
  await tab('Benutzergruppe');
  await button('Hinzufügen');
  await shot(`${AN}/Anlasstypen/Anlasstypen_Benutzergruppen_hinzufügen.PNG`);
}
