import type { Metadata } from 'next'
import { LocationPage } from '@/components/location-page'
import { Footer } from '@/components/layout/footer'
import { SchemaMarkup, localBusinessSchema, professionalServiceSchema } from '@/lib/schema-markup'

export const metadata: Metadata = {
  title: 'Automatización IA para Empresas en Valparaíso | N3uralia',
  description: 'Sistemas agenticos para automatización empresarial en Valparaíso y región. Especialistas en logística, retail, manufactura. Diagnosis gratuita.',
  keywords: 'IA Valparaíso, automatización Valparaíso, sistemas agenticos región, inteligencia artificial negocios Chile',
  openGraph: {
    title: 'Automatización IA para Empresas en Valparaíso',
    description: 'Automatiza procesos logísticos, retail, manufactura. ROI en 6-10 meses.',
    type: 'website',
    url: 'https://n3uralia.com/ia-valparaiso',
  },
  alternates: {
    canonical: 'https://n3uralia.com/ia-valparaiso',
  },
}

export default function ValparaisoPage() {
  return (
    <>
      <SchemaMarkup data={localBusinessSchema('Valparaíso', 'Región de Valparaíso', '-33.0472', '-71.6127')} />
      <SchemaMarkup data={professionalServiceSchema()} />
      <LocationPage
        city="Valparaíso"
        region="Región de Valparaíso"
        description="Valparaíso es hub de logística, retail e industria portuaria. N3uralia ayuda a empresas locales a automatizar cadenas de suministro complejas, gestión de inventarios y procesos de operación 24/7."
        industries={[
          'Logística Portuaria',
          'Importación/Exportación',
          'Retail Regional',
          'Manufactura',
          'Distribución',
          'Comercio Exterior',
          'Servicios Navales',
          'Consultoría',
        ]}
        testimonials={[
          {
            name: 'Alejandra Torres',
            role: 'Operations Manager',
            company: 'LogisticaMax (Valparaíso)',
            quote: 'Automatizar procesos en logística es complejo. N3uralia entendió nuestros flujos únicos y construyó exactamente lo que necesitábamos.',
          },
          {
            name: 'Diego Martínez',
            role: 'Supply Chain Lead',
            company: 'Distribuidora Regional (Valparaíso)',
            quote: 'Los agentes de N3uralia coordinan nuestras rutas en tiempo real. Eficiencia +40%, costos -35%.',
          },
          {
            name: 'Catalina Flores',
            role: 'CEO',
            company: 'Empresa Exportadora (Valparaíso)',
            quote: 'En Valparaíso no tenemos muchas opciones de tecnología de punta local. N3uralia cambió eso.',
          },
        ]}
        metrics={[
          { label: 'Empresas Logísticas', value: '12+' },
          { label: 'Reducción de Costos', value: '40%' },
          { label: 'Eficiencia de Rutas', value: '+35%' },
          { label: 'Operaciones 24/7', value: '100%' },
        ]}
        caseStudyLink="/case-studies"
      />
      <Footer />
    </>
  )
}
