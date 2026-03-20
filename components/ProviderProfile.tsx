'use client';

import { motion } from 'motion/react';
import { Play, Heart, Award, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

export function ProviderProfile() {
  return (
    <section id="expertise" className="py-24 bg-foreground text-background overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 max-w-7xl mx-auto">
          
          {/* Left Column: Video/Image Container */}
          <div className="lg:w-1/2 w-full relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl"
            >
              {/* Placeholder for Cinematic Video */}
              <Image 
                src="https://picsum.photos/seed/doctor/800/1000?blur=1"
                alt="Dr. Alex Joseph"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button suppressHydrationWarning className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-all group">
                  <Play className="h-8 w-8 text-white ml-1 group-hover:scale-110 transition-transform" />
                </button>
              </div>

              {/* Caption */}
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="font-serif text-3xl font-medium mb-2">Meet Dr. Joseph</h3>
                <p className="text-white/80">Watch our philosophy of care in action.</p>
              </div>
            </motion.div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-accent/20 rounded-full blur-3xl -z-10" />
          </div>

          {/* Right Column: Text & Credentials */}
          <div className="lg:w-1/2 space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl font-medium leading-tight">
              Clinical Precision.<br />
              <span className="text-primary italic">Deep Empathy.</span>
            </h2>
            
            <p className="text-lg text-background/70 leading-relaxed">
              &quot;I believe that women&apos;s healthcare shouldn&apos;t feel clinical or rushed. It should feel like a partnership. My goal is to provide you with the highest level of medical expertise in an environment where you feel truly heard and deeply cared for.&quot;
            </p>
            <p className="text-lg font-medium text-background/90">— Dr. Alex Joseph</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-background/20">
              <div className="flex gap-4">
                <div className="bg-background/10 p-3 rounded-xl h-fit">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Board Certified</h4>
                  <p className="text-sm text-background/60">American Board of Obstetrics and Gynecology</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-background/10 p-3 rounded-xl h-fit">
                  <ShieldCheck className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Advanced Surgery</h4>
                  <p className="text-sm text-background/60">Specializing in minimally invasive procedures</p>
                </div>
              </div>
              
              <div className="flex gap-4 sm:col-span-2">
                <div className="bg-background/10 p-3 rounded-xl h-fit">
                  <Heart className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Community First</h4>
                  <p className="text-sm text-background/60">Proudly serving Alexandria and Marksville families with small-town heart and big-city technology.</p>
                </div>
              </div>
            </div>
            
            <div className="pt-8">
              <button suppressHydrationWarning className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition-all">
                Read Full Biography
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
