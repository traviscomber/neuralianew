import Link from "next/link"
import { ArrowRight, Zap, Shield, Network, Sparkles, Book } from "lucide-react"
import { Footer } from "@/components/layout/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "N3uralia - Sistemas de Inteligencia Artificial en Producción",
  description:
    "N3uralia diseña y despliega arquitecturas de agentes inteligentes que integran datos, procesos y decisiones en entornos productivos. Sistemas operacionales en el mundo real.",
  keywords:
    "N3uralia, agentes IA, sistemas inteligentes, multi-agent, IA producción, infraestructura IA, automatización, Chile",
  openGraph: {
    title: "N3uralia - Sistemas de IA en Producción",
    description: "Arquitecturas de inteligencia artificial diseñadas para operar en el mundo real",
    type: "website",
    locale: "es_CL",
    url: "https://n3uralia.com",
  },
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center pt-40 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center w-full">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 mb-8 bg-primary/5">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-sm font-medium text-primary">Constructores, No Consultores</span>
          </div>

          <h1 className="h1-light mb-8">
            IA + Full-Stack Engineering
            <br />
            <span className="text-primary/70">que funciona en producción</span>
          </h1>

          <p className="body-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Arquitectura multi-agente especializada, sistemas inteligentes integrados y automatización escalable. Desde desarrollo hasta producción—entregamos código que trabaja.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 w-full">
            <Link
              href="/contact"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
            >
              Comenzar
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/faq"
              className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors text-center"
            >
              Preguntas Frecuentes
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-4 sm:gap-8 border-t border-primary/20 pt-8 sm:pt-12">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">50+</div>
              <p className="text-xs sm:text-sm text-muted-foreground">Empresas en Chile</p>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">99.8%</div>
              <p className="text-xs sm:text-sm text-muted-foreground">Disponibilidad</p>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">24/7</div>
              <p className="text-xs sm:text-sm text-muted-foreground">Soporte Local</p>
            </div>
          </div>
        </div>
      </section>



      {/* What We Build */}
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
