// All copy lives here. Facts come from the AboutMe vault source notes; nothing is invented here.
window.DATA = {
  me: {
    name: "GABRIEL PEYTRAL BORJA",
    title: "COMPUTATIONAL AND MATHEMATICAL BIOLOGIST",
    hook: "(I LIKE COMPUTERS, MATH AND LIFE SCIENCES)",
    blurb: "I build probabilistic models of things that are alive and noisy — hearts, neurons, " +
           "and lately the way a person learns a language."
  },

  quests: {
    done: [
      { name: "BSC TECHNOLOGY", where: "UNAM, Mexico", when: "2020-2025",
        loot: "Graduated with honours, 9.34/10, top ~5%",
        note: "An interdisciplinary programme built around research training. I aimed my electives at computer science and mathematics." },
      { name: "ERASMUS EXCHANGE", where: "University of Groningen", when: "Feb-Jul 2024",
        loot: "Full UNAM excellence scholarship",
        note: "Numerical mathematics, neural networks, operating systems — and a team project reconstructing Gaussian-blurred image regions with a CNN." },
      { name: "THE HEART", where: "UNAM, AI Department", when: "2024-2025",
        loot: "Funded by CONACYT",
        note: "The bachelor's thesis. A fuzzy model of cardiac electrical activity, fast enough to run live on a microcontroller." },
      { name: "ENTERPRISE BANKING", where: "Intellect Design Arena", when: "Mar-Jul 2025",
        loot: "Spring Boot, and a taste of industry",
        note: "Functional and technical user stories, and utilities for enterprise banking applications. It taught me what I do and do not want from software work." },
      { name: "FIBER PHOTOMETRY", where: "Abante Lab, Universitat de Barcelona", when: "May-Jul 2026",
        loot: "photosvi — paper in preparation",
        note: "Generative models of neural recordings for drug-response profiling, under Jordi Abante." }
    ],
    current: {
      name: "M2 APPLIED MATHEMATICS & STATISTICS",
      where: "Aix-Marseille Université", when: "2025 -",
      loot: "TIGER excellence scholarship",
      note: "Computational and Mathematical Biology track. The year that decides what the doctorate is about."
    },
    next: {
      name: "SIX-MONTH RESEARCH INTERNSHIP",
      where: "open — France, or anywhere good", when: "Feb 2027",
      loot: "the step before a PhD",
      note: "Statistical modelling or machine learning for health, in a lab or in industry. If that sounds like your group, the contact is at the bottom."
    }
  },

  projects: {
    photosvi: {
      title: "PHOTOSVI",
      kicker: "Abante Lab, Universitat de Barcelona · 2026",
      lede: "Finding the dopamine transients in a photometry trace, and measuring what a drug did to them.",
      body: [
        "A photometry trace carries two signals a threshold cannot separate. The drug's pharmacokinetics move the baseline over minutes; individual transients ride on top of it over hundreds of milliseconds. A detector has to decide where the baseline is before it can find anything above it — and that is the same decision that determines how many transients there are.",
        "photosvi writes both into one generative model and estimates them together. The quantity an experiment actually asks about — the factor by which a drug changes the transient rate — becomes a parameter of the model, not something counted afterwards from a list of detections."
      ],
      stack: ["PYTHON", "PYRO", "VARIATIONAL INFERENCE"],
      note: "Paper in preparation. The repository is the lab's, and private."
    },
    heart: {
      title: "THE HEART",
      kicker: "Bachelor's thesis, UNAM · 2024-2025 · funded by CONACYT",
      lede: "Teaching a microcontroller to produce a heartbeat.",
      body: [
        "A discrete fuzzy Takagi-Sugeno model of the electrical activity of the heart, generating an ECG live from the model rather than replaying a recording.",
        "The whole point was cheapness: something that runs on a chip you can hold and still keeps up with a real rhythm. It came out several times faster than the approach it replaced, with the timing errors down in the milliseconds."
      ],
      stack: ["FUZZY SYSTEMS", "NUMERICAL METHODS", "EMBEDDED"],
      note: "Defended March 2025."
    },
    cove: {
      title: "COVE",
      kicker: "Side project · 2026 -",
      lede: "A map of concepts you build yourself, rendered as a star chart you can fly around.",
      body: [
        "Every language app I have tried hands you a lesson tree and a streak counter. Cove does the opposite: you build your own map of concepts, carrying all the languages you speak at once, and the software's job is to ask good questions and remember the answers. You are the linguist; it is the scaffolding.",
        "Three parts talk to each other: a concept graph you construct, a rule-based grammatical spine, and a generator that puts you in situations calibrated to what your graph currently holds. I am building it because I am learning German, and nothing out there worked the way I wanted to learn."
      ],
      stack: ["FLUTTER", "DART", "SQLITE", "SPACY"],
      note: "Private while it is still becoming itself."
    }
  },

  contact: { github: "GabPey", email: "gpeytralborja@gmail.com" }
};
