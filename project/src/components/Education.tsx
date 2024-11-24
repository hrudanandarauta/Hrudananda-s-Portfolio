import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: "Master's in Computer Application (MCA)",
    institution: "GIET University, Gunupur",
    board: "GIET University, Odisha",
    score: "8.7 CGPA"
  },
  {
    degree: "BSc. Computer Science",
    institution: "R.C.M. Science Degree College, Khallikote",
    board: "Berhampur University, Odisha",
    score: "8.2 CGPA"
  },
  {
    degree: "Higher Secondary (12th)",
    institution: "R.C.M. Science Degree College, Khallikote",
    board: "CHSE, Odisha",
    score: "61.5%"
  },
  {
    degree: "Secondary (10th)",
    institution: "Sri Sidheswar High School, Bada Chadhiapada",
    board: "BSE, Odisha",
    score: "80%"
  }
];

export const Education: React.FC = () => {
  return (
    <section className="py-20 px-4" id="education">
      <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
      <div className="max-w-4xl mx-auto space-y-8">
        {education.map((edu, index) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-start space-x-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
          >
            <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-1">{edu.institution}</p>
              <p className="text-gray-500 dark:text-gray-400 mt-1">{edu.board}</p>
              <p className="text-blue-600 dark:text-blue-400 font-medium mt-2">{edu.score}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};