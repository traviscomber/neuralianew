"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { analytics } from "@/lib/analytics"
import { conversionTracker } from "@/lib/conversion-tracking"

interface AnalyticsContextType {
  isReady: boolean
  sessionId: string | null
  trackPageView: (url: string, title?: string) => Promise<void>
  trackEvent: (eventType: string, eventData?: Record<string, any>) => Promise<void>
  trackConversion: (conversionType: string, value?: number, additionalData?: Record<string, any>) => Promise<void>
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined)

interface AnalyticsProviderProps {
  children: ReactNode
}

export function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  const [isReady, setIsReady] = useState(false)
  const [sessionId, setSessionId] = useState<string | null>(null)

  useEffect(() => {
    // Wait for analytics to be ready
    const checkReady = async () => {
      await analytics.waitForInitialization()

      if (analytics.isReady()) {
        setIsReady(true)
        setSessionId(analytics.getSessionId())

        // Track initial page view
        await analytics.trackPageView(window.location.pathname, document.title)
      } else {
        // Retry after a short delay
        setTimeout(checkReady, 100)
      }
    }

    checkReady()
  }, [])

  // Track page changes in SPA
  useEffect(() => {
    if (!isReady) return

    const handleRouteChange = () => {
      analytics.trackPageView(window.location.pathname, document.title)
    }

    // Listen for popstate (back/forward navigation)
    window.addEventListener("popstate", handleRouteChange)

    // Listen for pushstate/replacestate (programmatic navigation)
    const originalPushState = history.pushState
    const originalReplaceState = history.replaceState

    history.pushState = (...args) => {
      originalPushState.apply(history, args)
      setTimeout(handleRouteChange, 0)
    }

    history.replaceState = (...args) => {
      originalReplaceState.apply(history, args)
      setTimeout(handleRouteChange, 0)
    }

    return () => {
      window.removeEventListener("popstate", handleRouteChange)
      history.pushState = originalPushState
      history.replaceState = originalReplaceState
    }
  }, [isReady])

  const contextValue: AnalyticsContextType = {
    isReady,
    sessionId,
    trackPageView: analytics.trackPageView.bind(analytics),
    trackEvent: analytics.trackEvent.bind(analytics),
    trackConversion: conversionTracker.trackConversion.bind(conversionTracker),
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
