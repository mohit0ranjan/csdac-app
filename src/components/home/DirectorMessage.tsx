import React from 'react';
import Link from 'next/link';

export default function DirectorMessage() {
  return (
    <div className="w-full bg-white h-full flex flex-col justify-start" data-aos="fade-up">
      <div className="relative">
        <img 
          src="/img/csdac-director.png" 
          alt="Director General" 
          className="w-full h-80 object-cover"
        />
        {/* Gradient Overlay for Text Visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        
        {/* Text Container */}
        <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 text-white">
          <h3 className="text-xl md:text-2xl font-black drop-shadow-lg tracking-wide">E. Magesh</h3>
          <p className="text-sm md:text-base font-semibold text-gray-200 drop-shadow-md">Director General, CSDAC</p>
        </div>
      </div>
      
      <div className="p-6 md:p-10 flex-1 flex flex-col">
        <h2 className="text-[#0a4892] text-xl font-bold uppercase mb-4">MESSAGE FROM DIRECTOR GENERAL</h2>
        
        <p className="text-sm text-gray-700 leading-relaxed mb-6 flex-1">
          I would like to express my gratitude to the Ministry of Electronics & Information Technology (MeitY) for reposing confidence in me and assigning the role of Director General of Centre for Systems Development of Advanced Computing (CSDAC).
        </p>
        
        <div>
          <button className="bg-[#ffc107] hover:bg-[#ffb300] text-gray-900 font-semibold text-xs px-4 py-2 rounded transition-colors shadow-sm">
            Read More..
          </button>
        </div>
      </div>
    </div>
  );
}
