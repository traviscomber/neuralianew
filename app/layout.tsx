import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: "N3uralia - Agentes de IA Conversacional",
  description:
    "Revoluciona tu negocio con agentes de IA conversacional avanzados. Automatización inteligente, atención 24/7 y resultados medibles.",
  keywords: "IA conversacional, chatbots, automatización, inteligencia artificial, agentes virtuales",
  authors: [{ name: "N3uralia" }],
  creator: "N3uralia",
  publisher: "N3uralia",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://n3uralia.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "N3uralia - Agentes de IA Conversacional",
    description:
      "Revoluciona tu negocio con agentes de IA conversacional avanzados. Automatización inteligente, atención 24/7 y resultados medibles.",
    url: "https://n3uralia.com",
    siteName: "N3uralia",
    images: [
      {
        url: "/n3uralia-logo.png",
        width: 1200,
        height: 630,
        alt: "N3uralia - Agentes de IA Conversacional",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "N3uralia - Agentes de IA Conversacional",
    description:
      "Revoluciona tu negocio con agentes de IA conversacional avanzados. Automatización inteligente, atención 24/7 y resultados medibles.",
    images: ["/n3uralia-logo.png"],
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
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
