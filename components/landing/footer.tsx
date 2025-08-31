import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Bot, Sparkles } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Bot className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">Neuralia</span>
              <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <Sparkles className="h-3 w-3 mr-1" />
                IA Platform
              </Badge>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Transformamos negocios con agentes de inteligencia artificial que automatizan procesos, mejoran la
              experiencia del cliente y aceleran el crecimiento empresarial.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="h-4 w-4 text-blue-400" />
                <span>contacto@neuralia.ai</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="h-4 w-4 text-blue-400" />
                <span>+56 9 1234 5678</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span>Santiago, Chile</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Productos</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  EcosueloLab
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Despega tu Carrera
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  ParrotfyIA
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Agentes Personalizados
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  API & Integraciones
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Recursos</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Documentación
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Tutoriales
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Casos de Estudio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Soporte
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6">
              <p className="text-gray-400 text-sm">© 2024 Neuralia. Todos los derechos reservados.</p>
              <div className="flex items-center gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Términos de Servicio
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
