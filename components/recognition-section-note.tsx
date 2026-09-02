import type { ReactNode } from 'react'
import styles from './recognition-section-note.module.css'

export type RecognitionSectionNoteIcon = 'contexts' | 'workflow' | 'platform'

function NoteIcon({ name }: { name: RecognitionSectionNoteIcon }) {
  const common = {
    viewBox: '0 0 32 32',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.15,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  }

  if (name === 'contexts') {
    return (
      <svg {...common}>
        <circle cx="9" cy="9" r="3.2" />
        <circle cx="23" cy="9" r="3.2" />
        <circle cx="16" cy="23" r="3.2" />
        <path d="M12.2 9h7.6M10.5 11.7l4 8M21.5 11.7l-4 8" />
      </svg>
    )
  }

  if (name === 'workflow') {
    return (
      <svg {...common}>
        <ellipse cx="16" cy="7.5" rx="9" ry="3.5" />
        <path d="M7 7.5v8c0 1.9 4 3.5 9 3.5s9-1.6 9-3.5v-8" />
        <path d="M7 15.5v8c0 1.9 4 3.5 9 3.5s9-1.6 9-3.5v-8" />
        <path d="M7 15.5c0 1.9 4 3.5 9 3.5s9-1.6 9-3.5" opacity=".55" />
      </svg>
    )
  }

  return (
    <svg {...common}>
      <circle cx="16" cy="16" r="4" />
      <circle cx="7.5" cy="7.5" r="2.2" />
      <circle cx="24.5" cy="7.5" r="2.2" />
      <circle cx="7.5" cy="24.5" r="2.2" />
      <circle cx="24.5" cy="24.5" r="2.2" />
      <path d="m12.8 12.8-3.7-3.7M19.2 12.8l3.7-3.7M12.8 19.2l-3.7 3.7M19.2 19.2l3.7 3.7" />
    </svg>
  )
}

export function RecognitionSectionNote({
  icon,
  children,
}: {
  icon: RecognitionSectionNoteIcon
  children: ReactNode
}) {
  return (
    <aside className={styles.note}>
      <span className={styles.icon} aria-hidden="true">
        <NoteIcon name={icon} />
      </span>
      <span className={styles.rule} aria-hidden="true" />
      <p>{children}</p>
    </aside>
  )
}
