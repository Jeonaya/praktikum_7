// src/components/TestimonialCard.jsx
import React from 'react';

const TestimonialCard = ({ name, major, quote }) => {
  // Kartu Testimoni (image_9449e9.png)
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 transition-shadow hover:shadow-xl border border-gray-100 h-full">
      <div className="flex items-center space-x-4 mb-3">
        {/* Placeholder Avatar */}
        <img 
          src="/src/assets/budic.png" 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-bold text-gray-900 text-lg">{name}</h4>
          <p className="text-sm text-blue-600">{major}</p>
        </div>
      </div>
      {quote && (
        <p className="text-sm text-gray-700 mt-2">
          {quote}
        </p>
      )}
    </div>
  );
};

export default TestimonialCard;