'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { Play, ArrowRight } from 'lucide-react';

const tourItems = [
  {
    id: 1,
    title: "The Sanctuary Waiting Room",
    category: "Environment",
    duration: "0:45",
    image: "/images/tour_waiting_room.png",
    description: "Designed to lower cortisol. Natural light, living walls, and herbal tea on arrival."
  },
  {
    id: 2,
    title: "Meet Nurse Sarah",
    category: "Care Team",
    duration: "1:20",
    image: "/images/tour_nurse.png",
    description: "Your dedicated patient advocate talks about our personalized care approach."
  },
  {
    id: 3,
    title: "State-of-the-Art Ultrasound",
    category: "Technology",
    duration: "1:05",
    image: "/images/tour_ultrasound.png",
    description: "See your baby in stunning 4D detail in our comfortable imaging suite."
  },
  {
    id: 4,
    title: "Private Recovery Suites",
    category: "Environment",
    duration: "0:55",
    image: "/images/tour_recovery.png",
    description: "Luxury hotel-inspired rooms for your postpartum recovery."
  },
  {
    id: 5,
    title: "The Lab & Diagnostics",
    category: "Technology",
    duration: "0:30",
    image: "/images/tour_lab.png",
    description: "In-house testing means faster results and less waiting for you."
  }
];

export function ClinicTour() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="tour" className="py-16 md:py-48 bg-[#F4F2EC] text-[#1A1F1B] overflow-hidden relative z-10 rounded-b-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
      <div className="container mx-auto px-6 lg:px-12 mb-10 md:mb-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-10">
          <div className="max-w-3xl">
            <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-medium text-[#8A928B] mb-6 block">The Sanctuary</span>
            <h2 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tighter text-[#1A1F1B] mb-8">
              Experience the <span className="italic font-light text-[#4A5D4E]">Clinic.</span>
            </h2>
            <p className="text-xl md:text-2xl text-[#1A1F1B]/70 leading-relaxed font-light text-balance">
              Take a cinematic tour of our facilities and meet the team before you step through the doors. No surprises, just absolute peace of mind.
            </p>
          </div>
          <Link href="#tour" prefetch={true} className="inline-flex items-center gap-4 text-[#1A1F1B] hover:text-[#4A5D4E] transition-colors font-medium group text-[10px] md:text-xs uppercase tracking-[0.2em] shrink-0 mb-3 border-b border-[#1A1F1B]/20 pb-2 hover:border-[#4A5D4E]">
            View All Episodes <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform duration-500" />
          </Link>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div 
        ref={scrollRef}
        className="flex gap-8 lg:gap-12 overflow-x-auto pb-16 px-6 lg:px-12 snap-x snap-mandatory hide-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {/* Spacer for initial padding */}
        <div className="w-[calc((100vw-90rem)/2)] shrink-0 hidden 2xl:block" />
        
        {tourItems.map((item) => (
          <motion.div 
            key={item.id}
            whileHover={{ y: -15 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="shrink-0 w-[85vw] md:w-[500px] lg:w-[600px] snap-center group cursor-pointer"
          >
            <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden mb-6 bg-[#E8E5DC] shadow-[0_20px_40px_-15px_rgba(26,31,27,0.1)] group-hover:shadow-[0_40px_60px_-15px_rgba(26,31,27,0.2)] transition-shadow duration-700">
              <Image 
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F1B]/80 via-[#1A1F1B]/10 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-700 mix-blend-multiply" />
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100">
                <div className="w-20 h-20 bg-[#F4F2EC]/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-[#F4F2EC]/30 text-[#F4F2EC] shadow-2xl">
                  <Play className="h-8 w-8 ml-2" />
                </div>
              </div>

              {/* Badges */}
              <div className="absolute top-6 left-6">
                <span className="px-4 py-2 bg-[#F4F2EC] text-[#1A1F1B] text-[10px] font-bold rounded-full uppercase tracking-[0.2em] shadow-lg">
                  {item.category}
                </span>
              </div>
              <div className="absolute bottom-6 right-6">
                <span className="px-3 py-1.5 bg-[#1A1F1B]/50 backdrop-blur-md text-[#F4F2EC] text-[10px] font-bold tracking-widest rounded-full border border-[#F4F2EC]/10">
                  {item.duration}
                </span>
              </div>
            </div>
            
            <h3 className="font-serif text-3xl font-medium mb-3 text-[#1A1F1B] tracking-tight group-hover:text-[#4A5D4E] transition-colors duration-500">{item.title}</h3>
            <p className="text-lg text-[#1A1F1B]/60 font-light leading-relaxed max-w-lg">{item.description}</p>
          </motion.div>
        ))}
        
        {/* Spacer for end padding */}
        <div className="w-[calc((100vw-90rem)/2)] shrink-0 hidden 2xl:block" />
        <div className="w-6 shrink-0 lg:hidden" />
      </div>
    </section>
  );
}
