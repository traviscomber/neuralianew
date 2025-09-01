"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Brain, Bot, Palette, ArrowRight, Zap, Target, Users, TrendingUp } from "lucide-react"

const problems = [
  {
    icon: Users,
    title: "Atención al Cliente 24/7",
    description:
      "Los clientes esperan respuestas inmediatas, pero mantener personal disponible las 24 horas es costoso e ineficiente.",
  },
  {
    icon: Zap,
    title: "Procesos Manuales Lentos",
    description:
      "Tareas repetitivas consumen tiempo valioso que podría dedicarse a actividades estratégicas de mayor valor.",
  },
  {
    icon: Target,
    title: "Decisiones sin Datos",
    description: "Falta de análisis predictivo lleva a decisiones basadas en intuición en lugar de datos concretos.",
  },
  {
    icon: TrendingUp,
    title: "Escalabilidad Limitada",
    description: "El crecimiento se ve limitado por la capacidad humana de procesar información y atender clientes.",
  },
]

const services = [
  {
    id: "fullstack",
    icon: Brain,
    title: "Full Stack AI Systems",
    description:
      "Nuestro brutal programador T3 construye sistemas de IA que no solo funcionan, sino que dominan. Desde retail hasta agricultura, pasando por fintech y salud - si existe un rubro, nosotros lo conquistamos con código que hace que la competencia llore.",
    features: [
      "Análisis predictivo avanzado",
      "Integración con sistemas existentes",
      "Escalabilidad automática",
      "Monitoreo en tiempo real",
    ],
  },
  {
    id: "agents",
    icon: Bot,
    title: "AI Agents & Automations",
    description:
      "El samurai Raph forja agentes de IA como katanas digitales: cada uno perfecto para su misión. Coaching de carrera que inspira, análisis de suelos que predice cosechas, idiomas que se aprenden solos, CRM que vende mientras duermes, y generadores que crean arte, video y datos como por arte de magia.",
    features: [
      "Chatbots conversacionales",
      "Automatización de workflows",
      "Procesamiento de lenguaje natural",
      "Integración multicanal",
    ],
  },
  {
    id: "design",
    icon: Palette,
    title: "Multichannel Support & Web Design",
    description:
      "La maestra Irina, directora rusa de diseño, esculpe interfaces que enamoran y experiencias que convierten. WhatsApp, web, email, redes sociales - donde estén tus clientes, ahí estamos nosotros con diseño que no solo se ve increíble, sino que vende como loco.",
    features: [
      "Diseño UI/UX profesional",
      "Soporte WhatsApp integrado",
      "Interfaces responsive",
      "Identidad corporativa completa",
    ],
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-muted/30 dark:bg-muted/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge
            variant="outline"
            className="mb-4 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800"
          >
            La Problemática
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
            ¿Por qué tu negocio necesita IA?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Las empresas que no adoptan IA se quedan atrás. Estos son los desafíos que enfrentan diariamente.
          </p>
        </motion.div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-l-4 border-l-red-500 dark:border-l-red-400">
                <CardContent className="p-6">
                  <problem.icon className="w-12 h-12 text-red-500 dark:text-red-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-3">{problem.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{problem.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Solution Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent w-24"></div>
            <ArrowRight className="w-8 h-8 text-purple-500 mx-4" />
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent w-24"></div>
          </div>
          <Badge
            variant="outline"
            className="mb-4 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800"
          >
            La Solución N3uralia
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400 bg-clip-text text-transparent">
            Transforma tu negocio con soluciones full stack de IA
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desarrollamos sistemas completos de inteligencia artificial que automatizan procesos, mejoran la experiencia
            del cliente y potencian el crecimiento de tu empresa.
          </p>
        </motion.div>

        {/* Services Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Tabs defaultValue="fullstack" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-background/50 dark:bg-background/30">
              {services.map((service) => (
                <TabsTrigger
                  key={service.id}
                  value={service.id}
                  className="data-[state=active]:bg-purple-100 dark:data-[state=active]:bg-purple-900/30 data-[state=active]:text-purple-700 dark:data-[state=active]:text-purple-300"
                >
                  <service.icon className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">{service.title}</span>
                  <span className="sm:hidden">{service.title.split(" ")[0]}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {services.map((service) => (
              <TabsContent key={service.id} value={service.id}>
                <Card className="border-2 border-purple-200 dark:border-purple-800">
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="flex items-center mb-4">
                          <service.icon className="w-8 h-8 text-purple-600 dark:text-purple-400 mr-3" />
                          <h3 className="text-2xl font-bold">{service.title}</h3>
                        </div>
                        <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {service.features.map((feature, index) => (
                            <div key={index} className="flex items-center">
                              <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="relative">
                        <div className="aspect-square bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-2xl flex items-center justify-center">
                          <service.icon className="w-24 h-24 text-purple-600 dark:text-purple-400" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}
