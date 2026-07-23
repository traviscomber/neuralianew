import type React from "react"
import type { Metadata, Viewport } from "next"
import { headers } from "next/headers"
import { Montserrat, Rajdhani } from "next/font/google"
import "./globals.css"
import "./brand-refresh.css"
import { AnalyticsProvider } from "@/components/analytics/analytics-provider"
import { StructuredData } from "@/components/structured-data"
import { absoluteUrl } from "@/lib/site"

const montserrat = Montserrat({
  subsets: ["latin"], display: "swap", preload: true,
  variable: "--font-montserrat", weight: ["400", "500"],
})
const rajdhani = Rajdhani({
  subsets: ["latin"], display: "swap",
  variable: "--font-rajdhani", weight: ["400", "500"],
})
export const metadata: Metadata = {
  metadataBase: new URL(absoluteUrl("/")), title: "N3uralia",
  description: "Production AI systems, agentic workflows, and software automation for teams in Chile and LATAM.",
  authors: [{ name: "N3uralia", url: absoluteUrl("/") }], creator: "N3uralia",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "64x64" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.png", type: "image/png", sizes: "16x16" },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website", siteName: "N3uralia", title: "N3uralia",
    description: "Production AI systems, agentic workflows, and software automation for teams in Chile and LATAM.",
    images: [{ url: absoluteUrl("/og-image.png"), width: 1200, height: 630, alt: "N3uralia", type: "image/png" }],
  },
  twitter: { card: "summary_large_image", creator: "@n3uralia", site: "@n3uralia", images: [absoluteUrl("/og-image.png")] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  referrer: "strict-origin-when-cross-origin", category: "technology",
}
export const viewport: Viewport = { width: "device-width", initialScale: 1, maximumScale: 5, userScalable: true, viewportFit: "cover" }
export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const headerStore = await headers()
  const locale = headerStore.get("x-n3uralia-locale") === "en" ? "en" : "es"
  return <html lang={locale} suppressHydrationWarning><head><StructuredData /></head><body className={`${montserrat.variable} ${rajdhani.variable} antialiased`}><AnalyticsProvider>{children}</AnalyticsProvider></body></html>
}
