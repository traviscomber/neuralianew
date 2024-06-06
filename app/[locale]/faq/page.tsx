import type { Metadata } from "next"
import Script from "next/script"
import { FaqPageClient } from "@/components/faq/faq-page-client"
import { Footer } from "@/components/layout/footer"
import { SectionBackground } from "@/components/section-background"
import { DEFAULT_LOCALE, isValidLocale, type Locale } from "@/lib/get-locale"

interface PageProps {
  params: {
    locale: string
  }
}

function buildFaqSchema(locale: Locale) {
  const isES = locale === "es"
  const baseUrl = `https://n3uralia.com/${locale}/faq`

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        "@id": `${baseUrl}#q1`,
        name: isES ? "Que hace N3uralia?" : "What does N3uralia build?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isES
            ? "N3uralia construye sistemas de IA, automatizacion y software para operaciones reales."
            : "N3uralia builds AI systems, automation, and software for real operations.",
        },
      },
      {
        "@type": "Question",
        "@id": `${baseUrl}#q2`,
        name: isES ? "Necesito reemplazar mis sistemas?" : "Do we need to replace our systems?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isES
            ? "No necesariamente. Una parte clave del trabajo es integrarnos con lo que ya existe."
            : "Not necessarily. A key part of the work is integrating with what already exists.",
        },
      },
    ],
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE

  const titles = {
    es: "FAQ | N3uralia",
    en: "FAQ | N3uralia",
  }

  const descriptions = {
    es: "Preguntas frecuentes sobre IA, automatizacion, arquitectura y despliegue de software con N3uralia.",
    en: "Frequently asked questions about AI, automation, architecture, and software delivery with N3uralia.",
  }

  return {
    title: titles[locale],
    description: descriptions[locale],
    alternates: {
      canonical: `https://n3uralia.com/${locale}/faq`,
      languages: {
        es: "https://n3uralia.com/es/faq",
        en: "https://n3uralia.com/en/faq",
      },
    },
  }
}

export default function FaqPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const faqSchema = buildFaqSchema(locale)

  return (
    <>
      <Script
        id={`faq-schema-${locale}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <SectionBackground section="faq">
        <main className="min-h-screen pt-20 pb-20 px-4 md:px-6 lg:px-8 bg-background">
          <FaqPageClient locale={locale} />
        </main>
      </SectionBackground>
      <Footer />
    </>
  )
}
