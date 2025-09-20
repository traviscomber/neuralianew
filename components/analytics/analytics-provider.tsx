"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import { analytics } from "@/lib/analytics"
import { conversionTracker } from "@/lib/conversion-tracking"

interface AnalyticsContextType {
  isTracking: boolean
  sessionId: string
  trackEvent: (eventType: string, eventData: Record<string, any>) => void
  trackConversion: (type: string, data?: Record<string, any>) => void
  getAnalyticsData: () => any
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
  enableTracking?: boolean
}

export function AnalyticsProvider({ children, enableTracking = true }: AnalyticsProviderProps) {
  const [isTracking, setIsTracking] = useState(false)
  const [sessionId, setSessionId] = useState("")

  useEffect(() => {
    if (enableTracking && typeof window !== "undefined") {
      // Initialize analytics
      setSessionId(analytics.getSessionId())
      setIsTracking(true)

      // Track initial page load
      analytics.trackPageView()

      console.log("🔍 Analytics initialized:", {
        sessionId: analytics.getSessionId(),
        tracking: true,
      })
    }
  }, [enableTracking])

  const trackEvent = (eventType: string, eventData: Record<string, any>) => {
    if (isTracking) {
      analytics.trackCustomEvent(eventType, eventData)
    }
  }

  const trackConversion = (type: string, data?: Record<string, any>) => {
    if (isTracking) {
      conversionTracker.trackConversion(type as any, data)
    }
  }

  const getAnalyticsData = () => {
    return analytics.getAnalyticsData()
  }

  const contextValue: AnalyticsContextType = {
    isTracking,
    sessionId,
    trackEvent,
    trackConversion,
    getAnalyticsData,
  }

  return <AnalyticsContext.Provider value={contextValue}>{children}</AnalyticsContext.Provider>
}

// HOC for automatic conversion tracking
export function withConversionTracking<T extends Record<string, any>>(
  Component: React.ComponentType<T>,
  conversionType: string,
  conversionData?: Record<string, any>,
) {
  return function ConversionTrackedComponent(props: T) {
    const { trackConversion } = useAnalytics()

    const handleClick = (originalOnClick?: () => void) => {
      return () => {
        trackConversion(conversionType, conversionData)
        originalOnClick?.()
      }
    }

    return <Component {...props} onClick={handleClick(props.onClick)} />
  }
}

// Hook for manual conversion tracking
export function useConversionTracking() {
  const { trackConversion, trackEvent } = useAnalytics()

  return {
    trackWhatsApp: (data?: Record<string, any>) => trackConversion("whatsapp_click", data),

    trackHeroCTA: (data?: Record<string, any>) => trackConversion("hero_cta", data),

    trackServicesCTA: (data?: Record<string, any>) => trackConversion("services_cta", data),

    trackContactForm: (data?: Record<string, any>) => trackConversion("contact_form", data),

    trackDemoRequest: (data?: Record<string, any>) => trackConversion("demo_request", data),

    trackEmailSignup: (data?: Record<string, any>) => trackConversion("email_signup", data),

    trackCustomEvent: trackEvent,
    trackCustomConversion: trackConversion,
  }
}
