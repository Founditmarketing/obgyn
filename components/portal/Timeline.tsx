"use client";

import { motion } from "motion/react";
import { useState } from "react";

export function Timeline() {
  const [currentWeek, setCurrentWeek] = useState(24);

  const milestones = [
    { week: 12, title: "First Trimester Screening", desc: "NIPT & NT Ultrasound completed. Comprehensive lab work." },
    { week: 20, title: "Anatomy Scan", desc: "Detailed structural check of baby's development. Discussing birth plan options." },
    { week: 24, title: "Glucose Screening", desc: "Routine checking for gestational diabetes. Discussing prenatal nutrition." },
    { week: 28, title: "Third Trimester Begins", desc: "Increased monitoring, movement tracking, and finalizing birth preferences." },
    { week: 36, title: "Weekly Checks", desc: "Group B Strep test, position check, preparing for delivery day." }
  ];

  return (
    <div className="relative">
      {/* Timeline track */}
      <div className="absolute left-[39px] top-6 bottom-6 w-[1px] bg-gradient-to-b from-[#BCA38F]/80 via-[#BCA38F]/30 to-transparent"></div>
      
      <div className="space-y-12 relative z-10">
        {milestones.map((milestone, idx) => {
          const isPassed = currentWeek >= milestone.week;
          const isCurrent = milestone.week === currentWeek || (currentWeek >= milestone.week && currentWeek < (milestones[idx+1]?.week || 40));
          
          return (
            <motion.div 
              key={milestone.week}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 + 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`flex gap-8 group ${isPassed ? 'opacity-100' : 'opacity-40'}`}
            >
              <div className="flex flex-col items-center pt-2">
                <div className={`w-[80px] h-[80px] rounded-full flex items-center justify-center border transition-all duration-700 bg-white shadow-sm relative z-10
                  ${isCurrent ? 'border-[#BCA38F] text-[#BCA38F] scale-110 shadow-md ring-4 ring-[#BCA38F]/10' : 
                    isPassed ? 'border-[#E3E1DB] text-[#7E867E]' : 
                    'border-[#E3E1DB] text-[#A0AAB2]'}
                `}>
                  <div className="flex flex-col items-center justify-center">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-medium opacity-60">Week</span>
                    <span className="text-2xl font-serif mt-0.5">{milestone.week}</span>
                  </div>
                </div>
              </div>
              
              <div className={`flex-1 bg-white p-8 rounded-[2rem] transition-all duration-500
                ${isCurrent ? 'border border-[#BCA38F]/30 shadow-[0_8px_40px_rgba(42,49,42,0.06)] transform group-hover:-translate-y-1' : 'border border-[#E3E1DB]/50 shadow-sm'}
              `}>
                <h4 className={`text-2xl font-serif tracking-tight mb-3 ${isCurrent ? 'text-[#2A312A]' : 'text-[#596E5A]'}`}>{milestone.title}</h4>
                <p className="text-[#7E867E] text-base leading-relaxed font-light">{milestone.desc}</p>
                {isCurrent && (
                  <div className="mt-6 pt-6 border-t border-[#E3E1DB]/50 flex items-center">
                    <span className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.15em] font-medium text-[#BCA38F]">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#BCA38F] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#BCA38F]"></span>
                      </span>
                      Current Focus
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
