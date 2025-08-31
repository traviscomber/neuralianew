"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Sparkles } from "lucide-react"

const faqs = [
  {
    question: "What is vibe coding and how does it work?",
    answer:
      "Vibe coding is Neuralia's revolutionary approach to AI development that combines traditional programming with emotional intelligence and contextual understanding. It allows AI systems to interpret not just what users say, but how they feel and what they really need, creating more human-like and effective interactions.",
  },
  {
    question: "How quickly can I deploy AI agents with vibe coding?",
    answer:
      "With our vibe coding platform, you can deploy basic AI agents in minutes and fully customized solutions within days. Our pre-built templates and intuitive interface make it incredibly fast to go from concept to production, while our vibe coding technology ensures your agents understand context from day one.",
  },
  {
    question: "Is vibe coding suitable for my industry?",
    answer:
      "Vibe coding technology adapts to any industry - from healthcare and education to retail and finance. Our AI agents learn your industry's specific language, regulations, and customer expectations, making them effective regardless of your business sector.",
  },
  {
    question: "How does vibe coding improve customer satisfaction?",
    answer:
      "Vibe coding enables AI to understand emotional context, tone, and underlying needs in customer interactions. This means more empathetic responses, better problem resolution, and customers who feel truly understood. Our clients typically see 40-60% improvements in satisfaction scores.",
  },
  {
    question: "What kind of support do you provide for vibe coding implementation?",
    answer:
      "We provide comprehensive support including 24/7 technical assistance, dedicated success managers, training sessions, and ongoing optimization. Our team of vibe coding experts ensures your AI agents continuously improve and adapt to your business needs.",
  },
  {
    question: "Can vibe coding integrate with my existing systems?",
    answer:
      "Yes! Our vibe coding platform is designed for seamless integration with popular CRMs, help desks, e-commerce platforms, and custom systems. We provide APIs, webhooks, and pre-built connectors to ensure smooth integration with your existing workflow.",
  },
  {
    question: "How secure is the vibe coding platform?",
    answer:
      "Security is paramount in our vibe coding architecture. We use enterprise-grade encryption, comply with GDPR and SOC 2 standards, and provide detailed audit logs. Your data and your customers' information are protected with bank-level security measures.",
  },
  {
    question: "What makes vibe coding different from other AI solutions?",
    answer:
      "Unlike traditional AI that focuses purely on data processing, vibe coding incorporates emotional intelligence, contextual understanding, and adaptive learning. This creates AI agents that don't just respond to queries but truly understand and connect with users on a human level.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            <Sparkles className="h-4 w-4 mr-2" />
            Frequently Asked Questions
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need to Know About <span className="gradient-text">Vibe Coding</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Get answers to common questions about our vibe coding technology, implementation process, and how it can
            transform your business.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border rounded-lg px-6 bg-white/80 backdrop-blur-sm"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="p-8 bg-primary/10 rounded-2xl border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">Still have questions about vibe coding?</h3>
            <p className="text-muted-foreground mb-6">
              Our team of vibe coding experts is here to help you understand how our technology can transform your
              business operations and customer experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                Schedule a Demo
              </button>
              <button className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors">
                Contact Support
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
