"use client";

import { useState } from "react";
import { MdDirectionsCar } from "react-icons/md";
import { BsShieldCheck, BsStarFill, BsArrowRight } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";

interface Props { onShop?: () => void; }

const CARS = [
  { brand: "Porsche", model: "Chiron Super Sport", price: "$3,200,000", year: "2024", image: "https://media.istockphoto.com/id/927681972/photo/yellow-sports-car-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=BJOl2LJH6jbnbj0Sneqf5xcLjzCAZ5nA0VNxNwvq70E=" },
  { brand: "Bugati FR50", model: "BuGati F80", price: "$520,000", year: "2024", image: "https://w0.peakpx.com/wallpaper/155/278/HD-wallpaper-bugatti-chiron-car-fast-hypercar-performance-red-supercar-white-white-and-red.jpg" },
  { brand: "Lamborghini", model: "Revuelto", price: "$610,000", year: "2025", image: "https://s1.cdn.autoevolution.com/images/news/gallery/bugatti-hired-this-designer-after-he-penned-a-le-mans-hypercar-concept_2.jpg" },
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
    <div onWheel={handleWheel} className="min-h-screen bg-white text-gray-900 overflow-x-hidden pb-20 md:pb-0">
      <div className="flex justify-end bg-gradient-to-r from-white via-yellow-50 to-yellow-100 p-4 border-white">
        <img
          src="https://www.pngall.com/wp-content/uploads/13/Sticker-No-Background.png"
          alt="Hero"
          className="w-35 h-35 object-cover"
          style={{ transform: `translateY(${y}px)` }}
        />
      </div>

      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-amber-50">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-amber-100/60 rounded-full -translate-y-1/3 translate-x-1/3 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-50/80 rounded-full translate-y-1/3 -translate-x-1/3 blur-3xl pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center py-24">
          <div className="">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full text-amber-700 text-xs font-bold tracking-[3px] mb-8">
              <MdDirectionsCar className="text-base" />
              THE WORLD'S FINEST AUTOMOBILES
            </div>
            <h1 className="text-[64px] sm:text-[80px] font-black leading-[0.88] tracking-[-4px] mb-6 text-gray-900">
              Drive Your<br />
              <span className="text-transparent bg-clip-text drop-shadow-[2px_2px_4px_black] bg-gradient-to-r from-red-500 via-orange-500 to-amber-500">
                Dream Car
              </span><br />
              Today
            </h1>
            <p className="text-lg text-gray-500 max-w-md leading-relaxed mb-10">
              Hand-selected hypercars and supercars from the world's rarest marques. Delivered to your door, anywhere on earth.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={onShop}
                className="flex items-center gap-3 px-10 py-4 rounded-2xl bg-gray-900 text-white font-extrabold text-sm tracking-[2px] hover:bg-amber-500 transition-all duration-300 hover:scale-105 shadow-xl shadow-gray-900/20">
                BROWSE COLLECTION <BsArrowRight className="text-base" />
              </button>
              <button onClick={() => document.getElementById("fleet")?.scrollIntoView({ behavior: "smooth" })}
                className="px-10 py-4 rounded-2xl border-2 border-gray-200 text-gray-700 font-bold text-sm tracking-[1px] hover:border-gray-900 hover:text-gray-900 transition-all duration-300">
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
            <div className="relative rounded-3xl hover:scale-110 transition-transform duration-300 overflow-hidden shadow-2xl shadow-gray-900/15 aspect-[4/3]">
              <img
                src="https://img.freepik.com/premium-photo/blue-car-isolated-white-background_140916-44354.jpg"
                alt="Ferrari"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
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

      <div className="bg-white text-white">
        <div className="max-w-7xl mx-auto drop-shadow-[2px_2px_4px_black] grid grid-cols-2 md:grid-cols-4 divide-x divide-white">
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
                    <div className="bg-white rounded-2xl px-6 py-3 font-extrabold text-sm tracking-[1px] shadow-xl">
                      VIEW DETAILS →
                    </div>
                  </div>
                )}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-black tracking-tight text-white">{car.model}</h3>
                <p className="text-4xl font-black text-amber-400 tracking-[-1px] mt-2">{car.price}</p>
                <div className="flex items-center gap-1 mt-2 mb-5">
                  {[...Array(5)].map((_, s) => <BsStarFill key={s} className="text-amber-300 text-xs" />)}
                  <span className="text-xs text-gray-400 ml-1">Premium Verified</span>
                </div>
                <button onClick={onShop}
                  className="mt-auto w-full py-3.5 rounded-2xl bg-gray-900 text-white text-xs font-extrabold tracking-[2px] hover:bg-amber-500 transition-all duration-300 hover:scale-[1.02]">
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
                <h4 className="text-2xl font-black mb-3">{item.title}</h4>
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
        <img src="https://www.bentleymotors.com/content/dam/bm/websites/bmcom/bentleymotors-com/models/27my/flying-spur-new-lights-images/NEW%20range%20page%20gallery%20FS%20S%20Global%2016x9.jpg/_jcr_content/renditions/original.image_file.1440.810.file/NEW%20range%20page%20gallery%20FS%20S%20Global%2016x9.jpg" alt="CTA" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="relative px-8 md:px-16 py-20 text-center text-white">
          <h2 className="text-6xl font-black tracking-[-3px] drop-shadow-[2px_2px_4px_white] mb-4">Are You Ready For This</h2>
          <p className="text-xl text-gray-300 max-w-md mx-auto mb-10">Join an exclusive circle of collectors. Every car tells a story. Start yours today.</p>
          <button onClick={onShop}
            className="px-14 py-5 rounded-3xl bg-white text-gray-900 font-extrabold tracking-[2.5px] text-sm hover:bg-amber-400 hover:text-white transition-all duration-300 hover:scale-105 shadow-2xl">
            ENTER THE SHOWROOM
          </button>
          <p className="mt-6 text-xs text-gray-400 tracking-[2px]">WORLDWIDE WHITE-GLOVE DELIVERY • 24/7 PRIVATE CONCIERGE</p>
        </div>
      </section>

      <div className="flex items-center justify-center">
        <a href="https://www.facebook.com/"><img className="h-30 text-sm transition-transform duration-400 hover:scale-120" src="https://img.magnific.com/premium-vector/circle-facebook-logotype-icon-social-media-app-network-application-popular-editorial-brand-vector-illustration_913857-373.jpg?semt=ais_hybrid&w=740&q=80" alt="Facebook" /></a>
        <a href="https://www.instagram.com/"><img className="h-30 text-sm transition-transform duration-400 hover:scale-120" src="data:image/jpeg;base64,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" alt="Facebook" /></a>
        <a href="https://www.tiktok.com//"><img className="h-30 text-sm transition-transform duration-400 hover:scale-120" src="https://img.magnific.com/free-psd/social-media-logo-design_23-2151296966.jpg?semt=ais_hybrid&w=740&q=80" alt="Facebook" /></a>
        <a href="https://web.telegram.org/a/"><img className="h-23 text-sm transition-transform duration-400 hover:scale-120" src="https://img.freepik.com/premium-vector/telegram-app-round-icon-social-media-popular-messenger-app_277909-881.jpg" alt="Facebook" /></a>
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