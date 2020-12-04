import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import XHR from "i18next-xhr-backend";

import translationEng from "./locales/en/translation.json";
import translationTr from "./locales/tr/translation.json";

i18n
  .use(XHR)
  .use(LanguageDetector)
  .init({
    debug: true,
    lng: "en",
    fallbackLng: "en", // use en if detected lng is not available

    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },

    resources: {
      en: {
        translations: translationEng,
      },
      tr: {
        translations: translationTr,
      },
    },
    ns: ["translations"],
    defaultNS: "translations",
  });

export default i18n;
