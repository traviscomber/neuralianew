"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Users,
  MapPin,
  Clock,
  MessageSquare,
  ArrowRight,
  Bot,
  Code,
  Database,
  Globe,
  Network,
  Layers,
  Workflow,
} from "lucide-react"

const humanTeam = [
  {
    name: "Rafael Vial",
    role: "Frontend Engineer",
    location: "Santiago, Chile",
    timezone: "CLT (UTC-3)",
    image: "/placeholder-user.jpg",
    expertise: ["React", "Next.js", "TypeScript", "UI/UX"],
    description: "Especialista en interfaces de usuario modernas y experiencias conversacionales intuitivas.",
    availability: "Lun-Vie 9:00-18:00 CLT",
  },
  {
    name: "Juan Vial",
    role: "Fullstack AI Engineer",
    location: "Santiago, Chile",
    timezone: "CLT (UTC-3)",
    image: "/placeholder-user.jpg",
    expertise: ["Python", "OpenAI", "Node.js", "PostgreSQL"],
    description: "Arquitecto de sistemas IA y desarrollador full-stack con experiencia en soluciones empresariales.",
    availability: "Lun-Vie 9:00-18:00 CLT",
  },
]

const coreCapabilities = [
  {
    title: "Agentes IA Personalizados",
    description: "Creamos agentes especializados según las necesidades específicas de cada cliente",
    icon: Bot,
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Conexiones MCP",
    description: "Implementamos Model Context Protocol para integrar cualquier herramienta o sistema",
    icon: Network,
    color: "from-purple-500 to-purple-600",
  },
  {
    title: "Sistemas RAG",
    description: "Desarrollamos Retrieval-Augmented Generation para conocimiento empresarial específico",
    icon: Database,
    color: "from-green-500 to-green-600",
  },
  {
    title: "APIs Universales",
    description: "Conectamos CUALQUIER API existente - REST, GraphQL, WebSockets, gRPC",
    icon: Workflow,
    color: "from-orange-500 to-orange-600",
  },
  {
    title: "Multi-Lenguaje",
    description: "Programamos en Python, JavaScript, Go, Rust, Java - el lenguaje que necesites",
    icon: Code,
    color: "from-cyan-500 to-cyan-600",
  },
  {
    title: "Arquitectura Escalable",
    description: "Diseñamos sistemas que crecen con tu empresa - desde startup hasta enterprise",
    icon: Layers,
    color: "from-red-500 to-red-600",
  },
]

const teamStats = [
  { number: "2", label: "Humanos Core", icon: Users },
  { number: "∞", label: "Agentes IA", icon: Bot },
  { number: "ANY", label: "API/Lenguaje", icon: Globe },
  { number: "24/7", label: "Disponibilidad", icon: Clock },
]

export function TeamSection() {
  return (
    <section
      id="team"
      className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white border-0 text-lg px-6 py-2 transition-colors duration-300">
            <Users className="w-4 h-4 mr-2" />
            Equipo Core + Agentes Ilimitados
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent transition-colors duration-300">
            Somos el{" "}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400 bg-clip-text text-transparent">
              CORE
            </span>{" "}
            que conecta todo
          </h2>
          <p className="text-xl text-muted-foreground dark:text-slate-300 max-w-4xl mx-auto transition-colors duration-300">
            <strong>2 humanos expertos</strong> + <strong>agentes IA ilimitados</strong> que creamos según necesites.
            Conectamos <strong>CUALQUIER API</strong>, programamos en <strong>CUALQUIER lenguaje</strong>, implementamos{" "}
            <strong>MCP</strong> y <strong>RAG</strong> como requiera tu proyecto.
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
              className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 rounded-2xl"
            >
              <CardContent className="p-6 text-center">
                <stat.icon className="w-8 h-8 text-slate-700 dark:text-slate-300 mx-auto mb-3 transition-colors duration-300" />
                <div className="text-3xl font-black text-slate-900 dark:text-white mb-1 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400 font-semibold transition-colors duration-300">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Core Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-4 text-slate-900 dark:text-white transition-colors duration-300">
            🚀 Capacidades Core Ilimitadas
          </h3>
          <p className="text-center text-lg text-slate-600 dark:text-slate-300 mb-12 max-w-4xl mx-auto">
            No somos solo un equipo fijo. Somos el <strong>núcleo técnico</strong> que crea, conecta y despliega
            <strong> cualquier solución IA</strong> que necesites, usando <strong>cualquier tecnología</strong>{" "}
            disponible.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 h-full rounded-2xl group">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${capability.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <capability.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2 transition-colors duration-300">
                          {capability.title}
                        </h4>
                      </div>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed transition-colors duration-300">
                      {capability.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Human Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-slate-900 dark:text-white transition-colors duration-300">
            👥 Equipo Humano Core
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {humanTeam.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 h-full rounded-2xl">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={member.image || "/placeholder.svg"} alt={member.name} />
                        <AvatarFallback className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-lg font-bold transition-colors duration-300">
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1 transition-colors duration-300">
                          {member.name}
                        </h4>
                        <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2 transition-colors duration-300">
                          {member.role}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 transition-colors duration-300">
                          <MapPin className="w-4 h-4" />
                          <span>{member.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed transition-colors duration-300">
                      {member.description}
                    </p>

                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-slate-900 dark:text-white mb-2 transition-colors duration-300">
                          Especialidades:
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {member.expertise.map((skill) => (
                            <Badge
                              key={skill}
                              variant="secondary"
                              className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors duration-300"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 transition-colors duration-300">
                        <Clock className="w-4 h-4" />
                        <span>{member.availability}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Universal Integration Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-500 dark:via-purple-500 dark:to-pink-500 text-white border-0 rounded-2xl">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-4">🌐 Conectividad Universal</h3>
                <p className="text-xl opacity-90 max-w-4xl mx-auto">
                  <strong>CUALQUIER API</strong> • <strong>CUALQUIER Lenguaje</strong> •{" "}
                  <strong>CUALQUIER Sistema</strong>
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="bg-white/10 rounded-xl p-6">
                  <Network className="w-12 h-12 mx-auto mb-4" />
                  <h4 className="text-lg font-bold mb-2">APIs & Protocolos</h4>
                  <p className="text-sm opacity-90">REST • GraphQL • WebSockets • gRPC • SOAP • MCP</p>
                </div>

                <div className="bg-white/10 rounded-xl p-6">
                  <Code className="w-12 h-12 mx-auto mb-4" />
                  <h4 className="text-lg font-bold mb-2">Lenguajes</h4>
                  <p className="text-sm opacity-90">Python • JavaScript • Go • Rust • Java • C# • PHP</p>
                </div>

                <div className="bg-white/10 rounded-xl p-6">
                  <Database className="w-12 h-12 mx-auto mb-4" />
                  <h4 className="text-lg font-bold mb-2">Sistemas</h4>
                  <p className="text-sm opacity-90">SQL • NoSQL • Vector DB • Cloud • On-Premise</p>
                </div>
              </div>

              <div className="text-center mt-8">
                <p className="text-lg mb-6 opacity-90">
                  <strong>No importa qué tecnología uses</strong> - nosotros nos adaptamos y conectamos todo.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Methodology Explanation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-500 dark:to-blue-500 text-white border-0 rounded-2xl max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Metodología "Human in the Middle"</h3>
              <p className="text-lg mb-6 opacity-90">
                👥 <strong>2 Humanos Core</strong> diseñan y supervisan • 🤖 <strong>Agentes IA Ilimitados</strong> que
                creamos según necesites • 🔗 <strong>Conexiones Universales</strong> a cualquier sistema existente
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">MCP Protocol</Badge>
                <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">RAG Systems</Badge>
                <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">Custom Agents</Badge>
                <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">Universal APIs</Badge>
              </div>
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-3 rounded-xl"
                asChild
              >
                <a
                  href="https://wa.me/56940946660?text=Hola%20N3uralia%2C%20necesito%20conectar%20mi%20sistema%20con%20IA%20-%20¿pueden%20ayudarme%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Conectar Mi Sistema
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
