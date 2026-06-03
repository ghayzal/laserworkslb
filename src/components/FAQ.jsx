import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Reveal from './Reveal'

export default function FAQ({ t }) {
  const [open, setOpen] = useState(-1)
  const faq = t.faq

  // FAQPage structured data (rich results in Google) — mirrors the visible Q&A.
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.items.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    })),
  }

  return (
    <section id="faq" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/25 to-transparent" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <div className="container-max relative">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <span className="section-label">{faq.label}</span>
          <h2 className="section-title mb-4">{faq.title}</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">{faq.subtitle}</p>
        </Reveal>

        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {faq.items.map((item, i) => {
            const isOpen = open === i
            return (
              <Reveal
                key={i}
                delay={i * 50}
                className="rounded-2xl border border-black/[0.08] dark:border-white/[0.08]
                           bg-white/60 dark:bg-white/[0.02] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 text-left rtl:text-right
                             px-5 sm:px-6 py-4 sm:py-5 group"
                >
                  <span className="font-display font-semibold text-base sm:text-lg text-gray-900 dark:text-white">
                    {item.q}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-brand-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <div className={`grid transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <p className="px-5 sm:px-6 pb-5 text-gray-600 dark:text-gray-400 leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
