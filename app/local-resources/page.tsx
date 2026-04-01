import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, MapPin, Coffee, Activity, Baby, HeartHandshake } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Local Resources & Concierge Guide | Alexandria OBGYN',
  description: 'Curated wellness, nutrition, and healthcare partners in Central Louisiana carefully selected by Dr. Alex Joseph.',
};

export default function LocalResourcesPage() {
  const resourceCategories = [
    {
      title: "Wellness & Movement",
      icon: <Activity className="h-6 w-6 text-[#1A1F1B]" />,
      description: "Facilities dedicated to keeping your body strong and your nervous system calm.",
      items: [
        { name: "Alexandria Prenatal Yoga", desc: "Gentle movement and breathing exercises tailored specifically for expectant mothers in a serene, temperature-controlled environment." },
        { name: "Cenla Pelvic Floor Therapy", desc: "Specialized postpartum recovery physical therapy to rebuild core strength and address pelvic floor dysfunction safely." }
      ]
    },
    {
      title: "Nutrition & Fuel",
      icon: <Coffee className="h-6 w-6 text-[#1A1F1B]" />,
      description: "Local establishments serving nutrient-dense, whole-food options.",
      items: [
        { name: "The Organic Cafe & Juice Bar", desc: "Nutrient-dense smoothies, bone broths, and organic meals perfect for pregnancy cravings and postpartum healing." },
        { name: "Harvest Market", desc: "A local grocer specializing in fresh, organic produce and high-quality supplements." }
      ]
    },
    {
      title: "Pediatric & Family Care",
      icon: <Baby className="h-6 w-6 text-[#1A1F1B]" />,
      description: "Trusted partners for when your little one arrives.",
      items: [
        { name: "Pediatrician Partners of Alexandria", desc: "Our highest recommendation for your newborn's dedicated care. Excellent bedside manner and highly responsive." },
        { name: "Central LA Lactation Consultants", desc: "In-home and clinic-based breastfeeding support and education from certified lactation consultants." }
      ]
    },
    {
      title: "Mental Health & Postpartum Support",
      icon: <HeartHandshake className="h-6 w-6 text-[#1A1F1B]" />,
      description: "Because your mental sanctuary is just as important as your physical health.",
      items: [
        { name: "Maternal Wellness Counseling", desc: "Therapists specializing in perinatal mood disorders, birth trauma, and the emotional transition into motherhood." },
        { name: "Alexandria Mother's Circle", desc: "A peer-led weekly support group for new and expecting mothers to connect and share experiences." }
      ]
    }
  ];

  return (
    <div className="flex flex-col w-full bg-[#1A1F1B] min-h-screen text-[#F4F2EC] selection:bg-[#B89C86]">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-12 relative z-10 w-full border-b border-[#F4F2EC]/10">
        <div className="max-w-[70rem] mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#F4F2EC]/5 text-[#F4F2EC] font-medium text-[10px] md:text-xs tracking-[0.2em] uppercase border border-[#F4F2EC]/10">
            <MapPin className="h-4 w-4 text-[#B89C86]" />
            <span>Alexandria & Marksville, LA</span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-[6rem] leading-[0.95] tracking-tighter text-[#F4F2EC] text-balance">
            The Alexandria <br className="hidden md:block"/><span className="italic font-light text-[#B89C86]">Concierge Guide.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-[#F4F2EC]/70 leading-relaxed font-light text-balance max-w-3xl mx-auto">
            Healthcare extends far beyond our clinic walls. Dr. Joseph has rigorously curated the absolute finest local resources in Central Louisiana to support your holistic wellness journey.
          </p>
        </div>
      </section>

      {/* Resources List */}
      <section className="py-24 px-6 lg:px-12 bg-[#F4F2EC] text-[#1A1F1B] rounded-t-[3rem] -mt-8 relative z-20">
        <div className="max-w-[70rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {resourceCategories.map((category, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#1A1F1B]/5 flex items-center justify-center shrink-0 border border-[#1A1F1B]/10">
                  {category.icon}
                </div>
                <div>
                  <h2 className="font-serif text-3xl text-[#1A1F1B]">{category.title}</h2>
                </div>
              </div>
              <p className="text-[#1A1F1B]/60 font-medium mb-8 text-sm uppercase tracking-widest">{category.description}</p>
              
              <div className="space-y-8 flex-grow">
                {category.items.map((item, i) => (
                  <div key={i} className="group cursor-default">
                    <h3 className="text-xl font-medium text-[#1A1F1B] mb-2 group-hover:text-[#4A5D4E] transition-colors">{item.name}</h3>
                    <p className="text-[#1A1F1B]/70 font-light leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-[#1A1F1B]/10" />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center pb-24">
          <Link href="/" className="inline-flex items-center gap-4 text-[#1A1F1B] hover:text-[#4A5D4E] transition-colors font-medium group text-[10px] md:text-xs uppercase tracking-[0.2em] mb-3 border-b border-[#1A1F1B]/20 pb-2 hover:border-[#4A5D4E]">
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-2 transition-transform duration-500" /> Return to Clinic Home
          </Link>
        </div>
      </section>
    </div>
  );
}
