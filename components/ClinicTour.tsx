'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import { Play, ArrowRight } from 'lucide-react';

const tourItems = [
  {
    id: 1,
    title: "The Sanctuary Waiting Room",
    category: "Environment",
    duration: "0:45",
    image: "https://picsum.photos/seed/waitingroom/800/600?blur=1",
    description: "Designed to lower cortisol. Natural light, living walls, and herbal tea on arrival."
  },
  {
    id: 2,
    title: "Meet Nurse Sarah",
    category: "Care Team",
    duration: "1:20",
    image: "https://picsum.photos/seed/nurse/800/600?blur=1",
    description: "Your dedicated patient advocate talks about our personalized care approach."
  },
  {
    id: 3,
    title: "State-of-the-Art Ultrasound",
    category: "Technology",
    duration: "1:05",
    image: "https://picsum.photos/seed/ultrasound/800/600?blur=1",
    description: "See your baby in stunning 4D detail in our comfortable imaging suite."
  },
  {
    id: 4,
    title: "Private Recovery Suites",
    category: "Environment",
    duration: "0:55",
    image: "https://picsum.photos/seed/recovery/800/600?blur=1",
    description: "Luxury hotel-inspired rooms for your postpartum recovery."
  },
  {
    id: 5,
    title: "The Lab & Diagnostics",
    category: "Technology",
    duration: "0:30",
    image: "https://picsum.photos/seed/lab/800/600?blur=1",
    description: "In-house testing means faster results and less waiting for you."
  }
];

export function ClinicTour() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-24 bg-foreground text-background overflow-hidden relative">
      <div className="container mx-auto px-4 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="font-serif text-4xl md:text-5xl font-medium mb-4">Experience the Clinic</h2>
            <p className="text-background/70 text-lg">
              Take a cinematic tour of our facilities and meet the team before you even step through the doors. No surprises, just peace of mind.
            </p>
          </div>
          <button suppressHydrationWarning className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium group">
            View All Episodes <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-12 px-4 md:px-8 snap-x snap-mandatory hide-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {/* Spacer for initial padding matching container */}
        <div className="w-[calc((100vw-1280px)/2)] shrink-0 hidden xl:block" />
        
        {tourItems.map((item) => (
          <motion.div 
            key={item.id}
            whileHover={{ y: -10 }}
            className="shrink-0 w-[85vw] md:w-[400px] snap-center group cursor-pointer"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 bg-background/10">
              <Image 
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-90 group-hover:scale-100">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                  <Play className="h-6 w-6 text-white ml-1" />
                </div>
              </div>

              {/* Badges */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-black/50 backdrop-blur-md text-white text-xs font-medium rounded-full uppercase tracking-wider">
                  {item.category}
                </span>
              </div>
              <div className="absolute bottom-4 right-4">
                <span className="px-2 py-1 bg-black/50 backdrop-blur-md text-white text-xs font-medium rounded-md">
                  {item.duration}
                </span>
              </div>
            </div>
            
            <h3 className="font-serif text-xl font-medium mb-2 text-white group-hover:text-primary transition-colors">{item.title}</h3>
            <p className="text-sm text-background/60 line-clamp-2">{item.description}</p>
          </motion.div>
        ))}
        
        {/* Spacer for end padding */}
        <div className="w-[calc((100vw-1280px)/2)] shrink-0 hidden xl:block" />
        <div className="w-4 shrink-0 xl:hidden" />
      </div>
    </section>
  );
}
