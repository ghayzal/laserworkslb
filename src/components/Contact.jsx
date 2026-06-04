import { MessageCircle, Phone, Mail, Instagram, MapPin, Send, ExternalLink } from 'lucide-react'
import Reveal from './Reveal'
import { trackWhatsApp } from '../lib/analytics'

const PHONE_TEL = 'tel:+96170046602'
const EMAIL_HREF = 'mailto:aounjunior@gmail.com'
const INSTAGRAM_URL = 'https://www.instagram.com/laserworkslb/'
// Exact business location on Google Maps (opens the place / directions)
const MAPS_URL = 'https://maps.app.goo.gl/JFxBrQRa8Pc7oJXk8'
// Embeddable live map (no API key needed) pinned to the registered business
const MAP_EMBED = 'https://maps.google.com/maps?q=Laserworkslb%2C%20Furn%20el%20Chebbak%2C%20Beirut%2C%20Lebanon&z=16&output=embed'

export default function Contact({ t, whatsappUrl }) {
  const c = t.contact
  const methods = [
    { Icon: Phone, label: c.phoneCta, value: c.phone, href: PHONE_TEL, ext: false },
    { Icon: Mail, label: c.emailCta, value: c.email, href: EMAIL_HREF, ext: false },
    { Icon: Instagram, label: 'Instagram', value: c.instagram, href: INSTAGRAM_URL, ext: true },
    { Icon: MapPin, label: c.locationLabel, value: c.location, href: MAPS_URL, ext: true },
  ]

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-gray-100/60 dark:bg-dark-800/40">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/25 to-transparent" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-brand-500/[0.05] rounded-full blur-[130px]" />

      <div className="container-max relative">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-label">{c.label}</span>
          <h2 className="section-title mb-4">{c.title}</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">{c.subtitle}</p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
          {/* WhatsApp primary CTA + methods */}
          <Reveal className="flex flex-col gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsApp('contact_card')}
              className="group relative overflow-hidden rounded-2xl p-7 bg-gradient-to-br from-brand-500 to-brand-600
                         flex items-center gap-5 transition-transform duration-300 hover:scale-[1.01] glow-brand"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
                <MessageCircle size={28} className="text-white" />
              </div>
              <div className="flex-1">
                <p className="font-display font-bold text-xl text-white">{c.whatsappCta}</p>
                <p className="text-white/80 text-sm">{t.contact.phone}</p>
              </div>
              <Send size={20} className="text-white/90 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform rtl:scale-x-[-1]" />
            </a>

            <div className="grid sm:grid-cols-2 gap-4 flex-1">
              {methods.map(({ Icon, label, value, href, ext }, i) => (
                <a
                  key={i}
                  href={href}
                  {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="group glass-card-hover p-5 flex flex-col gap-2"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center group-hover:bg-brand-500/20 transition-colors">
                    <Icon size={20} className="text-brand-500" />
                  </div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">{label}</p>
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200 break-words leading-snug">{value}</p>
                </a>
              ))}
            </div>
          </Reveal>

          {/* Map card — the whole card is tappable and opens Google Maps.
              The iframe is a non-interactive visual preview (pointer-events: none)
              so taps fall through to the link instead of being eaten by the embed. */}
          <Reveal delay={120} className="relative rounded-2xl overflow-hidden border border-white/10 min-h-[320px] flex bg-dark-700">
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open LaserWorks Lebanon location in Google Maps"
              className="absolute inset-0 block"
            >
              <iframe
                title="LaserWorks Lebanon location on Google Maps"
                src={MAP_EMBED}
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                tabIndex={-1}
                aria-hidden="true"
              />

              {/* Bottom overlay: business name + Directions button */}
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-end justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="font-display font-semibold text-white leading-tight">LaserWorks Lebanon</h3>
                  <p className="text-white/75 text-xs leading-snug">{c.location}</p>
                </div>
                <span className="btn-primary text-sm !px-4 !py-2 shrink-0">
                  <ExternalLink size={15} />
                  {c.directions || 'Directions'}
                </span>
              </div>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
