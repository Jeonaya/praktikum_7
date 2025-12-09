import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FourPillar from './components/FourPillar';
import ScheduleSection from './components/ScheduleSection';
import CardGallery from './components/Cardgallery';
import TestimonialCard from './components/TestimonialCard'; // Di-import untuk digunakan
import Footer from './components/Footer';

// Data Dummy untuk Testimonial
const testimonials = [
  { name: 'Budi Santoso', major: 'Mahasiswa Sistem Informasi', quote: 'Kolaborasi antar disiplin ilmu di sini luar biasa. Saya belajar banyak hal dari teman-teman dari jurusan lain' },
  { name: 'Budi Santoso', major: 'Mahasiswa Sistem Informasi', quote: 'Kolaborasi antar disiplin ilmu di sini luar biasa. Saya belajar banyak hal dari teman-teman dari jurusan lain' },
  { name: 'Budi Santoso', major: 'Mahasiswa Sistem Informasi', quote: 'Kolaborasi antar disiplin ilmu di sini luar biasa. Saya belajar banyak hal dari teman-teman dari jurusan lain' },
];



const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        <HeroSection />

        <FourPillar />

        <ScheduleSection />

        <CardGallery />

        {/* Testimonial Section (MEMENUHI PERSYARATAN RESPONSIVE) */}
        <section id="testimonials" className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Testimoni Mahasiswa</h2>

            {/* PERSYARATAN RESPONSIVE: grid-cols-1 md:grid-cols-3 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((t, index) => (
                <TestimonialCard 
                  key={index}
                  name={t.name}
                  major={t.major}
                  quote={t.quote}
                />
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default App;