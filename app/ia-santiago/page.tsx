import type { Metadata } from 'next'
import { LocationPage } from '@/components/location-page'
import { Footer } from '@/components/layout/footer'
import { SchemaMarkup, localBusinessSchema, professionalServiceSchema } from '@/lib/schema-markup'

export const metadata: Metadata = {
  title: 'Automatización IA para Empresas en Santiago | N3uralia',
  description: 'Sistemas agenticos para automatización empresarial en Santiago. Automatiza procesos, reduce costos 70%, ROI en 6 meses. Agendar diagnosis gratuita.',
  keywords: 'IA Santiago, automatización empresas Santiago, sistemas agenticos Chile, inteligencia artificial negocios',
  openGraph: {
    title: 'Automatización IA para Empresas en Santiago',
    description: 'Reduce 70% de trabajo manual con sistemas agenticos. ROI demostrable en 6 meses.',
    type: 'website',
    url: 'https://n3uralia.com/ia-santiago',
  },
  alternates: {
    canonical: 'https://n3uralia.com/ia-santiago',
  },
}

export default function SantiagoPage() {
  return (
    <>
      <SchemaMarkup data={localBusinessSchema('Santiago', 'Región Metropolitana', '-33.8688', '-51.5305')} />
      <SchemaMarkup data={professionalServiceSchema()} />
      <LocationPage
        city="Santiago"
        region="Región Metropolitana"
        description="En Santiago, las empresas líderes están transformando sus operaciones con N3uralia. Desde startups hasta corporativos, automatizamos procesos complejos con sistemas agenticos que aprenden y evolucionan."
        industries={[
          'Finanzas',
          'Retail',
          'Logística',
          'Tecnología',
          'Servicios Profesionales',
          'Healthcare',
          'Educación',
          'Manufactura',
        ]}
        testimonials={[
          {
            name: 'Carlos González',
            role: 'CTO',
            company: 'TechCorp Chile (Santiago)',
            quote: 'N3uralia transformó nuestros procesos en 3 meses. De 3 semanas a 2 días. El equipo en Santiago entiende perfectamente nuestro mercado.',
          },
          {
            name: 'María Rodríguez',
            role: 'VP Operations',
            company: 'Financiera Global (Santiago)',
            quote: 'Buscábamos soberanía de datos sin sacrificar IA. N3uralia lo logró. ROI positivo en mes 7.',
          },
          {
            name: 'Roberto Silva',
            role: 'Chief Digital Officer',
            company: 'Retail Plus (Santiago)',
            quote: 'El soporte local de N3uralia fue clave. No es consultora lejana, son compañeros que entienden Santiago.',
          },
        ]}
        metrics={[
          { label: 'Empresas Activas', value: '18+' },
          { label: 'Reducción Promedio', value: '65%' },
          { label: 'Payback Promedio', value: '8 meses' },
          { label: 'Uptime', value: '99.8%' },
        ]}
        caseStudyLink="/case-studies"
      />
      <Footer />
    </>
  )
}
