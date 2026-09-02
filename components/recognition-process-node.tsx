'use client'

import type { CSSProperties, PointerEvent } from 'react'
import styles from './recognition-process-node.module.css'

export type ProcessIconName =
  | 'detect'
  | 'classify'
  | 'score'
  | 'record'
  | 'telegram'
  | 'trace'
  | 'capture'
  | 'decision'
  | 'insights'
  | 'intelligence'

interface ProcessNodeProps {
  index?: string
  icon: ProcessIconName
  title: string
  description: string
  orientation?: 'horizontal' | 'vertical'
  emphasis?: boolean
}

function ProcessIcon({ name }: { name: ProcessIconName }) {
  const common = {
    viewBox: '0 0 32 32',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.25,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  }

  switch (name) {
    case 'detect':
      return (
        <svg {...common}>
          <circle cx="16" cy="16" r="8.5" />
          <circle cx="16" cy="16" r="3.2" />
          <circle cx="16" cy="16" r="1.2" fill="currentColor" stroke="none" />
          <path d="M16 3.5v3M16 25.5v3M3.5 16h3M25.5 16h3" />
        </svg>
      )
    case 'classify':
      return (
        <svg {...common}>
          <circle cx="16" cy="16" r="2.6" />
          <circle cx="8" cy="8" r="1.7" />
          <circle cx="24" cy="8" r="1.7" />
          <circle cx="8" cy="24" r="1.7" />
          <circle cx="24" cy="24" r="1.7" />
          <path d="M10 10l4.2 4.2M22 10l-4.2 4.2M10 22l4.2-4.2M22 22l-4.2-4.2" />
        </svg>
      )
    case 'score':
      return (
        <svg {...common}>
          <path d="m16 5.5 10.5 10.5L16 26.5 5.5 16 16 5.5Z" />
          <path d="m16 10.5 5.5 5.5-5.5 5.5-5.5-5.5 5.5-5.5Z" opacity=".62" />
          <circle cx="16" cy="16" r="1.4" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'record':
      return (
        <svg {...common}>
          <rect x="7" y="5.5" width="17" height="21" rx="1.5" />
          <path d="M10.5 11h10M10.5 15.5h10M10.5 20h6" />
          <circle cx="22.5" cy="22" r="3.2" fill="#020607" />
          <path d="M21 22h3M22.5 20.5v3" />
        </svg>
      )
    case 'telegram':
      return (
        <svg {...common}>
          <path d="M4.8 15.2 27 6.4l-4.3 19.2-7.4-5.6-4.8 3.6 1.6-7.1L24 8.8 9.6 15.3l-4.8-.1Z" />
          <path d="m12.1 16.5 11.8-7.7" opacity=".72" />
        </svg>
      )
    case 'trace':
      return (
        <svg {...common}>
          <path d="M24.7 10.5A10.5 10.5 0 1 0 25.5 20" />
          <path d="M21.2 6.4h5.2v5.2" />
          <path d="m26.2 6.7-4.6 4.6" />
        </svg>
      )
    case 'capture':
      return (
        <svg {...common}>
          <rect x="5" y="8" width="22" height="17" rx="2" />
          <circle cx="16" cy="16.5" r="5" />
          <circle cx="16" cy="16.5" r="1.6" />
          <path d="m10 8 2-3h8l2 3" />
        </svg>
      )
    case 'decision':
      return (
        <svg {...common}>
          <circle cx="9" cy="16" r="2.2" />
          <circle cx="23" cy="9" r="2.2" />
          <circle cx="23" cy="23" r="2.2" />
          <path d="M11.3 16h4.2M15.5 16c2.6 0 2.8-7 5.3-7M15.5 16c2.6 0 2.8 7 5.3 7" />
        </svg>
      )
    case 'insights':
      return (
        <svg {...common}>
          <rect x="5" y="6" width="22" height="20" rx="2" />
          <path d="M9 21V16M14 21v-8M19 21v-4M24 21v-10" />
          <path d="m9 13 5-3 5 1 5-4" opacity=".65" />
        </svg>
      )
    case 'intelligence':
      return (
        <svg {...common}>
          <circle cx="16" cy="16" r="4.2" />
          <circle cx="7" cy="8" r="2" />
          <circle cx="25" cy="8" r="2" />
          <circle cx="7" cy="24" r="2" />
          <circle cx="25" cy="24" r="2" />
          <path d="M12.8 13.2 8.5 9.6M19.2 13.2l4.3-3.6M12.8 18.8l-4.3 3.6M19.2 18.8l4.3 3.6" />
        </svg>
      )
  }
}

export function ProcessNode({
  index,
  icon,
  title,
  description,
  orientation = 'horizontal',
  emphasis = false,
}: ProcessNodeProps) {
  const numericIndex = Number.parseInt(index ?? '1', 10)
  const delay = Number.isFinite(numericIndex) ? -(Math.max(numericIndex, 1) - 1) * 0.83 : 0
  const style = { '--node-delay': `${delay}s` } as CSSProperties

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    if (event.pointerType === 'touch' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const rect = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2

    event.currentTarget.style.setProperty('--px', x.toFixed(3))
    event.currentTarget.style.setProperty('--py', y.toFixed(3))
  }

  function resetParallax(event: PointerEvent<HTMLElement>) {
    event.currentTarget.style.setProperty('--px', '0')
    event.currentTarget.style.setProperty('--py', '0')
  }

  return (
    <article
      className={styles.node}
      data-orientation={orientation}
      data-emphasis={emphasis || undefined}
      style={style}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetParallax}
    >
      {index ? <span className={styles.index}>{index}</span> : null}
      <div className={styles.iconStage} aria-hidden="true">
        <span className={styles.halo} />
        <span className={styles.ring}>
          <ProcessIcon name={icon} />
        </span>
      </div>
      <div className={styles.copy}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  )
}
