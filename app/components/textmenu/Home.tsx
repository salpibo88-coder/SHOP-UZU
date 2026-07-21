"use client";

import { useState } from "react";
import { MdDirectionsCar } from "react-icons/md";
import { BsShieldCheck, BsStarFill, BsArrowRight } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaFacebookF, FaInstagram, FaTiktok, FaTelegramPlane } from "react-icons/fa";

interface Props {
  onShop?: () => void;
}

const CARS = [
  {
    brand: "Porsche",
    model: "Chiron Super Sport",
    price: "$3,200,000",
    year: "2024",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
  },
  {
    brand: "Bugatti",
    model: "Bugatti Tourbillon",
    price: "$4,200,000",
    year: "2024",
    image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=800&q=80",
  },
  {
    brand: "Lamborghini",
    model: "Revuelto",
    price: "$610,000",
    year: "2025",
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=800&q=80",
  },
];

const STATS = [
  { value: "200+", label: "Cars in Fleet" },
  { value: "5.2K+", label: "Happy Owners" },
  { value: "100%", label: "Secure Deals" },
  { value: "42", label: "Countries" },
];

export default function Home({ onShop }: Props) {
  const [hovered, setHovered] = useState<number | null>(null);
  const [y, setY] = useState(0);

  const handleWheel = (e: React.WheelEvent) => {
    setY((prev) => {
      const newY = prev + e.deltaY * 0.25;
      return Math.max(-250, Math.min(250, newY));
    });
  };

  return (
    <div onWheel={handleWheel} className="min-h-screen  bg-white text-gray-900 overflow-x-hidden pb-20 md:pb-0">
      <div className="flex justify-end  bg-gradient-to-r from-white via-yellow-50 to-yellow-100 p-4 border-white">
        <img
          src="https://www.pngall.com/wp-content/uploads/13/Sticker-No-Background.png"
          alt="Hero Sticker"
          className="w-32 h-32 object-cover"
          style={{ transform: `translateY(${y}px)` }}
        />
      </div>

      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-amber-50">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-amber-100/60 rounded-full -translate-y-1/3 translate-x-1/3 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-50/80 rounded-full translate-y-1/3 -translate-x-1/3 blur-3xl pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center py-24">
          <div>
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full text-amber-700 text-xs font-bold tracking-[3px] mb-8">
              <MdDirectionsCar className="text-base" />
              THE WORLD'S FINEST AUTOMOBILES
            </div>
            <h1 className="text-[64px] sm:text-[80px] font-black leading-[0.88] tracking-[-4px] mb-6 text-gray-900">
              Drive Your<br />
              <span className="text-transparent bg-clip-text drop-shadow-[2px_2px_4px_rgba(0,0,0,0.2)] bg-gradient-to-r from-red-500 via-orange-500 to-amber-500">
                Dream Car
              </span><br />
              Today
            </h1>
            <p className="text-lg text-gray-500 max-w-md leading-relaxed mb-10">
              Hand-selected hypercars and supercars from the world's rarest marques. Delivered to your door, anywhere on earth.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={onShop}
                className="flex items-center gap-3 px-10 py-4 rounded-2xl bg-gray-900 text-white font-extrabold text-sm tracking-[2px] hover:bg-amber-500 transition-all duration-300 hover:scale-105 shadow-xl shadow-gray-900/20"
              >
                BROWSE COLLECTION <BsArrowRight className="text-base" />
              </button>
              <button 
                onClick={() => document.getElementById("fleet")?.scrollIntoView({ behavior: "smooth" })}
                className="px-10 py-4 rounded-2xl border-2 border-gray-200 text-gray-700 font-bold text-sm tracking-[1px] hover:border-gray-900 hover:text-gray-900 transition-all duration-300"
              >
                See What's New
              </button>
            </div>
            <div className="flex gap-8 mt-12 pt-8 border-t border-gray-100">
              {STATS.slice(0, 3).map((s) => (
                <div key={s.label}>
                  <div className="text-3xl font-black text-gray-900 tracking-[-1px]">{s.value}</div>
                  <div className="text-xs text-gray-400 mt-0.5 tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl hover:scale-105 transition-transform duration-300 overflow-hidden shadow-2xl shadow-gray-900/15 aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80"
                alt="Ferrari SF90"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md rounded-2xl px-5 py-3 shadow-lg">
                <div className="text-xs text-gray-400 tracking-widest">FERRARI SF90</div>
                <div className="text-2xl font-black text-gray-900 tracking-tight">$520,000</div>
              </div>
            </div>
            <div className="absolute -top-5 -right-5 bg-amber-400 text-gray-900 rounded-2xl px-5 py-3 font-extrabold text-sm shadow-xl rotate-3">
              2024 Model ✦
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-800">
          {STATS.map((s) => (
            <div key={s.label} className="px-8 py-10 text-center">
              <div className="text-5xl font-black tracking-[-2px] text-amber-400">{s.value}</div>
              <div className="text-[10px] text-gray-400 mt-1 tracking-[3px] uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <section id="fleet" className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <div className="text-xs font-bold tracking-[4px] text-amber-500 mb-2">CURATED SELECTION</div>
            <h2 className="text-5xl font-black tracking-[-2px]">Featured Fleet</h2>
          </div>
          <button onClick={onShop} className="mt-4 md:mt-0 flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-amber-500 transition group">
            VIEW ALL VEHICLES <BsArrowRight className="group-hover:translate-x-1 transition" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CARS.map((car, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="group bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-gray-900/10 transition-all duration-500 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden bg-gray-50">
                <img
                  src={car.image}
                  alt={car.model}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur text-xs font-black rounded-full text-gray-900">{car.brand}</span>
                  <span className="px-3 py-1 bg-amber-400/90 backdrop-blur text-xs font-black rounded-full text-gray-900">{car.year}</span>
                </div>
                {hovered === i && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                    <div className="bg-white rounded-2xl px-6 py-3 font-extrabold text-sm tracking-[1px] shadow-xl text-gray-900">
                      VIEW DETAILS →
                    </div>
                  </div>
                )}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-black tracking-tight text-gray-900">{car.model}</h3>
                <p className="text-4xl font-black text-amber-500 tracking-[-1px] mt-2">{car.price}</p>
                <div className="flex items-center gap-1 mt-2 mb-5">
                  {[...Array(5)].map((_, s) => <BsStarFill key={s} className="text-amber-400 text-xs" />)}
                  <span className="text-xs text-gray-400 ml-1">Premium Verified</span>
                </div>
                <button 
                  onClick={onShop}
                  className="mt-auto w-full py-3.5 rounded-2xl bg-gray-900 text-white text-xs font-extrabold tracking-[2px] hover:bg-amber-500 transition-all duration-300 hover:scale-[1.02]"
                >
                  INSPECT VEHICLE
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="why" className="bg-gray-50 border-y border-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-14">
            <div className="text-xs font-bold tracking-[4px] text-gray-400 mb-2">THE CARSHOP DIFFERENCE</div>
            <h2 className="text-5xl font-black tracking-[-2px]">Why the world's elite<br />choose CarShop</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <BsStarFill className="text-amber-400 text-3xl" />, title: "Curated Selection", desc: "Only the rarest and most desirable hypercars make it into our collection. Every vehicle hand-inspected.", color: "border-amber-100 hover:border-amber-300" },
              { icon: <BsShieldCheck className="text-emerald-500 text-3xl" />, title: "Private & Secure", desc: "Complete discretion. End-to-end encrypted transactions and private viewing experiences.", color: "border-emerald-100 hover:border-emerald-300" },
              { icon: <TbTruckDelivery className="text-pink-500 text-3xl" />, title: "White-Glove Delivery", desc: "Delivered anywhere in the world with our dedicated logistics team. Climate-controlled transport.", color: "border-pink-100 hover:border-pink-300" },
            ].map((item, i) => (
              <div key={i} className={`bg-white border-2 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 ${item.color}`}>
                <div className="mb-6 h-14 w-14 rounded-2xl bg-gray-50 flex items-center justify-center">{item.icon}</div>
                <h4 className="text-2xl font-black mb-3 text-gray-900">{item.title}</h4>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="stories" className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        <div className="text-center mb-14">
          <div className="text-xs font-bold tracking-[4px] text-gray-400 mb-2">REAL STORIES</div>
          <h2 className="text-5xl font-black tracking-[-2px]">From our owners</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { quote: "The most seamless and private purchase experience I've ever had. My Revuelto arrived exactly as promised — and exceeded every expectation.", name: "Alexandre M.", role: "Founder & CEO, Private Equity" },
            { quote: "Carshop found me the exact Chiron specification I wanted when no one else could. Truly bespoke service from the first call to delivery.", name: "Elena V.", role: "Tech Entrepreneur" },
          ].map((t, i) => (
            <div key={i} className="bg-gray-50 border border-gray-100 rounded-3xl p-10 hover:shadow-lg transition-all duration-300">
              <div className="text-6xl text-amber-300 font-serif leading-none mb-2">"</div>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">{t.quote}</p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-amber-400 to-red-400 flex items-center justify-center text-white font-black text-lg">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-bold text-gray-900">{t.name}</div>
                  <div className="text-sm text-gray-400">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-6 md:mx-12 mb-12 rounded-3xl overflow-hidden relative">
        <div className="absolute inset-0 bg-gray-900" />
        <img src="https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=80" alt="CTA Background" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="relative px-8 md:px-16 py-20 text-center text-white">
          <h2 className="text-5xl md:text-6xl font-black tracking-[-3px] mb-4">Are You Ready For This</h2>
          <p className="text-xl text-gray-300 max-w-md mx-auto mb-10">Join an exclusive circle of collectors. Every car tells a story. Start yours today.</p>
          <button 
            onClick={onShop}
            className="px-14 py-5 rounded-3xl bg-white text-gray-900 font-extrabold tracking-[2.5px] text-sm hover:bg-amber-400 hover:text-white transition-all duration-300 hover:scale-105 shadow-2xl"
          >
            ENTER THE SHOWROOM
          </button>
          <p className="mt-6 text-xs text-gray-400 tracking-[2px]">WORLDWIDE WHITE-GLOVE DELIVERY • 24/7 PRIVATE CONCIERGE</p>
        </div>
      </section>

      {/* Social Media Links with Unique Solid Background Colors and Permanent Brand styling */}
      <div className="flex items-center justify-center gap-6 py-6">
        <a 
          href="https://www.facebook.com/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="h-12 w-12 bg-[#1877F2] rounded-full flex items-center justify-center text-white shadow-md hover:scale-105 transition-transform duration-300"
        >
          <FaFacebookF size={20} />
        </a>
        <a 
          href="https://www.instagram.com/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="h-12 w-12 bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] rounded-full flex items-center justify-center text-white shadow-md hover:scale-105 transition-transform duration-300"
        >
          <FaInstagram size={20} />
        </a>
        <a 
          href="https://www.tiktok.com/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="h-12 w-12 bg-black rounded-full flex items-center justify-center text-white shadow-md hover:scale-105 transition-transform duration-300"
        >
          <FaTiktok size={19} />
        </a>
        <a 
          href="https://web.telegram.org/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="h-12 w-12 bg-[#229ED9] rounded-full flex items-center justify-center text-white shadow-md hover:scale-105 transition-transform duration-300"
        >
          <FaTelegramPlane size={20} />
        </a>
      </div>

      <footer className="border-t border-gray-100 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 tracking-wider gap-y-4">
          <div className="flex items-center gap-2 font-black text-gray-900 text-lg">
            <MdDirectionsCar className="text-amber-500 text-2xl" /> SHOP TR77
          </div>
          <div>© {new Date().getFullYear()} CARSHOP PREMIUM. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-6">
            <span className="hover:text-gray-900 cursor-pointer transition">PRIVACY</span>
            <span className="hover:text-gray-900 cursor-pointer transition">LEGAL</span>
            <span className="hover:text-gray-900 cursor-pointer transition">CONTACT</span>
          </div>
        </div>
      </footer>
    </div>
  );
}