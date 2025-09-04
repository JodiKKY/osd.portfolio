import React, { useState } from 'react';
import { Download, FolderKanban, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
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
    demo: 'https://jokamsltd.vercel.app',
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
  const [showSubtitle, setShowSubtitle] = useState(false);

  return (
    <main className="bg-black text-white font-geist-mono overflow-x-hidden relative">
      {/* Hero Section */}
      <section className="relative py-32 text-center">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-wide"
        >
          <Typewriter
            words={["Hi, I'm Yirenkyi Jodi"]}
            loop={1}
            cursor
            cursorStyle=""
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={() => setShowSubtitle(true)}
          />
        </motion.h1>

        {true && ( // always show subtitle immediately with a small delay inside Typewriter
  <motion.p
    initial="hidden"
    animate="visible"
    custom={1}
    variants={fadeUp}
    className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10"
  >
    <Typewriter
      words={["I craft minimal, futuristic, and ultra-modern web experiences."]}
      loop={1}
      cursor
      cursorStyle=""
      typeSpeed={40}
      deleteSpeed={20}
      delaySpeed={500}
    />
  </motion.p>
)}

        <motion.div
          initial="hidden"
          animate="visible"
          custom={2}
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-white text-black rounded-3xl hover:scale-105 hover:bg-gray-200 transition-transform inline-flex items-center gap-2 font-semibold"
          >
            <FolderKanban className="w-5 h-5" /> View Projects
          </a>
          <a
            href={pdf}
            download
            className="px-8 py-3 border border-white text-white rounded-3xl hover:bg-white hover:text-black transition-transform inline-flex items-center gap-2 font-semibold"
          >
            <Download className="w-5 h-5" /> Download Resume
          </a>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-black relative z-10">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="backdrop-blur-md bg-gradient-to-br from-black/60 to-neutral-900/60 p-10 rounded-3xl shadow-xl border border-gray-700 hover:border-gray-500 transition-all">
            <h2 className="text-4xl font-extrabold text-white mb-8">About Me</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Hello! I’m <span className="font-semibold text-white">Jodi Kwesi Kwakye Yirenkyi</span>, a front-end developer building interactive web apps using <span className="font-semibold text-white">React</span> and <span className="font-semibold text-white">Tailwind CSS</span>.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I also work on the server side with <span className="font-semibold text-white">Node.js</span> and manage relational data with <span className="font-semibold text-white">SQL</span>. My full-stack skills help me create cohesive, efficient solutions from interface to data management.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I continuously learn new technologies to stay ahead, delivering sleek and modern digital experiences.
            </p>
          </div>

          {/* Tech Stack */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Tech Stack</h3>
            <div className="flex flex-wrap justify-center gap-8 text-5xl text-gray-400">
              <div className="flex flex-col items-center gap-2 hover:text-sky-400 transition group">
                <i className="devicon-react-original animate-spin-slow group-hover:animate-spin"></i>
                <span className="text-sm text-gray-400 group-hover:text-white">React</span>
              </div>
              <div className="flex flex-col items-center gap-2 hover:text-cyan-400 transition group">
                <i className="devicon-tailwindcss-plain group-hover:animate-bounce"></i>
                <span className="text-sm text-gray-400 group-hover:text-white">Tailwind</span>
              </div>
              <div className="flex flex-col items-center gap-2 hover:text-green-500 transition group">
                <i className="devicon-nodejs-plain group-hover:animate-pulse"></i>
                <span className="text-sm text-gray-400 group-hover:text-white">Node.js</span>
              </div>
              <div className="flex flex-col items-center gap-2 hover:text-yellow-400 transition group">
                <i className="devicon-javascript-plain group-hover:animate-bounce"></i>
                <span className="text-sm text-gray-400 group-hover:text-white">JavaScript</span>
              </div>
              <div className="flex flex-col items-center gap-2 hover:text-orange-400 transition group">
                <i className="devicon-mysql-plain group-hover:animate-pulse"></i>
                <span className="text-sm text-gray-400 group-hover:text-white">MySQL</span>
              </div>
              <div className="flex flex-col items-center gap-2 hover:text-red-500 transition group">
                <i className="devicon-git-plain group-hover:animate-bounce"></i>
                <span className="text-sm text-gray-400 group-hover:text-white">Git</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-black relative z-10">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-5xl font-extrabold text-white mb-12 text-center flex justify-center items-center gap-3"
          >
            <FolderKanban className="w-8 h-8 text-gray-300" /> Projects
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
                className="relative group rounded-3xl overflow-hidden shadow-lg cursor-pointer border border-gray-700"
              >
                <div className="w-full h-64 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
                  <span className="text-gray-600 text-sm">Project Preview</span>
                </div>

                <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center text-center px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{project.desc}</p>

                  <ul className="flex flex-wrap justify-center gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <li key={i} className="bg-gray-900 text-white px-3 py-1 rounded-full text-xs font-medium border border-gray-600">
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-black bg-white px-3 py-2 rounded-lg text-sm shadow-md hover:bg-gray-200 transition-transform"
                    >
                      GitHub <ExternalLink className="w-4 h-4" />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-black bg-white px-3 py-2 rounded-lg text-sm shadow-md hover:bg-gray-200 transition-transform"
                      >
                        Live Demo <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-24 bg-black relative z-10">
        <div className="container mx-auto px-6 max-w-5xl text-center backdrop-blur-md bg-black/50 p-10 rounded-3xl shadow-lg border border-gray-700">
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
            className="inline-block px-8 py-3 bg-white text-black rounded-3xl hover:scale-105 transition-transform shadow-lg font-semibold"
          >
            <Download className="w-5 h-5" /> Download Resume (PDF)
          </motion.a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black relative z-10">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Get in Touch</h2>
            <div className="bg-black/50 backdrop-blur-md rounded-3xl shadow-xl p-10 grid md:grid-cols-2 gap-10 items-center border border-gray-700">
              <div className="space-y-6 text-gray-300">
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Name</p>
                  <p className="text-lg font-medium text-white">Yirenkyi Jodi Kwesi Kwakye</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Phone</p>
                  <p className="text-lg font-medium text-white">+233 59 814 1926</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Email</p>
                  <a href="mailto:jodiyirenkyi@gmail.com" className="text-lg font-medium text-white hover:underline">
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
                    className="text-gray-400 hover:text-white"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/JODIYIRENKYI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a
                    href="https://twitter.com/JodiKKY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white"
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
