"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Users, Bot } from "lucide-react"

export function TeamSection() {
  const [times, setTimes] = useState({
    chile: "",
    russia: "",
    vietnam: "",
    singapore: "",
  })

  const getWorkStatus = (timezone: string) => {
    const now = new Date()
    const timeInZone = new Date(now.toLocaleString("en-US", { timeZone: timezone }))
    const hour = timeInZone.getHours()

    if (hour >= 9 && hour < 18) {
      return { status: "Horario Laboral", color: "bg-green-500", textColor: "text-green-600 dark:text-green-400" }
    } else if (hour >= 6 && hour < 22) {
      return { status: "Horario Extendido", color: "bg-yellow-500", textColor: "text-yellow-600 dark:text-yellow-400" }
    } else {
      return { status: "Monitoreo IA", color: "bg-blue-500", textColor: "text-blue-600 dark:text-blue-400" }
    }
  }

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date()
      setTimes({
        chile: now.toLocaleTimeString("es-CL", {
          timeZone: "America/Santiago",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
        russia: now.toLocaleTimeString("ru-RU", {
          timeZone: "Europe/Moscow",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
        vietnam: now.toLocaleTimeString("vi-VN", {
          timeZone: "Asia/Ho_Chi_Minh",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
        singapore: now.toLocaleTimeString("en-SG", {
          timeZone: "Asia/Singapore",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      })
    }

    updateTimes()
    const interval = setInterval(updateTimes, 1000)
    return () => clearInterval(interval)
  }, [])

  const timeZones = [
    {
      country: "Chile",
      timezone: "America/Santiago",
      utc: "UTC-3",
      time: times.chile,
      specialization: "Desarrollo & Soporte",
      status: getWorkStatus("America/Santiago"),
    },
    {
      country: "Rusia",
      timezone: "Europe/Moscow",
      utc: "UTC+3",
      time: times.russia,
      specialization: "Backend & IA",
      status: getWorkStatus("Europe/Moscow"),
    },
    {
      country: "Vietnam",
      timezone: "Asia/Ho_Chi_Minh",
      utc: "UTC+7",
      time: times.vietnam,
      specialization: "Frontend & Testing",
      status: getWorkStatus("Asia/Ho_Chi_Minh"),
    },
    {
      country: "Singapur",
      timezone: "Asia/Singapore",
      utc: "UTC+8",
      time: times.singapore,
      specialization: "DevOps & Deployment",
      status: getWorkStatus("Asia/Singapore"),
    },
  ]

  return (
    <section id="team" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Nuestro Equipo</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Ingenieros y desarrolladores reales y IA (principalmente) de todo el mundo: Rusia, Vietnam, Singapur, Chile
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {timeZones.map((zone, index) => (
            <Card key={index} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-gray-900 dark:text-white">{zone.country}</h3>
                  <div className={`w-3 h-3 rounded-full ${zone.status.color} animate-pulse`}></div>
                </div>

                <div className="space-y-2">
                  <div className="text-2xl font-mono font-bold text-gray-900 dark:text-white">{zone.time}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{zone.utc}</div>
                  <div className={`text-sm font-medium ${zone.status.textColor}`}>{zone.status.status}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{zone.specialization}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 mr-3" />
                <h3 className="text-xl font-bold">Ingenieros Reales</h3>
              </div>
              <p className="text-purple-100 mb-4">
                Desarrolladores senior de Chile, Rusia, Vietnam y Singapur trabajando en tu proyecto.
              </p>
              <ul className="text-purple-100 space-y-1">
                <li>• Arquitectura de sistemas</li>
                <li>• Desarrollo full stack</li>
                <li>• Integración de APIs</li>
                <li>• Soporte técnico</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Bot className="w-8 h-8 mr-3" />
                <h3 className="text-xl font-bold">Sistemas IA</h3>
              </div>
              <p className="text-blue-100 mb-4">
                Agentes de IA especializados trabajando 24/7 en desarrollo, testing y monitoreo.
              </p>
              <ul className="text-blue-100 space-y-1">
                <li>• GPT-4, Claude, Gemini</li>
                <li>• Análisis de código automático</li>
                <li>• Testing continuo</li>
                <li>• Monitoreo de sistemas</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 px-6 py-3 rounded-full">
            <Clock className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              Todos los sistemas operativos y monitoreados 24/7
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
