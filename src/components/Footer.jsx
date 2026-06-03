import { MessageCircle, Phone, Mail, Instagram, MapPin } from 'lucide-react'
import Logo from './Logo'
import { trackWhatsApp } from '../lib/analytics'

const INSTAGRAM_URL = 'https://www.instagram.com/laserworkslb/'

export default function Footer({ t, whatsappUrl }) {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  const quickLinks = [
    { id: 'about', label: t.nav.about },
    { id: 'applications', label: t.nav.applications },
    { id: 'gallery', label: t.nav.gallery },
    { id: 'process', label: t.nav.process },
    { id: 'contact', label: t.nav.contact },
  ]

  // Show the first six applications as a services list
  const services = t.applications.items.slice(0, 6).map((s) => s.title)

  return (
    <footer className="relative bg-gray-100 dark:bg-dark-900 border-t border-black/[0.06] dark:border-white/[0.06] overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-500/[0.03] rounded-full blur-[120px]" />

      <div className="container-max relative px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-5">
              <Logo className="h-10" />
            </div>
            <p className="text-sm text-gray-500 leading-relaxed mb-5 max-w-xs">{t.footer.description}</p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsApp('footer')} className="btn-primary text-sm !px-5 !py-2.5">
              <MessageCircle size={16} />
              {t.nav.quote}
            </a>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-semibold text-gray-900 dark:text-white mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button onClick={() => scrollTo(link.id)} className="text-sm text-gray-500 hover:text-brand-500 transition-colors">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-gray-900 dark:text-white mb-4">{t.footer.services}</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s} className="text-sm text-gray-500">{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-gray-900 dark:text-white mb-4">{t.footer.contactTitle}</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+96170046602" className="flex items-center gap-2.5 text-sm text-gray-500 hover:text-brand-500 transition-colors">
                  <Phone size={16} className="shrink-0" />
                  {t.contact.phone}
                </a>
              </li>
              <li>
                <a href="mailto:aounjunior@gmail.com" className="flex items-center gap-2.5 text-sm text-gray-500 hover:text-brand-500 transition-colors break-all">
                  <Mail size={16} className="shrink-0" />
                  {t.contact.email}
                </a>
              </li>
              <li>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-sm text-gray-500 hover:text-brand-500 transition-colors">
                  <Instagram size={16} className="shrink-0" />
                  {t.contact.instagram}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-gray-500">
                <MapPin size={16} className="shrink-0 mt-0.5" />
                <span>{t.contact.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-black/[0.06] dark:border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-600">{t.footer.rights}</p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg border border-black/10 dark:border-white/10 flex items-center justify-center text-gray-500 hover:text-brand-500 hover:border-brand-500/30 transition-colors"
            aria-label="LaserWorks on Instagram"
          >
            <Instagram size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
