import React from 'react';
import Link from 'next/link';

export default function VerifyCertificate() {
  return (
    <section className="bg-white border-b border-gray-300 py-6">
      <div className="container mx-auto px-4">
        
        <div className="bg-blue-50 border border-blue-200 p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-gray-300 flex-shrink-0">
               {/* S3WaaS style simple verification icon */}
               <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-1">Verify Digital Credentials</h2>
              <p className="text-sm text-gray-700">
                Official portal to verify authenticity of certificates issued by CSDAC.
              </p>
            </div>
          </div>

          <div className="flex-shrink-0 w-full md:w-auto text-center md:text-right">
            <Link 
              href="/verify"
              className="inline-block bg-primary text-white font-bold px-6 py-2.5 hover:bg-blue-900 transition-colors uppercase text-sm border border-transparent shadow-sm w-full md:w-auto"
            >
              Verify Certificate
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
