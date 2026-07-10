import type { Metadata } from 'next';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ChatWidget } from '@/components/chat/ChatWidget';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.alexjosephmd.com'),
  title: "Dr. Alex Joseph | Women's Healthcare",
  description: 'A digital sanctuary for women\'s healthcare in Alexandria, LA. Featuring biophilic design, hyper-personalized patient journeys, and luxury hospitality.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${cormorant.variable}`}>
      <head>
        {/* Found It Lead Capture */}
        <Script src="https://found-it-crm-flax.vercel.app/embed/lead-capture.js" data-account="a87770ba-1d0c-4fa2-b47e-6b6b843ac3aa" strategy="afterInteractive" />
      </head>
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
