"use client"
import { OutcomesShowcase } from "@/components/landing/outcomes-showcase"
import { Footer } from "@/components/layout/footer"
import { useLanguage } from "@/lib/language-context"
import { MinimalistTestimonials } from "@/components/landing/minimalist-testimonials"
import { MinimalistSolutions } from "@/components/landing/minimalist-solutions"

export default function OutcomesPage() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Resultados",
      subtitle: "Lo que pasó después",
      intro: "Estas no son promesas. Son historias reales de empresas que confiaron en N3uralia.",
      sectionTitle: "Cómo Transformamos Negocios",
      sectionDesc: "Desde la automatización hasta la innovación, nuestros clientes ahorran tiempo, dinero y dolores de cabeza",
    },
    es: {
      title: "Resultados",
      subtitle: "Lo que pasó después",
      intro: "Estas no son promesas. Son historias reales de empresas que confiaron en N3uralia.",
      sectionTitle: "Cómo Transformamos Negocios",
      sectionDesc: "Desde la automatización hasta la innovación, nuestros clientes ahorran tiempo, dinero y dolores de cabeza",
    },
  }

  const t = content[language]

  return (
    <main className="min-h-screen pt-16 bg-background">
      <section className="relative bg-background text-foreground py-32 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-muted-foreground mb-4 tracking-wide uppercase">{t.subtitle}</p>
            <h1 className="h1-light mb-6 leading-tight">{t.title}</h1>
            <p className="body-lg text-muted-foreground leading-relaxed">{t.intro}</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background border-b border-border">
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

      <section className="py-32 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="h2 text-foreground mb-4">{t.sectionTitle}</h2>
            <p className="body text-muted-foreground max-w-2xl">{t.sectionDesc}</p>
          </div>
          <OutcomesShowcase />
          <MinimalistTestimonials />
        </div>
      </section>

      <MinimalistSolutions />

      <section className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="h1-light mb-6">
            {language === "es" ? "¿Listo para tu transformación?" : "Ready to transform?"}
          </h2>
          <p className="body-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {language === "es"
              ? "Únete a empresas líderes que ya están automatizando con N3uralia"
              : "Join leading companies already automating with N3uralia"}
          </p>
          <a href="/contact" className="inline-block bg-primary text-primary-foreground px-8 py-3 font-semibold rounded-lg hover:bg-primary/90 transition-colors border border-primary">
            {language === "es" ? "Hablar con Equipo" : "Talk to Team"}
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
