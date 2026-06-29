import React from 'react';
import Link from 'next/link';
import { Calendar, ChevronRight, User } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    title: 'CSDAC signs MoU with National Supercomputing Mission for Phase III Expansion',
    date: 'October 25, 2026',
    author: 'PR Dept',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop',
    summary: 'A landmark agreement to accelerate quantum computing research across academic institutions in India, deployment of 10 new Petaflop systems.',
    href: 'https://www.cdac.in/index.aspx?id=press'
  },
  {
    id: 2,
    title: 'New Center of Excellence for AI inaugurated in Agricultural Technology',
    date: 'October 18, 2026',
    author: 'Media Cell',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=800&auto=format&fit=crop',
    summary: 'The new center will focus on developing indigenous language models and applied AI in agriculture for smart farming solutions.',
    href: 'https://www.cdac.in/index.aspx?id=press'
  },
  {
    id: 3,
    title: 'CSDAC successfully deploys e-Sanjeevani 2.0 with AI Diagnostic Tools',
    date: 'October 10, 2026',
    author: 'Health Info',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop',
    summary: 'The National Telemedicine Service upgraded with advanced AI diagnostic tools for rural healthcare, reaching 100 million consultations.'
  }
];

export default function LatestNews() {
  return (
    <section className="bg-slate-50 py-24 border-t border-slate-200">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-end mb-12 border-b border-slate-200 pb-4">
          <div>
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-2 block">Media Room</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Latest News & Events</h2>
          </div>
          <Link href="#" className="hidden md:flex items-center text-blue-600 hover:text-blue-800 font-bold transition-colors">
            View All News <ChevronRight className="w-5 h-5 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((news, idx) => (
            <div key={news.id} data-aos="fade-up" data-aos-delay={idx * 100} className="bg-white rounded-2xl shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_-5px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden group transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1">
              <div className="relative h-56 overflow-hidden bg-slate-900">
                <img 
                  src={news.image} 
                  alt={news.title}
                  className="w-full h-full object-cover group-hover:scale-110 group-hover:opacity-80 transition-all duration-700"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded shadow-lg">
                  Press Release
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center text-xs font-semibold text-slate-500 mb-4 space-x-4">
                  <span className="flex items-center">
                    <Calendar className="w-3.5 h-3.5 mr-1.5 text-blue-500" />
                    {news.date}
                  </span>
                  <span className="flex items-center">
                    <User className="w-3.5 h-3.5 mr-1.5 text-blue-500" />
                    {news.author}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 line-clamp-2 group-hover:text-blue-700 transition-colors leading-snug">
                  <Link href="#" className="focus:outline-none focus:underline">{news.title}</Link>
                </h3>
                <p className="text-slate-600 line-clamp-3 mb-6 text-sm leading-relaxed flex-1">
                  {news.summary}
                </p>
                <div className="mt-auto border-t border-slate-100 pt-4">
                  <Link href="#" className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors">
                    Read More <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center md:hidden">
          <Link href="#" className="inline-flex items-center justify-center bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white px-6 py-3 rounded font-bold transition-colors w-full">
            View All News <ChevronRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
