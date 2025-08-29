import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "@/hooks/use-auth"
import { CartProvider } from "@/hooks/use-cart"
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Neuralia - AI Executive Agents",
  description: "Deploy AI executives that think, decide, and execute like seasoned business leaders.",
  keywords: "AI, artificial intelligence, business automation, executive agents, enterprise AI",
  authors: [{ name: "Neuralia Team" }],
  openGraph: {
    title: "Neuralia - AI Executive Agents",
    description: "Deploy AI executives that think, decide, and execute like seasoned business leaders.",
    url: "https://n3uralia.com",
    siteName: "Neuralia",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neuralia - AI Executive Agents",
    description: "Deploy AI executives that think, decide, and execute like seasoned business leaders.",
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
