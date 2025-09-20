"use client"

import type React from "react"
import { createContext, useContext, useEffect } from "react"
import analytics from "@/lib/analytics"

interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, any>) => void
  trackPageView: (url?: string) => void
  trackConversion: (type: string, value?: number) => void
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined)

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize analytics when the provider mounts
    analytics.init().catch(console.error)

    // Track initial page view
    analytics.trackPageView().catch(console.error)

    // Update session activity every 30 seconds
    const interval = setInterval(() => {
      analytics.updateSessionActivity().catch(console.error)
    }, 30000)

    return () => clearInterval(interval)
  }, [])

  const contextValue: AnalyticsContextType = {
    trackEvent: (eventName: string, properties?: Record<string, any>) => {
      analytics.trackEvent(eventName, properties).catch(console.error)
    },
    trackPageView: (url?: string) => {
      analytics.trackPageView(url).catch(console.error)
    },
    trackConversion: (type: string, value?: number) => {
      analytics.trackConversion(type, value).catch(console.error)
    },
  }

  return <AnalyticsContext.Provider value={contextValue}>{children}</AnalyticsContext.Provider>
}

export function useAnalytics() {
  const context = useContext(AnalyticsContext)
  if (context === undefined) {
    throw new Error("useAnalytics must be used within an AnalyticsProvider")
  }
  return context
}
