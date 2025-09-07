"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Clock,
  Globe,
  Users,
  MessageCircle,
  ArrowRight,
  CheckCircle,
  MapPin,
  Headphones,
  Shield,
  Zap,
} from "lucide-react"

const timezones = [
  {
    location: "Santiago, Chile",
    timezone: "CLT (UTC-3)",
    time: "14:30",
    status: "Horario Principal",
    team: "15+ especialistas",
    services: ["Ventas", "Soporte", "Desarrollo"],
    flag: "🇨🇱",
    color: "from-blue-500 to-blue-600",
    description: "Sede principal con equipo completo de IA conversacional",
    specialties: ["Spanish AI", "Latin America", "WhatsApp Integration"],
  },
  {
    location: "Singapur",
    timezone: "SGT (UTC+8)",
    time: "01:30",
    status: "Operaciones Asia-Pacífico",
    team: "8+ consultores",
    services: ["Consultoría", "Ventas", "Soporte"],
    flag: "🇸🇬",
    color: "from-green-500 to-green-600",
    description: "Centro de expansión para mercados de habla inglesa",
    specialties: ["English AI", "Business Development", "Enterprise Sales"],
  },
  {
    location: "Moscú, Rusia",
    timezone: "MSK (UTC+3)",
    time: "20:30",
    status: "Centro de Desarrollo",
    team: "12+ ingenieros",
    services: ["Desarrollo", "I+D", "Soporte Técnico"],
    flag: "🇷🇺",
    color: "from-purple-500 to-purple-600",
    description: "Centro de investigación y desarrollo avanzado en IA",
    specialties: ["AI Research", "Technical Development", "24/7 Support"],
  },
]

const coverageStats = [
  { icon: Clock, label: "Cobertura 24/7", value: "100%", description: "Sin interrupciones" },
  { icon: Globe, label: "Zonas Horarias", value: "3", description: "Cobertura global" },
  { icon: Users, label: "Especialistas", value: "35+", description: "Equipo distribuido" },
  { icon: Headphones, label: "SLA Soporte", value: "15min", description: "Respuesta crítica" },
]

export function TimezonesSection() {
  return (
    <section
      id="timezones"
      className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-6 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-lg px-6 py-2 font-semibold transition-colors duration-300">
            <Globe className="w-4 h-4 mr-2" />
            Soporte Global 24/7
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-slate-900 dark:text-white tracking-tight transition-colors duration-300">
            Equipos especializados en{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              3 continentes
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed transition-colors duration-300">
            Cobertura 24/7 real con equipos especializados en Chile, Singapur y Rusia. Nunca estarás solo con tu
            proyecto de IA.
          </p>
        </motion.div>

        {/* Coverage Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {coverageStats.map((stat, index) => (
            <Card
              key={index}
              className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 rounded-2xl"
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

        {/* Timezone Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {timezones.map((tz, index) => (
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
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">{tz.flag}</div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white transition-colors duration-300">
                          {tz.location}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 font-medium transition-colors duration-300">
                          {tz.timezone}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black text-slate-900 dark:text-white transition-colors duration-300">
                        {tz.time}
                      </div>
                      <Badge className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-600 font-semibold text-xs transition-colors duration-300">
                        {tz.status}
                      </Badge>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 transition-colors duration-300">
                    {tz.description}
                  </p>

                  {/* Team Info */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Users className="w-5 h-5 text-slate-700 dark:text-slate-300 transition-colors duration-300" />
                      <span className="font-bold text-slate-900 dark:text-white transition-colors duration-300">
                        {tz.team}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {tz.services.map((service, serviceIndex) => (
                        <Badge
                          key={serviceIndex}
                          className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-600 font-medium transition-colors duration-300"
                        >
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Specialties */}
                  <div className="space-y-3">
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm transition-colors duration-300">
                      Especialidades:
                    </h4>
                    {tz.specialties.map((specialty, specialtyIndex) => (
                      <div key={specialtyIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-green-500 dark:text-green-400 flex-shrink-0 transition-colors duration-300" />
                        <span className="text-slate-600 dark:text-slate-300 font-medium text-sm transition-colors duration-300">
                          {specialty}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* 24/7 Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="bg-slate-900 dark:bg-slate-800 text-white border-0 rounded-2xl transition-colors duration-300">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-8 h-8 text-green-400" />
                    <h3 className="text-2xl font-bold">Garantía de Disponibilidad 24/7</h3>
                  </div>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    Mientras duermes en Chile, nuestro equipo en Singapur y Rusia mantiene tus sistemas funcionando
                    perfectamente. Cobertura real, no solo promesas.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-black mb-1">99.9%</div>
                      <div className="text-slate-300 text-sm font-semibold">Uptime SLA</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-black mb-1">15min</div>
                      <div className="text-slate-300 text-sm font-semibold">SLA Crítico</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-yellow-400" />
                    <span className="font-semibold">Respuesta inmediata a incidencias críticas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-blue-400" />
                    <span className="font-semibold">Monitoreo proactivo desde 3 continentes</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Headphones className="w-5 h-5 text-green-400" />
                    <span className="font-semibold">Soporte técnico especializado multiidioma</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-purple-400" />
                    <span className="font-semibold">Actualizaciones y mantenimiento sin downtime</span>
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
              href="https://wa.me/56940946660?text=Hola%20N3uralia%2C%20quiero%20conocer%20el%20soporte%2024/7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Hablar con el equipo global
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
