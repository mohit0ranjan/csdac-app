'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function NewsAndNotices() {
  const [activeTab, setActiveTab] = useState<'whatsnew' | 'press' | 'tenders'>('whatsnew');

  const whatsNew = [
    { title: "Summer 2026 Virtual Internship Registrations Open for 2nd & 3rd Year Students", date: "29 Jun 2026", isNew: true },
    { title: "New Domains Added: Cloud Computing and IoT for Work-Based Learning", date: "15 Jun 2026", isNew: true },
    { title: "Orientation Session Schedule for Batch A (Cyber Security & Full Stack)", date: "01 Jun 2026", isNew: false },
    { title: "Important guidelines regarding project submission and certificate generation", date: "15 May 2026", isNew: false }
  ];

  const press = [
    { title: "CSDAC announces strategic partnership with 50+ Engineering Colleges for WBL", date: "20 Jun 2026", isNew: true },
    { title: "Over 10,000 students successfully certified in Virtual Internships this year", date: "10 Jun 2026", isNew: false },
    { title: "Launch of dedicated Internship Portal for seamless tracking and evaluation", date: "25 May 2026", isNew: false }
  ];

  const tenders = [
    { title: "Notification: Tenders section has been moved to the central procurement portal.", date: "01 Jan 2026", isNew: false }
  ];

  const getActiveData = () => {
    if (activeTab === 'whatsnew') return whatsNew;
    if (activeTab === 'press') return press;
    return tenders;
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Intro / About */}
          <div className="lg:col-span-7">
            <h2 className="text-2xl font-bold text-primary mb-2">About CSDAC</h2>
            <div className="w-12 h-1 bg-secondary mb-6"></div>
            
            <p className="text-gray-700 leading-relaxed mb-4 text-justify">
              The Centre for Systems Development of Advanced Computing (CSDAC) is an independent, premier organization dedicated to carrying out Research and Development in IT, Electronics, and associated areas.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6 text-justify">
              Different areas of CSDAC had originated at different times, many of which came out as a result of identification of opportunities. We are committed to nation building through indigenous technology development and empowering the next generation of engineers through our Virtual Internship programs.
            </p>

            <Link href="/about-us" className="inline-block bg-primary text-white font-semibold px-5 py-2 hover:bg-blue-900 transition-colors text-sm">
              Read More
            </Link>
          </div>

          {/* Right Column: Tabbed Notices (S3WaaS Standard Box) */}
          <div className="lg:col-span-5">
            <div className="border border-gray-300 shadow-sm bg-white">
              
              {/* Tab Headers */}
              <div className="flex border-b border-gray-300">
                <button 
                  onClick={() => setActiveTab('whatsnew')}
                  className={`flex-1 py-3 px-2 text-sm font-bold uppercase transition-colors border-r border-gray-300 ${activeTab === 'whatsnew' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                  What's New
                </button>
                <button 
                  onClick={() => setActiveTab('press')}
                  className={`flex-1 py-3 px-2 text-sm font-bold uppercase transition-colors border-r border-gray-300 ${activeTab === 'press' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                  Press Release
                </button>
                <button 
                  className={`flex-1 py-3 px-4 font-bold text-sm tracking-wide transition-colors ${activeTab === 'tenders' ? 'bg-primary text-white border-b-4 border-secondary' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                  onClick={() => setActiveTab('tenders')}
                >
                  ANNOUNCEMENTS
                </button>
              </div>

              {/* Tab Content List */}
              <div className="p-0 h-[300px] overflow-y-auto">
                <ul className="divide-y divide-gray-200">
                  {getActiveData().map((item, index) => (
                    <li key={index} className="p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start gap-3">
                        {/* PDF / Doc Icon Placeholder */}
                        <div className="mt-1 flex-shrink-0">
                          <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 24 24"><path d="M11.362 2c4.156 0 2.638 6 2.638 6s6-1.65 6 2.457v11.543h-16v-20h7.362zm.827-2h-10.189v24h20v-14.386c0-2.391-6.648-9.614-9.811-9.614zm4.811 13h-10v-1h10v1zm0 2h-10v1h10v-1zm0 3h-10v1h10v-1z"/></svg>
                        </div>
                        <div>
                          <Link href="#" className="text-primary text-sm font-semibold hover:underline block leading-snug">
                            {item.title}
                            {item.isNew && (
                              <span className="ml-2 inline-block animate-pulse text-[10px] bg-red-600 text-white px-1.5 py-0.5 rounded-sm">NEW</span>
                            )}
                          </Link>
                          <span className="text-xs text-gray-500 mt-1 block">Published: {item.date}</span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* View All Bar */}
              <div className="bg-gray-100 border-t border-gray-300 p-2 text-right">
                <Link href="#" className="text-sm font-bold text-primary hover:underline inline-flex items-center">
                  View All &raquo;
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
