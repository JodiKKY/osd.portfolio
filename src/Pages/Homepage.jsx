import React from 'react';
import { Download, FolderKanban, ExternalLink, User } from 'lucide-react';
import { motion } from 'framer-motion';
import pdf from '../assets/CV.pdf';

const projects = [
  {
    title: 'LockiT - NFC Room Access System',
    desc: 'A mobile and web app system for hotels to allow guests access to rooms via NFC-enabled phones.',
    tech: ['React', 'Tailwind CSS', 'Firebase'],
  },
  {
    title: 'BiteWise - Restaurant Review Website',
    desc: 'A platform where users can discover, review, and rate restaurants in their area.',
    tech: ['React', 'Node.js', 'MySQL'],
  },
  {
    title: 'ConceptMabelles - E-commerce Website',
    desc: 'An online store for African wear, featuring product listings, shopping cart, and secure checkout.',
    tech: ['React', 'Stripe API', 'Tailwind CSS'],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const Homepage = () => {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-gray-100 to-white text-center">
        <div className="container mx-auto px-6">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight"
          >
            Hi, I'm <span className="text-gray-700">Yirenkyi Jodi</span>
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
            className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-10"
          >
            A passionate front-end developer crafting elegant, minimal, and user-friendly web experiences.
          </motion.p>
          <motion.div
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-gray-900 text-white rounded-xl hover:scale-105 transition-transform shadow-lg inline-flex items-center gap-2"
            >
              <FolderKanban className="w-5 h-5" /> View Projects
            </a>
            <a
              href={pdf}
              download
              className="px-8 py-3 border border-gray-900 text-gray-900 rounded-xl hover:bg-gray-200 transition-transform hover:scale-105 inline-flex items-center gap-2"
            >
              <Download className="w-5 h-5" /> Download Resume
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <User className="w-7 h-7 text-gray-700" /> About Me
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed space-y-4">
              I am a front-end developer who enjoys building modern, responsive, and user-centric web apps. With solid skills in <span className="font-semibold text-gray-900">React</span> and <span className="font-semibold text-gray-900">Tailwind CSS</span>, I fuse logic with creative design to craft seamless experiences.
              <br /><br />
              I thrive on clean code, reusable components, and learning new tools that help improve performance and maintainability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-4xl font-bold text-gray-900 mb-10 flex items-center gap-2"
          >
            <FolderKanban className="w-7 h-7 text-gray-700" /> Projects
          </motion.h2>
          <div className="grid gap-10 md:grid-cols-2">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={idx}
                variants={fadeUp}
                className="bg-white p-6 rounded-3xl shadow-md border border-gray-200 hover:shadow-xl transition-all"
              >
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.desc}</p>
                <ul className="flex flex-wrap gap-2 mb-5 text-sm text-gray-600">
                  {project.tech.map((tech, i) => (
                    <li key={i} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full">{tech}</li>
                  ))}
                </ul>
                <a href="#" className="text-gray-700 hover:text-gray-900 font-medium inline-flex items-center gap-1">
                  View Project <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-24">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-4xl font-bold text-gray-900 mb-6"
          >
            Resume
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
            className="text-lg text-gray-700 mb-6"
          >
            You can view or download my resume to learn more about my education, experience, and skills.
          </motion.p>
          <motion.a
            href={pdf}
            download
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="px-8 py-3 bg-gray-900 text-white rounded-xl hover:scale-105 transition-transform shadow-lg inline-flex items-center gap-2"
          >
            <Download className="w-5 h-5" /> Download Resume (PDF)
          </motion.a>
        </div>
      </section>
    </main>
  );
};

export default Homepage;
