import { Quote, Star } from 'lucide-react'
import Reveal from './Reveal'

/*
 * NOTE: These testimonials are PLACEHOLDERS (defined in src/data/content.js).
 * They do not represent real, identifiable customers. Replace them with
 * genuine customer reviews before launch.
 */
export default function Testimonials({ t }) {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/25 to-transparent" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-blue/[0.05] rounded-full blur-[120px]" />

      <div className="container-max relative">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-label">{t.testimonials.label}</span>
          <h2 className="section-title">{t.testimonials.title}</h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5">
          {t.testimonials.items.map((review, i) => (
            <Reveal key={i} delay={i * 90} className="glass-card-hover p-7 flex flex-col">
              <Quote size={32} className="text-brand-500/40 mb-4 rtl:scale-x-[-1]" />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={16} className="text-brand-500 fill-brand-500" />
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 flex-1">{review.text}</p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center font-display font-bold text-white shrink-0">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">{review.name}</p>
                  <p className="text-xs text-gray-500">{review.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
