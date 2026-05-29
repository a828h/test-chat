import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { getTextDirection } from '@shared-ui/utils/locale'

/** Reactive text direction for the active i18n locale. */
export function useDocumentDirection () {
  const { locale } = useI18n()
  return computed(() => getTextDirection(locale.value))
}
