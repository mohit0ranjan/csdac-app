import React from 'react';
import Link from 'next/link';

export default function GenericPage() {
  return (
    <div className="flex-1 bg-gray-50 min-h-[calc(100vh-200px)] py-12">
      <div className="container mx-auto px-4">
        
        <div className="text-xs text-gray-500 mb-6 uppercase tracking-wider font-semibold">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Virtual Internships</span>
        </div>

        <div className="max-w-5xl mx-auto bg-white border border-gray-300 shadow-sm">
          
          <div className="bg-primary text-white p-6 border-b-4 border-secondary">
            <h1 className="text-2xl font-bold uppercase tracking-wide">Virtual Internships</h1>
          </div>

          <div className="p-8 md:p-12 text-gray-800">
            
            <div className="mb-8">
              <h3 className="text-xl font-bold text-primary mb-4 border-b border-gray-200 pb-2">Virtual Internships (Work-Based Learning)</h3>
              <p className="leading-relaxed text-gray-700">
                CSDAC offers exclusive Virtual Internships designed to provide hands-on, industry-level experience to college students. Our programs are structured to bridge the gap between academic learning and professional industry requirements.
              </p>
            </div>

            <div className="space-y-6">
              
              {/* Virtual Internships Overview */}
              <div className="bg-white border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 text-primary flex items-center justify-center rounded shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Internships Offered for Colleges</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      We collaborate with colleges and universities to offer structured internship programs. These programs are available for students across all stages of their academic journey:
                    </p>
                    <ul className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm font-bold text-primary">
                      <li className="bg-blue-50 px-3 py-2 rounded border border-blue-100 text-center">1st Year Students</li>
                      <li className="bg-blue-50 px-3 py-2 rounded border border-blue-100 text-center">2nd Year Students</li>
                      <li className="bg-blue-50 px-3 py-2 rounded border border-blue-100 text-center">3rd Year Students</li>
                      <li className="bg-blue-50 px-3 py-2 rounded border border-blue-100 text-center">4th Year Students</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Domains */}
              <div className="bg-white border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-50 text-secondary flex items-center justify-center rounded shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Key Technology Domains</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Interns will work on real-world projects and problem statements across a variety of cutting-edge technology domains:
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs font-semibold text-gray-700">
                      <li className="flex items-center before:content-['›'] before:text-secondary before:mr-2">Full Stack Web Development (MERN/Next.js)</li>
                      <li className="flex items-center before:content-['›'] before:text-secondary before:mr-2">Artificial Intelligence & Machine Learning</li>
                      <li className="flex items-center before:content-['›'] before:text-secondary before:mr-2">Cyber Security & Network Forensics</li>
                      <li className="flex items-center before:content-['›'] before:text-secondary before:mr-2">Data Science & Big Data Analytics</li>
                      <li className="flex items-center before:content-['›'] before:text-secondary before:mr-2">Cloud Computing & DevOps</li>
                      <li className="flex items-center before:content-['›'] before:text-secondary before:mr-2">Internet of Things (IoT)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Internship Portal */}
              <div className="bg-white border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-50 text-green-600 flex items-center justify-center rounded shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">CSDAC Internship Portal</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      All internship applications, progress tracking, project submissions, and final certificate generation are managed through our dedicated central portal.
                    </p>
                    <a href="https://internship.cdac.in" target="_blank" className="inline-block text-sm font-bold bg-primary text-white px-6 py-3 uppercase tracking-wide hover:bg-blue-900 transition-colors shadow-sm">
                      Access Internship Portal
                    </a>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
