// Builds the static progress-tracking website in docs/ from the reviewer markdown.
// - Mirrors all 23 modules (content rendered to HTML).
// - Mermaid blocks become <img> tags pointing at the committed PNGs (works offline,
//   and on mobile browsers — no JS renderer needed).
// - Emits docs/content.js as window.REVIEWER_DATA (loaded via <script>, so the site
//   works from file:// as well as when hosted).
//
//   node tools/build-site.mjs

import { readFile, writeFile, mkdir, readdir, copyFile } from 'node:fs/promises';
import path from 'node:path';
import { marked } from 'marked';

const ROOT = path.resolve(path.join(import.meta.dirname, '..'));
const REVIEWER = path.join(ROOT, 'reviewer');
const DOCS = path.join(ROOT, 'docs');
const SRC_DIAG = path.join(REVIEWER, 'diagrams');
const DST_DIAG = path.join(DOCS, 'diagrams');

await mkdir(DST_DIAG, { recursive: true });
for (const f of (await readdir(SRC_DIAG)).filter((f) => f.endsWith('.png'))) {
  await copyFile(path.join(SRC_DIAG, f), path.join(DST_DIAG, f));
}

const STRIP_MOBILE = /\n?[ \t]*<!-- mobile-diagram:[\s\S]*?<!-- \/mobile-diagram -->\n?/g;

// Reading order is filename order (00..22). Part labels for grouping in the sidebar.
const PART_OF = {
  '00': 'Getting started',
  '01': 'Foundations', '02': 'Foundations', '03': 'Foundations', '04': 'Foundations',
  '05': 'Core delivery', '06': 'Core delivery', '07': 'Core delivery', '08': 'Core delivery',
  '09': 'Core delivery', '12': 'Core delivery', '14': 'Core delivery',
  '10': 'People & communication', '11': 'People & communication', '13': 'People & communication', '18': 'People & communication',
  '15': 'Agile, tools & metrics', '16': 'Agile, tools & metrics', '17': 'Agile, tools & metrics',
  '19': 'Career launch', '20': 'Career launch',
  '21': 'Reference & practice', '22': 'Reference & practice',
};

marked.setOptions({ gfm: true });

const files = (await readdir(REVIEWER)).filter((f) => f.endsWith('.md')).sort();
const modules = [];

for (const f of files) {
  const base = f.replace(/\.md$/, '');
  const numFromFile = (f.match(/^(\d\d)-/) || [])[1] || '??';
  let md = (await readFile(path.join(REVIEWER, f), 'utf8')).replace(STRIP_MOBILE, '\n');

  const h1 = md.match(/^#\s+Module\s+(\d+)\s*[—–-]\s*(.+?)\s*$/m);
  const num = h1 ? h1[1] : numFromFile;
  const title = h1 ? h1[2].trim() : base;

  const timeM = md.match(/Estimated study time:?\*?\*?\s*([^·\n]+?)\s*(?:·|<br|\n)/i);
  let timeLabel = timeM ? timeM[1].replace(/\*/g, '').trim() : '';
  const minM = timeLabel.match(/(\d+)/);
  const minutes = minM ? parseInt(minM[1], 10) : 0;
  if (!timeLabel) timeLabel = num === '21' ? 'Reference' : '—';

  const lvM = md.match(/Level:?\*?\*?\s*([^·\n]+?)\s*(?:·|<br|\n)/i);
  const level = lvM ? lvM[1].replace(/\*/g, '').trim() : '';

  // Drop the H1 and the metadata blockquote — the site renders its own header.
  md = md.replace(/^#\s+Module[^\n]*\n/, '');
  md = md.replace(/^>\s.*Part of the.*\n/m, '');

  // Mermaid blocks -> committed PNG images (in reading order).
  let n = 0;
  md = md.replace(/```mermaid\n[\s\S]*?\n```/g, () => {
    n++;
    return `\n<img class="diagram" src="diagrams/${base}-${n}.png" alt="Diagram ${n} for Module ${num}: ${title}">\n`;
  });

  // Make quiz <details> answers parse as markdown (blank lines around inner content).
  md = md.replace(/<summary>Show answer<\/summary>[ \t]*\n/g, '<summary>Show answer</summary>\n\n');
  md = md.replace(/\n[ \t]*<\/details>/g, '\n\n</details>');

  // Rewrite intra-reviewer links to in-app hash routes.
  md = md.replace(/\]\((\d\d)-[a-z0-9-]+\.md\)/g, (_m, nn) => `](#/m/${nn})`);
  md = md.replace(/\]\(\.\.\/README\.md\)/g, '](#/)');

  const html = marked.parse(md);
  modules.push({ num, slug: base, title, minutes, timeLabel, level, part: PART_OF[num] || '', html });
}

const totalMinutes = modules.reduce((s, m) => s + m.minutes, 0);
const data = { modules, totalMinutes };
await writeFile(path.join(DOCS, 'content.js'), 'window.REVIEWER_DATA = ' + JSON.stringify(data) + ';\n');
console.log(`Built ${modules.length} modules, ${totalMinutes} total minutes -> docs/content.js`);
