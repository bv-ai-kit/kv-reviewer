/* Sales -> PM Reviewer — client app. Progress lives only in this browser (localStorage). */
(function () {
  'use strict';
  var DATA = window.REVIEWER_DATA || { modules: [], totalMinutes: 0 };
  var MODULES = DATA.modules;
  var byNum = {};
  MODULES.forEach(function (m) { byNum[m.num] = m; });

  var K_DONE = 'kvr:v1:done', K_LAST = 'kvr:v1:last', K_THEME = 'kvr:v1:theme';

  // ---- storage ----
  function loadDone() { try { return JSON.parse(localStorage.getItem(K_DONE) || '{}') || {}; } catch (e) { return {}; } }
  function saveDone(d) { try { localStorage.setItem(K_DONE, JSON.stringify(d)); } catch (e) {} }
  function isDone(num) { return !!loadDone()[num]; }
  function setDone(num, val) { var d = loadDone(); if (val) { d[num] = true; } else { delete d[num]; } saveDone(d); }
  function resetAll() { try { localStorage.removeItem(K_DONE); } catch (e) {} }
  function setLast(num) { try { localStorage.setItem(K_LAST, num); } catch (e) {} }
  function getLast() { try { return localStorage.getItem(K_LAST); } catch (e) { return null; } }

  // ---- helpers ----
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function fmt(min) { if (!min) return '0m'; var h = Math.floor(min / 60), m = min % 60; return (h ? h + 'h ' : '') + (m ? m + 'm' : (h ? '' : '0m')); }

  function stats() {
    var done = loadDone(), dc = 0, dm = 0;
    MODULES.forEach(function (m) { if (done[m.num]) { dc++; dm += m.minutes; } });
    return { doneCount: dc, total: MODULES.length, doneMin: dm, totalMin: DATA.totalMinutes,
      pct: MODULES.length ? Math.round(dc / MODULES.length * 100) : 0 };
  }
  function partsInOrder() {
    var seen = [], map = {};
    MODULES.forEach(function (m) { if (!map[m.part]) { map[m.part] = []; seen.push(m.part); } map[m.part].push(m); });
    return seen.map(function (p) { return { part: p, items: map[p] }; });
  }

  // ---- theme ----
  function applyTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    document.getElementById('themeBtn').textContent = t === 'dark' ? '☀️' : '🌙';
  }
  function initTheme() {
    var t = null; try { t = localStorage.getItem(K_THEME); } catch (e) {}
    if (!t) t = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
    applyTheme(t);
  }
  document.getElementById('themeBtn').onclick = function () {
    var t = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem(K_THEME, t); } catch (e) {}
    applyTheme(t);
  };

  // ---- shared pieces ----
  function progressSummary(s) {
    return '<div class="summary"><div class="ring" style="--pct:' + s.pct + '"><span>' + s.pct + '%</span></div>' +
      '<div class="summary-stats">' +
      '<div><strong>' + s.doneCount + '</strong> of <strong>' + s.total + '</strong> modules done</div>' +
      '<div>⏱️ <strong>' + fmt(s.doneMin) + '</strong> done · <strong>' + fmt(s.totalMin - s.doneMin) + '</strong> to go · ' + fmt(s.totalMin) + ' total</div>' +
      '</div></div>';
  }
  function doneButton(num, done) {
    return '<button class="btn done-btn ' + (done ? 'is-done' : 'primary') + '" data-done="' + num + '">' +
      (done ? '✓ Done — tap to mark not done' : 'Mark this module as done') + '</button>';
  }
  function moduleRow(m) {
    var done = isDone(m.num);
    return '<div class="mrow ' + (done ? 'done' : '') + '">' +
      '<button class="toggle" data-num="' + m.num + '" aria-label="Toggle done">' + (done ? '✓' : '○') + '</button>' +
      '<a class="mlink" href="#/m/' + m.num + '"><span class="mnum">' + m.num + '</span>' + esc(m.title) + '</a>' +
      '<span class="mtime">' + esc(m.timeLabel) + '</span></div>';
  }

  // ---- views ----
  function viewHome() {
    var s = stats();
    var last = getLast();
    var continueM = (last && byNum[last]) || MODULES.find(function (m) { return !isDone(m.num); }) || MODULES[0];
    var groups = partsInOrder().map(function (g) {
      return '<div class="part"><h3>' + esc(g.part) + '</h3><div class="rows">' +
        g.items.map(moduleRow).join('') + '</div></div>';
    }).join('');
    return '<section class="hero">' +
      '<h1>🚀 Sales → Project Management</h1>' +
      '<p class="lede">Your study reviewer — read at your own pace. Your progress is saved right here in this browser, and nothing ever leaves your device.</p>' +
      '<div class="cta">' +
      '<a class="btn primary" href="#/m/' + continueM.num + '">▶ ' + (last ? 'Continue' : 'Start') + ': Module ' + continueM.num + ' — ' + esc(continueM.title) + '</a>' +
      '<a class="btn" href="#/progress">📊 View progress</a></div>' +
      progressSummary(s) +
      '</section><section class="modules">' + groups + '</section>';
  }

  function viewProgress() {
    var s = stats();
    var groups = partsInOrder().map(function (g) {
      var rows = g.items.map(function (m) {
        var done = isDone(m.num);
        return '<tr class="' + (done ? 'done' : '') + '">' +
          '<td><button class="toggle" data-num="' + m.num + '" aria-label="Toggle done">' + (done ? '✓' : '○') + '</button></td>' +
          '<td><a href="#/m/' + m.num + '">' + m.num + ' — ' + esc(m.title) + '</a></td>' +
          '<td class="ttime">' + esc(m.timeLabel) + '</td>' +
          '<td>' + (done ? '<span class="pill ok">Done</span>' : '<span class="pill">Not done</span>') + '</td></tr>';
      }).join('');
      return '<tbody><tr class="pgroup-head"><td colspan="4">' + esc(g.part) + '</td></tr>' + rows + '</tbody>';
    }).join('');
    return '<section class="progress"><h1>📊 Your progress</h1>' +
      progressSummary(s) +
      '<div class="progress-actions"><button class="btn danger" id="resetBtn">↺ Reset all progress</button>' +
      '<span class="muted">Saved only in this browser (localStorage) — clearing it can’t be undone.</span></div>' +
      '<table class="ptable"><thead><tr><th></th><th>Module</th><th>Approx. time</th><th>Status</th></tr></thead>' +
      groups + '</table></section>';
  }

  function viewModule(num) {
    var m = byNum[num];
    if (!m) return '<section><h1>Hmm, that module isn’t here.</h1><p><a class="btn" href="#/">🏠 Back home</a></p></section>';
    setLast(num);
    var idx = MODULES.findIndex(function (x) { return x.num === num; });
    var prev = MODULES[idx - 1], next = MODULES[idx + 1];
    var done = isDone(num);
    var head = '<div class="mhead"><div class="mhead-meta">' +
      '<a class="back" href="#/progress">📊 Progress</a>' +
      (m.part ? '<span class="chip">' + esc(m.part) + '</span>' : '') +
      (m.level ? '<span class="chip">' + esc(m.level) + '</span>' : '') +
      '<span class="chip">⏱️ ' + esc(m.timeLabel) + '</span></div>' +
      '<h1>Module ' + m.num + ' — ' + esc(m.title) + '</h1>' + doneButton(num, done) + '</div>';
    var foot = '<div class="mfoot">' + doneButton(num, done) + '<div class="prevnext">' +
      (prev ? '<a class="btn" href="#/m/' + prev.num + '">← ' + prev.num + '</a>' : '<span></span>') +
      '<a class="btn" href="#/">🏠 Home</a>' +
      (next ? '<a class="btn" href="#/m/' + next.num + '">' + next.num + ' →</a>' : '<span></span>') +
      '</div></div>';
    return '<article class="module">' + head + '<div class="content">' + m.html + '</div>' + foot + '</article>';
  }

  // ---- sidebar ----
  function renderSidebar(activeNum) {
    var s = stats();
    var groups = partsInOrder().map(function (g) {
      var items = g.items.map(function (m) {
        var done = isDone(m.num), active = m.num === activeNum ? ' active' : '';
        return '<a class="navitem' + active + '" href="#/m/' + m.num + '">' +
          '<span class="check">' + (done ? '✓' : '○') + '</span>' +
          '<span class="nlabel">' + m.num + ' · ' + esc(m.title) + '</span></a>';
      }).join('');
      return '<div class="navgroup"><div class="navgroup-title">' + esc(g.part) + '</div>' + items + '</div>';
    }).join('');
    document.getElementById('nav').innerHTML =
      '<a class="navtop" href="#/">🏠 Home</a>' +
      '<a class="navtop" href="#/progress">📊 Progress</a>' +
      '<div class="navprogress"><div class="bar"><div class="bar-fill" style="width:' + s.pct + '%"></div></div>' +
      '<div class="navprogress-label">' + s.doneCount + '/' + s.total + ' done · ' + s.pct + '%</div></div>' +
      groups;
  }

  // ---- wiring ----
  function wire() {
    document.querySelectorAll('[data-done]').forEach(function (b) {
      b.onclick = function () { var num = b.getAttribute('data-done'); setDone(num, !isDone(num)); route(); };
    });
    document.querySelectorAll('.toggle[data-num]').forEach(function (b) {
      b.onclick = function (e) { e.preventDefault(); var num = b.getAttribute('data-num'); setDone(num, !isDone(num)); route(); };
    });
    var rb = document.getElementById('resetBtn');
    if (rb) rb.onclick = function () {
      if (confirm('Reset ALL progress?\n\nThis clears every completed mark stored in this browser and cannot be undone.')) { resetAll(); route(); }
    };
  }

  function closeDrawer() { document.body.classList.remove('drawer-open'); }

  // ---- router ----
  function route() {
    var h = location.hash.replace(/^#/, '') || '/';
    var activeNum, html, mm;
    if (h === '/' || h === '') html = viewHome();
    else if (h === '/progress') html = viewProgress();
    else if ((mm = h.match(/^\/m\/(\d+)/))) { activeNum = mm[1]; html = viewModule(activeNum); }
    else html = viewHome();
    var view = document.getElementById('view');
    view.innerHTML = html;
    renderSidebar(activeNum);
    closeDrawer();
    wire();
    window.scrollTo(0, 0);
  }

  document.getElementById('menuBtn').onclick = function () { document.body.classList.toggle('drawer-open'); };
  document.getElementById('scrim').onclick = closeDrawer;
  window.addEventListener('hashchange', route);

  initTheme();
  route();
})();
