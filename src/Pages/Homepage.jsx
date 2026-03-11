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
    title: "MergeSeed",
    subtitle: "Microfinance Company Website",
    desc: "A corporate website for a microfinance company based in Ghana. Showcases company profile, services, team, and contact details.",
    tech: ["Tailwind CSS", "React"],
    link: "https://github.com/JodiKKY/MergeSeed",
    demo: "https://mergeseed.com",
    image: pro1,
  },
  {
    title: "Jokams Limited",
    subtitle: "Chemical Company Website",
    desc: "A corporate website for a chemical import and distribution company based in Accra. Showcases products, team, and contact details.",
    tech: ["Tailwind CSS", "React"],
    link: "https://github.com/JodiKKY/Jokams",
    demo: "https://jokamsltd.com",
    image: pro2,
  },
  {
    title: "BiteWise",
    subtitle: "Restaurant Review Platform",
    desc: "A platform where users can discover, review, and rate restaurants in their area.",
    tech: ["React", "Node.js", "MySQL"],
    link: "https://github.com/JodiKKY/BiteWise",
    demo: null,
    image: pro3,
  },
  {
    title: "EmployNexa",
    subtitle: "Job Listing Web App",
    desc: "A modern job board that fetches listings from a job API and presents them in a clean, modern interface.",
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

/* ── ProjectShowcase ── */
const ProjectShowcase = ({ project, idx }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: idx * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative w-full group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top meta row */}
      <div className="flex items-center justify-between mb-4 px-1">
        <div className="flex items-center gap-4">
          <span className="text-[11px] text-gray-400 font-chakra tracking-[0.2em]">
            {String(idx + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
          </span>
          <div className="h-px w-8 bg-gray-300" />
          <span className="text-[11px] text-gray-400 font-chakra tracking-[0.15em] uppercase">
            {project.subtitle}
          </span>
        </div>
        <div className="flex gap-2">
          {project.tech.map((t, i) => (
            <span key={i} className="text-[10px] font-chakra text-gray-400 uppercase tracking-wider">
              {t}{i < project.tech.length - 1 ? " ·" : ""}
            </span>
          ))}
        </div>
      </div>

      {/* Image container */}
      <div
        className="relative w-full overflow-hidden rounded-2xl"
        style={{ height: "520px" }}
      >
        {/* Project image */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out"
          style={{ transform: hovered ? "scale(1.04)" : "scale(1.0)" }}
        />

        {/* Dark overlay — lightens on hover */}
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%)",
            opacity: hovered ? 0.6 : 1,
          }}
        />

        {/* Hover detail panel slides up */}
        <div
          className="absolute inset-x-0 bottom-0 p-8 transition-all duration-500 ease-out"
          style={{ transform: hovered ? "translateY(0)" : "translateY(20px)", opacity: hovered ? 1 : 0 }}
        >
          <p className="text-sm text-white/70 font-light font-chakra leading-relaxed max-w-xl mb-5">
            {project.desc}
          </p>
          <div className="flex gap-3">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-xs font-chakra font-light hover:bg-[#ff7800] hover:text-white transition-colors"
            >
              <i className="fab fa-github text-sm" /> GitHub
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#ff7800] text-white text-xs font-chakra font-light hover:bg-orange-500 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" /> Live Site
              </a>
            )}
          </div>
        </div>

        {/* Bottom-left title — always visible */}
        <div className="absolute bottom-0 left-0 right-0 p-8 flex items-end justify-between">
          <h3
            className="font-light font-chakra text-white leading-none transition-all duration-500"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", transform: hovered ? "translateY(-90px)" : "translateY(0)" }}
          >
            {project.title}
          </h3>

          {/* Arrow indicator */}
          <div
            className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center transition-all duration-300 mb-1"
            style={{
              background: hovered ? "#ff7800" : "rgba(255,255,255,0.1)",
              borderColor: hovered ? "#ff7800" : "rgba(255,255,255,0.3)",
              transform: hovered ? "rotate(45deg)" : "rotate(0deg)",
            }}
          >
            <span className="text-white text-lg">↗</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ── Homepage ── */
const Homepage = () => {
  const [showSubtitle, setShowSubtitle] = useState(false);

  return (
    <main className="bg-white text-black font-chakra overflow-x-hidden relative">

      {/* ── Global ambient background ── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,120,0,0.07) 0%, transparent 70%)" }} />
        <div className="absolute top-[40%] -right-40 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,150,50,0.05) 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,120,0,0.06) 0%, transparent 70%)" }} />
        <div className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(circle, #ff7800 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }} />
      </div>

      {/* ── Hero ── */}
      <section className="relative py-32 text-center" style={{ zIndex: 1 }}>
        <motion.h1
          initial="hidden" animate="visible" variants={fadeUp}
          className="text-5xl md:text-6xl font-medium font-chakra text-black mb-6 leading-tight tracking-wide"
        >
          <Typewriter
            words={["Hi, I'm Yirenkyi Jodi"]}
            loop={1} cursor cursorStyle="" typeSpeed={80} deleteSpeed={50} delaySpeed={1000}
            onLoopDone={() => setShowSubtitle(true)}
          />
        </motion.h1>

        {showSubtitle && (
          <motion.p
            initial="hidden" animate="visible" custom={1} variants={fadeUp}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 font-chakra font-light"
          >
            <Typewriter
              words={["I craft minimal, futuristic, and ultra-modern web experiences."]}
              loop={1} cursor cursorStyle="" typeSpeed={40} deleteSpeed={20} delaySpeed={500}
            />
          </motion.p>
        )}

        <motion.div
          initial="hidden" animate="visible" custom={2} variants={fadeUp}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#projects"
            className="px-8 py-3 bg-[#ff7800] text-white rounded-3xl hover:scale-105 hover:bg-gray-800 transition-all inline-flex items-center gap-2 font-light font-chakra">
            <FolderKanban className="w-5 h-5" /> View Projects
          </a>
          <a href={pdf} download
            className="px-8 py-3 border border-[#ff7800] text-black rounded-3xl hover:bg-[#ff7800] hover:text-white transition-all inline-flex items-center gap-2 font-light font-chakra">
            <Download className="w-5 h-5" /> Download Resume
          </a>
        </motion.div>
      </section>

      {/* ── About ── */}
      <section id="about" className="py-24 relative" style={{ zIndex: 1 }}>
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
                      <span key={role} className={`px-3 py-1.5 rounded-full text-xs font-light font-chakra border transition-colors ${
                        i === 0 ? "bg-[#ff7800]/10 border-[#ff7800]/40 text-[#ff7800]" : "bg-white/60 border-gray-200 text-gray-500"
                      }`}>{role}</span>
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
                        {highlight && <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400 mr-2 animate-pulse align-middle" />}
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-4">
                  <p className="text-base text-gray-600 font-light font-chakra leading-[1.9]">
                    I build interfaces people actually enjoy using — then make sure they work under the hood too. As both a{" "}
                    <span className="text-black font-normal">developer</span> and a{" "}
                    <span className="text-[#ff7800]">UI/UX designer</span>, I own the full journey: from the first wireframe to the final deployed product.
                  </p>
                  <p className="text-base text-gray-400 font-light font-chakra leading-[1.9]">
                    Based in Accra, I bring a sharp eye for design and a full-stack mindset to every problem I work on. I learn constantly, ship deliberately.
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

      {/* ── Projects ── */}
      <section id="projects" className="py-24 relative" style={{ zIndex: 1 }}>
        <div className="container mx-auto px-6 max-w-5xl">

          {/* Header */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="flex items-end justify-between mb-16"
          >
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-10 bg-[#ff7800]/60" />
                <span className="text-xs uppercase tracking-[0.25em] text-[#ff7800] font-medium font-chakra">Works</span>
              </div>
              <h2 className="text-5xl font-light text-black font-chakra leading-tight">
                Selected<br />
                <span className="italic text-[#ff7800]">projects.</span>
              </h2>
            </div>
            <p className="text-sm text-gray-400 font-light font-chakra hidden md:block">
              {projects.length} projects · hover to explore
            </p>
          </motion.div>

          {/* Showcase list */}
          <div className="flex flex-col gap-6">
            {projects.map((project, idx) => (
              <ProjectShowcase key={idx} project={project} idx={idx} />
            ))}
          </div>

        </div>
      </section>

      {/* ── Resume ── */}
      <section id="resume" className="py-24 relative" style={{ zIndex: 1 }}>
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-10 bg-[#ff7800]/60" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#ff7800] font-medium font-chakra">Resume</span>
            </div>
            <div className="grid md:grid-cols-2 gap-px rounded-2xl overflow-hidden border border-orange-100/80"
              style={{ background: "rgba(255,120,0,0.04)" }}>
              <div className="p-10 flex flex-col justify-between gap-10"
                style={{ background: "rgba(255,255,255,0.70)", backdropFilter: "blur(12px)" }}>
                <div>
                  <h2 className="text-5xl font-light text-black leading-tight font-chakra mb-4">
                    My work,<br /><span className="italic text-[#ff7800]">on paper.</span>
                  </h2>
                  <p className="text-gray-500 font-light font-chakra text-base leading-relaxed">
                    A full overview of my education, experience, and technical skills — packaged into one clean document.
                  </p>
                </div>
                <motion.a href={pdf} download whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-3 px-7 py-4 bg-[#ff7800] text-white rounded-2xl font-light font-chakra text-sm w-fit hover:bg-orange-500 transition-colors shadow-lg shadow-orange-200">
                  <Download className="w-4 h-4" /> Download Resume (PDF)
                </motion.a>
              </div>
              <div className="p-10 flex flex-col justify-between gap-8"
                style={{ background: "rgba(255,240,220,0.35)", backdropFilter: "blur(12px)" }}>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-chakra">What's inside</p>
                <div className="flex flex-col gap-6">
                  {[
                    { title: "Education", desc: "Academic background and relevant coursework", icon: "🎓" },
                    { title: "Experience", desc: "Projects, freelance work, and professional roles", icon: "💼" },
                    { title: "Skills", desc: "React, Node.js, Tailwind, SQL and more", icon: "⚡" },
                  ].map(({ title, desc, icon }) => (
                    <div key={title} className="flex items-start gap-4 group">
                      <span className="text-xl mt-0.5">{icon}</span>
                      <div className="border-b border-orange-100 pb-5 w-full group-last:border-0 group-last:pb-0">
                        <p className="text-gray-800 font-light font-chakra text-base">{title}</p>
                        <p className="text-gray-400 font-light font-chakra text-sm mt-0.5">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-[11px] text-gray-400 font-chakra font-light">PDF · Last updated 2025</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="py-24 relative" style={{ zIndex: 1 }}>
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-10 bg-[#ff7800]/60" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#ff7800] font-medium font-chakra">Contact</span>
            </div>
            <h2 className="text-5xl font-light text-black mb-16 leading-tight font-chakra">
              Let's <span className="italic text-[#ff7800]">build</span> something<br />together.
            </h2>
            <div className="grid md:grid-cols-5 gap-px rounded-2xl overflow-hidden border border-orange-100">
              <div className="md:col-span-3 p-10 space-y-8"
                style={{ background: "rgba(255,255,255,0.75)", backdropFilter: "blur(12px)" }}>
                {[
                  { label: "Email", value: "jodiyirenkyi@gmail.com", href: "mailto:jodiyirenkyi@gmail.com" },
                  { label: "Phone", value: "+233 59 814 1926", href: "tel:+233598141926" },
                  { label: "Location", value: "Accra, Ghana", href: null },
                ].map(({ label, value, href }) => (
                  <div key={label} className="flex flex-col gap-1 border-b border-gray-100 pb-7 last:border-0 last:pb-0">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-chakra">{label}</span>
                    {href ? (
                      <a href={href} className="text-xl font-light text-black hover:text-[#ff7800] transition-colors duration-200 font-chakra">{value}</a>
                    ) : (
                      <span className="text-xl font-light text-black font-chakra">{value}</span>
                    )}
                  </div>
                ))}
              </div>
              <div className="md:col-span-2 p-10 flex flex-col justify-between"
                style={{ background: "rgba(255,240,220,0.45)", backdropFilter: "blur(12px)" }}>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-3 font-chakra">Name</p>
                  <p className="text-lg font-light text-black leading-snug font-chakra">
                    Yirenkyi<br /><span className="text-[#ff7800]">Jodi Kwesi Kwakye</span>
                  </p>
                </div>
                <div className="mt-12">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-5 font-chakra">Find me on</p>
                  <div className="flex flex-col gap-3">
                    {[
                      { label: "GitHub", href: "https://github.com/JodiKKY", icon: "fab fa-github" },
                      { label: "LinkedIn", href: "https://www.linkedin.com/in/JODIYIRENKYI", icon: "fab fa-linkedin" },
                      { label: "Twitter", href: "https://twitter.com/JodiKKY", icon: "fab fa-twitter" },
                    ].map(({ label, href, icon }) => (
                      <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-3 text-gray-400 hover:text-black transition-colors duration-200 group">
                        <span className="w-8 h-8 rounded-lg bg-white/80 group-hover:bg-[#ff7800] group-hover:text-white border border-gray-200 flex items-center justify-center transition-colors duration-200 text-sm shadow-sm">
                          <i className={icon} />
                        </span>
                        <span className="text-sm font-light tracking-wide font-chakra">{label}</span>
                        <span className="ml-auto text-gray-300 group-hover:text-[#ff7800] transition-colors text-xs">↗</span>
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