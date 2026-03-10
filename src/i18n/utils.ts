/**
 * i18n utility functions for the MacSweep website.
 * Pure functions — no side effects, no global state.
 */
import { en, type TranslationKey } from './en'
import { zh } from './zh'

export type Locale = 'en' | 'zh'

const dictionaries: Record<Locale, Record<TranslationKey, string>> = { en, zh }

/**
 * Translate a key for a given locale.
 * Supports simple `{placeholder}` interpolation.
 */
export function t(
  locale: Locale,
  key: TranslationKey,
  params?: Record<string, string | number>,
): string {
  const value = dictionaries[locale]?.[key] ?? dictionaries.en[key] ?? key

  if (!params) return value

  return Object.entries(params).reduce<string>(
    (result, [k, v]) => result.replaceAll(`{${k}}`, String(v)),
    value,
  )
}

/** Extract locale from Astro URL (e.g. /zh/pricing → 'zh'). */
export function getLocaleFromUrl(url: URL): Locale {
  const [, segment] = url.pathname.split('/')
  return segment === 'zh' ? 'zh' : 'en'
}

/** Build a localised path — omits prefix for default locale (en). */
export function localePath(locale: Locale, path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  const clean = path.startsWith('/') ? path : `/${path}`
  const localized = locale === 'en' ? clean : `/zh${clean}`
  return `${base}${localized}`
}

/** Map Astro locale to BCP 47 hreflang value. */
export function hreflang(locale: Locale): string {
  return locale === 'zh' ? 'zh-CN' : 'en'
}
