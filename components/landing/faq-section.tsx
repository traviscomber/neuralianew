"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How are AI executives different from AI assistants?",
    answer:
      "AI executives don't just provide recommendations - they make autonomous decisions, execute strategies, and manage complex workflows. They think strategically and act independently within defined parameters.",
  },
  {
    question: "What kind of decisions can AI executives make?",
    answer:
      "Our AI executives can handle strategic planning, resource allocation, market analysis, operational decisions, and complex problem-solving that typically requires C-level thinking.",
  },
  {
    question: "How do you ensure AI decisions align with company goals?",
    answer:
      "Each AI executive is trained on your company's values, goals, and decision-making frameworks. They operate within defined guardrails and provide full transparency on their reasoning.",
  },
  {
    question: "Is my data secure with Neuralia?",
    answer:
      "Yes, we use enterprise-grade security with end-to-end encryption, SOC 2 compliance, and data sovereignty options. Your data never leaves your designated regions.",
  },
  {
    question: "How quickly can I deploy an AI executive?",
    answer:
      "Most AI executives can be deployed within 24-48 hours. Complex customizations may take up to a week, but basic deployment is nearly instantaneous.",
  },
]

export function FAQSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Everything you need to know about AI executives</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-300">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
