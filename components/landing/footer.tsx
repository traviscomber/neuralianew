"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MessageCircle, Mail, MapPin, Phone, ArrowRight, ExternalLink } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { language } = useLanguage()

  const quickLinks = [
    { label: language === "en" ? "Services" : "Servicios", href: "#services" },
    { label: language === "en" ? "Use Cases" : "Casos de Uso", href: "#use-cases" },
    { label: language === "en" ? "Technical" : "Técnico", href: "#technical" },
    { label: language === "en" ? "Contact" : "Contacto", href: "#contact" },
  ]

  const legalLinks = [
    { label: language === "en" ? "Privacy Policy" : "Política de Privacidad", href: "/politicas-de-privacidad" },
    { label: language === "en" ? "Terms of Service" : "Términos de Servicio", href: "/terminos-de-servicio" },
  ]

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.getElementById(href.replace("#", ""))
      if (element) {
        const navHeight = 80
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - navHeight
        window.scrollTo({ top: offsetPosition, behavior: "smooth" })
      }
    } else {
      window.open(href, "_blank")
    }
  }

  return (
    <footer className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                <span className="text-xl font-bold text-black">N3</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">N3URALIA</h3>
                <p className="text-gray-400 text-sm">Enterprise AI Solutions</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              {language === "en"
                ? "Building bridges to AI with cutting-edge solutions that transform businesses and create lasting impact."
                : "Construyendo puentes hacia la IA con soluciones de vanguardia que transforman negocios y crean impacto duradero."}
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-gray-800 text-gray-300 border-gray-700">50+ Projects</Badge>
              <Badge className="bg-gray-800 text-gray-300 border-gray-700">ISO 27001</Badge>
              <Badge className="bg-gray-800 text-gray-300 border-gray-700">24/7 Support</Badge>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-6">{language === "en" ? "Quick Links" : "Enlaces Rápidos"}</h4>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-gray-300 hover:text-white transition-colors duration-200 text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-6">{language === "en" ? "Contact" : "Contacto"}</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Santiago, Chile</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <a href="tel:+56940946660" className="text-gray-300 hover:text-white transition-colors text-sm">
                  +56 9 4094 6660
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <a
                  href="mailto:contact@n3uralia.com"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  contact@n3uralia.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-2xl p-8 mb-12 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">
            {language === "en" ? "Ready to Start Your AI Journey?" : "¿Listo para Comenzar tu Viaje IA?"}
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            {language === "en"
              ? "Join the companies already transforming their operations with our AI solutions"
              : "Únete a las empresas que ya están transformando sus operaciones con nuestras soluciones IA"}
          </p>
          <Button
            size="lg"
            className="bg-white hover:bg-gray-100 text-black font-medium px-8 py-4 rounded-xl"
            onClick={() => window.open("https://wa.me/56940946660", "_blank")}
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            {language === "en" ? "Start Your Project" : "Iniciar tu Proyecto"}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 N3uralia. {language === "en" ? "All rights reserved." : "Todos los derechos reservados."}
            </div>
            <div className="flex items-center gap-6">
              {legalLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-1"
                >
                  {link.label}
                  <ExternalLink className="w-3 h-3" />
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
