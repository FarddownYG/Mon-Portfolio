import { motion } from 'motion/react';
import { useInView } from './useInView';
import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const testimonials = [
    {
      name: 'Sophie Martin',
      role: 'CEO, TechStart',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      content: 'Yanis a créé notre site web avec une attention remarquable aux détails. Son expertise en cybersécurité nous a permis d\'avoir une plateforme à la fois belle et sécurisée.',
      rating: 5,
    },
    {
      name: 'Thomas Dubois',
      role: 'Fondateur, InnoApp',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      content: 'Une collaboration exceptionnelle ! L\'application web développée par Yanis dépasse toutes nos attentes. Professionnel, réactif et créatif.',
      rating: 5,
    },
    {
      name: 'Marie Leroy',
      role: 'Directrice Marketing, DigitalCo',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      content: 'Le design UX/UI créé par Yanis a transformé notre interface utilisateur. Nos clients adorent la nouvelle expérience, intuitive et moderne.',
      rating: 5,
    },
    {
      name: 'Lucas Bernard',
      role: 'CTO, SecureNet',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      content: 'Son expertise en cybersécurité nous a aidés à identifier et corriger des vulnérabilités critiques. Un vrai professionnel malgré son jeune âge.',
      rating: 5,
    },
  ];

  return (
    <section
      id="testimonials"
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
            Ce que disent mes <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">clients</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            La satisfaction de mes clients est ma priorité absolue
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="relative p-8 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-800 dark:to-indigo-900/20 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-20">
                <Quote className="w-16 h-16 text-indigo-600" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed relative z-10">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-indigo-600"
                />
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '15+', label: 'Projets Réalisés' },
            { number: '100%', label: 'Clients Satisfaits' },
            { number: '3+', label: "Années d'Expérience" },
            { number: '24/7', label: 'Support Disponible' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="text-center p-6 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl text-white"
            >
              <p className="text-4xl font-bold mb-2">{stat.number}</p>
              <p className="text-sm opacity-90">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
