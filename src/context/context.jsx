import { createContext, useState, useContext } from 'react';

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [fontSize, setFontSize] = useState('medium');
  const [language, setLanguage] = useState('en');

  return (
    <SettingsContext.Provider value={{ fontSize, setFontSize, language, setLanguage }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);
