"use client";

import React, { useState } from "react";
import { Search, ShieldCheck, CheckCircle2, XCircle, FileBadge, User, Briefcase, Calendar, QrCode, Award, ArrowLeft, ArrowRight, RefreshCw, AlertCircle, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface CertificateResult {
  certificateId: string;
  studentName: string;
  program: string;
  technologyDomain: string;
  projectAssigned: string;
  batchName: string;
  internshipDuration: string;
  startDate: string;
  completionDate: string;
  issueDate: string;
  certificateStatus: string;
  verificationStatus: string;
  mentorName: string;
  issuedBy: string;
  certificateNumber: string;
}

export default function VerificationPage() {
  const [certificateId, setCertificateId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<CertificateResult | null>(null);

  const handleVerify = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!certificateId.trim()) {
      setError("Please enter a Certificate ID");
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch(`/api/verify?certificateId=${encodeURIComponent(certificateId)}`);
      const data = await response.json();

      if (response.ok && data.success) {
        setResult(data.data);
      } else {
        setError(data.error || "Certificate not found.");
      }
    } catch (err) {
      setError("Failed to verify certificate. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setCertificateId("");
    setResult(null);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-[#f4f7fb] relative overflow-hidden flex flex-col font-sans">
      {/* Background Textures */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'100\\' height=\\'100\\' viewBox=\\'0 0 100 100\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z\\' fill=\\'%230a4892\\' fill-rule=\\'evenodd\\'/%3E%3C/svg%3E')" }}></div>

      {/* Hero Section */}
      <div className="bg-[#0a2342] text-white pt-16 pb-24 relative overflow-hidden border-b-4 border-[#FF9933]">
         <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-4xl text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Certificate Verification</h1>
            <p className="text-blue-100/80 md:text-lg max-w-2xl mx-auto leading-relaxed">
               Verify the authenticity of internship certificates issued through the official CSDAC Internship Management System.
            </p>
         </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 sm:px-6 -mt-12 relative z-20 max-w-3xl pb-20">
         
         {!result && !error && (
            /* Search Card */
            <div className="bg-white border border-slate-300 p-8 sm:p-12 animate-[fadeIn_0.5s_ease-out]">
               <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-slate-900">Verify Your Certificate</h2>
                  <p className="text-slate-600 mt-2">Enter the Certificate ID exactly as printed on your certificate.</p>
               </div>
               
               <form onSubmit={handleVerify} className="max-w-md mx-auto">
                  <div className="mb-6 relative">
                     <label htmlFor="certId" className="block text-sm font-semibold text-slate-700 mb-2">Certificate ID</label>
                     <div className="relative">
                        <input
                           type="text"
                           id="certId"
                           value={certificateId}
                           onChange={(e) => setCertificateId(e.target.value)}
                           placeholder="CSDAC-2026-AI-000184"
                           disabled={loading}
                           className="w-full bg-white border border-slate-300 py-3 px-4 text-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#0a4892] focus:ring-1 focus:ring-[#0a4892] transition-colors disabled:opacity-50"
                        />
                     </div>
                     <p className="text-xs text-slate-500 mt-2">Certificate IDs are case-insensitive.</p>
                  </div>

                  <button
                     type="submit"
                     disabled={loading || !certificateId.trim()}
                     className="w-full bg-[#0a4892] hover:bg-[#083b7a] text-white font-semibold py-3 border border-[#083b7a] transition-colors flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                     {loading ? (
                        <>
                           <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                           Verifying Records...
                        </>
                     ) : (
                        <>
                           Verify Certificate <ArrowRight className="w-5 h-5" />
                        </>
                     )}
                  </button>
               </form>
            </div>
         )}

         {loading && (
             <div className="bg-white border border-slate-300 p-12 text-center">
                 <div className="w-12 h-12 border-4 border-slate-200 border-t-[#0a4892] rounded-full animate-spin mx-auto mb-6"></div>
                 <h3 className="text-lg font-bold text-slate-900 mb-2">Verifying your certificate...</h3>
                 <p className="text-slate-600">Connecting to official records</p>
             </div>
         )}

         {!loading && error && (
            /* Error Card */
            <div className="bg-white border border-red-300 p-8 sm:p-12 animate-[fadeIn_0.5s_ease-out] text-center">
               <div className="mb-6">
                  <XCircle className="w-16 h-16 text-red-600 mx-auto" />
               </div>
               <h2 className="text-2xl font-bold text-slate-900 mb-3">Certificate Not Found</h2>
               <p className="text-slate-700 mb-8 max-w-md mx-auto">
                  The entered Certificate ID <strong className="text-slate-900">{certificateId}</strong> does not match any certificate issued by CSDAC.
               </p>
               
               <div className="bg-slate-50 border border-slate-200 p-6 text-left max-w-sm mx-auto mb-8">
                  <p className="text-sm font-bold text-slate-700 mb-3">Possible Reasons:</p>
                  <ul className="space-y-2 text-sm text-slate-600 list-disc pl-5">
                     <li>Incorrect Certificate ID</li>
                     <li>Typographical error</li>
                     <li>Certificate not yet issued</li>
                     <li>Certificate revoked</li>
                  </ul>
               </div>

               <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button onClick={resetForm} className="bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 px-6 transition-colors w-full sm:w-auto">
                     Verify Another
                  </button>
                  <a href="https://www.cdac.in/index.aspx?id=contacts" target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-slate-900 font-semibold py-3 px-6 w-full sm:w-auto transition-colors border border-slate-300 hover:bg-slate-50">
                     Contact CSDAC
                  </a>
               </div>
            </div>
         )}

         {!loading && result && (
            /* Success Card */
            <div className="bg-white border border-slate-300 animate-[fadeIn_0.5s_ease-out]">
                {/* Card Header */}
                <div className="bg-[#f0f4f8] px-8 py-6 border-b border-slate-300 flex items-center gap-4">
                   <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                   <div>
                      <h2 className="text-xl font-bold text-slate-900">Successfully Verified</h2>
                      <p className="text-sm text-slate-600 mt-1">Authentic CSDAC Document</p>
                   </div>
                </div>

                {/* Card Body */}
                <div className="p-8 sm:p-10">
                   <div className="space-y-8">
                         <div className="border-b border-slate-300 pb-4">
                            <p className="text-sm font-semibold text-slate-600 mb-1">Student Name</p>
                            <h3 className="text-2xl font-bold text-slate-900">{result.studentName}</h3>
                            <p className="text-base text-[#0a4892] font-semibold mt-1">{result.program}</p>
                         </div>

                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border border-slate-300">
                            <div className="p-4 border-b sm:border-b-0 sm:border-r border-slate-300 bg-slate-50">
                                <p className="text-xs font-semibold text-slate-600 mb-1">Certificate ID</p>
                                <p className="text-sm font-bold text-slate-900">{result.certificateId}</p>
                            </div>
                            <div className="p-4 border-b border-slate-300 sm:border-b-0 bg-slate-50">
                                <p className="text-xs font-semibold text-slate-600 mb-1">Certificate No.</p>
                                <p className="text-sm font-bold text-slate-900">{result.certificateNumber}</p>
                            </div>
                            <div className="p-4 border-t sm:border-r border-slate-300 bg-slate-50">
                                <p className="text-xs font-semibold text-slate-600 mb-1">Issue Date</p>
                                <p className="text-sm font-bold text-slate-900">{result.issueDate}</p>
                            </div>
                            <div className="p-4 border-t border-slate-300 bg-slate-50">
                                <p className="text-xs font-semibold text-slate-600 mb-1">Internship Duration</p>
                                <p className="text-sm font-bold text-slate-900">{result.internshipDuration}</p>
                            </div>
                         </div>

                         <table className="w-full text-left border-collapse border border-slate-300">
                            <tbody>
                               <tr className="border-b border-slate-300">
                                  <th className="py-3 px-4 bg-slate-50 border-r border-slate-300 w-1/3 text-sm font-semibold text-slate-700">Assigned Project</th>
                                  <td className="py-3 px-4 text-sm font-medium text-slate-900">{result.projectAssigned}</td>
                               </tr>
                               <tr className="border-b border-slate-300">
                                  <th className="py-3 px-4 bg-slate-50 border-r border-slate-300 text-sm font-semibold text-slate-700">Technology Domain</th>
                                  <td className="py-3 px-4 text-sm font-medium text-slate-900">{result.technologyDomain}</td>
                               </tr>
                               <tr className="border-b border-slate-300">
                                  <th className="py-3 px-4 bg-slate-50 border-r border-slate-300 text-sm font-semibold text-slate-700">Mentor Name</th>
                                  <td className="py-3 px-4 text-sm font-medium text-slate-900">{result.mentorName}</td>
                               </tr>
                               <tr>
                                  <th className="py-3 px-4 bg-slate-50 border-r border-slate-300 text-sm font-semibold text-slate-700">Batch</th>
                                  <td className="py-3 px-4 text-sm font-medium text-slate-900">{result.batchName}</td>
                               </tr>
                            </tbody>
                         </table>
                         
                         <div className="text-center mt-10 pt-8 border-t border-slate-300">
                             <p className="text-sm font-semibold text-slate-700 mb-2">Issued By</p>
                             <p className="text-base font-bold text-slate-900">
                                Centre for Systems Development and Advanced Computing (CSDAC)
                             </p>
                         </div>
                   </div>
                </div>
                
                {/* Card Footer */}
                <div className="bg-[#0a2342] text-white p-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-blue-100">
                        Digitally verified via the Official Verification System.
                    </p>
                    <button onClick={resetForm} className="border border-white/30 hover:bg-white hover:text-[#0a2342] text-white text-sm font-semibold px-4 py-2 transition-colors flex items-center gap-2 whitespace-nowrap">
                        Verify Another
                    </button>
                </div>
            </div>
         )}
      </div>
    </div>
  );
}
