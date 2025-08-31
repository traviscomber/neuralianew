import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Neuralia - AI Solutions with Vibe Coding",
  description:
    "Transform your business with AI-powered solutions. Experience the future of vibe coding with Neuralia's innovative AI agents and systems.",
  keywords: "AI, artificial intelligence, vibe coding, automation, chatbots, business solutions, Neuralia",
  authors: [{ name: "Neuralia Team" }],
  creator: "Neuralia",
  publisher: "Neuralia",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://neuralia.com",
    title: "Neuralia - AI Solutions with Vibe Coding",
    description:
      "Transform your business with AI-powered solutions. Experience the future of vibe coding with Neuralia's innovative AI agents and systems.",
    siteName: "Neuralia",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neuralia - AI Solutions with Vibe Coding",
    description:
      "Transform your business with AI-powered solutions. Experience the future of vibe coding with Neuralia's innovative AI agents and systems.",
    creator: "@neuralia",
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
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
