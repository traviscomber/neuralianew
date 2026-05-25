import type { Metadata } from 'next'
import Link from 'next/link'
import { Footer } from '@/components/layout/footer'

export const metadata: Metadata = {
  title: 'Seguridad de datos con agentes de IA en Chile | Protección y compliance',
  description: 'Cómo proteger datos sensibles de tu empresa al usar agentes de IA. Marcos de seguridad y cumplimiento legal chileno.',
  keywords: 'seguridad datos agentes ia, privacidad informacion',
  alternates: { canonical: 'https://n3uralia.com/es/blog/seguridad-datos-agentes-ia-chile' },
}

export default function SeguridadDatosPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <article className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Seguridad de datos con agentes IA</h1>
          <div className="prose prose-invert max-w-none">
            <h2>Marco de seguridad</h2>
            <ul>
              <li>Encriptación end-to-end de datos</li>
              <li>Control de acceso basado en roles (RBAC)</li>
              <li>Auditoría y logging completo</li>
              <li>Cumplimiento LGPD y normativas chilenas</li>
            </ul>
            <h2>Estándares aplicables en Chile</h2>
            <ul>
              <li><strong>LGPD:</strong> Ley de Protección de Datos Personales</li>
              <li><strong>NIST Cybersecurity:</strong> Framework internacional</li>
              <li><strong>ISO 27001:</strong> Gestión de seguridad</li>
            </ul>
            <h2>Mejores prácticas</h2>
            <ul>
              <li>Datos on-premise u on-cloud (tu control)</li>
              <li>Cifrado en reposo y en tránsito</li>
              <li>Backups regulares y redundancia</li>
            </ul>
            <p>
              <Link href="/es/soluciones-agenticas-chile" className="text-primary">Implementa seguridad en agentes</Link>
            </p>
          </div>
        </article>
      </div>
      <Footer />
    </main>
  )
}
