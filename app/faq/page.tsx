import type { Metadata } from 'next';
import { FaqPageClient } from '@/components/faq/faq-page-client'
import { FAQPageSchema } from '@/components/faq-page-schema'
import { Footer } from '@/components/layout/footer'
import { SectionBackground } from '@/components/section-background'

export const metadata: Metadata = {
  title: "FAQ N3uralia | Preguntas sobre Sistemas Agenticos, AI Agents y Arquitectura en Producción",
  description:
    "Preguntas frecuentes: qué son sistemas agenticos, cómo funcionan los agentes IA, living agents, diferencia entre AI agents y automation, integración con sistemas legacy, gobernanza IA, memory management, orquestación multi-agente.",
  keywords:
    "FAQ sistemas agenticos, preguntas AI agents, agentes inteligentes, living agents, arquitectura IA, automatización empresarial, gobernanza IA, integración legacy, multi-agent systems, Chile, LATAM",
}

export default function FaqPage() {
  return (
    <>
      <FAQPageSchema />
      <SectionBackground section="faq">
      <main className="min-h-screen pt-20 pb-20 px-4 md:px-6 lg:px-8 bg-background">
        <FaqPageClient />
      </main>
      </SectionBackground>
      <Footer />
    </>
  )
}
