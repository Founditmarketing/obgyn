import type { Metadata } from 'next';
import { DEFAULT_OG_IMAGE } from '@/lib/seo';

const TITLE = 'Patient Portal | Dr. Alex Joseph OBGYN';
const DESCRIPTION = 'Sign in to your secure patient portal to view your care timeline and appointment details.';
const PATH = '/portal';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  robots: {
    index: false,
    follow: false,
  },
  alternates: { canonical: PATH },
  openGraph: { title: TITLE, description: DESCRIPTION, url: PATH, images: [DEFAULT_OG_IMAGE] },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: [DEFAULT_OG_IMAGE.url] },
};

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  return children;
}
