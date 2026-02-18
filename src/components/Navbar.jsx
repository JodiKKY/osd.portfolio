import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import favicon from "../assets/favicon.png";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  // ✅ lock scroll when mobile menu is open
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = originalOverflow;

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  return (
    <nav
      className="
        fixed top-4 sm:top-6 inset-x-3 sm:inset-x-4
        h-14 sm:h-16
        max-w-6xl mx-auto rounded-2xl
        px-4 sm:px-6 z-50

        bg-white/10 dark:bg-white/5
        backdrop-blur-xl backdrop-saturate-150

        border border-white/20
        shadow-[0_8px_32px_0_rgba(0,0,0,0.25)]
        transition-all duration-300
      "
    >
      {/* top bar */}
      <div className="h-full flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 group min-w-0">
          <motion.img
            src={favicon}
            alt="Logo"
            className="w-9 h-9 sm:w-10 sm:h-10 object-contain rounded-full shadow-lg border border-neutral-700"
            whileHover={{ rotate: 12, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <span className="text-lg sm:text-xl font-bold tracking-tight text-black hidden sm:inline group-hover:text-[#ff7800] transition-colors duration-200">
            OSD
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium text-black hover:text-[#ff7800] transition duration-300 group"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#ff7800] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button (fixed color + better tap target) */}
        <button
          onClick={toggleMenu}
          className="
            md:hidden inline-flex items-center justify-center
            w-10 h-10 rounded-xl
            text-black hover:text-[#ff7800]
            hover:bg-white/10
            focus:outline-none focus:ring-2 focus:ring-[#ff7800]/60
            transition
          "
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* ✅ Mobile Menu (full width, rounded, matches glass style, no overflow issues) */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* overlay */}
            <motion.button
              aria-label="Close menu overlay"
              className="fixed inset-0 md:hidden bg-black/30 backdrop-blur-[2px] z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* dropdown */}
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="
                md:hidden absolute left-0 right-0 top-[calc(100%+10px)]
                mx-0
                rounded-2xl
                bg-white/15
                backdrop-blur-xl
                border border-white/20
                shadow-[0_18px_50px_rgba(0,0,0,0.35)]
                overflow-hidden
                z-50
              "
            >
              <div className="px-4 py-4 space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="
                      block w-full
                      px-4 py-3 rounded-xl
                      text-base font-semibold
                      text-black
                      hover:bg-white/20
                      hover:text-[#ff7800]
                      transition
                    "
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* small bottom accent */}
              <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#ff7800]/60 to-transparent" />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
