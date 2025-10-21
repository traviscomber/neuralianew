"use client"

import { useEffect, type ReactNode } from "react"
import { analytics } from "@/lib/analytics"

export function AnalyticsProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    analytics.initialize().catch(console.error)
  }, [])

  return <>{children}</>
}
