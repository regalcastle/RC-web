import { motion } from 'framer-motion'

/** Fade-up on scroll (Framer Motion). */
export default function Reveal({ children, delay = 0, y = 28, x = 0, duration = 0.9, className = '', as = 'div', amount = 0.2 }) {
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  )
}
