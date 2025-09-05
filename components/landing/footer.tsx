"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { MessageSquare, Mail, MapPin, Linkedin, Github, Globe, Bot, Shield, Clock, ArrowUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navHeight = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - navHeight
      window.scrollTo({ top: offsetPosition, behavior: "smooth" })
    }
  }

  const footerSections = [
    {
      title: "Servicios",
      links: [
        { label: "Agentes Conversacionales", href: "#", onClick: () => scrollToSection("use-cases") },
        { label: "Integración WhatsApp", href: "#", onClick: () => scrollToSection("use-cases") },
        { label: "Automatización CRM", href: "#", onClick: () => scrollToSection("use-cases") },
        { label: "Chatbots Personalizados", href: "#", onClick: () => scrollToSection("use-cases") },
        { label: "Consultoría en IA", href: "#", onClick: () => scrollToSection("team") },
      ],
    },
    {
      title: "Casos de Éxito",
      links: [
        { label: "ParrotfyIA - Educación", href: "#", onClick: () => scrollToSection("use-cases") },
        { label: "EcosueloLab - RRHH", href: "#", onClick: () => scrollToSection("use-cases") },
        { label: "CRM Inteligente", href: "#", onClick: () => scrollToSection("use-cases") },
        { label: "E-commerce Assistant", href: "#", onClick: () => scrollToSection("use-cases") },
        { label: "Ver Todos los Casos", href: "#", onClick: () => scrollToSection("use-cases") },
      ],
    },
    {
      title: "Empresa",
      links: [
        { label: "Sobre Nosotros", href: "#", onClick: () => scrollToSection("team") },
        { label: "Nuestro Equipo", href: "#", onClick: () => scrollToSection("team") },
        { label: "Carreras", href: "#", onClick: () => scrollToSection("contact") },
        { label: "Blog Técnico", href: "/llmo-content" },
        { label: "Prensa", href: "#", onClick: () => scrollToSection("contact") },
      ],
    },
    {
      title: "Soporte",
      links: [
        { label: "Documentación", href: "#", onClick: () => scrollToSection("faq") },
        { label: "FAQ", href: "#", onClick: () => scrollToSection("faq") },
        { label: "Soporte Técnico", href: "#", onClick: () => window.open("https://wa.me/56940946660", "_blank") },
        { label: "Estado del Sistema", href: "/system-check" },
        { label: "Contacto", href: "#", onClick: () => scrollToSection("contact") },
      ],
    },
  ]

  const contactInfo = [
    {
      icon: MessageSquare,
      label: "WhatsApp",
      value: "+56 9 4094 6660",
      action: () => window.open("https://wa.me/56940946660", "_blank"),
      color: "text-green-400",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@n3uralia.com",
      action: () => window.open("mailto:info@n3uralia.com", "_blank"),
      color: "text-blue-400",
    },
    {
      icon: MapPin,
      label: "Oficinas",
      value: "Santiago, Singapur, Moscú",
      action: () => scrollToSection("team"),
      color: "text-purple-400",
    },
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/company/n3uralia",
      color: "hover:text-blue-400",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/n3uralia",
      color: "hover:text-purple-400",
    },
    {
      icon: Globe,
      label: "Website",
      href: "https://n3uralia.com",
      color: "hover:text-green-400",
    },
  ]

  const certifications = [
    { icon: Shield, label: "SOC 2 Certified" },
    { icon: Bot, label: "OpenAI Partner" },
    { icon: MessageSquare, label: "WhatsApp Certified" },
    { icon: Clock, label: "99.9% Uptime SLA" },
  ]

  return (
    <footer id="contact" className="bg-gradient-to-br from-slate-950 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <Image src="/n3uralia-logo-new.png" alt="N3uralia Logo" width={40} height={40} className="rounded-lg" />
                <div>
                  <div className="text-xl font-bold text-white">N3uralia</div>
                  <div className="text-sm text-slate-400">Full Stack IA Systems</div>
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed max-w-md">
                Transformamos negocios con agentes conversacionales inteligentes. Soporte 24/7 global con equipos
                especializados en Chile, Singapur y Rusia.
              </p>

              {/* Contact Cards */}
              <div className="space-y-3">
                {contactInfo.map((contact, index) => {
                  const Icon = contact.icon
                  return (
                    <Card
                      key={index}
                      className="bg-slate-800/30 border-slate-700/50 hover:bg-slate-800/50 transition-all duration-300 cursor-pointer"
                      onClick={contact.action}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <Icon className={`w-5 h-5 ${contact.color}`} />
                          <div>
                            <div className="text-sm text-slate-400">{contact.label}</div>
                            <div className="text-white font-medium">{contact.value}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <Button
                      key={index}
                      variant="ghost"
                      size="sm"
                      className={`text-slate-400 ${social.color} transition-colors`}
                      onClick={() => window.open(social.href, "_blank")}
                    >
                      <Icon className="w-5 h-5" />
                    </Button>
                  )
                })}
              </div>
            </div>

            {/* Footer Links */}
            <div className="lg:col-span-3 grid md:grid-cols-4 gap-8">
              {footerSections.map((section, index) => (
                <div key={index}>
                  <h3 className="text-white font-semibold mb-4">{section.title}</h3>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        {link.href?.startsWith("#") || link.onClick ? (
                          <button
                            onClick={link.onClick}
                            className="text-slate-400 hover:text-white transition-colors text-sm"
                          >
                            {link.label}
                          </button>
                        ) : (
                          <Link
                            href={link.href || "#"}
                            className="text-slate-400 hover:text-white transition-colors text-sm"
                          >
                            {link.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Separator className="bg-slate-700/50" />

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            {/* Certifications */}
            <div className="flex flex-wrap gap-4">
              {certifications.map((cert, index) => {
                const Icon = cert.icon
                return (
                  <Badge key={index} className="bg-slate-800/50 text-slate-300 border-slate-600/50">
                    <Icon className="w-3 h-3 mr-1" />
                    {cert.label}
                  </Badge>
                )
              })}
            </div>

            {/* Copyright and Legal */}
            <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-6">
              <div className="flex space-x-6 text-sm">
                <Link href="/politicas-de-privacidad" className="text-slate-400 hover:text-white transition-colors">
                  Política de Privacidad
                </Link>
                <Link href="/terminos-de-servicio" className="text-slate-400 hover:text-white transition-colors">
                  Términos de Servicio
                </Link>
              </div>
              <div className="text-sm text-slate-400">© 2024 N3uralia. Todos los derechos reservados.</div>
            </div>

            {/* Back to Top */}
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="text-slate-400 hover:text-white transition-colors"
            >
              <ArrowUp className="w-4 h-4 mr-2" />
              Volver Arriba
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
