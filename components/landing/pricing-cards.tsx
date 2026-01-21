"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/lib/language-context"
import { Check, ArrowRight } from "lucide-react"

export function PricingCards() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Simple, Transparent Pricing",
      subtitle: "Choose the plan that fits your needs",
      plans: [
        {
          name: "Starter",
          description: "Perfect for teams getting started",
          price: "Custom",
          features: ["Up to 3 AI agents", "WhatsApp integration", "Basic analytics", "Email support", "1 environment"],
          cta: "Start Free Trial",
          highlighted: false,
        },
        {
          name: "Professional",
          description: "For growing businesses",
          price: "Custom",
          features: [
            "Unlimited AI agents",
            "All channels (WhatsApp, Telegram, Web)",
            "Advanced analytics",
            "Priority support (24h)",
            "3 environments",
            "Custom integrations",
            "Vector database",
          ],
          cta: "Schedule Demo",
          highlighted: true,
          badge: "Most Popular",
        },
        {
          name: "Enterprise",
          description: "For large organizations",
          price: "Custom",
          features: [
            "Everything in Professional",
            "Dedicated support team",
            "SLA guarantee",
            "Custom development",
            "On-premises option",
            "Advanced security",
            "Compliance certifications",
          ],
          cta: "Contact Sales",
          highlighted: false,
        },
      ],
    },
    es: {
      title: "Precios Simples y Transparentes",
      subtitle: "Elige el plan que se ajuste a tus necesidades",
      plans: [
        {
          name: "Inicio",
          description: "Perfecto para equipos que comienzan",
          price: "Personalizado",
          features: [
            "Hasta 3 agentes de IA",
            "Integración WhatsApp",
            "Análisis básico",
            "Soporte por email",
            "1 ambiente",
          ],
          cta: "Comenzar Prueba Gratis",
          highlighted: false,
        },
        {
          name: "Profesional",
          description: "Para negocios en crecimiento",
          price: "Personalizado",
          features: [
            "Agentes de IA ilimitados",
            "Todos los canales (WhatsApp, Telegram, Web)",
            "Análisis avanzado",
            "Soporte prioritario (24h)",
            "3 ambientes",
            "Integraciones personalizadas",
            "Base de datos vectorial",
          ],
          cta: "Agendar Demo",
          highlighted: true,
          badge: "Más Popular",
        },
        {
          name: "Empresa",
          description: "Para organizaciones grandes",
          price: "Personalizado",
          features: [
            "Todo en Profesional",
            "Equipo de soporte dedicado",
            "Garantía SLA",
            "Desarrollo personalizado",
            "Opción on-premises",
            "Seguridad avanzada",
            "Certificaciones de cumplimiento",
          ],
          cta: "Contactar Ventas",
          highlighted: false,
        },
      ],
    },
  }

  const t = content[language]
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="h2 text-foreground mb-4">{t.title}</h2>
        <p className="body text-muted-foreground">{t.subtitle}</p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {t.plans.map((plan, i) => (
          <motion.div key={i} variants={itemVariants} className={plan.highlighted ? "md:scale-105" : ""}>
            <Card
              className={`h-full flex flex-col ${plan.highlighted ? "border-primary shadow-lg" : "border-border"}`}
            >
              <CardHeader>
                {plan.badge && <Badge className="w-fit mb-3 bg-primary text-primary-foreground">{plan.badge}</Badge>}
                <CardTitle className="text-2xl text-foreground">{plan.name}</CardTitle>
                <CardDescription className="text-muted-foreground">{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${plan.highlighted ? "bg-primary text-primary-foreground hover:bg-primary/90" : ""}`}
                  variant={plan.highlighted ? "default" : "outline"}
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
