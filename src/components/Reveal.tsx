import type { ReactNode } from 'react'

import { useScrollReveal } from '../hooks/useScrollReveal'

type RevealDirection = 'up' | 'left' | 'right' | 'scale'

type RevealProps = {
  children: ReactNode
  delay?: number
  className?: string
  direction?: RevealDirection
}

const hiddenClasses: Record<RevealDirection, string> = {
  up: 'opacity-0 translate-y-12',
  left: 'opacity-0 -translate-x-12',
  right: 'opacity-0 translate-x-12',
  scale: 'opacity-0 scale-90',
}

export function Reveal({
  children,
  delay = 0,
  className = '',
  direction = 'up',
}: RevealProps) {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={[
        'transition-all duration-1000 ease-out',
        isVisible
          ? 'opacity-100 translate-y-0 translate-x-0 scale-100'
          : hiddenClasses[direction],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
