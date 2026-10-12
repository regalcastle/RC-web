import { motion, useReducedMotion } from 'framer-motion'

/* Large decorative pieces for the "Our Work" section:
   - Mandala: a lotus-style gold line mandala that rotates very slowly
   - FloatingPetals: soft petals drifting gently */

const rot = (deg) => `rotate(${deg})`

function MandalaArt() {
  return (
    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      {/* outer rings */}
      <circle r="97" strokeWidth="0.6" />
      <circle r="93.5" strokeWidth="0.5" strokeDasharray="0.8 3.2" />
      <circle r="63" strokeWidth="0.5" />
      <circle r="39" strokeWidth="0.5" />

      {/* outer petals + tip dots */}
      {Array.from({ length: 16 }).map((_, i) => (
        <g key={`a${i}`} transform={rot(i * 22.5)}>
          <path d="M0 -63 C 9 -75 9 -87 0 -95 C -9 -87 -9 -75 0 -63Z" strokeWidth="0.7" fill="currentColor" fillOpacity="0.07" />
          <path d="M0 -68 L0 -88" strokeWidth="0.4" />
          <circle cx="0" cy="-99.5" r="1.3" fill="currentColor" stroke="none" />
        </g>
      ))}

      {/* small diamonds between outer petals */}
      {Array.from({ length: 16 }).map((_, i) => (
        <path key={`d${i}`} transform={rot(i * 22.5 + 11.25)} d="M0 -80 l2.2 4 -2.2 4 -2.2 -4Z" strokeWidth="0.5" fill="currentColor" fillOpacity="0.15" />
      ))}

      {/* middle petals */}
      {Array.from({ length: 12 }).map((_, i) => (
        <path key={`b${i}`} transform={rot(i * 30 + 15)} d="M0 -39 C 11 -47 11 -57 0 -65 C -11 -57 -11 -47 0 -39Z" strokeWidth="0.7" fill="currentColor" fillOpacity="0.1" />
      ))}

      {/* inner petals */}
      {Array.from({ length: 8 }).map((_, i) => (
        <path key={`c${i}`} transform={rot(i * 45)} d="M0 -14 C 8 -21 8 -30 0 -38 C -8 -30 -8 -21 0 -14Z" strokeWidth="0.7" />
      ))}

      {/* heart of the lotus */}
      {Array.from({ length: 8 }).map((_, i) => (
        <ellipse key={`e${i}`} transform={rot(i * 45 + 22.5)} cx="0" cy="-6.5" rx="2.3" ry="5.5" strokeWidth="0.6" />
      ))}
      <circle r="2.6" fill="currentColor" stroke="none" />
    </g>
  )
}

/** Large rotating gold mandala. Size it with className (e.g. "h-[760px] w-[760px]"). */
export function Mandala({ className = '', duration = 150, reverse = false }) {
  const reduce = useReducedMotion()
  return (
    <motion.svg
      viewBox="-102 -102 204 204"
      className={className}
      aria-hidden="true"
      animate={reduce ? undefined : { rotate: reverse ? -360 : 360 }}
      transition={{ duration, repeat: Infinity, ease: 'linear' }}
    >
      <MandalaArt />
    </motion.svg>
  )
}

const PETAL_PATH = 'M0 0 C 7 -6 9 -15 0 -24 C -9 -15 -7 -6 0 0Z'

const petals = [
  { left: '4%', top: '10%', size: 30, color: '#e8a0ab', delay: 0, dur: 9, rot: 24 },
  { left: '27%', top: '6%', size: 20, color: '#d9a35e', delay: 1.2, dur: 11, rot: -30 },
  { left: '40%', top: '34%', size: 24, color: '#eebcc3', delay: 0.6, dur: 10, rot: 40 },
  { left: '8%', top: '78%', size: 26, color: '#d9a35e', delay: 2, dur: 12, rot: -20 },
  { left: '30%', top: '88%', size: 34, color: '#e8a0ab', delay: 0.3, dur: 10, rot: 18 },
  { left: '44%', top: '64%', size: 18, color: '#eebcc3', delay: 1.6, dur: 9, rot: -42 },
  { left: '17%', top: '46%', size: 16, color: '#d9a35e', delay: 2.4, dur: 13, rot: 35 },
  { left: '92%', top: '92%', size: 26, color: '#e8a0ab', delay: 0.9, dur: 11, rot: -15 },
]

/** Soft petals drifting gently. Place inside a `relative overflow-hidden` parent. */
export function FloatingPetals({ className = '' }) {
  const reduce = useReducedMotion()
  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden="true">
      {petals.map((p, i) => (
        <motion.svg
          key={i}
          viewBox="-12 -26 24 28"
          width={p.size}
          height={p.size * 1.15}
          className="absolute"
          style={{ left: p.left, top: p.top, rotate: p.rot }}
          animate={reduce ? undefined : { y: [0, -16, 0], x: [0, 8, 0], rotate: [p.rot, p.rot + 22, p.rot] }}
          transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path d={PETAL_PATH} fill={p.color} fillOpacity="0.55" stroke={p.color} strokeWidth="0.6" />
          <path d="M0 -2 L0 -18" stroke="#fff" strokeOpacity="0.5" strokeWidth="0.5" />
        </motion.svg>
      ))}
    </div>
  )
}
