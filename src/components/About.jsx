import { useLayoutEffect, useRef } from 'react'
import { Flower2, ClipboardCheck, ClipboardList } from 'lucide-react'
import { gsap, NO_REDUCED_MOTION } from '../lib/gsap.js'
import Reveal from './Reveal.jsx'
import { Eyebrow } from './ui.jsx'
import { FlowerSprig } from './Decor.jsx'
import { about, images } from '../data/content.js'

const icons = { concept: Flower2, plan: ClipboardList, execute: ClipboardCheck }

function Features({ className = '' }) {
  return (
    <ul className={`grid grid-cols-3 gap-3 ${className}`}>
      {about.features.map((f, i) => {
        const Icon = icons[f.icon]
        return (
          <Reveal as="li" key={f.label} delay={0.1 * i} className="flex flex-col items-center gap-3 text-center lg:w-[110px]">
            <span className="grid h-[68px] w-[68px] place-items-center rounded-full border border-gold/25 bg-[#f6ece4] text-gold shadow-[0_8px_24px_-14px_rgba(201,147,77,.6)] lg:h-[72px] lg:w-[72px]">
              <Icon className="h-[26px] w-[26px]" strokeWidth={1.1} />
            </span>
            <span className="text-[11.5px] font-normal leading-snug text-ink">{f.label}</span>
          </Reveal>
        )
      })}
    </ul>
  )
}

function QuoteBlob({ className = '' }) {
  return (
    <div className={`relative overflow-hidden bg-rose ${className}`}>
      <p className="absolute left-[9%] top-1/2 -translate-y-1/2 font-serif text-[clamp(26px,2.4vw,34px)] font-normal leading-[1.12] text-ink/75 max-lg:static max-lg:translate-y-0">
        {about.quote.map((l) => (
          <span key={l} className="block">
            {l}
          </span>
        ))}
      </p>
      <FlowerSprig className="pointer-events-none absolute bottom-0 right-[6%] h-[88%] max-h-[170px] text-gold/80" />
    </div>
  )
}

export default function About() {
  const root = useRef(null)

  useLayoutEffect(() => {
    const mm = gsap.matchMedia()
    mm.add(
      `(min-width: 1024px) and ${NO_REDUCED_MOTION}`,
      () => {
        root.current.querySelectorAll('[data-speed]').forEach((el) => {
          gsap.fromTo(
            el,
            { y: Number(el.dataset.speed) * -1 },
            {
              y: Number(el.dataset.speed),
              ease: 'none',
              scrollTrigger: { trigger: root.current, start: 'top bottom', end: 'bottom top', scrub: 0.6 },
            },
          )
        })
      },
      root,
    )
    return () => mm.revert()
  }, [])

  return (
    <section id="about" ref={root} className="relative overflow-hidden bg-cream">
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-6 py-14 sm:px-10 lg:grid-cols-[0.42fr_0.58fr] lg:gap-0 lg:px-0 lg:py-[clamp(70px,8vw,110px)] lg:pl-[clamp(24px,6.5vw,96px)]">
        {/* Text */}
        <div className="lg:pr-10">
          <Reveal>
            <Eyebrow>{about.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-serif text-[clamp(44px,12vw,58px)] font-medium leading-[1.02] tracking-[-0.005em] text-ink lg:text-[clamp(48px,4.7vw,70px)]">
              {about.title.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </h2>
            <span className="mt-4 block h-px w-[min(100%,300px)] bg-linear-to-r from-gold to-transparent lg:mt-5 lg:w-[360px]" aria-hidden="true" />
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-[440px] text-[14px] font-light leading-[1.85] text-ink/80 lg:text-[15.5px]">{about.text}</p>
          </Reveal>
          <Features className="mt-10 hidden max-w-[420px] lg:grid" />
        </div>

        {/* Collage */}
        <div className="relative">
          {/* Mobile collage */}
          <div className="space-y-3 lg:hidden">
            <Reveal className="overflow-hidden rounded-[32px]">
              <img src={images.aboutMain} alt="Floral wedding mandap at sunset" className="aspect-[4/3.6] w-full object-cover" loading="lazy" decoding="async" width="900" height="810" />
            </Reveal>
            <div className="grid grid-cols-2 gap-3">
              <Reveal delay={0.08} className="overflow-hidden rounded-[22px]">
                <img src={images.aboutTop} alt="Chandelier-lit banquet table" className="aspect-[3/4] w-full object-cover" loading="lazy" decoding="async" width="600" height="800" />
              </Reveal>
              <Reveal delay={0.16} className="overflow-hidden rounded-[22px]">
                <img src={images.aboutBottom} alt="Floral table setting" className="aspect-[3/4] w-full object-cover" loading="lazy" decoding="async" width="600" height="800" />
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <QuoteBlob className="flex min-h-[150px] items-center justify-between rounded-[36px] px-8 py-6 max-lg:[&>p]:text-[30px]" />
            </Reveal>
          </div>

          {/* Desktop collage */}
          <div className="relative hidden aspect-[424/353] w-full lg:block">
            <div className="absolute bottom-0 left-0 h-[46%] w-[54%] rounded-[56px] bg-rose" aria-hidden="true" />
            <div data-speed="14" className="absolute left-[6.6%] top-0 h-[94.3%] w-[44.8%] overflow-hidden rounded-b-[44px] rounded-t-[130px] shadow-[0_30px_60px_-30px_rgba(20,29,21,.45)]">
              <img src={images.aboutMain} alt="Floral wedding mandap at sunset" className="h-full w-full object-cover" loading="lazy" decoding="async" width="900" height="1400" />
            </div>
            <div data-speed="-10" className="absolute left-[52.6%] top-0 h-[34.3%] w-[34.2%] overflow-hidden rounded-[30px] shadow-[0_24px_50px_-28px_rgba(20,29,21,.5)]">
              <img src={images.aboutTop} alt="Chandelier-lit banquet table" className="h-full w-full object-cover" loading="lazy" decoding="async" width="700" height="500" />
            </div>
            <QuoteBlob className="absolute left-[51.9%] top-[35.7%] h-[34.6%] w-[48.1%] rounded-l-[56px]" />
            <div data-speed="8" className="absolute left-[61.3%] top-[71.7%] h-[24%] w-[34%] overflow-hidden rounded-[28px] shadow-[0_24px_50px_-28px_rgba(20,29,21,.5)]">
              <img src={images.aboutBottom} alt="Floral table setting" className="h-full w-full object-cover" loading="lazy" decoding="async" width="700" height="420" />
            </div>
          </div>
        </div>

        <Features className="lg:hidden" />
      </div>
    </section>
  )
}
