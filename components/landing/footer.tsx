"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { language } = useLanguage()

  const content = {
    en: {
      company: "Company",
      services: "Services",
      support: "Support",
      legal: "Legal",
      links: {
        about: "About Us",
        careers: "Careers",
        blog: "Blog",
        aiAgents: "AI Agents",
        automation: "Automation",
        integration: "Integration",
        help: "Help Center",
        documentation: "Documentation",
        contact: "Contact",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        cookies: "Cookie Policy",
      },
      description:
        "Transform your business with intelligent AI solutions. From custom agents to enterprise automation, N3uralia delivers cutting-edge technology that drives real results.",
      copyright: "© 2024 N3uralia. All rights reserved.",
      builtWith: "Built with ❤️ in Santiago, Chile",
    },
    es: {
      company: "Empresa",
      services: "Servicios",
      support: "Soporte",
      legal: "Legal",
      links: {
        about: "Nosotros",
        careers: "Carreras",
        blog: "Blog",
        aiAgents: "Agentes de IA",
        automation: "Automatización",
        integration: "Integración",
        help: "Centro de Ayuda",
        documentation: "Documentación",
        contact: "Contacto",
        privacy: "Política de Privacidad",
        terms: "Términos de Servicio",
        cookies: "Política de Cookies",
      },
      description:
        "Transforma tu negocio con soluciones inteligentes de IA. Desde agentes personalizados hasta automatización empresarial, N3uralia entrega tecnología de vanguardia que genera resultados reales.",
      copyright: "© 2024 N3uralia. Todos los derechos reservados.",
      builtWith: "Hecho con ❤️ en Santiago, Chile",
    },
  }

  const t = content[language]

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-sm">N3</span>
              </div>
              <span className="font-bold text-xl">N3uralia</span>
            </Link>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">{t.description}</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t.company}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                  {t.links.about}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  {t.links.careers}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  {t.links.blog}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t.services}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/ai-agent-development" className="text-gray-400 hover:text-white transition-colors">
                  {t.links.aiAgents}
                </Link>
              </li>
              <li>
                <Link href="/process-automation" className="text-gray-400 hover:text-white transition-colors">
                  {t.links.automation}
                </Link>
              </li>
              <li>
                <Link href="/enterprise-integration" className="text-gray-400 hover:text-white transition-colors">
                  {t.links.integration}
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t.support}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  {t.links.help}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  {t.links.documentation}
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  {t.links.contact}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">{t.copyright}</p>
              <p className="text-gray-400 text-sm">{t.builtWith}</p>
            </div>
            <div className="flex space-x-6">
              <Link
                href="/politicas-de-privacidad"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                {t.links.privacy}
              </Link>
              <Link href="/terminos-de-servicio" className="text-gray-400 hover:text-white transition-colors text-sm">
                {t.links.terms}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
