"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Brain, Mail, MapPin, Linkedin, Github, Rocket, Zap, ArrowRight, Clock, CheckCircle } from "lucide-react"

const quickLinks = [
  { name: "Inicio", href: "#inicio" },
  { name: "Casos de Éxito", href: "#casos-de-uso" },
  { name: "Características", href: "#caracteristicas" },
  { name: "Equipo", href: "#equipo" },
  { name: "FAQ", href: "#faq" },
]

const services = [
  "Chatbots Inteligentes",
  "APIs Personalizadas",
  "Automatización Completa",
  "Plataformas de IA",
  "Análisis Predictivo",
  "Integración de Sistemas",
]

const technologies = [
  "OpenAI GPT-4o",
  "Node.js & React",
  "Python & Analytics",
  "WhatsApp Business",
  "Supabase & APIs",
  "Vercel & Cloud",
]

export function Footer() {
  const currentYear = new Date().getFullYear()
  const currentTime = new Date().toLocaleTimeString("es-CL", {
    timeZone: "America/Santiago",
    hour: "2-digit",
    minute: "2-digit",
  })

  return (
    <footer className="bg-gradient-to-br from-muted/50 to-background border-t">
      <div className="container mx-auto px-4">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-16 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-gradient-to-r from-primary/20 to-blue-600/20 text-primary border-primary/30 px-4 py-2">
              <Rocket className="w-4 h-4 mr-2" />
              ¿Listo para la transformación?
            </Badge>

            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Tu competencia ya está</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                automatizando con IA
              </span>
            </h2>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Mientras otros siguen haciendo todo manual, tú podrías estar generando 3x más ingresos con automatización
              inteligente.
              <strong className="text-foreground"> ¿Hasta cuándo vas a esperar?</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <Zap className="w-5 h-5 mr-2" />
                Automatizar Mi Negocio Ahora
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 text-lg bg-transparent hover:bg-muted/50 border-2 hover:border-primary/50 transition-all duration-300"
              >
                <Brain className="w-5 h-5 mr-2" />
                Hablar con N3uralia (IA)
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Implementación en 7 días</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Soporte 24/7 incluido</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Resultados garantizados</span>
              </div>
            </div>
          </div>
        </motion.div>

        <Separator className="mb-12" />

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-primary to-blue-600 flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Neuralia</h3>
                <p className="text-sm text-muted-foreground">IA que transforma negocios</p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Desarrollamos ecosistemas completos de IA que automatizan, optimizan y transforman negocios. No solo
              chatbots, sino plataformas inteligentes que generan resultados reales.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Chile 🇨🇱</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Hora actual: {currentTime} (Santiago)</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">contacto@neuralia.cl</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-lg font-semibold">Navegación</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-lg font-semibold">Servicios</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-lg font-semibold">Tecnologías</h4>
            <div className="space-y-3">
              {technologies.map((tech, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="mr-2 mb-2 bg-primary/10 text-primary hover:bg-primary/20 text-xs"
                >
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="pt-4">
              <p className="text-xs text-muted-foreground mb-3">Síguenos:</p>
              <div className="flex gap-3">
                <Button variant="outline" size="icon" className="w-8 h-8 bg-transparent">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="w-8 h-8 bg-transparent">
                  <Github className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        <Separator className="mb-8" />

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-6 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="text-sm text-muted-foreground">
            © {currentYear} Neuralia. Todos los derechos reservados. Desarrollado con ❤️ y mucha IA en Chile.
          </div>

          <div className="flex gap-6 text-sm">
            <a href="/terminos-de-servicio" className="text-muted-foreground hover:text-primary transition-colors">
              Términos de Servicio
            </a>
            <a href="/politicas-de-privacidad" className="text-muted-foreground hover:text-primary transition-colors">
              Políticas de Privacidad
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
