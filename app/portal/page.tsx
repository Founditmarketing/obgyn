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
    <div className="min-h-screen bg-[#F9F7F3] text-[#2C312C] font-sans selection:bg-[#E2E8E3]">
      {/* Navigation placeholder if not using global nav */}
      <main className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-serif text-[#3C4A3E] mb-4">
            Welcome back, {user.displayName?.split(" ")[0] || "Guest"}
          </h1>
          <p className="text-[#6D7D6D] text-lg max-w-2xl">
            This is your secure sanctuary. Review your health timeline, direct message your concierge care team, or schedule an upcoming visit.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-serif text-[#3C4A3E] mb-6 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#B0BEB0] block"></span>
                Your Journey
              </h2>
              <Timeline />
            </section>
          </div>

          {/* Sidebar / Quick Actions */}
          <div className="space-y-8">
            <div className="bg-[#E2E8E3]/50 rounded-3xl p-8 border border-[#B0BEB0]/30 shadow-sm">
              <h3 className="text-xl font-serif text-[#3C4A3E] mb-4">Quick Actions</h3>
              <div className="flex flex-col gap-4">
                <button
                   className="w-full py-4 px-6 bg-[#3C4A3E] text-[#F9F7F3] rounded-full text-sm tracking-wide font-medium hover:bg-[#2A342B] transition-colors shadow-sm"
                   suppressHydrationWarning
                >
                  Message Concierge
                </button>
                <button
                   className="w-full py-4 px-6 bg-white border border-[#B0BEB0] text-[#4A5D4C] rounded-full text-sm tracking-wide font-medium hover:bg-[#F4F6F4] hover:border-[#3C4A3E] transition-all shadow-sm"
                   suppressHydrationWarning
                >
                  Schedule Visit
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
