"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function ClientsSection() {
  const { language } = useLanguage()

  const clients = [
    {
      logo: "Parrotfy",
      title: "ERP AI Assistant",
      description: "Conversational natural language AI Agentic Nano System.",
    },
    {
      logo: "Ecosuelolab",
      title: "Agricultural Helper",
      description: "Soil analysis, nutrients recommendation based on real time satellite....",
    },
    {
      logo: "AxentAI",
      title: "Team Management",
      description: "Documents and permissions. Check and get advanced....",
    },
  ]

  return (
    <section id="clients" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-3 sm:mb-4 px-4">Our Clients</h2>
          <p className="text-lg sm:text-xl text-gray-700 px-4">Full Stack Solutions Developed by N3uralia</p>
        </motion.div>

        {/* Mobile-optimized Clients Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white border border-gray-300 rounded-2xl h-full hover:shadow-lg transition-shadow duration-300 touch-manipulation">
                  <CardContent className="p-6 sm:p-8">
                    <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{client.logo}</div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                      {client.title}
                    </h3>
                    <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                      {client.description}
                    </p>
                    <Button
                      variant="outline"
                      className="border-2 border-gray-600 text-gray-900 hover:bg-gray-700 hover:text-white bg-transparent text-sm sm:text-base min-h-[44px] w-full sm:w-auto"
                    >
                      More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Mobile-optimized Navigation */}
          <div className="flex justify-between items-center mt-6 sm:mt-8 px-4">
            <Button variant="ghost" size="sm" className="text-gray-600 border-0 min-h-[44px] px-2">
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-1" />
              <span className="text-sm sm:text-base">..</span>
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-700 border-0 min-h-[44px] px-4">
              <span className="text-sm sm:text-base">Load more</span>
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-600 border-0 min-h-[44px] px-2">
              <span className="text-sm sm:text-base">..</span>
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
