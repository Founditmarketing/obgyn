import Link from 'next/link';
import { HeartPulse, Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="bg-primary/20 p-2 rounded-full">
                <HeartPulse className="h-6 w-6 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-medium tracking-tight">Dr. Alex Joseph</span>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">Elevated Women&apos;s Healthcare</span>
              </div>
            </Link>
            <p className="text-sm text-background/70 mb-6 max-w-xs leading-relaxed">
              A digital sanctuary for women&apos;s healthcare in Alexandria, LA. Featuring biophilic design, hyper-personalized patient journeys, and luxury hospitality.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-background/50 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/50 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 text-primary">Explore</h4>
            <ul className="space-y-4 text-sm text-background/70">
              <li><Link href="#expertise" className="hover:text-primary transition-colors">Expertise</Link></li>
              <li><Link href="#concierge" className="hover:text-primary transition-colors">Alexandria Concierge</Link></li>
              <li><Link href="#doula" className="hover:text-primary transition-colors">Digital Doula</Link></li>
              <li><Link href="#book" className="hover:text-primary transition-colors">Book a Visit</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 text-primary">Contact</h4>
            <ul className="space-y-4 text-sm text-background/70">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>One Jackson Square<br />Alexandria, LA 71301</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span>(318) 445-8120</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span>concierge@alexjosephmd.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 text-primary">Legal</h4>
            <ul className="space-y-4 text-sm text-background/70">
              <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">HIPAA Notice</Link></li>
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
