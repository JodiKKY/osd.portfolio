 import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import logo from "../assets/favicon.png";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("#about");

  const toggleMenu = () => setIsOpen((prev) => !prev);

  // Scrollspy effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;

      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;

          if (scrollPos >= top && scrollPos < bottom) {
            setActive(link.href);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="
        font-chakra
        fixed top-6 inset-x-4
        max-w-3xl mx-auto
        h-16
        px-6
        rounded-full
        z-50
        flex items-center
        bg-white/5
        backdrop-blur-xl
        backdrop-saturate-200
        border border-white/20
        shadow-[0_12px_48px_rgba(0,0,0,0.35)]
        transition-all duration-300
      "
    >
      {/* MOBILE LOGO */}
      <div className="md:hidden flex items-center">
        <img
          src={logo}
          alt="OSD Movies"
          className="w-7 h-7 rounded-md object-cover"
        />
      </div>

      {/* DESKTOP MENU */}
      <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-6">
        {navLinks.map((link) => {
          const isActive = active === link.href;

          return (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActive(link.href)}
              className={`
                font-chakra
                font-light
                relative px-5 py-2
                text-sm
                rounded-full
                transition-all duration-300
                ${
                  isActive
                    ? "bg-white/20 backdrop-blur-2xl border border-white/30 shadow-md shadow-white/20 text-[#ff7800]"
                    : "text-black hover:text-[#ff7800] hover:bg-white/10"
                }
              `}
            >
              {link.name}
            </a>
          );
        })}
      </div>

      {/* MOBILE BUTTON */}
      <div className="ml-auto md:hidden">
        <button
          onClick={toggleMenu}
          className="text-black hover:text-[#ff7800] transition"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="
              absolute left-0 right-0
              top-[calc(100%+12px)]
              md:hidden
              rounded-2xl
              overflow-hidden
              bg-white
              backdrop-blur-3xl
              backdrop-saturate-150
              border border-white/10
              shadow-[0_25px_100px_rgba(0,0,0,0.55)]
            "
          >
            {/* Frosted overlay layer */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

            {/* Menu items */}
            <div className="relative px-3 py-3 space-y-1">
              {navLinks.map((link) => {
                const isActive = active === link.href;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => {
                      setActive(link.href);
                      setIsOpen(false);
                    }}
                    className={`
                      font-chakra
                      font-light
                      block w-full
                      px-4 py-3
                      rounded-xl
                      text-[15px]
                      transition-all duration-300
                      ${
                        isActive
                          ? "bg-orange-50 border border-orange-100 text-[#ff7800]"
                          : "text-black hover:bg-gray-50 hover:text-[#ff7800]"
                      }
                    `}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            {/* Bottom accent line */}
            <div className="relative h-px w-full bg-[#ff7800]/30" />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;