import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Montserrat } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "@/components/navigation"
import { ScrollToTop } from "@/components/scroll-to-top"
import { StructuredData } from "@/components/structured-data"

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
  title: "N3uralia (Neuralia) - Plataforma de IA para Empresas Chile | Agentes Inteligentes",
  description:
    "N3uralia (Neuralia): IA que funciona en producción. Arquitectura multi-agente, automatización inteligente y desarrollo full-stack para empresas chilenas. Agentes inteligentes, coordinación de equipos, sistemas que escalan.",
  keywords:
    "N3uralia, Neuralia, IA Chile, agentes inteligentes, multi-agent AI, automatización empresarial, plataforma IA, desarrollo con IA, sistemas inteligentes, full-stack, machine learning, AI gateway, Neuralia Chile, N3uralia Chile",
  authors: [{ name: "N3uralia (Neuralia)", url: "https://n3uralia.com" }],
  creator: "N3uralia",
  openGraph: {
    title: "N3uralia (Neuralia) - Plataforma de IA | Agentes Inteligentes en Producción",
    description: "N3uralia orquesta sistemas de IA que funcionan. Multi-agente, full-stack, production-ready.",
    type: "website",
    locale: "es_CL",
    url: "https://n3uralia.com",
    siteName: "N3uralia",
    images: [
      {
        url: "https://n3uralia.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "N3uralia - Plataforma de IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "N3uralia (Neuralia) - Plataforma de IA",
    description: "N3uralia: agentes inteligentes que funcionan en producción",
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
    generator: 'v0.app'
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
      </head>
      <body className={`${inter.variable} ${montserrat.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navigation />
          {children}
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
