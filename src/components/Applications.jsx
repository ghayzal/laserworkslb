import { Wrench, Paintbrush, Sparkles, Hammer, Car, Cog, Factory, Flame, Ship, SprayCan, Layers } from 'lucide-react'
import Reveal from './Reveal'

const icons = [Wrench, Paintbrush, Sparkles, Hammer, Car, Cog, Factory, Flame, Ship, SprayCan, Layers]

export default function Applications({ t }) {
  return (
    <section id="applications" className="section-padding relative overflow-hidden bg-gray-100/60 dark:bg-dark-800/40">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/25 to-transparent" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent-blue/[0.05] rounded-full blur-[120px]" />

      <div className="container-max relative">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-label">{t.applications.label}</span>
          <h2 className="section-title mb-4">{t.applications.title}</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">{t.applications.subtitle}</p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {t.applications.items.map((item, i) => {
            const Icon = icons[i] || Sparkles
            return (
              <Reveal
                key={i}
                delay={(i % 4) * 60}
                className="group relative glass-card p-6 transition-all duration-300 hover:-translate-y-1
                           hover:border-brand-500/30 hover:bg-black/[0.03] dark:hover:bg-white/[0.05]
                           hover:shadow-[0_0_30px_rgba(0,168,232,0.12)]"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center mb-4
                                group-hover:bg-brand-500/20 group-hover:scale-110 transition-all duration-300">
                  <Icon size={24} className="text-brand-500" />
                </div>
                <h3 className="font-display font-semibold text-lg text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
