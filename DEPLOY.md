# Deploying the 8-bit site

Static: `index.html` + `style.css` + `data.js` + `chart.js` + `scenes.js` + `app.js` + `assets/`.
No build step, no dependencies, **no external requests** — the pixel font is self-hosted.

## Target

`GabPey/GabPey.github.io` — the repo **already exists** and **Pages is already enabled** on
`main` / root with HTTPS. It currently serves a **1-byte `README.md` from 2024-10-24**, rendered
through the default Jekyll theme: a blank page showing only the word "GabPey". So the repo and the
Pages settings are done; what remains is pushing files.

```sh
git clone https://github.com/GabPey/GabPey.github.io.git ~/dev/GabPey.github.io
cd ~/dev/GabPey.github.io
cp -r "~/vaults/AboutMe/70-Documents/Site-8bit/." .
git add -A && git commit -m "Publish the 8-bit site" && git push
```

`.nojekyll` is included, which stops GitHub running Jekyll over the files.

## What is where

| File | Contents |
|---|---|
| `data.js` | **every string on the page** — quest log, project write-ups, contact |
| `chart.js` | **generated** from `Bios/GitHub-Profile/constellation8.py`; do not hand-edit |
| `scenes.js` | the three canvas animations, **plus the waving avatar sprite** |
| `app.js` | renders the chart as live SVG, fills the quest log, hash router for panels |
| `cv.html` · `cv.css` · `cv.js` | the printable CV, `?lang=en` (2 pp) / `?lang=fr` (1 p) |
| `cv-data.js` | **every string on the CV**, EN + FR. Public; private details live in `../CV/cv-private.js` (never copy that) |
| `cv/*.pdf` | **generated** by `70-Documents/CV/build-cv.sh`; rebuild after editing `cv-data.js` |
| `assets/inter-*.woff2`, `sourceserif-*.woff2`, `photo.jpg` | CV fonts (OFL) and photo |
| `assets/PressStart2P.ttf` | the pixel font, SIL Open Font License, self-hosted |
| `assets/` | just the font now — the avatar is a **sprite drawn in `scenes.js`**, not an image |

### Keeping the chart in sync with the README
The star chart is the same graph as the profile README's. `chart.js` is exported from the Python
generator, so **edit `NODES`/`EDGES` in `constellation8.py`**, then re-run the export (see the record
note) rather than editing `chart.js`. Otherwise the site and the README will drift.

## Notes on how it is built

- **The pixel font is a real webfont here, not the hand-drawn bitmap.** A README image renders in an
  `<img>` and cannot load fonts, which is why `font5x7.py` exists. A web page can, so the site uses
  Press Start 2P: selectable, accessible, and it takes accents for free if French is added later.
- **Scenes render at native pixel resolution** (200x96) on a `<canvas>` that CSS scales up with
  `image-rendering: pixelated`. Nothing is ever smoothed; do not draw with `ctx.stroke()` on a
  diagonal, it antialiases and breaks the look.
- **Motion respects `prefers-reduced-motion`**: scenes draw one frame and stop.
- Panels are hash-routed (`#photosvi`, `#heart`, `#cove`), so they are linkable and the back button
  works. Escape and a click on the backdrop close them; focus returns to the star.
