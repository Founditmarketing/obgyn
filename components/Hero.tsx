'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { ArrowRight, Sparkles, Baby, Activity, Heart } from 'lucide-react';

type JourneyType = 'expectant' | 'menopause' | 'teen' | 'general';

const journeyContent = {
  general: {
    title: "Elevated Women's Healthcare in Central Louisiana",
    subtitle: "Experience a digital sanctuary where clinical precision meets deep empathy. Small-town heart, big-city tech.",
    image: "/images/hero_general.png",
    cta: "Begin Your Journey",
    icon: <Heart className="h-6 w-6 text-primary" />
  },
  expectant: {
    title: "Your Pregnancy Concierge Awaits",
    subtitle: "From your baby's first heartbeat to delivery day, we provide a 24/7 advocate and personalized care plan.",
    image: "/images/hero_expectant.png",
    cta: "Plan Your Delivery",
    icon: <Baby className="h-6 w-6 text-primary" />
  },
  menopause: {
    title: "Navigate Menopause with Confidence",
    subtitle: "Expert guidance, hormone therapy options, and compassionate support for your next chapter.",
    image: "/images/hero_menopause.png",
    cta: "Explore Treatment Options",
    icon: <Activity className="h-6 w-6 text-primary" />
  },
  teen: {
    title: "Your First Visit, Demystified",
    subtitle: "A judgment-free, comfortable environment designed to answer your questions and put you at ease.",
    image: "/images/hero_teen.png",
    cta: "What to Expect",
    icon: <Sparkles className="h-6 w-6 text-primary" />
  }
};

import { LoginButton } from './auth/LoginButton';

import { HeroCanvas } from '@/components/visuals/HeroCanvas';

export function Hero() {
  const [activeJourney, setActiveJourney] = useState<JourneyType>('general');

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-background pt-20 pb-16 lg:pt-0 lg:pb-0">
      
      {/* Structural layout: Asymmetric split pane */}
      <div className="container mx-auto px-6 lg:px-12 w-full h-full lg:h-[80vh] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative z-10 items-center">
        
        {/* Left pane: Massive Typography */}
        <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1 relative z-20">
          
          <div className="absolute -left-24 -top-24 w-64 h-64 bg-[#B89C86]/10 rounded-full blur-[80px] pointer-events-none transition-all duration-1000"></div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeJourney}
              initial={{ opacity: 0, filter: 'blur(10px)', y: 30 }}
              animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              exit={{ opacity: 0, filter: 'blur(10px)', y: -30 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-10 relative"
            >
              <h1 className="font-serif text-[12vw] sm:text-[10vw] lg:text-[6rem] xl:text-[7rem] leading-[0.9] tracking-tighter text-foreground text-balance">
                {journeyContent[activeJourney].title.split(' ').map((word, i) => (
                  <span key={i} className={`inline-block mr-[0.2em] ${i % 2 !== 0 ? 'italic font-light text-[#4A5D4E]' : 'font-medium'}`}>
                    {word}
                  </span>
                ))}
              </h1>
              
              <div className="h-[1px] w-32 bg-gradient-to-r from-[#DEDCD5] to-transparent"></div>

              <p className="text-xl lg:text-3xl font-light text-foreground/80 max-w-xl leading-relaxed text-balance">
                {journeyContent[activeJourney].subtitle}
              </p>
              
              <div className="pt-6 flex flex-col sm:flex-row items-start gap-8">
                <button suppressHydrationWarning className="bg-foreground text-background px-10 py-6 rounded-full text-[10px] md:text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#4A5D4E] transition-all duration-700 flex items-center gap-5 group shadow-[0_20px_40px_-10px_rgba(26,31,27,0.3)] hover:shadow-[0_20px_40px_-10px_rgba(74,93,78,0.5)] transform hover:-translate-y-1">
                  {journeyContent[activeJourney].cta}
                  <span className="w-8 h-[1px] bg-background/50 group-hover:w-12 group-hover:bg-background transition-all duration-500 relative">
                    <ArrowRight className="absolute right-[-10px] top-1/2 -translate-y-1/2 h-4 w-4" />
                  </span>
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right pane: Immersive Image Portal */}
        <div className="lg:col-span-5 h-[50vh] lg:h-[100%] max-h-[75vh] w-full relative order-1 lg:order-2 self-end lg:self-center">
          <div className="absolute inset-0 rounded-[3rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(26,31,27,0.2)] border border-[#E8E5DC]/50">
            <AnimatePresence mode="wait">
               <motion.div
                 key={activeJourney}
                 initial={{ opacity: 0, scale: 1.15, rotate: -2 }}
                 animate={{ opacity: 1, scale: 1, rotate: 0 }}
                 exit={{ opacity: 0, scale: 0.95 }}
                 transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
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

            {/* In-Portal Navigation */}
            <div className="absolute bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 glass-panel p-2 rounded-full flex gap-3 z-30">
              {(['general', 'expectant', 'menopause', 'teen'] as JourneyType[]).map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveJourney(type)}
                  className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-700 relative overflow-hidden group
                    ${activeJourney === type ? 'bg-[#1A1F1B] text-[#F4F2EC] shadow-xl transform scale-100' : 'bg-transparent text-[#1A1F1B] hover:bg-white/40 transform scale-95 hover:scale-100'}
                  `}
                  title={type}
                  suppressHydrationWarning
                >
                  <span className="relative z-10">
                     {journeyContent[type].icon}
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
