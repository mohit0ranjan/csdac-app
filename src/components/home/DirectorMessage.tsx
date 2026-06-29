import React from 'react';

export default function DirectorMessage() {
  return (
    <div className="bg-white border border-gray-300 p-6 h-full shadow-sm">
      <h2 className="text-xl font-bold text-primary mb-4 pb-2 border-b border-gray-300">From the Director General</h2>
      
      <div className="flex flex-col sm:flex-row gap-6">
        <div className="w-24 h-28 border border-gray-300 p-1 flex-shrink-0 bg-gray-50">
          <img 
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop" 
            alt="Director General" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex-1">
          <p className="text-sm text-gray-700 leading-relaxed text-justify mb-4">
            "CSDAC is committed to establishing India as a global leader in advanced computing and digital technologies. Through relentless innovation, strategic capacity building, and collaborative research, we are driving the technological foundation for a secure and self-reliant Digital India."
          </p>
          <div className="text-right">
            <p className="font-bold text-gray-900 text-sm">Dr. A. K. Sharma</p>
            <p className="text-xs text-gray-600">Director General, CSDAC</p>
          </div>
        </div>
      </div>
    </div>
  );
}
