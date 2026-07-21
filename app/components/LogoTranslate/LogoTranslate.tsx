"use client";

import { useState } from "react";
import { HiArrowLeft, HiTranslate, HiSearch, HiCheck, HiGlobeAlt, HiCode, HiMenu, HiX, HiDuplicate } from "react-icons/hi";

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

const kh: Record<string, any> = {
  nav: {
    home: "ទំព័រដើម", shop: "ហាងទំនិញ", about: "អំពីយើង", contact: "ទំនាក់ទំនង",
    services: "សេវាកម្ម", buyNow: "ទិញឥឡូវនេះ", signIn: "ចូលគណនី",
    brand: "ខារសប (CarShop)", tagline: "យានយន្តលំដាប់ខ្ពស់",
  },
  login: {
    title: "សូមស្វាគមន៍ការវិលត្រឡប់មកវិញ", subtitle: "ចូលទៅកាន់ CarShop",
    username: "ឈ្មោះអ្នកប្រើប្រាស់", password: "ពាក្យសម្ងាត់",
    userPh: "បញ្ចូលឈ្មោះអ្នកប្រើប្រាស់របស់អ្នក", passPh: "បញ្ចូលពាក្យសម្ងាត់របស់អ្នក",
    forgot: "ភ្លេចពាក្យសម្ងាត់?", signIn: "ចូលគណនី →",
    signingIn: "កំពុងចូល...", noAccount: "មិនទាន់មានគណនីមែនទេ?",
    create: "បង្កើតគណនី", powered: "ឧបត្ថម្ភដោយ CarShop",
    errorEmpty: "សូមបំពេញគ្រប់ទិន្នន័យទាំងអស់។", errorWrong: "ពាក្យសម្ងាត់មិនត្រឹមត្រូវ។",
  },
  payment: {
    title: "ទូទាត់ប្រាក់មានសុវត្ថិភាព", subtitle: "ការទូទាត់ត្រូវបានអ៊ិនគ្រីបកម្រិត 256-bit",
    creditDebit: "កាតឥណទាន / ឥណពន្ធ", cardDetails: "ព័ត៌មានលម្អិតកាត",
    firstName: "នាមខ្លួន", lastName: "នាមត្រកូល",
    cardNumber: "លេខកាត", expiry: "កាលបរិច្ឆេទផុតកំណត់",
    cvc: "លេខកូដសុវត្ថិភាព", remaining: "ប្រអប់ដែលត្រូវបំពេញបន្ថែម",
    payNow: "ទូទាត់ឥឡូវនេះ", processing: "កំពុងដំណើរការ...",
    ssl: "សុវត្ថិភាព SSL", verified: "បានផ្ទៀងផ្ទាត់", allCards: "កាតទាំងអស់", back: "ថយក្រោយ",
  },
  qr: {
    scan: "ស្កេន QR", subtitle: "ស្កេនដើម្បីបញ្ជាក់ការទូទាត់របស់អ្នក",
    viewDetail: "មើលព័ត៌មានលម្អិត", backShop: "ត្រឡប់ទៅហាងវិញ",
  },
  detail: {
    title: "ព័ត៌មានលម្អិតនៃការបញ្ជាទិញ", subtitle: "ការបញ្ជាក់ការទិញ",
    success: "ការទូទាត់ទទួលបានជោគជ័យ", confirmed: "ការបញ្ជាទិញរបស់អ្នកត្រូវបានបញ្ជាក់ហើយ",
    fullName: "ឈ្មោះពេញ", cardNumber: "លេខកាត", expiry: "ថ្ងៃផុតកំណត់",
    cvc: "លេខកូដសុវត្ថិភាព", method: "វិធីសាស្ត្រទូទាត់", reference: "លេខយោង",
    date: "កាលបរិច្ឆេទ", delivery: "យានយន្តរបស់អ្នកនឹងត្រូវដឹកជញ្ជូនក្នុងរយៈពេល ៣ ដល់ ៥ ថ្ងៃការងារ។",
    backShop: "← ត្រឡប់ទៅហាងវិញ", thankyou: "អរគុណសម្រាប់ការទិញទំនិញ",
  },
  browse: {
    title: "ស្វែងរកទាំងអស់", items: "មុខទំនិញ", search: "ស្វែងរកអ្វីក៏បាន...",
    minPrice: "តម្លៃអប្បបរមា $", maxPrice: "តម្លៃអតិបរមា $", clear: "សម្អាត", sort: "តម្រៀប",
    priceUp: "តម្លៃ ↑", priceDown: "តម្លៃ ↓", topRated: "⭐ វាយតម្លៃខ្ពស់បំផុត",
    mostReview: "💬 មតិយោបល់ច្រើនជាងគេ", noItems: "រកមិនឃើញទំនិញទេ",
    clearAll: "សម្អាតតម្រងទាំងអស់", buyNow: "ទិញឥឡូវនេះ", save: "🤍", saved: "❤️",
    categories: {
      All: "ទាំងអស់", Car: "រថយន្ត", Motorbike: "ទោចក្រយានយន្ត", Truck: "រថយន្តដឹកទំនិញ",
      Bicycle: "កង់", Drink: "ភេសជ្ជៈ", Fruit: "ផ្លែឈើ",
      Sitting: "កៅអីអង្គុយ", Accessories: "គ្រឿងបន្លាស់និងសម្ភារៈ",
    },
  },
  home: {
    badge: "ស្វាគមន៍មកកាន់ CarShop", headline: "បើកបររថយន្តក្នុងក្តីស្រមៃរបស់អ្នក",
    sub: "ស្វែងយល់ពីរថយន្តលំដាប់ខ្ពស់និងរថយន្តស្ព័រ។ តម្លៃសមរម្យ ទាន់សម័យ និងត្រៀមរួចជាស្រេច។",
    browse: "ស្វែងរក 🚗", cars: "រថយន្តមានក្នុងស្តុក", buyers: "អតិជនរីករាយ",
    checkout: "ទូទាត់មានសុវត្ថិភាព", premium: "ជម្រើសពិសេស",
    secure: "ទូទាត់មានសុវត្ថិភាព ១០០%", delivery: "ដឹកជញ្ជូនរហ័ស",
    premDesc: "រថយន្តលំដាប់ខ្ពស់ដែលបានជ្រើសរើសយ៉ាងពិសេសពីម៉ាកល្បីៗ។",
    secDesc: "ការទូទាត់មានសុវត្ថិភាពជាមួយប្រព័ន្ធអ៊ិនគ្រីប។",
    delDesc: "រថយន្តក្នុងក្តីស្រមៃរបស់អ្នកនឹងត្រូវបានដឹកជញ្ជូនដល់មុខផ្ទះ។",
  },
  about: {
    badge: "អំពីពួកយើង", title: "ពួកយើងជានរណា",
    subtitle: "CarShop ត្រូវបានបង្កើតឡើងដោយសារក្តីស្រឡាញ់ចំពោះយានយន្តលំដាប់ខ្ពស់។",
    founded: "ឆ្នាំបង្កើត", vehicles: "យានយន្ត", customers: "អតិថិជនពេញចិត្ត", team: "ក្រុមការងាររបស់យើង",
  },
  contact: {
    badge: "ទំនាក់ទំនង", title: "ទាក់ទងមកយើង", sub: "ពួកយើងរីករាយក្នុងការស្តាប់មតិយោបល់ពីអ្នក!",
    name: "ឈ្មោះរបស់អ្នក", email: "អ៊ីមែល", message: "សារ",
    namePh: "សុខ សុភា", emailPh: "sok@example.com", msgPh: "សរសេរសាររបស់អ្នក...",
    send: "ផ្ញើសារ →", sent: "✅ បានផ្ញើសាររួចរាល់!", reply: "យើងនឹងឆ្លើយតបក្នុងរយៈពេល ២៤ ម៉ោង។",
  },
  services: {
    badge: "សេវាកម្មរបស់យើង", title: "អ្វីដែលយើងផ្តល់ជូន",
    subtitle: "ចាប់ពីការទិញរហូតដល់សេវាកម្មក្រោយពេលលក់ — យើងផ្តល់ជូនអ្នកនូវភាពពេញលេញ។",
    sales: "លក់យានយន្ត", delivery: "ដឹកជញ្ជូនដល់ផ្ទះ", warranty: "ការធានា និងការពារ",
    payment: "ការបង់ប្រាក់បត់បែន", maintain: "សេវាថែទាំ", vip: "សមាជិកភាព VIP",
  },
};

const sections = [
  { key: "nav", label: "Navigation", khLabel: "ការរុករក", icon: "🧭" },
  { key: "login", label: "Login", khLabel: "ចូលគណនី", icon: "🔐" },
  { key: "payment", label: "Payment", khLabel: "ការទូទាត់", icon: "💳" },
  { key: "qr", label: "QR Code", khLabel: "កូដ QR", icon: "📱" },
  { key: "detail", label: "Detail", khLabel: "ព័ត៌មានលម្អិត", icon: "📋" },
  { key: "browse", label: "Browse", khLabel: "ស្វែងរក", icon: "🔍" },
  { key: "home", label: "Home", khLabel: "ទំព័រដើម", icon: "🏠" },
  { key: "about", label: "About", khLabel: "អំពីយើង", icon: "👥" },
  { key: "contact", label: "Contact", khLabel: "ទំនាក់ទំនង", icon: "📞" },
  { key: "services", label: "Services", khLabel: "សេវាកម្ម", icon: "⚙️" },
];

export default function LogoTranslate({ onBack }: Props) {
  const [lang, setLang] = useState<Lang | null>(null);
  const [active, setActive] = useState("payment");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const data = lang === "khmer" ? kh : en;
  const section = (data as Record<string, unknown>)[active] as Record<string, unknown>;

  const handleCopy = (text: string, identifier: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(identifier);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const renderValue = (val: unknown, parentKey = ""): React.ReactNode => {
    if (typeof val === "string") {
      return (
        <div className="flex flex-col gap-3">
          <div className="bg-white/90 backdrop-blur-md border border-slate-200/90 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm hover:border-indigo-400/60 hover:shadow-md transition-all">
            <span className={`text-base font-semibold tracking-wide break-words ${lang === "khmer" ? "text-indigo-950 font-sans leading-relaxed" : "text-slate-900"}`}>
              {val}
            </span>
            <button
              onClick={() => handleCopy(val, parentKey)}
              className="inline-flex items-center justify-center gap-1.5 self-start sm:self-auto text-xs font-bold bg-slate-50 hover:bg-indigo-50 text-slate-700 hover:text-indigo-900 border border-slate-200 hover:border-indigo-300 px-4 py-2 rounded-xl transition-all shadow-2xs shrink-0 active:scale-95"
            >
              {copiedKey === parentKey ? <HiCheck className="text-emerald-600 text-sm" /> : <HiDuplicate className="text-slate-400 text-sm" />}
              {copiedKey === parentKey ? "Copied Successfully" : "Copy text"}
            </button>
          </div>
        </div>
      );
    }
    if (typeof val === "object" && val !== null) {
      return (
        <div className="pl-4 border-l-2 border-indigo-500/30 flex flex-col gap-3 mt-3">
          {Object.entries(val as Record<string, unknown>).map(([k, v]) => {
            const fullKeyPath = `${parentKey}.${k}`;
            return (
              <div key={k} className="bg-white/70 backdrop-blur-sm hover:bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs transition-all">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-slate-500 font-bold">.{k}</span>
                  <span className="text-[10px] bg-indigo-50 text-indigo-800 px-2.5 py-0.5 rounded-full font-mono border border-indigo-200/60 font-bold">Nested key</span>
                </div>
                {renderValue(v, fullKeyPath)}
              </div>
            );
          })}
        </div>
      );
    }
    return null;
  };

  // Language Picker Screen with White CRT Curved Grid Background
  if (!lang) {
    return (
      <div className="min-h-screen w-full bg-white text-slate-900 flex items-center justify-center p-4 relative overflow-hidden selection:bg-indigo-500 selection:text-white">
        
        {/* White CRT Curved Grid Background matching provided style */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden bg-white">
          {/* Curved Grid Lines (Horizontal and Vertical) */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, rgba(99, 102, 241, 0.18) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(99, 102, 241, 0.18) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            transform: 'perspective(600px) rotateX(15deg) scale(1.2)',
            transformOrigin: 'center center'
          }} />
          
          {/* Glowing intersections & bloom glow effect */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08)_0%,transparent_70%)] pointer-events-none" />

          {/* CRT Barrel Distortion Curved Vignette Border Overlay */}
          <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(99,102,241,0.15)] pointer-events-none" />
        </div>

        {onBack && (
          <button onClick={onBack} className="absolute top-6 left-6 h-11 w-11 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-800 transition-all z-10 shadow-md">
            <HiArrowLeft className="text-lg" />
          </button>
        )}

        <div className="relative z-10 w-full max-w-xl text-center px-4 py-8">
          <div className="flex justify-center mb-6">
            <div className="h-20 w-20 rounded-3xl bg-gradient-to-tr from-indigo-600 to-indigo-700 flex items-center justify-center shadow-xl shadow-indigo-600/20 text-white">
              <HiTranslate className="text-4xl" />
            </div>
          </div>
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-900 text-xs font-black tracking-[0.2em] uppercase mb-4 shadow-2xs">
            <HiGlobeAlt className="text-indigo-600 text-sm" /> Professional Localization Suite
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mb-3">ជ្រើសរើសភាសា / Select Language</h1>
          <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto mb-10 leading-relaxed font-medium">
            Select your target localization workspace to inspect, copy, and manage dictionary components cleanly.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              onClick={() => setLang("khmer")}
              className="group relative bg-white/90 backdrop-blur-md hover:bg-indigo-50/50 border border-slate-200/90 hover:border-indigo-400 rounded-3xl p-6 flex flex-col items-center gap-3.5 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-indigo-500/10 text-center shadow-sm"
            >
              <div className="text-5xl drop-shadow-sm">🇰🇭</div>
              <div>
                <p className="text-slate-900 font-black text-lg group-hover:text-indigo-600 transition-colors">ខ្មែរ (Khmer)</p>
                <p className="text-slate-500 text-xs mt-0.5 font-medium">ភាសាខ្មែរផ្លូវការ</p>
              </div>
            </button>

            <button
              onClick={() => setLang("english")}
              className="group relative bg-white/90 backdrop-blur-md hover:bg-indigo-50/50 border border-slate-200/90 hover:border-indigo-400 rounded-3xl p-6 flex flex-col items-center gap-3.5 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-indigo-500/10 text-center shadow-sm"
            >
              <div className="text-5xl drop-shadow-sm">🇺🇸</div>
              <div>
                <p className="text-slate-900 font-black text-lg group-hover:text-indigo-600 transition-colors">English</p>
                <p className="text-slate-500 text-xs mt-0.5 font-medium">Default System Locale</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }

  const filteredEntries = section ? Object.entries(section).filter(([key, val]) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    if (key.toLowerCase().includes(q)) return true;
    if (typeof val === "string" && val.toLowerCase().includes(q)) return true;
    if (typeof val === "object" && val !== null) {
      return JSON.stringify(val).toLowerCase().includes(q);
    }
    return false;
  }) : [];

  return (
    <div className="min-h-screen w-full bg-white flex flex-col text-slate-900 relative selection:bg-indigo-500 selection:text-white">
      
      {/* Background White CRT Curved Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden bg-white fixed">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(99, 102, 241, 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(99, 102, 241, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          transform: 'perspective(800px) rotateX(10deg) scale(1.1)',
          transformOrigin: 'center center'
        }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05)_0%,transparent_75%)] pointer-events-none" />
      </div>

      {/* Professional Top Navigation Bar */}
      <header className={`px-4 sm:px-6 py-4 flex items-center justify-between border-b shadow-sm sticky top-0 z-30 backdrop-blur-xl ${lang === "khmer" ? "bg-indigo-950/95 border-indigo-900 text-white" : "bg-slate-900/95 border-slate-950 text-white"}`}>
        <div className="flex items-center gap-3 min-w-0">
          <button onClick={() => setLang(null)} className="h-10 w-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all shrink-0">
            <HiArrowLeft className="text-lg" />
          </button>
          
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden h-10 w-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all shrink-0"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <HiX className="text-xl" /> : <HiMenu className="text-xl" />}
          </button>

          <div className="flex items-center gap-2.5 min-w-0">
            <span className="text-2xl shrink-0">{lang === "khmer" ? "🇰🇭" : "🇺🇸"}</span>
            <div className="min-w-0">
              <h1 className="font-black text-xs sm:text-sm tracking-wide truncate">
                {lang === "khmer" ? "ប្រព័ន្ធគ្រប់គ្រងការបកប្រែវចនានុក្រម" : "Professional Translation Workspace"}
              </h1>
              <p className="text-white/60 text-[11px] font-mono truncate">Section: <span className="font-bold text-white uppercase">{active}</span> ({Object.keys(section || {}).length} keys)</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <div className="hidden lg:flex items-center bg-white/10 rounded-xl px-3.5 py-2 border border-white/10">
            <HiSearch className="text-white/50 mr-2 text-sm" />
            <input 
              type="text" 
              placeholder="Search translation keys..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border-none text-xs text-white placeholder-white/40 focus:outline-none w-52"
            />
          </div>
          {onBack && (
            <button onClick={onBack} className="h-10 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all shadow-sm">
              ← <span className="hidden sm:inline">Exit to</span> App
            </button>
          )}
        </div>
      </header>

      {/* Mobile Search Row */}
      <div className="lg:hidden bg-slate-900 px-4 py-3 border-b border-slate-800 relative z-20">
        <div className="flex items-center w-full bg-white/10 rounded-xl px-3.5 py-2.5 border border-white/10">
          <HiSearch className="text-white/50 mr-2 text-sm shrink-0" />
          <input 
            type="text" 
            placeholder="Search translation keys..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent border-none text-xs text-white placeholder-white/40 focus:outline-none w-full"
          />
        </div>
      </div>

      {/* Main Workspace Layout */}
      <div className="flex flex-1 relative z-10">

        {/* Mobile Sidebar Overlay */}
        {mobileMenuOpen && (
          <div 
            onClick={() => setMobileMenuOpen(false)} 
            className="fixed inset-0 bg-slate-950/60 z-20 md:hidden backdrop-blur-xs" 
          />
        )}

        {/* Sidebar Sections */}
        <aside className={`
          absolute md:relative z-30 md:z-0 top-0 bottom-0 left-0 w-72 shrink-0 bg-white/95 backdrop-blur-md border-r border-slate-200/90 flex flex-col overflow-y-auto transition-transform duration-300 ease-in-out shadow-lg md:shadow-none
          ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}>
          <div className="p-4 border-b border-slate-100 flex items-center justify-between">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-slate-400">Schema Sections</span>
            <button onClick={() => setMobileMenuOpen(false)} className="md:hidden text-slate-400 hover:text-slate-600">
              <HiX size={18} />
            </button>
          </div>
          <div className="p-2.5 space-y-1">
            {sections.map((s) => {
              const isActive = active === s.key;
              return (
                <button 
                  key={s.key} 
                  onClick={() => {
                    setActive(s.key);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-xs font-bold transition-all ${
                    isActive
                      ? "bg-indigo-50 text-indigo-900 shadow-2xs border border-indigo-200 font-black"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <span className="text-lg shrink-0">{s.icon}</span>
                    <span className="tracking-tight truncate">{lang === "khmer" ? s.khLabel : s.label}</span>
                  </div>
                  <span className={`text-[10px] font-mono px-2.5 py-1 rounded-full shrink-0 ${isActive ? "bg-indigo-200/80 text-indigo-950" : "bg-slate-100 text-slate-500"}`}>
                    {s.key}
                  </span>
                </button>
              );
            })}
          </div>
        </aside>

        {/* Content Panel */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-10">
          <div className="max-w-4xl mx-auto">
            
            {/* Section Banner Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white/90 backdrop-blur-md p-6 sm:p-7 rounded-3xl border border-slate-200/90 shadow-sm mb-6">
              <div className="min-w-0">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-1.5 font-bold">
                  <HiCode className="text-indigo-600" /> {lang === "khmer" ? "kh" : "en"}.{active}
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-950 uppercase tracking-tight truncate">
                  {active} Section Dictionary
                </h2>
              </div>
              <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold shrink-0 shadow-2xs">
                {filteredEntries.length} items configured
              </div>
            </div>

            {/* Translation Item Cards */}
            <div className="grid grid-cols-1 gap-4">
              {filteredEntries.length === 0 ? (
                <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center shadow-sm">
                  <p className="text-slate-400 text-sm font-medium">No matching dictionary entries found.</p>
                </div>
              ) : (
                filteredEntries.map(([key, val]) => {
                  const fullKeyPath = `${active}.${key}`;
                  return (
                    <div key={key} className="bg-white/90 backdrop-blur-md rounded-3xl border border-slate-200/90 shadow-sm p-5 sm:p-6 hover:shadow-md transition-all">
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono font-bold bg-slate-100 text-slate-700 px-3 py-1 rounded-xl border border-slate-200/80">
                            .{key}
                          </span>
                          <span className="text-[10px] text-slate-400 font-mono">Key reference ID</span>
                        </div>
                        <div className="mt-1">
                          {renderValue(val, fullKeyPath)}
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

          </div>
        </main>

      </div>
    </div>
  );
}