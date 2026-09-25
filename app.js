/* Fills the page from data.js, runs each project's pixel scene only while it is on screen
   (the star chart lives on in arcade/ only), and handles the
   light/dark switch (light unless the visitor chose dark). */
(function () {
  "use strict";
  var D = window.DATA;
  var $ = function (id) { return document.getElementById(id); };

  function h(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }

  /* ---------------- profile card ---------------- */
  function card() {
    var m = D.me, c = D.contact;
    $("photo").src = m.photo;
    $("name").textContent = m.name;
    $("role").innerHTML = m.role + '<span class="org">' + m.org + '</span><span class="org">' + m.track + '</span>';
    $("city").textContent = m.city;
    $("email").href = "mailto:" + c.email; $("email").textContent = c.email;
    $("github").href = "https://github.com/" + c.github; $("github").textContent = "github.com/" + c.github;

    var ul = $("cv-list");
    D.cv.forEach(function (v) {
      var li = h("li");
      li.innerHTML = '<a href="cv.html?lang=' + v.lang + '">' + v.label + '</a>' +
        '<span class="pdf"><a href="cv/CV-Gabriel-Peytral-Borja-' + v.lang.toUpperCase() +
        '.pdf" download>PDF</a></span>';
      ul.appendChild(li);
    });

    var dl = $("lang-list");
    D.languages.forEach(function (l) {
      var wrap = h("div", "lang");
      var dt = h("dt", null, '<span>' + l.name + '</span><span class="lv">' + l.level + '</span>');
      var dd = h("dd"); dd.setAttribute("aria-label", l.level);
      var cells = 16, on = Math.round(l.pct / 100 * cells);
      for (var i = 0; i < cells; i++) dd.appendChild(h("span", "cell" + (i < on ? " on" : "")));
      wrap.appendChild(dt); wrap.appendChild(dd); dl.appendChild(wrap);
    });
  }

  /* ---------------- about ---------------- */
  function about() {
    $("about-h").textContent = D.me.tagline;
    D.about.forEach(function (p) { $("about-body").appendChild(h("p", null, p)); });
    $("seeking").innerHTML = '<p class="label">' + D.seeking.label + '</p><p>' + D.seeking.text + '</p>';
  }

  function outLink(l, cls) {
    var a = h("a", cls); a.href = l.href; a.textContent = l.label;
    a.target = "_blank"; a.rel = "noopener";
    return a;
  }

  /* ---------------- research (each with its running scene) ---------------- */
  var scenes = [];
  function research() {
    var list = $("research-list");
    D.research.forEach(function (p) {
      var art = h("article", "project"); art.id = p.id;
      var text = h("div");
      text.appendChild(h("h3", null, p.title));
      text.appendChild(h("p", "kicker", p.kicker));
      text.appendChild(h("p", "lede", p.lede));
      p.body.forEach(function (para) { text.appendChild(h("p", null, para)); });
      var chips = h("ul", "chips");
      p.stack.forEach(function (s) { chips.appendChild(h("li", null, s)); });
      text.appendChild(chips);
      text.appendChild(h("p", "note", p.note));
      if (p.link) text.appendChild(outLink(p.link, "doc-link"));

      var fig = h("figure", "screen");
      var cv = document.createElement("canvas");
      cv.setAttribute("role", "img"); cv.setAttribute("aria-label", p.caption);
      fig.appendChild(cv);
      fig.appendChild(h("figcaption", null, p.caption));

      art.appendChild(text); art.appendChild(fig); list.appendChild(art);
      scenes.push({ canvas: cv, scene: window.SCENES.make(cv, p.id) });
    });

    // Draw every scene once, then animate only the ones in view.
    scenes.forEach(function (s) { s.scene.start(); s.scene.stop(); });
    if (!("IntersectionObserver" in window)) { scenes.forEach(function (s) { s.scene.start(); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        var s = scenes.filter(function (x) { return x.canvas === e.target; })[0];
        if (e.isIntersecting) s.scene.start(); else s.scene.stop();
      });
    }, { threshold: 0.15 });
    scenes.forEach(function (s) { io.observe(s.canvas); });
  }

  function jump(id) {
    var t = $(id);
    if (t) { t.scrollIntoView(); history.replaceState(null, "", "#" + id); }
  }

  /* ---------------- timeline ---------------- */
  function timeline() {
    var ol = $("timeline");
    D.timeline.forEach(function (t) {
      var li = h("li");
      li.appendChild(h("span", "yr", t.when));
      var it = h("div", "item k-" + t.kind.toLowerCase());
      it.appendChild(h("h3", null, t.title));
      it.appendChild(h("p", "meta", '<span class="kind">' + t.kind + '</span> · ' + t.org + ' · ' + t.dates));
      var tp = h("p", null, t.text);
      if (t.link) { tp.appendChild(document.createTextNode(" ")); tp.appendChild(outLink(t.link, "tl-link")); }
      it.appendChild(tp);
      li.appendChild(it); ol.appendChild(li);
    });
  }

  /* ---------------- outside the lab ---------------- */
  function outside() {
    var ul = $("outside-list");
    D.outside.forEach(function (o) {
      var li = h("li", "out out-" + o.icon);
      li.innerHTML = '<span class="pix" aria-hidden="true"></span><div><h3></h3><p></p></div>';
      li.querySelector("h3").textContent = o.title;
      li.querySelector("p").textContent = o.text;
      ul.appendChild(li);
    });
  }

  /* ---------------- light / dark ---------------- */
  function theme() {
    var root = document.documentElement, btn = $("theme");
    function label() {
      var dark = root.getAttribute("data-theme") === "dark";
      btn.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
      btn.title = btn.getAttribute("aria-label");
    }
    btn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
      label();
      // repaint every scene once in the new palette (matters for the ones not animating)
      scenes.forEach(function (s) { var x = s.scene; x.draw(x.ctx, x.t, x.w, x.h); });
    });
    label();
  }

  /* ---------------- go ---------------- */
  card(); about(); research(); timeline(); outside(); theme();
  window.SCENES.avatar($("sprite"), 2);
  // Old panel links (#photosvi, #heart, #cove) now land on the write-ups.
  if (location.hash && $(location.hash.slice(1))) setTimeout(function () { jump(location.hash.slice(1)); }, 0);
})();
