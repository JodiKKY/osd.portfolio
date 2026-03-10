import React, { useState } from "react";
import { Download, FolderKanban, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import pdf from "../assets/CV.pdf";

import pro1 from "../assets/project1.png";
import pro2 from "../assets/project2.png";
import pro3 from "../assets/project3.png";
import pro4 from "../assets/project4.png";

const projects = [
  {
    title: "MergeSeed - Microfinance Company Website",
    desc: "A corporate website for a microfinance company based in Ghana. It showcases company profile, services, team, and contact details.",
    tech: ["Tailwind CSS", "React"],
    link: "https://github.com/JodiKKY/MergeSeed",
    demo: "https://mergeseed.com",
    image: pro1,
  },
  {
    title: "Jokams Limited Company",
    desc: "A corporate website for a chemical import and distribution company based in Accra. It showcases company profile, chemical products, team, and contact details.",
    tech: ["Tailwind CSS", "React"],
    link: "https://github.com/JodiKKY/Jokams",
    demo: "https://jokamsltd.com",
    image: pro2,
  },
  {
    title: "BiteWise - Restaurant Review Website",
    desc: "A platform where users can discover, review, and rate restaurants in their area.",
    tech: ["React", "Node.js", "MySQL"],
    link: "https://github.com/JodiKKY/BiteWise",
    image: pro3,
  },
  {
    title: "EmployNexa - Job Listing Web App",
    desc: "A modern job board web application that fetches listings from a job listing API and presents them in a clean interface.",
    tech: ["React", "Tailwind CSS", "Job Listing API"],
    link: "https://github.com/JodiKKY/employnexa-job-board",
    demo: "https://employnexa.vercel.app",
    image: pro4,
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

/* ── FlipCard Component ── */
const FlipCard = ({ project, idx }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      className="w-full"
      style={{ perspective: "1400px", height: "420px" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Inner flip wrapper */}
      <div
        className="relative w-full h-full transition-transform duration-700"
        style={{
          transformStyle: "preserve-3d",
          transform: hovered ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >

        {/* ── FRONT: Full image ── */}
        <div
          className="absolute inset-0 rounded-3xl overflow-hidden shadow-lg"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

          {/* Index badge */}
          <div className="absolute top-5 left-5 w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 flex items-center justify-center">
            <span className="text-[10px] font-chakra text-white">
              {String(idx + 1).padStart(2, "0")}
            </span>
          </div>

          {/* Hover hint */}
          <div className="absolute top-5 right-5 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/30 backdrop-blur-sm border border-white/20">
            <span className="text-[10px] font-chakra text-white/80 tracking-wide">Hover to flip</span>
          </div>

          {/* Bottom info */}
          <div className="absolute bottom-0 left-0 right-0 p-7">
            <div className="flex flex-wrap gap-1.5 mb-3">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 rounded-full text-[10px] font-chakra bg-white/10 backdrop-blur-sm text-white border border-white/20"
                >
                  {tech}
                </span>
              ))}
            </div>
            <h3 className="text-xl font-light text-white font-chakra leading-snug">
              {project.title}
            </h3>
          </div>
        </div>

        {/* ── BACK: Details ── */}
        <div
          className="absolute inset-0 rounded-3xl overflow-hidden bg-white border border-gray-200 shadow-lg flex flex-col"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {/* Orange accent bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-[#ff7800] to-orange-300 shrink-0" />

          {/* Scrollable content */}
          <div className="flex-1 overflow-y-auto p-8 flex flex-col gap-6 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">

            {/* Header */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#ff7800] font-chakra mb-2">
                Project {String(idx + 1).padStart(2, "0")}
              </p>
              <h3 className="text-2xl font-light text-black font-chakra leading-snug">
                {project.title}
              </h3>
            </div>

            <div className="h-px bg-gray-100" />

            {/* Description */}
            <p className="text-sm text-gray-500 font-light font-chakra leading-[1.9]">
              {project.desc}
            </p>

            {/* Tech */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-chakra mb-3">
                Built with
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-full text-xs font-light font-chakra bg-orange-50 border border-[#ff7800]/25 text-[#ff7800]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex items-center gap-3 pt-4 border-t border-gray-100 mt-auto">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-black text-white text-sm font-light font-chakra hover:bg-gray-800 transition-colors"
              >
                <i className="fab fa-github" /> GitHub
              </a>
              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#ff7800] text-white text-sm font-light font-chakra hover:bg-orange-500 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
              ) : (
                <div className="flex-1 inline-flex items-center justify-center py-3 rounded-xl bg-gray-100 text-gray-400 text-sm font-light font-chakra">
                  No Live Demo
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </motion.div>
  );
};

/* ── Homepage Component ── */
const Homepage = () => {
  const [showSubtitle, setShowSubtitle] = useState(false);

  return (
    <main className="bg-white text-black font-chakra overflow-x-hidden relative">

      {/* ── Hero Section ── */}
      <section className="relative py-32 text-center">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-5xl md:text-6xl font-medium font-chakra text-black mb-6 leading-tight tracking-wide"
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

        {showSubtitle && (
          <motion.p
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 font-chakra font-light"
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
            className="px-8 py-3 bg-[#ff7800] text-white rounded-3xl hover:scale-105 hover:bg-gray-800 transition-all inline-flex items-center gap-2 font-light font-chakra"
          >
            <FolderKanban className="w-5 h-5" /> View Projects
          </a>
          <a
            href={pdf}
            download
            className="px-8 py-3 border border-[#ff7800] text-black rounded-3xl hover:bg-[#ff7800] hover:text-white transition-all inline-flex items-center gap-2 font-light font-chakra"
          >
            <Download className="w-5 h-5" /> Download Resume
          </a>
        </motion.div>
      </section>

      {/* ── About Section ── */}
      <section id="about" className="py-24 relative z-10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-orange-100 rounded-full blur-[130px] opacity-60" />
        </div>

        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>

            <div className="flex items-center gap-4 mb-14">
              <div className="h-px w-10 bg-[#ff7800]/60" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#ff7800] font-medium font-chakra">About Me</span>
            </div>

            <div className="grid md:grid-cols-2 gap-14 items-start">

              <div className="flex flex-col gap-8">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.25em] text-gray-400 font-chakra mb-3">Full name</p>
                  <h2 className="text-3xl font-light text-black font-chakra leading-snug mb-6">
                    Jodi Kwesi<br />Kwakye Yirenkyi
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {["Front-End Developer", "UI/UX Designer", "Full-Stack Builder"].map((role, i) => (
                      <span
                        key={role}
                        className={`px-3 py-1.5 rounded-full text-xs font-light font-chakra border transition-colors ${
                          i === 0
                            ? "bg-[#ff7800]/10 border-[#ff7800]/40 text-[#ff7800]"
                            : "bg-gray-100 border-gray-200 text-gray-500"
                        }`}
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="h-px w-full bg-gray-200" />

                <div className="flex flex-col gap-5">
                  {[
                    { label: "Location", value: "Accra, Ghana 🇬🇭" },
                    { label: "Focus", value: "React · Tailwind · UI/UX · Node.js" },
                    { label: "Availability", value: "Open to opportunities", highlight: true },
                  ].map(({ label, value, highlight }) => (
                    <div key={label} className="flex justify-between items-center border-b border-gray-100 pb-4 last:border-0">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-chakra">{label}</span>
                      <span className={`text-sm font-light font-chakra ${highlight ? "text-green-500" : "text-gray-700"}`}>
                        {highlight && (
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400 mr-2 animate-pulse align-middle" />
                        )}
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-4">
                  <p className="text-base text-gray-600 font-light font-chakra leading-[1.9]">
                    I build interfaces people actually enjoy using — then make sure they work
                    under the hood too. As both a{" "}
                    <span className="text-black font-normal">developer</span> and a{" "}
                    <span className="text-[#ff7800]">UI/UX designer</span>, I own the full journey:
                    from the first wireframe to the final deployed product.
                  </p>
                  <p className="text-base text-gray-400 font-light font-chakra leading-[1.9]">
                    Based in Accra, I bring a sharp eye for design and a full-stack mindset to
                    every problem I work on. I learn constantly, ship deliberately.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-chakra">Proficiency</p>
                  {[
                    { name: "UI/UX Design", level: 88 },
                    { name: "React & Tailwind", level: 92 },
                    { name: "JavaScript", level: 85 },
                    { name: "Node.js & SQL", level: 72 },
                  ].map(({ name, level }) => (
                    <div key={name} className="flex flex-col gap-2">
                      <div className="flex justify-between">
                        <span className="text-xs text-gray-500 font-chakra font-light">{name}</span>
                        <span className="text-xs text-gray-400 font-chakra">{level}%</span>
                      </div>
                      <div className="h-[3px] w-full bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-[#ff7800] to-orange-300 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Projects Section ── */}
      <section id="projects" className="py-24 relative z-10">
        <div className="container mx-auto px-6 max-w-5xl">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex items-end justify-between mb-16"
          >
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-10 bg-[#ff7800]/60" />
                <span className="text-xs uppercase tracking-[0.25em] text-[#ff7800] font-medium font-chakra">Work</span>
              </div>
              <h2 className="text-5xl font-light text-black font-chakra leading-tight">
                Selected<br />
                <span className="italic text-[#ff7800]">projects.</span>
              </h2>
            </div>
            <p className="text-sm text-gray-400 font-light font-chakra hidden md:block">
              Hover a card to flip
            </p>
          </motion.div>

          {/* 2-col grid of flip cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <FlipCard key={idx} project={project} idx={idx} />
            ))}
          </div>

        </div>
      </section>

      {/* ── Resume Section ── */}
      <section id="resume" className="py-24 relative z-10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-orange-900/15 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>

            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-10 bg-[#ff7800]/60" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#ff7800] font-medium font-chakra">Resume</span>
            </div>

            <div className="grid md:grid-cols-2 gap-px bg-gray-800/40 rounded-2xl overflow-hidden border border-gray-700/50">

              <div className="bg-gray-950/80 backdrop-blur-sm p-10 flex flex-col justify-between gap-10">
                <div>
                  <h2 className="text-5xl font-light text-white leading-tight font-chakra mb-4">
                    My work,<br />
                    <span className="italic text-[#ff7800]">on paper.</span>
                  </h2>
                  <p className="text-gray-400 font-light font-chakra text-base leading-relaxed">
                    A full overview of my education, experience, and technical skills — packaged into one clean document.
                  </p>
                </div>
                <motion.a
                  href={pdf}
                  download
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-3 px-7 py-4 bg-[#ff7800] text-white rounded-2xl font-light font-chakra text-sm w-fit hover:bg-orange-500 transition-colors shadow-lg shadow-orange-900/30"
                >
                  <Download className="w-4 h-4" />
                  Download Resume (PDF)
                </motion.a>
              </div>

              <div className="bg-gray-900/60 backdrop-blur-sm p-10 flex flex-col justify-between gap-8">
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-chakra">What's inside</p>
                <div className="flex flex-col gap-6">
                  {[
                    { title: "Education", desc: "Academic background and relevant coursework", icon: "🎓" },
                    { title: "Experience", desc: "Projects, freelance work, and professional roles", icon: "💼" },
                    { title: "Skills", desc: "React, Node.js, Tailwind, SQL and more", icon: "⚡" },
                  ].map(({ title, desc, icon }) => (
                    <div key={title} className="flex items-start gap-4 group">
                      <span className="text-xl mt-0.5">{icon}</span>
                      <div className="border-b border-gray-800 pb-5 w-full group-last:border-0 group-last:pb-0">
                        <p className="text-white font-light font-chakra text-base">{title}</p>
                        <p className="text-gray-500 font-light font-chakra text-sm mt-0.5">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-[11px] text-gray-600 font-chakra font-light">PDF · Last updated 2025</p>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Contact Section ── */}
      <section id="contact" className="py-24 relative z-10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-900/15 rounded-full blur-[80px]" />
        </div>

        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>

            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-10 bg-[#ff7800]/60" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#ff7800] font-medium font-chakra">Contact</span>
            </div>

            <h2 className="text-5xl font-light text-gray-300 mb-16 leading-tight font-chakra">
              Let's <span className="italic text-[#ff7800]">build</span> something<br />together.
            </h2>

            <div className="grid md:grid-cols-5 gap-px bg-gray-800/60 rounded-2xl overflow-hidden border border-gray-700/50">

              <div className="md:col-span-3 bg-gray-950/80 backdrop-blur-sm p-10 space-y-8">
                {[
                  { label: "Email", value: "jodiyirenkyi@gmail.com", href: "mailto:jodiyirenkyi@gmail.com" },
                  { label: "Phone", value: "+233 59 814 1926", href: "tel:+233598141926" },
                  { label: "Location", value: "Accra, Ghana", href: null },
                ].map(({ label, value, href }) => (
                  <div key={label} className="flex flex-col gap-1 border-b border-gray-800 pb-7 last:border-0 last:pb-0">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-chakra">{label}</span>
                    {href ? (
                      <a href={href} className="text-xl font-light text-white hover:text-[#ff7800] transition-colors duration-200 font-chakra">
                        {value}
                      </a>
                    ) : (
                      <span className="text-xl font-light text-white font-chakra">{value}</span>
                    )}
                  </div>
                ))}
              </div>

              <div className="md:col-span-2 bg-orange-950/20 backdrop-blur-sm p-10 flex flex-col justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-3 font-chakra">Name</p>
                  <p className="text-lg font-light text-white leading-snug font-chakra">
                    Yirenkyi<br />
                    <span className="text-[#ff7800]">Jodi Kwesi Kwakye</span>
                  </p>
                </div>

                <div className="mt-12">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-5 font-chakra">Find me on</p>
                  <div className="flex flex-col gap-3">
                    {[
                      { label: "GitHub", href: "https://github.com/JodiKKY", icon: "fab fa-github" },
                      { label: "LinkedIn", href: "https://www.linkedin.com/in/JODIYIRENKYI", icon: "fab fa-linkedin" },
                      { label: "Twitter", href: "https://twitter.com/JodiKKY", icon: "fab fa-twitter" },
                    ].map(({ label, href, icon }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200 group"
                      >
                        <span className="w-8 h-8 rounded-lg bg-gray-800 group-hover:bg-[#ff7800] flex items-center justify-center transition-colors duration-200 text-sm">
                          <i className={icon} />
                        </span>
                        <span className="text-sm font-light tracking-wide font-chakra">{label}</span>
                        <span className="ml-auto text-gray-700 group-hover:text-[#ff7800] transition-colors text-xs">↗</span>
                      </a>
                    ))}
                  </div>
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