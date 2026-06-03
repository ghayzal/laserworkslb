import { Search, FlaskConical, Zap, CheckCircle2 } from 'lucide-react'
import Reveal from './Reveal'

const icons = [Search, FlaskConical, Zap, CheckCircle2]

export default function Process({ t }) {
  return (
    <section id="process" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/25 to-transparent" />

      <div className="container-max relative">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-label">{t.process.label}</span>
          <h2 className="section-title mb-4">{t.process.title}</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">{t.process.subtitle}</p>
        </Reveal>

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-[42px] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-brand-500/0 via-brand-500/40 to-brand-500/0" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {t.process.steps.map((step, i) => {
              const Icon = icons[i]
              return (
                <Reveal key={i} delay={i * 120} className="relative text-center">
                  {/* Icon node */}
                  <div className="relative z-10 mx-auto w-[84px] h-[84px] mb-6">
                    <div className="absolute inset-0 rounded-2xl bg-brand-500/10 blur-xl" />
                    <div className="relative w-full h-full rounded-2xl bg-white dark:bg-dark-700 border border-brand-500/30 flex items-center justify-center
                                    glow-brand">
                      <Icon size={30} className="text-brand-500" />
                    </div>
                    <span className="absolute -top-2 -right-2 rtl:-right-auto rtl:-left-2 w-7 h-7 rounded-full bg-brand-500 text-white text-xs font-bold flex items-center justify-center">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-xl text-gray-900 dark:text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">{step.desc}</p>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
