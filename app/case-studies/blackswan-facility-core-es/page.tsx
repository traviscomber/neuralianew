import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, BarChart3, Zap, Clock, Building2 } from "lucide-react"
import { Footer } from "@/components/layout/footer"

export const metadata: Metadata = {
  title: "Blackswan Facility Core Case Study | N3uralia - Sistema de Gestión Integral",
  description:
    "Cómo Blackswan transformó operaciones fragmentadas en gestión unificada. Email + Sheets + WhatsApp → BFCS integrado. Proyectando 80% ganancia en eficiencia operativa.",
  keywords:
    "blackswan, facility management, gestión de propiedades, lujo, N3uralia, desarrollo fullstack, automatización operativa, case study",
  alternates: {
    canonical: "https://n3uralia.com/es/case-studies/blackswan-facility-core",
    languages: {
      en: "https://n3uralia.com/en/case-studies/blackswan-facility-core",
      "es-CL": "https://n3uralia.com/es/case-studies/blackswan-facility-core",
    },
  },
  openGraph: {
    title: "Blackswan Facility Core: Plataforma Enterprise de Gestión",
    description: "De caos de emails a operaciones unificadas. Gestión integral de propiedades construida en arquitectura N3uralia.",
    type: "article",
    locale: "es_CL",
  },
}

export default function BlackswanCaseStudyES() {
  return (
    <>
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-semibold">
                Facility Management + Fullstack
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Gestión Enterprise Unificada
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Blackswan pasó de sistemas fragmentados a operaciones integradas. Email + Google Sheets + WhatsApp → Plataforma BFCS. Resultados tempranos: 40% ahorro en tiempo operativo.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <div className="px-6 py-3 bg-card border border-border rounded-lg">
                <p className="text-sm text-muted-foreground">Industria</p>
                <p className="font-semibold text-foreground">Propiedades Lujo</p>
              </div>
              <div className="px-6 py-3 bg-card border border-border rounded-lg">
                <p className="text-sm text-muted-foreground">Desarrollo</p>
                <p className="font-semibold text-foreground">60 días</p>
              </div>
              <div className="px-6 py-3 bg-card border border-border rounded-lg">
                <p className="text-sm text-muted-foreground">Estado</p>
                <p className="font-semibold text-foreground">Live + Creciendo</p>
              </div>
            </div>

            <Link
              href="/es/case-studies"
              className="text-primary hover:underline font-semibold flex items-center gap-2"
            >
              ← Volver a Case Studies
            </Link>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="py-16 px-4 border-b border-border">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">El Desafío</h2>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Blackswan gestiona propiedades de lujo en múltiples ubicaciones. Antes de BFCS, las operaciones estaban fragmentadas entre 4+ sistemas: Email para consultas, Google Sheets para disponibilidad, WhatsApp para comunicación con huéspedes, herramientas separadas para mantenimiento y facturación.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="p-6 bg-card border border-border rounded-lg">
                  <Clock className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">200+ Horas/Mes</h3>
                  <p className="text-muted-foreground text-sm">
                    El staff invertía tiempo en entrada de datos duplicada, coordinación manual y cambio de contexto
                  </p>
                </div>
                <div className="p-6 bg-card border border-border rounded-lg">
                  <Building2 className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Múltiples Propiedades</h3>
                  <p className="text-muted-foreground text-sm">
                    Gestionar 8+ propiedades con sistemas desconectados = sin visión unificada
                  </p>
                </div>
                <div className="p-6 bg-card border border-border rounded-lg">
                  <Zap className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Respuesta Lenta</h3>
                  <p className="text-muted-foreground text-sm">
                    Consultas de huéspedes tardaban 4-8 horas. Retrasos = pérdida de revenue
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-16 px-4 bg-muted/30 border-b border-border">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">La Solución</h2>

            <div className="mb-8">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                N3uralia construyó Blackswan Facility Core (BFCS) desde cero: plataforma unificada que combina gestión de consultas, coordinación de disponibilidad, comunicación con huéspedes, seguimiento de mantenimiento y facturación. Una única fuente de verdad. Todos los sistemas conectados.
              </p>

              <div className="bg-card border border-border rounded-lg p-8 mb-8">
                <h3 className="font-semibold text-foreground mb-6">Arquitectura Técnica</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="font-bold text-primary text-lg">1</span>
                    <div>
                      <p className="font-semibold text-foreground">Base de Datos Unificada</p>
                      <p className="text-sm text-muted-foreground">Fuente única de verdad: propiedades, huéspedes, reservas, staff, transacciones</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="font-bold text-primary text-lg">2</span>
                    <div>
                      <p className="font-semibold text-foreground">Motor de Consultas y Reservas</p>
                      <p className="text-sm text-muted-foreground">Enrutamiento automático: emails → BFCS → workflow staff. Disponibilidad sincronizada en tiempo real.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="font-bold text-primary text-lg">3</span>
                    <div>
                      <p className="font-semibold text-foreground">Hub de Comunicación</p>
                      <p className="text-sm text-muted-foreground">WhatsApp + Email unificados. Un único lugar para gestionar todos los touchpoints con huéspedes.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="font-bold text-primary text-lg">4</span>
                    <div>
                      <p className="font-semibold text-foreground">Dashboard de Operaciones</p>
                      <p className="text-sm text-muted-foreground">Vista en tiempo real de todas las propiedades: ocupancy, mantenimiento, asignación de staff, revenue.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="font-bold text-primary text-lg">5</span>
                    <div>
                      <p className="font-semibold text-foreground">Orquestación Agentica</p>
                      <p className="text-sm text-muted-foreground">Los agentes N3uralia manejan tareas rutinarias: recordatorios, solicitudes de mantenimiento, ciclos de facturación.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-primary/50 rounded-lg p-6">
                <p className="text-sm text-muted-foreground mb-2">Tech Stack</p>
                <p className="font-mono text-sm text-foreground">
                  React Frontend → Node.js/Express Backend → PostgreSQL DB → Orquestación N3uralia → Integraciones Multi-canal
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-16 px-4 border-b border-border">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Impacto y Resultados Tempranos</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="p-6 bg-primary/10 rounded-lg border border-primary/30">
                <Clock className="w-8 h-8 text-primary mb-4" />
                <p className="text-sm text-muted-foreground mb-2">Eficiencia Operativa</p>
                <p className="text-2xl font-bold text-foreground">-40%</p>
                <p className="text-xs text-muted-foreground mt-2">Tiempo en coordinación manual (medición temprana)</p>
              </div>
              <div className="p-6 bg-primary/10 rounded-lg border border-primary/30">
                <Zap className="w-8 h-8 text-primary mb-4" />
                <p className="text-sm text-muted-foreground mb-2">Tiempo de Respuesta</p>
                <p className="text-2xl font-bold text-foreground">4h → 15min</p>
                <p className="text-xs text-muted-foreground mt-2">Consulta a respuesta reducido</p>
              </div>
              <div className="p-6 bg-primary/10 rounded-lg border border-primary/30">
                <BarChart3 className="w-8 h-8 text-primary mb-4" />
                <p className="text-sm text-muted-foreground mb-2">Precisión de Datos</p>
                <p className="text-2xl font-bold text-foreground">99.9%</p>
                <p className="text-xs text-muted-foreground mt-2">Fuente única de verdad elimina errores</p>
              </div>
            </div>

            <div className="bg-muted/30 p-8 rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-4">Impacto Proyectado (3-6 meses)</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-foreground"><strong>80% ahorro operativo:</strong> menos tareas manuales, más automatización</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-foreground"><strong>3x más rápido booking:</strong> de consulta a confirmación en minutos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-foreground"><strong>Aumento de revenue:</strong> respuestas más rápidas + mejor disponibilidad = más reservas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-foreground"><strong>Escalabilidad:</strong> 8 propiedades hoy, 20+ propiedades mañana con el mismo equipo</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Key Learnings */}
        <section className="py-16 px-4 border-b border-border">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Lecciones Clave</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground text-lg mb-3">1. Fragmentación = Costo Oculto</h3>
                <p className="text-muted-foreground">
                  Blackswan no había cuantificado el tiempo desperdiciado en cambio de contexto y entrada de datos duplicada. Un sistema unificado expuso las ineficiencias y las eliminó automáticamente.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground text-lg mb-3">2. Construir vs. Remendar: Diferencia Estratégica</h3>
                <p className="text-muted-foreground">
                  En lugar de conectar 4 herramientas separadas (cada una con limitaciones), N3uralia construyó BFCS como sistema cohesivo. Permitió características inteligentes (automatización agentica) que no funcionarían en plataformas fragmentadas.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground text-lg mb-3">3. Los Agentes Permiten Escala sin Crecimiento</h3>
                <p className="text-muted-foreground">
                  Antes de BFCS, gestionar 8 propiedades requería 2-3 staff. Con agentes manejando tareas rutinarias (recordatorios, check-in, facturación), Blackswan puede escalar a 15+ propiedades con el mismo equipo.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground text-lg mb-3">4. Sistema Live = Mejora Continua</h3>
                <p className="text-muted-foreground">
                  BFCS está live y creciendo. Cada reserva, cada interacción con huéspedes, cada operación alimenta el sistema. Los agentes N3uralia aprenden qué funciona y optimizan continuamente.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specs */}
        <section className="py-16 px-4 bg-muted/30 border-b border-border">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Especificaciones Técnicas</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-card border border-border rounded-lg">
                <h3 className="font-semibold text-foreground mb-4">Módulos Core</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Hub de Gestión de Propiedades</li>
                  <li>✓ Motor de Reservas y Consultas</li>
                  <li>✓ Comunicación (WhatsApp + Email)</li>
                  <li>✓ Seguimiento de Mantenimiento</li>
                  <li>✓ Facturación y Revenue</li>
                  <li>✓ Programación y Tareas de Staff</li>
                </ul>
              </div>

              <div className="p-6 bg-card border border-border rounded-lg">
                <h3 className="font-semibold text-foreground mb-4">Infraestructura</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Uptime: 99.9%</li>
                  <li>✓ Tiempo de respuesta: &lt;200ms</li>
                  <li>✓ Usuarios concurrentes: 50+</li>
                  <li>✓ Backup de datos: horario</li>
                  <li>✓ Monitoreo: alertas en tiempo real</li>
                  <li>✓ Escalabilidad: escalada horizontal</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">¿Enfrentas Caos Operativo Similar?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Múltiples sistemas, coordinación manual, tiempo desperdiciado. N3uralia construye plataformas unificadas que escalan contigo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/es/contact"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-2"
              >
                Inicia Tu Proyecto <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/es/capabilities"
                className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
              >
                Explorar Capacidades
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
