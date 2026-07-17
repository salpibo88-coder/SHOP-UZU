"use client";

import { MdDirectionsCar } from "react-icons/md";
import { BsPersonFill } from "react-icons/bs";

const team = [
  { name: "Alex Chen", role: "Chief Executive", img: "https://i.pinimg.com/236x/08/a7/2b/08a72b4fa5e0f150ab782d3c485b612c.jpg" },
  { name: "Sara Kim", role: "Head of Operations", img: "https://wallpapers.com/images/hd/super-funny-pictures-1328-x-900-vu8ghq1p5hii18f7.jpg" },
  { name: "Mike Ross", role: "Lead Engineer", img: "https://i.pinimg.com/222x/ca/fe/b6/cafeb60334151711924f73164e793abd.jpg" },
];

export default function About() {
  return (
    <section className="relative min-h-screen bg-slate-900 py-24 px-6 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-[10%] right-[20%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[128px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-yellow-400 text-xs font-bold tracking-[0.2em] uppercase mb-6 backdrop-blur-md">
            <MdDirectionsCar /> About Us
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">Driven by Passion</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            CarShop was founded with a singular vision: to bridge the gap between enthusiasts and their dream vehicles through transparency, quality, and expertise.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-24">
          {[["2018", "Founded"], ["200+", "Premium Vehicles"], ["5,000+", "Happy Drivers"]].map(([v, l]) => (
            <div key={l} className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-8 text-center hover:bg-white/10 transition-all duration-300">
              <p className="text-4xl font-black text-yellow-400 mb-2">{v}</p>
              <p className="text-slate-300 font-medium text-sm uppercase tracking-wider">{l}</p>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <h2 className="text-3xl font-bold text-white text-center mb-12">Meet the Leadership</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {team.map((m) => (
            <div key={m.name} className="group bg-white/5 border border-white/5 rounded-3xl p-8 flex flex-col items-center text-center hover:bg-white/[0.08] transition-all duration-300">
              <div className="relative mb-6">
                <img src={m.img} alt={m.name} className="h-24 w-24 rounded-full object-cover border-4 border-slate-800 shadow-xl" />
                <div className="absolute -bottom-2 -right-2 bg-yellow-400 p-2 rounded-full text-slate-900">
                  <BsPersonFill size={16} />
                </div>
              </div>
              <p className="text-white font-bold text-lg">{m.name}</p>
              <p className="text-yellow-400 text-sm mt-1 uppercase tracking-widest font-semibold">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}