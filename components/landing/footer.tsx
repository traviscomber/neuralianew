"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MessageCircle, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer id="footer" className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3">
              <Image src="/n3uralia-logo-new.png" alt="N3uralia" width={120} height={40} className="h-8 w-auto" />
              <Badge className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-200 dark:border-green-700">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
                Soporte 24/7 Activo
              </Badge>
            </div>
            <p className="text-gray-300 text-sm">
              Transformamos tu negocio con soluciones de IA conversacional que realmente entienden a tus usuarios.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="text-purple-400 border-purple-600">
                🧠 IA Avanzada
              </Badge>
              <Badge variant="outline" className="text-blue-400 border-blue-600">
                ⚡ Tiempo Real
              </Badge>
              <Badge variant="outline" className="text-green-400 border-green-600">
                🛡️ Seguridad Total
              </Badge>
              <Badge variant="outline" className="text-pink-400 border-pink-600">
                👥 Equipo Global
              </Badge>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white">Contacto</h3>
            <div className="space-y-3">
              <a
                href="mailto:hello@n3uralia.com"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>hello@n3uralia.com</span>
              </a>
              <a
                href="https://wa.me/56940946660"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-green-400 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
              <a
                href="tel:+56940946660"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+56 9 4094 6660</span>
              </a>
            </div>
            <Button
              asChild
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
            >
              <a
                href="https://wa.me/56940946660?text=Hola%20N3uralia%2C%20quiero%20implementar%20IA%20en%20mi%20empresa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Contactar por WhatsApp
              </a>
            </Button>
          </motion.div>

          {/* Global Offices */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white">Oficinas Globales</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4" />
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">🇨🇱</span>
                    <span className="font-medium">Santiago, Chile</span>
                  </div>
                  <div className="text-sm text-gray-400">Oficina Principal</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4" />
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">🇸🇬</span>
                    <span className="font-medium">Singapur</span>
                  </div>
                  <div className="text-sm text-gray-400">Cobertura Asia-Pacífico</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-4 h-4" />
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">🇷🇺</span>
                    <span className="font-medium">Moscú, Rusia</span>
                  </div>
                  <div className="text-sm text-gray-400">Cobertura Europa</div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700">
                ⏰ Soporte 24/7 Real
              </Badge>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-gray-400 text-sm">© 2024 N3uralia. Todos los derechos reservados.</div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/terminos-de-servicio" className="text-gray-400 hover:text-white text-sm transition-colors">
              Términos de Servicio
            </a>
            <a href="/politicas-de-privacidad" className="text-gray-400 hover:text-white text-sm transition-colors">
              Políticas de Privacidad
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
