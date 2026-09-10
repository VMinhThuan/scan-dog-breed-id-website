import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import commonVi from './locales/vi/common.json';
import homeVi from './locales/vi/home.json';
import identifyVi from './locales/vi/identify.json';
import resultVi from './locales/vi/result.json';
import breedsVi from './locales/vi/breeds.json';
import aiVi from './locales/vi/ai.json';
import researchVi from './locales/vi/research.json';
import howItWorksVi from './locales/vi/howItWorks.json';
import faqVi from './locales/vi/faq.json';
import aboutVi from './locales/vi/about.json';
import authVi from './locales/vi/auth.json';
import historyVi from './locales/vi/history.json';
import profileVi from './locales/vi/profile.json';
import errorsVi from './locales/vi/errors.json';

import commonEn from './locales/en/common.json';
import homeEn from './locales/en/home.json';
import identifyEn from './locales/en/identify.json';
import resultEn from './locales/en/result.json';
import breedsEn from './locales/en/breeds.json';
import aiEn from './locales/en/ai.json';
import researchEn from './locales/en/research.json';
import howItWorksEn from './locales/en/howItWorks.json';
import faqEn from './locales/en/faq.json';
import aboutEn from './locales/en/about.json';
import authEn from './locales/en/auth.json';
import historyEn from './locales/en/history.json';
import profileEn from './locales/en/profile.json';
import errorsEn from './locales/en/errors.json';

const getSavedLanguage = () => {
  try {
    const saved = localStorage.getItem('dogbreedid_language');
    if (saved === 'vi' || saved === 'en') return saved;
  } catch (e) {
    console.error('Error reading language from localStorage:', e);
  }
  return 'vi';
};

const initialLang = getSavedLanguage();
document.documentElement.lang = initialLang;

i18n
  .use(initReactI18next)
  .init({
    resources: {
      vi: {
        common: commonVi,
        home: homeVi,
        identify: identifyVi,
        result: resultVi,
        breeds: breedsVi,
        ai: aiVi,
        research: researchVi,
        howItWorks: howItWorksVi,
        faq: faqVi,
        about: aboutVi,
        auth: authVi,
        history: historyVi,
        profile: profileVi,
        errors: errorsVi
      },
      en: {
        common: commonEn,
        home: homeEn,
        identify: identifyEn,
        result: resultEn,
        breeds: breedsEn,
        ai: aiEn,
        research: researchEn,
        howItWorks: howItWorksEn,
        faq: faqEn,
        about: aboutEn,
        auth: authEn,
        history: historyEn,
        profile: profileEn,
        errors: errorsEn
      }
    },
    lng: initialLang,
    fallbackLng: 'en',
    defaultNS: 'common',
    interpolation: {
      escapeValue: false
    }
  });

i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng;
  try {
    localStorage.setItem('dogbreedid_language', lng);
  } catch (e) {
    console.error('Error saving language to localStorage:', e);
  }
});

export default i18n;
