import React from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "../public/static/locales/en/common.json";
import translationAR from "../public/static/locales/ar/common.json";

// the translations
const resources = {
  en: {
    translation: translationEN
  },
  ar: {
    translation: translationAR
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
