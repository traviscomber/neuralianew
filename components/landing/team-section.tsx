"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Users,
  Clock,
  MessageSquare,
  ArrowRight,
  Code,
  Brain,
  Network,
  Database,
  Shield,
  Workflow,
  Globe,
  Zap,
  Target,
} from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const teamSchedules = [
  {
    region: {
      en: "Americas Team",
      es: "Equipo Américas",
    },
    timezone: "UTC-3 to UTC-8",
    hours: "06:00 - 18:00",
    roles: {
      en: ["Frontend Engineers", "UX/UI Designers", "Project Managers"],
      es: ["Ingenieros Frontend", "Diseñadores UX/UI", "Gestores de Proyecto"],
    },
    icon: Globe,
    color: "bg-blue-600",
  },
  {
    region: {
      en: "Europe & Africa Team",
      es: "Equipo Europa & África",
    },
    timezone: "UTC+0 to UTC+3",
    hours: "08:00 - 20:00",
    roles: {
      en: ["Backend Engineers", "AI Specialists", "DevOps Engineers"],
      es: ["Ingenieros Backend", "Especialistas IA", "Ingenieros DevOps"],
    },
    icon: Brain,
    color: "bg-green-600",
  },
  {
    region: {
      en: "Asia-Pacific Team",
      es: "Equipo Asia-Pacífico",
    },
    timezone: "UTC+5 to UTC+12",
    hours: "09:00 - 21:00",
    roles: {
      en: ["AI Researchers", "Data Scientists", "Quality Assurance"],
      es: ["Investigadores IA", "Científicos de Datos", "Control de Calidad"],
    },
    icon: Zap,
    color: "bg-purple-600",
  },
]

const coreCapabilities = [
  {
    title: {
      en: "Custom AI Agents",
      es: "Agentes IA Personalizados",
    },
    description: {
      en: "We develop conversational agents specific to each business use case",
      es: "Desarrollamos agentes conversacionales específicos para cada caso de uso empresarial",
    },
    icon: Brain,
  },
  {
    title: {
      en: "API Integrations",
      es: "Integraciones API",
    },
    description: {
      en: "We connect any existing system: REST, GraphQL, WebSockets, gRPC",
      es: "Conectamos cualquier sistema existente: REST, GraphQL, WebSockets, gRPC",
    },
    icon: Network,
  },
  {
    title: {
      en: "RAG Systems",
      es: "Sistemas RAG",
    },
    description: {
      en: "We implement Retrieval-Augmented Generation for enterprise knowledge",
      es: "Implementamos Retrieval-Augmented Generation para conocimiento empresarial",
    },
    icon: Database,
  },
  {
    title: {
      en: "Full-Stack Development",
      es: "Desarrollo Full-Stack",
    },
    description: {
      en: "Complete solutions from frontend to backend and database",
      es: "Soluciones completas desde frontend hasta backend y base de datos",
    },
    icon: Code,
  },
  {
    title: {
      en: "Enterprise Security",
      es: "Seguridad Enterprise",
    },
    description: {
      en: "ISO 27001 compliance, end-to-end encryption and security audits",
      es: "Cumplimiento ISO 27001, encriptación end-to-end y auditorías de seguridad",
    },
    icon: Shield,
  },
  {
    title: {
      en: "Process Automation",
      es: "Automatización de Procesos",
    },
    description: {
      en: "Automated workflows that integrate AI with existing enterprise systems",
      es: "Workflows automatizados que integran IA con sistemas empresariales existentes",
    },
    icon: Workflow,
  },
]

const teamStats = [
  {
    number: "24/7",
    label: {
      en: "Global Coverage",
      es: "Cobertura Global",
    },
    icon: Clock,
  },
  {
    number: "50+",
    label: {
      en: "Projects Delivered",
      es: "Proyectos Entregados",
    },
    icon: Target,
  },
  {
    number: "3",
    label: {
      en: "Time Zones",
      es: "Zonas Horarias",
    },
    icon: Globe,
  },
  {
    number: "48h",
    label: {
      en: "Setup Time",
      es: "Tiempo de Setup",
    },
    icon: Zap,
  },
]

export function TeamSection() {
  const { language } = useLanguage()

  return (
    <section id="team" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <Badge className="bg-primary text-primary-foreground border-0 text-lg px-8 py-3 rounded-full mb-6">
            <Users className="w-5 h-5 mr-2" />
            {language === "en" ? "About Us" : "Nosotros"}
          </Badge>
          <h2 className="text-5xl font-light text-foreground mb-6">
            {language === "en" ? "Global Team of" : "Equipo Global de"}
            <span className="font-bold block text-primary">
              {language === "en" ? "Engineers, Designers & AI" : "Ingenieros, Diseñadores e IA"}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-4xl mx-auto">
            {language === "en"
              ? "We are a distributed team of specialized engineers, creative designers, and advanced AI systems working together across three time zones to deliver exceptional results 24/7."
              : "Somos un equipo distribuido de ingenieros especializados, diseñadores creativos y sistemas de IA avanzados trabajando juntos en tres zonas horarias para entregar resultados excepcionales 24/7."}
          </p>
        </motion.div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {teamStats.map((stat, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label[language]}</div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Global Schedule */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-center mb-12 text-foreground">
            {language === "en" ? "24/7 Global Operations" : "Operaciones Globales 24/7"}
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {teamSchedules.map((schedule, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="bg-card border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-12 h-12 ${schedule.color} rounded-xl flex items-center justify-center`}>
                        <schedule.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-foreground">{schedule.region[language]}</h4>
                        <p className="text-sm text-muted-foreground">{schedule.timezone}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-4">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm font-medium text-foreground">
                          {language === "en" ? "Active Hours:" : "Horario Activo:"} {schedule.hours}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h5 className="font-semibold text-foreground mb-3">
                        {language === "en" ? "Team Roles:" : "Roles del Equipo:"}
                      </h5>
                      {schedule.roles[language].map((role, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-muted rounded-full"></div>
                          <span className="text-sm text-muted-foreground">{role}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Core Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-center mb-12 text-foreground">
            {language === "en" ? "Core Technical Capabilities" : "Capacidades Técnicas Core"}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="bg-card border-border hover:border-primary/40 hover:shadow-lg transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                        <capability.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <h4 className="text-lg font-bold text-foreground">{capability.title[language]}</h4>
                    </div>
                    <p className="text-muted-foreground leading-relaxed font-light">{capability.description[language]}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Collaboration Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Card className="bg-card border-primary/20 text-foreground max-w-4xl mx-auto rounded-2xl">
            <CardContent className="p-10">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Users className="w-8 h-8 text-primary" />
                <Brain className="w-8 h-8 text-primary" />
                <Code className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                {language === "en" ? "Human + AI Collaboration" : "Colaboración Humano + IA"}
              </h3>
              <p className="text-lg mb-6 text-muted-foreground font-light">
                {language === "en"
                  ? "Our unique approach combines human creativity and expertise with AI efficiency and precision. This synergy allows us to deliver solutions that are both innovative and reliable, working around the clock to meet your business needs."
                  : "Nuestro enfoque único combina la creatividad y experiencia humana con la eficiencia y precisión de la IA. Esta sinergia nos permite entregar soluciones que son tanto innovadoras como confiables, trabajando las 24 horas para satisfacer las necesidades de tu negocio."}
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Professional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="bg-primary text-primary-foreground border-0 max-w-4xl mx-auto rounded-2xl">
            <CardContent className="p-10">
              <h3 className="text-2xl font-bold mb-4">
                {language === "en"
                  ? "Ready to work with our global team?"
                  : "¿Listo para trabajar con nuestro equipo global?"}
              </h3>
              <p className="text-lg mb-8 text-primary-foreground/80 font-light">
                {language === "en"
                  ? "Our distributed team of engineers, designers, and AI systems is ready to tackle your most complex challenges. Let's discuss how we can help transform your business."
                  : "Nuestro equipo distribuido de ingenieros, diseñadores y sistemas de IA está listo para abordar tus desafíos más complejos. Hablemos de cómo podemos ayudar a transformar tu negocio."}
              </p>
              <Button
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-8 py-4 rounded-xl transition-colors"
                asChild
              >
                <a
                  href="https://wa.me/56940946660?text=Hola%20N3uralia%2C%20necesito%20una%20consulta%20técnica%20para%20mi%20proyecto%20empresarial"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  {language === "en" ? "Start Conversation" : "Iniciar Conversación"}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
