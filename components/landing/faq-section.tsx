"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "How quickly can I deploy my first AI agent?",
    answer:
      "With our no-code platform, you can have your first AI agent up and running in under 30 minutes. Our visual builder and pre-built templates make it incredibly fast to get started.",
  },
  {
    question: "What types of AI agents can I build?",
    answer:
      "You can build customer service agents, sales assistants, HR recruiters, technical support bots, lead qualification agents, appointment schedulers, and much more. Our platform is flexible enough to handle any conversational use case.",
  },
  {
    question: "Do I need technical knowledge to use Neuralia?",
    answer:
      "Not at all! Our platform is designed for business users. The drag-and-drop interface, visual workflow builder, and pre-built templates mean anyone can create sophisticated AI agents without coding.",
  },
  {
    question: "How does pricing work?",
    answer:
      "We offer flexible pricing based on usage. Start with our free tier that includes 1,000 conversations per month. Paid plans start at $49/month and scale with your needs. Enterprise plans available for large organizations.",
  },
  {
    question: "Can I integrate with my existing systems?",
    answer:
      "Yes! Neuralia connects with over 500+ popular tools including CRM systems, databases, email platforms, messaging apps, and more. Our API also allows custom integrations.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. We use bank-level encryption, are SOC 2 compliant, and follow strict data privacy regulations. Your data is never used to train our models, and you maintain full control over your information.",
  },
  {
    question: "What languages are supported?",
    answer:
      "Our AI agents support over 95 languages and can handle multilingual conversations seamlessly. They can detect the user's language automatically and respond appropriately.",
  },
  {
    question: "How accurate are the AI responses?",
    answer:
      "Our agents achieve 95%+ accuracy rates through advanced training, continuous learning, and human feedback loops. You can also review and improve responses over time to maintain high quality.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Everything you need to know about building AI agents with Neuralia</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="border border-gray-200 hover:border-indigo-300 transition-colors duration-200">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-inset"
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
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
