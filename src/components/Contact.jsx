import { MessageCircle, Phone, Mail, Instagram, MapPin, Send, ExternalLink } from 'lucide-react'
import Reveal from './Reveal'
import { trackWhatsApp } from '../lib/analytics'

const PHONE_TEL = 'tel:+96170046602'
const EMAIL_HREF = 'mailto:aounjunior@gmail.com'
const INSTAGRAM_URL = 'https://www.instagram.com/laserworkslb/'
const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=Furn%20El%20Chebbak%2C%20Mar%20Nohra%20Street%2C%20Lebanon'

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

          {/* Map card */}
          <Reveal delay={120} className="relative rounded-2xl overflow-hidden border border-white/10 min-h-[320px] flex">
            {/* Stylized map background */}
            <div className="absolute inset-0 bg-dark-700" />
            <div
              className="absolute inset-0 opacity-[0.5]"
              style={{
                backgroundImage: `linear-gradient(rgba(0,168,232,0.06) 1px, transparent 1px),
                                  linear-gradient(90deg, rgba(0,168,232,0.06) 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
              }}
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(0,168,232,0.12),transparent_60%)]" />

            <div className="relative z-10 flex flex-col items-center justify-center text-center p-8 w-full">
              <div className="relative mb-5">
                <div className="absolute inset-0 bg-brand-500/30 rounded-full blur-xl animate-glow-pulse" />
                <div className="relative w-16 h-16 rounded-full bg-brand-500 flex items-center justify-center">
                  <MapPin size={28} className="text-white" />
                </div>
              </div>
              <h3 className="font-display font-semibold text-xl text-white mb-2">LaserWorks Lebanon</h3>
              <p className="text-gray-400 mb-6 max-w-xs">{c.location}</p>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm">
                <ExternalLink size={16} />
                View on Google Maps
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
