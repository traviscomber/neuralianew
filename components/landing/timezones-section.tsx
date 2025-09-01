"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Zap } from "lucide-react"

interface TimeZone {
  city: string
  country: string
  flag: string
  timezone: string
  coordinates: { x: number; y: number }
  workingHours: { start: number; end: number }
}

const TIMEZONES: TimeZone[] = [
  {
    city: "Santiago",
    country: "Chile",
    flag: "🇨🇱",
    timezone: "America/Santiago",
    coordinates: { x: 25, y: 75 },
    workingHours: { start: 9, end: 18 },
  },
  {
    city: "Singapur",
    country: "Singapur",
    flag: "🇸🇬",
    timezone: "Asia/Singapore",
    coordinates: { x: 75, y: 55 },
    workingHours: { start: 9, end: 18 },
  },
  {
    city: "Moscú",
    country: "Rusia",
    flag: "🇷🇺",
    timezone: "Europe/Moscow",
    coordinates: { x: 60, y: 35 },
    workingHours: { start: 9, end: 18 },
  },
]

export function TimezonesSection() {
  const [currentTimes, setCurrentTimes] = useState<{ [key: string]: Date }>({})

  useEffect(() => {
    const updateTimes = () => {
      const times: { [key: string]: Date } = {}
      TIMEZONES.forEach((tz) => {
        times[tz.city] = new Date(new Date().toLocaleString("en-US", { timeZone: tz.timezone }))
      })
      setCurrentTimes(times)
    }

    updateTimes()
    const interval = setInterval(updateTimes, 1000)
    return () => clearInterval(interval)
  }, [])

  const isWorkingHours = (city: string) => {
    const time = currentTimes[city]
    if (!time) return false

    const hour = time.getHours()
    const tz = TIMEZONES.find((t) => t.city === city)
    if (!tz) return false

    return hour >= tz.workingHours.start && hour < tz.workingHours.end
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("es-CL", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    })
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-900 dark:to-purple-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2">
            <Clock className="w-4 h-4 mr-2" />
            Soporte Global 24/7
          </Badge>
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Mientras tu competencia duerme,
            </span>
            <br />
            <span className="text-gray-900 dark:text-white">nosotros desarrollamos</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Nuestro equipo global trabaja en 3 continentes para que tu proyecto avance 24 horas al día, 7 días a la
            semana. Desarrollo continuo sin parar.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* World Map */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="p-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-2xl">
                <CardContent className="p-0">
                  <div className="relative w-full h-80 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg overflow-hidden">
                    {/* Simplified World Map SVG */}
                    <svg
                      viewBox="0 0 100 60"
                      className="w-full h-full"
                      style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))" }}
                    >
                      {/* Continents - simplified shapes */}
                      <path
                        d="M15 20 L35 18 L38 25 L35 35 L25 40 L15 35 Z"
                        fill="rgba(99, 102, 241, 0.3)"
                        stroke="rgba(99, 102, 241, 0.5)"
                        strokeWidth="0.5"
                      />
                      <path
                        d="M40 15 L85 12 L88 20 L85 30 L75 35 L65 32 L55 28 L45 25 Z"
                        fill="rgba(99, 102, 241, 0.3)"
                        stroke="rgba(99, 102, 241, 0.5)"
                        strokeWidth="0.5"
                      />
                      <path
                        d="M70 35 L85 33 L88 40 L85 48 L75 50 L70 45 Z"
                        fill="rgba(99, 102, 241, 0.3)"
                        stroke="rgba(99, 102, 241, 0.5)"
                        strokeWidth="0.5"
                      />

                      {/* Location pins */}
                      {TIMEZONES.map((tz, index) => (
                        <g key={tz.city}>
                          <motion.circle
                            cx={tz.coordinates.x}
                            cy={tz.coordinates.y}
                            r="2"
                            fill={isWorkingHours(tz.city) ? "#10B981" : "#6B7280"}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: index * 0.2 }}
                          />
                          <motion.circle
                            cx={tz.coordinates.x}
                            cy={tz.coordinates.y}
                            r="4"
                            fill="none"
                            stroke={isWorkingHours(tz.city) ? "#10B981" : "#6B7280"}
                            strokeWidth="1"
                            opacity="0.5"
                            initial={{ scale: 0 }}
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{
                              delay: index * 0.2,
                              repeat: Number.POSITIVE_INFINITY,
                              duration: 2,
                            }}
                          />
                        </g>
                      ))}
                    </svg>

                    {/* Floating tooltips */}
                    {TIMEZONES.map((tz, index) => (
                      <motion.div
                        key={`tooltip-${tz.city}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.3 }}
                        className="absolute"
                        style={{
                          left: `${tz.coordinates.x}%`,
                          top: `${tz.coordinates.y - 15}%`,
                          transform: "translateX(-50%)",
                        }}
                      >
                        <div className="bg-white dark:bg-gray-800 px-2 py-1 rounded-lg shadow-lg text-xs whitespace-nowrap border">
                          <div className="flex items-center space-x-1">
                            <span>{tz.flag}</span>
                            <span className="font-medium">{tz.city}</span>
                            <div
                              className={`w-2 h-2 rounded-full ${
                                isWorkingHours(tz.city) ? "bg-green-500" : "bg-gray-400"
                              }`}
                            />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Live Clocks & Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Live Clocks */}
              <div className="space-y-4">
                {TIMEZONES.map((tz, index) => (
                  <motion.div
                    key={tz.city}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="p-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
                      <CardContent className="p-0">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="text-2xl">{tz.flag}</div>
                            <div>
                              <div className="font-semibold text-gray-900 dark:text-white">
                                {tz.city}, {tz.country}
                              </div>
                              <div className="text-sm text-gray-500 dark:text-gray-400">
                                {isWorkingHours(tz.city) ? "🟢 Trabajando" : "🔴 Descanso"}
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-mono font-bold text-purple-600 dark:text-purple-400">
                              {currentTimes[tz.city] ? formatTime(currentTimes[tz.city]) : "--:--:--"}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              {currentTimes[tz.city]?.toLocaleDateString("es-CL", {
                                weekday: "short",
                                day: "numeric",
                                month: "short",
                              })}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 text-center bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20">
                  <CardContent className="p-0">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">24/7</div>
                    <div className="text-sm text-green-700 dark:text-green-300">Desarrollo Continuo</div>
                  </CardContent>
                </Card>
                <Card className="p-4 text-center bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
                  <CardContent className="p-0">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">3</div>
                    <div className="text-sm text-blue-700 dark:text-blue-300">Continentes</div>
                  </CardContent>
                </Card>
                <Card className="p-4 text-center bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20">
                  <CardContent className="p-0">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">100%</div>
                    <div className="text-sm text-purple-700 dark:text-purple-300">Ingenieros Reales</div>
                  </CardContent>
                </Card>
                <Card className="p-4 text-center bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20">
                  <CardContent className="p-0">
                    <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">0%</div>
                    <div className="text-sm text-orange-700 dark:text-orange-300">Downtime</div>
                  </CardContent>
                </Card>
              </div>

              {/* Key Benefits */}
              <Card className="p-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <Zap className="w-6 h-6 mr-3" />
                    <h3 className="text-lg font-semibold">Ventaja Competitiva Única</h3>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      Tu proyecto avanza mientras duermes
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      Respuesta garantizada en menos de 1 hora
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      Desarrollo 3x más rápido que la competencia
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      Soporte técnico especializado siempre disponible
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
