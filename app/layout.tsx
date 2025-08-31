import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { AuthProvider } from "@/hooks/use-auth"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Neuralia - AI Agents | Vibe Coding",
  description: "Smart AI agents built with vibe coding. Simple, powerful, effective.",
  keywords: ["AI", "agents", "neuralia", "vibe coding", "artificial intelligence", "automation"],
  authors: [{ name: "Neuralia Team" }],
  creator: "Neuralia",
  publisher: "Neuralia",
  robots: "index, follow",
  openGraph: {
    title: "Neuralia - AI Agents",
    description: "Smart AI agents built with vibe coding",
    url: "https://neuralia.ai",
    siteName: "Neuralia",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neuralia - AI Agents",
    description: "Smart AI agents built with vibe coding",
    creator: "@neuralia_ai",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
