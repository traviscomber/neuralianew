"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle, Phone, Mail, MapPin, Linkedin, Twitter, Github } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { language } = useLanguage()

  const content = {
    en: {
      company: "Company",
      about: "About Us",
      services: "Services",
      careers: "Careers",
      contact: "Contact",
      solutions: "Solutions",
      aiAgents: "AI Agents",
      automation: "Process Automation",
      integration: "Enterprise Integration",
      consulting: "AI Consulting",
      resources: "Resources",
      blog: "Blog",
      documentation: "Documentation",
      support: "Support",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      legal: "Legal",
      contactInfo: "Contact Information",
      address: "Santiago, Chile",
      email: "hello@n3uralia.com",
      phone: "+56 9 4094 6660",
      whatsapp: "WhatsApp",
      followUs: "Follow Us",
      description:
        "N3uralia specializes in developing intelligent AI agents that transform business operations, automate customer service, and drive growth through cutting-edge artificial intelligence solutions.",
      copyright: "© 2024 N3uralia. All rights reserved.",
      madeWith: "Made with ❤️ in Chile",
    },
    es: {
      company: "Empresa",
      about: "Acerca de Nosotros",
      services: "Servicios",
      careers: "Carreras",
      contact: "Contacto",
      solutions: "Soluciones",
      aiAgents: "Agentes de IA",
      automation: "Automatización de Procesos",
      integration: "Integración Empresarial",
      consulting: "Consultoría en IA",
      resources: "Recursos",
      blog: "Blog",
      documentation: "Documentación",
      support: "Soporte",
      privacy: "Política de Privacidad",
      terms: "Términos de Servicio",
      legal: "Legal",
      contactInfo: "Información de Contacto",
      address: "Santiago, Chile",
      email: "hello@n3uralia.com",
      phone: "+56 9 4094 6660",
      whatsapp: "WhatsApp",
      followUs: "Síguenos",
      description:
        "N3uralia se especializa en desarrollar agentes de IA inteligentes que transforman las operaciones comerciales, automatizan el servicio al cliente e impulsan el crecimiento a través de soluciones de inteligencia artificial de vanguardia.",
      copyright: "© 2024 N3uralia. Todos los derechos reservados.",
      madeWith: "Hecho con ❤️ en Chile",
    },
  }

  const t = content[language]

  const whatsappMessage =
    language === "es"
      ? "Hola N3uralia, me interesa conocer más sobre sus servicios de IA"
      : "Hello N3uralia, I'm interested in learning more about your AI services"

  const whatsappUrl = `https://wa.me/56940946660?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">N3</span>
              </div>
              <span className="text-xl font-bold">N3uralia</span>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">{t.description}</p>
            <div className="flex space-x-4">
              <Button
                variant="outline"
                size="sm"
                className="border-slate-600 text-slate-300 hover:text-white hover:bg-slate-800 bg-transparent"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-slate-600 text-slate-300 hover:text-white hover:bg-slate-800 bg-transparent"
              >
                <Twitter className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-slate-600 text-slate-300 hover:text-white hover:bg-slate-800 bg-transparent"
              >
                <Github className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t.company}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-slate-300 hover:text-white transition-colors">
                  {t.about}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-300 hover:text-white transition-colors">
                  {t.services}
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-slate-300 hover:text-white transition-colors">
                  {t.careers}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-white transition-colors">
                  {t.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t.solutions}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/agents" className="text-slate-300 hover:text-white transition-colors">
                  {t.aiAgents}
                </Link>
              </li>
              <li>
                <Link href="/automation" className="text-slate-300 hover:text-white transition-colors">
                  {t.automation}
                </Link>
              </li>
              <li>
                <Link href="/integration" className="text-slate-300 hover:text-white transition-colors">
                  {t.integration}
                </Link>
              </li>
              <li>
                <Link href="/consulting" className="text-slate-300 hover:text-white transition-colors">
                  {t.consulting}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t.contactInfo}</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-slate-400" />
                <span className="text-slate-300">{t.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-slate-400" />
                <a href="mailto:hello@n3uralia.com" className="text-slate-300 hover:text-white transition-colors">
                  {t.email}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-slate-400" />
                <a href="tel:+56940946660" className="text-slate-300 hover:text-white transition-colors">
                  {t.phone}
                </a>
              </li>
              <li>
                <Button asChild size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    {t.whatsapp}
                  </a>
                </Button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-slate-400 text-sm">{t.copyright}</p>
              <p className="text-slate-400 text-sm">{t.madeWith}</p>
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-slate-400 hover:text-white text-sm transition-colors">
                {t.privacy}
              </Link>
              <Link href="/terms" className="text-slate-400 hover:text-white text-sm transition-colors">
                {t.terms}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
