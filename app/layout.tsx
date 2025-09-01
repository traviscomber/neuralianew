import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "@/hooks/use-auth"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "N3uralia - Soluciones Full Stack de IA",
  description:
    "Transformamos tu negocio con soluciones completas de inteligencia artificial. Desarrollo full stack, agentes IA y automatización empresarial.",
  keywords:
    "inteligencia artificial, IA, desarrollo full stack, agentes IA, automatización, machine learning, chatbots, análisis de datos",
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
    title: "N3uralia - Soluciones Full Stack de IA",
    description: "Transformamos tu negocio con soluciones completas de inteligencia artificial",
    url: "https://n3uralia.com",
    siteName: "N3uralia",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "N3uralia - Soluciones Full Stack de IA",
    description: "Transformamos tu negocio con soluciones completas de inteligencia artificial",
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
          <AuthProvider>
            {children}
            <Toaster />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
