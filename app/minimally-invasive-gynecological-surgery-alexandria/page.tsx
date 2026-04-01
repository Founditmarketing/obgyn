import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Minimally Invasive & Robotic Gynecologic Surgery | Dr. Alex Joseph OBGYN',
  description: 'Advanced minimally invasive and robotic-assisted gynecologic surgeries for faster recovery.',
};

export default function RoboticSurgeryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Robotic & Minimally Invasive Gynecologic Surgery",
    "procedureType": "Surgical Procedure",
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
    "description": "Advanced minimally invasive and robotic-assisted gynecologic surgeries for faster recovery."
  };

  return (
    <div className="flex flex-col w-full bg-[#F4F2EC] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="pt-32 pb-16 px-6 lg:px-12 max-w-5xl mx-auto text-center">
        <span className="text-xs uppercase tracking-[0.3em] font-medium text-[#8A928B] mb-6 block">Advanced Surgery</span>
        <h1 className="font-serif text-5xl md:text-7xl font-medium text-[#1A1F1B] mb-8 leading-[1.05] tracking-tighter text-balance">
          Minimally Invasive & <br className="hidden md:block"/><span className="italic font-light text-[#4A5D4E]">Robotic Gynecologic Surgery</span>
        </h1>
      </section>

      <section className="py-4 px-6 lg:px-12 max-w-3xl mx-auto">
        <div className="space-y-6 text-xl text-[#1A1F1B]/80 font-light leading-relaxed text-balance">
          <p>
            When gynecologic surgery is necessary, large incisions and long hospital stays are no longer the only options. Dr. Alex Joseph specializes in minimally invasive and robotic-assisted surgeries, including hysterectomies and myomectomies.
          </p>
          <p>
            This advanced approach offers significantly less pain, minimal scarring, and a faster return to your daily life. We'll walk you through the entire process, so you know exactly what to expect before, during, and after your procedure.
          </p>
        </div>
        
        <div className="mt-20 text-center border-t border-[#1A1F1B]/10 pt-16 mb-20">
          <h3 className="font-serif text-3xl mb-8 text-[#1A1F1B]">Learn about your surgical options.</h3>
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
