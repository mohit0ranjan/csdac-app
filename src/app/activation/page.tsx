"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  ShieldCheck,
  Lock,
  Check,
  Cloud,
  Server,
  Award,
  ArrowRight,
  Mail,
  Phone,
  User,
  Building2,
  MapPin,
  GraduationCap,
  ChevronDown,
  AlertCircle,
  Shield,
  CreditCard
} from "lucide-react";
import Image from "next/image";

const INDIAN_STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana",
  "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
  "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry",
];

const PROGRAMS = [
  "AI & Machine Learning",
  "Full Stack Development",
  "Data Science",
  "Cybersecurity",
  "Cloud Computing",
];

export default function WorkspaceActivationPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    state: "",
    program: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showPayment, setShowPayment] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [isRazorpayLoaded, setIsRazorpayLoaded] = useState(false);

  const razorpayRef = useRef<HTMLDivElement>(null);
  const [sessionId, setSessionId] = useState("");

  useEffect(() => {
    const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
    let id = "";
    for (let i = 0; i < 24; i++) id += chars[Math.floor(Math.random() * chars.length)];
    setSessionId(id);
  }, []);

  useEffect(() => {
    if (!showPayment || !razorpayRef.current) return;

    razorpayRef.current.innerHTML = "";
    setIsRazorpayLoaded(false);
    
    const form = document.createElement("form");
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/payment-button.js";
    script.setAttribute("data-payment_button_id", "pl_T78lz3S54ojngB");
    script.async = true;
    
    script.onload = () => {
      // Small delay to allow the iframe to fully render inside the container
      setTimeout(() => setIsRazorpayLoaded(true), 500);
    };

    form.appendChild(script);
    razorpayRef.current.appendChild(form);

    return () => {
      if (razorpayRef.current) {
        razorpayRef.current.innerHTML = "";
      }
    };
  }, [showPayment]);

  const validate = useCallback((): boolean => {
    const e: Record<string, string> = {};
    if (!formData.name.trim()) e.name = "Full name is required";
    if (!formData.email.trim()) {
      e.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      e.email = "Enter a valid email address";
    }
    if (!formData.phone.trim()) {
      e.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/\s/g, ""))) {
      e.phone = "Enter a valid 10-digit mobile number";
    }
    if (!formData.college.trim()) e.college = "College / University is required";
    if (!formData.state) e.state = "Please select your state";
    if (!formData.program) e.program = "Please select a program";
    setErrors(e);
    return Object.keys(e).length === 0;
  }, [formData]);

  const handleSubmit = async () => {
    if (!validate()) return;
    setSubmitting(true);

    try {
      fetch("/api/activation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }).catch(() => {});
    } catch {}

    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    setShowPayment(true);
  };

  const updateField = (field: string) => (val: string) => {
    setFormData((prev) => ({ ...prev, [field]: val }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#f4f7fb] flex items-center justify-center p-4 sm:p-6 lg:p-12 relative overflow-y-auto overflow-x-hidden font-sans">
      {/* Authentic Single-Color Textured Background */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-[#f4f7fb]">
        {/* Tricolor Top Bar (Full Width) */}
        <div className="absolute top-0 left-0 w-full h-1.5 flex z-20 shadow-sm">
          <div className="flex-1 bg-[#FF9933]"></div>
          <div className="flex-1 bg-white"></div>
          <div className="flex-1 bg-[#138808]"></div>
        </div>
        
        {/* Global Secure Document Dot Pattern Texture */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'100\\' height=\\'100\\' viewBox=\\'0 0 100 100\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\\' fill=\\'%230a4892\\' fill-rule=\\'evenodd\\'/%3E%3C/svg%3E')" }}></div>

        {/* Topographic Contour Lines Texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'800\\' height=\\'800\\' viewBox=\\'0 0 800 800\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M0 200c100-40 200-40 300 0s200 40 300 0 200-40 200-40v600H0V200z\\' fill=\\'none\\' stroke=\\'%230a4892\\' stroke-width=\\'2\\'/%3E%3Cpath d=\\'M0 300c120-60 240-60 360 0s240 60 360 0 200-60 200-60v500H0V300z\\' fill=\\'none\\' stroke=\\'%230a4892\\' stroke-width=\\'2\\'/%3E%3Cpath d=\\'M0 400c140-80 280-80 420 0s280 80 380 0v400H0V400z\\' fill=\\'none\\' stroke=\\'%230a4892\\' stroke-width=\\'2\\'/%3E%3C/svg%3E')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>

        {/* Ashoka Chakra Watermark Graphic */}
        <div className="absolute bottom-[-15vh] right-[-10vw] opacity-[0.03] pointer-events-none scale-150 rotate-[15deg]">
            <svg width="600" height="600" viewBox="0 0 100 100" className="text-[#0a4892] fill-current">
                <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="2.5" />
                <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="50" cy="50" r="5" fill="currentColor" />
                {Array.from({length: 24}).map((_, i) => (
                    <path key={i} d="M50 50 L48.5 15 L50 12 L51.5 15 Z" transform={`rotate(${i * 15} 50 50)`} />
                ))}
            </svg>
        </div>
      </div>

      <div className="w-full max-w-6xl bg-white rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col lg:flex-row z-10 relative my-auto">
        
        {/* LEFT PANEL */}
        <div className="w-full lg:w-[45%] bg-[#0a4892] text-white p-8 lg:p-12 flex flex-col relative overflow-hidden">
          {/* Subtle pattern / glow inside left panel */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-400/20 rounded-full blur-[80px] pointer-events-none translate-x-1/2 translate-y-1/2" />
          
          <div className="relative z-10 h-full flex flex-col min-h-[600px]">
            <div className="flex items-center justify-between mb-12">
              <div className="text-3xl font-extrabold text-white tracking-widest mb-16">CSDAC</div>
            </div>

            <h1 className="text-3xl lg:text-4xl font-bold mb-3 tracking-tight text-white">Complete Your Activation</h1>
            <p className="text-blue-200 text-sm mb-10 leading-relaxed max-w-md">
              Secure your dedicated enterprise-grade cloud workspace and begin your internship journey today.
            </p>

            {/* Order Details */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 mb-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-100 mb-5 flex items-center gap-2">
                <Check className="w-4 h-4 text-blue-300" /> Order Details
              </h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Cloud className="w-5 h-5 text-blue-200" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[15px]">Enterprise Cloud Infrastructure</h4>
                    <p className="text-xs text-blue-200 mt-1">Isolated servers with 99.9% uptime guarantee.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Server className="w-5 h-5 text-indigo-200" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[15px]">24/7 Technical Support</h4>
                    <p className="text-xs text-blue-200 mt-1">Dedicated mentor platform access.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5 text-emerald-200" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[15px]">Verified Industry Certificate</h4>
                    <p className="text-xs text-blue-200 mt-1">Upon successful completion of the program.</p>
                  </div>
                </div>
              </div>

              <div className="pt-5 border-t border-white/20 flex justify-between items-center">
                <span className="text-blue-100 font-medium text-sm">Total: One-time Setup</span>
                <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-cyan-300">Secure Checkout</span>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-auto pt-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Shield className="w-8 h-8 text-emerald-400" />
                  <div>
                    <p className="text-[11px] font-bold text-white uppercase tracking-wider">Bank-Level</p>
                    <p className="text-[10px] text-blue-200">Security & Encryption</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Lock className="w-8 h-8 text-blue-300" />
                  <div>
                    <p className="text-[11px] font-bold text-white uppercase tracking-wider">256-bit SSL</p>
                    <p className="text-[10px] text-blue-200">Secure Connection</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-8 h-8 text-indigo-300" />
                  <div>
                    <p className="text-[11px] font-bold text-white uppercase tracking-wider">ISO 27001</p>
                    <p className="text-[10px] text-blue-200">Certified Platform</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <CreditCard className="w-8 h-8 text-cyan-300" />
                  <div>
                    <p className="text-[11px] font-bold text-white uppercase tracking-wider">PCI DSS</p>
                    <p className="text-[10px] text-blue-200">Compliant Gateway</p>
                  </div>
                </div>
              </div>
              <p className="text-[10px] text-blue-300 mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                <span>Session ID: {sessionId}</span>
                <a href="mailto:support@csdac.in" className="hover:text-white transition-colors">support@csdac.in</a>
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="w-full lg:w-[55%] p-8 lg:p-14 bg-white flex flex-col justify-start relative">
          
          {/* Header Timeline with Integrated Logo */}
          <div className="flex flex-col items-center justify-center mb-10 pb-8 border-b border-slate-100">
             <img src="/img/csdac-navbar.png" alt="CSDAC Logo" className="h-12 w-auto object-contain mb-8" />
             
             <div className="flex items-center gap-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${!showPayment ? 'bg-[#0a4892] text-white ring-4 ring-blue-50 shadow-md' : 'bg-emerald-100 text-emerald-600'}`}>
                   {!showPayment ? '1' : <Check className="w-4 h-4" />}
                </div>
                <span className={`text-sm font-semibold tracking-wide transition-colors ${!showPayment ? 'text-slate-800' : 'text-slate-500'}`}>Your Details</span>
                <div className="w-16 h-[2px] bg-slate-100 rounded-full mx-2 overflow-hidden">
                   <div className={`h-full bg-[#0a4892] transition-all duration-500 ease-in-out ${showPayment ? 'w-full' : 'w-0'}`}></div>
                </div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${showPayment ? 'bg-[#0a4892] text-white ring-4 ring-blue-50 shadow-md' : 'bg-slate-100 text-slate-400'}`}>
                   2
                </div>
                <span className={`text-sm font-semibold tracking-wide transition-colors ${showPayment ? 'text-slate-800' : 'text-slate-400'}`}>Payment</span>
             </div>
          </div>

          {!showPayment ? (
            <div className="animate-[fadeIn_0.4s_ease-out]">
              <div className="mb-8 text-center sm:text-left">
                <h2 className="text-2xl font-bold text-slate-800 flex justify-center sm:justify-start items-center gap-2">
                  Activation Details <Lock className="w-5 h-5 text-emerald-500" />
                </h2>
                <p className="text-slate-500 text-sm mt-1">Please provide accurate information for your certificate.</p>
              </div>

              <div className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <InputField label="Full Name" name="name" icon={<User className="w-4 h-4" />} value={formData.name} error={errors.name} onChange={updateField("name")} placeholder="John Doe" />
                  <InputField label="Email Address" name="email" type="email" icon={<Mail className="w-4 h-4" />} value={formData.email} error={errors.email} onChange={updateField("email")} placeholder="john@example.com" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <InputField label="Phone Number" name="phone" type="tel" icon={<Phone className="w-4 h-4" />} value={formData.phone} error={errors.phone} onChange={updateField("phone")} placeholder="9876543210" />
                  <InputField label="College/University" name="college" icon={<Building2 className="w-4 h-4" />} value={formData.college} error={errors.college} onChange={updateField("college")} placeholder="Institute Name" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <SelectBox label="State" name="state" icon={<MapPin className="w-4 h-4" />} value={formData.state} error={errors.state} onChange={updateField("state")} options={INDIAN_STATES} placeholder="Select State" />
                  <SelectBox label="Program" name="program" icon={<GraduationCap className="w-4 h-4" />} value={formData.program} error={errors.program} onChange={updateField("program")} options={PROGRAMS} placeholder="Select Program" />
                </div>
              </div>

              <button
                onClick={handleSubmit}
                disabled={submitting}
                className={`mt-10 w-full py-4 rounded-xl font-bold text-white text-[15px] tracking-wide transition-all duration-300 flex items-center justify-center gap-3 ${submitting ? 'bg-slate-300 cursor-not-allowed' : 'bg-[#0a4892] hover:bg-[#083b7a] shadow-[0_8px_20px_rgba(10,72,146,0.25)] hover:shadow-[0_12px_25px_rgba(10,72,146,0.35)] hover:-translate-y-0.5'}`}
              >
                {submitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Processing Securely...
                  </>
                ) : (
                  <>
                    Proceed to Secure Payment <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          ) : (
            <div className="animate-[fadeIn_0.5s_ease-out] flex flex-col h-full bg-[#f9fafb] p-6 rounded-2xl border border-slate-200">
              {/* Govt Official Header */}
              <div className="text-center mb-6 pb-6 border-b border-slate-200">

                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="h-6 w-px bg-slate-300"></div>
                  <div className="text-left leading-tight">
                    <h2 className="text-[14px] font-bold text-[#000080] uppercase tracking-wide">National Payment Portal</h2>
                    <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Authorized Transaction Gateway</p>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold border border-emerald-100">
                  <ShieldCheck className="w-3.5 h-3.5" /> Identity Verified
                </div>
              </div>

              {/* Premium Invoice & Payment Card */}
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-[0_8px_30px_-4px_rgba(0,0,128,0.08)] relative overflow-hidden flex flex-col mt-2 flex-grow">
                {/* Elegant Tricolor Top Border */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#FF9933] via-white to-[#138808]"></div>
                
                <div className="p-7 sm:p-9 flex flex-col h-full">
                  {/* Header */}
                  <div className="flex justify-between items-center mb-8">
                    <div>
                      <h3 className="font-extrabold text-slate-900 text-lg flex items-center gap-2">
                        Checkout Summary <Lock className="w-4 h-4 text-emerald-500" />
                      </h3>
                      <p className="text-xs text-slate-500 mt-1 font-medium">Review your details and complete activation.</p>
                    </div>
                    <button onClick={() => setShowPayment(false)} className="text-[12px] text-[#0a4892] font-semibold hover:bg-blue-50 px-3 py-1.5 rounded-lg transition-colors border border-transparent hover:border-blue-100">
                      Edit Details
                    </button>
                  </div>
                  
                  {/* Stylish Summary Grid */}
                  <div className="bg-slate-50/70 rounded-xl p-5 border border-slate-100 space-y-4 mb-8 shadow-inner">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Candidate Name</p>
                        <p className="text-[14px] text-slate-800 font-semibold">{formData.name}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Registered Email</p>
                        <p className="text-[14px] text-slate-800 font-semibold truncate">{formData.email}</p>
                      </div>
                    </div>
                    <div className="w-full h-px bg-slate-200/60"></div>
                    <div>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Selected Program</p>
                      <p className="text-[14px] text-[#0a4892] font-bold">{formData.program}</p>
                    </div>
                  </div>

                  {/* Payment Action Section */}
                  <div className="mt-auto pt-4 border-t border-slate-100">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-slate-800 font-bold text-[15px]">Total Payable</span>
                      <div className="text-right">
                        <span className="font-extrabold text-slate-900 text-[18px]">₹349.00</span>
                        <p className="text-[10px] text-slate-400 mt-0.5 font-medium">Includes all taxes and platform fees</p>
                      </div>
                    </div>
                    
                    {/* The Razorpay Button Container */}
                    <div className="mb-6 relative min-h-[55px] flex items-center justify-center">
                        {!isRazorpayLoaded && (
                            <div className="absolute inset-0 animate-pulse flex items-center justify-center z-20">
                                <div className="flex items-center gap-2">
                                    <div className="w-3.5 h-3.5 border-2 border-slate-300 border-t-[#0a4892] rounded-full animate-spin"></div>
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Loading Gateway</span>
                                </div>
                            </div>
                        )}
                        <div ref={razorpayRef} className={`razorpay-btn-container relative z-10 flex justify-center w-full transition-opacity duration-500 ${isRazorpayLoaded ? 'opacity-100' : 'opacity-0'}`} />
                    </div>
                    
                    {/* Trust Badges Footer */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400">
                       <div className="flex items-center gap-1.5 text-[10px] font-medium">
                          <img src="https://razorpay.com/assets/razorpay-logo.svg" alt="Razorpay" className="h-4 opacity-50 grayscale hover:grayscale-0 transition-all" />
                       </div>
                       <div className="flex items-center gap-4 text-[11px] font-semibold text-slate-500">
                         <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-emerald-500" /> PCI DSS</span>
                         <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-emerald-500" /> RBI Authorized</span>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .razorpay-btn-container .razorpay-payment-button {
          width: 100% !important;
          display: flex !important;
          justify-content: center !important;
        }
        .razorpay-btn-container .razorpay-payment-button button {
          padding: 16px 48px !important;
          font-size: 16px !important;
          font-weight: 600 !important;
          border-radius: 12px !important;
          min-height: 56px !important;
          width: 100% !important;
          background: #0a4892 !important;
          box-shadow: 0 4px 14px 0 rgba(10, 72, 146, 0.39) !important;
          transition: all 0.2s ease !important;
        }
        .razorpay-btn-container .razorpay-payment-button button:hover {
          background: #083b7a !important;
          box-shadow: 0 6px 20px rgba(10, 72, 146, 0.23) !important;
          transform: translateY(-1px) !important;
        }
      `}</style>
    </div>
  );
}

// Reusable Input Field
function InputField({ label, name, type = "text", value, error, onChange, placeholder, icon }: any) {
  const [focused, setFocused] = useState(false);
  return (
    <div className="flex flex-col">
      <label className="text-[13px] font-semibold text-slate-700 mb-1.5 ml-1">{label} <span className="text-red-400">*</span></label>
      <div className="relative">
        <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${focused ? 'text-[#0a4892]' : 'text-slate-400'}`}>
          {icon}
        </div>
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          className={`w-full bg-slate-50 border ${error ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : 'border-slate-200 focus:border-[#0a4892] focus:ring-[#0a4892]/20'} text-slate-800 text-[14px] rounded-xl pl-11 pr-4 py-3.5 outline-none transition-all focus:ring-4 focus:bg-white`}
        />
      </div>
      {error && (
         <div className="flex items-center gap-1 mt-1.5 ml-1">
           <AlertCircle className="w-3 h-3 text-red-500" />
           <span className="text-[11px] font-medium text-red-500">{error}</span>
         </div>
      )}
    </div>
  );
}

// Reusable Select Box
function SelectBox({ label, name, value, error, onChange, options, placeholder, icon }: any) {
  const [focused, setFocused] = useState(false);
  return (
    <div className="flex flex-col">
      <label className="text-[13px] font-semibold text-slate-700 mb-1.5 ml-1">{label} <span className="text-red-400">*</span></label>
      <div className="relative">
        <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors pointer-events-none ${focused ? 'text-[#0a4892]' : 'text-slate-400'}`}>
          {icon}
        </div>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`w-full bg-slate-50 border ${error ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : 'border-slate-200 focus:border-[#0a4892] focus:ring-[#0a4892]/20'} text-slate-800 text-[14px] rounded-xl pl-11 pr-10 py-3.5 outline-none transition-all focus:ring-4 focus:bg-white appearance-none cursor-pointer ${!value ? 'text-slate-400' : ''}`}
        >
          <option value="" disabled>{placeholder}</option>
          {options.map((opt: string) => <option key={opt} value={opt} className="text-slate-800">{opt}</option>)}
        </select>
        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
      </div>
      {error && (
         <div className="flex items-center gap-1 mt-1.5 ml-1">
           <AlertCircle className="w-3 h-3 text-red-500" />
           <span className="text-[11px] font-medium text-red-500">{error}</span>
         </div>
      )}
    </div>
  );
}
