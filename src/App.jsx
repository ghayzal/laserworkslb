import { useState, useEffect } from 'react'
import content from './data/content'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Applications from './components/Applications'
import Gallery from './components/Gallery'
import WhyChoose from './components/WhyChoose'
import Process from './components/Process'
import Industries from './components/Industries'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FAQ from './components/FAQ'
import FloatingWhatsApp from './components/FloatingWhatsApp'

const WHATSAPP_URL = 'https://wa.me/96170046602?text=Hello%20LaserWorks%2C%20I%20would%20like%20to%20request%20a%20quote%20for%20a%20laser%20cleaning%20service.'

function useScrollSpy(sectionIds) {
  const [active, setActive] = useState('')
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [sectionIds])
  return active
}

export default function App() {
  const [lang, setLang] = useState('en')
  const [theme, setTheme] = useState(() =>
    typeof document !== 'undefined' && document.documentElement.classList.contains('dark')
      ? 'dark'
      : 'light'
  )
  const t = content[lang]
  const dir = t.dir
  const sections = ['home', 'about', 'applications', 'gallery', 'process', 'contact']
  const activeSection = useScrollSpy(sections)

  useEffect(() => {
    document.documentElement.dir = dir
    document.documentElement.lang = lang
  }, [dir, lang])

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    try {
      localStorage.setItem('theme', theme)
    } catch (e) { /* ignore */ }
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#0A0A0A' : '#F9FAFB')
  }, [theme])

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-dark-900 ${dir === 'rtl' ? 'font-sans' : ''}`}>
      <Header
        t={t}
        lang={lang}
        setLang={setLang}
        theme={theme}
        setTheme={setTheme}
        activeSection={activeSection}
        whatsappUrl={WHATSAPP_URL}
      />
      <main>
        <Hero t={t} whatsappUrl={WHATSAPP_URL} />
        <About t={t} />
        <Applications t={t} />
        <Gallery t={t} />
        <WhyChoose t={t} />
        <Process t={t} />
        <Industries t={t} />
        {/* Customer Reviews section removed for launch (placeholders only).
            To restore: import Testimonials and render <Testimonials t={t} /> here. */}
        <FAQ t={t} />
        <Contact t={t} whatsappUrl={WHATSAPP_URL} />
      </main>
      <Footer t={t} whatsappUrl={WHATSAPP_URL} />
      <FloatingWhatsApp whatsappUrl={WHATSAPP_URL} label={t.contact.whatsappCta} />
    </div>
  )
}
