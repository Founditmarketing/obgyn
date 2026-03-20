'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type ThemeContextType = {
  isNervousMode: boolean;
  toggleNervousMode: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isNervousMode, setIsNervousMode] = useState(false);

  useEffect(() => {
    if (isNervousMode) {
      document.documentElement.classList.add('nervous-mode');
    } else {
      document.documentElement.classList.remove('nervous-mode');
    }
  }, [isNervousMode]);

  const toggleNervousMode = () => setIsNervousMode((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isNervousMode, toggleNervousMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
