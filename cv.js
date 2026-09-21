// Renders cv-data.js into A4 pages. ?lang=en|fr picks the version; ?private=1 merges
// ../CV/cv-private.js if it was loaded (local builds only).
(function () {
  var Q = new URLSearchParams(location.search);
  var lang = Q.get("lang") || ((navigator.language || "").slice(0, 2) === "fr" ? "fr" : "en");
  if (!window.CV[lang]) lang = "en";
  var S = window.CV.shared, L = window.CV[lang], P = window.CV_PRIVATE || null;

  document.documentElement.lang = L.htmlLang;
  document.documentElement.dataset.lang = lang;
  document.getElementById("to-" + lang).setAttribute("aria-current", "page");
  // Keep ?private=1 when switching language locally.
  if (P) ["en", "fr"].forEach(function (l) {
    document.getElementById("to-" + l).href = "?lang=" + l + "&private=1";
  });

  // Section colour = the site's four lanes (bayes, systems, neuro, learning).
  var LANE = { research: "bayes", education: "systems", work: "neuro", projects: "learning" };

  function h(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }

  function header() {
    var head = h("header", "head");
    var img = h("img", "photo");
    img.src = S.photo; img.alt = S.name;
    head.appendChild(img);
    var id = h("div", "id");
    id.appendChild(h("h1", "name", S.name));
    id.appendChild(h("p", "title", L.title));
    var row1 = ['<a href="mailto:' + S.email + '">' + S.email + "</a>",
                P ? P.phone : null, L.city, P ? P.dob[lang] : null];
    var row2 = ['<a href="https://' + S.site + '">' + S.site + "</a>",
                '<a href="https://github.com/' + S.github + '">github.com/' + S.github + "</a>"];
    [row1, row2].forEach(function (row) {
      id.appendChild(h("p", "contact", row.filter(Boolean).map(function (x) {
        return "<span>" + x + "</span>"; }).join("")));
    });
    head.appendChild(id);
    return head;
  }

  function entry(e) {
    var box = h("article", "entry");
    var top = h("div", "top");
    top.appendChild(h("h3", null, e.title));
    top.appendChild(h("span", "when", e.when));
    box.appendChild(top);
    var meta = h("div", "meta");
    meta.appendChild(h("span", "org", e.org));
    if (e.where) meta.appendChild(h("span", "where", e.where));
    box.appendChild(meta);
    var bullets = e.bullets.slice();
    if (P && e.id && P.metrics[e.id]) bullets.push(P.metrics[e.id][lang]);
    var ul = h("ul");
    bullets.forEach(function (b) { ul.appendChild(h("li", null, b)); });
    box.appendChild(ul);
    return box;
  }

  function mainSection(key) {
    var s = h("section", "sec lane-" + LANE[key]);
    s.appendChild(h("h2", null, L.labels[key]));
    L[key].forEach(function (e) { s.appendChild(entry(e)); });
    return s;
  }

  function sideSection(key) {
    var s = h("section", "sec side-sec");
    s.appendChild(h("h2", null, L.labels[key]));
    if (key === "links") {
      var dl = h("dl");
      dl.innerHTML =
        '<dt>Web</dt><dd><a href="https://' + S.site + '">' + S.site + "</a></dd>" +
        '<dt>GitHub</dt><dd><a href="https://github.com/' + S.github + '">@' + S.github + "</a></dd>" +
        '<dt>Email</dt><dd><a href="mailto:' + S.email + '">' + S.email + "</a></dd>";
      s.appendChild(dl);
      return s;
    }
    var dl = h("dl");
    L[key].forEach(function (pair) {
      dl.appendChild(h("dt", null, pair[0]));
      if (pair[1]) dl.appendChild(h("dd", null, pair[1]));
    });
    s.appendChild(dl);
    return s;
  }

  var root = document.getElementById("cv");
  var n = L.pages.length;
  L.pages.forEach(function (pg, i) {
    var page = h("div", "page");
    if (i === 0) {
      page.appendChild(header());
      page.appendChild(h("div", "lanes", "<i></i><i></i><i></i><i></i>"));
      page.appendChild(h("p", "profile", L.profile));
    } else {
      page.appendChild(h("div", "runhead",
        "<span>" + S.name + "</span><span>" + L.title + "</span>"));
    }
    var body = h("div", "body");
    var main = h("div", "main"), side = h("aside", "side");
    pg.main.forEach(function (k) { main.appendChild(mainSection(k)); });
    pg.side.forEach(function (k) { side.appendChild(sideSection(k)); });
    body.appendChild(main); body.appendChild(side);
    page.appendChild(body);
    if (n > 1) page.appendChild(h("div", "folio", L.labels.page + " " + (i + 1) + "/" + n));
    root.appendChild(page);
  });

  // Flag any page whose content no longer fits, so a build can't silently clip text.
  function check() {
    var bad = [];
    document.querySelectorAll(".page").forEach(function (p, i) {
      if (p.scrollHeight > p.clientHeight + 1) { p.classList.add("overflow"); bad.push(i + 1); }
    });
    document.documentElement.dataset.overflow = bad.length ? bad.join(",") : "none";
    if (bad.length) console.warn("CV overflow on page(s) " + bad.join(", "));
  }
  (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(check);
})();
