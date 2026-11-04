// Gemeinsame Hilfen für die Screenshot-Szenen unter scenes/. Siehe README.md.
import { createRequire } from 'node:module';
import { mkdirSync, existsSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
export const REPO = path.resolve(here, '..', '..');
export const CONTENT = path.join(REPO, 'content', 'de');

// Playwright kommt aus dem rooms-Repo (e2e/calendar-sync), damit dieses Repo keine eigene Abhängigkeit braucht.
const sibling = path.resolve(REPO, '..', 'rooms');
export const ROOMS_REPO = process.env.ROOMS_REPO ?? (existsSync(sibling) ? sibling : path.resolve(REPO, '..', '..', 'rooms'));
const require = createRequire(path.join(ROOMS_REPO, 'e2e', 'calendar-sync', 'package.json'));
export const { chromium } = require('@playwright/test');

export const BASE = process.env.ROOMS_URL ?? 'http://localhost:5080/Default';
export const PASSWORD = 'Docs-Demo-2026!';
export const USERS = { admin: 'admin', superuser: 'thomas.meier', anwender: 'sandra.frei', lesen: 'reto.brunner' };
export const VIEWPORT = { width: 1280, height: 768 };
const RED = '#e3000f';

// Blendet aus, was nichts mit der Funktion zu tun hat und nur in der lokalen Umgebung auftaucht.
const CLEANUP_CSS = `.footer iframe { display: none !important; }`;

/** Öffnet einen eingeloggten Browser. Gibt { browser, context, page, shot, mark, clearMarks, go, close } zurück. */
export async function session(user = 'admin', { viewport = VIEWPORT, base = BASE } = {}) {
  const browser = await chromium.launch({ channel: 'msedge' });
  const context = await browser.newContext({ viewport, locale: 'de-CH', timezoneId: 'Europe/Zurich' });
  const page = await context.newPage();
  page.setDefaultTimeout(20000);
  await page.goto(base, { waitUntil: 'networkidle', timeout: 120000 });
  await page.fill('#Username', USERS[user] ?? user);
  await page.fill('#Password', PASSWORD);
  await page.click('button[value=login], button[name=button]');
  await page.waitForLoadState('networkidle', { timeout: 120000 });

  const prepare = async () => { await page.addStyleTag({ content: CLEANUP_CSS }).catch(() => {}); };
  page.on('load', () => { prepare(); });
  await prepare();

  const api = {
    browser, context, page,
    /** Navigiert relativ zur Mandanten-URL und wartet, bis die Seite ruhig ist. */
    async go(relative) {
      await page.goto(base + relative, { waitUntil: 'networkidle', timeout: 60000 });
      await prepare();
    },
    mark: (target, opts) => mark(page, target, opts),
    clearMarks: () => clearMarks(page),
    /**
     * Speichert einen Screenshot.
     * file: Pfad relativ zu content/de, zum Beispiel '3VROOMS/Kalender/Kalenderansicht/Kalender_Kalenderansicht.png'.
     * clip: Selector oder Locator, auf den zugeschnitten wird. Ohne clip wird der ganze Viewport aufgenommen.
     * padding: Rand um den Ausschnitt in Pixeln.
     * Markierungen werden nach der Aufnahme entfernt.
     */
    async shot(file, { clip, padding = 8, keepMarks = false } = {}) {
      const out = path.join(CONTENT, file);
      mkdirSync(path.dirname(out), { recursive: true });
      await page.waitForTimeout(150);
      let box;
      if (clip) {
        const b = await toLocator(page, clip).first().boundingBox();
        if (!b) throw new Error(`clip nicht sichtbar: ${clip}`);
        const vp = page.viewportSize();
        const x = Math.max(0, Math.floor(b.x - padding));
        const y = Math.max(0, Math.floor(b.y - padding));
        box = { x, y, width: Math.min(vp.width - x, Math.ceil(b.width + padding * 2)), height: Math.min(vp.height - y, Math.ceil(b.height + padding * 2)) };
      }
      await page.screenshot({ path: out, type: /\.jpe?g$/i.test(out) ? 'jpeg' : 'png', clip: box, animations: 'disabled', caret: 'hide' });
      if (!keepMarks) await clearMarks(page);
      return out;
    },
    close: () => browser.close(),
  };
  return api;
}

function toLocator(page, target) { return typeof target === 'string' ? page.locator(target) : target; }

/**
 * Zeichnet eine rote Markierung über das Element, ohne die Seite zu verändern.
 * style: 'box' (Rahmen, Standard) oder 'arrow' (Pfeil von links zeigt auf das Element).
 * Funktioniert auch für Elemente in iframes, weil die Position aus dem Locator stammt.
 */
export async function mark(page, target, { style = 'box', padding = 3, from = 'left' } = {}) {
  const box = await toLocator(page, target).first().boundingBox();
  if (!box) throw new Error(`Markierung nicht sichtbar: ${target}`);
  await page.evaluate(({ box, style, padding, from, RED }) => {
    const el = document.createElement('div');
    el.className = 'docs-shot-mark';
    el.style.cssText = 'position:fixed;pointer-events:none;z-index:2147483647;';
    if (style === 'box') {
      el.style.left = `${box.x - padding}px`;
      el.style.top = `${box.y - padding}px`;
      el.style.width = `${box.width + padding * 2}px`;
      el.style.height = `${box.height + padding * 2}px`;
      el.style.border = `2px solid ${RED}`;
      el.style.borderRadius = '4px';
      el.style.boxSizing = 'border-box';
    } else {
      const len = 34;
      const cx = box.x + box.width / 2, cy = box.y + box.height / 2;
      const tip = { left: [box.x - 2, cy], right: [box.x + box.width + 2, cy], top: [cx, box.y - 2], bottom: [cx, box.y + box.height + 2] }[from];
      const tail = { left: [tip[0] - len, tip[1]], right: [tip[0] + len, tip[1]], top: [tip[0], tip[1] - len], bottom: [tip[0], tip[1] + len] }[from];
      el.style.left = '0'; el.style.top = '0'; el.style.width = '100vw'; el.style.height = '100vh';
      el.innerHTML = `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><marker id="docs-arrow" markerWidth="4" markerHeight="4" refX="2.6" refY="2" orient="auto"><path d="M0,0 L4,2 L0,4 z" fill="${RED}"/></marker></defs><line x1="${tail[0]}" y1="${tail[1]}" x2="${tip[0]}" y2="${tip[1]}" stroke="${RED}" stroke-width="3.5" marker-end="url(#docs-arrow)"/></svg>`;
    }
    document.body.appendChild(el);
  }, { box, style, padding, from, RED });
}

export async function clearMarks(page) {
  await page.evaluate(() => document.querySelectorAll('.docs-shot-mark').forEach((e) => e.remove()));
}

export { existsSync, readdirSync, path };
