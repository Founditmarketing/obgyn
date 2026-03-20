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
    <div className="min-h-screen bg-[#F9F7F3] text-[#2C312C] font-sans selection:bg-[#E2E8E3] pt-24 pb-16">
      <main className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-[#3C4A3E] mb-4">Reserve Your Concierge Visit</h1>
          <p className="text-[#6D7D6D] text-lg max-w-2xl mx-auto">
            Our scheduling process is designed around your convenience. Choose a time that works perfectly for your lifestyle and care journey.
          </p>
        </div>

        {/* Steps Indicator */}
        <div className="flex items-center justify-center gap-4 mb-12">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-4">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                step >= i ? "bg-[#3C4A3E] text-[#F9F7F3]" : "bg-[#E2E8E3] text-[#A0B2A1]"
              }`}>
                {i}
              </div>
              {i < 3 && <div className={`w-12 h-1 rounded-full ${step > i ? "bg-[#3C4A3E]" : "bg-[#E2E8E3]"}`}></div>}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-[#E2E8E3] p-8 md:p-12 min-h-[500px]">
          {step === 1 && (
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <h2 className="text-2xl font-serif text-[#3C4A3E] mb-8">Select a Date & Time</h2>
              <BookingCalendar onSelect={handleTimeSelect} />
            </motion.div>
          )}

          {step === 2 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <div className="mb-8 flex items-center justify-between">
                <h2 className="text-2xl font-serif text-[#3C4A3E]">Your Information</h2>
                <button 
                  onClick={() => setStep(1)} 
                  className="text-sm font-medium text-[#6D7D6D] hover:text-[#3C4A3E] transition-colors underline underline-offset-4"
                  suppressHydrationWarning
                >
                  Change Time
                </button>
              </div>
              <div className="bg-[#E8EFE9] text-[#4A5D4C] px-6 py-4 rounded-xl mb-8 border border-[#D1DDD2]">
                <p className="text-sm">
                  You're confirming an appointment on <strong className="font-semibold">{selectedDate?.toLocaleDateString()}</strong> at <strong className="font-semibold">{selectedTime}</strong>.
                </p>
              </div>
              <IntakeForm onSubmit={handleFormSubmit} />
            </motion.div>
          )}

          {step === 3 && (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center text-center py-12">
              <div className="w-20 h-20 bg-[#E8EFE9] text-[#4A5D4C] rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-sm">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h2 className="text-3xl font-serif text-[#3C4A3E] mb-4">Sanctuary Reserved</h2>
              <p className="text-[#6D7D6D] text-lg max-w-md">
                We've secured your appointment. You will receive a secure portal notification shortly with preparatory instructions for your visit.
              </p>
              <button
                className="mt-10 px-8 py-4 bg-[#3C4A3E] text-white rounded-full font-medium hover:bg-[#2A342B] transition-colors shadow-sm tracking-wide text-sm"
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
