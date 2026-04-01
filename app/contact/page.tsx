import type { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | Alexandria OBGYN',
  description: 'Get in touch with Dr. Alex Joseph for personalized women\'s healthcare in Central Louisiana.',
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full bg-[#1A1F1B] min-h-screen text-[#F4F2EC] selection:bg-[#B89C86]">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-12 relative z-10 w-full border-b border-[#F4F2EC]/10">
        <div className="max-w-[70rem] mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#F4F2EC]/5 text-[#F4F2EC] font-medium text-[10px] md:text-xs tracking-[0.2em] uppercase border border-[#F4F2EC]/10">
            <Phone className="h-4 w-4 text-[#B89C86]" />
            <span>We are here for you</span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-[6rem] leading-[0.95] tracking-tighter text-[#F4F2EC] text-balance">
            Connect with <br className="hidden md:block"/><span className="italic font-light text-[#B89C86]">Our Sanctuary.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-[#F4F2EC]/70 leading-relaxed font-light text-balance max-w-3xl mx-auto">
            Whether you are an existing patient with a portal question or a new patient looking to schedule a consultation, our concierge team is ready to assist.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-24 px-6 lg:px-12 max-w-[80rem] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-20">
        
        {/* Contact Info */}
        <div className="space-y-12">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-[#F4F2EC] mb-10">Clinic Details</h2>
            <div className="space-y-8">
              <a href="https://maps.google.com/?q=One+Jackson+Square+Alexandria,+LA+71301" target="_blank" rel="noopener noreferrer" className="flex items-start gap-6 group hover:bg-[#242824] p-6 rounded-3xl transition-colors border border-transparent hover:border-[#F4F2EC]/10">
                <div className="w-14 h-14 bg-[#F4F2EC]/5 rounded-full flex items-center justify-center shrink-0 border border-[#F4F2EC]/10 group-hover:bg-[#B89C86]/20 transition-colors">
                  <MapPin className="h-6 w-6 text-[#B89C86]" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-[#F4F2EC] mb-2 uppercase tracking-widest text-[10px] md:text-xs">Location</h3>
                  <p className="text-[#F4F2EC]/70 text-lg font-light leading-relaxed">
                    One Jackson Square<br />Alexandria, LA 71301
                  </p>
                </div>
              </a>

              <a href="tel:3184458120" className="flex items-start gap-6 group hover:bg-[#242824] p-6 rounded-3xl transition-colors border border-transparent hover:border-[#F4F2EC]/10">
                <div className="w-14 h-14 bg-[#F4F2EC]/5 rounded-full flex items-center justify-center shrink-0 border border-[#F4F2EC]/10 group-hover:bg-[#B89C86]/20 transition-colors">
                  <Phone className="h-6 w-6 text-[#B89C86]" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-[#F4F2EC] mb-2 uppercase tracking-widest text-[10px] md:text-xs">Phone</h3>
                  <p className="text-[#F4F2EC]/70 text-lg font-light leading-relaxed">
                    (318) 445-8120
                  </p>
                </div>
              </a>

              <a href="mailto:concierge@alexjosephmd.com" className="flex items-start gap-6 group hover:bg-[#242824] p-6 rounded-3xl transition-colors border border-transparent hover:border-[#F4F2EC]/10">
                <div className="w-14 h-14 bg-[#F4F2EC]/5 rounded-full flex items-center justify-center shrink-0 border border-[#F4F2EC]/10 group-hover:bg-[#B89C86]/20 transition-colors">
                  <Mail className="h-6 w-6 text-[#B89C86]" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-[#F4F2EC] mb-2 uppercase tracking-widest text-[10px] md:text-xs">Email</h3>
                  <p className="text-[#F4F2EC]/70 text-lg font-light leading-relaxed">
                    concierge@alexjosephmd.com
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-6 p-6 rounded-3xl border border-transparent">
                <div className="w-14 h-14 bg-[#F4F2EC]/5 rounded-full flex items-center justify-center shrink-0 border border-[#F4F2EC]/10">
                  <Clock className="h-6 w-6 text-[#B89C86]" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-[#F4F2EC] mb-2 uppercase tracking-widest text-[10px] md:text-xs">Hours</h3>
                  <p className="text-[#F4F2EC]/70 text-lg font-light leading-relaxed">
                    Monday - Thursday: 8:00 AM - 5:00 PM<br/>
                    Friday: 8:00 AM - 12:00 PM<br/>
                    Weekend: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Placeholder */}
        <div className="bg-[#242824] border border-[#F4F2EC]/10 rounded-[3rem] p-10 md:p-14 shadow-2xl relative overflow-hidden h-fit">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#B89C86]/5 rounded-full blur-3xl" />
          <h2 className="font-serif text-3xl md:text-4xl text-[#F4F2EC] mb-4">Send a Message</h2>
          <p className="text-[#F4F2EC]/60 font-light mb-10">We prioritize prompt replies. For medical emergencies, please call 911 or visit the nearest ER.</p>
          
          <form className="space-y-6 relative z-10" autoComplete="off">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-[#F4F2EC]/50 font-medium ml-4">First Name</label>
                <input type="text" className="w-full bg-[#1A1F1B] border border-[#F4F2EC]/10 rounded-full px-6 py-4 text-[#F4F2EC] focus:outline-none focus:border-[#B89C86] transition-colors" placeholder="Jane" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-[#F4F2EC]/50 font-medium ml-4">Last Name</label>
                <input type="text" className="w-full bg-[#1A1F1B] border border-[#F4F2EC]/10 rounded-full px-6 py-4 text-[#F4F2EC] focus:outline-none focus:border-[#B89C86] transition-colors" placeholder="Doe" />
              </div>
            </div>
            
            <div className="space-y-2">
               <label className="text-[10px] uppercase tracking-widest text-[#F4F2EC]/50 font-medium ml-4">Email Address</label>
               <input type="email" className="w-full bg-[#1A1F1B] border border-[#F4F2EC]/10 rounded-full px-6 py-4 text-[#F4F2EC] focus:outline-none focus:border-[#B89C86] transition-colors" placeholder="jane@example.com" />
            </div>

            <div className="space-y-2">
               <label className="text-[10px] uppercase tracking-widest text-[#F4F2EC]/50 font-medium ml-4">Message</label>
               <textarea rows={4} className="w-full bg-[#1A1F1B] border border-[#F4F2EC]/10 rounded-[2rem] px-6 py-4 text-[#F4F2EC] focus:outline-none focus:border-[#B89C86] transition-colors resize-none" placeholder="How can we help you today?" />
            </div>

            <button type="button" className="w-full bg-[#F4F2EC] text-[#1A1F1B] py-5 rounded-full text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#B89C86] hover:text-[#F4F2EC] transition-all duration-700 shadow-xl flex items-center justify-center gap-4 group mt-4">
              Submit Inquiry
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>

      </section>
    </div>
  );
}
