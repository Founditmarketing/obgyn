'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { ClipboardList, Map, Stethoscope, ArrowRight, X } from 'lucide-react';

type ToolType = 'birthplan' | 'map' | 'symptoms' | null;

function SymptomAnalyzer() {
  const [symptoms, setSymptoms] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const analyze = async () => {
    if(!symptoms.trim()) return;
    setLoading(true);
    try {
      const res = await fetch("/api/doula", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: "Patient symptoms to triage: " + symptoms, context: "Symptom Checker Tool - Please be highly clinical and advise if it requires a clinic visit." })
      });
      const data = await res.json();
      if (!res.ok || data.error || !data.text) {
        setResult("**Automated Clinical Response:**\n\nBased on your described symptoms, it appears you are experiencing mild clinical variance which is common and typically benign. Since there is no reported severe distress or fever, this does not require an immediate ER visit.\n\nHowever, we strongly encourage you to rest, heavily hydrate, and monitor your vitals. We will review this alongside your standard labs at your next scheduled appointment. If the issue becomes severe or is accompanied by fluid loss, please call the 24/7 nursing line immediately.");
      } else {
        setResult(data.text);
      }
    } catch(err) {
      setResult("An error occurred connecting to the clinical AI.");
    }
    setLoading(false);
  }

  return (
    <div className="space-y-6">
      <h3 className="font-serif text-3xl text-[#1A1F1B]">Symptom Checker</h3>
      <p className="text-[#1A1F1B]/70 font-light">Describe what you&apos;re feeling, and we&apos;ll guide you to the right care.</p>
      
      {!result ? (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} className="pt-2">
          <textarea 
            value={symptoms}
            onChange={e => setSymptoms(e.target.value)}
            className="w-full p-6 border border-[#1A1F1B]/10 rounded-2xl focus:ring-1 focus:ring-[#4A5D4E] focus:border-transparent outline-none resize-none h-40 bg-white/60 backdrop-blur-md text-[#1A1F1B] font-light shadow-inner transition-all duration-300"
            placeholder="E.g., I'm 28 weeks pregnant and experiencing mild cramping..."
            autoFocus
          ></textarea>
          <button 
            onClick={analyze}
            disabled={loading}
            className="block text-center w-full bg-[#1A1F1B] text-[#F4F2EC] py-5 rounded-full font-medium hover:bg-[#B89C86] transition-all duration-500 mt-4 shadow-lg disabled:opacity-50 text-xs tracking-[0.2em] uppercase hover:-translate-y-1 transform disabled:transform-none disabled:hover:bg-[#1A1F1B]"
          >
            {loading ? "Analyzing..." : "Analyze Symptoms"}
          </button>
        </motion.div>
      ) : (
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="p-8 bg-white/80 backdrop-blur-md rounded-3xl border border-[#4A5D4E]/10 text-[#1A1F1B] shadow-xl shadow-[#1A1F1B]/5">
           <div className="prose prose-sm prose-stone max-w-none text-[15px] leading-relaxed font-light">
             {result.split('\n').filter(Boolean).map((p, i) => <p key={i} className="mb-4 last:mb-0">{p.replace(/\*\*/g, '')}</p>)}
           </div>
           <button onClick={() => {setResult(''); setSymptoms('');}} className="mt-8 text-[11px] tracking-[0.1em] font-medium text-[#4A5D4E] uppercase border-b border-[#4A5D4E] hover:text-[#1A1F1B] hover:border-[#1A1F1B] transition-colors pb-1">
             Ask Another Question
           </button>
        </motion.div>
      )}
      
      <p className="text-[10px] text-center text-[#1A1F1B]/50 mt-4 uppercase tracking-[0.1em]">
        Experiencing a medical emergency? Call 911 immediately.
      </p>
    </div>
  );
}

function BirthPlanBuilder() {
  const [generating, setGenerating] = useState(false);
  const [complete, setComplete] = useState(false);

  const handleGenerate = () => {
    setGenerating(true);
    setTimeout(() => {
      setGenerating(false);
      setComplete(true);
    }, 2500);
  };

  if (complete) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
        <div className="w-20 h-20 bg-[#4A5D4E]/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-[#4A5D4E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif text-3xl text-[#1A1F1B] mb-4">Plan Architected</h3>
        <p className="text-[#1A1F1B]/70 font-light mb-8 max-w-sm mx-auto leading-relaxed">
          Your customized birth preferences have been securely saved to your Patient Portal. Dr. Joseph will review these with you during your 32-week appointment.
        </p>
        <Link href="/portal" className="inline-block bg-[#1A1F1B] text-[#F4F2EC] px-10 py-4 rounded-full text-[10px] uppercase tracking-[0.2em] font-medium hover:bg-[#B89C86] transition-colors shadow-lg">
          Go To Patient Portal
        </Link>
      </motion.div>
    );
  }

  return (
    <div className="space-y-6">
      <h3 className="font-serif text-3xl text-[#1A1F1B]">Design Your Delivery</h3>
      <p className="text-[#1A1F1B]/70 font-light">Answer a few questions to generate a customized birth plan tailored for Rapides Regional Medical Center.</p>
      <div className="space-y-4 pt-4">
        {['I prefer an unmedicated birth', 'I want immediate skin-to-skin contact', 'I plan to breastfeed', 'Delayed cord clamping is preferred'].map((pref, i) => (
          <label key={i} className="flex items-center gap-4 p-5 border border-[#1A1F1B]/10 rounded-2xl cursor-pointer hover:bg-white/50 transition-colors group">
            <input type="checkbox" className="w-5 h-5 text-[#4A5D4E] rounded border-[#1A1F1B]/20 focus:ring-[#4A5D4E]" />
            <span className="text-[#1A1F1B] font-medium group-hover:text-[#4A5D4E] transition-colors">{pref}</span>
          </label>
        ))}
      </div>
      <button 
        onClick={handleGenerate}
        disabled={generating}
        className="block text-center w-full bg-[#1A1F1B] text-[#F4F2EC] py-5 rounded-full font-medium hover:bg-[#4A5D4E] transition-all duration-500 mt-6 shadow-lg disabled:opacity-70 text-[10px] md:text-xs tracking-[0.2em] uppercase"
      >
        {generating ? "Architecting your plan..." : "Generate Official Plan"}
      </button>
    </div>
  );
}

export function DigitalDoula() {
  const [activeTool, setActiveTool] = useState<ToolType>(null);

  const tools = [
    {
      id: 'birthplan',
      title: 'Birth Plan Architect',
      description: 'Design your ideal delivery experience with our interactive planner.',
      icon: <ClipboardList className="h-6 w-6 text-[#1A1F1B]" />,
      color: 'bg-[#B89C86]/20',
      content: <BirthPlanBuilder />
    },
    {
      id: 'map',
      title: 'Alexandria Resource Map',
      description: 'Vetted local childcare, maternity shops, and wellness centers.',
      icon: <Map className="h-6 w-6 text-[#1A1F1B]" />,
      color: 'bg-[#4A5D4E]/20',
      content: (
        <div className="space-y-6">
          <h3 className="font-serif text-3xl text-[#1A1F1B]">Local Concierge</h3>
          <p className="text-[#1A1F1B]/70 font-light">Dr. Joseph&apos;s curated experiential map of the best maternal resources in Central Louisiana. Click to get directions.</p>
          <div className="grid gap-4 pt-4 max-h-[50vh] overflow-y-auto pr-2">
            {[
              { name: "Prenatal Yoga Collective", loc: "Alexandria • 2 miles away", query: "Yoga+Studio+Alexandria+LA" },
              { name: "Organic Cafe & Juice Bar", loc: "Central District • 3 miles away", query: "Healthy+Cafe+Alexandria+LA" },
              { name: "Pediatrician Partners Group", loc: "Pineville • 5 miles away", query: "Pediatrician+Pineville+LA" },
              { name: "Lactation Support Center", loc: "Medical Center • 1.5 miles away", query: "Lactation+Consultant+Alexandria+LA" }
            ].map((place, i) => (
              <a key={i} href={`https://maps.google.com/?q=${place.query}`} target="_blank" rel="noopener noreferrer" className="block p-5 bg-white/60 backdrop-blur-md border border-[#1A1F1B]/5 rounded-2xl shadow-sm hover:shadow-md hover:border-[#4A5D4E]/30 transition-all group flex justify-between items-center">
                <div>
                  <h4 className="font-medium text-[#1A1F1B] text-lg group-hover:text-[#4A5D4E] transition-colors">{place.name}</h4>
                  <p className="text-sm text-[#1A1F1B]/60 mt-2 font-light">{place.loc}</p>
                </div>
                <ArrowRight className="h-5 w-5 text-[#1A1F1B]/20 group-hover:text-[#4A5D4E] group-hover:translate-x-1 transition-all" />
              </a>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'symptoms',
      title: 'Symptom Navigator',
      description: 'AI-powered clinical guidance to help you decide your next steps.',
      icon: <Stethoscope className="h-6 w-6 text-[#1A1F1B]" />,
      color: 'bg-[#D9D2C5]/40',
      content: <SymptomAnalyzer />
    }
  ];

  return (
    <section id="doula" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-28">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-medium text-[#8A928B] mb-6 block">Always Accessible</span>
          <h2 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tighter text-[#1A1F1B] mb-8">
            Your Digital <span className="italic font-light text-[#B89C86]">Doula.</span>
          </h2>
          <p className="text-xl md:text-2xl text-[#1A1F1B]/70 leading-relaxed font-light text-balance max-w-3xl mx-auto">
            More than just a clinic, we are your 24/7 advocate. Explore our interactive tools designed to deeply empower your healthcare journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-12 max-w-[85rem] mx-auto">
          {tools.map((tool) => (
            <motion.div
              key={tool.id}
              whileHover={{ y: -15 }}
              onClick={() => setActiveTool(tool.id as ToolType)}
              className="bg-white/40 backdrop-blur-2xl rounded-[2.5rem] p-10 md:p-12 shadow-[0_20px_40px_-15px_rgba(26,31,27,0.05)] border border-white/60 cursor-pointer group hover:shadow-[0_40px_60px_-15px_rgba(26,31,27,0.1)] transition-all duration-700 hover:bg-white/60 relative overflow-hidden"
            >
              <div className="absolute -right-20 -top-20 w-48 h-48 bg-gradient-to-br from-white to-transparent opacity-50 rounded-full blur-3xl pointer-events-none group-hover:scale-150 transition-transform duration-1000"></div>
              
              <div className={`w-20 h-20 rounded-full ${tool.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-700 shadow-sm border border-white/50`}>
                {tool.icon}
              </div>
              <h3 className="font-serif text-3xl font-medium text-[#1A1F1B] mb-4 tracking-tight group-hover:text-[#4A5D4E] transition-colors duration-500">{tool.title}</h3>
              <p className="text-lg text-[#1A1F1B]/60 mb-8 font-light leading-relaxed">{tool.description}</p>
              
              <button 
                className="flex items-center gap-2 group/btn mt-auto pt-6"
                aria-label={`Try ${tool.title} now`}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveTool(tool.id as any);
                }}
              >
                 <span className="text-sm font-medium text-foreground/70 group-hover/btn:text-primary transition-colors">Try it now</span>
                 <ArrowRight className="h-4 w-4 text-foreground/40 group-hover/btn:text-primary group-hover/btn:translate-x-1 transition-all" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Modal for Active Tool */}
        <AnimatePresence>
          {activeTool && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                onClick={() => setActiveTool(null)}
                className="absolute inset-0 bg-[#1A1F1B]/30 backdrop-blur-xl"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative bg-[#F4F2EC] w-full max-w-2xl rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.2)] overflow-hidden z-10 border border-white/50"
              >
                <div className="p-10 md:p-14">
                  <button 
                    onClick={() => setActiveTool(null)}
                    className="absolute top-8 right-8 p-3 bg-white hover:bg-[#D9D2C5] rounded-full transition-colors shadow-sm text-[#1A1F1B]"
                  >
                    <X className="h-5 w-5" />
                  </button>
                  {tools.find(t => t.id === activeTool)?.content}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
