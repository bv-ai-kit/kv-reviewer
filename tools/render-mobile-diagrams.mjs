// Renders every ```mermaid block in the reviewer to a committed PNG and inserts a
// collapsed "view as image" block beneath it, so diagrams are visible in the
// GitHub mobile app (which does not render Mermaid). The live ```mermaid blocks
// are left untouched for the GitHub website.
//
// Re-runnable: previously inserted blocks are stripped and regenerated.
// Rendering uses mermaid.ink (PNG, white background). Requires network + Node 18+.
//
//   node tools/render-mobile-diagrams.mjs

import { readFile, writeFile, mkdir, readdir } from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.resolve(path.join(import.meta.dirname, '..'));
const REVIEWER = path.join(ROOT, 'reviewer');
const DIAGRAMS = path.join(REVIEWER, 'diagrams');
const SUMMARY = '🖼️ Tap to view as an image (for the GitHub mobile app)';
const STRIP_RE = /\n?[ \t]*<!-- mobile-diagram:[\s\S]*?<!-- \/mobile-diagram -->\n?/g;

await mkdir(DIAGRAMS, { recursive: true });

// File set: README.md (root) + reviewer/*.md
const targets = [{ abs: path.join(ROOT, 'README.md'), base: 'readme', prefix: 'reviewer/diagrams/' }];
for (const f of (await readdir(REVIEWER)).filter((f) => f.endsWith('.md')).sort()) {
  targets.push({ abs: path.join(REVIEWER, f), base: f.replace(/\.md$/, ''), prefix: 'diagrams/' });
}

const escAlt = (s) => s.replace(/"/g, "'").replace(/\s+/g, ' ').trim().slice(0, 120) || 'Project management diagram';

// Pass 1: parse files, insert toggles, collect render tasks.
const tasks = [];
for (const t of targets) {
  let content = (await readFile(t.abs, 'utf8')).replace(STRIP_RE, '\n');
  const lines = content.split('\n');
  const out = [];
  let i = 0;
  let n = 0;
  while (i < lines.length) {
    if (lines[i].trim() === '```mermaid') {
      const code = [];
      out.push(lines[i]);
      i++;
      while (i < lines.length && lines[i].trim() !== '```') { code.push(lines[i]); out.push(lines[i]); i++; }
      if (i < lines.length) { out.push(lines[i]); i++; } // closing fence
      n++;
      const id = `${t.base}-${n}`;
      let alt = `${t.base} diagram ${n}`;
      // keep an immediately-following italic caption line before the toggle
      if (i < lines.length && /^\s*\*.+\*\s*$/.test(lines[i])) {
        out.push(lines[i]);
        alt = lines[i].trim().replace(/^\*+/, '').replace(/\*+$/, '');
        i++;
      }
      out.push('');
      out.push(`<!-- mobile-diagram:${id} -->`);
      out.push(`<details><summary>${SUMMARY}</summary>`);
      out.push('');
      out.push(`<img src="${t.prefix}${id}.png" alt="${escAlt(alt)}" />`);
      out.push('');
      out.push('</details>');
      out.push('<!-- /mobile-diagram -->');
      tasks.push({ id, code: code.join('\n'), file: path.relative(ROOT, t.abs) });
    } else {
      out.push(lines[i]);
      i++;
    }
  }
  await writeFile(t.abs, out.join('\n'));
  console.log(`inserted ${n} toggle(s) -> ${path.relative(ROOT, t.abs)}`);
}

console.log(`\nRendering ${tasks.length} diagrams via mermaid.ink ...\n`);

async function render({ id, code }, attempt = 1) {
  const b64 = Buffer.from(code, 'utf8').toString('base64url');
  const url = `https://mermaid.ink/img/${b64}?type=png&bgColor=white`;
  try {
    const res = await fetch(url);
    const buf = Buffer.from(await res.arrayBuffer());
    const ct = res.headers.get('content-type') || '';
    if (!res.ok || !ct.startsWith('image/') || buf.length < 500) {
      throw new Error(`status=${res.status} type=${ct} bytes=${buf.length}`);
    }
    await writeFile(path.join(DIAGRAMS, `${id}.png`), buf);
    return { id, ok: true, bytes: buf.length };
  } catch (e) {
    if (attempt < 3) { await new Promise((r) => setTimeout(r, 600 * attempt)); return render({ id, code }, attempt + 1); }
    return { id, ok: false, error: String(e.message || e) };
  }
}

// Small concurrency pool to be polite to the service.
const POOL = 5;
const results = [];
for (let s = 0; s < tasks.length; s += POOL) {
  results.push(...(await Promise.all(tasks.slice(s, s + POOL).map((t) => render(t)))));
}

const failed = results.filter((r) => !r.ok);
console.log(`\nRendered OK: ${results.length - failed.length}/${results.length}`);
if (failed.length) {
  console.log('FAILED:');
  for (const f of failed) console.log(`  ${f.id}: ${f.error}`);
  process.exitCode = 1;
}
