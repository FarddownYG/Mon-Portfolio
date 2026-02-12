import { motion } from 'motion/react';
import { useInView } from './useInView';
import { Shield, Code, Palette, GraduationCap } from 'lucide-react';

export function About() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const highlights = [
    {
      icon: GraduationCap,
      title: "Élève Ingénieur & Auto-Entrepreneur",
      description: "En 2ème année à l'ESAIP après un Bac Technologique, je développe en parallèle mon activité d'auto-entrepreneur",
    },
    {
      icon: Shield,
      title: 'Apprentissage Cybersécurité',
      description: "En cours de spécialisation en cybersécurité, j'apprends les fondamentaux de la sécurité informatique",
    },
    {
      icon: Code,
      title: 'Développeur Full Stack',
      description: 'Création de sites web et applications avec React, TypeScript, Python et les technologies modernes',
    },
    {
      icon: Palette,
      title: 'UX/UI Designer',
      description: "Conception d'interfaces utilisateur élégantes avec Figma pour une expérience optimale",
    },
  ];

  return (
    <section
      id="about"
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
            À propos de <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">moi</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionné par la technologie, je combine expertise technique en cybersécurité, 
            développement web moderne et design UX/UI pour créer des solutions innovantes et sécurisées.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, boxShadow: '0 20px 60px rgba(99, 102, 241, 0.1)' }}
              className="p-8 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-800 dark:to-indigo-900/20 rounded-2xl border border-gray-200 dark:border-gray-700 transition-all"
            >
              <div className="w-14 h-14 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Mon Parcours</h3>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                Actuellement en <strong>2ème année d'ingénieur à l'ESAIP</strong> et <strong>auto-entrepreneur</strong>, 
                j'ai commencé mon parcours avec un <strong>Bac Technologique</strong> qui m'a donné les bases solides 
                pour poursuivre dans le numérique et développer mon activité professionnelle.
              </p>
              <p>
                Passionné par le <strong>développement web</strong>, je maîtrise Python et TypeScript (.tsx) pour créer 
                des applications web modernes et performantes. Je suis actuellement en apprentissage de la 
                <strong> cybersécurité</strong> pour comprendre et sécuriser les systèmes informatiques.
              </p>
              <p>
                En tant que <strong>développeur full stack</strong> et <strong>designer UX/UI</strong>, je conçois avec Figma 
                puis développe des interfaces élégantes et intuitives. Mon objectif est de créer des solutions web 
                qui combinent beauté visuelle et robustesse technique.
              </p>
              <p>
                Je propose des <strong>solutions web complètes</strong> : création de sites web, d'applications web, 
                design d'interfaces, et automatisation avec n8n auto-hébergé pour optimiser vos processus métier.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}