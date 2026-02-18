import React, { useState } from "react";
import { Download, FolderKanban, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import pdf from "../assets/CV.pdf";

import image1 from "../assets/12.png";
import image2 from "../assets/13.png";
import image3 from "../assets/14.png";
import image4 from "../assets/15.png";

const projects = [
  {
    title: "LockiT - NFC Room Access System",
    desc: "A mobile and web app system for hotels to allow guests access to rooms via NFC-enabled phones.",
    tech: ["React", "Tailwind CSS", "Firebase"],
    link: "https://github.com/JodiKKY/lockit-room-access-system",
    demo: "https://lockit-admin.vercel.app",
  },
  {
    title: "BiteWise - Restaurant Review Website",
    desc: "A platform where users can discover, review, and rate restaurants in their area.",
    tech: ["React", "Node.js", "MySQL"],
    link: "https://github.com/JodiKKY/BiteWise",
  },
  {
    title: "ConceptMabelles - E-commerce Website",
    desc: "An online store for African wear, featuring product listings, shopping cart, and secure checkout.",
    tech: ["React", "Stripe API", "Tailwind CSS"],
    link: "https://github.com/JodiKKY/ConceptMabelles",
  },
  {
    title: "EmployNexa - Job Listing Web App",
    desc: "A modern job board web application that fetches listings from a job listing API and presents them in a clean interface.",
    tech: ["React", "Tailwind CSS", "Job Listing API"],
    link: "https://github.com/JodiKKY/employnexa-job-board",
    demo: "https://employnexa.vercel.app",
  },
  {
    title: "Jokams Limited Company",
    desc: "A corporate website for a chemical import and distribution company based in Accra. It showcases company profile, chemical products, team, and contact details.",
    tech: ["Tailwind CSS", "React"],
    link: "https://github.com/JodiKKY/Jokams",
    demo: "https://jokamsltd.vercel.app",
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

/**
 * ✅ Keep the OLD background style (absolute layer inside page)
 * ✅ Just improve it: more images, deeper orange, more visible,
 * ✅ still soft + clean (no grid, no fixed background)
 */
const deepOrangeFilter =
  "brightness(0) saturate(100%) invert(47%) sepia(98%) saturate(4200%) hue-rotate(2deg) brightness(105%) contrast(125%)";

const BackgroundImages = () => {
  const images = [
    // Hero/top
    { src: image1, x: "8%", y: "10%", size: "200px", rotate: "-12deg", opacity: 0.22 },
    { src: image2, x: "92%", y: "12%", size: "220px", rotate: "14deg", opacity: 0.2 },
    { src: image3, x: "60%", y: "20%", size: "180px", rotate: "-6deg", opacity: 0.17 },
    { src: image4, x: "30%", y: "26%", size: "190px", rotate: "10deg", opacity: 0.17 },
    { src: image2, x: "75%", y: "30%", size: "150px", rotate: "-10deg", opacity: 0.13 },
    { src: image1, x: "22%", y: "34%", size: "150px", rotate: "8deg", opacity: 0.13 },

    // About mid
    { src: image3, x: "10%", y: "44%", size: "200px", rotate: "10deg", opacity: 0.16 },
    { src: image1, x: "90%", y: "46%", size: "200px", rotate: "-10deg", opacity: 0.15 },
    { src: image4, x: "50%", y: "48%", size: "150px", rotate: "6deg", opacity: 0.12 },
    { src: image2, x: "28%", y: "54%", size: "150px", rotate: "-6deg", opacity: 0.12 },
    { src: image1, x: "72%", y: "56%", size: "140px", rotate: "10deg", opacity: 0.11 },

    // Projects area
    { src: image3, x: "15%", y: "62%", size: "220px", rotate: "-14deg", opacity: 0.14 },
    { src: image2, x: "85%", y: "64%", size: "210px", rotate: "12deg", opacity: 0.14 },
    { src: image1, x: "55%", y: "66%", size: "170px", rotate: "-4deg", opacity: 0.12 },
    { src: image4, x: "40%", y: "72%", size: "190px", rotate: "10deg", opacity: 0.12 },
    { src: image2, x: "70%", y: "76%", size: "150px", rotate: "-10deg", opacity: 0.1 },
    { src: image3, x: "25%", y: "78%", size: "150px", rotate: "8deg", opacity: 0.1 },

    // Bottom
    { src: image2, x: "6%", y: "86%", size: "220px", rotate: "-8deg", opacity: 0.12 },
    { src: image3, x: "92%", y: "88%", size: "210px", rotate: "10deg", opacity: 0.12 },
    { src: image1, x: "55%", y: "92%", size: "190px", rotate: "6deg", opacity: 0.1 },
    { src: image4, x: "30%", y: "94%", size: "170px", rotate: "-10deg", opacity: 0.1 },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* keep your OLD blobs style (no grid, no fixed) */}
      <div className="absolute -top-28 -left-28 h-96 w-96 rounded-full bg-[#ff7800]/14 blur-3xl" />
      <div className="absolute top-44 -right-28 h-[28rem] w-[28rem] rounded-full bg-[#ff7800]/12 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-[#ff7800]/10 blur-3xl" />

      {images.map((img, idx) => (
        <motion.img
          key={idx}
          src={img.src}
          alt=""
          aria-hidden="true"
          className="absolute select-none"
          style={{
            left: img.x,
            top: img.y,
            width: img.size,
            opacity: img.opacity,
            transform: `translate(-50%, -50%) rotate(${img.rotate})`,
            filter: deepOrangeFilter,
          }}
          initial={{ y: 0 }}
          animate={{ y: [0, -12, 0] }}
          transition={{
            duration: 6 + (idx % 6) * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: (idx % 7) * 0.12,
          }}
        />
      ))}

      {/* lighter wash so orange shows more, still clean */}
      <div className="absolute inset-0 bg-white/20" />
    </div>
  );
};

const Homepage = () => {
  const [showSubtitle, setShowSubtitle] = useState(false);

  return (
    <main className="bg-white text-black font-geist-mono overflow-x-hidden relative">
      {/* ✅ old style background layer */}
      <BackgroundImages />

      {/* Hero Section */}
      <section className="relative py-32 text-center">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-5xl md:text-6xl font-extrabold text-black mb-6 leading-tight tracking-wide"
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

        {true && (
          <motion.p
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10"
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
            className="px-8 py-3 bg-[#ff7800] text-white rounded-3xl hover:scale-105 hover:bg-gray-200 transition-transform inline-flex items-center gap-2 font-semibold"
          >
            <FolderKanban className="w-5 h-5" /> View Projects
          </a>

          <a
            href={pdf}
            download
            className="px-8 py-3 border border-[#ff7800] text-black rounded-3xl hover:bg-[#ff7800] hover:text-white transition-transform inline-flex items-center gap-2 font-semibold"
          >
            <Download className="w-5 h-5" /> Download Resume
          </a>
        </motion.div>
      </section>

      <section id="about" className="py-24 relative z-10">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="backdrop-blur-md bg-gradient-to-br from-black/60 to-neutral-900/60 p-10 rounded-3xl shadow-xl border border-gray-700 hover:border-gray-500 transition-all">
            <h2 className="text-4xl font-extrabold text-white mb-8">About Me</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Hello! I’m{" "}
              <span className="font-semibold text-white">Jodi Kwesi Kwakye Yirenkyi</span>, a front-end developer building
              interactive web apps using <span className="font-semibold text-white">React</span> and{" "}
              <span className="font-semibold text-white">Tailwind CSS</span>.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I also work on the server side with <span className="font-semibold text-white">Node.js</span> and manage
              relational data with <span className="font-semibold text-white">SQL</span>. My full-stack skills help me
              create cohesive, efficient solutions from interface to data management.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I continuously learn new technologies to stay ahead, delivering sleek and modern digital experiences.
            </p>
          </div>

          {/* Tech Stack */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Tech Stack</h3>
            <div className="flex flex-wrap justify-center gap-8 text-5xl text-gray-800">
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
      <section id="projects" className="py-24 relative z-10">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-5xl font-extrabold text-black mb-12 text-center flex justify-center items-center gap-3"
          >
            <FolderKanban className="w-8 h-8 text-black" /> Projects
          </motion.h2>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, idx) => (
              <motion.article
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={idx}
                variants={fadeUp}
                className="group relative rounded-3xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="relative w-full h-56 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(500px_circle_at_50%_40%,rgba(0,0,0,0.08),transparent_60%)]" />
                </div>

                <div className="p-7">
                  <h3 className="text-lg font-extrabold text-gray-900 mb-2 leading-snug">{project.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-5 line-clamp-3">{project.desc}</p>

                  <ul className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <li
                        key={i}
                        className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold border border-gray-200"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-black text-white px-4 py-2 text-sm font-semibold hover:opacity-90 transition"
                    >
                      GitHub <ExternalLink className="w-4 h-4" />
                    </a>

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition"
                      >
                        Live Demo <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-24 relative z-10">
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
            <button className="inline-flex items-center justify-center gap-2">
              <Download className="w-5 h-5 self-center" />
              <span>Download Resume (PDF)</span>
            </button>
          </motion.a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative z-10">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
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
                    className="text-[#ff7800]"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/JODIYIRENKYI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#ff7800]"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a
                    href="https://twitter.com/JodiKKY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#ff7800]"
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
