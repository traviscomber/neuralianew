import type { Metadata } from 'next'
import Link from 'next/link'
import { Footer } from '@/components/layout/footer'

export const metadata: Metadata = {
  title: 'Atención al cliente multiidioma con agentes IA | Servicio 24/7 en Chile',
  description: 'Chatbots y agentes inteligentes para servicio al cliente en español, inglés y otros idiomas. Disponible 24/7 para empresas chilenas.',
  keywords: 'atencion cliente multiidioma ia, soporte 24/7',
  alternates: { canonical: 'https://n3uralia.com/es/blog/agentes-ia-servicio-cliente-multilingual' },
}

export default function ServicioClienteMultilingualPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <article className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Atención al cliente multiidioma con IA</h1>
          <div className="prose prose-invert max-w-none">
            <h2>Capacidades del chatbot</h2>
            <ul>
              <li>Disponible 24/7 sin costos de operación</li>
              <li>Soporta español, inglés, portugués, etc.</li>
              <li>Resuelve 80-90% de consultas automáticamente</li>
              <li>Escalación inteligente a humano cuando es necesario</li>
              <li>Historial completo para análisis</li>
            </ul>
            <h2>Uso en empresas chilenas</h2>
            <ul>
              <li><strong>Retail:</strong> Devoluciones, promociones, horarios</li>
              <li><strong>Servicios:</strong> Facturación, reclamos, consultas técnicas</li>
              <li><strong>Turismo:</strong> Reservas, recomendaciones, traslados</li>
            </ul>
            <h2>ROI</h2>
            <ul>
              <li>-60% costos de atención al cliente</li>
              <li>+75% satisfacción de clientes</li>
              <li>-90% tiempo de respuesta</li>
            </ul>
            <p>
              <Link href="/es/agentes-ia-chile" className="text-primary">Implementa servicio 24/7</Link>
            </p>
          </div>
        </article>
      </div>
      <Footer />
    </main>
  )
}
