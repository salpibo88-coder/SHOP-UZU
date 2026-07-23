"use client";

import { useState, useEffect } from "react";
import { MdDirectionsCar } from "react-icons/md";
import { BsShieldCheck, BsStarFill, BsArrowRight, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaFacebookF, FaInstagram, FaTiktok, FaTelegramPlane } from "react-icons/fa";

interface Props {
  onShop?: () => void;
}

const HERO_SLIDES = [
  {
    brand: "Bugatti",
    model: "Chiron Super Sport",
    price: "$3,200,000",
    year: "2024",
    tagline: "Hypercar Precision",
    subtitle: "Engineered for pure speed and unmatched aerodynamic mastery.",
    bg: "from-slate-100 via-gray-50 to-white",
    accent: "#059669",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=85",
  },
  {
    brand: "Bugatti",
    model: "Tourbillon",
    price: "$4,200,000",
    year: "2024",
    tagline: "V16 Hybrid Mastery",
    subtitle: "A breathtaking mechanical symphony fusing timeless analog dials with futuristic electrification.",
    bg: "from-blue-50/50 via-slate-50 to-white",
    accent: "#2563eb",
    image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1400&q=85",
  },
  {
    brand: "Lamborghini",
    model: "Revuelto V12",
    price: "$610,000",
    year: "2025",
    tagline: "Italian Avant-Garde",
    subtitle: "V12 hybrid power combined with striking futuristic styling and fierce track dominance.",
    bg: "from-rose-50/50 via-slate-50 to-white",
    accent: "#e11d48",
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1400&q=85",
  },
];

const STATS = [
  { value: "200+", label: "Exotic Fleet" },
  { value: "5.2K+", label: "Global Collectors" },
  { value: "100%", label: "Verified & Inspected" },
  { value: "42", label: "Countries Served" },
];

const FEATURED_FLEET = [
  {
    brand: "Bugatti",
    model: "Chiron Super Sport",
    price: "$3,200,000",
    year: "2024",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=85",
  },
  {
    brand: "Bugatti",
    model: "Tourbillon",
    price: "$4,200,000",
    year: "2024",
    image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=800&q=85",
  },
  {
    brand: "Lamborghini",
    model: "Revuelto V12",
    price: "$610,000",
    year: "2025",
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=800&q=85",
  },
];

export default function CombinedLanding({ onShop }: Props) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);

  // Auto-advance hero slider
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  const slide = HERO_SLIDES[activeSlide];

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-amber-400 selection:text-neutral-950 overflow-x-hidden">
      
      {/* ==========================================
          LUXURY HEADER / NAVBAR
          ========================================== */}
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center text-neutral-950 shadow-md shadow-amber-500/10">
              <MdDirectionsCar size={22} />
            </div>
            <span className="font-black tracking-[3px] text-lg text-neutral-900">VELOCITY & CO.</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-[2px] text-neutral-600">
            <a href="#fleet" className="hover:text-amber-600 transition-colors">SHOWROOM</a>
            <a href="#why" className="hover:text-amber-600 transition-colors">EXPERIENCE</a>
            <a href="#stories" className="hover:text-amber-600 transition-colors">CLIENTS</a>
          </nav>

          <button
            onClick={onShop}
            className="px-6 py-2.5 rounded-xl bg-neutral-900 hover:bg-amber-400 text-white hover:text-neutral-950 font-bold text-xs tracking-[1.5px] uppercase transition-all duration-300 shadow-md cursor-pointer"
          >
            Enter Showroom
          </button>
        </div>
      </header>

      {/* ==========================================
          HERO SHOWROOM SLIDER
          ========================================== */}
      <section className={`relative min-h-[90vh] w-full flex items-center bg-gradient-to-br ${slide.bg} transition-colors duration-1000 overflow-hidden`}>
        {/* Soft Ambient Glow Effects */}
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-amber-400/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-400/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center py-20 w-full z-10">
          
          {/* Left: Content */}
          <div className="space-y-6">
            <div 
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-neutral-200 text-xs font-bold tracking-[3px] shadow-sm backdrop-blur-md"
              style={{ color: slide.accent }}
            >
              <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: slide.accent }} />
              {slide.tagline}
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-neutral-900">
              {slide.brand}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-500">
                {slide.model}
              </span>
            </h1>

            <p className="text-sm sm:text-base text-neutral-600 max-w-lg font-normal leading-relaxed">
              {slide.subtitle}
            </p>

            <div className="flex items-baseline gap-4 pt-2">
              <span className="text-3xl sm:text-4xl font-black text-amber-600 tracking-tight">{slide.price}</span>
              <span className="text-xs font-semibold text-neutral-600 tracking-[2px] px-3 py-1 rounded-full bg-white border border-neutral-200 shadow-xs">
                MY {slide.year}
              </span>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                onClick={onShop}
                className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-neutral-900 text-white font-black text-xs tracking-[2px] uppercase hover:bg-amber-400 hover:text-neutral-950 transition-all duration-300 hover:scale-[1.02] shadow-xl shadow-neutral-900/10 cursor-pointer"
              >
                SECURE THIS VEHICLE <BsArrowRight className="text-base" />
              </button>
              <button 
                onClick={() => document.getElementById("fleet")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-4 rounded-2xl border border-neutral-300 bg-white/50 hover:bg-white text-neutral-900 font-bold text-xs tracking-[2px] uppercase transition-all duration-300 cursor-pointer backdrop-blur-md shadow-xs"
              >
                Explore Fleet
              </button>
            </div>
          </div>

          {/* Right: Car Image */}
          <div className="relative flex justify-center items-center">
            <img
              key={slide.image}
              src={slide.image}
              alt={slide.model}
              className="w-full max-w-[650px] object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.15)] animate-float transition-all duration-700 hover:scale-105"
            />
          </div>

        </div>

        {/* Slider Controls */}
        <div className="absolute bottom-8 right-8 md:right-12 z-20 flex items-center gap-3">
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="h-12 w-12 rounded-2xl bg-white hover:bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-900 backdrop-blur-md transition-all active:scale-95 shadow-sm cursor-pointer"
          >
            <BsChevronLeft size={18} />
          </button>
          <div className="flex gap-2 px-2">
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  i === activeSlide ? "w-8 bg-amber-500" : "w-2 bg-neutral-300 hover:bg-neutral-400"
                }`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="h-12 w-12 rounded-2xl bg-white hover:bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-900 backdrop-blur-md transition-all active:scale-95 shadow-sm cursor-pointer"
          >
            <BsChevronRight size={18} />
          </button>
        </div>
      </section>


      {/* ==========================================
          STATS SECTION
          ========================================== */}
      <section className="border-y border-neutral-200 bg-neutral-50/50">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-neutral-200">
          {STATS.map((s) => (
            <div key={s.label} className="px-8 py-10 text-center">
              <div className="text-4xl md:text-5xl font-black tracking-tight text-amber-600">{s.value}</div>
              <div className="text-[11px] text-neutral-500 mt-2 tracking-[3px] uppercase font-semibold">{s.label}</div>
            </div>
          ))}
        </div>
      </section>


      {/* ==========================================
          FEATURED FLEET SHOWROOM
          ========================================== */}
      <section id="fleet" className="max-w-7xl mx-auto px-6 md:px-12 py-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-xs font-bold tracking-[4px] text-amber-600 uppercase">Curated Inventory</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mt-2 text-neutral-900">Featured Fleet</h2>
          </div>
          <button onClick={onShop} className="mt-4 md:mt-0 flex items-center gap-2 text-xs font-bold tracking-[2px] uppercase text-neutral-600 hover:text-amber-600 transition group cursor-pointer">
            View All Inventory <BsArrowRight className="group-hover:translate-x-1 transition" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURED_FLEET.map((car, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="group bg-white border border-neutral-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden bg-neutral-100">
                <img
                  src={car.image}
                  alt={car.model}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 bg-white/90 border border-neutral-200 backdrop-blur-md text-[10px] font-black tracking-wider uppercase rounded-full text-neutral-900">{car.brand}</span>
                  <span className="px-3 py-1 bg-neutral-900 text-white text-[10px] font-black tracking-wider rounded-full">{car.year}</span>
                </div>
              </div>

              <div className="p-7 flex flex-col flex-1">
                <h3 className="text-xl font-bold tracking-tight text-neutral-900">{car.model}</h3>
                <p className="text-3xl font-black text-amber-600 tracking-tight mt-2">{car.price}</p>
                <div className="flex items-center gap-1 mt-3 mb-6">
                  {[...Array(5)].map((_, s) => <BsStarFill key={s} className="text-amber-400 text-xs" />)}
                  <span className="text-xs text-neutral-500 ml-2 font-medium">Verified Spec</span>
                </div>
                <button 
                  onClick={onShop}
                  className="mt-auto w-full py-4 rounded-2xl bg-neutral-100 hover:bg-neutral-900 text-neutral-900 hover:text-white text-xs font-black tracking-[2px] uppercase transition-all duration-300 cursor-pointer"
                >
                  Inspect Vehicle
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* ==========================================
          WHY CHOOSE US
          ========================================== */}
      <section id="why" className="border-y border-neutral-200 bg-neutral-50/50 py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-[4px] text-amber-600 uppercase">The Velocity Standard</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mt-2 text-neutral-900">Why elite collectors choose our service</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <BsStarFill className="text-amber-500 text-2xl" />, title: "Curated Selection", desc: "Only the rarest hypercars and bespoke limited editions make it into our private portfolio." },
              { icon: <BsShieldCheck className="text-emerald-600 text-2xl" />, title: "Private & Secure", desc: "Complete discretion. End-to-end encrypted transactions and confidential private viewings." },
              { icon: <TbTruckDelivery className="text-blue-600 text-2xl" />, title: "White-Glove Delivery", desc: "Global logistics handled via climate-controlled transport directly to your private estate." },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-neutral-200 rounded-3xl p-8 shadow-xs hover:shadow-md transition-all duration-300">
                <div className="mb-6 h-14 w-14 rounded-2xl bg-neutral-50 border border-neutral-200 flex items-center justify-center">{item.icon}</div>
                <h4 className="text-xl font-bold mb-3 text-neutral-900">{item.title}</h4>
                <p className="text-neutral-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ==========================================
          TESTIMONIALS
          ========================================== */}
      <section id="stories" className="max-w-7xl mx-auto px-6 md:px-12 py-28">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-[4px] text-amber-600 uppercase">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mt-2 text-neutral-900">From our owners</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { quote: "The most seamless and private purchase experience I've ever had. My vehicle arrived exactly as promised — exceeding every expectation.", name: "Alexandre M.", role: "Private Equity Founder" },
            { quote: "Velocity & Co. found me the exact specification I wanted when no one else could. Truly bespoke service from the first call to delivery.", name: "Elena V.", role: "Tech Entrepreneur" },
          ].map((t, i) => (
            <div key={i} className="bg-neutral-50 border border-neutral-200 rounded-3xl p-10 shadow-xs">
              <div className="text-5xl text-amber-500 font-serif leading-none mb-4">“</div>
              <p className="text-base text-neutral-700 leading-relaxed mb-8">{t.quote}</p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-neutral-950 font-black text-base shadow-sm">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-bold text-neutral-900 text-sm">{t.name}</div>
                  <div className="text-xs text-neutral-500 mt-0.5">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* ==========================================
          CALL TO ACTION BANNER
          ========================================== */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <div className="rounded-3xl overflow-hidden relative border border-neutral-200 bg-neutral-900 p-12 md:p-20 text-center text-white shadow-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.1)_0,transparent_70%)] pointer-events-none" />
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-white">Ready to Claim Your Next Masterpiece?</h2>
          <p className="text-sm md:text-base text-neutral-300 max-w-lg mx-auto mb-8">Join an elite circle of global collectors. Every vehicle tells a distinct legacy.</p>
          <button 
            onClick={onShop}
            className="px-12 py-4 rounded-2xl bg-amber-400 text-neutral-950 font-black tracking-[2px] text-xs uppercase hover:bg-amber-300 transition-all duration-300 hover:scale-105 shadow-xl shadow-amber-400/20 cursor-pointer"
          >
            Enter the Showroom
          </button>
        </div>
      </section>


      {/* ==========================================
          SOCIAL MEDIA LINKS
          ========================================== */}
      <div className="flex items-center justify-center gap-4 pb-12">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="h-11 w-11 bg-white border border-neutral-200 rounded-xl flex items-center justify-center text-neutral-600 hover:text-white hover:bg-[#1877F2] hover:border-[#1877F2] transition-all shadow-xs">
          <FaFacebookF size={18} />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="h-11 w-11 bg-white border border-neutral-200 rounded-xl flex items-center justify-center text-neutral-600 hover:text-white hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] hover:border-transparent transition-all shadow-xs">
          <FaInstagram size={18} />
        </a>
        <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" className="h-11 w-11 bg-white border border-neutral-200 rounded-xl flex items-center justify-center text-neutral-600 hover:text-white hover:bg-black hover:border-black transition-all shadow-xs">
          <FaTiktok size={17} />
        </a>
        <a href="https://web.telegram.org/" target="_blank" rel="noopener noreferrer" className="h-11 w-11 bg-white border border-neutral-200 rounded-xl flex items-center justify-center text-neutral-600 hover:text-white hover:bg-[#229ED9] hover:border-[#229ED9] transition-all shadow-xs">
          <FaTelegramPlane size={18} />
        </a>
      </div>


      {/* ==========================================
          FOOTER
          ========================================== */}
      <footer className="border-t border-neutral-200 py-10 bg-neutral-50/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 tracking-wider gap-y-4">
          <div className="flex items-center gap-2 font-black text-neutral-900 text-sm tracking-[2px]">
            <MdDirectionsCar className="text-amber-600 text-xl" /> VELOCITY & CO.
          </div>
          <div>© {new Date().getFullYear()} VELOCITY & CO. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-6">
            <span className="hover:text-neutral-900 cursor-pointer transition">PRIVACY</span>
            <span className="hover:text-neutral-900 cursor-pointer transition">LEGAL</span>
            <span className="hover:text-neutral-900 cursor-pointer transition">CONTACT</span>
          </div>
        </div>
      </footer>


      {/* Custom CSS Animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}