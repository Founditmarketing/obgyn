'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ClipboardList, Map, Stethoscope, ArrowRight, X } from 'lucide-react';

type ToolType = 'birthplan' | 'map' | 'symptoms' | null;

export function DigitalDoula() {
  const [activeTool, setActiveTool] = useState<ToolType>(null);

  const tools = [
    {
      id: 'birthplan',
      title: 'Birth Plan Architect',
      description: 'Design your ideal delivery experience with our interactive planner.',
      icon: <ClipboardList className="h-8 w-8 text-primary" />,
      color: 'bg-primary/10',
      content: (
        <div className="space-y-6">
          <h3 className="font-serif text-2xl text-foreground">Design Your Delivery</h3>
          <p className="text-muted-foreground">Answer a few questions to generate a customized birth plan tailored for Rapides Regional Medical Center.</p>
          <div className="space-y-4">
            <label className="flex items-center gap-3 p-4 border border-border rounded-xl cursor-pointer hover:bg-muted/50 transition-colors">
              <input type="checkbox" className="w-5 h-5 text-primary rounded border-border focus:ring-primary" />
              <span className="text-foreground font-medium">I prefer an unmedicated birth</span>
            </label>
            <label className="flex items-center gap-3 p-4 border border-border rounded-xl cursor-pointer hover:bg-muted/50 transition-colors">
              <input type="checkbox" className="w-5 h-5 text-primary rounded border-border focus:ring-primary" />
              <span className="text-foreground font-medium">I want immediate skin-to-skin contact</span>
            </label>
            <label className="flex items-center gap-3 p-4 border border-border rounded-xl cursor-pointer hover:bg-muted/50 transition-colors">
              <input type="checkbox" className="w-5 h-5 text-primary rounded border-border focus:ring-primary" />
              <span className="text-foreground font-medium">I plan to breastfeed</span>
            </label>
          </div>
          <button className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-medium hover:bg-primary/90 transition-colors">
            Generate Plan
          </button>
        </div>
      )
    },
    {
      id: 'map',
      title: 'Alexandria Resource Map',
      description: 'Vetted local childcare, maternity shops, and wellness centers.',
      icon: <Map className="h-8 w-8 text-secondary" />,
      color: 'bg-secondary/10',
      content: (
        <div className="space-y-6">
          <h3 className="font-serif text-2xl text-foreground">Local Concierge</h3>
          <p className="text-muted-foreground">Dr. Joseph&apos;s curated list of the best resources in Central Louisiana.</p>
          <div className="grid gap-4">
            <div className="p-4 bg-background border border-border rounded-xl shadow-sm">
              <h4 className="font-medium text-foreground">Prenatal Yoga Studio</h4>
              <p className="text-sm text-muted-foreground mt-1">123 Main St, Alexandria &bull; 2 miles away</p>
            </div>
            <div className="p-4 bg-background border border-border rounded-xl shadow-sm">
              <h4 className="font-medium text-foreground">Organic Cafe & Juice Bar</h4>
              <p className="text-sm text-muted-foreground mt-1">456 Oak Ave, Alexandria &bull; 3 miles away</p>
            </div>
            <div className="p-4 bg-background border border-border rounded-xl shadow-sm">
              <h4 className="font-medium text-foreground">Pediatrician Partners</h4>
              <p className="text-sm text-muted-foreground mt-1">789 Pine Ln, Pineville &bull; 5 miles away</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'symptoms',
      title: 'Symptom Navigator',
      description: 'AI-powered guidance to help you decide if you need a visit or the ER.',
      icon: <Stethoscope className="h-8 w-8 text-accent" />,
      color: 'bg-accent/10',
      content: (
        <div className="space-y-6">
          <h3 className="font-serif text-2xl text-foreground">Symptom Checker</h3>
          <p className="text-muted-foreground">Describe what you&apos;re feeling, and we&apos;ll guide you to the right care.</p>
          <textarea 
            className="w-full p-4 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none h-32 bg-background text-foreground"
            placeholder="E.g., I'm 28 weeks pregnant and experiencing mild cramping..."
          ></textarea>
          <button className="w-full bg-accent text-accent-foreground py-3 rounded-xl font-medium hover:bg-accent/90 transition-colors">
            Analyze Symptoms
          </button>
          <p className="text-xs text-center text-muted-foreground mt-4">
            If you are experiencing a medical emergency, please call 911 immediately.
          </p>
        </div>
      )
    }
  ];

  return (
    <section id="doula" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6">Your Digital Doula</h2>
          <p className="text-lg text-muted-foreground">
            More than just a clinic, we are your 24/7 advocate. Explore our interactive tools designed to empower your healthcare journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tools.map((tool) => (
            <motion.div
              key={tool.id}
              whileHover={{ y: -5 }}
              onClick={() => setActiveTool(tool.id as ToolType)}
              className="bg-card rounded-3xl p-8 shadow-sm border border-border cursor-pointer group hover:shadow-md transition-all"
            >
              <div className={`w-16 h-16 rounded-2xl ${tool.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {tool.icon}
              </div>
              <h3 className="font-serif text-2xl font-medium text-foreground mb-3">{tool.title}</h3>
              <p className="text-muted-foreground mb-6">{tool.description}</p>
              <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform">
                Try it now <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for Active Tool */}
        <AnimatePresence>
          {activeTool && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveTool(null)}
                className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative bg-card w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden z-10"
              >
                <div className="p-8">
                  <button 
                    onClick={() => setActiveTool(null)}
                    className="absolute top-6 right-6 p-2 bg-muted rounded-full hover:bg-muted/80 transition-colors"
                  >
                    <X className="h-5 w-5 text-foreground" />
                  </button>
                  {tools.find(t => t.id === activeTool)?.content}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
