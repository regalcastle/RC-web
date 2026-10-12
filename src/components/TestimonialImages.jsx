import Reveal from './Reveal.jsx'
import { testimonials } from '../data/content.js'

/** Mobile only — photo collage shown under the testimonial slider. */
export default function TestimonialImages() {
  const [big, a, b] = testimonials.images
  return (
    <div className="relative z-10 -mt-8 rounded-t-[32px] bg-cream px-4 pb-10 pt-4 sm:px-8 lg:hidden">
      <Reveal className="overflow-hidden rounded-[26px]">
        <img src={big} alt="Event highlight" className="aspect-[200/230] w-full object-cover" loading="lazy" decoding="async" width="800" height="920" />
      </Reveal>
      <div className="mt-3 grid grid-cols-2 gap-3">
        {[a, b].map((src, i) => (
          <Reveal key={src} delay={0.08 * (i + 1)} className="overflow-hidden rounded-[20px]">
            <img src={src} alt="Event highlight" className="aspect-[100/80] w-full object-cover" loading="lazy" decoding="async" width="500" height="400" />
          </Reveal>
        ))}
      </div>
    </div>
  )
}
