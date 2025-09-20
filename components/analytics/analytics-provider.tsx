"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import { analyticsTracker } from "@/lib/analytics"
import { conversionTracker } from "@/lib/conversion-tracking"

interface AnalyticsContextType {
  sessionId: string
  trackEvent: (eventType: string, eventData: any) => void
  trackConversion: (goalId: string, additionalData?: any) => void
  trackABTest: (testName: string, variant: string) => void
  setUserId: (userId: string) => void
}

const AnalyticsContext = createContext<AnalyticsContextType | null>(null)

export function useAnalytics() {
  const context = useContext(AnalyticsContext)
  if (!context) {
    throw new Error("useAnalytics must be used within an AnalyticsProvider")
  }
  return context
}

interface AnalyticsProviderProps {
  children: React.ReactNode
}

export function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  const [sessionId, setSessionId] = useState<string>("")

  useEffect(() => {
    // Initialize analytics tracking
    const id = analyticsTracker.getSessionId()
    setSessionId(id)

    // Track initial page view and funnel step
    conversionTracker.trackFunnelStep(id, window.location.pathname)

    // Set up page change tracking for SPA navigation
    const handleRouteChange = () => {
      conversionTracker.trackFunnelStep(id, window.location.pathname)
    }

    // Listen for popstate events (back/forward navigation)
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
  }, [])

  const trackEvent = (eventType: string, eventData: any) => {
    analyticsTracker.sendEvent({
      event_type: eventType as any,
      page_url: window.location.pathname,
      event_data: eventData,
    })
  }

  const trackConversion = (goalId: string, additionalData?: any) => {
    conversionTracker.trackConversionGoal(goalId, sessionId, additionalData)
  }

  const trackABTest = (testName: string, variant: string) => {
    analyticsTracker.trackABTest(testName, variant)
  }

  const setUserId = (userId: string) => {
    analyticsTracker.setUserId(userId)
  }

  return (
    <AnalyticsContext.Provider
      value={{
        sessionId,
        trackEvent,
        trackConversion,
        trackABTest,
        setUserId,
      }}
    >
      {children}
    </AnalyticsContext.Provider>
  )
}
