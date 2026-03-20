"use client";

import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { motion } from "motion/react";
import { Timeline } from "@/components/portal/Timeline";

export default function PortalDashboard() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/");
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F9F7F3]">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-[#8B9D8B] border-t-transparent rounded-full animate-spin"></div>
          <p className="text-[#5C6D5D] tracking-widest uppercase text-sm font-medium">Preparing Your Sanctuary</p>
        </div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#2A312A] font-sans selection:bg-[#596E5A] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#EBE5DB]/20 to-transparent pointer-events-none" />
      <main className="max-w-7xl mx-auto px-6 py-24 md:py-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#7E867E] mb-4 block">Secure Sanctuary</span>
          <h1 className="text-5xl md:text-7xl font-serif text-[#2A312A] tracking-tight leading-tight mb-6">
            Welcome back, <br className="hidden md:block" /><span className="text-[#596E5A] italic">{user.displayName?.split(" ")[0] || "Guest"}</span>.
          </h1>
          <p className="text-[#7E867E] text-xl max-w-2xl font-light leading-relaxed">
            Your personalized care journey, direct messaging access, and concierge scheduling—all in one elegant space.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-16">
            <section>
              <h2 className="text-3xl font-serif text-[#2A312A] mb-10 flex items-center gap-6">
                <span className="w-12 h-[1px] bg-[#BCA38F] block"></span>
                Your Core Journey
              </h2>
              <Timeline />
            </section>
          </div>

          {/* Sidebar / Quick Actions */}
          <div className="lg:col-span-4 space-y-8">
            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
               className="glass-panel rounded-[2rem] p-10 relative overflow-hidden group"
            >
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#BCA38F]/10 rounded-full blur-3xl group-hover:bg-[#BCA38F]/20 transition-all duration-700"></div>
              <h3 className="text-2xl font-serif text-[#2A312A] mb-8 relative z-10">Concierge Actions</h3>
              <div className="flex flex-col gap-5 relative z-10">
                <button
                   className="w-full py-5 px-8 bg-[#2A312A] text-white rounded-full text-xs tracking-[0.1em] uppercase font-medium hover:bg-[#596E5A] transition-all duration-500 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                   suppressHydrationWarning
                >
                  Message Medical Team
                </button>
                <button
                   onClick={() => router.push('/schedule')}
                   className="w-full py-5 px-8 bg-transparent border border-[#596E5A]/30 text-[#2A312A] rounded-full text-xs tracking-[0.1em] uppercase font-medium hover:bg-[#596E5A]/5 hover:border-[#596E5A] transition-all duration-500"
                   suppressHydrationWarning
                >
                  Schedule Next Visit
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
