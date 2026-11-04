// Buchungsanfragen suchen. Die Szene liest nur und ändert keine Anfrage.
const B = '3VROOMS/Listen/BuchungsanfragenSuchen';

export default async function ({ page, go, shot, mark }) {
  const side = () => page.locator('.sidePanelContent:visible').first();
  const openSection = async (name) => {
    const title = page.locator('h3.multipleAccordionTitel', { hasText: name }).first();
    await title.click();
    await page.waitForTimeout(500);
    await title.evaluate((e) => e.scrollIntoView({ block: 'start' }));
    await page.waitForTimeout(200);
  };

  await go('/Lists/Reservationsanfrage/Find');
  await mark(page.locator('h3', { hasText: 'Buchungsanfrage' }).first());
  await shot(`${B}/List_BA_b.png`);
  await shot(`${B}/Anzeigenbereich/List_BA_Anz.png`, { clip: '#mainpanel', padding: 0 });
  await shot(`${B}/Anzeigenbereich/Bleistift.png`, { clip: page.locator('.smartListContainer table tbody tr a[href*="/Edit"] i, .smartListContainer table tbody tr a[href*="/Edit"] img, .smartListContainer table tbody tr i[class*=Edit]').first(), padding: 2 });
  await shot(`${B}/EinfacheSuche/List_BA_EinfSuch.png`, { clip: side(), padding: 2 });
  await openSection('Anfragespezifische Kriterien');
  await shot(`${B}/ErweiterteSuche/List_BA_AnfSpezKrit_b.png`, { clip: side(), padding: 2 });
  await openSection('Anfragespezifische Kriterien');
  await openSection('Personenspezifische Kriterien');
  await shot(`${B}/ErweiterteSuche/List_BA_PerSpezKrit_b.png`, { clip: side(), padding: 2 });
}
