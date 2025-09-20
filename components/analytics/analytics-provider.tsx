"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { usePathname } from "next/navigation"
import { analytics } from "@/lib/analytics"
import { conversionTracker } from "@/lib/conversion-tracking"

interface AnalyticsContextType {
  isReady: boolean
  trackEvent: (eventType: string, eventData?: Record<string, any>) => Promise<void>
  trackConversion: (type: string, value: number, data?: Record<string, any>) => Promise<void>
  sessionId: string | null
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined)

interface AnalyticsProviderProps {
  children: ReactNode
}

export function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  const [isReady, setIsReady] = useState(false)
  const [sessionId, setSessionId] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const initializeAnalytics = async () => {
      try {
        console.log("Starting analytics provider initialization...")

        // Wait for analytics to initialize completely
        await analytics.waitForInitialization()

        // Check if analytics is ready with extended retry logic
        let attempts = 0
        const maxAttempts = 150 // 15 seconds max wait
        const checkInterval = 100 // Check every 100ms

        const checkReady = () => {
          const ready = analytics.isReady()
          const currentSessionId = analytics.getSessionId()

          console.log(
            `Analytics ready check ${attempts + 1}/${maxAttempts}: ready=${ready}, sessionId=${currentSessionId}`,
          )

          if (ready && currentSessionId) {
            setIsReady(true)
            setSessionId(currentSessionId)
            conversionTracker.setSessionId(currentSessionId)
            console.log("Analytics provider initialized successfully with session:", currentSessionId)
          } else if (attempts < maxAttempts) {
            attempts++
            setTimeout(checkReady, checkInterval)
          } else {
            console.warn(`Analytics initialization timeout after ${maxAttempts * checkInterval}ms`)
            setIsReady(false)
          }
        }

        checkReady()
      } catch (error) {
        console.error("Failed to initialize analytics provider:", error)
        setIsReady(false)
      }
    }

    initializeAnalytics()
  }, [])

  // Track page views on route changes with delay
  useEffect(() => {
    if (isReady && pathname) {
      console.log("Tracking page view for:", pathname)

      // Add delay to ensure session is fully ready
      setTimeout(() => {
        analytics.trackPageView(pathname, document.title).catch((error) => {
          console.error("Failed to track page view:", error)
        })
      }, 500)

      conversionTracker.resetTracking()
    }
  }, [pathname, isReady])

  // Set up global click tracking with delay
  useEffect(() => {
    if (!isReady) return

    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (target) {
        // Track click with delay to ensure session is ready
        setTimeout(() => {
          analytics.trackClick(target, event.clientX, event.clientY).catch((error) => {
            console.error("Failed to track click:", error)
          })
        }, 200)

        // Check for conversion tracking attributes
        const conversionType = target.getAttribute("data-conversion")
        if (conversionType) {
          const value = Number.parseFloat(target.getAttribute("data-conversion-value") || "1")
          const dataAttr = target.getAttribute("data-conversion-data")
          let additionalData = {}

          try {
            additionalData = dataAttr ? JSON.parse(dataAttr) : {}
          } catch (error) {
            console.warn("Invalid conversion data JSON:", dataAttr)
          }

          setTimeout(() => {
            conversionTracker.trackConversion(conversionType, value, additionalData).catch((error) => {
              console.error("Failed to track conversion:", error)
            })
          }, 200)
        }
      }
    }

    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [isReady])

  const trackEvent = async (eventType: string, eventData?: Record<string, any>) => {
    if (isReady) {
      try {
        await analytics.trackEvent(eventType, eventData)
      } catch (error) {
        console.error("Failed to track event:", error)
      }
    } else {
      console.warn("Analytics not ready, event not tracked:", eventType)
    }
  }

  const trackConversion = async (type: string, value: number, data?: Record<string, any>) => {
    if (isReady) {
      try {
        await conversionTracker.trackConversion(type, value, data)
      } catch (error) {
        console.error("Failed to track conversion:", error)
      }
    } else {
      console.warn("Analytics not ready, conversion not tracked:", type)
    }
  }

  const contextValue: AnalyticsContextType = {
    isReady,
    trackEvent,
    trackConversion,
    sessionId,
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

// Custom hook for conversion tracking
export function useConversionTracking() {
  const { trackConversion, isReady } = useAnalytics()

  const trackHeroCTA = () => trackConversion("hero_cta", 15)
  const trackContactForm = () => trackConversion("contact_form", 25)
  const trackDemoRequest = () => trackConversion("demo_request", 30)
  const trackWhatsAppClick = () => trackConversion("whatsapp_click", 10)

  return {
    trackHeroCTA,
    trackContactForm,
    trackDemoRequest,
    trackWhatsAppClick,
    trackConversion,
    isReady,
  }
}
