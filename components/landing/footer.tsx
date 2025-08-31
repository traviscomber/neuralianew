"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Brain, Mail, Phone, MapPin, Twitter, Linkedin, Github, Heart, Zap, Globe, MessageSquare } from "lucide-react"

const footerLinks = {
  Productos: [
    { name: "EcosueloLab", href: "#ecosuelo" },
    { name: "Despega Tu Carrera", href: "#despega" },
    { name: "ParrotfyIA", href: "#parrotfy" },
    { name: "Portales Personalizados", href: "#custom" },
  ],
  Empresa: [
    { name: "Sobre Nosotros", href: "#about" },
    { name: "Equipo", href: "#team" },
    { name: "Carreras", href: "#careers" },
    { name: "Blog", href: "#blog" },
  ],
  Recursos: [
    { name: "Documentación", href: "#docs" },
    { name: "API", href: "#api" },
    { name: "Casos de Estudio", href: "#cases" },
    { name: "Soporte", href: "#support" },
  ],
  Legal: [
    { name: "Privacidad", href: "#privacy" },
    { name: "Términos", href: "#terms" },
    { name: "Cookies", href: "#cookies" },
    { name: "GDPR", href: "#gdpr" },
  ],
}

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
]

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-blue-400 rounded-xl flex items-center justify-center">
                  <Brain className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Neuralia</h3>
                  <Badge variant="secondary" className="bg-purple-800 text-purple-200 border-purple-700">
                    <Zap className="w-3 h-3 mr-1" />
                    Vibe Coding
                  </Badge>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                Creamos portales neuronales que transforman la interacción humano-IA a través de conexiones auténticas,
                comprensión emocional y personalización profunda.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span>contacto@neuralia.ai</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="w-5 h-5 text-purple-400" />
                  <span>+56 9 1234 5678</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <span>Santiago, Chile</span>
                </div>
              </div>

              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <div key={category}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold text-lg mb-4 text-white">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-white/10 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-300">
              <span>© 2024 Neuralia. Hecho con</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>en Chile</span>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-green-400" />
                <span>15+ Idiomas</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-blue-400" />
                <span>50K+ Usuarios</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span>99.9% Uptime</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
