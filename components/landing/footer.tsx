"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { MessageCircle, Mail, MapPin, Clock, ExternalLink } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/30 dark:bg-muted/10 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-bold mb-4 text-foreground">N3uralia</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Desarrollamos sistemas completos de IA que realmente funcionan. Desde chatbots inteligentes hasta
              automatización empresarial completa. Tu competencia ya usa IA, ¿cuándo empiezas tú?
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <span>Santiago, Chile & Singapore</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Clock className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <span>Lun - Vie: 9:00 - 18:00 (CLT)</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4 text-foreground">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
                >
                  Testimonios
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
                >
                  Problemática
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("use-cases")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
                >
                  Casos de Uso
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("team")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
                >
                  Equipo
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4 text-foreground">Contacto</h4>
            <div className="space-y-4">
              <Button
                variant="outline"
                className="w-full justify-start border-2 hover:bg-muted/50 dark:hover:bg-muted/30 bg-transparent"
                asChild
              >
                <a
                  href="https://wa.me/56940946660?text=Hola%20N3uralia%2C%20quiero%20más%20información%20sobre%20sus%20servicios"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </a>
              </Button>

              <Button
                variant="outline"
                className="w-full justify-start border-2 hover:bg-muted/50 dark:hover:bg-muted/30 bg-transparent"
                asChild
              >
                <a href="mailto:contacto@neuralia.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </a>
              </Button>
            </div>
          </motion.div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">© {currentYear} N3uralia. Todos los derechos reservados.</p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm">
            <a
              href="/terminos-de-servicio"
              className="text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
            >
              Términos de Servicio
            </a>
            <a
              href="/politicas-de-privacidad"
              className="text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
            >
              Políticas de Privacidad
            </a>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-700 dark:to-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">¿Listo para automatizar tu negocio?</h3>
            <p className="text-purple-100 dark:text-purple-200 mb-6 max-w-2xl mx-auto">
              Tu competencia ya está usando IA. No te quedes atrás. Conversemos sobre cómo podemos transformar tu
              negocio con sistemas inteligentes que realmente funcionan.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-purple-600 hover:bg-gray-100 font-semibold"
              asChild
            >
              <a
                href="https://wa.me/56940946660?text=Hola%20N3uralia%2C%20quiero%20empezar%20a%20usar%20IA%20en%20mi%20negocio%20ahora%20mismo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Empezar Ahora
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
