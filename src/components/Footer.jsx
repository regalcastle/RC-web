import { ArrowUp, ChevronRight } from 'lucide-react'
import Logo from './Logo.jsx'
import SocialLinks from './SocialLinks.jsx'
import { BranchDecor } from './Decor.jsx'
import { footer, footerNav, images } from '../data/content.js'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-forest text-cream max-lg:-mt-8 max-lg:pt-8">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[clamp(24px,5vw,80px)]">
        {/* ------------------- Desktop ------------------- */}
        <div className="hidden items-center gap-10 py-[clamp(40px,4.4vw,60px)] lg:grid lg:grid-cols-[1.15fr_0.7fr_0.7fr_1.7fr]">
          <div>
            <Logo variant="light" className="-ml-3 h-[168px] w-auto" />
            <p className="mt-4 max-w-[240px] text-[13px] font-light leading-relaxed text-cream/80">{footer.tagline}</p>
          </div>

          <nav aria-label="Quick links">
            <h3 className="text-[13px] font-medium tracking-wide text-gold-text">Quick Links</h3>
            <ul className="mt-5 space-y-2.5">
              {footerNav.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-[13px] font-light text-cream/80 transition hover:text-gold-text">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-[13px] font-medium tracking-wide text-gold-text">Follow Us</h3>
            <SocialLinks className="mt-5" />
          </div>

          <div className="group relative ml-auto block w-full max-w-[560px] overflow-hidden rounded-bl-[28px] rounded-br-[110px] rounded-tl-[110px] rounded-tr-[28px]">
            <img src={images.footerBlob} alt="" className="aspect-[440/210] w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105" loading="lazy" decoding="async" width="880" height="420" />
            <span className="absolute inset-0 bg-linear-to-r from-forest/30 via-forest/55 to-forest/80" aria-hidden="true" />
            <BranchDecor className="absolute -right-4 -top-6 h-[160%] w-auto text-gold/30" />
            <span className="absolute inset-y-0 left-[38%] flex items-center font-serif text-[clamp(18px,1.6vw,24px)] font-normal leading-[1.18] text-white">
              <span>
                {footer.blobText.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </span>
            </span>
          </div>
        </div>

        {/* ------------------- Mobile -------------------- */}
        <div className="pt-12 text-center lg:hidden">
          <Logo variant="light" className="mx-auto h-[176px] w-auto" />
          <p className="mx-auto mt-5 max-w-[300px] font-serif text-[23px] font-normal leading-[1.25] text-cream">{footer.tagline}</p>

          <nav aria-label="Quick links" className="mt-9 text-left">
            <ul className="border-t border-white/10">
              {footerNav.map((l) => (
                <li key={l.href} className="border-b border-white/10">
                  <a href={l.href} className="flex items-center justify-between py-4 text-[14.5px] font-light text-cream/90">
                    {l.label}
                    <ChevronRight className="h-4 w-4 text-cream/70" strokeWidth={1.4} />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social icons after the menu */}
          <SocialLinks className="mt-8 justify-center" />
        </div>

        {/* ------------------- Bottom bar ---------------- */}
        <div className="mt-10 flex items-end justify-between gap-6 border-t border-white/10 py-6 text-[12px] font-light text-cream/70 max-lg:mt-8 max-lg:text-left lg:mt-0 lg:items-center lg:py-5">
          <div>
            <p>
              © {year} Regal Castle.
              <span className="lg:hidden"> </span>
              <br className="lg:hidden" /> All Rights Reserved.
            </p>
            <p className="mt-5 lg:hidden">{footer.location}</p>
            <p className="mt-1 lg:hidden">{footer.reach}</p>
          </div>
          <p className="hidden lg:block">
            {footer.location}
            <span className="mx-3 text-white/30">|</span>
            {footer.reach}
          </p>
          <a
            href="#home"
            aria-label="Back to top"
            className="mb-8 grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/35 text-cream transition hover:-translate-y-0.5 hover:bg-cream hover:text-forest lg:mb-0"
          >
            <ArrowUp className="h-5 w-5" strokeWidth={1.4} />
          </a>
        </div>
      </div>
    </footer>
  )
}
