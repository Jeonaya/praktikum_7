// src/components/ScheduleSection.jsx
import React from 'react';

const ScheduleCard = ({ title, time, details }) => (
  // Kartu Jadwal (image_944cd2.png)
  <div className="p-6 rounded-xl shadow-lg flex items-center space-x-4 bg-green-100 h-full">
    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-blue-600 font-bold text-xl">
      🕒
    </div>
    <div>
      <p className="font-semibold text-gray-800 text-lg">{title}</p>
      <p className="text-base font-bold text-gray-700 mb-1">{time}</p>
      <p className="text-sm text-gray-600">{details}</p>
    </div>
  </div>
);

const FeatureBox = ({ icon, title, description, bgColor }) => (
  // Kotak Fitur (image_944cd2.png)
  <div className={`p-6 rounded-xl h-full ${bgColor} shadow-md`}>
    <div className="text-3xl mb-3">{icon}</div>
    <p className="font-bold text-base mb-1">{title}</p>
    <p className="text-sm text-gray-700">{description}</p>
  </div>
);

const ScheduleSection = () => {
  const features = [
    { icon: '💬', title: 'Carrer Talks', description: 'Sesi sharing dari praktisi industri dan alumni sukses', bgColor: 'bg-yellow-200' },
    { icon: '📚', title: 'Extra Classes', description: 'Kelas tambahan skill development dan workshop teknis', bgColor: 'bg-green-200' },
    { icon: '💻', title: 'Project Work', description: 'Mengerjakan project nyata dengan bimbingan mentor', bgColor: 'bg-blue-200' },
    { icon: '👩‍🏫', title: 'Mentoring', description: 'Sesi konsultasi personal dengan mentor berpengalaman', bgColor: 'bg-pink-200' },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Jadwal & <span className="text-blue-600">Program Kegiatan</span></h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          Program terstruktur yang dirancang untuk mengoptimalkan pembelajaran dan pengembangan skill Setiap Sabtu
        </p>

        {/* Schedule Cards Container */}
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow-xl mb-12 border border-gray-100">
          <div className="flex justify-center items-center text-blue-600 font-bold text-lg mb-6">
            <span className="mr-2">🗓️</span> Setiap Sabtu
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScheduleCard 
              title="Sesi Pagi" 
              time="09.00 - 12.00 WIB" 
              details="Workshop, Career Talks, dan Extra Classes intensif" 
            />
            <ScheduleCard 
              title="Sesi Sore" 
              time="16.00 - 19.00 WIB" 
              details="Project Work, Mentoring, dan Collaboration Session" 
            />
          </div>
        </div>

        {/* Feature Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureBox key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;