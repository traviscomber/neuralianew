"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Code2,
  Brain,
  Shield,
  Zap,
  HeadphonesIcon,
  ArrowRight,
  CheckCircle,
  MessageCircle,
  Database,
} from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function FeaturesSection() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Code2,
      title: t("features.fullstack.title"),
      description: t("features.fullstack.description"),
      details: [
        "React, Next.js, TypeScript",
        "Node.js, Python, PostgreSQL",
        "AWS, Docker, Kubernetes",
        "CI/CD, Monitoring, Analytics",
      ],
      category: "Development",
    },
    {
      icon: Brain,
      title: t("features.ai.title"),
      description: t("features.ai.description"),
      details: [
        "OpenAI GPT-4 Turbo Integration",
        "Custom Fine-tuned Models",
        "Natural Language Processing",
        "Sentiment Analysis & Intent Recognition",
      ],
      category: "AI/ML",
    },
    {
      icon: Database,
      title: t("features.scalable.title"),
      description: t("features.scalable.description"),
      details: [
        "Microservices Architecture",
        "Auto-scaling Infrastructure",
        "Load Balancing & CDN",
        "99.9% Uptime SLA",
      ],
      category: "Architecture",
    },
    {
      icon: Shield,
      title: t("features.security.title"),
      description: t("features.security.description"),
      details: ["ISO 27001 Certified", "SOC 2 Type II Compliance", "End-to-end Encryption", "GDPR & LOPD Compliant"],
      category: "Security",
    },
    {
      icon: Zap,
      title: t("features.integration.title"),
      description: t("features.integration.description"),
      details: [
        "WhatsApp Business API",
        "CRM/ERP Native Integration",
        "REST APIs & Webhooks",
        "Zapier & n8n Connectors",
      ],
      category: "Integration",
    },
    {
      icon: HeadphonesIcon,
      title: t("features.support.title"),
      description: t("features.support.description"),
      details: [
        "15-minute SLA for Critical Issues",
        "Multi-timezone Coverage",
        "Technical Documentation",
        "Training & Onboarding",
      ],
      category: "Support",
    },
  ]

  return (
    <section
      id="features"
      className="py-16 sm:py-20 lg:py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <Badge className="mb-4 sm:mb-6 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 text-sm sm:text-lg px-4 sm:px-6 py-2 font-semibold transition-colors duration-300">
            <Zap className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            {t("features.title")}
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 text-slate-900 dark:text-white tracking-tight transition-colors duration-300">
            {t("features.title")}
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed transition-colors duration-300">
            {t("features.subtitle")}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 group h-full rounded-2xl">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-slate-900 dark:bg-slate-700 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <Badge className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-600 font-semibold transition-colors duration-300 text-xs sm:text-sm">
                      {feature.category}
                    </Badge>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 sm:mb-6 text-base sm:text-lg transition-colors duration-300">
                    {feature.description}
                  </p>

                  <div className="space-y-2 sm:space-y-3">
                    {feature.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 dark:text-green-400 flex-shrink-0 mt-0.5 transition-colors duration-300" />
                        <span className="text-slate-600 dark:text-slate-300 font-medium text-xs sm:text-sm transition-colors duration-300">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Performance Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <Card className="bg-slate-900 dark:bg-slate-800 text-white border-0 rounded-2xl transition-colors duration-300">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center">Performance Metrics</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
                <div className="text-center">
                  <div className="text-2xl sm:text-4xl font-black mb-1 sm:mb-2">99.9%</div>
                  <div className="text-slate-300 font-semibold text-xs sm:text-base">Uptime SLA</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-4xl font-black mb-1 sm:mb-2">{"<200ms"}</div>
                  <div className="text-slate-300 font-semibold text-xs sm:text-base">API Latency</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-4xl font-black mb-1 sm:mb-2">100K+</div>
                  <div className="text-slate-300 font-semibold text-xs sm:text-base">Concurrent Users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-4xl font-black mb-1 sm:mb-2">24/7</div>
                  <div className="text-slate-300 font-semibold text-xs sm:text-base">Global Support</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-slate-900 dark:bg-slate-700 hover:bg-slate-800 dark:hover:bg-slate-600 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 rounded-xl w-full sm:w-auto"
            asChild
          >
            <a
              href="https://wa.me/56940946660?text=Hola%20N3uralia%2C%20quiero%20conocer%20más%20sobre%20sus%20capacidades%20empresariales"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              {t("nav.contact.button")}
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
