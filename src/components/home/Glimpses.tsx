import React from 'react';

const gridItems = [
  { id: 1, title: 'Video Gallery', icon: '/img/icon/video.png', bg: 'bg-blue-500', links: ['webSIEM Solution', 'Cyber Security Operation Centre', 'E-Hastakshar', 'National Resource Centre for EHR Standards'] },
  { id: 2, title: 'Events', icon: '/img/icon/event.png', bg: 'bg-red-700', links: ['Accelerating Biology 2026: Reimagining Biology in AI Era'] },
  { id: 3, title: 'Awards', icon: '/img/icon/award.png', bg: 'bg-orange-500', links: ['National Recognition for Integrating Mental Health and Technology', 'HUID AHC Automation Honoured at ET GovTech Awards 2026', 'e-Hastakshar Wins ET GovTech'] },
  { id: 4, title: 'Tenders', icon: '/img/icon/tender.png', bg: 'bg-green-600', links: ['UTM/NGFW Device', 'Colocation Facility for AI Infra'] },
  { id: 5, title: 'Achievements', icon: '/img/icon/achievment.png', bg: 'bg-gray-700', links: ['High Performance Computing, Grid & Cloud Computing', 'Cyber Security & Cyber Forensics'] },
  { id: 6, title: 'Recognition', icon: '/img/icon/award.png', bg: 'bg-teal-600', links: ['Shri. Gaur Sunder elected as the Chair of SNOMED Int Member Forum', 'Nomination of Dr. Anindita Banerjee as an expert to the iCET (India) group'] },
];

export default function Glimpses() {
  return (
    <section className="py-12 bg-[#f8f9fa]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Column: Glimpses */}
          <div className="lg:w-1/3 bg-white shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded-lg overflow-hidden border border-gray-100 flex flex-col">
            <div className="bg-gray-100 p-4 flex justify-center items-center">
              <img src="/img/glimps.png" alt="Glimpses Illustration" className="max-w-full h-auto" />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h2 className="text-[#0a4892] text-2xl font-bold uppercase mb-4">GLIMPSES</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-4 text-justify">
                Get a glimpse into CSDAC's activities, achievements, and innovative technologies which goes a long way in enhancing the quality of life of common citizens. Handpicked and newsworthy stories, which deserve the attention of rational minds are reflected. The audio-visual gallery contains streaming media files focusing on technologies and important events of national and international importance. CSDAC's major awards won, accolades received and partnership with industries are showcased here.
              </p>
            </div>
          </div>

          {/* Right Column: 2x3 Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
            {gridItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)] pt-10 pb-4 px-5 relative flex flex-col border border-gray-100">
                {/* Floating Icon */}
                <div className={`absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full ${item.bg} flex items-center justify-center border-4 border-white shadow-sm`}>
                  <img src={item.icon} alt={item.title} className="w-5 h-5 filter brightness-0 invert" />
                </div>
                
                <h3 className="text-center text-lg font-bold text-gray-800 mb-4">{item.title}</h3>
                
                <ul className="text-xs text-gray-700 space-y-2 mb-6 list-disc pl-4 flex-1">
                  {item.links.map((link, idx) => (
                    <li key={idx} className="leading-snug">{link}</li>
                  ))}
                </ul>
                
                <div className="mt-auto">
                  <button className="bg-[#ffc107] hover:bg-[#ffb300] text-gray-900 font-semibold text-xs px-4 py-1.5 rounded transition-colors shadow-sm">
                    Know More..
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
