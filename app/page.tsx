import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Footer } from "@/components/layout/footer"
import { MultiAgentRoles } from "@/components/landing/multi-agent-roles"
import { HumanContextEngine } from "@/components/landing/human-context-engine"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center pt-40 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center w-full">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 mb-8 bg-primary/5">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-sm font-medium text-primary">IA + Desarrollo</span>
          </div>

          <h1 className="h1-light mb-8">
            Soluciones inteligentes
            <br />
            <span className="text-primary/70">que funcionan</span>
          </h1>

          <p className="body-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Combinamos IA con desarrollo para construir sistemas que automatizan, escalan y crecen con tu negocio.
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
              href="/capabilities"
              className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors text-center"
            >
              Ver Capacidades
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

      {/* Core Capabilities - REPLACED WITH MULTI-AGENT ROLES */}
      <MultiAgentRoles />

      {/* Human Context Engine */}
      <HumanContextEngine />

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
