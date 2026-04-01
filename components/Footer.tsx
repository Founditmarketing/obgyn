"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { HeartPulse, Mail, MapPin, Phone, Instagram, Facebook } from 'lucide-react';

export function Footer() {
  const pathname = usePathname();

  if (pathname === '/contact') {
    return null;
  }

  return (
    <footer className="bg-foreground text-background py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          {/* Brand Column */}
          <div className="md:col-span-4 lg:col-span-5"> {/* Changed col-span */}
            <Link href="/" className="flex items-center gap-4 group mb-8 inline-flex"> {/* Changed gap and added group, inline-flex */}
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center overflow-hidden border border-white/10 group-hover:border-primary/50 transition-all duration-500"> {/* Replaced HeartPulse div */}
                 <Image src="/images/clinic_logo_joseph.png" alt="Clinic Logo" width={48} height={48} className="object-cover" /> {/* Replaced HeartPulse icon with Image */}
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-medium tracking-tight">Dr. Alex Joseph</span>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">Women&apos;s Healthcare</span>
              </div>
            </Link>
            <p className="text-sm text-background/70 mb-6 max-w-xs leading-relaxed">
              A digital sanctuary for women&apos;s healthcare in Alexandria, LA. Featuring biophilic design, hyper-personalized patient journeys, and luxury hospitality.
            </p>
            <div className="flex gap-4">
              
              <a href="https://www.facebook.com/DrJosephOBGYN/" target="_blank" rel="noopener noreferrer" aria-label="Like us on Facebook" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#F4F2EB] hover:bg-[#F4F2EB] hover:text-[#181A18] transition-all duration-300">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 text-[#F4F2EB]">Explore</h4>
            <ul className="space-y-4 text-sm text-background/70">
              <li><Link href="/dr-alex-joseph" className="hover:text-[#F4F2EB] transition-colors">Meet Dr. Joseph</Link></li>
              <li><Link href="/local-resources" className="hover:text-[#F4F2EB] transition-colors">Local Resources</Link></li>
              <li><a href="tel:3184458120" className="hover:text-[#F4F2EB] transition-colors">Call Office</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 text-[#F4F2EB]">Contact</h4>
            <ul className="space-y-4 text-sm text-background/70">
              <li>
                <a href="https://maps.google.com/?q=One+Jackson+Square+Alexandria,+LA+71301" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-[#F4F2EB] transition-colors group">
                  <MapPin className="h-5 w-5 text-[#F4F2EB] shrink-0 group-hover:scale-110 transition-transform" />
                  <span>One Jackson Square<br />Alexandria, LA 71301</span>
                </a>
              </li>
              <li>
                <a href="tel:3184458120" className="flex items-center gap-3 hover:text-[#F4F2EB] transition-colors group">
                  <Phone className="h-5 w-5 text-[#F4F2EB] shrink-0 group-hover:scale-110 transition-transform" />
                  <span>(318) 445-8120</span>
                </a>
              </li>
              <li>
                <a href="mailto:concierge@alexjosephmd.com" className="flex items-center gap-3 hover:text-[#F4F2EB] transition-colors group">
                  <Mail className="h-5 w-5 text-[#F4F2EB] shrink-0 group-hover:scale-110 transition-transform" />
                  <span>concierge@alexjosephmd.com</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 text-[#F4F2EB]">Legal</h4>
            <ul className="space-y-4 text-sm text-background/70">
              <li><Link href="/privacy-policy" className="hover:text-[#F4F2EB] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-[#F4F2EB] transition-colors">Terms of Service</Link></li>
              <li><Link href="/hipaa-notice" className="hover:text-[#F4F2EB] transition-colors">HIPAA Notice</Link></li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-background/10 text-center text-sm text-background/50">
          <p>&copy; {new Date().getFullYear()} Dr. Alex Joseph. All rights reserved.</p>
          <p className="mt-2 text-xs">This website is for informational purposes and does not replace professional medical advice.</p>
        </div>
      </div>
    </footer>
  );
}
