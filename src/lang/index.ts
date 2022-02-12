import { Locales } from "./locales";
import { createI18n } from "vue-i18n";

import en from "./en.json";
import fr from "./fr.json";

const messagesLang = {
  [Locales.EN]: en,
  [Locales.FR]: fr,
};

export default createI18n({
  legacy: false,
  locale: Locales.FR,
  fallbackLocale: Locales.EN,
  globalInjection: true,
  messages: messagesLang,
});
