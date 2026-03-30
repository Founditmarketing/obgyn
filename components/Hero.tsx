'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, Baby, Activity, Heart } from 'lucide-react';

type JourneyType = 'expectant' | 'menopause' | 'teen' | 'general';

const journeyContent = {
  general: {
    title: "Elevated Women's Healthcare in Cenla",
    subtitle: "Experience a digital sanctuary where clinical precision meets deep empathy. Small-town heart, big-city tech.",
    image: "/images/hero_waiting_room.png",
    cta: "Begin Your Journey",
    icon: <Heart className="h-6 w-6" />,
    label: "Overview"
  },
  expectant: {
    title: "Your Pregnancy Concierge Awaits",
    subtitle: "From your baby's first heartbeat to delivery day, we provide a 24/7 advocate and personalized care plan.",
    image: "/images/hero_expectant.png",
    cta: "Plan Your Delivery",
    icon: <Baby className="h-6 w-6" />,
    label: "Pregnancy"
  },
  menopause: {
    title: "Navigate Menopause with Confidence",
    subtitle: "Expert guidance, hormone therapy options, and compassionate support for your next chapter.",
    image: "/images/hero_menopause.png",
    cta: "Explore Treatment Options",
    icon: <Activity className="h-6 w-6" />,
    label: "Menopause"
  },
  teen: {
    title: "Your First Visit, Demystified",
    subtitle: "A judgment-free, comfortable environment designed to answer your questions and put you at ease.",
    image: "/images/hero_exterior.png",
    cta: "What to Expect",
    icon: <Sparkles className="h-6 w-6" />,
    label: "First Visit"
  }
};

import { LoginButton } from './auth/LoginButton';

import { HeroCanvas } from '@/components/visuals/HeroCanvas';

export function Hero() {
  const [activeJourney, setActiveJourney] = useState<JourneyType>('general');

  return (
    <section className="relative min-h-[85vh] lg:min-h-screen flex items-center overflow-hidden bg-background">
      
      {/* Structural layout: Symmetric split pane desktop, Stacked sandwich mobile */}
      <div className="container mx-auto px-5 sm:px-8 lg:px-16 xl:px-24 w-full grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-[auto_minmax(0,1fr)] gap-y-6 lg:gap-x-20 xl:gap-x-24 relative z-10 items-center pt-16 lg:pt-0 pb-12 lg:pb-0">
        
        {/* 1. Heading (Mobile: order-1, Desktop: col 1, row 1) */}
        <div className="order-1 lg:col-start-1 lg:row-start-1 flex flex-col justify-end items-center lg:items-start text-center lg:text-left relative z-20 w-full lg:self-end">
          <div className="absolute -left-24 -top-24 w-64 h-64 bg-[#B89C86]/10 rounded-full blur-[80px] pointer-events-none transition-all duration-1000 hidden lg:block"></div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeJourney}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15, delayChildren: 0.1 }
                },
                exit: { 
                  opacity: 0,
                  transition: { duration: 0.3 }
                }
              }}
            >
              <motion.h1 
                variants={{
                  hidden: { opacity: 0, filter: 'blur(10px)', y: 20 },
                  visible: { opacity: 1, filter: 'blur(0px)', y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
                  exit: { opacity: 0, filter: 'blur(5px)', y: -10, transition: { duration: 0.4 } }
                }}
                className="font-serif text-[14vw] sm:text-[11vw] lg:text-[4.5rem] xl:text-[5.5rem] leading-[1.05] tracking-tighter text-foreground text-balance max-w-2xl"
              >
                {journeyContent[activeJourney].title.split(' ').map((word, i) => (
                  <span key={i} className={`inline-block mr-[0.2em] ${i % 2 !== 0 ? 'italic font-light text-[#4A5D4E]' : 'font-medium'}`}>
                    {word}
                  </span>
                )).reduce((prev, curr) => [prev, ' ', curr] as any)}
              </motion.h1>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 3. Subtitle & CTA (Mobile: order-3, Desktop: col 1, row 2) */}
        <div className="order-3 lg:col-start-1 lg:row-start-2 flex flex-col justify-start items-center lg:items-start text-center lg:text-left relative z-20 w-full lg:self-start lg:pt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeJourney}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15, delayChildren: 0.4 }
                },
                exit: { 
                  opacity: 0,
                  transition: { duration: 0.3 }
                }
              }}
              className="flex flex-col items-center lg:items-start w-full space-y-6 lg:space-y-8"
            >
              <motion.div 
                variants={{
                  hidden: { opacity: 0, scaleX: 0, transformOrigin: 'left' },
                  visible: { opacity: 1, scaleX: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
                  exit: { opacity: 0, transition: { duration: 0.3 } }
                }}
                className="h-[1px] w-24 lg:w-32 bg-gradient-to-r from-transparent via-[#DEDCD5] to-transparent lg:from-[#DEDCD5] lg:to-transparent hidden lg:block"
              ></motion.div>

              <motion.p 
                variants={{
                  hidden: { opacity: 0, filter: 'blur(10px)', y: 20 },
                  visible: { opacity: 1, filter: 'blur(0px)', y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
                  exit: { opacity: 0, filter: 'blur(5px)', y: -10, transition: { duration: 0.4 } }
                }}
                className="text-[1.1rem] sm:text-xl lg:text-3xl font-light text-foreground/80 max-w-lg lg:max-w-xl leading-relaxed text-balance px-4 lg:px-0"
              >
                {journeyContent[activeJourney].subtitle}
              </motion.p>
              
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
                  exit: { opacity: 0, y: -10, transition: { duration: 0.4 } }
                }}
                className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 lg:gap-8 w-full sm:w-auto"
              >
                <Link href="/schedule" prefetch={true} className="w-full sm:w-auto justify-center bg-foreground text-background px-10 py-5 lg:py-6 rounded-full text-[11px] lg:text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#4A5D4E] transition-all duration-700 flex items-center gap-5 group shadow-[0_20px_40px_-10px_rgba(26,31,27,0.3)] hover:shadow-[0_20px_40px_-10px_rgba(74,93,78,0.5)] transform hover:-translate-y-1">
                  {journeyContent[activeJourney].cta}
                  <span className="w-8 h-[1px] bg-background/50 group-hover:w-12 group-hover:bg-background transition-all duration-500 relative">
                    <ArrowRight className="absolute right-[-10px] top-1/2 -translate-y-1/2 h-4 w-4" />
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 2. Right pane: Immersive Image Portal (Mobile: order-2, Desktop: col 2, row span 2) */}
        <div className="order-2 lg:col-start-2 lg:row-start-1 lg:row-span-2 w-full max-w-[21rem] sm:max-w-md lg:max-w-none aspect-[4/5] relative self-center mx-auto my-2 lg:my-0">
          <div className="absolute inset-0 rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl shadow-[#1A1F1B]/20 border border-[#E8E5DC]/50">
            <AnimatePresence>
               <motion.div
                 key={activeJourney}
                 initial={{ opacity: 0, scale: 1.05 }}
                 animate={{ opacity: 1, scale: 1 }}
                 exit={{ opacity: 0, scale: 0.98 }}
                 transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                 className="absolute inset-0"
               >
                  <Image
                    src={journeyContent[activeJourney].image}
                    alt={journeyContent[activeJourney].title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1A1F1B]/60 mix-blend-multiply" />
               </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 opacity-40 mix-blend-overlay">
              <HeroCanvas />
            </div>

            {/* Visual Cue for Clickability */}
            <div className="absolute bottom-[5.5rem] lg:bottom-[6.5rem] left-1/2 -translate-x-1/2 w-max z-20 pointer-events-none flex flex-col items-center gap-2">
               <span className="text-[9px] uppercase tracking-[0.3em] text-white/90 font-medium drop-shadow-md">Select Care Path</span>
               <motion.div animate={{ y: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} className="w-[1px] h-6 bg-gradient-to-b from-white to-transparent shadow-sm"></motion.div>
            </div>

            {/* In-Portal Navigation */}
            <div className="absolute bottom-6 lg:bottom-10 left-1/2 -translate-x-1/2 glass-panel p-2 rounded-full flex gap-2 z-30">
              {(['general', 'expectant', 'menopause', 'teen'] as JourneyType[]).map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveJourney(type)}
                  aria-label={`Select ${journeyContent[type].label} Path`}
                  className={`h-12 lg:h-14 rounded-full flex items-center justify-center transition-all duration-700 relative overflow-hidden group
                    ${activeJourney === type ? 'bg-[#1A1F1B] text-[#F4F2EC] shadow-xl px-4 lg:px-6' : 'w-12 lg:w-14 bg-transparent text-[#1A1F1B] hover:bg-white/50 hover:shadow-sm'}
                  `}
                  title={journeyContent[type].label}
                  suppressHydrationWarning
                >
                  <span className={`relative z-10 flex items-center gap-2 lg:gap-3 ${activeJourney === type ? 'text-[#F4F2EC]' : 'text-[#1A1F1B]'}`}>
                     {journeyContent[type].icon}
                     {activeJourney === type && (
                       <motion.span 
                         initial={{ opacity: 0, width: 0 }} 
                         animate={{ opacity: 1, width: 'auto' }} 
                         transition={{ duration: 0.3, delay: 0.1 }}
                         className="text-[9px] lg:text-[10px] uppercase tracking-[0.2em] font-medium whitespace-nowrap overflow-hidden"
                       >
                         {journeyContent[type].label}
                       </motion.span>
                     )}
                  </span>
                  {activeJourney === type && (
                     <motion.div layoutId="active-pill" className="absolute inset-0 bg-[#1A1F1B] rounded-full z-0" transition={{ type: "spring", stiffness: 200, damping: 20 }} />
                  )}
                </button>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
