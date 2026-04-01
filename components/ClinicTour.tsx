'use client';

import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { Play, ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';

const tourItems = [
  {
    id: 1,
    title: "Clinic Exterior",
    category: "Environment",
    duration: "0:30",
    image: "/images/office_outside.jpg",
    description: "Welcome to our state-of-the-art facility designed for your absolute peace of mind."
  },
  {
    id: 2,
    title: "The Sanctuary Waiting Room",
    category: "Environment",
    duration: "0:45",
    image: "/images/office_inside.jpg",
    description: "Designed to lower cortisol. Natural light, living walls, and herbal tea on arrival."
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
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  const handleClose = () => setSelectedVideo(null);

  return (
    <section id="tour" className="py-24 lg:py-32 bg-[#F4F2EC] text-[#1A1F1B] overflow-hidden relative z-10 rounded-b-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
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
          <button 
            onClick={() => setSelectedVideo(tourItems[0].id)}
            className="inline-flex items-center gap-4 text-[#1A1F1B] hover:text-[#4A5D4E] transition-colors font-medium group text-[10px] md:text-xs uppercase tracking-[0.2em] shrink-0 mb-3 border-b border-[#1A1F1B]/20 pb-2 hover:border-[#4A5D4E]"
          >
            View All Episodes <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform duration-500" />
          </button>
        </div>
      </div>

      {/* Horizontal Scroll Container (Mobile) / Grid (Desktop) */}
      <div 
        ref={scrollRef}
        className="flex lg:grid lg:grid-cols-2 lg:place-items-center xl:grid-cols-3 gap-8 lg:gap-12 overflow-x-auto lg:overflow-visible pb-16 px-6 lg:px-12 snap-x snap-mandatory lg:snap-none hide-scrollbar max-w-[100rem] mx-auto w-full"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {tourItems.map((item) => (
          <motion.div 
            key={item.id}
            whileHover={{ y: -15 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => setSelectedVideo(item.id)}
            className="shrink-0 w-[85vw] md:w-[500px] lg:w-full snap-center group cursor-pointer max-w-[500px]"
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
      </div>

      {/* Video Lightbox Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#181A18]/95 backdrop-blur-md p-4 md:p-10 cursor-pointer"
            onClick={handleClose}
          >
            <div className="absolute top-6 right-6 lg:top-10 lg:right-10 z-10">
              <button 
                onClick={handleClose}
                className="text-[#F4F2EC] hover:text-[#B89C86] transition-colors p-3 bg-[#F4F2EC]/10 hover:bg-[#F4F2EC]/20 rounded-full"
                aria-label="Close video"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <motion.div 
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full max-w-6xl aspect-[16/9] rounded-2xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.8)] cursor-default bg-black border border-[#F4F2EC]/10"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const activeIndex = tourItems.findIndex(i => i.id === selectedVideo);
                const activeItem = tourItems[activeIndex];
                if (!activeItem) return null;
                
                const handlePrev = (e: React.MouseEvent) => {
                  e.stopPropagation();
                  const prevIndex = activeIndex === 0 ? tourItems.length - 1 : activeIndex - 1;
                  setSelectedVideo(tourItems[prevIndex].id);
                };
                
                const handleNext = (e: React.MouseEvent) => {
                  e.stopPropagation();
                  const nextIndex = activeIndex === tourItems.length - 1 ? 0 : activeIndex + 1;
                  setSelectedVideo(tourItems[nextIndex].id);
                };
                
                return (
                  <>
                    <Image 
                      src={activeItem.image}
                      alt={activeItem.title}
                      fill
                      className="object-contain md:object-cover opacity-80"
                    />
                    
                    {/* Navigation Arrows */}
                    <div className="absolute inset-y-0 left-0 flex items-center px-4 md:px-8 z-20">
                      <button onClick={handlePrev} className="p-2 md:p-3 bg-black/40 hover:bg-black/60 border border-white/10 rounded-full text-white backdrop-blur-md transition-all transform hover:scale-110 shadow-xl" aria-label="Previous video">
                         <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
                      </button>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 md:px-8 z-20">
                      <button onClick={handleNext} className="p-2 md:p-3 bg-black/40 hover:bg-black/60 border border-white/10 rounded-full text-white backdrop-blur-md transition-all transform hover:scale-110 shadow-xl" aria-label="Next video">
                         <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
                      </button>
                    </div>
                    
                    {/* Simulated video player overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none">
                      <div className="flex flex-col gap-4 pointer-events-auto">
                        <h3 className="text-2xl md:text-4xl font-serif text-[#F4F2EC]">{activeItem.title}</h3>
                        
                        <div className="flex items-center gap-4 md:gap-6 text-[#F4F2EC]">
                          <button className="p-3 md:p-4 bg-[#F4F2EC]/20 hover:bg-[#F4F2EC]/30 backdrop-blur-md rounded-full transition-all group" aria-label="Play">
                            <Play className="h-6 w-6 md:h-8 md:w-8 fill-[#F4F2EC] group-hover:scale-110 transition-transform" />
                          </button>
                          
                          <div className="h-1.5 md:h-2 bg-[#F4F2EC]/30 flex-grow rounded-full overflow-hidden cursor-pointer relative">
                            {/* Fake progress bar */}
                            <div className="absolute top-0 left-0 h-full w-[35%] bg-[#B89C86] rounded-full"></div>
                          </div>
                          
                          <span className="text-xs md:text-sm font-medium tabular-nums tracking-wider opacity-80 shrink-0">
                            0:12 / {activeItem.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
