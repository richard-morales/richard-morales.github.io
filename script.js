// Back To Top Button
const backToTopButton = document.getElementById("backToTop");
let isButtonVisible = false;

window.addEventListener("scroll", () => {
  if (window.scrollY > 300 && !isButtonVisible) {
    backToTopButton.style.display = "block";

    backToTopButton.classList.add("show");

    setTimeout(() => {
      backToTopButton.classList.remove("show");
    }, 500);

    isButtonVisible = true;
  } else if (window.scrollY <= 300 && isButtonVisible) {
    backToTopButton.style.display = "none";
    isButtonVisible = false;
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Translation

const translation = {
  en: {
    //Navbar
    navAbout: "About",
    navProjects: "Projects",
    navContact: "Contact",

    //Hero Section
    heroTitle: "Richard Morales",
    heroSubtitle: "Frontend Developer",
    heroDescription:
      "I design and develop modern, responsive web interfaces using JavaScript, HTML5, CSS3, Git, Node.js, and version control with GitHub.",
    viewProjects: "View Projects",
    resume: "Resume",

    //About Section
    aboutMeTitle: "About Me",
    aboutMeParagraph:
      "Hi, I'm Richard Morales, a front-end developer from Cali, Colombia, passionate about building clean, responsive, and engaging web interfaces.I work with HTML, CSS, JavaScript, and Git to bring user- centered designs to life.\n\nWith a background in business, I bring a strategic mindset to development, always thinking about usability, performance, and the real-world impact of the final product. I'm focused on creating high-quality digital experiences and currently open to both remote and onsite opportunities where I can contribute, grow, and build meaningful products.",

    //Core Skills
    coreSkills: "Core Frontend Skills",
    html5: "HTML5",
    css3: "CSS3",
    javascriptES6: "JavaScript (ES6+)",
    responsiveDesign: "Responsive Design",
    flexBoxGrid: "Flexbox & Grid",
    domManipulation: "DOM Manipulation",
    semanticHTML: "Semantic HTML",

    //Developer Tools
    devTools: "Developer Tools",
    gitGitHub: "Git & GitHub",
    commandLine: "Command Line (CLI)",
    visualStudioCode: "Visual Studio Code",
    liveServer: "Live Server",

    //Design Skills
    designUiThinking: "Design & UI Thinking",
    mobileFirstDesign: "Mobile-First Design",
    cleanUiPrinciles: "Clean UI Principles",
    attentionToDetail: "Attention to Detail",
    layoutComposition: "Layout Composition",
    accessibility: "Accessibility (a11y)",

    //Soft Skills
    softSkills: "Soft Skills",
    problemSolving: "Problem Solving",
    creativeThinking: "Creative Thinking",
    teamCollaboration: "Team Collaboration",
    businessOrientedMindset: "Business-Oriented Mindset",
    bilingualCommunication: "Bilingual Communication (English + Spanish)",

    //Learning Now
    inProgress: "In Progress / Learning Now",
    nodeJs: "Node.js",
    expressJs: "Express.js",
    restApis: "REST APIs",
    mongoDB: "MongoDB",
    fullStackDevelopment: "Full-Stack Development",

    //About Extra
    technologiesUsedTitle: "Technologies I Use",
    inspirationalQuote:
      "If it doesn't look amazing and work smoothly, it's not finished yet.",

    //Featured Projects Section
    featuredPorfolioTitle: "My Porfolio Website",
    featuredPortfolioDescription:
      "A responsive and bilingual personal portfolio built with HTML, CSS, and vanilla JavaScript. It highlights my projects, skills, and experience with a clean layout and interactive features that adapt across devices.",
    featuredLifeDashboardTitle: "Life Dashboard Web App",
    featuredLifeDashboardDescription:
      "A complete productivity dashboard built with HTML, CSS, and vanilla JavaScript. Includes six interactive tools — Task Manager, Budget Tracker, Weekly Goals, Habit Tracker, Progress Tracker, and Notes — all with data persistence via localStorage.",

    //Projects Section
    projectsTitle: "Projects",
    projectsSubtitle:
      "Here are some of the projects I have been working on recently",

    //Project Cards
    comingSoon: "Coming Soon!",
    projectPortfolioTitle: "Responsive Portfolio Website",
    projectPortfolioDescription:
      "A personal portfolio website built from scratch using semantic HTML, responsive CSS, and JavaScript. It highlights my projects, skills, and professional background with a clean, user-friendly layout.",
    projectLifeDashboardTitle: "Life Dashboard Web App",
    projectLifeDashboardDescription:
      "A modular productivity application built with HTML, CSS, and JavaScript. It features six interactive tools—tasks, goals, notes, habits, progress, and budget—designed to help organize daily life in one clean, user-friendly interface.",
    projectWeatherTitle: "Weather Dashboard",
    projectWeatherDescription:
      "An interactive app that fetches real-time data from the OpenWeatherMap API. Built with async/await, error handling, and a responsive design to display weather updates clearly.",

    //Footer / Contact
    contactTitle: "Contact",
    contactParagraph:
      "I’m a frontend developer with a strong foundation in JavaScript and a good eye for clean, user-focused design. I enjoy building projects that are both functional and thoughtful. I'm open to new opportunities — remote or onsite — and always happy to connect with people building great things.",
    emailAddress: "Email: camylo182@gmail.com",
    gitHubProfile: "GitHub Profile: ",
    linkedInProfile: "LinkedIn Profile: ",
    footerLine:
      "© 2025 Richard Camilo Morales — Designed with heart, built with code.",

    //Links
    liveDemo: "🔗 Live Demo",
    github: "💻 GitHub",
  },

  es: {
    //Navbar
    navAbout: "Sobre Mí",
    navProjects: "Proyectos",
    navContact: "Contacto",

    //Hero Section
    heroTitle: "Richard Morales",
    heroSubtitle: "Desarrollador Frontend",
    heroDescription:
      "Diseño y desarrollo interfaces web modernas y adaptables utilizando JavaScript, HTML5, CSS3, Git, Node.js y control de versiones con GitHub.",
    viewProjects: "Ver Proyectos",
    resume: "Currículum",

    //About Section
    aboutMeTitle: "Sobre Mí",
    aboutMeParagraph:
      "Hola, soy Richard Morales, desarrollador front-end de Cali, Colombia, apasionado por crear interfaces web limpias, responsivas y atractivas. Trabajo con HTML, CSS, JavaScript y Git para dar vida a diseños centrados en el usuario.\n\nGracias a mi formación en administración, tengo una mentalidad estratégica que aplico al desarrollo, siempre enfocado en la usabilidad, el rendimiento y el impacto real del producto final. Estoy comprometido con la creación de experiencias digitales de alta calidad y actualmente estoy abierto a oportunidades tanto remotas como presenciales donde pueda aportar, crecer y construir productos significativos.",

    // Core Skills
    coreSkills: "Habilidades Frontend",
    html5: "HTML5",
    css3: "CSS3",
    javascriptES6: "JavaScript (ES6+)",
    responsiveDesign: "Diseño Responsivo",
    flexBoxGrid: "Flexbox y Grid",
    domManipulation: "Manipulación del DOM",
    semanticHTML: "HTML Semántico",

    //Developer Tools
    devTools: "Herramientas de Desarrollo",
    gitGitHub: "Git y GitHub",
    commandLine: "Línea de Comandos (CLI)",
    visualStudioCode: "Visual Studio Code",
    liveServer: "Live Server",

    //Design Skills
    designUiThinking: "Diseño e Interfaz de Usuario",
    mobileFirstDesign: "Diseño Mobile-First",
    cleanUiPrinciles: "Principios de UI Limpia",
    attentionToDetail: "Atención al Detalle",
    layoutComposition: "Composición de Layout",
    accessibility: "Accesibilidad (a11y)",

    //Soft Skills
    softSkills: "Habilidades Blandas",
    problemSolving: "Resolución de Problemas",
    creativeThinking: "Pensamiento Creativo",
    teamCollaboration: "Trabajo en Equipo",
    businessOrientedMindset: "Mentalidad Orientada al Negocio",
    bilingualCommunication: "Comunicación Bilingüe (Inglés + Español)",

    //Learning Now
    inProgress: "Aprendiendo Actualmente",
    nodeJs: "Node.js",
    expressJs: "Express.js",
    restApis: "REST APIs",
    mongoDB: "MongoDB",
    fullStackDevelopment: "Desarrollo Full-Stack",

    //About Extra
    technologiesUsedTitle: "Tecnologías que Uso",
    inspirationalQuote:
      "Si no se ve increíble y funciona perfectamente, aún no está terminado.",

    //Featured Projects Section
    featuredPorfolioTitle: "Mi Portafolio Personal",
    featuredPortfolioDescription:
      "Un portafolio personal, responsivo y bilingüe, construido con HTML, CSS y JavaScript puro. Destaca mis proyectos, habilidades y experiencia con un diseño limpio y características interactivas que se adaptan a diferentes dispositivos.",
    featuredLifeDashboardTitle: "Life Dashboard App Web",
    featuredLifeDashboardDescription:
      "Un completo panel de productividad construido con HTML, CSS y JavaScript puro. Incluye seis herramientas interactivas — Gestor de Tareas, Control de Presupuesto, Metas Semanales, Registro de Hábitos, Seguimiento de Progreso y Notas — todas con persistencia de datos a través de localStorage.",

    //Projects Section
    projectsTitle: "Proyectos",
    projectsSubtitle:
      "Estos son algunos de los proyectos en los que he estado trabajando recientemente",

    //Project Cards
    comingSoon: "¡Próximamente!",
    projectPortfolioTitle: "Portafolio Web Responsivo",
    projectPortfolioDescription:
      "Sitio web de portafolio creado con HTML semántico, CSS adaptable y JavaScript. Presenta mis proyectos, habilidades y experiencia en un diseño moderno, claro y fácil de usar.",
    projectLifeDashboardTitle: "Life Dashboard App Web",
    projectLifeDashboardDescription:
      "Una aplicación modular de productividad construida con HTML, CSS y JavaScript. Incluye seis herramientas interactivas — tareas, metas, notas, hábitos, progreso y presupuesto — diseñadas para organizar la vida diaria en una interfaz limpia y fácil de usar.",
    projectWeatherTitle: "Clima en Vivo",
    projectWeatherDescription:
      "Aplicación que muestra el clima en tiempo real con datos de OpenWeatherMap. Usa async/await, manejo de errores y diseño responsivo para una visualización clara.",

    //Footer / Contact
    contactTitle: "Contacto",
    contactParagraph:
      "Soy un desarrollador frontend con una sólida base en JavaScript y buen ojo para el diseño limpio y centrado en el usuario. Disfruto crear proyectos que sean funcionales y bien pensados. Estoy abierto a nuevas oportunidades — remotas o presenciales — y siempre dispuesto a conectar con personas que estén construyendo cosas geniales.",
    emailAddress: "Correo: camylo182@gmail.com",
    gitHubProfile: "Perfil de GitHub: ",
    linkedInProfile: "Perfil de LinkedIn: ",
    footerLine:
      "© 2025 Richard Camilo Morales — Diseñado con el corazón, construido con código.",

    //Links
    liveDemo: "🔗 Ver Demo",
    github: "💻 GitHub",
  },
};

// Translation Machine
let currentLanguage = "en";

const toggleBtn = document.getElementById("languageToggle");

toggleBtn.addEventListener("click", () => {
  currentLanguage = currentLanguage === "en" ? "es" : "en";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    const translationText = translation[currentLanguage][key];

    if (translationText) {
      if (key === "aboutMeParagraph") {
        element.innerHTML = translationText.replace(/\n/g, "<br>");
      } else {
        element.textContent = translationText;
      }
    }
  });

  toggleBtn.innerHTML =
    currentLanguage === "en"
      ? '<i class="fa-solid fa-globe"></i> <span class="active-lang"> EN </span> | ES'
      : '<i class="fa-solid fa-globe"></i> <span class="active-lang"> ES </span> | EN';

  const comingSoonText = translation[currentLanguage]["comingSoon"];
  document.querySelectorAll(".coming-soon").forEach((card) => {
    card.setAttribute("data-label", comingSoonText);
  });
});

// Hamburger Menu
window.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".navbar-center");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }
});
