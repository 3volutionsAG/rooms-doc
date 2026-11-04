// Plan: Übersicht, Status und Farben um 14 Uhr, Filter, Schnellbuchung und Planeditor. Der Grundriss kommt aus seed-buchen-kalender-plan.sql.
// Die Uhr im Browser steht auf 14 Uhr, damit der Filter unabhängig von der Tageszeit dieselben Buchungen zeigt.
const P = '3VROOMS/Plan';

export default async function ({ page, go, shot, mark }) {
  const idle = async (ms = 500) => { await page.waitForLoadState('networkidle'); await page.waitForTimeout(ms); };
  const box = (x, y, width, height) => ({ first: () => ({ boundingBox: async () => ({ x, y, width, height }) }) });
  const at14 = new Date(); at14.setHours(14, 0, 0, 0);
  await page.clock.install({ time: at14 });

  // Standort Zürich laden und die Filterzeit neu auslösen, damit die Buchungen um 14 Uhr gelten.
  const openPlan = async () => {
    await go('/Map/Map/Find?preserveFilter=False');
    await go('/Map/Map/View/9');
    await idle(1500);
    const map = page.locator('#rooms-map');
    await map.locator('button.rounded-br-lg').first().click();
    await idle(1500);
    return map;
  };

  // Filter offen: beide Bereiche markieren
  const map = await openPlan();
  // Der Tooltip eines Hotspots verschwindet nur, wenn die Maus in einen leeren Bereich des Plans geht.
  await page.mouse.move(1100, 690);
  await idle(600);
  await mark(box(7, 108, 308, 600));
  await mark(box(391, 126, 256, 564));
  await shot(`${P}/Plansuche/plan_filter.png`);

  // Filter zu, gezoomt auf Jungfrau: Rahmen = Statusfarbe, Fläche = Ressourcenfarbe, Punkt = Verfügbarkeit
  await map.locator('button').first().click();
  await idle(600);
  await shot(`${P}/Planstatus/plan_colors.png`, { clip: box(352, 168, 252, 168), padding: 0 });

  // Eine Stufe herauszoomen, dann passt der ganze Plan neben die Übersichtskarte
  await map.locator('.ol-zoom-out').click();
  await idle(1000);
  // Plan nach links ziehen, damit die Übersichtskarte keinen Raum verdeckt
  await page.mouse.move(420, 640);
  await page.mouse.down();
  await page.mouse.move(320, 640, { steps: 6 });
  // Kurz halten, sonst schiebt OpenLayers den Plan mit Schwung weiter.
  await page.waitForTimeout(500);
  await page.mouse.up();
  await idle(800);
  await page.mouse.move(20, 740);
  await page.waitForTimeout(400);
  await shot(`${P}/plan_overview.png`);
  await shot(`${P}/Planstatus/plan_status.png`, { clip: map });

  // Schnellbuchung auf dem freien Raum Pilatus
  await page.mouse.click(807, 331);
  await page.mouse.move(420, 640);
  await idle(2500);
  await shot(`${P}/BuchenAufDemPlan/plan_schnellbuchung.png`);
  await page.locator('.popUp:visible .popUp-closeButton').first().click().catch(() => {});

  // Sidepanel mit erweiterter Suche
  await page.locator('a', { hasText: 'Erweiterte Kriterien' }).first().click();
  await page.locator('a', { hasText: 'Gliederungen' }).first().click();
  await idle();
  await shot('3VROOMS/Buchen/FreieRessourcenSuchen/Plansuche/Plan_suche_Sidepanel.png');

  // Standort bearbeiten, Stammdaten und Planeditor
  await go('/Settings/Standort/Edit/9');
  await idle(1500);
  await shot(`${P}/PlanErstellen/Plan_zuweisen.png`);
  await page.locator('a.ui-tabs-anchor', { hasText: /^Plan/ }).first().click();
  await idle(1500);
  await shot(`${P}/PlanErstellen/plan_feature_forms.png`, { clip: box(731, 189, 110, 26), padding: 0 });

  // Bestehende Verknüpfung auf Eiger auswählen. Abbrechen verwirft den Bearbeitungskontext.
  await page.mouse.click(687, 285);
  await idle(600);
  await page.mouse.move(1185, 640);
  await page.waitForTimeout(600);
  await shot(`${P}/PlanErstellen/plan_neue_verknuepfung.png`);
  await page.locator('button:visible, input[type=button]:visible').filter({ hasText: /^Abbrechen$/ }).last().click();
  await idle();
  await go('/Map/Map/Find?preserveFilter=False');
}
