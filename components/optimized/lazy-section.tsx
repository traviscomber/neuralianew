"use client"

import type { ReactNode } from "react"
import { useLazyLoad } from "@/hooks/use-performance"

interface LazySectionProps {
  children: ReactNode
  className?: string
  threshold?: number
  rootMargin?: string
  fallback?: ReactNode
}

export function LazySection({
  children,
  className = "",
  threshold = 0.1,
  rootMargin = "50px",
  fallback,
}: LazySectionProps) {
  const { ref, isVisible } = useLazyLoad()

  return (
    <div ref={ref} className={className}>
      {isVisible ? children : fallback || <div className="h-64 bg-gray-100 animate-pulse rounded" />}
    </div>
  )
}
