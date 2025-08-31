"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "What makes Neuralia different from other AI platforms?",
    answer:
      "Neuralia offers a complete fullstack ecosystem that's copiloted by AI. Unlike other platforms that focus on single aspects, we provide everything from development tools to deployment infrastructure, all optimized for AI agent creation. Our no-code builder, integrated database, and real-time analytics make it the most comprehensive solution available.",
  },
  {
    question: "Do I need programming experience to build AI agents?",
    answer:
      "Not at all! Our no-code visual builder allows anyone to create sophisticated AI agents without writing code. However, if you are a developer, you also have full access to APIs and advanced customization options. The platform scales with your technical expertise.",
  },
  {
    question: "How quickly can I deploy my first AI agent?",
    answer:
      "Most users deploy their first agent within hours, not days. Our templates and guided setup process help you get started immediately. For more complex agents, you can typically go from concept to production in just a few days.",
  },
  {
    question: "What kind of support and training do you provide?",
    answer:
      "We offer comprehensive support including documentation, video tutorials, live training sessions, and dedicated customer success managers for enterprise clients. Our community forum and AI-powered help system ensure you get answers quickly.",
  },
  {
    question: "Is my data secure with Neuralia?",
    answer:
      "Absolutely. We implement bank-grade security with end-to-end encryption, SOC 2 compliance, and regular security audits. Your data is stored in secure, isolated environments with full audit trails. We never use your data to train our models without explicit permission.",
  },
  {
    question: "Can I integrate Neuralia with my existing systems?",
    answer:
      "Yes! Neuralia provides robust APIs and pre-built integrations with popular tools like Slack, Microsoft Teams, Salesforce, and hundreds of other platforms. Our webhook system and custom API endpoints make integration seamless.",
  },
  {
    question: "What pricing plans do you offer?",
    answer:
      "We offer flexible pricing from a free tier for individuals to enterprise plans for large organizations. Pricing is based on usage, number of agents, and features needed. Contact our sales team for custom enterprise pricing and volume discounts.",
  },
  {
    question: "How do you handle scaling and performance?",
    answer:
      "Our platform is built on cloud-native infrastructure that automatically scales with your needs. We guarantee 99.9% uptime and can handle millions of interactions per day. Real-time processing and intelligent caching ensure lightning-fast response times even under heavy load.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Frequently Asked Questions</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Everything you need to know about building AI agents with Neuralia.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <button
                    className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => toggleFAQ(index)}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                      {openIndex === index ? (
                        <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                      )}
                    </div>
                  </button>

                  {openIndex === index && (
                    <div className="px-6 pb-4">
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
