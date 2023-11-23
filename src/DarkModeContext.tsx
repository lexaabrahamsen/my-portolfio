import React, { createContext, useState, FC } from 'react';

interface DarkModeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextType | null>(null);

interface DarkModeProviderProps {
  children: React.ReactNode;
}

const DarkModeProvider: FC<DarkModeProviderProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

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
}

export { DarkModeContext, DarkModeProvider };
