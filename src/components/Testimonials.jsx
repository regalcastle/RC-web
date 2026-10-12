import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Star } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { BranchDecor } from './Decor.jsx'
import { useSlider } from '../hooks/useSlider.js'
import { testimonials } from '../data/content.js'

function RoundArrow({ dir, onClick, className = '' }) {
  const Icon = dir === 'prev' ? ArrowLeft : ArrowRight
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={dir === 'prev' ? 'Previous testimonial' : 'Next testimonial'}
      className={`grid h-[50px] w-[50px] place-items-center rounded-full border border-white/45 text-white transition duration-300 hover:border-gold-soft hover:bg-gold-soft hover:text-forest ${className}`}
    >
      <Icon className="h-5 w-5" strokeWidth={1.3} />
    </button>
  )
}

function Dots({ count, index, onSelect, className = '' }) {
  return (
    <div className={`flex items-center gap-2 ${className}`} role="tablist" aria-label="Testimonials">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          type="button"
          role="tab"
          aria-selected={i === index}
          aria-label={`Testimonial ${i + 1}`}
          onClick={() => onSelect(i)}
          className={`h-1.5 rounded-full transition-all duration-500 ${i === index ? 'w-6 bg-gold-soft' : 'w-1.5 bg-white/45 hover:bg-white/80'}`}
        />
      ))}
    </div>
  )
}

function Quote({ item, stars = false }) {
  return (
    <motion.figure
      key={item.author}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -14 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <blockquote className="max-w-[360px] text-[15px] font-light leading-[1.85] text-white/90 lg:max-w-[390px]">“{item.quote}”</blockquote>
      {stars && (
        <div className="mt-4 flex gap-1 text-gold-soft" aria-label="5 out of 5 stars">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-4 w-4" fill="currentColor" strokeWidth={0} />
          ))}
        </div>
      )}
      <figcaption className="mt-4 text-[13px] font-light tracking-wide text-white/75">— {item.author}</figcaption>
    </motion.figure>
  )
}

export default function Testimonials() {
  const { index, setIndex, next, prev, setPaused } = useSlider(testimonials.items.length)
  const item = testimonials.items[index]

  return (
    <section id="testimonials" className="relative isolate overflow-hidden bg-cocoa text-white" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-[#2a2619] via-cocoa to-[#17160f]" />
      <BranchDecor className="pointer-events-none absolute -left-8 -top-10 -z-10 h-[320px] w-[240px] text-gold/30" />

      {/* ----------------------- Desktop ----------------------- */}
      <div className="relative mx-auto hidden max-w-[1440px] items-center gap-0 px-[clamp(24px,2vw,32px)] py-[clamp(48px,5vw,72px)] lg:grid lg:grid-cols-[auto_minmax(0,0.42fr)_auto_minmax(0,0.58fr)]">
        <RoundArrow dir="prev" onClick={prev} className="mr-[clamp(16px,2vw,40px)]" />
        <div className="pr-6">
          <Reveal>
            <p className="eyebrow text-white/80">{testimonials.eyebrow}</p>
            <h2 className="mt-4 font-serif text-[clamp(44px,4.4vw,64px)] font-medium leading-[1.04] text-white">
              {testimonials.title.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </h2>
          </Reveal>
          <div className="mt-6 min-h-[190px]">
            <AnimatePresence mode="wait">
              <Quote key={index} item={item} />
            </AnimatePresence>
          </div>
          <Dots count={testimonials.items.length} index={index} onSelect={setIndex} className="mt-2" />
        </div>
        <RoundArrow dir="next" onClick={next} className="mr-[clamp(16px,2vw,40px)]" />
        <ul className="grid grid-cols-3 gap-3.5">
          {testimonials.images.map((src, i) => (
            <Reveal as="li" key={src} delay={0.1 * i} y={36} className="group overflow-hidden rounded-[20px]">
              <img src={src} alt="Event highlight" className="aspect-[216/310] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]" loading="lazy" decoding="async" width="432" height="620" />
            </Reveal>
          ))}
        </ul>
      </div>

      {/* ----------------------- Mobile ------------------------ */}
      <div className="relative px-6 pb-16 pt-12 sm:px-10 lg:hidden">
        <p className="eyebrow flex items-center gap-3 text-white/80">
          <span className="h-px w-6 bg-gold-soft" aria-hidden="true" />
          {testimonials.eyebrow}
        </p>
        <h2 className="mt-5 font-serif text-[clamp(40px,10.6vw,52px)] font-medium leading-[1.04] text-white">
          {testimonials.title.map((l) => (
            <span key={l} className="block">
              {l}
            </span>
          ))}
        </h2>
        <div className="mt-6 min-h-[210px]">
          <AnimatePresence mode="wait">
            <Quote key={index} item={item} stars />
          </AnimatePresence>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <RoundArrow dir="prev" onClick={prev} />
          <Dots count={testimonials.items.length} index={index} onSelect={setIndex} />
          <RoundArrow dir="next" onClick={next} />
        </div>
      </div>
    </section>
  )
}
