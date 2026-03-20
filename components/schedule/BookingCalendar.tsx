"use client";

import { useState } from "react";
import { format, addDays, startOfToday } from "date-fns";
import { motion } from "motion/react";

export function BookingCalendar({ onSelect }: { onSelect: (date: Date, time: string) => void }) {
  const today = startOfToday();
  const [selectedDay, setSelectedDay] = useState<Date>(today);
  
  // Generate next 14 days
  const upcomingDays = Array.from({ length: 14 }).map((_, i) => addDays(today, i));
  
  // Pre-fixed time slots for this example
  const timeSlots = ["09:00 AM", "10:30 AM", "01:00 PM", "02:30 PM", "04:00 PM"];

  return (
    <div className="relative z-10">
      <div className="mb-12">
        <h3 className="text-[10px] uppercase tracking-[0.2em] text-[#7E867E] font-medium mb-6">Upcoming Availabilities</h3>
        <div className="flex gap-4 overflow-x-auto hide-scrollbar snap-x pb-6">
          {upcomingDays.map((date, idx) => {
            const isSelected = date.getTime() === selectedDay.getTime();
            return (
              <button
                key={idx}
                onClick={() => setSelectedDay(date)}
                className={`flex-shrink-0 snap-center w-[100px] py-6 rounded-3xl flex flex-col items-center justify-center transition-all duration-500 border outline-none
                  ${isSelected ? "bg-[#2A312A] border-[#2A312A] text-white shadow-[0_12px_30px_rgba(42,49,42,0.15)] scale-105 transform" : "bg-white border-[#E3E1DB] text-[#7E867E] hover:border-[#BCA38F] hover:shadow-md"}`}
                suppressHydrationWarning
              >
                <span className="text-[10px] uppercase font-medium tracking-[0.15em] opacity-80">{format(date, "EEE")}</span>
                <span className={`text-4xl font-serif mt-3 mb-1 leading-none ${isSelected ? "text-white" : "text-[#2A312A]"}`}>{format(date, "d")}</span>
                <span className="text-[10px] opacity-60 uppercase tracking-widest">{format(date, "MMM")}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <h3 className="text-[10px] uppercase tracking-[0.2em] text-[#7E867E] font-medium mb-5">Available Consultations</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:gap-5">
          {timeSlots.map((time) => (
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              key={time}
              onClick={() => onSelect(selectedDay, time)}
              className="py-5 px-6 rounded-2xl border border-[#E3E1DB] bg-white text-[#2A312A] font-medium tracking-wide text-sm hover:border-[#BCA38F] hover:shadow-lg hover:shadow-[#BCA38F]/10 transition-all duration-300"
              suppressHydrationWarning
            >
              {time}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}
