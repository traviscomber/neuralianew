"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "How quickly can I deploy my first AI agent?",
    answer:
      "With our no-code builder, you can have a basic AI agent up and running in under 30 minutes. More complex agents with custom workflows typically take 2-4 hours to configure and deploy.",
  },
  {
    question: "What types of data sources can I connect?",
    answer:
      "Neuralia supports virtually any data source including databases (SQL, NoSQL), APIs (REST, GraphQL), file uploads (CSV, JSON, PDF), cloud storage (AWS S3, Google Drive), and real-time streams. Our platform automatically handles data formatting and integration.",
  },
  {
    question: "Is my data secure and private?",
    answer:
      "Absolutely. We use bank-level encryption (AES-256), are SOC 2 Type II certified, and offer on-premise deployment options. Your data never leaves your control, and we provide detailed audit logs for compliance requirements.",
  },
  {
    question: "Can I customize the AI agent's personality and responses?",
    answer:
      "Yes! You have full control over your agent's personality, tone, response style, and behavior. You can define custom prompts, set conversation flows, and even upload your own training data to make the agent uniquely yours.",
  },
  {
    question: "What's included in the pricing plans?",
    answer:
      "Our Starter plan includes 1,000 conversations/month, basic analytics, and email support. Pro includes 10,000 conversations, advanced analytics, integrations, and priority support. Enterprise offers unlimited conversations, custom features, dedicated support, and on-premise options.",
  },
  {
    question: "How does the AI agent learn and improve over time?",
    answer:
      "Our agents use advanced machine learning to continuously improve from interactions. They learn from successful conversations, user feedback, and correction patterns. You can also manually train them with new examples and monitor their performance through our analytics dashboard.",
  },
  {
    question: "Can I integrate with my existing tools and platforms?",
    answer:
      "Yes! We offer pre-built integrations with popular platforms like Slack, WhatsApp, Shopify, Salesforce, HubSpot, and Zendesk. We also provide APIs and webhooks for custom integrations with any system.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "We offer comprehensive support including detailed documentation, video tutorials, live chat support, and dedicated customer success managers for Enterprise clients. Our team helps with setup, optimization, and ongoing maintenance of your AI agents.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">FAQ</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Frequently asked questions</p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Everything you need to know about building and deploying AI agents with Neuralia.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-sm">
                <CardContent className="p-0">
                  <button
                    className="flex w-full items-center justify-between p-6 text-left"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                    {openIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </button>

                  {openIndex === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
