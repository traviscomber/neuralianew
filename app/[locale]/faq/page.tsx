import type { Metadata } from 'next';
import Script from 'next/script';
import { FaqPageClient } from '@/components/faq/faq-page-client'
import { Footer } from '@/components/layout/footer'
import { SectionBackground } from '@/components/section-background'

export const metadata: Metadata = {
  title: "FAQ N3uralia - Preguntas sobre Sistemas Agenticos, Living Agents, IA en Producción",
  description:
    "Preguntas frecuentes sobre N3uralia: qué son sistemas agenticos, cómo funcionan living agents, diferencias con bots automáticos, integración con sistemas legacy, seguridad de datos, gobernanza IA, pricing, soporte técnico.",
  keywords:
    "FAQ sistemas agenticos, living agents, agentes inteligentes, IA en producción, preguntas frecuentes, automatización empresarial, arquitectura agentica, integración legacy, gobernanza IA",
  alternates: {
    canonical: "https://n3uralia.com/es/faq",
    languages: {
      es: "https://n3uralia.com/es/faq",
      en: "https://n3uralia.com/en/faq",
    },
  },
  openGraph: {
    title: "FAQ N3uralia - Preguntas sobre Sistemas Agenticos",
    description: "Respuestas a preguntas frecuentes sobre Living Agents, IA en producción y sistemas agenticos.",
    url: "https://n3uralia.com/es/faq",
    type: "website",
  },
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
        text: 'N3uralia es una plataforma que construye agentes de IA vivientes—sistemas inteligentes que aprenden y evolucionan con cada interacción. A diferencia de bots estáticos basados en reglas, los Living Agents de N3uralia mejoran continuamente, entienden el contexto de tu negocio, y se integran profundamente con tus sistemas existentes.',
      },
    },
    {
      '@type': 'Question',
      '@id': 'https://n3uralia.com/faq#q2',
      name: '¿Cómo se diferencian los Living Agents de bots estándar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Los bots estándar funcionan con reglas predefinidas: si sucede X, haz Y. Los Living Agents de N3uralia aprenden: cada interacción les enseña. Con el tiempo, mejoran automáticamente sus respuestas, entienden excepciones, y se adaptan a nuevas situaciones.',
      },
    },
    {
      '@type': 'Question',
      '@id': 'https://n3uralia.com/faq#q3',
      name: '¿Cuál es el tiempo de implementación típico?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Para startups y procesos simples: 5-14 días. Para empresas con integraciones complejas: 30-60 días. N3uralia maneja la complejidad sin necesidad de un ejército de desarrolladores.',
      },
    },
    {
      '@type': 'Question',
      '@id': 'https://n3uralia.com/faq#q4',
      name: '¿Qué empresas chilenas usan N3uralia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Trabaja con nosotros empresas en finanzas, retail, manufactura, seguros y tecnología. Desde startups de 5 personas hasta empresas de 5,000+. Si tu proceso es manual, repetitivo, o requiere decisiones basadas en datos, probablemente podemos ayudarte.',
      },
    },
    {
      '@type': 'Question',
      '@id': 'https://n3uralia.com/faq#q5',
      name: '¿Cómo garantiza N3uralia la seguridad de datos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La seguridad es foundational. Ofrecemos: encriptación end-to-end, acceso de rol basado, auditoría completa de cada decisión del agente, cumplimiento con normativas chilenas, y control total sobre dónde viven tus datos.',
      },
    },
    {
      '@type': 'Question',
      '@id': 'https://n3uralia.com/faq#q6',
      name: '¿Cuánto cuesta una solución N3uralia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No hay precio único porque no hay dos procesos iguales. Ofrecemos tres modelos: Por agente, Por resultado, e Híbrido. Para startups, comenzamos con trial gratuito. Para empresas, hacemos estimación personalizada después de entender tu scope.',
      },
    },
    {
      '@type': 'Question',
      '@id': 'https://n3uralia.com/faq#q7',
      name: '¿Qué tipo de procesos pueden automatizar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cualquier proceso que sea: repetitivo, basado en datos, y escalable. Ejemplos: calificación de leads, procesamiento de documentos, respuestas a clientes, validación de datos, coordinación entre sistemas, reportes automáticos, detección de anomalías.',
      },
    },
    {
      '@type': 'Question',
      '@id': 'https://n3uralia.com/faq#q8',
      name: '¿N3uralia requiere capacitación especial?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Los Living Agents trabajan en background. Tu equipo ve resultados mejorados y menos trabajo manual. Para configuración inicial, proporcionamos documentación clara y soporte de onboarding.',
      },
    },
    {
      '@type': 'Question',
      '@id': 'https://n3uralia.com/faq#q9',
      name: '¿Cómo se integra N3uralia con sistemas heredados?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Podemos orquestar entre sistemas antiguos y nuevos simultáneamente. Si tienes un ERP de 20 años y Salesforce, podemos hacer que hablen entre sí inteligentemente. N3uralia se adapta a tu arquitectura.',
      },
    },
    {
      '@type': 'Question',
      '@id': 'https://n3uralia.com/faq#q10',
      name: '¿Qué soporte reciben los clientes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Soporte técnico en español, en tu zona horaria. Incluye: onboarding guiado, monitoreo de agentes 24/7, actualizaciones automáticas, acceso a ingenieros de N3uralia, y reportes mensuales de desempeño.',
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
