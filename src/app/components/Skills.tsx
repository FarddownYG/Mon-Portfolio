import { motion } from 'motion/react';
import { useInView } from './useInView';
import {
  Code2,
  Database,
  Palette,
  Shield,
  GitBranch,
  Rocket,
  Figma,
  Lock,
} from 'lucide-react';
import { useEffect, useState } from 'react';

export function Skills() {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !animated) {
      setAnimated(true);
    }
  }, [isInView, animated]);

  const skills = [
    {
      category: 'Développement Frontend',
      icon: Code2,
      color: 'from-blue-500 to-cyan-500',
      comment: 'Responsable de la charte graphique chez CLASSOR, j\'ai développé de nombreux sites web et applications performantes avec des interfaces modernes et intuitives.',
      items: [
        { name: 'React / TypeScript (.tsx)', level: 60 },
        { name: 'Tailwind CSS', level: 55 },
        { name: 'JavaScript / HTML / CSS', level: 58 },
        { name: 'Motion / Animations', level: 50 },
      ],
    },
    {
      category: 'Développement Backend',
      icon: Database,
      color: 'from-green-500 to-teal-500',
      comment: 'Bien que je me concentre principalement sur le frontend et le design, j\'ai acquis de solides bases en développement backend pour créer des solutions complètes.',
      items: [
        { name: 'Python', level: 20 },
        { name: 'Node.js / Express', level: 18 },
        { name: 'PostgreSQL / Bases de données', level: 20 },
        { name: 'API REST', level: 22 },
      ],
    },
    {
      category: 'UX/UI Design',
      icon: Palette,
      color: 'from-pink-500 to-rose-500',
      comment: 'Ma plus grande force : créativité débordante et capacité à transformer des idées innovantes en designs d\'exception. Chaque projet est une opportunité de repousser les limites du design.',
      items: [
        { name: 'Figma', level: 70 },
        { name: 'Design System', level: 65 },
        { name: 'Prototypage', level: 68 },
        { name: 'Responsive Design', level: 62 },
      ],
    },
    {
      category: 'Cybersécurité (Formation autodidacte)',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      comment: 'En pleine formation à l\'ESAIP avec un apprentissage autodidacte intensif. Passionné par la sécurité, je développe activement mes compétences en hacking éthique et sécurité web.',
      items: [
        { name: 'Sécurité Web (bases)', level: 10 },
        { name: 'TryHackMe / Apprentissage', level: 12 },
        { name: 'Hacking éthique (OSINT, scan)', level: 10 },
        { name: 'Bonnes pratiques sécurité', level: 8 },
      ],
    },
  ];

  const tools = [
    { name: 'Git / GitHub', icon: GitBranch, color: 'text-orange-500' },
    { name: 'Vercel / Docker', icon: Rocket, color: 'text-blue-500' },
    { name: 'Figma', icon: Figma, color: 'text-purple-500' },
    { name: 'Security Tools', icon: Lock, color: 'text-red-500' },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 md:py-32 bg-gradient-to-br from-gray-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-indigo-950 dark:to-purple-950 transition-colors"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Compétences & <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Une expertise technique complète pour transformer vos idées en solutions performantes
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="p-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}>
                  <category.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold">{category.category}</h3>
              </div>

              <div className="space-y-6">
                {category.items.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={animated ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Comment */}
              <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
                {category.comment}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-3xl font-bold text-center mb-8">
            Outils & Plateformes
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg text-center group hover:shadow-2xl transition-all"
              >
                <tool.icon className={`w-12 h-12 mx-auto mb-4 ${tool.color} group-hover:scale-110 transition-transform`} />
                <p className="font-semibold text-gray-700 dark:text-gray-300">
                  {tool.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 p-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-4">Formation Continue</h3>
          <p className="text-lg max-w-3xl mx-auto">
            En tant qu'élève ingénieur à l'ESAIP, je reste constamment à jour avec les dernières 
            technologies et pratiques de sécurité. Je me forme également en autodidacte sur 
            <strong> TryHackMe</strong> pour approfondir mes connaissances en cybersécurité et hacking éthique. 
            Passionné par l'apprentissage continu, je développe mes compétences pour offrir les meilleures 
            solutions à mes clients.
          </p>
        </motion.div>
      </div>
    </section>
  );
}