"use client";

import { useState } from "react";
import { FiUser, FiMail, FiMessageSquare, FiSend } from "react-icons/fi";
import { MdDirectionsCar } from "react-icons/md";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", msg: "" });

  const handleSend = () => {
    if (!formData.name || !formData.email || !formData.msg) return;
    setSent(true);
  };

  return (
    <section className="relative min-h-screen bg-slate-900 flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-[10%] -right-[10%] w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[128px]" />
      </div>

      <div className="relative z-10 w-full max-w-xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-yellow-400 text-xs font-bold tracking-[0.2em] uppercase mb-6 backdrop-blur-md">
            <MdDirectionsCar /> Contact Us
          </div>
          <h1 className="text-5xl font-extrabold text-white mb-4">Let's Connect</h1>
          <p className="text-slate-400 font-medium">Have questions? We're here to help you drive your future.</p>
        </div>

        {sent ? (
          <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-10 text-center">
            <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">✓</div>
            <h3 className="text-white text-2xl font-bold mb-2">Message Received</h3>
            <p className="text-slate-400">Our team will get back to you within 24 hours.</p>
          </div>
        ) : (
          <div className="bg-white/70 backdrop-blur-xl border border-white/50 rounded-3xl p-8 shadow-2xl flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input icon={<FiUser />} placeholder="Name" value={formData.name} onChange={(v) => setFormData({...formData, name: v})} />
              <Input icon={<FiMail />} placeholder="Email" value={formData.email} onChange={(v) => setFormData({...formData, email: v})} />
            </div>
            
            <div className="relative">
              <FiMessageSquare className="absolute left-4 top-4 text-slate-400" />
              <textarea 
                placeholder="How can we assist you?" 
                rows={4}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all resize-none outline-none"
                value={formData.msg}
                onChange={(e) => setFormData({...formData, msg: e.target.value})}
              />
            </div>

            <button 
              onClick={handleSend}
              disabled={!formData.name || !formData.email || !formData.msg}
              className="w-full py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-2xl flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.01]"
            >
              Send Message <FiSend size={16} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

// Helper component for cleaner code
function Input({ icon, placeholder, value, onChange }: any) {
  return (
    <div className="relative">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">{icon}</span>
      <input 
        type="text" 
        placeholder={placeholder}
        className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all outline-none"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}