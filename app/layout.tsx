import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { LanguageProvider } from "@/lib/language-context"
import { WebVitalsProvider } from "@/components/analytics/web-vitals-provider"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "N3uralia - AI Agents & Automation Systems",
  description:
    "Deploy intelligent AI agents and automation systems for your business. Custom solutions for lead qualification, customer support, and workflow automation.",
  keywords: "AI agents, automation, artificial intelligence, chatbots, workflow automation, business intelligence",
  authors: [{ name: "N3uralia Team" }],
  creator: "N3uralia",
  publisher: "N3uralia",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://neuralia.cl"),
  alternates: {
    canonical: "/",
    languages: {
      "es-CL": "/",
      "en-US": "/en",
    },
  },
  openGraph: {
    title: "N3uralia - AI Agents & Automation Systems",
    description: "Deploy intelligent AI agents and automation systems for your business",
    url: "https://neuralia.cl",
    siteName: "N3uralia",
    images: [
      {
        url: "/n3uralia-logo-new.png",
        width: 1200,
        height: 630,
        alt: "N3uralia - AI Agents & Automation Systems",
      },
    ],
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "N3uralia - AI Agents & Automation Systems",
    description: "Deploy intelligent AI agents and automation systems for your business",
    images: ["/n3uralia-logo-new.png"],
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
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <WebVitalsProvider>
              <Suspense fallback={null}>
                {children}
                <Toaster />
                <Analytics />
              </Suspense>
            </WebVitalsProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
