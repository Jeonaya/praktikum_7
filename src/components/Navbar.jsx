// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  const navLinks = ['Home', 'About', 'Program', 'Project', 'Testimonials', 'Contact'];

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo (image_944d70.png) */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 flex items-center justify-center rounded-sm">
            <span className="text-white font-bold text-xl leading-none">R E</span>
          </div>
          <span className="text-blue-600 font-semibold text-lg">ruang ekspresi</span>
        </div>

        {/* Navigasi Links (Desktop) */}
        <nav className="hidden md:flex space-x-6 text-gray-600">
          {navLinks.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`} 
              className={`hover:text-blue-600 transition-colors ${link === 'Home' ? 'font-semibold text-blue-600' : ''}`}
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;