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
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label className="block text-[10px] font-medium uppercase tracking-[0.2em] text-[#7E867E] mb-3">First Name</label>
          <input required type="text" className="w-full bg-white border-b-2 border-[#E3E1DB] px-2 py-3 focus:outline-none focus:border-[#BCA38F] text-[#2A312A] transition-colors bg-transparent rounded-none" 
            value={formData.firstName} onChange={e => setFormData({...formData, firstName: e.target.value})} placeholder="Jane" />
        </div>
        <div>
          <label className="block text-[10px] font-medium uppercase tracking-[0.2em] text-[#7E867E] mb-3">Last Name</label>
          <input required type="text" className="w-full bg-white border-b-2 border-[#E3E1DB] px-2 py-3 focus:outline-none focus:border-[#BCA38F] text-[#2A312A] transition-colors bg-transparent rounded-none" 
            value={formData.lastName} onChange={e => setFormData({...formData, lastName: e.target.value})} placeholder="Doe" />
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label className="block text-[10px] font-medium uppercase tracking-[0.2em] text-[#7E867E] mb-3">Email Address</label>
          <input required type="email" className="w-full bg-white border-b-2 border-[#E3E1DB] px-2 py-3 focus:outline-none focus:border-[#BCA38F] text-[#2A312A] transition-colors bg-transparent rounded-none" 
            value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} placeholder="jane@example.com" />
        </div>
        <div>
          <label className="block text-[10px] font-medium uppercase tracking-[0.2em] text-[#7E867E] mb-3">Phone Number</label>
          <input required type="tel" className="w-full bg-white border-b-2 border-[#E3E1DB] px-2 py-3 focus:outline-none focus:border-[#BCA38F] text-[#2A312A] transition-colors bg-transparent rounded-none" 
            value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} placeholder="(555) 123-4567" />
        </div>
      </div>

      <div>
        <label className="block text-[10px] font-medium uppercase tracking-[0.2em] text-[#7E867E] mb-3">Reason for Visit</label>
        <div className="relative">
          <select className="w-full bg-white border-b-2 border-[#E3E1DB] px-2 py-4 focus:outline-none focus:border-[#BCA38F] text-[#2A312A] transition-colors bg-transparent rounded-none appearance-none font-medium"
            value={formData.reason} onChange={e => setFormData({...formData, reason: e.target.value})}>
            <option value="annual">Annual Well-Woman Exam</option>
            <option value="pregnancy">Pregnancy Confirmation & Setup</option>
            <option value="consult">Fertility Consultation</option>
            <option value="menopause">Navigating Menopause</option>
            <option value="other">Other Concerns</option>
          </select>
          <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
            <svg className="w-5 h-5 text-[#BCA38F]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </div>
        </div>
      </div>

      <div>
        <label className="block text-[10px] font-medium uppercase tracking-[0.2em] text-[#7E867E] mb-3">Additional Notes (Optional)</label>
        <textarea rows={2} className="w-full bg-white border-b-2 border-[#E3E1DB] px-2 py-3 focus:outline-none focus:border-[#BCA38F] text-[#2A312A] transition-colors bg-transparent rounded-none resize-none" 
          value={formData.notes} onChange={e => setFormData({...formData, notes: e.target.value})} placeholder="Any specific concerns..." />
      </div>

      <motion.button 
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit" 
        className="w-full py-5 bg-[#2A312A] text-white rounded-full text-xs uppercase tracking-[0.1em] font-medium hover:bg-[#596E5A] transition-all duration-500 shadow-md hover:shadow-lg mt-10" 
        suppressHydrationWarning
      >
        Confirm Appointment
      </motion.button>
    </form>
  );
}
