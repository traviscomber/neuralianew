"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How long does it take to develop a custom AI solution?",
    answer:
      "Timeline varies based on complexity, but most projects are completed within 4-12 weeks. We provide detailed project timelines during our initial consultation.",
  },
  {
    question: "Do you work with existing data and systems?",
    answer:
      "Yes, we specialize in integrating with existing infrastructure. We can work with your current databases, APIs, and systems to ensure seamless integration.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We work across all industries including healthcare, finance, e-commerce, manufacturing, and more. Our solutions are tailored to meet industry-specific requirements and compliance standards.",
  },
  {
    question: "How do you ensure data security and privacy?",
    answer:
      "We implement enterprise-grade security measures including encryption, secure data handling, and compliance with regulations like GDPR, HIPAA, and SOC 2.",
  },
  {
    question: "What kind of ongoing support do you provide?",
    answer:
      "We offer comprehensive support including monitoring, maintenance, updates, and scaling assistance. Our team is available 24/7 for critical issues.",
  },
]

export function FAQSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about our AI development services.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
