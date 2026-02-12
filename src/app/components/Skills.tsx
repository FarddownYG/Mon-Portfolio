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
import { useLanguage } from '../contexts/LanguageContext';
import { getSkillsData } from '../utils/translationHelpers';

export function Skills() {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const [animated, setAnimated] = useState(false);
  const { t, language } = useLanguage();

  useEffect(() => {
    if (isInView && !animated) {
      setAnimated(true);
    }
  }, [isInView, animated]);

  const iconMap: { [key: string]: any } = {
    Code2,
    Database,
    Palette,
    Shield,
  };

  const skills = getSkillsData(t, language).map(skill => ({
    ...skill,
    icon: iconMap[skill.icon],
  }));

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
            {t('skills.title')} <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">{t('skills.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('skills.subtitle')}
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
            {t('skills.tools')}
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
          <h3 className="text-3xl font-bold mb-4">{language === 'en' ? 'Continuous Learning' : 'Formation Continue'}</h3>
          <p className="text-lg max-w-3xl mx-auto">
            {language === 'en' 
              ? "As an engineering student at ESAIP, I stay constantly updated with the latest technologies and security practices. I also self-train on TryHackMe to deepen my knowledge in cybersecurity and ethical hacking. Passionate about continuous learning, I develop my skills to offer the best solutions to my clients."
              : "En tant qu'élève ingénieur à l'ESAIP, je reste constamment à jour avec les dernières technologies et pratiques de sécurité. Je me forme également en autodidacte sur TryHackMe pour approfondir mes connaissances en cybersécurité et hacking éthique. Passionné par l'apprentissage continu, je développe mes compétences pour offrir les meilleures solutions à mes clients."}
          </p>
        </motion.div>
      </div>
    </section>
  );
}