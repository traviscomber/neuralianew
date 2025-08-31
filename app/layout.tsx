import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Neuralia - Vibe Coding AI Solutions",
  description:
    "Revolutionary AI solutions with vibe coding methodology. Transform your business with EcosueloLab, ParrotfyIA, and intelligent career coaching.",
  keywords:
    "AI, vibe coding, artificial intelligence, EcosueloLab, ParrotfyIA, career coaching, business intelligence, automation",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
