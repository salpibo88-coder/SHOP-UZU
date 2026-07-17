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
    { icon: <FiUser className="text-indigo-400" />, label: "Full Name", value: data ? `${data.firstName} ${data.lastName}` : "N/A", mono: false },
    { icon: <BsCreditCard className="text-yellow-400" />, label: "Card Number", value: maskedCard, mono: true },
    { icon: <BsCalendar className="text-cyan-400" />, label: "Expiry Date", value: data?.exp || "N/A", mono: false },
    { icon: <FiLock className="text-pink-400" />, label: "Security Code", value: "***", mono: true },
    { icon: <MdDirectionsCar className="text-orange-400" />, label: "Payment Method", value: data?.method === "paypal" ? "PayPal" : "Credit / Debit Card", mono: false },
    { icon: <BsPerson className="text-indigo-400" />, label: "Reference", value: `#${ref}`, mono: true },
    { icon: <BsCalendar className="text-green-400" />, label: "Date", value: new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" }), mono: false },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-950 via-indigo-950 to-gray-950 flex items-center justify-center px-4 py-12 relative overflow-hidden">

      {/* Glow blobs */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-pink-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className={`relative z-10 w-full max-w-lg transition-all duration-700 ease-out ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>

        {/* Card */}
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden">

          {/* Top banner */}
          <div className="bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 px-8 py-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button onClick={onBack} className="h-9 w-9 rounded-xl bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-all">
                <HiArrowLeft className="text-lg" />
              </button>
              <div>
                <h1 className="text-xl font-extrabold text-white tracking-tight">Order Details</h1>
                <p className="text-white/70 text-xs mt-0.5">Purchase confirmation</p>
              </div>
            </div>
            <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
              <MdDirectionsCar className="text-white text-2xl" />
            </div>
          </div>

          <div className="p-8">

            {/* Success badge */}
            <div className="flex items-center gap-4 bg-green-500/10 border border-green-500/25 rounded-2xl px-5 py-4 mb-7">
              <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                <MdCheckCircle className="text-green-400 text-xl" />
              </div>
              <div className="flex-1">
                <p className="text-green-400 font-bold text-sm">Payment Successful</p>
                <p className="text-gray-500 text-xs mt-0.5">Your order has been confirmed and is being processed</p>
              </div>
              <BsShieldCheck className="text-green-400 text-xl shrink-0" />
            </div>

            {/* Rows */}
            <div className="space-y-2 mb-7">
              {rows.map((row, i) => (
                <div key={i} className="flex items-center justify-between px-4 py-3.5 bg-white/5 hover:bg-white/8 border border-white/8 rounded-xl transition-colors duration-200 group">
                  <div className="flex items-center gap-3 text-gray-400 text-sm">
                    <span className="text-base group-hover:scale-110 transition-transform duration-200">{row.icon}</span>
                    {row.label}
                  </div>
                  <span className={`text-white font-semibold text-sm ${row.mono ? "font-mono tracking-wider" : ""}`}>
                    {row.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Delivery note */}
            <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-2xl px-5 py-4 mb-7 flex gap-3">
              <span className="text-xl shrink-0">📦</span>
              <p className="text-indigo-300 text-sm leading-relaxed">
                Your vehicle will be delivered within <strong className="text-indigo-200">3–5 business days</strong>. A confirmation has been sent to your registered account.
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={onBack}
                className="flex-1 py-3.5 rounded-xl bg-indigo-600 hover:bg-pink-500 text-white font-bold text-sm transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2"
              >
                <HiArrowLeft className="text-base" />
                Back to Shop
              </button>
              <button
                onClick={() => window.print()}
                className="h-12 w-12 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                title="Print receipt"
              >
                <HiDownload className="text-lg" />
              </button>
            </div>

          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-600 text-xs mt-5">
          Thank you for shopping with <span className="text-indigo-400 font-semibold">CarShop</span> · Ref: <span className="font-mono text-gray-500">#{ref}</span>
        </p>
      </div>
    </div>
  );
}
