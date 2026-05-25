import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Users, Zap, TrendingUp } from 'lucide-react'
import { Footer } from '@/components/layout/footer'
import { SectionBackground } from '@/components/section-background'

export const metadata: Metadata = {
  title: 'Agentes IA para Turismo y Hotelería en Chile | N3uralia',
  description:
    'Soluciones de IA para turismo, hotelería y hospitality en Chile. Automatiza reservas, experiencia del cliente, revenue management. Aumenta ocupación 25%, ingresos 35%, satisfacción 60%.',
  keywords:
    'agentes ia turismo chile, automatización hotelería, ia experiencia cliente, revenue management hoteles, chatbots turismo chile',
  alternates: {
    canonical: 'https://n3uralia.com/es/agentes-ia-turismo-chile',
  },
  openGraph: {
    title: 'Agentes IA para Turismo en Chile | N3uralia',
    description: 'Transforma tu negocio turístico con agentes IA diseñados para Chile.',
    url: 'https://n3uralia.com/es/agentes-ia-turismo-chile',
    type: 'website',
  },
}

export default function AgentesIATurismoChilePage() {
  return (
    <main className="min-h-screen bg-background">
      <SectionBackground>
        <div className="max-w-4xl mx-auto px-4 py-24">
          <h1 className="text-5xl font-bold text-foreground mb-4">
            Agentes de IA para Turismo y Hotelería en Chile
          </h1>
          <p className="text-xl text-foreground/80 mb-8">
            Automatiza operaciones hoteleras. Gestión de reservas, experiencia del cliente y revenue management inteligente.
            <span className="block text-2xl font-semibold text-primary mt-2">Ocupación +25% • Ingresos +35% • Satisfacción +60%</span>
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
        <h2 className="text-3xl font-bold text-foreground mb-8">¿Por qué Turismo necesita Agentes de IA?</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {[
            {
              icon: Users,
              title: 'Atención 24/7 Multiidioma',
              description: 'Chatbots IA responden consultas en español, inglés, chino. Resuelven 90% sin escalar.'
            },
            {
              icon: Zap,
              title: 'Revenue Management Automático',
              description: 'Ajusta precios según demanda, competencia y estacionalidad. Aumenta ingresos 25-40%.'
            },
            {
              icon: TrendingUp,
              title: 'Gestión de Experiencia del Cliente',
              description: 'Personaliza ofertas según preferencias. Agentes sugieren servicios adicionales.'
            },
            {
              icon: CheckCircle2,
              title: 'Check-in/Check-out Automático',
              description: 'Procesos sin fricción. Reduce tiempos de gestión administrativa.'
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
        <h2 className="text-3xl font-bold text-foreground mb-8">Casos de Uso para Turismo Chileno</h2>
        <div className="space-y-6">
          {[
            {
              title: 'Pre-Llegada del Huésped',
              description: 'Agentes confirman reservas, envían info de check-in, sugieren tours/actividades. Aumenta gastos extras 35%.'
            },
            {
              title: 'Atención During Stay',
              description: 'Chatbots resuelven dudas: horarios restaurante, tours disponibles, servicios especiales.'
            },
            {
              title: 'Revenue Management',
              description: 'Algoritmos optimizan precios por habitación, día, evento. Ocupación +25%, ingresos +35%.'
            },
            {
              title: 'Post-Llegada y Recuperación',
              description: 'Automatiza encuestas de satisfacción, ofrece descuentos para retener huéspedes frecuentes.'
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
        <h2 className="text-3xl font-bold text-foreground mb-8">Resultados en Hotelería Chilena</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { metric: '+25%', label: 'Ocupación de Habitaciones' },
            { metric: '+35%', label: 'Ingresos por Reserva' },
            { metric: '+60%', label: 'Satisfacción del Cliente' },
            { metric: '+30%', label: 'Servicios Adicionales' },
            { metric: '-40%', label: 'Tiempos Administrativos' },
            { metric: '+45%', label: 'Retención de Clientes' }
          ].map((item, i) => (
            <div key={i} className="text-center bg-primary/10 rounded-lg p-6">
              <div className="text-4xl font-bold text-primary mb-2">{item.metric}</div>
              <div className="text-foreground/70">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-foreground mb-8">Preguntas Frecuentes - Turismo</h2>
        <div className="space-y-6">
          {[
            {
              q: '¿Se integra con nuestro PMS (Property Management System)?',
              a: 'Sí. Compatible con Cloudbeds, Opera, Hotelier.Pro. Integración en 1-2 semanas.'
            },
            {
              q: '¿Qué idiomas soportan los chatbots?',
              a: 'Español, inglés, portugués, chino, francés, alemán y más. Personalizable según tus huéspedes.'
            },
            {
              q: '¿Cómo asegura confidencialidad de datos de clientes?',
              a: 'Cumplimos LGPD, GDPR y normativas chilenas. Encriptación end-to-end, auditoría completa.'
            },
            {
              q: '¿Necesitamos reentrenar el sistema frecuentemente?',
              a: 'No. Agentes aprenden de cada interacción. Sistema mejora automáticamente con el tiempo.'
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
        <h2 className="text-3xl font-bold text-foreground mb-4">Eleva la Experiencia de tus Huéspedes</h2>
        <p className="text-foreground/80 mb-6">
          Especialistas en revenue management y experiencia hotelera. Auditoría gratis de tu operación.
        </p>
        <Link
          href="/es/soluciones-agenticas-chile"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-background rounded-lg hover:bg-primary/90 transition-colors font-semibold"
        >
          Agendar Consulta <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      <Footer />
    </main>
  )
}
