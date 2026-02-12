import { motion } from 'motion/react';
import { useInView } from './useInView';
import { Globe, Smartphone, Cog, Sparkles, Check } from 'lucide-react';

export function Services() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const services = [
    {
      icon: Globe,
      title: 'Création de Sites Web',
      description: 'Sites web modernes, responsives et optimisés SEO',
      features: ['Design sur mesure', 'Performance optimale', 'Sécurité renforcée', 'Hébergement inclus'],
      price: 'À partir de 800€',
      popular: false,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Smartphone,
      title: 'Applications Web',
      description: 'Applications web progressives (PWA) et tableaux de bord',
      features: ['Interface intuitive', 'Temps réel', 'Multi-plateforme', 'API sécurisées'],
      price: 'À partir de 1 500€',
      popular: true,
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Cog,
      title: 'Automatisation n8n',
      description: 'Automatisation de processus avec n8n auto-hébergé',
      features: ['Workflows personnalisés', 'Intégrations multiples', 'Contrôle total', 'Support inclus'],
      price: 'À partir de 600€',
      popular: false,
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Sparkles,
      title: 'Design UX/UI',
      description: 'Conception d\'interfaces utilisateur modernes avec Figma',
      features: ['Prototypes interactifs', 'Design system', 'Tests utilisateurs', 'Itérations incluses'],
      price: 'À partir de 500€',
      popular: false,
      gradient: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <section
      id="services"
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
            Services & <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Tarifs</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Des solutions complètes et sur mesure pour concrétiser vos projets digitaux
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative group"
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="px-4 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-sm font-bold rounded-full shadow-lg">
                    ⭐ Populaire
                  </span>
                </div>
              )}
              <div
                className={`h-full p-8 bg-white dark:bg-gray-800 rounded-2xl border-2 ${
                  service.popular
                    ? 'border-purple-500 shadow-2xl shadow-purple-500/20'
                    : 'border-gray-200 dark:border-gray-700'
                } transition-all group-hover:shadow-2xl`}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{service.description}</p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <p className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
                    {service.price}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      const element = document.querySelector('#contact');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`w-full py-3 rounded-xl font-semibold transition-all ${
                      service.popular
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg hover:shadow-xl'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    Demander un devis
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Besoin d'un projet sur mesure ou d'un accompagnement spécifique ?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-shadow"
          >
            Discutons de votre projet
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}