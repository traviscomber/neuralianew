import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/lib/language-context"
import { AnalyticsProvider } from "@/components/analytics/analytics-provider"
import { Navigation } from "@/components/navigation"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "N3uralia - AI Agents & Automations",
  description: "Build your own ecosystem of AI agents and automations",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={<div>Loading...</div>}>
          <LanguageProvider>
            <AnalyticsProvider>
              <Navigation />
              <main className="pt-16">{children}</main>
            </AnalyticsProvider>
          </LanguageProvider>
        </Suspense>
      </body>
    </html>
  )
}
