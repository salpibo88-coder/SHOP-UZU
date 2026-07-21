"use client";

import { useState } from "react";
import { MdDirectionsCar, MdSpeed, MdLocalGasStation } from "react-icons/md";
import { HiSparkles } from "react-icons/hi";
import { BsShieldCheck, BsArrowRight, BsPlayFill, BsCheckCircleFill } from "react-icons/bs";
import { TbTruckDelivery, TbSteeringWheel, TbShieldLock, TbAward } from "react-icons/tb";

const FEATURES = [
  {
    icon: "sparkles",
    title: "Bespoke Selection",
    desc: "Hand-picked hypercars and elite sport vehicles sourced from private collectors worldwide with certified provenance.",
  },
  {
    icon: "shield",
    title: "Encrypted Escrow",
    desc: "100% secure institutional-grade checkout with multi-signature escrow protection and legal title transfer.",
  },
  {
    icon: "truck",
    title: "Global Logistics",
    desc: "Enclosed, white-glove, climate-controlled transport delivered directly to your private garage anywhere on earth.",
  },
];

const STATS = [
  { value: "250+", label: "Exotic Fleet" },
  { value: "$120M+", label: "Verified Volume" },
  { value: "100%", label: "Discrete & Secure" },
];

const SHOWCASE_CARS = [
  {
    name: "Bugatti Tourbillon",
    category: "Hypercar",
    power: "1,800 HP",
    topSpeed: "445 km/h",
    engine: "V16 Hybrid",
    price: "$4.1M",
    image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Porsche Chiron Pur Sport",
    category: "Limited Edition",
    power: "1,500 HP",
    topSpeed: "350 km/h",
    engine: "8.0L W16",
    price: "$3.6M",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Lamborghini Revuelto",
    category: "V12 Flagship",
    power: "1,001 HP",
    topSpeed: "350 km/h",
    engine: "V12 + 3 Motors",
    price: "$608K",
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80",
  },
];

const PERKS = [
  "Zero-mileage and collector-grade options available",
  "Dedicated private client concierge available 24/7",
  "Comprehensive multi-point mechanical inspection report",
];

function FeatureIcon({ type }: { type: string }) {
  if (type === "sparkles") return <HiSparkles className="text-amber-600 text-2xl" />;
  if (type === "shield") return <BsShieldCheck className="text-emerald-600 text-2xl" />;
  return <TbTruckDelivery className="text-rose-600 text-2xl" />;
}

interface TextProps {
  onBrowse?: () => void;
}

export default function Text({ onBrowse }: TextProps) {
  const [activeCar, setActiveCar] = useState(0);

  return (
    <section id="home" className="relative min-h-screen w-full bg-slate-50 text-slate-900 overflow-hidden flex flex-col justify-between py-16 sm:py-24 selection:bg-amber-400 selection:text-slate-900">
      
      {/* Immersive Responsive Background Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-1/4 w-[350px] sm:w-[600px] lg:w-[700px] h-[350px] sm:h-[600px] lg:h-[700px] bg-gradient-to-br from-indigo-100/70 via-purple-100/40 to-transparent rounded-full blur-[100px] lg:blur-[140px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 lg:right-10 w-[300px] sm:w-[500px] lg:w-[600px] h-[300px] sm:h-[500px] lg:h-[600px] bg-gradient-to-br from-amber-100/80 via-rose-100/40 to-transparent rounded-full blur-[100px] lg:blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:2rem_2rem] sm:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Main Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center z-10">
        
        {/* Luxury Badge */}
        <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white border border-slate-200/90 backdrop-blur-xl text-amber-700 text-[10px] sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.25em] uppercase mb-8 sm:mb-10 shadow-lg shadow-slate-200/40 hover:border-amber-400/60 transition-all duration-300">
          <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
          <MdDirectionsCar className="text-sm sm:text-base text-amber-600" />
          CARSHOP ELITE SHOWROOM 2026
        </div>

        {/* Master Heading with Fluid Scaling */}
        <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-slate-900 tracking-tight leading-[1.08] sm:leading-[1.05] mb-6 sm:mb-8 max-w-5xl">
          Drive Your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-500 to-amber-500 drop-shadow-[0_10px_30px_rgba(239,68,68,0.15)]">
            Dream Car
          </span>{" "}
          Today
        </h1>

        <p className="text-slate-600 text-base sm:text-lg lg:text-xl font-normal max-w-2xl leading-relaxed mb-10 sm:mb-12 px-2">
          Experience world-class automotive engineering. Curated luxury and hypercar inventory engineered for absolute distinction and unrivaled performance.
        </p>

        {/* Action CTAs - Fully Responsive Stacking on Mobile */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-14 sm:mb-16 w-full sm:w-auto px-4 sm:px-0">
          <button
            onClick={onBrowse}
            className="w-full sm:w-auto group flex items-center justify-center gap-3 px-8 sm:px-9 py-4 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 hover:from-amber-500 hover:to-amber-600 text-white font-extrabold text-xs tracking-[0.2em] uppercase transition-all duration-300 shadow-xl shadow-slate-900/15 hover:scale-105 active:scale-95"
          >
            Explore Showroom 
            <BsArrowRight className="text-base group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href="#fleet-preview"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 sm:px-8 py-4 rounded-2xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 font-bold text-xs tracking-[0.15em] uppercase backdrop-blur-xl transition-all duration-300 shadow-sm"
          >
            <BsPlayFill className="text-amber-600 text-base" /> View Active Fleet
          </a>
        </div>

        {/* Interactive Dynamic Car Showcase Card */}
        <div id="fleet-preview" className="w-full max-w-6xl bg-white border border-slate-200/90 rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 backdrop-blur-2xl shadow-2xl shadow-slate-200/50 relative overflow-hidden group">
          {/* Subtle Ambient Glow Behind Display */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-amber-400/10 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none" />

          {/* Car Image Display Area */}
          <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-slate-100 aspect-[16/10] sm:aspect-[21/9] bg-slate-900 shadow-xl mb-6 sm:mb-8">
            <img 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out" 
              src={SHOWCASE_CARS[activeCar].image} 
              alt={SHOWCASE_CARS[activeCar].name} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
            
            <div className="absolute top-3 left-3 sm:top-6 sm:left-6 bg-white/95 backdrop-blur-md border border-slate-200 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-[10px] sm:text-xs font-bold tracking-widest text-amber-700 uppercase shadow-md">
              {SHOWCASE_CARS[activeCar].category}
            </div>

            <div className="absolute top-3 right-3 sm:top-6 sm:right-6 bg-slate-900/90 backdrop-blur-md border border-white/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-black text-amber-400 tracking-wider shadow-md">
              {SHOWCASE_CARS[activeCar].price}
            </div>

            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col md:flex-row md:items-end justify-between gap-4 text-left">
              <div>
                <h3 className="text-xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">{SHOWCASE_CARS[activeCar].name}</h3>
                <p className="text-slate-300 text-xs sm:text-sm mt-0.5 sm:mt-1">Available for immediate worldwide delivery & private registration.</p>
              </div>
              <div className="flex items-center gap-3 bg-slate-950/85 backdrop-blur-md border border-white/10 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl self-start md:self-auto">
                <div className="flex items-center gap-2">
                  <MdSpeed className="text-amber-400 text-lg sm:text-xl" />
                  <div>
                    <div className="text-[9px] sm:text-[10px] text-slate-400 uppercase tracking-wider">Power</div>
                    <div className="text-xs sm:text-sm font-bold text-white">{SHOWCASE_CARS[activeCar].power}</div>
                  </div>
                </div>
                <div className="w-px h-7 bg-white/10 mx-1" />
                <div className="flex items-center gap-2">
                  <MdLocalGasStation className="text-rose-400 text-lg sm:text-xl" />
                  <div>
                    <div className="text-[9px] sm:text-[10px] text-slate-400 uppercase tracking-wider">Engine</div>
                    <div className="text-xs sm:text-sm font-bold text-white">{SHOWCASE_CARS[activeCar].engine}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Car Selector Tabs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {SHOWCASE_CARS.map((car, index) => (
              <button
                key={car.name}
                onClick={() => setActiveCar(index)}
                className={`flex items-center justify-between p-3.5 sm:p-4 rounded-xl border text-left transition-all duration-300 ${
                  activeCar === index 
                    ? "bg-amber-50/80 border-amber-300 text-slate-900 shadow-sm ring-1 ring-amber-300/50" 
                    : "bg-slate-50/60 border-slate-200/80 text-slate-600 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <div>
                  <div className="text-[10px] sm:text-xs font-bold text-amber-600 tracking-wider uppercase">0{index + 1} — {car.category}</div>
                  <div className="text-xs sm:text-sm font-extrabold text-slate-900 mt-0.5">{car.name}</div>
                </div>
                <TbSteeringWheel className={`text-lg sm:text-xl transition-transform ${activeCar === index ? "text-amber-600 rotate-90" : "text-slate-400"}`} />
              </button>
            ))}
          </div>
        </div>

        {/* Enhanced Perks Strip */}
        <div className="w-full max-w-5xl mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
          {PERKS.map((perk, idx) => (
            <div key={idx} className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-slate-200/60 shadow-sm">
              <BsCheckCircleFill className="text-amber-600 flex-shrink-0 text-base" />
              <span className="text-xs sm:text-sm font-medium text-slate-700">{perk}</span>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-12 w-full max-w-4xl mt-16 sm:mt-20 pt-10 border-t border-slate-200">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm backdrop-blur-md">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">{stat.value}</span>
              <span className="text-slate-500 text-[10px] sm:text-xs mt-2 uppercase tracking-[0.25em] font-semibold">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Features Grid Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-24 sm:mt-28 z-10">
        <div className="text-center mb-12 sm:mb-14">
          <div className="text-amber-600 text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase mb-2 sm:mb-3">ELITE STANDARDS</div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">The CarShop Experience</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="group relative bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 flex flex-col gap-4 sm:gap-5 hover:border-amber-400 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-full blur-2xl group-hover:bg-amber-100 transition-colors pointer-events-none" />
              
              <div className="h-14 w-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-110 group-hover:border-amber-200 transition-all duration-300 shadow-inner">
                <FeatureIcon type={f.icon} />
              </div>
              <h3 className="text-slate-900 font-extrabold text-xl sm:text-2xl tracking-tight group-hover:text-amber-600 transition-colors">{f.title}</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Trust & Guarantee Banner */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-20 z-10">
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 border border-slate-700">
          <div className="flex items-center gap-6 text-left">
            <div className="hidden sm:flex h-16 w-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 items-center justify-center flex-shrink-0">
              <TbAward className="text-amber-400 text-3xl" />
            </div>
            <div>
              <span className="text-amber-400 text-xs font-bold tracking-[0.2em] uppercase">PRIVATE CONCIERGE SERVICE</span>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight mt-1">Looking for a specific allocation?</h3>
              <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-xl">Our private acquisition team sources off-market allocations and rare collector specs globally tailored to your criteria.</p>
            </div>
          </div>
          <button 
            onClick={onBrowse}
            className="whitespace-nowrap px-8 py-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs tracking-[0.2em] uppercase transition-all duration-300 shadow-lg shadow-amber-400/20 hover:scale-105 active:scale-95"
          >
            Inquire Privately
          </button>
        </div>
      </div>
    </section>
  );
}