import type { Metadata } from 'next'
import Link from 'next/link'
import { Footer } from '@/components/layout/footer'

export const metadata: Metadata = {
  title: 'Optimización de rutas y logística con IA en Chile | N3uralia',
  description: 'Sistemas de IA para optimizar rutas, reducir costos de transporte y mejorar entregas en empresas logísticas chilenas.',
  keywords: 'optimización rutas ia chile, logistica automatizada',
  alternates: { canonical: 'https://n3uralia.com/es/blog/agentes-ia-logistica-optimizacion-rutas' },
}

export default function LogisticaOptimizacionRutasPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <article className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Optimización de rutas con agentes de IA</h1>
          <div className="prose prose-invert max-w-none">
            <h2>Tecnología de optimización</h2>
            <ul>
              <li>Machine learning para predicción de tiempos</li>
              <li>Algoritmos de enrutamiento dinámico</li>
              <li>Integración GPS y datos de tráfico real</li>
              <li>Optimización en tiempo real</li>
            </ul>
            <h2>Resultados en logística chilena</h2>
            <ul>
              <li>-35% costos de combustible</li>
              <li>+40% entregas por ruta</li>
              <li>-50% tiempo administrativo</li>
            </ul>
            <h2>Empresas beneficiadas</h2>
            <p>Retailers, distribuidoras, operadores logísticos y e-commerce en todo Chile.</p>
            <p>
              <Link href="/es/agentes-ia-logistica-chile" className="text-primary">Implementa optimización de rutas</Link>
            </p>
          </div>
        </article>
      </div>
      <Footer />
    </main>
  )
}
