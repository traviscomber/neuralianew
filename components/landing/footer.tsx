"use client"

import Link from "next/link"
import { MessageCircle, Mail, Phone, MapPin } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { language } = useLanguage()

  const content = {
    en: {
      company: {
        description:
          "Leading AI solutions provider transforming businesses worldwide with intelligent automation and advanced AI agents.",
      },
      links: {
        company: {
          title: "Company",
          items: [
            { name: "About Us", href: "#about" },
            { name: "Services", href: "/services" },
            { name: "Case Studies", href: "/case-studies" },
            { name: "Careers", href: "#careers" },
          ],
        },
        solutions: {
          title: "Solutions",
          items: [
            { name: "AI Agents", href: "/ai-agent-development" },
            { name: "Chatbots", href: "/services#chatbots" },
            { name: "Automation", href: "/process-automation" },
            { name: "Analytics", href: "/services#analytics" },
          ],
        },
        support: {
          title: "Support",
          items: [
            { name: "Documentation", href: "#docs" },
            { name: "Help Center", href: "#help" },
            { name: "Contact", href: "#contact" },
            { name: "Status", href: "#status" },
          ],
        },
        legal: {
          title: "Legal",
          items: [
            { name: "Privacy Policy", href: "/politicas-de-privacidad" },
            { name: "Terms of Service", href: "/terminos-de-servicio" },
            { name: "Cookie Policy", href: "#cookies" },
            { name: "GDPR", href: "#gdpr" },
          ],
        },
      },
      contact: {
        title: "Contact Information",
        address: "Santiago, Chile",
        phone: "+56 9 4094 6660",
        email: "hello@n3uralia.com",
      },
      copyright: "© 2024 N3uralia. All rights reserved.",
      built: "Built with ❤️ in Chile",
    },
    es: {
      company: {
        description:
          "Proveedor líder de soluciones de IA transformando negocios en todo el mundo con automatización inteligente y agentes de IA avanzados.",
      },
      links: {
        company: {
          title: "Empresa",
          items: [
            { name: "Nosotros", href: "#about" },
            { name: "Servicios", href: "/services" },
            { name: "Casos de Estudio", href: "/case-studies" },
            { name: "Carreras", href: "#careers" },
          ],
        },
        solutions: {
          title: "Soluciones",
          items: [
            { name: "Agentes de IA", href: "/ai-agent-development" },
            { name: "Chatbots", href: "/services#chatbots" },
            { name: "Automatización", href: "/process-automation" },
            { name: "Análisis", href: "/services#analytics" },
          ],
        },
        support: {
          title: "Soporte",
          items: [
            { name: "Documentación", href: "#docs" },
            { name: "Centro de Ayuda", href: "#help" },
            { name: "Contacto", href: "#contact" },
            { name: "Estado", href: "#status" },
          ],
        },
        legal: {
          title: "Legal",
          items: [
            { name: "Política de Privacidad", href: "/politicas-de-privacidad" },
            { name: "Términos de Servicio", href: "/terminos-de-servicio" },
            { name: "Política de Cookies", href: "#cookies" },
            { name: "GDPR", href: "#gdpr" },
          ],
        },
      },
      contact: {
        title: "Información de Contacto",
        address: "Santiago, Chile",
        phone: "+56 9 4094 6660",
        email: "hello@n3uralia.com",
      },
      copyright: "© 2024 N3uralia. Todos los derechos reservados.",
      built: "Hecho con ❤️ en Chile",
    },
  }

  const t = content[language]

  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-sm">N3</span>
              </div>
              <span className="text-xl font-bold">N3uralia</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">{t.company.description}</p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/56940946660"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a href="mailto:hello@n3uralia.com" className="text-gray-300 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="tel:+56940946660" className="text-gray-300 hover:text-white transition-colors">
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(t.links).map(([key, section]) => (
            <div key={key}>
              <h3 className="font-bold text-white mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.items.map((item, index) => (
                  <li key={index}>
                    <Link href={item.href} className="text-gray-300 hover:text-white transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <h3 className="font-bold text-white mb-4">{t.contact.title}</h3>
          <div className="grid md:grid-cols-3 gap-4 text-gray-300">
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2" />
              {t.contact.address}
            </div>
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              {t.contact.phone}
            </div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              {t.contact.email}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-300">
          <p>{t.copyright}</p>
          <p className="mt-4 md:mt-0">{t.built}</p>
        </div>
      </div>
    </footer>
  )
}
