"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send, MessageSquare } from "lucide-react"

export function DeploySection() {
  const { language } = useLanguage()

  const techLogos = [
    { name: "Redis", color: "text-red-600" },
    { name: "Node.js", color: "text-green-600" },
    { name: "API", color: "text-pink-500" },
    { name: "Next.js", color: "text-black" },
    { name: "Python", color: "text-blue-600" },
    { name: "Deploy", color: "text-green-500" },
  ]

  return (
    <section id="deploy" className="py-24 bg-gray-100">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-light text-gray-700 mb-8 leading-tight">
            {language === "en" ? "Deploy Personal AI Agent in 48 Hours" : "Despliega Agente IA Personal en 48 Horas"}
          </h2>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Role Field */}
          <div>
            <Label htmlFor="role" className="text-xl text-gray-600 font-light mb-4 block">
              {language === "en" ? "Role" : "Rol"}
            </Label>
            <div className="border-b-2 border-gray-400 pb-2">
              <Input
                id="role"
                className="border-0 bg-transparent text-lg p-0 focus:ring-0 focus:border-0 placeholder:text-gray-400"
                placeholder=""
              />
            </div>
          </div>

          {/* Industry Field */}
          <div>
            <Label htmlFor="industry" className="text-xl text-gray-600 font-light mb-4 block">
              {language === "en" ? "Industry" : "Industria"}
            </Label>
            <div className="border-b-2 border-gray-400 pb-2">
              <Input
                id="industry"
                className="border-0 bg-transparent text-lg p-0 focus:ring-0 focus:border-0 placeholder:text-gray-400"
                placeholder=""
              />
            </div>
          </div>

          {/* Challenge Field */}
          <div>
            <Label htmlFor="challenge" className="text-xl text-gray-600 font-light mb-4 block">
              {language === "en" ? "Challenge" : "Desafío"}
            </Label>
            <div className="border-b-2 border-gray-400 pb-2">
              <Textarea
                id="challenge"
                className="border-0 bg-transparent text-lg p-0 focus:ring-0 focus:border-0 placeholder:text-gray-400 resize-none min-h-[60px]"
                placeholder=""
              />
            </div>
          </div>

          {/* Contact Info Field */}
          <div>
            <Label htmlFor="contact" className="text-xl text-gray-600 font-light mb-4 block">
              {language === "en" ? "Contact Info" : "Información de Contacto"}
            </Label>
            <div className="border-b-2 border-gray-400 pb-2">
              <Input
                id="contact"
                className="border-0 bg-transparent text-lg p-0 focus:ring-0 focus:border-0 placeholder:text-gray-400"
                placeholder=""
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-6 pt-8">
            <Button className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-lg text-lg font-medium">
              <Send className="w-5 h-5 mr-2" />
              {language === "en" ? "Send Request" : "Enviar Solicitud"}
            </Button>
            <Button
              onClick={() => window.open("https://wa.me/56940946660", "_blank")}
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              {language === "en" ? "Contact Developer" : "Contactar Desarrollador"}
            </Button>
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="flex justify-center items-center gap-12 flex-wrap">
            {techLogos.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center"
              >
                <span className={`text-2xl font-bold ${tech.color}`}>{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
