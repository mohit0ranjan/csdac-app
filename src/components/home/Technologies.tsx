import React from 'react';
import Link from 'next/link';
import { Monitor, Cpu, Globe, Shield, Microscope, Network, Activity, Code } from 'lucide-react';

const techItems = [
  { id: 1, name: 'High Performance Computing', icon: Monitor, color: 'text-[#00b300]', href: 'https://www.cdac.in/index.aspx?id=hpc' },
  { id: 2, name: 'Quantum Computing', icon: Microscope, color: 'text-[#3399ff]', href: 'https://www.cdac.in/index.aspx?id=quantum' },
  { id: 3, name: 'AI & Multilingual Computing', icon: Globe, color: 'text-[#3399ff]', href: 'https://www.cdac.in/index.aspx?id=ai' },
  { id: 4, name: 'Strategic Electronics', icon: Cpu, color: 'text-[#666699]', href: 'https://www.cdac.in/index.aspx?id=microprocessor' },
  { id: 5, name: 'Software Technologies', icon: Code, color: 'text-[#3366cc]', href: 'https://www.cdac.in/index.aspx?id=software' },
  { id: 6, name: 'Health Informatics', icon: Activity, color: 'text-[#cc0000]', href: 'https://www.cdac.in/index.aspx?id=health' },
  { id: 7, name: 'Education & Training', icon: Network, color: 'text-[#336699]', href: 'https://www.cdac.in/index.aspx?id=education' },
  { id: 8, name: 'Cyber Security & Forensics', icon: Shield, color: 'text-[#6600cc]', href: 'https://www.cdac.in/index.aspx?id=cybersecurity' },
];

export default function Technologies() {
  return (
    <section className="bg-white border-b border-gray-200">
      <div className="container mx-auto">
        <div className="flex flex-wrap lg:flex-nowrap justify-between">
          {techItems.map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <Link 
                key={tech.id}
                href={tech.href}
                data-aos="fade-up"
                data-aos-delay={idx * 50}
                className={`flex flex-col items-center justify-center p-3 text-center flex-1 min-w-[120px] hover:bg-gray-50 transition-colors ${idx !== techItems.length - 1 ? 'border-r border-gray-200' : ''}`}
              >
                <Icon className={`w-8 h-8 mb-2 ${tech.color}`} />
                <span className="text-[11px] font-semibold text-gray-700 leading-tight">
                  {tech.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
