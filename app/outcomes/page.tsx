import { OutcomesPageClient } from "@/components/outcomes/outcomes-page-client"
import type { Metadata, Viewport } from "next"

export const metadata: Metadata = {
  title: "Resultados N3uralia (Neuralia) | Casos Reales y Transformación de Empresas",
  description: "Historias reales de empresas que transformaron sus procesos con N3uralia (Neuralia). Automatización, eficiencia y resultados medibles.",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function OutcomesPage() {

  const content = {
    es: {
      title: "Resultados",
      subtitle: "Lo que pasó después",
      intro: "Estas no son promesas. Son historias reales de empresas que confiaron en N3uralia.",
      sectionTitle: "Cómo Transformamos Negocios",
      sectionDesc: "Desde la automatización hasta la innovación, nuestros clientes ahorran tiempo, dinero y dolores de cabeza",
      transformationTitle: "¿Listo para tu transformación?",
      transformationDesc: "Únete a empresas líderes que ya están automatizando con N3uralia",
      ctaButton: "Hablar con Equipo",
    },
  }

  const t = content.es

  return (
    <>
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
              { metric: "50+", label: "Empresas" },
              { metric: "99.8%", label: "Uptime" },
              { metric: "80%", label: "Reducción promedio" },
              { metric: "24/7", label: "Soporte local" },
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
          
          {/* Testimonios Inline */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              {
                quote: "El sistema optimizó nuestros procesos de consultoría ambiental. El análisis automatizado nos ahorra horas diarias.",
                author: "Sebastian Puelma",
                company: "Ecosuelolab",
              },
              {
                quote: "El asistente de IA inmobiliaria nos ayuda a conectar propiedades con clientes más efectivamente.",
                author: "Juan Navarro",
                company: "Sur-Realista",
              },
              {
                quote: "Reducimos el tiempo de procesamiento de documentos en un 85%. ROI en 3 meses.",
                author: "María García",
                company: "Fintech Solutions",
              },
              {
                quote: "La automatización nos permitió escalar sin contratar más personal. Eficiencia pura.",
                author: "Carlos López",
                company: "E-commerce Chile",
              },
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-8 hover:border-primary/40 transition-colors">
                <p className="text-muted-foreground mb-6 leading-relaxed italic">"{item.quote}"</p>
                <div className="pt-6 border-t border-border">
                  <p className="font-semibold text-foreground">{item.author}</p>
                  <p className="text-sm text-muted-foreground">{item.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="h1-light mb-6">
            {t.transformationTitle}
          </h2>
          <p className="body-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t.transformationDesc}
          </p>
          <a href="/contact" className="inline-block bg-primary text-primary-foreground px-8 py-3 font-semibold rounded-lg hover:bg-primary/90 transition-colors border border-primary">
            {t.ctaButton}
          </a>
        </div>
      </section>

      <OutcomesPageClient />
    </>
  )
}
