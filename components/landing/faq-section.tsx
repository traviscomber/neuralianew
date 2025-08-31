"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is vibe coding and how is it different from traditional AI development?",
    answer:
      "Vibe coding is our intuitive approach to AI development that focuses on capturing the essence, personality, and emotional intelligence of human interactions. Unlike traditional rule-based systems, vibe coding allows you to define how your AI should 'feel' and respond, creating more natural and engaging conversations.",
  },
  {
    question: "How quickly can I deploy an AI agent using Neuralia?",
    answer:
      "With our vibe coding framework, you can have a basic AI agent running in minutes. More complex agents with custom personalities and specialized knowledge can be deployed within hours, not weeks. Our platform handles all the technical infrastructure, so you focus on defining the vibe and behavior.",
  },
  {
    question: "What languages and platforms does Neuralia support?",
    answer:
      "Neuralia supports 50+ languages with native cultural context understanding. You can deploy across web, mobile apps, WhatsApp, Telegram, Slack, and other messaging platforms. Our API also integrates with existing systems and custom applications.",
  },
  {
    question: "How does the pricing work for Neuralia's vibe coding platform?",
    answer:
      "We offer flexible pricing based on usage and features. Start with our free tier to experiment with vibe coding, then scale with pay-per-conversation or monthly plans. Enterprise customers get custom pricing with dedicated support and advanced features.",
  },
  {
    question: "Is my data secure with Neuralia?",
    answer:
      "Absolutely. We use bank-level encryption, comply with GDPR, HIPAA, and other privacy standards. Your data is never used to train our models without explicit permission. We offer on-premise deployment options for maximum security control.",
  },
  {
    question: "Can I integrate Neuralia with my existing systems?",
    answer:
      "Yes! Neuralia provides robust APIs, webhooks, and pre-built integrations with popular CRM, helpdesk, and business systems. Our technical team can help with custom integrations to ensure seamless workflow integration.",
  },
  {
    question: "What kind of support and training do you provide?",
    answer:
      "We provide comprehensive onboarding, documentation, video tutorials, and live training sessions. Our support team includes vibe coding specialists who can help you design the perfect AI personality for your use case. Enterprise customers get dedicated success managers.",
  },
  {
    question: "How do I measure the success of my AI agents?",
    answer:
      "Neuralia provides detailed analytics including conversation quality scores, user satisfaction metrics, resolution rates, and engagement patterns. You can track how well your AI maintains the intended vibe and continuously improve based on real user interactions.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about vibe coding and building intelligent AI agents with Neuralia.
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
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg border-0 shadow-sm">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
            <p className="text-gray-600 mb-6">
              Our vibe coding experts are here to help you get started with building intelligent AI agents that truly
              understand your users.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Contact Support
              </button>
              <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
