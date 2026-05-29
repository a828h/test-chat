import { describe, test, expect } from 'vitest'
import { isRtlLocale, getTextDirection } from './locale'

describe('isRtlLocale', () => {
  test('detects Persian and other RTL locales', () => {
    expect(isRtlLocale('fa-IR')).toBe(true)
    expect(isRtlLocale('fa')).toBe(true)
    expect(isRtlLocale('ar-SA')).toBe(true)
    expect(isRtlLocale('he-IL')).toBe(true)
    expect(isRtlLocale('ur-PK')).toBe(true)
  })

  test('returns false for LTR locales', () => {
    expect(isRtlLocale('en-US')).toBe(false)
    expect(isRtlLocale('de-DE')).toBe(false)
    expect(isRtlLocale('fr-FR')).toBe(false)
  })

  test('handles empty values', () => {
    expect(isRtlLocale('')).toBe(false)
    expect(isRtlLocale(null)).toBe(false)
    expect(isRtlLocale(undefined)).toBe(false)
  })
})

describe('getTextDirection', () => {
  test('returns rtl for RTL locales', () => {
    expect(getTextDirection('fa-IR')).toBe('rtl')
  })

  test('returns ltr for LTR locales', () => {
    expect(getTextDirection('en-US')).toBe('ltr')
  })
})
