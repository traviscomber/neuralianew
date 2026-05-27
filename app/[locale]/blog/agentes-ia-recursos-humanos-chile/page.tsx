import type { Metadata } from 'next'
import Link from 'next/link'
import { Footer } from '@/components/layout/footer'

export const metadata: Metadata = {
  title: 'Automatización RR.HH. con agentes IA en Chile | Procesos de personal',
  description: 'Optimiza reclutamiento, onboarding, nómina y gestión de personal con agentes de IA en empresas chilenas.',
  keywords: 'automatización rrhh ia, gestión personal inteligente',
  alternates: { canonical: 'https://n3uralia.com/es/blog/agentes-ia-recursos-humanos-chile' },
}

export default function RecursosHumanosPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <article className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Automatización RR.HH. con agentes IA</h1>
          <div className="prose prose-invert max-w-none">
            <h2>Procesos automatizables</h2>
            <ul>
              <li>Reclutamiento inicial (CV parsing, preselección)</li>
              <li>Onboarding y documentación</li>
              <li>Gestión de nómina y descuentos legales</li>
              <li>Control de asistencia y licencias</li>
              <li>Evaluaciones de desempeño</li>
            </ul>
            <h2>Resultados en empresas chilenas</h2>
            <ul>
              <li>-60% tiempo de proceso de selección</li>
              <li>-80% tareas administrativas</li>
              <li>+50% satisfacción de empleados (mejores procesos)</li>
            </ul>
            <p>
              <Link href="/es/agentes-ia-chile" className="text-primary">Automatiza RR.HH.</Link>
            </p>
          </div>
        </article>
      </div>
      <Footer />
    </main>
  )
}
