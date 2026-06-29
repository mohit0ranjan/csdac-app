import React from 'react';

export default function StatsSection() {
  const stats = [
    { id: 1, value: '35+', label: 'Years of Excellence', suffix: '' },
    { id: 2, value: '12', label: 'R&D Centers', suffix: '' },
    { id: 3, value: '4500+', label: 'Scientific Staff', suffix: '' },
    { id: 4, value: '100+', label: 'Patents', suffix: '' }
  ];

  return (
    <section className="bg-blue-900 text-white relative py-20 lg:py-24 border-y-8 border-blue-600 overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 text-center divide-x divide-blue-800/50">
          {stats.map((stat, idx) => (
            <div key={stat.id} className={`flex flex-col items-center ${idx === 0 ? 'border-none' : ''}`}>
              <div className="text-4xl md:text-5xl lg:text-7xl font-black text-blue-400 mb-3 drop-shadow-md">
                {stat.value}
              </div>
              <span className="text-sm md:text-base lg:text-lg font-bold text-slate-300 uppercase tracking-widest">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
