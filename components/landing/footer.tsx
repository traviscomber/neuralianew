"use client"

import Link from "next/link"
import { MessageCircle, Mail, Phone } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { language } = useLanguage()

  const content = {
    en: {
      company: {
        name: "N3uralia",
        description:
          "Enterprise AI solutions that transform businesses through intelligent automation and custom AI agents.",
      },
      links: {
        services: "Services",
        about: "About",
        contact: "Contact",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
      },
      contact: {
        title: "Contact",
        phone: "+56 9 4094 6660",
        email: "contacto@n3uralia.com",
        address: "Santiago, Chile",
      },
      copyright: "© 2024 N3uralia. All rights reserved.",
    },
    es: {
      company: {
        name: "N3uralia",
        description:
          "Soluciones empresariales de IA que transforman negocios a través de automatización inteligente y agentes de IA personalizados.",
      },
      links: {
        services: "Servicios",
        about: "Nosotros",
        contact: "Contacto",
        privacy: "Política de Privacidad",
        terms: "Términos de Servicio",
      },
      contact: {
        title: "Contacto",
        phone: "+56 9 4094 6660",
        email: "contacto@n3uralia.com",
        address: "Santiago, Chile",
      },
      copyright: "© 2024 N3uralia. Todos los derechos reservados.",
    },
  }

  const t = content[language]

  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-sm">N3</span>
              </div>
              <span className="text-2xl font-bold">{t.company.name}</span>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md">{t.company.description}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/services" className="block text-gray-300 hover:text-white transition-colors">
                {t.links.services}
              </Link>
              <Link href="#about" className="block text-gray-300 hover:text-white transition-colors">
                {t.links.about}
              </Link>
              <Link href="#contact" className="block text-gray-300 hover:text-white transition-colors">
                {t.links.contact}
              </Link>
              <Link href="/politicas-de-privacidad" className="block text-gray-300 hover:text-white transition-colors">
                {t.links.privacy}
              </Link>
              <Link href="/terminos-de-servicio" className="block text-gray-300 hover:text-white transition-colors">
                {t.links.terms}
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.contact.title}</h3>
            <div className="space-y-3">
              <a
                href="https://wa.me/56940946660"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.contact.phone}</span>
              </a>
              <a
                href="mailto:contacto@n3uralia.com"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{t.contact.email}</span>
              </a>
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="w-4 h-4" />
                <span>{t.contact.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">{t.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
