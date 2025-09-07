"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Users,
  Code,
  Palette,
  Brain,
  MessageCircle,
  ArrowRight,
  MapPin,
  Award,
  GraduationCap,
  Bot,
  Zap,
  Shield,
  Database,
  Globe,
  Cpu,
  Network,
  BarChart3,
} from "lucide-react"

const humanTeam = [
  {
    name: "Rafael Vial",
    role: "Ingeniero Frontend",
    education: "Ingeniero PuC UI",
    location: "Santiago, Chile",
    flag: "🇨🇱",
    specialties: ["React/Next.js", "UI/UX Implementation", "Frontend Architecture", "Performance Optimization"],
    description: "Especialista en interfaces de usuario modernas y experiencias web optimizadas",
    icon: Code,
    color: "from-blue-500 to-blue-600",
    experience: "5+ años",
    projects: "Frontend de EcosueloLab, Parrotfy UI, Despega Tu Carrera",
  },
  {
    name: "Irina Lebedeva",
    role: "UX Designer - Frontend",
    education: "Design Systems Specialist",
    location: "Moscú, Rusia",
    flag: "🇷🇺",
    specialties: ["UX Research", "Design Systems", "Frontend Design", "User Psychology"],
    description: "Diseñadora UX con enfoque en psicología del usuario y sistemas de diseño escalables",
    icon: Palette,
    color: "from-purple-500 to-purple-600",
    experience: "6+ años",
    projects: "Design System N3uralia, UX Research, Interface Design",
  },
  {
    name: "Juan Vial",
    role: "Fullstack AI Engineer",
    education: "AI & Machine Learning Specialist",
    location: "Santiago, Chile",
    flag: "🇨🇱",
    specialties: ["AI Development", "Backend Architecture", "Machine Learning", "System Integration"],
    description: "Ingeniero fullstack especializado en IA conversacional y arquitecturas escalables",
    icon: Brain,
    color: "from-green-500 to-green-600",
    experience: "7+ años",
    projects: "AI Engine N3uralia, Backend Systems, ML Models",
  },
]

const aiAgentFleet = [
  {
    name: "Neural Executive",
    role: "Agente Estratégico Senior",
    specialties: ["Análisis de Mercado", "Estrategia Empresarial", "Toma de Decisiones", "Planificación"],
    description: "Agente IA especializado en análisis estratégico y toma de decisiones empresariales complejas",
    icon: BarChart3,
    color: "from-indigo-500 to-indigo-600",
    status: "ACTIVO",
    capabilities: "Procesa 1000+ variables de mercado simultáneamente",
  },
  {
    name: "Code Architect",
    role: "Agente de Desarrollo",
    specialties: ["Arquitectura de Software", "Code Review", "Optimización", "Testing"],
    description: "Agente IA que diseña arquitecturas de software y optimiza código en tiempo real",
    icon: Cpu,
    color: "from-cyan-500 to-cyan-600",
    status: "ACTIVO",
    capabilities: "Genera y revisa 10,000+ líneas de código por hora",
  },
  {
    name: "Data Orchestrator",
    role: "Agente de Datos",
    specialties: ["ETL Processes", "Data Analysis", "ML Pipeline", "Database Optimization"],
    description: "Agente IA que gestiona flujos de datos complejos y optimiza bases de datos automáticamente",
    icon: Database,
    color: "from-emerald-500 to-emerald-600",
    status: "ACTIVO",
    capabilities: "Procesa 1TB+ de datos en tiempo real",
  },
  {
    name: "Security Guardian",
    role: "Agente de Seguridad",
    specialties: ["Threat Detection", "Security Audit", "Compliance", "Risk Assessment"],
    description: "Agente IA que monitorea seguridad 24/7 y detecta amenazas en tiempo real",
    icon: Shield,
    color: "from-red-500 to-red-600",
    status: "ACTIVO",
    capabilities: "Monitorea 100,000+ eventos de seguridad por minuto",
  },
  {
    name: "Integration Master",
    role: "Agente de Integraciones",
    specialties: ["API Management", "System Integration", "Workflow Automation", "Data Sync"],
    description: "Agente IA que gestiona integraciones complejas entre sistemas empresariales",
    icon: Network,
    color: "from-orange-500 to-orange-600",
    status: "ACTIVO",
    capabilities: "Gestiona 500+ integraciones simultáneas",
  },
  {
    name: "Global Communicator",
    role: "Agente Multiidioma",
    specialties: ["Natural Language", "Translation", "Cultural Context", "Communication"],
    description: "Agente IA que maneja comunicación en 50+ idiomas con contexto cultural",
    icon: Globe,
    color: "from-pink-500 to-pink-600",
    status: "ACTIVO",
    capabilities: "Traduce y contextualiza en tiempo real",
  },
]

const teamStats = [
  { icon: Users, label: "Humanos + IA", value: "3+6", description: "Equipo híbrido" },
  { icon: Bot, label: "Agentes IA", value: "6", description: "Especializados activos" },
  { icon: Zap, label: "Capacidad", value: "24/7", description: "Operación continua" },
  { icon: Award, label: "Metodología", value: "HitM", description: "Human in the Middle" },
]

export function TeamSection() {
  return (
    <section id="team" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-6 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 text-lg px-6 py-2 font-semibold transition-colors duration-300">
            <Users className="w-4 h-4 mr-2" />
            Equipo Híbrido: Humanos + IA
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-slate-900 dark:text-white tracking-tight transition-colors duration-300">
            Metodología{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Human in the Middle
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed transition-colors duration-300">
            Combinamos la creatividad y experiencia humana con la potencia de nuestros agentes IA especializados. El
            resultado: proyectos más rápidos, precisos y escalables.
          </p>
        </motion.div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {teamStats.map((stat, index) => (
            <Card
              key={index}
              className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 rounded-2xl"
            >
              <CardContent className="p-6 text-center">
                <stat.icon className="w-8 h-8 text-slate-700 dark:text-slate-300 mx-auto mb-3 transition-colors duration-300" />
                <div className="text-3xl font-black text-slate-900 dark:text-white mb-1 transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-900 dark:text-white font-bold mb-1 transition-colors duration-300">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400 font-medium transition-colors duration-300">
                  {stat.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Human Team Members */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center transition-colors duration-300">
            👥 Equipo Humano Core
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {humanTeam.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 group h-full rounded-2xl">
                  <CardContent className="p-8">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-16 h-16 bg-gradient-to-r ${member.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                        >
                          <member.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 dark:text-white transition-colors duration-300">
                            {member.name}
                          </h3>
                          <p className="text-slate-600 dark:text-slate-400 font-semibold transition-colors duration-300">
                            {member.role}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl mb-1">{member.flag}</div>
                        <Badge className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-600 font-medium text-xs transition-colors duration-300">
                          {member.experience}
                        </Badge>
                      </div>
                    </div>

                    {/* Education & Location */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <GraduationCap className="w-4 h-4 text-slate-600 dark:text-slate-400 transition-colors duration-300" />
                        <span className="text-slate-600 dark:text-slate-400 font-medium text-sm transition-colors duration-300">
                          {member.education}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-slate-600 dark:text-slate-400 transition-colors duration-300" />
                        <span className="text-slate-600 dark:text-slate-400 font-medium text-sm transition-colors duration-300">
                          {member.location}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 transition-colors duration-300">
                      {member.description}
                    </p>

                    {/* Specialties */}
                    <div className="mb-6">
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-3 transition-colors duration-300">
                        Especialidades:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((specialty, specialtyIndex) => (
                          <Badge
                            key={specialtyIndex}
                            className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-600 font-medium text-xs transition-colors duration-300"
                          >
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Projects */}
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-2 transition-colors duration-300">
                        Proyectos Destacados:
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300 text-sm font-medium transition-colors duration-300">
                        {member.projects}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* AI Agent Fleet */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center transition-colors duration-300">
            🤖 Flota de Agentes IA Especializados
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiAgentFleet.map((agent, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 group h-full rounded-2xl">
                  <CardContent className="p-6">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-12 h-12 bg-gradient-to-r ${agent.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                        >
                          <agent.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-slate-900 dark:text-white transition-colors duration-300">
                            {agent.name}
                          </h4>
                          <p className="text-slate-600 dark:text-slate-400 font-semibold text-sm transition-colors duration-300">
                            {agent.role}
                          </p>
                        </div>
                      </div>
                      <Badge className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 border-green-200 dark:border-green-700 font-bold text-xs transition-colors duration-300">
                        {agent.status}
                      </Badge>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-sm transition-colors duration-300">
                      {agent.description}
                    </p>

                    {/* Capabilities */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Zap className="w-4 h-4 text-amber-500" />
                        <span className="text-slate-900 dark:text-white font-bold text-sm transition-colors duration-300">
                          Capacidad:
                        </span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 text-sm font-medium transition-colors duration-300">
                        {agent.capabilities}
                      </p>
                    </div>

                    {/* Specialties */}
                    <div>
                      <h5 className="font-bold text-slate-900 dark:text-white text-sm mb-2 transition-colors duration-300">
                        Especialidades:
                      </h5>
                      <div className="flex flex-wrap gap-1">
                        {agent.specialties.map((specialty, specialtyIndex) => (
                          <Badge
                            key={specialtyIndex}
                            className="bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-600 font-medium text-xs transition-colors duration-300"
                          >
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Human in the Middle Methodology */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white border-0 rounded-2xl transition-colors duration-300">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Metodología "Human in the Middle"</h3>
                  <p className="text-blue-100 leading-relaxed mb-6">
                    Nuestros agentes IA trabajan bajo supervisión humana constante. Los humanos definen estrategia,
                    creatividad y toma de decisiones críticas, mientras los agentes IA ejecutan tareas complejas a
                    velocidad y escala imposibles para humanos solos.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-black mb-1">👥 3</div>
                      <div className="text-blue-100 text-sm font-semibold">Humanos Core</div>
                    </div>
                    <div>
                      <div className="text-2xl font-black mb-1">🤖 6</div>
                      <div className="text-blue-100 text-sm font-semibold">Agentes IA</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-bold mb-2">Ventajas del Equipo Híbrido</h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        ⚡ <strong>Velocidad:</strong> 10x más rápido que equipos tradicionales
                      </div>
                      <div>
                        🎯 <strong>Precisión:</strong> Supervisión humana + ejecución IA
                      </div>
                      <div>
                        📈 <strong>Escalabilidad:</strong> Capacidad 24/7 sin límites
                      </div>
                      <div>
                        💡 <strong>Creatividad:</strong> Innovación humana + potencia IA
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-slate-900 dark:bg-slate-700 hover:bg-slate-800 dark:hover:bg-slate-600 text-white font-bold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 rounded-xl"
            asChild
          >
            <a
              href="https://wa.me/56940946660?text=Hola%20N3uralia%2C%20quiero%20conocer%20más%20sobre%20la%20metodología%20Human%20in%20the%20Middle"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Conocer la metodología completa
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
