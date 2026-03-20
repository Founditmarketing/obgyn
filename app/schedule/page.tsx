"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { BookingCalendar } from "@/components/schedule/BookingCalendar";
import { IntakeForm } from "@/components/schedule/IntakeForm";
import { CheckCircle } from "lucide-react";

export default function SchedulePage() {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const handleTimeSelect = (date: Date, time: string) => {
    setSelectedDate(date);
    setSelectedTime(time);
    setStep(2);
  };

  const handleFormSubmit = async (data: any) => {
    // In a real app, send data to Firestore or scheduling API
    console.log("Booking Confirmed:", { date: selectedDate, time: selectedTime, patientData: data });
    setStep(3);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#2A312A] font-sans selection:bg-[#596E5A] pt-28 pb-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#EBE5DB]/30 to-transparent pointer-events-none" />
      <main className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#7E867E] mb-4 block">Concierge Scheduling</span>
          <h1 className="text-5xl md:text-6xl font-serif text-[#2A312A] mb-6 tracking-tight">Reserve Your Sanctuary</h1>
          <p className="text-[#7E867E] text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Our scheduling process is designed around your convenience. Choose a time that flows perfectly with your lifestyle and care journey.
          </p>
        </div>

        {/* Steps Indicator */}
        <div className="flex items-center justify-center gap-6 mb-16">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-6">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-serif text-lg transition-all duration-700 ${
                step >= i ? "bg-[#BCA38F] text-white shadow-md ring-4 ring-[#BCA38F]/10 scale-110" : "bg-white text-[#A0AAB2] border border-[#E3E1DB]"
              }`}>
                {i}
              </div>
              {i < 3 && <div className={`w-16 h-[1px] ${step > i ? "bg-[#BCA38F]" : "bg-[#E3E1DB]"}`}></div>}
            </div>
          ))}
        </div>

        <div className="glass-panel rounded-[2.5rem] p-10 md:p-14 min-h-[500px] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#EBE5DB]/50 rounded-full blur-3xl pointer-events-none"></div>

          {step === 1 && (
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <h2 className="text-3xl font-serif text-[#2A312A] mb-10 relative z-10">Select a Date & Time</h2>
              <BookingCalendar onSelect={handleTimeSelect} />
            </motion.div>
          )}

          {step === 2 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="relative z-10">
              <div className="mb-10 flex items-center justify-between">
                <h2 className="text-3xl font-serif text-[#2A312A]">Your Information</h2>
                <button 
                  onClick={() => setStep(1)} 
                  className="text-[10px] uppercase tracking-[0.15em] font-medium text-[#7E867E] hover:text-[#596E5A] transition-colors border-b border-transparent hover:border-[#596E5A]"
                  suppressHydrationWarning
                >
                  Change Time
                </button>
              </div>
              <div className="bg-white/60 backdrop-blur-sm border border-[#E3E1DB] px-8 py-5 rounded-2xl mb-10 shadow-sm flex items-center gap-4">
                 <div className="w-2 h-2 rounded-full bg-[#BCA38F] animate-pulse"></div>
                 <p className="text-sm text-[#596E5A]">
                   You&apos;re confirming a visit on <strong className="font-medium text-[#2A312A]">{selectedDate?.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })}</strong> at <strong className="font-medium text-[#2A312A]">{selectedTime}</strong>.
                 </p>
              </div>
              <IntakeForm onSubmit={handleFormSubmit} />
            </motion.div>
          )}

          {step === 3 && (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="flex flex-col items-center justify-center text-center py-16 relative z-10">
              <div className="w-24 h-24 bg-white text-[#BCA38F] rounded-full flex items-center justify-center mb-8 border border-[#E3E1DB] shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h2 className="text-4xl font-serif text-[#2A312A] mb-5 tracking-tight">Sanctuary Reserved</h2>
              <p className="text-[#7E867E] text-lg max-w-md font-light leading-relaxed">
                We&apos;ve secured your appointment. You will receive a secure portal notification shortly with preparatory instructions for your visit.
              </p>
              <button
                className="mt-12 px-10 py-5 bg-[#2A312A] text-white rounded-full text-xs uppercase tracking-[0.1em] font-medium hover:bg-[#596E5A] transition-all duration-500 shadow-lg transform hover:-translate-y-1"
                onClick={() => window.location.href = "/portal"}
                suppressHydrationWarning
              >
                Return to Patient Portal
              </button>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
}
