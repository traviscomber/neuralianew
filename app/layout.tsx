import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Montserrat } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "@/components/navigation"
import { ScrollToTop } from "@/components/scroll-to-top"

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
  title: "N3uralia - AI Development Gateway | Plataforma de IA para Chile",
  description:
    "La puerta de entrada al desarrollo con IA. Orquestamos agentes inteligentes, automatización y creatividad. Soluciones completas para empresas y ciudades en Chile.",
  keywords: "IA Chile, agentes inteligentes, automatización, N3uralia, AI gateway, desarrollo con IA, machine learning",
  authors: [{ name: "N3uralia", url: "https://n3uralia.com" }],
  openGraph: {
    title: "N3uralia - AI Development Gateway",
    description: "Orquestación de sistemas de IA para empresas y ciudades",
    type: "website",
    locale: "es_CL",
    url: "https://n3uralia.com",
    siteName: "N3uralia",
    images: [
      {
        url: "https://n3uralia.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "N3uralia - AI Development Gateway",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "N3uralia - The AI Development Gateway",
    description: "Plataforma de orquestación de IA para empresas chilenas",
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
