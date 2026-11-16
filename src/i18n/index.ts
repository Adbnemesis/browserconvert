import { Locale, DEFAULT_LOCALE } from "./locales";
import { TranslationSchema } from "./translations/types";
import { enTranslations } from "./translations/en";
import { esTranslations } from "./translations/es";
import { ptTranslations } from "./translations/pt";
import { deTranslations } from "./translations/de";
import { frTranslations } from "./translations/fr";
import { itTranslations } from "./translations/it";

const dictionaries: Record<Locale, TranslationSchema> = {
  en: enTranslations,
  es: esTranslations,
  pt: ptTranslations,
  de: deTranslations,
  fr: frTranslations,
  it: itTranslations,
};

export function getTranslations(locale?: Locale): TranslationSchema {
  if (locale && dictionaries[locale]) {
    return dictionaries[locale];
  }
  return dictionaries[DEFAULT_LOCALE];
}

export * from "./locales";
export * from "./translations/types";
