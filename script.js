/* ==========================================================================
   Back To Top Button
   ========================================================================== */

const backToTopButton = document.getElementById("backToTop");
let isButtonVisible = false;

window.addEventListener("scroll", () => {
  if (window.scrollY > 300 && !isButtonVisible) {
    backToTopButton.style.display = "block";
    backToTopButton.classList.add("show");
    setTimeout(() => backToTopButton.classList.remove("show"), 500);
    isButtonVisible = true;
  } else if (window.scrollY <= 300 && isButtonVisible) {
    backToTopButton.style.display = "none";
    isButtonVisible = false;
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ==========================================================================
   i18n Translation
   ========================================================================== */

const translation = {
  en: {
    // Navbar
    navAbout: "About",
    navProjects: "Projects",
    navContact: "Contact",

    // Hero
    heroTitle: "Richard Morales",
    heroSubtitle: "Full-Stack JavaScript Developer",
    heroDescription:
      "I build production-ready web applications using Next.js 15, TypeScript 5, Node.js, Tailwind CSS v4, Prisma 5 and PostgreSQL on Vercel. I focus on performance, accessibility, and clean UX — creating fast, scalable solutions that look and feel professional.",
    viewProjects: "View Projects",
    resume: "Resume",

    // About
    aboutMeTitle: "About Me",
    aboutMeParagraph:
      "I’m a full-stack JavaScript developer from Cali, Colombia. I design and build production-ready web apps end-to-end with Next.js 15, TypeScript, Node.js, Tailwind CSS v4, Prisma, and PostgreSQL on Vercel.\n\nI care deeply about clean UX, performance, accessibility (a11y), and maintainable architecture. With a business background, I align features with real outcomes and data, turning ideas into fast, reliable products that are easy to use and easy to ship.",

    // Skills — Headings
    coreSkills: "Frontend Development",
    backendSkills: "Backend & Database",
    devTools: "Developer Tools",
    designUiThinking: "Design & UI Thinking",
    softSkills: "Soft Skills",

    // Skills — Items
    html5: "HTML5 & Semantic Markup",
    css3: "CSS3 & Responsive Layouts",
    javascriptES6: "JavaScript (ES6+)",
    typescript: "TypeScript",
    nextjs: "Next.js 15 (App Router)",
    tailwind: "Tailwind CSS v4",

    nodeJs: "Node.js (Runtime)",
    prisma: "Prisma ORM 5",
    postgresql: "PostgreSQL (Neon / Supabase)",
    nextAuth: "NextAuth.js (Auth.js v5)",
    restApis: "REST APIs & Server Actions",
    pdfExcel: "PDF & Excel generation (PDFKit, SheetJS)",
    gitGitHub: "Git & GitHub",
    vercel: "Vercel (Deployment & Edge Functions)",
    cli: "Command Line (CLI)",
    vsCode: "Visual Studio Code",
    eslint: "ESLint & Prettier",
    figma: "Figma (UI Collaboration)",
    cleanUi: "Clean, accessible interfaces",
    mobileFirstDesign: "Mobile-first & responsive design",
    designSystems: "Design systems with shadcn/ui",
    a11y: "Accessibility (WCAG / a11y)",
    uxOptimization: "UX optimization & SEO best practices",
    businessMindset: "Business-Oriented Mindset",
    bilingualCommunication: "Bilingual Communication (EN/ES)",

    // About Extra
    technologiesUsedTitle: "Technologies I Use",
    inspirationalQuote:
      "If it doesn't look amazing and work smoothly, it's not finished yet.",

    // Featured Projects (Right column)
    featuredProjectOneTitle:
      "Tolaris Crown — Luxury Hotel Showcase (Full-Stack)",
    featuredProjectOneDescription:
      "A cinematic hotel web experience built with Next.js 15, TypeScript 5, Tailwind CSS v4, Prisma ORM and PostgreSQL. Features hybrid SSG/SSR rendering, dynamic routing, SEO optimization, and edge deployment on Vercel for lightning-fast performance.",
    featuredProjectTwoTitle: "Life Dashboard Web App",
    featuredProjectTwoDescription:
      "A complete productivity dashboard built with HTML, CSS, and vanilla JavaScript. Includes six interactive tools — Task Manager, Budget Tracker, Weekly Goals, Habit Tracker, Progress Tracker, and Notes — all with data persistence via localStorage.",

    // Projects section
    projectsTitle: "Projects",
    projectsSubtitle:
      "Here are some of the projects I have been working on recently",

    // Project Cards (Grid)
    comingSoon: "Coming Soon!",
    projectPortfolioTitle: "Personal Portfolio Website",
    projectPortfolioDescription:
      "A bilingual portfolio site showcasing my projects and skills. Built with semantic HTML, modern CSS and JavaScript, featuring a custom i18n system, responsive layout, and Open Graph optimization for social sharing.",
    projectLifeDashboardTitle: "Life Dashboard — Productivity Web App",
    projectLifeDashboardDescription:
      "A modular productivity suite built with HTML, CSS and vanilla JavaScript. Includes six interactive widgets (Task Manager, Budget Tracker, Weekly Goals, Habit Tracker, Progress Tracker and Notes) with persistent data via localStorage and a responsive mobile-first design.",
    projectTolarisTitle: "Tolaris Crown — Luxury Hotel Showcase (Full-Stack)",
    projectTolarisDescription:
      "A cinematic hotel web experience built with Next.js 15, TypeScript 5, Tailwind CSS v4, Prisma ORM and PostgreSQL. Features hybrid SSG/SSR rendering, dynamic routing, SEO optimization, and edge deployment on Vercel for lightning-fast performance.",
    projectFronteraTitle: "Frontera Desk — Multi-Tenant Business Control Desk",
    projectFronteraDescription:
      "Cloud-based, multi-tenant platform for small businesses to manage sales, inventory, customers, and profits from one dashboard. MVP: POS, KPIs, product/stock CRUD with low-stock alerts, mini-CRM, role-based access, reports to PDF/Excel, RLS, responsive UI and PWA offline support. Tech: Next.js 15, React 18, TS, Tailwind v4, Prisma 5, NextAuth, PostgreSQL (Neon/Supabase).",

    // Contact / Footer
    contactTitle: "Contact",
    contactParagraph:
      "I’m a frontend developer with a strong foundation in JavaScript and a good eye for clean, user-focused design. I enjoy building projects that are both functional and thoughtful. I'm open to new opportunities — remote or onsite — and always happy to connect with people building great things.",
    emailAddress: "Email: camylo182@gmail.com",
    gitHubProfile: "GitHub Profile: ",
    linkedInProfile: "LinkedIn Profile: ",
    footerLine:
      "© 2025 Richard Camilo Morales — Designed with heart, built with code.",

    // Links
    liveDemo: "🔗 Live Demo",
    github: "💻 GitHub",
  },

  es: {
    // Navbar
    navAbout: "Sobre Mí",
    navProjects: "Proyectos",
    navContact: "Contacto",

    // Hero
    heroTitle: "Richard Morales",
    heroSubtitle: "Desarrollador Full-Stack JavaScript",
    heroDescription:
      "Construyo aplicaciones web listas para producción con Next.js 15, TypeScript 5, Node.js, Tailwind CSS v4, Prisma 5 y PostgreSQL en Vercel. Me enfoco en rendimiento, accesibilidad y una experiencia de usuario limpia para crear soluciones rápidas, escalables y profesionales.",
    viewProjects: "Ver Proyectos",
    resume: "Currículum",

    // About
    aboutMeTitle: "Sobre Mí",
    aboutMeParagraph:
      "Soy un desarrollador full-stack con JavaScript ubicado en Cali, Colombia. Diseño y construyo aplicaciones web desde cero listas para producción con Next.js 15, TypeScript, Node.js, Tailwind CSS v4, Prisma y PostgreSQL en Vercel.\n\nPongo siempre especial énfasis en construir un UX limpio, en el rendimiento, la accesibilidad (a11y) y en generar una arquitectura mantenible. Con formación en administración, alineo funcionalidades con resultados reales y métricas, convirtiendo ideas en productos rápidos, confiables y fáciles de usar y desplegar.",

    // Skills — Headings
    coreSkills: "Desarrollo Frontend",
    backendSkills: "Backend y Base de Datos",
    devTools: "Herramientas de Desarrollo",
    designUiThinking: "Diseño e Interfaz de Usuario",
    softSkills: "Habilidades Blandas",

    // Skills — Items
    html5: "HTML5 y marcado semántico",
    css3: "CSS3 y diseño adaptable",
    javascriptES6: "JavaScript (ES6+)",
    typescript: "TypeScript",
    nextjs: "Next.js 15 (App Router)",
    tailwind: "Tailwind CSS v4",

    nodeJs: "Node.js (Runtime)",
    prisma: "Prisma ORM 5",
    postgresql: "PostgreSQL (Neon / Supabase)",
    nextAuth: "NextAuth.js (Auth.js v5)",
    restApis: "REST APIs y Server Actions",
    pdfExcel: "Generación de PDF y Excel (PDFKit, SheetJS)",
    gitGitHub: "Git y GitHub",
    vercel: "Vercel (Despliegue y Funciones Edge)",
    cli: "Línea de Comandos (CLI)",
    vsCode: "Visual Studio Code",
    eslint: "ESLint y Prettier",
    figma: "Figma (Colaboración UI)",
    cleanUi: "Interfaces limpias y accesibles",
    mobileFirstDesign: "Diseño mobile-first y adaptable",
    designSystems: "Sistemas de diseño con shadcn/ui",
    a11y: "Accesibilidad (WCAG / a11y)",
    uxOptimization: "Optimización de UX y buenas prácticas SEO",
    businessMindset: "Mentalidad Orientada al Negocio",
    bilingualCommunication: "Comunicación Bilingüe (Inglés / Español)",

    // About Extra
    technologiesUsedTitle: "Tecnologías que Uso",
    inspirationalQuote:
      "Si no se ve increíble y funciona perfectamente, aún no está terminado.",

    // Featured Projects (Right column)
    featuredProjectOneTitle:
      "Tolaris Crown — Exhibición Hotelera Full-Stack de Lujo",
    featuredProjectOneDescription:
      "Experiencia web cinematográfica construida con Next.js 15, TypeScript 5, Tailwind CSS v4, Prisma ORM y PostgreSQL. Incluye renderizado híbrido SSG/SSR, enrutamiento dinámico, optimización SEO y despliegue en edge con Vercel para máximo rendimiento.",
    featuredProjectTwoTitle:
      "Life Dashboard — Aplicación Web de Productividad Personal",
    featuredProjectTwoDescription:
      "Suite de productividad completa construida con HTML, CSS y JavaScript puro. Incluye seis herramientas interactivas — Gestor de Tareas, Presupuesto, Metas Semanales, Hábitos, Progreso y Notas — con persistencia de datos vía localStorage.",

    // Projects section
    projectsTitle: "Proyectos",
    projectsSubtitle:
      "Estos son algunos de los proyectos en los que he estado trabajando recientemente",

    // Project Cards (Grid)
    comingSoon: "¡Próximamente!",
    projectPortfolioTitle: "Sitio Web de Portafolio Personal",
    projectPortfolioDescription:
      "Portafolio bilingüe que presenta mis proyectos y habilidades. Desarrollado con HTML semántico, CSS moderno y JavaScript, con sistema i18n personalizado, diseño adaptable y optimización Open Graph para redes sociales.",
    projectLifeDashboardTitle:
      "Life Dashboard — Aplicación de Productividad Web",
    projectLifeDashboardDescription:
      "Suite de productividad modular construida con HTML, CSS y JavaScript puro. Incluye seis herramientas interactivas (Gestor de Tareas, Presupuesto, Metas Semanales, Hábitos, Progreso y Notas) con persistencia de datos en localStorage y diseño mobile-first.",
    projectTolarisTitle:
      "Tolaris Crown — Exhibición Hotelera Full-Stack de Lujo",
    projectTolarisDescription:
      "Experiencia web cinematográfica construida con Next.js 15, TypeScript 5, Tailwind CSS v4, Prisma ORM y PostgreSQL. Incluye renderizado híbrido SSG/SSR, enrutamiento dinámico, optimización SEO y despliegue en edge con Vercel para máximo rendimiento.",
    projectFronteraTitle: "Frontera Desk — Escritorio de Control Multi-Tenant",
    projectFronteraDescription:
      "Plataforma en la nube para pymes que centraliza ventas, inventario, clientes y utilidades en un solo panel. MVP: POS, KPIs, CRUD de productos/stock con alertas de bajo inventario, mini-CRM, acceso por roles, reportes a PDF/Excel, RLS, UI responsiva y soporte PWA sin conexión. Tech: Next.js 15, React 18, TS, Tailwind v4, Prisma 5, NextAuth, PostgreSQL (Neon/Supabase).",

    // Contact / Footer
    contactTitle: "Contacto",
    contactParagraph:
      "Soy un desarrollador frontend con una sólida base en JavaScript y buen ojo para el diseño limpio y centrado en el usuario. Disfruto crear proyectos que sean funcionales y bien pensados. Estoy abierto a nuevas oportunidades — remotas o presenciales — y siempre dispuesto a conectar con personas que estén construyendo cosas geniales.",
    emailAddress: "Correo: camylo182@gmail.com",
    gitHubProfile: "Perfil de GitHub: ",
    linkedInProfile: "Perfil de LinkedIn: ",
    footerLine:
      "© 2025 Richard Camilo Morales — Diseñado con el corazón, construido con código.",

    // Links
    liveDemo: "🔗 Ver Demo",
    github: "💻 GitHub",
  },
};

// Track current language
let currentLanguage = "en";

// Toggle Button
const toggleBtn = document.getElementById("languageToggle");

// Apply translation to all [data-i18n] nodes
function applyTranslations(lang) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = translation[lang][key];
    if (!value) return;

    // Preserve manual line breaks for the about paragraph
    if (key === "aboutMeParagraph") {
      el.innerHTML = value.replace(/\n/g, "<br>");
    } else {
      el.textContent = value;
    }
  });

  // Update ribbon text for "coming soon" cards
  const coming = translation[lang]["comingSoon"];
  document.querySelectorAll(".coming-soon").forEach((card) => {
    card.setAttribute("data-label", coming);
  });

  // Update language button label
  toggleBtn.innerHTML =
    lang === "en"
      ? '<i class="fa-solid fa-globe" aria-hidden="true"></i> <span class="active-lang"> EN </span> | ES'
      : '<i class="fa-solid fa-globe" aria-hidden="true"></i> <span class="active-lang"> ES </span> | EN';
}

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    currentLanguage = currentLanguage === "en" ? "es" : "en";
    applyTranslations(currentLanguage);
  });
}

/* ==========================================================================
   Mobile Hamburger Menu
   ========================================================================== */

window.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".navbar-center");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("show");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  // Initialize current language on first load (also sets "Coming Soon" ribbon)
  applyTranslations(currentLanguage);
});
