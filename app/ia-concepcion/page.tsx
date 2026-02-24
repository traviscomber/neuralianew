import type { Metadata } from 'next'
import { LocationPage } from '@/components/location-page'
import { Footer } from '@/components/layout/footer'
import { SchemaMarkup, localBusinessSchema, professionalServiceSchema } from '@/lib/schema-markup'

export const metadata: Metadata = {
  title: 'Automatización IA para Empresas en Concepción | N3uralia',
  description: 'Sistemas agenticos para automatización en Concepción, Bío Bío. Especialistas en manufactura, forestal, servicios. Agendar diagnosis gratuita.',
  keywords: 'IA Concepción, automatización empresas Bío Bío, sistemas agenticos región, inteligencia artificial manufactura',
  openGraph: {
    title: 'Automatización IA para Empresas en Concepción',
    description: 'Automatiza procesos manufactureros y forestales. Operaciones inteligentes 24/7.',
    type: 'website',
    url: 'https://n3uralia.com/ia-concepcion',
  },
  alternates: {
    canonical: 'https://n3uralia.com/ia-concepcion',
  },
}

export default function ConcepcionPage() {
  return (
    <>
      <SchemaMarkup data={localBusinessSchema('Concepción', 'Región del Bío Bío', '-36.8201', '-73.0044')} />
      <SchemaMarkup data={professionalServiceSchema()} />
      <LocationPage
        city="Concepción"
        region="Región del Bío Bío"
        description="Concepción es epicentro de manufactura, forestal e industria pesada en el sur. N3uralia automatiza procesos complejos de producción, control de calidad y operaciones industriales con sistemas agenticos resilientes."
        industries={[
          'Manufactura',
          'Forestal',
          'Industria Pesada',
          'Minería Regional',
          'Servicios Industriales',
          'Energía',
          'Químico',
          'Construcción',
        ]}
        testimonials={[
          {
            name: 'Fernando Gutiérrez',
            role: 'Plant Manager',
            company: 'Planta Manufacturera (Concepción)',
            quote: 'Control de calidad en tiempo real. N3uralia integró nuestras máquinas con agentes que detectan anomalías antes que nosotros.',
          },
          {
            name: 'Patricia López',
            role: 'Director Operaciones',
            company: 'Empresa Forestal (Bío Bío)',
            quote: 'La región necesitaba tecnología seria. N3uralia no solo vende, construye. Impresionante.',
          },
          {
            name: 'Luis Campos',
            role: 'CIO',
            company: 'Grupo Industrial (Concepción)',
            quote: 'Pensamos que habría que traer soluciones de Santiago. N3uralia demostró que el talento existe aquí.',
          },
        ]}
        metrics={[
          { label: 'Plantas Automatizadas', value: '8+' },
          { label: 'Mejora Producción', value: '+50%' },
          { label: 'Defectos Detectados', value: '99.5%' },
          { label: 'Downtime Reducido', value: '70%' },
        ]}
        caseStudyLink="/case-studies"
      />
      <Footer />
    </>
  )
}
