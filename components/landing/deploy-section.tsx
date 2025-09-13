"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Send, MessageSquare } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function DeploySection() {
  const { t, language } = useLanguage()

  const techStack = ["React", "Node.js", "PostgreSQL", "Next.js", "Python", "OpenAI", "Vercel", "Supabase"]

  return (
    <section id="deploy" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="bg-black text-white border-0 text-lg px-8 py-3 rounded-full mb-6">
            {language === "en" ? "Get Started" : "Comenzar"}
          </Badge>
          <h2 className="text-5xl font-light text-black mb-8">
            {language === "en" ? "Deploy Your AI Agent" : "Despliega tu Agente IA"}
          </h2>
          <p className="text-xl text-gray-600 font-light">
            {language === "en"
              ? "Tell us about your project and we'll create a custom solution"
              : "Cuéntanos sobre tu proyecto y crearemos una solución personalizada"}
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="bg-white border border-gray-200 rounded-2xl shadow-lg">
            <CardContent className="p-10">
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="role" className="text-black font-medium mb-3 block">
                      {language === "en" ? "Your Role" : "Tu Rol"}
                    </Label>
                    <Input
                      id="role"
                      className="border-2 border-gray-200 focus:border-black transition-colors rounded-xl h-12"
                      placeholder={language === "en" ? "e.g., CEO, CTO, Manager" : "ej., CEO, CTO, Gerente"}
                    />
                  </div>

                  <div>
                    <Label htmlFor="industry" className="text-black font-medium mb-3 block">
                      {language === "en" ? "Industry" : "Industria"}
                    </Label>
                    <Input
                      id="industry"
                      className="border-2 border-gray-200 focus:border-black transition-colors rounded-xl h-12"
                      placeholder={language === "en" ? "e.g., Healthcare, Finance" : "ej., Salud, Finanzas"}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="challenge" className="text-black font-medium mb-3 block">
                    {language === "en" ? "Business Challenge" : "Desafío Empresarial"}
                  </Label>
                  <Textarea
                    id="challenge"
                    className="border-2 border-gray-200 focus:border-black transition-colors rounded-xl min-h-[120px] resize-none"
                    placeholder={
                      language === "en"
                        ? "Describe the problem you want to solve with AI..."
                        : "Describe el problema que quieres resolver con IA..."
                    }
                  />
                </div>

                <div>
                  <Label htmlFor="contact" className="text-black font-medium mb-3 block">
                    {language === "en" ? "Contact Information" : "Información de Contacto"}
                  </Label>
                  <Input
                    id="contact"
                    className="border-2 border-gray-200 focus:border-black transition-colors rounded-xl h-12"
                    placeholder={language === "en" ? "Your email or phone number" : "Tu email o número de teléfono"}
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    type="submit"
                    className="flex-1 bg-black hover:bg-gray-800 text-white font-medium px-8 py-4 rounded-xl transition-colors h-14"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    {language === "en" ? "Send Request" : "Enviar Solicitud"}
                  </Button>
                  <Button
                    type="button"
                    onClick={() => window.open("https://wa.me/56940946660", "_blank")}
                    variant="outline"
                    className="flex-1 border-2 border-black text-black hover:bg-black hover:text-white font-medium px-8 py-4 rounded-xl transition-all h-14"
                  >
                    <MessageSquare className="w-5 h-5 mr-2" />
                    {language === "en" ? "Contact Developer" : "Contactar Desarrollador"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <p className="text-gray-600 font-medium">
              {language === "en" ? "Built with modern technology stack" : "Construido con tecnologías modernas"}
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="w-16 h-16 flex items-center justify-center bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group"
              >
                <span className="text-xs text-gray-600 font-bold group-hover:text-black transition-colors">
                  {tech.slice(0, 3)}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
