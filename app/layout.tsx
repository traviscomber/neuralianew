// VERCEL CACHE RESET SIGNAL - 2026-03-13 16:55:30 UTC
// Force complete rebuild by changing file timestamp
// Vercel will clear .next cache and rebuild from scratch
export const dynamic = 'force-dynamic'

import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Montserrat } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "@/components/navigation"
import { ScrollToTop } from "@/components/scroll-to-top"
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
  title: "N3uralia | Sistemas Agenticos en Producción - IA Aumentada Chile",
  description:
    "N3uralia: Plataforma de sistemas agenticos listos para producción. Inteligencia aumentada que trabaja con humanos, sin reemplazar. Arquitectura multiagente, gobernanza, memoria persistente. Para empresas en Chile y LATAM. IA en producción desde día uno.",
  keywords:
    "sistemas agenticos, IA en producción, agentes inteligentes, agentes de IA, AI agents, agentes IA, automatización empresarial, arquitectura multiagente, inteligencia aumentada, n3uralia, orquestación de agentes, IA Chile, LATAM, empresa AI, sistemas fullstack, IA aplicada, transformación digital, agentic AI, multi-agent systems, agentes autónomos, AI orchestration",
  authors: [{ name: "N3uralia", url: "https://n3uralia.com" }],
  creator: "N3uralia",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  alternates: {
    canonical: "https://n3uralia.com",
    languages: {
      "es-CL": "https://n3uralia.com",
      "es": "https://n3uralia.com",
      "en": "https://n3uralia.com",
      "en-US": "https://n3uralia.com",
    },
  },
  openGraph: {
    title: "N3uralia - AI Agents & Sistemas Agenticos en Producción",
    description: "Agentic AI architecture designed for humans. N3uralia AI agents in production with governance, memory, and orchestration. Multi-agent systems that work with you. Agentes de IA listos para producción.",
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
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "N3uralia - AI Agents in Production",
    description: "Agentic AI systems for enterprise. N3uralia AI agents, agentes de IA, multi-agent orchestration, production-ready architecture.",
    creator: "@n3uralia",
    site: "@n3uralia",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
    bingbot: {
      index: true,
      follow: true,
    },
  },
  generator: "v0.app",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning className="">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('n3uralia-theme');
                const html = document.documentElement;
                if (theme === 'dark' || theme === 'black') {
                  html.classList.add('dark');
                } else {
                  html.classList.remove('dark');
                }
              } catch (e) {}
            `,
          }}
        />
        <StructuredData />
        <StructuredCitations />
      </head>
      <body className={`${inter.variable} ${montserrat.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange storageKey="n3uralia-theme" themes={["light", "dark", "black"]}>
          <Navigation />
          {children}
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
