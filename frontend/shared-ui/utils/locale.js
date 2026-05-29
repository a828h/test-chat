const RTL_LANGUAGE_PREFIXES = ['ar', 'fa', 'he', 'iw', 'ur', 'ps', 'sd', 'ug', 'yi']

/**
 * Returns true when the locale should use right-to-left layout.
 * Accepts BCP-47 tags (e.g. fa-IR) and short codes (e.g. fa).
 */
export function isRtlLocale (locale) {
  if (!locale) return false

  const normalized = String(locale).trim().toLowerCase().replace(/_/g, '-')
  const language = normalized.split('-')[0]

  return RTL_LANGUAGE_PREFIXES.includes(language)
}

/** @returns {'ltr' | 'rtl'} */
export function getTextDirection (locale) {
  return isRtlLocale(locale) ? 'rtl' : 'ltr'
}

/** Apply lang and dir on the document root for the active locale. */
export function applyDocumentLocale (locale) {
  if (typeof document === 'undefined') return

  const root = document.documentElement
  const direction = getTextDirection(locale)

  root.lang = locale || 'en-US'
  root.dir = direction
}
