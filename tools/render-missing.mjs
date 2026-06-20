// Renders only the diagram PNGs that are missing/incomplete (gentle, sequential,
// with backoff) — used to fill in renders skipped due to service rate-limiting.
// Does NOT modify markdown. Run after render-mobile-diagrams.mjs if some failed.
//   node tools/render-missing.mjs

import { readFile, writeFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.resolve(path.join(import.meta.dirname, '..'));
const REVIEWER = path.join(ROOT, 'reviewer');
const DIAGRAMS = path.join(REVIEWER, 'diagrams');

const targets = [{ abs: path.join(ROOT, 'README.md'), base: 'readme' }];
for (const f of (await readdir(REVIEWER)).filter((f) => f.endsWith('.md')).sort()) {
  targets.push({ abs: path.join(REVIEWER, f), base: f.replace(/\.md$/, '') });
}

const all = [];
for (const t of targets) {
  const lines = (await readFile(t.abs, 'utf8')).split('\n');
  let i = 0, n = 0;
  while (i < lines.length) {
    if (lines[i].trim() === '```mermaid') {
      const code = []; i++;
      while (i < lines.length && lines[i].trim() !== '```') { code.push(lines[i]); i++; }
      i++; n++;
      all.push({ id: `${t.base}-${n}`, code: code.join('\n') });
    } else i++;
  }
}

const ok = async (p) => { try { return (await stat(p)).size >= 500; } catch { return false; } };
const missing = [];
for (const d of all) if (!(await ok(path.join(DIAGRAMS, `${d.id}.png`)))) missing.push(d);
console.log(`total ${all.length}, missing ${missing.length}`);

async function render({ id, code }, attempt = 1) {
  const b64 = Buffer.from(code, 'utf8').toString('base64url');
  const url = `https://mermaid.ink/img/${b64}?type=png&bgColor=white`;
  try {
    const res = await fetch(url);
    const buf = Buffer.from(await res.arrayBuffer());
    const ct = res.headers.get('content-type') || '';
    if (!res.ok || !ct.startsWith('image/') || buf.length < 500) throw new Error(`status=${res.status} type=${ct} bytes=${buf.length}`);
    await writeFile(path.join(DIAGRAMS, `${id}.png`), buf);
    return { id, ok: true, bytes: buf.length };
  } catch (e) {
    if (attempt <= 7) { await new Promise((r) => setTimeout(r, 900 * attempt)); return render({ id, code }, attempt + 1); }
    return { id, ok: false, error: String(e.message || e) };
  }
}

const results = [];
for (const m of missing) {
  const r = await render(m);
  console.log(`${r.ok ? 'ok  ' : 'FAIL'} ${r.id}${r.ok ? ` ${r.bytes}b` : ` ${r.error}`}`);
  results.push(r);
  await new Promise((r) => setTimeout(r, 400));
}
const failed = results.filter((r) => !r.ok);
console.log(`\nfilled ${results.length - failed.length}/${results.length}`);
if (failed.length) { console.log('still failing:'); failed.forEach((f) => console.log(`  ${f.id}: ${f.error}`)); process.exitCode = 1; }
