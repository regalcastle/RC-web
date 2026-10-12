import { InstagramIcon, FacebookIcon } from './Icons.jsx'
import { links } from '../data/content.js'

/** Round social buttons (dark backgrounds). Set URLs in src/data/content.js */
export default function SocialLinks({ className = '' }) {
  const btn =
    'grid h-11 w-11 place-items-center rounded-full border border-white/25 bg-white/[0.04] transition duration-300 hover:-translate-y-0.5 hover:border-gold-text hover:bg-white/10'
  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      <li>
        <a href={links.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={btn}>
          <InstagramIcon className="h-[22px] w-[22px]" />
        </a>
      </li>
      <li>
        <a href={links.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={`${btn} text-cream`}>
          <FacebookIcon className="h-[22px] w-[22px]" />
        </a>
      </li>
    </ul>
  )
}
