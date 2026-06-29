'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Menu, X, Home } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About Us', href: '/about-us' },
    { name: 'Products & Services', href: '/products-services' },
    { name: 'Virtual Internships', href: '/academics' },
    { name: 'Contact Us', href: '/contact-us' },
    { name: 'Verify Certificate', href: '/verify' },
  ];

  return (
    <div className="bg-white shadow-sm relative z-50">
      
      {/* Brand Header Row */}
      <div className="container mx-auto px-4 py-2 flex flex-wrap justify-between items-center min-h-[70px]">
        
        {/* Left: CSDAC Logo Only */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center">
             <img src="/img/csdac-navbar.png" alt="CSDAC Logo" className="h-16 w-auto object-contain" />
          </Link>
        </div>
        
        {/* Right: Search only */}
        <div className="hidden lg:flex items-center space-x-6">
          <div className="flex items-center border border-gray-300 rounded overflow-hidden">
             <input type="text" placeholder="Search..." className="px-3 py-1 text-sm outline-none w-48" />
             <button className="bg-primary text-white p-1.5 hover:bg-blue-800 transition-colors">
               <Search className="w-4 h-4" />
             </button>
          </div>
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-primary focus:outline-none p-1.5 border border-gray-300 rounded bg-gray-50"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Slim Blue Navigation Bar */}
      <nav className="bg-primary border-t-2 border-secondary hidden lg:block">
        <div className="container mx-auto px-4">
          <ul className="flex items-center h-10">
            
            {/* Home Icon */}
            <li className="h-full">
              <Link href="/" className="h-full px-4 flex items-center bg-secondary text-white hover:bg-orange-600 transition-colors border-r border-primary/20">
                <Home className="w-4 h-4" />
                <span className="sr-only">Home</span>
              </Link>
            </li>
            
            {/* Nav Links */}
            {navLinks.map((link) => (
              <li key={link.name} className="h-full relative group border-r border-white/10 last:border-0">
                <Link 
                  href={link.href}
                  className="h-full flex items-center px-4 text-[13px] font-semibold text-white hover:bg-blue-800 transition-colors uppercase tracking-wide"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <nav className="lg:hidden bg-primary w-full shadow-inner border-t-2 border-secondary">
          <ul className="flex flex-col">
            <li className="border-b border-white/10">
              <Link href="/" className="block px-6 py-2.5 text-sm font-semibold text-white hover:bg-blue-800 uppercase" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            {navLinks.map((link) => (
              <li key={link.name} className="border-b border-white/10 last:border-0">
                <Link 
                  href={link.href}
                  className="block px-6 py-2.5 text-sm font-semibold text-white hover:bg-blue-800 uppercase"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="px-6 py-3 bg-gray-100">
               <div className="flex items-center relative border border-gray-300 bg-white rounded">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="w-full text-black text-sm pl-3 pr-10 py-1.5 focus:outline-none"
                />
                <button className="absolute right-0 top-0 h-full px-3 text-gray-600 border-l border-gray-300">
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
