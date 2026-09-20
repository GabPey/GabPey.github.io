/* Three pixel scenes. Each draws into a small canvas (native pixel resolution) that CSS
   scales up with image-rendering:pixelated, so nothing is ever smoothed. */
(function () {
  "use strict";

  var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function Scene(canvas, w, h, draw) {
    this.c = canvas; this.w = w; this.h = h; this.draw = draw;
    canvas.width = w; canvas.height = h;
    this.ctx = canvas.getContext("2d");
    this.ctx.imageSmoothingEnabled = false;
    this.t = 0; this.raf = null;
  }
  Scene.prototype.start = function () {
    if (this.raf) return;
    var self = this;
    var step = function () {
      self.t += 1;
      self.draw(self.ctx, self.t, self.w, self.h);
      self.raf = reduced ? null : requestAnimationFrame(step);
    };
    step();
  };
  Scene.prototype.stop = function () {
    if (this.raf) cancelAnimationFrame(this.raf);
    this.raf = null;
  };

  function px(ctx, x, y, w, h, col) { ctx.fillStyle = col; ctx.fillRect(x | 0, y | 0, w || 1, h || 1); }

  /* ---------- photosvi: a rat running a circle, a photometry trace above it ---------- */
  // 20x12 rat, side view, facing right. 1 fur, 2 shade, 3 pink (ear + tail), 4 eye, # outline
  var RAT = [
    "....................",
    "3..........####.....",
    ".3........#3333#....",
    "..3..#####111111#...",
    "...####111111111111.",
    "..#1111111111111141.",
    ".#11122222222111111#",
    ".#11222222222211111.",
    "..#1222222222111#...",
    "..#11111111111#.....",
    "...#1#...#1#........",
    "...##.....##........"
  ];
  var RATC = { "1": "#c9c4d6", "2": "#9a95ab", "3": "#d79ab0", "4": "#140f1a", "#": "#4a4557" };

  function ratSprite(ctx, x, y, flip, frame, S) {
    S = S || 2;
    for (var r = 0; r < RAT.length; r++) {
      for (var c = 0; c < RAT[r].length; c++) {
        var v = RAT[r][c];
        if (v === ".") continue;
        var yy = y + (r + (r >= 10 && ((c + frame) % 4 < 2) ? 1 : 0)) * S;
        var xx = x + (flip ? RAT[r].length - 1 - c : c) * S;
        px(ctx, xx, yy, S, S, RATC[v]);
      }
    }
  }

  var trace = null;
  function photosvi(ctx, t, w, h) {
    ctx.fillStyle = "#06050f"; ctx.fillRect(0, 0, w, h);
    var i;
    if (!trace) { trace = []; for (i = 0; i < w; i++) trace.push(0); }

    // a lap takes ~260 frames; a transient fires near the top of each lap, plus at random
    var ang = (t / 260) * Math.PI * 2;
    var lap = (t % 260) === 0;
    if (lap || Math.random() < 0.02) trace.push(1); else trace.push(0);
    trace.shift();

    // signal: slow pharmacokinetic drift + decaying transients
    var base = h * 0.30;
    var drift = Math.sin(t / 300) * 3 + Math.sin(t / 97) * 1.2;
    var y0 = base + drift, amp = 0, prev = null;
    for (i = 0; i < w; i++) {
      amp *= 0.90;
      if (trace[i]) amp = 16;
      var y = y0 + 4 - amp + (Math.random() - 0.5) * 2.4 + Math.sin(i / 7 + t / 40) * 0.9;
      px(ctx, i, y, 1, 1, amp > 1.2 ? "#ffaa44" : "#5fa8ff");
      if (prev !== null && Math.abs(y - prev) > 1) {
        for (var k = Math.min(y, prev); k < Math.max(y, prev); k++)
          px(ctx, i, k, 1, 1, amp > 1.2 ? "#ffaa44" : "#3f7ac0");
      }
      prev = y;
    }
    px(ctx, 0, base + 4, w, 1, "#1b2540");

    // the rat, running an ellipse on the floor
    var cx = w / 2, cy = h * 0.72, rx = w * 0.30, ry = h * 0.15;
    var rxp = cx + Math.cos(ang) * rx, ryp = cy + Math.sin(ang) * ry;
    for (var a = 0; a < 64; a++) {          // the track it runs
      var aa = (a / 64) * Math.PI * 2;
      px(ctx, cx + Math.cos(aa) * rx, cy + Math.sin(aa) * ry + 4, 1, 1, "#161328");
    }
    ratSprite(ctx, rxp - 20, ryp - 12, Math.sin(ang) < 0, (t / 5) | 0, 2);
    for (var f = base + 6; f < ryp - 10; f += 3) px(ctx, rxp | 0, f, 1, 2, "#2f7d63");
  }

  /* ---------- the heart: a microcontroller computing, an ECG coming out ---------- */
  var ecg = null;
  function beatAt(p) {                       // one PQRST cycle over p in [0,1)
    function g(mu, s, a) { return a * Math.exp(-((p - mu) * (p - mu)) / (2 * s * s)); }
    return g(.18, .022, -1.6) + g(.26, .012, 11) + g(.32, .018, -3.4) + g(.52, .055, 2.6) + g(.06, .03, 1.2);
  }
  function heart(ctx, t, w, h) {
    ctx.fillStyle = "#06050f"; ctx.fillRect(0, 0, w, h);
    var i, j;
    // pre-filled, so the strip is already running when the panel opens
    if (!ecg) { ecg = []; for (i = 0; i < w; i++) ecg.push(beatAt(((i * 2) % 56) / 56)); }

    // chip on the left
    var cx = 8, cy = h / 2 - 14, cw = 26, ch = 28;
    px(ctx, cx, cy, cw, ch, "#14131f");
    px(ctx, cx + 1, cy + 1, cw - 2, ch - 2, "#22203a");
    for (j = 0; j < 6; j++) {                // pins
      px(ctx, cx - 3, cy + 4 + j * 4, 3, 2, "#8e8a9c");
      px(ctx, cx + cw, cy + 4 + j * 4, 3, 2, "#8e8a9c");
    }
    px(ctx, cx + 4, cy + 4, 3, 3, ((t / 18) | 0) % 2 ? "#3fd6a0" : "#18402f");  // activity LED
    // "doing some math": glyph rows scrolling inside the chip
    for (j = 0; j < 5; j++) {
      var row = cy + 10 + j * 3, seed = ((t / 9) | 0) + j * 7;
      for (i = 0; i < 6; i++) {
        if ((seed * (i + 3) * 2654435761 % 7) < 3)
          px(ctx, cx + 5 + i * 3, row, 2, 2, "#9b6dff");
      }
    }
    // the model's output stepping out of the chip
    var phase = (t % 56) / 56;
    if (t % 2 === 0) { ecg.push(beatAt(phase)); ecg.shift(); }
    var mid = h * 0.60, prev = null;
    for (i = 0; i < w - (cx + cw + 6); i++) {
      var v = ecg[i + (cx + cw + 6)];
      var y = mid - v * 3.2 + (Math.random() - 0.5) * 0.7;
      var X = cx + cw + 6 + i;
      px(ctx, X, y, 1, 1, "#ff5d6c");
      if (prev !== null) for (var k = Math.min(y, prev); k < Math.max(y, prev); k++) px(ctx, X, k, 1, 1, "#ff5d6c");
      prev = y;
    }
    px(ctx, cx + cw + 6, mid + 12, w - cx - cw - 6, 1, "#2a1a24");
  }

  /* ---------- Cove: a constellation assembling, with a word for "thank you" ---------- */
  var WORDS = ["MERCI", "GRACIAS", "THANK YOU", "DANKE", "GRÀCIES"];
  var pts = null, wordIdx = 0;
  function makePts(w, h) {
    var p = [], n = 7;
    for (var i = 0; i < n; i++) {
      var a = (i / n) * Math.PI * 2 + 0.6;
      var r = (i % 2 ? 0.34 : 0.22);
      p.push({ x: w / 2 + Math.cos(a) * w * r, y: h / 2 + Math.sin(a) * h * r * 1.25 });
    }
    return p;
  }
  function cove(ctx, t, w, h) {
    ctx.fillStyle = "#06050f"; ctx.fillRect(0, 0, w, h);
    if (!pts) pts = makePts(w, h);
    var CYCLE = 400, u = t % CYCLE, STEP = 16;
    if (u === 0) { pts = makePts(w, h); wordIdx = (wordIdx + 1) % WORDS.length; }

    for (var i = 0; i < 46; i++) {           // field: hashed, so it scatters instead of streaking
      var s1 = Math.sin(i * 127.1) * 43758.5453, s2 = Math.sin(i * 311.7) * 24634.6345;
      var fx = Math.floor((s1 - Math.floor(s1)) * w), fy = Math.floor((s2 - Math.floor(s2)) * h);
      px(ctx, fx, fy, 1, 1, ((t / 30 + i) | 0) % 7 ? "#1d1a3a" : "#494476");
    }
    var shown = Math.min(pts.length, Math.floor(u / STEP));
    for (var k = 1; k < shown; k++) {        // edges draw in, pixel by pixel
      var a = pts[k - 1], b = pts[k];
      var grow = Math.min(1, (u - k * STEP) / 12);
      var ex = a.x + (b.x - a.x) * grow, ey = a.y + (b.y - a.y) * grow;
      var steps = Math.max(Math.abs(ex - a.x), Math.abs(ey - a.y));
      for (var q = 0; q <= steps; q++) {
        var f = q / Math.max(steps, 1);
        px(ctx, a.x + (ex - a.x) * f, a.y + (ey - a.y) * f, 1, 1, "#7e58d8");
      }
    }
    for (var m = 0; m < shown; m++) {
      var s = pts[m], pop = Math.min(1, (u - m * STEP) / 8);
      var r = 1 + Math.round(pop * 1.5);
      px(ctx, s.x - r, s.y, r * 2 + 1, 1, "#ffffff");
      px(ctx, s.x, s.y - r, 1, r * 2 + 1, "#ffffff");
    }
    if (u > pts.length * STEP) {               // the word the constellation spells
      var word = WORDS[wordIdx], fade = Math.min(1, (u - pts.length * STEP) / 24);
      ctx.globalAlpha = fade * (u > CYCLE - 60 ? Math.max(0, (CYCLE - u) / 60) : 1);
      ctx.fillStyle = "#3fd6a0";
      ctx.font = "10px 'Press Start 2P', monospace";
      ctx.textAlign = "center";
      ctx.fillText(word, w / 2, h - 8);
      ctx.globalAlpha = 1;
    }
  }

  window.SCENES = {
    make: function (canvas, kind) {
      if (kind === "photosvi") return new Scene(canvas, 200, 96, photosvi);
      if (kind === "heart") return new Scene(canvas, 200, 96, heart);
      return new Scene(canvas, 200, 96, cove);
    }
  };
})();
