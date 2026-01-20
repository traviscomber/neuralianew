import Link from "next/link"
import { ArrowRight } from "lucide-react"

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

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-tight">
            Soluciones inteligentes
            <br />
            <span className="text-primary/70">que funcionan</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
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

      {/* Core Capabilities */}
      <section className="bg-background py-16 sm:py-24 border-t border-border px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 sm:mb-6">Qué construimos</h2>
            <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              IA + Desarrollo. Arquitectura robusta. Resultados reales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                title: "Agentes Inteligentes",
                desc: "Bots que entienden, resuelven y aprenden. Atención al cliente que funciona sola",
              },
              {
                title: "Automatización Inteligente",
                desc: "Procesos que se optimizan solos. Errores menos, velocidad más",
              },
              {
                title: "Plataformas Personalizadas",
                desc: "Desarrollo full-stack con IA integrada. Tu visión hecha realidad",
              },
              {
                title: "Integración Total",
                desc: "Se conecta con lo que tienes. Sin complicaciones, todo fluye",
              },
            ].map((item, i) => (
              <div key={i} className="p-6 sm:p-8 border border-border rounded-lg hover:border-primary/40 transition-colors bg-card">
                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20 bg-background border-t border-border px-4">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-4">Empresas que confían en nosotros</h2>
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
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 sm:mb-6">¿Listo para comenzar?</h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
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

      {/* Footer */}
      <footer className="bg-background text-foreground py-12 border-t border-border px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <p className="font-bold mb-4 text-foreground">N3uralia</p>
              <p className="text-muted-foreground text-sm">Soluciones de IA inteligentes para empresas chilenas</p>
            </div>
            <div>
              <p className="font-bold mb-4 text-foreground">Empresa</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/about" className="hover:text-foreground transition-colors">
                    Acerca de Nosotros
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-foreground transition-colors">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-bold mb-4 text-foreground">Soluciones</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/capabilities" className="hover:text-foreground transition-colors">
                    Capacidades
                  </Link>
                </li>
                <li>
                  <Link href="/outcomes" className="hover:text-foreground transition-colors">
                    Resultados
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-bold mb-4 text-foreground">Contacto</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="mailto:hello@n3uralia.com" className="hover:text-foreground transition-colors">
                    hello@n3uralia.com
                  </a>
                </li>
                <li>
                  <a href="tel:+56993826127" className="hover:text-foreground transition-colors">
                    +56 9 9382 6127
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 N3uralia. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
