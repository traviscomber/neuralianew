import type { Metadata } from 'next'
import Link from 'next/link'
import { Footer } from '@/components/layout/footer'

export const metadata: Metadata = {
  title: 'Agentes IA vs Outsourcing: ¿Cuál elegir en Chile? | Comparativa completa',
  description: 'Análisis detallado comparando agentes de IA vs outsourcing tradicional para empresas chilenas.',
  keywords: 'agentes ia vs outsourcing, automatización vs externalización',
  alternates: { canonical: 'https://n3uralia.com/es/blog/agentes-ia-vs-outsourcing-chile' },
}

export default function AgentesVsOutsourcingPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <article className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Agentes IA vs Outsourcing: ¿Cuál elegir?</h1>
          <div className="prose prose-invert max-w-none">
            <h2>Matriz de decisión</h2>
            <table>
              <tbody>
                <tr>
                  <th>Factor</th>
                  <th>Agentes IA</th>
                  <th>Outsourcing</th>
                </tr>
                <tr>
                  <td>Costo inicial</td>
                  <td>$5K-50K</td>
                  <td>$2K-5K</td>
                </tr>
                <tr>
                  <td>Costo mensual</td>
                  <td>$1K-5K</td>
                  <td>$8K-20K</td>
                </tr>
                <tr>
                  <td>ROI</td>
                  <td>6-9 meses</td>
                  <td>No aplica</td>
                </tr>
                <tr>
                  <td>Control</td>
                  <td>Total</td>
                  <td>Limitado</td>
                </tr>
              </tbody>
            </table>
            <h2>Cuándo usar cada uno</h2>
            <ul>
              <li><strong>IA Agents:</strong> Procesos repetitivos, predicción de demanda</li>
              <li><strong>Outsourcing:</strong> Tareas únicas, soporte humano crítico</li>
            </ul>
            <p>
              <Link href="/es/automatizacion-ia-empresas-chile" className="text-primary">Descubre cuál es mejor para ti</Link>
            </p>
          </div>
        </article>
      </div>
      <Footer />
    </main>
  )
}
