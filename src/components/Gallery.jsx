import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { Eyebrow } from './ui.jsx'
import { FloatingPetals, Mandala } from './Ornaments.jsx'
import { gallery } from '../data/content.js'

export default function Gallery() {
  return (
    <section id="work" className="relative overflow-hidden bg-blush-deep max-lg:mx-0 max-lg:rounded-[32px] max-lg:bg-blush">
      {/* Large gold lotus mandalas + drifting petals */}
      <div className="pointer-events-none absolute -left-[400px] top-1/2 hidden -translate-y-1/2 text-gold/50 lg:block" aria-hidden="true">
        <Mandala className="h-[820px] w-[820px]" duration={160} />
      </div>
      <div className="pointer-events-none absolute -right-[130px] -top-[150px] hidden text-gold/35 lg:block" aria-hidden="true">
        <Mandala className="h-[340px] w-[340px]" duration={110} reverse />
      </div>
      <div className="pointer-events-none absolute -right-[170px] -top-[170px] text-gold/50 lg:hidden" aria-hidden="true">
        <Mandala className="h-[420px] w-[420px]" duration={140} />
      </div>
      <FloatingPetals className="hidden lg:block" />

      <div className="relative mx-auto grid max-w-[1440px] items-center gap-9 px-6 py-12 sm:px-10 lg:grid-cols-[0.34fr_0.66fr] lg:gap-[clamp(20px,2.4vw,40px)] lg:px-[clamp(24px,3vw,44px)] lg:py-[clamp(36px,4vw,56px)] lg:pl-[clamp(64px,7.2vw,110px)]">
        <div>
          <Reveal>
            <Eyebrow>{gallery.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-serif text-[clamp(40px,10.6vw,52px)] font-medium leading-[1.04] text-ink lg:text-[clamp(40px,3.8vw,56px)]">
              <span className="lg:hidden">
                {gallery.titleMobile.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </span>
              <span className="hidden lg:block">
                {gallery.title.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-[320px] text-[14px] font-light leading-[1.8] text-ink/75 lg:text-[14.5px]">{gallery.text}</p>
            <a href="#work" className="group mt-7 inline-flex items-center gap-4 text-[14px] font-medium text-ink">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-forest text-cream transition duration-300 group-hover:scale-110">
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={1.4} />
              </span>
              {gallery.cta}
            </a>
          </Reveal>
        </div>

        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-3">
          {gallery.items.map((item, i) => (
            <Reveal as="li" key={item.label} delay={0.09 * i} y={40} className="group relative overflow-hidden rounded-[16px] lg:rounded-[22px]">
              <img
                src={item.image}
                alt={item.label}
                className="aspect-[2/1] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.07] sm:aspect-[3/2] lg:aspect-[118/237]"
                loading="lazy"
                decoding="async"
                width="470"
                height="940"
              />
              <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-forest/75 to-transparent" aria-hidden="true" />
              <span className="absolute bottom-3.5 left-4 text-[13.5px] font-normal tracking-wide text-white lg:bottom-4 lg:left-4">{item.label}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
