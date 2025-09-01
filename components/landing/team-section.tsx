"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Globe, Clock, Users } from "lucide-react"

interface Location {
  name: string
  country: string
  flag: string
  timezone: string
  specialty: string
  x: number
  y: number
}

const locations: Location[] = [
  {
    name: "Santiago",
    country: "Chile",
    flag: "🇨🇱",
    timezone: "America/Santiago",
    specialty: "Full Stack",
    x: 25,
    y: 75,
  },
  {
    name: "Singapur",
    country: "Singapur",
    flag: "🇸🇬",
    timezone: "Asia/Singapore",
    specialty: "IA & ML",
    x: 80,
    y: 60,
  },
  {
    name: "Moscú",
    country: "Rusia",
    flag: "🇷🇺",
    timezone: "Europe/Moscow",
    specialty: "DevOps",
    x: 65,
    y: 35,
  },
]

function WorldMap() {
  return (
    <div className="relative w-full h-48 bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-lg overflow-hidden">
      {/* Simplified world map SVG */}
      <svg viewBox="0 0 100 60" className="w-full h-full opacity-30">
        {/* Continents simplified */}
        <path d="M15 20 Q20 15 25 20 L30 25 Q25 30 20 25 Z" fill="currentColor" />
        <path d="M35 15 Q45 10 55 15 L65 20 Q60 25 50 20 Z" fill="currentColor" />
        <path d="M70 25 Q80 20 85 25 L90 30 Q85 35 75 30 Z" fill="currentColor" />
        <path d="M20 35 Q30 30 40 35 L45 40 Q40 45 30 40 Z" fill="currentColor" />
      </svg>

      {/* Location pins */}
      {locations.map((location, index) => (
        <motion.div
          key={location.name}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: index * 0.2, duration: 0.3 }}
          className="absolute group cursor-pointer"
          style={{ left: `${location.x}%`, top: `${location.y}%` }}
        >
          <div className="relative">
            <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse shadow-lg" />
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/90 text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              {location.flag} {location.name}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

function LocationClock({ location }: { location: Location }) {
  const [time, setTime] = useState("")
  const [isWorking, setIsWorking] = useState(false)

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const timeString = now.toLocaleTimeString("en-US", {
        timeZone: location.timezone,
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
      setTime(timeString)

      // Check if it's working hours (8 AM - 8 PM)
      const hour = Number.parseInt(
        now.toLocaleTimeString("en-US", {
          timeZone: location.timezone,
          hour12: false,
          hour: "2-digit",
        }),
      )
      setIsWorking(hour >= 8 && hour < 20)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [location.timezone])

  return (
    <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <span className="text-lg">{location.flag}</span>
          <span className="font-medium text-sm">{location.name}</span>
        </div>
        <div className={`w-2 h-2 rounded-full ${isWorking ? "bg-green-500 animate-pulse" : "bg-gray-500"}`} />
      </div>
      <div className="font-mono text-lg font-bold mb-1">{time}</div>
      <div className="text-xs text-gray-400">{location.specialty}</div>
      <div className={`text-xs mt-1 ${isWorking ? "text-green-400" : "text-gray-500"}`}>
        {isWorking ? "Activo" : "Descanso"}
      </div>
    </div>
  )
}

export function TeamSection() {
  return (
    <section id="equipo" className="py-16 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 bg-clip-text text-transparent mb-4">
            Nuestro Equipo
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Somos un equipo multidisciplinario de ingenieros reales e ingenieros de IA de múltiples nacionalidades,
            trabajando 24/7 para hacer realidad tus proyectos.
          </p>
        </div>

        <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-800 text-white mb-8">
          <CardContent className="p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* World Map */}
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Globe className="w-5 h-5 mr-2 text-blue-400" />
                  Cobertura Global 24/7
                </h3>
                <WorldMap />
                <p className="text-gray-300 mt-4 text-sm">
                  <span className="font-semibold text-purple-400">
                    Mientras tu competencia duerme, nosotros desarrollamos.
                  </span>{" "}
                  Nuestro equipo trabaja en turnos coordinados desde 3 continentes para que tu proyecto avance 24 horas
                  al día.
                </p>
              </div>

              {/* Time Clocks */}
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-green-400" />
                  Horarios en Tiempo Real
                </h3>
                <div className="grid gap-3">
                  {locations.map((location) => (
                    <LocationClock key={location.name} location={location} />
                  ))}
                </div>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-gray-700">
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  24/7
                </div>
                <div className="text-xs text-gray-400">Disponibilidad</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  3
                </div>
                <div className="text-xs text-gray-400">Continentes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                  100%
                </div>
                <div className="text-xs text-gray-400">Ingenieros</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  0
                </div>
                <div className="text-xs text-gray-400">Downtime</div>
              </div>
            </div>

            <div className="text-center mt-6">
              <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white">
                <Users className="w-4 h-4 mr-2" />
                Conocer Nuestro Equipo
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
