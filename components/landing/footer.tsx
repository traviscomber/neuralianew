"use client"

import Link from "next/link"
import { MessageCircle, Mail, Phone, MapPin } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { language } = useLanguage()

  const content = {
    en: {
      company: "Company",
      about: "About Us",
      careers: "Careers",
      press: "Press",
      blog: "Blog",
      products: "Products",
      aiAgents: "AI Agents",
      automation: "Automation",
      integrations: "Integrations",
      pricing: "Pricing",
      support: "Support",
      documentation: "Documentation",
      helpCenter: "Help Center",
      community: "Community",
      contact: "Contact",
      legal: "Legal",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      cookies: "Cookie Policy",
      description:
        "Transform your business with intelligent AI agents that automate customer service, boost sales, and streamline operations.",
      rights: "All rights reserved.",
      address: "Santiago, Chile",
      email: "hello@n3uralia.com",
      phone: "+56 9 4444 4649",
    },
    es: {
      company: "Empresa",
      about: "Nosotros",
      careers: "Carreras",
      press: "Prensa",
      blog: "Blog",
      products: "Productos",
      aiAgents: "Agentes IA",
      automation: "Automatización",
      integrations: "Integraciones",
      pricing: "Precios",
      support: "Soporte",
      documentation: "Documentación",
      helpCenter: "Centro de Ayuda",
      community: "Comunidad",
      contact: "Contacto",
      legal: "Legal",
      privacy: "Política de Privacidad",
      terms: "Términos de Servicio",
      cookies: "Política de Cookies",
      description:
        "Transforma tu negocio con agentes de IA inteligentes que automatizan el servicio al cliente, impulsan las ventas y optimizan las operaciones.",
      rights: "Todos los derechos reservados.",
      address: "Santiago, Chile",
      email: "hello@n3uralia.com",
      phone: "+56 9 4444 4649",
    },
  }

  const t = content[language]

  const whatsappMessage =
    language === "es"
      ? "Hola, me interesa conocer más sobre las soluciones de IA de N3uralia"
      : "Hello, I'm interested in learning more about N3uralia's AI solutions"

  const whatsappUrl = `https://wa.me/56944444649?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                >
                  <circle cx="8" cy="8" r="2" fill="currentColor" />
                  <circle cx="20" cy="8" r="2" fill="currentColor" />
                  <circle cx="32" cy="8" r="2" fill="currentColor" />
                  <circle cx="8" cy="20" r="2" fill="currentColor" />
                  <circle cx="20" cy="20" r="2" fill="currentColor" />
                  <circle cx="32" cy="20" r="2" fill="currentColor" />
                  <circle cx="8" cy="32" r="2" fill="currentColor" />
                  <circle cx="20" cy="32" r="2" fill="currentColor" />
                  <circle cx="32" cy="32" r="2" fill="currentColor" />
                  <path d="M8 10v8M20 10v8M32 10v8M8 22v8M20 22v8M32 22v8" stroke="currentColor" strokeWidth="1" />
                  <path d="M10 8h8M22 8h8M10 20h8M22 20h8M10 32h8M22 32h8" stroke="currentColor" strokeWidth="1" />
                </svg>
              </div>
              <span className="font-bold text-xl">N3uralia</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">{t.description}</p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400">{t.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-gray-400" />
                <a href={`mailto:${t.email}`} className="text-gray-400 hover:text-white transition-colors">
                  {t.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-gray-400" />
                <a href={`tel:${t.phone}`} className="text-gray-400 hover:text-white transition-colors">
                  {t.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-4 w-4 text-gray-400" />
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">{t.company}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  {t.about}
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-white transition-colors">
                  {t.careers}
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-gray-400 hover:text-white transition-colors">
                  {t.press}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  {t.blog}
                </Link>
              </li>
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">{t.products}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/agents" className="text-gray-400 hover:text-white transition-colors">
                  {t.aiAgents}
                </Link>
              </li>
              <li>
                <Link href="/automation" className="text-gray-400 hover:text-white transition-colors">
                  {t.automation}
                </Link>
              </li>
              <li>
                <Link href="/integrations" className="text-gray-400 hover:text-white transition-colors">
                  {t.integrations}
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">
                  {t.pricing}
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">{t.support}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/docs" className="text-gray-400 hover:text-white transition-colors">
                  {t.documentation}
                </Link>
              </li>
              <li>
                <Link href="/help" className="text-gray-400 hover:text-white transition-colors">
                  {t.helpCenter}
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-gray-400 hover:text-white transition-colors">
                  {t.community}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  {t.contact}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">© 2024 N3uralia. {t.rights}</div>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                {t.privacy}
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                {t.terms}
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors text-sm">
                {t.cookies}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
