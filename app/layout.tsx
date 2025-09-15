import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { LanguageProvider } from "@/lib/language-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "N3uralia - Advanced AI Solutions for Business",
  description:
    "Transform your business with intelligent AI agents, process automation, and enterprise integration solutions.",
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
        <LanguageProvider>
          <Navigation />
          <main className="pt-16">{children}</main>
        </LanguageProvider>
      </body>
    </html>
  )
}
