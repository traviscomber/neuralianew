"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Building2, Sprout, GraduationCap, TrendingUp } from "lucide-react"

const clients = [
  {
    name: "EcosueloLab",
    logo: "/tech-icons/react-logo.png", // Using existing tech icon as placeholder
    industry: "AgTech",
    description: "Plataforma completa de análisis agrícola",
    results: "95% satisfacción, 70% reducción tiempo análisis",
    icon: Sprout,
    color: "from-green-500 to-green-600",
  },
  {
    name: "Parrotfy ERP",
    logo: "/tech-icons/nodejs-logo.png", // Using existing tech icon as placeholder
    industry: "Enterprise Software",
    description: "Suite completa de Business Intelligence",
    results: "92% satisfacción, 80% automatización consultas",
    icon: Building2,
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "Despega Tu Carrera",
    logo: "/tech-icons/postgresql-logo.png", // Using existing tech icon as placeholder
    industry: "EdTech",
    description: "Ecosistema completo de coaching profesional",
    results: "88% colocación laboral, 60% mejora finalización",
    icon: GraduationCap,
    color: "from-purple-500 to-purple-600",
  },
]

const stats = [
  { value: "50+", label: "Proyectos Entregados", icon: CheckCircle },
  { value: "250%", label: "ROI Promedio", icon: TrendingUp },
  { value: "99.9%", label: "Uptime SLA", icon: Building2 },
  { value: "24/7", label: "Soporte Global", icon: CheckCircle },
]

export function ClientLogosSection() {
  return (
    <section className="py-16 bg-slate-950 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 bg-gradient-to-r from-green-600 to-blue-600 text-white border-0 text-sm px-4 py-2 font-semibold">
            <CheckCircle className="w-4 h-4 mr-2" />
            Clientes Enterprise Reales
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Empresas que confían en{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">N3uralia</span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Proyectos reales entregados y funcionando en producción con resultados medibles
          </p>
        </motion.div>

        {/* Client Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-slate-600 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${client.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <client.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{client.name}</h3>
                    <p className="text-sm text-slate-400">{client.industry}</p>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-800 border-green-200 text-xs">✅ ENTREGADO</Badge>
              </div>

              <p className="text-slate-300 text-sm mb-3">{client.description}</p>

              <div className="bg-slate-800/50 rounded-lg p-3">
                <p className="text-xs text-slate-400 mb-1">Resultados Verificados:</p>
                <p className="text-sm text-white font-medium">{client.results}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center mb-2">
                <stat.icon className="w-5 h-5 text-blue-400 mr-2" />
                <div className="text-2xl md:text-3xl font-black text-white">{stat.value}</div>
              </div>
              <div className="text-sm text-slate-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
