import React from 'react';
import { Download, FolderKanban, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import pdf from '../assets/CV.pdf';

const projects = [
  {
    title: 'LockiT - NFC Room Access System',
    desc: 'A mobile and web app system for hotels to allow guests access to rooms via NFC-enabled phones.',
    tech: ['React', 'Tailwind CSS', 'Firebase'],
    link: 'https://github.com/JodiKKY/lockit-room-access-system',
    demo: 'https://lockit-admin.vercel.app',
  },
  {
    title: 'BiteWise - Restaurant Review Website',
    desc: 'A platform where users can discover, review, and rate restaurants in their area.',
    tech: ['React', 'Node.js', 'MySQL'],
    link: 'https://github.com/JodiKKY/BiteWise',
  },
  {
    title: 'ConceptMabelles - E-commerce Website',
    desc: 'An online store for African wear, featuring product listings, shopping cart, and secure checkout.',
    tech: ['React', 'Stripe API', 'Tailwind CSS'],
    link: 'https://github.com/JodiKKY/ConceptMabelles',
  },
  {
    title: 'EmployNexa - Job Listing Web App',
    desc: 'A modern job board web application that fetches listings from a job listing API and presents them in a clean interface.',
    tech: ['React', 'Tailwind CSS', 'Job Listing API'],
    link: 'https://github.com/JodiKKY/employnexa-job-board',
    demo: 'https://employnexa.vercel.app', 
  },
  {
    title: 'Jokams Limited Company',
    desc: 'A corporate website for a chemical import and distribution company based in Accra. It showcases company profile, chemical products, team, and contact details.',
    tech: ['Tailwind CSS', 'React'],
    link: 'https://github.com/JodiKKY/Jokams',
    demo: 'https://jokamsltd.vercel.app'
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
    <main className="bg-gray-900 text-gray-100 font-sans overflow-x-hidden relative">

      {/* Hero Section */}
      <section className="relative py-32 text-center">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-wide"
        >
          Hi, I'm <span className="text-blue-400">Yirenkyi Jodi</span>
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          custom={1}
          variants={fadeUp}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10"
        >
          I craft futuristic, minimal, and ultra-modern web experiences.
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
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-3xl hover:scale-105 hover:shadow-lg transition-transform shadow-blue-500/50 inline-flex items-center gap-2 font-semibold"
          >
            <FolderKanban className="w-5 h-5" /> View Projects
          </a>
          <a
            href={pdf}
            download
            className="px-8 py-3 border border-blue-500 text-blue-400 rounded-3xl hover:bg-blue-500 hover:text-white hover:shadow-lg transition-transform shadow-blue-500/50 inline-flex items-center gap-2 font-semibold"
          >
            <Download className="w-5 h-5" /> Download Resume
          </a>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-900 relative z-10">
        <div className="container mx-auto px-6 max-w-4xl backdrop-blur-md bg-gray-900/50 p-10 rounded-3xl shadow-lg border border-gray-700">
          <h2 className="text-4xl font-extrabold text-white mb-8">About Me</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Hello! I’m <span className="font-semibold text-blue-400">Jodi Kwesi Kwakye Yirenkyi</span>, a front-end developer building interactive web apps using <span className="font-semibold text-white">React</span> and <span className="font-semibold text-white">Tailwind CSS</span>.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I also work on the server side with <span className="font-semibold text-white">Node.js</span> and manage relational data with <span className="font-semibold text-white">SQL</span>. My full-stack skills help me create cohesive, efficient solutions from interface to data management.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            I continuously learn new technologies to stay ahead, delivering sleek and modern digital experiences.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-gray-900 relative z-10">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-5xl font-extrabold text-white mb-12 text-center flex justify-center items-center gap-3"
          >
            <FolderKanban className="w-8 h-8 text-blue-400" /> Projects
          </motion.h2>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={idx}
                variants={fadeUp}
                className="bg-gray-800/30 backdrop-blur-md border border-gray-700 rounded-3xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer overflow-hidden"
              >
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.desc}</p>

                <ul className="flex flex-wrap gap-2 mb-5 text-sm">
                  {project.tech.map((tech, i) => (
                    <li key={i} className="bg-gray-700 text-white px-3 py-1 rounded-full font-medium">
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-4 mt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-white bg-blue-500 px-4 py-2 rounded-xl shadow-md hover:scale-105 transition-transform font-semibold"
                  >
                    GitHub <ExternalLink className="w-4 h-4" />
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-white bg-green-500 px-4 py-2 rounded-xl shadow-md hover:scale-105 transition-transform font-semibold"
                    >
                      Live Demo <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-24 bg-gray-900 relative z-10">
        <div className="container mx-auto px-6 max-w-5xl text-center backdrop-blur-md bg-gray-900/50 p-10 rounded-3xl shadow-lg border border-gray-700">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-4xl font-bold text-white mb-6"
          >
            Resume
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
            className="text-lg text-gray-300 mb-6"
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
            className="inline-block px-8 py-3 bg-blue-500 text-white rounded-3xl hover:scale-105 transition-transform shadow-lg font-semibold"
          >
            <Download className="w-5 h-5" /> Download Resume (PDF)
          </motion.a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-900 relative z-10">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Get in Touch</h2>
            <div className="bg-gray-800/30 backdrop-blur-md rounded-3xl shadow-xl p-10 grid md:grid-cols-2 gap-10 items-center border border-gray-700">
              <div className="space-y-6 text-gray-300">
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Name</p>
                  <p className="text-lg font-medium text-white">Yirenkyi Jodi</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Phone</p>
                  <p className="text-lg font-medium text-white">+233 59 814 1926</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Email</p>
                  <a href="mailto:jodiyirenkyi@gmail.com" className="text-lg font-medium text-blue-400 hover:underline">
                    jodiyirenkyi@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Location</p>
                  <p className="text-lg font-medium text-white">Accra, Ghana</p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Find me on</p>
                <div className="flex gap-5 text-2xl">
                  <a
                    href="https://github.com/JodiKKY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/JODIYIRENKYI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a
                    href="https://twitter.com/JodiKKY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-500"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
};

export default Homepage;
