import React from 'react';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

export default function WorkBasedLearning() {
  return (
    <section className="py-12 bg-gray-100 border-t border-gray-300">
      <div className="container mx-auto px-4">
        
        <div className="bg-white border-l-4 border-primary shadow-sm p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-primary mb-2 uppercase tracking-wide">
              Work-Based Learning (WBL) Programme
            </h2>
            <div className="w-16 h-1 bg-secondary mb-4"></div>
            
            <p className="text-gray-700 leading-relaxed mb-0 text-justify">
              The CSDAC Work-Based Learning (WBL) Programme bridges the gap between academic learning and critical industry requirements. Engage in real-world innovation through specialized internships, live R&D projects, and hands-on training in cutting-edge technologies. Enhance your employability and contribute directly to nation-building initiatives.
            </p>
          </div>

          <div className="flex-shrink-0 text-center md:text-right w-full md:w-auto">
            <Link 
              href="https://internships.csdac.in" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-blue-900 text-white font-bold py-3 px-8 transition-colors text-sm uppercase shadow-sm border border-transparent w-full md:w-auto"
            >
              Access Internship Portal <ExternalLink className="w-4 h-4 ml-1" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
