"use client";

import { useState, useEffect } from "react";
import { MdDirectionsCar, MdCheckCircle } from "react-icons/md";
import { BsCalendar, BsCreditCard, BsPerson, BsShieldCheck } from "react-icons/bs";
import { HiArrowLeft, HiDownload } from "react-icons/hi";
import { FiUser, FiLock } from "react-icons/fi";

interface PaymentData {
  firstName: string;
  lastName: string;
  cardNumber: string;
  exp: string;
  cvc: string;
  method: string;
}

interface Props {
  data: PaymentData | null;
  onBack: () => void;
}
export default function Detail({ data, onBack }: Props) {
  const [mounted, setMounted] = useState(false);
  const [ref] = useState(`CS-${Math.floor(100000 + Math.random() * 900000)}`);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  const maskedCard = data?.cardNumber
    ? "**** **** **** " + data.cardNumber.replace(/\s/g, "").slice(-4)
    : "N/A";

  const rows = [
    { icon: <FiUser className="text-indigo-500 drop-shadow-[2px_2px_4px_black]" />, label:  "Full Name", value: data ? `${data.firstName} ${data.lastName}` : "N/A", mono: false },
    { icon: <BsCreditCard className="text-yellow-500 drop-shadow-[2px_2px_4px_black]" />, label: "Card Number", value: maskedCard, mono: true },
    { icon: <BsCalendar className="text-cyan-500 drop-shadow-[2px_2px_4px_black]" />, label: "Expiry Date", value: data?.exp || "N/A", mono: false },
    { icon: <FiLock className="text-pink-500 drop-shadow-[2px_2px_4px_black]" />, label: "Security Code", value: "***", mono: true },
    { icon: <MdDirectionsCar className="text-orange-500 drop-shadow-[2px_2px_4px_black]" />, label: "Payment Method", value: data?.method === "paypal" ? "PayPal" : "Credit / Debit Card", mono: false },
    { icon: <BsPerson className="text-indigo-500 drop-shadow-[2px_2px_4px_black]" />, label: "Reference", value: `#${ref}`, mono: true },
    { icon: <BsCalendar className="text-green-500 drop-shadow-[2px_2px_4px_black]" />, label: "Date", value: new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" }), mono: false },
  ];

  return (
    <div style={{
      background:"ulr('')"
    }} className="min-h-screen bg-black flex items-center justify-center px-4 py-8 sm:py-12 relative overflow-hidden">
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-pink-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className={`relative z-10 w-full max-w-lg mx-auto transition-all duration-700 ease-out ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>

        <div className="bg-white/1 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
          <div className="bg-linear-to-r from-yellow-600 via-lime- to-yellow-300 px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between">
            <div className="flex items-center gap-3 sm:gap-4">
              <button onClick={onBack} className="h-8 w-8 sm:h-9 sm:w-9 rounded-xl bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-all">
                <HiArrowLeft className="text-base sm:text-lg" />
              </button>
              <div>
                <h1 className="text-base sm:text-xl font-extrabold text-white tracking-tight">Order Details</h1>
                <p className="text-white/70 text-xs mt-0.5">Purchase confirmation</p>
              </div>
            </div>
            <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/20 flex items-center justify-center">
              <MdDirectionsCar className="text-white text-xl sm:text-2xl" />
            </div>
          </div>

          <div className="p-4 sm:p-6 md:p-8">
            <div className="flex items-center gap-3 sm:gap-4 bg-green-500/10 border border-green-500/25 rounded-2xl px-4 sm:px-5 py-3 sm:py-4 mb-5 sm:mb-7">
              <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-green-500/3020 flex items-center justify-center shrink-0">
                <MdCheckCircle className="text-green-500 drop-shadow-[2px_2px_4px_green] text-base sm:text-lg" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-green-500 font-bold text-xs sm:text-sm">Payment Successful</p>
                <p className="text-gray-500 text-xs mt-0.5">Your order has been confirmed and is being processed</p>
              </div>
              <BsShieldCheck className="text-green-500 text-lg sm:text-xl shrink-0" />
            </div>
            <div className="space-y-2 mb-5 sm:mb-7">
              {rows.map((row, i) => (
                <div key={i} className="flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3.5 bg-white/5 hover:bg-white/8 border border-white/8 rounded-xl transition-colors duration-200 group gap-2">
                  <div className="flex items-center gap-2 sm:gap-3 text-gray-400 text-xs sm:text-sm shrink-0">
                    <span className="text-sm sm:text-base group-hover:scale-110 transition-transform duration-200">{row.icon}</span>
                    {row.label}
                  </div>
                  <span className={`text-white font-semibold text-xs sm:text-sm truncate text-right ${row.mono ? "font-mono tracking-wider" : ""}`}>
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
            <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-2xl px-4 sm:px-5 py-3 sm:py-4 mb-5 sm:mb-7 flex gap-3">
              <span className="text-lg sm:text-xl shrink-0">📦</span>
              <p className="text-indigo-300 text-xs sm:text-sm leading-relaxed">
                Your vehicle will be delivered within <strong className="text-indigo-200">3–5 business days</strong>. A confirmation has been sent to your registered account.
              </p>
            </div>
            <div className="flex gap-3">
              <button onClick={onBack}
                className="flex-1 py-3 sm:py-3.5 drop-shadow-[2px_2px_4px_yellow] rounded-xl bg-indigo-600 hover:bg-pink-500 text-white font-bold text-xs sm:text-sm transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2">
                <HiArrowLeft className="text-sm sm:text-base" />
                Back to Shop
              </button>
              <button onClick={() => window.print()}
                className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                title="Print receipt">
                <HiDownload className="text-base sm:text-lg" />
              </button>
            </div>

          </div>
        </div>

        <p className="text-center drop-shadow-[2px_2px_4px_black] text-gray-600 text-xs sm:text-sm mt-4 sm:mt-5 px-4">
          Thank you for shopping with <span className="text-indigo-400 font-semibold">CarShop</span> · Ref: <span className="font-mono text-gray-500">#{ref}</span>
        </p>
      </div>
    </div>
  );
}
