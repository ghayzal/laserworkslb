import { ArrowRight, ChevronDown, ShieldCheck } from 'lucide-react'
import heroBrand from '../assets/images/hero-brand.jpg'
import { trackWhatsApp } from '../lib/analytics'

export default function Hero({ t, whatsappUrl }) {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gray-50 dark:bg-dark-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,168,232,0.10),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(30,58,95,0.12),transparent_55%)]" />

      {/* Grid pattern — dark lines for light theme, light lines for dark theme */}
      <div
        className="absolute inset-0 opacity-[0.04] dark:hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(10,10,10,0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(10,10,10,0.5) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.035] hidden dark:block"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative container-max px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text column */}
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-6 animate-fade-in">
              <div className="w-8 h-[2px] bg-brand-500" />
              <span className="text-brand-500 text-sm font-semibold tracking-widest uppercase">
                {t.hero.eyebrow}
              </span>
            </div>

            <h1 className="font-display font-bold tracking-tight text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-6 animate-fade-in-up">
              {t.hero.headline.split(' ').map((word, i) => {
                const highlights = ['Laser', 'Lebanon', 'بالليزر', 'لبنان']
                return (
                  <span key={i}>
                    {highlights.includes(word) ? <span className="gradient-text">{word}</span> : word}{' '}
                  </span>
                )
              })}
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mb-9 leading-relaxed animate-fade-in-up animate-delay-200">
              {t.hero.subheadline}
            </p>

            <div className="flex flex-wrap gap-4 mb-10 animate-fade-in-up animate-delay-300">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsApp('hero')} className="btn-primary text-base">
                {t.hero.cta}
                <ArrowRight size={18} className="rtl:rotate-180" />
              </a>
              <button
                onClick={() => document.getElementById('applications')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary text-base"
              >
                {t.hero.ctaSecondary}
              </button>
            </div>

            <div className="flex flex-wrap gap-2.5 animate-fade-in-up animate-delay-400">
              {t.hero.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.08] rounded-full backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Image column */}
          <div className="order-1 lg:order-2 relative animate-fade-in animate-delay-200">
            <div className="absolute -inset-4 bg-brand-500/10 rounded-[2rem] blur-3xl" />
            <div className="absolute -inset-px bg-gradient-to-tr from-brand-500/30 via-transparent to-accent-blue/30 rounded-3xl" />
            <div className="relative rounded-3xl overflow-hidden border border-black/10 dark:border-white/10 glow-brand">
              <img
                src={heroBrand}
                alt="LaserWorks technician beside the branded mobile laser cleaning van in Lebanon"
                width="820"
                height="1230"
                fetchPriority="high"
                className="w-full h-full object-cover object-top aspect-[4/5] sm:aspect-[3/2] lg:aspect-[4/5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent" />

              {/* Floating badge */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 glass-card !bg-dark-900/70 px-4 py-3">
                <div className="w-10 h-10 rounded-xl bg-brand-500/15 flex items-center justify-center shrink-0">
                  <ShieldCheck size={20} className="text-brand-500" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white leading-tight">{t.hero.badgeTitle}</p>
                  <p className="text-xs text-gray-400">{t.hero.badgeSub}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-brand-500 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  )
}
