"use client"
import { CapabilitiesGrid } from "@/components/landing/capabilities-grid"
import { Footer } from "@/components/landing/footer"
import { useLanguage } from "@/lib/language-context"

export default function CapabilitiesPage() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Capabilities",
      subtitle: "Everything you need to build and automate with AI",
      intro: "N3uralia provides the core capabilities to orchestrate AI across your business.",
    },
    es: {
      title: "Capacidades",
      subtitle: "Todo lo que necesitas para construir y automatizar con IA",
      intro: "N3uralia proporciona las capacidades principales para orquestar IA en tu negocio.",
    },
  }

  const t = content[language]

  return (
    <>
      <main className="min-h-screen pt-16">
        <section className="py-20 bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-black">{t.title}</h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-4">{t.subtitle}</p>
            <p className="text-gray-500 max-w-2xl mx-auto">{t.intro}</p>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <CapabilitiesGrid />
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
