"use client";

import { motion } from "motion/react";
import { useState } from "react";

export function Timeline() {
  const [currentWeek, setCurrentWeek] = useState(24);

  const milestones = [
    { week: 12, title: "First Trimester Screening", desc: "NIPT & NT Ultrasound completed." },
    { week: 20, title: "Anatomy Scan", desc: "Detailed check of baby's development." },
    { week: 24, title: "Glucose Screening", desc: "Routine checking for gestational diabetes." },
    { week: 28, title: "Third Trimester Begins", desc: "Increased monitoring and birth plan discussions." },
    { week: 36, title: "Weekly Checks", desc: "Group B Strep test, position check." }
  ];

  return (
    <div className="relative">
      {/* Timeline track */}
      <div className="absolute left-[15px] top-4 bottom-4 w-[2px] bg-[#D1DDD2] rounded-full"></div>
      
      <div className="space-y-10 relative z-10">
        {milestones.map((milestone, idx) => {
          const isPassed = currentWeek >= milestone.week;
          const isCurrent = milestone.week === currentWeek || (currentWeek >= milestone.week && currentWeek < (milestones[idx+1]?.week || 40));
          
          return (
            <motion.div 
              key={milestone.week}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.15 }}
              className={`flex gap-6 ${isPassed ? 'opacity-100' : 'opacity-40'}`}
            >
              <div className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-colors duration-500 bg-white
                  ${isCurrent ? 'border-[#3C4A3E] text-[#3C4A3E]' : 
                    isPassed ? 'border-[#8B9D8B] text-[#5C6D5D]' : 
                    'border-[#D1DDD2] text-[#A0B2A1]'}
                `}>
                  <span className="text-xs font-bold">{milestone.week}</span>
                </div>
              </div>
              
              <div className={`flex-1 bg-white p-6 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.03)] border transition-all duration-300
                ${isCurrent ? 'border-[#8B9D8B] scale-[1.01]' : 'border-[#E2E8E3]'}
              `}>
                <h4 className={`text-lg font-medium mb-2 ${isCurrent ? 'text-[#3C4A3E]' : 'text-[#5C6D5D]'}`}>{milestone.title}</h4>
                <p className="text-[#6D7D6D] text-sm leading-relaxed">{milestone.desc}</p>
                {isCurrent && (
                  <div className="mt-4 pt-4 border-t border-[#E2E8E3]">
                    <span className="inline-flex items-center gap-2 text-xs font-medium text-[#4A5D4C] bg-[#F4F6F4] px-3 py-1.5 rounded-full border border-[#D1DDD2]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5C6D5D] animate-pulse"></span>
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
