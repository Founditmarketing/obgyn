import type { Metadata } from 'next';
import { DEFAULT_OG_IMAGE } from '@/lib/seo';

const TITLE = 'Schedule an Appointment | Dr. Alex Joseph OBGYN';
const DESCRIPTION = 'Reserve your visit with Dr. Alex Joseph in Alexandria, Louisiana. Choose a date and time that fits your care journey.';
const PATH = '/schedule';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: { title: TITLE, description: DESCRIPTION, url: PATH, images: [DEFAULT_OG_IMAGE] },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: [DEFAULT_OG_IMAGE.url] },
};

export default function ScheduleLayout({ children }: { children: React.ReactNode }) {
  return children;
}
