'use client';

import { motion } from 'motion/react';
import { Play, Heart, Award, ShieldCheck, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function ProviderProfile() {
  return (
    <section id="expertise" className="py-16 md:py-32 bg-[#1A1F1B] text-[#F4F2EC] overflow-hidden relative rounded-t-[3rem] mt-[-3rem] z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
      
      {/* Absolute massive background typography */}
      <div className="absolute top-10 left-0 w-full overflow-hidden flex justify-center opacity-[0.03] pointer-events-none select-none">
         <span className="font-serif text-[20vw] whitespace-nowrap leading-none tracking-tighter">
            Clinical Precision
         </span>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20 xl:gap-32 max-w-[90rem] mx-auto">
          
          {/* Left Column: Image/Video */}
          <div className="lg:w-5/12 w-full relative">
            <motion.div 
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
               <div className="relative aspect-[3/4] md:aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)] border border-[#F4F2EC]/10 group">
                 <Image 
                   src="/images/provider_thumbnail_lux.png"
                   alt="Dr. Alex Joseph in her clinic"
                   fill
                   className="object-cover transition-transform duration-[2s] group-hover:scale-105"
                   priority
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F1B]/90 via-[#1A1F1B]/20 to-transparent mix-blend-multiply" />
                 
                 {/* Play Button Overlay */}
                 <div className="absolute inset-0 flex items-center justify-center">
                   <button suppressHydrationWarning className="w-24 h-24 bg-[#F4F2EC]/10 backdrop-blur-xl border border-[#F4F2EC]/20 rounded-full flex items-center justify-center hover:bg-[#F4F2EC]/20 transition-all duration-500 group/btn shadow-xl hover:shadow-2xl hover:scale-105 transform">
                     <Play className="h-8 w-8 text-[#F4F2EC] ml-2 group-hover/btn:scale-110 transition-transform duration-500" />
                   </button>
                 </div>
  
                 {/* Caption */}
                 <div className="absolute bottom-10 left-10 right-10">
                   <span className="text-[10px] uppercase tracking-[0.25em] font-medium text-[#D9D2C5] mb-3 block">Video Introduction</span>
                   <h3 className="font-serif text-4xl mb-2 text-[#F4F2EC] tracking-tight">Meet Dr. Joseph</h3>
                 </div>
               </div>
            </motion.div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:w-7/12 w-full flex flex-col justify-center">
            <motion.div
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
               className="space-y-12"
            >
               <h2 className="font-serif text-5xl md:text-7xl xl:text-[5.5rem] leading-[0.95] tracking-tighter text-[#F4F2EC]">
                 Precision.<br />
                 <span className="text-[#4A5D4E] italic font-light">Empathy.</span>
               </h2>
               
               <p className="text-xl md:text-2xl text-[#F4F2EC]/70 leading-relaxed font-light max-w-2xl text-balance">
                 &quot;I believe healthcare shouldn&apos;t feel clinical or rushed. My goal is to provide the highest level of medical expertise in an environment where you feel truly heard and deeply cared for.&quot;
               </p>
               
               <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-medium text-[#D9D2C5]">— Dr. Alex Joseph</p>

               <div className="w-full h-[1px] bg-gradient-to-r from-[#F4F2EC]/20 to-transparent my-6"></div>

               <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                 <div className="flex gap-5 group">
                   <div className="mt-1">
                     <Award className="h-6 w-6 text-[#B89C86] group-hover:-translate-y-1 transition-transform duration-500" />
                   </div>
                   <div>
                     <h4 className="font-medium text-lg mb-2 text-[#F4F2EC] font-serif">Board Certified</h4>
                     <p className="text-sm text-[#F4F2EC]/60 leading-relaxed font-light">American Board of Obstetrics & Gynecology</p>
                   </div>
                 </div>
                 
                 <div className="flex gap-5 group">
                   <div className="mt-1">
                     <ShieldCheck className="h-6 w-6 text-[#B89C86] group-hover:-translate-y-1 transition-transform duration-500" />
                   </div>
                   <div>
                     <h4 className="font-medium text-lg mb-2 text-[#F4F2EC] font-serif">Advanced Surgery</h4>
                     <p className="text-sm text-[#F4F2EC]/60 leading-relaxed font-light">Specializing in minimally invasive robotics</p>
                   </div>
                 </div>
               </div>
               
               <div className="pt-8">
                 <Link href="#" className="inline-flex bg-transparent border border-[#F4F2EC]/30 text-[#F4F2EC] px-10 py-6 rounded-full text-[10px] md:text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#F4F2EC] hover:text-[#1A1F1B] hover:shadow-[0_20px_40px_-10px_rgba(244,242,236,0.3)] transition-all duration-700 items-center gap-5 group w-fit transform hover:-translate-y-1">
                   Read Full Biography
                   <span className="w-8 h-[1px] bg-[#F4F2EC] group-hover:w-12 group-hover:bg-[#1A1F1B] transition-all duration-500 relative">
                      <ArrowRight className="absolute right-[-10px] top-1/2 -translate-y-1/2 h-4 w-4" />
                   </span>
                 </Link>
               </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
