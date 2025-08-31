"use client"

import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "How fast can I deploy?",
      answer:
        "Most customers are up and running in under 30 minutes. Our vibe coding approach makes setup incredibly simple.",
    },
    {
      question: "Do I need technical skills?",
      answer: "No coding required. Our platform is designed for everyone, from beginners to experts.",
    },
    {
      question: "What makes Neuralia different?",
      answer: "We focus on results, not complexity. Our AI agents actually work in real business scenarios.",
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We use enterprise-grade security and never share your data with third parties.",
    },
    {
      question: "Can I customize the AI?",
      answer:
        "Yes, our platform allows full customization while maintaining simplicity through our vibe coding framework.",
    },
    {
      question: "What support do you offer?",
      answer: "We provide 24/7 support, comprehensive documentation, and a community of users to help you succeed.",
    },
  ]

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            FAQ
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Common questions</h2>
          <p className="text-xl text-gray-600">Everything you need to know</p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
