import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Compassionate Teen & Adolescent Gynecology | Dr. Alex Joseph OBGYN',
  description: 'Judgment-free, comfortable adolescent gynecology and first-time visits.',
};

export default function TeenGynecologyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalConsultation",
    "name": "Teen & Adolescent Gynecology",
    "provider": {
      "@type": "Physician",
      "name": "Dr. Alex Joseph OBGYN",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Alexandria",
        "addressRegion": "LA"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Alexandria"
    },
    "description": "Judgment-free, comfortable adolescent gynecology and first-time visits."
  };

  return (
    <div className="flex flex-col w-full bg-[#F4F2EC] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="pt-32 pb-16 px-6 lg:px-12 max-w-5xl mx-auto text-center">
        <span className="text-xs uppercase tracking-[0.3em] font-medium text-[#8A928B] mb-6 block">First Visit</span>
        <h1 className="font-serif text-5xl md:text-7xl font-medium text-[#1A1F1B] mb-8 leading-[1.05] tracking-tighter text-balance">
          Compassionate Teen & <br className="hidden md:block"/><span className="italic font-light text-[#4A5D4E]">Adolescent Gynecology</span>
        </h1>
      </section>

      <section className="py-4 px-6 lg:px-12 max-w-3xl mx-auto">
        <div className="space-y-6 text-xl text-[#1A1F1B]/80 font-light leading-relaxed text-balance">
          <p>
            A young woman's first visit to a gynecologist sets the tone for a lifetime of healthcare. Our Alexandria clinic provides a judgment-free, comfortable environment specifically designed to demystify the first visit.
          </p>
          <p>
            Whether she needs answers about irregular periods, cramps, or birth control, Dr. Joseph ensures teens feel respected, understood, and educated about their own bodies. We believe in providing clear answers without the clinical anxiety.
          </p>
        </div>
        
        <div className="mt-20 text-center border-t border-[#1A1F1B]/10 pt-16 mb-20">
          <h3 className="font-serif text-3xl mb-8 text-[#1A1F1B]">Make the first visit comfortable.</h3>
          <Link href="/schedule" className="inline-flex bg-[#1A1F1B] text-[#F4F2EC] px-10 py-5 rounded-full text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#4A5D4E] transition-all duration-700 items-center justify-center gap-5 group transform hover:-translate-y-1 shadow-lg">
            Schedule a Consultation
            <span className="w-8 h-[1px] bg-background/50 group-hover:w-12 group-hover:bg-background transition-all duration-500 relative">
              <ArrowRight className="absolute right-[-10px] top-1/2 -translate-y-1/2 h-4 w-4" />
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
