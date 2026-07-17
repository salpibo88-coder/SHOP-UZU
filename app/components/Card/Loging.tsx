"use client";

import { useState, useEffect } from "react";
import { MdDirectionsCar } from "react-icons/md";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { FiUser, FiLock } from "react-icons/fi";

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

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    // Generate particles only on client to avoid hydration mismatch
    setParticles(
      Array.from({ length: 12 }, () => ({
        width: Math.random() * 6 + 3,
        height: Math.random() * 6 + 3,
        top: Math.random() * 100,
        left: Math.random() * 100,
        delay: Math.random() * 3,
        duration: Math.random() * 3 + 2,
      }))
    );
    return () => clearTimeout(t);
  }, []);

  const handleLogin = () => {
    setError("");
    if (!username || !password) { setError("Please fill in all fields."); return; }
    if (password !== "12345") { setError("Incorrect password. Please try again."); return; }
    setLoading(true);
    setTimeout(() => onSuccess(), 900);
  };
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <iframe
              src="https://www.youtube.com/embed/r3d0XP1wHlI?autoplay=1&mute=1&loop=1&playlist=r3d0XP1wHlI&controls=0&modestbranding=1&rel=0&iv_load_policy=3"
              allow="autoplay; encrypted-media"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] min-w-full min-h-full h-[56.25vw]"
              style={{ border: "none", pointerEvents: "none" }}
              title="Background video"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-black/50 to-transparent" />
      </div>
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {particles.map((p, i) => (
          <div key={i} className="absolute rounded-full bg-indigo-400/20 animate-pulse"
            style={{ width: `${p.width}px`, height: `${p.height}px`, top: `${p.top}%`, left: `${p.left}%`, animationDelay: `${p.delay}s`, animationDuration: `${p.duration}s` }}
          />
        ))}
      </div>
      <div className={`relative z-10 w-full max-w-md mx-auto px-4 transition-all duration-700 ease-out ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="bg-white/5 backdrop-blur-2xl border border-white/15 rounded-3xl shadow-2xl shadow-black/50 p-4 sm:p-6 md:p-10">
          <div className="flex flex-col items-center mb-6 sm:mb-8 gap-3">
            <div className="relative">
              <div className="absolute inset-1 rounded-full bg-yellow-100 blur-lg scale-100" />
              <div className="relative h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-linear-to-br from-yellow-300 to-yellow-400 flex items-center justify-center shadow-lg shadow-indigo-500/50 border border-indigo-400/30">
                <MdDirectionsCar className="text-white text-2xl sm:text-3xl" />
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">Welcome Back</h1>
              <p className="text-gray-400 text-xs sm:text-sm mt-1">Sign in to <span className="text-indigo-400 font-semibold">CarShop</span></p>
            </div>
          </div>
          {error && (
            <div className="mb-5 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm text-center animate-pulse">⚠️ {error}</div>
          )}
          <div className="mb-4 sm:mb-5">
            <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-widest">Username</label>
            <div className="relative group">
              <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-indigo-400 text-lg transition-colors duration-200" />
              <input type="text" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-11 pr-4 py-3 sm:py-3.5 rounded-xl bg-white/8 border border-white/10 text-white placeholder-gray-600 text-base sm:text-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 transition-all duration-200" />
            </div>
          </div>
          <div className="mb-5 sm:mb-7">
            <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-widest">Password</label>
            <div className="relative group">
              <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-indigo-400 text-lg transition-colors duration-200" />
              <input type={showPassword ? "text" : "password"} placeholder="Enter your password" value={password}
                onChange={(e) => setPassword(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                className="w-full pl-11 pr-12 py-3 sm:py-3.5 rounded-xl bg-white/8 border border-white/10 text-white placeholder-gray-600 text-base sm:text-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 transition-all duration-200" />
              <button type="button" onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors duration-200" aria-label="Toggle password">
                {showPassword ? <HiEyeOff className="text-lg" /> : <HiEye className="text-lg" />}
              </button>
            </div>
            <div className="flex justify-end mt-2">
              <a href="#" className="text-xs text-indigo-400 hover:text-pink-400 transition-colors duration-200">Forgot password?</a>
            </div>
          </div>
          <button onClick={handleLogin} disabled={loading}
            className={`relative w-full py-3 sm:py-3.5 rounded-xl font-bold text-white text-sm tracking-wide overflow-hidden transition-all duration-300 shadow-lg ${loading ? "bg-indigo-500/50 cursor-not-allowed" : "bg-linear-to-r from-indigo-600 to-indigo-700 hover:from-pink-500 hover:to-pink-600 hover:scale-[1.02]"}`}>
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                </svg>
                Signing in...
              </span>
            ) : "Sign In →"}
          </button>
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-gray-600 text-xs">or</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>
          <p className="text-center text-sm text-gray-500">
            Don&apos;t have an account?{" "}
            <a href="#" className="text-indigo-400 hover:text-pink-400 font-semibold transition-colors duration-200">Create one</a>
          </p>
        </div>
        <p className="text-center text-gray-600 text-xs mt-5">Powered by <span className="text-indigo-400 font-semibold">CarShop</span> · Secure Login</p>
      </div>
    </div>
  );
}
