"use client";

import { useState, useEffect } from "react";
import { MdDirectionsCar } from "react-icons/md";
import { HiEye, HiEyeOff, HiX, HiCheckCircle } from "react-icons/hi";
import { FiUser, FiLock, FiMail } from "react-icons/fi";

interface Props {
  onSuccess: () => void;
}

interface Particle {
  width: number;
  height: number;
  top: number;
  left: number;
  delay: number;
  duration: number;
}

export default function Login({ onSuccess }: Props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  
  const [activeModal, setActiveModal] = useState<"forgot" | "signup" | null>(null);
  const [modalInput, setModalInput] = useState("");
  const [modalSuccess, setModalSuccess] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    setParticles(
      Array.from({ length: 12 }, () => ({
        width: Math.random() * 6 + 3,
        height: Math.random() * 6 + 3,
        top: Math.random() * 100,
        left: Math.random() * 100,
        delay: Math.random() * 4,
        duration: Math.random() * 4 + 3,
      }))
    );
    return () => clearTimeout(t);
  }, []);

  const handleLogin = (e?: React.FormEvent) => {
    e?.preventDefault();
    setError("");
    if (!username || !password) { setError("Please fill in all required fields."); return; }
    setLoading(true);
    setTimeout(() => onSuccess(), 1000);
  };

  const handleGoogleLogin = () => {
    setLoading(true);
    setTimeout(() => onSuccess(), 1000);
  };

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!modalInput) return;
    setModalSuccess(true);
    setTimeout(() => {
      setModalSuccess(false);
      setModalInput("");
      setActiveModal(null);
    }, 2000);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-slate-100 font-sans">
      
      {/* Background Soft Ambient Glow */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-300/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-pink-300/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {particles.map((p, i) => (
          <div key={i} className="absolute rounded-full bg-indigo-500/20 blur-[1px]"
            style={{ width: `${p.width}px`, height: `${p.height}px`, top: `${p.top}%`, left: `${p.left}%`, animationDuration: `${p.duration}s` }}
          />
        ))}
      </div>

      {/* Main Login Card - Clean White Style */}
      <div className={`relative z-10 w-full max-w-md mx-4 transition-all duration-700 ease-out ${mounted ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"}`}>
        <div className="bg-white/90 backdrop-blur-2xl border border-slate-200/80 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-6 sm:p-8 md:p-10 relative overflow-hidden group">
          
          {/* Top Gradient Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 via-yellow-500 to-yellow-400" />

          {/* Header Branding */}
          <div className="flex flex-col items-center mb-6 sm:mb-8 gap-3">
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-yellow-400 to-amber-500 blur-md opacity-40 animate-pulse" />
              <div className="relative h-14 w-14 sm:h-16 sm:w-16 rounded-2xl bg-gradient-to-br from-yellow-300 via-amber-400 to-yellow-500 flex items-center justify-center shadow-lg shadow-yellow-500/20 border border-white transform group-hover:scale-105 transition-transform duration-300">
                <MdDirectionsCar className="text-slate-900 text-2xl sm:text-3xl drop-shadow-sm" />
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Shop Uzu TR77</h1>
              <p className="text-slate-500 text-xs sm:text-sm mt-1">Sign in with your Google or Gmail account</p>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-5 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs sm:text-sm text-center font-medium">
              ⚠️ {error}
            </div>
          )}

          {/* Google / Gmail Quick Authentication Button with Official Multi-Color Google G SVG */}
          <button onClick={handleGoogleLogin} disabled={loading}
            className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 text-sm font-semibold transition-all shadow-sm group mb-6">
            <svg className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
              <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.13 0-5.78-2.11-6.73-4.96H1.2v3.15C3.18 21.34 7.22 24 12 24z"/>
              <path fill="#FBBC05" d="M5.27 14.24c-.25-.72-.38-1.49-.38-2.24s.13-1.52.38-2.24V6.6H1.2C.43 8.16 0 9.93 0 12s.43 3.84 1.2 5.4l4.07-3.16z"/>
              <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.22 0 3.18 2.66 1.2 6.6l4.07 3.16c.95-2.85 3.6-4.96 6.73-4.96z"/>
            </svg>
            Sign in with Google / Gmail
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-slate-200" />
            <span className="text-slate-400 text-[11px] uppercase tracking-wider">or sign in with email</span>
            <div className="flex-1 h-px bg-slate-200" />
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-[11px] font-bold text-slate-500 mb-1.5 uppercase tracking-widest">Gmail / Username</label>
              <div className="relative group/input">
                <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/input:text-indigo-600 text-base transition-colors" />
                <input 
                  type="text" 
                  placeholder="name@gmail.com" 
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 text-sm sm:text-base focus:outline-none focus:border-indigo-600 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 transition-all shadow-xs" 
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest">Password</label>
                <button type="button" onClick={() => setActiveModal("forgot")} className="text-xs text-indigo-600 hover:text-pink-600 transition-colors font-medium">Forgot?</button>
              </div>
              <div className="relative group/input">
                <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/input:text-indigo-600 text-base transition-colors" />
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-11 pr-12 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 text-sm sm:text-base focus:outline-none focus:border-indigo-600 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 transition-all shadow-xs" 
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors" aria-label="Toggle password">
                  {showPassword ? <HiEyeOff className="text-base" /> : <HiEye className="text-base" />}
                </button>
              </div>
            </div>

            <button type="submit" disabled={loading}
              className={`w-full mt-2 py-3.5 rounded-xl font-bold text-white text-sm tracking-wide overflow-hidden transition-all duration-300 shadow-md ${loading ? "bg-indigo-400 cursor-not-allowed" : "bg-gradient-to-r from-yellow-500 via-yellow-500 to-yellow-500 hover:from-yellow-500 hover:to-yellow-500 hover:scale-[1.01] active:scale-[0.99] shadow-indigo-600/25"}`}>
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  Authenticating...
                </span>
              ) : "Login"}
            </button>
          </form>

          {/* Footer Create Account Link */}
          <p className="text-center text-xs text-slate-500 mt-6">
            Don&apos;t have an account?{" "}
            <button onClick={() => setActiveModal("signup")} className="text-indigo-600 hover:text-pink-600 font-bold transition-colors underline underline-offset-4">Create one</button>
          </p>
        </div>
        <p className="text-center text-slate-400 text-[11px] mt-4 tracking-wide">Shop Uzu TR77 Secure Access Gateway · v2.5</p>
      </div>

      {/* Interactive Modal Overlay (Forgot Password / Sign Up) */}
      {activeModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white border border-slate-200 w-full max-w-sm rounded-3xl p-6 shadow-2xl relative">
            <button onClick={() => { setActiveModal(null); setModalSuccess(false); setModalInput(""); }}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1 rounded-full bg-slate-100">
              <HiX className="text-lg" />
            </button>

            {modalSuccess ? (
              <div className="py-8 text-center flex flex-col items-center gap-3">
                <HiCheckCircle className="text-emerald-500 text-5xl animate-bounce" />
                <h3 className="text-lg font-bold text-slate-900">Success!</h3>
                <p className="text-xs text-slate-500">
                  {activeModal === "forgot" ? "Password reset instructions sent to your email." : "Account created successfully! You can now sign in."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleModalSubmit} className="space-y-4 pt-2">
                <h3 className="text-lg font-bold text-slate-900">
                  {activeModal === "forgot" ? "Reset Password" : "Create Account"}
                </h3>
                <p className="text-xs text-slate-500">
                  {activeModal === "forgot" ? "Enter your Gmail address to receive recovery credentials." : "Enter your Gmail to join Shop Uzu TR77."}
                </p>
                <div className="relative">
                  <FiMail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input 
                    type="email" 
                    required
                    placeholder="name@gmail.com" 
                    value={modalInput} 
                    onChange={(e) => setModalInput(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-indigo-600"
                  />
                </div>
                <button type="submit" className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-md transition-all">
                  {activeModal === "forgot" ? "Send Reset Link" : "Register Now"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}