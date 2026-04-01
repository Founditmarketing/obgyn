import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Meet Dr. Alex Joseph | Alexandria OBGYN',
  description: 'Learn more about Dr. Alex Joseph, specializing in minimally invasive robotics and compassionate women\'s healthcare in Central Louisiana.',
};

export default function DrAlexJosephPage() {
  return (
    <div className="flex flex-col w-full bg-[#1A1F1B] min-h-screen text-[#F4F2EC] overflow-hidden">
      <section className="pt-32 pb-16 px-6 lg:px-12 max-w-[90rem] mx-auto relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16 xl:gap-24">
          
          <div className="lg:w-1/2 relative space-y-10">
            <span className="text-xs uppercase tracking-[0.3em] font-medium text-[#D9D2C5] block">Provider Profile</span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tighter text-[#F4F2EC] text-balance">
              Dr. Alex <br className="hidden md:block"/><span className="italic font-light text-[#B89C86]">Joseph.</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#F4F2EC]/70 leading-relaxed font-light text-balance bg-transparent">
              Board-certified OBGYN specializing in advanced robotic surgery and compassionate, trauma-informed women's healthcare in Central Louisiana.
            </p>
          </div>

          <div className="lg:w-1/2 relative w-full max-w-md mx-auto aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border border-[#F4F2EC]/10">
            <Image 
              src="/images/dr_joseph.jpg"
              alt="Dr. Alex Joseph"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F1B] via-transparent to-transparent opacity-80" />
          </div>

        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 max-w-4xl mx-auto space-y-12 text-lg text-[#F4F2EC]/80 font-light leading-relaxed">
        <p>
          Dr. Joseph founded this clinic on a singular philosophy: healthcare should never feel rushed or clinical. With over a decade of dedicated experience, she has transformed the standard of gynecological and obstetric care in Alexandria by marrying leading-edge medical technology with profound human empathy.
        </p>
        <p>
          As a pioneer in minimally invasive and robotic-assisted surgeries, Dr. Joseph is passionate about providing surgical options that significantly reduce recovery time, pain, and scarring. Whether you are navigating a high-risk pregnancy, exploring hormone replacement therapy for menopause, or seeking an expert for complex gynecological surgery, she brings comprehensive expertise to every consultation.
        </p>
        <p>
          Beyond the operating room, Dr. Joseph focuses on holistic patient wellness. She believes every patient deserves to be fully heard, meticulously cared for, and treated with absolute dignity. Her "Sanctuary" approach to clinical environments ensures that from the moment you walk through the doors, your nervous system is calmed and your medical needs are prioritized.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10 border-t border-[#F4F2EC]/10">
           <div className="flex gap-4">
             <Award className="h-6 w-6 text-[#B89C86] shrink-0" />
             <div>
               <h4 className="font-serif text-xl text-[#F4F2EC] mb-2">Board Certified</h4>
               <p className="text-sm">American Board of Obstetrics and Gynecology (ABOG)</p>
             </div>
           </div>
           <div className="flex gap-4">
             <ShieldCheck className="h-6 w-6 text-[#B89C86] shrink-0" />
             <div>
               <h4 className="font-serif text-xl text-[#F4F2EC] mb-2">Surgical Excellence</h4>
               <p className="text-sm">Certified in Advanced da Vinci® Robotic Surgery</p>
             </div>
           </div>
        </div>
      </section>

      <div className="mt-10 pb-32 text-center flex justify-center">
        <Link href="/schedule" className="inline-flex bg-[#F4F2EC] text-[#1A1F1B] px-12 py-6 rounded-full text-xs uppercase tracking-[0.25em] font-bold hover:bg-[#B89C86] hover:text-[#F4F2EC] transition-all duration-700 shadow-xl hover:-translate-y-1 transform items-center gap-4 group">
          Schedule a Consultation
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
