import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  const navLinks = [
    { name: 'ABOUT US', href: 'https://www.cdac.in/index.aspx?id=about' },
    { name: 'PRODUCTS & SERVICES', href: 'https://www.cdac.in/index.aspx?id=products' },
    { name: 'R&D', href: 'https://www.cdac.in/index.aspx?id=research' },
    { name: 'ALLIANCE', href: 'https://www.cdac.in/index.aspx?id=alliance' },
    { name: 'TENDERS / EOI', href: 'https://www.cdac.in/index.aspx?id=tenders' },
    { name: 'CAREERS', href: 'https://www.cdac.in/index.aspx?id=careers' },
    { name: 'CONTACT US', href: 'https://www.cdac.in/index.aspx?id=contacts' },
    { name: 'VERIFY CERTIFICATE', href: '/verify' },
  ];

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 flex justify-between items-center h-[85px]">
        
        {/* Logo Replacement for CSDAC */}
        <Link href="/" className="flex items-center h-full py-2">
          <img 
            src="/img/csdac-navbar.png" 
            alt="CSDAC Logo" 
            className="h-full w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center h-full text-[13px] text-gray-500 font-medium tracking-wide">
          
          {/* Home Icon */}
          <Link href="/" className="flex items-center hover:text-[#0a4892] transition-colors h-full px-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-800" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
          </Link>

          <span className="text-gray-300">|</span>

          <nav className="flex items-center h-full">
            {navLinks.map((link, index) => (
              <React.Fragment key={link.name}>
                <Link 
                  href={link.href}
                  className="px-3 py-6 hover:text-[#0a4892] transition-colors h-full flex items-center"
                >
                  {link.name}
                </Link>
                {index < navLinks.length - 1 && (
                  <span className="text-gray-300">|</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
