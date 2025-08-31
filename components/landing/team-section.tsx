"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, Clock, Users, Bot } from "lucide-react"
import { useState, useEffect } from "react"

const timeZones = [
  {
    country: "Chile",
    timezone: "America/Santiago",
    utc: "UTC-3",
    specialization: "Desarrollo & Soporte",
    flag: "🇨🇱",
  },
  {
    country: "Rusia",
    timezone: "Europe/Moscow",
    utc: "UTC+3",
    specialization: "Backend & IA",
    flag: "🇷🇺",
  },
  {
    country: "Vietnam",
    timezone: "Asia/Ho_Chi_Minh",
    utc: "UTC+7",
    specialization: "Frontend & Testing",
    flag: "🇻🇳",
  },
  {
    country: "Singapur",
    timezone: "Asia/Singapore",
    utc: "UTC+8",
    specialization: "DevOps & Deployment",
    flag: "🇸🇬",
  },
]

function TimeZoneClock({
  timezone,
  country,
  utc,
  specialization,
  flag,
}: {
  timezone: string
  country: string
  utc: string
  specialization: string
  flag: string
}) {
  const [time, setTime] = useState("")
  const [status, setStatus] = useState<"work" | "extended" | "monitoring">("monitoring")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const timeString = now.toLocaleTimeString("es-CL", {
        timeZone: timezone,
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
      setTime(timeString)

      // Determine status based on hour
      const hour = Number.parseInt(
        now.toLocaleTimeString("en-US", {
          timeZone: timezone,
          hour12: false,
          hour: "2-digit",
        }),
      )

      if (hour >= 9 && hour < 18) {
        setStatus("work")
      } else if (hour >= 6 && hour < 22) {
        setStatus("extended")
      } else {
        setStatus("monitoring")
      }
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [timezone])

  const getStatusColor = () => {
    switch (status) {
      case "work":
        return "bg-green-500"
      case "extended":
        return "bg-yellow-500"
      case "monitoring":
        return "bg-blue-500"
    }
  }

  const getStatusText = () => {
    switch (status) {
      case "work":
        return "Horario Laboral"
      case "extended":
        return "Horario Extendido"
      case "monitoring":
        return "Monitoreo IA"
    }
  }

  return (
    <div className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{flag}</span>
          <div>
            <div className="font-semibold text-gray-900">{country}</div>
            <div className="text-sm text-gray-500">{utc}</div>
          </div>
        </div>
        <div className={`w-3 h-3 rounded-full ${getStatusColor()} animate-pulse`}></div>
      </div>

      <div className="text-2xl font-mono font-bold text-gray-900 mb-2">{time}</div>

      <div className="text-sm text-gray-600 mb-1">{specialization}</div>
      <div className="text-xs text-gray-500">{getStatusText()}</div>
    </div>
  )
}

export function TeamSection() {
  return (
    <section id="team" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
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
            <Globe className="w-4 h-4 mr-2" />
            Nuestro Equipo
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ingenieros y desarrolladores{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">reales</span> y
            IA (principalmente) de todo el mundo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Rusia, Vietnam, Singapur, Chile - Cobertura 24/7 con especialistas humanos y sistemas de IA trabajando
            juntos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {timeZones.map((zone, index) => (
            <motion.div
              key={zone.country}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <TimeZoneClock {...zone} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          <Card className="border-2 border-gray-100 hover:border-purple-200 transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Ingenieros Reales</h3>
                  <p className="text-gray-600">Desarrolladores humanos especializados</p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Desarrollo full-stack especializado</li>
                <li>• Integración de sistemas complejos</li>
                <li>• Soporte técnico personalizado</li>
                <li>• Arquitectura de soluciones IA</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-100 hover:border-purple-200 transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Sistemas IA</h3>
                  <p className="text-gray-600">Agentes IA trabajando 24/7</p>
                </div>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>• Monitoreo continuo de sistemas</li>
                <li>• Procesamiento de conversaciones</li>
                <li>• Análisis de datos en tiempo real</li>
                <li>• Optimización automática</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-8">
            <Clock className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Cobertura 24/7</h3>
            <p className="text-gray-600">
              Todos los sistemas operativos y monitoreados las 24 horas del día, los 7 días de la semana. Siempre hay
              alguien (humano o IA) trabajando en tu proyecto.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
