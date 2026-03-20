'use client';

import Link from 'next/link';
import { useTheme } from './ThemeProvider';
import { HeartPulse, Menu, X, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const { isNervousMode, toggleNervousMode } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-border/40">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
            <HeartPulse className="h-6 w-6 text-primary" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl font-medium tracking-tight text-foreground">Dr. Alex Joseph</span>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">Elevated Women&apos;s Healthcare</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#expertise" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Expertise</Link>
          <Link href="#concierge" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Alexandria Concierge</Link>
          <Link href="#doula" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Digital Doula</Link>
          
          <div className="flex items-center gap-4 ml-4 border-l border-border pl-4">
            <button
              suppressHydrationWarning
              onClick={toggleNervousMode}
              className={`text-xs px-3 py-1.5 rounded-full font-medium transition-all ${
                isNervousMode 
                  ? 'bg-accent text-accent-foreground shadow-sm' 
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {isNervousMode ? 'Calm Mode Active' : 'Nervous?'}
            </button>
            <Link 
              href="#book" 
              className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors shadow-sm"
            >
              Book Visit
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          suppressHydrationWarning
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
              <Link href="#expertise" className="text-lg font-medium text-foreground" onClick={() => setIsMobileMenuOpen(false)}>Expertise</Link>
              <Link href="#concierge" className="text-lg font-medium text-foreground" onClick={() => setIsMobileMenuOpen(false)}>Alexandria Concierge</Link>
              <Link href="#doula" className="text-lg font-medium text-foreground" onClick={() => setIsMobileMenuOpen(false)}>Digital Doula</Link>
              
              <div className="h-px bg-border my-2" />
              
              <button
                suppressHydrationWarning
                onClick={() => {
                  toggleNervousMode();
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
              
              <Link 
                href="#book" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full bg-primary text-primary-foreground text-center px-5 py-3 rounded-xl font-medium mt-2"
              >
                Book Your Visit
              </Link>
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
            className="bg-accent text-accent-foreground py-2 px-4 flex justify-center items-center gap-6 text-sm font-medium"
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
  );
}
