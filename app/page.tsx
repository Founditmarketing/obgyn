import type { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { ProviderProfile } from '@/components/ProviderProfile';
import { AlexandriaConcierge } from '@/components/AlexandriaConcierge';
import { ClinicTour } from '@/components/ClinicTour';
import { Testimonials } from '@/components/Testimonials';

import { ScrollReveal } from '@/components/visuals/ScrollReveal';

export const metadata: Metadata = {
  title: "Dr. Alex Joseph | Alexandria, LA OBGYN & Women's Healthcare",
  description: 'Board-certified OBGYN in Alexandria, Louisiana. Dr. Alex Joseph offers compassionate, concierge-style women\'s healthcare, from annual exams to advanced robotic surgery.',
};

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <ScrollReveal><ProviderProfile /></ScrollReveal>
      <ScrollReveal><ClinicTour /></ScrollReveal>
      <ScrollReveal><Testimonials /></ScrollReveal>
      <ScrollReveal><AlexandriaConcierge /></ScrollReveal>
    </div>
  );
}
