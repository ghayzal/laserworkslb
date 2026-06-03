/**
 * Lightweight, provider-agnostic event tracking.
 *
 * Fires events to Plausible and/or Google Analytics — but only if their script
 * is actually loaded (see the commented snippet in index.html). If no analytics
 * provider is present it safely no-ops, so the site stays fully static and
 * privacy-friendly until you choose to enable one.
 */
export function trackEvent(name, props = {}) {
  if (typeof window === 'undefined') return
  try {
    // Plausible — window.plausible('Event', { props: {...} })
    if (typeof window.plausible === 'function') {
      window.plausible(name, { props })
    }
    // Google Analytics 4 — gtag('event', 'name', {...})
    if (typeof window.gtag === 'function') {
      window.gtag('event', name, props)
    }
    if (import.meta.env?.DEV) console.debug('[track]', name, props)
  } catch (e) {
    /* never let analytics break the UI */
  }
}

/** Convenience helper for the "request a quote" WhatsApp CTAs. */
export const trackWhatsApp = (location) => trackEvent('whatsapp_click', { location })
