'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle, Code, Zap } from 'lucide-react';

export default function EnterprisePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'N3uralia',
            description: 'Orquestación de agentes IA para empresas',
            areaServed: {
              '@type': 'Place',
              name: 'Chile',
            },
            priceRange: '$$$$',
            offers: {
              '@type': 'Offer',
              description: 'Soluciones de IA empresarial personalizadas',
            },
          }),
        }}
      />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="border-b border-border px-4 py-16 sm:py-24">
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-2">
              <p className="text-sm font-semibold text-primary">Para CTOs y VPs de Ingeniería</p>
            </div>
            <h1 className="mb-6 text-4xl font-bold text-foreground sm:text-5xl">
              Orquestación de Agentes IA para Empresas Complejas
            </h1>
            <p className="mb-8 text-xl text-muted-foreground leading-relaxed">
              N3uralia integra con tu stack existente. Sin rip-and-replace. Sin black boxes. Gobernanza desde día uno. Medible. Auditable. Listo para producción.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors gap-2"
              >
                Solicitar Consulta Técnica <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/faq"
                className="inline-flex items-center justify-center px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
              >
                Ver Casos de Estudio
              </Link>
            </div>
          </div>
        </section>

        {/* Core Problems Section */}
        <section className="border-b border-border px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-3xl font-bold text-foreground">Los Problemas que Resolvemos</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  title: 'Integración Compleja',
                  description:
                    'Tus sistemas no hablan entre sí. APIs rotas. Procesos manuales que conectan plataformas. N3uralia orquesta todo automáticamente.',
                },
                {
                  title: 'Gobernanza & Auditoría',
                  description:
                    'IA que no explica sus decisiones no es producción. Cada acción de N3uralia es trazable, auditable, y cumple normativas.',
                },
                {
                  title: 'Riesgo de Automatización',
                  description:
                    'Automatizar sin visibilidad = desastre. N3uralia ofrece control total, RLS, y verificación antes de cada acción crítica.',
                },
                {
                  title: 'Escala sin Headcount',
                  description:
                    'No puedes contratar 100 personas nuevas. Living Agents escalan tu capacidad exponencialmente sin incrementar costos fijos.',
                },
              ].map((problem, i) => (
                <div key={i} className="rounded-lg border border-border bg-card p-6">
                  <h3 className="mb-3 font-semibold text-foreground">{problem.title}</h3>
                  <p className="text-muted-foreground">{problem.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="border-b border-border px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-3xl font-bold text-foreground">
              Cómo N3uralia Resuelve Esto
            </h2>
            <div className="space-y-8">
              {[
                {
                  icon: <Code className="h-6 w-6" />,
                  title: 'Orquestación de Arquitectura',
                  description:
                    'Se conecta con tu ERP, CRM, data warehouse, y sistemas legados. No reemplaza—mejora lo que ya tienes.',
                  details:
                    'APIs REST, webhooks, SQL, GraphQL, o incluso UI scraping. Trabajamos con tu infraestructura existente.',
                },
                {
                  icon: <CheckCircle className="h-6 w-6" />,
                  title: 'Gobernanza Integrada',
                  description:
                    'Auditoría completa. Row-level security. Aprobaciones antes de acciones críticas. Cumplimiento normativo incorporado.',
                  details:
                    'Cada decisión es registrada, trazable, y explicable. Perfecto para banca, seguros, y reguladas.',
                },
                {
                  icon: <Zap className="h-6 w-6" />,
                  title: 'Living Agents que Aprenden',
                  description:
                    'No son bots estáticos. Mejoran constantemente. Entienden excepciones. Adaptan su comportamiento automáticamente.',
                  details:
                    'Retroalimentación de usuario → mejora automática → mejor experiencia la próxima vez.',
                },
              ].map((solution, i) => (
                <div key={i} className="rounded-lg border border-border bg-card p-8">
                  <div className="mb-4 flex items-start gap-4">
                    <div className="mt-1 text-primary">{solution.icon}</div>
                    <div>
                      <h3 className="mb-2 font-semibold text-foreground text-lg">
                        {solution.title}
                      </h3>
                      <p className="mb-3 text-muted-foreground">{solution.description}</p>
                      <p className="text-sm text-muted-foreground italic">{solution.details}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Section */}
        <section className="border-b border-border px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-3xl font-bold text-foreground">Implementación Simple</h2>
            <div className="grid gap-4 sm:grid-cols-4">
              {[
                { step: '1', label: 'Consulta Técnica', description: 'Entendemos tu arquitectura' },
                { step: '2', label: 'Piloto', description: '30-60 días en producción' },
                { step: '3', label: 'Validación', description: 'Medimos resultados reales' },
                { step: '4', label: 'Escala', description: 'Expandimos a más procesos' },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-foreground">{item.label}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl rounded-lg border border-border bg-card p-8 text-center sm:p-12">
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              ¿Listo para Orquestar Tu IA?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Hablemos sobre cómo N3uralia se adapta a tu arquitectura existente.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors gap-2"
            >
              Agendar Consulta <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
