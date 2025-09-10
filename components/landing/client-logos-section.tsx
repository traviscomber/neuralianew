"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Building2, Sprout, GraduationCap, TrendingUp, Users, Clock } from "lucide-react"
import Image from "next/image"

const clients = [
  {
    name: "EcosueloLab",
    logo: "/tech-icons/react-logo.png",
    industry: "AgTech",
    description: "Plataforma completa de análisis de suelo con IA conversacional",
    results: "90% reducción tiempo análisis, 95% satisfacción cliente",
    icon: Sprout,
    color: "from-green-500 to-green-600",
    url: "ecosuelolab.com",
    deliverables: ["Dashboard web completo", "API REST funcional", "Agente WhatsApp IA"],
  },
  {
    name: "Parrotfy ERP",
    logo: "/tech-icons/nodejs-logo.png",
    industry: "Enterprise Software",
    description: "Suite completa de Business Intelligence con agentes conversacionales",
    results: "300% ROI primer año, 80% automatización consultas",
    icon: Building2,
    color: "from-blue-500 to-blue-600",
    url: "parrotfy.com",
    deliverables: ["Dashboards BI interactivos", "Integraciones ERP múltiples", "Agente empresarial"],
  },
  {
    name: "Despega Tu Carrera",
    logo: "/tech-icons/postgresql-logo.png",
    industry: "EdTech",
    description: "Ecosistema completo de coaching profesional con matching IA",
    results: "85% colocación laboral, 60% mejora finalización cursos",
    icon: GraduationCap,
    color: "from-purple-500 to-purple-600",
    url: "despegacarrera.com",
    deliverables: ["Portal web matching IA", "Sistema coaching completo", "Analytics profesionales"],
  },
]

const stats = [
  { value: "50+", label: "Proyectos Entregados", icon: CheckCircle, color: "text-green-400" },
  { value: "95%", label: "Satisfacción Cliente", icon: Users, color: "text-blue-400" },
  { value: "250%", label: "ROI Promedio", icon: TrendingUp, color: "text-purple-400" },
  { value: "48h", label: "Tiempo Setup", icon: Clock, color: "text-orange-400" },
]

const techStack = [
  { name: "React", logo: "/tech-icons/react-logo.png" },
  { name: "Node.js", logo: "/tech-icons/nodejs-logo.png" },
  { name: "PostgreSQL", logo: "/tech-icons/postgresql-logo.png" },
  { name: "OpenAI", logo: "/tech-icons/openai-logo.png" },
  { name: "Vercel", logo: "/tech-icons/vercel-logo.svg" },
  { name: "Supabase", logo: "/tech-icons/supabase-logo.svg" },
]

export function ClientLogosSection() {
  return (
    <section className="py-20 bg-slate-900 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-6 bg-green-600 text-white border-0 text-sm px-4 py-2 font-semibold">
            <CheckCircle className="w-4 h-4 mr-2" />
            Proyectos Reales en Producción
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Empresas que confían en{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">N3uralia</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Soluciones empresariales entregadas y funcionando en producción con resultados medibles y verificables.
          </p>
        </motion.div>

        {/* Client Success Stories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-800 border border-slate-700 hover:border-slate-600 transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${client.color} rounded-xl flex items-center justify-center`}
                      >
                        <client.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{client.name}</h3>
                        <p className="text-sm text-slate-400">{client.industry}</p>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-800 border-green-200 text-xs font-semibold">
                      ✅ ENTREGADO
                    </Badge>
                  </div>

                  <p className="text-slate-300 mb-4 leading-relaxed">{client.description}</p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Entregables:</h4>
                    <div className="space-y-2">
                      {client.deliverables.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-slate-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-slate-900 rounded-lg p-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Resultados Verificados:</h4>
                    <p className="text-sm text-green-400 font-medium">{client.results}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center mb-3">
                <div className="p-3 bg-slate-800 rounded-xl">
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-slate-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold text-white mb-8">Tecnologías Enterprise</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {techStack.map((tech, index) => (
              <div key={index} className="flex items-center space-x-3">
                <Image
                  src={tech.logo || "/placeholder.svg"}
                  alt={tech.name}
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
                <span className="text-slate-400 text-sm font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
