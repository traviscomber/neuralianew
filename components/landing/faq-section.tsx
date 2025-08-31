"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Zap, HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "What is vibe coding and how does it work?",
    answer:
      "Vibe coding is our revolutionary AI methodology that enables artificial intelligence to understand emotional context, cultural nuances, and human intuition. Unlike traditional AI that processes data mechanically, vibe coding incorporates emotional intelligence, contextual awareness, and cultural sensitivity to create more natural, empathetic, and effective AI interactions. It works by analyzing not just what is said, but how it's said, the cultural context, and the emotional undertones.",
  },
  {
    question: "How is vibe coding different from traditional AI approaches?",
    answer:
      "Traditional AI focuses on pattern recognition and data processing, while vibe coding adds layers of emotional intelligence and contextual understanding. Our AI doesn't just respond to keywords—it understands the feeling behind the message, adapts to cultural contexts, and provides responses that feel naturally human. This results in more meaningful interactions, better user satisfaction, and more effective problem-solving.",
  },
  {
    question: "Which industries can benefit from vibe coding AI?",
    answer:
      "Vibe coding AI is versatile and can transform virtually any industry. We've successfully implemented solutions in environmental monitoring (EcosueloLab), language learning (ParrotfyIA), career coaching, healthcare, education, manufacturing, and enterprise operations. Any field that involves human interaction, decision-making, or complex data interpretation can benefit from our vibe coding approach.",
  },
  {
    question: "How long does it take to implement a vibe coding AI solution?",
    answer:
      "Implementation timelines vary based on complexity and requirements. Simple integrations can be deployed in 2-4 weeks, while comprehensive enterprise solutions typically take 2-3 months. Our vibe coding framework is designed for easy integration with existing systems, and we provide full support throughout the implementation process, including training and ongoing optimization.",
  },
  {
    question: "Is vibe coding AI secure and compliant with data regulations?",
    answer:
      "Absolutely. Security and compliance are built into our vibe coding framework from the ground up. We adhere to GDPR, CCPA, and other major data protection regulations. Our AI processes data with enterprise-grade encryption, and we offer on-premises deployment options for organizations with strict data sovereignty requirements. All vibe coding implementations include comprehensive security audits and compliance documentation.",
  },
  {
    question: "Can vibe coding AI integrate with our existing systems?",
    answer:
      "Yes, our vibe coding framework is designed for seamless integration. We provide APIs, SDKs, and pre-built connectors for popular platforms. Whether you're using CRM systems, databases, cloud platforms, or custom applications, our vibe coding AI can integrate without disrupting your existing workflows. We also offer custom integration services for unique requirements.",
  },
  {
    question: "What kind of support do you provide for vibe coding implementations?",
    answer:
      "We provide comprehensive support including initial consultation, custom development, implementation assistance, training, and ongoing optimization. Our vibe coding experts work closely with your team to ensure successful deployment and maximum value realization. We also offer 24/7 technical support, regular performance reviews, and continuous improvement recommendations.",
  },
  {
    question: "How do you measure the success of vibe coding AI implementations?",
    answer:
      "We track multiple metrics including user satisfaction, engagement rates, task completion efficiency, accuracy improvements, and business impact metrics specific to your use case. For example, EcosueloLab clients see 40% better prediction accuracy, ParrotfyIA users achieve 3x faster learning, and enterprise clients report 60% efficiency gains. We provide detailed analytics dashboards and regular performance reports.",
  },
  {
    question: "What makes Neuralia's vibe coding approach unique?",
    answer:
      "Our vibe coding methodology is the result of years of research in emotional AI, cultural psychology, and human-computer interaction. We're the only company that combines emotional intelligence, cultural awareness, and contextual understanding in a single AI framework. Our team includes experts in psychology, linguistics, and AI, ensuring our solutions truly understand the human experience, not just data patterns.",
  },
  {
    question: "How do I get started with vibe coding AI for my organization?",
    answer:
      "Getting started is easy! Contact us for a free consultation where we'll assess your needs and demonstrate how vibe coding can benefit your specific use case. We'll provide a customized proposal, timeline, and ROI projections. Many clients start with a pilot project to experience the vibe coding difference before scaling to full implementation. Our team will guide you through every step of the journey.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-orange-600/20 text-orange-400 border-orange-600/30">
            <HelpCircle className="h-3 w-3 mr-1" />
            Vibe Coding FAQ
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Frequently Asked Questions About <span className="gradient-text">Vibe Coding</span>
          </h2>
          <p className="text-xl text-gray-300">
            Everything you need to know about our revolutionary vibe coding AI methodology and how it can transform your
            organization.
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
                className="bg-slate-800/50 border-slate-700 rounded-lg px-6"
              >
                <AccordionTrigger className="text-white hover:text-blue-400 text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-blue-600/30 rounded-lg p-8">
            <Zap className="h-12 w-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Still Have Questions About Vibe Coding?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our vibe coding experts are here to help. Get personalized answers about how our AI methodology can
              transform your specific use case.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Schedule a Consultation
              </button>
              <button className="border border-gray-600 text-gray-300 hover:bg-gray-800 px-6 py-3 rounded-lg font-medium transition-colors">
                Contact Our Team
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
