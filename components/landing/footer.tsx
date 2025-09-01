"use client"

import { MessageCircle, Mail, MapPin, Clock, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 mb-4 hover:opacity-80 transition-opacity"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="text-xl font-bold">Neuralia</span>
            </button>
            <p className="text-gray-400 mb-6 max-w-md">
              Ayudamos a empresas como la tuya a integrar IA de forma práctica y rentable, sin saber de tecnología.
              Resultados en 2-3 meses.
            </p>

            {/* Key benefits */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center space-x-2 text-gray-400">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-sm">40% menos gastos operativos</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span className="text-sm">ROI asegurado en 2-3 meses</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <div className="w-2 h-2 bg-purple-500 rounded-full" />
                <span className="text-sm">Soporte 24/7</span>
              </div>
            </div>

            {/* Main CTA */}
            <Button asChild className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 mb-4">
              <a
                href="https://wa.me/56940946660?text=¡Hola!%20Quiero%20una%20asesoría%20gratuita%20sobre%20cómo%20Neuralia%20puede%20automatizar%20mi%20empresa%20con%20IA.%20¿Cuándo%20podemos%20conversar?"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Asesoría Gratuita</span>
              </a>
            </Button>

            <div className="flex items-center space-x-2 text-gray-400 mb-2">
              <Clock className="w-4 h-4" />
              <span>Disponible 24/7</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <MapPin className="w-4 h-4" />
              <span>Chile • Rusia • Vietnam • Singapur</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Soluciones</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("features")
                    if (element) element.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="hover:text-white transition-colors text-left"
                >
                  Automatización de Procesos
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("success-cases")
                    if (element) element.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="hover:text-white transition-colors text-left"
                >
                  Sistemas IA Personalizados
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("team")
                    if (element) element.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="hover:text-white transition-colors text-left"
                >
                  Asesoría IA
                </button>
              </li>
              <li>Integración con ERP/CRM</li>
              <li>Chatbots Inteligentes</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <a
                href="https://wa.me/56940946660"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: +56 9 4094 6660</span>
              </a>
              <a
                href="mailto:hello@neuralia.com"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>hello@neuralia.com</span>
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-6 p-4 bg-gray-800 dark:bg-gray-900 rounded-lg">
              <h4 className="font-semibold text-sm mb-2">Resultados Asegurados</h4>
              <ul className="text-xs text-gray-400 space-y-1">
                <li>✅ ROI medible en 2-3 meses</li>
                <li>✅ Asesoría inicial gratuita</li>
                <li>✅ Soporte técnico incluido</li>
                <li>✅ Sin conocimientos técnicos</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 Neuralia. Todos los derechos reservados.</p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="/terminos-de-servicio" className="text-gray-400 hover:text-white text-sm transition-colors">
                Términos de Servicio
              </a>
              <a href="/politicas-de-privacidad" className="text-gray-400 hover:text-white text-sm transition-colors">
                Políticas de Privacidad
              </a>
              <button
                onClick={scrollToTop}
                className="flex items-center space-x-1 text-gray-400 hover:text-white text-sm transition-colors"
              >
                <ArrowUp className="w-4 h-4" />
                <span>Volver arriba</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
