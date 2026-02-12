import { motion } from 'motion/react';
import { useInView } from './useInView';
import { Shield, Code, Palette, GraduationCap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function About() {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const { t } = useLanguage();

  const highlights = [
    {
      icon: GraduationCap,
      title: t('about.highlight1Title'),
      description: t('about.highlight1Desc'),
    },
    {
      icon: Shield,
      title: t('about.highlight2Title'),
      description: t('about.highlight2Desc'),
    },
    {
      icon: Code,
      title: t('about.highlight3Title'),
      description: t('about.highlight3Desc'),
    },
    {
      icon: Palette,
      title: t('about.highlight4Title'),
      description: t('about.highlight4Desc'),
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
            {t('about.title')} <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">{t('about.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('about.subtitle')}
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
            <h3 className="text-3xl md:text-4xl font-bold mb-6">{t('about.journeyTitle')}</h3>
            <div className="space-y-4 text-lg leading-relaxed">
              <p dangerouslySetInnerHTML={{ __html: t('about.journeyP1') }} />
              <p dangerouslySetInnerHTML={{ __html: t('about.journeyP2') }} />
              <p dangerouslySetInnerHTML={{ __html: t('about.journeyP3') }} />
              <p dangerouslySetInnerHTML={{ __html: t('about.journeyP4') }} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}