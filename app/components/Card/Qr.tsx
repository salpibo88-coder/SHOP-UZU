"use client";

import { useState } from "react";
import { BsShieldCheck, BsArrowLeft, BsFileEarmarkText, BsQrCodeScan, BsCheck2Circle } from "react-icons/bs";
import { HiSparkles } from "react-icons/hi";
import { MdVerified } from "react-icons/md";

interface Props {
  onDetail?: () => void;
  onBack?: () => void;
}

const PAYMENT_PROVIDERS = [
  {
    id: "aba",
    name: "ABA Bank",
    badge: "Instant KHQR",
    account: "001 234 567 (CarShop Elite)",
    // Specific custom QR code image for ABA Bank
    qrImage: "https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg",
  },
  {
    id: "win",
    name: "Win Account / ACLEDA",
    badge: "Secure Transfer",
    account: "300 890 123 (CarShop Escrow)",
    // Specific custom QR code image for Win / ACLEDA
    qrImage: "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=Win-ACLEDA-CarShop-Secure-Payment",
  },
  {
    id: "crypto",
    name: "USDT / Multi-Sig Wallet",
    badge: "Web3 Escrow",
    account: "0x71C...98F2 (Institutional Vault)",
    // Specific custom QR code image for Crypto/USDT
    qrImage: "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=USDT-MultiSig-Vault-CarShop",
  },
];

export default function Qr({ onDetail, onBack }: Props) {
  const [selectedProvider, setSelectedProvider] = useState("aba");
  const [isCopied, setIsCopied] = useState(false);
  const [isScanned, setIsScanned] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText("UZU-TR77-SECURE-VERIFY");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  const handleSimulateScan = () => {
    setIsScanned(true);
    setTimeout(() => setIsScanned(false), 4000);
  };

  const activeProviderData = PAYMENT_PROVIDERS.find((p) => p.id === selectedProvider) || PAYMENT_PROVIDERS[0];

  return (
    <section className="relative min-h-screen w-full bg-[#07090e] text-white overflow-hidden flex flex-col justify-between py-12 lg:py-20 px-4 sm:px-6 lg:px-8 selection:bg-amber-400 selection:text-slate-950">
      
      {/* Background Graphic Elements & Dynamic Glows */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-cover bg-center opacity-25 filter blur-[2px] scale-105" style={{ backgroundImage: "url('https://static.vecteezy.com/system/resources/thumbnails/057/523/776/small/a-vintage-style-teal-and-yellow-car-parks-against-a-matching-solid-teal-wall-in-a-studio-setting-photo.jpeg')" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-[#07090e]/80 to-transparent" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-br from-amber-500/15 via-teal-500/10 to-transparent rounded-full blur-[140px]" />
      </div>

      {/* Top Navigation / Action Bar */}
      <div className="relative max-w-7xl mx-auto w-full flex items-center justify-between z-10 mb-8">
        <button
          onClick={onBack}
          className="group flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-slate-300 hover:text-white font-semibold text-xs tracking-[0.15em] uppercase backdrop-blur-xl transition-all duration-300 shadow-lg"
        >
          <BsArrowLeft className="text-base group-hover:-translate-x-1 transition-transform" /> 
          Back to Showroom
        </button>

        <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-bold tracking-widest uppercase">
          <BsShieldCheck className="text-base" /> Cryptographic Secure ID
        </div>
      </div>

      {/* Main Container */}
      <div className="relative max-w-5xl mx-auto w-full flex flex-col items-center text-center z-10 my-auto">
        
        {/* Elite Badge Header */}
        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl text-yellow-300 text-xs font-bold tracking-[0.3em] uppercase mb-6 shadow-2xl">
          <span className="flex h-2 w-2 rounded-full bg-yellow-400 animate-ping" />
          <HiSparkles className="text-base text-yellow-400" />
          AUTHENTICATION & PAYMENT GATEWAY
        </div>

        {/* Master Branding */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-500 tracking-tight drop-shadow-[0_15px_30px_rgba(234,179,8,0.2)] mb-4">
          UzuTR77
        </h1>

        <p className="text-slate-400 text-base sm:text-lg lg:text-xl font-normal max-w-2xl leading-relaxed mb-8">
          Select your trusted scanning provider below to instantly update the active QR code and account details.
        </p>

        {/* Horizontal Clean Selection List */}
        <div className="w-full max-w-3xl flex flex-wrap items-center justify-center gap-3 mb-10">
          {PAYMENT_PROVIDERS.map((provider) => {
            const isSelected = selectedProvider === provider.id;
            return (
              <button
                key={provider.id}
                onClick={() => setSelectedProvider(provider.id)}
                className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl border transition-all duration-300 ${
                  isSelected
                    ? "bg-amber-400 text-slate-950 border-amber-400 shadow-lg shadow-amber-400/20 scale-105 font-black"
                    : "bg-white/[0.04] text-white border-white/10 hover:border-white/30 hover:bg-white/[0.08] font-bold"
                }`}
              >
                <span className={`w-2.5 h-2.5 rounded-full ${isSelected ? "bg-slate-950 animate-pulse" : "bg-amber-400"}`} />
                <div className="text-left">
                  <div className="text-xs sm:text-sm tracking-wide">{provider.name}</div>
                  <div className={`text-[10px] uppercase tracking-wider ${isSelected ? "text-slate-800" : "text-amber-400"}`}>
                    {provider.badge}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* QR Interactive Card Matrix - Updates Dynamically based on selection */}
        <div className="w-full max-w-xl bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-2xl shadow-2xl relative overflow-hidden group">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-72 bg-yellow-400/10 rounded-full blur-[90px] pointer-events-none" />

          <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10 text-left">
            <div>
              <div className="text-[10px] font-bold text-amber-400 tracking-[0.2em] uppercase">ACTIVE GATEWAY: {activeProviderData.name}</div>
              <div className="text-sm font-extrabold text-white mt-0.5">{activeProviderData.account}</div>
            </div>
            <div className="h-10 w-10 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
              <BsQrCodeScan className="text-lg" />
            </div>
          </div>

          {/* Dynamic QR Code Container */}
          <div className="flex flex-col items-center space-y-6">
            <div 
              onClick={handleSimulateScan}
              className="relative p-5 bg-white rounded-2xl shadow-[0_0_50px_rgba(255,255,255,0.1)] transition-transform duration-500 hover:scale-105 group/qr cursor-pointer"
              title="Click to simulate scan"
            >
              <div className="absolute inset-0 rounded-2xl border-2 border-amber-400/50 opacity-0 group-hover/qr:opacity-100 transition-opacity pointer-events-none" />
              
              {/* Dynamic Image mapping to selected provider */}
              <img
                key={activeProviderData.id}
                src={activeProviderData.qrImage}
                alt={`${activeProviderData.name} QR Code`}
                className="w-48 h-48 sm:w-56 sm:h-56 object-contain animate-fadeIn"
              />

              {isScanned && (
                <div className="absolute inset-0 bg-slate-950/90 rounded-2xl flex flex-col items-center justify-center p-4 text-center animate-fadeIn">
                  <MdVerified className="text-emerald-400 text-5xl mb-2 animate-bounce" />
                  <span className="text-white text-xs font-bold tracking-wider uppercase">Scanned via {activeProviderData.name}</span>
                  <span className="text-emerald-400 text-[10px] mt-1 font-mono">Authentication Validated</span>
                </div>
              )}
            </div>

            <p className="text-xs text-slate-400">
              Scan with your <span className="text-amber-400 font-bold">{activeProviderData.name}</span> mobile application.
            </p>

            {/* Code Copy Box */}
            <div className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-black/40 border border-white/10">
              <span className="font-mono text-xs sm:text-sm text-yellow-300 tracking-wider">UZU-TR77-SECURE-VERIFY</span>
              <button 
                onClick={handleCopyCode}
                className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-bold tracking-wider uppercase transition-colors"
              >
                {isCopied ? <span className="text-emerald-400 flex items-center gap-1"><BsCheck2Circle /> Copied</span> : "Copy Code"}
              </button>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mt-10">
          <button
            onClick={onDetail}
            className="flex-1 flex items-center justify-center gap-2.5 h-14 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-extrabold text-xs tracking-[0.2em] uppercase shadow-xl shadow-amber-500/25 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <BsFileEarmarkText className="text-base" /> View Inspection Details
          </button>
          <button
            onClick={onBack}
            className="flex-1 flex items-center justify-center gap-2.5 h-14 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-white font-bold text-xs tracking-[0.2em] uppercase backdrop-blur-xl transition-all duration-300"
          >
            Back to Showroom
          </button>
        </div>
      </div>

      {/* Footer Branding Note */}
      <div className="relative max-w-7xl mx-auto w-full text-center mt-12 z-10">
        <p className="text-slate-500 text-[10px] sm:text-xs tracking-[0.25em] uppercase">
          CarShop Elite Division © 2026 — End-to-End Cryptographic Security Protocol
        </p>
      </div>
    </section>
  );
}