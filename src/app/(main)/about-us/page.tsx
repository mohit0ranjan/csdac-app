import React from 'react';
import Link from 'next/link';

export default function AboutUsPage() {
  return (
    <div className="flex-1 bg-gray-50 min-h-[calc(100vh-200px)] py-12">
      <div className="container mx-auto px-4">
        
        <div className="text-xs text-gray-500 mb-6 uppercase tracking-wider font-semibold">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">About Us</span>
        </div>

        <div className="max-w-5xl mx-auto bg-white border border-gray-300 shadow-sm">
          
          <div className="bg-primary text-white p-6 border-b-4 border-secondary">
            <h1 className="text-2xl font-bold uppercase tracking-wide">About CSDAC</h1>
          </div>

          <div className="p-8 md:p-12 prose max-w-none text-gray-800">
            <h3 className="text-xl font-bold text-primary mb-4">Pioneering Advanced Computing</h3>
            <p className="mb-4 text-justify leading-relaxed">
              The Centre for Systems Development of Advanced Computing (CSDAC) is an independent, premier R&D organization dedicated to carrying out Research and Development in IT, Electronics, and associated areas.
            </p>
            <p className="mb-4 text-justify leading-relaxed">
              We are committed to building indigenous technology and driving innovation across multiple critical sectors including Artificial Intelligence, Cyber Security, Supercomputing, and Quantum Technologies.
            </p>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-gray-200 p-6 bg-gray-50">
                <h4 className="text-lg font-bold text-primary mb-3">Our Vision</h4>
                <p className="text-sm">To emerge as a premier R&D institution for the design, development, and deployment of world-class IT solutions for economic and human advancement.</p>
              </div>
              <div className="border border-gray-200 p-6 bg-gray-50">
                <h4 className="text-lg font-bold text-primary mb-3">Our Mission</h4>
                <p className="text-sm">To expand the frontiers of Information Technology, evolve technology solutions, architectures, systems, and standards for nationally important problems.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
