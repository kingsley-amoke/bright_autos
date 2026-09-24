"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, Mail, Eye, EyeOff, KeyRound, AlertCircle } from "lucide-react";
import { createClient } from "@/app/utils/supabase/client";

export default function LoginPage() {
  const router = useRouter();
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (authError) {
      setError(authError.message || "Invalid credentials. Please try again.");
      setLoading(false);
    } else {
      router.replace("/admin/upload");
      router.refresh();
    }
  };

  return (
    <main className=" min-h-screen flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-md rounded-2xl border border-slate-800 shadow-xl p-8 relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl pointer-events-none"></div>

        <div className="text-center mb-8">
          <div className="inline-flex p-3  rounded-xl mb-4">
            <KeyRound size={28} />
          </div>
          <h1 className="text-2xl font-bold tracking-tight">Admin Login</h1>
          <p className="text-xs text-gray-400 mt-1">
            Authorized portal management access only
          </p>
        </div>

        {error && (
          <div className="mb-6 flex gap-3 bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl text-xs items-start">
            <AlertCircle size={16} className="shrink-0 mt-0.5" />
            <p className="leading-normal">{error}</p>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
              Email Address
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <Mail size={18} />
              </span>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@dealership.com"
                className="w-full  border border-slate-700/60 rounded-xl py-3 pl-12 pr-4 text-sm text-white placeholder-gray-500 outline-none focus:border-[#e06733] focus:ring-1 focus:ring-[#e06733] transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
              Password
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <Lock size={18} />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full border border-slate-700/60 rounded-xl py-3 pl-12 pr-12 text-sm text-white placeholder-gray-500 outline-none focus:border-[#e06733] focus:ring-1 focus:ring-[#e06733] transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 bg-[#e06733] hover:bg-[#c95627] text-white font-semibold py-3 rounded-xl transition-all text-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              "Log In"
            )}
          </button>
        </form>

        <p className="text-[10px] text-gray-500 text-center mt-8">
          IP monitoring is active. Unauthorized connection attempts will be
          logged.
        </p>
      </div>
    </main>
  );
}
