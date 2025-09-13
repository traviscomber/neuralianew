"use client"

import { useLanguage } from "@/lib/language-context"
import Image from "next/image"
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react"

export function Footer() {
  const { language } = useLanguage()

  const footerSections = [
    {
      title: language === "en" ? "Services" : "Servicios",
      links: [
        { label: language === "en" ? "AI Agent Development" : "Desarrollo de Agentes IA", href: "#services" },
        { label: language === "en" ? "Process Automation" : "Automatización de Procesos", href: "#services" },
        { label: language === "en" ? "Enterprise Integration" : "Integración Empresarial", href: "#services" },
        { label: language === "en" ? "Consulting" : "Consultoría", href: "#contact" },
      ],
    },
    {
      title: language === "en" ? "Company" : "Empresa",
      links: [
        { label: language === "en" ? "About Us" : "Acerca de Nosotros", href: "#" },
        { label: language === "en" ? "Our Team" : "Nuestro Equipo", href: "#" },
        { label: language === "en" ? "Careers" : "Carreras", href: "#" },
        { label: language === "en" ? "Blog" : "Blog", href: "#" },
      ],
    },
    {
      title: language === "en" ? "Support" : "Soporte",
      links: [
        { label: language === "en" ? "Documentation" : "Documentación", href: "#" },
        { label: language === "en" ? "Help Center" : "Centro de Ayuda", href: "#" },
        { label: language === "en" ? "Contact Support" : "Contactar Soporte", href: "#contact" },
        { label: language === "en" ? "Status" : "Estado", href: "#" },
      ],
    },
  ]

  const contactInfo = [
    {
      icon: Mail,
      label: "contact@neuralia.ai",
      href: "mailto:contact@neuralia.ai",
    },
    {
      icon: Phone,
      label: "+56 9 3123 4567",
      href: "tel:+56931234567",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: "https://wa.me/56931234567",
    },
    {
      icon: MapPin,
      label: "Santiago, Chile",
      href: "#",
    },
  ]

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      window.open(href, "_blank")
    }
  }

  return (
    <footer className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Image
                src="/n3uralia-logo-new.png"
                alt="Neuralia Logo"
                width={150}
                height={50}
                className="h-10 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 font-light mb-6 leading-relaxed">
              {language === "en"
                ? "Transforming businesses with intelligent AI agents that automate processes, enhance productivity, and drive growth."
                : "Transformando empresas con agentes de IA inteligentes que automatizan procesos, mejoran la productividad e impulsan el crecimiento."}
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(contact.href)}
                  className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors group"
                >
                  {contact.icon && <contact.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />}
                  <span className="font-light">{contact.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-medium mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-white font-light transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 font-light text-sm">
              © 2024 Neuralia. {language === "en" ? "All rights reserved." : "Todos los derechos reservados."}
            </div>
            <div className="flex space-x-6">
              <button
                onClick={() => scrollToSection("/politicas-de-privacidad")}
                className="text-gray-400 hover:text-white font-light text-sm transition-colors"
              >
                {language === "en" ? "Privacy Policy" : "Política de Privacidad"}
              </button>
              <button
                onClick={() => scrollToSection("/terminos-de-servicio")}
                className="text-gray-400 hover:text-white font-light text-sm transition-colors"
              >
                {language === "en" ? "Terms of Service" : "Términos de Servicio"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
