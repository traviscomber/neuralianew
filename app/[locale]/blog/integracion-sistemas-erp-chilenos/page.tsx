import type { Metadata } from 'next'
import Link from 'next/link'
import { Footer } from '@/components/layout/footer'

export const metadata: Metadata = {
  title: 'Integración ERP + Agentes IA para sistemas chilenos | N3uralia',
  description: 'Guía técnica para integrar agentes de IA con SAP, Odoo, Microsoft Dynamics y otros ERP usados en Chile.',
  keywords: 'integracion erp agentes ia, sap odoo agentes ia',
  alternates: { canonical: 'https://n3uralia.com/es/blog/integracion-sistemas-erp-chilenos' },
}

export default function IntegracionERPPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <article className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Integración ERP + Agentes IA</h1>
          <div className="prose prose-invert max-w-none">
            <h2>ERPs soportados en Chile</h2>
            <ul>
              <li><strong>SAP:</strong> Módulos MM, SD, FI</li>
              <li><strong>Odoo:</strong> Inventory, Accounting, Sales</li>
              <li><strong>Microsoft Dynamics:</strong> D365 F&O</li>
              <li><strong>Oracle NetSuite:</strong> Completo</li>
            </ul>
            <h2>Patrones de integración</h2>
            <ul>
              <li>API REST para datos en tiempo real</li>
              <li>Eventos automatizados por webhooks</li>
              <li>Sincronización bidireccional</li>
            </ul>
            <h2>Resultados típicos</h2>
            <ul>
              <li>-60% tiempo de cierre fiscal</li>
              <li>-80% errores manuales</li>
              <li>+70% velocidad de transacciones</li>
            </ul>
            <p>
              <Link href="/es/agentes-ia-chile" className="text-primary">Integra tu ERP con agentes IA</Link>
            </p>
          </div>
        </article>
      </div>
      <Footer />
    </main>
  )
}
