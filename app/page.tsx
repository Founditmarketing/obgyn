import type { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { ProviderProfile } from '@/components/ProviderProfile';
import { AlexandriaConcierge } from '@/components/AlexandriaConcierge';
import { ClinicTour } from '@/components/ClinicTour';
import { Testimonials } from '@/components/Testimonials';

import { ScrollReveal } from '@/components/visuals/ScrollReveal';
import { DEFAULT_OG_IMAGE, SITE_URL } from '@/lib/seo';

const TITLE = "Dr. Alex Joseph | Alexandria, LA OBGYN & Women's Healthcare";
const DESCRIPTION = 'Board-certified OBGYN in Alexandria, Louisiana. Dr. Alex Joseph offers compassionate, concierge-style women\'s healthcare, from annual exams to advanced robotic surgery.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/' },
  openGraph: { title: TITLE, description: DESCRIPTION, url: '/', images: [DEFAULT_OG_IMAGE] },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: [DEFAULT_OG_IMAGE.url] },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Physician',
  name: 'Dr. Alex Joseph OBGYN',
  description: DESCRIPTION,
  url: SITE_URL,
  image: `${SITE_URL}${DEFAULT_OG_IMAGE.url}`,
  telephone: '+13184458120',
  email: 'concierge@alexjosephmd.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'One Jackson Square',
    addressLocality: 'Alexandria',
    addressRegion: 'LA',
    postalCode: '71301',
    addressCountry: 'US',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '08:00',
      closes: '17:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Friday'],
      opens: '08:00',
      closes: '12:00',
    },
  ],
  medicalSpecialty: 'Gynecologic',
  areaServed: {
    '@type': 'City',
    name: 'Alexandria',
  },
  sameAs: ['https://www.facebook.com/DrJosephOBGYN/'],
};

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <ScrollReveal><ProviderProfile /></ScrollReveal>
      <ScrollReveal><ClinicTour /></ScrollReveal>
      <ScrollReveal><Testimonials /></ScrollReveal>
      <ScrollReveal><AlexandriaConcierge /></ScrollReveal>
    </div>
  );
}
