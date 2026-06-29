'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function VerifyPage() {
  const [certId, setCertId] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [result, setResult] = useState<any>(null);

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!certId.trim()) return;

    setStatus('loading');
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_INTERNSHIPS_URL}/api/verify?id=${certId}`);
      if (!response.ok) throw new Error('Not found');
      const data = await response.json();
      setResult(data);
      setStatus('success');
    } catch (error) {
      setResult(null);
      setStatus('error');
    }
  };

  return (
    <div className="flex-1 bg-gray-50 min-h-[calc(100vh-200px)] py-12">
      <div className="container mx-auto px-4">
        
        {/* Breadcrumb */}
        <div className="text-xs text-gray-500 mb-6 uppercase tracking-wider font-semibold">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Certificate Verification</span>
        </div>

        <div className="max-w-4xl mx-auto bg-white border border-gray-300 shadow-sm">
          
          <div className="bg-primary text-white p-6 border-b-4 border-secondary flex items-center gap-4">
            <svg className="w-8 h-8 opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <div>
              <h1 className="text-2xl font-bold uppercase tracking-wide">Certificate Verification Portal</h1>
              <p className="text-primary-foreground/80 text-sm mt-1">
                Verify the authenticity of CSDAC issued certificates.
              </p>
            </div>
          </div>

          <div className="p-8 md:p-12">
            
            <div className="bg-blue-50 border border-blue-200 p-4 mb-8 text-sm text-gray-700">
              <strong>Instructions:</strong> Please enter the unique Certificate Number exactly as printed on the certificate or provided in your email to verify its authenticity.
            </div>

            <form onSubmit={handleVerify} className="max-w-xl mx-auto">
              <div className="mb-6">
                <label htmlFor="certId" className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                  Certificate Number / ID <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="certId"
                  value={certId}
                  onChange={(e) => setCertId(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-gray-900 uppercase font-mono"
                  placeholder="e.g. CSDAC-2026-XXXX"
                  required
                />
              </div>

              <div className="flex gap-4 justify-center">
                <button
                  type="submit"
                  disabled={status === 'loading' || !certId.trim()}
                  className="bg-primary text-white font-bold py-3 px-8 hover:bg-blue-900 transition-colors uppercase tracking-wide text-sm disabled:opacity-50 border border-transparent shadow-sm"
                >
                  {status === 'loading' ? 'Verifying...' : 'Verify Now'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setCertId('');
                    setStatus('idle');
                    setResult(null);
                  }}
                  className="bg-gray-200 text-gray-800 font-bold py-3 px-8 hover:bg-gray-300 transition-colors uppercase tracking-wide text-sm border border-transparent shadow-sm"
                >
                  Reset
                </button>
              </div>
            </form>

            {/* Results Section */}
            {status === 'success' && result && (
              <div className="mt-12 border border-green-300 rounded-sm overflow-hidden bg-white shadow-sm">
                <div className="bg-green-50 border-b border-green-300 px-6 py-4 flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-green-900 text-lg uppercase">Valid Certificate</h3>
                    <p className="text-green-700 text-sm">This certificate is authentic and registered in the CSDAC database.</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <table className="w-full text-sm text-left border-collapse">
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <th className="py-3 px-4 bg-gray-50 font-bold text-gray-900 w-1/3">Certificate No.</th>
                        <td className="py-3 px-4 font-mono text-gray-800">{result.certificate.certificateNumber}</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <th className="py-3 px-4 bg-gray-50 font-bold text-gray-900">Candidate Name</th>
                        <td className="py-3 px-4 text-gray-800">{result.user.name}</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <th className="py-3 px-4 bg-gray-50 font-bold text-gray-900">Program / Internship</th>
                        <td className="py-3 px-4 text-gray-800">{result.internship.title}</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <th className="py-3 px-4 bg-gray-50 font-bold text-gray-900">Domain</th>
                        <td className="py-3 px-4 text-gray-800">{result.internship.domain}</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <th className="py-3 px-4 bg-gray-50 font-bold text-gray-900">Issue Date</th>
                        <td className="py-3 px-4 text-gray-800">
                           {new Date(result.certificate.issueDate).toLocaleDateString('en-IN', {
                              day: 'numeric', month: 'long', year: 'numeric'
                           })}
                        </td>
                      </tr>
                      <tr>
                        <th className="py-3 px-4 bg-gray-50 font-bold text-gray-900">Status</th>
                        <td className="py-3 px-4">
                           <span className="bg-green-100 text-green-800 px-2 py-1 text-xs font-bold uppercase tracking-wider rounded-sm border border-green-200">
                              VERIFIED
                           </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {status === 'error' && (
              <div className="mt-12 bg-red-50 border border-red-300 p-6 flex items-start gap-4 shadow-sm rounded-sm">
                <div className="w-10 h-10 bg-red-100 border border-red-300 rounded-full flex items-center justify-center text-red-600 shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </div>
                <div>
                  <h3 className="font-bold text-red-900 text-lg uppercase mb-1">Record Not Found</h3>
                  <p className="text-red-700 text-sm mb-4">
                    The certificate number <strong>{certId}</strong> does not exist in our database or is invalid. Please check the number and try again.
                  </p>
                  <div className="text-sm border-t border-red-200 pt-4 mt-2">
                    <span className="text-gray-600">If you believe this is an error, please contact support:</span><br/>
                    <a href="mailto:support@csdac.in" className="text-primary font-bold hover:underline">support@csdac.in</a>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
