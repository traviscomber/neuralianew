import type { Metadata } from 'next'
import { ROICalculator } from '@/components/roi-calculator'
import { Footer } from '@/components/layout/footer'

export const metadata: Metadata = {
  title: 'Calculadora ROI - Calcula tus ahorros | N3uralia',
  description: 'Calcula tu ROI potencial con sistemas agenticos. Descubre cuánto podrías ahorrar en automatización con N3uralia.',
  keywords: 'ROI, automatización, ahorros, cálculo ROI, IA empresarial',
  openGraph: {
    title: 'Calculadora ROI - N3uralia',
    description: 'Calcula tus ahorros potenciales con automatización inteligente',
    type: 'website',
    url: 'https://n3uralia.com/roi-calculator',
  },
}

export default function ROICalculatorPage() {
  return (
    <main className="min-h-screen pt-32 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Calcula Tu ROI Potencial
          </h1>
          <p className="text-lg text-muted-foreground text-pretty">
            Descubre cuánto podrías ahorrar automatizando tus procesos con N3uralia. Utiliza esta calculadora interactiva para estimar el impacto financiero en tu operación.
          </p>
        </div>

        {/* Calculator */}
        <div className="max-w-6xl mx-auto mb-24">
          <ROICalculator />
        </div>

        {/* Info Section */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 mb-24">
          <div className="bg-card border border-border/50 rounded-xl p-6">
            <h3 className="font-semibold text-foreground mb-3">Basado en Datos Reales</h3>
            <p className="text-sm text-muted-foreground">
              Nuestros cálculos se basan en 50+ implementaciones exitosas en Chile y LATAM.
            </p>
          </div>
          <div className="bg-card border border-border/50 rounded-xl p-6">
            <h3 className="font-semibold text-foreground mb-3">Conservador pero Realista</h3>
            <p className="text-sm text-muted-foreground">
              Utilizamos supuestos conservadores para garantizar que nuestras estimaciones sean alcanzables.
            </p>
          </div>
          <div className="bg-card border border-border/50 rounded-xl p-6">
            <h3 className="font-semibold text-foreground mb-3">Personalizado para Ti</h3>
            <p className="text-sm text-muted-foreground">
              Cada empresa es diferente. Ajusta los parámetros para reflejar tu situación real.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto mb-24">
          <h2 className="text-2xl font-bold text-foreground mb-12">Preguntas Frecuentes</h2>
          <div className="space-y-6">
            <div className="border-b border-border pb-6">
              <h3 className="font-semibold text-foreground mb-2">¿Cuál es la precisión de estos cálculos?</h3>
              <p className="text-sm text-muted-foreground">
                Estos cálculos son estimaciones basadas en promedios de la industria y nuestra experiencia. Los resultados reales pueden variar según la implementación específica, la calidad de los datos y otros factores.
              </p>
            </div>
            <div className="border-b border-border pb-6">
              <h3 className="font-semibold text-foreground mb-2">¿El período de retorno de 8-12 meses es realista?</h3>
              <p className="text-sm text-muted-foreground">
                Sí. Nuestros clientes típicamente ven ROI positivo en 6-12 meses. Esto depende del scope del proyecto y la complejidad de los procesos automatizados.
              </p>
            </div>
            <div className="border-b border-border pb-6">
              <h3 className="font-semibold text-foreground mb-2">¿Incluye el costo de capacitación del equipo?</h3>
              <p className="text-sm text-muted-foreground">
                La inversión estimada incluye desarrollo, implementación y capacitación inicial. El soporte continuo y las mejoras se pueden negociar por separado.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">¿Cómo puedo validar estos números?</h3>
              <p className="text-sm text-muted-foreground">
                Agendar una consulta gratuita. Nuestro equipo revisará tu situación específica y te proporcionará un análisis detallado personalizado.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-2xl mx-auto text-center bg-primary/5 border border-primary/20 rounded-2xl p-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">¿Listo para ver tu ROI en acción?</h2>
          <p className="text-muted-foreground mb-8">
            Agendar una demo personalizada con nuestro equipo. Mostraremos exactamente cómo podemos ayudarte.
          </p>
          <a
            href="/diagnosis"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all"
          >
            Agendar Demo Gratuita →
          </a>
        </div>
      </div>

      <Footer />
    </main>
  )
}
