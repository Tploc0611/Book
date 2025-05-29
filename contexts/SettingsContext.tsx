
import React, { createContext, useState, useEffect, ReactNode, useCallback } from 'react';

export interface SettingsState {
  fontSizeLevel: number; // 0:sm, 1:base, 2:lg, 3:xl, 4:2xl
  isDarkMode: boolean;
  fontFamily: 'cousine' | 'inter' | 'georgia' | 'merriweather';
  letterSpacingLevel: number; // 0:tight, 1:normal, 2:wide
  lineHeightLevel: number; // 0:tight, 1:normal, 2:relaxed, 3:loose
}

export interface SettingsContextType extends SettingsState {
  updateSettings: (newSettings: Partial<SettingsState>) => void;
}

const FONT_SIZE_LEVELS = 5; // 0 to 4
const LETTER_SPACING_LEVELS = 3; // 0 to 2
const LINE_HEIGHT_LEVELS = 4; // 0 to 3

const defaultSettings: SettingsState = {
  fontSizeLevel: 1, // base
  isDarkMode: false,
  fontFamily: 'inter',
  letterSpacingLevel: 1, // normal
  lineHeightLevel: 1, // normal
};

export const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

interface SettingsProviderProps {
  children: ReactNode;
}

export const SettingsProvider: React.FC<SettingsProviderProps> = ({ children }) => {
  const [settings, setSettings] = useState<SettingsState>(() => {
    if (typeof window !== 'undefined') {
      const savedSettings = localStorage.getItem('bookReaderSettings');
      if (savedSettings) {
        // Merge saved settings with defaults to ensure new settings are included
        const parsedSettings = JSON.parse(savedSettings);
        return { ...defaultSettings, ...parsedSettings };
      }
    }
    return defaultSettings;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('bookReaderSettings', JSON.stringify(settings));
      if (settings.isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [settings]);

  const updateSettings = useCallback((newSettings: Partial<SettingsState>) => {
    setSettings(prevSettings => {
      const updated = { ...prevSettings, ...newSettings };
      if (newSettings.fontSizeLevel !== undefined) {
        updated.fontSizeLevel = Math.max(0, Math.min(newSettings.fontSizeLevel, FONT_SIZE_LEVELS - 1));
      }
      if (newSettings.letterSpacingLevel !== undefined) {
        updated.letterSpacingLevel = Math.max(0, Math.min(newSettings.letterSpacingLevel, LETTER_SPACING_LEVELS - 1));
      }
      if (newSettings.lineHeightLevel !== undefined) {
        updated.lineHeightLevel = Math.max(0, Math.min(newSettings.lineHeightLevel, LINE_HEIGHT_LEVELS - 1));
      }
      return updated;
    });
  }, []);

  return (
    <SettingsContext.Provider value={{ ...settings, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};
