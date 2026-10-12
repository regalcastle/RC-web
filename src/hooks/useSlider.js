import { useCallback, useEffect, useState } from 'react'

/** Simple looping slider state with optional autoplay. */
export function useSlider(length, autoplayMs = 7000) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => setIndex((i) => (i + 1) % length), [length])
  const prev = useCallback(() => setIndex((i) => (i - 1 + length) % length), [length])

  useEffect(() => {
    if (!autoplayMs || paused) return undefined
    const id = setInterval(next, autoplayMs)
    return () => clearInterval(id)
  }, [autoplayMs, paused, next, index])

  return { index, setIndex, next, prev, setPaused }
}
