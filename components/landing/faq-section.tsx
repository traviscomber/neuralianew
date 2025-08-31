"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "How quickly can I build and deploy an AI agent?",
    answer:
      "With Neuralia's no-code builder, you can create a basic AI agent in under 30 minutes. More complex agents with custom integrations typically take 1-3 days. Our templates and pre-built components accelerate development significantly.",
  },
  {
    question: "What AI models does Neuralia support?",
    answer:
      "We support all major language models including GPT-4, Claude, Gemini, and open-source alternatives like Llama. You can also bring your own fine-tuned models or use our model optimization tools to create custom solutions.",
  },
  {
    question: "How does pricing work?",
    answer:
      "We offer flexible pricing based on usage: Free tier for up to 1,000 conversations/month, Pro at $99/month for 10,000 conversations, and Enterprise with custom pricing for unlimited usage. All plans include core features with advanced capabilities in higher tiers.",
  },
  {
    question: "Is my data secure with Neuralia?",
    answer:
      "Absolutely. We're SOC 2 Type II certified with enterprise-grade security. All data is encrypted in transit and at rest, we offer private cloud deployments, and you maintain full control over your data with options for data residency compliance.",
  },
  {
    question: "Can I integrate with my existing systems?",
    answer:
      "Yes! Neuralia offers 100+ pre-built integrations with popular tools like Salesforce, HubSpot, Slack, and more. We also provide REST APIs, webhooks, and custom integration support for any system you need to connect.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "We offer comprehensive support including documentation, video tutorials, community forums, and direct support. Enterprise customers get dedicated success managers, priority support, and custom training sessions.",
  },
  {
    question: "How does Neuralia handle multiple languages?",
    answer:
      "Our platform natively supports 50+ languages with automatic detection and translation capabilities. You can build multilingual agents that seamlessly switch between languages based on user preferences or geographic location.",
  },
  {
    question: "What's the difference between Neuralia and other AI platforms?",
    answer:
      "Neuralia is specifically designed for conversational AI agents with enterprise-grade infrastructure. Unlike general AI tools, we provide specialized features for agent deployment, conversation management, analytics, and scaling that are purpose-built for business applications.",
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
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Frequently asked questions</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Everything you need to know about building and deploying AI agents with Neuralia.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-4xl">
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
