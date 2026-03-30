import { Hero } from '@/components/Hero';
import { ProviderProfile } from '@/components/ProviderProfile';
import { AlexandriaConcierge } from '@/components/AlexandriaConcierge';
import { ClinicTour } from '@/components/ClinicTour';
import { Testimonials } from '@/components/Testimonials';

import { ScrollReveal } from '@/components/visuals/ScrollReveal';

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
