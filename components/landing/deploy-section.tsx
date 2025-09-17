"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export function DeploySection() {
  const { language } = useLanguage()
  const [formData, setFormData] = useState({
    role: "",
    industry: "",
    challenge: "",
    contactInfo: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSendRequest = () => {
    // Handle send request logic
    console.log("Send Request:", formData)
  }

  const handleContactDeveloper = () => {
    // Handle contact developer logic
    console.log("Contact Developer")
  }

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-light text-gray-800 mb-8">
            {language === "en"
              ? "Deploy Personal AI Agent in 48 Hours"
              : "Despliega tu Agente de IA Personal en 48 Horas"}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="space-y-8">
            {/* Role Field */}
            <div className="relative">
              <Input
                type="text"
                placeholder={language === "en" ? "Role" : "Rol"}
                value={formData.role}
                onChange={(e) => handleInputChange("role", e.target.value)}
                className="w-full bg-transparent border-0 border-b-2 border-gray-300 rounded-none px-0 py-4 text-lg placeholder-gray-500 focus:border-gray-600 focus:ring-0"
              />
            </div>

            {/* Industry Field */}
            <div className="relative">
              <Input
                type="text"
                placeholder={language === "en" ? "Industry" : "Industria"}
                value={formData.industry}
                onChange={(e) => handleInputChange("industry", e.target.value)}
                className="w-full bg-transparent border-0 border-b-2 border-gray-300 rounded-none px-0 py-4 text-lg placeholder-gray-500 focus:border-gray-600 focus:ring-0"
              />
            </div>

            {/* Challenge Field */}
            <div className="relative">
              <Textarea
                placeholder={language === "en" ? "Challenge" : "Desafío"}
                value={formData.challenge}
                onChange={(e) => handleInputChange("challenge", e.target.value)}
                className="w-full bg-transparent border-0 border-b-2 border-gray-300 rounded-none px-0 py-4 text-lg placeholder-gray-500 focus:border-gray-600 focus:ring-0 resize-none"
                rows={1}
              />
            </div>

            {/* Contact Info Field */}
            <div className="relative">
              <Input
                type="text"
                placeholder={language === "en" ? "Contact Info" : "Información de Contacto"}
                value={formData.contactInfo}
                onChange={(e) => handleInputChange("contactInfo", e.target.value)}
                className="w-full bg-transparent border-0 border-b-2 border-gray-300 rounded-none px-0 py-4 text-lg placeholder-gray-500 focus:border-gray-600 focus:ring-0"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Button
                onClick={handleSendRequest}
                className="flex-1 bg-gray-900 hover:bg-gray-800 text-white py-4 px-8 rounded-lg text-lg font-medium transition-colors"
              >
                {language === "en" ? "Send Request" : "Enviar Solicitud"}
              </Button>
              <Button
                onClick={handleContactDeveloper}
                variant="outline"
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white border-blue-600 py-4 px-8 rounded-lg text-lg font-medium transition-colors"
              >
                {language === "en" ? "Contact Developer" : "Contactar Desarrollador"}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
