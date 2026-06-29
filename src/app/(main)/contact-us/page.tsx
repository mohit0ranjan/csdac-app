import React from 'react';
import Link from 'next/link';

export default function GenericPage() {
  return (
    <div className="flex-1 bg-gray-50 min-h-[calc(100vh-200px)] py-12">
      <div className="container mx-auto px-4">
        
        <div className="text-xs text-gray-500 mb-6 uppercase tracking-wider font-semibold">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Contact Us</span>
        </div>

        <div className="max-w-5xl mx-auto bg-white border border-gray-300 shadow-sm">
          
          <div className="bg-primary text-white p-6 border-b-4 border-secondary">
            <h1 className="text-2xl font-bold uppercase tracking-wide">Contact Us</h1>
          </div>

          <div className="p-8 md:p-12 text-gray-800 flex flex-col md:flex-row gap-12">
            
            <div className="flex-1">
              <h3 className="text-xl font-bold text-primary mb-4">Get in Touch</h3>
              <p className="mb-6 leading-relaxed">
                We are always open to queries, feedback, and collaboration opportunities. Reach out to our headquarters using the information below.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-900">Headquarters</h4>
                  <p className="text-sm">Centre for Systems Development of Advanced Computing (CSDAC)</p>
                  <p className="text-sm">Pune University Campus, Ganeshkhind,</p>
                  <p className="text-sm">Pune - 411 007, Maharashtra, India</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Phone & Fax</h4>
                  <p className="text-sm">Phone: +91-20-25704100</p>
                  <p className="text-sm">Fax: +91-20-25694004</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Email</h4>
                  <p className="text-sm text-primary font-medium hover:underline cursor-pointer">support@csdac.in</p>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <form className="bg-gray-50 p-6 border border-gray-200">
                <h4 className="text-lg font-bold text-primary mb-4">Send a Message</h4>
                
                <div className="mb-4">
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Name</label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-primary" />
                </div>
                <div className="mb-4">
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Email</label>
                  <input type="email" className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-primary" />
                </div>
                <div className="mb-4">
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Message</label>
                  <textarea rows={4} className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-primary"></textarea>
                </div>
                <button type="button" className="bg-primary text-white font-bold py-2 px-6 hover:bg-blue-900 transition-colors uppercase tracking-wide text-sm border border-transparent">
                  Submit
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
