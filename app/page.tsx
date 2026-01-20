import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center pt-20 pb-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 mb-8 bg-primary/5">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-sm font-medium text-primary">Plataforma de IA Empresarial</span>
          </div>

          <h1 className="text-7xl md:text-8xl font-bold tracking-tight mb-8 leading-tight">
            AI Orchestration
            <br />
            <span className="text-primary/70">Simplified</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Conecta agentes inteligentes, automatiza procesos y escala sistemas de IA. Soluciones para empresas chilenas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/contact"
              className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
            >
              Comenzar
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/capabilities"
              className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors"
            >
              Ver Capacidades
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-xl mx-auto border-t border-primary/20 pt-12">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <p className="text-sm text-gray-600">Empresas en Chile</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">99.8%</div>
              <p className="text-sm text-gray-600">Disponibilidad</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <p className="text-sm text-gray-600">Soporte Local</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="bg-white py-24 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">Capacidades Principales</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Soluciones completas para orquestar IA en tu negocio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Conversacional",
                desc: "Interfaces naturales para interacción humana con agentes inteligentes",
              },
              {
                title: "Automatización",
                desc: "Procesos autónomos que escalan sin intervención manual",
              },
              {
                title: "Integración",
                desc: "Conecta sistemas legacy con soluciones de IA modernas",
              },
              {
                title: "Analítica",
                desc: "Insights en tiempo real para tomar decisiones mejores",
              },
            ].map((item, i) => (
              <div key={i} className="p-8 border border-primary/20 rounded-lg hover:border-primary/40 transition-colors">
                <h3 className="text-2xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Empresas que confían en nosotros</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
              <div key={i} className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors">
                <p className="text-gray-700 mb-4 leading-relaxed text-sm">"{item.quote}"</p>
                <div className="pt-4 border-t border-gray-200">
                  <p className="font-semibold text-black text-sm">{item.author}</p>
                  <p className="text-gray-600 text-xs">{item.company}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/outcomes" className="text-sm font-semibold text-black hover:text-gray-600 transition-colors">
              Ver más testimonios →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-black mb-6">¿Listo para comenzar?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Conecta con nuestro equipo técnico para explorar soluciones personalizadas
          </p>
          <Link
            href="/contact"
            className="inline-flex px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors gap-2"
          >
            Contactar Equipo
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <p className="font-bold mb-4">N3uralia</p>
              <p className="text-slate-300 text-sm">Soluciones de IA inteligentes para empresas chilenas</p>
            </div>
            <div>
              <p className="font-bold mb-4">Empresa</p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    Acerca de Nosotros
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-bold mb-4">Soluciones</p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>
                  <Link href="/capabilities" className="hover:text-white transition-colors">
                    Capacidades
                  </Link>
                </li>
                <li>
                  <Link href="/outcomes" className="hover:text-white transition-colors">
                    Resultados
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-bold mb-4">Contacto</p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>
                  <a href="mailto:hello@n3uralia.com" className="hover:text-white transition-colors">
                    hello@n3uralia.com
                  </a>
                </li>
                <li>
                  <a href="tel:+56993826127" className="hover:text-white transition-colors">
                    +56 9 9382 6127
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
            <p>© 2024 N3uralia. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
