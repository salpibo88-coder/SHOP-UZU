"use client";

import { useLang } from "@/app/context/LangContext";
import { HiX } from "react-icons/hi";

interface Props {
  onClose: () => void;
}

export default function LangPicker({ onClose }: Props) {
  const { lang, setLang } = useLang();

  const select = (l: "en" | "kh") => {
    setLang(l);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center px-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-sm bg-gray-900 border border-white/10 rounded-3xl shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="bg-linear-to-r from-red-600 to-pink-600 px-6 py-4 flex items-center justify-between">
          <div>
            <h2 className="text-white font-extrabold text-lg">ជ្រើសភាសា</h2>
            <p className="text-white/70 text-xs">Select Language</p>
          </div>
          <button onClick={onClose} className="h-8 w-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-all">
            <HiX />
          </button>
        </div>

        {/* Options */}
        <div className="p-4 grid grid-cols-2 gap-3">

          {/* Khmer */}
          <button
            onClick={() => select("kh")}
            className={`flex flex-col items-center gap-3 p-5 rounded-2xl border-2 transition-all duration-200 hover:scale-105 ${
              lang === "kh"
                ? "border-indigo-500 bg-indigo-500/20 shadow-lg shadow-indigo-500/20"
                : "border-white/10 bg-white/5 hover:border-indigo-400/50 hover:bg-indigo-500/10"
            }`}
          >
            <span className="text-4xl">🇰🇭</span>
            <div className="text-center">
              <p className="text-white font-bold text-base">ខ្មែរ</p>
              <p className="text-gray-400 text-xs">Khmer</p>
            </div>
            {lang === "kh" && (
              <span className="text-xs bg-indigo-600 text-white px-2 py-0.5 rounded-full font-bold">✓ Active</span>
            )}
          </button>

          {/* English */}
          <button
            onClick={() => select("en")}
            className={`flex flex-col items-center gap-3 p-5 rounded-2xl border-2 transition-all duration-200 hover:scale-105 ${
              lang === "en"
                ? "border-pink-500 bg-pink-500/20 shadow-lg shadow-pink-500/20"
                : "border-white/10 bg-white/5 hover:border-pink-400/50 hover:bg-pink-500/10"
            }`}
          >
            <span className="text-4xl">🇺🇸</span>
            <div className="text-center">
              <p className="text-white font-bold text-base">English</p>
              <p className="text-gray-400 text-xs">អង់គ្លេស</p>
            </div>
            {lang === "en" && (
              <span className="text-xs bg-pink-600 text-white px-2 py-0.5 rounded-full font-bold">✓ Active</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
