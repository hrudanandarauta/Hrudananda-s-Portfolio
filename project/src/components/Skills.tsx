import React from 'react';
import { motion } from 'framer-motion';

const skills = {
  'Programming Languages': ['Java', 'Python'],
  'Web Technologies': ['HTML', 'CSS', 'JavaScript', 'React.js'],
  'Databases': ['MySQL', 'MongoDB'],
  'Frameworks': ['Node.js', 'Angular.js', 'Express.js'],
  'Tools': ['MS Office'],
  'Soft Skills': ['Teamwork', 'Adaptability', 'Time Management', 'Critical Thinking']
};

export const Skills: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900" id="skills">
      <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(skills).map(([category, items], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
          >
            <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};