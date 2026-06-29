import React from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react';

export default function TopUtilityBar() {
  return (
    <div className="bg-[#2b2f33] text-white text-[12px] py-1 border-b border-[#3a3f45]">
      <div className="container mx-auto px-4 flex justify-between items-center h-8">
        
        {/* Left: Ticker */}
        <div className="flex items-center space-x-2">
          <span className="text-[#f1c40f] text-[10px]">▶</span>
          <div className="flex space-x-1">
            <Link href="#" className="text-[#f1c40f] hover:underline">
              AIRAWAT-PSAI
            </Link>
            <span className="text-[#999999]">CSDAC R&D Digest</span>
          </div>
        </div>

        {/* Right: Accessibility & Search */}
        <div className="flex items-center justify-end space-x-1.5 md:space-x-2">
          
          <div className="hidden md:flex items-center text-gray-300">
            <a href="#nav" className="hover:text-white transition-colors px-1">Skip to navigation</a>
            <span>|</span>
            <a href="#main-content" className="hover:text-white transition-colors px-1">Skip to main content</a>
            <span>|</span>
            <button className="hover:text-white transition-colors px-1">English</button>
            <span>|</span>
            <button className="hover:text-white transition-colors px-1">Hindi</button>
          </div>

          <div className="flex items-center ml-2 border border-gray-400/30 rounded-sm overflow-hidden">
            <input 
              type="text" 
              placeholder="Search" 
              className="bg-white text-black text-xs px-2 py-1 w-32 md:w-40 focus:outline-none"
              aria-label="Search"
            />
            <button className="bg-[#1a1a1a] text-white px-2.5 py-1 hover:bg-black transition-colors" aria-label="Search Button">
              <Search className="w-3.5 h-3.5" />
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
}
