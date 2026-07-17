"use client";

import { MdDirectionsCar } from "react-icons/md";
import { BsShieldCheck, BsWrench, BsCreditCard } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { HiSparkles } from "react-icons/hi";

const services = [
  { icon: <MdDirectionsCar />, title: "Vehicle Sales", desc: "Browse and purchase from our wide selection of luxury and sport vehicles." },
  { icon: <TbTruckDelivery />, title: "Home Delivery", desc: "We deliver your purchased vehicle directly to your doorstep within 3–5 days." },
  { icon: <BsShieldCheck />, title: "Warranty & Protection", desc: "All vehicles come with a 1-year warranty and full insurance coverage options." },
  { icon: <BsCreditCard />, title: "Flexible Payment", desc: "Pay with credit card, debit card, or PayPal. Installment plans available." },
  { icon: <BsWrench />, title: "Maintenance Service", desc: "Book regular maintenance and repair services at our certified centers." },
  { icon: <HiSparkles />, title: "Premium Membership", desc: "Join our VIP club for exclusive deals, early access, and priority support." },
];

export default function Services() {
  return (
    <section className="relative min-h-screen bg-slate-50 py-24 px-6 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] bg-yellow-200 rounded-full blur-[120px] opacity-50" />
        <div className="absolute bottom-[10%] -right-[10%] w-[500px] h-[500px] bg-blue-200 rounded-full blur-[120px] opacity-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block py-1 px-3 rounded-full bg-yellow-400/20 text-yellow-700 text-xs font-bold tracking-[0.2em] uppercase mb-4">
            Our Services
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6">
            Elevating Your Driving Experience
          </h1>
          <p className="text-slate-600 text-lg max-w-xl mx-auto">
            Premium solutions for your automotive journey, from acquisition to long-term care.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div 
              key={i} 
              className="group bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2"
            >
              <div className="h-14 w-14 mb-6 rounded-2xl bg-slate-50 flex items-center justify-center text-2xl text-slate-700 group-hover:bg-yellow-400 group-hover:text-white transition-colors duration-300">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{s.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}