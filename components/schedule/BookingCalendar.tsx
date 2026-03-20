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
    <div>
      <div className="mb-8 overflow-hidden rounded-2xl bg-[#F9F7F3] p-6 border border-[#E2E8E3]">
        <h3 className="text-xs uppercase tracking-widest text-[#6D7D6D] font-bold mb-6">Upcoming Availabilities</h3>
        <div className="flex gap-4 overflow-x-auto hide-scrollbar snap-x pb-2">
          {upcomingDays.map((date, idx) => {
            const isSelected = date.getTime() === selectedDay.getTime();
            return (
              <button
                key={idx}
                onClick={() => setSelectedDay(date)}
                className={`flex-shrink-0 snap-start w-24 py-5 rounded-2xl flex flex-col items-center justify-center transition-all border outline-none
                  ${isSelected ? "bg-[#3C4A3E] border-[#3C4A3E] text-white shadow-lg shadow-[#3C4A3E]/20" : "bg-white border-[#D1DDD2] text-[#5C6D5D] hover:border-[#8B9D8B] hover:shadow-sm"}`}
                suppressHydrationWarning
              >
                <span className="text-xs uppercase font-medium tracking-wide">{format(date, "EEE")}</span>
                <span className={`text-3xl font-serif mt-2 leading-none ${isSelected ? "text-white" : "text-[#2C312C]"}`}>{format(date, "d")}</span>
                <span className="text-[10px] mt-2 opacity-70 uppercase tracking-wider">{format(date, "MMM")}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <h3 className="text-xs uppercase tracking-widest text-[#6D7D6D] font-bold mb-4">Available Consultation Times</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {timeSlots.map((time) => (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              key={time}
              onClick={() => onSelect(selectedDay, time)}
              className="py-4 px-4 rounded-xl border border-[#D1DDD2] bg-white text-[#3C4A3E] font-medium hover:border-[#3C4A3E] hover:bg-[#F9F7F3] transition-colors shadow-sm"
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
