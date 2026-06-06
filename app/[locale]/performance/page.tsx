import { PerformanceMetrics } from "@/components/performance/performance-metrics"
import type { Metadata } from "next"
import { DEFAULT_LOCALE, isValidLocale } from "@/lib/get-locale"
import { buildLocalizedMetadata } from "@/lib/page-metadata"

interface PageProps {
  params: {
    locale: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE

  return buildLocalizedMetadata({
    locale,
    path: "/performance",
    type: "website",
    title: "Performance Metrics | N3uralia",
    description: "Monitor the performance metrics of your N3uralia implementation. Real-time Web Vitals and system diagnostics.",
  })
}

export default function PerformancePage() {
  return (
    <main className="min-h-screen bg-background py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Métricas de Rendimiento</h1>
          <p className="text-lg text-muted-foreground">
            Visualiza en tiempo real cómo se comporta tu navegador y la infraestructura de N3uralia.
          </p>
        </div>

        <PerformanceMetrics />

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg border border-border bg-card">
            <h3 className="font-semibold text-foreground mb-3">First Contentful Paint (FCP)</h3>
            <p className="text-sm text-muted-foreground">
              Mide el tiempo hasta que el navegador renderiza el primer contenido. &lt; 1.8s es excelente.
            </p>
          </div>
          <div className="p-6 rounded-lg border border-border bg-card">
            <h3 className="font-semibold text-foreground mb-3">Largest Contentful Paint (LCP)</h3>
            <p className="text-sm text-muted-foreground">
              Mide el tiempo hasta que el contenido más grande es visible. &lt; 2.5s es óptimo para usuarios.
            </p>
          </div>
          <div className="p-6 rounded-lg border border-border bg-card">
            <h3 className="font-semibold text-foreground mb-3">Cumulative Layout Shift (CLS)</h3>
            <p className="text-sm text-muted-foreground">
              Mide la estabilidad visual durante la carga. &lt; 0.1 significa ningún cambio inesperado.
            </p>
          </div>
        </div>

        <div className="mt-12 p-8 rounded-lg border border-border bg-card">
          <h2 className="text-2xl font-bold text-foreground mb-4">¿Por qué importan estas métricas?</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Las métricas de rendimiento son críticas para la experiencia del usuario. Cargas lentas conducen a abandonos, tasas de rebote más altas y menor conversión.
            </p>
            <p>
              En N3uralia, optimizamos cada aspecto de nuestros sistemas para garantizar que:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Tu agentes responden en milisegundos, no segundos</li>
              <li>Los procesos automáticos se ejecutan sin bloqueos</li>
              <li>La experiencia del usuario permanece fluida incluso bajo carga</li>
              <li>Los costos de infraestructura se minimizan con eficiencia</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
