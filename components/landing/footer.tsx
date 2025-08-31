"use client"

import { Brain, MessageCircle, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Neuralia</h3>
                <p className="text-sm text-gray-400">Vibe Coding</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Transformamos tu negocio con inteligencia artificial conversacional. Crea agentes inteligentes que
              revolucionen la experiencia de tus clientes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/56940946660"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                +56 9 4094 6660
              </a>
              <a
                href="mailto:contacto@neuralia.cl"
                className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Mail className="w-5 h-5" />
                contacto@neuralia.cl
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-300 hover:text-white transition-colors">
                  Características
                </a>
              </li>
              <li>
                <a href="#success-cases" className="text-gray-300 hover:text-white transition-colors">
                  Casos de Éxito
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">
                  Testimonios
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Santiago, Chile</span>
              </div>
              <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white">
                <a
                  href="https://wa.me/56940946660?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20Neuralia"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Contactar por WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 Neuralia - Vibe Coding. Todos los derechos reservados.</p>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Términos de Servicio
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Política de Privacidad
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
