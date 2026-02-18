import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import favicon from '../assets/favicon.png';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);

  return (
<nav
  className="
    fixed top-6 inset-x-4 h-14 sm:h-16
    max-w-6xl mx-auto rounded-2xl
    px-6 z-50

    bg-white/10 dark:bg-white/5
    backdrop-blur-xl
    backdrop-saturate-150

    border border-white/20
    shadow-[0_8px_32px_0_rgba(0,0,0,0.25)]

    transition-all duration-300
  "
>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <motion.img
              src={favicon}
              alt="Logo"
              className="w-10 h-10 object-contain rounded-full shadow-lg border border-neutral-700"
              whileHover={{ rotate: 12, scale: 1.15 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
            <span className="text-xl font-bold tracking-tight text-black hidden sm:inline group-hover:text-[#ff7800] transition-colors duration-200">
              OSD
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-sm font-medium text-black hover:text-[#ff7800] transition duration-300 group"
              >
                {link.name}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#ff7800] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-200 focus:outline-none hover:text-black transition"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-neutral-900/90 border-t border-neutral-800 px-4 py-4 space-y-4 shadow-lg"
          >
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-lg font-medium text-gray-300 hover:text-black transition"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
