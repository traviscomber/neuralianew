'use client'

import type { ReactNode } from 'react'

export function SolutionsFocus({
  children,
  className = '',
}: {
  children: ReactNode
  index?: number
  className?: string
}) {
  return <div className={className}>{children}</div>
}
