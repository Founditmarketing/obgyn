'use client';

import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    text: "The absolute best OBGYN I have ever had. Dr. Joseph is incredibly personable, kind, and profoundly dedicated to his patients before, during, and after birth. He made my entire pregnancy journey feel safe and heard.",
    author: "Sarah M.",
    role: "Mother of two",
    rating: 5
  },
  {
    id: 2,
    text: "After years of being dismissed by other doctors regarding my pain, Dr. Joseph actually listened. His surgical precision with minimally invasive robotics gave me my life back. His clinical empathy is unmatched in Alexandria.",
    author: "Jessica T.",
    role: "Surgical Patient",
    rating: 5
  },
  {
    id: 3,
    text: "I was incredibly nervous for my first pregnancy, but the entire clinic environment is so deeply calming. Dr. Joseph takes the time to sit down, look you in the eye, and answer every single question. You never feel rushed here.",
    author: "Emily R.",
    role: "First-time Mom",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-16 md:py-32 bg-[#1A1F1B] text-[#F4F2EC] relative border-b border-[#F4F2EC]/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-medium text-[#D9D2C5] mb-6 block">Patient Stories</span>
          <h2 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tighter text-[#F4F2EC] mb-8">
            The Trust of <br className="hidden md:block"/><span className="italic font-light text-[#B89C86]">Central Louisiana.</span>
          </h2>
          <p className="text-xl md:text-2xl text-[#F4F2EC]/60 font-light max-w-2xl mx-auto leading-relaxed text-balance">
            Do not just take our word for it. Read the unedited experiences of women who have trusted us with their most profound healthcare journeys.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-12 relative z-10">
          {reviews.map((review, i) => (
            <motion.div 
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#242824] p-10 md:p-12 rounded-[2.5rem] border border-[#F4F2EC]/5 hover:bg-[#2C302C] hover:border-[#F4F2EC]/10 transition-all duration-700 shadow-xl relative group"
            >
              <Quote className="absolute top-10 right-10 h-10 w-10 text-[#F4F2EC]/5 group-hover:-translate-y-2 group-hover:rotate-12 transition-all duration-700" />
              
              <div className="flex gap-1 mb-8">
                {[...Array(review.rating)].map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-[#B89C86] text-[#B89C86]" />
                ))}
              </div>
              
              <p className="text-lg md:text-xl text-[#F4F2EC] font-light leading-relaxed mb-10 italic">
                &quot;{review.text}&quot;
              </p>
              
              <div className="mt-auto">
                <h4 className="font-serif text-xl font-medium text-[#F4F2EC]">{review.author}</h4>
                <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#D9D2C5] block mt-1">{review.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center flex justify-center">
          <a href="https://www.google.com/search?q=Dr.+Alex+Joseph+OBGYN+Alexandria+LA#lrd=0x862fed8cfbe317df:0xd53202ae812ffcb1,1,,," target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 text-[#F4F2EC] hover:text-[#B89C86] transition-colors font-medium group text-[10px] md:text-xs uppercase tracking-[0.2em] shrink-0 border-b border-[#F4F2EC]/20 pb-2 hover:border-[#B89C86]">
            Read more reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
