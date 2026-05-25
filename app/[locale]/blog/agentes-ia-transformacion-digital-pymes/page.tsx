import type { Metadata } from 'next'
import Link from 'next/link'
import { Footer } from '@/components/layout/footer'

export const metadata: Metadata = {
  title: 'Transformación digital para PyMEs chilenas con agentes IA | Guía completa',
  description: 'Cómo las PyMEs chilenas pueden implementar agentes de IA para transformarse digitalmente sin inversión masiva.',
  keywords: 'transformacion digital pymes, ia para pequeñas empresas',
  alternates: { canonical: 'https://n3uralia.com/es/blog/agentes-ia-transformacion-digital-pymes' },
}

export default function TransformacionDigitalPyMESPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <article className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Transformación digital para PyMEs</h1>
          <div className="prose prose-invert max-w-none">
            <h2>Etapas de transformación</h2>
            <ul>
              <li><strong>Fase 1 (2-4 semanas):</strong> Diagnóstico y piloto</li>
              <li><strong>Fase 2 (4-8 semanas):</strong> Implementación completa</li>
              <li><strong>Fase 3 (Continuo):</strong> Optimización y expansión</li>
            </ul>
            <h2>Procesos prioritarios para PyMEs</h2>
            <ul>
              <li>Atención al cliente (chatbot)</li>
              <li>Facturación y cobranza</li>
              <li>Gestión de inventario</li>
              <li>Nómina y RRHH</li>
            </ul>
            <h2>Inversión accesible</h2>
            <ul>
              <li>Presupuesto inicial: $2K-5K USD</li>
              <li>ROI: 6-9 meses</li>
              <li>Planes flexibles de pago</li>
            </ul>
            <p>
              <Link href="/es/agentes-ia-chile" className="text-primary">Inicia transformación digital</Link>
            </p>
          </div>
        </article>
      </div>
      <Footer />
    </main>
  )
}
