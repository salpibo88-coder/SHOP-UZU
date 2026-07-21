"use client";

import { useState } from "react";
import { FiUser, FiMail, FiMessageSquare, FiSend, FiCheckCircle, FiPhone, FiMapPin, FiClock } from "react-icons/fi";
import { MdDirectionsCar } from "react-icons/md";
import { HiSparkles } from "react-icons/hi";
import { BsShieldCheck } from "react-icons/bs";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", msg: "" });

  const handleSend = () => {
    if (!formData.name || !formData.email || !formData.msg) return;
    setSent(true);
  };

  return (
    <section className="relative min-h-screen bg-white text-slate-900 flex flex-col justify-between px-4 sm:px-6 lg:px-8 py-20 lg:py-28 overflow-hidden selection:bg-amber-400 selection:text-slate-950">
      
      {/* Background Soft Accents */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-amber-400/5 via-blue-500/5 to-transparent rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto my-auto">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold tracking-[0.25em] uppercase mb-4 shadow-sm">
            <HiSparkles className="text-amber-500" /> Contact Concierge
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-4">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700">Connect</span>
          </h1>
          
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            Have questions about our vehicle allocation or custom upgrades? Our specialized team is here to assist your elite automotive journey.
          </p>
        </div>

        {/* Extended Split Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Info Panel (New Expansion) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-50 to-slate-100/60 border border-slate-200/80 rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-sm">
            <div>
              <div className="h-12 w-12 rounded-2xl bg-amber-500 flex items-center justify-center text-white mb-6 shadow-lg shadow-amber-500/20">
                <MdDirectionsCar className="text-2xl font-black" />
              </div>
              <span className="text-[10px] font-extrabold text-amber-600 tracking-[0.25em] uppercase">CARSHOP ELITE HQ</span>
              <h2 className="text-2xl font-black text-slate-900 mt-1 mb-4">Direct Concierge Access</h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-8">
                Reach out to our global headquarters or drop by our showroom for a private, appointment-only viewing.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-amber-600 shrink-0 shadow-sm">
                    <FiMapPin size={18} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Global Showroom</div>
                    <div className="text-sm font-semibold text-slate-900 mt-0.5">77 Elite Boulevard, Suite 400</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-amber-600 shrink-0 shadow-sm">
                    <FiPhone size={18} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Direct Line</div>
                    <div className="text-sm font-semibold text-slate-900 mt-0.5">+1 (800) 555-UZU77</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-amber-600 shrink-0 shadow-sm">
                    <FiClock size={18} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Hours</div>
                    <div className="text-sm font-semibold text-slate-900 mt-0.5">Mon - Sat: 9:00 AM - 8:00 PM</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-slate-200 flex items-center gap-2 text-xs font-bold text-emerald-600">
              <BsShieldCheck className="text-base" /> Dedicated VIP Response Team Available
            </div>
          </div>

          {/* Right Form Card Panel */}
          <div className="lg:col-span-7">
            {sent ? (
              <div className="bg-gradient-to-b from-slate-50 to-slate-100/60 border border-slate-200/80 rounded-3xl p-12 text-center shadow-xl animate-fadeIn h-full flex flex-col items-center justify-center py-24">
                <div className="w-20 h-20 bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-6 shadow-inner">
                  <FiCheckCircle />
                </div>
                <h3 className="text-slate-900 text-2xl sm:text-3xl font-black mb-3">Message Dispatched</h3>
                <p className="text-slate-600 text-sm sm:text-base max-w-sm mx-auto">
                  Our private concierge team will get back to your inquiry within 24 hours.
                </p>
              </div>
            ) : (
              <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.06)] flex flex-col gap-6 backdrop-blur-2xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input 
                    icon={<FiUser />} 
                    placeholder="Full Name" 
                    value={formData.name} 
                    onChange={(v) => setFormData({...formData, name: v})} 
                  />
                  <Input 
                    icon={<FiMail />} 
                    placeholder="Email Address" 
                    value={formData.email} 
                    onChange={(v) => setFormData({...formData, email: v})} 
                  />
                </div>

                <Input 
                  icon={<FiPhone />} 
                  placeholder="Phone Number (Optional)" 
                  value={formData.phone} 
                  onChange={(v) => setFormData({...formData, phone: v})} 
                />
                
                <div className="relative">
                  <span className="absolute left-4 top-4 text-slate-400 text-lg">
                    <FiMessageSquare />
                  </span>
                  <textarea 
                    placeholder="How can our automotive specialists assist you?" 
                    rows={4}
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm font-medium focus:outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all resize-none shadow-inner"
                    value={formData.msg}
                    onChange={(e) => setFormData({...formData, msg: e.target.value})}
                  />
                </div>

                <button 
                  onClick={handleSend}
                  disabled={!formData.name || !formData.email || !formData.msg}
                  className={`w-full py-4 rounded-2xl font-black text-xs sm:text-sm tracking-[0.2em] uppercase transition-all shadow-xl ${
                    !formData.name || !formData.email || !formData.msg 
                      ? "bg-slate-100 border border-slate-200 text-slate-400 cursor-not-allowed" 
                      : "bg-slate-900 hover:bg-slate-800 text-white shadow-slate-900/25 hover:scale-[1.01] active:scale-95"
                  }`}
                >
                  <span className="flex items-center justify-center gap-2">
                    Send Message <FiSend size={16} />
                  </span>
                </button>

                <div className="flex items-center justify-center gap-2 pt-2 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                  <BsShieldCheck className="text-amber-500 text-base" /> Confidential Inquiry Channel
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}

interface InputProps {
  icon: React.ReactNode;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

function Input({ icon, placeholder, value, onChange }: InputProps) {
  return (
    <div className="relative">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg">
        {icon}
      </span>
      <input 
        type="text" 
        placeholder={placeholder}
        className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm font-medium focus:outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all shadow-inner"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}