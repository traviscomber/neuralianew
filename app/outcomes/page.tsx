"use client"
import { OutcomesShowcase } from "@/components/landing/outcomes-showcase"
import { Footer } from "@/components/landing/footer"
import { useLanguage } from "@/lib/language-context"
import { MinimalistTestimonials } from "@/components/landing/minimalist-testimonials"
import { MinimalistSolutions } from "@/components/landing/minimalist-solutions"

export default function OutcomesPage() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Results",
      subtitle: "Real impact across industries",
      intro: "See how N3uralia delivers measurable outcomes for enterprises worldwide",
      sectionTitle: "Client Success Stories",
      sectionDesc: "From automation to innovation, our clients transform their operations",
    },
    es: {
      title: "Resultados",
      subtitle: "Impacto real en múltiples industrias",
      intro: "Mira cómo N3uralia entrega resultados medibles para empresas en todo el mundo",
      sectionTitle: "Historias de Éxito",
      sectionDesc: "De la automatización a la innovación, nuestros clientes transforman sus operaciones",
    },
  }

  const t = content[language]

  return (
    <main className="min-h-screen pt-16 bg-white">
      <section className="relative bg-white text-foreground py-32 border-b border-primary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-muted-foreground mb-4 tracking-wide uppercase">{t.subtitle}</p>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight text-foreground">{t.title}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">{t.intro}</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-b border-primary/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { metric: "50+", label: language === "es" ? "Empresas" : "Companies" },
              { metric: "99.8%", label: language === "es" ? "Uptime" : "Uptime" },
              { metric: "80%", label: language === "es" ? "Reducción promedio" : "Avg reduction" },
              { metric: "24/7", label: language === "es" ? "Soporte local" : "Local support" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">{item.metric}</div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-white border-t border-primary/20">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{t.sectionTitle}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">{t.sectionDesc}</p>
          </div>
          <OutcomesShowcase />
          <MinimalistTestimonials />
        </div>
      </section>

      <MinimalistSolutions />

      <section className="py-24 bg-white border-t border-primary/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-foreground mb-6">
            {language === "es" ? "¿Listo para tu transformación?" : "Ready to transform?"}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {language === "es"
              ? "Únete a empresas líderes que ya están automatizando con N3uralia"
              : "Join leading companies already automating with N3uralia"}
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-3 font-semibold rounded-lg hover:bg-primary/90 transition-colors border border-primary">
            {language === "es" ? "Hablar con Equipo" : "Talk to Team"}
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
