import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/lib/language-context"
import { AnalyticsProvider } from "@/components/analytics/analytics-provider"
import { Toaster } from "@/components/ui/toaster"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Neuralia - AI Agents & Automation Solutions",
  description:
    "Transform your business with intelligent AI agents and automation systems. Custom AI solutions for enterprise-level productivity and efficiency.",
  keywords: "AI agents, automation, artificial intelligence, business solutions, productivity, enterprise AI",
  authors: [{ name: "Neuralia Team" }],
  creator: "Neuralia",
  publisher: "Neuralia",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://neuralia.co"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en",
      "es-ES": "/es",
    },
  },
  openGraph: {
    title: "Neuralia - AI Agents & Automation Solutions",
    description: "Transform your business with intelligent AI agents and automation systems.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://neuralia.co",
    siteName: "Neuralia",
    images: [
      {
        url: "/n3uralia-logo-new.png",
        width: 1200,
        height: 630,
        alt: "Neuralia - AI Agents & Automation Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neuralia - AI Agents & Automation Solutions",
    description: "Transform your business with intelligent AI agents and automation systems.",
    images: ["/n3uralia-logo-new.png"],
    creator: "@neuralia",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
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
      <head>
        <link rel="icon" href="/n3uralia-logo.png" />
        <link rel="apple-touch-icon" href="/n3uralia-logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <AnalyticsProvider>
              <Suspense>{children}</Suspense>
              <Toaster />
            </AnalyticsProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
