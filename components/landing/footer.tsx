"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, Mail, Phone, MapPin, ExternalLink, Code, Users, Shield } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { language } = useLanguage()

  const footerSections = [
    {
      title: language === "en" ? "Services" : "Servicios",
      links: [
        { name: language === "en" ? "AI Agents" : "Agentes IA", href: "#solutions" },
        { name: language === "en" ? "Full Stack Development" : "Desarrollo Full Stack", href: "#services" },
        { name: language === "en" ? "System Integration" : "Integración de Sistemas", href: "#flow" },
        { name: language === "en" ? "Custom Solutions" : "Soluciones Personalizadas", href: "#deploy" },
      ],
    },
    {
      title: language === "en" ? "Company" : "Empresa",
      links: [
        { name: language === "en" ? "About Us" : "Acerca de Nosotros", href: "#team" },
        { name: language === "en" ? "Our Team" : "Nuestro Equipo", href: "#team" },
        { name: language === "en" ? "Success Stories" : "Casos de Éxito", href: "#clients" },
        { name: language === "en" ? "Contact" : "Contacto", href: "#contact" },
      ],
    },
    {
      title: language === "en" ? "Resources" : "Recursos",
      links: [
        { name: language === "en" ? "Documentation" : "Documentación", href: "#" },
        { name: language === "en" ? "API Reference" : "Referencia API", href: "#" },
        { name: language === "en" ? "Support Center" : "Centro de Soporte", href: "#faq" },
        { name: language === "en" ? "Blog" : "Blog", href: "#" },
      ],
    },
    {
      title: language === "en" ? "Legal" : "Legal",
      links: [
        { name: language === "en" ? "Privacy Policy" : "Política de Privacidad", href: "/politicas-de-privacidad" },
        { name: language === "en" ? "Terms of Service" : "Términos de Servicio", href: "/terminos-de-servicio" },
        { name: language === "en" ? "Security" : "Seguridad", href: "#trust" },
        { name: language === "en" ? "Compliance" : "Cumplimiento", href: "#trust" },
      ],
    },
  ]

  const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com/company/n3uralia", icon: ExternalLink },
    { name: "Instagram", href: "https://instagram.com/n3uralia", icon: ExternalLink },
    { name: "Twitter", href: "https://twitter.com/n3uralia", icon: ExternalLink },
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
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Logo */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                    <span className="text-xl font-bold text-black">N3</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold tracking-tight">N3URALIA</span>
                    <span className="text-sm text-gray-400 font-medium">Enterprise AI Solutions</span>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed mb-8 font-light">
                  {language === "en"
                    ? "Building bridges to AI with cutting-edge solutions that transform businesses worldwide. Full-stack development, intelligent agents, and enterprise-grade support."
                    : "Construyendo puentes hacia la IA con soluciones de vanguardia que transforman empresas a nivel mundial. Desarrollo full-stack, agentes inteligentes y soporte de nivel empresarial."}
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-300 text-sm">Santiago, Chile • Singapore • Moscow</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-300 text-sm">+56 9 4094 6660</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-300 text-sm">contact@n3uralia.com</span>
                  </div>
                </div>

                {/* Certifications */}
                <div className="flex flex-wrap gap-2 mt-6">
                  <Badge className="bg-gray-800 text-gray-300 border-0 text-xs">
                    <Shield className="w-3 h-3 mr-1" />
                    ISO 27001
                  </Badge>
                  <Badge className="bg-gray-800 text-gray-300 border-0 text-xs">
                    <Code className="w-3 h-3 mr-1" />
                    SOC 2 Type II
                  </Badge>
                  <Badge className="bg-gray-800 text-gray-300 border-0 text-xs">
                    <Users className="w-3 h-3 mr-1" />
                    24/7 Support
                  </Badge>
                </div>
              </motion.div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-bold text-white mb-6">{section.title}</h3>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <button
                          onClick={() => scrollToSection(link.href)}
                          className="text-gray-400 hover:text-white transition-colors text-sm font-light"
                        >
                          {link.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <p className="text-gray-400 text-sm font-light">
                © 2024 N3uralia. {language === "en" ? "All rights reserved." : "Todos los derechos reservados."}
              </p>
              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="sm"
                    onClick={() => window.open(social.href, "_blank")}
                    className="text-gray-400 hover:text-white transition-colors p-2"
                  >
                    <social.icon className="w-4 h-4" />
                  </Button>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4">
              <Button
                onClick={() => window.open("https://wa.me/56940946660", "_blank")}
                className="bg-white text-black hover:bg-gray-100 font-semibold px-6 py-2 rounded-xl transition-colors"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                {language === "en" ? "Start Project" : "Iniciar Proyecto"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
