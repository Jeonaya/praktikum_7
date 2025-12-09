
import React, { useState, useEffect } from "react";
import { showcaseProjects } from "../data/showcaseProjects";

export default function CardGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? showcaseProjects.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === showcaseProjects.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        
        {/* TITLE */}
        <h2 className="text-3xl font-bold text-center mb-4">
          <span className="text-gray-800">Showcase </span>
          <span className="text-blue-500">Student Projects</span>
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Karya-karya inovatif yang telah dihasilkan oleh mahasiswa <br />
          dalam program Ruang Ekspresi
        </p>

        <div className="relative max-w-6xl mx-auto">
          
          {/* Prev Button */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor">
              <path strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor">
              <path strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Card Slider */}
          <div className="overflow-hidden rounded-xl shadow-lg">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {showcaseProjects.map((project) => (
                <div key={project.id} className="w-full flex shrink-0 px-4">
                  <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row">
                    
                    {/* IMAGE */}
                    <img
                      src={project.image}
                      className="md:w-1/2 h-64 object-cover"
                    />

                    {/* CONTENT */}
                    <div className="md:w-1/2 p-6">
                      <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm inline-block mb-3">
                        {project.category}
                      </div>

                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>

                      <p className="text-gray-600 mb-3">
                        {project.description}
                      </p>

                      <h4 className="font-semibold mb-1">Tim Pengerja:</h4>
                      <ul className="mb-3 text-sm text-gray-700">
                        {project.teamMembers.map((member, i) => (
                          <li key={i}>• {member}</li>
                        ))}
                      </ul>

                      <a
                        href={project.liveDemo}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg inline-block hover:bg-blue-700"
                      >
                        Live Demo
                      </a>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
