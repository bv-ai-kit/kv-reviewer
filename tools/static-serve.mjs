// Minimal static file server for local preview of the docs/ site.
//   node tools/static-serve.mjs   ->   http://localhost:4178
import http from 'node:http';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.resolve(path.join(import.meta.dirname, '..', 'docs'));
const PORT = Number(process.env.PORT) || 4178;
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8', '.png': 'image/png', '.svg': 'image/svg+xml', '.json': 'application/json' };

http.createServer(async (req, res) => {
  try {
    let p = decodeURIComponent((req.url || '/').split('?')[0]);
    if (p === '/' || p === '') p = '/index.html';
    const fp = path.normalize(path.join(ROOT, p));
    if (!fp.startsWith(ROOT)) { res.writeHead(403); return res.end('forbidden'); }
    const data = await readFile(fp);
    res.writeHead(200, { 'content-type': TYPES[path.extname(fp)] || 'application/octet-stream' });
    res.end(data);
  } catch (e) { res.writeHead(404); res.end('not found'); }
}).listen(PORT, () => console.log('serving docs/ on http://localhost:' + PORT));
