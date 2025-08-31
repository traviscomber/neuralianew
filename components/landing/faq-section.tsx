"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "How quickly can I deploy my first AI agent?",
    answer:
      "You can have your first AI agent up and running in under 15 minutes. Our platform provides pre-built templates and a simple drag-and-drop interface that makes deployment incredibly fast. Most users complete their first deployment during their initial session.",
  },
  {
    question: "What programming languages and frameworks do you support?",
    answer:
      "Our platform supports all major programming languages including Python, JavaScript, TypeScript, Java, and C#. We provide SDKs and APIs for popular frameworks like React, Vue, Angular, Django, Flask, Express.js, and Spring Boot. You can integrate with any existing tech stack.",
  },
  {
    question: "How does pricing work for different usage levels?",
    answer:
      "We offer flexible pricing based on your usage needs. Start with our free tier that includes 1,000 conversations per month. Our paid plans scale from $29/month for small businesses to enterprise solutions. You only pay for what you use, with no hidden fees or long-term commitments.",
  },
  {
    question: "What security measures are in place to protect my data?",
    answer:
      "Security is our top priority. We use end-to-end encryption, SOC 2 Type II compliance, GDPR compliance, and bank-grade security measures. All data is encrypted at rest and in transit. We offer on-premise deployment options for enterprises with strict security requirements.",
  },
  {
    question: "Can I customize the AI models for my specific industry?",
    answer:
      "Our platform allows you to train custom AI models using your own data. You can fine-tune models for specific industries, use cases, and even company-specific terminology. We provide tools for data preparation, model training, and performance optimization.",
  },
  {
    question: "What kind of analytics and insights do you provide?",
    answer:
      "Our comprehensive analytics dashboard provides real-time metrics including conversation volume, user satisfaction scores, response accuracy, popular topics, and performance trends. You can export data, set up custom alerts, and integrate with your existing business intelligence tools.",
  },
  {
    question: "How do you handle multiple languages and cultural contexts?",
    answer:
      "Our AI agents support over 40 languages with cultural context awareness. The platform automatically detects user language and responds appropriately. You can configure region-specific behaviors, cultural nuances, and local business practices for each market you serve.",
  },
  {
    question: "What support options are available if I need help?",
    answer:
      "We provide 24/7 support through multiple channels including live chat, email, and phone. Enterprise customers get dedicated account managers and priority support. We also offer comprehensive documentation, video tutorials, community forums, and regular webinars.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800 px-4 py-2">❓ Frequently Asked Questions</Badge>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything You Need
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> to Know</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Get answers to the most common questions about our AI agent platform and how it can transform your business.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="overflow-hidden border-2 hover:border-blue-200 transition-all duration-300">
              <button
                className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  )}
                </div>
              </button>

              {openIndex === index && (
                <CardContent className="px-6 pb-6 pt-0">
                  <div className="border-t pt-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
