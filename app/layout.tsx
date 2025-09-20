import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { AnalyticsProvider } from "@/components/analytics/analytics-provider"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "N3uralia - AI Agent Development Platform",
  description:
    "Build, deploy, and manage AI agents with our comprehensive platform. Streamline your AI development workflow.",
  keywords: "AI, artificial intelligence, agents, automation, development platform",
  authors: [{ name: "N3uralia Team" }],
  creator: "N3uralia",
  publisher: "N3uralia",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://neuralia.co",
    title: "N3uralia - AI Agent Development Platform",
    description: "Build, deploy, and manage AI agents with our comprehensive platform.",
    siteName: "N3uralia",
  },
  twitter: {
    card: "summary_large_image",
    title: "N3uralia - AI Agent Development Platform",
    description: "Build, deploy, and manage AI agents with our comprehensive platform.",
    creator: "@neuralia",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Suspense fallback={null}>
            <AnalyticsProvider>
              {children}
              <Toaster />
            </AnalyticsProvider>
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
