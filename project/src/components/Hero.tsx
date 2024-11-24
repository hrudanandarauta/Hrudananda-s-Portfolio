import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail, Phone, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-4" id="home">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl"
      >
        <motion.img
          src="/profile.jpg"
          alt="Hrudananda Rauta"
          className="w-40 h-40 rounded-full mb-8 shadow-lg object-cover mx-auto"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Hrudananda Rauta
        </motion.h1>
        
        <div className="h-16 mb-6">
          <TypeAnimation
            sequence={[
              'Master\'s in Computer Application',
              2000,
              'Full Stack Developer',
              2000,
              'Problem Solver',
              2000,
            ]}
            wrapper="h2"
            repeat={Infinity}
            className="text-xl md:text-2xl text-blue-600 dark:text-blue-400"
          />
        </div>

        <motion.p
          className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Dynamic and detail-oriented MCA graduate passionate about creating innovative web solutions. 
          With expertise in full-stack development and a strong foundation in computer science, 
          I specialize in building responsive, user-friendly applications that solve real-world problems. 
          Currently exploring new opportunities to contribute to impactful projects and continue growing as a developer.
        </motion.p>

        <motion.div
          className="flex space-x-4 mt-6 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="mailto:hrudanandarauta@outlook.com"
            className="p-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors transform hover:scale-110"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a
            href="tel:+917749944115"
            className="p-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors transform hover:scale-110"
            aria-label="Phone"
          >
            <Phone className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/hrudananda-rauta"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/hrudanandarauta"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors transform hover:scale-110"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#projects"
        className="absolute bottom-8 p-2 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <ArrowDown className="w-6 h-6" />
      </motion.a>
    </div>
  );
};