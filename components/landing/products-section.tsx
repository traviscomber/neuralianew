"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, MessageSquare, Brain, Zap, Shield } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function ProductsSection() {
  const { language } = useLanguage()

  const products = [
    {
      name: "ChatBot AI",
      description:
        language === "en"
          ? "Intelligent conversational agents that understand context and provide accurate responses 24/7"
          : "Agentes conversacionales inteligentes que entienden el contexto y brindan respuestas precisas 24/7",
      icon: MessageSquare,
      features: [
        language === "en" ? "Natural Language Processing" : "Procesamiento de Lenguaje Natural",
        language === "en" ? "Multi-language Support" : "Soporte Multi-idioma",
        language === "en" ? "Context Awareness" : "Conciencia de Contexto",
      ],
      price: language === "en" ? "From $99/month" : "Desde $99/mes",
    },
    {
      name: "Neural Engine",
      description:
        language === "en"
          ? "Advanced AI processing engine that learns and adapts to your business needs automatically"
          : "Motor de procesamiento IA avanzado que aprende y se adapta automáticamente a las necesidades de tu negocio",
      icon: Brain,
      features: [
        language === "en" ? "Machine Learning" : "Aprendizaje Automático",
        language === "en" ? "Predictive Analytics" : "Análisis Predictivo",
        language === "en" ? "Auto-optimization" : "Auto-optimización",
      ],
      price: language === "en" ? "From $299/month" : "Desde $299/mes",
    },
    {
      name: "Automation Suite",
      description:
        language === "en"
          ? "Complete workflow automation platform that integrates with your existing tools seamlessly"
          : "Plataforma completa de automatización de flujos de trabajo que se integra perfectamente con tus herramientas existentes",
      icon: Zap,
      features: [
        language === "en" ? "Workflow Designer" : "Diseñador de Flujos",
        language === "en" ? "API Integrations" : "Integraciones API",
        language === "en" ? "Real-time Monitoring" : "Monitoreo en Tiempo Real",
      ],
      price: language === "en" ? "From $199/month" : "Desde $199/mes",
    },
    {
      name: "Enterprise Shield",
      description:
        language === "en"
          ? "Enterprise-grade security and compliance features for mission-critical applications"
          : "Características de seguridad y cumplimiento de nivel empresarial para aplicaciones críticas",
      icon: Shield,
      features: [
        language === "en" ? "Data Encryption" : "Cifrado de Datos",
        language === "en" ? "Compliance Monitoring" : "Monitoreo de Cumplimiento",
        language === "en" ? "Access Controls" : "Controles de Acceso",
      ],
      price: language === "en" ? "Custom Pricing" : "Precio Personalizado",
    },
  ]

  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="bg-black text-white border-0 text-lg px-8 py-3 rounded-full mb-6">
            {language === "en" ? "Our Products" : "Nuestros Productos"}
          </Badge>
          <h2 className="text-5xl font-light text-black mb-6">
            {language === "en" ? "AI Solutions for Every Business" : "Soluciones IA para Cada Negocio"}
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
            {language === "en"
              ? "Comprehensive suite of AI tools designed to transform your business operations"
              : "Suite completa de herramientas IA diseñadas para transformar las operaciones de tu negocio"}
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white border-gray-200 hover:shadow-lg transition-all duration-300 h-full group">
                <CardContent className="p-8">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gray-100 group-hover:bg-black rounded-2xl p-4 mb-6 transition-all duration-300">
                    <product.icon className="w-full h-full text-black group-hover:text-white transition-all duration-300" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-black mb-4">{product.name}</h3>
                  <p className="text-gray-600 font-light leading-relaxed mb-6">{product.description}</p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-500 font-light flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Price */}
                  <div className="text-black font-semibold text-lg mb-6">{product.price}</div>

                  {/* CTA */}
                  <Button
                    variant="outline"
                    className="w-full border-black text-black hover:bg-black hover:text-white bg-transparent"
                  >
                    {language === "en" ? "Learn More" : "Saber Más"}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-black rounded-2xl p-12">
            <h3 className="text-3xl font-light text-white mb-6">
              {language === "en" ? "Ready to Transform Your Business?" : "¿Listo para Transformar tu Negocio?"}
            </h3>
            <p className="text-gray-300 font-light text-lg mb-8 max-w-2xl mx-auto">
              {language === "en"
                ? "Get started with our AI solutions today and see the difference in your operations"
                : "Comienza con nuestras soluciones IA hoy y ve la diferencia en tus operaciones"}
            </p>
            <Button size="lg" className="bg-white text-black hover:bg-gray-100">
              {language === "en" ? "Start Free Trial" : "Iniciar Prueba Gratuita"}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
