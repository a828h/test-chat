import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { getTextDirection, isRtlLocale, applyDocumentLocale } from '@shared-ui/utils/locale'
import { watch } from 'vue'

/**
 * Locale-aware layout helpers for RTL/LTR UI.
 */
export function useLocaleDirection () {
  const { locale } = useI18n()

  const direction = computed(() => getTextDirection(locale.value))

  watch(
    locale,
    (lang) => applyDocumentLocale(lang),
    { immediate: true }
  )
  const isRtl = computed(() => isRtlLocale(locale.value))

  /** Tooltip/dropdown side toward the main content area from the icon rail. */
  const inlineStartSide = computed(() => (isRtl.value ? 'left' : 'right'))

  /** Secondary sidebar anchor side. */
  const secondarySidebarSide = computed(() => (isRtl.value ? 'right' : 'left'))

  return {
    direction,
    isRtl,
    inlineStartSide,
    secondarySidebarSide
  }
}
