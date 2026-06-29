import React from 'react';

export default function Technologies() {
  const domains = [
    { name: 'Artificial Intelligence', desc: 'Applied AI, Machine Learning, and Natural Language Processing for Governance.' },
    { name: 'Cyber Security', desc: 'National threat intelligence, cryptography, and digital forensics.' },
    { name: 'Supercomputing', desc: 'High Performance Computing (HPC) for scientific research.' },
    { name: 'Cloud Computing', desc: 'Meghraj Cloud initiatives and scalable infrastructure.' },
    { name: 'IoT & Edge', desc: 'Internet of Things and edge analytics for smart cities.' },
    { name: 'Data Science', desc: 'Big Data analytics, data localization, and engineering.' },
  ];

  return (
    <section className="py-12 bg-white border-b border-gray-300">
      <div className="container mx-auto px-4">
        
        <div className="mb-8 border-b border-primary pb-2 flex justify-between items-end">
          <div>
            <h2 className="text-2xl font-bold text-primary">Key Research Domains</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((domain, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-300 p-6 hover:shadow-md transition-shadow group flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gray-100 border border-gray-300 rounded flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:border-primary transition-colors">
                  <svg className="w-5 h-5 text-primary group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">{domain.name}</h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed flex-1">
                {domain.desc}
              </p>
              <a href="#" className="mt-4 text-xs font-bold text-primary hover:underline">Read More &raquo;</a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
