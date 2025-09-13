"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"

export function FlowSection() {
  const { language } = useLanguage()

  const dataSourceLogos = [
    { name: "Google Drive", src: "/tech-icons/react-logo.png" },
    { name: "Cloudify", src: "/tech-icons/nodejs-logo.png" },
    { name: "PostgreSQL", src: "/tech-icons/postgresql-logo.png" },
    { name: "Meta", src: "/tech-icons/meta-logo.png" },
    { name: "Twilio", src: "/tech-icons/twilio-logo.png" },
  ]

  const aiApiLogos = [
    { name: "Manus", src: "/tech-icons/openai-logo.png" },
    { name: "OpenAI", src: "/tech-icons/intel-logo.png" },
    { name: "Intel", src: "/tech-icons/redis-logo.svg" },
    { name: "Vercel", src: "/tech-icons/vercel-logo.svg" },
    { name: "Supabase", src: "/tech-icons/supabase-logo.svg" },
  ]

  const outputLogos = [
    { name: "Instagram", src: "/tech-icons/whatsapp-logo.png" },
    { name: "DaVinci", src: "/tech-icons/telegram-logo.png" },
    { name: "Facebook", src: "/tech-icons/meta-logo.png" },
    { name: "LinkedIn", src: "/tech-icons/zapier-logo.png" },
    { name: "Twitter", src: "/tech-icons/n8n-logo.png" },
    { name: "WhatsApp", src: "/tech-icons/whatsapp-logo.png" },
  ]

  const techStack = [
    { name: "Redis", src: "/tech-icons/redis-logo.svg" },
    { name: "Node.js", src: "/tech-icons/nodejs-logo.png" },
    { name: "React", src: "/tech-icons/react-logo.png" },
    { name: "Next.js", src: "/placeholder.svg?height=40&width=40&text=Next" },
    { name: "Python", src: "/placeholder.svg?height=40&width=40&text=Py" },
    { name: "Vercel", src: "/tech-icons/vercel-logo.svg" },
  ]

  return (
    <section id="flow" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-6 sm:mb-8 px-4">
            N3uralia's Flow
          </h2>
        </motion.div>

        {/* Mobile-optimized Flow Diagram */}
        <div className="space-y-8 sm:space-y-12">
          {/* Data Source */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8"
          >
            <div className="w-full lg:w-1/3 text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl font-light text-gray-900 mb-3 sm:mb-4">Data Source</h3>
              <p className="text-gray-700 text-sm sm:text-base px-4 lg:px-0">
                {language === "en"
                  ? "Use your cloud or create new Database from scratch"
                  : "Usa tu nube o crea nueva Base de Datos desde cero"}
              </p>
            </div>
            <Card className="w-full lg:w-2/3 bg-white border border-gray-300 rounded-2xl">
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
                  {dataSourceLogos.map((logo, index) => (
                    <div key={index} className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center grayscale">
                      <Image
                        src={logo.src || "/placeholder.svg"}
                        alt={logo.name}
                        width={40}
                        height={40}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* AI API Connection */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row-reverse items-center gap-6 sm:gap-8"
          >
            <div className="w-full lg:w-1/3 text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl font-light text-gray-900 mb-3 sm:mb-4">AI API Connection</h3>
              <p className="text-gray-700 text-sm sm:text-base px-4 lg:px-0">
                {language === "en"
                  ? "Connect or create AI tool and process data"
                  : "Conecta o crea herramienta IA y procesa datos"}
              </p>
            </div>
            <Card className="w-full lg:w-2/3 bg-white border border-gray-300 rounded-2xl">
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
                  {aiApiLogos.map((logo, index) => (
                    <div key={index} className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center grayscale">
                      <Image
                        src={logo.src || "/placeholder.svg"}
                        alt={logo.name}
                        width={40}
                        height={40}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Multiple Outputs */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8"
          >
            <div className="w-full lg:w-1/3 text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl font-light text-gray-900 mb-3 sm:mb-4">Multiple Outputs</h3>
              <p className="text-gray-700 text-sm sm:text-base px-4 lg:px-0">
                {language === "en"
                  ? "Collect results or create an automated action"
                  : "Recolecta resultados o crea una acción automatizada"}
              </p>
            </div>
            <Card className="w-full lg:w-2/3 bg-white border border-gray-300 rounded-2xl">
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
                  {outputLogos.map((logo, index) => (
                    <div key={index} className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center grayscale">
                      <Image
                        src={logo.src || "/placeholder.svg"}
                        alt={logo.name}
                        width={40}
                        height={40}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Mobile-optimized Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20"
        >
          <Card className="bg-gray-900 text-white rounded-2xl">
            <CardContent className="p-8 sm:p-12">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
                <div>
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-light mb-2 sm:mb-4">300%</div>
                  <div className="text-lg sm:text-xl text-gray-300">ROI</div>
                </div>
                <div>
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-light mb-2 sm:mb-4">60%</div>
                  <div className="text-lg sm:text-xl text-gray-300">AUTOMATION</div>
                </div>
                <div>
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-light mb-2 sm:mb-4">95%</div>
                  <div className="text-lg sm:text-xl text-gray-300">SATISFACTION</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Mobile-optimized Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
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
