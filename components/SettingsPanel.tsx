
import React, { useContext } from 'react';
import { SettingsContext, SettingsContextType } from '../contexts/SettingsContext';
import CloseIcon from './icons/CloseIcon';
import SunIcon from './icons/SunIcon';
import MoonIcon from './icons/MoonIcon';

interface SettingsPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const SettingButton: React.FC<{
  onClick: () => void;
  isSelected: boolean;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  fontClass?: string;
}> = ({ onClick, isSelected, children, className = '', ariaLabel, fontClass }) => {
  const selectedClasses = 'bg-sky-100 text-sky-700 border-sky-500 dark:bg-sky-700 dark:text-sky-100 dark:border-sky-500 ring-1 ring-sky-500 dark:ring-sky-400';
  const unselectedClasses = 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100 dark:bg-slate-700 dark:text-slate-200 dark:border-slate-600 dark:hover:bg-slate-600';
  
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-3 py-2 border rounded-lg text-sm font-medium transition-colors duration-150 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-800 flex items-center justify-center min-w-[4rem] ${fontClass || ''} ${isSelected ? selectedClasses : unselectedClasses} ${className}`}
      aria-pressed={isSelected}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};


const SettingsPanel: React.FC<SettingsPanelProps> = ({ isOpen, onClose }) => {
  const context = useContext(SettingsContext);

  if (!context) {
    return null; 
  }

  const { 
    fontSizeLevel, 
    isDarkMode, 
    fontFamily, 
    letterSpacingLevel,
    lineHeightLevel,
    updateSettings 
  } = context;

  const FONT_FAMILIES = [
    { label: 'Inter', value: 'inter', fontClass: 'font-inter' },
    { label: 'Georgia', value: 'georgia', fontClass: 'font-georgia' },
    { label: 'Merriweather', value: 'merriweather', fontClass: 'font-merriweather' },
    { label: 'Cousine', value: 'cousine', fontClass: 'font-cousine' },
  ] as const;

  const FONT_SIZES = [
    { label: 'S', value: 0 },
    { label: 'M', value: 1 },
    { label: 'L', value: 2 },
    { label: 'XL', value: 3 },
    { label: '2XL', value: 4 },
  ];

  const LETTER_SPACINGS = [
    { label: 'Tight', value: 0 },
    { label: 'Normal', value: 1 },
    { label: 'Wide', value: 2 },
  ];

  const LINE_HEIGHTS = [
    { label: 'Tight', value: 0 },
    { label: 'Normal', value: 1 },
    { label: 'Relaxed', value: 2 },
    { label: 'Loose', value: 3 },
  ];

  const THEMES = [
    { label: 'Light', value: false, Icon: SunIcon },
    { label: 'Dark', value: true, Icon: MoonIcon },
  ];

  if (!isOpen) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="settings-panel-title"
    >
      <div
        className="bg-white dark:bg-slate-800 p-5 sm:p-6 rounded-xl shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()} 
      >
        <div className="flex justify-between items-center mb-6">
          <h2 id="settings-panel-title" className="text-xl font-semibold text-slate-800 dark:text-slate-100">
            Display Settings
          </h2>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-500 hover:bg-slate-200 dark:text-slate-400 dark:hover:bg-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-800"
            aria-label="Close settings panel"
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Font Family */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Font Family</label>
          <div role="group" aria-label="Font Family" className="grid grid-cols-2 gap-2">
            {FONT_FAMILIES.map((font) => (
              <SettingButton
                key={font.value}
                onClick={() => updateSettings({ fontFamily: font.value })}
                isSelected={fontFamily === font.value}
                fontClass={font.fontClass}
                ariaLabel={`Set font to ${font.label}`}
              >
                {font.label}
              </SettingButton>
            ))}
          </div>
        </div>

        {/* Font Size */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Font Size</label>
          <div role="group" aria-label="Font Size" className="flex space-x-2">
            {FONT_SIZES.map((size) => (
              <SettingButton
                key={size.value}
                onClick={() => updateSettings({ fontSizeLevel: size.value })}
                isSelected={fontSizeLevel === size.value}
                className="flex-1"
                ariaLabel={`Set font size to ${size.label}`}
              >
                {size.label}
              </SettingButton>
            ))}
          </div>
        </div>
        
        {/* Letter Spacing */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Letter Spacing</label>
          <div role="group" aria-label="Letter Spacing" className="flex space-x-2">
            {LETTER_SPACINGS.map((spacing) => (
              <SettingButton
                key={spacing.value}
                onClick={() => updateSettings({ letterSpacingLevel: spacing.value })}
                isSelected={letterSpacingLevel === spacing.value}
                className="flex-1"
                ariaLabel={`Set letter spacing to ${spacing.label}`}
              >
                {spacing.label}
              </SettingButton>
            ))}
          </div>
        </div>

        {/* Line Height */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Line Height</label>
          <div role="group" aria-label="Line Height" className="grid grid-cols-2 gap-2">
            {LINE_HEIGHTS.map((height) => (
              <SettingButton
                key={height.value}
                onClick={() => updateSettings({ lineHeightLevel: height.value })}
                isSelected={lineHeightLevel === height.value}
                ariaLabel={`Set line height to ${height.label}`}
              >
                {height.label}
              </SettingButton>
            ))}
          </div>
        </div>

        {/* Theme */}
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Theme</label>
          <div role="group" aria-label="Theme" className="grid grid-cols-2 gap-2">
            {THEMES.map((theme) => (
              <SettingButton
                key={theme.label}
                onClick={() => updateSettings({ isDarkMode: theme.value })}
                isSelected={isDarkMode === theme.value}
                ariaLabel={`Set theme to ${theme.label}`}
              >
                <theme.Icon className="w-4 h-4 mr-2" />
                {theme.label}
              </SettingButton>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;
