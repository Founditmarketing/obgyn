import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Patient Portal | Dr. Alex Joseph OBGYN',
  description: 'Sign in to your secure patient portal to view your care timeline and appointment details.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  return children;
}
