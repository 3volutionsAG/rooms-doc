// Führt Screenshot-Szenen aus. Aufruf: node run.mjs            alle Szenen
//                                      node run.mjs kalender   nur scenes/kalender.mjs
import { readdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { session } from './lib.mjs';

const dir = path.join(path.dirname(fileURLToPath(import.meta.url)), 'scenes');
const wanted = process.argv.slice(2);
const names = readdirSync(dir).filter((f) => f.endsWith('.mjs')).map((f) => f.slice(0, -4)).filter((n) => wanted.length === 0 || wanted.includes(n));

let failed = 0;
for (const name of names) {
  const scene = await import(pathToFileURL(path.join(dir, `${name}.mjs`)).href);
  const s = await session(scene.user ?? 'admin');
  try {
    await scene.default(s);
    console.log(`ok  ${name}`);
  } catch (error) {
    failed += 1;
    console.error(`FEHLER ${name}: ${error.message}`);
    await s.page.screenshot({ path: path.join(process.env.TEMP ?? '.', `screenshot-error-${name}.png`) }).catch(() => {});
  } finally {
    await s.close();
  }
}
process.exitCode = failed ? 1 : 0;
