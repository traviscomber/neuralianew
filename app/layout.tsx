import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { AuthProvider } from "@/hooks/use-auth"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Neuralia - Smart AI, Simple Results | Built with Vibe Coding",
  description:
    "We build AI agents that actually work. No complexity, just results. Advanced technology made simple with vibe coding methodology.",
  keywords: [
    "AI",
    "artificial intelligence",
    "chatbots",
    "automation",
    "vibe coding",
    "neuralia",
    "machine learning",
    "conversational AI",
  ],
  authors: [{ name: "Neuralia Team" }],
  creator: "Neuralia",
  publisher: "Neuralia",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://neuralia.ai"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Neuralia - Smart AI, Simple Results",
    description: "We build AI agents that actually work. No complexity, just results.",
    url: "https://neuralia.ai",
    siteName: "Neuralia",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Neuralia - Smart AI Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neuralia - Smart AI, Simple Results",
    description: "We build AI agents that actually work. No complexity, just results.",
    images: ["/og-image.jpg"],
    creator: "@neuralia_ai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
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
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="vibe-coding" content="true" />
      </head>
      <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
