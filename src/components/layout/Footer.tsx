import React from 'react';

export default function Footer() {
  return (
    <footer className="font-sans">
      
      {/* Logos Bar */}
      <div className="bg-[#222222] py-4">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center opacity-80">
          <img src="/img/bhim_upi.png" alt="BHIM" className="h-8 md:h-10 object-contain mx-2" />
          <img src="/img/digitalindia.png" alt="Digital India" className="h-8 md:h-10 object-contain mx-2" />
          <img src="/img/india.gov.png" alt="india.gov.in" className="h-8 md:h-10 object-contain mx-2" />
          <img src="/img/swachh_bharat.png" alt="Swachh Bharat" className="h-8 md:h-10 object-contain mx-2 filter brightness-0 invert" />
          <img src="/img/digitalindia.png" alt="MeitY" className="h-8 md:h-10 object-contain mx-2 filter brightness-0 invert" />
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Centers Column */}
            <div>
              <h3 className="text-gray-600 text-sm font-bold uppercase mb-4 pb-2 border-b border-gray-200">CENTERS</h3>
              <ul className="text-sm text-gray-700 space-y-1.5 list-disc pl-4">
                <li><a href="https://www.cdac.in/index.aspx?id=bengaluru" className="hover:text-blue-600">Bengaluru</a></li>
                <li><a href="https://www.cdac.in/index.aspx?id=chennai" className="hover:text-blue-600">Chennai</a></li>
                <li><a href="https://www.cdac.in/index.aspx?id=delhi" className="hover:text-blue-600">Delhi</a></li>
                <li><a href="https://www.cdac.in/index.aspx?id=hyderabad" className="hover:text-blue-600">Hyderabad</a></li>
                <li><a href="https://www.cdac.in/index.aspx?id=kolkata" className="hover:text-blue-600">Kolkata</a></li>
                <li><a href="https://www.cdac.in/index.aspx?id=mohali" className="hover:text-blue-600">Mohali</a></li>
                <li><a href="https://www.cdac.in/index.aspx?id=mumbai" className="hover:text-blue-600">Mumbai</a></li>
                <li><a href="https://www.cdac.in/index.aspx?id=noida" className="hover:text-blue-600">Noida</a></li>
                <li><a href="https://www.cdac.in/index.aspx?id=northeast" className="hover:text-blue-600">North East</a></li>
                <li><a href="https://www.cdac.in/index.aspx?id=patna" className="hover:text-blue-600">Patna</a></li>
                <li><a href="https://www.cdac.in/index.aspx?id=pune" className="hover:text-blue-600">Pune</a></li>
                <li><a href="https://www.cdac.in/index.aspx?id=thiruvananthapuram" className="hover:text-blue-600">Thiruvananthapuram</a></li>
              </ul>
            </div>

            {/* Links Column */}
            <div>
              <h3 className="text-gray-600 text-sm font-bold uppercase mb-4 pb-2 border-b border-gray-200">LINKS</h3>
              <ul className="text-sm text-gray-700 space-y-1.5 list-disc pl-4">
                <li><a href="/verify" className="hover:text-blue-600">Certificate Verification</a></li>
                <li><a href="https://www.cdac.in/index.aspx?id=about" className="hover:text-blue-600">About Us</a></li>
                <li><a href="https://www.cdac.in/index.aspx?id=products" className="hover:text-blue-600">Products & Services</a></li>
                <li><a href="https://www.cdac.in/index.aspx?id=research" className="hover:text-blue-600">R&D</a></li>
                <li><a href="https://www.cdac.in/index.aspx?id=careers" className="hover:text-blue-600">Careers</a></li>
                <li><a href="https://www.cdac.in/index.aspx?id=tenders" className="hover:text-blue-600">Tenders</a></li>
                <li><a href="https://www.cdac.in/index.aspx?id=press" className="hover:text-blue-600">Press Kit</a></li>
                <li><a href="https://www.cdac.in/index.aspx?id=video" className="hover:text-blue-600">Video Gallery</a></li>
                <li><a href="https://www.cdac.in/index.aspx?id=events" className="hover:text-blue-600">Events</a></li>
                <li><a href="https://www.cdac.in/index.aspx?id=awards" className="hover:text-blue-600">Awards</a></li>
                <li><a href="https://www.cdac.in/index.aspx?id=downloads" className="hover:text-blue-600">Downloads</a></li>
                <li><a href="https://www.cdac.in/index.aspx?id=achievements" className="hover:text-blue-600">Achievements</a></li>
                <li><a href="https://www.cdac.in/index.aspx?id=alliance" className="hover:text-blue-600">Alliance</a></li>
              </ul>
            </div>

            {/* Contact Us Column */}
            <div>
              <h3 className="text-gray-600 text-sm font-bold uppercase mb-4 pb-2 border-b border-gray-200">CONTACT US</h3>
              <div className="mb-4 rounded overflow-hidden border border-gray-200">
                <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=600&auto=format&fit=crop" alt="Map Placeholder" className="w-full h-32 object-cover opacity-50" />
              </div>
              <h4 className="text-sm font-bold text-gray-800 mb-1">Centre for Systems Development of Advanced Computing</h4>
              <p className="text-sm text-gray-700 leading-relaxed font-bold">CSDAC Innovation Park,</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Panchavati, Pashan, Pune - 411 008, Maharashtra (India)<br />
                Phone: +91-20-25503100<br />
                Fax: +91-20-25503131
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-white border-t border-gray-200 py-6 text-center">
        <div className="text-xs text-[#0a4892] space-x-2 mb-2 font-semibold">
          <a href="#" className="hover:underline">Help</a> <span>|</span> 
          <a href="#" className="hover:underline">Website Policies</a> <span>|</span> 
          <a href="#" className="hover:underline">Copyright Policy</a> <span>|</span> 
          <a href="#" className="hover:underline">Terms & Conditions</a> <span>|</span> 
          <a href="#" className="hover:underline">Reach Us</a> <span>|</span> 
          <a href="#" className="hover:underline">Sitemap</a>
        </div>
        <p className="text-[11px] text-gray-600">
          Website owned & maintained by: Centre for Systems Development of Advanced Computing (CSDAC)<br />
          &copy; {new Date().getFullYear()} CSDAC. All rights reserved. Last Updated: Friday, June 26, 2026
        </p>
      </div>

    </footer>
  );
}
