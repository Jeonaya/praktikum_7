// src/components/FourPillar.jsx
import React from 'react';

const PillarItem = ({ icon, title, description, bgColor }) => (
  // Kartu Pilar (image_944d0f.png)
  <div className={`p-8 rounded-xl h-full shadow-md ${bgColor} transition-shadow hover:shadow-xl text-center`}>
    <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full text-3xl mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-sm text-gray-700">{description}</p>
  </div>
);

const FourPillar = () => {
  const pillars = [
    { icon: '💡', title: 'Ideation', description: 'Mengembangkan ide-ide kreatif dan inovatif melalui brainstorming dan workshop ideation yang terarah.', bgColor: 'bg-yellow-200' },
    { icon: '🔧', title: 'Creation', description: 'Mewujudkan ide menjadi karya nyata dengan dukungan tools dan teknologi terkini.', bgColor: 'bg-green-200' },
    { icon: '👥', title: 'Collaboration', description: 'Bekerja sama dalam tim multidisiplin untuk menciptakan solusi yang komprehensif.', bgColor: 'bg-blue-200' },
    { icon: '🎓', title: 'Guidance & Support', description: 'Mendapat bimbingan dari mentor berpengalaman dan akses ke berbagai resources pembelajaran.', bgColor: 'bg-pink-200' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Empat Pilar <span className="text-blue-600">Ruang Ekspresi</span></h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          komprehensif yang dirancang untuk mengembangkan potensi kreatif mahasiswa melalui pendekatan holistik
        </p>

        {/* Responsive: grid-cols-1 md:grid-cols-2 lg:grid-cols-4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <PillarItem key={index} {...pillar} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FourPillar;