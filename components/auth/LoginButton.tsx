"use client";

import { useState } from "react";
import { auth } from "@/lib/firebase";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useAuth } from "@/hooks/useAuth";
import { motion } from "motion/react";
import { LogOut, User } from "lucide-react";
import { useRouter } from "next/navigation";

export function LoginButton() {
  const { user, loading } = useAuth();
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    setIsLoggingIn(true);
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      router.push("/portal");
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  if (loading) {
    return (
      <div className="w-12 h-12 rounded-full bg-stone-200 animate-pulse" />
    );
  }

  if (user) {
    return (
      <div className="flex items-center gap-4">
        <button
          onClick={() => router.push("/portal")}
          className="flex items-center gap-2 px-5 py-3 rounded-full bg-stone-100 text-stone-700 hover:bg-stone-200 transition-colors text-sm font-medium tracking-wide"
          suppressHydrationWarning
        >
          <User className="w-4 h-4" />
          <span>Sanctuary</span>
        </button>
        <button
          onClick={handleLogout}
          className="p-3 rounded-full text-stone-500 hover:text-stone-800 hover:bg-stone-100 transition-colors"
          aria-label="Secure Logout"
          suppressHydrationWarning
        >
          <LogOut className="w-4 h-4" />
        </button>
      </div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleLogin}
      disabled={isLoggingIn}
      className="flex items-center gap-3 px-6 py-3 rounded-full bg-[#3C4A3E] text-[#F9F7F3] hover:bg-[#2A342B] transition-colors shadow-sm disabled:opacity-70 text-sm font-medium tracking-wide touch-manipulation min-h-[48px]"
      suppressHydrationWarning
    >
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
      {isLoggingIn ? "Entering..." : "Patient Sanctuary"}
    </motion.button>
  );
}
