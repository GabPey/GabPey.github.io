// All copy lives here. Facts come from the AboutMe vault source notes (and the public cv-data.js);
// nothing is invented here. The 8-bit version keeps its own copy in arcade/data.js.
window.DATA = {
  me: {
    name: "Gabriel Peytral Borja",
    role: "M2 Applied Mathematics & Statistics",
    org: "Aix-Marseille Université",
    track: "Computational & Mathematical Biology",
    city: "Marseille, France",
    photo: "assets/avatar.jpg",
    tagline: "Computational and mathematical biology"
  },

  about: [
    "I am a Master's student in Applied Mathematics and Statistics at <b>Aix-Marseille Université</b>, " +
      "in the Computational &amp; Mathematical Biology track, on a TIGER excellence scholarship. " +
      "I like working with computational and mathematical models of things that are alive and noisy: " +
      "hearts, neurons, and lately the way a person learns a language.",
    "Most recently I was a research intern at the <b>Abante Lab</b> (Universitat de Barcelona), building " +
      "generative models of fiber-photometry recordings for drug-response profiling. Before that, my " +
      "bachelor's thesis at <b>UNAM</b>, funded by CONACYT, modelled the electrical activity of the heart " +
      "with a fuzzy system fast enough to run on a microcontroller."
  ],

  seeking: {
    label: "Open to",
    text: "A six-month research internship from <b>February 2027</b>: statistical modelling or machine " +
          "learning for health, in a lab or in industry, as a step towards a PhD."
  },

  research: [
    { id: "photosvi",
      title: "photosvi: dopamine transients in fiber photometry",
      kicker: "Abante Lab, Universitat de Barcelona · 2026",
      lede: "Finding the dopamine transients in a photometry trace, and measuring what a drug did to them.",
      body: [
        "A photometry trace carries two signals a threshold cannot separate. The drug's pharmacokinetics move the baseline over minutes; individual transients ride on top of it over hundreds of milliseconds. A detector has to decide where the baseline is before it can find anything above it, and that is the same decision that determines how many transients there are.",
        "photosvi writes both into one generative model and estimates them together. The quantity an experiment actually asks about, the factor by which a drug changes the transient rate, becomes a parameter of the model rather than something counted afterwards from a list of detections."
      ],
      caption: "A rat runs its circuit, tethered by the fiber; each lap fires transients on the trace above.",
      stack: ["Python", "Pyro", "Variational inference"],
      note: "Paper in preparation. The repository belongs to the lab and is private." },
    { id: "heart",
      title: "A fuzzy model of the heart",
      kicker: "Bachelor's thesis, UNAM · 2024–2025 · funded by CONACYT",
      lede: "Teaching a microcontroller to produce a heartbeat.",
      body: [
        "A discrete fuzzy Takagi–Sugeno model of the electrical activity of the heart, generating an ECG live from the model rather than replaying a recording.",
        "The whole point was cheapness: something that runs on a chip you can hold and still keeps up with a real rhythm. It came out several times faster than the approach it replaced, with the timing errors down in the milliseconds."
      ],
      caption: "The microcontroller computes; a PQRST complex steps out of it at about 64 bpm.",
      stack: ["Fuzzy systems", "Numerical methods", "Embedded"],
      note: "Defended March 2025.",
      link: { href: "https://ru.dgb.unam.mx/items/e20a496f-fc7a-4754-83cc-6650eeedba44",
              label: "Read the thesis (UNAM repository, in Spanish)" } },
    { id: "cove",
      title: "Cove: a concept map for learning languages",
      kicker: "Side project · 2026–",
      lede: "A map of concepts you build yourself, rendered as a star chart you can fly around.",
      body: [
        "Every language app I have tried hands you a lesson tree and a streak counter. Cove does the opposite: you build your own map of concepts, carrying all the languages you speak at once, and the software's job is to ask good questions and remember the answers.",
        "Three parts talk to each other: a concept graph you construct, a rule-based grammatical spine, and a generator that puts you in situations calibrated to what your graph currently holds. I am building it because I am learning German, and nothing out there worked the way I wanted to learn."
      ],
      caption: "A constellation assembles and spells thank you in five languages.",
      stack: ["Flutter", "Dart", "SQLite", "spaCy"],
      note: "Private while it is still becoming itself." }
  ],

  // Reverse chronological. Mirrors cv-data.js (EN).
  timeline: [
    { when: "2026", kind: "Research", title: "Research Intern, Abante Lab",
      org: "Universitat de Barcelona · Barcelona, Spain", dates: "05/2026 – 07/2026",
      text: "Generative models of fiber-photometry signals (photosvi); the selected inference variant became the lab's baseline." },
    { when: "2025", kind: "Education", title: "MSc Applied Mathematics & Statistics",
      org: "Aix-Marseille Université · Marseille, France", dates: "09/2025 – present",
      text: "Computational & Mathematical Biology track. TIGER master's excellence scholarship." },
    { when: "2025", kind: "Industry", title: "Junior Software Developer",
      org: "Intellect Design Arena · Mexico City, Mexico", dates: "03/2025 – 07/2025",
      text: "Functional and technical user stories and Spring Boot utilities for enterprise banking applications." },
    { when: "2024", kind: "Research", title: "Bachelor's thesis: fuzzy model of cardiac electrical activity",
      org: "UNAM, Artificial Intelligence Department · Querétaro, Mexico", dates: "09/2024 – 03/2025",
      text: "Discrete Takagi–Sugeno model generating the ECG live; ~400% faster, errors in the millisecond range. Funded by CONACYT.",
      link: { href: "https://ru.dgb.unam.mx/items/e20a496f-fc7a-4754-83cc-6650eeedba44", label: "Thesis (PDF, ES)" } },
    { when: "2024", kind: "Education", title: "Erasmus exchange",
      org: "University of Groningen · Groningen, Netherlands", dates: "02/2024 – 07/2024",
      text: "Numerical mathematics, neural networks, operating systems; a CNN reconstructing Gaussian-blurred image regions. Full UNAM mobility scholarship." },
    { when: "2023", kind: "Research", title: "Research stay, Institute of Mathematics (IMATE)",
      org: "UNAM · Juriquilla, Querétaro, Mexico", dates: "01/2023 – 05/2023",
      text: "Mathematical modelling of active-matter systems, applied to bacterial aggregation into biofilms." },
    { when: "2022", kind: "Research", title: "Research stay, Nanobiophotonics Laboratory",
      org: "CFATA, UNAM · Querétaro, Mexico", dates: "01/2022 – 05/2022",
      text: "Wet-lab work on a COVID-19 aptamer biosensor, then dendritic-cell culture and activation under shockwaves." },
    { when: "2020", kind: "Education", title: "Bachelor's Degree in Technology",
      org: "UNAM · Querétaro, Mexico", dates: "09/2020 – 03/2025",
      text: "Graduated with honours, GPA 9.34/10, top ~5% of the cohort. Interdisciplinary, research-driven programme." }
  ],

  // From 10-Profile/Interests.md (his own words, 2026-09-25, public).
  outside: [
    { icon: "ball", title: "Football",
      text: "Always down for a match. I played a lot growing up and I am working my way back into it." },
    { icon: "peak", title: "Outdoors",
      text: "I enjoy being outside: hikes, swimming." },
    { icon: "globe", title: "Travel & languages",
      text: "I love travelling and discovering cultures and languages through the people who live them. It keeps broadening how I see the world." },
    { icon: "maracas", title: "Music, dance & culture",
      text: "Music, dance and culture matter to me. I am always looking to polish my salsa and other Latin American rhythms." }
  ],

  // As published on the older site build (Site/data.js) - his own figures.
  languages: [
    { name: "Spanish", level: "Native", pct: 100 },
    { name: "English", level: "C1", pct: 85 },
    { name: "French",  level: "C1", pct: 85 },
    { name: "German",  level: "A2", pct: 30 }
  ],

  contact: { github: "GabPey", email: "gpeytralborja@gmail.com" },

  cv: [
    { lang: "en", label: "English" },
    { lang: "fr", label: "Français" },
    { lang: "es", label: "Español" }
  ]
};
