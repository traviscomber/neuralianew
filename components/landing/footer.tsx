"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"

export function Footer() {
  const { language } = useLanguage()

  const footerLinks = [
    {
      title: language === "en" ? "Company" : "Empresa",
      links: [
        { label: language === "en" ? "About Us" : "Nosotros", href: "#" },
        { label: language === "en" ? "Careers" : "Carreras", href: "#" },
        { label: language === "en" ? "Press" : "Prensa", href: "#" },
        { label: language === "en" ? "Blog" : "Blog", href: "#" },
      ],
    },
    {
      title: language === "en" ? "Services" : "Servicios",
      links: [
        { label: language === "en" ? "AI Agents" : "Agentes IA", href: "#solutions" },
        { label: language === "en" ? "Full Stack" : "Full Stack", href: "#solutions" },
        { label: language === "en" ? "Consulting" : "Consultoría", href: "#" },
        { label: language === "en" ? "Support" : "Soporte", href: "#" },
      ],
    },
    {
      title: language === "en" ? "Resources" : "Recursos",
      links: [
        { label: language === "en" ? "Documentation" : "Documentación", href: "#" },
        { label: language === "en" ? "API Reference" : "Referencia API", href: "#" },
        { label: language === "en" ? "Tutorials" : "Tutoriales", href: "#" },
        { label: language === "en" ? "Community" : "Comunidad", href: "#" },
      ],
    },
    {
      title: language === "en" ? "Legal" : "Legal",
      links: [
        { label: language === "en" ? "Privacy Policy" : "Política de Privacidad", href: "/politicas-de-privacidad" },
        { label: language === "en" ? "Terms of Service" : "Términos de Servicio", href: "/terminos-de-servicio" },
        { label: language === "en" ? "Cookie Policy" : "Política de Cookies", href: "#" },
        { label: language === "en" ? "GDPR" : "GDPR", href: "#" },
      ],
    },
  ]

  return (
    <footer className="bg-gray-200 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8">
          {/* Logo and Description - Mobile optimized */}
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-3 sm:space-y-4"
            >
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Image
                  src="/n3uralia-logo-new.png"
                  alt="N3uralia"
                  width={28}
                  height={28}
                  className="w-7 h-7 sm:w-8 sm:h-8"
                />
                <span className="text-lg sm:text-xl font-light text-gray-900 tracking-wider">N3URALIA</span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                {language === "en"
                  ? "Building bridges to AI with cutting-edge solutions for modern businesses."
                  : "Construyendo puentes hacia la IA con soluciones de vanguardia para empresas modernas."}
              </p>
            </motion.div>
          </div>

          {/* Footer Links - Mobile optimized */}
          {footerLinks.map((section, index) => (
            <div key={index} className="col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-gray-900 font-medium mb-3 sm:mb-4 text-sm sm:text-base">{section.title}</h3>
                <ul className="space-y-2 sm:space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-gray-700 hover:text-gray-900 transition-colors text-sm block py-1 touch-manipulation"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Bottom Section - Mobile optimized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-300 flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0"
        >
          <div className="text-gray-700 text-xs sm:text-sm text-center sm:text-left">
            © 2024 N3uralia. {language === "en" ? "All rights reserved." : "Todos los derechos reservados."}
          </div>
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
            <span className="text-gray-700 text-xs sm:text-sm">
              {language === "en" ? "Made in Santiago, Chile" : "Hecho en Santiago, Chile"}
            </span>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-500 rounded-full animate-pulse"></div>
              <span className="text-gray-700 text-xs sm:text-sm">
                {language === "en" ? "System Operational" : "Sistema Operativo"}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
