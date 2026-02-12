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
  title: "N3uralia - Inteligencia Autónoma Aumentada por Humanos",
  description:
    "N3uralia diseña sistemas de inteligencia autónoma que amplifican capacidades humanas. Arquitectura de sistemas agenticos en producción con orquestación multi-agente, memoria persistente y gobernanza radical.",
  keywords:
    "N3uralia, sistemas agenticos, inteligencia autónoma, human-augmented AI, multi-agent systems, IA producción, arquitectura de agentes, Living Agents, governance",
  authors: [{ name: "N3uralia", url: "https://n3uralia.com" }],
  creator: "N3uralia",
  openGraph: {
    title: "N3uralia - Inteligencia Autónoma Aumentada por Humanos",
    description: "Sistemas agenticos diseñados para trabajar con humanos, no contra ellos. Arquitectura que expande, no reemplaza.",
    type: "website",
    locale: "es_CL",
    url: "https://n3uralia.com",
    siteName: "N3uralia",
    images: [
      {
        url: "https://n3uralia.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "N3uralia - Inteligencia Autónoma Aumentada por Humanos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "N3uralia - Sistemas de IA en Producción",
    description: "Arquitecturas de inteligencia artificial diseñadas para operar en el mundo real",
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
