"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "How quickly can I deploy my first AI agent?",
    answer:
      "Most users deploy their first AI agent within 30 minutes using our no-code builder. For more complex integrations, it typically takes 1-2 hours. Our templates and pre-built components make the process incredibly fast.",
  },
  {
    question: "What AI models do you support?",
    answer:
      "We support all major AI models including GPT-4, GPT-3.5, Claude, PaLM, and custom fine-tuned models. You can switch between models or use multiple models within the same agent based on your specific needs.",
  },
  {
    question: "Can I integrate with my existing systems?",
    answer:
      "We offer 500+ pre-built integrations including CRMs (Salesforce, HubSpot), databases (PostgreSQL, MongoDB), communication platforms (Slack, Teams), and APIs. Custom integrations are also supported.",
  },
  {
    question: "How do you ensure data security and privacy?",
    answer:
      "We implement bank-level security with end-to-end encryption, SOC2 Type II compliance, GDPR compliance, and regular security audits. Your data is never used to train AI models, and you maintain full control over data retention and deletion.",
  },
  {
    question: "What's included in the free plan?",
    answer:
      "The free plan includes 1,000 monthly conversations, access to GPT-3.5, basic integrations, and community support. It's perfect for testing and small projects. Paid plans start at $29/month with advanced features and higher limits.",
  },
  {
    question: "Can AI agents handle multiple languages?",
    answer:
      "Yes! Our AI agents support 95+ languages with native understanding and response capabilities. You can build multilingual agents that automatically detect and respond in the user's preferred language.",
  },
  {
    question: "How do you handle high-volume conversations?",
    answer:
      "Our infrastructure auto-scales to handle millions of concurrent conversations. We use distributed computing, intelligent load balancing, and edge computing to ensure sub-second response times even during peak usage.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "We offer 24/7 support via chat, email, and phone for paid plans. Free users get community support and documentation access. Enterprise customers receive dedicated success managers and priority support.",
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
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Everything you need to know about building and deploying AI agents with Neuralia.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
