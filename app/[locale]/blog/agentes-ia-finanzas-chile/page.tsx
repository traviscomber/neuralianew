import type { Metadata } from 'next'
import Link from 'next/link'
import { Footer } from '@/components/layout/footer'

export const metadata: Metadata = {
  title: 'Automatización de procesos financieros con IA en Chile | Contabilidad',
  description: 'Sistemas inteligentes para contabilidad, tesorería, auditoría interna y control financiero en empresas chilenas.',
  keywords: 'automatización finanzas ia, contabilidad inteligente',
  alternates: { canonical: 'https://n3uralia.com/es/blog/agentes-ia-finanzas-chile' },
}

export default function FinanzasPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <article className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Automatización de procesos financieros</h1>
          <div className="prose prose-invert max-w-none">
            <h2>Procesos financieros automatizables</h2>
            <ul>
              <li>Facturación y cobranza automática</li>
              <li>Conciliación bancaria (99.8% precisión)</li>
              <li>Control de gastos y presupuestos</li>
              <li>Reportes financieros automáticos</li>
              <li>Auditoría continua (internal audit)</li>
            </ul>
            <h2>Compliance chileno</h2>
            <ul>
              <li>Integración con SII directa</li>
              <li>Cumplimiento LGPD para datos financieros</li>
              <li>Trazabilidad total de transacciones</li>
            </ul>
            <h2>Resultados</h2>
            <ul>
              <li>-75% tiempo de cierre contable</li>
              <li>-90% errores manuales</li>
              <li>+80% velocidad de pago a proveedores</li>
            </ul>
            <p>
              <Link href="/es/automatizacion-ia-empresas-chile" className="text-primary">Automatiza finanzas</Link>
            </p>
          </div>
        </article>
      </div>
      <Footer />
    </main>
  )
}
