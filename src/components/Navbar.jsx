import React from 'react';

const Navbar = () => {
  // Toggle function for mobile menu
  const toggleMenu = () => {
    const menu = document.getElementById('mobile-menu');
    if (menu) {
      menu.classList.toggle('hidden');
    }
  };

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo / Name */}
          <a href="/" className="text-2xl font-bold text-gray-800 hover:text-blue-600">Yirenkyi Jodi</a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600">Projects</a>
            <a href="#resume" className="text-gray-700 hover:text-blue-600">Resume</a>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      <div id="mobile-menu" className="md:hidden hidden px-4 pb-4 space-y-2">
        <a href="#about" className="block text-gray-700 hover:text-blue-600">About</a>
        <a href="#projects" className="block text-gray-700 hover:text-blue-600">Projects</a>
        <a href="#resume" className="block text-gray-700 hover:text-blue-600">Resume</a>
      </div>
    </nav>
  );
};

export default Navbar;
