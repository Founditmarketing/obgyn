import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Complete Pregnancy Care & Delivery in Alexandria | Dr. Alex Joseph OBGYN',
  description: 'Comprehensive pregnancy care from first trimester to delivery, acting as your personal 24/7 advocate.',
};

export default function PregnancyCarePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Obstetrics & Pregnancy Care",
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
    "description": "Comprehensive pregnancy care from first trimester to delivery, acting as your personal 24/7 advocate."
  };

  return (
    <div className="flex flex-col w-full bg-[#F4F2EC] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="pt-32 pb-16 px-6 lg:px-12 max-w-5xl mx-auto text-center">
        <span className="text-xs uppercase tracking-[0.3em] font-medium text-[#8A928B] mb-6 block">Obstetric Care</span>
        <h1 className="font-serif text-5xl md:text-7xl font-medium text-[#1A1F1B] mb-8 leading-[1.05] tracking-tighter text-balance">
          Complete Pregnancy Care & <br className="hidden md:block"/><span className="italic font-light text-[#4A5D4E]">Delivery in Alexandria</span>
        </h1>
      </section>

      <section className="py-4 px-6 lg:px-12 max-w-3xl mx-auto">
        <div className="space-y-6 text-xl text-[#1A1F1B]/80 font-light leading-relaxed text-balance">
          <p>
            Dr. Alex Joseph provides comprehensive pregnancy care in Alexandria, guiding you from your baby's first heartbeat through delivery day. Rather than treating pregnancy as a medical condition, we act as your personal pregnancy concierge.
          </p>
          <p>
            You receive a 24/7 advocate, a personalized birth plan, and an environment where all your questions—from nutrition to labor expectations—are answered clearly and completely. Every step of your journey is handled with clinical precision and deep empathy.
          </p>
        </div>
        
        <div className="mt-20 text-center border-t border-[#1A1F1B]/10 pt-16 mb-20">
          <h3 className="font-serif text-3xl mb-8 text-[#1A1F1B]">Ready to plan your delivery journey?</h3>
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
