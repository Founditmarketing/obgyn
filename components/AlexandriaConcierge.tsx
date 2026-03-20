'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Coffee, Activity, Baby } from 'lucide-react';

export function AlexandriaConcierge() {
  const recommendations = [
    {
      title: "Prenatal Yoga Studio",
      category: "Wellness",
      icon: <Activity className="h-6 w-6 text-[#B89C86]" />,
      description: "Gentle movement and breathing exercises tailored for expectant mothers. A serene space.",
      image: "https://picsum.photos/seed/yoga/800/600"
    },
    {
      title: "Organic Cafe & Juice Bar",
      category: "Nutrition",
      icon: <Coffee className="h-6 w-6 text-[#4A5D4E]" />,
      description: "Nutrient-dense smoothies and organic meals perfect for pregnancy cravings.",
      image: "https://picsum.photos/seed/cafe/800/600"
    },
    {
      title: "Pediatrician Partners",
      category: "Healthcare",
      icon: <Baby className="h-6 w-6 text-[#D9D2C5]" />,
      description: "Trusted local pediatricians we recommend for your newborn's dedicated care.",
      image: "https://picsum.photos/seed/pediatrician/800/600"
    }
  ];

  return (
    <section id="concierge" className="py-16 md:py-32 bg-[#1A1F1B] text-[#F4F2EC] relative z-0">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-32 max-w-[90rem] mx-auto items-center">
          
          {/* Left Column: Text & Map */}
          <div className="lg:w-5/12 space-y-8 lg:space-y-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#F4F2EC]/5 text-[#F4F2EC] font-medium text-[10px] md:text-xs tracking-[0.2em] uppercase shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] border border-[#F4F2EC]/10">
              <MapPin className="h-4 w-4 text-[#B89C86]" />
              <span>Alexandria & Marksville, LA</span>
            </div>
            
            <h2 className="font-serif text-5xl md:text-7xl xl:text-[5.5rem] leading-[0.95] tracking-tighter text-[#F4F2EC] text-balance">
              The Alexandria <span className="italic font-light text-[#B89C86]">Concierge.</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-[#F4F2EC]/70 leading-relaxed font-light text-balance">
              Healthcare extends beyond our clinic walls. Dr. Joseph has curated the absolute finest local resources in Central Louisiana to support your holistic wellness journey.
            </p>
            
            <div className="pt-8 w-full h-[1px] bg-gradient-to-r from-[#F4F2EC]/20 to-transparent"></div>

            <div className="pt-4">
              <Link href="/portal" prefetch={true} className="inline-block bg-[#F4F2EC] text-[#1A1F1B] px-10 py-6 rounded-full text-[10px] md:text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#B89C86] hover:text-[#F4F2EC] transition-all duration-700 shadow-xl hover:-translate-y-1 transform">
                Explore the Full Guide
              </Link>
            </div>
          </div>

          {/* Right Column: Recommendations Grid */}
          <div className="lg:w-7/12 w-full flex flex-col gap-6">
            {recommendations.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col sm:flex-row items-center gap-8 p-6 rounded-[2rem] bg-[#242824] border border-[#F4F2EC]/5 hover:bg-[#2C302C] hover:border-[#F4F2EC]/10 transition-all duration-500 cursor-pointer group shadow-lg"
              >
                <div className="relative w-full sm:w-40 h-48 sm:h-40 rounded-[1.5rem] overflow-hidden shrink-0 shadow-md">
                  <Image 
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700"></div>
                </div>
                <div className="flex-1 w-full pl-2 sm:pl-0">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {item.icon}
                      <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#F4F2EC]/50">{item.category}</span>
                    </div>
                  </div>
                  <h3 className="font-serif text-2xl font-medium text-[#F4F2EC] mb-3 group-hover:text-[#B89C86] transition-colors duration-500">{item.title}</h3>
                  <p className="text-base text-[#F4F2EC]/60 font-light leading-relaxed max-w-md">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
