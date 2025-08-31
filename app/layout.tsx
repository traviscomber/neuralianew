import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Neuralia - Full Stack IA Systems | Agentes Conversacionales Inteligentes",
  description:
    "Desarrollamos sistemas completos de IA full stack: desde agentes conversacionales hasta automatización empresarial. Integramos IA en toda tu infraestructura: APIs, bases de datos, CRM, ERP y WhatsApp Business. Soluciones end-to-end personalizadas.",
  keywords: [
    "full stack IA systems",
    "sistemas completos de inteligencia artificial",
    "IA conversacional",
    "agentes inteligentes",
    "automatización empresarial",
    "desarrollo full stack IA",
    "integración de sistemas IA",
    "chatbots empresariales",
    "WhatsApp Business API",
    "arquitectura de IA",
    "machine learning systems",
    "análisis de datos inteligente",
    "procesamiento de lenguaje natural",
    "soluciones IA personalizadas",
    "infraestructura de IA",
  ],
  authors: [{ name: "Neuralia" }],
  creator: "Neuralia",
  publisher: "Neuralia",
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
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://neuralia.com",
    siteName: "Neuralia",
    title: "Neuralia - Full Stack IA Systems | Agentes Conversacionales Inteligentes",
    description:
      "Sistemas completos de IA full stack que transforman tu negocio. Desde agentes conversacionales hasta automatización completa. Integramos IA en toda tu infraestructura: frontend, backend, APIs, bases de datos y sistemas empresariales.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Neuralia - Full Stack IA Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Neuralia - Full Stack IA Systems | Agentes Conversacionales",
    description:
      "Sistemas completos de IA full stack. Agentes conversacionales, automatización empresarial e integración completa en tu infraestructura tecnológica.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://neuralia.com",
    languages: {
      "es-ES": "https://neuralia.com",
      "en-US": "https://neuralia.com/en",
    },
  },
  category: "technology",
  classification: "AI Software Development",
  other: {
    "application-name": "Neuralia",
    "msapplication-TileColor": "#7c3aed",
    "theme-color": "#7c3aed",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Neuralia",
              description: "Desarrollo de sistemas completos de IA full stack para automatización empresarial",
              url: "https://neuralia.com",
              logo: "https://neuralia.com/logo.png",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+56940946660",
                  contactType: "customer service",
                  availableLanguage: ["Spanish", "English"],
                },
              ],
              address: [
                {
                  "@type": "PostalAddress",
                  addressLocality: "Santiago",
                  addressCountry: "CL",
                },
                {
                  "@type": "PostalAddress",
                  addressLocality: "Singapore",
                  addressCountry: "SG",
                },
              ],
              sameAs: ["https://wa.me/56940946660"],
              offers: [
                {
                  "@type": "Service",
                  name: "Full Stack IA Systems",
                  description:
                    "Desarrollo completo de sistemas de inteligencia artificial desde frontend hasta backend",
                },
                {
                  "@type": "Service",
                  name: "Agentes Conversacionales",
                  description: "Agentes de IA especializados para automatización de procesos empresariales",
                },
                {
                  "@type": "Service",
                  name: "Integración de Sistemas IA",
                  description: "Integración completa de IA en infraestructura empresarial existente",
                },
              ],
              serviceType: [
                "Full Stack AI Development",
                "Conversational AI Agents",
                "Enterprise AI Integration",
                "Machine Learning Systems",
                "Natural Language Processing",
                "Business Process Automation",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
