import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "@/hooks/use-auth"
import { CartProvider } from "@/hooks/use-cart"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Neuralia - AI Executive Agents",
  description: "Deploy AI executives that think, decide, and execute like your best team members",
  keywords: ["AI development", "custom AI", "machine learning", "AI agents", "artificial intelligence"],
  authors: [{ name: "Neuralia Team" }],
  openGraph: {
    title: "Neuralia - AI Executive Agents",
    description: "Deploy AI executives that think, decide, and execute like your best team members",
    type: "website",
    url: "https://neuralia.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neuralia - AI Executive Agents",
    description: "Deploy AI executives that think, decide, and execute like your best team members",
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
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
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
