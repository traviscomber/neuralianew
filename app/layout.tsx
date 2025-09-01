import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "N3uralia - Agentes de IA Conversacional",
  description:
    "Desarrollamos agentes de IA conversacional que automatizan procesos y mejoran la experiencia del cliente. Implementación en 48 horas con soporte 24/7.",
  keywords: "IA conversacional, chatbots, automatización, agentes AI, WhatsApp Business, integración API",
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
      "Desarrollamos agentes de IA conversacional que automatizan procesos y mejoran la experiencia del cliente.",
    url: "https://n3uralia.com",
    siteName: "N3uralia",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "N3uralia - Agentes de IA Conversacional",
    description:
      "Desarrollamos agentes de IA conversacional que automatizan procesos y mejoran la experiencia del cliente.",
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
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange={false}>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
