import { images } from '../data/content.js'

/** variant: "dark" (for light backgrounds) | "light" (for dark backgrounds) */
export default function Logo({ variant = 'dark', className = 'h-12 w-auto' }) {
  return (
    <img
      src={variant === 'light' ? images.logoLight : images.logo}
      alt="Regal Castle Event Management"
      className={className}
      width="220"
      height="64"
      decoding="async"
    />
  )
}
