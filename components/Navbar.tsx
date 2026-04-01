'use client';

import Link from 'next/link';
import { useTheme } from './ThemeProvider';
import { HeartPulse, Menu, X, Phone, MapPin, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { LoginButton } from './auth/LoginButton';

const serviceLinks = [
  { name: 'Pregnancy Care & Delivery', href: '/pregnancy-care-delivery-alexandria' },
  { name: 'Menopause & Hormone Therapy', href: '/menopause-hormone-therapy-alexandria' },
  { name: 'Teen & Adolescent Gynecology', href: '/teen-adolescent-gynecology-alexandria' },
  { name: 'Robotic & Minimally Invasive Surgery', href: '/minimally-invasive-gynecological-surgery-alexandria' },
  { name: 'IUD Insertion & Removal', href: '/iud-insertion-removal-alexandria' },
  { name: '3D/4D Obstetric Ultrasounds', href: '/obstetric-ultrasounds-3d-4d-alexandria' },
  { name: 'Colposcopy Exams', href: '/colposcopy-exam-alexandria' },
  { name: 'Annual Well-Woman Exam', href: '/annual-well-woman-exam-alexandria' },
];

export function Navbar() {
  const { isNervousMode, toggleNervousMode } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const handleNervousToggle = () => {
    if (!isNervousMode) {
      setShowOverlay(true);
      setTimeout(() => {
        toggleNervousMode();
      }, 1500);
      setTimeout(() => {
        setShowOverlay(false);
      }, 4000);
    } else {
      toggleNervousMode();
    }
  };

  return (
    <>
    <header className="sticky top-0 z-50 w-full glass-panel border-b-0 shadow-sm border-white/40">
      <div className="container mx-auto px-6 lg:px-12 h-24 md:h-28 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 md:gap-4 group">
          <div className="w-10 h-10 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:scale-105">
            <Image src="/images/clinic_logo_joseph.png" alt="Clinic Logo" width={40} height={40} className="object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl md:text-2xl font-medium tracking-tight text-foreground transition-colors duration-500 group-hover:text-primary">Dr. Alex Joseph</span>
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mt-0.5 opacity-80">Women&apos;s Healthcare</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-2 focus:outline-none">
              Services <ChevronDown className="h-4 w-4 opacity-50 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute top-full -left-4 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50">
              <div className="bg-background/95 backdrop-blur-xl border border-border shadow-xl rounded-2xl w-72 p-2 flex flex-col gap-1">
                {serviceLinks.map((link) => (
                  <Link 
                    key={link.href} 
                    href={link.href}
                    className="px-4 py-3 rounded-xl text-sm font-medium text-foreground/80 hover:text-primary hover:bg-muted transition-colors leading-snug"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link href="/dr-alex-joseph" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors whitespace-nowrap">Meet Dr. Joseph</Link>
          <Link href="/local-resources" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors whitespace-nowrap">Local Resources</Link>
          <Link href="/contact" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors whitespace-nowrap">Contact</Link>
          
          <div className="flex items-center gap-4 ml-4 border-l border-border pl-4">
            <button
              suppressHydrationWarning
              onClick={handleNervousToggle}
              className={`text-xs px-3 py-1.5 rounded-full font-medium transition-all whitespace-nowrap ${
                isNervousMode 
                  ? 'bg-accent text-accent-foreground shadow-sm' 
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {isNervousMode ? 'Calm Mode Active' : 'Nervous?'}
            </button>
            <LoginButton />
            <a 
              href="tel:3184458120" 
              className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors shadow-sm"
            >
              Call Office
            </a>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          suppressHydrationWarning
          aria-label="Toggle Mobile Menu"
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="flex flex-col px-4 py-6 gap-4">
              <button 
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center justify-between text-lg font-medium text-foreground w-full text-left focus:outline-none"
              >
                Services
                <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col gap-3 pl-4 border-l border-border/50 ml-2 overflow-hidden"
                  >
                    {serviceLinks.map(link => (
                      <Link 
                        key={link.href} 
                        href={link.href} 
                        className="text-base text-foreground/70 active:text-primary py-1.5 transition-colors"
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setIsServicesOpen(false);
                        }}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <Link href="/dr-alex-joseph" className="text-lg font-medium text-foreground" onClick={() => setIsMobileMenuOpen(false)}>Meet Dr. Joseph</Link>
              <Link href="/local-resources" className="text-lg font-medium text-foreground" onClick={() => setIsMobileMenuOpen(false)}>Local Resources</Link>
              <Link href="/contact" className="text-lg font-medium text-foreground" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
              
              <div className="h-px bg-border my-2" />
              
              <button
                suppressHydrationWarning
                onClick={() => {
                  handleNervousToggle();
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all flex items-center justify-between ${
                  isNervousMode 
                    ? 'bg-accent/10 text-accent' 
                    : 'bg-muted/50 text-foreground'
                }`}
              >
                <span>Nervous Patient Mode</span>
                <span className="text-xs uppercase tracking-wider">{isNervousMode ? 'ON' : 'OFF'}</span>
              </button>
              
              <a 
                href="tel:3184458120" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full bg-primary text-primary-foreground text-center px-5 py-3 rounded-xl font-medium mt-2"
              >
                Call Office
              </a>
              
              <div className="mt-4 flex justify-center w-full">
                <LoginButton />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Nervous Mode Emergency Bar */}
      <AnimatePresence>
        {isNervousMode && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-accent text-accent-foreground py-3 sm:py-2 px-4 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-6 text-xs sm:text-sm font-medium shadow-md border-t border-accent-foreground/10"
          >
            <a href="tel:911" className="flex items-center gap-2 hover:underline">
              <Phone className="h-4 w-4" /> Call a Nurse Now
            </a>
            <a href="#directions" className="flex items-center gap-2 hover:underline">
              <MapPin className="h-4 w-4" /> Get Directions to Clinic
            </a>
          </motion.div>
        )}
      </AnimatePresence>

    </header>

    {/* Nervous Mode Activation Overlay */}
    <AnimatePresence>
      {showOverlay && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-[100] bg-[#181A18] flex flex-col items-center justify-center pointer-events-auto"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="w-32 h-32 rounded-full border border-[#596E5A] flex items-center justify-center relative mb-8"
          >
            <motion.div 
              animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.3, 0.1] }} 
              transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
              className="absolute inset-0 bg-[#596E5A] rounded-full blur-xl"
            />
            <HeartPulse className="h-10 w-10 text-[#596E5A] relative z-10" />
          </motion.div>
          <motion.h3 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="font-serif text-3xl md:text-4xl text-[#F4F2EC] mb-4 text-center"
          >
            Take a deep breath.
          </motion.h3>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.9, duration: 0.8 }}
            className="text-[#F4F2EC]/60 font-light text-lg text-center leading-relaxed px-4"
          >
            Quiet colors. Softer pacing. <br className="md:hidden"/>You are safe here.
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}
