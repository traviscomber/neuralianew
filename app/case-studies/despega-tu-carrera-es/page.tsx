import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, BarChart3, Zap, Clock, Users } from "lucide-react"
import { Footer } from "@/components/layout/footer"

export const metadata: Metadata = {
  title: "Despega Tu Carrera - Case Study | N3uralia - Plataforma Full-Stack de Coaching IA",
  description:
    "Caso de éxito: Despega Tu Carrera. N3uralia construyó desde cero plataforma full-stack con tests psicométricos, biblioteca de 120+ libros y coach IA personalizado. 10,000+ usuarios, 50,000+ tests, 95% satisfacción.",
  keywords:
    "despega tu carrera, case study, n3uralia, plataforma coaching, IA coach, desarrollo profesional, fullstack, tests psicométricos, arquitectura completa, Chile",
  alternates: {
    canonical: "https://n3uralia.com/es/case-studies/despega-tu-carrera",
    languages: {
      en: "https://n3uralia.com/en/case-studies/despega-tu-carrera",
      "es-CL": "https://n3uralia.com/es/case-studies/despega-tu-carrera",
    },
  },
  openGraph: {
    title: "Despega Tu Carrera: Plataforma de Coaching Profesional Full-Stack",
    description: "Idea → Arquitectura → Producción: 10,000+ usuarios transformando carreras",
    type: "article",
    locale: "es_CL",
  },
}

export default function DespegatucarreraEsCaseStudy() {
  return (
    <>
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-semibold">
                Educación + Full-Stack
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Plataforma de Coaching Profesional desde Cero
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              De una idea a 10,000+ usuarios. N3uralia diseñó, desarrolló e implementó una plataforma full-stack de desarrollo profesional con tests, biblioteca de 120+ libros y coach IA personalizado.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <div className="px-6 py-3 bg-card border border-border rounded-lg">
                <p className="text-sm text-muted-foreground">Industria</p>
                <p className="font-semibold text-foreground">Educación / Coaching</p>
              </div>
              <div className="px-6 py-3 bg-card border border-border rounded-lg">
                <p className="text-sm text-muted-foreground">Alcance</p>
                <p className="font-semibold text-foreground">Idea → Producción</p>
              </div>
              <div className="px-6 py-3 bg-card border border-border rounded-lg">
                <p className="text-sm text-muted-foreground">Estado</p>
                <p className="font-semibold text-foreground">En Producción 24/7</p>
              </div>
              <div className="px-6 py-3 bg-card border border-border rounded-lg">
                <p className="text-sm text-muted-foreground">Impacto</p>
                <p className="font-semibold text-foreground">Desarrollo Fullstack</p>
              </div>
            </div>

            {/* Métricas Clave */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 rounded-lg bg-card border border-border text-center">
                <p className="text-3xl font-bold text-primary">10,000+</p>
                <p className="text-sm text-muted-foreground mt-2">Usuarios Activos</p>
              </div>
              <div className="p-4 rounded-lg bg-card border border-border text-center">
                <p className="text-3xl font-bold text-primary">50,000+</p>
                <p className="text-sm text-muted-foreground mt-2">Tests Completados</p>
              </div>
              <div className="p-4 rounded-lg bg-card border border-border text-center">
                <p className="text-3xl font-bold text-primary">95%</p>
                <p className="text-sm text-muted-foreground mt-2">Satisfacción</p>
              </div>
              <div className="p-4 rounded-lg bg-card border border-border text-center">
                <p className="text-3xl font-bold text-primary">100%</p>
                <p className="text-sm text-muted-foreground mt-2">Full-Stack</p>
              </div>
            </div>
          </div>
        </section>

        {/* Desafío */}
        <section className="py-16 px-4 border-b border-border">
          <div className="max-w-4xl mx-auto">
            <h2 className="h2-light mb-8">El Desafío: Idea sin Infraestructura</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 rounded-lg bg-muted/50 border border-border">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="text-red-500">✗</span> Estado Inicial
                </h3>
                <ul className="space-y-3 text-muted-foreground text-sm">
                  <li>• Sin plataforma existente</li>
                  <li>• Sin backend</li>
                  <li>• Sin base de datos</li>
                  <li>• Sin infraestructura</li>
                  <li>• Solo una visión clara</li>
                </ul>
              </div>
              <div className="p-6 rounded-lg bg-muted/50 border border-border">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="text-green-500">✓</span> Necesidad
                </h3>
                <ul className="space-y-3 text-muted-foreground text-sm">
                  <li>• Tests psicométricos científicos</li>
                  <li>• Biblioteca de recursos profesionales</li>
                  <li>• Coach IA personalizado 24/7</li>
                  <li>• Escalabilidad para miles</li>
                  <li>• Stack moderno</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Arquitectura */}
        <section className="py-16 px-4 border-b border-border bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="h2-light mb-12">Solución: Arquitectura Full-Stack Completa</h2>
            
            <div className="space-y-6">
              {/* Frontend */}
              <div className="p-6 rounded-lg border border-border bg-card">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/20 text-primary font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-2">Frontend - Interfaz Moderna</h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      Aplicación React construida para experiencia fluida. Tests interactivos, visualización de perfiles, acceso a biblioteca, interfaz de chat con coach IA.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">React</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">TypeScript</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Responsive</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Backend */}
              <div className="p-6 rounded-lg border border-border bg-card">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/20 text-primary font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-2">Backend - Motor de Procesamiento</h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      API robusta que procesa tests, gestiona usuarios, orquesta llamadas al coach IA, integra con OpenAI GPT-4, maneja autenticación y autorización.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Node.js</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">API REST</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Auth</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Database */}
              <div className="p-6 rounded-lg border border-border bg-card">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/20 text-primary font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-2">Base de Datos - Persistencia</h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      Schema diseñado para almacenar perfiles, resultados de tests, historial de sesiones, contexto del coach IA, biblioteca indexada.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">PostgreSQL</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Supabase</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Vectorial</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tests Engine */}
              <div className="p-6 rounded-lg border border-border bg-card">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/20 text-primary font-bold">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-2">Motor de Tests Psicométricos</h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      6 evaluaciones científicas: Despega Cerebral, Mapa de Personalidad, 5 Dimensiones, Brújula Vocacional, IE, Competencias. Scoring automático + interpretación.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Algoritmos</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Validación</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Scoring</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Coach IA */}
              <div className="p-6 rounded-lg border border-border bg-card">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/20 text-primary font-bold">
                    5
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-2">Coach IA Personalizado</h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      GPT-4 entrenado con 120+ libros, adaptado a perfil psicométrico. Responde 24/7, da recomendaciones contextualizadas, recomienda recursos.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">OpenAI GPT-4</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">RAG</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Context-Aware</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Infraestructura */}
              <div className="p-6 rounded-lg border border-border bg-card">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/20 text-primary font-bold">
                    6
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-2">Infraestructura - Cloud Escalable</h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      Deploy en Vercel, cloud backend, Supabase. Monitoreo 24/7, alertas automáticas, CI/CD pipeline, backups diarios.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Vercel</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">CI/CD</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">24/7 SLA</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Flujo */}
        <section className="py-16 px-4 border-b border-border">
          <div className="max-w-4xl mx-auto">
            <h2 className="h2-light mb-12">Flujo: De Idea a Usuario</h2>
            
            <div className="space-y-4">
              <div className="p-6 rounded-lg bg-primary/5 border border-primary/20">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-sm">1</div>
                  <div>
                    <h3 className="font-semibold text-foreground">Usuario accede a la plataforma</h3>
                    <p className="text-sm text-muted-foreground mt-1">Frontend carga, sin requerir login para empezar</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg bg-primary/5 border border-primary/20">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-sm">2</div>
                  <div>
                    <h3 className="font-semibold text-foreground">Realiza tests psicométricos</h3>
                    <p className="text-sm text-muted-foreground mt-1">Backend procesa respuestas, aplica algoritmos de scoring, almacena en BD</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg bg-primary/5 border border-primary/20">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-sm">3</div>
                  <div>
                    <h3 className="font-semibold text-foreground">Sistema genera perfil psicométrico</h3>
                    <p className="text-sm text-muted-foreground mt-1">6 evaluaciones → Perfil 360° único del usuario</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg bg-primary/5 border border-primary/20">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-sm">4</div>
                  <div>
                    <h3 className="font-semibold text-foreground">Accede a biblioteca personalizada</h3>
                    <p className="text-sm text-muted-foreground mt-1">120+ libros recomendados según perfil</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg bg-primary/5 border border-primary/20">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-sm">5</div>
                  <div>
                    <h3 className="font-semibold text-foreground">Coach IA disponible 24/7</h3>
                    <p className="text-sm text-muted-foreground mt-1">GPT-4 personalizado → respuestas contextuales, recomendaciones</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg bg-primary/5 border border-primary/20">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-sm">6</div>
                  <div>
                    <h3 className="font-semibold text-foreground">Sistema aprende y mejora</h3>
                    <p className="text-sm text-muted-foreground mt-1">Feedback → Mejor perfil, coach, recomendaciones</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resultados */}
        <section className="py-16 px-4 border-b border-border bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="h2-light mb-12">Resultados Medibles</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="p-8 rounded-lg border border-border bg-card">
                <BarChart3 className="w-8 h-8 text-primary mb-4" />
                <p className="text-sm text-muted-foreground mb-2">Usuarios Activos</p>
                <p className="text-4xl font-bold text-foreground">10,000+</p>
                <p className="text-sm text-muted-foreground mt-2">En menos de 1 año</p>
              </div>

              <div className="p-8 rounded-lg border border-border bg-card">
                <Users className="w-8 h-8 text-primary mb-4" />
                <p className="text-sm text-muted-foreground mb-2">Tests Completados</p>
                <p className="text-4xl font-bold text-foreground">50,000+</p>
                <p className="text-sm text-muted-foreground mt-2">Promedio 5 tests/usuario</p>
              </div>

              <div className="p-8 rounded-lg border border-border bg-card">
                <Zap className="w-8 h-8 text-primary mb-4" />
                <p className="text-sm text-muted-foreground mb-2">Satisfacción</p>
                <p className="text-4xl font-bold text-foreground">95%</p>
                <p className="text-sm text-muted-foreground mt-2">NPS alto, buena retención</p>
              </div>

              <div className="p-8 rounded-lg border border-border bg-card">
                <Clock className="w-8 h-8 text-primary mb-4" />
                <p className="text-sm text-muted-foreground mb-2">Disponibilidad</p>
                <p className="text-4xl font-bold text-foreground">99.9%</p>
                <p className="text-sm text-muted-foreground mt-2">Uptime 24/7</p>
              </div>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card">
              <h3 className="font-semibold text-foreground mb-4">Impacto de N3uralia</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold mt-0.5">✓</span>
                  <span className="text-muted-foreground"><span className="font-semibold text-foreground">Full-Stack desde cero:</span> Diseño, arquitectura, desarrollo, deploy, producción</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold mt-0.5">✓</span>
                  <span className="text-muted-foreground"><span className="font-semibold text-foreground">Escalabilidad:</span> 10,000+ usuarios sin degradación</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold mt-0.5">✓</span>
                  <span className="text-muted-foreground"><span className="font-semibold text-foreground">IA integrada:</span> Coach GPT-4 personalizado</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold mt-0.5">✓</span>
                  <span className="text-muted-foreground"><span className="font-semibold text-foreground">Cero intervención técnica:</span> Autónomo desde día 1</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold mt-0.5">✓</span>
                  <span className="text-muted-foreground"><span className="font-semibold text-foreground">Time-to-market:</span> Acelerado</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Lecciones */}
        <section className="py-16 px-4 border-b border-border">
          <div className="max-w-4xl mx-auto">
            <h2 className="h2-light mb-12">Lecciones Clave</h2>
            
            <div className="space-y-4">
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="font-semibold text-foreground mb-2">1. Full-Stack es Viabilidad</h3>
                <p className="text-sm text-muted-foreground">
                  Una plataforma requiere orquestación perfecta entre todos los componentes. N3uralia diseñó integrado desde el inicio.
                </p>
              </div>

              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="font-semibold text-foreground mb-2">2. Escalabilidad desde el Día 1</h3>
                <p className="text-sm text-muted-foreground">
                  Arquitectura preparada para 10,000+ usuarios desde el inicio: CDN, caching, índices, rate limiting.
                </p>
              </div>

              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="font-semibold text-foreground mb-2">3. IA Personalizada > IA Genérica</h3>
                <p className="text-sm text-muted-foreground">
                  El coach funciona porque está entrenado con contexto del usuario. Personalización es la diferencia.
                </p>
              </div>

              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="font-semibold text-foreground mb-2">4. Infraestructura Transparente</h3>
                <p className="text-sm text-muted-foreground">
                  Usuario solo ve la experiencia. N3uralia orquestó toda la complejidad técnica sin exponerla.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-16 px-4 border-b border-border bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="h2-light mb-8">Stack Técnico</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-foreground mb-4">Frontend</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• React 18</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS</li>
                  <li>• Vercel Deploy</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-4">Backend</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Node.js / Express</li>
                  <li>• API REST</li>
                  <li>• Supabase Auth</li>
                  <li>• OpenAI GPT-4</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-4">Database</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• PostgreSQL (Supabase)</li>
                  <li>• Vector embeddings</li>
                  <li>• Real-time subscriptions</li>
                  <li>• Automated backups</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-4">Infrastructure</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Vercel (CDN)</li>
                  <li>• Cloud storage</li>
                  <li>• Monitoring 24/7</li>
                  <li>• Auto-scaling</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="h2-light mb-6">¿Tienes una idea similar?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              N3uralia construye plataformas full-stack desde cero. Desde arquitectura hasta producción, hacemos toda la complejidad técnica invisible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Cuéntanos tu Idea <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
              >
                Ver Otros Casos
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
