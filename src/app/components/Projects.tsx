import { motion } from 'motion/react';
import { useInView } from './useInView';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { useState } from 'react';
import { ProjectModal } from './ProjectModal';

export function Projects() {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projectsData = [
    {
      title: 'My Garage',
      description: "Application web complète pour gérer l'entretien de mes véhicules. Design créé sur Figma puis développé en React/TypeScript.",
      fullDescription: "My Garage est une application web que j'ai créée pour répondre à un besoin personnel : suivre et gérer l'entretien de ma voiture sans dépendre d'applications payantes ou d'abonnements coûteux.",
      image: 'https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3Njc4ODI2MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      context: "J'avais besoin d'une application pour tenir à jour les entretiens de ma voiture et suivre tous les travaux effectués. Cependant, toutes les applications disponibles nécessitaient un abonnement payant ou contenaient trop de publicités. Plutôt que de payer pour un service simple, j'ai décidé de créer ma propre solution - gratuite, personnalisée et sans publicités.",
      objectives: [
        "Créer une interface simple et intuitive pour enregistrer les entretiens",
        "Suivre l'historique complet des réparations et maintenances",
        "Recevoir des rappels pour les prochains entretiens",
        "Avoir une solution 100% gratuite et sans publicité",
        "Concevoir d'abord sur Figma pour une UX optimale"
      ],
      challenges: [
        "Premier projet complet de design UX/UI sur Figma",
        "Gestion de l'état et du stockage local des données",
        "Création d'un système de rappels efficace",
        "Déploiement et optimisation sur Vercel"
      ],
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Figma', 'Vercel', 'LocalStorage'],
      results: [
        "Application fonctionnelle utilisée quotidiennement",
        "Interface responsive parfaite sur mobile et desktop",
        "Économie de 50-100€/an d'abonnement",
        "Expérience acquise en design et développement full-stack"
      ],
      github: 'https://github.com/FarddownYG',
      demo: 'https://my-garage-uk9i.vercel.app/',
      demoLabel: "Voir l'app",
      gradient: 'from-blue-500 to-cyan-500',
      date: '2024',
    },
    {
      title: 'S.E.A.L - SSL Checker',
      description: "Outil professionnel de vérification SSL pour entreprises. Chef d'équipe d'un projet école devenu projet personnel ambitieux.",
      fullDescription: "S.E.A.L (Secure Expiry Alert Logging) est un projet que je mène en tant que chef d'équipe dans le cadre d'une matière à l'ESAIP, mais qui est devenu pour moi un véritable projet personnel. C'est un outil professionnel de vérification de certificats SSL destiné aux entreprises.",
      image: 'https://images.unsplash.com/photo-1631632286519-cb83e10e3d98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzc2wlMjBzZWN1cml0eSUyMGxvY2slMjBjZXJ0aWZpY2F0ZXxlbnwxfHx8fDE3Njc5Njc3Njd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      context: "Dans le cadre de mes études à l'ESAIP, j'ai pris le rôle de chef d'équipe pour un projet de matière. Plutôt que de faire un simple projet académique, j'ai voulu créer un véritable outil professionnel : un système de monitoring de certificats SSL pour aider les entreprises à éviter les expirations de certificats qui peuvent causer des pannes de sites web.",
      objectives: [
        "Diriger une équipe de développement comme chef de projet",
        "Créer un outil de monitoring SSL professionnel et fiable",
        "Implémenter un système d'alertes automatiques avant expiration",
        "Développer une interface dashboard pour visualiser tous les certificats",
        "Créer des logs détaillés pour le suivi et l'audit"
      ],
      challenges: [
        "Gestion d'équipe et coordination des tâches en tant que chef de projet",
        "Apprentissage approfondi du fonctionnement des certificats SSL/TLS",
        "Création d'un système de monitoring fiable et performant",
        "Architecture évolutive pour gérer des milliers de certificats",
        "Système d'alertes multi-canaux (email, notifications, etc.)"
      ],
      technologies: ['Python', 'React', 'TypeScript', 'PostgreSQL', 'SSL/TLS', 'Monitoring'],
      results: [
        "Application en cours de développement avec une équipe motivée",
        "Présence LinkedIn professionnelle du projet",
        "Prototype fonctionnel avec monitoring de base",
        "Expérience précieuse en gestion de projet et leadership",
        "Compétences avancées en sécurité SSL/TLS acquises"
      ],
      github: 'https://github.com/FarddownYG',
      demo: 'https://www.linkedin.com/in/seal-secure-expiry-alert-logging/',
      demoLabel: 'Voir LinkedIn',
      gradient: 'from-green-500 to-emerald-500',
      date: '2024 - En cours',
    },
    {
      title: '50+ Projets Python',
      description: "Collection diversifiée de projets Python : IA, jeux, outils de hacking (scan de ports, OSINT), automatisation et plus.",
      fullDescription: "Au fil de mon apprentissage et de mes expérimentations, j'ai développé plus de 50 projets Python couvrant des domaines variés : intelligence artificielle, création de jeux, outils de cybersécurité (hacking éthique), et bien plus encore.",
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      context: "Python est mon langage de prédilection pour l'expérimentation et l'apprentissage. J'ai développé une cinquantaine de projets dans des domaines très variés pour explorer différentes facettes de la programmation et approfondir mes compétences techniques.",
      objectives: [
        "Explorer divers domaines : IA, jeux, sécurité, automatisation",
        "Maîtriser Python et ses nombreuses bibliothèques",
        "Comprendre les fondamentaux de la cybersécurité (hacking éthique)",
        "Développer des outils pratiques et réutilisables",
        "Apprendre par la pratique et l'expérimentation"
      ],
      challenges: [
        "Apprentissage de nombreuses bibliothèques Python spécialisées",
        "Compréhension des concepts avancés (IA, networking, sécurité)",
        "Création d'outils de hacking éthique (scan de ports, OSINT)",
        "Développement de jeux avec logique complexe",
        "Gestion et organisation de nombreux projets différents"
      ],
      technologies: ['Python', 'TensorFlow/PyTorch', 'Pygame', 'Scapy', 'BeautifulSoup', 'Requests', 'NumPy', 'Pandas'],
      results: [
        "50+ projets Python fonctionnels sur GitHub",
        "Compétences solides en Python et ses écosystèmes",
        "Outils de hacking éthique : scanners de ports, outils OSINT",
        "Projets IA : machine learning, traitement de données",
        "Jeux complets avec interface graphique et gameplay",
        "Base de code réutilisable pour futurs projets"
      ],
      github: 'https://github.com/FarddownYG',
      demo: '#',
      gradient: 'from-yellow-500 to-orange-500',
      date: '2020 - 2024',
    },
    {
      title: "Système de Gestion d'Absences",
      description: "Application web pour gérer les absences dans plusieurs établissements avec base de données, authentification et tableaux de bord.",
      fullDescription: "Système complet de gestion des absences développé pour différents établissements scolaires, permettant aux étudiants et au personnel administratif de gérer efficacement les présences et absences.",
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      context: "J'ai été sollicité pour développer une solution moderne de gestion des absences pour plusieurs établissements. J'ai notamment intervenu à l'ESAIP qui avait besoin de digitaliser son système manuel et chronophage. J'ai développé cette application pour automatiser le processus et fournir des statistiques en temps réel.",
      objectives: [
        "Digitaliser complètement le système de gestion des absences",
        "Créer un tableau de bord avec statistiques en temps réel",
        "Implémenter un système d'authentification sécurisé",
        "Permettre la justification en ligne des absences",
        "Générer des rapports automatiques pour l'administration",
        "Adapter la solution pour différents établissements"
      ],
      challenges: [
        "Architecture de base de données complexe avec relations multiples",
        "Gestion des rôles et permissions (étudiants, professeurs, admin)",
        "Sécurisation des données sensibles des étudiants",
        "Optimisation des requêtes pour de grandes quantités de données",
        "Adaptation du système pour différents établissements"
      ],
      technologies: ['React', 'TypeScript', 'Python', 'PostgreSQL', 'FastAPI', 'JWT Auth'],
      results: [
        "Réduction de 80% du temps de traitement des absences (11h de travail par semaine)",
        "Interface intuitive adoptée rapidement par le personnel",
        "Génération automatique de rapports mensuels"
      ],
      github: 'https://github.com/FarddownYG',
      demo: 'https://round-mild-74549028.figma.site',
      demoLabel: "Voir l'app",
      gradient: 'from-purple-500 to-pink-500',
      date: '2024',
    },
    {
      title: 'CLASSOR - Mon Entreprise',
      description: 'Mon entreprise de création de solutions web. Site vitrine + projets clients dont un site professionnel pour infirmière.',
      fullDescription: "CLASSOR est mon entreprise de création de sites web, applications web et solutions digitales complètes. Le site vitrine présente mes services et mes réalisations pour attirer des clients professionnels.",
      image: 'https://images.unsplash.com/photo-1677469684112-5dfb3aa4d3df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc2NzkyNTQxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      context: "En tant que développeur freelance, j'ai créé CLASSOR, mon entreprise de solutions web professionnelles. J'avais besoin d'un site vitrine pour présenter mes services, attirer des clients et démarrer mon activité. CLASSOR compte déjà son premier client : un site web pour une infirmière libérale qui souhaitait développer sa présence en ligne.",
      objectives: [
        "Créer une identité visuelle professionnelle et moderne pour CLASSOR",
        "Développer un site vitrine pour présenter mes services",
        "Démontrer mes compétences en design UX/UI et développement",
        "Optimiser pour la conversion de prospects en clients",
        "Acquérir et livrer mes premiers projets clients avec succès",
        "Design 100% responsive et performant"
      ],
      challenges: [
        "Lancer une entreprise en tant qu'étudiant en alternance",
        "Équilibrer créativité et professionnalisme dans le design",
        "Créer des animations fluides sans impacter les performances",
        "Gestion complète d'un projet client de A à Z",
        "Respecter les exigences spécifiques du secteur médical (site infirmière)"
      ],
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Motion', 'Figma', 'Next.js', 'Vite', 'SEO'],
      results: [
        "Site vitrine CLASSOR déployé et accessible en ligne",
        "Design moderne validé par des professionnels",
        "Premier client acquis : site web pour infirmière libérale",
        "Site infirmière en cours de développement (design validé)",
        "Base solide pour développer l'activité de CLASSOR",
        "Expérience en gestion de projets clients et communication",
        "Portfolio enrichi avec projet secteur médical"
      ],
      github: 'https://github.com/FarddownYG',
      demo: 'https://rating-typo-75226292.figma.site',
      demoLabel: 'Voir le site',
      gradient: 'from-indigo-500 to-purple-500',
      date: '2024',
    },
  ];

  const openModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
    // Hide navbar
    const navbar = document.querySelector('nav');
    if (navbar) {
      navbar.style.display = 'none';
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
    // Show navbar
    const navbar = document.querySelector('nav');
    if (navbar) {
      navbar.style.display = '';
    }
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 md:py-32 bg-white dark:bg-gray-900 transition-colors"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mes <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Projets</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Une sélection de mes réalisations récentes combinant design, développement et fonctionnalités avancées
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-gray-200 dark:bg-gray-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity`}></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 text-indigo-700 dark:text-indigo-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="space-y-3">
                  <motion.button
                    onClick={() => openModal(project)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <Eye className="w-5 h-5" />
                    Voir plus
                  </motion.button>
                  
                  <div className="flex gap-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span className="font-medium">Code</span>
                    </motion.a>
                    {project.demo !== '#' && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="font-medium">{project.demoLabel || (project.demo.includes('figma') ? 'Figma' : 'Voir le site')}</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Vous voulez voir plus de mes réalisations ?
          </p>
          <motion.a
            href="https://github.com/FarddownYG"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-shadow"
          >
            <Github className="w-5 h-5" />
            Voir mon GitHub
          </motion.a>
        </motion.div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
}