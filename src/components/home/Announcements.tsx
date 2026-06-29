import React from 'react';
import { Bell, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function Announcements() {
  const announcements = [
    { id: 1, title: 'CSDAC launches new AI supercomputer AIRAWAT-PSAI, ranking among top 100 globally.', date: 'Oct 24, 2026', tag: 'New' },
    { id: 2, title: 'Admissions open for Post Graduate Diploma courses (PG-DAC) for the upcoming batch.', date: 'Oct 20, 2026', tag: 'Admissions' },
    { id: 3, title: 'Tender for supply of High Performance Computing equipment at Corporate Office.', date: 'Oct 15, 2026', tag: 'Tender' },
  ];

  return (
    <section data-aos="fade-up" className="bg-white border border-slate-200 rounded-xl shadow-lg shadow-blue-900/5 overflow-hidden flex flex-col lg:flex-row relative z-20 -mt-12 mx-4 lg:mx-0">
      
      {/* Title Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-5 lg:w-72 flex items-center shrink-0 relative overflow-hidden">
        <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-700/50 rounded-full blur-xl"></div>
        <Bell className="w-6 h-6 mr-4 animate-[ring_2s_ease-in-out_infinite] text-blue-300 drop-shadow-md relative z-10" />
        <h2 className="text-xl font-extrabold tracking-wide relative z-10">Announcements</h2>
      </div>

      {/* List Section */}
      <div className="flex-1 p-5 overflow-hidden flex flex-col justify-center bg-slate-50">
        <div className="flex flex-col lg:flex-row lg:items-center w-full gap-4 lg:gap-8">
          
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
            {announcements.slice(0, 2).map((item) => (
              <Link key={item.id} href="#" className="group flex flex-col md:flex-row md:items-start text-sm bg-white p-3 rounded border border-slate-100 shadow-sm hover:border-blue-300 hover:shadow-md transition-all">
                <div className="flex items-center mb-2 md:mb-0 md:mr-3 shrink-0">
                  <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full mr-2 ${
                    item.tag === 'New' ? 'bg-rose-100 text-rose-700' : 
                    item.tag === 'Admissions' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-200 text-slate-700'
                  }`}>
                    {item.tag}
                  </span>
                  <span className="text-blue-700 font-semibold text-xs">{item.date}</span>
                </div>
                <span className="text-slate-700 group-hover:text-blue-700 transition-colors line-clamp-2 leading-relaxed">
                  {item.title}
                </span>
              </Link>
            ))}
          </div>
          
          <Link href="#" className="inline-flex items-center justify-center bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white px-6 py-3 rounded font-bold transition-colors whitespace-nowrap shrink-0 lg:ml-auto">
            View All <ChevronRight className="w-5 h-5 ml-1" />
          </Link>
        </div>
      </div>
      
      {/* Custom Keyframes for Bell animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes ring {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(15deg); }
          50% { transform: rotate(-10deg); }
          75% { transform: rotate(5deg); }
        }
      `}} />
    </section>
  );
}
