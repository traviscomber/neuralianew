"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, TrendingUp, Users, MessageCircle, Zap, Shield, BarChart3, Headphones, ArrowRight } from "lucide-react"

const problems = [
  {
    icon: Clock,
    title: "Tiempo perdido en tareas repetitivas",
    description: "Tus empleados gastan horas en responder las mismas preguntas una y otra vez.",
    impact: "40% del tiempo laboral",
  },
  {
    icon: Users,
    title: "Atención al cliente limitada",
    description: "Solo puedes atender clientes en horario laboral, perdiendo oportunidades 24/7.",
    impact: "60% de consultas fuera de horario",
  },
  {
    icon: TrendingUp,
    title: "Competencia con ventaja tecnológica",
    description: "Tus competidores ya usan IA para ser más eficientes y captar más clientes.",
    impact: "25% más de conversiones",
  },
  {
    icon: BarChart3,
    title: "Decisiones basadas en intuición",
    description: "Sin datos automatizados, tomas decisiones importantes sin información completa.",
    impact: "30% de decisiones subóptimas",
  },
]

const solutions = [
  {
    icon: MessageCircle,
    title: "Chatbots Inteligentes",
    description: "Responden consultas complejas 24/7 con la personalidad de tu marca.",
  },
  {
    icon: Zap,
    title: "Automatización de Procesos",
    description: "Elimina tareas repetitivas y libera tiempo para actividades estratégicas.",
  },
  {
    icon: Shield,
    title: "Análisis Predictivo",
    description: "Anticipa tendencias y toma decisiones basadas en datos reales.",
  },
  {
    icon: Headphones,
    title: "Soporte Multicanal",
    description: "WhatsApp, web, email - tu IA funciona donde están tus clientes.",
  },
]

const stats = [
  { number: "85%", label: "Reducción en tiempo de respuesta", color: "from-purple-500 to-blue-500" },
  { number: "3x", label: "Más consultas atendidas", color: "from-blue-500 to-indigo-500" },
  { number: "24/7", label: "Disponibilidad garantizada", color: "from-indigo-500 to-purple-500" },
  { number: "48h", label: "Tiempo de implementación", color: "from-purple-500 to-pink-500" },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30 dark:bg-muted/10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge
            variant="secondary"
            className="mb-4 bg-gradient-to-r from-red-100 to-orange-100 dark:from-red-900/30 dark:to-orange-900/30 text-red-700 dark:text-red-300 border-red-200 dark:border-red-700"
          >
            <Clock className="w-4 h-4 mr-2" />
            La problemática actual
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
            ¿Por qué tu negocio{" "}
            <span className="bg-gradient-to-r from-red-600 to-orange-600 dark:from-red-400 dark:to-orange-400 bg-clip-text text-transparent">
              pierde dinero
            </span>{" "}
            cada día?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mientras no implementas IA, tus competidores ya están automatizando procesos, mejorando la experiencia del
            cliente y aumentando sus ventas.
          </p>
        </motion.div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-2 border-red-100 dark:border-red-900/30 hover:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-red-500/10 transition-all duration-300 h-full bg-card">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                    <problem.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-card-foreground mb-2">{problem.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{problem.description}</p>
                  <Badge variant="destructive" className="text-xs">
                    {problem.impact}
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Solutions Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge
            variant="secondary"
            className="mb-4 bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 text-green-700 dark:text-green-300 border-green-200 dark:border-green-700"
          >
            <Zap className="w-4 h-4 mr-2" />
            La solución N3uralia
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
            Transforma tu negocio con{" "}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400 bg-clip-text text-transparent">
              IA conversacional
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Implementamos sistemas de IA que se integran perfectamente con tu negocio y empiezan a generar resultados
            desde el primer día.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-2 border-green-100 dark:border-green-900/30 hover:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-green-500/10 transition-all duration-300 h-full bg-card">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                    <solution.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-card-foreground mb-2">{solution.title}</h3>
                  <p className="text-sm text-muted-foreground">{solution.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-700 dark:to-blue-700 rounded-2xl p-8 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-8">Resultados que puedes esperar</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            asChild
          >
            <a
              href="https://wa.me/56940946660?text=Hola%20N3uralia%2C%20quiero%20implementar%20IA%20en%20mi%20negocio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Implementar IA en mi negocio
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
