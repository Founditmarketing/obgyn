"use client";

import { useState } from "react";
import { motion } from "motion/react";

export function IntakeForm({ onSubmit }: { onSubmit: (data: any) => void }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    reason: "annual",
    notes: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-[#6D7D6D] mb-2">First Name</label>
          <input required type="text" className="w-full bg-[#F9F7F3] border border-[#D1DDD2] rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#8B9D8B] text-[#2C312C] transition-shadow shadow-sm" 
            value={formData.firstName} onChange={e => setFormData({...formData, firstName: e.target.value})} />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-[#6D7D6D] mb-2">Last Name</label>
          <input required type="text" className="w-full bg-[#F9F7F3] border border-[#D1DDD2] rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#8B9D8B] text-[#2C312C] transition-shadow shadow-sm" 
            value={formData.lastName} onChange={e => setFormData({...formData, lastName: e.target.value})} />
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-[#6D7D6D] mb-2">Email Address</label>
          <input required type="email" className="w-full bg-[#F9F7F3] border border-[#D1DDD2] rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#8B9D8B] text-[#2C312C] transition-shadow shadow-sm" 
            value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-[#6D7D6D] mb-2">Phone Number</label>
          <input required type="tel" className="w-full bg-[#F9F7F3] border border-[#D1DDD2] rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#8B9D8B] text-[#2C312C] transition-shadow shadow-sm" 
            value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-widest text-[#6D7D6D] mb-2">Reason for Visit</label>
        <div className="relative">
          <select className="w-full bg-[#F9F7F3] border border-[#D1DDD2] rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#8B9D8B] text-[#2C312C] transition-shadow shadow-sm appearance-none"
            value={formData.reason} onChange={e => setFormData({...formData, reason: e.target.value})}>
            <option value="annual">Annual Well-Woman Exam</option>
            <option value="pregnancy">Pregnancy Confirmation & Setup</option>
            <option value="consult">Fertility Consultation</option>
            <option value="menopause">Navigating Menopause</option>
            <option value="other">Other Concerns</option>
          </select>
          <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none">
            <svg className="w-5 h-5 text-[#8B9D8B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </div>
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-widest text-[#6D7D6D] mb-2">Additional Notes (Optional)</label>
        <textarea rows={3} className="w-full bg-[#F9F7F3] border border-[#D1DDD2] rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#8B9D8B] text-[#2C312C] transition-shadow shadow-sm resize-none" 
          value={formData.notes} onChange={e => setFormData({...formData, notes: e.target.value})} placeholder="Any specific concerns or details you'd like Dr. Joseph to know before your visit..." />
      </div>

      <motion.button 
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        type="submit" 
        className="w-full py-4 bg-[#3C4A3E] text-white rounded-full font-medium hover:bg-[#2A342B] transition-colors shadow-lg mt-8 text-lg" 
        suppressHydrationWarning
      >
        Confirm Appointment
      </motion.button>
    </form>
  );
}
