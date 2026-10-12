import { ArrowRight } from 'lucide-react'
import { WhatsAppIcon } from './Icons.jsx'

/** Small tracked label with a leading gold dash:  — ABOUT REGAL CASTLE */
export function Eyebrow({ children, className = '', dash = true, dashClass = 'bg-gold' }) {
  return (
    <p className={`eyebrow flex items-center gap-3 text-ink ${className}`}>
      {dash && <span className={`h-px w-6 ${dashClass}`} aria-hidden="true" />}
      <span>{children}</span>
    </p>
  )
}

const base =
  'group inline-flex items-center justify-center gap-2.5 rounded-full text-[13.5px] font-medium tracking-wide transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold'

const variants = {
  dark: 'bg-forest-soft text-cream hover:bg-forest hover:shadow-[0_14px_30px_-12px_rgba(20,29,21,.6)]',
  outline: 'border border-forest/70 text-forest hover:bg-forest hover:text-cream',
  whatsapp: 'bg-whatsapp text-white hover:brightness-110 hover:shadow-[0_14px_30px_-12px_rgba(21,94,52,.6)]',
}

/** Pill button. Renders <a> when `href` is given, otherwise <button>. */
export function Button({ variant = 'dark', href, onClick, children, arrow = false, icon, className = '', ...rest }) {
  const cls = `${base} ${variants[variant]} px-7 py-3.5 ${className}`
  const content = (
    <>
      {icon}
      <span>{children}</span>
      {arrow && <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.6} />}
    </>
  )
  if (href) {
    return (
      <a href={href} onClick={onClick} className={cls} {...rest}>
        {content}
      </a>
    )
  }
  return (
    <button type="button" onClick={onClick} className={cls} {...rest}>
      {content}
    </button>
  )
}

export function WhatsAppButton({ href, children, className = '' }) {
  return (
    <Button variant="whatsapp" href={href} target="_blank" rel="noopener noreferrer" icon={<WhatsAppIcon className="h-[18px] w-[18px]" />} arrow className={className}>
      {children}
    </Button>
  )
}
