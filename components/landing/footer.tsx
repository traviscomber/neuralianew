import Link from "next/link"
import { MapPin, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Neuralia</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Transformamos la atención al cliente con IA conversacional avanzada. Automatiza, personaliza y escala tu
              servicio al cliente con nuestras soluciones inteligentes.
            </p>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/56940946660?text=¡Hola!%20Quiero%20una%20consultoría%20gratuita%20sobre%20cómo%20Neuralia%20puede%20automatizar%20mi%20atención%20al%20cliente%20con%20IA.%20¿Cuándo%20podemos%20conversar?"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <Phone className="h-5 w-5" />
              Contactar por WhatsApp
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#servicios" className="text-gray-300 hover:text-white transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/#casos-de-uso" className="text-gray-300 hover:text-white transition-colors">
                  Casos de Uso
                </Link>
              </li>
              <li>
                <Link href="/#testimonios" className="text-gray-300 hover:text-white transition-colors">
                  Testimonios
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-gray-300 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <a href="mailto:hello@n3uralia.com" className="text-gray-300 hover:text-white transition-colors">
                  hello@n3uralia.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gray-400" />
                <a
                  href="https://wa.me/56940946660?text=¡Hola!%20Me%20interesa%20implementar%20IA%20conversacional%20en%20mi%20negocio.%20¿Podrían%20contarme%20más%20sobre%20Neuralia?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +56940946660
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-gray-400 mt-1" />
                <div className="text-gray-300">
                  <div>Santiago, Chile</div>
                  <div>Singapore</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">© 2024 Neuralia. Todos los derechos reservados.</div>
          <div className="flex gap-6 text-sm">
            <Link href="/terminos-de-servicio" className="text-gray-400 hover:text-white transition-colors">
              Términos de Servicio
            </Link>
            <Link href="/politicas-de-privacidad" className="text-gray-400 hover:text-white transition-colors">
              Políticas de Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
