"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { MessageCircle, Mail, MapPin, ArrowRight } from "lucide-react"

const footerLinks = {
  company: [
    { name: "Sobre N3uralia", href: "#team" },
    { name: "Casos de Éxito", href: "#use-cases" },
    { name: "Preguntas Frecuentes", href: "#faq" },
  ],
  services: [
    { name: "Chatbots Inteligentes", href: "#features" },
    { name: "Automatización IA", href: "#features" },
    { name: "Integración ERP", href: "#use-cases" },
    { name: "Análisis Predictivo", href: "#features" },
  ],
  legal: [
    { name: "Términos de Servicio", href: "/terminos-de-servicio" },
    { name: "Política de Privacidad", href: "/politicas-de-privacidad" },
  ],
}

const contactInfo = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+56 9 4094 6660",
    href: "https://wa.me/56940946660",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contacto@n3uralia.com",
    href: "mailto:contacto@n3uralia.com",
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Santiago, Chile",
    href: "#",
  },
]

export function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.getElementById(href.substring(1))
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <footer className="bg-muted/30 dark:bg-muted/10 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent mb-4">
                N3uralia
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Implementamos IA conversacional que transforma negocios en 48 horas. Automatiza procesos, mejora la
                atención al cliente y aumenta tus ventas.
              </p>
              <Button
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium"
                asChild
              >
                <a
                  href="https://wa.me/56940946660?text=Hola%20N3uralia%2C%20quiero%20implementar%20IA%20en%20mi%20negocio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Comenzar ahora
                </a>
              </Button>
            </motion.div>

            {/* Company Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-foreground mb-4">Empresa</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-foreground mb-4">Servicios</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-foreground mb-4">Contacto</h4>
              <ul className="space-y-3">
                {contactInfo.map((contact) => (
                  <li key={contact.label}>
                    <a
                      href={contact.href}
                      target={contact.href.startsWith("http") ? "_blank" : undefined}
                      rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      <contact.icon className="w-4 h-4 flex-shrink-0" />
                      <span className="text-sm">{contact.value}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        <Separator className="bg-border" />

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-sm text-muted-foreground"
            >
              © 2024 N3uralia. Todos los derechos reservados.
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-6"
            >
              {footerLinks.legal.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-12 text-center bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-700 dark:to-blue-700 rounded-2xl mb-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-4">¿Listo para transformar tu negocio con IA?</h3>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Únete a las empresas que ya están automatizando procesos y mejorando la experiencia de sus clientes con
            N3uralia.
          </p>
          <Button
            size="lg"
            className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            asChild
          >
            <a
              href="https://wa.me/56940946660?text=Hola%20N3uralia%2C%20quiero%20implementar%20IA%20en%20mi%20negocio%20ahora"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Implementar IA ahora
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </footer>
  )
}
