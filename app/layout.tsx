import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { AnalyticsProvider } from "@/components/analytics/analytics-provider"
import { LanguageProvider } from "@/lib/language-context"
import Navigation from "@/components/navigation"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "N3uralia - AI Platform",
  description: "AI Agents & Automation",
    generator: 'v0.app'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense>
          <LanguageProvider>
            <AnalyticsProvider>
              <Navigation />
              {children}
            </AnalyticsProvider>
          </LanguageProvider>
        </Suspense>
      </body>
    </html>
  )
}
