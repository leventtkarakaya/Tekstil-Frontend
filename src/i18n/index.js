import i18next from "i18next";
import Backend from "i18next-http-backend";
import I18NextLocalStorageBackend from "i18next-localstorage-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(Backend)
  .init({
    fallbackLng: "tr",
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: (lng) => `./locales/${lng}/Translation.json`,
      I18NextLocalStorageBackend,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18next;
