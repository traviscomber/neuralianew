import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { getLocale } from "@/lib/get-locale"
import "@/app/globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "N3uralia | Sistemas Agenticos en Producción",
  description: "Plataforma de sistemas agenticos listos para producción",
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#6366f1",
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  return (
    <html lang={params.locale} className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
