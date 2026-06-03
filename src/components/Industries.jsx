import { Car, Factory, Ship, Building2, Wrench, Cog, Sparkles } from 'lucide-react'
import Reveal from './Reveal'
import plantImg from '../assets/images/industries-plant.webp'

const icons = [Car, Factory, Ship, Building2, Wrench, Cog, Sparkles]

export default function Industries({ t }) {
  return (
    <section className="section-padding relative overflow-hidden bg-gray-100/60 dark:bg-dark-800/40">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/25 to-transparent" />

      <div className="container-max relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <Reveal className="relative order-2 lg:order-1">
            <div className="absolute -inset-3 bg-gradient-to-br from-accent-blue/10 to-brand-500/10 rounded-3xl blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden border border-black/10 dark:border-white/10">
              <img
                src={plantImg}
                alt="Industrial processing plant served by LaserWorks laser cleaning"
                loading="lazy"
                className="w-full h-full object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent" />
            </div>
          </Reveal>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <Reveal>
              <span className="section-label">{t.industries.label}</span>
              <h2 className="section-title mb-8">{t.industries.title}</h2>
            </Reveal>
            <div className="grid sm:grid-cols-2 gap-3">
              {t.industries.items.map((item, i) => {
                const Icon = icons[i] || Sparkles
                return (
                  <Reveal
                    key={i}
                    delay={(i % 2) * 60}
                    className="group flex items-center gap-3 glass-card-hover px-4 py-3.5"
                  >
                    <div className="w-9 h-9 rounded-lg bg-brand-500/10 flex items-center justify-center shrink-0 group-hover:bg-brand-500/20 transition-colors">
                      <Icon size={18} className="text-brand-500" />
                    </div>
                    <span className="font-medium text-gray-800 dark:text-gray-200">{item}</span>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
