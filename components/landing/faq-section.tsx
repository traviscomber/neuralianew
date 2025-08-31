"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { HelpCircle } from "lucide-react"
import { motion } from "framer-motion"

const faqs = [
  {
    question: "What exactly is 'vibe coding' and how is it different from regular AI?",
    answer:
      "Vibe coding is our proprietary approach that goes beyond traditional AI training. Instead of just processing data, our AI learns your unique communication style, brand personality, cultural nuances, and business context. It's like having an AI that truly 'gets' you - understanding not just what you say, but how you say it and why.",
  },
  {
    question: "How quickly can I deploy a vibe-coded AI agent?",
    answer:
      "Most businesses can have their first vibe-coded AI agent running within 24-48 hours. Our platform learns from your existing content, communication patterns, and brand guidelines to create an AI that matches your vibe from day one. Complex integrations may take 1-2 weeks depending on your requirements.",
  },
  {
    question: "Is my data secure with Neuralia's vibe coding technology?",
    answer:
      "Absolutely. We use enterprise-grade encryption, comply with GDPR, CCPA, and other privacy regulations, and never share your data with third parties. Your unique 'vibe' and business information remain completely private and secure. We also offer on-premise deployment options for maximum security.",
  },
  {
    question: "Can the AI maintain my brand voice across different languages and cultures?",
    answer:
      "Yes! Our vibe coding technology is designed to maintain brand consistency across languages, cultures, and contexts. The AI learns your brand's core personality traits and adapts them appropriately for different audiences while preserving your authentic voice.",
  },
  {
    question: "What kind of ROI can I expect from implementing vibe-coded AI?",
    answer:
      "Our clients typically see 40-60% improvement in customer satisfaction, 50-80% reduction in response times, and 25-40% increase in conversion rates. The exact ROI depends on your use case, but most businesses see positive returns within 2-3 months of implementation.",
  },
  {
    question: "How does the AI handle complex or sensitive situations?",
    answer:
      "Our vibe-coded AI is trained to recognize complex emotional contexts and sensitive situations. It can escalate to human agents when appropriate, provide empathetic responses, and maintain your brand's values even in challenging scenarios. We also provide continuous monitoring and improvement.",
  },
  {
    question: "Can I integrate Neuralia with my existing tools and platforms?",
    answer:
      "Yes, we offer extensive integration capabilities with popular CRM systems, customer support platforms, e-commerce solutions, and communication tools. Our API-first approach ensures seamless integration with your existing tech stack.",
  },
  {
    question: "What support do you provide during implementation and beyond?",
    answer:
      "We provide comprehensive onboarding, training for your team, ongoing optimization, and 24/7 technical support. Our customer success team works closely with you to ensure your AI agents continue to evolve and improve over time.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200">
            <HelpCircle className="mr-1 h-3 w-3" />
            Frequently Asked Questions
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Got{" "}
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Questions?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about vibe coding and how Neuralia can transform your business with AI that
            truly understands your unique style.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg px-6 hover:border-orange-200 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-orange-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pt-2">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our team of vibe coding experts is here to help you understand how AI can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-3 rounded-lg font-medium transition-all">
                Schedule a Call
              </button>
              <button className="border border-gray-300 hover:border-orange-300 text-gray-700 px-8 py-3 rounded-lg font-medium transition-all">
                Contact Support
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
