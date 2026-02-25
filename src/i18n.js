import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",

    resources: {
      en: {
        translation: {
          hero_title: "Unlimited Edits, Creativity & More",
          signin: "Sign In",
        },
      },

      hi: {
        translation: {
          hero_title: "अनलिमिटेड एडिट्स, क्रिएटिविटी और बहुत कुछ",
          signin: "साइन इन",
        },
      },

      ml: {
        translation: {
          hero_title: "അപരിമിത എഡിറ്റുകൾ, സൃഷ്ടിപരതയും കൂടുതൽ",
          signin: "സൈൻ ഇൻ",
        },
      },
      ar: {
        translation: {
          hero_title: "تعديلات غير محدودة، إبداع وأكثر",
          signin: "تسجيل الدخول",
        },
      },
    },

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
