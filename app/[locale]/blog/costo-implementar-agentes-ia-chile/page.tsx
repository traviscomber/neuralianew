import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Footer } from '@/components/layout/footer'

export const metadata: Metadata = {
  title: '¿Cuánto cuesta implementar agentes de IA en Chile? | N3uralia',
  description:
    'Desglose completo del costo de implementación de agentes de IA para empresas chilenas. Presupuestos desde PyMEs hasta empresas grandes.',
  keywords: 'costo agentes ia chile, presupuesto automatización, implementación agentes ia',
  alternates: {
    canonical: 'https://n3uralia.com/es/blog/costo-implementar-agentes-ia-chile',
  },
}

export default function CostoImplementarAgentesIAChilePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <article className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-foreground">¿Cuánto cuesta implementar agentes de IA en Chile?</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Desglose de costos reales para empresas chilenas que implementan Living Agents.
          </p>

          <div className="prose prose-invert max-w-none mb-12">
            <h2>Presupuesto por tamaño de empresa</h2>
            <ul>
              <li><strong>PyMEs (10-100 empleados):</strong> $2,000-5,000 USD (fase piloto)</li>
              <li><strong>Medianas (100-500):</strong> $5,000-15,000 USD</li>
              <li><strong>Empresas (500+):</strong> $15,000-50,000+ USD</li>
            </ul>

            <h2>Desglose de costos</h2>
            <ul>
              <li>Diagnóstico y análisis: 10-15%</li>
              <li>Desarrollo de agentes: 40-50%</li>
              <li>Integración con sistemas: 20-30%</li>
              <li>Capacitación: 10-15%</li>
            </ul>

            <h2>ROI típico en Chile</h2>
            <p>Las empresas chilenas reportan recuperación de inversión en 6-9 meses con:</p>
            <ul>
              <li>-45% costos operacionales</li>
              <li>+70% productividad</li>
              <li>-80% errores manuales</li>
            </ul>

            <h2>Próximos pasos</h2>
            <p>
              Contáctanos para un{' '}
              <Link href="/es/agentes-ia-chile" className="text-primary hover:underline">
                diagnóstico gratuito de costos específicos para tu empresa
              </Link>.
            </p>
          </div>
        </article>
      </div>
      <Footer />
    </main>
  )
}
