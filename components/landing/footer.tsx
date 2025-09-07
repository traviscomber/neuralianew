"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  MessageCircle,
  Mail,
  MapPin,
  Phone,
  Instagram,
  Linkedin,
  Twitter,
  Globe,
  Clock,
  Shield,
  Award,
  ExternalLink,
} from "lucide-react"

const footerSections = [
  {
    title: "Servicios",
    links: [
      { name: "Agentes Conversacionales", href: "#features" },
      { name: "Flota Agéntica", href: "#use-cases" },
      { name: "Integración WhatsApp", href: "#technical-features" },
      { name: "Consultoría IA", href: "#team" },
    ],
  },
  {
    title: "Casos de Éxito",
    links: [
      { name: "EcosueloLab - Agricultura", href: "#use-cases" },
      { name: "Parrotfy ERP - Software", href: "#use-cases" },
      { name: "Despega Tu Carrera - Educación", href: "#use-cases" },
      { name: "Ver todos los casos", href: "#testimonials" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { name: "Sobre N3uralia", href: "#team" },
      { name: "Equipo Global", href: "#team" },
      { name: "Soporte 24/7", href: "#timezones" },
      { name: "Preguntas Frecuentes", href: "#faq" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Términos de Servicio", href: "/terminos-de-servicio" },
      { name: "Políticas de Privacidad", href: "/politicas-de-privacidad" },
      { name: "Cumplimiento GDPR", href: "/politicas-de-privacidad" },
      { name: "Certificaciones", href: "#technical-features" },
    ],
  },
]

const globalOffices = [
  {
    country: "Chile",
    flag: "🇨🇱",
    city: "Santiago",
    address: "Región Metropolitana",
    phone: "+56 9 4094 6660",
    email: "chile@n3uralia.com",
    hours: "Lun-Vie 9:00-18:00 CLT",
    whatsapp: "https://wa.me/56940946660",
  },
  {
    country: "Singapur",
    flag: "🇸🇬",
    city: "Singapore",
    address: "Asia-Pacific Hub",
    phone: "+65 XXXX XXXX",
    email: "singapore@n3uralia.com",
    hours: "Mon-Fri 9:00-17:00 SGT",
    whatsapp: null,
  },
  {
    country: "Rusia",
    flag: "🇷🇺",
    city: "Moscú",
    address: "Development Center",
    phone: "+7 XXX XXX XXXX",
    email: "russia@n3uralia.com",
    hours: "24/7 Technical Support",
    whatsapp: null,
  },
]

const socialLinks = [
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/n3uralia",
    color: "hover:text-pink-500",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/company/n3uralia",
    color: "hover:text-blue-600",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com/n3uralia",
    color: "hover:text-blue-400",
  },
]

const certifications = [
  { name: "ISO 27001:2013", icon: Shield },
  { name: "SOC 2 Type II", icon: Award },
  { name: "OpenAI Partner", icon: Globe },
  { name: "WhatsApp Certified", icon: MessageCircle },
]

export function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white transition-colors duration-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-xl font-black">N3</span>
                </div>
                <div>
                  <h3 className="text-2xl font-black">N3uralia</h3>
                  <p className="text-slate-400 text-sm font-semibold">Agentes Conversacionales Inteligentes</p>
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed mb-6">
                Transformamos empresas con agentes conversacionales inteligentes y sistemas de IA full stack. Soporte
                24/7 global con equipos especializados en Chile, Singapur y Rusia.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-green-400" />
                  <span className="text-slate-300 font-semibold">Soporte 24/7 - SLA 15 minutos</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-yellow-400" />
                  <span className="text-slate-300 font-semibold">ROI promedio 250% verificado</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-blue-400" />
                  <span className="text-slate-300 font-semibold">99.9% Uptime garantizado</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-slate-800 dark:bg-slate-900 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-bold mb-6">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors duration-300 font-medium"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Global Offices */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t border-slate-800 dark:border-slate-700"
        >
          <h4 className="text-xl font-bold mb-8 text-center">Oficinas Globales</h4>
          <div className="grid md:grid-cols-3 gap-8">
            {globalOffices.map((office, index) => (
              <div
                key={index}
                className="bg-slate-800 dark:bg-slate-900 rounded-2xl p-6 hover:bg-slate-750 dark:hover:bg-slate-800 transition-colors duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{office.flag}</span>
                  <div>
                    <h5 className="font-bold text-lg">{office.country}</h5>
                    <p className="text-slate-400 font-semibold">{office.city}</p>
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-slate-400" />
                    <span className="text-slate-300">{office.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-slate-400" />
                    <span className="text-slate-300">{office.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-slate-400" />
                    <span className="text-slate-300">{office.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-slate-400" />
                    <span className="text-slate-300">{office.hours}</span>
                  </div>
                </div>

                {office.whatsapp && (
                  <Button
                    size="sm"
                    className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold"
                    asChild
                  >
                    <a href={office.whatsapp} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-slate-800 dark:border-slate-700"
        >
          <h4 className="text-lg font-bold mb-6 text-center">Certificaciones y Partnerships</h4>
          <div className="flex justify-center gap-6 flex-wrap">
            {certifications.map((cert, index) => (
              <Badge
                key={index}
                className="bg-slate-800 dark:bg-slate-900 text-slate-300 border-slate-700 dark:border-slate-600 hover:bg-slate-700 dark:hover:bg-slate-800 font-semibold px-4 py-2 transition-colors duration-300"
              >
                <cert.icon className="w-4 h-4 mr-2" />
                {cert.name}
              </Badge>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 dark:border-slate-700 bg-slate-950 dark:bg-black transition-colors duration-300">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-400 text-sm font-medium">
              © 2024 N3uralia. Todos los derechos reservados. Agentes Conversacionales Inteligentes.
            </div>
            <div className="flex items-center gap-6 text-sm">
              <span className="text-slate-400">Hecho con ❤️ por el equipo N3uralia</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-semibold">Sistema Operativo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
