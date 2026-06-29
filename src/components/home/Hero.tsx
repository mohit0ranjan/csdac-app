import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <div>
      {/* S3WaaS Classic Image Slider (Static Mock) */}
      <section className="relative w-full h-[400px] md:h-[500px] bg-gray-900 border-b-4 border-secondary">
        
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2000&auto=format&fit=crop" 
            alt="Advanced Technology Background" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        {/* Text Overlay Box (Govt Style) */}
        <div className="absolute bottom-8 left-4 md:left-12 max-w-2xl bg-black/60 backdrop-blur-sm border-l-4 border-secondary p-6 text-white shadow-lg">
          <h2 className="text-2xl md:text-4xl font-bold mb-2">
            Pioneering the Future of Advanced Computing
          </h2>
          <p className="text-sm md:text-base text-gray-200">
            Leading the nation's premier research and development initiatives in Artificial Intelligence, Cyber Security, Supercomputing, and Quantum Technologies.
          </p>
        </div>

        {/* Navigation Arrows (Mock) */}
        <button className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-primary text-white flex items-center justify-center transition-colors">
          &#10094;
        </button>
        <button className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-primary text-white flex items-center justify-center transition-colors">
          &#10095;
        </button>

      </section>

      {/* S3WaaS "What's New" Ticker */}
      <div className="bg-gray-100 border-b border-gray-300 flex items-stretch h-12 shadow-sm">
        <div className="bg-primary text-white font-bold px-6 flex items-center shrink-0 border-r border-gray-300">
           What's New
        </div>
        <div className="flex-1 overflow-hidden relative flex items-center px-4">
           {/* Scrolling content via CSS animation */}
           <div className="whitespace-nowrap animate-[scrollLeft_20s_linear_infinite] inline-block hover:[animation-play-state:paused]">
              <span className="text-primary font-semibold mr-12 text-sm">
                 <span className="text-secondary mr-2 font-bold">New</span>
                 Launch of National AI Compute Infrastructure Phase II
              </span>
              <span className="text-primary font-semibold mr-12 text-sm">
                 <span className="text-secondary mr-2 font-bold">New</span>
                 Applications open for Work-Based Learning (WBL) Internship Cohort 2026
              </span>
              <span className="text-primary font-semibold text-sm">
                 Cyber Security Framework guidelines updated for Central Government Departments
              </span>
           </div>
        </div>
        <div className="bg-gray-200 px-4 flex items-center shrink-0 border-l border-gray-300">
           <Link href="#" className="text-xs font-bold text-gray-700 hover:text-primary">
              View All
           </Link>
        </div>
      </div>
    </div>
  );
}
