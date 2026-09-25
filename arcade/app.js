/* Renders the chart live as SVG (so the project stars can be clicked), fills the quest log,
   and runs the hash router for the three project panels. */
(function () {
  "use strict";
  var D = window.DATA, C = window.CHART, T = C.themes.dark, PX = 4;
  var $ = function (id) { return document.getElementById(id); };
  var svgNS = "http://www.w3.org/2000/svg";

  function el(name, attrs, parent) {
    var n = document.createElementNS(svgNS, name);
    for (var k in attrs) if (attrs.hasOwnProperty(k)) n.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(n);
    return n;
  }
  function snap(v) { return Math.round(v / PX) * PX; }

  /* ---------------- header + quest log ---------------- */
  function text() {
    $("name").textContent = D.me.name;
    $("title").textContent = D.me.title;
    $("hook").textContent = D.me.hook;
    $("blurb").textContent = D.me.blurb;
    $("contact").innerHTML =
      'GITHUB <a href="https://github.com/' + D.contact.github + '">@' + D.contact.github + '</a>' +
      ' &nbsp;·&nbsp; <a href="mailto:' + D.contact.email + '">' + D.contact.email + '</a>' +
      ' &nbsp;·&nbsp; CV <a href="../cv.html?lang=en">EN</a> / <a href="../cv.html?lang=fr">FR</a> / <a href="../cv.html?lang=es">ES</a>' +
      ' (PDF <a href="../cv/CV-Gabriel-Peytral-Borja-EN.pdf" download>EN</a>' +
      ' / <a href="../cv/CV-Gabriel-Peytral-Borja-FR.pdf" download>FR</a>' +
      ' / <a href="../cv/CV-Gabriel-Peytral-Borja-ES.pdf" download>ES</a>)';
  }

  function languages() {
    var dl = $("lang-list");
    D.languages.forEach(function (l) {
      var wrap = document.createElement("div"); wrap.className = "lang";
      var dt = document.createElement("dt");
      dt.innerHTML = '<span>' + l.name + '</span><span class="lv">' + l.level + '</span>';
      var dd = document.createElement("dd");
      dd.setAttribute("aria-label", l.level);
      var cells = 16, on = Math.round(l.pct / 100 * cells);
      for (var i = 0; i < cells; i++) {
        var c = document.createElement("span");
        c.className = "cell" + (i < on ? " on" : "");
        dd.appendChild(c);
      }
      wrap.appendChild(dt); wrap.appendChild(dd); dl.appendChild(wrap);
    });
  }

  function questCard(q, kind, tag) {
    var d = document.createElement(kind === "done" ? "li" : "div");
    d.className = "quest" + (kind === "current" ? " is-current" : kind === "next" ? " is-next" : "");
    d.innerHTML =
      '<span class="tag">' + tag + '</span>' +
      '<h4>' + q.name + '</h4>' +
      '<p class="meta">' + q.where + ' &nbsp;·&nbsp; ' + q.when + '</p>' +
      '<p class="loot">+ ' + q.loot + '</p>' +
      '<p class="note">' + q.note + '</p>';
    return d;
  }
  function quests() {
    $("quest-current").appendChild(questCard(D.quests.current, "current", "CURRENT QUEST"));
    $("quest-next").appendChild(questCard(D.quests.next, "next", "NEXT QUEST"));
    var ol = $("quest-done");
    D.quests.done.forEach(function (q) { ol.appendChild(questCard(q, "done", "CLEARED")); });
  }

  /* ---------------- the chart ---------------- */
  function lineCells(a, b) {
    var n = Math.max(Math.abs(b.x - a.x), Math.abs(b.y - a.y)) / PX, out = [], seen = {};
    for (var i = 0; i <= n; i++) {
      var t = i / Math.max(n, 1);
      var p = snap(a.x + (b.x - a.x) * t) + "," + snap(a.y + (b.y - a.y) * t);
      if (!seen[p]) { seen[p] = 1; out.push(p.split(",")); }
    }
    return out;
  }

  function chart() {
    var svg = el("svg", {
      id: "chart", viewBox: "0 0 " + C.size.w + " " + C.size.h,
      "shape-rendering": "crispEdges", role: "img",
      "aria-label": "A star chart of what I work on. Three bright stars are projects."
    });
    el("rect", { width: C.size.w, height: C.size.h, fill: T.paper }, svg);

    var field = el("g", { fill: "#cfc9f0" }, svg), i;
    for (i = 0; i < 150; i++) {                       // deterministic field
      var fx = snap((i * 7919) % C.size.w), fy = snap((i * 104729) % C.size.h);
      el("rect", { x: fx, y: fy, width: PX, height: PX, opacity: (0.15 + (i % 5) * 0.08).toFixed(2) }, field);
    }

    C.edges.forEach(function (e) {
      var a = C.nodes[e[0]], b = C.nodes[e[1]];
      var cl = a.cluster || b.cluster;
      var col = (a.project && b.project) ? T.star : (T.clusters[cl] || T.soft);
      var g = el("g", { fill: col, opacity: .78 }, svg);
      lineCells(a, b).forEach(function (c) {
        el("rect", { x: c[0], y: c[1], width: PX, height: PX }, g);
      });
    });

    C.clusters.forEach(function (c) {
      el("text", {
        x: c.x, y: c.y + 10, fill: T.clusters[c.cluster], "font-size": 12,
        "text-anchor": c.anchor === "end" ? "end" : "start", "letter-spacing": 1
      }, svg).textContent = c.label;
    });

    Object.keys(C.nodes).forEach(function (id) {
      var n = C.nodes[id];
      var col = n.project ? T.star : T.clusters[n.cluster];
      var host = svg;
      if (n.project) {
        host = el("g", { class: "star-hit", tabindex: 0, role: "link",
                         "aria-label": "Open " + n.label }, svg);
        host.addEventListener("click", function () { location.hash = id; });
        host.addEventListener("keydown", function (ev) {
          if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); location.hash = id; }
        });
        el("circle", { class: "halo", cx: n.x, cy: n.y, r: 34, fill: col, opacity: 0 }, host);
        el("rect", { x: n.x - 40, y: n.y - 40, width: 80, height: 80, fill: "transparent" }, host);
      }
      var cells = n.project
        ? [[0,-2],[-1,-1],[0,-1],[1,-1],[-2,0],[-1,0],[0,0],[1,0],[2,0],[-1,1],[0,1],[1,1],[0,2]]
        : [[0,-1],[-1,0],[0,0],[1,0],[0,1]];
      var g = el("g", { fill: col }, host);
      cells.forEach(function (c) {
        el("rect", { x: n.x + c[0] * PX, y: n.y + c[1] * PX, width: PX, height: PX }, g);
      });
      var t = el("text", {
        x: n.x, y: n.project ? n.y - 34 : n.y + 30, "text-anchor": "middle",
        fill: n.project ? T.ink : T.soft, "font-size": n.project ? 17 : 11
      }, host);
      t.textContent = n.label;
    });

    $("chart-wrap").appendChild(svg);
  }

  /* ---------------- panels ---------------- */
  var scene = null, lastFocus = null;
  function openPanel(key) {
    var p = D.projects[key];
    if (!p) return closePanel();
    $("panel-title").textContent = p.title;
    $("panel-kicker").textContent = p.kicker;
    $("panel-lede").textContent = p.lede;
    var body = $("panel-body"); body.innerHTML = "";
    p.body.forEach(function (para) {
      var el2 = document.createElement("p"); el2.textContent = para; body.appendChild(el2);
    });
    var st = $("panel-stack"); st.innerHTML = "";
    p.stack.forEach(function (s) {
      var li = document.createElement("li"); li.textContent = s; st.appendChild(li);
    });
    $("panel-note").textContent = p.note;

    lastFocus = document.activeElement;
    $("panel").hidden = false;
    document.body.style.overflow = "hidden";
    if (scene) scene.stop();
    scene = window.SCENES.make($("panel-canvas"), key);
    scene.start();
    $("panel-close").focus();
  }
  function closePanel() {
    if (scene) { scene.stop(); scene = null; }
    $("panel").hidden = true;
    document.body.style.overflow = "";
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  function route() {
    var key = location.hash.replace("#", "");
    if (D.projects[key]) openPanel(key); else closePanel();
  }

  /* ---------------- go ---------------- */
  text(); languages(); quests(); chart();
  window.SCENES.avatar($("avatar"), 6);
  $("panel-close").addEventListener("click", function () { location.hash = ""; });
  $("panel").addEventListener("click", function (e) { if (e.target === $("panel")) location.hash = ""; });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !$("panel").hidden) location.hash = "";
  });
  window.addEventListener("hashchange", route);
  route();
})();
