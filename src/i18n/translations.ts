export type Language = 'es' | 'en'

export interface Job {
  company: string
  role: string
  period: string
  bullets: string[]
}

export interface Education {
  degree: string
  institution: string
  period: string
  note?: string
}

export interface Project {
  name: string
  description: string
  tech: string[]
  period: string
}

export interface SkillCategory {
  name: string
  items: string[]
}

export interface Translations {
  nav: {
    about: string
    experience: string
    skills: string
    projects: string
    contact: string
  }
  hero: {
    greeting: string
    role: string
    tagline: string
    ctaWork: string
    ctaContact: string
  }
  about: {
    title: string
    p1: string
    p2: string
    location: string
    email: string
    linkedin: string
  }
  experience: {
    title: string
    jobs: Job[]
    educationTitle: string
    education: Education[]
  }
  skills: {
    title: string
    categories: SkillCategory[]
  }
  projects: {
    title: string
    items: Project[]
  }
  contact: {
    title: string
    subtitle: string
    emailLabel: string
    linkedinLabel: string
    githubLabel: string
  }
  footer: {
    rights: string
  }
}

const es: Translations = {
  nav: {
    about: 'Sobre mí',
    experience: 'Experiencia',
    skills: 'Habilidades',
    projects: 'Proyectos',
    contact: 'Contacto',
  },
  hero: {
    greeting: 'Hola, soy',
    role: 'Fullstack Developer',
    tagline: 'Especializado en Node.js, APIs RESTful y PostgreSQL — construyo integraciones robustas y sistemas de alto impacto.',
    ctaWork: 'Ver mi trabajo',
    ctaContact: 'Hablemos',
  },
  about: {
    title: 'Sobre mí',
    p1: 'Desarrollador Fullstack con más de 7 años de experiencia construyendo APIs robustas, sistemas de integración y soluciones de base de datos en Node.js, TypeScript y PostgreSQL. He optimizado procesos críticos en salud y educación, logrando mejoras medibles en eficiencia operativa.',
    p2: 'Actualmente trabajo como freelance explorando el desarrollo móvil con Flutter e integraciones cloud en AWS. Me interesa la intersección entre software y hardware, lo que me ha llevado a construir proyectos propios de IoT y automatización.',
    location: 'Talca, Chile',
    email: 'me@carlosloyer.cl',
    linkedin: 'linkedin.com/in/carlosloyer',
  },
  experience: {
    title: 'Experiencia',
    jobs: [
      {
        company: 'Freelance',
        role: 'Fullstack & Mobile Developer',
        period: 'Jun 2025 – Presente',
        bullets: [
          'Aplicaciones móviles en Flutter con integración a APIs REST y manejo de estado con Riverpod',
          'Arquitecturas backend en Node.js con integración a servicios AWS',
          'Scraping estructurado, procesamiento de datos y reportería automatizada',
          'Sistemas de auditoría y validación de datos sensibles',
        ],
      },
      {
        company: 'Centro Médico del Trabajador',
        role: 'Fullstack Developer · Integraciones',
        period: 'Jun 2023 – Dic 2024',
        bullets: [
          'Integración de máquinas de rayos X con APIs RESTful, reduciendo tiempos de captura y entrega de imágenes en 30% en 4 meses',
          'Sistema de notificaciones en Node.js para pacientes, reduciendo la tasa de inasistencia en 30% en 3 meses',
          'Módulo predictivo de asistencia mediante consultas avanzadas en PostgreSQL, mejorando precisión en 30%',
          'Optimización de consultas que redujo tiempos de respuesta en 25% en solo 1 mes',
        ],
      },
      {
        company: 'Universidad Católica del Maule',
        role: 'Fullstack Developer',
        period: 'Mar 2019 – Ene 2023',
        bullets: [
          'Sistema de postulaciones académicas especiales, reduciendo la carga administrativa en 30% por proceso',
          'Optimización de programación académica en Node.js, reduciendo tiempos de gestión en 25%',
          'Colaboración directa con alta dirección para definición y priorización de funcionalidades críticas',
        ],
      },
    ],
    educationTitle: 'Formación',
    education: [
      {
        degree: 'Diplomado en Ciencia de Datos',
        institution: 'Universidad Católica del Maule',
        period: 'Abr 2023 – Oct 2023',
      },
      {
        degree: 'Licenciatura en Ingeniería en Informática',
        institution: 'INACAP',
        period: '2015 – 2018',
        note: 'GPA 6.8/7.0 · Mejor alumno de la generación',
      },
    ],
  },
  skills: {
    title: 'Habilidades',
    categories: [
      { name: 'Backend', items: ['Node.js', 'TypeScript', 'Express.js', 'Python', 'API REST'] },
      { name: 'Frontend', items: ['React', 'Vue.js', 'HTML/CSS', 'JavaScript'] },
      { name: 'Mobile', items: ['Flutter', 'Dart', 'Android SDK', 'Riverpod'] },
      { name: 'Bases de datos', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Oracle SQL'] },
      { name: 'Cloud & DevOps', items: ['AWS', 'Docker', 'CI/CD', 'GitHub'] },
      { name: 'Metodologías', items: ['Scrum', 'Git', 'Postman', 'Jira'] },
    ],
  },
  projects: {
    title: 'Proyectos',
    items: [
      {
        name: 'SmartHome Control App',
        description: 'Aplicación móvil en Flutter para centralizar el control de dispositivos IoT del hogar. Arquitectura modular con actualizaciones en tiempo real mediante Riverpod.',
        tech: ['Flutter', 'Dart', 'Riverpod', 'REST API', 'IoT'],
        period: 'Ene 2024 – Presente',
      },
      {
        name: 'Sistema de Riego Automatizado',
        description: 'Sistema IoT con sensores de humedad y control automático de válvulas solenoides. Lógica programática basada en condiciones ambientales en tiempo real.',
        tech: ['IoT', 'Node.js', 'Sensores', 'Hardware'],
        period: 'Ene 2024 – Presente',
      },
      {
        name: 'Horno Fundidor Sensorizado',
        description: 'Horno con sistema de ventilación automatizado y control de temperatura en tiempo real mediante termocupla. Integración completa hardware/software.',
        tech: ['Hardware', 'Sensores', 'Arduino', 'Control de temperatura'],
        period: 'Ene 2024 – Presente',
      },
    ],
  },
  contact: {
    title: '¿Hablamos?',
    subtitle: 'Disponible para proyectos freelance y oportunidades interesantes. No dudes en escribirme.',
    emailLabel: 'Enviar email',
    linkedinLabel: 'LinkedIn',
    githubLabel: 'GitHub',
  },
  footer: {
    rights: 'Todos los derechos reservados.',
  },
}

const en: Translations = {
  nav: {
    about: 'About',
    experience: 'Experience',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
  },
  hero: {
    greeting: "Hi, I'm",
    role: 'Fullstack Developer',
    tagline: 'Specialized in Node.js, RESTful APIs, and PostgreSQL — I build robust integrations and high-impact systems.',
    ctaWork: 'View my work',
    ctaContact: "Let's talk",
  },
  about: {
    title: 'About me',
    p1: 'Fullstack Developer with over 7 years of experience building robust APIs, integration systems, and database solutions using Node.js, TypeScript, and PostgreSQL. I have optimized critical processes in healthcare and education, achieving measurable improvements in operational efficiency.',
    p2: "Currently working as a freelancer, exploring mobile development with Flutter and cloud integrations on AWS. I'm interested in the intersection of software and hardware, which has led me to build personal IoT and automation projects.",
    location: 'Talca, Chile',
    email: 'me@carlosloyer.cl',
    linkedin: 'linkedin.com/in/carlosloyer',
  },
  experience: {
    title: 'Experience',
    jobs: [
      {
        company: 'Freelance',
        role: 'Fullstack & Mobile Developer',
        period: 'Jun 2025 – Present',
        bullets: [
          'Flutter mobile apps with REST API integration and state management using Riverpod',
          'Backend architectures in Node.js with AWS service integration',
          'Structured scraping, data processing, and automated reporting',
          'Audit systems and sensitive data validation',
        ],
      },
      {
        company: 'Centro Médico del Trabajador',
        role: 'Fullstack Developer · Integrations',
        period: 'Jun 2023 – Dec 2024',
        bullets: [
          'X-ray machine integration with RESTful APIs, reducing image capture and delivery times by 30% in 4 months',
          'Patient notification system in Node.js, reducing no-show rates by 30% in 3 months',
          'Predictive attendance module via advanced PostgreSQL queries, improving accuracy by 30%',
          'Query optimization reducing response times by 25% in just 1 month',
        ],
      },
      {
        company: 'Universidad Católica del Maule',
        role: 'Fullstack Developer',
        period: 'Mar 2019 – Jan 2023',
        bullets: [
          'Special academic application system, reducing administrative workload by 30% per process',
          'Academic scheduling optimization in Node.js, reducing management times by 25%',
          'Direct collaboration with senior management for critical feature definition and prioritization',
        ],
      },
    ],
    educationTitle: 'Education',
    education: [
      {
        degree: 'Graduate Diploma in Data Science',
        institution: 'Universidad Católica del Maule',
        period: 'Apr 2023 – Oct 2023',
      },
      {
        degree: 'B.Sc. in Computer Engineering',
        institution: 'INACAP',
        period: '2015 – 2018',
        note: 'GPA 6.8/7.0 · Best student of the cohort',
      },
    ],
  },
  skills: {
    title: 'Skills',
    categories: [
      { name: 'Backend', items: ['Node.js', 'TypeScript', 'Express.js', 'Python', 'REST API'] },
      { name: 'Frontend', items: ['React', 'Vue.js', 'HTML/CSS', 'JavaScript'] },
      { name: 'Mobile', items: ['Flutter', 'Dart', 'Android SDK', 'Riverpod'] },
      { name: 'Databases', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Oracle SQL'] },
      { name: 'Cloud & DevOps', items: ['AWS', 'Docker', 'CI/CD', 'GitHub'] },
      { name: 'Methodologies', items: ['Scrum', 'Git', 'Postman', 'Jira'] },
    ],
  },
  projects: {
    title: 'Projects',
    items: [
      {
        name: 'SmartHome Control App',
        description: 'Flutter mobile app to centralize control of home IoT devices. Modular architecture with real-time state management using Riverpod.',
        tech: ['Flutter', 'Dart', 'Riverpod', 'REST API', 'IoT'],
        period: 'Jan 2024 – Present',
      },
      {
        name: 'Automated Irrigation System',
        description: 'IoT system with humidity sensors and automatic solenoid valve control. Programmatic logic based on real-time environmental conditions.',
        tech: ['IoT', 'Node.js', 'Sensors', 'Hardware'],
        period: 'Jan 2024 – Present',
      },
      {
        name: 'Sensorized Foundry Furnace',
        description: 'Furnace with automated ventilation system and real-time temperature control via thermocouple. Full hardware/software integration for continuous monitoring.',
        tech: ['Hardware', 'Sensors', 'Arduino', 'Temperature Control'],
        period: 'Jan 2024 – Present',
      },
    ],
  },
  contact: {
    title: "Let's talk",
    subtitle: 'Available for freelance projects and interesting opportunities. Feel free to reach out.',
    emailLabel: 'Send email',
    linkedinLabel: 'LinkedIn',
    githubLabel: 'GitHub',
  },
  footer: {
    rights: 'All rights reserved.',
  },
}

export const translations: Record<Language, Translations> = { es, en }
