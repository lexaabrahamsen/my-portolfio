import React, { createContext, useState, FC, useEffect } from 'react';

interface DarkModeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextType | null>(null);

interface DarkModeProviderProps {
  children: React.ReactNode;
}

const DarkModeProvider: FC<DarkModeProviderProps> = ({ children }) => {
  const savedDarkMode = localStorage.getItem('darkMode');
  const initialDarkMode = savedDarkMode ? JSON.parse(savedDarkMode) : false;
  const [darkMode, setDarkMode] = useState(initialDarkMode);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    setDarkMode(darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const contextValue = {
    darkMode,
    toggleDarkMode,
  };

  return (
    <div>
      <DarkModeContext.Provider value={contextValue}>
        {children}
      </DarkModeContext.Provider>
    </div>
  );
};

export { DarkModeContext, DarkModeProvider };
