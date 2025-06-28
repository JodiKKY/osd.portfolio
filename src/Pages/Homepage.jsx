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
<section id="about" className="py-24 bg-white">
  <div className="container mx-auto px-6 max-w-4xl">
    <h2 className="text-4xl font-extrabold text-gray-900 mb-8">About Me</h2>
    <p className="text-lg text-gray-700 leading-relaxed mb-6">
      Hello! I’m <span className="font-semibold text-blue-600">Jodi Yirenkyi</span>, a passionate and detail-oriented front-end developer with a strong focus on creating engaging, user-centric web applications. My core expertise lies in building responsive and intuitive interfaces using modern technologies like <span className="font-semibold text-gray-900">React</span> and <span className="font-semibold text-gray-900">Tailwind CSS</span>.
    </p>
    <p className="text-lg text-gray-700 leading-relaxed mb-6">
      Beyond the front end, I also work comfortably on the server side using <span className="font-semibold text-gray-900">Node.js</span> and manage relational data with <span className="font-semibold text-gray-900">SQL</span> databases. I also work with <span className="font-semibold text-gray-900">WordPress</span> to build dynamic, content-driven websites using custom themes and plugins. This full-stack perspective allows me to build cohesive and efficient solutions—from user interface to data handling and content management.
    </p>
    <p className="text-lg text-gray-700 leading-relaxed mb-6">
      I value the harmony between design and function—writing clean, maintainable code while prioritizing performance, accessibility, and responsiveness. Every project I take on is an opportunity to solve real-world problems with elegant, scalable solutions.
    </p>
    <p className="text-lg text-gray-700 leading-relaxed">
      I’m always learning and keeping up with industry trends to refine my skills and stay ahead of the curve. Whether working independently or as part of a collaborative team, I bring energy, creativity, and a commitment to excellence. Let’s build something remarkable together.
    </p>
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
                className="bg-white p-6 rounded-3xl shadow-md border border-gray-200 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.desc}</p>
                <ul className="flex flex-wrap gap-2 mb-5 text-sm text-gray-600">
                  {project.tech.map((tech, i) => (
                    <li key={i} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full">{tech}</li>
                  ))}
                </ul>
                <div className="flex gap-4 mt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-medium hover:underline inline-flex items-center gap-1"
                  >
                    GitHub <ExternalLink className="w-4 h-4" />
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 font-medium hover:underline inline-flex items-center gap-1"
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
            className="inline-block px-8 py-3 bg-gray-900 text-white rounded-xl hover:scale-105 transition-transform shadow-lg inline-flex items-center gap-2"
          >
            <Download className="w-5 h-5" /> Download Resume (PDF)
          </motion.a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Get in Touch</h2>
            <div className="bg-white rounded-3xl shadow-xl p-10 grid md:grid-cols-2 gap-10 items-center">
              <div className="space-y-6 text-gray-700">
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Name</p>
                  <p className="text-lg font-medium">Yirenkyi Jodi</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Phone</p>
                  <p className="text-lg font-medium">+233 59 814 1926</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Email</p>
                  <a href="mailto:jodiyirenkyi@gmail.com" className="text-lg font-medium text-blue-600 hover:underline">
                    jodiyirenkyi@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Location</p>
                  <p className="text-lg font-medium">Accra, Ghana</p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Find me on</p>
                <div className="flex gap-5 text-2xl">
                  <a
                    href="https://github.com/JodiKKY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-black"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/JODIYIRENKYI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-blue-700"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a
                    href="https://twitter.com/JodiKKY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-blue-500"
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
