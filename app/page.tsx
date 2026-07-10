import type { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { ProviderProfile } from '@/components/ProviderProfile';
import { AlexandriaConcierge } from '@/components/AlexandriaConcierge';
import { ClinicTour } from '@/components/ClinicTour';
import { Testimonials } from '@/components/Testimonials';

import { ScrollReveal } from '@/components/visuals/ScrollReveal';
import { DEFAULT_OG_IMAGE } from '@/lib/seo';

const TITLE = "Dr. Alex Joseph | Alexandria, LA OBGYN & Women's Healthcare";
const DESCRIPTION = 'Board-certified OBGYN in Alexandria, Louisiana. Dr. Alex Joseph offers compassionate, concierge-style women\'s healthcare, from annual exams to advanced robotic surgery.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/' },
  openGraph: { title: TITLE, description: DESCRIPTION, url: '/', images: [DEFAULT_OG_IMAGE] },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: [DEFAULT_OG_IMAGE.url] },
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
