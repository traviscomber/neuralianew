'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

export function CatalogProjectFocus({
  id,
  children,
}: {
  id: string
  children: ReactNode
}) {
  const ref = useRef<HTMLElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      {
        root: null,
        rootMargin: '-46% 0px -46% 0px',
        threshold: 0,
      },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <article
      ref={ref}
      id={id}
      className={`catalog-project${active ? ' is-center-active' : ''}`}
    >
      {children}
    </article>
  )
}
