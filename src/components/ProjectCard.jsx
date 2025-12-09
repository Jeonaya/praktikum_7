// src/components/ProjectCard.jsx
import React from 'react';

const TeamMember = ({ name, role }) => (
  <div className="flex items-center space-x-3 mb-2">
    {/* Placeholder Avatar */}
    <img 
      src="/src/assets/budil.png" 
      alt={name} 
      className="w-8 h-8 rounded-full object-cover border-2 border-gray-100 shadow-sm"
    />
    <div>
      <p className="text-sm font-medium">{name}</p>
      <p className="text-xs text-gray-500">{role}</p>
    </div>
  </div>
);

const ProjectCard = () => {
  return (
    <div className="mt-8">
      {/* Tag UI/UX Design (image_944c98.png) */}
      <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-4">
        UI/UX Design
      </div>

      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-2">Creative Portfolio Platform</h3>
      <p className="text-base text-gray-600 mb-6">
        Platform showcase karya mahasiswa dengan sistem rating dan feedback komunitas
      </p>

      <div className="text-base font-semibold mb-3">Tim Pembuat :</div>
      
      <div className="space-y-3">
        <TeamMember name="Budi Santoso" role="Frontend Developer" />
        <TeamMember name="Budi Santoso" role="Frontend Developer" />
        <TeamMember name="Budi Santoso" role="Frontend Developer" />
      </div>

      
    </div>
  );
};

export default ProjectCard;