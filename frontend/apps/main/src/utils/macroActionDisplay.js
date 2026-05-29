const DEFAULT_STATUS_I18N = {
  Open: 'globals.terms.open',
  Snoozed: 'globals.terms.snoozed',
  Resolved: 'globals.terms.resolved',
  Closed: 'globals.terms.closed'
}

/** Localize macro action values (default statuses are stored in English in the API). */
export function formatMacroActionValues (action, t) {
  const values =
    action.display_value?.length > 0 ? action.display_value : action.value || []
  if (!values.length) return ''

  if (action.type === 'set_status') {
    return values
      .map((v) => (DEFAULT_STATUS_I18N[v] ? t(DEFAULT_STATUS_I18N[v]) : v))
      .join(', ')
  }

  return values.join(', ')
}
