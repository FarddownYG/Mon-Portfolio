import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, Calendar, Target, Lightbulb, Wrench, TrendingUp } from 'lucide-react';

interface ProjectDetails {
  title: string;
  image: string;
  description: string;
  fullDescription: string;
  context: string;
  objectives: string[];
  challenges: string[];
  technologies: string[];
  results: string[];
  github: string;
  demo: string;
  gradient: string;
  date: string;
}

interface ProjectModalProps {
  project: ProjectDetails | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 50 }}
                transition={{ type: 'spring', duration: 0.5 }}
                className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              >
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Scrollable Content */}
                <div className="overflow-y-auto max-h-[90vh]">
                  {/* Header Image */}
                  <div className="relative h-64 md:h-80 overflow-hidden bg-gray-200 dark:bg-gray-700">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-40`}></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/80 to-transparent">
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                        {project.title}
                      </h2>
                      <div className="flex items-center gap-2 text-white/80">
                        <Calendar className="w-4 h-4" />
                        <span>{project.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8 space-y-8">
                    {/* Description */}
                    <div>
                      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                        {project.fullDescription}
                      </p>
                    </div>

                    {/* Context */}
                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-2xl p-6">
                      <div className="flex items-start gap-3 mb-3">
                        <Lightbulb className="w-6 h-6 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="text-xl font-bold mb-2">Contexte & Motivation</h3>
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {project.context}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Objectives */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <Target className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                        <h3 className="text-xl font-bold">Objectifs</h3>
                      </div>
                      <ul className="space-y-2">
                        {project.objectives.map((objective, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-gray-700 dark:text-gray-300">{objective}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <Wrench className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        <h3 className="text-xl font-bold">Technologies Utilisées</h3>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 text-indigo-700 dark:text-indigo-300 rounded-full font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Challenges */}
                    {project.challenges.length > 0 && (
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <TrendingUp className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                          <h3 className="text-xl font-bold">Défis & Apprentissages</h3>
                        </div>
                        <ul className="space-y-2">
                          {project.challenges.map((challenge, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <span className="w-2 h-2 bg-pink-600 rounded-full mt-2 flex-shrink-0"></span>
                              <span className="text-gray-700 dark:text-gray-300">{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Results */}
                    <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-950/30 dark:to-teal-950/30 rounded-2xl p-6">
                      <h3 className="text-xl font-bold mb-3">Résultats</h3>
                      <ul className="space-y-2">
                        {project.results.map((result, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <span className="text-green-600 dark:text-green-400 font-bold flex-shrink-0">✓</span>
                            <span className="text-gray-700 dark:text-gray-300">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-shadow"
                      >
                        <Github className="w-5 h-5" />
                        Voir le code
                      </motion.a>
                      {project.demo !== '#' && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-shadow"
                        >
                          <ExternalLink className="w-5 h-5" />
                          {project.demo.includes('figma') 
                            ? 'Voir sur Figma' 
                            : project.demo.includes('linkedin') 
                            ? 'Voir sur LinkedIn' 
                            : 'Voir la démo'}
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}