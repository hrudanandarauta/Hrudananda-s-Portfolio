import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Gamepad2 } from 'lucide-react';

const projects = [
  {
    title: 'Computer Science Department Website',
    description: [
      'Developed a departmental website for resource sharing',
      'Enabled seamless access to study materials',
      'Incorporated user-friendly navigation',
      'Built with responsive design principles',
      'Led a team of 5 members'
    ],
    icon: <Globe className="w-8 h-8" />,
    tech: ['HTML', 'CSS', 'JavaScript']
  },
  {
    title: 'Personal Portfolio',
    description: [
      'Designed a showcase for skills and projects',
      'Created a visually appealing layout',
      'Highlighted work experience and certifications',
      'Optimized for performance',
      'Cross-browser compatible'
    ],
    icon: <Code2 className="w-8 h-8" />,
    tech: ['HTML', 'CSS', 'JavaScript']
  },
  {
    title: 'Interactive Games & Tools',
    description: [
      'Weather Forecast Dashboard with real-time updates',
      'Tic Tac Toe Game with JavaScript',
      'Rock, Paper, Scissors interactive game',
      'Enhanced programming skills',
      'Focus on UI/UX principles'
    ],
    icon: <Gamepad2 className="w-8 h-8" />,
    tech: ['HTML', 'CSS', 'JavaScript']
  }
];

export const Projects: React.FC = () => {
  return (
    <section className="py-20 px-4" id="projects">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                {project.icon}
              </div>
              <h3 className="text-xl font-semibold ml-3">{project.title}</h3>
            </div>
            <ul className="mb-4 space-y-2">
              {project.description.map((point, i) => (
                <li key={i} className="text-gray-600 dark:text-gray-300">
                  • {point}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};