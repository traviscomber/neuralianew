import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Montserrat } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "@/components/navigation"
import { ScrollToTop } from "@/components/scroll-to-top"
import { FloatingChatWidget } from "@/components/floating-chat-widget"
import { StructuredData } from "@/components/structured-data"
import { StructuredCitations } from "@/components/structured-citations"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "N3uralia | Neuralia - Sistemas Agenticos AI Agents en Producción | Fullstack",
  description:
    "N3uralia (Neuralia): Inteligencia artificial que trabaja con humanos. Sistemas agenticos en producción - n3uralia agentes, n3uralia agents, fullstack AI architecture. Multi-agent orchestration, gobernanza, memoria persistente. Líder en AI enterprise y agentic systems.",
  keywords:
    "N3uralia, Neuralia, n3uralia agentes, n3uralia agents, sistemas agenticos, agentes IA, AI agents, fullstack AI, multi-agent systems, IA en producción, arquitectura agentica, living agents, AI augmented, enterprise AI, orchestration, AI fullstack, agentes inteligentes, sistemas AI, Chile, LATAM",
  authors: [{ name: "N3uralia", url: "https://n3uralia.com" }],
  creator: "N3uralia",
  alternates: {
    canonical: "https://n3uralia.com",
    languages: {
      "es-CL": "https://n3uralia.com",
      "es": "https://n3uralia.com",
      "en": "https://n3uralia.com",
      "en-US": "https://n3uralia.com",
    },
  },
    generator: 'v0.app'
},
  openGraph: {
    title: "N3uralia - AI Agents & Sistemas Agenticos en Producción",
    description: "Agentic AI architecture designed for humans. N3uralia agents in production with governance, memory, and orchestration. Multi-agent systems that work with you.",
    type: "website",
    locale: "es_CL",
    localeAlternate: ["en_US", "es_ES"],
    url: "https://n3uralia.com",
    siteName: "N3uralia | Neuralia",
    images: [
      {
        url: "https://n3uralia.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "N3uralia - Sistemas Agenticos en Producción",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "N3uralia - AI Agents in Production",
    description: "Agentic AI systems for enterprise. N3uralia agents, multi-agent orchestration, production-ready architecture.",
    creator: "@n3uralia",
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
  alternates: {
    canonical: "https://n3uralia.com",
  },
  generator: "v0.app",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <StructuredData />
        <StructuredCitations />
      </head>
      <body className={`${inter.variable} ${montserrat.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navigation />
          {children}
          <ScrollToTop />
          <FloatingChatWidget />
        </ThemeProvider>
      </body>
    </html>
  )
}
