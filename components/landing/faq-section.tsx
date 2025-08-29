"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How quickly can I deploy an AI agent?",
    answer:
      "Most AI agents can be deployed in under 10 minutes. Our streamlined process guides you through configuration, testing, and deployment with minimal setup required.",
  },
  {
    question: "What types of AI agents are available?",
    answer:
      "We offer a wide variety of AI agents including customer service bots, data analysis agents, content generators, scheduling assistants, and custom agents tailored to your specific needs.",
  },
  {
    question: "Is my data secure with Neuralia?",
    answer:
      "Absolutely. We use enterprise-grade security with end-to-end encryption, SOC 2 compliance, and regular security audits. Your data never leaves our secure infrastructure.",
  },
  {
    question: "Can I customize the AI agents?",
    answer:
      "Yes! All our AI agents are highly customizable. You can modify their behavior, integrate with your existing systems, and train them on your specific data and processes.",
  },
  {
    question: "What support do you provide?",
    answer:
      "We offer 24/7 technical support, comprehensive documentation, video tutorials, and dedicated account managers for enterprise customers.",
  },
]

export function FAQSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked
            <span className="text-blue-600 dark:text-blue-400"> Questions</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Everything you need to know about deploying AI agents
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
