"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Brain, Zap, MessageCircle, Database, Bot, Code, Globe, Shield } from "lucide-react"

const features = [
  {
    icon: Heart,
    title: "Conexión Emocional Real",
    description:
      "Desarrollamos IA que reconoce patrones emocionales y responde con empatía auténtica. Como en Despega Tu Carrera, donde la IA detecta frustración profesional y ofrece apoyo personalizado.",
    color: "from-red-500 to-pink-500",
    bgColor: "bg-red-50",
    tech: "Análisis de sentimientos + GPT-4",
  },
  {
    icon: Database,
    title: "Integración API Completa",
    description:
      "Conectamos tu IA con cualquier sistema existente. En EcosueloLab procesamos datos de suelo via API y enviamos resultados por WhatsApp con Twilio. En Parrotfy consultamos endpoints ERP en tiempo real.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    tech: "REST APIs + WebHooks + Twilio",
  },
  {
    icon: Bot,
    title: "Agentes Especializados",
    description:
      "Cada IA tiene personalidad y expertise únicos. Desde análisis técnico de suelos hasta coaching profesional y consultas empresariales. Cada agente domina su área como un experto humano.",
    color: "from-purple-500 to-indigo-500",
    bgColor: "bg-purple-50",
    tech: "Prompt Engineering + RAG",
  },
  {
    icon: MessageCircle,
    title: "Conversación Multi-Canal",
    description:
      "WhatsApp, web chat, integración ERP. Tu IA funciona donde tus usuarios ya están. Desarrollamos interfaces nativas para cada plataforma manteniendo la misma personalidad.",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    tech: "WhatsApp API + Web Components",
  },
  {
    icon: Code,
    title: "Arquitectura Escalable",
    description:
      "Next.js 15, Supabase, TypeScript. Stack moderno que crece contigo. Desde prototipos hasta sistemas empresariales con miles de usuarios simultáneos.",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
    tech: "Next.js + Supabase + TypeScript",
  },
  {
    icon: Brain,
    title: "Memoria Contextual",
    description:
      "Tu IA recuerda conversaciones pasadas y aprende de cada interacción. Como un asistente personal que conoce tu historial y preferencias, mejorando cada día.",
    color: "from-violet-500 to-purple-500",
    bgColor: "bg-violet-50",
    tech: "Vector DB + Embeddings",
  },
  {
    icon: Zap,
    title: "Respuestas Instantáneas",
    description:
      "Streaming en tiempo real para respuestas fluidas. Los usuarios ven la IA 'pensando' y respondiendo naturalmente, como en una conversación real.",
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-50",
    tech: "AI SDK + Streaming",
  },
  {
    icon: Shield,
    title: "Datos Seguros",
    description:
      "Encriptación end-to-end, cumplimiento GDPR, hosting en Chile. Tus datos y los de tus usuarios están protegidos con estándares bancarios.",
    color: "from-gray-600 to-gray-800",
    bgColor: "bg-gray-50",
    tech: "Encryption + GDPR + Local Hosting",
  },
  {
    icon: Globe,
    title: "Multiidioma Nativo",
    description:
      "Español chileno, inglés técnico, jerga empresarial. Cada IA habla el idioma de tu industria y se adapta al contexto cultural de tus usuarios.",
    color: "from-teal-500 to-cyan-500",
    bgColor: "bg-teal-50",
    tech: "i18n + Cultural Context",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge
            variant="secondary"
            className="mb-4 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 border-purple-200"
          >
            <Code className="w-4 h-4 mr-2" />
            Stack Tecnológico Completo
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            ¿Por qué es{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              diferente
            </span>
            ?
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            No desarrollamos chatbots genéricos. Creamos sistemas de IA especializados que se integran profundamente con
            tu negocio, hablan tu idioma y entienden tu industria.
            <span className="font-semibold text-gray-800">
              {" "}
              Cada línea de código está pensada para conectar de verdad con humanos.
            </span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                className={`${feature.bgColor} border-2 border-opacity-20 hover:shadow-xl transition-all duration-300 h-full group hover:-translate-y-1`}
              >
                <CardContent className="p-6">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">{feature.description}</p>
                  <Badge variant="outline" className="text-xs font-mono bg-white/50">
                    {feature.tech}
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Experiencia Comprobada</h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              Hemos desarrollado sistemas de IA para agricultura (EcosueloLab), recursos humanos (Despega Tu Carrera), y
              gestión empresarial (Parrotfy). Cada proyecto nos ha enseñado cómo crear tecnología que realmente sirve a
              las personas.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
