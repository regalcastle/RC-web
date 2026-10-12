import { useLayoutEffect, useRef } from 'react'
import { ArrowDown, Play } from 'lucide-react'
import { gsap, NO_REDUCED_MOTION } from '../lib/gsap.js'
import { Button } from './ui.jsx'
import { hero, images } from '../data/content.js'
import { onPlanEventClick } from '../data/actions.js'

function Stat({ stat, className = '' }) {
  return (
    <div className={className}>
      <p className="font-sans text-[21px] font-medium leading-tight text-ink lg:text-[26px]">
        {stat.text ? (
          stat.text
        ) : (
          <>
            <span data-count={stat.value}>{stat.value}</span>
            {stat.suffix}
          </>
        )}
      </p>
      <p className="mt-1 text-[11px] font-light tracking-wide text-ink-soft lg:text-xs">{stat.label}</p>
    </div>
  )
}

function WatchButton({ onClick, className = '', outlined = false }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group inline-flex items-center gap-3.5 text-[13.5px] font-medium tracking-wide text-ink transition ${
        outlined
          ? 'w-full justify-center rounded-full border border-forest/70 bg-white/25 px-7 py-3.5 backdrop-blur-sm hover:bg-white/60'
          : ''
      } ${className}`}
    >
      <span className="grid h-[42px] w-[42px] place-items-center rounded-full border border-forest/60 transition duration-300 group-hover:scale-110 group-hover:bg-forest group-hover:text-cream">
        <Play className="h-3.5 w-3.5 translate-x-px" fill="currentColor" strokeWidth={0} />
      </span>
      Watch Our Story
    </button>
  )
}

export default function Hero({ onWatchStory }) {
  const root = useRef(null)

  useLayoutEffect(() => {
    const mm = gsap.matchMedia()
    mm.add(
      NO_REDUCED_MOTION,
      () => {
        const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })
        tl.from('[data-bgimg]', { scale: 1.14, duration: 2.4, ease: 'power2.out' }, 0)
          .from('[data-line]', { yPercent: 115, duration: 1.2, stagger: 0.14 }, 0.25)
          .from('[data-a]', { y: 26, opacity: 0, duration: 1, stagger: 0.09 }, 0.4)

        // Clouds drift very slowly
        gsap.to('[data-cloud]', { xPercent: 5, yPercent: 3, duration: 9, ease: 'sine.inOut', yoyo: true, repeat: -1, stagger: 1.4 })

        // Parallax on the background
        gsap.to('[data-bg]', {
          yPercent: 6,
          ease: 'none',
          scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
        })

        // Count-up stats
        root.current.querySelectorAll('[data-count]').forEach((el) => {
          const end = Number(el.dataset.count)
          const state = { v: 0 }
          el.textContent = '0'
          gsap.to(state, {
            v: end,
            duration: 2.2,
            ease: 'power2.out',
            delay: 0.6,
            scrollTrigger: { trigger: el, start: 'top 95%', once: true },
            onUpdate: () => {
              el.textContent = Math.round(state.v)
            },
          })
        })
      },
      root,
    )
    return () => mm.revert()
  }, [])

  return (
    <section id="home" ref={root} aria-label="Welcome">
      <div className="relative isolate overflow-hidden bg-[#f3d5cb]">
        {/* Background — separate desktop & mobile images */}
        <div data-bg className="absolute inset-x-0 -bottom-[8%] -top-[8%] -z-20">
          <picture>
            <source media="(min-width: 1024px)" srcSet={images.heroDesktop} />
            <img
              data-bgimg
              src={images.heroMobile}
              alt=""
              className="h-full w-full object-cover object-[50%_80%] lg:object-center"
              fetchPriority="high"
              decoding="async"
            />
          </picture>
        </div>
        {/* Soft misty clouds behind the text (desktop) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 hidden overflow-hidden lg:block [mask-image:linear-gradient(to_right,#000_52%,transparent_94%)]"
        >
          <div data-cloud className="absolute -left-[8%] top-[10%] h-[52%] w-[66%] rounded-[50%] bg-[#fff5f0]/80 blur-[80px]" />
          <div data-cloud className="absolute left-[2%] top-[34%] h-[34%] w-[54%] rounded-[50%] bg-[#fff1ea]/75 blur-[70px]" />
          <div data-cloud className="absolute -left-[6%] top-[58%] h-[30%] w-[58%] rounded-[50%] bg-[#fff5f0]/80 blur-[70px]" />
          <div data-cloud className="absolute -bottom-[10%] -left-[4%] h-[34%] w-[78%] rounded-[50%] bg-[#fff5f0]/85 blur-[80px]" />
        </div>
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 -z-10 hidden h-44 bg-linear-to-b from-[#fff4ef]/70 to-transparent lg:block" />

        {/* Soft misty clouds behind the text (mobile) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden lg:hidden [mask-image:linear-gradient(to_bottom,#000_52%,transparent_82%)]"
        >
          <div data-cloud className="absolute -left-[16%] top-[2%] h-[26%] w-[130%] rounded-[50%] bg-[#fff5f0]/75 blur-[55px]" />
          <div data-cloud className="absolute -left-[10%] top-[24%] h-[24%] w-[120%] rounded-[50%] bg-[#fff1ea]/70 blur-[50px]" />
          <div data-cloud className="absolute -left-[8%] top-[44%] h-[18%] w-[100%] rounded-[50%] bg-[#fff5f0]/55 blur-[50px]" />
        </div>

        <div className="relative mx-auto flex min-h-[max(100svh,800px)] max-w-[1440px] flex-col px-6 pt-[108px] sm:px-10 lg:min-h-[min(100svh,920px)] lg:px-[clamp(24px,6.5vw,96px)] lg:pt-[clamp(150px,22vh,215px)]">
          <div className="max-w-[560px] lg:max-w-[700px]">
            <p data-a className="eyebrow max-w-[165px] leading-[2.1] text-ink lg:max-w-[340px]">
              {hero.eyebrow}
            </p>

            <h1 className="mt-5 font-serif text-[clamp(52px,15.4vw,76px)] font-medium leading-[0.96] tracking-[-0.01em] text-ink lg:mt-6 lg:text-[clamp(64px,7.3vw,108px)]">
              {hero.lines.map((line) => (
                <span key={line} className="block overflow-hidden pb-[0.06em]">
                  <span data-line className="block">
                    {line}
                  </span>
                </span>
              ))}
            </h1>

            <p data-a className="-mt-0.5 font-script text-[clamp(34px,10.4vw,52px)] leading-[1.1] text-ink lg:mt-1 lg:text-[clamp(40px,3.9vw,58px)]">
              {hero.script}
            </p>

            <p data-a className="mt-5 max-w-[330px] text-[14px] font-light leading-[1.8] text-ink/80 sm:max-w-[420px] lg:mt-6 lg:max-w-[430px] lg:text-[15px]">
              {hero.text}
            </p>

            {/* Desktop buttons */}
            <div data-a className="mt-8 hidden items-center gap-8 lg:flex">
              <Button variant="dark" arrow onClick={onPlanEventClick}>
                Plan Your Event
              </Button>
              <WatchButton onClick={onWatchStory} />
            </div>
          </div>

          {/* Desktop stats */}
          <div data-a className="mt-auto hidden items-stretch pb-[clamp(36px,6vh,64px)] lg:flex">
            {hero.stats.map((s, i) => (
              <Stat key={s.label} stat={s} className={i === 0 ? 'pr-9' : 'border-l border-forest/20 px-9'} />
            ))}
          </div>

          {/* Mobile buttons */}
          <div data-a className="mt-auto flex flex-col gap-3.5 pb-16 pt-12 lg:hidden">
            <Button variant="dark" arrow onClick={onPlanEventClick} className="w-full !py-[18px]">
              Plan Your Event
            </Button>
            <WatchButton onClick={onWatchStory} outlined />
          </div>

          {/* Desktop: scroll cue */}
          <a
            href="#about"
            aria-label="Scroll to About"
            className="absolute bottom-[clamp(36px,6vh,60px)] right-[2.4vw] hidden h-[52px] w-[52px] place-items-center rounded-full bg-white/95 text-forest shadow-[0_10px_30px_-10px_rgba(0,0,0,.35)] transition hover:-translate-y-1 hover:bg-white lg:grid"
          >
            <ArrowDown className="h-5 w-5" strokeWidth={1.4} />
          </a>
        </div>
      </div>

      {/* Mobile stats card */}
      <div className="relative z-10 -mt-8 rounded-t-[32px] bg-cream px-6 pb-4 pt-9 sm:px-10 lg:hidden">
        <div className="mx-auto grid max-w-md grid-cols-3 items-start text-center">
          {hero.stats.map((s, i) => (
            <Stat key={s.label} stat={s} className={i === 0 ? 'px-2' : 'border-l border-forest/15 px-2'} />
          ))}
        </div>
        <a
          href="#about"
          aria-label="Scroll to About"
          className="mx-auto mt-7 grid h-12 w-12 place-items-center rounded-full bg-white text-forest shadow-[0_10px_30px_-10px_rgba(0,0,0,.3)]"
        >
          <ArrowDown className="h-5 w-5" strokeWidth={1.4} />
        </a>
      </div>
    </section>
  )
}
