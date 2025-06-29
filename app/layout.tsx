import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { AuthProvider } from "@/hooks/use-auth"
import { CartProvider } from "@/hooks/use-cart"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NeuralIA - AI Agents & Systems Platform",
  description:
    "Deploy intelligent AI agents and systems in 24-48 hours. Transform your business with cutting-edge artificial intelligence.",
  keywords: ["AI", "artificial intelligence", "agents", "automation", "business", "SaaS"],
  authors: [{ name: "NeuralIA Team" }],
  creator: "NeuralIA",
  publisher: "NeuralIA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
    generator: 'v0.dev'
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
          <AuthProvider>
            <CartProvider>
              {children}
              <Toaster />
            </CartProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
