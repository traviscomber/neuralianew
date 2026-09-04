'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export function SolutionsFocus({
  children,
  index = 0,
  className = '',
}: {
  children: ReactNode
  index?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => setActive(Boolean(entry?.isIntersecting)),
      { rootMargin: '-24% 0px', threshold: 0.08 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <motion.div
      ref={ref}
      className={`focus-item ${active || reducedMotion ? 'is-active' : ''} ${className}`.trim()}
      animate={reducedMotion ? undefined : { opacity: active ? 1 : 0.5, scale: active ? 1 : 0.965 }}
      transition={{ duration: 0.45, delay: index * 0.02, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
