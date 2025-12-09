// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  const quickLinks = ['Home', 'About', 'Program', 'Projects', 'Testimonials', 'Contact'];
  const programs = ['Career Talks', 'Extra Classes', 'Project Work', 'Mentoring'];

  // Styling (image_9449b0.png)
  return (
    <footer className="bg-blue-800 text-white pt-12">
      <div className="container mx-auto px-6 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Kolom 1: Logo & Kontak */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white flex items-center justify-center rounded-sm">
                <span className="text-blue-800 font-bold text-xl leading-none">R E</span>
              </div>
              <span className="font-bold text-xl">ruang ekspresi</span>
            </div>
            <p className="text-sm text-blue-200 mb-6">
              Wadah kreatif dan kompetitif untuk mahasiswa yang ingin mengembangkan potensi melalui ideation, creation, collaboration, dan guidance.
            </p>

            {/* Kontak (image_9449b0.png) */}
            <div className="space-y-2 text-sm text-blue-200">
              <p>📍 Jl. Ringroad Selatan, Kragilan, Tamanan, Kec. Banguntapan, Bantul, DIY 55181</p>
              <p>✉️ ruang_ekspresi@webmail.uad.ac.id</p>
              <p>📞 (0274) 511830</p>
            </div>
          </div>

          {/* Kolom 2 & 3: Quick Links & Programs */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link, index) => (
                <li key={index}><a href={`#${link.toLowerCase()}`} className="hover:text-blue-300 transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Programs</h4>
            <ul className="space-y-2 text-sm">
              {programs.map((program, index) => (
                <li key={index}><a href={`#${program.toLowerCase().replace(/\s/g, '-')}`} className="hover:text-blue-300 transition-colors">{program}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-blue-900 py-3 mt-8">
        <div className="container mx-auto px-6 text-center text-xs text-blue-300">
          © 2025 Ruang Ekspresi | All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;