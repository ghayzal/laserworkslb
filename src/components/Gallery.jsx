import Reveal from './Reveal'
import imgRust from '../assets/images/gallery-rust-removal.jpg'
import imgMold from '../assets/images/gallery-mold-cleaning.jpg'
import imgMetal from '../assets/images/gallery-metal-restoration.jpg'
import imgBrass from '../assets/images/gallery-brass-plate.jpg'
import imgSurface from '../assets/images/gallery-surface-cleaning.jpg'
import imgMarine from '../assets/images/gallery-marine.jpg'

// Images map by index to the localized captions in content.gallery.items
const images = [imgRust, imgMold, imgMetal, imgBrass, imgSurface, imgMarine]
const alts = [
  'Laser rust removal on a steel pipe with sparks',
  'Laser cleaning an industrial metal mold',
  'Restoration of a large metal die using laser cleaning',
  'Precision laser cleaning of a brass plate',
  'Masonry surface showing cleaned and uncleaned areas side by side',
  'Marine and offshore metal surface cleaning',
]

export default function Gallery({ t }) {
  return (
    <section id="gallery" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/25 to-transparent" />

      <div className="container-max relative">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-label">{t.gallery.label}</span>
          <h2 className="section-title mb-4">{t.gallery.title}</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">{t.gallery.subtitle}</p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {t.gallery.items.map((item, i) => (
            <Reveal
              key={i}
              delay={(i % 3) * 80}
              className="group relative rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 cursor-pointer
                         hover:border-brand-500/30 transition-colors duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={images[i]}
                  alt={alts[i]}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/20 to-transparent" />

              <div className="absolute top-3 left-3 rtl:left-auto rtl:right-3">
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-brand-500/90 text-white backdrop-blur-sm">
                  {item.tag}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-display font-semibold text-white text-lg translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  {item.caption}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
