"use client"
import { OutcomesShowcase } from "@/components/landing/outcomes-showcase"
import { Footer } from "@/components/landing/footer"
import { useLanguage } from "@/lib/language-context"

export default function OutcomesPage() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Results",
      subtitle: "Proven impact for our clients",
      intro: "See how N3uralia delivers real results across industries",
    },
    es: {
      title: "Resultados",
      subtitle: "Impacto comprobado para nuestros clientes",
      intro: "Mira cómo N3uralia entrega resultados reales en múltiples industrias",
    },
  }

  const t = content[language]

  return (
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
          <OutcomesShowcase />
        </div>
      </section>

      <Footer />
    </main>
  )
}
