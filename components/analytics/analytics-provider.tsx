"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import analytics from "@/lib/analytics"
import conversionTracker from "@/lib/conversion-tracking"

interface AnalyticsContextType {
  sessionId: string | null
  trackEvent: (eventType: string, eventData?: Record<string, any>) => Promise<void>
  trackConversion: (conversionType: string, value?: number, data?: Record<string, any>) => Promise<void>
  isTracking: boolean
}

const AnalyticsContext = createContext<AnalyticsContextType | null>(null)

export function useAnalytics() {
  const context = useContext(AnalyticsContext)
  if (!context) {
    throw new Error("useAnalytics must be used within an AnalyticsProvider")
  }
  return context
}

export function useConversionTracking() {
  const { trackConversion } = useAnalytics()

  return {
    trackConversion,
    trackWhatsAppClick: () => trackConversion("whatsapp_click"),
    trackHeroCTA: () => trackConversion("hero_cta"),
    trackContactForm: () => trackConversion("contact_form"),
    trackDemoRequest: () => trackConversion("demo_request"),
    trackNewsletterSignup: () => trackConversion("newsletter_signup"),
  }
}

interface AnalyticsProviderProps {
  children: React.ReactNode
  enableTracking?: boolean
}

export function AnalyticsProvider({ children, enableTracking = true }: AnalyticsProviderProps) {
  const [sessionId, setSessionId] = useState<string | null>(null)
  const [isTracking, setIsTracking] = useState(enableTracking)

  useEffect(() => {
    if (enableTracking && typeof window !== "undefined") {
      // Initialize analytics
      const initAnalytics = async () => {
        try {
          // Wait for analytics to initialize
          await new Promise((resolve) => setTimeout(resolve, 100))
          const currentSessionId = analytics.getSessionId()
          setSessionId(currentSessionId)

          if (currentSessionId) {
            setIsTracking(true)
          }
        } catch (error) {
          console.error("Failed to initialize analytics:", error)
          setIsTracking(false)
        }
      }

      initAnalytics()

      // Listen for conversion events
      const handleConversion = (event: CustomEvent) => {
        console.log("Conversion detected:", event.detail)
      }

      window.addEventListener("conversion", handleConversion as EventListener)

      return () => {
        window.removeEventListener("conversion", handleConversion as EventListener)
      }
    }
  }, [enableTracking])

  const trackEvent = async (eventType: string, eventData?: Record<string, any>) => {
    if (!isTracking) return

    try {
      await analytics.trackCustomEvent(eventType, eventData)
    } catch (error) {
      console.error("Failed to track event:", error)
    }
  }

  const trackConversion = async (conversionType: string, value?: number, data?: Record<string, any>) => {
    if (!isTracking) return

    try {
      await conversionTracker.manualTrackConversion(conversionType, value, data)
    } catch (error) {
      console.error("Failed to track conversion:", error)
    }
  }

  const contextValue: AnalyticsContextType = {
    sessionId,
    trackEvent,
    trackConversion,
    isTracking,
  }

  return <AnalyticsContext.Provider value={contextValue}>{children}</AnalyticsContext.Provider>
}

// HOC for automatic conversion tracking
export function withConversionTracking<P extends object>(
  Component: React.ComponentType<P>,
  conversionType: string,
  conversionValue?: number,
) {
  return function ConversionTrackedComponent(props: P) {
    const { trackConversion } = useAnalytics()

    const handleClick = async (event: React.MouseEvent) => {
      await trackConversion(conversionType, conversionValue)

      // Call original onClick if it exists
      const originalOnClick = (props as any).onClick
      if (originalOnClick) {
        originalOnClick(event)
      }
    }

    return <Component {...props} onClick={handleClick} />
  }
}

// Hook for tracking page views
export function usePageTracking(pageName?: string) {
  const { trackEvent } = useAnalytics()

  useEffect(() => {
    if (typeof window !== "undefined") {
      const pageTitle = pageName || document.title
      trackEvent("page_view", {
        page_title: pageTitle,
        page_url: window.location.href,
        referrer: document.referrer,
      })
    }
  }, [pageName, trackEvent])
}

// Hook for tracking form submissions
export function useFormTracking(formName: string) {
  const { trackEvent, trackConversion } = useAnalytics()

  const trackFormSubmission = async (formData: FormData) => {
    await trackEvent("form_submission", {
      form_name: formName,
      form_data: Object.fromEntries(formData.entries()),
    })

    // Track as conversion if it's a conversion form
    if (formName === "contact_form") {
      await trackConversion("contact_form")
    } else if (formName === "newsletter_signup") {
      await trackConversion("newsletter_signup")
    }
  }

  return { trackFormSubmission }
}

// Hook for tracking scroll depth
export function useScrollTracking() {
  const { trackEvent } = useAnalytics()

  useEffect(() => {
    let maxScrollDepth = 0

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      const scrollPercentage = Math.round(((scrollTop + windowHeight) / documentHeight) * 100)

      if (scrollPercentage > maxScrollDepth) {
        maxScrollDepth = scrollPercentage

        // Track milestone scroll depths
        const milestones = [25, 50, 75, 90]
        const milestone = milestones.find((m) => scrollPercentage >= m && maxScrollDepth < m)

        if (milestone) {
          trackEvent("scroll_milestone", {
            scroll_depth: scrollPercentage,
            milestone: milestone,
          })
        }
      }
    }

    let scrollTimeout: NodeJS.Timeout
    const throttledScroll = () => {
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(handleScroll, 100)
    }

    window.addEventListener("scroll", throttledScroll)
    return () => {
      window.removeEventListener("scroll", throttledScroll)
      clearTimeout(scrollTimeout)
    }
  }, [trackEvent])
}
