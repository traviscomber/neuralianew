"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "@/lib/language-context"

export function DeploySection() {
  const { language } = useLanguage()
  const [formData, setFormData] = useState({
    role: "",
    industry: "",
    challenge: "",
    contactInfo: "",
  })

  const content = {
    en: {
      title: "Deploy Personal AI Agent in 48 Hours",
      role: "Role",
      industry: "Industry",
      challenge: "Challenge",
      contactInfo: "Contact Info",
      sendRequest: "Send Request",
      contactDeveloper: "Contact Developer",
    },
    es: {
      title: "Despliega Agente de IA Personal en 48 Horas",
      role: "Rol",
      industry: "Industria",
      challenge: "Desafío",
      contactInfo: "Información de Contacto",
      sendRequest: "Enviar Solicitud",
      contactDeveloper: "Contactar Desarrollador",
    },
  }

  const t = content[language]

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSendRequest = () => {
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleContactDeveloper = () => {
    const message = encodeURIComponent(
      language === "es"
        ? "Hola, me interesa contactar con un desarrollador para mi proyecto de IA"
        : "Hello, I'm interested in contacting a developer for my AI project",
    )
    window.open(`https://wa.me/56940946660?text=${message}`, "_blank")
  }

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-700 mb-8">{t.title}</h2>
        </div>

        <div className="space-y-8">
          {/* Role Field */}
          <div className="relative">
            <Input
              type="text"
              placeholder={t.role}
              value={formData.role}
              onChange={(e) => handleInputChange("role", e.target.value)}
              className="w-full bg-transparent border-0 border-b-2 border-gray-400 rounded-none px-0 py-4 text-lg placeholder:text-gray-500 focus:border-gray-600 focus:ring-0"
            />
          </div>

          {/* Industry Field */}
          <div className="relative">
            <Input
              type="text"
              placeholder={t.industry}
              value={formData.industry}
              onChange={(e) => handleInputChange("industry", e.target.value)}
              className="w-full bg-transparent border-0 border-b-2 border-gray-400 rounded-none px-0 py-4 text-lg placeholder:text-gray-500 focus:border-gray-600 focus:ring-0"
            />
          </div>

          {/* Challenge Field */}
          <div className="relative">
            <Textarea
              placeholder={t.challenge}
              value={formData.challenge}
              onChange={(e) => handleInputChange("challenge", e.target.value)}
              className="w-full bg-transparent border-0 border-b-2 border-gray-400 rounded-none px-0 py-4 text-lg placeholder:text-gray-500 focus:border-gray-600 focus:ring-0 resize-none min-h-[60px]"
              rows={1}
            />
          </div>

          {/* Contact Info Field */}
          <div className="relative">
            <Input
              type="text"
              placeholder={t.contactInfo}
              value={formData.contactInfo}
              onChange={(e) => handleInputChange("contactInfo", e.target.value)}
              className="w-full bg-transparent border-0 border-b-2 border-gray-400 rounded-none px-0 py-4 text-lg placeholder:text-gray-500 focus:border-gray-600 focus:ring-0"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <Button
              onClick={handleSendRequest}
              className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-md text-lg font-medium"
            >
              {t.sendRequest}
            </Button>
            <Button
              onClick={handleContactDeveloper}
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-md text-lg font-medium bg-transparent"
            >
              {t.contactDeveloper}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
