import { ArrowRight, Briefcase, Cake, Gem } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { Eyebrow } from './ui.jsx'
import { RingsIcon } from './Icons.jsx'
import { BranchDecor } from './Decor.jsx'
import { services } from '../data/content.js'

const iconMap = {
  rings: RingsIcon,
  gem: Gem,
  cake: Cake,
  briefcase: Briefcase,
}

function ServiceIcon({ name, className }) {
  const Icon = iconMap[name]
  return <Icon className={className} strokeWidth={1.1} />
}

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-sand">
      <BranchDecor className="pointer-events-none absolute -left-16 top-4 hidden h-[420px] w-[320px] text-gold/25 lg:block" />
      <BranchDecor className="pointer-events-none absolute -right-20 bottom-0 hidden h-[420px] w-[320px] -scale-x-100 text-gold/20 lg:block" />

      <div className="relative mx-auto max-w-[1440px] px-6 py-14 sm:px-10 lg:px-[clamp(24px,3.6vw,56px)] lg:py-[clamp(64px,7vw,100px)]">
        {/* Heading */}
        <div className="grid gap-5 lg:grid-cols-2 lg:items-end lg:gap-10">
          <div>
            <Reveal>
              <Eyebrow>{services.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-serif text-[clamp(40px,10.6vw,54px)] font-medium leading-[1.04] text-ink lg:text-[clamp(44px,4.4vw,64px)]">
                {services.title.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.16} className="lg:pb-2">
            <p className="max-w-[460px] text-[14px] font-light leading-[1.8] text-ink/75 lg:text-[15px]">{services.intro}</p>
            <p className="mt-3 hidden max-w-[460px] text-[14px] font-light leading-[1.8] text-ink/75 lg:block lg:text-[15px]">{services.intro2}</p>
          </Reveal>
        </div>

        {/* Cards */}
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-[clamp(14px,1.8vw,26px)]">
          {services.items.map((item, i) => (
            <Reveal as="li" key={item.title} delay={0.08 * i} className="group">
              {/* Mobile: horizontal card */}
              <a
                href="#contact"
                className="flex items-stretch gap-4 rounded-[26px] border border-black/[.04] bg-white/70 p-3 shadow-[0_14px_34px_-24px_rgba(20,29,21,.35)] transition duration-500 hover:bg-white lg:hidden"
              >
                <img
                  src={item.image}
                  alt=""
                  className="h-[168px] w-[106px] shrink-0 rounded-[18px] rounded-t-[60px] object-cover"
                  loading="lazy"
                  decoding="async"
                  width="212"
                  height="336"
                />
                <div className="flex flex-1 flex-col py-2 pr-1">
                  <h3 className="font-sans text-[15px] font-medium leading-snug text-ink">{item.title}</h3>
                  <p className="mt-2 text-[12.5px] font-light leading-relaxed text-ink/65">{item.textMobile ?? item.text}</p>
                  <span className="mt-auto grid h-8 w-8 place-items-center self-end rounded-full border border-forest/40 text-forest transition group-hover:bg-forest group-hover:text-cream">
                    <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.4} />
                  </span>
                </div>
              </a>

              {/* Desktop: arch card */}
              <div className="hidden lg:block">
                <div className="relative overflow-hidden rounded-t-[999px] bg-blush-deep">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="aspect-[308/300] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                    loading="lazy"
                    decoding="async"
                    width="616"
                    height="600"
                  />
                </div>
                <div className="relative -mt-12 rounded-t-[44px] rounded-b-[30px] bg-white px-5 pb-8 pt-12 text-center shadow-[0_24px_50px_-30px_rgba(20,29,21,.45)] transition-transform duration-500 group-hover:-translate-y-1.5">
                  <span className="absolute left-1/2 top-0 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-gold/20 bg-white text-gold shadow-[0_10px_26px_-12px_rgba(20,29,21,.4)]">
                    <ServiceIcon name={item.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="font-serif text-[clamp(21px,1.7vw,25px)] font-medium leading-[1.12] text-ink">
                    {item.titleDesktop.map((l) => (
                      <span key={l} className="block">
                        {l}
                      </span>
                    ))}
                  </h3>
                  <p className="mx-auto mt-3 max-w-[200px] text-[12.5px] font-light leading-relaxed text-ink/65">{item.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
