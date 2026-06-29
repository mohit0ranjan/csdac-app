import React from 'react';

export default function OurCenters() {
  const centers = [
    'Pune (HQ)', 'Bengaluru', 'Chennai', 'Delhi', 'Hyderabad', 
    'Kolkata', 'Mohali', 'Mumbai', 'Thiruvananthapuram', 'Patna'
  ];

  return (
    <div className="bg-white border border-gray-300 p-6 h-full shadow-sm">
      <h2 className="text-xl font-bold text-primary mb-4 pb-2 border-b border-gray-300">Our Centers</h2>
      
      <p className="text-sm text-gray-700 leading-relaxed text-justify mb-4">
        CSDAC operates through a nationwide network of specialized R&D centers, each focusing on distinct thematic areas of advanced computing.
      </p>
      
      <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
        {centers.map((center, index) => (
          <li key={index} className="flex items-center text-xs text-gray-800 font-semibold before:content-['▸'] before:mr-2 before:text-secondary">
            {center}
          </li>
        ))}
      </ul>
    </div>
  );
}
