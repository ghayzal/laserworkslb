import { Zap, Leaf, Target, Truck, Wallet, ShieldCheck } from 'lucide-react'
import Reveal from './Reveal'

const icons = [Zap, Leaf, Target, Truck, Wallet, ShieldCheck]

export default function WhyChoose({ t }) {
  return (
    <section className="section-padding relative overflow-hidden bg-gray-100/60 dark:bg-dark-800/40">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/25 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-500/[0.03] rounded-full blur-[140px]" />

      <div className="container-max relative">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-label">{t.whyChoose.label}</span>
          <h2 className="section-title">{t.whyChoose.title}</h2>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.whyChoose.features.map((f, i) => {
            const Icon = icons[i]
            return (
              <Reveal
                key={i}
                delay={(i % 3) * 70}
                className="group glass-card-hover p-7 flex flex-col"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500/20 to-brand-600/5 border border-brand-500/20
                                  flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={22} className="text-brand-500" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-gray-900 dark:text-white">{f.title}</h3>
                </div>
                <p className="text-gray-500 leading-relaxed text-sm">{f.desc}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
