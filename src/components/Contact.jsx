import { MapPin, Phone } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { Button, WhatsAppButton } from './ui.jsx'
import { WhatsAppIcon } from './Icons.jsx'
import { AnimatedFloral, BranchDecor } from './Decor.jsx'
import { cta, links } from '../data/content.js'

const iconCircle = 'grid h-11 w-11 shrink-0 place-items-center rounded-full bg-blush text-gold'

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative z-10 overflow-hidden rounded-t-[32px] bg-blush max-lg:rounded-b-[32px] max-lg:-mt-6 lg:-mt-10 lg:rounded-t-[44px]"
    >
      {/* Decor */}
      <AnimatedFloral className="pointer-events-none absolute -left-6 bottom-0 hidden h-[82%] w-auto select-none text-gold/70 lg:block" />
      <AnimatedFloral className="pointer-events-none absolute -bottom-2 -left-6 h-[150px] w-auto select-none text-gold/70 lg:hidden" />
      <BranchDecor className="pointer-events-none absolute right-[34%] top-0 hidden h-[260px] w-[200px] rotate-12 text-gold/25 lg:block" />

      <div className="relative mx-auto grid max-w-[1440px] items-center gap-9 px-6 pb-20 pt-12 sm:px-10 lg:grid-cols-[1fr_0.78fr] lg:gap-14 lg:px-[clamp(24px,6.5vw,96px)] lg:py-[clamp(52px,5.5vw,76px)] lg:pl-[clamp(80px,9vw,140px)]">
        <div>
          <Reveal>
            <p className="eyebrow text-ink/70">{cta.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-serif text-[clamp(38px,10vw,50px)] font-medium leading-[1.06] text-ink lg:text-[clamp(38px,3.5vw,52px)]">{cta.title}</h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-4 max-w-[430px] text-[14px] font-light leading-[1.8] text-ink/75 lg:text-[14.5px]">
              <span className="lg:hidden">{cta.textMobile}</span>
              <span className="hidden lg:inline">{cta.textDesktop}</span>
            </p>
            <div className="mt-7 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap lg:mt-8 lg:gap-4">
              <WhatsAppButton href={links.whatsapp} className="!py-[18px] sm:!py-3.5">
                {cta.whatsappLabel}
              </WhatsAppButton>
              <Button variant="outline" href={links.call} icon={<Phone className="h-[18px] w-[18px]" strokeWidth={1.3} />} className="!py-[18px] sm:!py-3.5">
                {cta.callLabel}
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.12} y={36}>
          <div className="rounded-[26px] bg-white/70 p-3 shadow-[0_30px_70px_-40px_rgba(20,29,21,.45)] backdrop-blur-sm lg:p-4">
            <ul className="divide-y divide-forest/[.07]">
              {links.contacts.map((c) => (
                <li key={c.name} className="flex items-center gap-4 px-3 py-5 lg:px-4">
                  <span className={iconCircle}>
                    <Phone className="h-[18px] w-[18px]" strokeWidth={1.3} />
                  </span>
                  <div className="flex-1">
                    <p className="text-[14.5px] font-medium text-ink">{c.name}</p>
                    <a href={`tel:${c.tel}`} className="mt-0.5 block text-[14.5px] font-normal text-ink transition hover:text-gold">
                      {c.display}
                    </a>
                  </div>
                  <a
                    href={c.wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Chat with ${c.name} on WhatsApp`}
                    className="text-whatsapp transition hover:scale-110"
                  >
                    <WhatsAppIcon className="h-[26px] w-[26px]" />
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-4 px-3 py-5 lg:px-4">
                <span className={iconCircle}>
                  <MapPin className="h-[18px] w-[18px]" strokeWidth={1.3} />
                </span>
                <div>
                  <p className="text-[14.5px] font-medium text-ink">{cta.location.title}</p>
                  <p className="mt-0.5 text-[12.5px] font-light text-ink/65">{cta.location.text}</p>
                </div>
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
