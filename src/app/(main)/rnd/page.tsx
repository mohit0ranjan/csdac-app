import React from 'react';
import Link from 'next/link';

export default function GenericPage() {
  return (
    <div className="flex-1 bg-gray-50 min-h-[calc(100vh-200px)] py-12">
      <div className="container mx-auto px-4">
        
        <div className="text-xs text-gray-500 mb-6 uppercase tracking-wider font-semibold">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Research & Development</span>
        </div>

        <div className="max-w-5xl mx-auto bg-white border border-gray-300 shadow-sm">
          
          <div className="bg-primary text-white p-6 border-b-4 border-secondary">
            <h1 className="text-2xl font-bold uppercase tracking-wide">Research & Development (R&D)</h1>
          </div>

          <div className="p-8 md:p-12 text-gray-800">
            <p className="mb-4">Content for R&D initiatives is currently being updated. Please check back later.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
