import type { Metadata } from 'next';
import Script from 'next/script';
import { FaqPageClient } from '@/components/faq/faq-page-client'
import { Footer } from '@/components/layout/footer'
import { SectionBackground } from '@/components/section-background'

export const metadata: Metadata = {
  title: "FAQ N3uralia | Preguntas sobre Sistemas Agenticos, AI Agents y Arquitectura en Producción",
  description:
    "Preguntas frecuentes: qué son sistemas agenticos, cómo funcionan los agentes IA, living agents, diferencia entre AI agents y automation, integración con sistemas legacy, gobernanza IA, memory management, orquestación multi-agente.",
  keywords:
    "FAQ sistemas agenticos, preguntas AI agents, agentes inteligentes, living agents, arquitectura IA, automatización empresarial, gobernanza IA, integración legacy, multi-agent systems, Chile, LATAM",
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      '@id': 'https://n3uralia.com/faq#q1',
      name: '¿Qué es N3uralia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'N3uralia es una plataforma que construye agentes de IA vivientes—sistemas inteligentes que aprenden y evolucionan con cada interacción.',
      },
    },
    {
      '@type': 'Question',
      '@id': 'https://n3uralia.com/faq#q2',
      name: '¿Cómo se diferencian los Living Agents de bots estándar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Los bots estándar funcionan con reglas predefinidas. Los Living Agents de N3uralia aprenden: cada interacción les enseña.',
      },
    },
  ],
}

export default function FaqPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <SectionBackground section="faq">
        <main className="min-h-screen pt-20 pb-20 px-4 md:px-6 lg:px-8 bg-background">
          <FaqPageClient />
        </main>
      </SectionBackground>
      <Footer />
    </>
  )
}
