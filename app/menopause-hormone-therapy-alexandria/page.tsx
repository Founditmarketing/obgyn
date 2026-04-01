import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Menopause Management & Hormone Therapy | Dr. Alex Joseph OBGYN',
  description: 'Expert guidance and hormone therapy options for managing menopause symptoms.',
};

export default function MenopauseManagementPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalTherapy",
    "name": "Menopause Management & Hormone Replacement Therapy",
    "provider": {
      "@type": "Physician",
      "name": "Dr. Alex Joseph OBGYN"
    },
    "areaServed": {
      "@type": "City",
      "name": "Alexandria"
    },
    "description": "Expert guidance and hormone therapy options for managing menopause symptoms."
  };

  return (
    <div className="flex flex-col w-full bg-[#F4F2EC] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="pt-32 pb-16 px-6 lg:px-12 max-w-5xl mx-auto text-center">
        <span className="text-xs uppercase tracking-[0.3em] font-medium text-[#8A928B] mb-6 block">Menopause Care</span>
        <h1 className="font-serif text-5xl md:text-7xl font-medium text-[#1A1F1B] mb-8 leading-[1.05] tracking-tighter text-balance">
          Menopause Management & <br className="hidden md:block"/><span className="italic font-light text-[#4A5D4E]">Hormone Therapy</span>
        </h1>
      </section>

      <section className="py-4 px-6 lg:px-12 max-w-3xl mx-auto">
        <div className="space-y-6 text-xl text-[#1A1F1B]/80 font-light leading-relaxed text-balance">
          <p>
            Navigating menopause shouldn't mean enduring hot flashes and mood shifts in silence. Our Alexandria clinic focuses on evidence-based relief, including safe hormone replacement therapy (HRT) and lifestyle strategies.
          </p>
          <p>
            We sit down with you to understand your specific symptoms, review your medical history, and map out a precise, individualized treatment plan so you can approach this next chapter with confidence and vitality.
          </p>
        </div>
        
        <div className="mt-20 text-center border-t border-[#1A1F1B]/10 pt-16 mb-20">
          <h3 className="font-serif text-3xl mb-8 text-[#1A1F1B]">Take control of your transition.</h3>
          <Link href="/schedule" className="inline-flex bg-[#1A1F1B] text-[#F4F2EC] px-10 py-5 rounded-full text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#4A5D4E] transition-all duration-700 items-center justify-center gap-5 group transform hover:-translate-y-1 shadow-lg">
            Explore Treatment Options
            <span className="w-8 h-[1px] bg-background/50 group-hover:w-12 group-hover:bg-background transition-all duration-500 relative">
              <ArrowRight className="absolute right-[-10px] top-1/2 -translate-y-1/2 h-4 w-4" />
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
