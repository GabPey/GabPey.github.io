// The printable CV, in two languages. Facts come from the AboutMe vault source notes
// (see 70-Documents/CV/CV — Research Internship — EN.md); nothing is invented here.
//
// This file is PUBLIC: it ships with the site. Phone, date of birth and the unpublished
// Abante benchmark numbers live in 70-Documents/CV/cv-private.js, which is never deployed.
// Inline <b>/<i> are allowed in strings.
window.CV = {
  shared: {
    name: "Gabriel Peytral Borja",
    email: "gpeytralborja@gmail.com",
    github: "GabPey",
    site: "gabpey.github.io",
    photo: "assets/photo.jpg"
  },

  // ------------------------------------------------------------------ ENGLISH (2 pages)
  en: {
    htmlLang: "en",
    title: "M2 Applied Mathematics & Statistics · Computational and Mathematical Biology",
    city: "Marseille, France",
    profile:
      "Master's student in Applied Mathematics and Statistics (Computational &amp; Mathematical " +
      "Biology track) at Aix-Marseille Université. I work on probabilistic and state-space models of " +
      "physiological signals: cardiac electrical activity in my bachelor's thesis, and neural " +
      "fiber-photometry recordings at the Abante Lab in Barcelona. At ease across mathematics, " +
      "statistics, scientific computing and the life sciences. Seeking a six-month end-of-studies " +
      "research internship in statistical modelling and machine learning for health, from " +
      "February 2027, as a step towards doctoral research.",
    labels: {
      research: "Research experience", education: "Education", work: "Professional experience",
      projects: "Selected projects", skills: "Computing", methods: "Methods",
      languages: "Languages", links: "Online", page: "Page"
    },
    pages: [
      { main: ["research", "education"], side: ["methods", "skills"] },
      { main: ["work", "projects"], side: ["languages", "links"] }
    ],
    research: [
      { id: "abante",
        title: "Research Intern — Abante Lab",
        org: "Universitat de Barcelona · PI: Jordi Abante (UBNeuro / IDIBAPS)",
        when: "05/2026 – 07/2026", where: "Barcelona, Spain",
        bullets: [
          "Developed <b>photosvi</b>, a composable Python package of generative models for " +
            "<b>fiber-photometry signals</b>, used for drug-response profiling of neural recordings; " +
            "refactored one-off research scripts into a single config-driven architecture.",
          "Implemented <b>variational inference</b> (Pyro, SVI) with <b>log-space forward–backward " +
            "and Viterbi decoders</b>, validated against brute-force oracles.",
          "Built the <b>benchmark</b> comparing five inference variants for <b>phasic-event detection " +
            "and drug-effect recovery</b> against simulated ground truth; the selected variant " +
            "became the lab's baseline.",
          "Results feed a <b>manuscript in preparation</b>."
        ] },
      { id: "thesis",
        title: "Bachelor's Thesis — Discrete Fuzzy Takagi–Sugeno Model of Cardiac Electrical Activity",
        org: "UNAM, Artificial Intelligence Department · funded by CONACYT",
        when: "09/2024 – 03/2025", where: "Querétaro, Mexico",
        bullets: [
          "Designed and implemented a discrete-time <b>Takagi–Sugeno fuzzy model</b> reproducing the " +
            "electrical activity of the heart, generating the ECG live from the model.",
          "Achieved a <b>~400% speed-up</b> in generating cardiac rhythms, with approximation errors " +
            "in the <b>millisecond range or below</b>, fast enough to run on a microcontroller."
        ] }
    ],
    education: [
      { title: "MSc Applied Mathematics, Statistics",
        org: "Aix-Marseille Université · track: Computational &amp; Mathematical Biology (CMB)",
        when: "09/2025 – present", where: "Marseille, France",
        bullets: ["<b>TIGER</b> master's excellence scholarship."] },
      { title: "Bachelor's Degree in Technology (Licenciatura en Tecnología)",
        org: "National Autonomous University of Mexico (UNAM)",
        when: "09/2020 – 03/2025", where: "Querétaro, Mexico",
        bullets: [
          "<b>GPA 9.34/10, graduated with honours, top ~5% of the cohort.</b>",
          "Interdisciplinary programme structured around research training; electives focused on " +
            "computer science and mathematics."
        ] },
      { title: "Erasmus exchange",
        org: "University of Groningen · full UNAM excellence mobility scholarship",
        when: "02/2024 – 07/2024", where: "Groningen, Netherlands",
        bullets: [
          "Courses: Numerical Mathematics · Neural Networks · Operating Systems.",
          "Team project: <b>CNN reconstruction</b> of Gaussian-blurred image regions (OpenImages)."
        ] }
    ],
    work: [
      { title: "Junior Software Developer",
        org: "Intellect Design Arena Ltd",
        when: "03/2025 – 07/2025", where: "Mexico City, Mexico",
        bullets: [
          "Wrote functional and technical <b>user stories</b> and developed <b>Spring Boot</b> " +
            "utilities for enterprise banking applications."
        ] }
    ],
    projects: [
      { title: "Heat-transfer simulation &amp; wildfire propagation",
        org: "UNAM · team project, later with Dr. Solís",
        when: "2022 – 2023", where: "Querétaro, Mexico",
        bullets: [
          "Numerical solution of the <b>heat-transfer PDE</b> from a photograph plus a material " +
            "specification (OpenCV), extended to <b>wildfire spread over 3D terrain</b> with " +
            "<b>simulated annealing</b>. <b>Best project of the year</b>; led to an invitation to " +
            "collaborate with SEMARNAT."
        ] },
      { title: "CNN–LSTM ground-humidity forecasting",
        org: "UNAM", when: "2024", where: "Querétaro, Mexico",
        bullets: [
          "<b>CNN–LSTM</b> architecture for long-horizon humidity prediction on large global gridded " +
            "datasets (Python, TensorFlow)."
        ] },
      { title: "Real-time parallel Sobel edge detection",
        org: "UNAM · image processing &amp; parallel computing electives",
        when: "2023", where: "Querétaro, Mexico",
        bullets: [
          "Filters, noise reduction and segmentation from scratch, culminating in a <b>real-time " +
            "parallel Sobel detector</b> (C++, OpenMP, CUDA)."
        ] },
      { title: "Air pollution &amp; COVID-19 spread",
        org: "UNAM · with a peer", when: "2021", where: "Mexico City, Mexico",
        bullets: [
          "Statistical model relating particulate-matter pollution to COVID-19 propagation; " +
            "explained <b>~8% of contagions</b> in the target region."
        ] },
      { title: "Cove — a concept-graph language-learning app",
        org: "Side project, in development", when: "2026 –", where: "",
        bullets: [
          "A learner-built graph of concepts across several languages, a rule-based grammatical " +
            "core, and a generator calibrated to what the graph holds (Flutter, Dart, SQLite, spaCy)."
        ] }
    ],
    methods: [
      ["Bayesian &amp; variational inference", "SVI, ELBO"],
      ["State-space models", "HMMs, Deep Markov Models; forward–backward, Viterbi"],
      ["Statistical modelling of physiological signals", ""],
      ["Numerical methods &amp; scientific computing", ""],
      ["Machine learning, neural networks", ""]
    ],
    skills: [
      ["Python", "Pyro, PyTorch, NumPy/SciPy: probabilistic modelling &amp; deep learning"],
      ["R", "Statistical analysis"],
      ["C++, CUDA, OpenMP", "Parallel and GPU programming"],
      ["Java, Spring Boot", "OOP, enterprise applications"],
      ["Linux/Unix, Bash, Git", "Remote servers, reproducible workflows"]
    ],
    languages: [
      ["Spanish", "Native"],
      ["English", "C1 · Cambridge C1, TOEFL iBT 105"],
      ["French", "C1 · TCF"],
      ["German", "A2"]
    ]
  },

  // ------------------------------------------------------------------ FRANÇAIS (1 page)
  fr: {
    htmlLang: "fr",
    title: "M2 Mathématiques appliquées et statistique · Biologie computationnelle et mathématique",
    city: "Marseille, France",
    profile:
      "Étudiant en M2 de mathématiques appliquées et statistique (parcours Computational &amp; " +
      "Mathematical Biology) à Aix-Marseille Université. Je travaille sur des modèles probabilistes " +
      "et à espace d'états de signaux physiologiques : l'activité électrique cardiaque dans mon " +
      "mémoire de licence, des enregistrements neuronaux de photométrie par fibre optique au Abante " +
      "Lab (Barcelone). Je recherche un stage de fin d'études de six mois, à partir de février 2027, " +
      "en modélisation statistique et apprentissage automatique pour la santé, en vue d'une thèse.",
    labels: {
      research: "Expérience de recherche", education: "Formation",
      work: "Expérience professionnelle", skills: "Informatique", methods: "Méthodes",
      languages: "Langues", links: "En ligne", page: "Page"
    },
    pages: [
      { main: ["research", "education", "work"], side: ["methods", "skills", "languages"] }
    ],
    research: [
      { id: "abante",
        title: "Stage de recherche — Abante Lab",
        org: "Universitat de Barcelona · resp. Jordi Abante (UBNeuro / IDIBAPS)",
        when: "05/2026 – 07/2026", where: "Barcelone, Espagne",
        bullets: [
          "Développement de <b>photosvi</b>, un package Python de modèles génératifs pour les " +
            "<b>signaux de photométrie par fibre optique</b>, appliqué au profilage de la réponse " +
            "aux médicaments.",
          "<b>Inférence variationnelle</b> (Pyro, SVI) avec décodeurs <b>forward–backward et Viterbi</b> " +
            "en espace logarithmique, validés par des oracles exhaustifs.",
          "Conception du <b>benchmark</b> de cinq variantes d'inférence (détection d'événements " +
            "phasiques, estimation de l'effet médicamenteux) ; la variante retenue est devenue la " +
            "référence du laboratoire. <b>Article en préparation.</b>"
        ] },
      { id: "thesis",
        title: "Mémoire de licence — Modèle flou discret de Takagi–Sugeno de l'activité électrique cardiaque",
        org: "UNAM, département d'intelligence artificielle · financé par le CONACYT",
        when: "09/2024 – 03/2025", where: "Querétaro, Mexique",
        bullets: [
          "Modèle flou de <b>Takagi–Sugeno</b> en temps discret reproduisant l'activité électrique du " +
            "cœur : génération des rythmes <b>~400 % plus rapide</b>, erreurs de l'ordre de la " +
            "milliseconde ou moins, exécutable sur microcontrôleur."
        ] }
    ],
    education: [
      { title: "Master Mathématiques appliquées, statistique",
        org: "Aix-Marseille Université · parcours Computational &amp; Mathematical Biology (CMB)",
        when: "09/2025 – aujourd'hui", where: "Marseille, France",
        bullets: ["Lauréat de la bourse d'excellence <b>TIGER</b>."] },
      { title: "Licence en Technologie (Licenciatura en Tecnología)",
        org: "Université nationale autonome du Mexique (UNAM)",
        when: "09/2020 – 03/2025", where: "Querétaro, Mexique",
        bullets: [
          "<b>Moyenne 9,34/10, diplômé avec mention honorifique, top ~5 % de la promotion.</b> " +
            "Formation pluridisciplinaire par la recherche ; options en informatique et mathématiques."
        ] },
      { title: "Échange Erasmus",
        org: "University of Groningen · bourse d'excellence de mobilité de l'UNAM",
        when: "02/2024 – 07/2024", where: "Groningue, Pays-Bas",
        bullets: [
          "Mathématiques numériques, réseaux de neurones, systèmes d'exploitation ; projet de " +
            "<b>reconstruction par CNN</b> de régions d'images floutées."
        ] }
    ],
    work: [
      { title: "Développeur logiciel junior",
        org: "Intellect Design Arena Ltd",
        when: "03/2025 – 07/2025", where: "Mexico, Mexique",
        bullets: [
          "Rédaction de <b>user stories</b> fonctionnelles et techniques ; développement d'utilitaires " +
            "<b>Spring Boot</b> pour des applications bancaires."
        ] }
    ],
    methods: [
      ["Inférence bayésienne et variationnelle", "SVI, ELBO"],
      ["Modèles à espace d'états", "HMM, Deep Markov Models ; forward–backward, Viterbi"],
      ["Modélisation statistique de signaux physiologiques", ""],
      ["Méthodes numériques, calcul scientifique", ""],
      ["Apprentissage automatique, réseaux de neurones", ""]
    ],
    skills: [
      ["Python", "Pyro, PyTorch, NumPy/SciPy"],
      ["R", "Analyse statistique"],
      ["C++, CUDA, OpenMP", "Calcul parallèle et GPU"],
      ["Java, Spring Boot", "POO, applications d'entreprise"],
      ["Linux/Unix, Bash, Git", "Serveurs distants, reproductibilité"]
    ],
    languages: [
      ["Espagnol", "Langue maternelle"],
      ["Anglais", "C1 · Cambridge C1, TOEFL iBT 105"],
      ["Français", "C1 · TCF"],
      ["Allemand", "A2"]
    ]
  }
};
