import type { Metadata } from 'next'
import Link from 'next/link'
import { Footer } from '@/components/layout/footer'

export const metadata: Metadata = {
  title: 'Minería en Chile: Automatización con agentes IA | Casos de éxito',
  description: 'Casos reales de minería chilena implementando agentes de IA para optimización de procesos y seguridad.',
  keywords: 'agentes ia mineria chile, automatización mineria',
  alternates: { canonical: 'https://n3uralia.com/es/blog/agentes-ia-mineria-casos-exito' },
}

export default function MineriaCasosExitoPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <article className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Minería en Chile: Automatización con agentes IA</h1>
          <div className="prose prose-invert max-w-none">
            <h2>Caso de éxito: Predictive Maintenance en Cobre</h2>
            <ul>
              <li>Empresa: Gran empresa minera (2,000+ empleados)</li>
              <li>Resultado: -45% mantenimiento no planificado</li>
              <li>Ahorro: $2.3M USD anuales</li>
              <li>Timeline: 12 semanas de implementación</li>
            </ul>
            <h2>Beneficios principales</h2>
            <ul>
              <li>Seguridad: -65% incidentes por equipos</li>
              <li>Productividad: +55% uptime de equipos</li>
              <li>Costos: -45% mantenimiento predictivo</li>
            </ul>
            <p>
              Descubre cómo optimizar minería: <Link href="/es/agentes-ia-mineria-chile" className="text-primary">Ver solución completa</Link>
            </p>
          </div>
        </article>
      </div>
      <Footer />
    </main>
  )
}
