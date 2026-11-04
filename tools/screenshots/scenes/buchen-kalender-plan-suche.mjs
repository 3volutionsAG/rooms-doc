// Reiter Buchen: Suchmaske, Schnellbuchung und die Icons in der Trefferliste. Nichts wird gespeichert.
const F = '3VROOMS/Buchen/FreieRessourcenSuchen';
// Dateien mit der Endung .PNG werden als .png angesprochen. Auf NTFS trifft das dieselbe Datei und ihr Name bleibt erhalten.
const M = '3VROOMS/Buchen/BuchungErstellen/Schnellbuchung';

export default async function ({ page, go, shot, mark }) {
  const idle = async () => { await page.waitForLoadState('networkidle'); await page.waitForTimeout(400); };
  const inDays = (n) => { const d = new Date(); d.setDate(d.getDate() + n); return d.toLocaleDateString('de-CH', { day: '2-digit', month: '2-digit', year: 'numeric' }); };
  const row = (name) => page.locator('tr').filter({ has: page.locator('a', { hasText: new RegExp(`^${name}$`) }) }).first();

  // Sucht an einem Tag ohne Buchungen, damit die Trefferliste alle Räume mit Bestuhlung zeigt.
  const search = async () => {
    await go('/Book/ReservationFromRessource/Find?preserveFilter=False');
    await page.locator('#ReservationFilter_ManualDateTimeSelection').check();
    await page.locator('#dtpReservationFilterDateFrom').fill(inDays(6));
    await page.locator('#dtpReservationFilterDateFrom').press('Tab');
    await page.locator('#ReservationFilter_Kapazitaet').fill('5');
    await page.locator('input[value="Finden"]').click();
    await idle();
  };

  await search();
  await shot(`${F}/SuchenNachKriterien/Freie_Ressourcen_suchen_nach_Kriterien.png`);

  // Icons der Trefferliste
  const eiger = row('Eiger');
  await shot(`${F}/Button_Schnellreservation.png`, { clip: eiger.locator('img[alt="Schnellbuchung erstellen"]'), padding: 2 });
  await shot(`${F}/Button_Detailbuchung.png`, { clip: eiger.locator('img[alt="Detailbuchung erstellen"]'), padding: 2 });

  // Erweiterte Kriterien
  await page.getByText('Erweiterte Kriterien', { exact: true }).click();
  await page.waitForTimeout(500);
  await shot(`${F}/SuchenNachKriterien/FR_suchen_erweiterte_Kriterien.png`);

  // Schnellbuchung
  await search();
  await eiger.locator('img[alt="Schnellbuchung erstellen"]').click();
  await idle();
  await page.locator('.popUp:visible').first().waitFor();
  await mark(eiger.locator('img[alt="Schnellbuchung erstellen"]'));
  await shot(`${M}/Einzelbuchung/Buchen_Schnellbuchung.png`);

  // Die Spalte Info ist in der Standard-Spaltenauswahl ausgeblendet. Das Icon kommt deshalb direkt aus der App, ohne die Spalten des Admins zu ändern.
  await go('/Content/Images/RessourcenInfo.png');
  await page.evaluate(() => { document.body.style.background = '#fff'; document.querySelector('img').style.background = '#fff'; });
  await shot(`${F}/Button_Ressourceninfo.png`, { clip: page.locator('img'), padding: 0 });
  await go('/Book/ReservationFromRessource/Find?preserveFilter=False');
}
