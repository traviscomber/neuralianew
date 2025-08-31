import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Neuralia - AI Solutions & Vibe Coding",
  description:
    "Transforming businesses with AI-powered solutions and innovative vibe coding approaches. Discover our cutting-edge AI agents and automation tools.",
  keywords: "AI, artificial intelligence, automation, vibe coding, business solutions, AI agents, machine learning",
  authors: [{ name: "Neuralia Team" }],
  openGraph: {
    title: "Neuralia - AI Solutions & Vibe Coding",
    description: "Transforming businesses with AI-powered solutions and innovative vibe coding approaches.",
    type: "website",
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
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
