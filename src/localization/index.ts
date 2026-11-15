import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getLocales } from 'expo-localization';
import en from './translations/en.json';
import uk from './translations/uk.json';

export const resources = {
  en: { translation: en },
  uk: { translation: uk },
} as const;

const deviceLanguage = getLocales()[0]?.languageCode ?? 'en';
const initialLanguage = deviceLanguage === 'uk' ? 'uk' : 'en';

i18n.use(initReactI18next).init({
  resources,
  lng: initialLanguage,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;