import React, { useState } from "react";
import { Download, FolderKanban, ExternalLink, ArrowUpRight, Github, Figma, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import pdf from "../assets/CV.pdf";

import pro1 from "../assets/project1.png";
import pro2 from "../assets/project2.png";
import pro3 from "../assets/project3.png";
import pro4 from "../assets/project4.png";
import pro5 from "../assets/project5.png";
import pro6 from "../assets/project6.png";
import pro7 from "../assets/project7.png";
import pro8 from "../assets/project8.png";
import fig1 from "../assets/figma1.png";
import fig2 from "../assets/figma2.png";
import fig3 from "../assets/figma3.png";
import memoji from "../assets/memoji.png";

import heroBackground from "../assets/hero-background.png";
import { i } from "framer-motion/client";

// ─── Website projects ───────────────────────────────────────────────────────
const websiteProjects = [
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
    desc: "A corporate website for a chemical company based in Ghana. Showcases company profile, services, team, and contact details.",
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
  {
    title: "MEEA Foundation",
    subtitle: "Non-Profit Organization Website",
    desc: "A website for a non-profit that provides healthcare and provision to kids with sickle cell disease.",
    tech: ["Next.js", "Tailwind CSS"],
    link: "https://github.com/JodiKKY/meaafoundation",
    demo: "https://meeafoundation.vercel.app",
    image: pro5,
  },
  {
    title: "Spend",
    subtitle: "Expense Tracker App",
    desc: "An expense tracker app that allows you to track your expenses and income with clarity.",
    tech: ["Tailwind CSS", "React"],
    link: "https://github.com/JodiKKY/spend",
    demo: "https://spendapp.tonisedjoah.com/",
    image: pro6,
  },
  {
    title: "Twïan",
    subtitle: "Braids Booking Website",
    desc: "A booking website for a braids service that lets users schedule appointments with stylists.",
    tech: ["Next.js", "Tailwind CSS"],
    link: "https://github.com/JodiKKY/twian",
    demo: "https://twain-dun.vercel.app/",
    image: pro7,
  },
  {
    title: "ConceptMabelles",
    subtitle: "Fashion Brand Website",
    desc: "A modern website for a fashion brand that showcases their latest collections and provides an immersive shopping experience.",
    tech: ["Next.js", "Tailwind CSS"],
    link: "https://github.com/JodiKKY/conceptmabelles",
    demo: "https://conceptmabelles.vercel.app/",
    image: pro8,
  }
];


const figmaProjects = [
  {
    title: "CarScope",
    subtitle: "Car Exploration Site UI/UX",
    desc: "A sleek, user-friendly interface for a car exploration website. Features include intuitive navigation, dynamic search filters, and detailed car profiles.",
    tech: ["Figma", "Auto Layout", "Components"],
    link: "https://www.figma.com/",
    demo: null,
    image: fig1,
  },
  {
    title: "Rebranding of CalBank Mobile App",
    subtitle: "E-Banking App UI/UX",
    desc: "A comprehensive redesign of CalBank's mobile app, focusing on a modern aesthetic, improved user flow, and enhanced accessibility. The new design incorporates a vibrant color palette, intuitive navigation, and responsive layouts for a seamless banking experience.",
    tech: ["Figma", "Prototyping", "Brand Design"],
    link: "https://www.figma.com/",
    demo: null,
    image: fig2,
  },
  {
    title: "Cleanspace Junkies",
    subtitle: "Cleaning website UI/UX",
    desc: "A modern UI/UX design for a cleaning service website, focusing on a clean aesthetic and intuitive user experience.",
    tech: ["Figma", "Design Tokens", "Responsive"],
    link: "https://www.figma.com/",
    demo: null,
    image: fig3,
  },
];

// Split the website projects into pages of 3 for the tabbed sub-navigation.
const WEBSITE_GROUP_SIZE = 3;
const websiteProjectGroups = websiteProjects.reduce((groups, project, idx) => {
  const groupIdx = Math.floor(idx / WEBSITE_GROUP_SIZE);
  if (!groups[groupIdx]) groups[groupIdx] = [];
  groups[groupIdx].push(project);
  return groups;
}, []);

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

// ─── Shared project showcase (used for both tabs) ─────────────────────────────
const ProjectsShowcase = ({ projects }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  // Reset active card when the project list changes (tab switch).
  const active = projects[Math.min(activeIndex, projects.length - 1)];

  return (
    <div className="grid lg:grid-cols-[minmax(260px,320px)_1fr] gap-8 lg:gap-10 items-start">
      {/* Navigator list */}
      <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 snap-x snap-mandatory">
        {projects.map((project, idx) => {
          const isActive = idx === Math.min(activeIndex, projects.length - 1);
          return (
            <button
              key={project.title}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={`group text-left shrink-0 lg:shrink w-full min-w-[240px] lg:min-w-0 rounded-2xl border p-4 transition-all duration-300 snap-start ${
                isActive
                  ? "border-[#ff7800]/50 bg-white shadow-lg shadow-orange-100/60"
                  : "border-orange-100/80 bg-white/60 hover:border-[#ff7800]/30 hover:bg-white"
              }`}
            >
              <div className="flex items-start gap-4">
                <span className={`text-[11px] font-chakra tracking-[0.2em] pt-1 transition-colors ${isActive ? "text-[#ff7800]" : "text-gray-400"}`}>
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className={`font-chakra font-light text-base transition-colors ${isActive ? "text-black" : "text-gray-700"}`}>
                    {project.title}
                  </h3>
                  <p className="text-[11px] text-gray-400 font-chakra uppercase tracking-[0.12em] mt-1 truncate">
                    {project.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {project.tech.slice(0, 2).map((t) => (
                      <span
                        key={t}
                        className={`px-2 py-0.5 rounded-full text-[9px] font-chakra uppercase tracking-wider ${
                          isActive ? "bg-[#ff7800]/10 text-[#ff7800]" : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <ArrowUpRight className={`w-4 h-4 shrink-0 transition-all duration-300 ${
                  isActive ? "text-[#ff7800] rotate-45" : "text-gray-300 group-hover:text-gray-400"
                }`} />
              </div>
              <div className="mt-4 h-[2px] w-full bg-gray-100 rounded-full overflow-hidden hidden lg:block">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#ff7800] to-orange-300"
                  initial={false}
                  animate={{ width: isActive ? "100%" : "0%" }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </div>
            </button>
          );
        })}
      </div>

      {/* Active preview card */}
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${active.title}-${activeIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative overflow-hidden rounded-[1.75rem] border border-orange-100/80 bg-white shadow-2xl shadow-orange-100/40"
          >
            <div className="relative overflow-hidden" style={{ height: "clamp(280px, 42vw, 480px)" }}>
              <motion.img
                key={active.image}
                src={active.image}
                alt={active.title}
                initial={{ scale: 1.06 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/5" />
              <div className="absolute top-5 left-5">
                <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-[10px] uppercase tracking-[0.2em] text-white/90 font-chakra">
                  {String(Math.min(activeIndex, projects.length - 1) + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#ff7800] font-chakra mb-2">{active.subtitle}</p>
                <h3 className="text-3xl md:text-4xl font-light font-chakra text-white leading-tight mb-4">{active.title}</h3>
                <p className="text-sm text-white/75 font-light font-chakra leading-relaxed max-w-2xl mb-6">{active.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {active.tech.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-[10px] font-chakra uppercase tracking-wider text-white/90">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={active.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-xs font-chakra font-light hover:bg-[#ff7800] hover:text-white transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" /> GitHub
                  </a>
                  {active.demo && (
                    <a
                      href={active.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#ff7800] text-white text-xs font-chakra font-light hover:bg-orange-500 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" /> Live Site
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Prev / next */}
        <div className="hidden lg:flex absolute -bottom-5 right-6 gap-2">
          <button
            type="button"
            onClick={() => setActiveIndex((i) => (i === 0 ? projects.length - 1 : i - 1))}
            className="w-10 h-10 rounded-full border border-orange-100 bg-white shadow-md text-gray-500 hover:text-[#ff7800] hover:border-[#ff7800]/40 transition-colors font-chakra"
            aria-label="Previous project"
          >←</button>
          <button
            type="button"
            onClick={() => setActiveIndex((i) => (i === projects.length - 1 ? 0 : i + 1))}
            className="w-10 h-10 rounded-full border border-orange-100 bg-white shadow-md text-gray-500 hover:text-[#ff7800] hover:border-[#ff7800]/40 transition-colors font-chakra"
            aria-label="Next project"
          >→</button>
        </div>
      </div>
    </div>
  );
};

// ─── Tab pill ─────────────────────────────────────────────────────────────────
const TAB_DEFS = [
  {
    id: "websites",
    label: "Websites",
    Icon: Globe,
    count: websiteProjects.length,
    projects: websiteProjects,
  },
  {
    id: "figma",
    label: "Figma / Design",
    Icon: Figma,
    count: figmaProjects.length,
    projects: figmaProjects,
  },
];

// ─── Projects section ─────────────────────────────────────────────────────────
const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState("websites");
  const [activeGroup, setActiveGroup] = useState(0);
  const current = TAB_DEFS.find((t) => t.id === activeTab);

  const handleTabClick = (id) => {
    setActiveTab(id);
    setActiveGroup(0);
  };

  // Within the Websites tab, the 7 builds are paged 3-at-a-time.
  const isWebsitesTab = activeTab === "websites";
  const visibleProjects = isWebsitesTab
    ? websiteProjectGroups[activeGroup] || []
    : current.projects;

  return (
    <section id="projects" className="py-24 relative overflow-hidden" style={{ zIndex: 1 }}>
      {/* Decorative drifting memoji */}
      <motion.div
        className="absolute -right-16 top-24 w-56 h-56 opacity-[0.05] pointer-events-none hidden lg:block"
        style={{
          backgroundImage: `url(${memoji})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        animate={{ y: [0, -12, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header row */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10"
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
          <p className="text-sm text-gray-400 font-light font-chakra max-w-xs md:text-right">
            {websiteProjects.length + figmaProjects.length} builds shipped · tap a project to preview
          </p>
        </motion.div>

        {/* ── Tab switcher ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex gap-2 mb-6"
        >
          {TAB_DEFS.map(({ id, label, Icon, count }) => {
            const isActive = activeTab === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => handleTabClick(id)}
                className={`relative inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border text-sm font-chakra font-light transition-all duration-300 ${
                  isActive
                    ? "bg-[#ff7800] border-[#ff7800] text-white shadow-lg shadow-orange-200/50"
                    : "bg-white border-orange-100 text-gray-500 hover:border-[#ff7800]/40 hover:text-[#ff7800]"
                }`}
              >
                <Icon className="w-4 h-4" />
                {label}
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-chakra transition-colors ${
                    isActive ? "bg-white/20 text-white" : "bg-gray-100 text-gray-400"
                  }`}
                >
                  {count}
                </span>
                {isActive && (
                  <motion.span
                    layoutId="tab-indicator"
                    className="absolute inset-0 rounded-full bg-[#ff7800] -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </motion.div>

        {/* ── Group pages (Websites tab only — 3 builds per page) ── */}
        {isWebsitesTab && websiteProjectGroups.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-wrap gap-2 mb-6"
          >
            {websiteProjectGroups.map((group, idx) => {
              const start = idx * WEBSITE_GROUP_SIZE + 1;
              const end = start + group.length - 1;
              const isActive = idx === activeGroup;
              return (
                <button
                  key={`group-${idx}`}
                  type="button"
                  onClick={() => setActiveGroup(idx)}
                  className={`px-4 py-1.5 rounded-full border text-[11px] font-chakra uppercase tracking-[0.15em] transition-all duration-300 ${
                    isActive
                      ? "border-[#ff7800] bg-[#ff7800]/10 text-[#ff7800]"
                      : "border-orange-100 bg-white/60 text-gray-400 hover:border-[#ff7800]/40 hover:text-[#ff7800]"
                  }`}
                >
                  {start === end ? `Build ${String(start).padStart(2, "0")}` : `Builds ${String(start).padStart(2, "0")}–${String(end).padStart(2, "0")}`}
                </button>
              );
            })}
          </motion.div>
        )}

        {/* ── Tab description line ── */}
        <AnimatePresence mode="wait">
          <motion.p
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="text-xs text-gray-400 font-chakra uppercase tracking-[0.18em] mb-10"
          >
            {activeTab === "websites"
              ? "→ Shipped web products — live URLs, open-source code"
              : "→ UI/UX work — wireframes, visual systems, and prototypes in Figma"}
          </motion.p>
        </AnimatePresence>

        {/* ── Project showcase — re-renders on tab/group switch ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={isWebsitesTab ? `websites-${activeGroup}` : "figma"}
            initial={{ opacity: 0, x: activeTab === "websites" ? -24 : 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: activeTab === "websites" ? 24 : -24 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <ProjectsShowcase projects={visibleProjects} />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

// ─── Homepage ─────────────────────────────────────────────────────────────────
const Homepage = () => {
  const [showSubtitle, setShowSubtitle] = useState(false);

  return (
    <main className="bg-white text-black font-chakra overflow-x-hidden relative">

      {/* ── Global ambient background ── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/90 to-white" />
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,120,0,0.08) 0%, transparent 70%)" }} />
        <div className="absolute top-[40%] -right-40 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,150,50,0.06) 0%, transparent 70%)" }} />
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "radial-gradient(circle, #ff7800 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }} />
        <motion.div
          className="absolute"
          style={{
            right: "-2%",
            top: "0%",
            width: "clamp(320px, 34vw, 520px)",
            aspectRatio: "1 / 1",
            backgroundImage: `url(${memoji})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            opacity: 0.12,
            filter: "grayscale(30%)",
          }}
          animate={{ y: [0, -18, 0], rotate: [-2, 1, -2] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* ── Hero ── */}
      <section className="relative py-20 md:py-28" style={{ zIndex: 1 }}>
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <motion.div
                initial="hidden" animate="visible" variants={fadeUp}
                className="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full border border-[#ff7800]/20 bg-white/70 backdrop-blur-sm"
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs uppercase tracking-[0.2em] text-gray-500 font-chakra">Open to opportunities · Accra, Ghana</span>
              </motion.div>

              <motion.h1
                initial="hidden" animate="visible" variants={fadeUp}
                className="text-5xl md:text-6xl lg:text-7xl font-medium font-chakra text-black mb-6 leading-[1.05] tracking-wide"
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
                  className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 mb-10 font-chakra font-light leading-relaxed"
                >
                  <Typewriter
                    words={["I craft minimal, futuristic, and ultra-modern web experiences."]}
                    loop={1} cursor cursorStyle="" typeSpeed={40} deleteSpeed={20} delaySpeed={500}
                  />
                </motion.p>
              )}

              <motion.div
                initial="hidden" animate="visible" custom={2} variants={fadeUp}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <a href="#projects"
                  className="px-8 py-3.5 bg-[#ff7800] text-white rounded-3xl hover:scale-105 hover:bg-gray-800 transition-all inline-flex items-center justify-center gap-2 font-light font-chakra shadow-lg shadow-orange-200/60">
                  <FolderKanban className="w-5 h-5" /> View Projects
                </a>
                <a href={pdf} download
                  className="px-8 py-3.5 border border-[#ff7800]/40 text-black rounded-3xl hover:bg-[#ff7800] hover:text-white transition-all inline-flex items-center justify-center gap-2 font-light font-chakra bg-white/70 backdrop-blur-sm">
                  <Download className="w-5 h-5" /> Download Resume
                </a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
              className="relative mx-auto w-full max-w-md lg:max-w-none"
            >
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#ff7800]/20 via-orange-200/10 to-transparent blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/80 shadow-2xl shadow-orange-200/40 bg-white/60 backdrop-blur-md p-2">
                <motion.img
                  src={memoji}
                  alt="Yirenkyi Jodi — Front-End Developer"
                  className="w-full aspect-square object-contain rounded-[1.6rem] p-4"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl bg-white/85 backdrop-blur-md border border-orange-100 px-4 py-3 shadow-lg">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-chakra">Developer & Designer</p>
                    <p className="text-sm font-light text-black font-chakra">Jodi Kwesi Yirenkyi</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#ff7800]/10 border border-[#ff7800]/30 flex items-center justify-center text-[#ff7800] text-sm font-chakra">
                    JY
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
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

          {/* ── Identity card (replaces memoji) ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-2xl border border-orange-900/20 shadow-xl shadow-black/20"
          >
            <svg
              viewBox="0 0 680 680"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full aspect-square"
              style={{ background: "#0f0f0f" }}
            >
              {/* Scanlines */}
              {Array.from({ length: 16 }, (_, i) => (
                <line key={i} x1="0" y1={(i + 1) * 40} x2="680" y2={(i + 1) * 40}
                  stroke="#ffffff" strokeOpacity="0.015" strokeWidth="1" />
              ))}

              {/* Title bar */}
              <rect x="40" y="48" width="600" height="36" rx="6" fill="#1e1e1e" />
              <rect x="40" y="48" width="600" height="36" rx="6" fill="none"
                stroke="#ffffff" strokeOpacity="0.06" strokeWidth="0.75" />
              <circle cx="68"  cy="66" r="6" fill="#ff5f57" />
              <circle cx="90"  cy="66" r="6" fill="#febc2e" />
              <circle cx="112" cy="66" r="6" fill="#28c840" />
              <rect x="136" y="54" width="148" height="24" rx="4" fill="#2a2a2a" />
              <text x="210" y="70" textAnchor="middle"
                fontFamily="'Chakra Petch', monospace" fontSize="10" fill="#888" letterSpacing="0.5">
                portfolio.jsx
              </text>

              {/* Editor body */}
              <rect x="40" y="84" width="600" height="528" fill="#141414" />

              {/* Gutter */}
              <rect x="40" y="84" width="48" height="528" fill="#111111" />
              <line x1="88" y1="84" x2="88" y2="612"
                stroke="#ffffff" strokeOpacity="0.06" strokeWidth="0.75" />

              {/* Active line highlight + cursor */}
              <rect x="88" y="218" width="552" height="22" fill="#ff7800" fillOpacity="0.07" />
              <rect x="244" y="221" width="2" height="16" fill="#ff7800" fillOpacity="0.9" />

              {/* Line numbers */}
              {Array.from({ length: 23 }, (_, i) => (
                <text key={i} x="78" y={116 + i * 22} textAnchor="end"
                  fontFamily="'Chakra Petch', monospace" fontSize="11" fill="#444">
                  {i + 1}
                </text>
              ))}

              {/* Code tokens */}
              {[
                { x: 100, y: 116, fill: "#c792ea", t: "import" },
                { x: 163, y: 116, fill: "#89ddff", t: " React" },
                { x: 203, y: 116, fill: "#c792ea", t: " from" },
                { x: 241, y: 116, fill: "#c3e88d", t: " 'react'" },
                { x: 295, y: 116, fill: "#546e7a", t: ";" },

                { x: 100, y: 160, fill: "#c792ea", t: "const" },
                { x: 148, y: 160, fill: "#82aaff", t: " Jodi" },
                { x: 186, y: 160, fill: "#89ddff", t: " =" },
                { x: 204, y: 160, fill: "#546e7a", t: " () => {" },

                { x: 124, y: 182, fill: "#c792ea", t: "const" },
                { x: 172, y: 182, fill: "#eeffff", t: " role" },
                { x: 206, y: 182, fill: "#89ddff", t: " =" },
                { x: 222, y: 182, fill: "#c3e88d", t: " 'Front-End Developer'" },
                { x: 452, y: 182, fill: "#546e7a", t: ";" },

                { x: 124, y: 204, fill: "#c792ea", t: "const" },
                { x: 172, y: 204, fill: "#eeffff", t: " location" },
                { x: 236, y: 204, fill: "#89ddff", t: " =" },
                { x: 252, y: 204, fill: "#c3e88d", t: " 'Accra, Ghana'" },
                { x: 392, y: 204, fill: "#546e7a", t: ";" },

                { x: 124, y: 226, fill: "#c792ea", t: "const" },
                { x: 172, y: 226, fill: "#eeffff", t: " stack" },
                { x: 210, y: 226, fill: "#89ddff", t: " =" },
                { x: 226, y: 226, fill: "#546e7a", t: " [" },

                { x: 148, y: 248, fill: "#ff7800", t: "'React'" },
                { x: 206, y: 248, fill: "#546e7a", t: "," },
                { x: 218, y: 248, fill: "#ff7800", t: " 'Tailwind'" },
                { x: 314, y: 248, fill: "#546e7a", t: "," },
                { x: 326, y: 248, fill: "#ff7800", t: " 'Node.js'" },
                { x: 415, y: 248, fill: "#546e7a", t: "," },

                { x: 148, y: 270, fill: "#ff7800", t: "'Figma'" },
                { x: 206, y: 270, fill: "#546e7a", t: "," },
                { x: 218, y: 270, fill: "#ff7800", t: " 'TypeScript'" },
                { x: 338, y: 270, fill: "#546e7a", t: "," },

                { x: 124, y: 292, fill: "#546e7a", t: "];" },

                { x: 124, y: 336, fill: "#c792ea", t: "return" },
                { x: 178, y: 336, fill: "#546e7a", t: " (" },

                { x: 148, y: 358, fill: "#89ddff", t: "<Developer" },

                { x: 172, y: 380, fill: "#eeffff", t: "  open" },
                { x: 219, y: 380, fill: "#89ddff", t: "=" },
                { x: 228, y: 380, fill: "#546e7a", t: "{true}" },

                { x: 172, y: 402, fill: "#eeffff", t: "  available" },
                { x: 253, y: 402, fill: "#89ddff", t: "=" },
                { x: 262, y: 402, fill: "#546e7a", t: "{true}" },

                { x: 172, y: 424, fill: "#eeffff", t: "  ships" },
                { x: 219, y: 424, fill: "#89ddff", t: "=" },
                { x: 228, y: 424, fill: "#c3e88d", t: " 'deliberately'" },

                { x: 148, y: 446, fill: "#89ddff", t: "/>" },
                { x: 124, y: 468, fill: "#546e7a", t: ")" },
                { x: 100, y: 490, fill: "#546e7a", t: "}" },

                { x: 100, y: 534, fill: "#c792ea", t: "export default" },
                { x: 227, y: 534, fill: "#82aaff", t: " Jodi" },
                { x: 259, y: 534, fill: "#546e7a", t: ";" },

                { x: 100, y: 556, fill: "#37474f", t: "/*" },
                { x: 100, y: 578, fill: "#37474f", t: "  building for the web · Accra · 2025" },
                { x: 100, y: 600, fill: "#37474f", t: "*/" },
              ].map(({ x, y, fill, t }, i) => (
                <text key={i} x={x} y={y}
                  fontFamily="'Chakra Petch', monospace" fontSize="12.5" fill={fill}>
                  {t}
                </text>
              ))}

              {/* Status bar */}
              <rect x="40" y="612" width="600" height="24" fill="#1a1a1a" />
              <line x1="40" y1="612" x2="640" y2="612"
                stroke="#ffffff" strokeOpacity="0.06" strokeWidth="0.5" />
              <circle cx="58" cy="624" r="4" fill="#ff7800" fillOpacity="0.9" />
              <text x="70" y="628"
                fontFamily="'Chakra Petch', monospace" fontSize="9" fill="#555" letterSpacing="1">
                JSX  UTF-8  Tailwind CSS  ·  Ln 6, Col 18
              </text>
              <text x="628" y="628" textAnchor="end"
                fontFamily="'Chakra Petch', monospace" fontSize="9"
                fill="#ff7800" fillOpacity="0.6" letterSpacing="1">
                Jodi K.
              </text>
            </svg>

            <div className="absolute bottom-4 left-4">
              <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-chakra">Based in Accra</p>
              <p className="text-white text-lg font-light font-chakra">Building for the web</p>
            </div>
          </motion.div>
          {/* ── end identity card ── */}

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
              <div key={label} className="flex justify-between items-center border-b border-gray-100 pb-4 last:border-0 last:pb-0">
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
              <span className="text-[#ff7800]">developer</span> and a{" "}
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
      {/* ── Projects (tabbed) ── */}
      <ProjectsSection />

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