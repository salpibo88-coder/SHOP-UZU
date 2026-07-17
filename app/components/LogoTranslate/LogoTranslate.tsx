"use client";

import { useState } from "react";
import { HiArrowLeft, HiTranslate } from "react-icons/hi";
// If you uncomment this later, the code will seamlessly swap out the fallback data
// import { kh } from "../../translate/khmer";

interface Props {
  onBack?: () => void;
}

type Lang = "khmer" | "english";

const en = {
  nav: {
    home: "Home", shop: "Shop", about: "About", contact: "Contact",
    services: "Services", buyNow: "Buy Now", signIn: "Sign In",
    brand: "CarShop", tagline: "Premium Vehicles",
  },
  login: {
    title: "Welcome Back", subtitle: "Sign in to CarShop",
    username: "Username", password: "Password",
    userPh: "Enter your username", passPh: "Enter your password",
    forgot: "Forgot password?", signIn: "Sign In →",
    signingIn: "Signing in...", noAccount: "Don't have an account?",
    create: "Create one", powered: "Powered by CarShop",
    errorEmpty: "Please fill in all fields.", errorWrong: "Incorrect password.",
  },
  payment: {
    title: "Secure Checkout", subtitle: "256-bit encrypted payment",
    creditDebit: "Credit / Debit", cardDetails: "Card Details",
    firstName: "First Name", lastName: "Last Name",
    cardNumber: "Card Number", expiry: "Expiration Date",
    cvc: "Security Code", remaining: "field(s) remaining",
    payNow: "Pay Now", processing: "Processing...",
    ssl: "SSL Secure", verified: "Verified", allCards: "All Cards", back: "Back",
  },
  qr: {
    scan: "SCAN QR", subtitle: "Scan to confirm your payment",
    viewDetail: "View Detail", backShop: "Back to Shop",
  },
  detail: {
    title: "Order Details", subtitle: "Purchase confirmation",
    success: "Payment Successful", confirmed: "Your order has been confirmed",
    fullName: "Full Name", cardNumber: "Card Number", expiry: "Expiry Date",
    cvc: "Security Code", method: "Payment Method", reference: "Reference",
    date: "Date", delivery: "Your vehicle will be delivered within 3–5 business days.",
    backShop: "← Back to Shop", thankyou: "Thank you for shopping",
  },
  browse: {
    title: "Browse All", items: "items", search: "Search anything...",
    minPrice: "Min $", maxPrice: "Max $", clear: "Clear", sort: "Sort",
    priceUp: "Price ↑", priceDown: "Price ↓", topRated: "⭐ Top Rated",
    mostReview: "💬 Most Reviews", noItems: "No items found",
    clearAll: "Clear Filters", buyNow: "Buy Now", save: "🤍", saved: "❤️",
    categories: {
      All: "All", Car: "Car", Motorbike: "Motorbike", Truck: "Truck",
      Bicycle: "Bicycle", Drink: "Drink", Fruit: "Fruit",
      Sitting: "Sitting", Accessories: "Accessories",
    },
  },
  home: {
    badge: "Welcome to CarShop", headline: "Drive Your Dream Car",
    sub: "Explore luxury and sport vehicles. Affordable, stylish, and ready to go.",
    browse: "Browse 🚗", cars: "Cars Available", buyers: "Happy Buyers",
    checkout: "Secure Checkout", premium: "Premium Selection",
    secure: "Secure Payment", delivery: "Fast Delivery",
    premDesc: "Hand-picked luxury vehicles from top brands.",
    secDesc: "100% safe checkout with encrypted processing.",
    delDesc: "Your dream car delivered to your door.",
  },
  about: {
    badge: "About Us", title: "Who We Are",
    subtitle: "CarShop was founded with a passion for premium vehicles.",
    founded: "Founded", vehicles: "Vehicles", customers: "Happy Customers", team: "Our Team",
  },
  contact: {
    badge: "Contact", title: "Get In Touch", sub: "We'd love to hear from you!",
    name: "Your Name", email: "Email Address", message: "Message",
    namePh: "John Doe", emailPh: "john@example.com", msgPh: "Write your message...",
    send: "Send Message →", sent: "✅ Message Sent!", reply: "We'll reply within 24 hours.",
  },
  services: {
    badge: "Our Services", title: "What We Offer",
    subtitle: "From buying to after-sales support — we've got you covered.",
    sales: "Vehicle Sales", delivery: "Home Delivery", warranty: "Warranty & Protection",
    payment: "Flexible Payment", maintain: "Maintenance Service", vip: "VIP Membership",
  },
};

// Fallback Khmer translation shell to prevent crashes before you complete your khmer.ts file
const khMock = JSON.parse(JSON.stringify(en)); 

const sections = [
  { key: "nav",      label: "Navigation",  icon: "🧭" },
  { key: "login",    label: "Login",        icon: "🔐" },
  { key: "payment",  label: "Payment",      icon: "💳" },
  { key: "qr",       label: "QR Code",      icon: "📱" },
  { key: "detail",   label: "Detail",       icon: "📋" },
  { key: "browse",   label: "Browse",       icon: "🔍" },
  { key: "home",     label: "Home",         icon: "🏠" },
  { key: "about",    label: "About",        icon: "👥" },
  { key: "contact",  label: "Contact",      icon: "📞" },
  { key: "services", label: "Services",     icon: "⚙️" },
];

export default function LogoTranslate({ onBack }: Props) {
  const [lang, setLang] = useState<Lang | null>(null);
  const [active, setActive] = useState("nav");

  // Translation viewer configuration
  // Uses the fallback shell until translate/khmer.ts is added and the import above is uncommented
  const khmerData = khMock;
  const data = lang === "khmer" ? khmerData : en;
  const section = (data as Record<string, unknown>)[active] as Record<string, unknown>;

  const renderValue = (val: unknown): React.ReactNode => {
    if (typeof val === "string") {
      return <span className={`font-medium ${lang === "khmer" ? "text-indigo-600" : "text-pink-600"}`}>{val}</span>;
    }
    if (typeof val === "object" && val !== null) {
      return (
        <div className="pl-4 border-l-2 border-gray-100 flex flex-col gap-1 mt-1">
          {Object.entries(val as Record<string, unknown>).map(([k, v]) => (
            <div key={k} className="flex gap-2 items-center">
              <span className="text-gray-400 text-xs w-24 shrink-0 font-mono">{k}</span>
              <span className={`text-sm font-medium ${lang === "khmer" ? "text-indigo-600" : "text-pink-600"}`}>{String(v)}</span>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  // Language picker screen
  if (!lang) {
    return (
      <div className="min-h-screen bg-linear-to-br from-gray-900 via-indigo-950 to-gray-900 flex items-center justify-center px-4">
        <div className="absolute top-10 left-1/4 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-pink-600/15 rounded-full blur-3xl pointer-events-none" />

        {onBack && (
          <button onClick={onBack} className="absolute top-4 left-4 h-9 w-9 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all z-10">
            <HiArrowLeft className="text-lg" />
          </button>
        )}

        <div className="relative z-10 w-full max-w-md text-center">
          <div className="flex justify-center mb-6">
            <div className="h-16 w-16 rounded-full bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-500/40">
              <HiTranslate className="text-white text-3xl" />
            </div>
          </div>
          <h1 className="text-3xl font-extrabold text-white mb-2">ជ្រើសភាសា</h1>
          <p className="text-gray-400 text-sm mb-10">Select Language / ជ្រើសរើសភាសា</p>

          <div className="grid grid-cols-2 gap-4">
            {/* Khmer */}
            <button
              onClick={() => setLang("khmer")}
              className="group bg-white/5 hover:bg-indigo-600/30 border border-white/10 hover:border-indigo-500/60 rounded-2xl p-6 flex flex-col items-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/20"
            >
              <span className="text-5xl">🇰🇭</span>
              <div>
                <p className="text-white font-bold text-lg">ខ្មែរ</p>
                <p className="text-gray-400 text-xs">Khmer</p>
              </div>
            </button>

            {/* English */}
            <button
              onClick={() => setLang("english")}
              className="group bg-white/5 hover:bg-pink-600/30 border border-white/10 hover:border-pink-500/60 rounded-2xl p-6 flex flex-col items-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-pink-500/20"
            >
              <span className="text-5xl">🇺🇸</span>
              <div>
                <p className="text-white font-bold text-lg">English</p>
                <p className="text-gray-400 text-xs">អង់គ្លេស</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {/* Header */}
      <div className={`px-4 py-3 flex items-center gap-3 ${lang === "khmer" ? "bg-indigo-700" : "bg-pink-600"}`}>
        <button onClick={() => setLang(null)} className="h-8 w-8 rounded-lg bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-all">
          <HiArrowLeft className="text-base" />
        </button>
        <span className="text-2xl">{lang === "khmer" ? "🇰🇭" : "🇺🇸"}</span>
        <div>
          <h1 className="text-white font-extrabold text-base">
            {lang === "khmer" ? "ការបកប្រែភាសាខ្មែរ" : "English Translation"}
          </h1>
          <p className="text-white/70 text-xs">{active} · {Object.keys(section || {}).length} keys</p>
        </div>
        {onBack && (
          <button onClick={onBack} className="ml-auto h-8 px-3 rounded-lg bg-white/20 hover:bg-white/30 text-white text-xs font-bold transition-all">
            ← App
          </button>
        )}
      </div>

      <div className="flex flex-1 overflow-hidden">

        {/* Sidebar */}
        <div className="w-40 shrink-0 bg-white border-r border-gray-200 flex flex-col overflow-y-auto">
          {sections.map((s) => (
            <button key={s.key} onClick={() => setActive(s.key)}
              className={`flex items-center gap-2 px-3 py-3 text-xs font-bold text-left border-b border-gray-100 transition-all ${
                active === s.key
                  ? lang === "khmer"
                    ? "bg-indigo-50 text-indigo-700 border-l-4 border-l-indigo-500"
                    : "bg-pink-50 text-pink-700 border-l-4 border-l-pink-500"
                  : "text-gray-600 hover:bg-gray-50"
              }`}>
              <span>{s.icon}</span>
              <span>{s.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="max-w-xl">
            <p className="text-gray-400 text-xs mb-4 font-mono">
              {lang === "khmer" ? "kh" : "en"}.{active}
            </p>
            <div className="flex flex-col gap-3">
              {section && Object.entries(section).map(([key, val]) => (
                <div key={key} className="bg-white rounded-xl border border-gray-100 shadow-sm p-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <span className="text-xs font-mono text-gray-400 block mb-1">.{key}</span>
                      {renderValue(val)}
                    </div>
                    <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded font-mono shrink-0">{key}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}