import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    debug: true,
    ns: ['common'],
    fallbackNS: 'common',
    load: 'currentOnly',
    partialBundledLanguages: true,
    interpolation: {
      escapeValue: false, // react escapes by default
    },
    react: {
      useSuspense: true,
    }
  });

export default i18n;