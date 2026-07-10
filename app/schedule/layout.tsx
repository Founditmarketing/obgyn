import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Schedule an Appointment | Dr. Alex Joseph OBGYN',
  description: 'Reserve your visit with Dr. Alex Joseph in Alexandria, Louisiana. Choose a date and time that fits your care journey.',
};

export default function ScheduleLayout({ children }: { children: React.ReactNode }) {
  return children;
}
