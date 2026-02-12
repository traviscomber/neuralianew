import Link from "next/link"
import { ArrowRight, Zap, Brain, Cpu, Shield } from "lucide-react"
import { Footer } from "@/components/layout/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "N3uralia - Tu Idea Merece Existir",
  description:
    "Transforma tu idea en empresa operacional con Living Agents. Desde concepto a negocio en semanas. Sin cofundador técnico. Sin meses de desarrollo.",
  keywords:
    "democratización software, startup builder, idea a empresa, living agents, IA desarrollo, Chile",
  openGraph: {
    title: "Tu Idea Merece Existir - N3uralia",
    description: "Idea → Empresa operacional con Living Agents",
    type: "website",
    locale: "es_CL",
    url: "https://n3uralia.com",
  },
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* HERO - Brutal & Direct */}
      <section className="min-h-screen flex items-center justify-center pt-20 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center w-full">
          <h1 className="text-6xl sm:text-8xl font-bold mb-6 leading-tight text-balance tracking-tight">
            Tu Idea
            <br />
            <span className="text-primary">Merece Existir</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Convertimos conceptos en empresas operacionales con Living Agents. 2-4 semanas. Sin developers caros. Sin VC.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <Link
              href="/ideas-a-empresa"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 text-lg"
            >
              Comenzar
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/living-agents"
              className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors text-lg"
            >
              Ver Agentes
            </Link>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-6 sm:gap-12">
            <div>
              <div className="text-4xl font-bold text-primary">4</div>
              <p className="text-sm text-muted-foreground mt-2">Expertos IA</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary">2-4</div>
              <p className="text-sm text-muted-foreground mt-2">Semanas</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary">10x</div>
              <p className="text-sm text-muted-foreground mt-2">Más Barato</p>
            </div>
          </div>
        </div>
      </section>

      {/* Living Agents - The Team */}
      <section className="py-24 px-4 bg-muted/30 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Tu Equipo de 4</h2>
            <p className="text-lg text-muted-foreground">Especializados pero coordinados. Trabajan 24/7. Sin nómina.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { role: "Detective", title: "El Centinela", desc: "Valida mercado, detecta oportunidades, analiza riesgos" },
              { role: "CEO", title: "El Estratega", desc: "Diseña negocio, pricing, go-to-market, toma decisiones" },
              { role: "CTO", title: "El Arquitecto", desc: "Desarrolla producto, automatiza, escala infraestructura" },
              { role: "COO", title: "El Guardián", desc: "Monitorea métricas, alertas automáticas, optimiza operación" },
            ].map((agent, i) => (
              <div
                key={i}
                className="p-8 rounded-xl border-2 border-primary/20 bg-background hover:border-primary/50 transition-all hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    {i === 0 && <Brain className="w-6 h-6 text-primary" />}
                    {i === 1 && <Zap className="w-6 h-6 text-primary" />}
                    {i === 2 && <Cpu className="w-6 h-6 text-primary" />}
                    {i === 3 && <Shield className="w-6 h-6 text-primary" />}
                  </div>
                  <div className="text-left flex-1">
                    <p className="text-sm font-semibold text-primary mb-1">Tu {agent.role}</p>
                    <h3 className="text-xl font-bold text-foreground mb-2">{agent.title}</h3>
                    <p className="text-sm text-muted-foreground">{agent.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/living-agents"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
            >
              Explora cómo funcionan
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works - Simple Path */}
      <section className="py-24 px-4 bg-background border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground text-center mb-16">De Idea a Empresa</h2>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-4">
            {[
              { num: 1, label: "Validación", desc: "Mercado, viabilidad, oportunidad" },
              { num: 2, label: "Estrategia", desc: "Modelo, pricing, diferenciadores" },
              { num: 3, label: "Construcción", desc: "Producto, infraestructura, APIs" },
              { num: 4, label: "Operación", desc: "Métricas, evolución, crecimiento" },
            ].map((step, i) => (
              <div key={i} className="flex-1">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary">{step.num}</span>
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-2">{step.label}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:flex justify-center mt-6 -mr-4">
                    <ArrowRight className="w-6 h-6 text-primary/30" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">Promedio: 2-4 semanas. Precio: 10x menos que developers.</p>
            <Link
              href="/ideas-a-empresa"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Ver Proceso Completo
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-primary/5 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">¿Tienes una Idea?</h2>
          <p className="text-lg text-muted-foreground mb-10">
            Cuéntanos. Nuestros 4 Living Agents analizarán viabilidad, oportunidad y ruta de ejecución.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 text-lg"
            >
              Hablemos
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/democratizacion"
              className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors text-lg"
            >
              La Misión
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
            {/* Left: The Shift */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-8">De Herramientas a Arquitectura</h2>
              <div className="space-y-4">
                <div className="pb-4 border-b border-border/30">
                  <p className="text-sm font-semibold text-muted-foreground mb-1">Herramientas IA</p>
                  <p className="text-foreground">Responden preguntas aisladas, sin contexto, sin memoria persistente.</p>
                </div>
                <div className="pb-4 border-b border-border/30">
                  <p className="text-sm font-semibold text-muted-foreground mb-1">Sistemas Agenticos</p>
                  <p className="text-foreground">Coordinan especialistas, memoria persistente, autonomía guiada, escalan automáticamente.</p>
                </div>
              </div>
            </div>

            {/* Right: Our Beliefs */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-8">Lo Que Nos Guía</h2>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-primary font-bold text-lg">01</span>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Ingeniería Rigurosa</p>
                    <p className="text-muted-foreground text-sm">Sistemas predecibles, rastreables, gobernados.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold text-lg">02</span>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Expansión Humana</p>
                    <p className="text-muted-foreground text-sm">IA que ampliffica, no reemplaza capacidades.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold text-lg">03</span>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Responsabilidad</p>
                    <p className="text-muted-foreground text-sm">Cada decisión rastreable y auditable.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Offerings - Featured Hero Section */}
      <section className="py-24 bg-background border-t border-border px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-medium text-primary uppercase tracking-wide mb-4 bg-primary/10 px-3 py-1 rounded-full">
              Nuestros Pilares
            </span>
            <h2 className="h2 text-foreground mb-4">Lo Que Construimos</h2>
            <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
              Dos ofertas complementarias que forman la base de N3uralia: arquitectura que funciona en el mundo real, y agentes que evolucionan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Sistemas Agenticos en Producción */}
            <Link href="/studies/production-grade-agentic-systems" className="group">
              <div className="border-2 border-primary rounded-lg p-10 bg-card hover:bg-primary/5 transition-all h-full cursor-pointer">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-8 group-hover:bg-primary/20 transition-colors">
                  <Network className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  Sistemas Agenticos en Producción
                </h3>
                <p className="body text-muted-foreground mb-6 leading-relaxed">
                  Arquitectura multi-agente diseñada para escala. Orquestación, memoria persistente, rastreabilidad completa, auto-reparación. Sistemas que no ceden ante complejidad.
                </p>
                <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                  Explorar <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            {/* Living Agents */}
            <Link href="/living-agents" className="group">
              <div className="border-2 border-primary rounded-lg p-10 bg-card hover:bg-primary/5 transition-all h-full cursor-pointer">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-8 group-hover:bg-primary/20 transition-colors">
                  <Sparkles className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  Living Agents
                </h3>
                <p className="body text-muted-foreground mb-6 leading-relaxed">
                  Agentes con personalidad emergente que evolucionan continuamente. 5 arquetipos únicos que se adaptan, aprenden y mejoran a través de cada interacción.
                </p>
                <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                  Descubrir <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 bg-background border-t border-border px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">¿Listo para Construir Diferente?</h2>
          <p className="body text-muted-foreground mb-10">
            Explora nuestras capacidades técnicas o contacta directamente para ver cómo podemos ayudarte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/capabilities"
              className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors text-center"
            >
              Ver 6 Pilares
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
            >
              Contactar
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* What We Build - Featured Hero Section */}
      <section className="py-24 bg-background border-t border-border px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="h2 text-foreground mb-4">Qué Construimos</h2>
            <p className="body text-muted-foreground">
              No desarrollamos productos aislados. Construimos sistemas de inteligencia que se integran a operaciones existentes y evolucionan con el tiempo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Agentic Systems */}
            <div className="border border-border rounded-lg p-8 bg-card hover:border-primary/40 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Network className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Agentic Systems</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Arquitecturas multi-agente con memoria, orquestación y control. Diseñadas para ejecutar tareas complejas de forma continua.
              </p>
            </div>

            {/* Operational Intelligence */}
            <div className="border border-border rounded-lg p-8 bg-card hover:border-primary/40 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Operational Intelligence</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Sistemas que observan procesos, detectan fricción y activan decisiones automáticas o asistidas.
              </p>
            </div>

            {/* Infrastructure-Level AI */}
            <div className="border border-border rounded-lg p-8 bg-card hover:border-primary/40 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Infrastructure-Level AI</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                IA pensada como capa estructural: segura, auditable y extensible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is N3uralia - Answer-First Section */}
      <section className="py-24 bg-background border-t border-border px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="h2 text-foreground mb-8">¿Qué es N3uralia?</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">N3uralia es una plataforma de IA empresarial para construcción en producción.</h3>
              <p className="body text-muted-foreground">
                No asesoramos. No entregamos reportes. Construimos sistemas vivos que funcionan. Nuestro enfoque combina agentes inteligentes, arquitectura multi-agente y full-stack engineering para empresas que necesitan IA integrada desde el inicio.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-border rounded-lg p-6 bg-card">
                <h4 className="font-semibold text-foreground mb-2">¿Para quién?</h4>
                <p className="text-sm text-muted-foreground">Empresas chilenas que necesitan automatización inteligente, coordinación de sistemas complejos y desarrollo custom con IA integrada.</p>
              </div>
              <div className="border border-border rounded-lg p-6 bg-card">
                <h4 className="font-semibold text-foreground mb-2">¿Qué ofrecemos?</h4>
                <p className="text-sm text-muted-foreground">Agentes en producción, sistemas multi-agente coordinados, Living Agents que evolucionan, y plataformas full-stack con IA desde el cimiento.</p>
              </div>
              <div className="border border-border rounded-lg p-6 bg-card">
                <h4 className="font-semibold text-foreground mb-2">¿Cómo?</h4>
                <p className="text-sm text-muted-foreground">Combinamos arquitectura robusta, desarrollo agile, IA de próxima generación y expertise en sistemas complejos. Entregamos, no prometemos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Studies Section Teaser */}
      <section className="py-16 sm:py-24 bg-primary/5 border-t border-primary/20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 mb-8 bg-primary/10">
            <Book className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Base de Conocimiento</span>
          </div>

          <h2 className="h2 text-foreground mb-4">
            Fundamentos de Sistemas Inteligentes
          </h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Comprende los conceptos que potencian N3uralia (Neuralia): Agentic AI, AI Memory, Context Engineering y World Engine.
            Contenido diseñado para AI engines y desarrolladores.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { title: "Agentic AI", slug: "/studies/agentic-ai" },
              { title: "AI Memory", slug: "/studies/ai-memory" },
              { title: "Context Eng.", slug: "/studies/context-engineering" },
              { title: "World Engine", slug: "/studies/world-engine" },
            ].map((concept) => (
              <Link
                key={concept.slug}
                href={concept.slug}
                className="p-4 border border-primary/30 rounded-lg hover:border-primary/60 hover:bg-primary/10 transition-all bg-background"
              >
                <p className="text-sm font-medium text-primary">{concept.title}</p>
              </Link>
            ))}
          </div>

          <Link
            href="/studies"
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
          >
            Explorar Todos los Estudios
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Audience Segmentation Section */}
      <section className="py-24 bg-primary/5 border-t border-primary/20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="h2 text-foreground mb-4">Soluciones por Rol</h2>
            <p className="body text-muted-foreground">
              Cada equipo necesita diferentes capacidades. Aquí encontrarás la solución específica para tu rol.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* CTOs & Tech Leaders */}
            <Link href="/soluciones/empresas-grandes" className="group">
              <div className="border border-border rounded-lg p-8 bg-background hover:border-primary/60 hover:bg-primary/5 transition-all h-full cursor-pointer">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">CTOs & VP Ingeniería</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  Infraestructura de IA auditable, integración con sistemas legacy, orquestación de agentes, governance built-in.
                </p>
                <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                  Explorar <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>

            {/* Founders & CEOs */}
            <Link href="/soluciones/startups" className="group">
              <div className="border border-border rounded-lg p-8 bg-background hover:border-primary/60 hover:bg-primary/5 transition-all h-full cursor-pointer">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Founders & CEOs</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  Automatización desde cero, agentes que escalan, Living Agents que aprenden, time-to-market acelerado.
                </p>
                <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                  Explorar <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>

            {/* Operations Leaders */}
            <Link href="/soluciones/operaciones" className="group">
              <div className="border border-border rounded-lg p-8 bg-background hover:border-primary/60 hover:bg-primary/5 transition-all h-full cursor-pointer">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">COOs & Directores Ops</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  Automatización de procesos, eficiencia operativa, reducción de costos, decisiones en tiempo real.
                </p>
                <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                  Explorar <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-24 bg-card border-t border-border px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="h2 text-foreground mb-4">Casos de Uso</h2>
            <p className="body text-muted-foreground">
              Cada implementación se diseña según el contexto operativo del cliente. No existen plantillas universales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Operaciones y Logística",
              "Gestión Documental y Compliance",
              "Energía y Eficiencia Operativa",
              "Construcción y Activos Físicos",
              "Agricultura y Monitoreo",
              "Educación y Conocimiento Institucional",
            ].map((useCase) => (
              <div key={useCase} className="border border-border/50 rounded-lg p-6 bg-background hover:border-primary/40 transition-colors">
                <p className="font-medium text-foreground">{useCase}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 bg-background border-t border-border px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="h2 text-foreground mb-4">Nuestro Enfoque</h2>
            <p className="body text-muted-foreground mb-8">
              No entregamos "proyectos cerrados". Desplegamos sistemas vivos.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "Análisis de procesos reales, no supuestos",
                description: "Entramos a entender operaciones concretas, no interpretaciones.",
              },
              {
                title: "Integración con sistemas existentes",
                description: "La IA se conecta a tu infraestructura actual. Sin reemplazos forzados.",
              },
              {
                title: "Desarrollo incremental en producción",
                description: "Los sistemas evolucionan en tiempo real. Medibles desde el inicio.",
              },
              {
                title: "Medición continua de impacto",
                description: "Cada decisión del agente se registra. Trazabilidad total.",
              },
              {
                title: "Evolución del sistema, no entrega final",
                description: "El sistema aprende. Se adapta. Mejora continuamente.",
              },
            ].map((item, index) => (
              <div key={index} className="border border-border/50 rounded-lg p-6 bg-card hover:border-primary/40 transition-colors">
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-24 bg-card border-t border-border px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="h2 text-foreground mb-4">Experiencia en Entornos Reales</h2>
          <p className="body text-muted-foreground mb-12">
            Hemos desplegado sistemas en:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              "Empresas Medianas y Grandes",
              "Instituciones",
              "Entornos Regulados",
              "Sistemas Críticos",
            ].map((item) => (
              <div key={item} className="border border-border/50 rounded-lg p-6 bg-background">
                <p className="font-medium text-foreground text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20 bg-background border-t border-border px-4">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="h2 text-foreground mb-4">Empresas que confían en nosotros</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {[
              {
                quote: "El sistema optimizó nuestros procesos de consultoría ambiental. El análisis automatizado nos ahorra horas diarias.",
                author: "Sebastian Puelma",
                company: "Ecosuelolab",
              },
              {
                quote: "El asistente de IA inmobiliaria nos ayuda a conectar propiedades con clientes más efectivamente.",
                author: "Juan Navarro",
                company: "Sur-Realista",
              },
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-6 hover:border-primary/40 transition-colors">
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{'"' + item.quote + '"'}</p>
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold text-foreground text-sm">{item.author}</p>
                  <p className="text-muted-foreground text-xs">{item.company}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/outcomes" className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
              Ver más testimonios →
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-24 bg-background border-t border-border px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="h2 text-foreground mb-4">Insights & Recursos</h2>
            <p className="body text-muted-foreground">
              Guías técnicas, mejores prácticas y casos de estudio sobre IA en producción.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              {
                title: "Orquestación de Agentes en Producción",
                excerpt: "Cómo coordinar múltiples agentes IA en entornos empresariales con governance total.",
                category: "Técnico",
                link: "/blog/orquestacion-agentes-produccion"
              },
              {
                title: "Living Agents: IA que Aprende",
                excerpt: "Sistemas que evolucionan con cada interacción. Arquitectura, implementación y resultados.",
                category: "Innovación",
                link: "/blog/living-agents-ia-que-aprende"
              },
              {
                title: "Integración IA con Legacy Systems",
                excerpt: "Estrategias para modernizar sin disrupciones. Patrones probados en producción.",
                category: "Caso de Estudio",
                link: "/blog/integracion-ia-legacy-systems"
              },
            ].map((post) => (
              <Link key={post.link} href={post.link} className="group">
                <div className="border border-border rounded-lg p-6 bg-card hover:border-primary/60 hover:bg-primary/5 transition-all h-full cursor-pointer">
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/10 mb-4">
                    <span className="text-xs font-semibold text-primary">{post.category}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                    Leer <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
            >
              Ver Todos los Artículos
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-background border-t border-border px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="h2 text-foreground mb-6">¿Tu operación puede ser asistida o ejecutada por inteligencia artificial?</h2>
          <p className="body text-muted-foreground mb-8">
            Si la respuesta no es clara, conversemos.
          </p>
          <Link
            href="/contact"
            className="inline-flex px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors gap-2"
          >
            Iniciar Conversación
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-16 sm:py-20 bg-card border-t border-border px-4">
        <div className="container mx-auto text-center">
          <h2 className="h1-light mb-4 sm:mb-6">¿Listo para comenzar?</h2>
          <p className="body-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Conecta con nuestro equipo técnico para explorar soluciones personalizadas
          </p>
          <Link
            href="/contact"
            className="inline-flex px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors gap-2"
          >
            Contactar Equipo
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
