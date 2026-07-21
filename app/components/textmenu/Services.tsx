"use client";

import { MdDirectionsCar } from "react-icons/md";
import { BsShieldCheck, BsWrench, BsCreditCard, BsArrowRight } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { HiSparkles } from "react-icons/hi";

const services = [
  { 
    icon: <MdDirectionsCar />, 
    title: "Vehicle Sales", 
    desc: "Browse and purchase from our exclusive curation of hand-selected luxury and high-performance sport vehicles.",
    badge: "Inventory"
  },
  { 
    icon: <TbTruckDelivery />, 
    title: "White-Glove Home Delivery", 
    desc: "We securely transport and deliver your acquired vehicle directly to your private estate within 3 to 5 business days.",
    badge: "Logistics"
  },
  { 
    icon: <BsShieldCheck />, 
    title: "Warranty & Protection", 
    desc: "All acquisitions include an elite 1-year comprehensive warranty paired with customizable luxury insurance coverage options.",
    badge: "Security"
  },
  { 
    icon: <BsCreditCard />, 
    title: "Flexible Institutional Payment", 
    desc: "Seamlessly settle transactions via credit cards, multi-sig crypto escrows, bank wires, or bespoke installment plans.",
    badge: "Finance"
  },
  { 
    icon: <BsWrench />, 
    title: "Certified Maintenance Service", 
    desc: "Book white-glove diagnostics, routine care, and specialized restoration services at our state-of-the-art certified centers.",
    badge: "Care"
  },
  { 
    icon: <HiSparkles />, 
    title: "Elite VIP Membership", 
    desc: "Join our closed club for private allocation previews, priority global support, and invitations to elite automotive gatherings.",
    badge: "Privilege"
  },
];

export default function Services() {
  return (
    <section className="relative min-h-screen bg-white text-slate-900 py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden selection:bg-amber-400 selection:text-slate-950">
      
      {/* Background Soft Ambience Accents */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-amber-400/5 via-blue-400/5 to-transparent rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-24">
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold tracking-[0.25em] uppercase mb-4 shadow-sm">
            <HiSparkles className="text-amber-500" /> Premium Offerings
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-6">
            Elevating Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700">Driving Experience</span>
          </h1>
          
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Uncompromising institutional standards tailored for your luxury automotive journey, from initial secure acquisition to lifelong maintenance.
          </p>
        </div>

        {/* Services High-Level Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div 
              key={i} 
              className="group relative bg-white p-8 lg:p-10 rounded-3xl border border-slate-200/80 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle top highlight line on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="h-16 w-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-2xl text-slate-700 group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-500 transition-all duration-300 shadow-sm">
                    {s.icon}
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-slate-100 text-slate-500 group-hover:bg-amber-50 group-hover:text-amber-700 transition-colors">
                    {s.badge}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 mb-3 tracking-tight group-hover:text-amber-600 transition-colors">
                  {s.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed text-sm mb-6">
                  {s.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-400 group-hover:text-slate-900 transition-colors">
                <span className="uppercase tracking-widest text-[11px]">Explore Service</span>
                <BsArrowRight className="text-base group-hover:translate-x-1.5 transition-transform text-amber-500" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}