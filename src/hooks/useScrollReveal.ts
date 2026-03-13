import { useEffect, useRef, useState } from 'react'

export function useScrollReveal<T extends HTMLElement>() {
  const [isVisible, setIsVisible] = useState(
    () =>
      typeof window !== 'undefined' &&
      typeof window.IntersectionObserver === 'undefined',
  )
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const node = ref.current

    if (!node) {
      return
    }

    if (typeof IntersectionObserver === 'undefined') {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.15 },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  return [ref, isVisible] as const
}
