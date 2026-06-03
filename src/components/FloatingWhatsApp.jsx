import { MessageCircle } from 'lucide-react'
import { trackWhatsApp } from '../lib/analytics'

/**
 * Always-visible WhatsApp action button for mobile (hidden on lg+ where the
 * header CTA is already visible). RTL-aware and theme-agnostic.
 */
export default function FloatingWhatsApp({ whatsappUrl, label }) {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsApp('floating')}
      aria-label={label}
      className="lg:hidden fixed bottom-5 right-5 rtl:right-auto rtl:left-5 z-30
                 flex items-center justify-center w-14 h-14 rounded-full
                 bg-gradient-to-br from-brand-500 to-brand-600 text-white
                 shadow-lg shadow-brand-500/40 active:scale-95 transition-transform animate-fade-in"
    >
      <span className="absolute inset-0 rounded-full bg-brand-500 opacity-30 animate-ping" />
      <MessageCircle size={26} className="relative" />
    </a>
  )
}
