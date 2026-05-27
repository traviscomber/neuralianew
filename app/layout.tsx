import type React from "react"
import type { Metadata, Viewport } from "next"

// Static generation with ISR - revalidate every hour
export const revalidate = 3600

// Root metadata - basic defaults, locale layout overrides with locale-specific values
export const metadata: Metadata = {
  title: "N3uralia | Sistemas Agenticos en Produccion",
  description: "N3uralia: Plataforma de sistemas agenticos listos para produccion.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
}

// Root layout passes children through - actual HTML rendering happens in [locale]/layout.tsx
// This allows dynamic lang attribute based on locale parameter
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
