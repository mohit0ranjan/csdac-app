import React from 'react';
import Link from 'next/link';

export default function TopUtilityBar() {
  return (
    <div className="bg-[#1a1a1a] text-white py-1 border-b border-gray-700 text-xs font-sans">
      <div className="container mx-auto px-4 flex justify-between items-center h-auto md:h-8">
        
        {/* Left: Empty or simple slogan for independent org */}
        <div className="flex items-center space-x-2">
          <span className="font-semibold text-[11px] md:text-xs text-gray-300">
            Centre for Systems Development of Advanced Computing
          </span>
        </div>

        {/* Right: Accessibility & Language */}
        <div className="flex items-center flex-wrap justify-end gap-x-3 gap-y-1">
          
          <Link href="#main-content" className="hover:text-secondary transition-colors focus:outline-white focus:ring-1 p-0.5" title="Skip to main content">
            Skip to main content
          </Link>
          
          <span className="text-gray-500 hidden sm:inline">|</span>
          
          <button className="hover:text-secondary transition-colors focus:outline-white focus:ring-1 p-0.5" title="Screen Reader Access">
            <svg className="w-3.5 h-3.5 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
          </button>
          
          <span className="text-gray-500 hidden sm:inline">|</span>
          
          <div className="flex items-center space-x-1">
            <button className="bg-black border border-gray-600 px-1 hover:text-secondary focus:outline-white" title="Decrease Font Size">A-</button>
            <button className="bg-black border border-gray-600 px-1 font-bold hover:text-secondary focus:outline-white" title="Normal Font Size">A</button>
            <button className="bg-black border border-gray-600 px-1 hover:text-secondary focus:outline-white" title="Increase Font Size">A+</button>
          </div>

          <span className="text-gray-500 hidden sm:inline">|</span>

          {/* High Contrast */}
          <div className="flex items-center space-x-1">
            <button className="w-4 h-4 bg-white border border-gray-400 focus:outline-white" title="Standard Contrast"></button>
            <button className="w-4 h-4 bg-black border border-white focus:outline-white" title="High Contrast"></button>
          </div>

          <span className="text-gray-500 hidden sm:inline">|</span>

          <select className="bg-transparent border-none text-white outline-none cursor-pointer focus:outline-white text-[11px] md:text-xs">
            <option className="text-black" value="en">English</option>
            <option className="text-black" value="hi">हिन्दी</option>
          </select>

        </div>
      </div>
    </div>
  );
}
