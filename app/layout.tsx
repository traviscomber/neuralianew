import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { N3uraliaChat } from "@/components/chat/n3uralia-chat"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Neuralia - IA que Funciona de Verdad",
  description:
    "Desarrollamos chatbots inteligentes y automatización con IA para empresas chilenas. Tu competencia ya usa IA, ¿cuándo empiezas tú?",
  keywords: "chatbot, IA, automatización, WhatsApp Business, desarrollo, Chile",
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
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <N3uraliaChat />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
