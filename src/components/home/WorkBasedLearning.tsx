import React from 'react';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

export default function WorkBasedLearning() {
  return (
    <section className="bg-white border-b border-gray-200 py-6 md:py-8" data-aos="fade-up">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between bg-blue-50/50 p-6 rounded-lg border border-blue-100">
        
        <div className="mb-4 md:mb-0">
          <h2 className="text-[#0a4892] text-xl md:text-2xl font-bold uppercase mb-2">
            Work-Based Learning (WBL) Programme
          </h2>
          <p className="text-gray-600 text-lg">
            The C-DAC Work-Based Learning (WBL) Programme is designed to bridge the gap between academic learning and industry requirements. Engage in real-world innovation through specialized internships, live R&D projects, and hands-on training in cutting-edge technologies. Enhance your employability and contribute to nation-building initiatives.
          </p>
        </div>

        <div>
          <Link 
            href="https://internships.csdac.in" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#0a4892] hover:bg-blue-800 text-white font-bold py-3 px-6 rounded transition-colors text-sm uppercase tracking-wide whitespace-nowrap shadow-sm hover:shadow-md"
          >
            Access WBL Portal <ExternalLink className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
