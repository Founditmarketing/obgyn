'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ArrowRight, User, Calendar, FileText } from 'lucide-react';

export function Onboarding() {
  const [step, setStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      setIsComplete(true);
    }
  };

  return (
    <section id="book" className="py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-card rounded-[2.5rem] shadow-xl border border-border overflow-hidden">
          
          <div className="grid grid-cols-1 md:grid-cols-5 h-full">
            
            {/* Left Sidebar: Progress */}
            <div className="md:col-span-2 bg-foreground text-background p-10 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-3xl font-medium mb-8">Welcome Experience</h3>
                <p className="text-background/70 mb-12">Skip the clipboard. Complete your paperwork in a conversational, stress-free environment before you arrive.</p>
                
                <div className="space-y-8">
                  <div className={`flex items-center gap-4 ${step >= 1 ? 'text-primary' : 'text-background/40'}`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${step >= 1 ? 'border-primary bg-primary/10' : 'border-background/40'}`}>
                      <User className="h-5 w-5" />
                    </div>
                    <span className="font-medium">The Basics</span>
                  </div>
                  
                  <div className={`flex items-center gap-4 ${step >= 2 ? 'text-primary' : 'text-background/40'}`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${step >= 2 ? 'border-primary bg-primary/10' : 'border-background/40'}`}>
                      <Calendar className="h-5 w-5" />
                    </div>
                    <span className="font-medium">Your Health History</span>
                  </div>
                  
                  <div className={`flex items-center gap-4 ${step >= 3 ? 'text-primary' : 'text-background/40'}`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${step >= 3 ? 'border-primary bg-primary/10' : 'border-background/40'}`}>
                      <FileText className="h-5 w-5" />
                    </div>
                    <span className="font-medium">Insurance & Consent</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 text-sm text-background/50">
                <p>HIPAA Compliant & Secure</p>
              </div>
            </div>

            {/* Right Content: Form Steps */}
            <div className="md:col-span-3 p-10 flex flex-col justify-center min-h-[500px]">
              <AnimatePresence mode="wait">
                
                {!isComplete && step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h4 className="text-2xl font-medium text-foreground">Let&apos;s start with the basics.</h4>
                    <p className="text-muted-foreground">What name do you prefer we use?</p>
                    
                    <div className="space-y-4">
                      <input 
                        suppressHydrationWarning
                        type="text" 
                        placeholder="Preferred Name" 
                        className="w-full p-4 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-background text-foreground"
                      />
                      <input 
                        suppressHydrationWarning
                        type="email" 
                        placeholder="Email Address" 
                        className="w-full p-4 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-background text-foreground"
                      />
                      <input 
                        suppressHydrationWarning
                        type="tel" 
                        placeholder="Phone Number" 
                        className="w-full p-4 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-background text-foreground"
                      />
                    </div>
                    
                    <button 
                      suppressHydrationWarning
                      onClick={handleNext}
                      className="w-full bg-foreground text-background py-4 rounded-xl font-medium hover:bg-foreground/90 transition-colors flex items-center justify-center gap-2 mt-8"
                    >
                      Continue <ArrowRight className="h-5 w-5" />
                    </button>
                  </motion.div>
                )}

                {!isComplete && step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h4 className="text-2xl font-medium text-foreground">Tell us about your health.</h4>
                    <p className="text-muted-foreground">Are you currently experiencing any specific concerns?</p>
                    
                    <div className="space-y-4">
                      <textarea 
                        placeholder="Briefly describe your primary reason for visiting..." 
                        className="w-full p-4 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none h-32 bg-background text-foreground"
                      ></textarea>
                      
                      <label className="flex items-center gap-3 p-4 border border-border rounded-xl cursor-pointer hover:bg-muted/50 transition-colors">
                        <input type="checkbox" className="w-5 h-5 text-primary rounded border-border focus:ring-primary" />
                        <span className="text-foreground font-medium">I am currently pregnant</span>
                      </label>
                    </div>
                    
                    <button 
                      suppressHydrationWarning
                      onClick={handleNext}
                      className="w-full bg-foreground text-background py-4 rounded-xl font-medium hover:bg-foreground/90 transition-colors flex items-center justify-center gap-2 mt-8"
                    >
                      Continue <ArrowRight className="h-5 w-5" />
                    </button>
                  </motion.div>
                )}

                {!isComplete && step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h4 className="text-2xl font-medium text-foreground">Almost done.</h4>
                    <p className="text-muted-foreground">Upload your insurance card securely.</p>
                    
                    <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:bg-muted/50 transition-colors cursor-pointer">
                      <FileText className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
                      <p className="text-foreground font-medium">Click to upload or drag and drop</p>
                      <p className="text-sm text-muted-foreground mt-1">SVG, PNG, JPG or PDF (max. 5MB)</p>
                    </div>
                    
                    <button 
                      suppressHydrationWarning
                      onClick={handleNext}
                      className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 mt-8"
                    >
                      Complete Onboarding <CheckCircle2 className="h-5 w-5" />
                    </button>
                  </motion.div>
                )}

                {isComplete && (
                  <motion.div
                    key="complete"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center space-y-6"
                  >
                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="h-10 w-10 text-primary" />
                    </div>
                    <h4 className="font-serif text-3xl font-medium text-foreground">You&apos;re all set!</h4>
                    <p className="text-muted-foreground max-w-sm mx-auto">
                      Thank you for completing your profile. We look forward to seeing you at your appointment.
                    </p>
                    <button 
                      suppressHydrationWarning
                      onClick={() => {
                        setStep(1);
                        setIsComplete(false);
                      }}
                      className="mt-8 text-primary font-medium hover:underline"
                    >
                      Start Over
                    </button>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
