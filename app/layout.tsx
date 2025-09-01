import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { ChatWidget } from "@/components/chat/chat-widget"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "N3uralia - IA Conversacional Avanzada",
  description: "Transformamos tu negocio con soluciones de IA conversacional que realmente entienden a tus usuarios",
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
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange={false}>
          {children}
          <ChatWidget />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
