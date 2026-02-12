import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'fr' : 'en'));
  };

  const t = (key: string) => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}

const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
      cv: 'Resume',
    },
    hero: {
      greeting: 'Hello, I am',
      subtitle: 'Engineering Student at ESAIP • Freelancer',
      role1: 'Web Developer',
      role2: 'UX/UI Designer',
      role3: 'Python & TypeScript',
      cta1: 'View my projects',
      cta2: 'Contact me',
    },
    about: {
      title: 'About',
      titleHighlight: 'me',
      subtitle: 'Passionate about technology, I combine cybersecurity expertise, modern web development, and UX/UI design to create innovative and secure solutions.',
      highlight1Title: 'Engineering Student & Freelancer',
      highlight1Desc: '2nd year at ESAIP after a Technical Baccalaureate, while developing my freelance activity',
      highlight2Title: 'Cybersecurity Learning',
      highlight2Desc: 'Currently specializing in cybersecurity, learning the fundamentals of computer security',
      highlight3Title: 'Full Stack Developer',
      highlight3Desc: 'Creating websites and applications with React, TypeScript, Python, and modern technologies',
      highlight4Title: 'UX/UI Designer',
      highlight4Desc: 'Designing elegant user interfaces with Figma for an optimal experience',
      journeyTitle: 'My Journey',
      journeyP1: 'Currently in my <strong>2nd year of engineering at ESAIP</strong> and <strong>freelancer</strong>, I started with a <strong>Technical Baccalaureate</strong> which gave me a solid foundation to continue in digital technology and develop my professional activity.',
      journeyP2: 'Passionate about <strong>web development</strong>, I master Python and TypeScript (.tsx) to create modern and performant web applications. I am currently learning <strong>cybersecurity</strong> to understand and secure computer systems.',
      journeyP3: 'As a <strong>full stack developer</strong> and <strong>UX/UI designer</strong>, I design with Figma then develop elegant and intuitive interfaces. My goal is to create web solutions that combine visual beauty and technical robustness.',
      journeyP4: 'I offer <strong>complete web solutions</strong>: website creation, web applications, interface design, and automation with self-hosted n8n to optimize your business processes.',
    },
    projects: {
      title: 'My',
      titleHighlight: 'Projects',
      subtitle: 'A selection of my recent achievements combining design, development, and advanced features',
      viewMore: 'View more',
      code: 'Code',
      seeApp: "View app",
      seeSite: "View site",
      seeLinkedIn: "View LinkedIn",
      figma: 'Figma',
      moreText: 'Want to see more of my work?',
      viewGithub: 'View my GitHub',
      myGarage: {
        title: 'My Garage',
        description: 'Complete web application to manage vehicle maintenance. Design created on Figma then developed in React/TypeScript.',
        fullDescription: "My Garage is a web application I created to meet a personal need: track and manage my car's maintenance without depending on expensive paid apps or subscriptions.",
        context: "I needed an app to keep track of my car's maintenance and all the work done. However, all available apps required a paid subscription or contained too many ads. Rather than paying for a simple service, I decided to create my own solution - free, customized, and ad-free.",
        objectives: [
          'Create a simple and intuitive interface to record maintenance',
          'Track complete history of repairs and maintenance',
          'Receive reminders for upcoming maintenance',
          'Have a 100% free and ad-free solution',
          'Design first on Figma for optimal UX',
        ],
        challenges: [
          'First complete UX/UI design project on Figma',
          'State management and local data storage',
          'Creating an efficient reminder system',
          'Deployment and optimization on Vercel',
        ],
        results: [
          'Functional application used daily',
          'Perfect responsive interface on mobile and desktop',
          'Saving €50-100/year in subscription fees',
          'Experience gained in full-stack design and development',
        ],
      },
      seal: {
        title: 'S.E.A.L - SSL Checker',
        description: 'Professional SSL verification tool for businesses. Team leader of a school project that became an ambitious personal project.',
        fullDescription: 'S.E.A.L (Secure Expiry Alert Logging) is a project I lead as a team leader as part of a course at ESAIP, but which has become a real personal project for me. It is a professional SSL certificate verification tool for businesses.',
        context: "As part of my studies at ESAIP, I took the role of team leader for a course project. Rather than just doing a simple academic project, I wanted to create a real professional tool: an SSL certificate monitoring system to help businesses avoid certificate expirations that can cause website outages.",
        objectives: [
          'Lead a development team as project manager',
          'Create a professional and reliable SSL monitoring tool',
          'Implement automatic alert system before expiration',
          'Develop a dashboard interface to visualize all certificates',
          'Create detailed logs for tracking and auditing',
        ],
        challenges: [
          'Team management and task coordination as project leader',
          'In-depth learning of SSL/TLS certificate operation',
          'Creating a reliable and performant monitoring system',
          'Scalable architecture to handle thousands of certificates',
          'Multi-channel alert system (email, notifications, etc.)',
        ],
        results: [
          'Application under development with a motivated team',
          'Professional LinkedIn presence of the project',
          'Functional prototype with basic monitoring',
          'Valuable experience in project management and leadership',
          'Advanced skills in SSL/TLS security acquired',
        ],
      },
      python: {
        title: '50+ Python Projects',
        description: 'Diverse collection of Python projects: AI, games, hacking tools (port scanning, OSINT), automation, and more.',
        fullDescription: 'Throughout my learning and experiments, I have developed over 50 Python projects covering various fields: artificial intelligence, game creation, cybersecurity tools (ethical hacking), and much more.',
        context: 'Python is my language of choice for experimentation and learning. I have developed about fifty projects in very varied fields to explore different facets of programming and deepen my technical skills.',
        objectives: [
          'Explore various fields: AI, games, security, automation',
          'Master Python and its many libraries',
          'Understand the fundamentals of cybersecurity (ethical hacking)',
          'Develop practical and reusable tools',
          'Learn by practice and experimentation',
        ],
        challenges: [
          'Learning many specialized Python libraries',
          'Understanding advanced concepts (AI, networking, security)',
          'Creating ethical hacking tools (port scanning, OSINT)',
          'Game development with complex logic',
          'Managing and organizing many different projects',
        ],
        results: [
          '50+ functional Python projects on GitHub',
          'Solid skills in Python and its ecosystems',
          'Ethical hacking tools: port scanners, OSINT tools',
          'AI projects: machine learning, data processing',
          'Complete games with GUI and gameplay',
          'Reusable code base for future projects',
        ],
      },
      absences: {
        title: 'Absence Management System',
        description: 'Web application to manage absences in multiple schools with database, authentication, and dashboards.',
        fullDescription: 'Complete absence management system developed for different educational institutions, allowing students and administrative staff to efficiently manage attendance and absences.',
        context: "I was asked to develop a modern absence management solution for several institutions. I notably worked at ESAIP which needed to digitize its manual and time-consuming system. I developed this application to automate the process and provide real-time statistics.",
        objectives: [
          'Completely digitize the absence management system',
          'Create a dashboard with real-time statistics',
          'Implement a secure authentication system',
          'Allow online justification of absences',
          'Generate automatic reports for administration',
          'Adapt the solution for different institutions',
        ],
        challenges: [
          'Complex database architecture with multiple relationships',
          'Role and permission management (students, teachers, admin)',
          'Securing sensitive student data',
          'Query optimization for large amounts of data',
          'System adaptation for different institutions',
        ],
        results: [
          '80% reduction in absence processing time (11 hours of work per week)',
          'Intuitive interface quickly adopted by staff',
          'Automatic generation of monthly reports',
        ],
      },
      classor: {
        title: 'CLASSOR - My Company',
        description: 'My web solutions company. Showcase site + client projects including a professional site for a nurse.',
        fullDescription: 'CLASSOR is my company for creating websites, web applications, and complete digital solutions. The showcase site presents my services and achievements to attract professional clients.',
        context: "As a freelance developer, I created CLASSOR, my professional web solutions company. I needed a showcase site to present my services, attract clients, and start my business. CLASSOR already has its first client: a website for a freelance nurse who wanted to develop her online presence.",
        objectives: [
          'Create a professional and modern visual identity for CLASSOR',
          'Develop a showcase site to present my services',
          'Demonstrate my UX/UI design and development skills',
          'Optimize for prospect to client conversion',
          'Acquire and deliver my first client projects successfully',
          '100% responsive and performant design',
        ],
        challenges: [
          'Launching a company as an apprentice student',
          'Balancing creativity and professionalism in design',
          'Creating smooth animations without impacting performance',
          'Complete management of a client project from A to Z',
          'Meeting specific requirements of the medical sector (nurse site)',
        ],
        results: [
          'CLASSOR showcase site deployed and accessible online',
          'Modern design validated by professionals',
          'First client acquired: website for freelance nurse',
          'Nurse site under development (design validated)',
          'Solid foundation to develop CLASSOR activity',
          'Experience in client project management and communication',
          'Portfolio enriched with medical sector project',
        ],
      },
    },
    skills: {
      title: 'My',
      titleHighlight: 'Skills',
      subtitle: 'Technical expertise and tools I master for creating modern and performant solutions',
      frontend: 'Frontend',
      backend: 'Backend',
      tools: 'Tools & Design',
      other: 'Other Skills',
    },
    contact: {
      title: 'Get in',
      titleHighlight: 'Touch',
      subtitle: "Have a project in mind? I'm available for freelance work and exciting opportunities!",
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      sending: 'Sending...',
      success: 'Message sent successfully!',
      error: 'Failed to send message. Please try again.',
      directContact: 'Direct Contact',
      location: 'Location',
      locationValue: 'Angers, France',
      availability: 'Availability',
      availabilityValue: 'Available for freelance',
      social: 'Social Networks',
    },
    footer: {
      rights: 'All rights reserved.',
      madeWith: 'Made with',
      by: 'by',
    },
    modal: {
      context: 'Context',
      objectives: 'Objectives',
      challenges: 'Technical Challenges',
      technologies: 'Technologies Used',
      results: 'Results & Impact',
      viewCode: 'View Code',
      viewDemo: 'View Demo',
      viewLinkedIn: 'View on LinkedIn',
      close: 'Close',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      projects: 'Projets',
      skills: 'Compétences',
      contact: 'Contact',
      cv: 'CV',
    },
    hero: {
      greeting: 'Bonjour, je suis',
      subtitle: 'Élève Ingénieur à l\'ESAIP • Auto-Entrepreneur',
      role1: 'Développeur Web',
      role2: 'UX/UI Designer',
      role3: 'Python & TypeScript',
      cta1: 'Voir mes projets',
      cta2: 'Contactez-moi',
    },
    about: {
      title: 'À propos de',
      titleHighlight: 'moi',
      subtitle: 'Passionné par la technologie, je combine expertise technique en cybersécurité, développement web moderne et design UX/UI pour créer des solutions innovantes et sécurisées.',
      highlight1Title: 'Élève Ingénieur & Auto-Entrepreneur',
      highlight1Desc: 'En 2ème année à l\'ESAIP après un Bac Technologique, je développe en parallèle mon activité d\'auto-entrepreneur',
      highlight2Title: 'Apprentissage Cybersécurité',
      highlight2Desc: 'En cours de spécialisation en cybersécurité, j\'apprends les fondamentaux de la sécurité informatique',
      highlight3Title: 'Développeur Full Stack',
      highlight3Desc: 'Création de sites web et applications avec React, TypeScript, Python et les technologies modernes',
      highlight4Title: 'UX/UI Designer',
      highlight4Desc: 'Conception d\'interfaces utilisateur élégantes avec Figma pour une expérience optimale',
      journeyTitle: 'Mon Parcours',
      journeyP1: 'Actuellement en <strong>2ème année d\'ingénieur à l\'ESAIP</strong> et <strong>auto-entrepreneur</strong>, j\'ai commencé mon parcours avec un <strong>Bac Technologique</strong> qui m\'a donné les bases solides pour poursuivre dans le numérique et développer mon activité professionnelle.',
      journeyP2: 'Passionné par le <strong>développement web</strong>, je maîtrise Python et TypeScript (.tsx) pour créer des applications web modernes et performantes. Je suis actuellement en apprentissage de la <strong> cybersécurité</strong> pour comprendre et sécuriser les systèmes informatiques.',
      journeyP3: 'En tant que <strong>développeur full stack</strong> et <strong>designer UX/UI</strong>, je conçois avec Figma puis développe des interfaces élégantes et intuitives. Mon objectif est de créer des solutions web qui combinent beauté visuelle et robustesse technique.',
      journeyP4: 'Je propose des <strong>solutions web complètes</strong> : création de sites web, d\'applications web, design d\'interfaces, et automatisation avec n8n auto-hébergé pour optimiser vos processus métier.',
    },
    projects: {
      title: 'Mes',
      titleHighlight: 'Projets',
      subtitle: 'Une sélection de mes réalisations récentes combinant design, développement et fonctionnalités avancées',
      viewMore: 'Voir plus',
      code: 'Code',
      seeApp: "Voir l'app",
      seeSite: "Voir le site",
      seeLinkedIn: "Voir LinkedIn",
      figma: 'Figma',
      moreText: 'Vous voulez voir plus de mes réalisations ?',
      viewGithub: 'Voir mon GitHub',
      myGarage: {
        title: 'My Garage',
        description: 'Application web complète pour gérer l\'entretien de mes véhicules. Design créé sur Figma puis développé en React/TypeScript.',
        fullDescription: 'My Garage est une application web que j\'ai créée pour répondre à un besoin personnel : suivre et gérer l\'entretien de ma voiture sans dépendre d\'applications payantes ou d\'abonnements coûteux.',
        context: 'J\'avais besoin d\'une application pour tenir à jour les entretiens de ma voiture et suivre tous les travaux effectués. Cependant, toutes les applications disponibles nécessitaient un abonnement payant ou contenaient trop de publicités. Plutôt que de payer pour un service simple, j\'ai décidé de créer ma propre solution - gratuite, personnalisée et sans publicités.',
        objectives: [
          'Créer une interface simple et intuitive pour enregistrer les entretiens',
          'Suivre l\'historique complet des réparations et maintenances',
          'Recevoir des rappels pour les prochains entretiens',
          'Avoir une solution 100% gratuite et sans publicité',
          'Concevoir d\'abord sur Figma pour une UX optimale',
        ],
        challenges: [
          'Premier projet complet de design UX/UI sur Figma',
          'Gestion de l\'état et du stockage local des données',
          'Création d\'un système de rappels efficace',
          'Déploiement et optimisation sur Vercel',
        ],
        results: [
          'Application fonctionnelle utilisée quotidiennement',
          'Interface responsive parfaite sur mobile et desktop',
          'Économie de 50-100€/an d\'abonnement',
          'Expérience acquise en design et développement full-stack',
        ],
      },
      seal: {
        title: 'S.E.A.L - SSL Checker',
        description: 'Outil professionnel de vérification SSL pour entreprises. Chef d\'équipe d\'un projet école devenu projet personnel ambitieux.',
        fullDescription: 'S.E.A.L (Secure Expiry Alert Logging) est un projet que je mène en tant que chef d\'équipe dans le cadre d\'une matière à l\'ESAIP, mais qui est devenu pour moi un véritable projet personnel. C\'est un outil professionnel de vérification de certificats SSL destiné aux entreprises.',
        context: 'Dans le cadre de mes études à l\'ESAIP, j\'ai pris le rôle de chef d\'équipe pour un projet de matière. Plutôt que de faire un simple projet académique, j\'ai voulu créer un véritable outil professionnel : un système de monitoring de certificats SSL pour aider les entreprises à éviter les expirations de certificats qui peuvent causer des pannes de sites web.',
        objectives: [
          'Diriger une équipe de développement comme chef de projet',
          'Créer un outil de monitoring SSL professionnel et fiable',
          'Implémenter un système d\'alertes automatiques avant expiration',
          'Développer une interface dashboard pour visualiser tous les certificats',
          'Créer des logs détaillés pour le suivi et l\'audit',
        ],
        challenges: [
          'Gestion d\'équipe et coordination des tâches en tant que chef de projet',
          'Apprentissage approfondi du fonctionnement des certificats SSL/TLS',
          'Création d\'un système de monitoring fiable et performant',
          'Architecture évolutive pour gérer des milliers de certificats',
          'Système d\'alertes multi-canaux (email, notifications, etc.)',
        ],
        results: [
          'Application en cours de développement avec une équipe motivée',
          'Présence LinkedIn professionnelle du projet',
          'Prototype fonctionnel avec monitoring de base',
          'Expérience précieuse en gestion de projet et leadership',
          'Compétences avancées en sécurité SSL/TLS acquises',
        ],
      },
      python: {
        title: '50+ Projets Python',
        description: 'Collection diversifiée de projets Python : IA, jeux, outils de hacking (scan de ports, OSINT), automatisation et plus.',
        fullDescription: 'Au fil de mon apprentissage et de mes expérimentations, j\'ai développé plus de 50 projets Python couvrant des domaines variés : intelligence artificielle, création de jeux, outils de cybersécurité (hacking éthique), et bien plus encore.',
        context: 'Python est mon langage de prédilection pour l\'expérimentation et l\'apprentissage. J\'ai développé une cinquantaine de projets dans des domaines très variés pour explorer différentes facettes de la programmation et approfondir mes compétences techniques.',
        objectives: [
          'Explorer divers domaines : IA, jeux, sécurité, automatisation',
          'Maîtriser Python et ses nombreuses bibliothèques',
          'Comprendre les fondamentaux de la cybersécurité (hacking éthique)',
          'Développer des outils pratiques et réutilisables',
          'Apprendre par la pratique et l\'expérimentation',
        ],
        challenges: [
          'Apprentissage de nombreuses bibliothèques Python spécialisées',
          'Compréhension des concepts avancés (IA, networking, sécurité)',
          'Création d\'outils de hacking éthique (scan de ports, OSINT)',
          'Développement de jeux avec logique complexe',
          'Gestion et organisation de nombreux projets différents',
        ],
        results: [
          '50+ projets Python fonctionnels sur GitHub',
          'Compétences solides en Python et ses écosystèmes',
          'Outils de hacking éthique : scanners de ports, outils OSINT',
          'Projets IA : machine learning, traitement de données',
          'Jeux complets avec interface graphique et gameplay',
          'Base de code réutilisable pour futurs projets',
        ],
      },
      absences: {
        title: 'Système de Gestion d\'Absences',
        description: 'Application web pour gérer les absences dans plusieurs établissements avec base de données, authentification et tableaux de bord.',
        fullDescription: 'Système complet de gestion des absences développé pour différents établissements scolaires, permettant aux étudiants et au personnel administratif de gérer efficacement les présences et absences.',
        context: 'J\'ai été sollicité pour développer une solution moderne de gestion des absences pour plusieurs établissements. J\'ai notamment intervenu à l\'ESAIP qui avait besoin de digitaliser son système manuel et chronophage. J\'ai développé cette application pour automatiser le processus et fournir des statistiques en temps réel.',
        objectives: [
          'Digitaliser complètement le système de gestion des absences',
          'Créer un tableau de bord avec statistiques en temps réel',
          'Implémenter un système d\'authentification sécurisé',
          'Permettre la justification en ligne des absences',
          'Générer des rapports automatiques pour l\'administration',
          'Adapter la solution pour différents établissements',
        ],
        challenges: [
          'Architecture de base de données complexe avec relations multiples',
          'Gestion des rôles et permissions (étudiants, professeurs, admin)',
          'Sécurisation des données sensibles des étudiants',
          'Optimisation des requêtes pour de grandes quantités de données',
          'Adaptation du système pour différents établissements',
        ],
        results: [
          'Réduction de 80% du temps de traitement des absences (11h de travail par semaine)',
          'Interface intuitive adoptée rapidement par le personnel',
          'Génération automatique de rapports mensuels',
        ],
      },
      classor: {
        title: 'CLASSOR - Mon Entreprise',
        description: 'Mon entreprise de création de solutions web. Site vitrine + projets clients dont un site professionnel pour infirmière.',
        fullDescription: 'CLASSOR est mon entreprise de création de sites web, applications web et solutions digitales complètes. Le site vitrine présente mes services et mes réalisations pour attirer des clients professionnels.',
        context: 'En tant que développeur freelance, j\'ai créé CLASSOR, mon entreprise de solutions web professionnelles. J\'avais besoin d\'un site vitrine pour présenter mes services, attirer des clients et démarrer mon activité. CLASSOR compte déjà son premier client : un site web pour une infirmière libérale qui souhaitait développer sa présence en ligne.',
        objectives: [
          'Créer une identité visuelle professionnelle et moderne pour CLASSOR',
          'Développer un site vitrine pour présenter mes services',
          'Démontrer mes compétences en design UX/UI et développement',
          'Optimiser pour la conversion de prospects en clients',
          'Acquérir et livrer mes premiers projets clients avec succès',
          'Design 100% responsive et performant',
        ],
        challenges: [
          'Lancer une entreprise en tant qu\'étudiant en alternance',
          'Équilibrer créativité et professionnalisme dans le design',
          'Créer des animations fluides sans impacter les performances',
          'Gestion complète d\'un projet client de A à Z',
          'Respecter les exigences spécifiques du secteur médical (site infirmière)',
        ],
        results: [
          'Site vitrine CLASSOR déployé et accessible en ligne',
          'Design moderne validé par des professionnels',
          'Premier client acquis : site web pour infirmière libérale',
          'Site infirmière en cours de développement (design validé)',
          'Base solide pour développer l\'activité de CLASSOR',
          'Expérience en gestion de projets clients et communication',
          'Portfolio enrichi avec projet secteur médical',
        ],
      },
    },
    skills: {
      title: 'Mes',
      titleHighlight: 'Compétences',
      subtitle: 'Expertise technique et outils que je maîtrise pour créer des solutions modernes et performantes',
      frontend: 'Frontend',
      backend: 'Backend',
      tools: 'Outils & Design',
      other: 'Autres Compétences',
    },
    contact: {
      title: 'Contactez-',
      titleHighlight: 'moi',
      subtitle: 'Un projet en tête ? Je suis disponible pour du travail freelance et des opportunités passionnantes !',
      name: 'Nom',
      email: 'Email',
      message: 'Message',
      send: 'Envoyer le message',
      sending: 'Envoi en cours...',
      success: 'Message envoyé avec succès !',
      error: 'Échec de l\'envoi du message. Veuillez réessayer.',
      directContact: 'Contact Direct',
      location: 'Localisation',
      locationValue: 'Angers, France',
      availability: 'Disponibilité',
      availabilityValue: 'Disponible en freelance',
      social: 'Réseaux Sociaux',
    },
    footer: {
      rights: 'Tous droits réservés.',
      madeWith: 'Fait avec',
      by: 'par',
    },
    modal: {
      context: 'Contexte',
      objectives: 'Objectifs',
      challenges: 'Défis Techniques',
      technologies: 'Technologies Utilisées',
      results: 'Résultats & Impact',
      viewCode: 'Voir le Code',
      viewDemo: 'Voir la Démo',
      viewLinkedIn: 'Voir sur LinkedIn',
      close: 'Fermer',
    },
  },
};
