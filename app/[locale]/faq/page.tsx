import type { Metadata } from 'next';
import Script from 'next/script';
import { FaqPageClient } from '@/components/faq/faq-page-client'
import { Footer } from '@/components/layout/footer'

export const metadata: Metadata = {
  title: "FAQ N3uralia - IA y Software para Operaciones Reales",
  description:
    "Preguntas frecuentes sobre N3uralia: cómo funciona nuestra IA operativa, integración con sistemas legacy, seguridad de datos, gobernanza, implementación, soporte técnico. Infraestructura, no truco.",
  keywords:
    "FAQ N3uralia, IA operativa, software automatización, preguntas frecuentes, integración sistemas, gobernanza IA, implementación",
  alternates: {
    canonical: "https://www.n3uralia.com/es/faq",
    languages: {
      es: "https://www.n3uralia.com/es/faq",
      en: "https://www.n3uralia.com/en/faq",
    },
  },
  openGraph: {
    title: "FAQ N3uralia - IA y Software para Operaciones Reales",
    description: "Respuestas a preguntas frecuentes sobre IA, automatización e implementación operativa.",
    url: "https://www.n3uralia.com/es/faq",
    type: "website",
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      '@id': 'https://www.n3uralia.com/faq#q1',
      name: '¿Qué es N3uralia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'N3uralia construye sistemas de IA y software operativo para empresas que necesitan reducir fricción operativa sin perder control. Integramos datos, procesos y decisiones en arquitecturas que funcionan en producción real, no en pilotos infinitos.',
      },
    },
    {
      '@type': 'Question',
      '@id': 'https://www.n3uralia.com/faq#q2',
      name: '¿Cómo es diferente N3uralia de otros productos IA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Otros venden humo. N3uralia construye infraestructura. Menos PoC, más arquitectura. Menos agentes sueltos, más integración. Nuestro foco: operaciones reales que generan valor medible desde día 1.',
      },
    },
    {
      '@type': 'Question',
      '@id': 'https://www.n3uralia.com/faq#q3',
      name: '¿Cuál es el tiempo de implementación típico?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Para procesos simples: 2-4 semanas. Para empresas con integraciones complejas: 6-12 semanas. Entregamos en producción, no en sandbox.',
      },
    },
    {
      '@type': 'Question',
      '@id': 'https://www.n3uralia.com/faq#q4',
      name: '¿Qué empresas chilenas confían en N3uralia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Trabajamos con empresas en retail, manufactura, minería, logística, turismo y servicios. Desde startups hasta empresas de 5,000+ personas. Si tu fricción operativa es manual, repetitiva, o requiere decisiones basadas en datos, probablemente podemos ayudarte.',
      },
    },
    {
      '@type': 'Question',
      '@id': 'https://www.n3uralia.com/faq#q5',
      name: '¿Cómo garantiza N3uralia la seguridad de datos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La seguridad es fundamental. Ofrecemos: encriptación end-to-end, acceso basado en roles, auditoría completa de cada decisión, cumplimiento normativo chileno, y control total sobre ubicación de datos.',
      },
    },
    {
      '@type': 'Question',
      '@id': 'https://www.n3uralia.com/faq#q6',
      name: '¿Cuánto cuesta una solución N3uralia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No hay precio único porque no hay dos operaciones iguales. Ofrecemos: modelo por resultado, modelo por capacidad, e híbrido. Para startups: trial gratuito. Para empresas: estimación personalizada tras entender scope.',
      },
    },
    {
      '@type': 'Question',
      '@id': 'https://www.n3uralia.com/faq#q7',
      name: '¿Qué tipo de operaciones pueden automatizar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cualquier proceso repetitivo, basado en datos, y escalable. Ejemplos: validación de leads, procesamiento de documentos, respuestas a clientes, coordinación entre sistemas, reportes automáticos, detección de anomalías.',
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
      <Footer />
    </>
  )
}
