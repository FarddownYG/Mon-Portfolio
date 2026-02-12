import type { LanguageCode } from '../config/languages';
import { translationsEN } from './en';
import { translationsFR } from './fr';
import { translationsES } from './es';
import { translationsIT } from './it';
import { translationsDE } from './de';
import { translationsNL } from './nl';
import { translationsPT } from './pt';
import { translationsPL } from './pl';
import { translationsRO } from './ro';
import { translationsSV } from './sv';
import { translationsEL } from './el';
import { translationsRU } from './ru';
import { translationsAR } from './ar';
import { translationsHI } from './hi';
import { translationsZH } from './zh';
import { translationsJA } from './ja';
import { translationsKO } from './ko';

export const translations: Record<LanguageCode, any> = {
  fr: translationsFR,
  es: translationsES,
  it: translationsIT,
  de: translationsDE,
  en: translationsEN,
  nl: translationsNL,
  pt: translationsPT,
  pl: translationsPL,
  ro: translationsRO,
  sv: translationsSV,
  el: translationsEL,
  ru: translationsRU,
  ar: translationsAR,
  hi: translationsHI,
  zh: translationsZH,
  ja: translationsJA,
  ko: translationsKO,
};
