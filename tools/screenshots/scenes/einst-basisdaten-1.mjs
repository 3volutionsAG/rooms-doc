// Einstellungen > Basisdaten für Ressourcen: Bestuhlung, Standorte, Status, Workflows.
// Formulare werden nie gespeichert, Pop-ups bleiben offen, bis die nächste Seite geladen wird.
const B = '3VROOMS/Einstellungen/BasisdatenfuerRessourcen';
const DUEBENDORF = 10; // Standort ohne Ressourcen, trägt die Demo-Feiertage aus seed-einst-basisdaten.sql
const ZUERICH_REGION = 6; // Standort mit hinterlegtem Plan

export default async function ({ page, go, shot: rawShot, mark }) {
  // Playwright kennt die Endung .PNG nicht. Auf NTFS trifft .png dieselbe Datei und ihr Name bleibt erhalten.
  const shot = (file, options) => rawShot(file.replace(/\.PNG$/, '.png'), options);
  const tab = async (n) => { await page.locator(`a[href="#tabContainer${n}"]`).first().click(); await page.waitForTimeout(400); };
  // Klickt einen Button im aktiven Reiter und wartet, bis das Pop-up geladen ist.
  const popup = async (n, name) => {
    await page.locator(`#tabContainer${n}`).getByRole('button', { name, exact: true }).first().click();
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(600);
  };

  // Bestuhlung
  await go('/Settings/Bestuhlung/Find');
  await shot(`${B}/Bestuhlung/Bestuhlung_bearbeiten_suchen.PNG`);
  await go('/Settings/Bestuhlung/Edit/1?origin=Find');
  await shot(`${B}/Bestuhlung/Bestuhlung_bearbeiten.PNG`);

  // Standorte: Baum, Toolleiste, Icons
  await go('/Settings/Standort/Find');
  await page.locator('#standortTreeView li[id="6"] > .hitarea').click();
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(300);
  await mark(page.getByRole('button', { name: 'Haupt-Standort erstellen' }));
  await shot(`${B}/Standorte/Standorte_erstellen.PNG`);
  await page.locator('#standortTreeView li[id="6"] > span').first().click();
  await page.waitForTimeout(300);
  await shot(`${B}/Standorte/Standort_Toolleiste.png`, { clip: '#standortTreeView' });
  for (const [file, cls] of [['Icon_hinzufügen', 'Neu'], ['Icon_Ansehen', 'Anzeigen'], ['Icon_bearbeiten', 'Bearbeiten'], ['Icon_löschen', 'Loeschen']]) {
    await shot(`${B}/Standorte/${file}.png`, { clip: `#standortTreeView li[id="6"] > .treeview-commandButtons img.treeViewImage${cls}`, padding: 2 });
  }
  await go(`/Settings/Standort/View/${DUEBENDORF}`);
  await shot(`${B}/Standorte/Standort_ansehen.png`);
  await go(`/Settings/Standort/Edit/${DUEBENDORF}?origin=Find`);
  await shot(`${B}/Standorte/Standorte_bearbeiten.PNG`);

  // Neuer Standort: je Reiter ein Bild
  const N = `${B}/Standorte/NeuerStandort`;
  await go('/Settings/Standort/Find');
  await page.getByRole('button', { name: 'Haupt-Standort erstellen' }).click();
  await page.waitForLoadState('networkidle');
  await shot(`${N}/Standorte_neu_erstellen.png`);

  await go(`/Settings/Standort/Edit/${ZUERICH_REGION}?origin=Find`);
  await tab(2);
  await shot(`${N}/Standorte_Plan.PNG`);

  await go('/Settings/Standort/Edit/9?origin=Find');
  await tab(3);
  await shot(`${N}/Standorte_Berechtigungen.PNG`);
  await popup(3, 'Hinzufügen');
  await shot(`${N}/Standort_berechtigung_hinzufügen.png`);

  await go(`/Settings/Standort/Edit/${DUEBENDORF}?origin=Find`);
  await tab(4);
  await popup(4, 'Hinzufügen');
  await shot(`${N}/Standort_Sperrzeit_hinzufügen.png`);

  await go(`/Settings/Standort/Edit/${DUEBENDORF}?origin=Find`);
  await tab(5);
  await shot(`${N}/Standort_Feiertage_Ansicht_Liste.png`);
  await popup(5, 'Hinzufügen');
  await shot(`${N}/Standort_Feiertage_hinzufügen.png`);

  await go('/Settings/Standort/Edit/1?origin=Find');
  await tab(7);
  await shot(`${N}/Standort_Notifikationen.PNG`);

  await go(`/Settings/Standort/Edit/${DUEBENDORF}?origin=Find`);
  await tab(8);
  await popup(8, 'Hinzufügen');
  await shot(`${N}/Standort_Buchungsanfrage_hinzufügen.png`);

  // Status
  await go('/Settings/Status/FindStatus');
  await shot(`${B}/Status/Status_einsehen.PNG`);
  await page.locator('#statusTreeView span', { hasText: 'Besetzt (Provisorisch)' }).first().click();
  await page.waitForTimeout(300);
  await shot(`${B}/Status/Status_bearbeiten.png`, { clip: '#statusTreeView' });
  await go('/Settings/Status/CreateStatus?parentId=2&origin=FindStatus');
  await page.locator('img[alt="Farbauswahl"]').first().click();
  await page.waitForTimeout(500);
  await shot(`${B}/Status/Status_hinzufügen.png`);

  // Workflows
  await go('/Settings/Workflow/Find');
  await shot(`${B}/Workflows/Workflow_Ansicht.png`);
  await go('/Settings/Workflow/Edit/1?origin=Find');
  await tab(2);
  await shot(`${B}/Workflows/Workflow_bearbeiten_Ereignisse.png`);
  await popup(2, 'Hinzufügen');
  await shot(`${B}/Workflows/Workflow_bearbeiten_Ereignisse_hinzufügen.png`);
  await go('/Settings/Workflow/View/1');
  await shot(`${B}/Workflows/Workflow_Daten_einsehen.PNG`);
}
