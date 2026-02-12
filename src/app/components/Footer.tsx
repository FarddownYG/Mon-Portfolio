import { motion } from 'motion/react';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Accueil', href: '#hero' },
    { name: 'À propos', href: '#about' },
    { name: 'Projets', href: '#projects' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const legalLinks = [
    { name: 'Mentions légales', href: '#' },
    { name: 'Politique de confidentialité', href: '#' },
    { name: 'Conditions d\'utilisation', href: '#' },
  ];

  const socialLinks = [
    { icon: Github, url: 'https://github.com/FarddownYG', label: 'GitHub' },
    { icon: Linkedin, url: 'https://fr.linkedin.com/in/yanis-gely', label: 'LinkedIn' },
    { icon: Mail, url: 'mailto:yanisgely@icloud.com', label: 'Email' },
  ];

  return (
    <footer className="relative bg-gray-900 text-white pt-20 pb-10">
      {/* Decorative Gradient */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4"
            >
              Yanis Gely
            </motion.h3>
            <p className="text-gray-400 leading-relaxed">
              Élève ingénieur passionné par la cybersécurité, le développement web et le design UX/UI.
            </p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 rounded-lg flex items-center justify-center transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(link.href);
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Expertises</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Développement Web</li>
              <li>Applications React/TypeScript</li>
              <li>Design UX/UI avec Figma</li>
              <li>Python Backend</li>
              <li>Solutions Web Complètes</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="mailto:yanisgely@icloud.com"
                  className="hover:text-white transition-colors"
                >
                  yanisgely@icloud.com
                </a>
              </li>
              <li>Aix-en-Provence, France</li>
              <li>
                <a
                  href="tel:+33652324116"
                  className="hover:text-white transition-colors"
                >
                  06 52 32 41 16
                </a>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <p className="text-sm text-gray-400">
                <span className="text-green-400 font-semibold">●</span> Disponible pour de nouveaux projets
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © {currentYear} Yanis Gely. Tous droits réservés.
            </p>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap gap-6 text-sm">
            {legalLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center shadow-2xl hover:shadow-indigo-500/50 transition-all z-40"
        aria-label="Retour en haut"
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  );
}