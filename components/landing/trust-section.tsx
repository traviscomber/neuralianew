"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Settings, Shield, Wrench, Clock, Users, Award } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function TrustSection() {
  const { t, language } = useLanguage()

  const trustItems = [
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock assistance for all your needs with dedicated technical team",
      metric: "15min response time",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      subtitle: "ISO 27001",
      description: "Industry-standard security protocols and compliance with international standards",
      metric: "SOC 2 Type II certified",
    },
    {
      icon: Award,
      title: "100+ Projects Deployed",
      description: "Proven track record of successful implementations across multiple industries",
      metric: "95% client satisfaction",
    },
    {
      icon: Users,
      title: "Global Team",
      description: "Expert developers and AI specialists across Chile, Singapore, and Russia",
      metric: "35+ professionals",
    },
    {
      icon: Settings,
      title: "Custom Solutions",
      description: "Tailored AI systems designed specifically for your business requirements",
      metric: "100% customizable",
    },
    {
      icon: Wrench,
      title: "Full Stack Development",
      description: "Complete end-to-end solutions from frontend to backend and AI integration",
      metric: "Modern tech stack",
    },
  ]

  return (
    <section id="trust" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <Badge className="bg-black text-white border-0 text-lg px-8 py-3 rounded-full mb-6">
            {language === "en" ? "Why Choose Us" : "Por Qué Elegirnos"}
          </Badge>
          <h2 className="text-5xl font-light text-black mb-8">
            {language === "en" ? "Trust & Reliability" : "Confianza y Confiabilidad"}
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
            {language === "en"
              ? "We provide enterprise-grade solutions with the highest standards of security, support, and reliability"
              : "Proporcionamos soluciones de nivel empresarial con los más altos estándares de seguridad, soporte y confiabilidad"}
          </p>
        </motion.div>

        {/* Trust Items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="bg-gray-50 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 h-full rounded-2xl">
                <CardContent className="p-8 text-center">
                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-black group-hover:bg-gray-800 transition-colors duration-300 p-4">
                    <item.icon className="w-full h-full text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-black mb-3">
                    {item.title}
                    {item.subtitle && (
                      <Badge className="ml-2 bg-gray-200 text-gray-700 text-xs border-0">{item.subtitle}</Badge>
                    )}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-4 font-light">{item.description}</p>

                  {/* Metric */}
                  <div className="bg-white rounded-xl p-3 border border-gray-200">
                    <p className="text-sm font-medium text-black">{item.metric}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-black rounded-2xl p-8 text-white max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              {language === "en" ? "Ready to get started?" : "¿Listo para comenzar?"}
            </h3>
            <p className="text-gray-300 mb-6 font-light">
              {language === "en"
                ? "Join 100+ companies that trust N3uralia for their AI solutions"
                : "Únete a más de 100 empresas que confían en N3uralia para sus soluciones de IA"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Badge className="bg-gray-800 text-gray-300 border-0 px-4 py-2">
                {language === "en" ? "Enterprise Ready" : "Listo para Empresas"}
              </Badge>
              <Badge className="bg-gray-800 text-gray-300 border-0 px-4 py-2">
                {language === "en" ? "24/7 Support" : "Soporte 24/7"}
              </Badge>
              <Badge className="bg-gray-800 text-gray-300 border-0 px-4 py-2">
                {language === "en" ? "Global Team" : "Equipo Global"}
              </Badge>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
