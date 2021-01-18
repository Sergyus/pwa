import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import detector from 'i18next-browser-languagedetector';
import XHR from 'i18next-xhr-backend';

// import en from '../../../public/locales/en/en.json';
// import ru from '../../../public/locales/ru/ru.json';
// import uk from '../../../public/locales/uk/uk.json';

export const LANGUAGES = ['en', 'ru', 'uk'];

export default i18n
  .use(detector)
  .use(XHR)
  .use(initReactI18next)
  .init({
    debug: false,
    resources: {
      en: {
        translation: {
          React: 'Welcome to React and react-i18next',
        },
        menu: {
          home: 'Home',
          blog: 'Blog',
          about: 'About',
        },
      },
      ru: {
        translation: {
          React: 'Добро пожаловать в React и react-i18next',
        },
        menu: {
          home: 'Главная',
          blog: 'Блог',
          about: 'О Нас',
        },
      },
      uk: {
        translation: {
          React: 'Ласкаво просимо до React і response-i18next',
        },
        menu: {
          home: 'Головна',
          blog: 'Блог',
          about: 'Про нас',
        },
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    keySeparator: false,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  });
