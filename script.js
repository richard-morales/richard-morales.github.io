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
        behavior: "smooth"
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
        heroDescription: "I design and develop modern, responsive web interfaces using JavaScript, HTML5, CSS3, Git, Node.js, and version control with GitHub.",
        viewProjects: "View Projects",
        resume: "Resume",

        //About Section
        aboutMeTitle: "About Me",
        aboutMeParagraph: "Hi, I'm Richard Morales, a front-end developer from Cali, Colombia, passionate about building clean, responsive, and engaging web interfaces.I work with HTML, CSS, JavaScript, and Git to bring user- centered designs to life.\n\nWith a background in business, I bring a strategic mindset to development, always thinking about usability, performance, and the real-world impact of the final product. I'm focused on creating high-quality digital experiences and currently open to both remote and onsite opportunities where I can contribute, grow, and build meaningful products.",

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
        inspirationalQuote: "If it doesn't look amazing and work smoothly, it's not finished yet.",

        //Featured Projects Section
        featuredPorfolioTitle: "My Porfolio Website",
        featuredPortfolioDescription: "A responsive personal portfolio built with HTML, CSS, and JavaScript",
        featuredTodoAppTitle: "To-Do List App",
        featuredTodoAppTitleDescription: "A task manager that uses local storage and vanilla JS to manage tasks dynamically.",

        //Projects Section
        projectsTitle: "Projects",
        projectsSubtitle: "Here are some of the projects I have been working on recently",

        //Project Cards
        projectPortfolioTitle: "Responsive Portfolio Website",
        projectPortfolioDescription: "A personal portfolio website built from scratch using semantic HTML, responsive CSS, and JavaScript. It highlights my projects, skills, and professional background with a clean, user-friendly layout.",
        projectTodoTitle: "To-Do List App",
        projectTodoDescription: "A simple task manager built with vanilla JavaScript that stores tasks in local storage. Users can add, edit, delete, and complete tasks. Clean interface and easy-to-use functionality.",
        projectWeatherTitle: "Weather Dashboard",
        projectWeatherDescription: "An interactive app that fetches real-time data from the OpenWeatherMap API. Built with async/await, error handling, and a responsive design to display weather updates clearly.",
        projectTaskManagerApiTitle: "Task Manager API",
        projectTaskManagerApiDescription: "A RESTful API built with Node.js and Express.js to handle task creation, reading, updating, and deletion (CRUD). Uses in-memory storage and follows best practices for REST architecture.",
        projectFullStackTaskTitle: "Full-Stack Task Manager",
        projectFullStackTaskDescription: "A full task manager app where the frontend connects to a custom backend API. Supports live updates, user interaction, and persistent data with proper request handling.",
        projectAuthAppTitle: "User Authentication App",
        projectAuthAppDescription: "An authentication system with secure login, registration, and JWT-based sessions. Built using Express.js and tested with Postman to ensure reliable access and proper token validation.",
        projectNotesAppTitle: "Notes App (Full-Stack Project)",
        projectNotesAppDescription: "A secure app to create, edit, and delete personal notes after login. Built with Node.js, Express.js, and MongoDB, then deployed online. Backend and database combined for full-stack features.",
        projectReactPortfolioTitle: "Responsive Portfolio Website (React Edition)",
        projectReactPortfolioDescription: "A portfolio built with React.js and React Router. Uses modular components for structure and smooth navigation. Focused on reusability, scalability, and a clean frontend design.",
        projectReactTodoTitle: "To-Do App (React + useState)",
        projectReactTodoDescription: "A reworked task manager built in React. Uses useState and controlled components to manage tasks. Designed with one-way data flow and clear component separation for readability.",
        projectReactWeatherTitle: "Weather Dashboard (React + API Fetch)",
        projectReactWeatherDescription: "Weather app using React and async/await to fetch data from OpenWeatherMap. UI updates with state and hooks. Built with reusable card and input components, offering a responsive user experience.",
        projectReactNotesTitle: "Notes App (React + Authentication)",
        projectReactNotesDescription: "Frontend of my notes app, rebuilt in React. Includes protected routes, JWT-based auth, and dynamic UI updates. Uses localStorage and connects to a backend API for secure note management.",
        projectReactDashboardTitle: "Job-Ready Dashboard UI (React + Tailwind)",
        projectReactDashboardDescription: "Fully responsive admin dashboard built with React and Tailwind CSS. Includes reusable layouts, sidebar navigation, charts (Chart.js or Recharts), and dynamic data loading (mocked or real).",

        //Footer / Contact
        contactTitle: "Contact",
        contactParagraph: "I'm open to new opportunities — remote or onsite — and always happy to connect!",
        emailAddress: "Email: camylo182@gmail.com",
        gitHubProfile: "GitHub Profile: ",
        linkedInProfile: "LinkedIn Profile: ",
        footerLine: "© 2025 Richard Camilo Morales — Designed with heart, built with code.",

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
        heroDescription: "Diseño y desarrollo interfaces web modernas y adaptables utilizando JavaScript, HTML5, CSS3, Git, Node.js y control de versiones con GitHub.",
        viewProjects: "Ver Proyectos",
        resume: "Currículum",

        //About Section
        aboutMeTitle: "Sobre Mí",
        aboutMeParagraph: "Hola, soy Richard Morales, desarrollador front-end de Cali, Colombia, apasionado por crear interfaces web limpias, responsivas y atractivas. Trabajo con HTML, CSS, JavaScript y Git para dar vida a diseños centrados en el usuario.\n\nGracias a mi formación en administración, tengo una mentalidad estratégica que aplico al desarrollo, siempre enfocado en la usabilidad, el rendimiento y el impacto real del producto final. Estoy comprometido con la creación de experiencias digitales de alta calidad y actualmente estoy abierto a oportunidades tanto remotas como presenciales donde pueda aportar, crecer y construir productos significativos.",

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
        inspirationalQuote: "Si no se ve increíble y funciona perfectamente, aún no está terminado.",

        //Featured Projects Section
        featuredPorfolioTitle: "Mi Portafolio Personal",
        featuredPortfolioDescription: "Un portafolio personal responsivo construido con HTML, CSS y JavaScript.",
        featuredTodoAppTitle: "Gestor de Tareas",
        featuredTodoAppTitleDescription: "Un gestor de tareas que utiliza almacenamiento local y JavaScript puro para manejar tareas dinámicamente.",

        //Projects Section
        projectsTitle: "Proyectos",
        projectsSubtitle: "Estos son algunos de los proyectos en los que he estado trabajando recientemente",

        //Project Cards
        projectPortfolioTitle: "Portafolio Web Responsivo",
        projectPortfolioDescription: "Sitio web de portafolio creado con HTML semántico, CSS adaptable y JavaScript. Presenta mis proyectos, habilidades y experiencia en un diseño moderno, claro y fácil de usar.",
        projectTodoTitle: "Gestor de Tareas",
        projectTodoDescription: "App de tareas hecha con JavaScript puro y almacenamiento local. Permite añadir, editar y completar tareas. Tiene una interfaz clara y práctica que facilita su uso.",
        projectWeatherTitle: "Clima en Vivo",
        projectWeatherDescription: "Aplicación que muestra el clima en tiempo real con datos de OpenWeatherMap. Usa async/await, manejo de errores y diseño responsivo para una visualización clara.",
        projectTaskManagerApiTitle: "API de Gestión de Tareas",
        projectTaskManagerApiDescription: "API REST creada con Node.js y Express.js para gestionar tareas: crear, leer, actualizar y eliminar (CRUD). Usa almacenamiento en memoria y sigue buenas prácticas de desarrollo backend.",
        projectFullStackTaskTitle: "Gestor de Tareas Full-Stack",
        projectFullStackTaskDescription: "Aplicación de tareas donde el frontend se conecta con una API backend personalizada. Soporta interacción, actualizaciones y almacenamiento persistente con manejo de solicitudes.",
        projectAuthAppTitle: "Aplicación de Autenticación",
        projectAuthAppDescription: "Sistema de autenticación con registro, inicio de sesión seguro y uso de tokens JWT. Desarrollado con Express.js y probado en Postman para garantizar acceso confiable y validación correcta.",
        projectNotesAppTitle: "Aplicación de Notas (Full-Stack)",
        projectNotesAppDescription: "Aplicación segura para crear, editar y eliminar notas personales tras iniciar sesión. Hecha con Node.js, Express.js y MongoDB. Integra backend y base de datos, y está desplegada en línea.",
        projectReactPortfolioTitle: "Portafolio Web (Versión React)",
        projectReactPortfolioDescription: "Portafolio personal hecho con React.js y React Router. Usa componentes modulares para una estructura clara. Enfocado en reutilización, escalabilidad y diseño profesional.",
        projectReactTodoTitle: "Gestor de Tareas (React + useState)",
        projectReactTodoDescription: "Gestor de tareas hecho en React. Usa useState y componentes controlados para manejar tareas. Diseñado con flujo unidireccional y separación clara de componentes para mayor orden.",
        projectReactWeatherTitle: "Clima en Vivo (React + API Fetch)",
        projectReactWeatherDescription: "App del clima hecha con React y async/await para obtener datos desde OpenWeatherMap. La interfaz se actualiza con estado y hooks. Usa componentes reutilizables para tarjetas e inputs, con una experiencia responsiva.",
        projectReactNotesTitle: "Aplicación de Notas (React + Autenticación)",
        projectReactNotesDescription: "Frontend de mi app de notas, reconstruido con React. Incluye rutas protegidas, autenticación con JWT y actualizaciones dinámicas. Usa localStorage y se conecta a una API backend para gestionar notas de forma segura.",
        projectReactDashboardTitle: "Dashboard Administrativo (React + Tailwind)",
        projectReactDashboardDescription: "Panel de administración responsivo hecho con React y Tailwind CSS. Incluye layouts reutilizables, navegación lateral, gráficos (Chart.js o Recharts) y carga dinámica de datos, ya sea simulados o reales.",

        //Footer / Contact
        contactTitle: "Contacto",
        contactParagraph: "Siempre estoy abierto a nuevas oportunidades — remotas o presenciales — y encantado de conectar.",
        emailAddress: "Correo: camylo182@gmail.com",
        gitHubProfile: "Perfil de GitHub: ",
        linkedInProfile: "Perfil de LinkedIn: ",
        footerLine: "© 2025 Richard Camilo Morales — Diseñado con el corazón, construido con código.",

        //Links
        liveDemo: "🔗 Ver Demo",
        github: "💻 GitHub",
    }
}

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
                element.innerHTML = translationText.replace(/\n/g, "<br>")
            }
            else {
                element.textContent = translationText;
            }
        }

    });

    toggleBtn.innerHTML = currentLanguage === "en"
        ? '<i class="fa-solid fa-globe"></i> <span class="active-lang"> EN </span> | ES'
        : '<i class="fa-solid fa-globe"></i> <span class="active-lang"> ES </span> | EN';

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