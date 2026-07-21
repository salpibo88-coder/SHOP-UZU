"use client";

import { useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { HiX, HiMenuAlt3, HiTranslate } from "react-icons/hi";
import LangPicker from "../LogoTranslate/LangPicker";

const navLinks = [
  { label: "Home",     page: "home" },
  { label: "Shop",     page: "shop" },
  { label: "About",    page: "about" },
  { label: "Contact",  page: "contact" },
  { label: "Services", page: "services" },
];

const sideMenuItems = ["CAR", "MOTORBIKE", "TRUCK", "BICYCLE", "DRINK", "FRUIT", "SITTING", "ACCESSORIES"];

interface Props {
  onBuy?: () => void;
  onNav?: (page: string) => void;
  onSideNav?: (item: string) => void;
  onTranslate?: () => void;
}

export default function Formcard({ onBuy, onNav, onSideNav, onTranslate }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [activeSide, setActiveSide] = useState("");
  const [langOpen, setLangOpen] = useState(false);

  const handleCategory = (item: string) => {
    setActiveSide(item);
    onSideNav?.(item.toLowerCase());
    setCartOpen(false);
    setMenuOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-yellow-400 shadow-2xl overflow-hidden">
        <div className=" absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-yellow-500 via-yellow-400 to-yellow-500 animate-pulse" />

        {/* BG video */}
        {/* <div className="absolute inset-0 z-0">
          <iframe
            src="https://www.youtube.com/embed/WWJ672iZKNQ?autoplay=1&mute=1&loop=1&playlist=WWJ672iZKNQ&controls=0&modestbranding=1&rel=0&iv_load_policy=3"
            allow="autoplay; encrypted-media"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] min-w-full min-h-full h-[56.25vw]"
            style={{ border: "none", pointerEvents: "none" }}
            title="Background video"
          />
        </div> */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between relative z-10">
          <a href="#home" className="flex items-center gap-2 sm:gap-3 group"
            onClick={() => { setActive("Home"); setActiveSide(""); setCartOpen(false); }}>
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-yellow-400/40 blur-md scale-125 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative h-8 w-8 sm:h-10 sm:w-10 rounded-full overflow-hidden border-2 border-yellow-400 group-hover:border-pink-400 transition-colors duration-300">
                <img src="https://digitalsynopsis.com/wp-content/uploads/2018/07/car-logos-lamborghini.jpg" alt="Logo" className="h-full w-full object-cover" />
              </div>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-base sm:text-xl font-black tracking-widest bg-linear-to-r from-yellow-500 via-yellow-300 to-yellow-500 bg-clip-text text-transparent drop-shadow-[2px_2px_4px_black]">SHOP Uzu TR77</span>
              <span className="text-[9px] sm:text-[10px] text-gray-900 tracking-[0.2em] drop-shadow-[2px_2px_4px_black] uppercase">Premium Vehicles</span>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link, i) => {
              const colors = ["hover:text-indigo-400","hover:text-pink-400","hover:text-yellow-400","hover:text-green-400","hover:text-cyan-400"];
              const activeColors = ["text-indigo-400 bg-indigo-500/10 border-indigo-500/30","text-pink-400 bg-pink-500/10 border-pink-500/30","text-yellow-400 bg-yellow-500/10 border-yellow-500/30","text-green-400 bg-green-500/10 border-green-500/30","text-cyan-400 bg-cyan-500/10 border-cyan-500/30"];
              return (
                <button key={link.label}
                  onClick={() => { setActive(link.label); onNav?.(link.page); setCartOpen(false); }}
                  className={`relative px-4 py-2 rounded-lg text-sm font-bold border transition-all duration-200 ${active === link.label ? `${activeColors[i]} border` : `text-gray-600 drop-shadow-[2px_2px_4px_gray]  border-transparent ${colors[i]} hover:bg-white/5`}`}>
                  {link.label}
                </button>
              );
            })}
          </nav>
          

          {/* Right: Translate + Cart icon */}
          <div className="flex items-center gap-2 sm:gap-3">

            {/* Translate button — highlighted red */}
            <button
              onClick={onTranslate}
              className="relative flex items-center justify-center h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-red-600 hover:bg-red-500 text-white transition-all duration-300 shadow-lg shadow-red-500/40 hover:scale-110"
              aria-label="Translate"
            >
              <HiTranslate className="text-lg sm:text-xl" />
              <span className="absolute inset-0 rounded-full bg-red-400/40 animate-ping pointer-events-none" />
            </button>
            <button
              onClick={() => setCartOpen(!cartOpen)}
              className={`relative flex items-center justify-center h-11 w-11 rounded-full transition-all duration-300 shadow-lg hover:scale-110 ${cartOpen ? "bg-yellow-300 text-gray-900" : "bg-yellow-500 text-white hover:bg-yellow-400"}`}
              aria-label="Open categories"
            >
              {cartOpen ? <HiX className="text-2xl" /> : <BsCart3 className="text-2xl" />}
              {!cartOpen && <span className="absolute inset-0 rounded-full bg-yellow-400/30 animate-ping pointer-events-none" />}
            </button>

            <button className="md:hidden h-9 w-9 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 text-white transition-all"
              onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
              {menuOpen ? <HiX className="text-xl" /> : <HiMenuAlt3 className="text-xl" />}
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop */}
      {cartOpen && (
        <div className="fixed inset-0 z-40 bg-black/20" onClick={() => setCartOpen(false)} />
      )}

      {/* Slide-out panel from left */}
      <div className={`fixed left-0 top-16 h-[calc(100vh-64px)] w-52 bg-white z-50 shadow-2xl border-r border-gray-200 flex flex-col transition-all duration-300 ease-in-out ${cartOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0 pointer-events-none"}`}>
        <div className="bg-gray-900 px-5 py-3 flex items-center justify-between">
          <span className="text-white font-black text-xs tracking-[0.2em] uppercase">Categories</span>
          <button onClick={() => setCartOpen(false)} className="text-gray-300 hover:text-white transition-colors">
            <HiX />
          </button>
        </div>
        {sideMenuItems.map((item) => (
          <button
            key={item}
            onClick={() => handleCategory(item)}
            className={`flex items-center px-6 py-5 text-sm font-black border-b border-gray-100 transition-all duration-200 uppercase tracking-wider text-left w-full ${
              activeSide === item
                ? "bg-yellow-50 text-yellow-500 border-l-4 border-l-yellow-500 pl-5"
                : "text-gray-800 hover:text-yellow-500 hover:bg-yellow-50 hover:pl-8"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Mobile Dropdown */}
      <div className={`fixed top-16 left-0 right-0 z-40 transition-all duration-300 ease-in-out md:hidden ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3 pointer-events-none"}`}>
        <div className="mx-4 mt-2 bg-gray-950/98 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl p-4 flex flex-col gap-2">
          {navLinks.map((link, i) => {
            const colors = ["text-indigo-400","text-pink-400","text-yellow-400","text-green-400","text-cyan-400"];
            const bgs = ["hover:bg-indigo-500/10","hover:bg-pink-500/10","hover:bg-yellow-500/10","hover:bg-green-500/10","hover:bg-cyan-500/10"];
            return (
              <button key={link.label}
                onClick={() => { setActive(link.label); onNav?.(link.page); setMenuOpen(false); }}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-200 ${active === link.label ? `${colors[i]} bg-white/5` : `text-gray-400 ${colors[i]} ${bgs[i]}`}`}>
                <span className={`h-1.5 w-1.5 rounded-full ${active === link.label ? "bg-current" : "bg-gray-600"}`} />
                {link.label}
              </button>
            );
          })}
          <div className="h-px bg-white/10 my-1" />
          {sideMenuItems.map((item) => (
            <button key={item} onClick={() => handleCategory(item)}
              className={`flex items-center px-4 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 ${activeSide === item ? "text-yellow-400 bg-white/5" : "text-gray-400 hover:text-yellow-400 hover:bg-white/5"}`}>
              {item}
            </button>
          ))}
        
        </div>
      </div>

      <div className="h-16" />
    </>
  );
}
