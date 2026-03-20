'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { ChevronDown, Check, DollarSign, ShieldAlert } from 'lucide-react';

const procedures = [
  {
    id: 'iud',
    name: 'IUD Insertion / Removal',
    description: 'Long-acting, reversible contraception.',
    basePrice: '$250 - $400',
    insuranceCovered: true,
    details: 'Most insurance plans cover 100% of the device and insertion under the ACA. Without insurance, the device cost varies by brand (Mirena, Paragard, Kyleena).'
  },
  {
    id: 'ultrasound',
    name: '3D/4D Obstetric Ultrasound',
    description: 'Detailed imaging of your baby.',
    basePrice: '$150 - $300',
    insuranceCovered: 'Partial',
    details: 'Diagnostic ultrasounds are typically covered by insurance. Elective 3D/4D "keepsake" ultrasounds are usually out-of-pocket.'
  },
  {
    id: 'colposcopy',
    name: 'Colposcopy',
    description: 'Follow-up for abnormal Pap smear.',
    basePrice: '$300 - $600',
    insuranceCovered: true,
    details: 'Covered by most major insurance plans as a diagnostic procedure. Price varies if biopsies are required during the exam.'
  },
  {
    id: 'well-woman',
    name: 'Annual Well-Woman Exam',
    description: 'Preventative care, pelvic exam, and Pap smear.',
    basePrice: '$150 - $250',
    insuranceCovered: true,
    details: 'Under the Affordable Care Act, most insurance plans cover one annual preventative exam at 100% with no copay or deductible.'
  }
];

export function PriceTransparency() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleProcedure = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 md:py-32 bg-[#F4F2EC] relative border-t border-[#1A1F1B]/5">
      <div className="container mx-auto px-6 lg:px-12 max-w-[85rem]">
        <div className="text-center mb-12 md:mb-28">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-medium text-[#8A928B] mb-6 block">No Surprises</span>
          <h2 className="font-serif flex flex-col items-center justify-center text-5xl md:text-7xl lg:text-[5.5rem] font-medium text-[#1A1F1B] mb-8 leading-[0.95] tracking-tighter">
            Radical <br className="hidden md:block"/> <span className="italic font-light text-[#4A5D4E]">Transparency.</span>
          </h2>
          <p className="text-xl md:text-2xl text-[#1A1F1B]/70 font-light max-w-3xl mx-auto leading-relaxed text-balance">
            We believe you deeply deserve to know the cost of your care upfront. Here are precise estimates for our most common restorative procedures.
          </p>
        </div>

        <div className="space-y-6 max-w-5xl mx-auto">
          {procedures.map((proc) => (
            <motion.div 
              key={proc.id}
              initial={false}
              animate={{ backgroundColor: openId === proc.id ? '#FFFFFF' : 'rgba(255,255,255,0.4)' }}
              className="border border-[#1A1F1B]/10 rounded-[2rem] overflow-hidden transition-all duration-700 shadow-sm hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.05)] backdrop-blur-md"
            >
              <button
                suppressHydrationWarning
                onClick={() => toggleProcedure(proc.id)}
                className="w-full flex md:items-center flex-col md:flex-row justify-between p-8 md:p-10 text-left focus:outline-none group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none -translate-x-full"></div>

                <div className="flex-1 mb-4 md:mb-0">
                  <h3 className="font-serif text-2xl md:text-3xl font-medium text-[#1A1F1B] tracking-tight group-hover:text-[#4A5D4E] transition-colors">{proc.name}</h3>
                  <p className="text-lg text-[#1A1F1B]/60 font-light mt-2 max-w-lg">{proc.description}</p>
                </div>
                
                <div className="flex items-center gap-6 self-start md:self-auto w-full md:w-auto justify-between md:justify-end">
                  <div className="flex flex-col md:items-end">
                    <span className="text-2xl font-serif text-[#1A1F1B]">{proc.basePrice}</span>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#8A928B] mt-1">Estimated Base</span>
                  </div>
                  
                  <div className={`p-3 rounded-full transition-transform duration-700 ${openId === proc.id ? 'rotate-180 bg-[#1A1F1B] text-[#F4F2EC] shadow-md' : 'bg-[#E8E5DC] text-[#1A1F1B]'}`}>
                    <ChevronDown className="h-5 w-5" />
                  </div>
                </div>
              </button>

              <AnimatePresence>
                {openId === proc.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="px-8 md:px-10 pb-10 pt-4 border-t border-[#1A1F1B]/5">
                      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                        <div className="bg-[#F4F2EC]/50 p-6 rounded-2xl border border-white">
                          <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[#1A1F1B] mb-4 flex items-center gap-3">
                            <ShieldAlert className="h-4 w-4 text-[#B89C86]" />
                            Insurance Coverage
                          </h4>
                          <div className="flex items-center gap-3 text-base text-[#1A1F1B]/70 font-light">
                            {proc.insuranceCovered === true ? (
                              <><Check className="h-5 w-5 text-[#4A5D4E]" /> Typically completely covered</>
                            ) : proc.insuranceCovered === 'Partial' ? (
                              <><ShieldAlert className="h-5 w-5 text-[#B89C86]" /> Partially covered</>
                            ) : (
                              <><ShieldAlert className="h-5 w-5 text-red-800/80" /> Generally not covered</>
                            )}
                          </div>
                        </div>
                        
                        <div className="p-2 md:p-0">
                          <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[#1A1F1B] mb-4">Clinical Context</h4>
                          <p className="text-base text-[#1A1F1B]/70 font-light leading-relaxed">
                            {proc.details}
                          </p>
                        </div>
                      </div>
                      
                      <div className="mt-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-sm pt-8 border-t border-[#1A1F1B]/5">
                        <p className="text-[#1A1F1B]/50 font-light italic text-balance">
                          *These are estimates. Final investment depends on your specific insurance plan and deductible status.
                        </p>
                        <Link href="/schedule" prefetch={true} className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-[#1A1F1B] border-b border-[#1A1F1B] pb-1 hover:text-[#4A5D4E] hover:border-[#4A5D4E] transition-all whitespace-nowrap">
                          Verify My Insurance
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 md:mt-20 text-center flex justify-center">
          <Link href="/schedule" prefetch={true} className="inline-block bg-transparent border border-[#1A1F1B]/20 text-[#1A1F1B] px-12 py-6 rounded-full text-xs uppercase tracking-[0.25em] font-bold hover:bg-[#1A1F1B] hover:text-[#F4F2EC] hover:border-transparent transition-all duration-700 shadow-sm hover:shadow-2xl hover:-translate-y-1 transform">
            Speak with Billing Concierge
          </Link>
        </div>
      </div>
    </section>
  );
}
