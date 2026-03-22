import type { Metadata } from 'next';
import { Outfit, Fraunces } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ChatWidget } from '@/components/chat/ChatWidget';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-sans',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Dr. Alex Joseph | Elevated Women\'s Healthcare',
  description: 'A digital sanctuary for women\'s healthcare in Alexandria, LA. Featuring biophilic design, hyper-personalized patient journeys, and luxury hospitality.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${fraunces.variable}`}>
      <body className="font-sans antialiased min-h-screen flex flex-col bg-background" suppressHydrationWarning>
        <ThemeProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <ChatWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
