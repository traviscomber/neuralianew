"use client"

import type React from "react"

import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/lib/language-context"
import { AnalyticsProvider } from "@/components/analytics/analytics-provider"
import { Toaster } from "@/components/ui/toaster"
import { useEffect } from "react"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload fonts
      const fontLink = document.createElement("link")
      fontLink.rel = "preload"
      fontLink.href = "/_next/static/media/inter-latin.woff2"
      fontLink.as = "font"
      fontLink.type = "font/woff2"
      fontLink.crossOrigin = "anonymous"
      document.head.appendChild(fontLink)
    }

    preloadCriticalResources()
  }, [])

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      <LanguageProvider>
        <AnalyticsProvider enableTracking={true}>
          {children}
          <Toaster />
        </AnalyticsProvider>
      </LanguageProvider>
    </ThemeProvider>
  )
}
