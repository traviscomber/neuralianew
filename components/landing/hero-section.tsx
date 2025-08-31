import { Button } from "@/components/ui/button"
import { ArrowRight, Bot, Zap, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 sm:py-32">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              <Sparkles className="inline h-4 w-4 mr-2" />
              Revoluciona tu negocio con IA{" "}
              <a href="#features" className="font-semibold text-blue-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Descubre más <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Agentes de IA que{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              transforman
            </span>{" "}
            tu empresa
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Crea agentes inteligentes personalizados que automatizan procesos, mejoran la experiencia del cliente y
            aceleran el crecimiento de tu negocio con la plataforma Neuralia.
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              <Bot className="mr-2 h-4 w-4" />
              Crear mi agente
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              <Zap className="mr-2 h-4 w-4" />
              Ver demo
            </Button>
          </div>
        </div>

        <div className="mt-16 flow-root sm:mt-24">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="rounded-lg bg-white/60 backdrop-blur-sm p-6 text-center shadow-sm">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                <Zap className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Implementación Rápida</h3>
              <p className="mt-2 text-sm text-gray-600">
                Despliega tu agente IA en menos de 48 horas con nuestra plataforma intuitiva
              </p>
            </div>

            <div className="rounded-lg bg-white/60 backdrop-blur-sm p-6 text-center shadow-sm">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                <Bot className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Escalabilidad Total</h3>
              <p className="mt-2 text-sm text-gray-600">
                Crece sin límites con nuestra infraestructura cloud nativa y auto-escalable
              </p>
            </div>

            <div className="rounded-lg bg-white/60 backdrop-blur-sm p-6 text-center shadow-sm">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                <Sparkles className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">IA Avanzada</h3>
              <p className="mt-2 text-sm text-gray-600">Potenciado por los modelos de IA más avanzados del mercado</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
