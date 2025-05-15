// ... existing imports
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
      {/* ... */}
      {/* About Section */}
      {/* ... */}
      {/* Projects Section */}
      {/* ... */}
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

      {/* Contact Section */}
<section id="contact" className="py-24 bg-gray-50">
  <div className="container mx-auto px-6 max-w-5xl">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
    >
      <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
        Get in Touch
      </h2>
      <div className="bg-white rounded-3xl shadow-lg p-10 grid md:grid-cols-2 gap-10 items-center">
        {/* Contact Info */}
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
            <a
              href="mailto:yirenkyijodi@gmail.com"
              className="text-lg font-medium text-black hover:underline"
            >
              jodiyirenkyi@gmail.com
            </a>
          </div>
          <div>
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Location</p>
            <p className="text-lg font-medium">Accra, Ghana</p>
          </div>
        </div>

        {/* Socials */}
        <div className="space-y-4">
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Find me on</p>
          <div className="flex gap-5 text-gray-700 text-2xl">
            <a
              href="https://github.com/JodiKKY"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
              title="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/jodiyirenkyi/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
              title="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://twitter.com/JodiKKY"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
              title="Twitter"
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
