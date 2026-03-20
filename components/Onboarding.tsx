'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ArrowRight, User, Calendar, FileText, ShieldAlert } from 'lucide-react';

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
    <section id="book" className="py-32 md:py-48 bg-[#1A1F1B] rounded-t-[3rem] mt-[-3rem] z-20 relative shadow-[0_-20px_50px_rgba(0,0,0,0.15)]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-[85rem] mx-auto bg-[#F4F2EC] rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.3)] overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[600px] xl:min-h-[700px]">
            
            {/* Left Sidebar: Progress */}
            <div className="lg:col-span-5 bg-[#2C302C] text-[#F4F2EC] p-12 md:p-16 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -left-32 -bottom-32 w-96 h-96 bg-[#B89C86]/5 rounded-full blur-[100px] pointer-events-none"></div>

              <div className="relative z-10">
                <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-[#D9D2C5] mb-6 block">Skip the Waiting Room</span>
                <h3 className="font-serif text-5xl font-medium mb-6 tracking-tight text-balance">Welcome <br/><span className="italic font-light text-[#B89C86]">Experience.</span></h3>
                <p className="text-[#F4F2EC]/60 mb-16 text-lg font-light leading-relaxed max-w-sm">
                   Complete your intake in our beautifully simple, conversational environment prior to your arrival.
                </p>
                
                <div className="space-y-12 block">
                  <div className={`flex items-center gap-6 ${step >= 1 ? 'text-[#F4F2EC]' : 'text-[#F4F2EC]/20'} transition-colors duration-500`}>
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-500 ${step >= 1 ? 'border-[#B89C86] bg-[#B89C86]/10' : 'border-[#F4F2EC]/10'}`}>
                      <User className="h-5 w-5" />
                    </div>
                    <span className="font-serif text-2xl">The Basics</span>
                  </div>
                  
                  <div className={`flex items-center gap-6 flex-row ${step >= 2 ? 'text-[#F4F2EC]' : 'text-[#F4F2EC]/20'} transition-colors duration-500`}>
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-500 ${step >= 2 ? 'border-[#B89C86] bg-[#B89C86]/10' : 'border-[#F4F2EC]/10'}`}>
                      <Calendar className="h-5 w-5" />
                    </div>
                    <span className="font-serif text-2xl">Health History</span>
                  </div>
                  
                  <div className={`flex items-center gap-6 ${step >= 3 ? 'text-[#F4F2EC]' : 'text-[#F4F2EC]/20'} transition-colors duration-500`}>
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-500 ${step >= 3 ? 'border-[#B89C86] bg-[#B89C86]/10' : 'border-[#F4F2EC]/10'}`}>
                      <FileText className="h-5 w-5" />
                    </div>
                    <span className="font-serif text-2xl">Consent</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-16 text-[10px] uppercase tracking-[0.2em] font-medium text-[#F4F2EC]/30 relative z-10 flex items-center gap-3">
                <ShieldAlert className="h-4 w-4" /> HIPAA Compliant & End-to-End Encrypted
              </div>
            </div>

            {/* Right Content: Form Steps */}
            <div className="lg:col-span-7 p-12 md:p-16 lg:px-24 flex flex-col justify-center bg-[#F4F2EC] relative z-10">
              <AnimatePresence mode="wait">
                
                {!isComplete && step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 30, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, x: -30, filter: 'blur(10px)' }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="space-y-8"
                  >
                    <div>
                       <h4 className="text-4xl font-serif text-[#1A1F1B] mb-2 tracking-tight">Let&apos;s begin.</h4>
                       <p className="text-lg text-[#1A1F1B]/60 font-light">How should we address you?</p>
                    </div>
                    
                    <div className="space-y-6 pt-4">
                      <input 
                        suppressHydrationWarning
                        type="text" 
                        placeholder="Preferred Name" 
                        className="w-full px-6 py-5 border-b border-[#1A1F1B]/20 focus:border-[#4A5D4E] outline-none bg-transparent text-[#1A1F1B] placeholder:text-[#1A1F1B]/30 font-light text-xl transition-colors rounded-none"
                      />
                      <input 
                        suppressHydrationWarning
                        type="email" 
                        placeholder="Email Address" 
                        className="w-full px-6 py-5 border-b border-[#1A1F1B]/20 focus:border-[#4A5D4E] outline-none bg-transparent text-[#1A1F1B] placeholder:text-[#1A1F1B]/30 font-light text-xl transition-colors rounded-none"
                      />
                      <input 
                        suppressHydrationWarning
                        type="tel" 
                        placeholder="Phone Number" 
                        className="w-full px-6 py-5 border-b border-[#1A1F1B]/20 focus:border-[#4A5D4E] outline-none bg-transparent text-[#1A1F1B] placeholder:text-[#1A1F1B]/30 font-light text-xl transition-colors rounded-none"
                      />
                    </div>
                    
                    <div className="pt-10 flex justify-end">
                       <button 
                         suppressHydrationWarning
                         onClick={handleNext}
                         className="bg-[#1A1F1B] text-[#F4F2EC] px-10 py-5 rounded-full text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#4A5D4E] transition-all duration-700 flex items-center gap-4 group shadow-lg"
                       >
                         Continue <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform duration-500" />
                       </button>
                    </div>
                  </motion.div>
                )}

                {!isComplete && step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 30, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, x: -30, filter: 'blur(10px)' }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="space-y-8"
                  >
                    <div>
                       <h4 className="text-4xl font-serif text-[#1A1F1B] mb-2 tracking-tight">Your health.</h4>
                       <p className="text-lg text-[#1A1F1B]/60 font-light">Are you currently experiencing specific concerns?</p>
                    </div>
                    
                    <div className="space-y-8 pt-4">
                      <textarea 
                        placeholder="Briefly describe your primary reason for visiting..." 
                        className="w-full p-6 border border-[#1A1F1B]/10 rounded-2xl focus:ring-1 focus:ring-[#4A5D4E] focus:border-[#4A5D4E] outline-none resize-none h-40 bg-white shadow-inner text-[#1A1F1B] font-light text-lg transition-all"
                      ></textarea>
                      
                      <label className="flex items-center gap-4 p-5 border border-[#1A1F1B]/10 rounded-2xl cursor-pointer hover:bg-white transition-colors group bg-white/50">
                        <input type="checkbox" className="w-6 h-6 text-[#4A5D4E] rounded border-[#1A1F1B]/20 focus:ring-[#4A5D4E]" />
                        <span className="text-[#1A1F1B] font-serif text-xl">I am currently pregnant</span>
                      </label>
                    </div>
                    
                    <div className="pt-10 flex justify-end">
                       <button 
                         suppressHydrationWarning
                         onClick={handleNext}
                         className="bg-[#1A1F1B] text-[#F4F2EC] px-10 py-5 rounded-full text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#4A5D4E] transition-all duration-700 flex items-center gap-4 group shadow-lg"
                       >
                         Continue <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform duration-500" />
                       </button>
                    </div>
                  </motion.div>
                )}

                {!isComplete && step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 30, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, x: -30, filter: 'blur(10px)' }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="space-y-8"
                  >
                    <div>
                       <h4 className="text-4xl font-serif text-[#1A1F1B] mb-2 tracking-tight">Almost done.</h4>
                       <p className="text-lg text-[#1A1F1B]/60 font-light">Upload your insurance verification securely.</p>
                    </div>
                    
                    <div className="pt-4">
                       <div className="border border-dashed border-[#1A1F1B]/20 rounded-[2rem] p-12 text-center hover:bg-white transition-colors cursor-pointer group bg-white/50">
                         <div className="w-20 h-20 bg-[#F4F2EC] rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform duration-500">
                            <FileText className="h-8 w-8 text-[#B89C86]" />
                         </div>
                         <p className="text-[#1A1F1B] font-serif text-2xl mb-2">Click to securely drop a file</p>
                         <p className="text-xs uppercase tracking-[0.2em] text-[#1A1F1B]/40 font-medium mt-4">SVG, PNG, JPG (max 5MB)</p>
                       </div>
                    </div>
                    
                    <div className="pt-10 flex justify-end">
                       <button 
                         suppressHydrationWarning
                         onClick={handleNext}
                         className="bg-[#B89C86] text-[#F4F2EC] px-10 py-5 rounded-full text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#1A1F1B] transition-all duration-700 flex items-center gap-4 group shadow-lg"
                       >
                         Finalize Securely <CheckCircle2 className="h-5 w-5 group-hover:scale-110 transition-transform duration-500" />
                       </button>
                    </div>
                  </motion.div>
                )}

                {isComplete && (
                  <motion.div
                    key="complete"
                    initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center space-y-8 flex flex-col items-center justify-center h-full"
                  >
                    <div className="w-24 h-24 bg-[#4A5D4E]/10 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle2 className="h-10 w-10 text-[#4A5D4E]" />
                    </div>
                    <h4 className="font-serif text-5xl md:text-6xl font-medium text-[#1A1F1B] tracking-tight">Impeccable.</h4>
                    <p className="text-xl text-[#1A1F1B]/60 font-light max-w-sm mx-auto leading-relaxed">
                      Your profile securely prepared. We eagerly look forward to seeing you.
                    </p>
                    <button 
                      suppressHydrationWarning
                      onClick={() => {
                        setStep(1);
                        setIsComplete(false);
                      }}
                      className="mt-8 text-[10px] uppercase tracking-[0.2em] font-bold text-[#1A1F1B] border-b border-[#1A1F1B]/20 pb-1 hover:border-[#1A1F1B] transition-colors"
                    >
                      Reset Form
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
