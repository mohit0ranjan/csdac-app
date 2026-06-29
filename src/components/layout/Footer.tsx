import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="font-sans">
      
      {/* Upper Footer: Dark Grey Background */}
      <div className="bg-[#242b35] text-white pt-10 pb-8 border-t-[5px] border-secondary">
        <div className="container mx-auto px-4">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Column 1: Links */}
            <div>
              <h4 className="text-[15px] font-bold mb-4 border-b border-gray-600 pb-2 uppercase text-gray-200 tracking-wide">Website Links</h4>
              <ul className="space-y-2 text-[13px] text-[#b3b3b3]">
                <li><Link href="/about-us" className="hover:text-secondary transition-colors block before:content-['›'] before:mr-2">About Us</Link></li>
                <li><Link href="/products-services" className="hover:text-secondary transition-colors block before:content-['›'] before:mr-2">Products & Services</Link></li>
                <li><Link href="/academics" className="hover:text-secondary transition-colors block before:content-['›'] before:mr-2">Virtual Internships</Link></li>
                <li><Link href="/contact-us" className="hover:text-secondary transition-colors block before:content-['›'] before:mr-2">Contact Us</Link></li>
              </ul>
            </div>

            {/* Column 2: Public Portals */}
            <div>
              <h4 className="text-[15px] font-bold mb-4 border-b border-gray-600 pb-2 uppercase text-gray-200 tracking-wide">Public Portals</h4>
              <ul className="space-y-2 text-[13px] text-[#b3b3b3]">
                <li><Link href="/verify" className="hover:text-secondary transition-colors block before:content-['›'] before:mr-2 text-white font-semibold">Certificate Verification</Link></li>
                <li><Link href="https://internships.csdac.in" target="_blank" className="hover:text-secondary transition-colors block before:content-['›'] before:mr-2 text-white font-semibold">Internship Portal (WBL)</Link></li>
                <li><a href="#" className="hover:text-secondary transition-colors block before:content-['›'] before:mr-2">Student Dashboard</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors block before:content-['›'] before:mr-2">Downloads</a></li>
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div className="lg:col-span-2">
              <h4 className="text-[15px] font-bold mb-4 border-b border-gray-600 pb-2 uppercase text-gray-200 tracking-wide">Contact Us</h4>
              <div className="text-[13px] text-[#b3b3b3] space-y-2">
                <p className="font-bold text-white">Centre for Systems Development of Advanced Computing (CSDAC)</p>
                <p>Pune University Campus, Ganeshkhind,</p>
                <p>Pune - 411 007, Maharashtra (India)</p>
                <p>Phone: +91-20-25704100, Fax: +91-20-25694004</p>
                <p className="mt-2 text-secondary">Email: support@csdac.in</p>
              </div>
            </div>
            
          </div>

        </div>
      </div>

      {/* Lower Footer: Dark Blue (Primary) Background */}
      <div className="bg-primary text-white py-6 border-t border-blue-900 shadow-[inset_0_4px_6px_rgba(0,0,0,0.3)]">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-[11px] text-gray-300 text-center md:text-left space-y-1">
            <div className="space-x-3 mb-2 font-semibold text-gray-200">
              <a href="#" className="hover:text-secondary">Website Policies</a> | 
              <a href="#" className="hover:text-secondary">Help</a> | 
              <a href="#" className="hover:text-secondary">Disclaimer</a> | 
              <a href="#" className="hover:text-secondary">Terms and Conditions</a> | 
              <a href="#" className="hover:text-secondary">Privacy Policy</a>
            </div>
            <p>
              Website Designed, Developed, Hosted and Maintained by 
            </p>
            <p className="font-semibold text-gray-200">
              Centre for Systems Development of Advanced Computing (CSDAC)
            </p>
            <p className="pt-2 text-gray-400">
              &copy; {new Date().getFullYear()} CSDAC. All rights reserved. Last Updated: <strong>26 Jun 2026</strong>
            </p>
          </div>

          <div className="flex-shrink-0 bg-white p-2 rounded shadow-inner">
             <img src="/img/csdac-navbar.png" alt="CSDAC Logo" className="h-10 w-auto object-contain" />
          </div>

        </div>
      </div>
      
    </footer>
  );
}
