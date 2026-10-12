import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const NO_REDUCED_MOTION = '(prefers-reduced-motion: no-preference)'
export { gsap, ScrollTrigger }
