import { HeroSection } from "@/components/landing/hero-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { UseCasesSection } from "@/components/landing/use-cases-section"
import { FAQSection } from "@/components/landing/faq-section"
import { Footer } from "@/components/landing/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Zap, Users, BarChart3, MessageSquare, CheckCircle, Sparkles } from "lucide-react"

function ReadyToDeploySection() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <Sparkles className="w-4 h-4 mr-2" />
            Listo para Implementar
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            ¿Listo para Desplegar tu{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Ejecutivo IA
            </span>
            ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Únete a más de 10,000 empresas que ya están transformando sus operaciones con agentes IA personalizados
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <CardTitle className="text-blue-800">Implementación Rápida</CardTitle>
                  <p className="text-sm text-blue-600">En menos de 48 horas</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  <span className="text-sm">Configuración automática</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  <span className="text-sm">Integración con sistemas existentes</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  <span className="text-sm">Capacitación incluida</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  <span className="text-sm">Soporte 24/7</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <CardTitle className="text-green-800">Escalabilidad Total</CardTitle>
                  <p className="text-sm text-green-600">Crece con tu empresa</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Múltiples agentes IA</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Personalización avanzada</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">APIs y webhooks</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Análisis en tiempo real</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-indigo-50">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <BarChart3 className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <CardTitle className="text-purple-800">ROI Garantizado</CardTitle>
                  <p className="text-sm text-purple-600">Resultados medibles</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                  <span className="text-sm">Reducción 60% costos operativos</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                  <span className="text-sm">Aumento 40% productividad</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                  <span className="text-sm">Mejora 85% satisfacción cliente</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                  <span className="text-sm">Métricas en tiempo real</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="text-center space-y-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Comienza tu Transformación Digital Hoy</h3>
            <p className="text-gray-600 mb-6">
              Más de 500 empresas ya están usando nuestros ejecutivos IA para automatizar procesos, mejorar la
              experiencia del cliente y acelerar el crecimiento
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">48h</div>
                <div className="text-sm text-gray-600">Tiempo de implementación</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
                <div className="text-sm text-gray-600">Uptime garantizado</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-sm text-gray-600">Soporte técnico</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Comenzar Ahora
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="border-2 bg-transparent">
                Agendar Demo Personalizada
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-sm text-gray-500">Empresas que confían en nosotros:</div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-200 rounded"></div>
              <span className="text-sm font-medium text-gray-600">Banco de Chile</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-200 rounded"></div>
              <span className="text-sm font-medium text-gray-600">Falabella</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-200 rounded"></div>
              <span className="text-sm font-medium text-gray-600">LATAM Airlines</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-200 rounded"></div>
              <span className="text-sm font-medium text-gray-600">Entel</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <HeroSection />
      <FeaturesSection />
      <UseCasesSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </main>
  )
}
