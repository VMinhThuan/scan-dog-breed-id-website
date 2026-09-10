import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, ChevronDown, Check } from 'lucide-react';

export const LanguageSwitcher = ({ isMobile = false }) => {
  const { i18n, t } = useTranslation('common');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentLang = i18n.language || 'vi';

  const languages = [
    { code: 'vi', label: t('nav.vietnamese', 'Tiếng Việt') },
    { code: 'en', label: t('nav.english', 'English') }
  ];

  const handleLanguageChange = (code) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (isMobile) {
    return (
      <div className="flex flex-col gap-2 py-3 border-t border-slate-100">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider px-1">
          {t('nav.language', 'Ngôn ngữ')}
        </span>
        <div className="grid grid-cols-2 gap-2">
          {languages.map((lang) => {
            const isActive = currentLang.startsWith(lang.code);
            return (
              <button
                key={lang.code}
                type="button"
                onClick={() => handleLanguageChange(lang.code)}
                className={`py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-between border ${
                  isActive
                    ? 'bg-blue-50 text-blue-600 border-blue-200'
                    : 'bg-slate-50 text-slate-600 border-slate-200'
                }`}
              >
                <span>{lang.label}</span>
                {isActive && <Check className="w-3.5 h-3.5 text-blue-600" />}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-slate-100/80 hover:bg-slate-200/60 border border-slate-200/80 text-slate-700 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Switch Language"
        aria-expanded={isOpen}
      >
        <Globe className="w-4 h-4 text-blue-600 shrink-0" />
        <span className="uppercase font-extrabold">{currentLang.slice(0, 2)}</span>
        <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-2xl shadow-xl border border-slate-200 py-1.5 z-50 animate-in fade-in slide-in-from-top-2">
          {languages.map((lang) => {
            const isActive = currentLang.startsWith(lang.code);
            return (
              <button
                key={lang.code}
                type="button"
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full text-left px-3.5 py-2 text-xs font-semibold flex items-center justify-between transition-colors ${
                  isActive ? 'text-blue-600 bg-blue-50/70 font-bold' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{lang.label}</span>
                {isActive && <Check className="w-3.5 h-3.5 text-blue-600" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
