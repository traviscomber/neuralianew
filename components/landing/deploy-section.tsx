"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"

export function DeploySection() {
  const { language } = useLanguage()

  const techStack = [
    { name: "Redis", src: "/tech-icons/redis-logo.svg" },
    { name: "Node.js", src: "/tech-icons/nodejs-logo.png" },
    { name: "React", src: "/tech-icons/react-logo.png" },
    { name: "Next.js", src: "/placeholder.svg?height=40&width=40&text=Next" },
    { name: "Python", src: "/placeholder.svg?height=40&width=40&text=Py" },
    { name: "Vercel", src: "/tech-icons/vercel-logo.svg" },
  ]

  return (
    <section id="deploy" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-6 sm:mb-8 px-4 leading-tight">
            {language === "en" ? "Deploy Personal AI Agent in 48 Hours" : "Despliega Agente IA Personal en 48 Horas"}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="bg-white border border-gray-300 rounded-2xl">
            <CardContent className="p-6 sm:p-10">
              <form className="space-y-6 sm:space-y-8">
                <div>
                  <Label htmlFor="role" className="text-gray-900 font-medium mb-3 block text-sm sm:text-base">
                    Role
                  </Label>
                  <Input
                    id="role"
                    className="border-2 border-gray-300 focus:border-gray-700 transition-colors rounded-lg h-12 sm:h-14 text-base"
                  />
                </div>

                <div>
                  <Label htmlFor="industry" className="text-gray-900 font-medium mb-3 block text-sm sm:text-base">
                    Industry
                  </Label>
                  <Input
                    id="industry"
                    className="border-2 border-gray-300 focus:border-gray-700 transition-colors rounded-lg h-12 sm:h-14 text-base"
                  />
                </div>

                <div>
                  <Label htmlFor="challenge" className="text-gray-900 font-medium mb-3 block text-sm sm:text-base">
                    Challenge
                  </Label>
                  <Textarea
                    id="challenge"
                    className="border-2 border-gray-300 focus:border-gray-700 transition-colors rounded-lg min-h-[120px] resize-none text-base"
                  />
                </div>

                <div>
                  <Label htmlFor="contact" className="text-gray-900 font-medium mb-3 block text-sm sm:text-base">
                    Contact Info
                  </Label>
                  <Input
                    id="contact"
                    className="border-2 border-gray-300 focus:border-gray-700 transition-colors rounded-lg h-12 sm:h-14 text-base"
                  />
                </div>

                {/* Mobile-optimized buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    type="submit"
                    className="flex-1 bg-gray-900 hover:bg-gray-800 text-white font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-colors min-h-[48px] sm:min-h-[56px] border-0 text-base"
                  >
                    {language === "en" ? "Send Request" : "Enviar Solicitud"}
                  </Button>
                  <Button
                    type="button"
                    onClick={() => window.open("https://wa.me/56940946660", "_blank")}
                    variant="outline"
                    className="flex-1 border-2 border-gray-700 text-gray-900 hover:bg-gray-100 font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all min-h-[48px] sm:min-h-[56px] text-base"
                  >
                    {language === "en" ? "Contact Developer" : "Contactar Desarrollador"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {/* Mobile-optimized Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16"
        >
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity grayscale"
              >
                <Image
                  src={tech.src || "/placeholder.svg"}
                  alt={tech.name}
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
