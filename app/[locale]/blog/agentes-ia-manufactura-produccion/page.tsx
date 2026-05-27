import type { Metadata } from 'next'
import Link from 'next/link'
import { Footer } from '@/components/layout/footer'

export const metadata: Metadata = {
  title: 'Planificación de producción con IA en manufactura chilena | N3uralia',
  description: 'Sistemas inteligentes para optimizar producción, reducir desperdicios y mejorar OEE en manufactura chilena.',
  keywords: 'planificación producción ia, manufactura inteligente chile',
  alternates: { canonical: 'https://n3uralia.com/es/blog/agentes-ia-manufactura-produccion' },
}

export default function ManufacturaProduccionPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <article className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Planificación de producción con agentes IA</h1>
          <div className="prose prose-invert max-w-none">
            <h2>Optimización industrial</h2>
            <ul>
              <li>Predicción de demanda con 94% precisión</li>
              <li>Planificación automática de producción</li>
              <li>Gestión de inventario en tiempo real</li>
              <li>Detección de cuellos de botella</li>
            </ul>
            <h2>Resultados en Chile</h2>
            <ul>
              <li>-40% tiempo de ciclo</li>
              <li>+50% calidad (99.2%)</li>
              <li>+60% eficiencia operacional (OEE)</li>
            </ul>
            <p>
              <Link href="/es/agentes-ia-manufactura-chile" className="text-primary">Optimiza tu producción hoy</Link>
            </p>
          </div>
        </article>
      </div>
      <Footer />
    </main>
  )
}
