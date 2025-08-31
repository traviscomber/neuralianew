"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "What makes Neuralia different from other AI platforms?",
    answer:
      "Neuralia is a fullstack ecosystem specifically designed for AI agent development. Unlike generic AI tools, we provide end-to-end solutions including no-code builders, integrated databases, enterprise security, and deployment infrastructure - all copiloted by AI to accelerate your development process.",
  },
  {
    question: "Do I need coding experience to build AI agents?",
    answer:
      "Not at all! Our no-code visual builder allows anyone to create sophisticated AI agents through drag-and-drop interfaces. However, if you're a developer, you also have full access to APIs and custom code integration for advanced use cases.",
  },
  {
    question: "How secure is the Neuralia platform?",
    answer:
      "Security is our top priority. We provide bank-grade encryption, SOC 2 compliance, GDPR compliance, and comprehensive audit trails. All data is encrypted in transit and at rest, with role-based access controls and enterprise-grade security monitoring.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "We offer comprehensive support including 24/7 technical support for enterprise customers, extensive documentation, video tutorials, community forums, and dedicated customer success managers for larger deployments.",
  },
  {
    question: "Can I integrate Neuralia with my existing systems?",
    answer:
      "Neuralia provides robust APIs, webhooks, and pre-built integrations with popular tools like Salesforce, Slack, Microsoft Teams, and hundreds of other platforms. Our integration marketplace is constantly growing.",
  },
  {
    question: "What are the pricing options?",
    answer:
      "We offer flexible pricing tiers including a free tier for getting started, professional plans for growing businesses, and enterprise solutions for large organizations. Pricing is based on usage, number of agents, and features needed.",
  },
  {
    question: "How quickly can I deploy my first AI agent?",
    answer:
      "With our no-code builder, you can have a basic AI agent running in minutes. More complex agents typically take a few hours to a few days, depending on your requirements. Our templates and pre-built components significantly accelerate development.",
  },
  {
    question: "What languages and regions do you support?",
    answer:
      "Neuralia supports over 100 languages and can be deployed globally. We have data centers in North America, Europe, Asia-Pacific, and other regions to ensure low latency and compliance with local data regulations.",
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

        <div className="mx-auto mt-16 max-w-3xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
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
