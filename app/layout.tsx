import type React from "react"
import type { Metadata, Viewport } from "next"
import { headers } from "next/headers"
import { Montserrat } from "next/font/google"
import "./globals.css"
import { AnalyticsProvider } from "@/components/analytics/analytics-provider"
import { StructuredData } from "@/components/structured-data"
import { StructuredCitations } from "@/components/structured-citations"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-montserrat",
  weight: ["300", "400"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://n3uralia.com"),
  title: "N3uralia",
  description:
    "Production AI systems, agentic workflows, and software automation for teams in Chile and LATAM.",
  authors: [{ name: "N3uralia", url: "https://n3uralia.com" }],
  creator: "N3uralia",
  openGraph: {
    title: "N3uralia",
    description:
      "Production AI systems, agentic workflows, and software automation for teams in Chile and LATAM.",
    type: "website",
    url: "https://n3uralia.com",
    siteName: "N3uralia",
    images: [
      {
        url: "https://n3uralia.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "N3uralia",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "N3uralia",
    description:
      "Production AI systems, agentic workflows, and software automation for teams in Chile and LATAM.",
    creator: "@n3uralia",
    site: "@n3uralia",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  referrer: "strict-origin-when-cross-origin",
  category: "technology",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const headerStore = await headers()
  const locale = headerStore.get("x-n3uralia-locale") === "en" ? "en" : "es"

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <StructuredData />
        <StructuredCitations />
      </head>
      <body className={`${montserrat.variable} antialiased`}>
        <AnalyticsProvider>{children}</AnalyticsProvider>
      </body>
    </html>
  )
}
