"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { HelpCircle } from "lucide-react"

export function FAQSection() {
  const faqs = [
    {
      question: "What makes Neuralia different?",
      answer: "We build AI agents that actually work. Simple setup, smart results, no complexity.",
    },
    {
      question: "How fast can I get started?",
      answer: "Most agents deploy in 1-2 weeks. Custom solutions take 4-8 weeks max.",
    },
    {
      question: "What technology do you use?",
      answer: "Latest AI models (GPT-4+), our own vibe coding framework, and enterprise security.",
    },
    {
      question: "Is it secure?",
      answer: "Yes. Enterprise-grade security, GDPR compliant, with optional on-premise deployment.",
    },
    {
      question: "What's the ROI?",
      answer: "Average 300% ROI in first year. 70% faster responses, 80% automation rate.",
    },
    {
      question: "Do you provide support?",
      answer: "24/7 technical support, dedicated success manager, and continuous optimization.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
            <HelpCircle className="w-3 h-3 mr-1" />
            FAQ
          </Badge>
          <h2 className="text-4xl font-bold mb-6">
            <span className="gradient-text">Quick Answers</span>
          </h2>
          <p className="text-xl text-gray-600">Everything you need to know</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6 font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-gray-700">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600">Contact Us</Button>
            <Button variant="outline">Book Demo</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
