"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer id="footer" className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image src="/n3uralia-logo-new.png" alt="N3uralia" width={120} height={40} className="h-8 w-auto" />
              <Badge className="bg-green-500/20 text-green-400 border-green-500/30 animate-pulse">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-ping" />
                Soporte 24/7 Activo
              </Badge>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Transformamos tu negocio con soluciones completas de inteligencia artificial. Desarrollo full stack,
              agentes IA y automatización empresarial.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">🧠 IA Avanzada</Badge>
              <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">⚡ Tiempo Real</Badge>
              <Badge className="bg-green-500/20 text-green-400 border-green-500/30">🛡️ Seguridad Total</Badge>
              <Badge className="bg-pink-500/20 text-pink-400 border-pink-500/30">👥 Equipo Global</Badge>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contacto</h3>
            <div className="space-y-3">
              <Link
                href="mailto:hello@n3uralia.com"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group"
              >
                <Mail className="w-4 h-4 group-hover:text-blue-400" />
                <span>hello@n3uralia.com</span>
              </Link>
              <Link
                href="tel:+56912345678"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group"
              >
                <Phone className="w-4 h-4 group-hover:text-green-400" />
                <span>+56 9 1234 5678</span>
              </Link>
              <div className="pt-2">
                <Link
                  href="https://wa.me/56912345678?text=Hola%20N3uralia,%20quiero%20implementar%20IA%20en%20mi%20empresa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Contactar por WhatsApp
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Global Offices */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Oficinas Globales</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 text-purple-400" />
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">🇨🇱</span>
                    <span className="font-medium">Santiago, Chile</span>
                  </div>
                  <p className="text-sm text-gray-400">Oficina Principal - Full Stack Development</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 text-blue-400" />
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">🇸🇬</span>
                    <span className="font-medium">Singapur</span>
                  </div>
                  <p className="text-sm text-gray-400">Centro de IA & Machine Learning</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 text-pink-400" />
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">🇷🇺</span>
                    <span className="font-medium">Moscú, Rusia</span>
                  </div>
                  <p className="text-sm text-gray-400">DevOps & Infrastructure</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2024 N3uralia. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/terminos-de-servicio" className="text-gray-400 hover:text-white text-sm transition-colors">
              Términos de Servicio
            </Link>
            <Link href="/politicas-de-privacidad" className="text-gray-400 hover:text-white text-sm transition-colors">
              Políticas de Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
