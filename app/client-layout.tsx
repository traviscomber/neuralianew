"use client"

import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/lib/language-context"
import { AnalyticsProvider } from "@/components/analytics/analytics-provider"
import { Toaster } from "@/components/ui/toaster"
import { useEffect, useState } from "react"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

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
