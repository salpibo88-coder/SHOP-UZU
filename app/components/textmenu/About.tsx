"use client";

import { useState } from "react";
import { MdDirectionsCar, MdVerified } from "react-icons/md";
import { BsPersonFill, BsShieldCheck } from "react-icons/bs";
import { HiSparkles } from "react-icons/hi";
import { FaAward, FaGlobeAmericas, FaQuoteRight } from "react-icons/fa";

const team = [
  { 
    name: "Alex Chen", 
    role: "Chief Executive Officer", 
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600",
    bio: "Former automotive design lead with 15+ years scaling global luxury markets."
  },
  { 
    name: "Sara Kim", 
    role: "Head of Operations", 
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=600",
    bio: "Specializes in secure institutional logistics, white-glove transport, and supplychain."
  },
  { 
    name: "Mike Ross", 
    role: "Lead Automotive Engineer", 
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
    bio: "Master technician dedicated to high-performance diagnostics and rigorous inspection standards."
  },
];

const milestones = [
  { year: "2018", title: "Inception", desc: "Founded with a mission to revolutionize exotic and luxury vehicle acquisition." },
  { year: "2021", title: "Global Scaling", desc: "Expanded secure international shipping networks to over 30 countries." },
  { year: "2024", title: "Elite Vault", desc: "Launched private institutional escrow systems for high-net-worth collectors." },
  { year: "2026", title: "Industry Leader", desc: "Over 5,000 satisfied elite drivers and zero-defect delivery tracking worldwide." },
];

const testimonials = [
  { 
    quote: "CarShop Elite handled my allocation with unmatched precision. The white-glove home delivery was seamless.", 
    author: "Jonathan Sterling", 
    title: "Collector, Geneva" 
  },
  { 
    quote: "Absolute transparency from inspection to the escrow clearance. Truly the gold standard of luxury automotive acquisition.", 
    author: "Evelyn Vance", 
    title: "Venture Partner, London" 
  },
];

export default function About() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section className="relative min-h-screen bg-white text-slate-900 py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden selection:bg-amber-400 selection:text-slate-950">
      
      {/* Background Soft Ambient Highlights */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-amber-400/5 via-blue-500/5 to-transparent rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold tracking-[0.25em] uppercase mb-4 shadow-sm">
            <HiSparkles className="text-amber-500" /> About CarShop Elite
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-6">
            Driven by Passion, <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700">Defined by Trust</span>
          </h1>
          
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            CarShop was founded with a singular institutional vision: to seamlessly bridge the gap between automobile enthusiasts and their ultimate dream allocations through absolute transparency, peerless quality, and deep mechanical expertise.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {[
            { val: "2018", label: "Foundation Year", icon: <FaAward className="text-amber-500" /> },
            { val: "200+", label: "Curated Allocations", icon: <MdDirectionsCar className="text-amber-500" /> },
            { val: "5,000+", label: "Verified Collectors", icon: <FaGlobeAmericas className="text-amber-500" /> },
            { val: "100%", label: "Secure Escrow", icon: <BsShieldCheck className="text-amber-500" /> },
          ].map((item, idx) => (
            <div key={idx} className="group bg-gradient-to-br from-slate-50 to-slate-100/60 border border-slate-200/80 rounded-3xl p-8 text-center hover:border-amber-400/50 transition-all duration-300 shadow-sm hover:shadow-xl">
              <div className="h-12 w-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-xl mx-auto mb-4 shadow-sm group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <p className="text-3xl sm:text-4xl font-black text-slate-900 mb-1">{item.val}</p>
              <p className="text-slate-500 font-bold text-xs uppercase tracking-wider">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Mission / Vision Expansion Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-28 bg-gradient-to-r from-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[10px] font-extrabold text-amber-400 tracking-[0.25em] uppercase">OUR CORE PHILOSOPHY</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">Engineering Excellence in Every Transaction</h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We believe purchasing a high-performance or luxury vehicle shouldn't be a gamble. Every model in our digital vault passes a grueling multi-point inspection, backed by secure title verification and white-glove transport guarantees.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest">
                <MdVerified className="text-base" /> Certified Multi-Point Check
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
              <h3 className="text-amber-400 font-extrabold text-lg mb-2">Absolute Transparency</h3>
              <p className="text-slate-400 text-xs leading-relaxed">Complete history logs, honest condition appraisals, and upfront pricing without hidden brokerage overhead.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
              <h3 className="text-amber-400 font-extrabold text-lg mb-2">Global White-Glove</h3>
              <p className="text-slate-400 text-xs leading-relaxed">Secure enclosed transport services delivering pristine vehicles straight to private residential gates.</p>
            </div>
          </div>
        </div>

        {/* Milestones Timeline Section */}
        <div className="mb-28">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-[10px] font-extrabold text-amber-600 tracking-[0.25em] uppercase">GROWTH TIMELINE</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-1">Our Journey of Excellence</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, idx) => (
              <div key={idx} className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <span className="text-2xl font-black text-amber-600 mb-3 block">{m.year}</span>
                  <h3 className="text-slate-900 font-bold text-lg mb-2">{m.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{m.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-extrabold text-slate-400 uppercase tracking-widest">
                  <span>Milestone 0{idx + 1}</span>
                  <div className="h-2 w-2 rounded-full bg-amber-500" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Showcase Section (New Perfection Layer) */}
        <div className="mb-28 bg-gradient-to-br from-slate-50 to-amber-50/30 border border-slate-200/80 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 text-amber-500/10 pointer-events-none">
            <FaQuoteRight size={140} />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <span className="text-[10px] font-extrabold text-amber-600 tracking-[0.25em] uppercase mb-2 block">CLIENT TESTIMONIALS</span>
            <h2 className="text-3xl font-black text-slate-900 mb-8">Trusted by Global Collectors</h2>

            <div className="min-h-[120px] flex flex-col items-center justify-center">
              <p className="text-slate-700 text-lg sm:text-xl font-medium italic mb-6">
                "{testimonials[activeTestimonial].quote}"
              </p>
              <h3 className="text-slate-900 font-extrabold text-sm">{testimonials[activeTestimonial].author}</h3>
              <p className="text-amber-600 text-xs uppercase tracking-widest font-bold mt-0.5">{testimonials[activeTestimonial].title}</p>
            </div>

            <div className="flex items-center justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activeTestimonial === i ? "w-8 bg-amber-500" : "w-2.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Slide to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Leadership Team Section */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-[10px] font-extrabold text-amber-600 tracking-[0.25em] uppercase">EXECUTIVE EXPERTISE</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-1">Meet the Leadership</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((m, idx) => (
              <div 
                key={idx} 
                className="group bg-gradient-to-b from-slate-50 to-slate-100/50 border border-slate-200/80 rounded-3xl p-8 flex flex-col items-center text-center hover:shadow-xl hover:border-amber-400/50 transition-all duration-300"
              >
                <div className="relative mb-6">
                  <img 
                    src={m.img} 
                    alt={m.name} 
                    className="h-28 w-28 rounded-2xl object-cover border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300" 
                  />
                  <div className="absolute -bottom-2 -right-2 bg-amber-500 p-2.5 rounded-xl text-white shadow-md">
                    <BsPersonFill size={14} />
                  </div>
                </div>

                <h3 className="text-slate-900 font-black text-xl mb-1">{m.name}</h3>
                <p className="text-amber-600 text-xs mt-0.5 uppercase tracking-widest font-extrabold mb-4">{m.role}</p>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-xs">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}