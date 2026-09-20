// Generated from Bios/GitHub-Profile/constellation8.py - do not hand-edit.
window.CHART = {
 "nodes": {
  "vi": {
   "x": 168,
   "y": 236,
   "label": "VARIATIONAL",
   "cluster": "bayes",
   "project": false
  },
  "ssm": {
   "x": 264,
   "y": 320,
   "label": "STATE-SPACE",
   "cluster": "bayes",
   "project": false
  },
  "pp": {
   "x": 128,
   "y": 360,
   "label": "PROBABILISTIC",
   "cluster": "bayes",
   "project": false
  },
  "neu": {
   "x": 836,
   "y": 216,
   "label": "NEUROSCIENCE",
   "cluster": "neuro",
   "project": false
  },
  "dl": {
   "x": 740,
   "y": 296,
   "label": "DEEP LEARNING",
   "cluster": "neuro",
   "project": false
  },
  "phys": {
   "x": 872,
   "y": 344,
   "label": "PHYSIOLOGY",
   "cluster": "neuro",
   "project": false
  },
  "arch": {
   "x": 252,
   "y": 444,
   "label": "ARCHITECTURE",
   "cluster": "systems",
   "project": false
  },
  "pat": {
   "x": 144,
   "y": 496,
   "label": "PATTERNS",
   "cluster": "systems",
   "project": false
  },
  "rep": {
   "x": 208,
   "y": 552,
   "label": "REPRODUCIBLE",
   "cluster": "systems",
   "project": false
  },
  "assoc": {
   "x": 788,
   "y": 444,
   "label": "ASSOCIATION",
   "cluster": "learning",
   "project": false
  },
  "org": {
   "x": 884,
   "y": 496,
   "label": "ORGANIZATION",
   "cluster": "learning",
   "project": false
  },
  "morph": {
   "x": 820,
   "y": 552,
   "label": "MORPHOLOGY",
   "cluster": "learning",
   "project": false
  },
  "photosvi": {
   "x": 500,
   "y": 224,
   "label": "PHOTOSVI",
   "cluster": null,
   "project": true
  },
  "heart": {
   "x": 500,
   "y": 356,
   "label": "THE HEART",
   "cluster": null,
   "project": true
  },
  "cove": {
   "x": 500,
   "y": 476,
   "label": "COVE",
   "cluster": null,
   "project": true
  }
 },
 "edges": [
  [
   "vi",
   "ssm"
  ],
  [
   "ssm",
   "pp"
  ],
  [
   "vi",
   "pp"
  ],
  [
   "neu",
   "dl"
  ],
  [
   "dl",
   "phys"
  ],
  [
   "neu",
   "phys"
  ],
  [
   "arch",
   "pat"
  ],
  [
   "pat",
   "rep"
  ],
  [
   "arch",
   "rep"
  ],
  [
   "assoc",
   "org"
  ],
  [
   "org",
   "morph"
  ],
  [
   "assoc",
   "morph"
  ],
  [
   "photosvi",
   "vi"
  ],
  [
   "photosvi",
   "ssm"
  ],
  [
   "photosvi",
   "dl"
  ],
  [
   "photosvi",
   "neu"
  ],
  [
   "heart",
   "ssm"
  ],
  [
   "heart",
   "phys"
  ],
  [
   "heart",
   "vi"
  ],
  [
   "cove",
   "arch"
  ],
  [
   "cove",
   "pat"
  ],
  [
   "cove",
   "assoc"
  ],
  [
   "cove",
   "org"
  ],
  [
   "cove",
   "morph"
  ],
  [
   "photosvi",
   "heart"
  ],
  [
   "heart",
   "cove"
  ]
 ],
 "clusters": [
  {
   "x": 112,
   "y": 188,
   "label": "BAYES",
   "cluster": "bayes",
   "anchor": "start"
  },
  {
   "x": 888,
   "y": 168,
   "label": "NEURO / LIFE",
   "cluster": "neuro",
   "anchor": "end"
  },
  {
   "x": 104,
   "y": 596,
   "label": "SYSTEMS",
   "cluster": "systems",
   "anchor": "start"
  },
  {
   "x": 896,
   "y": 596,
   "label": "LEARNING",
   "cluster": "learning",
   "anchor": "end"
  }
 ],
 "themes": {
  "dark": {
   "paper": "#06050f",
   "ink": "#f4f2ff",
   "soft": "#b9b2d8",
   "faint": "#6f6a90",
   "star": "#ffffff",
   "clusters": {
    "bayes": "#9b6dff",
    "neuro": "#ffaa44",
    "systems": "#5fa8ff",
    "learning": "#3fd6a0"
   }
  },
  "light": {
   "paper": "#f4f1e8",
   "ink": "#14130f",
   "soft": "#46443e",
   "faint": "#8a857c",
   "star": "#14130f",
   "clusters": {
    "bayes": "#5b34a8",
    "neuro": "#a3541a",
    "systems": "#2f5aa8",
    "learning": "#1f7a5e"
   }
  }
 },
 "size": {
  "w": 1000,
  "h": 620
 }
};
