"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, Mail, Phone, MapPin, ExternalLink, Code, Users, Shield, Heart } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { language } = useLanguage()

  const footerSections = [
    {
      title: language === "en" ? "Services" : "Servicios",
      links: [
        { name: language === "en" ? "AI Agents" : "Agentes IA", href: "#services" },
        { name: language === "en" ? "Full Stack Development" : "Desarrollo Full Stack", href: "#services" },
        { name: language === "en" ? "System Integration" : "Integración de Sistemas", href: "#services" },
        { name: language === "en" ? "Custom Solutions" : "Soluciones Personalizadas", href: "#contact" },
      ],
    },
    {
      title: language === "en" ? "Company" : "Empresa",
      links: [
        { name: language === "en" ? "About Us" : "Acerca de Nosotros", href: "#" },
        { name: language === "en" ? "Our Process" : "Nuestro Proceso", href: "#flow" },
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
        <div className="py-12 sm:py-16 lg:py-20">
          <div className="grid lg:grid-cols-5 gap-8 sm:gap-12 lg:gap-16">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Logo */}
                <div className="flex items-center space-x-3 sm:space-x-4 mb-6 sm:mb-8 lg:mb-10">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white rounded-2xl flex items-center justify-center">
                    <span className="text-lg sm:text-xl lg:text-2xl font-bold text-black">N3</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight">N3URALIA</span>
                    <span className="text-xs sm:text-sm lg:text-base text-gray-400 font-medium">
                      Enterprise AI Solutions
                    </span>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6 sm:mb-8 lg:mb-10 font-light text-sm sm:text-base lg:text-lg">
                  {language === "en"
                    ? "Building bridges to AI with cutting-edge solutions that transform businesses worldwide. Full-stack development, intelligent agents, and enterprise-grade support."
                    : "Construyendo puentes hacia la IA con soluciones de vanguardia que transforman empresas a nivel mundial. Desarrollo full-stack, agentes inteligentes y soporte de nivel empresarial."}
                </p>

                {/* Contact Info */}
                <div className="space-y-3 sm:space-y-4 lg:space-y-5">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gray-400 flex-shrink-0" />
                    <span className="text-gray-300 text-xs sm:text-sm lg:text-base">
                      Santiago, Chile • Singapore • Moscow
                    </span>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gray-400 flex-shrink-0" />
                    <span className="text-gray-300 text-xs sm:text-sm lg:text-base">+56 9 4094 6660</span>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gray-400 flex-shrink-0" />
                    <span className="text-gray-300 text-xs sm:text-sm lg:text-base">contact@n3uralia.com</span>
                  </div>
                </div>

                {/* Certifications */}
                <div className="flex flex-wrap gap-2 sm:gap-3 mt-6 sm:mt-8 lg:mt-10">
                  <Badge className="bg-gray-800 text-gray-300 border-0 text-xs lg:text-sm px-2 sm:px-3 py-1">
                    <Shield className="w-2 h-2 sm:w-3 sm:h-3 mr-1 sm:mr-2" />
                    ISO 27001
                  </Badge>
                  <Badge className="bg-gray-800 text-gray-300 border-0 text-xs lg:text-sm px-2 sm:px-3 py-1">
                    <Code className="w-2 h-2 sm:w-3 sm:h-3 mr-1 sm:mr-2" />
                    SOC 2 Type II
                  </Badge>
                  <Badge className="bg-gray-800 text-gray-300 border-0 text-xs lg:text-sm px-2 sm:px-3 py-1">
                    <Users className="w-2 h-2 sm:w-3 sm:h-3 mr-1 sm:mr-2" />
                    24/7 Support
                  </Badge>
                </div>
              </motion.div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={index} className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-4 sm:mb-6 lg:mb-8">
                    {section.title}
                  </h3>
                  <ul className="space-y-2 sm:space-y-3 lg:space-y-4">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <button
                          onClick={() => scrollToSection(link.href)}
                          className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm lg:text-base font-light hover:underline"
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
        <div className="border-t border-gray-800 py-6 sm:py-8 lg:py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 lg:gap-8">
            <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6 lg:gap-8">
              <p className="text-gray-400 text-xs sm:text-sm lg:text-base font-light flex items-center gap-2 text-center md:text-left">
                © 2024 N3uralia. {language === "en" ? "Made with" : "Hecho con"}
                <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500 fill-current" />
                {language === "en" ? "in Chile" : "en Chile"}
              </p>

              <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="sm"
                    onClick={() => window.open(social.href, "_blank")}
                    className="text-gray-400 hover:text-white transition-colors p-1 sm:p-2 hover:bg-gray-800 rounded-lg"
                  >
                    <social.icon className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                  </Button>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4">
              <Button
                onClick={() => window.open("https://wa.me/56940946660", "_blank")}
                className="bg-white text-black hover:bg-gray-100 font-semibold px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-xl text-xs sm:text-sm lg:text-base transition-all duration-300 hover:scale-105"
              >
                <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                {language === "en" ? "Start Project" : "Iniciar Proyecto"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
