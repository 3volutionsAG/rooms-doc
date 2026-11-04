// Baut Kontaktbogen aus mehreren Bildern, damit eine Durchsicht nicht jedes Bild einzeln öffnen muss.
// Aufruf: node contact.mjs <ausgabe.png> <bild1> <bild2> ...   Optional: COLS=3 CELL=420
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { chromium } from './lib.mjs';

const [out, ...files] = process.argv.slice(2);
const cols = Number(process.env.COLS ?? 3);
const cell = Number(process.env.CELL ?? 420);
const html = `<body style="margin:0;background:#fff;font:11px sans-serif"><div style="display:grid;grid-template-columns:repeat(${cols},${cell}px);gap:6px;padding:6px">${files.map((f) => {
  const src = `data:image/${path.extname(f).slice(1).toLowerCase() === 'png' ? 'png' : 'jpeg'};base64,${readFileSync(f).toString('base64')}`;
  return `<figure style="margin:0;border:1px solid #bbb"><figcaption style="padding:2px 4px;background:#eee;word-break:break-all">${path.basename(f)}</figcaption><img src="${src}" style="width:100%;display:block"></figure>`;
}).join('')}</div></body>`;
const browser = await chromium.launch({ channel: 'msedge' });
const page = await browser.newPage({ viewport: { width: cols * (cell + 6) + 6, height: 600 } });
await page.setContent(html, { waitUntil: 'load' });
await page.screenshot({ path: out, fullPage: true });
await browser.close();
