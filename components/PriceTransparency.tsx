'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
    <section className="py-24 bg-background border-t border-border/50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6">
            <DollarSign className="h-8 w-8 text-primary" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-4">
            Radical Transparency
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No surprise bills. We believe you deserve to know the cost of your care upfront. Here are estimates for our most common procedures.
          </p>
        </div>

        <div className="space-y-4">
          {procedures.map((proc) => (
            <motion.div 
              key={proc.id}
              initial={false}
              animate={{ backgroundColor: openId === proc.id ? 'var(--muted)' : 'var(--card)' }}
              className="border border-border rounded-2xl overflow-hidden transition-colors"
            >
              <button
                suppressHydrationWarning
                onClick={() => toggleProcedure(proc.id)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <div className="flex-1">
                  <h3 className="font-serif text-xl font-medium text-foreground">{proc.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{proc.description}</p>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="hidden md:flex flex-col items-end">
                    <span className="text-sm font-medium text-foreground">{proc.basePrice}</span>
                    <span className="text-xs text-muted-foreground">Estimated Base</span>
                  </div>
                  
                  <div className={`p-2 rounded-full transition-transform duration-300 ${openId === proc.id ? 'rotate-180 bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'}`}>
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
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 pt-2 border-t border-border/50">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-background p-4 rounded-xl border border-border">
                          <h4 className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                            <ShieldAlert className="h-4 w-4 text-primary" />
                            Insurance Coverage
                          </h4>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            {proc.insuranceCovered === true ? (
                              <><Check className="h-4 w-4 text-green-600" /> Typically Covered</>
                            ) : proc.insuranceCovered === 'Partial' ? (
                              <><ShieldAlert className="h-4 w-4 text-yellow-600" /> Partially Covered</>
                            ) : (
                              <><ShieldAlert className="h-4 w-4 text-red-600" /> Not Covered</>
                            )}
                          </div>
                        </div>
                        
                        <div className="bg-background p-4 rounded-xl border border-border">
                          <h4 className="text-sm font-medium text-foreground mb-2">The Details</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {proc.details}
                          </p>
                        </div>
                      </div>
                      
                      <div className="mt-6 flex justify-between items-center text-sm">
                        <p className="text-muted-foreground italic">
                          *Prices are estimates. Final cost depends on your specific insurance plan and deductible.
                        </p>
                        <button suppressHydrationWarning className="text-primary font-medium hover:underline">
                          Verify My Insurance
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button suppressHydrationWarning className="bg-foreground text-background px-8 py-4 rounded-full font-medium hover:bg-foreground/90 transition-all">
            Contact Billing Concierge
          </button>
        </div>
      </div>
    </section>
  );
}
