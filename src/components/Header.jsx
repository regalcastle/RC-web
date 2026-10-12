import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Menu, X } from 'lucide-react'
import Logo from './Logo.jsx'
import { WhatsAppButton } from './ui.jsx'
import SocialLinks from './SocialLinks.jsx'
import { links, nav } from '../data/content.js'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-black/60 shadow-[0_8px_30px_-18px_rgba(0,0,0,.6)] backdrop-blur-xl'
            : 'bg-black/40 backdrop-blur-md'
        }`}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-5 py-0 sm:px-8 lg:px-[clamp(24px,3.3vw,48px)] lg:py-[5px]">
          <a href="#home" aria-label="Regal Castle — home" className="shrink-0">
            <Logo className={`w-auto transition-all duration-500 ${scrolled ? 'h-[68px] lg:h-[104px]' : 'h-[76px] lg:h-[116px]'}`} />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:block" aria-label="Primary">
            <ul className="flex items-center gap-[clamp(20px,2.6vw,40px)]">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="relative py-1 text-[13px] font-normal tracking-wide text-white after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-gold after:transition-transform after:duration-300 hover:after:scale-x-100"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden lg:block">
            <WhatsAppButton href={links.whatsapp} className="!px-6 !py-3 !text-[12.5px]">
              Chat on WhatsApp
            </WhatsAppButton>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="grid h-11 w-11 place-items-center rounded-full text-white transition hover:bg-white/10 lg:hidden"
          >
            <Menu className="h-6 w-6" strokeWidth={1.4} />
          </button>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="drawer"
            className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-forest text-cream lg:hidden"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
          >
            <div className="flex items-center justify-between px-5 py-4 sm:px-8">
              <Logo variant="light" className="h-24 w-auto" />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-cream"
              >
                <X className="h-5 w-5" strokeWidth={1.4} />
              </button>
            </div>

            <nav className="mt-6 flex-1 px-6 sm:px-10" aria-label="Mobile">
              <ul>
                {nav.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="border-b border-white/10"
                  >
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between py-4 font-serif text-[30px] font-medium leading-none text-cream"
                    >
                      {item.label}
                      <ArrowRight className="h-5 w-5 text-gold-text" strokeWidth={1.3} />
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8">
                <WhatsAppButton href={links.whatsapp} className="w-full">
                  Chat on WhatsApp
                </WhatsAppButton>
              </div>

              {/* Social icons after the menu */}
              <SocialLinks className="mt-8" />
            </nav>

            <p className="px-6 pb-8 pt-10 text-xs tracking-wide text-white/50 sm:px-10">Kottayam, Kerala, India · Events Across India</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
