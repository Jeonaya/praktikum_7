// src/components/HeroSection.jsx
import React from 'react';
import ProjectCard from './ProjectCard';

const Tag = ({ color, children }) => (
  // Tag warna-warni (image_944d4c.jpg)
  <span className={`px-4 py-1.5 text-sm font-semibold rounded-full ${color} shadow-sm`}>
    {children}
  </span>
);

const HeroSection = () => {
  return (
    <section className="container mx-auto px-6 py-16">
      
      {/* Responsive: grid-cols-1 md:grid-cols-2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Kolom Kiri */}
        <div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            RUANG EKSPRESI : <span className="text-blue-600">Wadah kreatif & Kompetitif Mahasiswa</span>
          </h1>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-8">
            <Tag color="bg-yellow-200 text-gray-800">Ideation</Tag>
            <Tag color="bg-green-200 text-gray-800">Creation</Tag>
            <Tag color="bg-blue-200 text-gray-800">Collaboration</Tag>
            <Tag color="bg-pink-200 text-gray-800">Guidance & Support</Tag>
          </div>

          <ProjectCard />
        </div>

        {/* Kolom Kanan: Gambar Carousel */}
        <div className="relative w-full aspect-video md:aspect-auto h-80 lg:h-[450px] rounded-xl overflow-hidden shadow-2xl">
          {/* Ganti dengan path ke gambar meeting Anda di src/assets */}
          <img 
            src="/src/assets/kantor_1.png" 
            alt="Mahasiswa Meeting" 
            className="w-full h-full object-cover"
          />
          {/* Tombol Panah (image_944c98.png) */}
          <button className="absolute left-3 top-1/2 transform -translate-y-1/2 p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 transition text-lg font-bold">
            &larr;
          </button>
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 transition text-lg font-bold">
            &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;