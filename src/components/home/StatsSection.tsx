'use client';

import React from 'react';
import CountUp from 'react-countup';

export default function StatsSection() {
  const stats = [
    { value: 12, label: 'R&D Centres' },
    { value: 450, label: 'Research Projects' },
    { value: 50, label: 'Thousand Students' },
    { value: 25, label: 'Govt. Collaborations' }
  ];

  return (
    <section className="bg-primary py-8 border-t-4 border-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-x-0 md:divide-x divide-white/20">
          
          {stats.map((stat, index) => (
            <div key={index} className="text-center px-2 py-4">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                <CountUp end={stat.value} duration={2} separator="," enableScrollSpy scrollSpyOnce />+
              </div>
              <div className="text-xs font-semibold text-gray-300 uppercase">
                {stat.label}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
