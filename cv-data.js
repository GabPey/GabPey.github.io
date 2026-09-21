// The printable CV, in three languages. Facts come from the AboutMe vault source notes
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
      projects: "Selected projects", stays: "Undergraduate research stays", skills: "Computing", methods: "Methods",
      languages: "Languages", links: "Online", page: "Page"
    },
    pages: [
      { main: ["research", "education"], side: ["methods", "skills"] },
      { main: ["stays", "work", "projects"], side: ["languages", "links"] }
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
    stays: [
      { title: "Research stay — Institute of Mathematics (IMATE)",
        org: "UNAM · Dr. Guillermo Ramírez Santiago",
        when: "01/2023 – 05/2023", where: "",
        bullets: [
          "Mathematical modelling of <b>active-matter systems</b> with fluid dynamics and tensor " +
            "calculus, applied to bacterial aggregation into <b>biofilms</b>."
        ] },
      { title: "Research stay — Nanobiophotonics Laboratory",
        org: "CFATA, UNAM · Dr. Luz López Marín",
        when: "01/2022 – 05/2022", where: "Querétaro, Mexico",
        bullets: [
          "Wet-lab work on a <b>COVID-19 aptamer biosensor</b>, then <b>dendritic-cell</b> culture " +
            "and activation under <b>shockwaves</b> (a cancer-immunotherapy angle); protocol design " +
            "and reporting."
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
  },

  // ------------------------------------------------------------------ ESPAÑOL (2 páginas)
  es: {
    htmlLang: "es",
    title: "M2 Matemáticas Aplicadas y Estadística · Biología Computacional y Matemática",
    city: "Marsella, Francia",
    profile:
      "Estudiante de máster (M2) en Matemáticas Aplicadas y Estadística (itinerario Computational &amp; " +
      "Mathematical Biology) en la Universidad de Aix-Marsella. Trabajo con modelos probabilísticos y " +
      "de espacio de estados de señales fisiológicas: la actividad eléctrica cardiaca en mi tesis de " +
      "licenciatura y registros neuronales de fotometría de fibra óptica en el Abante Lab de " +
      "Barcelona. Me muevo con soltura entre las matemáticas, la estadística, la computación científica " +
      "y las ciencias de la vida. Busco unas prácticas de investigación de fin de estudios de seis " +
      "meses, a partir de febrero de 2027, en modelización estadística y aprendizaje automático para " +
      "la salud, como paso hacia el doctorado.",
    labels: {
      research: "Experiencia en investigación", education: "Formación",
      work: "Experiencia profesional", projects: "Proyectos destacados", stays: "Estancias de investigación (licenciatura)", skills: "Informática",
      methods: "Métodos", languages: "Idiomas", links: "En línea", page: "Página"
    },
    pages: [
      { main: ["research", "education"], side: ["methods", "skills"] },
      { main: ["stays", "work", "projects"], side: ["languages", "links"] }
    ],
    research: [
      { id: "abante",
        title: "Prácticas de investigación — Abante Lab",
        org: "Universitat de Barcelona · IP: Jordi Abante (UBNeuro / IDIBAPS)",
        when: "05/2026 – 07/2026", where: "Barcelona, España",
        bullets: [
          "Desarrollo de <b>photosvi</b>, un paquete modular de Python de modelos generativos para " +
            "<b>señales de fotometría de fibra óptica</b>, aplicado al perfilado de la respuesta a " +
            "fármacos; reestructuración de scripts de investigación en una arquitectura única basada " +
            "en configuración.",
          "Implementación de <b>inferencia variacional</b> (Pyro, SVI) con <b>decodificadores " +
            "forward–backward y Viterbi en espacio logarítmico</b>, validados frente a oráculos de " +
            "fuerza bruta.",
          "Diseño del <b>benchmark</b> de cinco variantes de inferencia para la <b>detección de eventos " +
            "fásicos y la recuperación del efecto del fármaco</b> frente a datos simulados; la variante " +
            "seleccionada se convirtió en la referencia del laboratorio. <b>Artículo en preparación.</b>"
        ] },
      { id: "thesis",
        title: "Tesis de licenciatura — Modelo difuso discreto de Takagi–Sugeno de la actividad eléctrica cardiaca",
        org: "UNAM, Departamento de Inteligencia Artificial · financiada por el CONACYT",
        when: "09/2024 – 03/2025", where: "Querétaro, México",
        bullets: [
          "Diseño e implementación de un <b>modelo difuso de Takagi–Sugeno</b> en tiempo discreto que " +
            "reproduce la actividad eléctrica del corazón y genera el ECG en vivo a partir del modelo.",
          "Generación de ritmos cardiacos <b>~400 % más rápida</b>, con errores de aproximación del " +
            "<b>orden del milisegundo o menores</b>; ejecutable en un microcontrolador."
        ] }
    ],
    education: [
      { title: "Máster en Matemáticas Aplicadas y Estadística",
        org: "Aix-Marseille Université · itinerario Computational &amp; Mathematical Biology (CMB)",
        when: "09/2025 – actualidad", where: "Marsella, Francia",
        bullets: ["Beca de excelencia de máster <b>TIGER</b>."] },
      { title: "Licenciatura en Tecnología",
        org: "Universidad Nacional Autónoma de México (UNAM)",
        when: "09/2020 – 03/2025", where: "Querétaro, México",
        bullets: [
          "<b>Promedio 9.34/10, titulado con mención honorífica, top ~5 % de la generación.</b>",
          "Programa interdisciplinario centrado en la investigación; optativas en computación y " +
            "matemáticas."
        ] },
      { title: "Intercambio Erasmus",
        org: "University of Groningen · beca completa de movilidad de excelencia de la UNAM",
        when: "02/2024 – 07/2024", where: "Groninga, Países Bajos",
        bullets: [
          "Matemáticas Numéricas, Redes Neuronales, Sistemas Operativos; proyecto de " +
            "<b>reconstrucción con CNN</b> de regiones de imagen desenfocadas (OpenImages)."
        ] }
    ],
    stays: [
      { title: "Estancia de investigación — Instituto de Matemáticas (IMATE)",
        org: "UNAM · Dr. Guillermo Ramírez Santiago",
        when: "01/2023 – 05/2023", where: "",
        bullets: [
          "Modelización matemática de <b>sistemas de materia activa</b> mediante dinámica de fluidos " +
            "y cálculo tensorial, aplicada a la agregación bacteriana en <b>biopelículas</b>."
        ] },
      { title: "Estancia de investigación — Laboratorio de Nanobiofotónica",
        org: "CFATA, UNAM · Dra. Luz López Marín",
        when: "01/2022 – 05/2022", where: "Querétaro, México",
        bullets: [
          "Trabajo de laboratorio en un <b>biosensor de aptámeros para COVID-19</b> y, después, " +
            "cultivo de <b>células dendríticas</b> y su activación con <b>ondas de choque</b> (con " +
            "enfoque en inmunoterapia contra el cáncer); diseño de protocolos y reportes."
        ] }
    ],
    work: [
      { title: "Desarrollador de software junior",
        org: "Intellect Design Arena Ltd",
        when: "03/2025 – 07/2025", where: "Ciudad de México, México",
        bullets: [
          "Redacción de <b>historias de usuario</b> funcionales y técnicas y desarrollo de utilidades " +
            "<b>Spring Boot</b> para aplicaciones de banca empresarial."
        ] }
    ],
    projects: [
      { title: "Simulación de transferencia de calor y propagación de incendios",
        org: "UNAM · proyecto en equipo, después con el Dr. Solís",
        when: "2022 – 2023", where: "Querétaro, México",
        bullets: [
          "Resolución numérica de la <b>EDP de transferencia de calor</b> a partir de una fotografía y " +
            "una especificación del material (OpenCV), extendida a la <b>propagación de incendios " +
            "sobre terreno 3D</b> con <b>recocido simulado</b>. <b>Mejor proyecto del año</b>; dio " +
            "lugar a una invitación a colaborar con la SEMARNAT."
        ] },
      { title: "Predicción de humedad del suelo con CNN–LSTM",
        org: "UNAM", when: "2024", where: "Querétaro, México",
        bullets: [
          "Arquitectura <b>CNN–LSTM</b> para la predicción de humedad a largo plazo sobre grandes " +
            "conjuntos de datos globales en malla (Python, TensorFlow)."
        ] },
      { title: "Detección de bordes Sobel paralela en tiempo real",
        org: "UNAM · optativas de procesamiento de imágenes y cómputo paralelo",
        when: "2023", where: "Querétaro, México",
        bullets: [
          "Filtros, reducción de ruido y segmentación desde cero, culminando en un <b>detector Sobel " +
            "paralelo en tiempo real</b> (C++, OpenMP, CUDA)."
        ] },
      { title: "Contaminación del aire y propagación de la COVID-19",
        org: "UNAM · con un compañero", when: "2021", where: "Ciudad de México, México",
        bullets: [
          "Modelo estadístico que relaciona la contaminación por partículas con la propagación de la " +
            "COVID-19; explicó <b>~8 % de los contagios</b> en la región estudiada."
        ] },
      { title: "Cove — app de aprendizaje de idiomas basada en un grafo de conceptos",
        org: "Proyecto personal, en desarrollo", when: "2026 –", where: "",
        bullets: [
          "Un grafo de conceptos construido por quien aprende, a través de varios idiomas, con un " +
            "núcleo gramatical basado en reglas y un generador calibrado a lo que contiene el grafo " +
            "(Flutter, Dart, SQLite, spaCy)."
        ] }
    ],
    methods: [
      ["Inferencia bayesiana y variacional", "SVI, ELBO"],
      ["Modelos de espacio de estados", "HMM, Deep Markov Models; forward–backward, Viterbi"],
      ["Modelización estadística de señales fisiológicas", ""],
      ["Métodos numéricos y computación científica", ""],
      ["Aprendizaje automático, redes neuronales", ""]
    ],
    skills: [
      ["Python", "Pyro, PyTorch, NumPy/SciPy: modelización probabilística y aprendizaje profundo"],
      ["R", "Análisis estadístico"],
      ["C++, CUDA, OpenMP", "Programación paralela y en GPU"],
      ["Java, Spring Boot", "POO, aplicaciones empresariales"],
      ["Linux/Unix, Bash, Git", "Servidores remotos, flujos de trabajo reproducibles"]
    ],
    languages: [
      ["Español", "Lengua materna"],
      ["Inglés", "C1 · Cambridge C1, TOEFL iBT 105"],
      ["Francés", "C1 · TCF"],
      ["Alemán", "A2"]
    ]
  }
};
