import { execFileSync } from 'node:child_process';

// Screenshots für 3VROOMS/Generell als Administratorin (sieht alle Menüpunkte und hat laufende Buchungen).
// Die Kurzübersicht laufender Buchungen zeigt nur zwischen 08:30 und 11:30 Uhr zwei Einträge, siehe seed.sql.
const A = '3VROOMS/Generell/Applikationsaufbau';
const G = '3VROOMS/Generell/GrundlegendeFunktionen';
const BUCHEN = '/Book/ReservationFromRessource/Find?preserveFilter=False';
const LISTEN = '/Lists/Reservation/FindReservation?preserveMeineListe=False&preserveFilter=False';
const P = '3VROOMS/Einstellungen/Persönlicheeinstellungen';

export default async function ({ page, go, shot, mark }) {
  // Legt einen unsichtbaren Rahmen über mehrere Elemente, damit shot() auf deren Gesamtfläche zuschneiden kann.
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
  const header = page.locator('.header');
  const sidepanel = page.locator('#sidepanelarea');

  // Fensteraufteilung und Kopfbereich
  await go(LISTEN);
  const kopfbereich = await area(header, page.locator('#reservationsticker'));
  await mark(kopfbereich, { padding: -2 });
  await mark(sidepanel, { padding: 0 });
  await mark(page.locator('#mainpanelarea'), { padding: 0 });
  await shot(`${A}/Fensteraufteilung_BereicheBeschriftet_.png`);

  await mark(page.locator('#homeButton'));
  await mark(await area(page.locator('#mainnavigationBook'), page.locator('#mainnavigationSettings')));
  await mark(page.locator('#userinfos'));
  await shot(`${A}/Kopfbereich/Menüleiste/Kopfbereich_Beschriftet.png`, { clip: await area(header, page.locator('#reservationsticker')), padding: 0 });

  // Schnellzugriff Buchungen
  const ticker = page.locator('#reservationsticker');
  const dir = `${A}/Kopfbereich/SchnellzugriffBuchungen`;
  await shot(`${dir}/Kopfbereich_laufendeBuchung.png`, { clip: ticker, padding: 4 });
  await shot(`${dir}/Lupe.png`, { clip: page.locator('.tickerview').first(), padding: 2 });
  await shot(`${dir}/Bleistift.png`, { clip: page.locator('.tickeredit').first(), padding: 2 });
  await shot(`${dir}/AbbruchX.png`, { clip: page.locator('.tickercheckout').first(), padding: 2 });
  await shot(`${dir}/grünerHaken.png`, { clip: page.locator('.tickerfreigabe').first(), padding: 2 });
  await page.locator('.show_hide').click();
  await page.waitForTimeout(600);
  await shot(`${dir}/Kopfbereich_allelaufendenBuchungen.png`, { clip: await area(ticker, page.locator('.sliding_div')), padding: 1 });

  // Sidepanels der Bereiche
  for (const [ordner, url] of [
    ['Buchen', BUCHEN],
    ['Plan', '/Map/Map/Find?preserveFilter=True&filterSettingId=0'],
    ['Kalender', '/Calendar/Calendar/Find?preserveFilter=False'],
    ['Listen', LISTEN],
    ['Einstellungen', '/Settings/Person/ViewCurrentUser'],
  ]) {
    await go(url);
    await mark(sidepanel, { padding: 0 });
    await shot(`${A}/Sidepanel/${ordner}/Startseite_${ordner}_Sidepanel.png`);
  }

  // Listen: Symbole, sortierbare Spalten und Export
  await go(LISTEN);
  const icon = (name) => page.locator(`i.${name}:visible`).first();
  await mark(await area(icon('flexIconSmartListLayoutPaging'), icon('flexIconLayoutRefresh')));
  await shot(`${G}/ListenansichtAnpassen/Listensymbole_Position.png`);
  await shot(`${G}/ListenansichtAnpassen/Listensymbol_AnzahlZeilen.png`, { clip: icon('flexIconSmartListLayoutPaging'), padding: 2 });
  await shot(`${G}/ListenansichtAnpassen/Listensymbol_Spaltenauswahl.png`, { clip: icon('flexIconSmartListLayoutColumns'), padding: 2 });
  await shot(`${G}/ListenansichtAnpassen/Listensymbol_Refresh.png`, { clip: icon('flexIconLayoutRefresh'), padding: 2 });

  await mark(page.getByText('Ressource Bezeichnung', { exact: true }).first());
  await mark(page.getByText('Buchungs Titel', { exact: true }).first());
  await shot(`${G}/ListenansichtAnpassen/Spaltenname_blau.png`, { clip: page.locator('#mainpanelarea') });

  await mark(icon('flexIconSmartListExport'));
  await shot(`${G}/ListenExport/Listenexport_Position.png`);

  // Datumspicker
  await go(BUCHEN);
  const dpDir = `${G}/Suchfunktionen/Datumspicker`;
  await page.locator('.dateTimePicker-switch:visible').first().click();
  await page.waitForTimeout(300);
  await mark(page.locator('.dateTimePicker').first());
  await shot(`${dpDir}/Datum_manuelleEingabe_beschriftet.png`, { clip: page.locator('.dateTimePicker').first(), padding: 6 });
  await page.locator('img.dateTimePicker-openPopup').first().click();
  await page.waitForTimeout(600);
  const popup = page.locator('.dateTimePicker-popup').first();
  await mark(page.locator('img.dateTimePicker-openPopup').first());
  await mark(popup);
  await shot(`${dpDir}/Datumspicker_markiert.png`, { clip: await area(popup, page.locator('.dateTimePicker').first()) });
  await mark(page.locator('.dateTimePicker-popup-date').nth(0));
  await mark(page.locator('.dateTimePicker-popup-time').first());
  await mark(page.locator('.dateTimePicker-popup-date').nth(1));
  await shot(`${dpDir}/Datumspicker_Zeitspanne_beschriftet.png`, { clip: popup });

  // Eingabefelder: Vorschläge beim Tippen, Schnellauswahl, Personensuche, Drop-Down
  const eDir = `${G}/Suchfunktionen/Eingabefeld`;
  await go(BUCHEN);
  const standort = page.locator('.sidePanel input.intellibox:visible').first();
  await standort.pressSequentially('Zü', { delay: 120 });
  await page.waitForTimeout(1200);
  await shot(`${eDir}/Eingabefeld_Lupe_beschriftet.png`, { clip: await area(standort, { first: () => ({ boundingBox: async () => { const b = await standort.boundingBox(); return { x: b.x, y: b.y + b.height, width: b.width, height: 80 }; } }) }), padding: 26 });

  await go(LISTEN);
  await page.locator('#ReservationFilter_RessourcetypIdsImage').click();
  await page.waitForTimeout(600);
  await shot(`${eDir}/Eingabefeld_Schnellauswahl_beschriftet.png`, { clip: await area(page.locator('.fieldsetElement:has(label[for=ReservationFilter_RessourcetypIdsItemPicker])'), page.getByRole('button', { name: 'Bestätigen' }).first()), padding: 30 });

  await go(LISTEN);
  await page.locator('a.dattaya-maccordion-heading', { hasText: 'Personenspezifische Kriterien' }).click();
  await page.waitForTimeout(500);
  const organisator = page.locator('#ReservationFilter_Organisator');
  await organisator.scrollIntoViewIfNeeded();
  await organisator.pressSequentially('Meier', { delay: 100 });
  await page.waitForTimeout(1000);
  await page.locator('ul.ui-autocomplete:visible li').first().click();
  await page.waitForTimeout(500);
  const feld = page.locator('.fieldsetElement:has(label[for=ReservationFilter_Organisator])');
  await mark(page.locator('#ReservationFilter_OrganisatorWrapper a img'));
  await shot(`${eDir}/GrdlFKTen_EingabefeldKopf_b.png`, { clip: feld, padding: 0 });

  await go(LISTEN);
  const zeitpunkt = page.locator('.fieldsetElement:has(label[for=ReservationFilter_Reservationszeitpunkt])');
  await zeitpunkt.locator('.flexIconDropDown').click();
  await page.waitForTimeout(400);
  await shot(`${G}/Suchfunktionen/DropDownMenü/DropDownMenue_beschriftet.png`, { clip: await area(zeitpunkt, page.locator('ul.ui-menu:visible').last()), padding: 6 });

  // Actionpanel mit Fehlermeldung: Die eigene Buchung wird auf eine belegte Zeit gelegt. Der Server weist das ab, nichts wird gespeichert.
  const workshop = execFileSync('sqlcmd', ['-S', '.', '-E', '-d', 'rooms_docs', '-h', '-1', '-W', '-Q', "SET NOCOUNT ON; SELECT TOP 1 r.Id FROM Reservation r JOIN Ressource x ON x.Id=r.RessourceId WHERE r.Titel=N'Workshop Umzug Zürich' AND x.Name=N'Jungfrau' ORDER BY r.Id"]).toString().trim();
  await go(`/Calendar/Reservation/EditReservation/${workshop}?origin=Reservationsticker&isCreateReservation=False&isPortalIntegration=False`);
  await page.locator('#dtpBookingTimeFrom').fill('13:30');
  await page.locator('#dtpBookingTimeTo').fill('14:30');
  await page.getByRole('button', { name: 'Buchung abschliessen' }).click();
  const notify = page.locator('.ui-notify-message:visible', { hasText: 'nicht verfügbar' }).first();
  await notify.waitFor();
  await page.waitForFunction(() => window.jQuery && jQuery.active === 0);
  await page.waitForTimeout(2500);
  await mark(notify);
  await shot(`${A}/Kopfbereich/Actionpanel/FensterMitActionpanel_Fehlermeldung_beschriftet.png`);
  await page.getByRole('button', { name: 'Abbrechen' }).locator('visible=true').first().click();
  await page.waitForLoadState('networkidle');

  // Meine Arbeit: Ansicht der Änderungen einer Person
  await go('/Settings/Person/ViewCurrentUser');
  await page.getByRole('link', { name: 'Meine Arbeit', exact: true }).click();
  await page.waitForFunction(() => ![...document.querySelectorAll('.ui-tabs-nav a')].some((a) => a.textContent.includes('Loading')));
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(1500);
  await shot(`${P}/Einstellung_PE_bearbeiten_Arbeit.png`);

  // Symbole
  await go(LISTEN);
  await page.locator('.accordeonPanel > * a', { hasText: /^Ressourcen$/ }).first().click();
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(400);
  await shot(`${G}/Symbole/Bleistift.png`, { clip: page.locator('i.flexIconEditList:visible').first(), padding: 2 });
}
