import type { Metadata } from "next"
import type { Locale } from "@/content/dictionaries"
import { Footer } from "@/components/layout/footer"
import { PlatformClient } from "@/components/platform/platform-client"

interface PageProps {
  params: { locale: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = params.locale as Locale
  const isES = locale === "es"
  const title = isES ? "Plataforma | N3uralia" : "Platform | N3uralia"
  const description = isES
    ? "La arquitectura central que coordina agentes especializados e integra tu stack existente."
    : "The central architecture that coordinates specialized agents and integrates your existing stack."

  return {
    title,
    description,
    alternates: {
      canonical: `https://n3uralia.com/${locale}/platform`,
      languages: {
        es: `https://n3uralia.com/es/platform`,
        en: `https://n3uralia.com/en/platform`,
      },
    },
  }
}

export default function PlatformPage({ params }: PageProps) {
  const locale = params.locale as Locale
  const isES = locale === "es"

  return (
    <>
      <main className="min-h-screen">
        {/* Hero */}
        <section className="py-20 px-4 bg-gradient-to-b from-primary/10 to-transparent border-b border-border">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              {isES ? "Plataforma N3uralia" : "N3uralia Platform"}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {isES
                ? "Arquitectura central que coordina agentes especializados e integra tu stack existente sin fricción."
                : "Central architecture that coordinates specialized agents and integrates your existing stack seamlessly."}
            </p>
          </div>
        </section>

        <PlatformClient locale={locale} />
      </main>
      <Footer />
    </>
  )
}
