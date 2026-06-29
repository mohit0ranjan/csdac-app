import React from 'react';
import Link from 'next/link';

export default function GenericPage() {
  return (
    <div className="flex-1 bg-gray-50 min-h-[calc(100vh-200px)] py-12">
      <div className="container mx-auto px-4">
        
        <div className="text-xs text-gray-500 mb-6 uppercase tracking-wider font-semibold">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Products & Services</span>
        </div>

        <div className="max-w-5xl mx-auto bg-white border border-gray-300 shadow-sm">
          
          <div className="bg-primary text-white p-6 border-b-4 border-secondary">
            <h1 className="text-2xl font-bold uppercase tracking-wide">Products & Services</h1>
          </div>

          <div className="p-8 md:p-12 text-gray-800">
            <h3 className="text-xl font-bold text-primary mb-6 border-b border-gray-200 pb-2">Key Offerings</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="border border-gray-200 p-6 hover:shadow-md transition-shadow bg-white">
                <div className="w-12 h-12 bg-blue-50 text-primary flex items-center justify-center rounded-full mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">High Performance Computing</h4>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  State-of-the-art supercomputing facilities and parallel processing architectures designed for complex scientific research, weather forecasting, and molecular dynamics.
                </p>
                <ul className="text-xs space-y-1 text-gray-500 font-semibold">
                  <li>› PARAM Series Supercomputers</li>
                  <li>› Cloud Computing Infrastructure</li>
                </ul>
              </div>

              <div className="border border-gray-200 p-6 hover:shadow-md transition-shadow bg-white">
                <div className="w-12 h-12 bg-orange-50 text-secondary flex items-center justify-center rounded-full mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Cyber Security</h4>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Advanced threat intelligence, end-point security solutions, and cryptography tools to protect national critical infrastructure and enterprise networks.
                </p>
                <ul className="text-xs space-y-1 text-gray-500 font-semibold">
                  <li>› Intrusion Detection Systems</li>
                  <li>› Network Forensics</li>
                </ul>
              </div>

              <div className="border border-gray-200 p-6 hover:shadow-md transition-shadow bg-white">
                <div className="w-12 h-12 bg-green-50 text-green-600 flex items-center justify-center rounded-full mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" /></svg>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Multilingual Computing</h4>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Tools and APIs for Indian language processing, enabling digital inclusion through localization, machine translation, and speech synthesis.
                </p>
                <ul className="text-xs space-y-1 text-gray-500 font-semibold">
                  <li>› Language APIs</li>
                  <li>› OCR & Text-to-Speech</li>
                </ul>
              </div>

              <div className="border border-gray-200 p-6 hover:shadow-md transition-shadow bg-white">
                <div className="w-12 h-12 bg-purple-50 text-purple-600 flex items-center justify-center rounded-full mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Software Technologies</h4>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Enterprise-grade software applications ranging from e-Governance platforms to healthcare informatics and agricultural tech solutions.
                </p>
                <ul className="text-xs space-y-1 text-gray-500 font-semibold">
                  <li>› e-Governance Solutions</li>
                  <li>› Health Informatics (Hospital Management)</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
