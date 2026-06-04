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



      </main>

      <OutcomesPageClient />
    </>
  )
}
