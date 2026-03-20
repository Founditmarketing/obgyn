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
    image: "https://picsum.photos/seed/wellness/1920/1080?blur=2",
    cta: "Begin Your Journey",
    icon: <Heart className="h-6 w-6 text-primary" />
  },
  expectant: {
    title: "Your Pregnancy Concierge Awaits",
    subtitle: "From your baby's first heartbeat to delivery day, we provide a 24/7 advocate and personalized care plan.",
    image: "https://picsum.photos/seed/maternity/1920/1080?blur=2",
    cta: "Plan Your Delivery",
    icon: <Baby className="h-6 w-6 text-primary" />
  },
  menopause: {
    title: "Navigate Menopause with Confidence",
    subtitle: "Expert guidance, hormone therapy options, and compassionate support for your next chapter.",
    image: "https://picsum.photos/seed/mature/1920/1080?blur=2",
    cta: "Explore Treatment Options",
    icon: <Activity className="h-6 w-6 text-primary" />
  },
  teen: {
    title: "Your First Visit, Demystified",
    subtitle: "A judgment-free, comfortable environment designed to answer your questions and put you at ease.",
    image: "https://picsum.photos/seed/youth/1920/1080?blur=2",
    cta: "What to Expect",
    icon: <Sparkles className="h-6 w-6 text-primary" />
  }
};

import { LoginButton } from './auth/LoginButton';

import { HeroCanvas } from '@/components/visuals/HeroCanvas';

export function Hero() {
  const [activeJourney, setActiveJourney] = useState<JourneyType>('general');

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <header className="absolute top-0 w-full z-50 p-4 md:p-6 flex justify-between items-center">
        <div className="font-serif text-xl font-medium tracking-wide text-foreground/90 bg-background/40 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full hidden sm:block">
          Dr. Alex Joseph
        </div>
        <div className="flex-1 sm:flex-none flex justify-end">
          <LoginButton />
        </div>
      </header>

      {/* Background Image & Canvas */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeJourney}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={journeyContent[activeJourney].image}
            alt="Background"
            fill
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
          <HeroCanvas />
        </motion.div>
      </AnimatePresence>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Journey Selector */}
          <div className="mb-12 flex flex-wrap justify-center gap-4">
            {(['expectant', 'menopause', 'teen'] as JourneyType[]).map((type) => (
              <button
                key={type}
                suppressHydrationWarning
                onClick={() => setActiveJourney(type)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeJourney === type 
                    ? 'bg-primary text-primary-foreground shadow-lg scale-105' 
                    : 'bg-background/80 text-foreground hover:bg-background hover:scale-105 backdrop-blur-md border border-border/50'
                }`}
              >
                {journeyContent[type].icon}
                {type === 'expectant' ? 'Expecting a Baby' : 
                 type === 'menopause' ? 'Navigating Menopause' : 
                 'First-Time Visit'}
              </button>
            ))}
          </div>

          {/* Dynamic Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeJourney}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tight text-foreground leading-tight">
                {journeyContent[activeJourney].title}
              </h1>
              <p className="text-lg md:text-2xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
                {journeyContent[activeJourney].subtitle}
              </p>
              
              <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
                <button suppressHydrationWarning className="bg-foreground text-background px-8 py-4 rounded-full text-lg font-medium hover:bg-foreground/90 transition-all flex items-center gap-2 group">
                  {journeyContent[activeJourney].cta}
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button suppressHydrationWarning className="text-foreground font-medium hover:text-primary transition-colors underline underline-offset-4">
                  Meet Dr. Joseph
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}
