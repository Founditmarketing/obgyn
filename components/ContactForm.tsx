"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to submit");
      
      setStatus("success");
      // Optional: Form reset will happen automatically if e.currentTarget.reset() is called, 
      // but showing the success message replaces the form typically.
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (status === "success") {
    return (
      <div className="bg-[#242824] border border-[#B89C86]/30 rounded-[3rem] p-10 md:p-14 shadow-2xl relative overflow-hidden h-fit flex flex-col items-center justify-center text-center">
        <h3 className="font-serif text-3xl text-[#F4F2EC] mb-4">Inquiry Received</h3>
        <p className="text-[#F4F2EC]/70 font-light leading-relaxed">
          Thank you for reaching out to Alexandria OBGYN. Our concierge team has received your message and will respond shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-[#242824] border border-[#F4F2EC]/10 rounded-[3rem] p-10 md:p-14 shadow-2xl relative overflow-hidden h-fit">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#B89C86]/5 rounded-full blur-3xl" />
      <h2 className="font-serif text-3xl md:text-4xl text-[#F4F2EC] mb-4">Send a Message</h2>
      <p className="text-[#F4F2EC]/60 font-light mb-8">We prioritize prompt replies. For medical emergencies, please call 911 or visit the nearest ER.</p>
      
      {status === "error" && (
        <div className="mb-6 p-4 rounded-xl bg-red-900/20 border border-red-500/20 text-red-200 text-sm">
          There was an error sending your message. Please try again.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6 relative z-10" autoComplete="off">
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-widest text-[#F4F2EC]/50 font-medium ml-4">Name</label>
          <input type="text" name="Name" required className="w-full bg-[#1A1F1B] border border-[#F4F2EC]/10 rounded-full px-6 py-4 text-[#F4F2EC] focus:outline-none focus:border-[#B89C86] transition-colors" placeholder="Jane Doe" />
        </div>
        
        <div className="space-y-2">
           <label className="text-[10px] uppercase tracking-widest text-[#F4F2EC]/50 font-medium ml-4">Email</label>
           <input type="email" name="Email" required className="w-full bg-[#1A1F1B] border border-[#F4F2EC]/10 rounded-full px-6 py-4 text-[#F4F2EC] focus:outline-none focus:border-[#B89C86] transition-colors" placeholder="jane@example.com" />
        </div>

        <div className="space-y-2">
           <label className="text-[10px] uppercase tracking-widest text-[#F4F2EC]/50 font-medium ml-4">Address</label>
           <input type="text" name="Address" required className="w-full bg-[#1A1F1B] border border-[#F4F2EC]/10 rounded-full px-6 py-4 text-[#F4F2EC] focus:outline-none focus:border-[#B89C86] transition-colors" placeholder="123 Example Street, City, State ZIP" />
        </div>

        <div className="space-y-2">
           <label className="text-[10px] uppercase tracking-widest text-[#F4F2EC]/50 font-medium ml-4">Message</label>
           <textarea name="Message" required rows={4} className="w-full bg-[#1A1F1B] border border-[#F4F2EC]/10 rounded-[2rem] px-6 py-4 text-[#F4F2EC] focus:outline-none focus:border-[#B89C86] transition-colors resize-none" placeholder="How can we help you today?" />
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-[#F4F2EC] text-[#1A1F1B] py-5 rounded-full text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#B89C86] hover:text-[#F4F2EC] transition-all duration-700 shadow-xl flex items-center justify-center gap-4 group mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Submit Inquiry"}
          {!isSubmitting && <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />}
        </button>
      </form>
    </div>
  );
}
