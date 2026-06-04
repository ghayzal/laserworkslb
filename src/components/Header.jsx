import { useState, useEffect } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'
import LanguageToggle from './LanguageToggle'
import ThemeToggle from './ThemeToggle'
import Logo from './Logo'
import { trackWhatsApp } from '../lib/analytics'

export default function Header({ t, lang, setLang, theme, setTheme, activeSection, whatsappUrl }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const links = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'applications', label: t.nav.applications },
    { id: 'gallery', label: t.nav.gallery },
    { id: 'process', label: t.nav.process },
    { id: 'contact', label: t.nav.contact },
  ]

  const scrollTo = (id) => {
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const navLink = (active) =>
    active
      ? 'text-brand-500 bg-brand-500/10'
      : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.05]'

  return (
    <>
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-dark-900/90 backdrop-blur-lg border-b border-black/[0.06] dark:border-white/[0.06] shadow-lg shadow-black/10 dark:shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="container-max flex items-center justify-between h-16 md:h-20 px-4 sm:px-6 lg:px-8">
        <a href="#home" onClick={() => scrollTo('home')} className="flex items-center group">
          <Logo className="h-10 sm:h-12 md:h-14 transition-opacity duration-300 group-hover:opacity-90" />
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${navLink(activeSection === link.id)}`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle theme={theme} setTheme={setTheme} />
          <LanguageToggle lang={lang} setLang={setLang} />
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsApp('header')} className="btn-primary text-sm !px-5 !py-2.5">
            <MessageCircle size={16} />
            {t.nav.quote}
          </a>
        </div>

        <div className="flex lg:hidden items-center gap-2.5">
          <ThemeToggle theme={theme} setTheme={setTheme} mobile />
          <LanguageToggle lang={lang} setLang={setLang} mobile />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>

    {menuOpen && (
      <div className="lg:hidden fixed inset-x-0 top-16 md:top-20 bottom-0 bg-white dark:bg-dark-900 z-[60] overflow-y-auto overscroll-contain">
          <nav className="flex flex-col items-center justify-center min-h-full gap-2 px-6 py-8">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`w-full text-center px-4 py-3.5 text-lg font-medium rounded-xl transition-all ${navLink(activeSection === link.id)}`}
              >
                {link.label}
              </button>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsApp('mobile_menu')}
              className="btn-primary w-full justify-center mt-4 text-lg"
            >
              <MessageCircle size={20} />
              {t.nav.quote}
            </a>
          </nav>
        </div>
      )}
    </>
  )
}
