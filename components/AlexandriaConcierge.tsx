'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { MapPin, Coffee, Activity, Baby } from 'lucide-react';

export function AlexandriaConcierge() {
  const recommendations = [
    {
      title: "Prenatal Yoga Studio",
      category: "Wellness",
      icon: <Activity className="h-5 w-5 text-primary" />,
      description: "Gentle movement and breathing exercises tailored for expectant mothers.",
      image: "https://picsum.photos/seed/yoga/400/300?blur=1"
    },
    {
      title: "Organic Cafe & Juice Bar",
      category: "Nutrition",
      icon: <Coffee className="h-5 w-5 text-secondary" />,
      description: "Nutrient-dense smoothies and organic meals perfect for pregnancy cravings.",
      image: "https://picsum.photos/seed/cafe/400/300?blur=1"
    },
    {
      title: "Pediatrician Partners",
      category: "Healthcare",
      icon: <Baby className="h-5 w-5 text-accent" />,
      description: "Trusted local pediatricians we recommend for your newborn's care.",
      image: "https://picsum.photos/seed/pediatrician/400/300?blur=1"
    }
  ];

  return (
    <section id="concierge" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-16 max-w-6xl mx-auto">
          
          {/* Left Column: Text & Map */}
          <div className="md:w-1/2 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
              <MapPin className="h-4 w-4" />
              <span>Alexandria & Marksville, LA</span>
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground leading-tight">
              The Alexandria Concierge
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe healthcare extends beyond the clinic walls. Dr. Joseph has curated a list of the best local resources in Central Louisiana to support your wellness journey, from prenatal yoga to trusted pediatricians.
            </p>
            
            <div className="pt-4">
              <button suppressHydrationWarning className="bg-foreground text-background px-8 py-4 rounded-full font-medium hover:bg-foreground/90 transition-all">
                Explore the Full Guide
              </button>
            </div>
          </div>

          {/* Right Column: Recommendations Grid */}
          <div className="md:w-1/2 w-full grid gap-6">
            {recommendations.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-6 p-4 rounded-2xl bg-card border border-border hover:shadow-md transition-shadow cursor-pointer group"
              >
                <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
                  <Image 
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    {item.icon}
                    <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{item.category}</span>
                  </div>
                  <h3 className="font-serif text-xl font-medium text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
