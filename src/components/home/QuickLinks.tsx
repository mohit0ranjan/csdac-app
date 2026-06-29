import React from 'react';
import Link from 'next/link';

export default function QuickLinks() {
  return (
    <section className="py-12 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Column 1 */}
          <div className="flex flex-col space-y-8">
            <div>
              <h2 className="text-[#0a4892] text-xl font-bold uppercase mb-4">QUICK LINKS</h2>
              <ul className="text-sm text-gray-700 space-y-2 list-disc pl-4">
                <li><a href="https://www.cdac.in" className="hover:text-blue-600">राजभाषा अनुभाग</a></li>
                <li><a href="https://www.cdac.in" className="hover:text-blue-600">Sponsored Projects</a></li>
                <li><a href="https://www.cdac.in" className="hover:text-blue-600">Download software tools & fonts for 22 Indian languages</a></li>
                <li><a href="https://www.cdac.in" className="hover:text-blue-600">North East Initiatives</a></li>
                <li><a href="https://www.cdac.in" className="hover:text-blue-600">Portals</a></li>
                <li><a href="https://www.cdac.in" className="hover:text-blue-600">Patents</a></li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-[#0a4892] text-xl font-bold uppercase mb-4">DOWNLOAD</h2>
              <ul className="text-sm text-gray-700 space-y-2 list-disc pl-4">
                <li><a href="https://www.cdac.in" className="hover:text-blue-600">Multilingual Tools</a></li>
                <li><a href="https://www.cdac.in" className="hover:text-blue-600">End Point Security Solutions</a></li>
                <li><a href="https://www.cdac.in" className="hover:text-blue-600">Techzine - CSDAC R&D Digest</a></li>
                <li><a href="https://www.cdac.in" className="hover:text-blue-600">Articles</a></li>
                <li><a href="https://www.cdac.in" className="hover:text-blue-600">Annual Reports</a></li>
                <li><a href="https://www.cdac.in" className="hover:text-blue-600">Blog</a></li>
              </ul>
            </div>
            
            <div className="flex items-center space-x-4">
              <img src="/img/india.gov.png" alt="MeitY" className="h-12 w-12 object-contain filter grayscale" />
              <div>
                <h3 className="text-gray-800 text-sm font-semibold">MeitY</h3>
                <p className="text-xs text-gray-500">Ministry of Electronics & Information Technology</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <img src="/img/rti.png" alt="RTI" className="h-10 w-10 object-contain" />
              <div>
                <h3 className="text-gray-800 text-sm font-semibold">RTI</h3>
                <p className="text-xs text-gray-500">Right to Information Act 2005</p>
              </div>
            </div>
            
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <img src="/img/hand.png" alt="Opportunities" className="h-6 w-6 object-contain" />
                <h2 className="text-[#0a4892] text-xl font-bold uppercase">OPPORTUNITIES</h2>
              </div>
              <ul className="text-sm text-gray-700 space-y-2 list-disc pl-4 ml-6">
                <li>Intent of Association for Collaborative</li>
              </ul>
            </div>
          </div>
          
          {/* Column 2 */}
          <div className="flex flex-col space-y-8">
            <div>
              <h2 className="text-[#0a4892] text-xl font-bold uppercase mb-4 border-b border-gray-200 pb-2">PRESS RELEASE / NEWS</h2>
              <ul className="text-sm text-gray-700 space-y-2 list-disc pl-4">
                <li><a href="https://www.cdac.in/index.aspx?id=press" className="hover:text-blue-600">India's Scientific Leap: PARAM RUDRA Supercomputers Unveiled</a></li>
                <li><a href="https://www.cdac.in/index.aspx?id=press" className="hover:text-blue-600">CSDAC launches new digital systems, signs strategic collaborations on 39th Foundation Day</a></li>
                <li><a href="https://www.cdac.in/index.aspx?id=press" className="hover:text-blue-600">MeitY launches indigenous integrated drive system to boost EV adoption</a></li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-[#0a4892] text-xl font-bold uppercase mb-4 border-b border-gray-200 pb-2">EDUCATION & TRAINING</h2>
              <ul className="text-sm text-gray-700 space-y-2 list-disc pl-4">
                <li><a href="https://www.cdac.in/index.aspx?id=education" className="hover:text-blue-600">Next Batch PG Course Commencement: 24 August 2026</a></li>
                <li><a href="https://www.cdac.in/index.aspx?id=education" className="hover:text-blue-600">Dates for CCAT Application: 26 May 2026 to 23 June 2026</a></li>
                <li><a href="https://www.cdac.in/index.aspx?id=education" className="hover:text-blue-600">Dates of CCAT at Test Centres: 4 & 5 July 2026</a></li>
                <li><a href="https://www.cdac.in/index.aspx?id=education" className="hover:text-blue-600">Good placements for CSDAC's PG Diploma Students</a></li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-[#0a4892] text-xl font-bold uppercase mb-4 border-b border-gray-200 pb-2">EXPRESSION OF INTEREST (EOI)</h2>
              <ul className="text-sm text-gray-700 space-y-2 list-disc pl-4">
                <li><a href="https://www.cdac.in/index.aspx?id=tenders" className="hover:text-blue-600">Fleet Management System for live tracking and Flexible Operations (FlexiFleet), Personalized Transit Route Guidance System (PTRGS) & Operational Strategies for Headway Reliability (OSHR)</a></li>
                <li><a href="https://www.cdac.in/index.aspx?id=tenders" className="hover:text-blue-600">Expression of Interest (EOI) for Fabrication, Assembly, Testing and Deployment of ARIES ECO</a></li>
              </ul>
            </div>
          </div>
          
          {/* Column 3 */}
          <div className="flex flex-col space-y-8">
            <div>
              <h2 className="text-[#0a4892] text-xl font-bold uppercase mb-4 border-b border-gray-200 pb-2">LATEST UPDATE</h2>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex bg-white shadow-[0_0_8px_rgba(0,0,0,0.1)] rounded p-3 items-center">
                    <img 
                      src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=150&auto=format&fit=crop" 
                      alt="News Thumbnail" 
                      className="w-16 h-12 object-cover mr-4 rounded-sm"
                    />
                    <p className="text-xs text-gray-800 leading-snug">
                      MeitY launches indigenous integrated drive system to boost EV adoption
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-[#0a4892] text-xl font-bold uppercase mb-4 border-b border-gray-200 pb-2">TECHNOLOGY ADVANCEMENT AND PROLIFERATION (TAP)</h2>
              <ul className="text-sm text-gray-700 space-y-2 list-disc pl-4">
                <li>Products Service Solution Interactive book</li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
