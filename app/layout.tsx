import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { LanguageProvider } from "@/lib/language-context"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "N3uralia - AI Agent Solutions",
  description:
    "Transform your business with intelligent AI agents. Automate customer service, sales, and operations with N3uralia's cutting-edge AI technology.",
  keywords: "AI agents, artificial intelligence, automation, customer service, chatbots, business intelligence",
  authors: [{ name: "N3uralia" }],
  creator: "N3uralia",
  publisher: "N3uralia",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://n3uralia.com",
    title: "N3uralia - AI Agent Solutions",
    description: "Transform your business with intelligent AI agents",
    siteName: "N3uralia",
  },
  twitter: {
    card: "summary_large_image",
    title: "N3uralia - AI Agent Solutions",
    description: "Transform your business with intelligent AI agents",
    creator: "@n3uralia",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <Navigation />
            <main className="pt-16">{children}</main>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
