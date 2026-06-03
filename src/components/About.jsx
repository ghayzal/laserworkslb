import { Zap, Leaf, FlaskConical, Crosshair, Shield, Recycle } from 'lucide-react'
import Reveal from './Reveal'
import aboutImg from '../assets/images/about-laser-cleaning.webp'

const icons = [Zap, Leaf, FlaskConical, Crosshair, Shield, Recycle]

export default function About({ t }) {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/25 to-transparent" />
      <div className="absolute top-40 right-0 w-80 h-80 bg-brand-500/[0.04] rounded-full blur-[100px]" />

      <div className="container-max relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <Reveal className="relative">
            <div className="absolute -inset-3 bg-gradient-to-br from-brand-500/10 to-accent-blue/10 rounded-3xl blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden border border-black/10 dark:border-white/10">
              <img
                src={aboutImg}
                alt="Robotic laser cleaning system removing contamination from a metal surface with sparks"
                loading="lazy"
                className="w-full h-full object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/40 to-transparent" />
            </div>
          </Reveal>

          {/* Text */}
          <Reveal delay={100}>
            <span className="section-label">{t.about.label}</span>
            <h2 className="section-title mb-6">{t.about.title}</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-5">{t.about.description}</p>
            <p className="text-gray-500 leading-relaxed">{t.about.how}</p>
          </Reveal>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
          {t.about.benefits.map((b, i) => {
            const Icon = icons[i]
            return (
              <Reveal key={i} delay={i * 70} className="glass-card-hover p-5 group">
                <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center mb-3 group-hover:bg-brand-500/20 transition-colors">
                  <Icon size={20} className="text-brand-500" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1 text-sm sm:text-base">{b.title}</h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{b.desc}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
