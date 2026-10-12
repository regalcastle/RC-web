import { useLayoutEffect, useRef } from 'react'
import { MessagesSquare, PartyPopper, PencilRuler, Settings } from 'lucide-react'
import { gsap, NO_REDUCED_MOTION } from '../lib/gsap.js'
import Reveal from './Reveal.jsx'
import { Eyebrow } from './ui.jsx'
import { BranchDecor } from './Decor.jsx'
import { howItWorks } from '../data/content.js'

const icons = { chat: MessagesSquare, plan: PencilRuler, gear: Settings, spark: PartyPopper }

export default function HowItWorks() {
  const root = useRef(null)
  const path = useRef(null)

  useLayoutEffect(() => {
    const mm = gsap.matchMedia()
    mm.add(
      `(min-width: 1024px) and ${NO_REDUCED_MOTION}`,
      () => {
        const el = path.current
        if (!el) return
        const length = el.getTotalLength()
        gsap.set(el, { strokeDasharray: length, strokeDashoffset: length })
        gsap.to(el, {
          strokeDashoffset: 0,
          ease: 'none',
          scrollTrigger: { trigger: root.current, start: 'top 70%', end: 'center 45%', scrub: 0.8 },
        })
        gsap.from('[data-step]', {
          scale: 0.5,
          opacity: 0,
          duration: 0.8,
          stagger: 0.18,
          ease: 'back.out(1.7)',
          scrollTrigger: { trigger: root.current, start: 'top 65%', once: true },
        })
      },
      root,
    )
    return () => mm.revert()
  }, [])

  return (
    <section id="how-it-works" ref={root} className="relative overflow-hidden bg-mist">
      <BranchDecor className="pointer-events-none absolute -left-10 -top-6 hidden h-[360px] w-[270px] text-gold/20 lg:block" />

      <div className="relative mx-auto max-w-[1440px] px-6 py-14 sm:px-10 lg:px-[clamp(24px,3.6vw,56px)] lg:py-[clamp(56px,6vw,88px)]">
        <div className="lg:text-center">
          <Reveal>
            <Eyebrow className="lg:justify-center">{howItWorks.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 font-serif text-[clamp(36px,9.2vw,48px)] font-medium leading-[1.08] text-ink lg:mx-auto lg:max-w-none lg:text-[clamp(32px,3.2vw,46px)] lg:font-normal">
              {howItWorks.title}
            </h2>
          </Reveal>
        </div>

        {/* Desktop — horizontal with wavy connector */}
        <div className="relative mt-14 hidden lg:block">
          <svg
            className="pointer-events-none absolute left-1/2 top-[6px] h-[64px] w-screen -translate-x-1/2"
            viewBox="0 0 1440 64"
            preserveAspectRatio="none"
            fill="none"
            aria-hidden="true"
          >
            <path
              ref={path}
              d="M0 40 C 90 54 150 14 230 24 S 340 52 430 30 S 540 8 640 28 S 760 54 860 30 S 990 10 1090 30 S 1220 52 1320 28 S 1400 20 1440 28"
              stroke="#dbaf76"
              strokeOpacity="0.7"
              strokeWidth="1.2"
            />
          </svg>
          <ol className="relative mx-auto grid max-w-[1180px] grid-cols-4 gap-6">
            {howItWorks.steps.map((s, i) => (
              <li key={s.title} className="flex flex-col items-center text-center">
                <span
                  data-step
                  className="grid h-12 w-12 place-items-center rounded-full bg-gold-soft font-sans text-[13px] font-medium text-white shadow-[0_10px_24px_-10px_rgba(201,147,77,.8)] ring-[6px] ring-mist"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-6 font-sans text-[15.5px] font-medium text-ink">{s.title}</h3>
                <p className="mt-2 max-w-[210px] text-[12.5px] font-light leading-relaxed text-ink/65">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Mobile — vertical timeline */}
        <ol className="relative mt-10 space-y-8 lg:hidden">
          <span className="absolute bottom-6 left-[18px] top-6 w-px bg-gold-soft/50" aria-hidden="true" />
          {howItWorks.steps.map((s, i) => {
            const Icon = icons[s.icon]
            return (
              <Reveal as="li" key={s.title} delay={0.06 * i} className="relative flex items-center gap-4">
                <span className="relative z-10 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gold font-sans text-[12.5px] font-medium text-white ring-[5px] ring-mist">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="grid h-[52px] w-[52px] shrink-0 place-items-center rounded-full bg-white text-gold shadow-[0_10px_24px_-14px_rgba(20,29,21,.4)]">
                  <Icon className="h-6 w-6" strokeWidth={1.1} />
                </span>
                <div>
                  <h3 className="font-sans text-[14.5px] font-medium text-ink">{s.title}</h3>
                  <p className="mt-1 max-w-[230px] text-[12.5px] font-light leading-relaxed text-ink/65">{s.text}</p>
                </div>
              </Reveal>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
