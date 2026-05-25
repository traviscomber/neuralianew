import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Store, Zap, TrendingUp } from 'lucide-react'
import { Footer } from '@/components/layout/footer'
import { SectionBackground } from '@/components/section-background'

export const metadata: Metadata = {
  title: 'Agentes IA para Retail y E-commerce en Chile | N3uralia',
  description:
    'Soluciones de IA para tiendas minoristas y e-commerce chilenos. Automatiza inventario, atención al cliente y pricing dinámico. Aumenta ventas 35%, reduce costos operativos 60%.',
  keywords:
    'agentes ia retail chile, automatización e-commerce chile, ia tiendas minoristas, gestión inventario ia, pricing dinámico ia',
  alternates: {
    canonical: 'https://n3uralia.com/es/agentes-ia-retail-chile',
  },
  openGraph: {
    title: 'Agentes IA para Retail en Chile | N3uralia',
    description: 'Transforma tu negocio minorista con agentes IA diseñados para retail y e-commerce chilenos.',
    url: 'https://n3uralia.com/es/agentes-ia-retail-chile',
    type: 'website',
  },
}

export default function AgentesIARetailChilePage() {
  return (
    <main className="min-h-screen bg-background">
      <SectionBackground>
        <div className="max-w-4xl mx-auto px-4 py-24">
          <h1 className="text-5xl font-bold text-foreground mb-4">
            Agentes de IA para Retail y E-commerce en Chile
          </h1>
          <p className="text-xl text-foreground/80 mb-8">
            Automatiza tu operación minorista. Gestión de inventario inteligente, atención al cliente 24/7 y pricing dinámico.
            <span className="block text-2xl font-semibold text-primary mt-2">Aumenta ventas hasta 35% • Reduce costos 60%</span>
          </p>
          <Link
            href="/es/agentes-ia-chile#cta"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-background rounded-lg hover:bg-primary/90 transition-colors font-semibold"
          >
            Evalúa tu potencial <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </SectionBackground>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-foreground mb-8">¿Por qué Retail necesita Agentes de IA?</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {[
            {
              icon: Store,
              title: 'Gestión de Inventario Inteligente',
              description: 'Predicción de demanda con 94% de precisión. Reduce stockouts y overstock automáticamente.'
            },
            {
              icon: Zap,
              title: 'Atención al Cliente 24/7',
              description: 'Chatbots de IA que resuelven 85% de consultas sin intervención humana.'
            },
            {
              icon: TrendingUp,
              title: 'Pricing Dinámico',
              description: 'Optimización de precios en tiempo real basada en competencia y demanda.'
            },
            {
              icon: CheckCircle2,
              title: 'Gestión de Pedidos',
              description: 'Automatización de confirmaciones, cambios y devoluciones.'
            }
          ].map((item, i) => {
            const Icon = item.icon
            return (
              <div key={i} className="bg-foreground/5 border border-foreground/10 rounded-lg p-6">
                <Icon className="w-10 h-10 text-primary mb-3" />
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-foreground/70">{item.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16 bg-foreground/5 rounded-lg">
        <h2 className="text-3xl font-bold text-foreground mb-8">Casos de Uso para Retail Chileno</h2>
        <div className="space-y-6">
          {[
            {
              title: 'Tiendas Online (E-commerce)',
              description: 'Automatiza búsqueda de productos, recomendaciones personalizadas y seguimiento de pedidos. Resultado: 40% más conversiones.'
            },
            {
              title: 'Tiendas Físicas (O2O)',
              description: 'Integra online y offline. Agentes coordinan stock entre sucursales y retiros en tienda en tiempo real.'
            },
            {
              title: 'Atención Post-Venta',
              description: 'Gestiona devoluciones, cambios y garantías automáticamente. Resultado: 70% de resoluciones sin escalado.'
            },
            {
              title: 'Cobranza y Deuda',
              description: 'Agentes realizan seguimiento de pagos pendientes. Tasa de recuperación: 65% (vs 35% manual).'
            }
          ].map((item, i) => (
            <div key={i} className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-foreground/70">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-foreground mb-8">Resultados Comprobados en Retail Chileno</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { metric: '+35%', label: 'Aumento de Ventas' },
            { metric: '-60%', label: 'Reducción de Costos' },
            { metric: '94%', label: 'Precisión de Inventario' },
            { metric: '85%', label: 'Consultas Resueltas por IA' },
            { metric: '-50%', label: 'Tiempo de Atención' },
            { metric: '+45%', label: 'Satisfacción del Cliente' }
          ].map((item, i) => (
            <div key={i} className="text-center bg-primary/10 rounded-lg p-6">
              <div className="text-4xl font-bold text-primary mb-2">{item.metric}</div>
              <div className="text-foreground/70">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-foreground mb-8">Preguntas Frecuentes - Retail</h2>
        <div className="space-y-6">
          {[
            {
              q: '¿Funciona con mi plataforma e-commerce actual?',
              a: 'Sí. Trabajamos con Shopify, WooCommerce, Magento y soluciones personalizadas. Integración en 1-2 semanas.'
            },
            {
              q: '¿Qué datos de clientes necesitan los agentes?',
              a: 'Solo datos transaccionales (pedidos, productos, preferencias). Cumplimos con LGPD y regulaciones chilenas de privacidad.'
            },
            {
              q: '¿Puedo mantener mi equipo actual?',
              a: 'Totalmente. Los agentes automatizan tareas repetitivas. Tu equipo se enfoca en ventas y relaciones.'
            },
            {
              q: '¿Cuánto tiempo hasta ver resultados?',
              a: 'Resultados medibles en 2-3 semanas. Retorno completo de inversión en 6 meses típicamente.'
            }
          ].map((item, i) => (
            <div key={i} className="border border-foreground/10 rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-2">{item.q}</h3>
              <p className="text-foreground/70">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16 bg-primary/10 rounded-lg">
        <h2 className="text-3xl font-bold text-foreground mb-4">¿Listo para Transformar tu Retail?</h2>
        <p className="text-foreground/80 mb-6">
          Consultores especializados en e-commerce y retail chileno. Diagnóstico gratuito de tu operación.
        </p>
        <Link
          href="/es/agentes-ia-chile"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-background rounded-lg hover:bg-primary/90 transition-colors font-semibold"
        >
          Agendar Diagnóstico Gratuito <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      <Footer />
    </main>
  )
}
