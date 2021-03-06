import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import detector from 'i18next-browser-languagedetector';
import backend from 'i18next-xhr-backend';

export const LANGUAGES = ['en', 'ru', 'uk'];

export default i18n
  .use(detector)
  .use(backend)
  .use(initReactI18next)
  .init(
    {
      debug: false,
      ns: ['menu', 'translation'],
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
      react: {
        wait: true,
      },
    },
    (_err, t) => {
      t('myKey');
      t('common:myKey');
    },
  );
